import { describe, expect, it } from 'vitest'
import { AbortError, isAbortError } from '../abort-error.js'

describe('AbortError', () => {
  it('uses the default message when none is provided', () => {
    const err = new AbortError()
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toBe('The operation was aborted')
    expect(err.name).toBe('AbortError')
  })

  it('uses the provided message', () => {
    const err = new AbortError('custom reason')
    expect(err.message).toBe('custom reason')
    expect(err.name).toBe('AbortError')
  })
})

describe('isAbortError', () => {
  it('returns true for an AbortError instance', () => {
    expect(isAbortError(new AbortError())).toBe(true)
  })

  it('returns true for a generic Error whose name is "AbortError"', () => {
    const err = new Error('browser aborted')
    err.name = 'AbortError'
    expect(isAbortError(err)).toBe(true)
  })

  it('returns false for a generic Error with a different name', () => {
    expect(isAbortError(new Error('something else'))).toBe(false)
  })

  it('returns false for non-Error values', () => {
    expect(isAbortError(undefined)).toBe(false)
    expect(isAbortError(null)).toBe(false)
    expect(isAbortError('AbortError')).toBe(false)
    expect(isAbortError({ name: 'AbortError' })).toBe(false)
  })
})
