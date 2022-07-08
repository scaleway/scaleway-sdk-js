import {
  isAccessKey,
  isSecretKey,
} from '../internal/validations/string-validation'
import type { Region, Zone } from './locality'

/**
 * Holds access key and secret key.
 *
 * @public
 */
export interface AuthenticationSecrets {
  /**
   * You need an access key and a secret key to connect to Scaleway API.
   * Generate your access key at the following address: {@link https://console.scaleway.com/project/credentials}.
   */
  accessKey: string
  /**
   * The secret key is the value that can be used to authenticate against the API (the value used in X-Auth-Token HTTP-header).
   * The secret key MUST remain secret and not given to anyone or published online.
   * Generate your secret key at the following address: {@link https://console.scaleway.com/project/credentials}.
   */
  secretKey: string
}

/**
 * Holds default values of a Scaleway profile.
 *
 * @public
 */
export interface DefaultValues {
  /**
   * APIURL overrides the API URL of the Scaleway API to the given URL.
   * Change that if you want to direct requests to a different endpoint.
   *
   * @defaultValue `https://api.scaleway.com`
   */
  apiURL: string
  /**
   * Your organization ID is the identifier of your account inside Scaleway infrastructure.
   */
  defaultOrganizationId?: string
  /**
   * Your project ID is the identifier of the project your resources are attached to.
   */
  defaultProjectId?: string
  /**
   * A region is represented as a geographical area such as France (Paris) or the Netherlands (Amsterdam).
   * It can contain multiple availability zones.
   *
   * Examples: fr-par, nl-ams.
   */
  defaultRegion?: Region
  /**
   * A region can be split into many availability zones (AZ).
   * Latency between multiple AZ of the same region are low as they have a common network layer.
   *
   * Examples: fr-par-1, nl-ams-1
   */
  defaultZone?: Zone
}

/**
 * Holds values of a Scaleway profile.
 *
 * @public
 */
export type Profile = Partial<DefaultValues & AuthenticationSecrets>

/**
 * Verifies that the payload contains both the accessKey and the secretKey.
 *
 * @param obj - The secrets
 * @returns Whether the secrets are not empty.
 *
 * @internal
 */
export const hasAuthenticationSecrets = (
  obj: Partial<AuthenticationSecrets>,
): obj is AuthenticationSecrets =>
  typeof obj.accessKey === 'string' &&
  obj.accessKey !== '' &&
  typeof obj.secretKey === 'string' &&
  obj.secretKey !== ''

/**
 * Asserts the format of secrets.
 *
 * @param obj - The secrets
 * @returns Whether the secrets use a valid format
 *
 * @throws Error
 * Thrown if either the accessKey or the secretKey has en invalid format.
 *
 * @internal
 */
export function assertValidAuthenticationSecrets(
  obj: Partial<AuthenticationSecrets>,
): asserts obj is AuthenticationSecrets {
  if (!(obj.accessKey && obj.secretKey))
    throw new Error(
      `Invalid secrets, accessKey & secretKey must be defined. See https://www.scaleway.com/docs/console/my-project/how-to/generate-api-key`,
    )
  if (!isAccessKey(obj.accessKey))
    throw new Error(
      `Invalid access key format '${obj.accessKey}', expected SCWXXXXXXXXXXXXXXXXX format. See https://www.scaleway.com/docs/console/my-project/how-to/generate-api-key`,
    )
  if (!isSecretKey(obj.secretKey))
    throw new Error(
      `Invalid secret key format '${obj.secretKey}', expected a UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx. See https://www.scaleway.com/docs/console/my-project/how-to/generate-api-key`,
    )
}
