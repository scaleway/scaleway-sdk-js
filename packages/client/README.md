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

## Reach us

We love feedback. Feel free to reach us on [Scaleway Slack community](https://slack.scaleway.com/), we are waiting for you on [#opensource](https://scaleway-community.slack.com/app_redirect?channel=opensource).
