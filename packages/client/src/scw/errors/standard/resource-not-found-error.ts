import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link ResourceNotFoundError}.
 *
 * @public
 */
export interface ResourceNotFoundErrorOptions {
  resource: string
  resourceId: string
}

/**
 * ResourceNotFound error happens when getting a resource that does not exist anymore.
 *
 * @public
 */
export class ResourceNotFoundError extends ScalewayError {
  readonly resource: string
  readonly resourceId: string

  constructor(
    readonly status: number,
    readonly body: JSONObject,
    options: ResourceNotFoundErrorOptions,
  ) {
    super(status, body, `resource ${options.resource} with ID ${options.resourceId} is not found`)
    this.name = 'ResourceNotFoundError'
    this.resource = options.resource
    this.resourceId = options.resourceId
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.resource !== 'string' || typeof obj.resource_id !== 'string') {
      return null
    }

    return new ResourceNotFoundError(status, obj, { resource: obj.resource, resourceId: obj.resource_id })
  }
}
