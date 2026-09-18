import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link TransientStateError}.
 *
 * @public
 */
export type TransientStateErrorOptions = {
  resource: string
  resourceId: string
  currentState: string
}

/**
 * TransientState error happens when trying to perform an action on a resource in a transient state.
 *
 * @public
 */
export class TransientStateError extends ScalewayError {
  public readonly status: number
  public readonly body: JSONObject
  public readonly resource: string
  public readonly resourceId: string
  public readonly currentState: string

  public constructor(status: number, body: JSONObject, options: TransientStateErrorOptions) {
    super(
      status,
      body,
      `resource ${options.resource} with ID ${options.resourceId} is in a transient state: ${options.currentState}`,
    )
    this.status = status
    this.body = body
    this.name = 'TransientStateError'
    this.resource = options.resource
    this.resourceId = options.resourceId
    this.currentState = options.currentState
  }

  public static fromJSON(status: number, obj: Readonly<JSONObject>): ScalewayError | null {
    if (
      typeof obj.resource !== 'string' ||
      typeof obj.resource_id !== 'string' ||
      typeof obj.current_state !== 'string'
    ) {
      return null
    }

    return new TransientStateError(status, obj, {
      resource: obj.resource,
      resourceId: obj.resource_id,
      currentState: obj.current_state,
    })
  }
}
