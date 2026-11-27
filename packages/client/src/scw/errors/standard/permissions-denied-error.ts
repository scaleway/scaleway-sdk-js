import type { JSONObject } from '../../../helpers/json.js'
import { isJSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

const isString = (str: unknown): str is string => typeof str === 'string'

/**
 * Details of an {@link PermissionsDeniedError} error.
 *
 * @public
 */
export type PermissionsDeniedErrorDetails = {
  readonly resource: string
  readonly action: string
  readonly service: string
  readonly srn: string
}

/**
 * Build the default message for {@link PermissionsDeniedError}.
 *
 * @param list - The list of {@link PermissionsDeniedErrorDetails}
 * @returns The error message
 *
 * @internal
 */
const buildMessage = (list: PermissionsDeniedErrorDetails[]): string =>
  `insufficient permissions: ${list.map(({ service, action, resource, srn }) => `${service}:${resource}:${action} on ${srn} `).join('; ')}`

/**
 * PermissionsDenied error happens when one or many permissions are not accorded to the user making the request.
 *
 * @public
 */
export class PermissionsDeniedError extends ScalewayError {
  public readonly status: number
  public readonly body: JSONObject
  public readonly list: PermissionsDeniedErrorDetails[]

  public constructor(status: number, body: JSONObject, list: PermissionsDeniedErrorDetails[]) {
    super(status, body, buildMessage(list))
    this.status = status
    this.body = body
    this.list = list
    this.name = 'PermissionsDeniedError'
  }

  public static fromJSON(status: number, obj: Readonly<JSONObject>): ScalewayError | null {
    if (!Array.isArray(obj.details)) {
      return null
    }

    return new PermissionsDeniedError(
      status,
      obj,
      obj.details.reduce<PermissionsDeniedErrorDetails[]>((list, detail) => {
        if (isJSONObject(detail)) {
          list.push({
            service: isString(detail.service) ? detail.service : '',
            srn: isString(detail.srn) ? detail.srn : '',
            action: isString(detail.action) ? detail.action : '',
            resource: isString(detail.resource) ? detail.resource : '',
          })
        }
        return list
      }, []),
    )
  }
}
