import { writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { env } from 'node:process'
import { afterEach, describe, expect, it } from 'vitest'
import {
  loadProfileFromConfigurationFile,
  loadProfileFromEnvironmentValues,
} from '../config-loader.js'
import { EnvironmentKey } from '../env.js'
import type { Profile } from '../types.js'

const CONFIG_FILE_PATH = join(tmpdir(), 'scw-config.yaml')

const EMPTY_PROFILE: Profile = {}

const TARGET_PROFILE: Required<Profile> = {
  accessKey: 'SCW1234567890ABCDEFG',
  apiURL: 'https://testing.scaleway.com/url',
  defaultOrganizationId: 'e790a8b7-f970-4372-8be7-1ccd701cbb2c',
  defaultProjectId: '24129e66-bbd3-4d40-8f43-e1c7d94e22ac',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-3',
  secretKey: '3aef5281-13eb-4705-b858-eb64dd5da24c',
}

const updateProfileInEnv = (newProfile: Profile): void => {
  env[EnvironmentKey.ScwAccessKey] = newProfile.accessKey
  env[EnvironmentKey.ScwAPIURL] = newProfile.apiURL
  env[EnvironmentKey.ScwDefaultOrganizationId] =
    newProfile.defaultOrganizationId
  env[EnvironmentKey.ScwDefaultProjectId] = newProfile.defaultProjectId
  env[EnvironmentKey.ScwDefaultRegion] = newProfile.defaultRegion
  env[EnvironmentKey.ScwDefaultZone] = newProfile.defaultZone
  env[EnvironmentKey.ScwSecretKey] = newProfile.secretKey
}

const updateProfileInConfiFile = (
  newProfile: Profile,
  filePath: string,
): void => {
  const yml = `access_key: ${newProfile.accessKey ?? ''}\n
    api_url: ${newProfile.apiURL ?? ''}\n
    default_organization_id: ${newProfile.defaultOrganizationId ?? ''}\n
    default_project_id: ${newProfile.defaultProjectId ?? ''}\n
    default_region: ${newProfile.defaultRegion ?? ''}\n
    default_zone: ${newProfile.defaultZone ?? ''}\n
    secret_key: ${newProfile.secretKey ?? ''}`
  writeFileSync(filePath, yml)
}

afterEach(() => {
  updateProfileInEnv(EMPTY_PROFILE)
  updateProfileInConfiFile(EMPTY_PROFILE, CONFIG_FILE_PATH)
})

describe('loadProfileFromEnvironmentValues', () => {
  it('loads properly from env variables', () => {
    updateProfileInEnv(TARGET_PROFILE)
    expect(loadProfileFromEnvironmentValues()).toStrictEqual(TARGET_PROFILE)
  })
})

describe('loadProfileFromConfigurationFile', () => {
  it('loads properly from config file', () => {
    updateProfileInConfiFile(TARGET_PROFILE, CONFIG_FILE_PATH)
    env[EnvironmentKey.ScwConfigPath] = CONFIG_FILE_PATH
    expect(loadProfileFromConfigurationFile()).toStrictEqual(TARGET_PROFILE)
  })

  it('throws error with empty filepath', () => {
    expect(() => {
      loadProfileFromConfigurationFile({ filepath: '' })
    }).toThrow(new Error('Could not find the path to the configuration file.'))
  })

  it('throws error with unknown profile name', () => {
    const unknownName = 'unknown-profile-name'
    expect(() => {
      updateProfileInConfiFile(TARGET_PROFILE, CONFIG_FILE_PATH)
      env[EnvironmentKey.ScwConfigPath] = CONFIG_FILE_PATH
      loadProfileFromConfigurationFile({ profileName: unknownName })
    }).toThrow(
      new Error(
        `Could not find the desired profile '${unknownName}' in the configuration file.`,
      ),
    )
  })
})
