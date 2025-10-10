import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * ResourceExpired error happens when trying to access a resource that has expired.
 *
 * @public
 */
export class ResourceExpiredError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly resource: string,
    readonly resourceId: string,
    readonly expiredSince: Date,
  ) {
    super(
      status,
      body,
      `resource ${resource} with ID ${resourceId} expired since ${expiredSince.toISOString()}`,
    )
    this.name = 'ResourceExpiredError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (
      typeof obj.resource !== 'string' ||
      typeof obj.resource_id !== 'string' ||
      typeof obj.expired_since !== 'string'
    ) {
      return null
    }

    return new ResourceExpiredError(
      status,
      obj,
      obj.resource,
      obj.resource_id,
      new Date(obj.expired_since),
    )
  }
}
