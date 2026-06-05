---
sidebar_position: 2
last_update:
  date: 2026-06-05
  author: Immanuel Lupinus
---

# Translating our site

## Standard Translation

Standard translation is done like described in the starter [tutorial](../tutorial/translate-your-site.md).

- The standard translation is using the same page urls for all languages.
- That is the way the system finds equivalent pages
- We want to have different urls for different languages, e.g. `/de/einführung` and `/en/einführung`.

## Translating SprachLichtung

- The main language is German, so we have our main Docusaurus instance in the root folder.
- All other languages are inside i18n.

---

# Translation Strategy

> This section is written in English on purpose, so that contributors who do
> not read German well can follow it.

## 1. Goals & Principles

- **German is the single source of truth.** Every English (`en`) and French
  (`fr`) page is derived from the German page in `docs/`.
- **Automatic by default.** First translations and routine updates are produced
  by machine translation.
- **Human corrections are first-class and protected.** When a translator
  hand-corrects a paragraph, that paragraph is marked and must never be silently
  overwritten by a later automatic sync.
- **Everything is tracked in the file and in git** — no hidden database. The
  translated `.md` carries its own tracking metadata as invisible HTML comments
  plus a few frontmatter fields.

## 2. Scope — what gets translated

A German file is **eligible for translation** when:

- It lives under `docs/`,
- it is a `*.md` or `*.mdx` file, and
- **neither the file nor any of its parent folders starts with `_`.**

The `_` rule mirrors the build exclusion in `docusaurus.config.ts`
(`exclude: ["**/_*/**", "**/_*"]`), so drafts and notes are never published or
translated. We additionally:

- skip `_category_.json` (folder metadata — its labels are translated via the
  generated `i18n/<locale>/.../current.json`, not here), and
- skip pages with `draft: true` in the German frontmatter (ask the author
  first).

**Path mapping** (one Docusaurus instance per language):

```
German source : docs/<rel-path>
English target: i18n/en/docusaurus-plugin-content-docs/current/<rel-path>
French target : i18n/fr/docusaurus-plugin-content-docs/current/<rel-path>
```

## 3. The block model

Translation tracking works at the level of a **block** (roughly, a paragraph).
A block is a blank-line-separated unit, with these elements treated as a single
**atomic** block (never split):

