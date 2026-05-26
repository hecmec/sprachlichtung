# Add Sveltia CMS for Online Editing (no OAuth proxy needed)

[Sveltia CMS](https://sveltiacms.app) is a drop-in replacement for Decap CMS with one key advantage: the **access-token** login method lets each editor authenticate with their own GitHub Personal Access Token. No Netlify, no Cloudflare Workers, no OAuth proxy of any kind.

> **Best for:** You or a small team of developers who all have GitHub accounts and can generate a token once.

---

## How it works

Sveltia CMS is a single-page app served from `/admin/`. When an editor opens it, they click **Sign in with Token**, paste their GitHub Personal Access Token, and the CMS commits changes directly to the repo via the GitHub API. The token lives in the browser's `localStorage` and is never sent anywhere except the GitHub API.

```
Browser → Sveltia CMS → GitHub API (using personal token) → commit to main → GitHub Actions → redeploy
```

No server. No proxy. No third-party auth service.

---

## 1. Create the admin files

Both files go in `static/admin/`. Docusaurus copies `static/` verbatim to the build root, so the CMS will be available at `https://sprachlichtung.org/admin/`.

### `static/admin/index.html`

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SprachLichtung CMS</title>
  </head>
  <body>
    <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script>
  </body>
</html>
```

> **Note:** No CSS link tag needed — styles are bundled in the JS. Do not add `type="module"` to the script tag.

### `static/admin/config.yml`

```yaml
backend:
  name: github
  repo: hecmec/sprachlichtung # owner/repo
  branch: main

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

No `base_url` needed — that's the OAuth proxy setting, which we're not using.

---

## 2. Generate a GitHub Personal Access Token

Each editor needs their own token. Do this once per person.

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**
2. Set:
   - **Token name**: `SprachLichtung CMS`
   - **Expiration**: choose a reasonable period (90 days, 1 year, or no expiry)
   - **Repository access**: select only `hecmec/sprachlichtung`
   - **Permissions → Contents**: `Read and write`
   - **Permissions → Metadata**: `Read` (selected automatically)
3. Click **Generate token** and copy it immediately — GitHub shows it only once.

> **Classic tokens** also work if you prefer: grant the `public_repo` scope (sufficient for a public repo) or `repo` for a private one.

---

## 3. Sign in to the CMS

1. Open `https://sprachlichtung.org/admin/` in a browser.
2. Click **Sign in with Token**.
3. Paste the token from step 2 and confirm.

The token is saved in `localStorage` so you stay signed in across sessions on the same browser. To sign out, click the user icon in the CMS and choose **Sign out** — this clears the token from storage.

---

## 4. Deploy

No extra deploy steps. The `static/admin/` files are part of the repo, so `yarn build` picks them up automatically. The existing GitHub Actions workflow publishes them with the rest of the site.

Push the two new files to `main` and the next deploy makes the CMS live:

```bash
git add static/admin/
git commit -m "add Sveltia CMS"
git push
```

---

## Disabling token auth (optional)

If you later switch to an OAuth flow and want to prevent token login, add `auth_type` to the backend config:

```yaml
backend:
  name: github
  repo: hecmec/sprachlichtung
  branch: main
  # auth_type: pkce   # once GitHub supports it natively
  # auth_type: implicit  # disable token sign-in
```

Leave this out for now — the default allows token auth, which is what we want.

---

## Migrating from Decap CMS

If you already have `static/admin/` set up for Decap CMS, the migration is two changes:

1. **`index.html`**: swap the script `src` from  
   `https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js`  
   to  
   `https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js`

2. **`config.yml`**: remove the `base_url` line (the Netlify proxy URL). Everything else stays the same.

---

## Security notes

| Concern                        | Detail                                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Token stored in `localStorage` | Accessible to any JS on the same origin (`/admin/`). Keep the admin URL unlinked from the public site.                                                             |
| Token scope                    | Use fine-grained tokens scoped to a single repo — limits blast radius if a token leaks.                                                                            |
| Token expiry                   | Set an expiry and rotate periodically. Expired tokens simply fail to authenticate; no data is lost.                                                                |
| Who can log in                 | Anyone with a valid token for this repo. There is no user list in the CMS itself — access is controlled entirely by who has a token with write access to the repo. |
