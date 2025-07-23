// @vitest-environment node

import { describe, expect, it } from 'vitest'
import { isBrowser } from '../is-browser.js'

describe('isBrowser', () => {
  it('returns false by default', () => {
    expect(isBrowser()).toBe(false)
  })
})
