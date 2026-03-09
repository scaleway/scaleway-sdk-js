/**
 * Path utility functions for build scripts
 */

/**
 * Removes 'src/' from any path string
 * Handles both forward slashes and backslashes
 * @param path The input path that may contain 'src/'
 * @returns The path with 'src/' removed
 * @example
 * removeSrcFromPath('./src/components/Button') // returns './components/Button'
 * removeSrcFromPath('src/utils/helper') // returns 'utils/helper'
 * removeSrcFromPath('/absolute/src/path') // returns '/absolute/path'
 */
export function removeSrcFromPath(path: string): string {
  // Handle both Unix and Windows path separators
  const unixPattern = /\/src\//g
  const winPattern = /\\src\\/g
  const startPattern = /^src[\\/]/

  return path
    .replace(unixPattern, '/')
    .replace(winPattern, '\\')
    .replace(startPattern, '')
}

/**
 * Converts a source path to a distribution path
 * Replaces 'src/' with the appropriate dist structure
 * @param srcPath The source path
 * @param distBase The base directory for dist (default: 'dist')
 * @returns The converted distribution path
 * @example
 * srcToDistPath('./src/components/Button.ts') // returns './dist/components/Button.js'
 * srcToDistPath('src/utils/helper.ts', 'lib') // returns 'lib/utils/helper.js'
 */
export function srcToDistPath(
  srcPath: string,
  distBase: string = 'dist',
): string {
  const withoutSrc = removeSrcFromPath(srcPath)

  // Replace file extensions for common cases
  const extReplaced = withoutSrc
    .replace(/\.ts$/, '.js')
    .replace(/\.tsx$/, '.js')
    .replace(/\.jsx$/, '.js')

  // Ensure the dist base is at the beginning
  if (extReplaced.startsWith('./')) {
    return `./${distBase}${extReplaced.slice(1)}`
  }

  return `${distBase}/${extReplaced}`
}

/**
 * Normalizes a path for use in package.json exports
 * Ensures consistent path formatting
 * @param path The path to normalize
 * @returns The normalized path
 */
export function normalizeExportPath(path: string): string {
  // Ensure path starts with ./
  if (!path.startsWith('./')) {
    path = `./${path}`
  }

  // Remove any src/ references
  path = removeSrcFromPath(path)

  // Normalize slashes to forward slashes
  return path.replace(/\\/g, '/')
}
