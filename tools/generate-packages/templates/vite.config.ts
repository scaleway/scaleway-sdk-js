import { viteConfig } from '@repo/configs'
import { defineConfig, mergeConfig } from 'vite'
import type { UserConfig } from 'vite'

export default mergeConfig(defineConfig(viteConfig as UserConfig), {
  build: {
    lib: {
      entry: ['src/index.gen.ts', 'src/metadata.gen.ts'],
    },
  },
})
