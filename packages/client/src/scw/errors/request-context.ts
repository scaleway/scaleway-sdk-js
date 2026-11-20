/**
 * Request context attached to an error by the fetcher.
 *
 * @public
 */
export type RequestContext = {
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
 * Base class for errors that can carry the request context attached by the fetcher.
 *
 * @public
 */
// oxlint-disable-next-line unicorn/custom-error-definition -- abstract base, never instantiated directly
export abstract class ErrorWithRequestContext extends Error {
  /** The request URL, set when the fetcher attaches its context. */
  public url: string | undefined
  /** The HTTP method used for the request, set when the fetcher attaches its context. */
  public method: string | undefined
  /** The request identifier used to correlate SDK logs, set when the fetcher attaches its context. */
  public requestId: string | undefined
  /** The request headers with secrets obfuscated, set when the fetcher attaches its context. */
  public requestHeaders: Headers | undefined

  /**
   * Attaches the request context to the error.
   *
   * @param context - The request context
   */
  public setRequestContext(context: RequestContext): void {
    this.url = context.url
    this.method = context.method
    this.requestId = context.requestId
    this.requestHeaders = context.requestHeaders
  }
}
