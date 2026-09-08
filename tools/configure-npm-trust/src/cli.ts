#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { join, relative } from 'node:path'

const REPO = 'scaleway/scaleway-sdk-js'
const WORKFLOW = 'deploy-package.yml'

type WorkspacePackage = {
  name: string
  path: string
  version: string
  private: boolean
  relativePath: string
}

type TrustConfig = {
  id: string
  type?: string
  file?: string
  repository?: string
  permissions?: string[]
}

const findWorkspaceRoot = (start: string): string => {
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

const exec = (cmd: string, opts: { cwd?: string; stdio?: 'pipe' | 'inherit' } = {}): string => {
  const out = execSync(cmd, {
    cwd: opts.cwd,
    encoding: 'utf8',
    stdio: opts.stdio === 'inherit' ? 'inherit' : ['ignore', 'pipe', 'pipe'],
    maxBuffer: 50 * 1024 * 1024,
  })
  return (out ?? '').trim()
}

const listWorkspacePackages = (root: string): WorkspacePackage[] => {
  const raw = exec('pnpm ls -r --depth -1 --json', { cwd: root })
  return (JSON.parse(raw) as WorkspacePackage[])
    .filter(e => e.version)
    .map(e => ({
      name: e.name,
      path: e.path,
      relativePath: relative(root, e.path),
      version: e.version,
      private: e.private === true,
    }))
}

const isPublished = (name: string): boolean => {
  try {
    exec(`npm view ${name} version`)
    return true
  } catch {
    return false
  }
}

const listTrusts = (name: string): TrustConfig[] => {
  try {
    const out = exec(`npm trust list ${name} --json 2>/dev/null`)
    const jsonStart = out.indexOf('{')
    const jsonEnd = out.lastIndexOf('}')
    if (jsonStart === -1 || jsonEnd === -1) return []
    const json = out.slice(jsonStart, jsonEnd + 1)
    const parsed = JSON.parse(json) as TrustConfig | TrustConfig[]
    return Array.isArray(parsed) ? parsed : [parsed]
  } catch {
    return []
  }
}

const configureTrust = (name: string): void => {
  for (const trust of listTrusts(name)) {
    console.log(`[trust] ${name} revoking existing config ${trust.id}`)
    exec(`npm trust revoke ${name} --id ${trust.id} -y`, { stdio: 'inherit' })
  }
  exec(`npm trust github ${name} --file ${WORKFLOW} --repo ${REPO} --allow-stage-publish -y`, {
    stdio: 'inherit',
  })
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function selectPackages(packages: WorkspacePackage[]): Promise<WorkspacePackage[]> {
  if (packages.length === 0) return []

  console.log('\nPackages without trust config:')
  packages.forEach((pkg, i) => console.log(`  [${i}] ${pkg.name}`))
  console.log('  [a] all')
  console.log('  [q] quit')

  const rl = readline.createInterface({ input, output })
  const answer = (await rl.question('\nSelect packages (comma-separated indices, "a", or "q"): ')).trim()
  rl.close()

  if (answer === 'q') process.exit(0)
  if (answer === 'a') return packages

  return answer
    .split(',')
    .map(s => parseInt(s.trim(), 10))
    .filter(i => !Number.isNaN(i) && i >= 0 && i < packages.length)
    .map(i => packages[i]!)
}

async function main() {
  console.log('[trust] logging in to npm (interactive, requires 2FA)...')
  exec('npm login', { stdio: 'inherit' })

  const root = findWorkspaceRoot(process.cwd())
  const packages = listWorkspacePackages(root).filter(pkg => !pkg.private)

  console.log(`[trust] ${packages.length} public packages, checking trust configs...`)

  const unconfigured: WorkspacePackage[] = []
  for (const pkg of packages) {
    if (listTrusts(pkg.name).length === 0) {
      unconfigured.push(pkg)
      console.log(`  - ${pkg.name}`)
    }
  }

  if (unconfigured.length === 0) {
    console.log('[trust] all packages already have trust config.')
    return
  }

  const selected = await selectPackages(unconfigured)
  if (selected.length === 0) {
    console.log('[trust] no packages selected.')
    return
  }

  console.log(`\n[trust] configuring ${selected.length} package(s)...`)
  for (const pkg of selected) {
    if (!isPublished(pkg.name)) {
      console.log(`[trust] ${pkg.name} not on npm — publishing first`)
      exec(`npm publish --access public`, { cwd: pkg.path, stdio: 'inherit' })
    }
    console.log(`[trust] ${pkg.name} configuring`)
    configureTrust(pkg.name)
    console.log(`[trust] ${pkg.name} done`)
    await sleep(2000)
  }

  console.log(`[trust] done. ${selected.length} package(s) configured.`)
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
