---
'@scaleway/sdk-react': patch
---

fix SDKCacheProvider cache not populating on first setSdkInstance call

The cache started as `null` and `setSdkInstance` was guarded by a null check,
so the first call was a no-op and SDK instances were recreated on every render.
Initialize the cache to an empty object instead.
