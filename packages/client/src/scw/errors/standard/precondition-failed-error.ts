import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Build the default message for {@link PreconditionFailedError}.
 *
 * @param precondition - The precondition
 * @param helpMessage - The message which should help the user to fix the root cause
 * @returns The error message
 *
 * @internal
 */
const buildMessage = (precondition: string, helpMessage: string): string => {
  let message = `precondition failed: ${precondition}`
  if (typeof helpMessage === 'string' && helpMessage.length > 0) {
    message = message.concat(', ', helpMessage)
  }

  return message
}

/**
 * PreconditionFailed error is used when a precondition is not respected.
 *
 * @public
 */
export class PreconditionFailedError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly precondition: string,
    readonly helpMessage: string,
  ) {
    super(status, body, buildMessage(precondition, helpMessage))
    this.name = 'PreconditionFailedError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (
      typeof obj.precondition !== 'string' ||
      typeof obj.help_message !== 'string'
    ) {
      return null
    }

    return new PreconditionFailedError(
      status,
      obj,
      obj.precondition,
      obj.help_message,
    )
  }
}
