#!/usr/bin/env node
/* eslint-disable no-console */
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { realpathSync } from 'node:fs'
import { parseArgs } from 'node:util'
import {
  exec,
  findWorkspaceRoot,
  hasExistingTrust,
  isPackagePublished,
  listPublicWorkspacePackages,
} from './utils.ts'

const { log: logger, error: errorLogger } = console

type Package = {
  name: string
  path: string
  version?: string
  private?: boolean
}

type Options = {
  dryRun: boolean
  check: boolean
  workflowFile: string
  repo: string
  yes: boolean
}

const HELP = `Usage: npm-trust [options]

Configure npm trusted publishers (GitHub Actions) for all non-private
workspace packages. Detects unpublished packages and offers to publish
them first. Skips packages that already have a trust relationship.

Options:
  -f, --file <workflow>   GitHub Actions workflow file (default: deploy-package.yml)
  -r, --repo <owner/name> GitHub repository (default: scaleway/scaleway-sdk-js)
      --dry-run           Report what would happen, no changes
      --check             Only check for unpublished packages; exit 1 if any found
  -y, --yes               Skip prompts, answer yes to everything
  -h, --help              Show this help

Note: requires "npm login" first (npm trust list needs auth to check
existing trusts). If the check fails, the package is tried anyway and
npm itself will report conflicts (E409).
`

function parseArgs_(): Options | null {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      file: { type: 'string', short: 'f', default: 'deploy-package.yml' },
      repo: { type: 'string', short: 'r', default: 'scaleway/scaleway-sdk-js' },
      'dry-run': { type: 'boolean', default: false },
      check: { type: 'boolean', default: false },
      yes: { type: 'boolean', short: 'y', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
  })
  if (values.help) {
    logger(HELP)
    return null
  }
  return {
    dryRun: values['dry-run'],
    check: values.check,
    workflowFile: values.file,
    repo: values.repo,
    yes: values.yes,
  }
}

async function promptYesNo(question: string, defaultValue = false): Promise<boolean> {
  const rl = readline.createInterface({ input, output })
  try {
    const raw = await rl.question(`${question} (y/N) `)
    const answer = raw.trim().toLowerCase()
    return answer === 'y' || answer === 'yes'
  } catch {
    return defaultValue
  } finally {
    rl.close()
  }
}

function findUnpublishedPackages(packages: Package[]): Package[] {
  const unpublished: Package[] = []
  for (const pkg of packages) {
    if (!isPackagePublished(pkg.name)) {
      unpublished.push(pkg)
    }
  }
  return unpublished
}

async function publishUnpublished(packages: Package[], options: Options): Promise<void> {
  if (packages.length === 0) {
    return
  }
  logger(`\n[trust] ${packages.length} unpublished package(s) detected:`)
  for (const pkg of packages) {
    logger(`  - ${pkg.name} (v${pkg.version})`)
  }

  if (options.dryRun) {
    logger('[dry-run] would prompt to publish these packages first')
    return
  }

  const shouldPublish = options.yes || (await promptYesNo('\nPublish these packages first?'))
  if (!shouldPublish) {
    logger('[trust] skipping publish, proceeding to trust setup')
    return
  }

  for (const pkg of packages) {
    const cmd = `npm publish --access public`
    logger(`>>> ${cmd} (in ${pkg.path})`)
    try {
      exec(cmd, { cwd: pkg.path, stdio: 'inherit' })
      logger(`published: ${pkg.name}`)
    } catch {
      errorLogger(`WARN: publish failed for ${pkg.name}`)
    }
  }
}

async function main(): Promise<void> {
  const options = parseArgs_()
  if (!options) {
    return
  }

  const root = findWorkspaceRoot(process.cwd())
  const packages = listPublicWorkspacePackages(root)
  logger(`[trust] ${packages.length} non-private packages`)

  if (options.check) {
    const unpublished = findUnpublishedPackages(packages)
    if (unpublished.length === 0) {
      logger('[check] all packages are published on npm')
      process.exit(0)
    }
    logger(`[check] ${unpublished.length} unpublished package(s) found:`)
    for (const pkg of unpublished) {
      logger(`  - ${pkg.name} (v${pkg.version})`)
    }
    logger('[check] publish and configure trust before merging')
    process.exit(1)
  }

  if (!options.dryRun) {
    const unpublished = findUnpublishedPackages(packages)
    await publishUnpublished(unpublished, options)
  }

  let applied = 0
  let skipped = 0
  let failed = 0

  for (const pkg of packages) {
    const cmd = `npm trust github ${pkg.name} --file ${options.workflowFile} --repo ${options.repo} -y --allow-publish`

    if (options.dryRun) {
      logger(`[dry-run] ${cmd}`)
      applied++
      continue
    }

    if (hasExistingTrust(pkg.name)) {
      logger(`SKIP: ${pkg.name} — trust already configured`)
      skipped++
      continue
    }

    logger(`>>> ${cmd}`)
    try {
      exec(cmd, { stdio: 'inherit' })
      applied++
    } catch {
      errorLogger(`WARN: failed for ${pkg.name}`)
      failed++
    }
  }

  logger(`[trust] done: ${applied} applied, ${skipped} skipped, ${failed} failed`)
}

if (process.argv[1] && realpathSync(process.argv[1]) === realpathSync(import.meta.filename)) {
  try {
    await main()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
