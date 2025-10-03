import type { JSONObject } from '../../../helpers/json.js'
import { isJSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Details of an {@link PermissionsDeniedError} error.
 *
 * @public
 */
export interface PermissionsDeniedErrorDetails {
  readonly resource: string
  readonly action: string
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
  `insufficient permissions: ${list
    .map(({ action, resource }) => `${action} ${resource}`)
    .join('; ')}`

/**
 * PermissionsDenied error happens when one or many permissions are not accorded to the user making the request.
 *
 * @public
 */
export class PermissionsDeniedError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly list: PermissionsDeniedErrorDetails[],
  ) {
    super(status, body, buildMessage(list))
    this.name = 'PermissionsDeniedError'
  }

  static fromJSON(
    status: number,
    obj: Readonly<JSONObject>,
  ): ScalewayError | null {
    if (!Array.isArray(obj.details)) return null

    return new PermissionsDeniedError(
      status,
      obj,
      obj.details.reduce<PermissionsDeniedErrorDetails[]>(
        (list, detail) =>
          isJSONObject(detail) &&
          typeof detail.resource === 'string' &&
          typeof detail.action === 'string'
            ? list.concat({
                action: detail.action,
                resource: detail.resource,
              })
            : list,
        [],
      ),
    )
  }
}
