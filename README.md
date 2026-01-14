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


## Theme component overrides



### Notion sync

Official Notion MCP: https://developers.notion.com/docs/mcp
Getting started: https://developers.notion.com/docs/get-started-with-mcp

https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_configuration-format


custom mcp server: https://github.com/makenotion/notion-mcp-server/tree/main
