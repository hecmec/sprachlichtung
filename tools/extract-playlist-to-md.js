/**
 * Extracts playlist video data from a YouTube playlist HTML file
 * and outputs it as a Markdown table.
 * 
 * node /home/hecmec/code/docusaurus/sprachlichtung/tools/extract_playlist_to_md.js /home/hecmec/code/docusaurus/sprachlichtung/docs/kritisches_denken/15_medien_quellen/critical_thinking_cours_allan_di_donato/index.md --out /home/hecmec/code/docusaurus/sprachlichtung/docs/kritisches_denken/15_medien_quellen/critical_thinking_cours_allan_di_donato/index_table.md
 */
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function usage() {
  console.error('Usage: node tools/extract_playlist_to_md.js <input-file> [--out <output-file>] [--base https://www.youtube.com]');
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 1) usage();

let input = args[0];
let outFile = null;
let base = 'https://www.youtube.com';
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--out') {
    outFile = args[++i];
  } else if (args[i] === '--base') {
    base = args[++i];
  }
}

const raw = fs.readFileSync(input, 'utf8');
const $ = cheerio.load(raw, { xmlMode: false, decodeEntities: true });

const rows = [];
$('ytd-playlist-video-renderer').each((_, el) => {
  const $el = $(el);
  const index = $el.find('#index').first().text().trim();
  const titleEl = $el.find('a#video-title').first();
  const title = titleEl.text().trim().replace(/\s+/g, ' ');
  const href = titleEl.attr('href') ? base.replace(/\/$/, '') + titleEl.attr('href') : '';
  const img = $el.find('ytd-thumbnail img').first().attr('src') || '';
  let time = '';
  // Prefer overlay time status text
  const t1 = $el.find('ytd-thumbnail-overlay-time-status-renderer .yt-badge-shape__text').first().text().trim();
  if (t1) time = t1;
  // Fallback to any time badge text
  if (!time) {
    const t2 = $el.find('.yt-badge-shape__text').first().text().trim();
    if (t2) time = t2;
  }

  if (index || title || href) {
    rows.push({ index, img, title, href, time });
  }
});

function toMarkdownTable(rows) {
  const header = ['Index', 'Thumbnail', 'Title', 'Duration'];
  const sep = ['---', '---', '---', '---'];
  const lines = [];
  lines.push(`| ${header.join(' | ')} |`);
  lines.push(`| ${sep.join(' | ')} |`);
  for (const r of rows) {
    const thumb = r.img ? `![](${r.img})` : '';
    const link = r.href ? `[${r.title}](${r.href})` : r.title;
    lines.push(`| ${r.index || ''} | ${thumb} | ${link} | ${r.time || ''} |`);
  }
  return lines.join('\n');
}

const md = toMarkdownTable(rows);

if (outFile) {
  fs.writeFileSync(outFile, md, 'utf8');
  console.log(outFile);
} else {
  process.stdout.write(md + '\n');
}
