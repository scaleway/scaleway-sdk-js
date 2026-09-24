/** Scaleway Request. */
export type ScwRequest = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  headers?: Record<string, string>
  body?: string
  urlParams?: URLSearchParams
  responseType?: 'json' | 'text' | 'blob'
  /** An {@link AbortSignal} to cancel the request. */
  signal?: AbortSignal
}

/**
 * Options passed to API methods to control request behavior.
 *
 * @public
 */
export type RequestOptions = {
  /** An {@link AbortSignal} to cancel the request. */
  signal?: AbortSignal
}

/**
 * A factory to unmarshal a response.
 *
 * @param obj - The input object.
 * @returns The output object
 */
export type ResponseUnmarshaller<T> = (obj: unknown) => T
