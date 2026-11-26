# Sirlero integrations

Search and read published pages from [Sirlero](https://sirlero.com/) with the [public API](https://sirlero.com/docs/), CLI, or MCP. No account or key is required.

## CLI

Run `node bin/sirlero.mjs FinOps` using Node.js 20 or later. Results include titles, descriptions, and source URLs.

## Agent skill

Read the [search-sirlero skill](skills/search-sirlero/SKILL.md). Install it with `npx skills add sirleroHQ/sirlero-integrations --skill search-sirlero`.

## MCP

Connect a Streamable HTTP client to `https://sirlero.com/mcp`. Use `search_sirlero` to locate pages and `read_sirlero_page` to retrieve their Markdown. Cite the canonical URL from each search result.
