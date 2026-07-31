#!/usr/bin/env node
/*
 * verify_translation — deterministic translation-status checker (no AI).
 *
 * For each target locale, walks eligible German docs and emits two lists:
 *   - Untranslated: no translation file exists.
 *   - Needs update: translation exists but its `src` anchors no longer match
 *     the current German block hashes (reports changed/added/removed counts and
 *     flags protected blocks that an update would overwrite).
 *
 * Usage:
 *   node tools/translation/verify_translation.js [folder] [--locale en,fr]
 *                                                [--json] [--ci]
 *   yarn verify_translation docs/kritisches-denken --locale en
 *
 * Exit codes: 0 = nothing to do; with --ci, 1 = something untranslated/stale.
 */

'use strict';

const { sourceBlocks, translatedBlocks } = require('./blocks');
const P = require('./paths');

function parseArgs(argv) {
  const args = { folder: 'docs', locales: ['en'], json: false, ci: false };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--locale' || a === '-l') args.locales = argv[++i].split(',');
    else if (a === '--json') args.json = true;
    else if (a === '--ci') args.ci = true;
    else rest.push(a);
  }
  if (rest[0]) args.folder = rest[0];
  return args;
}

/** Compare one German file to one translation; null target → untranslated. */
function classify(germanRel, targetRel) {
  const g = P.readDoc(germanRel);
  const gBlocks = sourceBlocks(g.body);
  const gSet = new Set(gBlocks.map((b) => b.src));

  if (!P.exists(targetRel)) {
    return { status: 'untranslated', sourceBlocks: gBlocks.length };
  }

  const t = P.readDoc(targetRel);
  if (t.data && t.data.translation_status === 'manual') {
    return { status: 'manual', note: 'hand-curated translation — excluded from automatic updates' };
  }
  const tBlocks = translatedBlocks(t.body);
  const anchored = tBlocks.filter((b) => b.src);

  if (anchored.length === 0) {
    return { status: 'legacy', note: 'translation has no anchors — re-translate to enable block tracking' };
  }

  const tSet = new Set(anchored.map((b) => b.src));
  const behind = gBlocks.filter((b) => !tSet.has(b.src)).length; // changed + new
  const orphans = anchored.filter((b) => !gSet.has(b.src));      // changed-old + removed
  const protectedHit = orphans.filter((b) => b.protected);

  if (behind === 0 && orphans.length === 0) {
    return { status: 'current' };
  }
  return {
    status: 'needs-update',
    behind,
    orphans: orphans.length,
    protected: protectedHit.length,
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const germanFiles = P.walkDocs(args.folder);
  const report = {};
  let stale = 0;

  for (const locale of args.locales) {
    const untranslated = [];
    const needsUpdate = [];
    const legacy = [];
    const manual = [];
    let current = 0;

    for (const germanRel of germanFiles) {
      const targetRel = P.toTargetRel(germanRel, locale);
      const res = classify(germanRel, targetRel);
      const item = { file: germanRel, target: targetRel, ...res };
      if (res.status === 'untranslated') untranslated.push(item);
      else if (res.status === 'needs-update') needsUpdate.push(item);
      else if (res.status === 'legacy') legacy.push(item);
      else if (res.status === 'manual') manual.push(item);
      else current += 1;
    }
    stale += untranslated.length + needsUpdate.length + legacy.length;
    report[locale] = {
      total: germanFiles.length,
      current,
      untranslated,
      needsUpdate,
      legacy,
      manual,
    };
  }

  if (args.json) {
    process.stdout.write(JSON.stringify(report, null, 2) + '\n');
  } else {
    printHuman(report, args.folder);
  }
  if (args.ci && stale > 0) process.exit(1);
}

function printHuman(report, folder) {
  for (const [locale, r] of Object.entries(report)) {
    console.log(`\n=== locale: ${locale}  (scanned ${r.total} files in ${folder}) ===`);
    console.log(`  up to date: ${r.current}`);

    console.log(`\n  UNTRANSLATED (${r.untranslated.length}):`);
    for (const it of r.untranslated) {
      console.log(`    - ${it.file}  (${it.sourceBlocks} blocks)`);
    }

    console.log(`\n  NEEDS UPDATE (${r.needsUpdate.length}):`);
    for (const it of r.needsUpdate) {
      const flag = it.protected ? `  ⚠ ${it.protected} protected block(s) affected` : '';
      console.log(`    - ${it.file}  [+${it.behind} changed/new, -${it.orphans} stale]${flag}`);
    }

    if (r.legacy.length) {
      console.log(`\n  LEGACY / NO ANCHORS (${r.legacy.length}) — re-translate to enable tracking:`);
      for (const it of r.legacy) console.log(`    - ${it.file}`);
    }

    if (r.manual.length) {
      console.log(`\n  MANUAL / HAND-CURATED (${r.manual.length}) — excluded from automatic updates:`);
      for (const it of r.manual) console.log(`    - ${it.file}`);
    }
  }
  console.log('');
}

main();
