import { describe, expect, it } from '@jest/globals'
import { isBrowser } from '../is-browser'

describe('isBrowser', () => {
  it('returns false by default', () => {
    expect(isBrowser()).toBe(!!global.window)
  })

  it('returns true after defining a window', () => {
    // @ts-expect-error Fake window/document for the test
    global.window = { document: 'not-undefined' }
    expect(isBrowser()).toBe(true)
    // @ts-expect-error Reset the global variable
    delete global.window
  })
})
