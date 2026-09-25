import type { RetryOptions } from '../internal/async/http-retry.js'
import { assertValidRetryOptions } from '../internal/async/http-retry.js'
import type { NetworkInterceptors, RequestInterceptor, ResponseInterceptor } from '../internal/interceptors/types.js'
import { isOrganizationId, isProjectId, isRegion, isURL, isZone } from '../internal/validations/string-validation.js'
import type { Profile } from './client-ini-profile.js'

/**
 * Holds default values of settings.
 *
 * @public
 */
export type DefaultValues = Profile & {
  /**
   * The default number of results when requesting a paginated resource.
   */
  defaultPageSize?: number
}

/**
 * Settings hold the values of all client options.
 *
 * @public
 */
export type Settings = DefaultValues & {
  /**
   * The default number of results when requesting a paginated resource.
   */
  defaultPageSize?: number
  /**
   * The default timeout in milliseconds applied to each HTTP request.
   * When set, requests without a caller-supplied {@link AbortSignal} are aborted after this duration.
   */
  defaultTimeoutMs?: number
  /**
   * Automatic retry configuration for transient HTTP failures.
   * When unset, requests are not retried.
   */
  retry?: RetryOptions
  /**
   * HTTP Client doing the requests.
   */
  httpClient: typeof fetch
  /**
   * The Request interceptors.
   *
   * @deprecated Please use `interceptors` instead.
   */
  requestInterceptors?: RequestInterceptor[]
  /**
   * The Response interceptors.
   *
   * @deprecated Please use `interceptors` instead.
   */
  responseInterceptors?: ResponseInterceptor[]
  /**
   * The Network interceptors.
   */
  interceptors: NetworkInterceptors[]
  /**
   * The User-Agent sent with each request.
   *
   * @defaultValue scaleway-sdk-js/version
   */
  userAgent: string
}

/**
 * Validates the content of a {@link Settings} object.
 *
 * @throws Error
 * Thrown if {@link Settings} aren't valid.
 *
 * @internal
 */
export const assertValidSettings = (obj: Readonly<Settings>): void => {
  // Default Organization ID.
  if (obj.defaultOrganizationId !== undefined) {
    if (typeof obj.defaultOrganizationId !== 'string' || obj.defaultOrganizationId.length === 0) {
      throw new Error('Default organization ID cannot be empty')
    }
    if (!isOrganizationId(obj.defaultOrganizationId)) {
      throw new Error(
        `Invalid organization ID format '${obj.defaultOrganizationId}', expected a UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`,
      )
    }
  }

  // Default Project ID.
  if (obj.defaultProjectId !== undefined) {
    if (typeof obj.defaultProjectId !== 'string' || obj.defaultProjectId.length === 0) {
      throw new Error('Default project ID cannot be empty')
    }
    if (!isProjectId(obj.defaultProjectId)) {
      throw new Error(
        `Invalid project ID format '${obj.defaultProjectId}', expected a UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`,
      )
    }
  }

  // Default Region.
  if (obj.defaultRegion !== undefined && !isRegion(obj.defaultRegion)) {
    throw new Error(`Invalid default region format '${obj.defaultRegion}'`)
  }

  // Default Zone.
  if (obj.defaultZone !== undefined && !isZone(obj.defaultZone)) {
    throw new Error(`Invalid default zone format '${obj.defaultZone}'`)
  }

  // API URL.
  if (obj.apiURL !== undefined && !isURL(obj.apiURL)) {
    throw new Error(`Invalid URL ${obj.apiURL}`)
  }

  if (obj.apiURL?.endsWith('/') === true) {
    throw new Error(`Invalid URL ${obj.apiURL}: it should not have a trailing slash`)
  }

  // HTTP Client.
  if (typeof obj.httpClient !== typeof fetch) {
    throw new TypeError(`Invalid HTTP Client`)
  }

  // Default Page Size.
  if (
    obj.defaultPageSize !== undefined &&
    (typeof obj.defaultPageSize !== 'number' || Number.isNaN(obj.defaultPageSize) || obj.defaultPageSize <= 0)
  ) {
    throw new Error(`Invalid defaultPageSize ${obj.defaultPageSize}: it should be a number above 0`)
  }

  // Default Timeout.
  if (
    obj.defaultTimeoutMs !== undefined &&
    (typeof obj.defaultTimeoutMs !== 'number' || Number.isNaN(obj.defaultTimeoutMs) || obj.defaultTimeoutMs <= 0)
  ) {
    throw new Error(`Invalid defaultTimeoutMs ${obj.defaultTimeoutMs}: it should be a number above 0`)
  }

  // Retry.
  if (obj.retry !== undefined) {
    assertValidRetryOptions(obj.retry)
  }

  // User Agent.
  if (typeof obj.userAgent !== 'string') {
    throw new TypeError(`Invalid User-Agent`)
  }
}
