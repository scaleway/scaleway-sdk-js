import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link ResourceExpiredError}.
 *
 * @public
 */
export type ResourceExpiredErrorOptions = {
  resource: string
  resourceId: string
  expiredSince: Date
}

/**
 * ResourceExpired error happens when trying to access a resource that has expired.
 *
 * @public
 */
export class ResourceExpiredError extends ScalewayError {
  public readonly status: number
  public readonly body: JSONObject
  public readonly resource: string
  public readonly resourceId: string
  public readonly expiredSince: Date

  public constructor(status: number, body: JSONObject, options: ResourceExpiredErrorOptions) {
    super(
      status,
      body,
      `resource ${options.resource} with ID ${options.resourceId} expired since ${options.expiredSince.toISOString()}`,
    )
    this.status = status
    this.body = body
    this.name = 'ResourceExpiredError'
    this.resource = options.resource
    this.resourceId = options.resourceId
    this.expiredSince = options.expiredSince
  }

  public static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (
      typeof obj.resource !== 'string' ||
      typeof obj.resource_id !== 'string' ||
      typeof obj.expired_since !== 'string'
    ) {
      return null
    }

    return new ResourceExpiredError(status, obj, {
      resource: obj.resource,
      resourceId: obj.resource_id,
      expiredSince: new Date(obj.expired_since),
    })
  }
}
