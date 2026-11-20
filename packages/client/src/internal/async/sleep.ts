import { AbortError } from '../../scw/fetch/abort-error.js'

/**
 * Sleep for a specified number of time.
 *
 * @param ms - The number of milliseconds
 * @param signal - Optional signal that rejects the sleep early when aborted
 * @returns The sleep promise
 *
 * @internal
 */
export const sleep = async (ms: number, signal?: AbortSignal): Promise<void> => {
  if (signal?.aborted === true) {
    throw new AbortError()
  }
  return new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => {
      // oxlint-disable-next-line eslint/no-use-before-define -- timer callback runs after cancel is initialized
      signal?.removeEventListener('abort', cancel)
      resolve()
    }, ms)

    const cancel = () => {
      clearTimeout(timer)
      reject(new AbortError())
    }

    signal?.addEventListener('abort', cancel, { once: true })
  })
}
