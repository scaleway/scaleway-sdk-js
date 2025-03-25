// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { isBrowser } from '../is-browser'

describe('isBrowser', () => {
  it('returns true by default', () => {
    expect(isBrowser()).toBe(true)
  })
})
