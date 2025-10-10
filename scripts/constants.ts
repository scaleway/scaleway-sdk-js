import { join } from 'node:path'
import { cwd } from 'node:process'
import type { SDK } from './types'

export const SDKS = new Set<SDK>([
  {
    path: join(cwd(), 'packages/sdk/package.json'),
    index: join(cwd(), 'packages/sdk/src/index.gen.ts'),
    type: 'public',
  },
])
