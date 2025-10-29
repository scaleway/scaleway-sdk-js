# @scaleway/sdk-baremetal

[![npm version](https://img.shields.io/npm/v/@scaleway/sdk-baremetal.svg)](https://www.npmjs.com/package/@scaleway/sdk-baremetal)
[![npm downloads](https://img.shields.io/npm/dm/@scaleway/sdk-baremetal.svg)](https://www.npmjs.com/package/@scaleway/sdk-baremetal)
[![license](https://img.shields.io/npm/l/@scaleway/sdk-baremetal.svg)](https://github.com/scaleway/scaleway-sdk-js/blob/master/LICENSE)

Scaleway SDK for Baremetal API.

> **Note**  
> This is an automatically generated package that is part of the [Scaleway SDK for JavaScript](https://github.com/scaleway/scaleway-sdk-js).

## Installation

```bash
npm install @scaleway/sdk-baremetal @scaleway/sdk-client
```

or with pnpm:

```bash
pnpm add @scaleway/sdk-baremetal @scaleway/sdk-client
```

or with yarn:

```bash
yarn add @scaleway/sdk-baremetal @scaleway/sdk-client
```

## Getting Started

You'll need a pair of access and secret keys to connect to Scaleway API. Please check the [documentation](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-api-keys/) on how to retrieve them.

### Basic Usage

```typescript
import { createClient } from '@scaleway/sdk-client'
import { Baremetal } from '@scaleway/sdk-baremetal'

const client = createClient({
  accessKey: 'SCWXXXXXXXXXXXXXXXXX',
  secretKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultProjectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
})

const api = new Baremetal.v1.API(client)

// Use the API
// Example: await api.listServers()
```

### Using Configuration Loader

For a simpler setup, you can load credentials from the configuration file or environment variables:

```typescript
import { createClient } from '@scaleway/sdk-client'
import { loadProfileFromConfigurationFile } from '@scaleway/configuration-loader'
import { Baremetal } from '@scaleway/sdk-baremetal'

const profile = loadProfileFromConfigurationFile()
const client = createClient(profile)
const api = new Baremetal.v1.API(client)
```

## Documentation

- 📚 [Scaleway SDK Reference Documentation](https://scaleway.github.io/scaleway-sdk-js)
- 🌐 [Scaleway Baremetal API Documentation](https://www.scaleway.com/en/developers/api/baremetal/)
- 📖 [Main Repository](https://github.com/scaleway/scaleway-sdk-js)
- 💡 [Example Projects](https://github.com/scaleway/scaleway-sdk-js/tree/master/examples)

## Features

- ✅ Full TypeScript support with complete type definitions
- ✅ Promise-based API
- ✅ Automatic pagination helpers
- ✅ Built-in error handling
- ✅ Compatible with Node.js ≥ 20

## Support

We love feedback! Feel free to reach us on:
- [Scaleway Slack community](https://slack.scaleway.com/) - Join us on [#opensource](https://scaleway-community.slack.com/app_redirect?channel=opensource)
- [GitHub Issues](https://github.com/scaleway/scaleway-sdk-js/issues)

## Contributing

This repository is at its early stage and is still in active development. If you are looking for a way to contribute, please read [CONTRIBUTING.md](https://github.com/scaleway/scaleway-sdk-js/blob/master/CONTRIBUTING.md).

## License

This project is Apache 2.0 licensed. See the [LICENSE](https://github.com/scaleway/scaleway-sdk-js/blob/master/LICENSE) file for details.

