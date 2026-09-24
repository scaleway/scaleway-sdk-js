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
    if (body.fields !== null && isRecordOfStringArray(body.fields)) {
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
 * Request context attached to a {@link ScalewayError} when it is thrown from
 * the fetcher, so callers can identify which call failed.
 *
 * @public
 */
export type ScalewayErrorRequestContext = {
  url: string
  method: string
  requestId: string
  requestHeaders: Headers
}

/**
 * Scaleway error.
 *
 * @public
 */
export class ScalewayError extends Error {
  /** The message originating from the payload. */
  public rawMessage: string | undefined

  /** The response status. */
  public readonly status: number
  /** The response payload. */
  public readonly body: JSONObject | string

  /** The request URL that triggered the error, if known. */
  public url?: string
  /** The HTTP method of the request that triggered the error, if known. */
  public method?: string
  /** The internal request ID of the request that triggered the error, if known. */
  public requestId?: string
  /** The obfuscated request headers of the request that triggered the error, if known. */
  public requestHeaders?: Headers

  public constructor(status: number, body: JSONObject | string, message: string = buildDefaultMessage(status, body)) {
    super(message) // 'Error' breaks prototype chain here
    this.status = status
    this.body = body
    this.name = 'ScalewayError'
    this.rawMessage = typeof body === 'object' && typeof body.message === 'string' ? body.message : undefined
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }

  /**
   * Attaches request context to this error.
   *
   * @param context - The request context (headers should already be obfuscated)
   *
   * @public
   */
  public attachRequestContext(context: ScalewayErrorRequestContext): void {
    this.url = context.url
    this.method = context.method
    this.requestId = context.requestId
    this.requestHeaders = context.requestHeaders
  }

  public static fromJSON(status: number, obj: Readonly<JSONObject>): ScalewayError | null {
    return new ScalewayError(status, obj)
  }

  public toString(): string {
    return `${this.name}: ${this.message}`
  }
}
