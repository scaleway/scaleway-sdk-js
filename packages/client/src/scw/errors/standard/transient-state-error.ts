import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link TransientStateError}.
 *
 * @public
 */
export interface TransientStateErrorOptions {
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
  readonly resource: string
  readonly resourceId: string
  readonly currentState: string

  constructor(
    readonly status: number,
    readonly body: JSONObject,
    options: TransientStateErrorOptions,
  ) {
    super(
      status,
      body,
      `resource ${options.resource} with ID ${options.resourceId} is in a transient state: ${options.currentState}`,
    )
    this.name = 'TransientStateError'
    this.resource = options.resource
    this.resourceId = options.resourceId
    this.currentState = options.currentState
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>): ScalewayError | null {
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
