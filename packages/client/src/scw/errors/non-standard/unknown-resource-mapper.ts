import type { JSONObject } from '../../../helpers/json'
import { isUUID } from '../../../internal/validations/string-validation'
import { ScalewayError } from '../scw-error'
import { ResourceNotFoundError } from '../standard/resource-not-found-error'

/**
 * UnknownResource error is only returned by the instance API.
 *
 * @public
 */
export class UnknownResourceMapper {
  static fromJSON(
    status: number,
    obj: Readonly<JSONObject>,
  ): ResourceNotFoundError | ScalewayError {
    // Split the message
    // Note: some errors uses ' and not "
    // Examples: `"111..." not found` or `Security Group '111...' not found`
    const messageParts =
      typeof obj.message === 'string' ? obj.message.split(/"|'/) : []
    if (messageParts.length === 3 && isUUID(messageParts[1])) {
      return new ResourceNotFoundError(
        status,
        obj,
        // transform `Security group ` to `security_group`
        // `.replaceAll()` may be too recent to use yet.
        // that's why we're using `.split(' ').join('_')` for now.
        messageParts[0]
          .trim()
          .toLowerCase()
          .split(' ')
          .join('_'),
        messageParts[1],
      )
    }

    return new ScalewayError(status, obj)
  }
}
