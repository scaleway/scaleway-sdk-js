import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link ResourceNotFoundError}.
 *
 * @public
 */
export type ResourceNotFoundErrorOptions = {
  resource: string
  resourceId: string
}

/**
 * ResourceNotFound error happens when getting a resource that does not exist anymore.
 *
 * @public
 */
export class ResourceNotFoundError extends ScalewayError {
  public readonly status: number
  public readonly body: JSONObject
  public readonly resource: string
  public readonly resourceId: string

  public constructor(status: number, body: JSONObject, options: ResourceNotFoundErrorOptions) {
    super(status, body, `resource ${options.resource} with ID ${options.resourceId} is not found`)
    this.status = status
    this.body = body
    this.name = 'ResourceNotFoundError'
    this.resource = options.resource
    this.resourceId = options.resourceId
  }

  public static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.resource !== 'string' || typeof obj.resource_id !== 'string') {
      return null
    }

    return new ResourceNotFoundError(status, obj, { resource: obj.resource, resourceId: obj.resource_id })
  }
}
