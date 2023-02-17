# Scaleway SDK

This SDK enables you to interact with Scaleway APIs.

**🔗  Important links:**
* [Reference documentation](https://scaleway.github.io/scaleway-sdk-js)
* [Example projects](https://github.com/scaleway/scaleway-sdk-js/tree/master/examples)
* [Developers website](https://developers.scaleway.com) (API documentation)

## Getting Started

You'll need a pair of access and secret keys to connect to Scaleway API. Please check the [documentation](https://www.scaleway.com/en/docs/console/my-project/how-to/generate-api-key/) on how to retrieve them.

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

**For more information**, please check the [GitHub project](https://github.com/scaleway/scaleway-sdk-js).

## Reach us

We love feedback. Feel free to reach us on [Scaleway Slack community](https://slack.scaleway.com/), we are waiting for you on [#opensource](https://scaleway-community.slack.com/app_redirect?channel=opensource).
