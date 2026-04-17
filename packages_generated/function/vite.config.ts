import { defineConfig, mergeConfig } from 'vite'
import { defaultConfig } from '../../vite.config'

// biome-ignore lint/style/noDefaultExport: vite requires default export
export default mergeConfig(defineConfig(defaultConfig), {
  build: {
    lib: {
      entry: ['src/index.gen.ts', 'src/metadata.gen.ts'],
    },
    copyPublicDir: false,
  },
  plugins: [
    {
      name: 'copy-metadata',
      writeBundle() {
        const { copyFileSync } = require('node:fs')
        const { join } = require('node:path')
        copyFileSync(
          join(process.cwd(), 'src', 'metadata.gen.json'),
          join(process.cwd(), 'dist', 'metadata.gen.json'),
        )
      },
    },
  ],
})
