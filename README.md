# 🔍 mcp-find

**Search for MCP Servers right from your terminal.**  
Powered by [mcprepository.com](https://mcprepository.com) — the official MCP Server Repository.

---

## 📦 About

`mcp-find` is a simple CLI tool that helps you discover **MCP Servers** (Model Context Protocol) using the public search API from [mcprepository.com](https://mcprepository.com).

Whether you're building AI agents, automation tools, or protocol-based applications — quickly find the MCP Server you need.

---

## 🚀 Installation

You can use it instantly via `npx`:

```bash
npx mcp-find <search-term>
```

Or install globally:

```bash
npm install -g mcp-find
```

## 🔍 Usage

```bash
mcp-find slack
```

Example output:

```
🔍 Searching for MCP servers matching: "slack"...

slack — Slack MCP Server: ★ 28.3k — MCP server for interacting with Slack
→ https://mcprepository.com/modelcontextprotocol/slack

slack-user-mcp — Slack User MCP Server: ★ 3 — MCP server for interacting with Slack as a user
→ https://mcprepository.com/lars-hagen/slack-user-mcp
```

## 🌐 Powered by MCPRepository

This tool uses the official MCP Server index API:

```
GET https://mcprepository.com/api/search?q=<query>
```
