import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * AlreadyExists error is used when a resource already exists.
 *
 * @public
 */
export class AlreadyExistsError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly resource: string,
    readonly resourceId: string,
    readonly helpMessage: string,
  ) {
    super(
      status,
      body,
      `resource ${resource} with ID ${resourceId} already exists: ${helpMessage}`,
    )
    this.name = 'AlreadyExistsError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (
      typeof obj.resource !== 'string' ||
      typeof obj.resource_id !== 'string' ||
      typeof obj.help_message !== 'string'
    ) {
      return null
    }

    return new AlreadyExistsError(
      status,
      obj,
      obj.resource,
      obj.resource_id,
      obj.help_message,
    )
  }
}
