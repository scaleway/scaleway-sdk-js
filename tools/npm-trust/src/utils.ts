import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import path from 'node:path'

type Package = {
  name: string
  path: string
  version?: string
  private?: boolean
}

export const findWorkspaceRoot = (start: string): string => {
  let dir = start
  while (dir !== '/') {
    try {
      readFileSync(path.join(dir, 'pnpm-workspace.yaml'), 'utf8')
      return dir
    } catch {
      dir = path.join(dir, '..')
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

export const listPublicWorkspacePackages = (root: string): Package[] => {
  const raw = exec('pnpm ls -r --depth -1 --json', { cwd: root })
  return (JSON.parse(raw) as Package[]).filter(e => e.version && e.private !== true)
}

const countTrustEntries = (json: string): number => {
  try {
    const parsed: unknown = JSON.parse(json)
    if (parsed === null || typeof parsed !== 'object') {
      return 0
    }
    const entries = Object.values(parsed as Record<string, unknown>)
      .flat()
      .filter(Boolean)
    return entries.length
  } catch {
    return 0
  }
}

export const hasExistingTrust = (pkgName: string): boolean => {
  try {
    const listJson = exec(`npm trust list ${pkgName} --json`)
    return countTrustEntries(listJson) > 0
  } catch {
    return false
  }
}

export const isPackagePublished = (pkgName: string): boolean => {
  try {
    exec(`npm view ${pkgName} version`)
    return true
  } catch {
    return false
  }
}
