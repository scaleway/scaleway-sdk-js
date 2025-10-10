import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * ResourceLocked error happens when a resource is locked by trust and safety.
 *
 * @public
 */
export class ResourceLockedError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly resource: string,
    readonly resourceId: string,
  ) {
    super(status, body, `resource ${resource} with ID ${resourceId} is locked`)
    this.name = 'ResourceLockedError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (
      typeof obj.resource !== 'string' ||
      typeof obj.resource_id !== 'string'
    ) {
      return null
    }

    return new ResourceLockedError(status, obj, obj.resource, obj.resource_id)
  }
}
