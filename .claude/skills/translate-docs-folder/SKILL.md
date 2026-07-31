---
name: translate-docs-folder
description: Translate the docs in a folder from German (default locale) into a target locale (en, fr, …) for this Docusaurus site. Detects untranslated vs. stale pages, re-translates only the changed paragraphs, and protects hand-corrected translations. Use when asked to "translate chapter/folder X", "update the English/French translations for X", or "find untranslated pages in X".
---

# Translate a docs folder into another locale

Translates a folder under `docs/` from German (the default locale) into a target
locale, keeping translations in sync with the German source **at the paragraph
level** and never silently overwriting human corrections. Default target is `en`;
pass another (e.g. `fr`) if asked.

> **Canonical spec:** the full translation strategy lives in
> `docs/_myDocs/translate-jpe.md` (§3 block model, §4 anchors, §5 frontmatter,
> §8 paragraph-level update, §9 protected-overwrite rule). This skill is the AI
> half of that strategy: **deterministic tooling under `tools/translation/`
> does the detection, block-diffing and splicing; you only translate text.**
> Do NOT hand-compute hashes or hand-edit anchors — let the tools do it.

## Inputs
- **Folder**: a path under `docs/` (e.g. `docs/kritisches-denken/010-einfuehrung-ins-kritische-denken`). If the user names a chapter, find the matching folder.
- **Locale**: target locale code, default `en`.

## Path mapping
A source doc `docs/<rel>` maps to its translation at:
`i18n/<locale>/docusaurus-plugin-content-docs/current/<rel>`

## Which files count
- Translate `*.md` / `*.mdx` only. Do **not** copy `_category_.json` into the locale tree — see Step 3b for how category labels actually get translated.
- **Skip** any file or directory whose name starts with `_` (drafts/excluded from build).
- By default skip pages with `draft: true` in their German frontmatter; surface them and ask before translating (drafts churn). Translate them only if the user opts in.

## Block model & anchors (how tracking works)

Translation is tracked per **block** (≈ paragraph). A block is a
blank-line-separated unit; headings, fenced code blocks, admonitions
(`:::…:::`), tables, and MDX/JSX component blocks are **atomic** (never split).

Each translated block is preceded by an invisible HTML-comment **anchor** that
records the hash of the German block it came from:

```markdown
<!--t src=9f3a2b-->
A machine-translated paragraph.

<!--t src=7c1d44 by="Immanuel Lupinus" on=2026-06-05-->
A hand-corrected, protected paragraph.
```

- `src=<hash>` — first 8 hex chars of the SHA-1 of the German block (computed by
  `tools/translation/blocks.js`; **you never compute this by hand**).
- `by="<name>" on=<YYYY-MM-DD>` — **presence marks the block as a protected human
  translation.** Translators add these by hand when they correct a block; the
  tooling then preserves them across updates.

Anchors are HTML comments, invisible on the site. Docs are `.md` (CommonMark
mode), where HTML comments are valid; do not use this on `.mdx` pages without
switching to `{/* … */}` comments.

## Step 1 — Detect (build two lists)

Run the checker — it applies the block-hash logic for you:
```bash
yarn verify_translation <folder> --locale <locale>      # human report
yarn verify_translation <folder> --locale <locale> --json   # machine-readable
```
It prints three groups: **UNTRANSLATED** (no file yet → NEW), **NEEDS UPDATE**
(anchors no longer match the German block hashes — shows `+changed/new`,
`-stale`, and ⚠ when protected blocks are affected), and **LEGACY / NO ANCHORS**
(existing translation from before this strategy — re-translate once to add
anchors; its unmarked human edits are not protected, so eyeball it first).

## Step 2 — Report and get approval
Relay the verify output to the user as two short lists (NEW and NEEDS UPDATE),
calling out any **protected blocks that will be overwritten** and any editorial
judgment calls (term choices, quotes, links). Wait for the go-ahead before
writing.

