/**
 * Defines the interceptor for a `Request`.
 * This allows you to intercept requests before starting.
 *
 * @example
 * Adds a custom header to a request:
 * ```
 * const addCustomHeaderInterceptor
 *   ({ key, value }: { key: string; value: string }): RequestInterceptor =>
 *   ({ request }) => {
 *     const clone = request.clone()
 *     clone.headers.set(key, value)
 *
 *     return clone
 * }
 * ```
 *
 * @public
 */
export interface RequestInterceptor {
  ({ request }: { request: Readonly<Request> }): Request | Promise<Request>
}

/**
 * Defines the interceptor for a `Response`.
 * This allows you to intercept responses before unmarshalling.
 *
 * @example
 * Adds a delay before sending the response:
 * ```
 * const addDelayInterceptor: ResponseInterceptor = ({ response }) =>
 *   new Promise(resolve => {
 *     setTimeout(() => resolve(response), 1000)
 *   })
 * ```
 *
 * @public
 */
export interface ResponseInterceptor {
  ({ response }: { response: Readonly<Response> }): Response | Promise<Response>
}

/**
 * Defines the interceptor for a `Response` error.
 * This allows you to intercept a response error before exiting the whole process.
 * You can either rethrow an error, and resolve with a different response.
 *
 * @remarks
 * You must return either:
 * 1. An error (`throw error` or `Promise.reject(error)`)
 * 2. Data (directly, or via a Promise)
 *
 * @example
 * Reports error to tracking service:
 * ```
 * const reportErrorToTrackingService: ResponseErrorInterceptor = async ({
 *   request,
 *   error,
 * }: {
 *   request: Request
 *   error: unknown
 * }) => {
 *   await sendErrorToErrorService(request, error)
 *   throw error
 * }
 * ```
 *
 * @public
 */
export interface ResponseErrorInterceptor {
  ({ request, error }: { request: Request; error: unknown }): unknown
}

/**
 * Defines the network interceptors.
 * Please check the documentation of {@link RequestInterceptor},
 * {@link ResponseInterceptor} and {@link ResponseErrorInterceptor} for examples.
 *
 * @public
 */
export interface NetworkInterceptors {
  request?: RequestInterceptor
  response?: ResponseInterceptor
  responseError?: ResponseErrorInterceptor
}
