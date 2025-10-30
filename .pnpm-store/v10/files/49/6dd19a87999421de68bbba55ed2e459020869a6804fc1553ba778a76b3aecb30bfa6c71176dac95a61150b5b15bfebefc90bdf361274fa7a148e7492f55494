import { defineConfig, mergeConfig } from 'vite'
import { defaultConfig } from '../../vite.config'

export default mergeConfig(defineConfig(defaultConfig), {
  build: {
    lib: {
      formats: ['es', 'cjs'],
    },
  },
})
