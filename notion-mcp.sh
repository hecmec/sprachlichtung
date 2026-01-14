#!/usr/bin/env bash
# this is a test script to run the Notion MCP server locally
# it reads the NOTION_API_KEY from the environment or a .env file
# and sets the OPENAPI_MCP_HEADERS environment variable accordingly
# then it starts the Notion MCP server using npx
set -euo pipefail
if [ -f .env ]; then
  set -a
  source .env
  set +a
fi
if [ -z "${NOTION_API_KEY:-}" ]; then
  echo "NOTION_API_KEY missing" >&2
  exit 1
fi
echo "[notion-mcp] Key length: ${#NOTION_API_KEY}"
export OPENAPI_MCP_HEADERS=$(jq -cn --arg k "$NOTION_API_KEY" '{Authorization:"Bearer "+$k,"Notion-Version":"2022-06-28"}')
echo "[notion-mcp] Starting Notion MCP server..."
exec npx -y @notionhq/notion-mcp-server