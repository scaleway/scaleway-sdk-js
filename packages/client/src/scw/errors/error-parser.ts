import type { JSONObject } from '../../helpers/json.js'
import { mapInvalidRequestFromJSON } from './non-standard/invalid-request-mapper.js'
import { mapUnknownResourceFromJSON } from './non-standard/unknown-resource-mapper.js'
import type { ScalewayErrorFromJSONInitializer } from './scw-error-from-json.js'
import { ScalewayError } from './scw-error.js'
import { AlreadyExistsError } from './standard/already-exists-error.js'
import { DeniedAuthenticationError } from './standard/denied-authentication-error.js'
import { InvalidArgumentsError } from './standard/invalid-arguments-error.js'
import { OutOfStockError } from './standard/out-of-stock-error.js'
import { PermissionsDeniedError } from './standard/permissions-denied-error.js'
import { PreconditionFailedError } from './standard/precondition-failed-error.js'
import { QuotasExceededError } from './standard/quotas-exceeded-error.js'
import { ResourceExpiredError } from './standard/resource-expired-error.js'
import { ResourceLockedError } from './standard/resource-locked-error.js'
import { ResourceNotFoundError } from './standard/resource-not-found-error.js'
import { TooManyRequestsError } from './standard/too-many-requests-error.js'
import { TransientStateError } from './standard/transient-state-error.js'

/**
 * Unmarshals a standard error from raw body.
 *
 * @param type - The error type
 * @param status - The status code
 * @param body - The error response
 * @returns The standard error if found
 *
 * @internal
 */
const unmarshalStandardError = (type: string, status: number, body: Readonly<JSONObject>): ScalewayError | null => {
  const errorByType: Record<string, ScalewayErrorFromJSONInitializer> = {
    denied_authentication: DeniedAuthenticationError,
    invalid_arguments: InvalidArgumentsError,
    out_of_stock: OutOfStockError,
    permissions_denied: PermissionsDeniedError,
    precondition_failed: PreconditionFailedError,
    quotas_exceeded: QuotasExceededError,
    expired: ResourceExpiredError,
    not_found: ResourceNotFoundError,
    locked: ResourceLockedError,
    transient_state: TransientStateError,
    already_exists: AlreadyExistsError,
    too_many_requests: TooManyRequestsError,
  }

  const error = errorByType[type]
  return error ? error.fromJSON(status, body) : null
}

/**
 * Unmarshals a non-standard error from raw body.
 *
 * @param type - The error type
 * @param status - The status code
 * @param body - The error response
 * @returns The non-standard error if found
 *
 * @internal
 */
const unmarshalNonStandardError = (type: string, status: number, body: Readonly<JSONObject>): ScalewayError | null => {
  switch (type) {
    case 'unknown_resource':
      return mapUnknownResourceFromJSON(status, body)
    case 'invalid_request_error':
      return mapInvalidRequestFromJSON(status, body)
    default:
      return null
  }
}

/**
 * Parses Scaleway error from raw body.
 *
 * @param status - The status code
 * @param body - The error response
 * @returns The resolved error
 *
 * @internal
 */
export const parseScalewayError = (status: number, body: Readonly<JSONObject>): ScalewayError => {
  const parsableError =
    typeof body.type === 'string' &&
    (unmarshalStandardError(body.type, status, body) ?? unmarshalNonStandardError(body.type, status, body))

  return parsableError || new ScalewayError(status, body)
}
