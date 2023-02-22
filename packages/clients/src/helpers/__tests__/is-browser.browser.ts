/* @jest-environment jsdom */
import { describe, expect, it } from '@jest/globals'
import { isBrowser } from '../is-browser'

describe('isBrowser', () => {
  it('returns true by default', () => {
    expect(isBrowser()).toBe(true)
  })
})
