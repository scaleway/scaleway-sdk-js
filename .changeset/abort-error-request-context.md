---
'@scaleway/sdk-client': patch
---

Add request context to AbortError

Aborts thrown or propagated by the fetcher now carry the request context
(`url`, `method`, `requestId`, and obfuscated `requestHeaders` via
`setRequestContext`), so error reporters such as Sentry can distinguish a
cancelled request from a real failure instead of seeing a bare
"signal is aborted without reason". Pagination and polling aborts also use a
descriptive message rather than the generic default.
