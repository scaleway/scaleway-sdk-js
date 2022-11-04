import type { RequestInterceptor } from '../internal/interceptors/request'
import type { ResponseInterceptor } from '../internal/interceptors/response'
import {
  isOrganizationId,
  isProjectId,
  isRegion,
  isURL,
  isZone,
} from '../internal/validations/string-validation'
import type { ProfileDefaultValues } from './client-ini-profile'

/**
 * Holds default values of settings.
 *
 * @public
 */
export type DefaultValues = ProfileDefaultValues & {
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
export interface Settings extends DefaultValues {
  /**
   * The default number of results when requesting a paginated resource.
   */
  defaultPageSize?: number
  /**
   * HTTP Client doing the requests.
   */
  httpClient: typeof fetch
  /**
   * The Request interceptors.
   */
  requestInterceptors: RequestInterceptor[]
  /**
   * The Response interceptors.
   */
  responseInterceptors: ResponseInterceptor[]
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
    if (
      typeof obj.defaultOrganizationId !== 'string' ||
      obj.defaultOrganizationId.length === 0
    ) {
      throw new Error('Default organization ID cannot be empty')
    }
    if (isOrganizationId(obj.defaultOrganizationId) !== true) {
      throw new Error(
        `Invalid organization ID format '${obj.defaultOrganizationId}', expected a UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`,
      )
    }
  }

  // Default Project ID.
  if (obj.defaultProjectId !== undefined) {
    if (
      typeof obj.defaultProjectId !== 'string' ||
      obj.defaultProjectId.length === 0
    ) {
      throw new Error('Default project ID cannot be empty')
    }
    if (isProjectId(obj.defaultProjectId) !== true) {
      throw new Error(
        `Invalid project ID format '${obj.defaultProjectId}', expected a UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`,
      )
    }
  }

  // Default Region.
  if (obj.defaultRegion && !isRegion(obj.defaultRegion))
    throw new Error(`Invalid default region format '${obj.defaultRegion}'`)

  // Default Zone.
  if (obj.defaultZone && !isZone(obj.defaultZone))
    throw new Error(`Invalid default zone format '${obj.defaultZone}'`)

  // API URL.
  if (!isURL(obj.apiURL)) throw new Error(`Invalid URL ${obj.apiURL}`)

  if (obj.apiURL.substr(-1) === '/')
    throw new Error(
      `Invalid URL ${obj.apiURL}: it should not have a trailing slash`,
    )

  // HTTP Client.
  if (typeof obj.httpClient !== typeof fetch)
    throw new Error(`Invalid HTTP Client`)

  // Default Page Size.
  if (
    obj.defaultPageSize !== undefined &&
    (typeof obj.defaultPageSize !== 'number' ||
      Number.isNaN(obj.defaultPageSize) ||
      obj.defaultPageSize <= 0)
  )
    throw new Error(
      `Invalid defaultPageSize ${obj.defaultPageSize}: it should be a number above 0`,
    )

  // User Agent.
  if (typeof obj.userAgent !== 'string') throw new Error(`Invalid User-Agent`)
}
