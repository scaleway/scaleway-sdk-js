import { env } from 'node:process'
import { EnvironmentKey } from './env.js'
import { resolveConfigurationFilePath } from './path-resolver.js'
import type {
  AllProfilesFromFileParams,
  Profile,
  ProfileFromFileParams,
} from './types.js'
import { loadConfigurationFromFile } from './yml-loader.js'

const convertFileConfigToSDK = (obj: Record<string, string>): Profile => ({
  accessKey: obj.access_key,
  apiURL: obj.api_url,
  defaultOrganizationId: obj.default_organization_id,
  defaultProjectId: obj.default_project_id,
  defaultRegion: obj.default_region,
  defaultZone: obj.default_zone,
  secretKey: obj.secret_key,
})

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
 * Loads all the profiles from configuration file.
 *
 * @param params - The parameters to load the profile
 * @returns The profiles filled with values found in the configuration profile
 *
 * @throws Error
 * Thrown if the configuration file couldn't be found.
 *
 * @public
 */
export const loadAllProfilesFromConfigurationFile = (
  params?: Readonly<AllProfilesFromFileParams>,
): Record<string, Profile> => {
  const filePath = params?.filepath ?? resolveConfigurationFilePath()
  if (typeof filePath !== 'string' || filePath.length === 0) {
    throw new Error('Could not find the path to the configuration file.')
  }
  const configs = loadConfigurationFromFile(filePath)

  const result: Record<string, Profile> = {}
  for (const pKey of Object.keys(configs)) {
    result[pKey] = convertFileConfigToSDK(configs[pKey])
  }
  return result
}

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
  const configs = loadAllProfilesFromConfigurationFile(params)
  const profileName = params?.profileName ?? 'default'
  const profileMap = configs[profileName]
  if (typeof profileMap !== 'object') {
    throw new Error(
      `Could not find the desired profile '${profileName}' in the configuration file.`,
    )
  }

  return profileMap
}
