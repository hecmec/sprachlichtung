# Add Decap CMS for Online Editing

[Decap CMS](https://decapcms.org/) (formerly Netlify CMS) adds a browser-based editor to your GitHub-hosted Docusaurus site. Editors visit `/admin/`, log in with GitHub, and write or edit content without touching the terminal. Changes are committed directly to the repo, which triggers the GitHub Actions deploy pipeline.

---

## How it works

Decap CMS is a single-page app you host alongside your site (`static/admin/`). It talks directly to the GitHub API and commits changes to your repo. Because GitHub Pages is a static host, it cannot complete the GitHub OAuth handshake itself — that step needs a server holding the client secret.

We use a **self-hosted OAuth proxy deployed to Netlify** (a tiny serverless app, e.g. [vencax/netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)). Decap sends users to `<our-proxy>/auth`, the proxy redirects to GitHub, GitHub redirects back to `<our-proxy>/callback` with a code, the proxy exchanges the code for a token using its env-var-stored client secret, and `postMessage`s the token back to the admin tab.

> **Why not Netlify's built-in `api.netlify.com` gateway?** That gateway still exists, but Netlify deprecated Decap CMS support, and the gateway's `/auth/done` page postMessages with origin `https://api.netlify.com`. Decap then checks the message origin against `base_url`. If you ever want both flows or need to point at a different OAuth proxy, the same `base_url` machinery is what you'd configure — so the proxy approach is more flexible and self-contained.

```
Browser → /admin/ on GitHub Pages
       → <proxy>.netlify.app/auth      (popup opens)
       → github.com/login/oauth        (user authorizes)
       → <proxy>.netlify.app/callback  (proxy exchanges code → token)
       → postMessage(token) back to /admin/
       → Decap commits to main → GitHub Actions → redeploy
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

Set `base_url` to the proxy's URL (from step 3). Don't set `site_domain` —
that's only for Netlify's built-in `api.netlify.com` gateway; the self-hosted
proxy reads its credentials from its own env vars and ignores `site_id`.

```yaml
backend:
  name: github
  repo: hecmec/sprachlichtung # owner/repo
  branch: main
  base_url: https://heroic-seahorse-7f141c.netlify.app # the proxy from step 3

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
   - **Authorization callback URL**: `https://<your-proxy>.netlify.app/callback`  
     _(must match the proxy's callback route — `/callback` for [vencax/netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider). You'll have the proxy URL after step 3; if you do these out of order, come back and edit it.)_
3. Click **Register application**
4. Copy the **Client ID** and generate a **Client secret** — you'll need both as env vars on the proxy in step 3.

---

## 3. Deploy the OAuth proxy to Netlify

We deploy a tiny self-hosted OAuth proxy. The popular and battle-tested choice is [vencax/netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider) — its README has a one-click "Deploy to Netlify" button.

1. Create a free account at [netlify.com](https://netlify.com) if you don't have one.
2. Click the **Deploy to Netlify** button on the proxy's README. Netlify will fork the repo and ask for two **environment variables**:
   - `OAUTH_CLIENT_ID` — the GitHub OAuth App **Client ID** from step 2
   - `OAUTH_CLIENT_SECRET` — the GitHub OAuth App **Client secret** from step 2
3. After deploy, Netlify gives you a `<adjective-noun-hex>.netlify.app` subdomain. Paste this into `config.yml` as `base_url` (step 1).
4. Visit `https://<subdomain>.netlify.app/` — it should show "GitHub OAuth Proxy" with config instructions. That confirms the deploy worked.
5. **Go back to your GitHub OAuth App (step 2) and update the Authorization callback URL** to `https://<subdomain>.netlify.app/callback` if you left a placeholder.

> **Sanity check:** the GitHub OAuth App callback URL and the proxy URL must agree on the same hostname and path (`/callback` for vencax). Mismatch → after GitHub auth the popup ends up on `api.netlify.com/auth/done` (or wherever the old callback pointed), Decap rejects the postMessage because the origin doesn't match `base_url`, and the popup hangs at "Authorized" forever.

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
| "Unable to authenticate" on login | GitHub OAuth App callback doesn't match the proxy's callback URL (should be `https://<proxy>.netlify.app/callback`), or `OAUTH_CLIENT_ID`/`OAUTH_CLIENT_SECRET` env vars are unset/wrong on the Netlify proxy |
| Popup reaches "Authorized" then hangs (in any browser) | GitHub OAuth App callback URL points somewhere other than the proxy (e.g. left at `api.netlify.com/auth/done`), so `postMessage` origin mismatches `base_url`. Fix the callback in GitHub OAuth App settings |
| `base_url` mismatch / "multiple popups blocked" in console | Downstream symptom of the row above — once the handshake fails Decap tries to reopen a popup and the browser blocks it because click activation expired |
| Changes not appearing on site     | GitHub Actions deploy not triggered; check the Actions tab                         |
| Images not showing after upload   | `media_folder` / `public_folder` mismatch in config                                |
| Files created in wrong folder     | Check the `folder:` path in the collection config matches actual `docs/` structure |
| Subfolder files not listed        | Ensure each collection has `nested: { subfolders: false }` (slug-named files, not `index.md`) |