## Step 3 — Translate / update (plan → translate → apply)

The tooling owns all the mechanics (anchors, hashing, the 3-way merge, the
protected-overwrite rule, frontmatter flags). Your only job is to translate text.

**1. Plan** — emit a job listing exactly the blocks that need translating
(all of them for a NEW page; only changed/new ones for an UPDATE):
```bash
node tools/translation/translate_plan.js <file-or-folder> --locale <locale> --out /tmp/job.json
```

**2. Translate** — edit `/tmp/job.json`: fill each block's `"translation"` with
your translation of its `"source"`. For a NEW page also edit
`"translated_frontmatter"` (translate `title`, `sidebar_label`, `description`,
`keywords`; add an `id:` snake_case slug; keep `sidebar_position`). When a block
has `"replaces_protected"`, you're overwriting a human correction — translate the
new German faithfully; the tool preserves the old text as a comment and flags it
for review automatically.

**3. Apply** — splice your translations back:
```bash
node tools/translation/translate_apply.js --job /tmp/job.json        # add --dry-run to preview
```
`apply` re-reads the current German + translation, recomputes the alignment, and
writes the locale file: unchanged blocks kept verbatim (human edits preserved),
changed blocks replaced, protected overwrites handled per §9, and frontmatter
(`translation_status`, `custom_translation_overwritten`, `translation_review`,
`last_update.date`) set for you.

> The anchor/hash/frontmatter conventions (§4/§5 of the strategy) are implemented
> in `tools/translation/blocks.js` — that file is the single source of truth, so
> never hand-write anchors or invent hashes.

