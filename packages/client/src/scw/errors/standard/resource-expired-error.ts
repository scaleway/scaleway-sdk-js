import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link ResourceExpiredError}.
 *
 * @public
 */
export interface ResourceExpiredErrorOptions {
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
  readonly resource: string
  readonly resourceId: string
  readonly expiredSince: Date

  constructor(
    readonly status: number,
    readonly body: JSONObject,
    options: ResourceExpiredErrorOptions,
  ) {
    super(
      status,
      body,
      `resource ${options.resource} with ID ${options.resourceId} expired since ${options.expiredSince.toISOString()}`,
    )
    this.name = 'ResourceExpiredError'
    this.resource = options.resource
    this.resourceId = options.resourceId
    this.expiredSince = options.expiredSince
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
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
