# Website

Source: https://github.com/hecmec/sprachlichtung

Tasks: https://github.com/users/hecmec/projects/1/views/1

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start

yarn run start --locale en
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Clear build cache

```bash
rm -rf .docusaurus build
```

or you do a clear
```
docusaurus clear
```

## Deployment on GitHub Pages

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch

## Deployment on Railway

https://github.com/rudemex/railway-docusaurus-v3

## Versioning

## Translation

https://docusaurus.io/docs/i18n/tutorial

### run english version

```bash
yarn run start --locale en
```

### files

**code.json**:  defines all text labels used in the React code.

### automatic translation with AI

https://github.com/moonrailgun/docusaurus-i18n/tree/master

## Theme component overrides

Placing a file under `src/theme/` (e.g. `src/theme/NavbarItem/LocaleDropdownNavbarItem.tsx`) overrides a Docusaurus theme component.

Development:
1. If the dev server is not running: `yarn start` is enough.
2. If the dev server is already running when you create a brand‑new file, restart once so it picks it up.
3. Hot reload will apply subsequent edits automatically.

You only need `yarn build` for a production build; not required just to integrate or test a new component.


