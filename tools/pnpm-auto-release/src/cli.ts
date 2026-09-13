#!/usr/bin/env node
/* eslint-disable no-console */
import { appendFileSync, realpathSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { CHANGESET_MESSAGE, RELEASE_SUBJECT } from './constants.ts'
import {
  createChangesets,
  createGithubReleases,
  createTags,
  exec,
  findWorkspaceRoot,
  listWorkspacePackages,
} from './utils.ts'

const { log: logger } = console

type WorkspacePackage = ReturnType<typeof listWorkspacePackages>[number]

type ReleaseOptions = {
  dryRun: boolean
  skipPublish: boolean
  skipPush: boolean
  byCommit: boolean
  ghRelease: boolean
  registry?: string
}

const HELP = `Usage: release [options]

Bump and publish changed packages in the monorepo.

Detects which packages changed since the last "chore(release): publish" commit,
writes pnpm changeset files (all minor), then delegates to pnpm for version
bumping (including dependency propagation) and publishing.

Options:
  -r, --registry <url>   npm registry to publish to
      --dry-run          Report what would happen, no writes/publishes
      --skip-publish     Bump and tag, but don't publish to the registry
      --skip-push        Don't push the release commit and tags
      --by-commit        Create one changeset per commit (default: one changeset for all affected packages)
      --gh-release       Create GitHub releases for the published packages
  -h, --help             Show this help

Environment variables for registry auth:
  NPM_REGISTRY_USER      Registry username
  NPM_REGISTRY_PASSWD    Registry password
  GH_TOKEN               GitHub token for creating releases (required with --gh-release)
`

function parseReleaseArgs(): ReleaseOptions | null {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      registry: { type: 'string', short: 'r' },
      'dry-run': { type: 'boolean', default: false },
      'skip-publish': { type: 'boolean', default: false },
      'skip-push': { type: 'boolean', default: false },
      'by-commit': { type: 'boolean', default: false },
      'gh-release': { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
  })
  if (values.help) {
    logger(HELP)
    return null
  }
  if (values['gh-release']) {
    const ghToken = process.env['GH_TOKEN'] || process.env['GITHUB_TOKEN']
    if (!ghToken) {
      throw new Error('GH_TOKEN environment variable is required for creating GitHub releases')
    }
  }
  return {
    dryRun: values['dry-run'],
    skipPublish: values['skip-publish'],
    skipPush: values['skip-push'],
    byCommit: values['by-commit'],
    ghRelease: values['gh-release'],
    registry: values.registry,
  }
}

function gatherAffectedPackages(root: string, dryRun: boolean): { affected: WorkspacePackage[]; range: string } {
  const packages = listWorkspacePackages(root)
  const lastSha = exec(`git log --grep="^${RELEASE_SUBJECT}" -1 --format="%H"`, { cwd: root }) || null
  const range = lastSha ? `${lastSha}..HEAD` : 'HEAD~50..HEAD'
  const changedFiles = exec(`git diff --name-only ${range}`, { cwd: root }).split('\n').filter(Boolean)
  const affected = packages.filter(pkg => !pkg.private && changedFiles.some(f => f.startsWith(`${pkg.relativePath}/`)))
  logger(`[release] ${affected.length} packages to bump (dryRun=${dryRun})`)
  for (const pkg of affected) {
    logger(`  - ${pkg.name}: ${pkg.version}`)
  }
  return { affected, range }
}

function writeNpmrcAuth(root: string, registry: string): void {
  const user = process.env['NPM_REGISTRY_USER']
  const passwd = process.env['NPM_REGISTRY_PASSWD']
  if (!user || !passwd) {
    return
  }
  const host = registry.replace(/^https?:\/\//, '')
  const auth = Buffer.from(`${user}:${passwd}`).toString('base64')
  appendFileSync(join(root, '.npmrc'), `\n//${host}/:_auth=${auth}\n`)
  logger(`[release] authenticated to ${host}`)
}

function publishPackages(root: string, options: ReleaseOptions): void {
  if (options.skipPublish) {
    return
  }
  if (options.registry) {
    writeNpmrcAuth(root, options.registry)
  }
  const flag = options.registry ? ` --registry ${options.registry}` : ''
  exec(`pnpm publish -r --no-git-checks --access public${flag}`, { cwd: root, stdio: 'inherit' })
  logger('[release] published')
}

function bumpAndPublish(
  root: string,
  options: ReleaseOptions,
  { affected, range }: { affected: WorkspacePackage[]; range: string },
): WorkspacePackage[] {
  createChangesets({ root, range, packages: affected, byCommit: options.byCommit, defaultSummary: CHANGESET_MESSAGE })
  exec('pnpm version -r --no-git-checks --tag-version-prefix ""', { cwd: root, stdio: 'inherit' })
  exec('rm -rf .changeset/*', { cwd: root })
  const updated = listWorkspacePackages(root)
  publishPackages(root, options)
  return updated
}

function pushRelease(root: string, skipPush: boolean, newTags: string[]): void {
  if (skipPush) {
    return
  }
  exec('git push origin HEAD --no-verify', { cwd: root })
  for (const tag of newTags) {
    exec(`git push origin "refs/tags/${tag}" --no-verify`, { cwd: root })
  }
  logger('[release] pushed')
}

function commitTagAndPush(
  root: string,
  options: ReleaseOptions,
  { affected, updated }: { affected: WorkspacePackage[]; updated: WorkspacePackage[] },
): void {
  exec('git add -A', { cwd: root })
  exec('git commit -m "chore(release): publish" --no-verify', { cwd: root })
  const newTags = createTags({ root, affectedPackages: affected, updatedPackages: updated })
  if (options.ghRelease) {
    createGithubReleases({ root, affectedPackages: affected, updatedPackages: updated })
    logger('[release] github releases created')
  }
  pushRelease(root, options.skipPush, newTags)
}

function main() {
  const options = parseReleaseArgs()
  if (!options) {
    return
  }

  const root = findWorkspaceRoot(process.cwd())
  const { affected, range } = gatherAffectedPackages(root, options.dryRun)
  if (options.dryRun || affected.length === 0) {
    return
  }

  const updated = bumpAndPublish(root, options, { affected, range })
  commitTagAndPush(root, options, { affected, updated })
  logger('[release] done.')
}

if (process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))) {
  try {
    main()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
