---
title: Media usage (images and other assets)
description: "Where to store images and how to reference them from frontmatter, Markdown, HTML and require()"
---

# Media usage

How to store images in this site and how to reference them. Verified against Docusaurus 3.9.2.

> This file lives in `docs/_tutorial/`. The leading `_` excludes it from the build, so it is
> internal reference only and never published.

## The one rule that causes most breakage

`static/` **is** the web root. Docusaurus strips it at build time, so `static/img/foo.png`
is served at `/img/foo.png`.

- A **URL** (Markdown image, HTML `src`, frontmatter `image`) never contains `static/`.
- A **filesystem path** (`require(...)`) always contains `static/`.

Writing `/static/img/foo.png` in a Markdown image is the single most common mistake. It fails
the build with `couldn't be resolved to an existing local image file`.

## Where to store the file

**All images live under `static/img/`.** There are no image folders inside `docs/` or `i18n/`.

| Folder | Reference as | Contents |
| --- | --- | --- |
| `static/img/kd/` | `/img/kd/foo.png` | Kritisches Denken |
| `static/img/sw/` | `/img/sw/foo.png` | Sprach-Welten |
| `static/img/misc/` | `/img/misc/foo.png` | Everything else |
| `static/img/` | `/img/foo.png` | Site-level assets: logo, favicon, shared icons |

Because every reference is site-absolute, the same path works from German, English and French
without duplicating the file per locale.

Blog posts are the one exception: they keep assets co-located in `blog/YYYY-MM-DD-slug/`, which
is the standard Docusaurus pattern.

Filenames: lowercase, dashes, ASCII only. No spaces, no umlauts, no accents. A file named
`banner-rationalistät-humains.png` or `Capture d'écran du 2025-07-03.png` causes URL-encoding
trouble and is awkward to reference from every locale. Use a topic prefix (`bias_`, `ct_`,
`logic_`, `fallacies_`) instead of nesting deeper folders.

## The four reference forms

### 1. Markdown image: `![alt](...)`

```markdown
![Silk carpet](/img/kd/banner-met-silk-carpet.jpg)
![Venn diagram](/img/kd/venn_diag_regen_nass.png)
```

The path is resolved to a real file at build time and bundled by webpack. Output:

```html
<img alt="Silk carpet" src="/assets/images/banner-met-silk-carpet-281f93f9.jpg"
     width="1000" height="212" loading="lazy" decoding="async">
```

You get content hashing (long-lived caching), automatic `width`/`height` (no layout shift),
lazy loading, and image-zoom support. **A missing file fails the build.** This is the
preferred form for content images.

### 2. HTML `<img>` in MDX

```html
<img src="/img/kompass.svg" alt="Kompass" height="30" />
```

A plain URL. **Not** resolved, **not** bundled, **not** checked. It is served from the verbatim
copy of `static/` in `build/img/`. A typo here fails silently as a 404 at runtime, so only use
this when you need attributes that Markdown cannot express, and double-check the path.

### 3. `require()` in MDX

```jsx
<img src={require('@site/static/img/tiktok.png').default} alt="tiktok ads" height="30" />
```

This is the **bundled** version of form 2. Use it when you need HTML attributes (inline styles,
sizing) *and* build-time verification.

The argument is a **filesystem path**, so it does include `static/`. Use the `@site/` alias
rather than `../../static/...`, so the path does not change when the file is moved. A missing
file fails the build.

### 4. Frontmatter `image:`

```yaml
---
title: Was ist kritisches Denken?
image: /img/kd/banner-bibiliothek.webp
---
```

This sets the `og:image` / `twitter:image` social card. It is a **raw URL**, pasted into the
meta tag with `siteConfig.url` in front. It is not resolved and not bundled, and a wrong value
never fails the build.

Therefore it **must be site-absolute** (`/img/...`) or a full external URL. A relative path
silently produces a broken social card:

```yaml
image: ../img/ulb-pc-intro.png
```

```html
<!-- built output, broken -->
<meta property="og:image" content="https://hecmec.github.io/../img/ulb-pc-intro.png">
```

Since every image already lives under `static/img/`, the correct value is always just the
`/img/...` URL of the file.

## Summary table

| Form | Path style | Bundled + hashed | Missing file |
| --- | --- | --- | --- |
| `![alt](/img/kd/x.png)` | URL, no `static/` | yes | build error |
| `<img src="/img/kd/x.png">` | URL, no `static/` | no | silent 404 |
| `require('@site/static/img/kd/x.png')` | filesystem, with `static/` | yes | build error |
| frontmatter `image:` | URL, no `static/`, absolute only | no | silent broken card |

## Localised content

Files under `i18n/{locale}/docusaurus-plugin-content-docs/current/` use exactly the same
`/img/...` URLs as the German originals. Nothing needs copying per locale, and translating a
page never requires touching its image paths.

This is also why relative paths were dropped: they resolve from the **translated** file's
location, and chapter folders containing umlauts have caused resolution failures in the past,
for links as well as images.

## Notes

The site-wide social card (`themeConfig.image`) currently points at `img/ct_brain-workout.webp`
as a stand-in. The original `docusaurus-social-card.jpg` was deleted long ago. A purpose-made
1200x630 card would be better.

Note that `siteConfig.url` is prepended to every `og:image`, `og:url`, `rel=canonical` and
`sitemap.xml` entry. If the deployment host ever changes again, that one field is the only
thing to update.

## Checking your work

```bash
yarn build     # markdown images and require() are verified here
```

Forms 2 and 4 are not covered by the build. To check those, run `yarn serve` and inspect the
page, or grep the built HTML:

```bash
grep -o 'og:image" content="[^"]*"' build/docs/<path>/index.html
```
