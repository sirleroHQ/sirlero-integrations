#!/usr/bin/env node
import {searchCatalog} from "../index.mjs";
const query = process.argv.slice(2).join(" ").trim();
if (!query || query === "--help") {
  console.log("Usage: sirlero <topic or writer name>");
} else {
  try {
    const {results,total} = await searchCatalog(query);
    console.log(total + " matches");
    for (const item of results) console.log(item.title + "\n" + item.url + "\n" + item.description + "\n");
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
