import type { JSONObject } from '../../helpers/json.js'
import { isJSONObject } from '../../helpers/json.js'
import { isRecordOfStringArray } from './types.js'

/**
 * Builds the default message for {@link ScalewayError}.
 *
 * @param status - The response code
 * @param body - The response body
 * @returns The error message
 *
 * @internal
 */
const buildDefaultMessage = (status: number, body: unknown): string => {
  const message = [`http error ${status}`]
  if (typeof body === 'string') {
    message.push(body)
  } else if (isJSONObject(body)) {
    if (typeof body.resource === 'string') {
      message.push(`resource ${body.resource}`)
    }
    if (typeof body.message === 'string') {
      message.push(body.message)
    }
    if (body.fields && isRecordOfStringArray(body.fields)) {
      message.push(
        Object.entries(body.fields)
          .map(([name, list]) => `${name} (${list.join(', ')})`)
          .join(', '),
      )
    }
  }

  return message.join(': ')
}

/**
 * Scaleway error.
 *
 * @public
 */
export class ScalewayError extends Error {
  /** The message originating from the payload. */
  rawMessage: string | undefined

  constructor(
    /** The response status. */
    readonly status: number,
    /** The response payload. */
    readonly body: JSONObject | string,
    /** The augmented message. */
    readonly message: string = buildDefaultMessage(status, body),
  ) {
    super(message) // 'Error' breaks prototype chain here
    this.name = 'ScalewayError'
    this.rawMessage =
      typeof body === 'object' && typeof body.message === 'string'
        ? body.message
        : undefined
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }

  static fromJSON(
    status: number,
    obj: Readonly<JSONObject>,
  ): ScalewayError | null {
    return new ScalewayError(status, obj)
  }

  toString(): string {
    return `${this.name}: ${this.message}`
  }
}
