#!/usr/bin/env node
/*
 * translate_apply — splice AI translations back into the locale file.
 *
 * The authoritative, deterministic half of the AI handoff. Takes a job emitted
 * by translate_plan with each block's `translation` filled in, RE-READS the
 * current German + translation, recomputes the block alignment itself (so it is
 * correct even if the job is slightly stale), and writes the locale file:
 *   - new page  → every block gets a <!--t src=…--> anchor;
 *   - update    → unchanged blocks kept verbatim (preserves human edits), only
 *                 changed blocks replaced, and the §9 protected-overwrite rule
 *                 applied (old human text kept as a comment, frontmatter flagged).
 *
 * Usage:
 *   node tools/translation/translate_apply.js --job job.json [--dry-run]
 *   cat job.json | node tools/translation/translate_apply.js
 */

'use strict';

const fs = require('fs');
const {
  sourceBlocks, translatedBlocks, alignBlocks, formatAnchor,
} = require('./blocks');
const P = require('./paths');

function parseArgs(argv) {
  const args = { job: null, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--job' || a === '-j') args.job = argv[++i];
    else if (a === '--dry-run' || a === '-n') args.dryRun = true;
  }
  return args;
}

function loadJobs(args) {
  const raw = args.job
    ? fs.readFileSync(args.job, 'utf8')
    : fs.readFileSync(0, 'utf8');
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : [parsed];
}

function translationMap(job) {
  const map = new Map();
  for (const b of job.blocks || []) {
    if (b.translation && b.translation.trim() !== '') map.set(b.src, b.translation);
  }
  return map;
}

function renderBlock(anchorAttrs, text) {
  return `${formatAnchor(anchorAttrs)}\n${String(text).replace(/\s+$/, '')}`;
}

function previousHumanComment(oldText) {
  return `<!-- PREVIOUS HUMAN TRANSLATION (German source changed, review needed):\n${String(oldText).trim()}\n-->`;
}

function applyNew(job, map) {
  const g = P.readDoc(job.file);
  const gBlocks = sourceBlocks(g.body);
  const missing = [];
  const out = gBlocks.map((b) => {
    const tr = map.get(b.src);
    if (!tr) { missing.push(b.src); return ''; }
    return renderBlock({ src: b.src }, tr);
  });
  if (missing.length) return { error: `missing translations for ${missing.length} block(s): ${missing.join(', ')}` };

  const data = { ...(job.translated_frontmatter || g.data) };
  data.last_update = { ...(data.last_update || {}), date: job.source_date || P.sourceDate(g.data) };
  data.translation_status = 'auto';
  data.custom_translation_overwritten = false;

  return { target: job.target, data, body: out.join('\n\n'), summary: `new — ${gBlocks.length} blocks` };
}

function applyUpdate(job, map) {
  const g = P.readDoc(job.file);
  const gBlocks = sourceBlocks(g.body);
  const gSet = new Set(gBlocks.map((b) => b.src));
  const t = P.readDoc(job.target);
  const tBlocks = translatedBlocks(t.body);
  const legacy = tBlocks.filter((b) => b.src).length === 0;

  const aligned = alignBlocks(gBlocks, tBlocks);
  const missing = [];
  let overwritten = 0;
  let changed = 0;
  const today = P.today();

  const out = aligned.map((entry) => {
    const b = entry.block;
    if (entry.unchanged && !legacy && entry.oldMatch) {
      return entry.oldMatch.raw; // keep existing translation verbatim
    }
    changed += 1;
    const tr = map.get(b.src);
    if (!tr) { missing.push(b.src); return ''; }

    const protectedOld = !legacy && entry.oldMatch && entry.oldMatch.protected;
    if (protectedOld) {
      overwritten += 1;
      const attrs = {
        src: b.src,
        by: entry.oldMatch.by,
        on: entry.oldMatch.on,
        overwritten_on: today,
      };
      return `${formatAnchor(attrs)}\n${previousHumanComment(entry.oldMatch.text)}\n${tr.replace(/\s+$/, '')}`;
    }
    return renderBlock({ src: b.src }, tr);
  });

  if (missing.length) return { error: `missing translations for ${missing.length} block(s): ${missing.join(', ')}` };

  // Dropped protected blocks whose German source was removed entirely.
  const droppedProtected = tBlocks
    .filter((b) => b.src && b.protected && !gSet.has(b.src))
    .filter((b) => !aligned.some((e) => e.oldMatch === b)); // not already handled as overwrite

  const data = { ...t.data };
  data.last_update = { ...(data.last_update || {}), date: job.source_date || P.sourceDate(g.data) };
  data.translation_status = legacy ? 'auto' : 'mixed';
  if (overwritten > 0) {
    data.custom_translation_overwritten = true;
    data.translation_review = [
      ...(Array.isArray(data.translation_review) ? data.translation_review : []),
      { date: today, note: `${overwritten} protected paragraph(s) replaced by machine translation; review needed` },
    ];
  }

  const warnings = [];
  if (droppedProtected.length) {
    warnings.push(`${droppedProtected.length} protected block(s) had their German source removed and were dropped — review ${job.target}`);
  }

  return {
    target: job.target,
    data,
    body: out.join('\n\n'),
    summary: `update — ${changed} block(s) re-translated, ${overwritten} protected overwrite(s)${legacy ? ' (legacy re-anchor)' : ''}`,
    warnings,
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const jobs = loadJobs(args);
  let failed = 0;

  for (const job of jobs) {
    const map = translationMap(job);
    const res = job.mode === 'new' ? applyNew(job, map) : applyUpdate(job, map);

    if (res.error) {
      console.error(`✗ ${job.file} [${job.locale}] — ${res.error}`);
      failed += 1;
      continue;
    }
    if (!args.dryRun) P.writeDoc(res.target, res.data, res.body);
    const tag = args.dryRun ? '(dry-run) ' : '';
    console.log(`✓ ${tag}${res.target} — ${res.summary}`);
    for (const w of res.warnings || []) console.log(`  ⚠ ${w}`);
  }

  if (failed > 0) process.exit(1);
}

main();
