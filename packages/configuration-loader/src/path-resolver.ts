import { homedir } from 'node:os'
import * as path from 'node:path'
import { env } from 'node:process'
import { EnvironmentKey } from './env.js'

/**
 * Gets the Scaleway directory.
 *
 * @returns The path to the Scaleway diretory
 *
 * @internal
 */
export const getScwConfigurationDirectory = () => {
  const xdgConfigPath = env.XDG_CONFIG_HOME
  if (typeof xdgConfigPath === 'string' && xdgConfigPath.length > 0) {
    return path.join(xdgConfigPath, 'scw')
  }

  return path.join(homedir(), '.config', 'scw')
}

/**
 * Gets the configuration file path.
 *
 * @returns The path to the configuration file
 *
 * @internal
 */
export const resolveConfigurationFilePath = () => {
  // Try path defined by user in env variables
  const envFilePath = env[EnvironmentKey.ScwConfigPath]
  if (typeof envFilePath === 'string' && envFilePath.length > 0) {
    return envFilePath
  }

  // or fallback on the default path
  return path.join(getScwConfigurationDirectory(), 'config.yaml')
}
