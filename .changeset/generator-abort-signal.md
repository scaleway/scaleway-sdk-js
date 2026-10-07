---
'@scaleway/generate-react-queries': major
---

pass abort signal to query methods

Generated hooks now destructure `{ signal }` from the useDataLoader /
useInfiniteDataLoader method callback and forward it to the SDK API call as
`{ signal }` (a RequestOptions second argument). This requires the consuming
app to use a version of `@scaleway/use-dataloader` that passes an AbortSignal
to the method function (scaleway-lib #3915).
