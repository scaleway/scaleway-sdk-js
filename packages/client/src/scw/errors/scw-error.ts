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
 * Request context attached to a {@link ScalewayError}.
 *
 * @public
 */
export type ScalewayErrorRequestContext = {
  /** The request URL. */
  url: string
  /** The HTTP method used for the request. */
  method: string
  /** The request identifier used to correlate SDK logs. */
  requestId: string
  /** The request headers with secrets obfuscated. */
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

  /** The request URL, set when the fetcher attaches its context. */
  public url: string | undefined
  /** The HTTP method used for the request, set when the fetcher attaches its context. */
  public method: string | undefined
  /** The request identifier, set when the fetcher attaches its context. */
  public requestId: string | undefined
  /** The request headers with secrets obfuscated, set when the fetcher attaches its context. */
  public requestHeaders: Headers | undefined

  public constructor(status: number, body: JSONObject | string, message: string = buildDefaultMessage(status, body)) {
    super(message) // 'Error' breaks prototype chain here
    this.status = status
    this.body = body
    this.name = 'ScalewayError'
    this.rawMessage = typeof body === 'object' && typeof body.message === 'string' ? body.message : undefined
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }

  /**
   * Attaches the request context to the error.
   *
   * @param context - The request context
   */
  public setRequestContext(context: ScalewayErrorRequestContext): void {
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
