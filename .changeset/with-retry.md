---
'@scaleway/sdk-client': minor
---

feat(client): add optional HTTP retry on 429/503 via withRetry

Opt-in `withRetry()` retries transient failures with exponential backoff,
honours `Retry-After` (capped by `maxDelay`), retries 429 on all methods,
and retries 503/network errors only on idempotent methods (GET/PUT/DELETE).
