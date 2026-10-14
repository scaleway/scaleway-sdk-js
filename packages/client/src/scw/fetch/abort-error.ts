/**
 * Request context attached to an {@link AbortError}.
 *
 * @public
 */
export type AbortErrorContext = {
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
 * Error thrown when a request or a polling loop is cancelled via an {@link AbortSignal}.
 *
 * @public
 */
export class AbortError extends Error {
  /** The request URL, set when the fetcher attaches its context. */
  public url: string | undefined
  /** The HTTP method used for the request, set when the fetcher attaches its context. */
  public method: string | undefined
  /** The request identifier used to correlate SDK logs, set when the fetcher attaches its context. */
  public requestId: string | undefined
  /** The request headers with secrets obfuscated, set when the fetcher attaches its context. */
  public requestHeaders: Headers | undefined

  public constructor(message = 'The operation was aborted') {
    super(message)
    this.name = 'AbortError'
  }

  /**
   * Attaches the request context to the error.
   *
   * @param context - The request context
   */
  public setRequestContext(context: AbortErrorContext): void {
    this.url = context.url
    this.method = context.method
    this.requestId = context.requestId
    this.requestHeaders = context.requestHeaders
  }
}

/**
 * Returns whether the given error is an {@link AbortError}.
 *
 * @param err - The error to check
 * @returns True if the error is an abort error
 *
 * @public
 */
export const isAbortError = (err: unknown): err is AbortError =>
  err instanceof AbortError || (err instanceof Error && err.name === 'AbortError')
