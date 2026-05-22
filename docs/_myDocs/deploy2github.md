# Deploy SprachLichtung to GitHub Pages

This guide covers deploying this site to GitHub Pages as the primary host for `sprachlichtung.org`.

---

## Prerequisites

- The GitHub repo must be **public** (GitHub Pages is free for public repos). For private repos it requires a paid GitHub plan (Team or higher).
- You need push access to the `immanuellupinus/sprachlichtung` repository.
- Node.js ≥ 18 and yarn installed locally.

---

## 1. Verify `docusaurus.config.ts` settings

These fields in `docusaurus.config.ts` must match your GitHub setup:

```ts
url: "https://sprachlichtung.org",   // your custom domain, or https://immanuellupinus.github.io
baseUrl: "/",                         // "/" if using custom domain, "/sprachlichtung/" if not
organizationName: "immanuellupinus",       // GitHub username or org
projectName: "sprachlichtung",        // exact repo name
```

> **If you have no custom domain**, set `url` to `https://mental-web.github.io` and `baseUrl` to `/sprachlichtung/`.
> With a custom domain (`sprachlichtung.org`), keep `baseUrl: "/"`.

The `localeConfigs` `url` values also need updating if you're using locale-specific subdomains (`de.sprachlichtung.org`, `en.sprachlichtung.org`) — those require separate DNS records pointing to GitHub Pages.

---

## 2. Enable GitHub Pages in the repo settings

1. Go to `https://github.com/mental-web/sprachlichtung` → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`
3. Set branch to `gh-pages`, folder `/` (root)
4. Click **Save**

The `gh-pages` branch is created automatically on first deploy (step 4 below).

---

## 3. Set up a custom domain (optional)

If pointing `sprachlichtung.org` to GitHub Pages:

1. In repo **Settings → Pages → Custom domain**, enter `sprachlichtung.org` and save.  
   This creates a `CNAME` file on the `gh-pages` branch automatically.
2. At your DNS registrar, add these records:

   | Type  | Name  | Value                  |
   | ----- | ----- | ---------------------- |
   | A     | `@`   | `185.199.108.153`      |
   | A     | `@`   | `185.199.109.153`      |
   | A     | `@`   | `185.199.110.153`      |
   | A     | `@`   | `185.199.111.153`      |
   | CNAME | `www` | `mental-web.github.io` |

3. Enable **Enforce HTTPS** in the Pages settings once DNS propagates.

> The existing Railway deployment points to the same domain. Point DNS to GitHub Pages only when you're ready to cut over. Both can coexist during transition by keeping Railway live until GitHub Pages is confirmed working.

---

## 4. Deploy manually

```bash
# Deploy using SSH (recommended if you have SSH keys on GitHub)
USE_SSH=true yarn deploy

# Or using HTTPS credentials
GIT_USER=hecmec yarn deploy
```

This runs `yarn build` then force-pushes the `build/` output to the `gh-pages` branch.

---

## 5. Automate with GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: yarn
      - run: yarn install --frozen-lockfile
      - run: yarn build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

With this in place, every push to `main` triggers a rebuild and redeploy automatically. No manual `yarn deploy` needed.

---

## Public vs. Private repo

|                 | Public repo                                                  | Private repo                              |
| --------------- | ------------------------------------------------------------ | ----------------------------------------- |
| GitHub Pages    | Free                                                         | Requires GitHub Team plan ($4/user/month) |
| Site visibility | Site is always public even if repo is private (on paid plan) | Same                                      |
| Source code     | Visible to everyone                                          | Hidden                                    |

For an open educational site like SprachLichtung, a **public repo is the natural fit** and keeps everything free.

---

## What to do with the Dockerfile

The `Dockerfile` (used by Railway) becomes unused if you move fully to GitHub Pages. You can keep it in the repo in case you ever need Docker-based deployment again — it does no harm.
