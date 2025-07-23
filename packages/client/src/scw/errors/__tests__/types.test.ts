import { describe, expect, it } from 'vitest'
import { isRecordOfStringArray } from '../types.js'

describe('isRecordOfStringArray', () => {
  it('validates a proper object', () => {
    expect(
      isRecordOfStringArray({ myValue: ['reason 1', 'reason 2'] }),
    ).toBeTruthy()
  })

  it('refuses object with proper structure but non-string values', () => {
    expect(isRecordOfStringArray({ myValue: [42] })).toBeFalsy()
  })

  it('refuses non-JSONObjects', () => {
    expect(isRecordOfStringArray(['reason 1'])).toBeFalsy()
    expect(isRecordOfStringArray('reason 1')).toBeFalsy()
  })
})
