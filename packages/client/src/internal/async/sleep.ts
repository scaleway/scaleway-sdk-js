/**
 * Sleep for a specified number of time.
 *
 * @param ms - The number of milliseconds
 * @returns The sleep promise
 *
 * @internal
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
