# Configuration Loader

This package enables you to load a profile from a configuration file or environment variables.

**🔗  Important links:**

- [Scaleway SDK](./sdk)
- [Developers website](https://developers.scaleway.com) (API documentation)

## Getting Started

You could hardcode a profile directly within your code:

```ts
const profile = {
  accessKey: 'SCWXXXXXXXXXXXXXXXXX',
  secretKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultProjectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
}
```

And then use this profile to instantiate the SDK client with `const client = createClient(profile)`.

However, you might prefer to store these variables in either a configuration file (e.g. local testing) or environment variables (e.g. serverless).

**In case of configuration file**:

```ts
import { loadProfileFromConfigurationFile } from '@scaleway/configuration-loader'

const profile = loadProfileFromConfigurationFile()
```

For a specific profile:

```ts
const profile = loadProfileFromEnvironmentValues({ profileName: 'debug' })
```

**In case of environment variables**:

```ts
import { loadProfileFromEnvironmentValues } from '@scaleway/configuration-loader'

const profile = loadProfileFromEnvironmentValues()
```

## Reach us

We love feedback. Feel free to reach us on [Scaleway Slack community](https://slack.scaleway.com/), we are waiting for you on [#opensource](https://scaleway-community.slack.com/app_redirect?channel=opensource).
