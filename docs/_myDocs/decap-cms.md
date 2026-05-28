# Add Decap CMS for Online Editing

[Decap CMS](https://decapcms.org/) (formerly Netlify CMS) adds a browser-based editor to your GitHub-hosted Docusaurus site. Editors visit `/admin/`, log in with GitHub, and write or edit content without touching the terminal. Changes are committed directly to the repo, which triggers the GitHub Actions deploy pipeline.

---

## How it works

Decap CMS is a single-page app you host alongside your site (`static/admin/`). It talks directly to the GitHub API and commits changes to your repo. Because GitHub Pages is a static host, it cannot complete the GitHub OAuth handshake itself — that step needs a server with a client secret. The simplest free option is **Netlify's built-in OAuth gateway** (`https://api.netlify.com`): you don't host anything on Netlify, you just install a GitHub provider in a Netlify site and Decap routes the login through it.

```
Browser → Decap CMS → api.netlify.com (OAuth gateway) → GitHub API → commit to main → GitHub Actions → redeploy
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

`base_url` defaults to `https://api.netlify.com` so you don't need to set it.
But because the admin page is served from **GitHub Pages**, not Netlify, you
**do** need `site_domain` — otherwise Decap sends `site_id=<your-pages-host>`
to the gateway, no Netlify site matches that domain, and the login redirect
returns a 404. Set it to the `.netlify.app` subdomain of the dummy Netlify
site you create in step 3:

```yaml
backend:
  name: github
  repo: hecmec/sprachlichtung # owner/repo
  branch: main
  site_domain: heroic-seahorse-7f141c.netlify.app # the Netlify site from step 3

media_folder: static/img/uploads
public_folder: /sprachlichtung/img/uploads
```

The live [static/admin/config.yml](../../static/admin/config.yml) defines four collections — `kritisches-denken`, `sprach-welten`, and their `-en` translation counterparts. Each one sets:

```yaml
nested:
  depth: 100
  summary: "{{title}}"
  subfolders: false
meta:
  path: { widget: string, label: "Path" }
```

`subfolders: false` is the key line: it tells Decap the entries are slug-named `.md` files living inside subfolders (e.g. `010-einfuehrung.../010-was-ist…md`), **not** `index.md` files. This is what surfaces the full folder tree in the editor — the capability Sveltia lacked.

> **Adjust `repo:`** to match the actual GitHub owner/repo if the org name changes.

---

## 2. Register a GitHub OAuth App

Decap CMS uses GitHub OAuth to authenticate editors. You only need to do this once.

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Fill in:
   - **Application name**: SprachLichtung CMS
   - **Homepage URL**: `https://sprachlichtung.org`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`  
     _(this is Netlify's fixed gateway callback — it is the same for everyone)_
3. Click **Register application**
4. Copy the **Client ID** and generate a **Client secret** — you'll need both in step 3.

---

## 3. Set up the Netlify OAuth proxy

GitHub Pages cannot complete the OAuth handshake, so Decap routes login through Netlify's shared gateway at `https://api.netlify.com`. You just need *a* Netlify site that holds your GitHub provider credentials — it does not have to host this project.

1. Create a free account at [netlify.com](https://netlify.com) if you don't have one.
2. In the Netlify dashboard: **Add new site** — connect the `hecmec/sprachlichtung` repo, or deploy any dummy site. The deploy itself is irrelevant; we only need the site's OAuth settings.
3. Note the site's auto-generated **`<adjective-noun-hex>.netlify.app`** subdomain — you'll paste it as `site_domain` in `config.yml` (step 1).
4. Go to **Site configuration → Access & security → OAuth**.
5. Under **Authentication providers**, click **Install provider → GitHub**.
6. Paste your GitHub OAuth **Client ID** and **Client secret** from step 2, and save.

No `base_url` or callback edits needed — Decap's default `base_url` is `https://api.netlify.com` and the GitHub OAuth App callback (`https://api.netlify.com/auth/done`) already points at this gateway. The one required `config.yml` change is `site_domain`, covered in step 1.

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
| "Unable to authenticate" on login | GitHub OAuth App callback isn't `https://api.netlify.com/auth/done`, or the provider isn't installed on a Netlify site |
| 404 at `api.netlify.com/auth?...&site_id=<github-pages-host>` | Missing `site_domain` in `config.yml` — Decap defaulted to the GitHub Pages hostname, which Netlify can't resolve. Set `site_domain` to the dummy Netlify site's `.netlify.app` subdomain |
| Changes not appearing on site     | GitHub Actions deploy not triggered; check the Actions tab                         |
| Images not showing after upload   | `media_folder` / `public_folder` mismatch in config                                |
| Files created in wrong folder     | Check the `folder:` path in the collection config matches actual `docs/` structure |
| Subfolder files not listed        | Ensure each collection has `nested: { subfolders: false }` (slug-named files, not `index.md`) |
