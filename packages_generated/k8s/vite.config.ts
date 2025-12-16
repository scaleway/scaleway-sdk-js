/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-default-export */
/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, mergeConfig } from 'vite'
import { defaultConfig } from '../../vite.config'

export default mergeConfig(defineConfig(defaultConfig), {
	build: {
		lib: {
			entry: 'src/index.gen.ts',
		},
	},
})
