import type { JSONObject } from '../../../helpers/json.js'
import { isJSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Details of an {@link InvalidArgumentsError} error.
 *
 * @public
 */
export interface InvalidArgumentsErrorDetails {
  readonly argumentName: string
  readonly reason: string
  readonly helpMessage?: string
}

/**
 * Build the default message for {@link InvalidArgumentsError}.
 *
 * @param list - The list of {@link InvalidArgumentsErrorDetails}
 * @returns The error message
 *
 * @internal
 */
const buildMessage = (list: InvalidArgumentsErrorDetails[]): string => {
  const invalidArgs: string[] = list.reduce<string[]>((acc, details) => {
    let readableReason = ''
    switch (details.reason) {
      case 'required':
        readableReason = `is required`
        break
      case 'format':
        readableReason = `is wrongly formatted`
        break
      case 'constraint':
        readableReason = `does not respect constraint`
        break
      default:
        readableReason = `is invalid for unexpected reason`
        break
    }
    if (details.helpMessage && details.helpMessage.length > 0) {
      readableReason = readableReason.concat(`, `, details.helpMessage)
    }
    acc.push(`${details.argumentName} ${readableReason}`)

    return acc
  }, [])

  return `invalid argument(s): ${invalidArgs.join('; ')}`
}

/**
 * InvalidArguments error happens when one or many fields are invalid in the request message.
 *
 * @public
 */
export class InvalidArgumentsError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly details: InvalidArgumentsErrorDetails[],
  ) {
    super(status, body, buildMessage(details))
    this.name = 'InvalidArgumentsError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (!Array.isArray(obj.details)) return null

    return new InvalidArgumentsError(
      status,
      obj,
      obj.details.reduce<InvalidArgumentsErrorDetails[]>(
        (list, detail) =>
          isJSONObject(detail) &&
          typeof detail.argument_name === 'string' &&
          typeof detail.reason === 'string'
            ? list.concat({
                argumentName: detail.argument_name,
                helpMessage:
                  typeof detail.help_message === 'string'
                    ? detail.help_message
                    : undefined,
                reason: detail.reason,
              })
            : list,
        [],
      ),
    )
  }
}
