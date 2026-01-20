import { describe, expect, it, vi } from 'vitest'
import type {
  PaginatedContent,
  PaginatedFetcher,
} from '../resource-paginator.js'
import { fetchAll } from '../resource-paginator.js'

// Test the concurrency options handling in fetchAll
// Since we can't directly spy on the dynamically imported p-map,
// we focus on testing the options validation logic

describe('fetchAll concurrency', () => {
  it('handles invalid concurrency options by using default', async () => {
    // Spy on console.warn to verify it's called
    const consoleWarn = vi.spyOn(console, 'warn')

    // Create a simple fetcher
    const fetcher: PaginatedFetcher<PaginatedContent<'items'>> = () =>
      Promise.resolve({
        items: [{ name: 'Test' }],
        totalCount: 1,
      })

    // Test with too high concurrency (above MAX_CONCURRENCY_REQUESTS which is 40)
    await fetchAll('items', fetcher, {}, undefined, { concurrency: 50 })

    // Should have warned about wrong concurrency
    expect(consoleWarn).toHaveBeenCalledWith('wrong')

    consoleWarn.mockRestore()
  })

  it('processes all pages correctly with valid concurrency', async () => {
    // Test with a simple case to ensure basic functionality works
    const createFetcher = <K extends string>(
      key: K,
      pageCount: number,
    ): PaginatedFetcher<PaginatedContent<K>, {}> => {
      let currentPage = 0

      return () => {
        currentPage++

        if (currentPage > pageCount) {
          return Promise.resolve({
            [key]: [],
            totalCount: pageCount,
          } as PaginatedContent<K>)
        }

        return Promise.resolve({
          [key]: [{ id: currentPage }],
          totalCount: pageCount,
        } as PaginatedContent<K>)
      }
    }

    const fetcher = createFetcher('items', 3)
    const result = await fetchAll('items', fetcher, {}, undefined, {
      concurrency: 2,
    })

    expect(result.length).toBe(3)
    // Type assertion to handle the unknown type
    const typedResult = result as Array<{ id: number }>
    expect(typedResult.map(r => r.id)).toEqual([1, 2, 3])
  })

  it('works with minimum concurrency value', async () => {
    // Test with concurrency of 1 (minimum allowed)
    const fetcher: PaginatedFetcher<PaginatedContent<'items'>> = () =>
      Promise.resolve({
        items: [{ name: 'Test' }],
        totalCount: 1,
      })

    const result = await fetchAll('items', fetcher, {}, undefined, {
      concurrency: 1,
    })

    expect(Array.isArray(result)).toBe(true)
  })
})
