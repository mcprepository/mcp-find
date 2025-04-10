#!/usr/bin/env node

import fetch from 'node-fetch';
import chalk from 'chalk';

const query = process.argv[2];

if (!query) {
    console.log(chalk.red('❌ Please provide a search term.'));
    console.log(chalk.gray('Usage: mcp-find <search>'));
    process.exit(1);
}

const endpoint = `https://mcprepository.com/api/search?q=${encodeURIComponent(query)}`;

console.log(chalk.blue(`🔍 Searching for MCP servers matching: "${query}"...\n`));

try {
    const res = await fetch(endpoint);
    const results = await res.json();

    if (!results.length) {
        console.log(chalk.yellow('⚠️ No MCP servers found.'));
        process.exit(0);
    }

    for (const item of results) {
        const link = `https://mcprepository.com/${item.username}/${item.slug}`;
        console.log(`${chalk.green(item.slug)} — ${item.description}`);
        console.log(chalk.gray(`→ ${link}\n`));
    }
} catch (err) {
    console.error(chalk.red('❌ Failed to fetch results:'), err.message);
}
