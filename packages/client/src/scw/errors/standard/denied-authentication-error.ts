import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link DeniedAuthenticationError}.
 *
 * @public
 */
export interface DeniedAuthenticationErrorOptions {
  method: string
  reason: string
}

/**
 * Build the default message for {@link DeniedAuthenticationError}.
 *
 * @param options - The authentication method and deny reason
 * @returns The error message
 *
 * @internal
 */
const buildMessage = (options: DeniedAuthenticationErrorOptions): string => {
  let reasonDesc = `unknown reason for ${options.method}`
  switch (options.reason) {
    case 'invalid_argument':
      reasonDesc = `invalid ${options.method} format or empty value`
      break
    case 'not_found':
      reasonDesc = `${options.method} does not exist`
      break
    case 'expired':
      reasonDesc = `${options.method} is expired`
      break
  }

  return `denied authentication: ${reasonDesc}`
}

/**
 * DeniedAuthentication error is used by the API Gateway auth service to deny a request.
 *
 * @public
 */
export class DeniedAuthenticationError extends ScalewayError {
  readonly method: string
  readonly reason: string

  constructor(
    readonly status: number,
    readonly body: JSONObject,
    options: DeniedAuthenticationErrorOptions,
  ) {
    super(status, body, buildMessage(options))
    this.name = 'DeniedAuthenticationError'
    this.method = options.method
    this.reason = options.reason
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.method !== 'string' || typeof obj.reason !== 'string') {
      return null
    }

    return new DeniedAuthenticationError(status, obj, { method: obj.method, reason: obj.reason })
  }
}
