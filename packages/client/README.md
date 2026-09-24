# Scaleway SDK Client

This SDK Client enables you to interact with Scaleway APIs.

**🔗  Important links:**

- [Reference documentation](https://scaleway.github.io/scaleway-sdk-js)
- [Example projects](https://github.com/scaleway/scaleway-sdk-js/tree/master/examples)
- [Developers website](https://developers.scaleway.com) (API documentation)

## Getting Started

You'll need a pair of access and secret keys to connect to Scaleway API. Please check the [documentation](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-api-keys/) on how to retrieve them.

**A minimal setup** would look like this:

```ts
import { createClient } from '@scaleway/sdk-client'
import { Registry } from '@scaleway/sdk'

const client = createClient({
  accessKey: 'SCWXXXXXXXXXXXXXXXXX',
  secretKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultProjectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
})

const api = new Registry.v1.API(client)
```

**For more information**, please check the [GitHub project](https://github.com/scaleway/scaleway-sdk-js).

## Retry

By default, the SDK does not retry failed requests. To enable automatic retries on transient HTTP errors (429 Too Many Requests, 503 Service Unavailable) and network errors, use the `withRetry` factory with `createAdvancedClient`:

```ts
import { createAdvancedClient, withProfile, withRetry } from '@scaleway/sdk-client'

const client = createAdvancedClient(withProfile(profile), withRetry({ maxRetries: 3 }))
```

The retry layer uses an **exponential backoff** strategy and respects the `Retry-After` response header when present.

### Options

| Option                 | Type          | Default      | Description                                       |
| ---------------------- | ------------- | ------------ | ------------------------------------------------- |
| `maxRetries`           | `number`      | `2`          | Maximum number of retry attempts.                 |
| `minDelay`             | `number`      | `1`          | Minimum delay before the first retry, in seconds. |
| `maxDelay`             | `number`      | `30`         | Maximum delay between retries, in seconds.        |
| `retryableStatusCodes` | `number[]`    | `[429, 503]` | HTTP status codes that trigger a retry.           |
| `signal`               | `AbortSignal` | `undefined`  | An `AbortSignal` to cancel the retry loop.        |

### Examples

Custom retry configuration with 5 retries and a 60-second max delay:

```ts
createAdvancedClient(withProfile(profile), withRetry({ maxRetries: 5, maxDelay: 60 }))
```

Retrying on additional status codes:

```ts
createAdvancedClient(withProfile(profile), withRetry({ retryableStatusCodes: [429, 500, 502, 503] }))
```

Cancellable retries via `AbortSignal`:

```ts
const controller = new AbortController()

createAdvancedClient(withProfile(profile), withRetry({ signal: controller.signal }))

// Later, cancel any in-progress retries
controller.abort()
```

## Reach us

We love feedback. Feel free to reach us on [Scaleway Slack community](https://slack.scaleway.com/), we are waiting for you on [#opensource](https://scaleway-community.slack.com/app_redirect?channel=opensource).
