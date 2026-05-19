import { viteConfig } from '@repo/configs'
import { defineConfig, mergeConfig } from 'vite'

// biome-ignore lint/style/noDefaultExport: vite requires default export
export default mergeConfig(defineConfig(viteConfig), {
  build: {
    lib: {
      entry: ['src/index.gen.ts', 'src/metadata.gen.ts'],
    },
  },
})
