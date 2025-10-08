import type { JSONObject } from '../../../helpers/json.js'
import { isJSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Scope of an {@link QuotasExceededErrorDetails} error.
 *
 * @public
 */
export interface QuotasExceededErrorScope {
  kind: 'organization' | 'project'
  id: string
}

/**
 * Details of an {@link QuotasExceededError} error.
 *
 * @public
 */
export interface QuotasExceededErrorDetails {
  readonly resource: string
  readonly quota: number
  readonly current: number
  readonly scope?: QuotasExceededErrorScope
}

/**
 * Build the default message for {@link QuotasExceededError}.
 *
 * @param list - The list of {@link QuotasExceededErrorDetails}
 * @returns The error message
 *
 * @internal
 */
const buildMessage = (list: QuotasExceededErrorDetails[]): string =>
  `quota(s) exceeded: ${list
    .map(details => {
      const message = `Quotas reached: You have reached the maximum number of ${details.resource} authorized by your Organization. Access the quotas page from your Organization dashboard to manage quotas.`

      return details.scope
        ? `${message} for ${details.scope.kind} '${details.scope.id}'`
        : message
    })
    .join('; ')}`

const buildScope = (
  detail: JSONObject,
): QuotasExceededErrorScope | undefined => {
  if (
    typeof detail.organization_id === 'string' &&
    detail.organization_id.length
  ) {
    return { id: detail.organization_id, kind: 'organization' }
  }
  if (typeof detail.project_id === 'string' && detail.project_id.length) {
    return { id: detail.project_id, kind: 'project' }
  }

  return undefined
}

/**
 * QuotasExceeded error happens when one or many resource exceed quotas during the creation of a resource.
 *
 * @public
 */
export class QuotasExceededError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly list: QuotasExceededErrorDetails[],
  ) {
    super(status, body, buildMessage(list))
    this.name = 'QuotasExceededError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (!Array.isArray(obj.details)) return null

    return new QuotasExceededError(
      status,
      obj,
      obj.details.reduce<QuotasExceededErrorDetails[]>(
        (list, detail) =>
          isJSONObject(detail) &&
          typeof detail.resource === 'string' &&
          typeof detail.quota === 'number' &&
          typeof detail.current === 'number'
            ? list.concat({
                current: detail.current,
                quota: detail.quota,
                resource: detail.resource,
                scope: buildScope(detail),
              })
            : list,
        [],
      ),
    )
  }
}
