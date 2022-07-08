import type { JSONObject } from '../../helpers/json'
import { InvalidRequestMapper } from './non-standard/invalid-request-mapper'
import { UnknownResourceMapper } from './non-standard/unknown-resource-mapper'
import { ScalewayError } from './scw-error'
import type { ScalewayErrorFromJSONInitializer } from './scw-error-from-json'
import { AlreadyExistsError } from './standard/already-exists-error'
import { DeniedAuthenticationError } from './standard/denied-authentication-error'
import { InvalidArgumentsError } from './standard/invalid-arguments-error'
import { OutOfStockError } from './standard/out-of-stock-error'
import { PermissionsDeniedError } from './standard/permissions-denied-error'
import { PreconditionFailedError } from './standard/precondition-failed-error'
import { QuotasExceededError } from './standard/quotas-exceeded-error'
import { ResourceExpiredError } from './standard/resource-expired-error'
import { ResourceLockedError } from './standard/resource-locked-error'
import { ResourceNotFoundError } from './standard/resource-not-found-error'
import { TooManyRequestsError } from './standard/too-many-requests-error'
import { TransientStateError } from './standard/transient-state-error'

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
const unmarshalStandardError = (
  type: string,
  status: number,
  body: Readonly<JSONObject>,
): ScalewayError | null => {
  let error: ScalewayErrorFromJSONInitializer
  switch (type) {
    case 'denied_authentication':
      error = DeniedAuthenticationError
      break
    case 'invalid_arguments':
      error = InvalidArgumentsError
      break
    case 'out_of_stock':
      error = OutOfStockError
      break
    case 'permissions_denied':
      error = PermissionsDeniedError
      break
    case 'precondition_failed':
      error = PreconditionFailedError
      break
    case 'quotas_exceeded':
      error = QuotasExceededError
      break
    case 'expired':
      error = ResourceExpiredError
      break
    case 'not_found':
      error = ResourceNotFoundError
      break
    case 'locked':
      error = ResourceLockedError
      break
    case 'transient_state':
      error = TransientStateError
      break
    case 'already_exists':
      error = AlreadyExistsError
      break
    case 'too_many_requests':
      error = TooManyRequestsError
      break
    default:
      return null
  }

  return error.fromJSON(status, body)
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
const unmarshalNonStandardError = (
  type: string,
  status: number,
  body: Readonly<JSONObject>,
): ScalewayError | null => {
  switch (type) {
    case 'unknown_resource':
      return UnknownResourceMapper.fromJSON(status, body)
    case 'invalid_request_error':
      return InvalidRequestMapper.fromJSON(status, body)
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
export const parseScalewayError = (
  status: number,
  body: Readonly<JSONObject>,
): ScalewayError => {
  const parsableError =
    typeof body.type === 'string' &&
    (unmarshalStandardError(body.type, status, body) ??
      unmarshalNonStandardError(body.type, status, body))

  return parsableError || new ScalewayError(status, body)
}
