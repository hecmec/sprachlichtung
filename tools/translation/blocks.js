/*
 * blocks.js — the foundation of the translation tooling.
 *
 * Single source of truth for:
 *   - what a "block" is (the unit of translation tracking),
 *   - its stable content hash (the `src` value in anchors),
 *   - the `<!--t src=… by=… on=…-->` anchor format (parse + format),
 *   - aligning a German block sequence against a translated file's anchors.
 *
 * verify_translation, translate_plan and translate_apply ALL go through here,
 * so they can never disagree about block boundaries or hashes. See the strategy
 * in docs/_myDocs/translate-jpe.md (§3 block model, §4 anchors).
 */

'use strict';

const crypto = require('crypto');

// HTML/JSX block-level tags that may legitimately span blank lines. Used to
// keep such an element in a single block. Extend as the docs grow.
const HTML_BLOCK_TAGS = [
  'details', 'summary', 'figure', 'div', 'table', 'BrowserWindow',
  'IntroTopicBox', 'HomepageFeatures', 'Tabs', 'TabItem',
];

/**
 * Split a markdown body (frontmatter already removed) into ordered raw blocks.
 * Blocks are separated by blank lines, EXCEPT these stay atomic even when they
 * contain blank lines: fenced code, admonitions (:::…:::), multi-line HTML
 * comments, and whitelisted HTML/JSX block elements.
 *
 * @param {string} body
 * @returns {string[]} raw block texts in document order
 */
function splitBlocks(body) {
  const lines = String(body).replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let cur = [];

  let inFence = false;       // inside ``` / ~~~
  let inAdmonition = false;  // inside :::…:::
  let inComment = false;     // inside a multi-line <!-- … -->
  let htmlWait = null;       // closing tag we're waiting for, e.g. "</details>"

  const flush = () => {
    if (cur.length) {
      const text = cur.join('\n');
      if (text.trim() !== '') blocks.push(text);
      cur = [];
    }
  };

  const suspended = () => inFence || inAdmonition || inComment || htmlWait;

  for (const line of lines) {
    if (!suspended() && line.trim() === '') {
      flush();
      continue;
    }

    if (!suspended()) {
      // Decide whether this line opens an atomic construct.
      if (/^\s*(```+|~~~+)/.test(line)) {
        inFence = true;
      } else if (/^:::[A-Za-z]/.test(line.trim())) {
        inAdmonition = true;
      } else if (line.includes('<!--') && !line.includes('-->')) {
        inComment = true;
      } else {
        htmlWait = matchHtmlBlockOpen(line);
      }
    }

    cur.push(line);

    // Decide whether this line closes the atomic construct it is part of.
    if (inFence) {
      if (cur.length > 1 && /^\s*(```+|~~~+)\s*$/.test(line)) {
        inFence = false;
        flush();
      }
    } else if (inAdmonition) {
      if (cur.length > 1 && line.trim() === ':::') {
        inAdmonition = false;
        flush();
      }
    } else if (inComment) {
      if (line.includes('-->')) {
        inComment = false;
        // a comment may be a standalone block or a prefix to following text;
        // do NOT flush here — let a following blank line end the block.
      }
    } else if (htmlWait) {
      if (line.includes(htmlWait)) {
        htmlWait = null;
      }
    }
  }
  flush();
  return blocks;
}

function matchHtmlBlockOpen(line) {
  // Any capitalized JSX component (e.g. <Admonition …>, <Tabs>, <BrowserWindow>)
  // that does not close on the same line must stay atomic, so anchors are never
  // injected between its open and close tags (that would break MDX/JSX).
  const comp = line.match(/<([A-Z][A-Za-z0-9]*)(\s|>|\/|$)/);
  if (comp) {
    const closeTag = `</${comp[1]}>`;
    if (line.includes(closeTag) || /\/>\s*$/.test(line)) return null;
    return closeTag;
  }
  for (const tag of HTML_BLOCK_TAGS) {
    const openRe = new RegExp(`<${tag}(\\s|>|/|$)`);
    if (openRe.test(line)) {
      const closeTag = `</${tag}>`;
      // balanced on the same line (open+close, or self-closing) → not multi-line
      if (line.includes(closeTag) || /\/>\s*$/.test(line)) return null;
      return closeTag;
    }
  }
  return null;
}

/**
 * Normalize a block for hashing: strip trailing whitespace per line, drop
 * leading/trailing blank lines. MUST match the documented algorithm so hashes
 * are reproducible across tools and over time.
 */
function normalizeBlock(text) {
  return String(text)
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.replace(/[ \t]+$/, ''))
    .join('\n')
    .replace(/^\n+/, '')
    .replace(/\n+$/, '');
}

/** First 8 hex chars of the SHA-1 of the normalized block. */
function hashBlock(text) {
  return crypto
    .createHash('sha1')
    .update(normalizeBlock(text), 'utf8')
    .digest('hex')
    .slice(0, 8);
}

