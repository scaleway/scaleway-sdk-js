import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link ResourceLockedError}.
 *
 * @public
 */
export type ResourceLockedErrorOptions = {
  resource: string
  resourceId: string
}

/**
 * ResourceLocked error happens when a resource is locked by trust and safety.
 *
 * @public
 */
export class ResourceLockedError extends ScalewayError {
  public readonly status: number
  public readonly body: JSONObject
  public readonly resource: string
  public readonly resourceId: string

  public constructor(status: number, body: JSONObject, options: ResourceLockedErrorOptions) {
    super(status, body, `resource ${options.resource} with ID ${options.resourceId} is locked`)
    this.status = status
    this.body = body
    this.name = 'ResourceLockedError'
    this.resource = options.resource
    this.resourceId = options.resourceId
  }

  public static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.resource !== 'string' || typeof obj.resource_id !== 'string') {
      return null
    }

    return new ResourceLockedError(status, obj, { resource: obj.resource, resourceId: obj.resource_id })
  }
}
