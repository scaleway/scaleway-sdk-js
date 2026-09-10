interface PaginationOptions {
  page?: number
  pageSize?: number
}

interface PaginatedResponse {
  totalCount: number
}

export type PaginatedFetcher<T, R extends PaginationOptions = PaginationOptions> = (request: R) => Promise<T>

export type PaginatedContent<K extends string, T = unknown> = PaginatedResponse & {
  [key in K]: T[]
}

export const extract =
  <K extends string>(key: K) =>
  <T extends PaginatedContent<K>>(result: T) =>
    result[key]

function* pages<K extends string, T extends PaginatedContent<K>, R extends PaginationOptions>(
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
export async function* fetchPaginated<K extends string, T extends PaginatedContent<K>, R extends PaginationOptions>(
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
export const fetchAll = async <K extends string, T extends PaginatedContent<K>, R extends PaginationOptions>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  request: R,
  initial: Promise<T> = fetcher(request),
) => (await Promise.all(Array.from(pages(key, fetcher, request, await initial)))).flat()

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
export const enrichForPagination = <K extends string, T extends PaginatedContent<K>, R extends PaginationOptions>(
  key: K,
  fetcher: PaginatedFetcher<T, R>,
  request: R,
) => {
  const firstPage = fetcher(request)

  return Object.assign(firstPage, {
    all: () => fetchAll(key, fetcher, request, firstPage),
    [Symbol.asyncIterator]: () => fetchPaginated(key, fetcher, request, firstPage),
  })
}

export type CursorPaginatedFetcher<T, R = object> = (request: R) => Promise<T>

export type CursorPaginatedContent<K extends string, T = unknown> = {
  [key in K]: T[]
} & {
  nextPageToken?: string | null
}

async function* cursorPages<K extends string, T extends CursorPaginatedContent<K>, R>(
  key: K,
  fetcher: CursorPaginatedFetcher<T, R>,
  request: R,
  tokenKey: string,
  firstPage: T,
): AsyncGenerator<T[K], void, void> {
  if (!Array.isArray(firstPage[key])) {
    throw new Error(`Property ${key} is not a list in paginated result`)
  }
  let nextPageToken = firstPage.nextPageToken
  yield firstPage[key]
  while (nextPageToken) {
    // eslint-disable-next-line no-await-in-loop
    const page = await fetcher({ ...request, [tokenKey]: nextPageToken })
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
export const fetchAllByCursor = async <K extends string, T extends CursorPaginatedContent<K>, R>(
  key: K,
  fetcher: CursorPaginatedFetcher<T, R>,
  request: R,
  tokenKey: string,
  initial: Promise<T> = fetcher(request),
) => {
  const pages: T[K][] = []
  for await (const page of fetchPaginatedByCursor(key, fetcher, request, tokenKey, initial)) {
    pages.push(page)
  }
  return pages.flat()
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
export const enrichForPaginationByCursor = <K extends string, T extends CursorPaginatedContent<K>, R>(
  key: K,
  fetcher: CursorPaginatedFetcher<T, R>,
  request: R,
  tokenKey: string,
) => {
  const firstPage = fetcher(request)

  return Object.assign(firstPage, {
    all: () => fetchAllByCursor(key, fetcher, request, tokenKey, firstPage),
    [Symbol.asyncIterator]: () => fetchPaginatedByCursor(key, fetcher, request, tokenKey, firstPage),
  })
}
