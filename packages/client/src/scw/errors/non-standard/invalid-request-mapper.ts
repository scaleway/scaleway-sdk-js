import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'
import { InvalidArgumentsError } from '../standard/invalid-arguments-error.js'
import { QuotasExceededError } from '../standard/quotas-exceeded-error.js'
import { isRecordOfStringArray } from '../types.js'

/**
 * InvalidRequest error is only returned by the instance API.
 *
 * @public
 */
export const mapInvalidRequestFromJSON = (
  status: number,
  obj: Readonly<JSONObject>,
): QuotasExceededError | InvalidArgumentsError | ScalewayError => {
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
      fieldsMessages.flatMap(([argumentName, messages]) =>
        messages.map(helpMessage => ({
          argumentName,
          helpMessage,
          reason: 'constraint',
        })),
      ),
    )
  }

  return new ScalewayError(status, obj)
}
