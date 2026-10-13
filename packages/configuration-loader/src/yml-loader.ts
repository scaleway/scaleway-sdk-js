import { readFile, readFileSync, stat, statSync } from 'node:fs'
import { promisify } from 'node:util'
import type { ConfigurationType } from './types.js'

const readFileAsync = promisify(readFile)
const statAsync = promisify(stat)

const STRIP_COMMENT_REGEX = /(?<prefix>^|\s)[;#]/v
const DETECT_SECTION_REGEX = /^\s*(?<section>[\s\S]+?):\s*$/v
const DETECT_ITEM_REGEX = /^\s*(?<key>.+?)\s*:\s*(?<value>.+?)\s*$/v

/**
 * Returns the part of a POSIX mode that grants access to group or others.
 *
 * @internal
 */
const getGroupOrOtherBits = (mode: number): number =>
  // eslint-disable-next-line no-bitwise
  mode & 0o077

/**
 * Emits a warning when a configuration file is readable by group or others.
 *
 * The Scaleway config file holds secret keys that grant full API access. When
 * the file is more permissive than `0o600` the user is warned so they can
 * tighten permissions.
 *
 * @param filePath - Path to the configuration file
 * @param mode - Resolved POSIX mode bits of the file
 *
 * @internal
 */
const warnIfInsecurePermissions = (filePath: string, mode: number): void => {
  if (getGroupOrOtherBits(mode) === 0) {
    return
  }
  // eslint-disable-next-line no-bitwise
  const formattedMode = (mode & 0o777).toString(8).padStart(3, '0')
  // eslint-disable-next-line no-console
  console.warn(
    `Warning: Scaleway configuration file at ${filePath} has insecure permissions (mode 0o${formattedMode}). ` +
      `Credentials are readable by group or others. ` +
      `Run "chmod 600 ${filePath}" to restrict access.`,
  )
}

/**
 * Resolves the POSIX mode of a file synchronously, or `undefined` if it
 * cannot be stat-ed. Failures are ignored: the loader's own read call will
 * surface a real error if the file is unreachable.
 *
 * @internal
 */
const getModeSync = (filePath: string): number | undefined => {
  try {
    const { mode } = statSync(filePath)

    return mode
  } catch {
    return undefined
  }
}

/**
 * Asynchronous counterpart to {@link getModeSync}.
 *
 * @internal
 */
const getModeAsync = async (filePath: string): Promise<number | undefined> => {
  try {
    const info = await statAsync(filePath)
    const { mode } = info

    return mode
  } catch {
    return undefined
  }
}

/**
 * Emits an insecure-permissions warning by stat-ing the file synchronously.
 * No-op on Windows where POSIX permission bits are not meaningful.
 *
 * @internal
 */
const warnIfInsecurePermissionsIfNeededSync = (filePath: string): void => {
  if (process.platform === 'win32') {
    return
  }
  const mode = getModeSync(filePath)
  if (mode === undefined) {
    return
  }
  warnIfInsecurePermissions(filePath, mode)
}

/**
 * Emits an insecure-permissions warning by stat-ing the file asynchronously.
 * No-op on Windows where POSIX permission bits are not meaningful.
 *
 * @internal
 */
const warnIfInsecurePermissionsIfNeeded = async (filePath: string): Promise<void> => {
  if (process.platform === 'win32') {
    return
  }
  const mode = await getModeAsync(filePath)
  if (mode === undefined) {
    return
  }
  warnIfInsecurePermissions(filePath, mode)
}

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
  input.split(/\r?\n/v).forEach(rawLine => {
    // remove comments
    const [line] = rawLine.split(STRIP_COMMENT_REGEX)
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
    else if (currentSection !== undefined) {
      const item = DETECT_ITEM_REGEX.exec(line)
      if (item) {
        if (typeof map[currentSection] !== 'object') {
          map[currentSection] = {}
        }
        const [, key, value] = item
        map[currentSection][key] = value
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
  warnIfInsecurePermissionsIfNeededSync(filePath)
  // `readFileSync` returns a string when encoding option is specified.
  // {@link https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options}
  const fileContent = readFileSync(filePath, 'utf8')

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
  await warnIfInsecurePermissionsIfNeeded(filePath)
  const fileContent = await readFileAsync(filePath, 'utf8')

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
  if (process.platform === 'win32') {
    return true
  }

  const info = await statAsync(filePath)
  const { mode } = info

  return getGroupOrOtherBits(mode) === 0
}
