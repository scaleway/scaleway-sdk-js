import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * OutOfStock error happens when stocks are empty for the resource.
 *
 * @public
 */
export class OutOfStockError extends ScalewayError {
  public readonly status: number
  public readonly body: JSONObject
  public readonly resource: string

  public constructor(status: number, body: JSONObject, resource: string) {
    super(status, body, `resource ${resource} is out of stock`)
    this.status = status
    this.body = body
    this.resource = resource
    this.name = 'OutOfStockError'
  }

  public static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.resource !== 'string') {
      return null
    }

    return new OutOfStockError(status, obj, obj.resource)
  }
}
