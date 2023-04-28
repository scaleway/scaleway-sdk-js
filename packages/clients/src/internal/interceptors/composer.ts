import type { RequestErrorInterceptor } from './types'

export interface Interceptor<T> {
  (instance: Readonly<T>): T | Promise<T>
}

/**
 * Composes interceptors.
 *
 * @param interceptors - A list of interceptors (that modify an object instance)
 * @returns An async composed interceptor
 *
 * @internal
 */
export const composeInterceptors =
  <T>(interceptors: Interceptor<T>[]) =>
  async (instance: T): Promise<T> =>
    interceptors.reduce(
      async (asyncResult, interceptor) => interceptor(await asyncResult),
      new Promise<T>(resolve => {
        resolve(instance)
      }),
    )

/**
 * Compose request error interceptors.
 *
 * @internal
 */
export const composeRequestErrorInterceptors =
  (interceptors: RequestErrorInterceptor[]) =>
  async (error: unknown): Promise<unknown> => {
    let prevError = error
    for (const interceptor of interceptors) {
      try {
        const res = await interceptor(prevError)

        return res
      } catch (err) {
        prevError = err
      }
    }

    throw error
  }
