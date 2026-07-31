#!/usr/bin/env node
import { resolve } from 'node:path'
import { cwd, exit } from 'node:process'
import type { ParseArgsConfig } from 'node:util'
import { parseArgs } from 'node:util'
import { deps } from './commands/deps.ts'
import { packages } from './commands/packages.ts'
import { sdk } from './commands/sdk.ts'
import { setup } from './commands/setup.ts'
import { loadConfig } from './config.ts'

const commands = { packages, sdk, deps, setup } as const
type CommandName = keyof typeof commands

const options: ParseArgsConfig['options'] = {
  src: { type: 'string', default: 'packages_generated' },
  'dry-run': { type: 'boolean', default: false },
  verbose: { type: 'boolean', default: true },
  quiet: { type: 'boolean', default: false },
  config: { type: 'string' },
  sdk: { type: 'string', default: 'packages/sdk/package.json' },
  scope: { type: 'string' },
  install: { type: 'boolean', default: true },
  help: { type: 'boolean', default: false },
}

const { values, positionals } = parseArgs({ options, allowPositionals: true })
const command = positionals[0] as CommandName | undefined

if (!command || values.help || !(command in commands)) {
  console.log(`Usage: generate-packages <command> [options]

Commands:
  packages   Generate per-product package.json / vite.config.ts / tsconfig / metadata
  sdk        Update global SDK package.json + index.gen.ts exports
  deps       Sync workspace:* dependencies from .gen.ts imports
  setup      Detect & onboard new products (orchestrator)

Options:
  --src <dir>        Generated packages dir (default: packages_generated)
  --config <path>    Config file (default: generate-packages.config.json)
  --dry-run          Preview without writing (deps & setup)
  --verbose          Verbose output (default: true)
  --quiet            Suppress verbose output
  --sdk <path>       SDK package.json (setup only, default from config)
  --scope <scope>    Override npm scope (default from config)
  --install=false    Skip pnpm install (setup only, default: true)`)
  exit(command && values.help ? 0 : 1)
}

const config = await loadConfig(values.config ? String(values.config) : undefined)
const src = resolve(cwd(), String(values.src))
const dryRun = Boolean(values['dry-run'])
const verbose = values.quiet ? false : Boolean(values.verbose)
const scope = values.scope ? String(values.scope) : config.scope

switch (command) {
  case 'packages':
    await packages({ src, runInstall: true })
    break
  case 'sdk':
    await sdk({ src, config, runInstall: true })
    break
  case 'deps':
    await deps({ src, config, dryRun })
    break
  case 'setup':
    await setup({
      src,
      config,
      sdk: resolve(cwd(), String(values.sdk)),
      scope,
      dryRun,
      verbose,
      install: Boolean(values.install),
    })
    break
}
