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

| Location | Reference as | Use for |
| --- | --- | --- |
| `static/img/foo.png` | `/img/foo.png` | Site-wide assets: banners, logos, icons reused across chapters |
| `{chapter}/img/foo.png` | `./img/foo.png` | Chapter-specific images |

Prefer the **chapter-local `img/` folder** for anything used by a single chapter. The file moves
and gets deleted together with the chapter, and the relative path is validated at build time.

Filenames: lowercase, dashes, ASCII only. No spaces, no umlauts, no accents. A file named
`banner-rationalistät-humains.png` or `Capture d'écran du 2025-07-03.png` causes URL-encoding
trouble and is awkward to reference from every locale.

## The four reference forms

### 1. Markdown image: `![alt](...)`

```markdown
![Silk carpet](/img/banner-met-silk-carpet.jpg)     <!-- from static/ -->
![Venn diagram](./img/venn-diag-regen-nass.png)     <!-- chapter-local -->
```

Both forms are resolved to a real file at build time and bundled by webpack. Output:

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
image: /img/banner-bibiliothek.webp
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

Because the value is not bundled, a chapter-local image can only be used here if it is *also*
copied into `static/img/`. For chapter-local art, either copy the file or point the social card
at a shared banner.

## Summary table

| Form | Path style | Bundled + hashed | Missing file |
| --- | --- | --- | --- |
| `![alt](/img/x.png)` | URL, no `static/` | yes | build error |
| `![alt](./img/x.png)` | relative to the `.md` | yes | build error |
| `<img src="/img/x.png">` | URL, no `static/` | no | silent 404 |
| `require('@site/static/img/x.png')` | filesystem, with `static/` | yes | build error |
| frontmatter `image:` | URL, no `static/`, absolute only | no | silent broken card |

## Localised content

Files under `i18n/{locale}/docusaurus-plugin-content-docs/current/` follow the same rules.
Relative paths resolve from the **translated** file's location, not from the German original,
so a chapter-local `./img/x.png` needs the image present under the locale tree as well.
Site-absolute `/img/...` works from every locale unchanged and is the simpler choice for
anything shared between locales.

Chapter folders containing umlauts have caused relative-path resolution problems before, in
links as well as images. If a relative reference out of such a folder misbehaves, switch that
reference to the site-absolute `/img/...` form.

## Known issues in this repo

- `siteConfig.url` in `docusaurus.config.ts` is still `https://hecmec.github.io`, but the site
  deploys to <https://sprachlichtung.org> via Coolify. Every `og:image` is therefore built on
  the wrong host and social cards resolve to nothing.
- Roughly 114 pages use the relative frontmatter form `image: ../img/...`, which produces the
  broken `.../../img/...` URL shown above.

## Checking your work

```bash
yarn build     # markdown images and require() are verified here
```

Forms 2 and 4 are not covered by the build. To check those, run `yarn serve` and inspect the
page, or grep the built HTML:

```bash
grep -o 'og:image" content="[^"]*"' build/docs/<path>/index.html
```
