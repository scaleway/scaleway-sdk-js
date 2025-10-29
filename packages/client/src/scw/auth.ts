import {
  addAsyncHeaderInterceptor,
  addHeaderInterceptor,
} from '../internal/interceptors/helpers.js'
import type { RequestInterceptor } from '../internal/interceptors/types.js'
import type { AuthenticationSecrets } from './client-ini-profile.js'
import { assertValidAuthenticationSecrets } from './client-ini-profile.js'
import { AUTH_HEADER_KEY, SESSION_HEADER_KEY } from './constants.js'

type TokenAccessor = () => Promise<string | undefined>

interface AddSessionHeader {
  request: Request
  getAsyncToken: () => Promise<string | undefined>
}
/**
 * Add an JWT Session Header to a request through an interceptor.
 *
 * @param request - The request to modify
 * @param getJwt - The session value
 * @returns The Request interceptor
 *
 */
export const addSessionHeader = async ({
  request,
  getAsyncToken,
}: AddSessionHeader) =>
  addAsyncHeaderInterceptor(SESSION_HEADER_KEY, getAsyncToken)({ request })

/**
 * Authenticates with a session token.
 *
 * @param getToken - The token accessor
 * @returns The request interceptor
 *
 * @deprecated Please use addAsyncHeaderInterceptor instead.
 *
 * @internal
 */
export const authenticateWithSessionToken = (
  getToken: TokenAccessor,
): RequestInterceptor => addAsyncHeaderInterceptor(SESSION_HEADER_KEY, getToken)

/**
 * Authenticates with a secrets.
 *
 * @param getToken - The secrets
 * @returns The request interceptor
 *
 * @throws Error
 * Thrown if the secrets are invalid.
 *
 * @internal
 */
export const authenticateWithSecrets = (
  secrets: AuthenticationSecrets,
): RequestInterceptor => {
  assertValidAuthenticationSecrets(secrets)

  return addHeaderInterceptor(AUTH_HEADER_KEY, secrets.secretKey)
}

/**
 * Obfuscates a token.
 *
 * @param key - The token
 * @returns The obfuscated token
 *
 * @internal
 */
export const obfuscateToken = (key: string): string =>
  `${key.substring(0, 5)}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

/**
 * Obfuscates an UUID.
 *
 * @param key - The UUID
 * @returns The obfuscated UUID
 *
 * @internal
 */
export const obfuscateUUID = (key: string): string =>
  `${key.substring(0, 8)}-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

type HeaderEntry = [string, string]

/**
 * Obfuscates headers entry.
 *
 * @param array - The header entry
 * @returns The obfuscated entry
 *
 * @internal
 */
export const obfuscateAuthHeadersEntry = ([
  name,
  value,
]: HeaderEntry): HeaderEntry => {
  if (name === SESSION_HEADER_KEY) return [name, obfuscateToken(value)]
  if (name === AUTH_HEADER_KEY) return [name, obfuscateUUID(value)]

  return [name, value]
}
