import type { JSONObject } from '../../../helpers/json.js'
import { isJSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Quota policy of {@link TooManyRequestsError}.
 *
 * @public
 */
export interface TooManyRequestsQuotaPolicy {
  quota: number
  windowSeconds?: number
}

/**
 * Build the default message for {@link TooManyRequestsError}.
 *
 * @internal
 */
const buildMessage = (
  helpMessage: string,
  limit?: TooManyRequestsQuotaPolicy,
  resetSeconds?: number,
  resetAt?: Date,
): string => {
  const details: string[] = []
  if (limit) {
    if (limit.windowSeconds) {
      details.push(`quota is ${limit.quota} for ${limit.windowSeconds}s`)
    } else {
      details.push(`quota is ${limit.quota}`)
    }
  }
  if (resetSeconds) {
    details.push(`resets in ${resetSeconds}s`)
  } else if (resetAt) {
    details.push(`resets at ${resetAt.toISOString()}`)
  }

  let output = `too many requests`
  if (details.length > 0) {
    output += ` (${details.join(', ')})`
  }
  if (helpMessage.length > 0) {
    output += `: ${helpMessage}`
  }

  return output
}

/**
 * TooManyRequestsError error happens when fetching too many times a resource.
 *
 * @public
 */
export class TooManyRequestsError extends ScalewayError {
  constructor(
    readonly status: number,
    readonly body: JSONObject,
    readonly helpMessage: string,
    readonly limit?: TooManyRequestsQuotaPolicy,
    /** The number of seconds until the quota resets */
    readonly resetSeconds?: number,
    /** The timestamp when the quota resets */
    readonly resetAt?: Date,
  ) {
    super(status, body, buildMessage(helpMessage, limit, resetSeconds, resetAt))
    this.name = 'TooManyRequestsError'
  }

  static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (typeof obj.help_message !== 'string') return null
    let limit: TooManyRequestsQuotaPolicy | undefined
    if (isJSONObject(obj.limit) && typeof obj.limit.quota === 'number') {
      limit = {
        quota: obj.limit.quota,
        windowSeconds:
          typeof obj.limit.window_seconds === 'number'
            ? obj.limit.window_seconds
            : undefined,
      }
    }

    return new TooManyRequestsError(
      status,
      obj,
      obj.help_message,
      limit,
      typeof obj.reset_seconds === 'number' ? obj.reset_seconds : undefined,
      typeof obj.reset_at === 'string' ? new Date(obj.reset_at) : undefined,
    )
  }
}
