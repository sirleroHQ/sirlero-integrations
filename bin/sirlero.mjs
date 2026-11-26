#!/usr/bin/env node
// Standalone Sirlero public search client, Node.js 20+.
const query = process.argv.slice(2).join(" ").trim();
if (!query || query === "--help") {
  console.log("Usage: node sirlero.mjs <topic or writer name>");
} else {
  const url = new URL("https://sirlero.com/api/v1/search");
  url.searchParams.set("q", query);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Search returned HTTP " + response.status);
    const {results,total} = await response.json();
    console.log(total + " matches");
    for (const item of results) console.log(item.title + "\n" + item.url + "\n" + item.description + "\n");
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
