/*
 * paths.js — filesystem + frontmatter helpers shared by the translation CLIs.
 *
 * Handles: repo-relative paths, the `_`-prefix eligibility rule, the
 * docs/ ↔ i18n/<locale>/ path mapping, and frontmatter-preserving read/write
 * (dates are kept as plain strings, not coerced to JS Date objects).
 */

'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const DOCS_DIR = 'docs';

// Use the JSON schema so `date: 2026-02-11` stays a string on round-trip
// instead of becoming a Date (which would serialize as a full ISO timestamp).
const YAML_OPTS = { schema: yaml.JSON_SCHEMA };
const DUMP_OPTS = {
  schema: yaml.JSON_SCHEMA,
  lineWidth: -1,
  noRefs: true,
  quotingType: '"',
};
const GM_OPTS = {
  engines: {
    yaml: {
      parse: (s) => yaml.load(s, YAML_OPTS),
      stringify: (o) => yaml.dump(o, DUMP_OPTS),
    },
  },
};

/** True if no path segment (relative to docs/) starts with `_` and it's md/mdx. */
function isEligible(relFromDocs) {
  if (!/\.(md|mdx)$/.test(relFromDocs)) return false;
  return relFromDocs.split(path.sep).every((seg) => !seg.startsWith('_'));
}

/**
 * Walk a folder under the repo and return eligible German doc paths,
 * repo-relative (e.g. "docs/kritisches-denken/010-…/010-….md").
 * `start` may be a folder or a single file (repo-relative or absolute).
 */
function walkDocs(start) {
  const abs = path.isAbsolute(start) ? start : path.join(REPO_ROOT, start);
  const out = [];
  const stat = fs.statSync(abs);
  if (stat.isFile()) {
    const rel = path.relative(REPO_ROOT, abs);
    const relFromDocs = path.relative(DOCS_DIR, rel);
    if (isEligible(relFromDocs)) out.push(rel);
    return out;
  }
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('_')) continue; // skip _drafts, _category_.json, …
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (/\.(md|mdx)$/.test(entry.name)) {
        out.push(path.relative(REPO_ROOT, full));
      }
    }
  };
  walk(abs);
  return out.sort();
}

/** Map a German doc path (repo-relative, under docs/) to its translation path. */
function toTargetRel(germanRel, locale) {
  const relFromDocs = path.relative(DOCS_DIR, germanRel);
  return path.join(
    'i18n',
    locale,
    'docusaurus-plugin-content-docs',
    'current',
    relFromDocs,
  );
}

function abs(rel) {
  return path.isAbsolute(rel) ? rel : path.join(REPO_ROOT, rel);
}

function exists(rel) {
  return fs.existsSync(abs(rel));
}

/** Read a doc → { data: frontmatter, body, raw }. */
function readDoc(rel) {
  const raw = fs.readFileSync(abs(rel), 'utf8');
  const parsed = matter(raw, GM_OPTS);
  return { data: parsed.data, body: parsed.content, raw };
}

/** Serialize frontmatter + body deterministically and write the file. */
function writeDoc(rel, data, body) {
  const yamlStr = yaml.dump(data, DUMP_OPTS);
  const clean = String(body).replace(/^\n+/, '').replace(/\s*$/, '');
  const out = `---\n${yamlStr}---\n\n${clean}\n`;
  const target = abs(rel);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, out, 'utf8');
  return out;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

/** Read last_update.date from frontmatter, normalized to a YYYY-MM-DD string. */
function sourceDate(data) {
  const d = data && data.last_update && data.last_update.date;
  if (!d) return undefined;
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  return String(d).slice(0, 10);
}

module.exports = {
  REPO_ROOT,
  DOCS_DIR,
  isEligible,
  walkDocs,
  toTargetRel,
  abs,
  exists,
  readDoc,
  writeDoc,
  today,
  sourceDate,
};
