import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Build the default message for {@link DeniedAuthenticationError}.
 *
 * @param method - The authentication method
 * @param reason - The deny reason
 * @returns The error message
 *
 * @internal
 */
const buildMessage = (method: string, reason: string): string => {
  let reasonDesc: string
  switch (reason) {
    case 'invalid_argument':
      reasonDesc = `invalid ${method} format or empty value`
      break
    case 'not_found':
      reasonDesc = `${method} does not exist`
      break
    case 'expired':
      reasonDesc = `${method} is expired`
      break
    default:
      reasonDesc = `unknown reason for ${method}`
  }

  return `denied authentication: ${reasonDesc}`
}

/**
 * DeniedAuthentication error is used by the API Gateway auth service to deny a request.
 *
 * @public
 */
export class DeniedAuthenticationError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly method: string,
    readonly reason: string,
  ) {
    super(status, body, buildMessage(method, reason))
    this.name = 'DeniedAuthenticationError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.method !== 'string' || typeof obj.reason !== 'string') {
      return null
    }

    return new DeniedAuthenticationError(status, obj, obj.method, obj.reason)
  }
}
