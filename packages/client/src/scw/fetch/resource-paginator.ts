interface PaginationOptions {
  page?: number
  pageSize?: number
}

interface PaginatedResponse {
  totalCount?: number
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
  
  if (totalCount === undefined) {
    throw new Error(
      `totalCount is required for pagination but was undefined. ` +
      `The API response must include a totalCount field to enable pagination.`
    )
  }
  
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
 * @returns A resources array Promise
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
) =>
  (
    await Promise.all(Array.from(pages(key, fetcher, request, await initial)))
  ).flat()

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
    all: () => fetchAll(key, fetcher, request, firstPage),
    [Symbol.asyncIterator]: () =>
      fetchPaginated(key, fetcher, request, firstPage),
  })
}
