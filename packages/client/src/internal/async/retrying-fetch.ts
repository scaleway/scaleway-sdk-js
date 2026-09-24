import { isAbortError } from '../../scw/fetch/abort-error.js'
import { createExponentialBackoffStrategy } from './interval-retrier.js'
import { sleep } from './sleep.js'

const DEFAULT_MAX_RETRIES = 2
const DEFAULT_MIN_DELAY = 1
const DEFAULT_MAX_DELAY = 30
const DEFAULT_RETRYABLE_STATUS_CODES = [429, 503]

/**
 * Options for the retry layer.
 *
 * @public
 */
export type RetryOptions = {
  /**
   * The maximum number of retries.
   *
   * @defaultValue 2
   */
  maxRetries?: number
  /**
   * The minimum delay before the next retry in seconds.
   *
   * @defaultValue 1 second.
   */
  minDelay?: number
  /**
   * The maximum delay before the next retry in seconds.
   *
   * @defaultValue 30 seconds.
   */
  maxDelay?: number
  /**
   * HTTP status codes that should trigger a retry.
   *
   * @defaultValue `[429, 503]`
   */
  retryableStatusCodes?: number[]
  /**
   * An {@link AbortSignal} to cancel the retry loop.
   */
  signal?: AbortSignal
}

/**
 * Parses the `Retry-After` header value.
 * It can be either a number of seconds or an HTTP-date.
 *
 * @returns The delay in seconds, or `undefined` if the header is missing or invalid.
 *
 * @internal
 */
const parseRetryAfter = (header: string | null): number | undefined => {
  if (header === null) {
    return undefined
  }
  const seconds = Number(header)
  if (!Number.isNaN(seconds) && seconds >= 0) {
    return seconds
  }
  const date = new Date(header)
  if (!Number.isNaN(date.getTime())) {
    return Math.max(0, (date.getTime() - Date.now()) / 1000)
  }

  return undefined
}

/**
 * Wraps a fetch function with automatic retry on transient errors (429, 503) and network errors.
 *
 * Uses an exponential backoff strategy and respects the `Retry-After` header when present.
 *
 * @param fetchFn - The underlying fetch function to wrap
 * @param options - The retry options
 * @returns A fetch function that retries on transient errors
 *
 * @internal
 */
export const createRetryingFetch = (fetchFn: typeof fetch, options: RetryOptions = {}): typeof fetch => {
  const maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES
  const minDelay = options.minDelay ?? DEFAULT_MIN_DELAY
  const maxDelay = options.maxDelay ?? DEFAULT_MAX_DELAY
  const retryableStatusCodes = new Set(options.retryableStatusCodes ?? DEFAULT_RETRYABLE_STATUS_CODES)
  const { signal } = options

  return async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const strategy = createExponentialBackoffStrategy(minDelay, maxDelay)
    let lastError: unknown = undefined
    let lastResponse: Response | undefined = undefined

    for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
      if (signal?.aborted === true || init?.signal?.aborted === true) {
        throw new DOMException('The operation was aborted', 'AbortError')
      }

      try {
        // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry logic
        const response = await fetchFn(input, init)
        if (!retryableStatusCodes.has(response.status)) {
          return response
        }
        lastResponse = response
        lastError = undefined
      } catch (error) {
        if (isAbortError(error)) {
          throw error
        }
        lastError = error
        lastResponse = undefined
      }

      if (attempt < maxRetries) {
        const retryAfter = lastResponse ? parseRetryAfter(lastResponse.headers.get('Retry-After')) : undefined
        const delay = retryAfter ?? strategy.next(attempt + 1).value
        // oxlint-disable-next-line eslint/no-await-in-loop -- sequential retry with delay
        await sleep(delay * 1000)
      }
    }

    if (lastResponse !== undefined) {
      return lastResponse
    }
    throw lastError
  }
}
