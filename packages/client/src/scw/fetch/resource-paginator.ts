type PaginationOptions = {
  page?: number
  pageSize?: number
}

type PaginatedResponse = {
  totalCount: number
}

export type PaginatedFetcher<T, R extends PaginationOptions = PaginationOptions> = (request: R) => Promise<T>

export type PaginatedContent<K extends string, T = unknown> = PaginatedResponse & Record<K, T[]>

export const extract =
  <K extends string>(key: K) =>
  <T extends PaginatedContent<K>>(result: T) =>
    result[key]

type PaginationCallOptions<K extends string, T extends PaginatedContent<K>, R extends PaginationOptions> = {
  request: R
  initial?: Promise<T>
}

function* pages<K extends string, T extends PaginatedContent<K>, R extends PaginationOptions>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  options: { request: R; firstPage: T },
): Generator<Promise<T[K]>, void, void> {
  const { request, firstPage } = options
  if (!Array.isArray(firstPage[key])) {
    throw new TypeError(`Property ${key} is not a list in paginated result`)
  }
  const getList = extract(key)
  let page = request.page ?? 1
  if (page === 1) {
    yield Promise.resolve(getList(firstPage))
    page += 1
  }
  const { length } = firstPage[key]
  if (!length) {
    return
  }
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
 * @param options - A request with pagination options and an optional first page
 * @returns An async generator of resources arrays
 */
export async function* fetchPaginated<K extends string, T extends PaginatedContent<K>, R extends PaginationOptions>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  options: PaginationCallOptions<K, T, R>,
) {
  const firstPage = await (options.initial ?? fetcher(options.request))
  yield* pages(key, fetcher, { request: options.request, firstPage })
}

/**
 * Fetches all paginated resource.
 *
 * @param key - The resource key of values list
 * @param fetcher - The method to retrieve paginated resources
 * @param options - A request with pagination options and an optional first page
 * @returns A resources array Promise
 */
export const fetchAll = async <K extends string, T extends PaginatedContent<K>, R extends PaginationOptions>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  options: PaginationCallOptions<K, T, R>,
) => {
  const firstPage = await (options.initial ?? fetcher(options.request))
  const pagesResult = await Promise.all(pages(key, fetcher, { request: options.request, firstPage }))
  return pagesResult.flat()
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
// oxlint-disable-next-line typescript/promise-function-async -- must return the enriched Promise, not a plain one
export const enrichForPagination = <K extends string, T extends PaginatedContent<K>, R extends PaginationOptions>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  request: R,
) => {
  const firstPage = fetcher(request)

  return Object.assign(firstPage, {
    all: async () => fetchAll(key, fetcher, { request, initial: firstPage }),
    [Symbol.asyncIterator]: () => fetchPaginated(key, fetcher, { request, initial: firstPage }),
  })
}

export type CursorPaginatedFetcher<T, R = object> = (request: R) => Promise<T>

export type CursorPaginatedContent<K extends string, T = unknown> = Record<K, T[]> & {
  nextPageToken?: string | null
}

// ponytail: sequential cursor pagination — each page depends on the previous one's nextPageToken, so it cannot be parallelized. This is intentionally sequential despite the await-in-loop. WARNING: unbounded iteration can cause API timeouts or TooManyRequests errors; consider adding a max-pages safeguard if callers may iterate indefinitely.
// oxlint-disable-next-line eslint/max-params -- API signature requires key, fetcher, request, tokenKey, and firstPage
async function* cursorPages<K extends string, T extends CursorPaginatedContent<K>, R>(
  key: K,
  fetcher: CursorPaginatedFetcher<T, R>,
  request: R,
  tokenKey: string,
  firstPage: T,
): AsyncGenerator<T[K], void, void> {
  if (!Array.isArray(firstPage[key])) {
    throw new TypeError(`Property ${key} is not a list in paginated result`)
  }
  let { nextPageToken } = firstPage
  yield firstPage[key]
  while (nextPageToken) {
    // eslint-disable-next-line no-await-in-loop -- intentional: cursor pagination is inherently sequential
    const page = await fetcher({ ...request, [tokenKey]: nextPageToken })
    // oxlint-disable-next-line eslint/prefer-destructuring -- reassigning the loop guard from a different object than the destructuring source
    nextPageToken = page.nextPageToken
    yield page[key]
  }
}

/**
 * Fetches a cursor-paginated resource.
 *
 * @param key - The resource key of values list
 * @param fetcher - The method to retrieve paginated resources
 * @param request - A request with pagination options
 * @param tokenKey - The request field receiving the next page token
 * @param initial - The first page
 * @returns An async generator of resources arrays
 */
// oxlint-disable-next-line eslint/max-params -- public API requires key, fetcher, request, tokenKey, and initial
export async function* fetchPaginatedByCursor<K extends string, T extends CursorPaginatedContent<K>, R>(
  key: K,
  fetcher: CursorPaginatedFetcher<T, R>,
  request: R,
  tokenKey: string,
  initial: Promise<T> = fetcher(request),
) {
  yield* cursorPages(key, fetcher, request, tokenKey, await initial)
}

/**
 * Fetches all cursor-paginated resources.
 *
 * @param key - The resource key of values list
 * @param fetcher - The method to retrieve paginated resources
 * @param request - A request with pagination options
 * @param tokenKey - The request field receiving the next page token
 * @param initial - The first page
 * @returns A resources array Promise
 */
// oxlint-disable-next-line eslint/max-params -- public API requires key, fetcher, request, tokenKey, and initial
export const fetchAllByCursor = async <K extends string, T extends CursorPaginatedContent<K>, R>(
  key: K,
  fetcher: CursorPaginatedFetcher<T, R>,
  request: R,
  tokenKey: string,
  initial: Promise<T> = fetcher(request),
) => {
  const results: T[K][] = []
  for await (const page of fetchPaginatedByCursor(key, fetcher, request, tokenKey, initial)) {
    results.push(page)
  }
  return results.flat()
}

/**
 * Enriches a listing method with helpers.
 *
 * @param key - The resource key of values list
 * @param fetcher - The method to retrieve paginated resources
 * @param request - A request with pagination options
 * @param tokenKey - The request field receiving the next page token
 * @returns A resource Promise with the pagination helpers
 *
 * @internal
 */
// oxlint-disable-next-line eslint/max-params, typescript/promise-function-async -- public API requires 4 params; must return the enriched Promise, not a plain one
export const enrichForPaginationByCursor = <K extends string, T extends CursorPaginatedContent<K>, R>(
  key: K,
  fetcher: CursorPaginatedFetcher<T, R>,
  request: R,
  tokenKey: string,
) => {
  const firstPage = fetcher(request)

  return Object.assign(firstPage, {
    // oxlint-disable-next-line typescript/promise-function-async -- must return the enriched Promise, not a plain one
    all: () => fetchAllByCursor(key, fetcher, request, tokenKey, firstPage),
    // oxlint-disable-next-line typescript/promise-function-async -- returns an AsyncGenerator, wrapping in async would change the type
    [Symbol.asyncIterator]: () => fetchPaginatedByCursor(key, fetcher, request, tokenKey, firstPage),
  })
}
