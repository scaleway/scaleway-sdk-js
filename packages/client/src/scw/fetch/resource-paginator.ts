import { MAX_CONCURRENCY_REQUESTS } from '../../scw/constants'

interface PaginationOptions {
  page?: number
  pageSize?: number
}

/**
 * Options for fetching behavior
 */
interface FetchAllOptions {
  /**
   * @type boolean
   * @default false
   */
  sequential?: boolean
  /**
   * Number of pages to process in parallel
   * @type number
   * @default @param MAX_CONCURRENCY_REQUESTS
   */
  concurrency?: number
}

interface PaginatedResponse {
  totalCount: number
}

export type PaginatedFetcher<
  T,
  R extends PaginationOptions = PaginationOptions,
> = (request: R) => Promise<T>

export type PaginatedContent<
  K extends string,
  T = unknown,
> = PaginatedResponse & {
  [key in K]: T[]
}

export const extract =
  <K extends string>(key: K) =>
  <T extends PaginatedContent<K>>(result: T) =>
    result[key]

function* pages<
  K extends string,
  T extends PaginatedContent<K>,
  R extends PaginationOptions,
>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  request: R,
  firstPage: T,
): Generator<Promise<T[K]>, void, void> {
  if (!Array.isArray(firstPage[key])) {
    throw new Error(`Property ${key} is not a list in paginated result`)
  }
  const getList = extract(key)
  let page = request.page || 1
  if (page === 1) {
    yield Promise.resolve(getList(firstPage))
    page += 1
  }
  const { length } = firstPage[key]
  if (!length) return
  const { totalCount } = firstPage
  while (page <= Math.floor((totalCount + length - 1) / length)) {
    yield fetcher({ ...request, page }).then(getList)
    page += 1
  }
}

/**
 * Fetches a paginated resource.
 *
 * @param key - The resource key of values list
 * @param fetcher - The method to retrieve paginated resources
 * @param request - A request with pagination options
 * @param initial - The first page
 * @returns An async generator of resources arrays
 */
export async function* fetchPaginated<
  K extends string,
  T extends PaginatedContent<K>,
  R extends PaginationOptions,
>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  request: R,
  initial: Promise<T> = fetcher(request),
) {
  yield* pages(key, fetcher, request, await initial)
}

/**
 * Fetches all paginated resource.
 *
 * @param key - The resource key of values list
 * @param fetcher - The method to retrieve paginated resources
 * @param request - A request with pagination options
 * @param initial - The first page
 * @param options - Options for fetching behavior
 * @param options.batch - Number of pages to process in parallel
 * @returns A resources array Promise
 *
 * @example
 * // Sequential-like processing (one page at a time)
 * fetchAll('items', fetcher, {}, { sequential: true })
 *
 *
 * @see MAX_REQUESTS_PER_SECONDE - The default maximum number of requests per second
 */
export const fetchAll = async <
  K extends string,
  T extends PaginatedContent<K>,
  R extends PaginationOptions,
>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  request: R,
  initial: Promise<T> = fetcher(request),
  options: FetchAllOptions = {},
) => {
  const results: T[K][] = []

  if (options.sequential) {
    for (const promise of Array.from(
      pages(key, fetcher, request, await initial),
    )) {
      const res = await promise
      results.push(res)
    }

    return results.flat()
  }

  let concurrency: number

  if (
    options.concurrency &&
    (options.concurrency < 1 || options.concurrency > MAX_CONCURRENCY_REQUESTS)
  ) {
    // todo use logger
    console.warn('wrong')
    concurrency = MAX_CONCURRENCY_REQUESTS
  }

  await import('p-map').then(async pMap =>
    pMap.default(
      Array.from(pages(key, fetcher, request, await initial)),
      res => results.push(res),
      {
        concurrency,
      },
    ),
  )

  return results.flat()
}

/**
 * Enriches a listing method with helpers.
 *
 * @param key - The resource key of values list
 * @param fetcher - The method to retrieve paginated resources
 * @param request - A request with pagination options
 * @returns A resource Promise with the pagination helpers
 *
 * @internal
 */
export const enrichForPagination = <
  K extends string,
  T extends PaginatedContent<K>,
  R extends PaginationOptions,
>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  request: R,
) => {
  const firstPage = fetcher(request)

  return Object.assign(firstPage, {
    // Use batch: 1 for sequential-like processing
    all: (options?: FetchAllOptions) =>
      fetchAll(key, fetcher, request, firstPage, options),
    [Symbol.asyncIterator]: () =>
      fetchPaginated(key, fetcher, request, firstPage),
  })
}
