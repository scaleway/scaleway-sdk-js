import path, { extname, relative, resolve } from 'node:path'
import { readPackageSync } from 'read-pkg'
import { globSync } from 'tinyglobby'
import type { UserConfig } from 'vite'

const input = Object.fromEntries(
  globSync('src/**/*.ts').map(file => [
    // This removes `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo, and
    // normalizes Windows backslashes to forward slashes.

    relative('src', file.slice(0, file.length - extname(file).length))
      .split(path.sep)
      .join('/'),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo.js becomes /project/src/nested/foo.js
    resolve(file),
  ]),
)

const pkg = readPackageSync()

const externalPkgs = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.optionalDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const external = (id: string) => {
  const match = (dependency: string) => new RegExp(`^${dependency}`).test(id)
  const isExternal = externalPkgs.some(match)
  const isBundled = pkg.bundleDependencies?.some(match) // alias of bundledDependencies package.json field array

  return isExternal && !isBundled
}

export const defaultConfig: UserConfig = {
  build: {
    license: true,
    // as we might face issue while playing with packages and apps, it is easier to debug with non minified code
    outDir: 'dist',
    // target: [...browserslist('default'), 'node20'],
    minify: false,
    emptyOutDir: true,
    lib: {
      name: pkg.name,
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: (format, filename) => {
        if (format === 'es') {
          return `${filename}.js`
        }

        return `${filename}.${format}`
      },
    },
    rolldownOptions: {
      input,
      external,
      optimization: {
        inlineConst: {
          mode: 'smart',
        },
        pifeForModuleWrappers: true,
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        topLevelVar: false,
      },
      platform: 'browser',
      preserveEntrySignatures: 'exports-only',
      treeshake: true,
      tsconfig: true,
    },
  },
}
