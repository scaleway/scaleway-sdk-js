import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * TransientState error happens when trying to perform an action on a resource in a transient state.
 *
 * @public
 */
export class TransientStateError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly resource: string,
    readonly resourceId: string,
    readonly currentState: string,
  ) {
    super(
      status,
      body,
      `resource ${resource} with ID ${resourceId} is in a transient state: ${currentState}`,
    )
    this.name = 'TransientStateError'
  }

  static fromJSON(
    status: number,
    obj: Readonly<JSONObject>,
  ): ScalewayError | null {
    if (
      typeof obj.resource !== 'string' ||
      typeof obj.resource_id !== 'string' ||
      typeof obj.current_state !== 'string'
    ) {
      return null
    }

    return new TransientStateError(
      status,
      obj,
      obj.resource,
      obj.resource_id,
      obj.current_state,
    )
  }
}
