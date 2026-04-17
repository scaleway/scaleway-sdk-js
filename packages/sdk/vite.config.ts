import { viteConfig } from '@repo/config'
import { defineConfig, mergeConfig } from 'vite'

const newConfig = defineConfig({
  build: {
    lib: {
      entry: 'src/index.gen.ts',
    },
  },
})

export default mergeConfig(viteConfig, newConfig)
