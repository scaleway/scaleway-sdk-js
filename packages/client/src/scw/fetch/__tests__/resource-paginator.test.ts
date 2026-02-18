import { describe, expect, it, vi } from 'vitest'
import type {
  PaginatedContent,
  PaginatedFetcher,
} from '../resource-paginator.js'
import {
  enrichForPagination,
  fetchAll,
  fetchPaginated,
} from '../resource-paginator.js'

const fetchPages = <T>(input: T[][] = [], delay = 0) => {
  const totalCount = input.flat().length
  const pages = [...input]

  return () => {
    const page = {
      items: pages.shift() ?? [],
      totalCount,
    }

    return new Promise<typeof page>(resolve => {
      setTimeout(() => resolve(page), delay)
    })
  }
}

describe('fetchPaginated', () => {
  it('iterate page by page', async () => {
    const input = [
      [{ name: 'Alice' }, { name: 'Bob' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'David' }],
    ]
    for await (const page of fetchPaginated('items', fetchPages(input), {})) {
      expect(page).toStrictEqual(input.shift())
    }
  })

  it('iterate starting from the desired page', async () => {
    const input = [
      [{ name: 'Alice' }, { name: 'Bob' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'David' }],
    ]
    let readIndex = 2
    for await (const page of fetchPaginated('items', fetchPages(input), {
      page: readIndex,
    })) {
      expect(page).toStrictEqual(input[readIndex - 1])
      readIndex += 1
    }
  })

  it('iterate without over iteration - 2 pages', async () => {
    const twoPages = [
      [{ name: 'Alice' }, { name: 'Bob' }],
      [{ name: 'Claire' }],
    ]
    const twoPagesFetcher = vi.fn(fetchPages(twoPages))
    for await (const page of fetchPaginated('items', twoPagesFetcher, {})) {
      expect(page).toStrictEqual(twoPages.shift())
    }
    expect(twoPagesFetcher).toHaveBeenCalledTimes(2)
  })

  it('iterate without over iteration - 1 page', async () => {
    const onePage = [[{ name: 'Alice' }, { name: 'Bob' }], []]
    const onePagesFetcher = vi.fn(fetchPages(onePage))
    for await (const page of fetchPaginated('items', onePagesFetcher, {})) {
      expect(page).toStrictEqual(onePage.shift())
    }
    expect(onePage).toStrictEqual([[]])
    expect(onePagesFetcher).toHaveBeenCalledTimes(1)
  })

  it('iterate without over iteration - 1 result', async () => {
    const singleResult = [[{ name: 'Alice' }]]
    const singleResultFetcher = vi.fn(fetchPages(singleResult))
    for await (const page of fetchPaginated('items', singleResultFetcher, {})) {
      expect(page).toStrictEqual(singleResult.shift())
    }
    expect(singleResultFetcher).toHaveBeenCalledTimes(1)
  })

  it('returns empty array on empty result', async () => {
    const iterator = fetchPaginated('items', fetchPages([]), {})
    const empty = await iterator.next()
    expect(empty.value).toEqual([])
    expect(empty.done).toBe(false)
    const ended = await iterator.next()
    expect(ended.value).toEqual(undefined)
    expect(ended.done).toBe(true)
  })

  it('throws when wrong key is provided', async () => {
    await expect(
      fetchPaginated(
        'x',
        fetchPages([]) as unknown as PaginatedFetcher<PaginatedContent<'x'>>,
        {},
      ).next(),
    ).rejects.toThrow(`Property x is not a list in paginated result`)
  })
})

describe('fetchAll', () => {
  it('iterate pages in paralel', async () => {
    const input = [
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
      [{ name: 'Julia' }, { name: 'Thomas' }],
    ]
    const delay = 50
    const tolerance = 50
    const startTime = Date.now()
    expect(await fetchAll('items', fetchPages(input, 50), {})).toStrictEqual(
      input.flat(),
    )
    expect(Date.now() - startTime).toBeLessThanOrEqual(2 * delay + tolerance)
  })
})

describe('enrichForPagination', () => {
  const input = [[{ name: 'Rémy' }, { name: 'Jaime' }], [{ name: 'Vincent' }]]

  it('can fetch all items', () =>
    expect(
      enrichForPagination('items', fetchPages(input), {}).all(),
    ).resolves.toStrictEqual(input.flat()))

  it('can fetch items page by page', async () => {
    let readIndex = 1
    for await (const page of enrichForPagination('items', fetchPages(input), {
      page: readIndex,
    })) {
      expect(page).toStrictEqual(input[readIndex - 1])
      readIndex += 1
    }
  })

  it('throws error when totalCount is undefined', async () => {
    const fetcherWithoutTotalCount = () =>
      Promise.resolve({
        items: [{ name: 'Alice' }, { name: 'Bob' }],
        // totalCount is missing
      } as PaginatedContent<'items'>)

    await expect(
      enrichForPagination('items', fetcherWithoutTotalCount, {}).all(),
    ).rejects.toThrow(
      'totalCount is required for pagination but was undefined. The API response must include a totalCount field to enable pagination.',
    )

    await expect(
      fetchPaginated('items', fetcherWithoutTotalCount, {}).next(),
    ).rejects.toThrow(
      'totalCount is required for pagination but was undefined. The API response must include a totalCount field to enable pagination.',
    )
  })
})
