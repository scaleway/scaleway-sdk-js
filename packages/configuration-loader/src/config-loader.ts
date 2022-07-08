import { env } from 'process'
import { EnvironmentKey } from './env'
import { resolveConfigurationFilePath } from './path-resolver'
import type { Profile, ProfileFromFileParams } from './types'
import { loadConfigurationFromFile } from './yml-loader'

/**
 * Loads profile from environment values.
 *
 * @returns The profile filled with values found in the environment
 *
 * @public
 */
export const loadProfileFromEnvironmentValues = (): Profile => ({
  accessKey: env[EnvironmentKey.ScwAccessKey],
  apiURL: env[EnvironmentKey.ScwAPIURL],
  defaultOrganizationId: env[EnvironmentKey.ScwDefaultOrganizationId],
  defaultProjectId: env[EnvironmentKey.ScwDefaultProjectId],
  defaultRegion: env[EnvironmentKey.ScwDefaultRegion],
  defaultZone: env[EnvironmentKey.ScwDefaultZone],
  secretKey: env[EnvironmentKey.ScwSecretKey],
})

/**
 * Loads profile from configuration file.
 *
 * @param params - The parameters to load the profile
 * @returns The profile filled with values found in the configuration profile
 *
 * @throws Error
 * Thrown if the configuration file couldn't be found,
 * or if the specified profile can't be found.
 *
 * @public
 */
export const loadProfileFromConfigurationFile = (
  params?: Readonly<ProfileFromFileParams>,
): Profile => {
  const filePath = params?.filepath ?? resolveConfigurationFilePath()
  if (typeof filePath !== 'string' || filePath.length === 0) {
    throw new Error('Could not find the path to the configuration file.')
  }
  const configs = loadConfigurationFromFile(filePath)
  const profileName = params?.profileName ?? 'default'
  const profileMap = configs[profileName]
  if (typeof profileMap !== 'object') {
    throw new Error(
      `Could not find the desired profile '${profileName}' in the configuration file.`,
    )
  }

  return {
    accessKey: profileMap.access_key,
    apiURL: profileMap.api_url,
    defaultOrganizationId: profileMap.default_organization_id,
    defaultProjectId: profileMap.default_project_id,
    defaultRegion: profileMap.default_region,
    defaultZone: profileMap.default_zone,
    secretKey: profileMap.secret_key,
  }
}
