---
'@scaleway/sdk-client': minor
---

Stop pagination loops on aborted signal

`fetchAll`, `fetchPaginated` and the cursor-based equivalents now check
`signal.aborted` between pages and reject with `AbortError` when cancelled,
instead of walking (or dispatching) every remaining page. Pass `{ signal }`
as request options.
