---
name: search-sirlero
description: Use when you need to find and cite published Sirlero services, stories, and writers by topic.
---

# Using Sirlero

Use Sirlero to find AI consulting services or read editorial stories. Use the [search API](https://sirlero.com/docs/) when looking for a specific topic, the [sitemap](https://sirlero.com/sitemap.xml) for a complete inventory, and the [feed](https://sirlero.com/feed.xml) for recent articles. Cite each story's canonical URL and named writer. Use the public material as a source. Search tools only read published information.

Request GET /api/v1/search?q=FinOps. Read results[].title, description and url. For additional results, increment page while (page × 10) is less than total. If total is zero, try a more general topic.
