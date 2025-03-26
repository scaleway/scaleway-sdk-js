import browserslist from 'browserslist'
import { resolveToEsbuildTarget } from 'esbuild-plugin-browserslist'
import { readPackage } from 'read-pkg'
import { defineConfig, type UserConfig } from 'vite'

const pkg = await readPackage()

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

const targets = resolveToEsbuildTarget(
  browserslist('defaults', {
    ignoreUnknownVersions: false,
  }),
  {
    printUnknownTargets: false,
  },
)

const defaultConfig: UserConfig = {
  build: {
    outDir: 'dist',
    target: [...targets, 'node20'],
    minify: false,
    ssr: true,
    emptyOutDir: true,
    lib: {
      name: pkg.name,
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format, filename) => {
        if (format === 'es') {
          return `${filename}.js`
        }

        return `${filename}.${format}`
      },
    },
    rollupOptions: {
      external,
      output: {
        preserveModules: true,
        preserveModulesRoot: './src',
      },
    },
  },
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '.reports/**',
        '**/.eslintrc.json.*',
        'dist',
        '**/examples/**',
        '**/packages/clients/src/api/*',
        '**/*.d.ts',
      ],
    },
  },
}

export default defineConfig(defaultConfig)
