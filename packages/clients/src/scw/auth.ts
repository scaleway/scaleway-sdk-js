import type { RequestInterceptor } from '../internal/interceptors/network'
import {
  addAsyncHeaderInterceptor,
  addHeaderInterceptor,
} from '../internal/interceptors/network'
import { assertValidAuthenticationSecrets } from './client-ini-profile'
import type { AuthenticationSecrets } from './client-ini-profile'

const SESSION_HEADER_KEY = 'x-session-token'
const AUTH_HEADER_KEY = 'x-auth-token'

interface TokenAccessor {
  (): Promise<string | undefined>
}

/**
 * Authenticates with a session token.
 *
 * @param getToken - The token accessor
 * @returns The request interceptor
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
