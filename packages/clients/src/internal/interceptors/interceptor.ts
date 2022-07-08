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
      Promise.resolve(instance),
    )
