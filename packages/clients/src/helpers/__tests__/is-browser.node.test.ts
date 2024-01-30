// @vitest-environment node

import { describe, expect, it } from 'vitest'
import { isBrowser } from '../is-browser'

describe('isBrowser', () => {
  it('returns false by default', () => {
    expect(isBrowser()).toBe(false)
  })
})
