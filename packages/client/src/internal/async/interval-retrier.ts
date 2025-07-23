import { sleep } from './sleep.js'

const DEFAULT_TIMEOUT_SECONDS = 300
const DEFAULT_MIN_DELAY_SECONDS = 1
const DEFAULT_MAX_DELAY_SECONDS = 30

/**
 * Function to retry logic between each interval.
 *
 * @returns The result and if it's done
 *
 * @throws An exception might be thrown by the logic being run
 *
 * @internal
 */
type Retry<T> = () => Promise<IteratorResult<T, T>>

/**
 * Generated interval strategy iterator.
 *
 * @internal
 */
type IntervalStrategy = Generator<number, number, number>

/**
 * Creates a fixed interval strategy.
 * It returns the same interval value whatever the retry count.
 *
 * @param interval - The time interval (in seconds) to wait between each run
 * @returns A fixed interval generator
 *
 * @internal
 */
export function* createFixedIntervalStrategy(
  interval: number,
): IntervalStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while (true) yield interval
}

/**
 * Creates a fibonacci interval strategy.
 *
 * @param base - The base interval (in seconds) that will be multiplicated with the fibonacci number
 * @param factor - The factor so the fibonacci suite will go slower or faster
 * @returns A fibonnacci generator
 *
 * @internal
 */
export function* createFibonacciIntervalStrategy(
  base = 1,
  factor = 1,
): IntervalStrategy {
  let [prev, current] = [0, 1]
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while (true) {
    yield current * base
    ;[prev, current] = [current, prev + current * factor]
  }
}

/**
 * Creates an exponential backoff interval strategy.
 *
 * @param minDelay - The minimum delay before the next try in seconds
 * @param maxDelay - The maximum delay before the next try in seconds
 * @returns An exponential backoff generator
 *
 * @internal
 */
export function* createExponentialBackoffStrategy(
  minDelay: number,
  maxDelay: number,
): IntervalStrategy {
  if (minDelay < 1 || maxDelay < 1 || minDelay > maxDelay) {
    throw new Error(
      'Waiter: minDelay must be >= 1 and maxDelay must be >= minDelay',
    )
  }
  let attempt = 1
  const ceiling = Math.log(maxDelay / minDelay) / Math.log(2) + 1
  const randomInRange = (min: number, max: number) =>
    min + Math.random() * (max - min)
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while (true) {
    if (attempt > ceiling) {
      yield maxDelay
    } else {
      yield randomInRange(minDelay, minDelay * 2 ** (attempt - 1))
    }
    attempt += 1
  }
}

/**
 * Tries a specific logic several times until it succeeds, timeouts, or throws an exception.
 *
 * @param retry - The function to retry logic between each interval
 * @param strategy - A generated interval strategy iterator
 * @param timeout - The maximum time elapsed before timeout error
 *
 * @throws An timeout exception or error thrown by the logic being run
 *
 * @internal
 */
export const tryAtIntervals = async <T>(
  retry: Retry<T>,
  strategy: IntervalStrategy,
  timeout: number = DEFAULT_TIMEOUT_SECONDS,
): Promise<T> => {
  const timeoutTimestamp = Date.now() + timeout * 1000
  let retryCount = 0
  while (Date.now() <= timeoutTimestamp) {
    const delay = strategy.next((retryCount += 1)).value * 1000
    // Break if timeout has been reached
    if (timeoutTimestamp <= Date.now() + delay) break
    // Wait before the next retry
    await sleep(delay)
    // Retry
    const { value, done } = await retry()
    if (done) return value
  }

  throw new Error(`Timeout after ${timeout}s`)
}

/**
 * Represents the condition to stop waiting for a resource.
 *
 * @public
 */
export type WaitForStopCondition<T> = (obj: T) => Promise<boolean>

/**
 * The options to wait until a resource is ready.
 *
 * @public
 */
export interface WaitForOptions<T> {
  /**
   * Timeout in seconds.
   *
   * @defaultValue 300 seconds (5 minutes).
   */
  timeout?: number
  /**
   * The minimum delay before the next try in seconds.
   *
   * @defaultValue 1 second.
   */
  minDelay?: number
  /**
   * The maximum delay before the next try in seconds.
   *
   * @defaultValue 30 seconds.
   */
  maxDelay?: number
  /**
   * The condition to stop trying.
   *
   * @defaultValue Waits for non-transient value.
   */
  stop?: WaitForStopCondition<T>
}

type ResourceFetcher<T, R> = (request: R) => Promise<T>

/**
 * Fetches resource several times until an expected condition is reached, timeouts, or throws an exception.
 *
 * @param stop - The condition to stop waiting
 * @param fetcher - The method to retrieve resource
 * @param request - The resource request options
 * @param options - The retry strategy options
 * @param strategy - An optional custom strategy
 *
 * @returns A promise of resource
 *
 * @public
 */
export const waitForResource = <R, T>(
  stop: WaitForStopCondition<T>,
  fetcher: ResourceFetcher<T, R>,
  request: R,
  options?: WaitForOptions<T>,
  strategy: IntervalStrategy = createExponentialBackoffStrategy(
    options?.minDelay ?? DEFAULT_MIN_DELAY_SECONDS,
    options?.maxDelay ?? DEFAULT_MAX_DELAY_SECONDS,
  ),
) =>
  tryAtIntervals(
    async () => {
      const value = await fetcher(request)

      return {
        done: await stop(value),
        value,
      }
    },
    strategy,
    options?.timeout,
  )
