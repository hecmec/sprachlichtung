#!/usr/bin/env node
/*
 * translate_plan — emit a translation "job" for the AI to fill in.
 *
 * Deterministic half of the AI handoff: figures out which German blocks need
 * translating (all of them for a new page, only the changed ones for an update)
 * and writes a JSON job. The AI fills each block's `translation` (and, for new
 * pages, edits `translated_frontmatter`), then translate_apply splices it back.
 *
 * Usage:
 *   node tools/translation/translate_plan.js <file-or-folder> --locale en
 *                                            [--out job.json] [--include-drafts]
 *
 * With a folder, emits an array of jobs (one per file needing work). Files that
 * are already current are skipped.
 */

'use strict';

const fs = require('fs');
const { sourceBlocks, translatedBlocks, alignBlocks } = require('./blocks');
const P = require('./paths');

function parseArgs(argv) {
  const args = { target: null, locale: 'en', out: null, includeDrafts: false };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--locale' || a === '-l') args.locale = argv[++i];
    else if (a === '--out' || a === '-o') args.out = argv[++i];
    else if (a === '--include-drafts') args.includeDrafts = true;
    else rest.push(a);
  }
  args.target = rest[0];
  return args;
}

function planFile(germanRel, locale, includeDrafts) {
  const g = P.readDoc(germanRel);
  if (g.data && g.data.draft === true && !includeDrafts) return null;

  const gBlocks = sourceBlocks(g.body);
  const targetRel = P.toTargetRel(germanRel, locale);

  // NEW page: translate everything.
  if (!P.exists(targetRel)) {
    return {
      version: 1,
      file: germanRel,
      locale,
      target: targetRel,
      mode: 'new',
      source_date: P.sourceDate(g.data),
      translated_frontmatter: { ...g.data }, // AI edits title/description/keywords/…
      blocks: gBlocks.map((b, id) => ({
        id,
        src: b.src,
        type: b.type,
        source: b.text,
        translation: '',
      })),
    };
  }

  // UPDATE: only changed/new blocks; align to detect protected overwrites.
  const t = P.readDoc(targetRel);
  // A hand-curated translation opts out of automatic updates entirely.
  if (t.data && t.data.translation_status === 'manual') return null;
  const tBlocks = translatedBlocks(t.body);
  const legacy = tBlocks.filter((b) => b.src).length === 0;

  const aligned = alignBlocks(gBlocks, tBlocks);
  const blocks = [];
  aligned.forEach((entry, id) => {
    if (entry.unchanged && !legacy) return; // keep existing translation as-is
    const job = {
      id,
      src: entry.block.src,
      type: entry.block.type,
      source: entry.block.text,
      translation: '',
    };
    if (entry.oldMatch && entry.oldMatch.protected) {
      job.replaces_protected = {
        by: entry.oldMatch.by,
        on: entry.oldMatch.on,
        old_translation: entry.oldMatch.text,
      };
    }
    blocks.push(job);
  });

  if (blocks.length === 0) return null; // already current

  return {
    version: 1,
    file: germanRel,
    locale,
    target: targetRel,
    mode: 'update',
    legacy,
    source_date: P.sourceDate(g.data),
    blocks,
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.target) {
    console.error('usage: translate_plan <file-or-folder> --locale <code> [--out job.json]');
    process.exit(2);
  }

  const files = P.walkDocs(args.target);
  const jobs = [];
  for (const germanRel of files) {
    const job = planFile(germanRel, args.locale, args.includeDrafts);
    if (job) jobs.push(job);
  }

  const single = files.length === 1;
  const payload = single ? (jobs[0] || null) : jobs;
  const json = JSON.stringify(payload, null, 2);

  if (args.out) {
    fs.writeFileSync(args.out, json + '\n', 'utf8');
    const n = single ? (jobs.length) : jobs.length;
    console.error(`wrote ${args.out}: ${n} job(s), ${countBlocks(jobs)} block(s) to translate`);
  } else {
    process.stdout.write(json + '\n');
  }
}

function countBlocks(jobs) {
  return jobs.reduce((s, j) => s + j.blocks.length, 0);
}

main();
