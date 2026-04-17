import { viteConfig } from '@repo/configs'
import { defineConfig, mergeConfig } from 'vite'

export default mergeConfig(defineConfig(viteConfig), {
  build: {
    lib: {
      entry: ['src/index.gen.ts'],
    },
  },
})