- a heading line,
- a fenced code block (` ``` `),
- an admonition (`:::note … :::`),
- a table,
- an MDX/JSX component block (e.g. `<Tooltip>…</Tooltip>`).

Each German block gets a **stable short hash** — the first 8 hex characters of
the SHA-1 of the block's normalized text (trim trailing whitespace, collapse
internal runs of blank lines). The hash is what lets us detect _which_ paragraph
changed, independent of position.

## 4. In-file anchor convention (tracking state)

State lives **inside the translated file** as invisible HTML-comment anchors —
HTML comments are not rendered, so they never appear on the site. One anchor
sits immediately before each translated block:

```markdown
<!--t src=9f3a2b-->

This paragraph was produced by machine translation.

<!--t src=7c1d44 by="Immanuel Lupinus" on=2026-06-05-->

This paragraph was hand-corrected, so it is protected.
```

- `src=<hash>` — the hash of the **German block** this translation was produced
  from. This is how the tooling re-aligns translated blocks with their source.
- `by="<name>" on=<YYYY-MM-DD>` — **presence of these marks the block as a
  protected human translation.** Translators add them when they correct a block.

There are no sidecar files: a translated `.md` is fully self-describing and
reviews cleanly in a normal git diff.

## 5. Frontmatter additions

In addition to the existing fields (`id`, `title`, `sidebar_label`,
`sidebar_position`, `description`, `keywords`, `last_update`, `completeness`,
`draft`), translated files carry:

```yaml
translation_status: auto # auto | mixed | manual
custom_translation_overwritten: false
# raised to true (with a review log) when a protected paragraph's German
# source changed and was replaced by machine translation — see §9.
translation_review:
  - date: 2026-06-10
    note: "1 protected paragraph replaced by machine translation; review needed"
```

When creating a translation, copy frontmatter per the existing
`translate-docs-folder` skill rules: translate `title` / `sidebar_label` /
`description` / `keywords`, **keep `sidebar_position`** (i18n sidebars are
generated from the default locale), and set `last_update.date` equal to the
German file's date, keeping its `author`.

## 6. The `verify_translation` command

A **deterministic, no-AI** command (`tools/translation/verify_translation.js`,
exposed as `yarn verify_translation`). For each target locale it walks every
eligible German file and produces **two lists**:

1. **Untranslated** — no translated file exists at the mapped path.
2. **Needs update** — a translated file exists, but the current set/order of
   German block hashes no longer matches the `src=` hashes stored in the
   translated file's anchors. For each such file it reports the number of
   **changed / added / removed** blocks, and **flags** when any changed block
   maps to a protected (`by=…`) translation.

Because the check is purely hash comparison, it is fast and CI-friendly. An
optional `--ci` mode exits non-zero when anything is untranslated or stale.

## 7. First translation (new page)

1. Translate the **whole** German file.
2. Write every translated block preceded by its `<!--t src=…-->` anchor.
3. Set `translation_status: auto` and `custom_translation_overwritten: false`.
4. Copy/translate frontmatter as in §5.
5. Build-check the locale: `yarn build --locale <locale>`.

## 8. Update — paragraph-level re-translation

When `verify_translation` reports a file as _needs update_, run a **3-way merge
keyed by block hash** — only the changed paragraphs are re-translated:

1. Parse the German file into blocks → ordered list of hashes.
2. Parse the translated file into ordered anchors → `(src hash, text,
protected?)`.
3. For each German block:
   - **Unchanged** (its hash is still present in the translated anchors) → keep
     the existing translation untouched. _This is what preserves human
     corrections._
   - **Changed or new** (hash not found) → machine-translate **only this
     block**, splice it into position (aligned using the surrounding unchanged
     anchors as fixed points), and update its anchor's `src` hash.
4. **Removed** German blocks → remove the corresponding translated block; if it
   was protected, warn the operator.
5. If at least one changed block was machine-translated, set
   `translation_status: mixed`.

## 9. Protected-block overwrite rule

When a **changed** German block maps to a **protected** translated block
(`by=…`), do exactly this:

- **Keep the old human text** as an HTML comment block, so the correction is not
  lost:

  ```markdown
  <!-- PREVIOUS HUMAN TRANSLATION (German source changed, review needed):
  <old hand-corrected text here>
  -->
  ```

- **Insert the new machine translation** directly below it.
- **Update the anchor**: keep the original `by="…" on=…`, append
  `overwritten_on=<YYYY-MM-DD>`.
- **Raise the frontmatter flag**: set `custom_translation_overwritten: true` and
  append an entry to `translation_review` (date + note).

A human later reviews the page, reconciles the old correction with the new
machine output, removes the `overwritten_on` marker / preserved comment, and
clears `custom_translation_overwritten` back to `false`.

## 10. Tooling architecture (implemented under `tools/translation/`)

Responsibilities are split so the mechanical parts stay deterministic and the AI
only ever sees text snippets:

- **Deterministic Node tooling** (`tools/translation/`, see its `README.md`):
  - `blocks.js` — the foundation: block parsing & hashing, the anchor format,
    and block alignment (the single source of truth for all of the above).
  - `paths.js` — eligibility, path mapping, date-safe frontmatter I/O.
  - `verify_translation.js` (`yarn verify_translation`) — the two-list checker.
  - `translate_plan.js` (`yarn translate:plan`) — emits a JSON job of the blocks
    needing translation.
  - `translate_apply.js` (`yarn translate:apply`) — splices translations back,
    applying the 3-way merge, the protected-overwrite rule, and frontmatter.
    **No AI here.**
- **AI translation step** (the `translate-docs-folder` skill / Claude): fills in
  each block's `translation` in the job, then runs `apply`.

This keeps `verify_translation` fast and CI-friendly and limits the AI to
translating short, well-scoped snippets. Pipeline:
`verify_translation → translate_plan → (AI fills the job) → translate_apply → yarn build --locale`.

## 11. French rollout (out of scope here, for reference)

French currently has only UI `.json` files and **no content translations**; the
`fr` locale is commented out in `docusaurus.config.ts`. Enabling it means:
uncomment `fr` and add it to the `locales` array, then run the same pipeline to
populate `i18n/fr/docusaurus-plugin-content-docs/current/`. The strategy above
applies unchanged to `fr`.

## 12. Worked mini-example

**Before** — `i18n/en/.../intro.md` (two blocks, the second hand-corrected):

```markdown
<!--t src=9f3a2b-->

Critical thinking means examining our beliefs deliberately.

<!--t src=7c1d44 by="Immanuel Lupinus" on=2026-06-05-->

"I know that I know nothing." — Socrates
```

**The German source's second block is edited.** Its hash changes from
`7c1d44` → `b8e0f1`. `verify_translation` now reports `intro.md` as _needs
update — 1 changed block (protected)_.

**After** the update run (protected-overwrite rule applied):

```markdown
<!--t src=9f3a2b-->

Critical thinking means examining our beliefs deliberately.

<!--t src=b8e0f1 by="Immanuel Lupinus" on=2026-06-05 overwritten_on=2026-06-10-->
<!-- PREVIOUS HUMAN TRANSLATION (German source changed, review needed):
"I know that I know nothing." — Socrates
-->

"I know that I know nothing, and that is the beginning of wisdom." — Socrates
```

Frontmatter now carries:

```yaml
translation_status: mixed
custom_translation_overwritten: true
translation_review:
  - date: 2026-06-10
    note: "1 protected paragraph replaced by machine translation; review needed"
```

The first block was untouched (its hash never changed); only the changed
paragraph was re-translated, and the human's original wording is preserved for
review.
