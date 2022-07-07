import type { JSONObject } from '../../../helpers/json'
import { ScalewayError } from '../scw-error'

/**
 * OutOfStock error happens when stocks are empty for the resource.
 *
 * @public
 */
export class OutOfStockError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly resource: string,
  ) {
    super(status, body, `resource ${resource} is out of stock`)
    this.name = 'OutOfStockError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.resource !== 'string') return null

    return new OutOfStockError(status, obj, obj.resource)
  }
}