### Inline author directives — `<!-- AI-TRANSLATION: … -->`
The author may embed instructions for the translator as HTML comments of the form
`<!-- AI-TRANSLATION: <instruction> -->` (e.g. *"don't translate the original
english video course titles"*). **Always obey the instruction** when translating
the blocks it applies to (typically the content right after it, until the next
heading or a contradicting directive). These are invisible on the site — **keep
the comment verbatim in the translated file** so it still guides future updates;
do not translate or remove it. If a directive is ambiguous or conflicts with these
rules, surface it in your Step 2 report rather than guessing.

### Body — translate only human-readable text; the tools keep structure intact
- Admonitions (`:::info`, `:::warning`, `:::tip` …) — translate the title too.
- Footnotes `[^id]`, `<details>/<summary>`, custom components (`<Tooltip …>`), tables, emojis (`:rocket:`), `&mdash;`, line-break backslashes.
- Links: point to the target-locale equivalent where one obviously exists
  (e.g. German Wikipedia → English Wikipedia, `GIEC` → `IPCC`); otherwise keep.
- Use canonical published translations for well-known quotes (Popper, UDHR, …).

### Images
Relative image paths (`../img/foo.jpg`) resolve **within** `i18n/<locale>/…`, not
the German tree. If a referenced image is missing in the locale's `img/` folder,
copy it over:
```bash
cp docs/<rel-dir>/img/<file> i18n/<locale>/docusaurus-plugin-content-docs/current/<rel-dir>/img/<file>
```

## Step 3b — Translate the category labels (`_category_.json`)

Every folder you touched may carry a `_category_.json` whose `label` and
`link.generated-index.description` show up in the sidebar and on the category
landing page. **These are part of the translation job** — a chapter whose pages
are translated but whose sidebar entry still reads German is not done.

**Do not copy `_category_.json` into `i18n/<locale>/…/current/`.** Those copies
are *inert*: Docusaurus does not read them (verified — a locale copy with a
translated label still rendered the German one). Category strings are translated
through the plugin's translation file instead:

```
i18n/<locale>/docusaurus-plugin-content-docs/current.json
```

with two keys per category, **keyed on the German label**:

```json
"sidebar.<sidebarId>.category.<German label>": {
  "message": "<translated label>",
  "description": "The label for category '<German label>' in sidebar '<sidebarId>'"
},
"sidebar.<sidebarId>.category.<German label>.link.generated-index.description": {
  "message": "<translated description>",
  "description": "The generated-index page description for category '<German label>' in sidebar '<sidebarId>'"
}
```

Only add the `.link.generated-index.description` key when the German
`_category_.json` actually has `link.type: "generated-index"` with a description
(a `link.type: "doc"` category has no description to translate). A folder with
**no** `_category_.json` still gets a category whose label is the raw folder name
(e.g. `mehr-kognitive-verzerrungen`) — translate that too.

### Discovering what is missing

Because the key embeds the **German** label, **renaming a German label silently
orphans the translation** and the locale falls back to German. Find the gaps with
the generator, which marks anything untranslated with a `_t_` prefix:

```bash
cp i18n/<locale>/docusaurus-plugin-content-docs/current.json /tmp/current.bak.json
yarn write-translations:<locale>          # en | fr
node -e "const j=require('./i18n/<locale>/docusaurus-plugin-content-docs/current.json');
  for(const [k,v] of Object.entries(j)) if(v.message.startsWith('_t_')) console.log(k);"
cp /tmp/current.bak.json i18n/<locale>/docusaurus-plugin-content-docs/current.json
```

> **Never commit the generator's output.** It appends `_t_`-prefixed German
> messages for *every* untranslated key site-wide, and a `_t_` message renders
> literally (`_t_Videokurse` in the sidebar) — worse than the German fallback it
> replaces. Use it read-only to list key names, restore the backup, then hand-add
> only the keys for the chapter you are translating, with real translations.

Old keys under renamed German labels are dead but harmless; leave them unless
asked to clean up, and mention them in your summary.

## Step 4 — Prune stale translations (full-folder runs only)
When you translated an **entire DE folder** (not a single file), check the locale
folder for **orphans**: translated `.md`/`.mdx` files that no longer have a
matching source under `docs/<rel>/`. These are left behind when a German page is
renamed or deleted, and they keep showing up on the site. Delete them.

```bash
# list translated files with no German counterpart (orphans), for review:
DE=docs/<rel>; EN=i18n/<locale>/docusaurus-plugin-content-docs/current/<rel>
for f in "$EN"/*.md "$EN"/*.mdx; do
  [ -e "$f" ] || continue
  base=$(basename "$f")
  [ -e "$DE/$base" ] || echo "ORPHAN: $f"
done
```

Apply the same scope rules as translation: only consider `.md`/`.mdx`, ignore
`_`-prefixed files. **List the orphans in your summary and
delete them with `git rm`** (recoverable) rather than a plain `rm`. If an orphan
looks intentional (e.g. a locale-only page) flag it instead of deleting. Skip this
step entirely for single-file translations — you have no signal there about the
rest of the folder.

## Step 5 — Build-check
Always verify the locale compiles (catches MDX errors, broken images/links):
```bash
yarn build --locale <locale>
```
Fix any errors and rebuild until clean. The anchors are HTML comments, so they
must not break the build — if a build error points at one, the comment is
malformed.

Then grep the built HTML for the German category labels you translated in Step 3b
— a missing or misspelled key fails silently by falling back to German, so the
build passing proves nothing about them:
```bash
grep -c "<German label>" build/docs/<some-page-in-that-chapter>/index.html   # want 0
```

## Step 6 — Summarize
Report what was newly translated, which files were updated and **how many blocks**
were re-translated, any **protected blocks overwritten** (and that
`custom_translation_overwritten` was raised for review), legacy files that were
anchor-ized, what only needed a date bump, images copied, **any orphan
translations deleted** (Step 4), **which category labels/descriptions you added to
`current.json`** (Step 3b) plus any stale keys you left behind, and the editorial
choices made. Don't commit unless asked; if asked, branch first
(e.g. `translate-chapter-<nnn>`) since the repo default branch is `main`.
