import { getLogger } from '../internal/logger'
import type { ClientConfig } from './client-ini-factory'
import { withProfile } from './client-ini-factory'
import type { Profile } from './client-ini-profile'
import type { Settings } from './client-settings'
import { assertValidSettings } from './client-settings'
import { userAgent, version } from './constants'
import { buildFetcher } from './fetch/build-fetcher'
import type { Fetcher } from './fetch/build-fetcher'

/** Default {@link Settings} values. */
const DEFAULT_SETTINGS: Settings = {
  apiURL: 'https://api.scaleway.com',
  httpClient: fetch,
  requestInterceptors: [],
  responseInterceptors: [],
  userAgent,
}

/**
 * Scaleway client.
 */
export type Client = {
  fetch: Fetcher
  settings: Settings
}

/**
 * Creates a Scaleway client with advanced options.
 * You can either use existing factories
 * (like `withProfile`, `withUserAgentSuffix`, etc)
 * or write your own using the interface `ClientConfig`.
 *
 * @example
 * Creates a client with factories:
 * ```
 * createAdvancedClient(
 *   (obj: Settings) => ({
 *     ...obj,
 *     defaultPageSize: 100 ,
 *     httpClient: myFetchWrapper,
 *   }),
 *   withUserAgentSuffix('bot-name/1.0'),
 * )
 * ```
 *
 * @throws Error
 * Thrown if the setup fails.
 *
 * @public
 */
export const createAdvancedClient = (...configs: ClientConfig[]): Client => {
  const settings = configs.reduce(
    (currentSettings, config) => config(currentSettings),
    DEFAULT_SETTINGS,
  )
  assertValidSettings(settings)
  getLogger().info(`init Scaleway SDK version ${version}`)

  return {
    fetch: buildFetcher(settings, settings.httpClient),
    settings,
  }
}

/**
 * Creates a Scaleway client with a profile.
 *
 * @example
 * Creates a client with credentials & default values (see https://www.scaleway.com/en/docs/console/my-project/how-to/generate-api-key/):
 * ```
 * import { createClient } from '@scaleway/sdk'
 *
 * createClient({
 *   accessKey: 'SCWXXXXXXXXXXXXXXXXX',
 *   secretKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
 *   defaultProjectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
 *   defaultRegion: 'fr-par',
 *   defaultZone: 'fr-par-1',
 * })
 * ```
 *
 * @example
 * Creates a client by loading values from the environment (see https://www.scaleway.com/en/docs/console/my-project/how-to/generate-api-key/#how-to-use-your-api-key)
 * or the config file created by CLI `scw init` (see https://www.scaleway.com/en/cli/):
 * ```
 * import { loadProfileFromConfigurationFile } from '@scaleway/configuration-loader'
 * import { createClient } from '@scaleway/sdk'
 *
 * createClient({
 *   ...await loadProfileFromConfigurationFile(),
 *   defaultZone: 'fr-par-3',
 * })
 * ```
 *
 * @throws Error
 * Thrown if the setup fails.
 *
 * @public
 */
export const createClient = (profile: Profile = {}): Client =>
  createAdvancedClient(withProfile(profile))
