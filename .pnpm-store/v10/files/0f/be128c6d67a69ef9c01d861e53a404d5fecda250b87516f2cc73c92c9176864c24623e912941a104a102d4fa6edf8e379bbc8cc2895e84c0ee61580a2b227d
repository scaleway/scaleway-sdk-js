import { defineConfig, mergeConfig } from 'vite'
import { defaultConfig } from '../../vite.config'
import { defaultConfig as vitestDefaultConfig } from '../../vitest.config'

const config = {
  ...defineConfig(defaultConfig),
  ...vitestDefaultConfig,
}

export default mergeConfig(config, {
  build: {
    lib: {
      formats: ['es', 'cjs'],
    },
  },
})
