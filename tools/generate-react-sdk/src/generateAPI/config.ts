import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { Project } from 'ts-morph'

// Load the entry file
export const project = new Project()

// We dont want these types to be suffixed by namespaces
export const rawStringTypes = ['string', 'Blob', 'string[]']

// Read package.json
const packageJson = JSON.parse(
  readFileSync(resolve(resolve('./'), 'package.json'), 'utf8'),
) as {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

// Generate SDK paths from dependencies
export const sdkPaths = [
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.devDependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
]
  .filter(dep => dep.startsWith('@scaleway/sdk'))
  .filter(dep => !['@scaleway/sdk-client'].includes(dep))
  .map(dep => {
    const declarationFile = 'dist/index.gen.d.ts'

    return [
      dep,
      resolve(resolve('./'), `./node_modules/${dep}/${declarationFile}`),
    ]
  })
