# Scaleway SDK

This SDK enables you to interact with Scaleway APIs.

**⚠️  Notes:**
* The project is in beta, but should be fairly stable.
* SDK only works from a node.js runtime, browser calls aren't supported yet.

**🔗  Important links:**
* Reference documentation (soon)
* [Example projects](./examples)
* [Developers website](https://developers.scaleway.com) (API documentation)

## Getting Started

You'll need a pair of access and secret keys to connect to Scaleway API. Please check the [documentation](https://www.scaleway.com/docs/console/my-project/how-to/generate-api-key) on how to retrieve them.

**A minimal setup** would look like this:

```ts
import { Registry, createClient } from '@scaleway/sdk'

const client = createClient({
  accessKey: 'SCWXXXXXXXXXXXXXXXXX',
  secretKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultProjectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
})

const api = new Registry.v1.API(client)
```

**For a simpler setup**, you could retrieve the profile from either the configuration file or the environment variables:

```ts
import { 
  loadProfileFromConfigurationFile, 
  // loadProfileFromEnvironmentValues,
} from '@scaleway/configuration-loader'

const profile = loadProfileFromConfigurationFile() // loadProfileFromEnvironmentValues()
const client = createClient(profile)
```

**For more advanced needs**, please check the examples.

## Pagination

We included some pagination helpers for the methods supporting the feature. Let's take `listNamespaces()` (Registry product) as an example:

Retrieve the **first page**:

```ts
const namespaces = await api.listNamespaces(/*{ page: 1 }*/)
```

Retrieve **all the pages**:
```ts
const allNamespaces = await api.listNamespaces().all()
```

**Iterate** over the pages:
```ts
for await (const page of api.listNamespaces()) {
  // 
}
```

## Types

The project is coded with Typescript, so don't hesitate to take advantage of it.

1. All **types of a product** are stored in `Product.version` namespace. For instance, `Image` interface of Registry v1 can be accessed with `Registry.v1.Image`.

2. We export **errors** in the namespace `Errors`, allowing you to differentiate the cases (e.g. `Errors.PermissionsDeniedError`).

## Dependencies

This SDK is based on the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API and use `Request`, `Response` & `Headers` interfaces. Those interfaces are native in modern browsers, node >=18 & [deno](https://deno.land/) environments.

For `node` < 18 & `React Native` environments, the commonJS build requires [cross-fetch](https://www.npmjs.com/package/cross-fetch) package, it is listed in `dependencies` but not used in esm build.

**Troubleshooting**

In node environment, the commonJS module defined in `dist/index.cjs` entry file is used by default, thanks to the "main" `package.json` field.

If you want to use the ES module from `dist/index.js` with node < 18 & `React Native` environments, we recommend you to explicitly import [cross-fetch](https://www.npmjs.com/package/cross-fetch) polyfill:

```ts
import 'cross-fetch/polyfill'
import {...} from '@scaleway/sdk'
```

or

```bash
node -r cross-fetch/polyfill ./script-using-sdk.mjs
```

## Development

This repository is at its early stage and is still in active development.
If you are looking for a way to contribute please read [CONTRIBUTING.md](./CONTRIBUTING.md).

## Reach us

We love feedback. Feel free to reach us on [Scaleway Slack community](https://slack.scaleway.com/), we are waiting for you on [#opensource](https://scaleway-community.slack.com/app_redirect?channel=opensource).
