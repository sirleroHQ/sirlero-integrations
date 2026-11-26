/** Search public pages. Pass the same query and the previous next_cursor to continue. */
export async function searchCatalog(query, {cursor, signal} = {}) {
  if (typeof query !== "string" || !query.trim() || query.length > 200) {
    throw new TypeError("Supply a search query of 1 to 200 characters.");
  }

  const url = new URL("https://sirlero.com/api/v1/search");
  url.searchParams.set("q", query);
  if (cursor != null) url.searchParams.set("cursor", cursor);

  const response = await fetch(url, {signal});
  if (!response.ok) {
    const error = new Error("Sirlero search returned HTTP " + response.status);
    error.status = response.status;
    error.retryAfter = response.headers.get("Retry-After");
    throw error;
  }
  return response.json();
}
