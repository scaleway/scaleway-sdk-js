# @scaleway-internal/generate-packages

CLI tool to generate and synchronize package configuration across a monorepo of generated SDK packages.

## Usage

```bash
generate-packages <command> [options]
```

### Commands

| Command    | Description                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| `packages` | Generate per-product `package.json`, `vite.config.ts`, `tsconfig.json`, `metadata.gen.ts`, and `index.gen.ts` re-exports. |
| `sdk`      | Update global SDK `package.json` with `workspace:*` deps and rewrite `index.gen.ts` exports.                              |
| `deps`     | Scan `.gen.ts` files for SDK cross-imports and sync missing `workspace:*` dependencies.                                   |
| `setup`    | Detect new products without a `package.json` and fully onboard them (packages + sdk + deps + install).                    |

### Options

| Option            | Default                       | Description                                      |
| ----------------- | ----------------------------- | ------------------------------------------------ |
| `--src <dir>`     | `packages_generated`          | Path to the generated packages directory.        |
| `--config <path>` | `generate-packages.config.ts` | Path to the config file.                         |
| `--dry-run`       | `false`                       | Preview without writing (`deps` & `setup` only). |
| `--verbose`       | `true`                        | Verbose output.                                  |
| `--quiet`         | `false`                       | Suppress verbose output.                         |
| `--sdk <path>`    | `packages/sdk/package.json`   | SDK package.json (`setup` only).                 |
| `--scope <scope>` | from config                   | Override npm scope (`setup` only).               |
| `--install=false` | `true`                        | Skip `pnpm install` (`setup` only).              |

### Examples

```bash
# Generate package configs for all products
generate-packages packages

# Update SDK package.json + index exports
generate-packages sdk

# Preview missing dependencies without writing
generate-packages deps --dry-run

# Onboard new products end-to-end
generate-packages setup

# Use a custom config file
generate-packages --config my-config.json sdk
```

## Configuration

Create a `generate-packages.config.ts` at the repo root:

```ts
import type { Config } from './tools/generate-packages/src/config.ts'

export default {
  scope: '@scaleway-internal',
  sdkPackagePrefix: '@scaleway-internal/sdk-',
  sdks: [
    {
      path: 'packages/sdk/package.json',
      index: 'packages/sdk/src/index.gen.ts',
      excludeSuffix: 'admin',
      depsTypes: ['dependencies'],
      shouldUpdateIndex: true,
      ignoredPackages: [],
    },
    {
      path: 'packages/sdk-admin/package.json',
      index: 'packages/sdk-admin/src/index.gen.ts',
      depsTypes: ['dependencies'],
      shouldUpdateIndex: true,
      ignoredPackages: ['@scaleway-internal/sdk-admin'],
    },
  ],
} satisfies Config
```

### Fields

| Field                      | Description                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scope`                    | Npm scope used when generating package names for new products. Example: `@scaleway-internal` produces `@scaleway-internal/sdk-foo`.                                                            |
| `sdkPackagePrefix`         | Prefix used to detect SDK cross-imports in `.gen.ts` files. The `deps` command builds a regex from this to find `from "@scope/sdk-..."` imports and sync them as `workspace:*` dependencies.   |
| `sdks[]`                   | List of SDK packages to update when running the `sdk` command.                                                                                                                                 |
| `sdks[].path`              | Path (relative to repo root) to the SDK's `package.json` that will receive the generated deps.                                                                                                 |
| `sdks[].index`             | Path (relative to repo root) to the SDK's `index.gen.ts` that will re-export all generated packages.                                                                                           |
| `sdks[].excludeSuffix`     | When set, generated package directories whose name contains this suffix are excluded from this SDK. Omit to include all packages. Example: `"admin"` excludes `foo_admin` from the public SDK. |
| `sdks[].depsTypes`         | Which dependency fields to populate in the SDK `package.json`: `dependencies`, `peerDependencies`, or `devDependencies`.                                                                       |
| `sdks[].shouldUpdateIndex` | Whether to rewrite the SDK's `index.gen.ts` with re-exports of all generated packages.                                                                                                         |
| `sdks[].ignoredPackages`   | Package names to skip when adding dependencies to the SDK `package.json`.                                                                                                                      |

If no config file is found, a default config targeting a single public SDK at `packages/sdk` (excluding `admin` packages, `@scaleway` scope) is used.
