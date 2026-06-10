# Translation tooling

Deterministic helpers that implement the **paragraph-level** translation
strategy in [`docs/_myDocs/translate-jpe.md`](../../docs/_myDocs/translate-jpe.md).
They do all the mechanical work — splitting blocks, hashing, detecting what
changed, splicing translations, protecting hand-corrected paragraphs — so the
only thing left to a translator (human or AI) is translating text.

No AI lives here. Translation itself is done by the `translate-docs-folder`
skill, which drives these commands.

## Files

| File                    | Role                                                                                                                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blocks.js`             | **Foundation.** The single source of truth for what a _block_ is, its `src` hash, the `<!--t src=… by=… on=…-->` anchor format, and block alignment. Everything else imports it. |
| `paths.js`              | Filesystem + frontmatter helpers: the `_`-prefix eligibility rule, the `docs/ ↔ i18n/<locale>/…/current/` path mapping, and date-safe frontmatter read/write.                    |
| `verify_translation.js` | Reports what is untranslated / stale / legacy per locale.                                                                                                                        |
| `translate_plan.js`     | Emits a JSON _job_ of the blocks that need translating.                                                                                                                          |
| `translate_apply.js`    | Splices the filled-in job back into the locale file.                                                                                                                             |

## Commands

```bash
# 1. What needs work? (two lists per locale)
yarn verify_translation [folder] --locale en[,fr] [--json] [--ci]

# 2. Plan: which blocks to translate (all for new pages, only changed for updates)
node tools/translation/translate_plan.js <file-or-folder> --locale en --out /tmp/job.json

# 3. Translate: fill each block's "translation" in /tmp/job.json
#    (for new pages, also edit "translated_frontmatter")

# 4. Apply: write the locale file (anchors, merge, overwrite rule, frontmatter)
node tools/translation/translate_apply.js --job /tmp/job.json [--dry-run]
```

`yarn translate:plan` and `yarn translate:apply` are shortcuts for steps 2 and 4.

## How tracking works (short version)

- Each translated block carries an invisible HTML-comment **anchor** recording
  the hash of the German block it came from: `<!--t src=9f3a2b-->`.
- A hand-corrected block is marked **protected** by adding `by`/`on`:
  `<!--t src=7c1d44 by="Name" on=2026-06-05-->`.
- On update, only blocks whose German hash changed are re-translated; everything
  else (including protected human text) is kept verbatim.
- If a _protected_ block's German source changed, `apply` keeps the old human
  text as a comment, inserts the new machine translation, stamps
  `overwritten_on=…` on the anchor, and raises `custom_translation_overwritten`
  - a `translation_review` entry in the frontmatter for a human to reconcile.

See `translate-jpe.md` §3&mdash;§9 for the full spec.

## Notes & limits

- **`.md` only.** Anchors are HTML comments, valid in Docusaurus CommonMark
  (`format: 'md'`). The docs tree is currently all `.md`. For `.mdx` the comment
  syntax would need to become `{/* … */}` (not yet implemented).
- Block hashing normalizes whitespace (trailing-ws + leading/trailing blank
  lines) before hashing, so cosmetic reflows don't trigger re-translation.
- `apply` is authoritative: it re-reads the current files and recomputes the
  alignment, so a slightly stale job won't corrupt output — it just needs every
  changed block's `translation` filled in (it errors and skips the file if not).
