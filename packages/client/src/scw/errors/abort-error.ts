import { ErrorWithRequestContext } from './request-context.js'
import type { RequestContext } from './request-context.js'

/**
 * Request context attached to an {@link AbortError}.
 *
 * @public
 */
export type AbortErrorContext = RequestContext

/**
 * Error thrown when a request or a polling loop is cancelled via an {@link AbortSignal}.
 *
 * @public
 */
export class AbortError extends ErrorWithRequestContext {
  public constructor(message = 'The operation was aborted') {
    super(message)
    this.name = 'AbortError'
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
