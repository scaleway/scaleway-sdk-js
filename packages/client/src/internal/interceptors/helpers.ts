import type { RequestInterceptor } from './types.js'

/**
 * Adds an header to a request through an interceptor.
 *
 * @param key - The header key
 * @param value - The header value
 * @returns The Request interceptor
 *
 * @internal
 */
export const addHeaderInterceptor =
  (key: string, value?: string): RequestInterceptor =>
  ({ request }) => {
    const clone = request.clone()
    if (value !== undefined) {
      clone.headers.append(key, value)
    }

    return clone
  }

/**
 * Adds asynchronously an header to a request through an interceptor.
 *
 * @param key - The header key
 * @param value - The header value as a Promise
 * @returns The Request interceptor
 *
 * @internal
 */
export const addAsyncHeaderInterceptor =
  (
    key: string,
    getter: () => Promise<string | undefined>,
  ): RequestInterceptor =>
  async request =>
    addHeaderInterceptor(key, await getter())(request)
