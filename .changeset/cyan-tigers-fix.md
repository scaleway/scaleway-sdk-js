---
'@scaleway/sdk-react': patch
---

fix(SDKCacheProvider): use an always-initialized cache object instead of null so setSdkInstance mutates unconditionally