/** Coarse classification, for human/job output only (not used for tracking). */
function blockType(text) {
  const t = normalizeBlock(text);
  if (/^#{1,6}\s/.test(t)) return 'heading';
  if (/^\s*(```+|~~~+)/.test(t)) return 'code';
  if (/^:::[A-Za-z]/.test(t)) return 'admonition';
  if (/^\s*\|/.test(t) || /\n\s*\|/.test(t)) return 'table';
  if (/^</.test(t)) return 'html';
  return 'paragraph';
}

// ── Anchors ────────────────────────────────────────────────────────────────

const ANCHOR_RE = /^<!--t\s+(.+?)\s*-->$/;

/** Parse `src=… by="…" on=… overwritten_on=…` into an attribute object. */
function parseAnchorAttrs(inner) {
  const attrs = {};
  const re = /(\w+)=(?:"([^"]*)"|(\S+))/g;
  let m;
  while ((m = re.exec(inner))) {
    attrs[m[1]] = m[2] !== undefined ? m[2] : m[3];
  }
  return attrs;
}

/** Build an anchor comment line from attributes (stable key order). */
function formatAnchor(attrs) {
  const parts = ['t'];
  if (attrs.src) parts.push(`src=${attrs.src}`);
  if (attrs.by) parts.push(`by="${attrs.by}"`);
  if (attrs.on) parts.push(`on=${attrs.on}`);
  if (attrs.overwritten_on) parts.push(`overwritten_on=${attrs.overwritten_on}`);
  return `<!--${parts.join(' ')}-->`;
}

/**
 * Parse a German source body into tracked blocks: { src, type, text }.
 */
function sourceBlocks(body) {
  return splitBlocks(body).map((text) => ({
    src: hashBlock(text),
    type: blockType(text),
    text,
  }));
}

/**
 * Parse a translated body into anchored blocks.
 * Each item: { src|null, by, on, overwritten_on, protected, text, raw }.
 * `text` is the block WITHOUT its leading anchor line; `raw` is the full block
 * (anchor + text) so it can be reused verbatim when unchanged.
 */
function translatedBlocks(body) {
  const parsed = splitBlocks(body).map((raw) => {
    const lines = raw.split('\n');
    const m = lines[0].trim().match(ANCHOR_RE);
    if (m) {
      const attrs = parseAnchorAttrs(m[1]);
      return {
        src: attrs.src || null,
        by: attrs.by,
        on: attrs.on,
        overwritten_on: attrs.overwritten_on,
        protected: !!(attrs.by || attrs.on),
        text: lines.slice(1).join('\n'),
        raw,
        anchorOnly: lines.length === 1, // anchor with no text on following lines
      };
    }
    return {
      src: null, protected: false, text: raw, raw, anchorOnly: false,
    };
  });

  // Repair the alternate format where an anchor is separated from its text by a
  // blank line: splitBlocks then sees an anchor-only block followed by a src-less
  // text block. Re-attach the text to its anchor so the block round-trips. `raw`
  // keeps the original blank line, so unchanged blocks are still emitted
  // byte-for-byte. Two consecutive anchors (an empty translation) are left alone.
  const out = [];
  for (let i = 0; i < parsed.length; i++) {
    const b = parsed[i];
    const next = parsed[i + 1];
    if (b.anchorOnly && b.src && next && next.src == null) {
      out.push({
        src: b.src,
        by: b.by,
        on: b.on,
        overwritten_on: b.overwritten_on,
        protected: b.protected,
        text: next.text,
        raw: `${b.raw}\n\n${next.raw}`,
      });
      i += 1; // consume the orphaned text block
    } else {
      delete b.anchorOnly;
      out.push(b);
    }
  }
  return out;
}

// ── Alignment ────────────────────────────────────────────────────────────────

/** Longest common subsequence of two string arrays → matched index pairs. */
function lcsPairs(a, b) {
  const n = a.length;
  const m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j]
        ? dp[i + 1][j + 1] + 1
        : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const pairs = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      pairs.push([i, j]);
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }
  return pairs;
}

/**
 * Align German source blocks against the translated file's blocks.
 * Returns one entry per German block, in order:
 *   { block, unchanged, oldMatch }
 * where `unchanged` means the German hash is already present in the translation
 * (reuse the existing translated block) and `oldMatch` is the positionally
 * corresponding translated block for a CHANGED German block (may be null, may
 * be a protected human translation that the overwrite rule must handle).
 */
function alignBlocks(gBlocks, tBlocks) {
  const gSrcs = gBlocks.map((g) => g.src);
  // Give anchorless / src-less translated blocks unique tokens so they never
  // match a German hash.
  const tSrcs = tBlocks.map((t, i) => (t.src ? t.src : ` ${i}`));

  const pairs = lcsPairs(gSrcs, tSrcs);
  const out = gBlocks.map((block) => ({ block, unchanged: false, oldMatch: null }));

  let prevI = -1;
  let prevJ = -1;
  const sentinel = [gBlocks.length, tBlocks.length];
  for (const [pi, pj] of [...pairs, sentinel]) {
    // Gap between the previous match and this match: changed German blocks vs.
    // old translated blocks, paired by position.
    const gGap = [];
    for (let x = prevI + 1; x < pi; x++) gGap.push(x);
    const tGap = [];
    for (let x = prevJ + 1; x < pj; x++) tGap.push(x);
    gGap.forEach((gIdx, k) => {
      out[gIdx] = {
        block: gBlocks[gIdx],
        unchanged: false,
        oldMatch: tGap[k] != null ? tBlocks[tGap[k]] : null,
      };
    });
    if (pi < gBlocks.length) {
      out[pi] = { block: gBlocks[pi], unchanged: true, oldMatch: tBlocks[pj] };
    }
    prevI = pi;
    prevJ = pj;
  }
  return out;
}

module.exports = {
  HTML_BLOCK_TAGS,
  splitBlocks,
  normalizeBlock,
  hashBlock,
  blockType,
  formatAnchor,
  parseAnchorAttrs,
  sourceBlocks,
  translatedBlocks,
  alignBlocks,
  lcsPairs,
  ANCHOR_RE,
};
