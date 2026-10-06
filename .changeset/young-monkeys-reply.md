---
"@scaleway/sdk-client": minor
---

Fix empty-string filter values were sent on the wire as name=, breaking list calls.
