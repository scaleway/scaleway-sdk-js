import { describe, expect, it } from 'vitest'
import { ScalewayError } from '../../../scw/errors/scw-error.js'
import { TooManyRequestsError } from '../../../scw/errors/standard/too-many-requests-error.js'
import { AbortError } from '../../../scw/fetch/abort-error.js'
import {
  assertValidRetryOptions,
  isDefaultRetryableError,
  isNetworkError,
  parseRetryAfterHeader,
  resolveRetryDelayMs,
  resolveRetryOptions,
} from '../http-retry.js'

describe('isNetworkError', () => {
  it('detects TypeError as network error', () => {
    expect(isNetworkError(new TypeError('fetch failed'))).toBe(true)
  })

  it('ignores other errors', () => {
    expect(isNetworkError(new Error('boom'))).toBe(false)
    expect(isNetworkError(new ScalewayError(500, 'err'))).toBe(false)
  })
})

describe('isDefaultRetryableError', () => {
  it('retries 429 and 503', () => {
    expect(isDefaultRetryableError(new ScalewayError(429, 'too many'))).toBe(true)
    expect(isDefaultRetryableError(new ScalewayError(503, 'unavailable'))).toBe(true)
  })

  it('retries network errors', () => {
    expect(isDefaultRetryableError(new TypeError('fetch failed'))).toBe(true)
  })

  it('does not retry other status codes', () => {
    expect(isDefaultRetryableError(new ScalewayError(400, 'bad'))).toBe(false)
    expect(isDefaultRetryableError(new ScalewayError(500, 'err'))).toBe(false)
  })

  it('does not retry abort or timeout errors', () => {
    expect(isDefaultRetryableError(new AbortError())).toBe(false)
    const timeout = new Error('timeout')
    timeout.name = 'TimeoutError'
    expect(isDefaultRetryableError(timeout)).toBe(false)
  })
})

describe('parseRetryAfterHeader', () => {
  it('parses delay-seconds', () => {
    expect(parseRetryAfterHeader('5')).toBe(5000)
    expect(parseRetryAfterHeader('0')).toBe(0)
  })

  it('parses HTTP-date', () => {
    const date = new Date(Date.now() + 10_000).toUTCString()
    const delay = parseRetryAfterHeader(date)
    expect(delay).toBeDefined()
    expect(delay!).toBeGreaterThan(0)
    expect(delay!).toBeLessThanOrEqual(10_000)
  })

  it('returns undefined for missing or invalid values', () => {
    expect(parseRetryAfterHeader(null)).toBeUndefined()
    expect(parseRetryAfterHeader('')).toBeUndefined()
    expect(parseRetryAfterHeader('not-a-date')).toBeUndefined()
  })
})

describe('resolveRetryDelayMs', () => {
  it('prefers Retry-After over other sources', () => {
    const error = new TooManyRequestsError(429, {}, { helpMessage: 'slow down', resetSeconds: 30 })
    expect(resolveRetryDelayMs(error, 2000, 10)).toBe(2000)
  })

  it('uses TooManyRequestsError.resetSeconds when no Retry-After', () => {
    const error = new TooManyRequestsError(429, {}, { helpMessage: 'slow down', resetSeconds: 7 })
    expect(resolveRetryDelayMs(error, undefined, 10)).toBe(7000)
  })

  it('falls back to backoff seconds', () => {
    expect(resolveRetryDelayMs(new ScalewayError(503, 'err'), undefined, 3)).toBe(3000)
  })
})

describe('resolveRetryOptions', () => {
  it('applies defaults', () => {
    expect(resolveRetryOptions()).toMatchObject({
      maxRetries: 2,
      minDelay: 1,
      maxDelay: 30,
    })
  })

  it('keeps caller overrides', () => {
    const isRetryable = () => false
    expect(resolveRetryOptions({ maxRetries: 5, minDelay: 2, maxDelay: 10, isRetryable })).toStrictEqual({
      maxRetries: 5,
      minDelay: 2,
      maxDelay: 10,
      isRetryable,
    })
  })
})

describe('assertValidRetryOptions', () => {
  it('accepts valid options', () => {
    expect(() => {
      assertValidRetryOptions({ maxRetries: 0, minDelay: 1, maxDelay: 5 })
    }).not.toThrow()
  })

  it('rejects invalid maxRetries', () => {
    expect(() => {
      assertValidRetryOptions({ maxRetries: -1 })
    }).toThrow(/maxRetries/)
  })

  it('rejects minDelay greater than maxDelay', () => {
    expect(() => {
      assertValidRetryOptions({ minDelay: 10, maxDelay: 2 })
    }).toThrow(/minDelay must be <= maxDelay/)
  })
})
