import path from 'node:path'
import { globSync } from 'tinyglobby'
import { defineConfig, mergeConfig } from 'vite'
import { defaultConfig } from '../../vite.config'

const input = Object.fromEntries(
  globSync('src/**/*.ts').map(file => [
    // This removes `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo, and
    // normalizes Windows backslashes to forward slashes.
    path
      .relative('src', file.slice(0, file.length - path.extname(file).length))
      .split(path.sep)
      .join('/'),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo.js becomes /project/src/nested/foo.js
    path.resolve(file),
  ]),
)

const newConfig = defineConfig({
  build: {
    rolldownOptions: {
      input,
    },
  },
})

export default mergeConfig(defaultConfig, newConfig)
