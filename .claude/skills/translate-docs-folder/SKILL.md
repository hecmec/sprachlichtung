---
name: translate-docs-folder
description: Translate the docs in a folder from German (default locale) into a target locale (en, fr, …) for this Docusaurus site. Detects which pages are untranslated vs. stale, presents the two lists for approval, then translates and build-checks. Use when asked to "translate chapter/folder X", "update the English/French translations for X", or "find untranslated pages in X".
---

# Translate a docs folder into another locale

Translates a folder under `docs/` from German (the default locale) into a target
locale, keeping translations in sync with the German source. Default target is
`en`; pass another (e.g. `fr`) if asked.

## Inputs
- **Folder**: a path under `docs/` (e.g. `docs/kritisches-denken/010-einfuehrung-ins-kritische-denken`). If the user names a chapter, find the matching folder.
- **Locale**: target locale code, default `en`.

## Path mapping
A source doc `docs/<rel>` maps to its translation at:
`i18n/<locale>/docusaurus-plugin-content-docs/current/<rel>`

## Which files count
- Translate `*.md` / `*.mdx` only.
- **Skip** any file or directory whose name starts with `_` (drafts/excluded from build), and `_category_.json`.
- Category labels (folder names) are NOT translated here — they live in
  `i18n/<locale>/docusaurus-plugin-content-docs/current.json`. Mention this if relevant, but it's out of scope for this skill.
- By default skip pages with `draft: true` in their German frontmatter; surface them and ask before translating (drafts churn). Translate them only if the user opts in.

## Step 1 — Detect (build two lists)

For each German content file in the folder:

1. **No translation file exists** → **NEW** (needs full translation).
2. **Translation exists** → compare git commit timestamps:
   ```bash
   git log -1 --format=%cI -- "<de-file>"        # source last change
   git log -1 --format=%cI -- "<translation-file>"  # translation last change
   ```
   If the source is **not** newer, it's up to date.
   If the source **is** newer, it's a **candidate** — verify before trusting it (next step).

### Critical: verify candidates with a content diff
Git timestamps over-report. A German commit that only bumped `last_update.date`
or added `draft: false` is **not** a content change. For each candidate, diff the
German file from the commit where the translation was last synced to HEAD:
```bash
# find the commit that last touched the translation, then:
git diff <translation-commit> HEAD -- "<de-file>"
```
- If the diff is **frontmatter-only** (date/draft/etc.) → the translation is
  content-current. No re-translation needed; just bump the translation's
  `last_update.date` to match the German file.
- If the diff has **real content/structure changes** → **STALE** (translate the delta).

Also beware **pre-existing incomplete translations**: a translation can be missing
sections that already existed in the German at translation time (git won't flag
these). When in doubt, compare the section headings of the two files.

## Step 2 — Report and get approval
Present two tables (NEW and STALE→needs-work) plus a short "already current / date-only"
note. List editorial judgment calls (term choices, quotes, links). Wait for the
user's go-ahead before writing translations.

## Step 3 — Translate
Mirror the German file, translating prose. Follow this repo's conventions:

**Frontmatter** (see existing translations in the same folder for the exact shape):
- Add an `id:` (snake_case slug of the page).
- Translate `title`, `sidebar_label`, `description`, and `keywords`.
- Set `last_update.date` equal to the German file's date (keeps both git- and
  frontmatter-based tracking in sync); keep `author`.
- Preserve `sidebar_position` from the German file (i18n sidebars are generated
  from the default locale, so this value is cosmetic — mirror the source).
- Keep `draft`/`completeness` as in the source.

**Body** — preserve exactly, translating only human-readable text:
- Admonitions (`:::info`, `:::warning`, `:::tip` …) — translate the title too.
- Footnotes `[^id]`, `<details>/<summary>`, custom components (`<Tooltip …>`), tables, emojis (`:rocket:`), `&mdash;`, line-break backslashes.
- Links: point to the target-locale equivalent where one obviously exists
  (e.g. German Wikipedia → English Wikipedia, `GIEC` → `IPCC`); otherwise keep.
- Use canonical published translations for well-known quotes (Popper, UDHR, …).

**Images**: relative image paths (`../img/foo.jpg`) resolve **within**
`i18n/<locale>/…`, not the German tree. If a referenced image is missing in the
locale's `img/` folder, copy it over:
```bash
cp docs/<rel-dir>/img/<file> i18n/<locale>/docusaurus-plugin-content-docs/current/<rel-dir>/img/<file>
```

## Step 4 — Build-check
Always verify the locale compiles (catches MDX errors, broken images/links):
```bash
yarn build --locale <locale>
```
Fix any errors and rebuild until clean.

## Step 5 — Summarize
Report what was translated, what only needed a date bump, any images copied, and
the editorial choices made. Don't commit unless asked; if asked, branch first
(e.g. `translate-chapter-<nnn>`) since the repo default branch is `main`.
