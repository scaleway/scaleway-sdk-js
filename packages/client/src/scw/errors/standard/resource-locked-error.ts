import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link ResourceLockedError}.
 *
 * @public
 */
export interface ResourceLockedErrorOptions {
  resource: string
  resourceId: string
}

/**
 * ResourceLocked error happens when a resource is locked by trust and safety.
 *
 * @public
 */
export class ResourceLockedError extends ScalewayError {
  readonly resource: string
  readonly resourceId: string

  constructor(
    readonly status: number,
    readonly body: JSONObject,
    options: ResourceLockedErrorOptions,
  ) {
    super(status, body, `resource ${options.resource} with ID ${options.resourceId} is locked`)
    this.name = 'ResourceLockedError'
    this.resource = options.resource
    this.resourceId = options.resourceId
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.resource !== 'string' || typeof obj.resource_id !== 'string') {
      return null
    }

    return new ResourceLockedError(status, obj, { resource: obj.resource, resourceId: obj.resource_id })
  }
}
