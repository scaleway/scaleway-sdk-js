import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

type Package = {
  name: string
  path: string
  version?: string
  private?: boolean
  relativePath?: string
}

const { log: logger } = console

export const findWorkspaceRoot = (start: string): string => {
  let dir = start
  while (dir !== '/') {
    try {
      readFileSync(join(dir, 'pnpm-workspace.yaml'), 'utf8')
      return dir
    } catch {
      dir = join(dir, '..')
    }
  }
  return start
}

export const exec = (cmd: string, opts: { cwd?: string; stdio?: 'pipe' | 'inherit' } = {}): string => {
  const out = execSync(cmd, {
    cwd: opts.cwd,
    encoding: 'utf8',
    stdio: opts.stdio === 'inherit' ? 'inherit' : ['ignore', 'pipe', 'pipe'],
    maxBuffer: 50 * 1024 * 1024,
  })
  return (out ?? '').trim()
}

export const listWorkspacePackages = (root: string) => {
  const raw = exec('pnpm ls -r --depth -1 --json', { cwd: root })
  return (JSON.parse(raw) as Package[])
    .filter(e => e.version)
    .map(e => ({
      name: e.name,
      path: e.path,
      relativePath: relative(root, e.path),
      version: e.version as string,
      private: e.private === true,
    }))
}

export const createTags = ({
  root,
  affectedPackages,
  updatedPackages,
}: {
  root: string
  affectedPackages: Package[]
  updatedPackages: Package[]
}) => {
  for (const pkg of affectedPackages) {
    const newPkg = updatedPackages.find(({ name }) => name === pkg.name)
    if (newPkg) {
      const tag = `${pkg.name}@${newPkg.version}`
      try {
        exec(`git rev-parse -q --verify refs/tags/${tag}`, { cwd: root })
      } catch {
        exec(`git tag "${tag}"`, { cwd: root })
        logger(`[release] tag: ${tag}`)
      }
    }
  }
}

const createChangesetForPackages = (root: string, packages: Package[], summary: string) => {
  const names = packages.map(({ name }) => name).join(' ')
  exec(`pnpm change --bump minor --summary "${summary}" ${names}`, {
    cwd: root,
  })
  logger(`changeset ${summary} ${names}`)
}

export const createChangesets = ({
  root,
  range,
  packages,
  byCommit,
  defaultSummary,
}: {
  root: string
  range: string
  packages: Package[]
  byCommit: boolean
  defaultSummary: string
}) => {
  if (!byCommit) {
    createChangesetForPackages(root, packages, defaultSummary)
    logger(`[release] changeset (${packages.length} pkg)`)
    return
  }

  const commits = exec(`git log ${range} --format="%H%x1F%s" --no-merges`, { cwd: root })

  for (const line of commits.split('\n').filter(Boolean)) {
    const [sha, subject] = line.split('\u001F')
    if (!sha) continue
    const changedFiles = exec(`git diff-tree --no-commit-id --name-only -r ${sha}`, { cwd: root })
      .split('\n')
      .filter(Boolean)

    const affected = packages.filter(
      pkg => pkg.relativePath && changedFiles.some(f => f.startsWith(`${pkg.relativePath}/`)),
    )

    if (affected.length === 0) continue

    createChangesetForPackages(root, affected, subject || defaultSummary)
    logger(`[release] changeset (${sha.slice(0, 7)} -> ${affected.length} pkg)`)
  }
}
