#!/usr/bin/env node
import { appendFileSync, realpathSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { RELEASE_SUBJECT, CHANGESET_MESSAGE } from './constants.ts'
import {
  createTags,
  exec,
  findWorkspaceRoot,
  listWorkspacePackages,
  createChangesets,
  createGithubReleases,
} from './utils.ts'

const { log: logger } = console

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

function main() {
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
    return
  }

  const dryRun = values['dry-run'] === true
  const skipPublish = values['skip-publish'] === true
  const skipPush = values['skip-push'] === true
  const byCommit = values['by-commit'] === true
  const ghRelease = values['gh-release'] === true
  const registry = values.registry

  if (ghRelease) {
    const ghToken = process.env['GH_TOKEN'] ||  process.env['GITHUB_TOKEN']
    if (!ghToken) {
      throw new Error('GH_TOKEN environment variable is required for creating GitHub releases')
    }
  }

  const root = findWorkspaceRoot(process.cwd())
  const packages = listWorkspacePackages(root)

  const lastSha =
    exec(`git log --grep="^${RELEASE_SUBJECT}" -1 --format="%H"`, {
      cwd: root,
    }) || null
  const range = lastSha ? `${lastSha}..HEAD` : 'HEAD~50..HEAD'
  const changedFiles = exec(`git diff --name-only ${range}`, { cwd: root }).split('\n').filter(Boolean)

  const affected = packages.filter(pkg => !pkg.private && changedFiles.some(f => f.startsWith(`${pkg.relativePath}/`)))

  logger(`[release] ${affected.length} packages to bump (dryRun=${dryRun})`)
  for (const pkg of affected) logger(`  - ${pkg.name}: ${pkg.version}`)

  if (dryRun || affected.length === 0) return

  createChangesets({
    root,
    range,
    packages: affected,
    byCommit,
    defaultSummary: CHANGESET_MESSAGE,
  })

  // Bump versions — pnpm handles dependency propagation.
  // In recursive mode pnpm never creates git commits/tags itself, so the
  // working tree is left dirty for us to commit explicitly below — but only
  // after publish has succeeded, so a registry failure leaves the remote
  // untouched and the run can be retried from a pristine state.
  exec('pnpm version -r --no-git-checks --tag-version-prefix ""', {
    cwd: root,
    stdio: 'inherit',
  })
  exec('rm -rf .changeset/*', { cwd: root })

  const updated = listWorkspacePackages(root)

  // Publish BEFORE committing/tagging/pushing. If publish fails (registry
  // down, auth expired, network, version already exists, ...) we abort and
  // leave the remote untouched — no tags pointing at unpublished versions.
  // `pnpm publish -r` skips versions already on the registry, so retries
  // are idempotent and only publish what's missing.
  if (!skipPublish) {
    const user = process.env['NPM_REGISTRY_USER']
    const passwd = process.env['NPM_REGISTRY_PASSWD']
    if (registry && user && passwd) {
      const host = registry.replace(/^https?:\/\//, '')
      const auth = Buffer.from(`${user}:${passwd}`).toString('base64')
      const npmrcPath = join(root, '.npmrc')
      appendFileSync(npmrcPath, `\n//${host}/:_auth=${auth}\n`)
      logger(`[release] authenticated to ${host}`)
    }
    const flag = registry ? ` --registry ${registry}` : ''
    exec(`pnpm publish -r --no-git-checks --access public${flag}`, {
      cwd: root,
      stdio: 'inherit',
    })
    logger('[release] published')
  }

  // Commit and tag — only reached if publish succeeded (or --skip-publish).
  exec('git add -A', { cwd: root })
  exec('git commit -m "chore(release): publish" --no-verify', { cwd: root })

  createTags({
    root,
    affectedPackages: affected,
    updatedPackages: updated,
  })

  // Create GitHub releases
  if (ghRelease) {
    createGithubReleases({
      root,
      affectedPackages: affected,
      updatedPackages: updated,
    })
    logger('[release] github releases created')
  }

  // Push
  if (!skipPush) {
    exec('git push origin HEAD --tags --no-verify', { cwd: root })
    logger('[release] pushed')
  }

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
