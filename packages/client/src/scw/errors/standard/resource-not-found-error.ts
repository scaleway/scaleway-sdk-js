import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * ResourceNotFound error happens when getting a resource that does not exist anymore.
 *
 * @public
 */
export class ResourceNotFoundError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly resource: string,
    readonly resourceId: string,
  ) {
    super(
      status,
      body,
      `resource ${resource} with ID ${resourceId} is not found`,
    )
    this.name = 'ResourceNotFoundError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (
      typeof obj.resource !== 'string' ||
      typeof obj.resource_id !== 'string'
    ) {
      return null
    }

    return new ResourceNotFoundError(status, obj, obj.resource, obj.resource_id)
  }
}
