import type { Config } from '@repo/generate-packages/config'

export default {
  scope: '@scaleway',
  sdkPackagePrefix: '@scaleway/sdk-',
  sdks: [
    {
      path: 'packages/sdk/package.json',
      index: 'packages/sdk/src/index.gen.ts',
      depsTypes: ['dependencies'],
      shouldUpdateIndex: true,
      ignoredPackages: [],
    },
  ],
} satisfies Config
