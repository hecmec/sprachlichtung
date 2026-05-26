# Add Decap CMS for Online Editing

[Decap CMS](https://decapcms.org/) (formerly Netlify CMS) adds a browser-based editor to your GitHub-hosted Docusaurus site. Editors visit `/admin/`, log in with GitHub, and write or edit content without touching the terminal. Changes are committed directly to the repo, which triggers the GitHub Actions deploy pipeline.

---

## How it works

Decap CMS is a single-page app you host alongside your site (`static/admin/`). It talks directly to the GitHub API and commits changes to your repo. Because GitHub Pages is a static host, it cannot handle the GitHub OAuth callback itself — you need a small auth proxy. The easiest free option is to register the site on **Netlify** solely for its OAuth proxy (you don't host anything there).

```
Browser → Decap CMS → GitHub OAuth (via Netlify proxy) → GitHub API → commit to main → GitHub Actions → redeploy
```

---

## 1. Create the admin files

Decap CMS needs two files under `static/admin/`. Docusaurus copies everything in `static/` verbatim to the build root, so they will be served at `/admin/`.

### `static/admin/index.html`

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SprachLichtung CMS</title>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </head>
  <body></body>
</html>
```

### `static/admin/config.yml`

```yaml
backend:
  name: github
  repo: hecmec/sprachlichtung # owner/repo
  branch: main
  base_url: https://YOUR-NETLIFY-SITE.netlify.app # OAuth proxy (step 3)

# Uploaded images go into static/img/uploads/
media_folder: static/img/uploads
public_folder: /img/uploads

# i18n — German is default, English is secondary
i18n:
  structure: multiple_folders
  locales: [de, en]
  default_locale: de

collections:
  - name: kritisches-denken
    label: Kritisches Denken
    folder: docs/kritisches-denken
    create: true
    extension: md
    format: frontmatter
    i18n: true
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Description, name: description, widget: string, required: false }
      - { label: "Sidebar position", name: sidebar_position, widget: number, required: false }
      - { label: Tags, name: tags, widget: list, required: false }
      - { label: Body, name: body, widget: markdown }

  - name: sprach-welten
    label: Sprach-Welten
    folder: docs/sprach-welten
    create: true
    extension: md
    format: frontmatter
    i18n: true
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Description, name: description, widget: string, required: false }
      - { label: "Sidebar position", name: sidebar_position, widget: number, required: false }
      - { label: Tags, name: tags, widget: list, required: false }
      - { label: Body, name: body, widget: markdown }
```

> **Adjust `repo:`** to match the actual GitHub owner/repo if the org name changes.

---

## 2. Register a GitHub OAuth App

Decap CMS uses GitHub OAuth to authenticate editors. You only need to do this once.

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Fill in:
   - **Application name**: SprachLichtung CMS
   - **Homepage URL**: `https://sprachlichtung.org`
   - **Authorization callback URL**: `https://YOUR-NETLIFY-SITE.netlify.app/callback`  
     _(replace with your Netlify proxy URL from step 3)_
3. Click **Register application**
4. Copy the **Client ID** and generate a **Client secret** — you'll need both in step 3.

---

## 3. Set up the Netlify OAuth proxy

GitHub Pages cannot receive the OAuth redirect, so Decap CMS needs a tiny server to complete the handshake. Netlify's free tier provides this with zero configuration.

1. Create a free account at [netlify.com](https://netlify.com) if you don't have one.
2. In the Netlify dashboard: **Add new site → Deploy manually** — drag any dummy `index.html` (the content doesn't matter, it's just a proxy).
3. Go to **Site configuration → Access & security → OAuth**
4. Under **Authentication providers**, click **Install provider → GitHub**
5. Paste your GitHub OAuth **Client ID** and **Client secret** from step 2.
6. Note your Netlify site's URL (e.g. `https://jolly-fox-abc123.netlify.app`).
7. Update two places with this URL:
   - `base_url` in `static/admin/config.yml`
   - **Authorization callback URL** back in the GitHub OAuth App settings

---

## 4. Add `/admin/` to the Docusaurus navbar (optional)

In `docusaurus.config.ts`, add a navbar link so editors can find the CMS easily:

```ts
navbar: {
  items: [
    // ... existing items ...
    {
      href: '/admin/',
      label: 'CMS',
      position: 'right',
    },
  ],
},
```

You may want to keep this link hidden from public visitors — one option is to not add it to the navbar and instead only share the direct URL with editors.

---

## 5. Allow the GitHub Actions deploy to include the admin files

No extra config needed. Because `static/admin/` is part of the repo, `yarn build` copies it into the `build/` folder automatically, and the existing deploy workflow publishes it.

---

## 6. (Optional) Restrict who can log in

By default, any GitHub user who can access the repo can log into the CMS. Since the repo is public, tighten this:

- In the GitHub OAuth App settings, the app still only grants access to users who explicitly authorize it — random visitors cannot log in.
- For tighter control, add an `open_authoring: false` line (the default) and ensure collaborators list is managed in GitHub repo **Settings → Collaborators**.
- Or, switch to **Netlify Identity** (Netlify's user management) instead of GitHub OAuth: replace the backend block with `name: git-gateway` and configure Netlify Identity in the Netlify dashboard. This lets you invite specific email addresses regardless of GitHub account.

---

## Testing locally

Decap CMS does not run well on `localhost` because the OAuth flow expects the production URL. To test:

1. Deploy a branch to GitHub Pages (or use the preview URL from a Netlify deploy preview).
2. Visit `/admin/` on the deployed URL and log in.

Alternatively, use the **Decap CMS test-repo backend** for local iteration without touching real content:

```yaml
# static/admin/config.yml — local dev only, revert before committing
backend:
  name: test-repo
```

---

## Troubleshooting

| Problem                           | Likely cause                                                                       |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| "Unable to authenticate" on login | Callback URL mismatch between GitHub OAuth App and `base_url`                      |
| Changes not appearing on site     | GitHub Actions deploy not triggered; check the Actions tab                         |
| Images not showing after upload   | `media_folder` / `public_folder` mismatch in config                                |
| Files created in wrong folder     | Check the `folder:` path in the collection config matches actual `docs/` structure |
| Nested doc folders not editable   | Add a separate collection per subfolder, or use `nested: { depth: 10 }`            |
