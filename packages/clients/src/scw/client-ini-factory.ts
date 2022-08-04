import { authenticateWithSecrets } from './auth'
import { hasAuthenticationSecrets } from './client-ini-profile'
import type { Profile } from './client-ini-profile'
import { Settings } from './client-settings'

/**
 * A factory to build {@link Settings}.
 *
 * @public
 */
export type ClientConfig = (obj: Settings) => Settings

/**
 * Instantiates the SDK from a configuration {@link Profile}.
 *
 * @param profile - The profile
 * @returns A factory {@link ClientConfig}
 *
 * @remarks This method should be used in conjunction with the initializer `createAdvancedClient`.
 *
 * @public
 */
export const withProfile =
  (profile: Readonly<Profile>) =>
  (settings: Readonly<Settings>): Settings => {
    const newSettings = { ...settings }
    if (profile.apiURL) newSettings.apiURL = profile.apiURL
    if (profile.defaultOrganizationId)
      newSettings.defaultOrganizationId = profile.defaultOrganizationId
    if (profile.defaultProjectId)
      newSettings.defaultProjectId = profile.defaultProjectId
    if (profile.defaultRegion) newSettings.defaultRegion = profile.defaultRegion
    if (profile.defaultZone) newSettings.defaultZone = profile.defaultZone
    if (hasAuthenticationSecrets(profile))
      newSettings.requestInterceptors = [
        authenticateWithSecrets(profile),
        ...settings.requestInterceptors,
      ]

    return newSettings
  }

/**
 * Instantiates the SDK with a different HTTP client.
 *
 * @param httpClient - A fetch compatible HTTP client
 * @returns A factory {@link ClientConfig}
 *
 * @remarks This method should be used in conjunction with the initializer `createAdvancedClient`.
 *
 * @public
 */
export const withHTTPClient =
  (httpClient: typeof fetch) =>
  (settings: Readonly<Settings>): Settings => ({ ...settings, httpClient })

/**
 * Instantiates the SDK with a default page size.
 *
 * @param defaultPageSize - The default page size
 * @returns A factory {@link ClientConfig}
 *
 * @remarks This method should be used in conjunction with the initializer `createAdvancedClient`.
 *
 * @public
 */
export const withDefaultPageSize =
  (defaultPageSize: number): ClientConfig =>
  (settings: Readonly<Settings>): Settings => ({ ...settings, defaultPageSize })

/**
 * Instantiates the SDK with a different default user agent.
 *
 * @param userAgent - The default user agent
 * @returns A factory {@link ClientConfig}
 *
 * @remarks This method should be used in conjunction with the initializer `createAdvancedClient`.
 *
 * @public
 */
export const withUserAgent =
  (userAgent: string) =>
  (settings: Readonly<Settings>): Settings => ({ ...settings, userAgent })

/**
 * Instantiates the SDK with an additional user agent.
 *
 * @param userAgent - The suffix to append to default user agent
 * @returns A factory {@link ClientConfig}
 *
 * @remarks This method should be used in conjunction with the initializer `createAdvancedClient`.
 *
 * @public
 */
export const withUserAgentSuffix =
  (userAgent: string) =>
  (settings: Readonly<Settings>): Settings => ({
    ...settings,
    userAgent: settings.userAgent
      ? `${settings.userAgent} ${userAgent}`
      : userAgent,
  })
