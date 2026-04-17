import { readFile, readFileSync, stat } from 'node:fs'
import { promisify } from 'node:util'
import type { ConfigurationType } from './types.js'

const readFileAsync = promisify(readFile)
const statAsync = promisify(stat)

const STRIP_COMMENT_REGEX = /(^|\s)[;#]/
const DETECT_SECTION_REGEX = /^\s*([\s\S]+?):\s*$/
const DETECT_ITEM_REGEX = /^\s*(.+?)\s*:\s*(.+?)\s*$/

/**
 * Converts YAML to configuration map.
 *
 * @param input - YAML string
 * @returns The configuration map
 *
 * @internal
 */
export const convertYamlToConfiguration = (input: string | null): ConfigurationType => {
  let foundProfilesKey = false
  let currentSection: string | undefined = 'default'
  const map: ConfigurationType = {}
  if (typeof input !== 'string') {
    return map
  }
  input.split(/\r?\n/).forEach(rawLine => {
    // remove comments
    const line = rawLine.split(STRIP_COMMENT_REGEX)[0]
    // parse sections
    const newSection = DETECT_SECTION_REGEX.exec(line)
    if (newSection) {
      currentSection = undefined
      if (newSection[1] === 'profiles') {
        foundProfilesKey = true
      } else if (foundProfilesKey) {
        ;[, currentSection] = newSection
      }
    }
    // parse items
    else if (currentSection) {
      const item = DETECT_ITEM_REGEX.exec(line)
      if (item) {
        if (typeof map[currentSection] !== 'object') {
          map[currentSection] = {}
        }
        ;[, , map[currentSection][item[1]]] = item
      }
    }
  })

  return map
}

/**
 * Loads configuration from a file (synchronous).
 *
 * @param filePath - Path to the configuration file
 * @returns The configuration
 *
 * @throws Error
 * Thrown if the file doesn't exist.
 *
 * @internal
 */
export const loadConfigurationFromFile = (filePath: string): ConfigurationType => {
  // `readFileSync` returns a string when encoding option is specified.
  // {@link https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options}
  const fileContent = readFileSync(filePath, 'utf-8')

  return convertYamlToConfiguration(fileContent)
}

/**
 * Loads configuration from a file (asynchronous).
 *
 * Non-blocking alternative to {@link loadConfigurationFromFile} that avoids
 * stalling the event loop on slow filesystems or large config files.
 *
 * @param filePath - Path to the configuration file
 * @returns The configuration
 *
 * @throws Error
 * Thrown if the file doesn't exist.
 *
 * @public
 */
export const loadConfigurationFromFileAsync = async (filePath: string): Promise<ConfigurationType> => {
  const fileContent = await readFileAsync(filePath, 'utf-8')

  return convertYamlToConfiguration(fileContent)
}

/**
 * Checks whether a configuration file has secure permissions.
 *
 * The Scaleway config file contains secret keys that grant full API access.
 * On POSIX systems this function verifies the file is not readable by group
 * or others (mode 0o600 or stricter). Returns `true` on Windows where POSIX
 * permission bits are not meaningful.
 *
 * @param filePath - Path to the configuration file
 * @returns `true` if the file has secure permissions (or on Windows)
 *
 * @public
 */
export const hasSecureFilePermissions = async (filePath: string): Promise<boolean> => {
  if (process.platform === 'win32') return true

  const info = await statAsync(filePath)
  // eslint-disable-next-line no-bitwise
  const groupOrOtherBits = info.mode & 0o077

  return groupOrOtherBits === 0
}
