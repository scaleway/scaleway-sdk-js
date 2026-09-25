import { ScalewayError } from '../../scw/errors/scw-error.js'
import { TooManyRequestsError } from '../../scw/errors/standard/too-many-requests-error.js'
import { isAbortError } from '../../scw/fetch/abort-error.js'
import { createExponentialBackoffStrategy } from './interval-retrier.js'

const DEFAULT_MAX_RETRIES = 2
const DEFAULT_MIN_DELAY_SECONDS = 1
const DEFAULT_MAX_DELAY_SECONDS = 30

/**
 * Options controlling automatic retries on transient HTTP failures.
 *
 * @public
 */
export type RetryOptions = {
  /**
   * Maximum number of retries after the first attempt.
   *
   * @defaultValue 2
   */
  maxRetries?: number
  /**
   * Minimum backoff delay in seconds.
   *
   * @defaultValue 1
   */
  minDelay?: number
  /**
   * Maximum backoff delay in seconds.
   * Also caps waits derived from `Retry-After` / reset hints.
   *
   * @defaultValue 30
   */
  maxDelay?: number
  /**
   * Predicate deciding whether an error is retryable.
   * Defaults to retrying 429, 503 and network errors.
   * When provided, fully replaces the default predicate (including abort/timeout guards).
   */
  isRetryable?: (error: unknown) => boolean
}

/**
 * Resolved retry settings with defaults applied.
 *
 * @internal
 */
export type ResolvedRetryOptions = {
  maxRetries: number
  minDelay: number
  maxDelay: number
  isRetryable: (error: unknown) => boolean
}

/**
 * Returns whether the error is a transient network failure (e.g. DNS, connection reset).
 *
 * @internal
 */
export const isNetworkError = (error: unknown): boolean => error instanceof TypeError

/**
 * Default retry predicate: 429, 503 and network errors.
 * Aborts and timeouts are never retried.
 *
 * @internal
 */
export const isDefaultRetryableError = (error: unknown): boolean => {
  if (isAbortError(error)) {
    return false
  }
  if (error instanceof Error && error.name === 'TimeoutError') {
    return false
  }
  if (isNetworkError(error)) {
    return true
  }
  if (error instanceof ScalewayError) {
    return error.status === 429 || error.status === 503
  }

  return false
}

/**
 * Parses a `Retry-After` header value into milliseconds.
 * Supports delay-seconds and HTTP-date formats.
 *
 * @returns Delay in milliseconds, or `undefined` if the header is missing/invalid.
 *
 * @internal
 */
export const parseRetryAfterHeader = (value: string | null): number | undefined => {
  if (value === null || value.length === 0) {
    return undefined
  }

  const asSeconds = Number(value)
  if (!Number.isNaN(asSeconds) && asSeconds >= 0) {
    return asSeconds * 1000
  }

  const asDate = Date.parse(value)
  if (!Number.isNaN(asDate)) {
    return Math.max(0, asDate - Date.now())
  }

  return undefined
}

/**
 * Resolves the wait before the next retry attempt, preferring `Retry-After`,
 * then {@link TooManyRequestsError.resetSeconds}, then exponential backoff.
 * The result is always capped by `maxDelaySeconds`.
 *
 * @internal
 */
export const resolveRetryDelayMs = ({
  error,
  retryAfterMs,
  backoffSeconds,
  maxDelaySeconds,
}: {
  error: unknown
  retryAfterMs: number | undefined
  backoffSeconds: number
  maxDelaySeconds: number
}): number => {
  let delayMs = backoffSeconds * 1000
  if (retryAfterMs !== undefined) {
    delayMs = retryAfterMs
  } else if (error instanceof TooManyRequestsError && error.resetSeconds !== undefined) {
    delayMs = error.resetSeconds * 1000
  }

  return Math.min(delayMs, maxDelaySeconds * 1000)
}

/**
 * Applies defaults to {@link RetryOptions}.
 *
 * @internal
 */
export const resolveRetryOptions = (options: RetryOptions = {}): ResolvedRetryOptions => ({
  maxRetries: options.maxRetries ?? DEFAULT_MAX_RETRIES,
  minDelay: options.minDelay ?? DEFAULT_MIN_DELAY_SECONDS,
  maxDelay: options.maxDelay ?? DEFAULT_MAX_DELAY_SECONDS,
  isRetryable: options.isRetryable ?? isDefaultRetryableError,
})

/**
 * Creates an exponential backoff iterator for HTTP retries.
 *
 * @internal
 */
export const createRetryBackoffStrategy = (options: ResolvedRetryOptions) =>
  createExponentialBackoffStrategy(options.minDelay, options.maxDelay)

/**
 * Validates {@link RetryOptions}.
 *
 * @throws Error
 *
 * @internal
 */
export const assertValidRetryOptions = (options: RetryOptions): void => {
  if (
    options.maxRetries !== undefined &&
    (typeof options.maxRetries !== 'number' ||
      Number.isNaN(options.maxRetries) ||
      options.maxRetries < 0 ||
      !Number.isInteger(options.maxRetries))
  ) {
    throw new Error(`Invalid retry.maxRetries ${options.maxRetries}: it should be an integer >= 0`)
  }
  if (
    options.minDelay !== undefined &&
    (typeof options.minDelay !== 'number' || Number.isNaN(options.minDelay) || options.minDelay < 1)
  ) {
    throw new Error(`Invalid retry.minDelay ${options.minDelay}: it should be a number >= 1`)
  }
  if (
    options.maxDelay !== undefined &&
    (typeof options.maxDelay !== 'number' || Number.isNaN(options.maxDelay) || options.maxDelay < 1)
  ) {
    throw new Error(`Invalid retry.maxDelay ${options.maxDelay}: it should be a number >= 1`)
  }
  if (
    options.minDelay !== undefined &&
    options.maxDelay !== undefined &&
    options.minDelay > options.maxDelay
  ) {
    throw new Error(`Invalid retry delays: minDelay must be <= maxDelay`)
  }
  if (options.isRetryable !== undefined && typeof options.isRetryable !== 'function') {
    throw new TypeError(`Invalid retry.isRetryable: it should be a function`)
  }
}
