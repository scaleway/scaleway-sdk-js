import { defineConfig, mergeConfig } from 'vite'
import { defaultConfig } from '../../vite.config'

// biome-ignore lint/style/noDefaultExport: vite requires default export
export default mergeConfig(defineConfig(defaultConfig), {
  build: {
    lib: {
      entry: 'src/index.gen.ts',
    },
  },
})
