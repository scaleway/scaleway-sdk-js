/**
 * Converts a string to PascalCase.
 *
 * @param str - The input string
 * @returns The string in PascalCase
 *
 * @internal
 */
const toPascalCase = (str: string): string =>
  str.replace(
    /\w+/g,
    word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`,
  )

/**
 * Converts a Headers entry to string.
 *
 * @param entry - The header entry as a string tuple
 * @returns A serialized string
 *
 * @internal
 */
const serializeHeadersEntry = ([name, value]: [string, string]) =>
  `${toPascalCase(name)}: ${value}`

/**
 * Converts Headers to safe to log strings (with obfuscated auth secrets).
 *
 * @param headers - The Headers
 * @returns Serialized headers strings
 *
 * @internal
 */
const serializeHeaders = (headers: Headers): string[] =>
  Array.from(headers.entries(), serializeHeadersEntry)

/**
 * Dumps a Request into a readable string.
 *
 * @param request - The request
 * @returns The readable string
 *
 * @internal
 */
export const dumpRequest = async (
  request: Readonly<Request>,
): Promise<string> =>
  [
    `${request.method.toUpperCase()}: ${request.url}`,
    ...serializeHeaders(request.headers),
    await request.clone().text(),
  ].join('\r\n')

/**
 * Dumps a Response into a readable string.
 *
 * @param response - The response
 * @returns The readable string
 *
 * @internal
 */
export const dumpResponse = async (
  response: Readonly<Response>,
): Promise<string> =>
  [
    `HTTP ${response.status} ${response.ok ? 'OK' : 'NOK'}`,
    ...serializeHeaders(response.headers),
    await response.clone().text(),
  ].join('\r\n')
