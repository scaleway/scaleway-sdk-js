import type { JSONObject } from '../../../helpers/json'
import { ScalewayError } from '../scw-error'
import { InvalidArgumentsError } from '../standard/invalid-arguments-error'
import { QuotasExceededError } from '../standard/quotas-exceeded-error'
import { isRecordOfStringArray } from '../types'

/**
 * InvalidRequest error is only returned by the instance API.
 *
 * @public
 */
export class InvalidRequestMapper {
  static fromJSON(
    status: number,
    obj: Readonly<JSONObject>,
  ): QuotasExceededError | InvalidArgumentsError | ScalewayError {
    if (
      typeof obj.message === 'string' &&
      obj.message.toLowerCase().includes('quota exceeded for this resource')
    ) {
      return new QuotasExceededError(status, obj, [
        {
          current: 0,
          quota: 0,
          resource: typeof obj.resource === 'string' ? obj.resource : '',
        },
      ])
    }

    const fields =
      obj.fields && isRecordOfStringArray(obj.fields) ? obj.fields : {}
    const fieldsMessages = Object.entries(fields)
    if (fieldsMessages.length) {
      return new InvalidArgumentsError(
        status,
        obj,
        fieldsMessages
          .map(([argumentName, messages]) =>
            messages.map(helpMessage => ({
              argumentName,
              helpMessage,
              reason: 'constraint',
            })),
          )
          .flat(),
      )
    }

    return new ScalewayError(status, obj)
  }
}
