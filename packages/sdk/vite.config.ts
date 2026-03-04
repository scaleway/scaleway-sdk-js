import { defineConfig, mergeConfig } from 'vite'
import { defaultConfig } from '../../vite.config.js'

const newConfig = defineConfig({
  build: {
    lib: {
      entry: 'src/index.gen.ts',
    },
  },
})

export default mergeConfig(defaultConfig, newConfig)
