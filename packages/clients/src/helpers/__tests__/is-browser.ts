import { describe, expect, it } from '@jest/globals'
import { isBrowser } from '../is-browser'

describe('isBrowser', () => {
  it('returns false by default', () => {
    expect(isBrowser()).toBe(false)
  })

  it('returns true after defining a window', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Fake window/document for the test
    global.window = { document: 'not-undefined' }
    expect(isBrowser()).toBe(true)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Reset the global variable
    delete global.window
  })
})
