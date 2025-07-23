import type {
  RequestInterceptor,
  ResponseErrorInterceptor,
  ResponseInterceptor,
} from './types.js'

/**
 * Composes request interceptors.
 *
 * @param interceptors - A list of request interceptors
 * @returns An async composed interceptor
 *
 * @internal
 */
export const composeRequestInterceptors =
  (interceptors: RequestInterceptor[]) =>
  async (request: Request): Promise<Request> =>
    interceptors.reduce(
      async (asyncResult, interceptor): Promise<Request> =>
        interceptor({ request: await asyncResult }),
      Promise.resolve(request),
    )

/**
 * Composes response interceptors.
 *
 * @param interceptors - A list of response interceptors
 * @returns An async composed interceptor
 *
 * @internal
 */
export const composeResponseInterceptors =
  (interceptors: ResponseInterceptor[]) =>
  async (response: Response): Promise<Response> =>
    interceptors.reduce(
      async (asyncResult, interceptor): Promise<Response> =>
        interceptor({ response: await asyncResult }),
      Promise.resolve(response),
    )

/**
 * Compose response error interceptors.
 *
 * @internal
 */
export const composeResponseErrorInterceptors =
  (interceptors: ResponseErrorInterceptor[]) =>
  async (request: Request, error: unknown): Promise<unknown> => {
    let prevError = error
    for (const interceptor of interceptors) {
      try {
        const res = await interceptor({ request, error: prevError })

        return res
      } catch (err) {
        prevError = err
      }
    }

    throw prevError
  }
