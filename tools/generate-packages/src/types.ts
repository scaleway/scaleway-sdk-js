export type SDK = {
  path: string
  index: string
  type: string
  depsTypes: ('devDependencies' | 'peerDependencies' | 'dependencies')[]
  shouldUpdateIndex: boolean
  ignoredPackages: string[]
}

export type PackageJSON = {
  name: string
  version: string
  path: string
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
}
