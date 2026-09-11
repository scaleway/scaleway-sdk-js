import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link PreconditionFailedError}.
 *
 * @public
 */
export interface PreconditionFailedErrorOptions {
  precondition: string
  helpMessage: string
}

/**
 * Build the default message for {@link PreconditionFailedError}.
 *
 * @param options - The precondition and help message
 * @returns The error message
 *
 * @internal
 */
const buildMessage = (options: PreconditionFailedErrorOptions): string => {
  let message = `precondition failed: ${options.precondition}`
  if (typeof options.helpMessage === 'string' && options.helpMessage.length > 0) {
    message = message.concat(', ', options.helpMessage)
  }

  return message
}

/**
 * PreconditionFailed error is used when a precondition is not respected.
 *
 * @public
 */
export class PreconditionFailedError extends ScalewayError {
  readonly precondition: string
  readonly helpMessage: string

  constructor(
    readonly status: number,
    readonly body: JSONObject,
    options: PreconditionFailedErrorOptions,
  ) {
    super(status, body, buildMessage(options))
    this.name = 'PreconditionFailedError'
    this.precondition = options.precondition
    this.helpMessage = options.helpMessage
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.precondition !== 'string' || typeof obj.help_message !== 'string') {
      return null
    }

    return new PreconditionFailedError(status, obj, {
      precondition: obj.precondition,
      helpMessage: obj.help_message,
    })
  }
}
