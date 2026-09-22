---
name: provide-illustration-image-for-page
description: Find a freely licensed (Creative Commons, public domain, GPL/GFDL) illustration image for a docs page (from three words taken from the page, or from keywords the user gives), download candidates to static/img/proposal, let the user pick one and a target folder (kd, sw or img root), then set the page's `image:` front matter, credit and banner. Use when asked to "find/provide an image for this page", "illustrate this page", or "add a social card image", or "provide image for the idea: X, Y".
---

# Provide an illustration image for a page

Finds a freely licensed image that illustrates a docs page, lets the user choose,
and wires it into the page.

## Input

- **Page**: a `.md`/`.mdx` file under `docs/` (or `blog/`). If the user doesn't
  name one, use the file currently open in the IDE; if there is none, ask.
- **Keywords** (optional): the user may give the search words directly, e.g.
  "use the keywords summary, compression" or "provide image for the idea:
  summary, compression". Any number of words is fine, not just three.

## 1. Three describing words

If the user gave keywords, use those and skip the rest of this step: don't
derive words from the page, and don't add your own. Translate them to English
for the search if needed, keep German equivalents for file names, and still
read the page for the file name and the banner alt text.

Otherwise, read the page (title, description, tags, headings, body). Pick **three words**
that capture what the page is about, preferring concrete, picturable concepts
over abstract ones (e.g. "mirror, self-portrait, reflection" beats
"Selbsteinschätzung, Kompetenz, Übung"). Image archives are mostly indexed in
English, so search with the English words; keep the German equivalents for file
names.

Tell the user the three words in one line before searching. Don't wait for
approval; the user can redirect after seeing results.

## 2. Search for licensed images

Accept only these licenses:

- **OK**: CC0, Public Domain / PDM, CC BY, CC BY-SA (any version), GPL, GFDL,
  other libre licenses (e.g. Free Art License).
- **Reject**: anything with **NC** (non-commercial) or **ND** (no derivatives),
  "fair use", "all rights reserved", unknown or missing license.

Use the two APIs below (both work with plain `curl`, no key). Combine all search
words in one query first; if that returns too little, try pairs or single words.

**Openverse** (aggregates Flickr, Wikimedia, museums; filters license server-side):

```bash
curl -s "https://api.openverse.org/v1/images/?q=mirror+reflection+portrait&license=cc0,pdm,by,by-sa&page_size=20"
```

Useful fields per result: `title`, `url` (direct file), `foreign_landing_url`,
`creator`, `license`, `license_version`, `width`, `height`.

**Wikimedia Commons** (best for paintings, historical and scientific images;
check `LicenseShortName` yourself):

```bash
curl -s -A "sprachlichtung-image-skill/1.0" "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=mirror%20reflection%20filetype:bitmap&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=1200&format=json"
```

Useful fields: `imageinfo[0].thumburl` (1200 px wide, use this rather than the
multi-MB original), `descriptionurl`, `extmetadata.LicenseShortName.value`,
`extmetadata.Artist.value` (HTML, strip tags).

Fall back to `WebSearch` only if both APIs come up empty, and then verify the
license on the image's source page before downloading.

Choose **about 5** candidates. Favor images that work as a wide banner and as
a social card: landscape orientation, at least ~800 px on the longer side, a clear subject,
no text-heavy screenshots, no logos or trademarks, no recognizable private
individuals. Mix sources and styles (painting, photo, drawing) so the user has
a real choice.

## 3. Download to `static/img/proposal/`

- Create `static/img/proposal/` if it's missing (`mkdir -p`; git doesn't keep
  the empty folder). Delete whatever is left in it from earlier runs, including
  the old `SOURCES.txt`.
- File names: `<german-page-topic>-<short-description>.<ext>`, lowercase, ASCII
  only (ä→ae, ö→oe, ü→ue, ß→ss), dashes, no underscores. Example:
  `selbsteinschaetzung-caravaggio-narziss.jpg`.
- Downscale so the image fits within **800×800 px** (longer side at most 800),
  keeping the aspect ratio, and save JPEGs at quality ~85, using Pillow
  (ImageMagick isn't installed). Grayscale images (engravings, drawings) are
  saved as single-channel, which keeps them smaller:

  ```bash
  python3 -c "from PIL import Image; import sys; p=sys.argv[1]; im=Image.open(p); im=im.convert('L' if im.mode in ('L','LA','1') else 'RGB'); im.thumbnail((800,800)); im.save(p, quality=85, optimize=True)" static/img/proposal/<file>.jpg
  ```

  Keep PNGs with transparency as PNG (skip the `convert`).

- Write `static/img/proposal/SOURCES.txt` with the page path on the first line,
  then for each image: file name, title, author, license (with version), source
  page URL.

Then look at each downloaded file with `Read` to make sure it shows what you
expect and isn't broken or a placeholder. Replace any bad one.

## 4. Ask the user

Use `AskUserQuestion` with two questions:

1. **Which image?** One option per candidate (label = short description, e.g.
   "Caravaggio, Narcissus"; description = author, license, why it fits). With
   more than 4 candidates, list them all in a short text message first and offer
   the top 4 as options (the user can name another via "Other").
2. **Where to?** `kd` (Kritisches Denken, `static/img/kd/`), `sw` (Sprach-Welten,
   `static/img/sw/`), or img root (`static/img/`). Put the folder that matches the
   page's docs tree first and mark it "(Recommended)".

## 5. Wire it into the page

1. Move the chosen file from `static/img/proposal/` to the target folder. If a
   file with that name already exists there, ask before overwriting.
2. Delete the other candidates and `SOURCES.txt` from `static/img/proposal/`.
3. In the page's front matter set (replace an existing or commented `# image:`
   line):

   ```yaml
   image: /img/kd/<imagename>
   image_credit: "<Author>, <Title>, <License>, <source page URL>"
   ```

   The path starts at `/img/...`, **never** `/static/...`: Docusaurus serves
   `static/` at the site root, so a `/static/` URL gives a 404. For the img root
   the path is `/img/<imagename>`.
4. If the page body doesn't already start with a banner image, insert one
   directly after the front matter, followed by a blank line:

   ```md
   ![<short German alt text describing what the image shows>](/img/kd/<imagename>)
   ```

   Write the alt text for this image; don't copy one from another page.
5. Don't touch the English translation under `i18n/en/`; the translation
   workflow handles that.

Finish by reporting the chosen image, its license and credit, and the changed
files. Don't commit unless the user asks.
