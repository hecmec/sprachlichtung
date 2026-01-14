#!/usr/bin/env node
/*
 Sync markdown files in docs/kritisches_denken with Notion as per .github/prompts/ds_to_notion_md-files_sync.prompt.md

 Requirements:
 - For each markdown file in docs/kritisches_denken recursively:
    * If front-matter has customProps.notion_page_id
     -> update that Notion page (currently we only ensure existence; updating content could be added)
    * Else create new Notion page under nearest ancestor directory that has a _category_.json with customProps.notion_page_id, else under Kritisches Denken root (27e7c6ccb2d78044922cd9259ecea30b)
      - Page title: front-matter title or filename (no extension)
      - Insert original front-matter as first code block (yaml) including --- markers
      - Page content: markdown (body) converted to simple Notion blocks (very limited subset for now: paragraphs + headings + bulleted lists + fenced code)
      - Update markdown file front-matter: add customProps.notion_page_id and file_name (basename with extension)
    * If filename starts with '_' mark page excluded by adding excluded: true in front-matter. If page already exists, reflect that in front-matter only (an advanced feature could patch Notion page properties).

 Environment:
  NOTION_API_KEY must be provided.

 Limitations:
  - Minimal markdown -> blocks conversion implemented.
  - Updating existing pages content is skipped to avoid unintended overwrites; could be enabled with a flag.
*/

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');
const { Client: NotionClient } = require('@notionhq/client');

const NOTION_API_KEY = process.env.NOTION_API_KEY;
if (!NOTION_API_KEY) {
  console.error('ERROR: no NOTION_API_KEY env var found');
  process.exit(1);
}
const DRY_RUN = !!process.env.DRY_RUN;
if (!NOTION_API_KEY && !DRY_RUN) {
  console.error('ERROR: NOTION_API_KEY env var required (unless DRY_RUN=1)');
  process.exit(1);
}

const notionApiClient = DRY_RUN ? null : new NotionClient({ auth: NOTION_API_KEY });

const ROOT_DIR = path.join(process.cwd(), 'docs', 'kritisches_denken');
const ROOT_PAGE_ID = '27e7c6ccb2d78044922cd9259ecea30b'.replace(/-/g,'');

async function main() {
  const files = await collectMarkdown(ROOT_DIR);
  for (const file of files) {
    try {
      await processFile(file);
    } catch (e) {
      console.error('Failed processing', file, e.message);
    }
  }
}

async function collectMarkdown(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.docusaurus') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...await collectMarkdown(full));
    } else if (e.isFile() && (e.name.endsWith('.md') || e.name.endsWith('.mdx'))) {
      out.push(full);
    }
  }
  return out;
}

function findAncestorCategoryPageId(filePath) {
  // Walk up directories until ROOT_DIR
  let current = path.dirname(filePath);
  while (current.startsWith(ROOT_DIR)) {
    const catPath = path.join(current, '_category_.json');
    if (fs.existsSync(catPath)) {
      try {
        const cat = JSON.parse(fs.readFileSync(catPath,'utf8'));
        if (cat.customProps && cat.customProps.notion_page_id) {
          return cat.customProps.notion_page_id.replace(/-/g,'');
        }
      } catch {/* ignore */}
    }
    if (path.resolve(current) === path.resolve(ROOT_DIR)) break;
    current = path.dirname(current);
  }
  return ROOT_PAGE_ID;
}

function mdToBlocks(md) {
  const lines = md.split(/\r?\n/);
  const blocks = [];
  let i = 0;
  let listItems = [];
  const flushList = () => {
    if (!listItems.length) return;
    for (const item of listItems) {
      blocks.push({ bulleted_list_item: { rich_text: [{ type: 'text', text: { content: item } }] } });
    }
    listItems = [];
  };
  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trimEnd();
    if (/^```/.test(line)) { // fenced code
      const lang = line.replace(/```+/, '').trim();
      i++;
      const codeLines = [];
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length && /^```/.test(lines[i].trim())) i++; // skip closing
      flushList();
      blocks.push({ code: { language: (lang || 'plain text').toLowerCase(), rich_text: [{ type: 'text', text: { content: codeLines.join('\n') } }] } });
      continue;
    }
    if (!line.length) { flushList(); i++; continue; }
    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      flushList();
      const level = h[1].length;
      const text = h[2];
      const key = level === 1 ? 'heading_1' : level === 2 ? 'heading_2' : 'heading_3';
      blocks.push({ [key]: { rich_text: [{ type: 'text', text: { content: text } }] } });
      i++;
      continue;
    }
    const lm = line.match(/^[-*+]\s+(.*)$/);
    if (lm) { listItems.push(lm[1]); i++; continue; }
    const paraLines = [line];
    i++;
    while (i < lines.length && lines[i].trim().length && !/^```/.test(lines[i]) && !/^(#{1,3})\s+/.test(lines[i]) && !/^[-*+]\s+/.test(lines[i])) {
      paraLines.push(lines[i].trimEnd());
      i++;
    }
    flushList();
    blocks.push({ paragraph: { rich_text: [{ type: 'text', text: { content: paraLines.join('\n') } }] } });
  }
  flushList();
  return blocks;
}

async function createPage(parentId, title, fm, body) {
  const frontMatterYaml = '---\n' + yaml.dump(fm).trimEnd() + '\n---';
  const bodyBlocks = mdToBlocks(body);
  const codeBlock = { code: { language: 'yaml', rich_text: [{ type: 'text', text: { content: frontMatterYaml } }] } };
  const children = [codeBlock, ...bodyBlocks];
  if (DRY_RUN) {
    return 'SIMULATED_' + Math.random().toString(36).slice(2, 10);
  }
  const page = await notionApiClient.pages.create({
    parent: { page_id: parentId },
    properties: {
      title: { title: [{ type: 'text', text: { content: title } }] }
    },
    children: children.slice(0, 95)
  });
  return page.id.replace(/-/g,'');
}

async function processFile(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);
  const fm = parsed.data || {};
  const body = parsed.content.trim();
  const fileBase = path.basename(file);
  const title = fm.title || fileBase.replace(/\.(md|mdx)$/,'');
  const isExcluded = fileBase.startsWith('_');

  // Navigate customProps nesting
  let notionPageId = fm.customProps && fm.customProps.notion_page_id;
  if (!notionPageId) {
    const parentId = findAncestorCategoryPageId(file);
    notionPageId = await createPage(parentId, title, fm, body);
    if (!fm.customProps) fm.customProps = {};
    fm.customProps.notion_page_id = notionPageId;
    console.log((DRY_RUN ? '[DRY_RUN] Would create' : 'Created') + ' Notion page', notionPageId, 'for', fileBase);
  }
  fm.file_name = fileBase; // always update
  if (isExcluded) fm.excluded = true;

  const newRaw = matter.stringify(body + '\n', fm);
  fs.writeFileSync(file, newRaw, 'utf8');
  console.log('Updated front-matter for', fileBase);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
