import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createRetryingFetch } from '../retrying-fetch.js'

const advanceSleep = async (): Promise<void> => {
  await vi.advanceTimersByTimeAsync(60_000)
}

const mockResponse = (status: number, headers: Record<string, string> = {}): Response =>
  new Response(null, { status, headers })

describe('createRetryingFetch', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns the response immediately on success', async () => {
    const fetchFn = vi.fn().mockResolvedValue(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn)

    const response = await retryingFetch('https://api.scaleway.com/test')

    expect(response.status).toBe(200)
    expect(fetchFn).toHaveBeenCalledTimes(1)
  })

  it('retries on 429 and succeeds', async () => {
    const fetchFn = vi.fn().mockResolvedValueOnce(mockResponse(429)).mockResolvedValueOnce(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn, { minDelay: 1, maxDelay: 1 })

    const promise = retryingFetch('https://api.scaleway.com/test')
    await advanceSleep()
    const response = await promise

    expect(response.status).toBe(200)
    expect(fetchFn).toHaveBeenCalledTimes(2)
  })

  it('retries on 503 and succeeds', async () => {
    const fetchFn = vi.fn().mockResolvedValueOnce(mockResponse(503)).mockResolvedValueOnce(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn, { minDelay: 1, maxDelay: 1 })

    const promise = retryingFetch('https://api.scaleway.com/test')
    await advanceSleep()
    const response = await promise

    expect(response.status).toBe(200)
    expect(fetchFn).toHaveBeenCalledTimes(2)
  })

  it('does not retry on non-retryable status codes', async () => {
    const fetchFn = vi.fn().mockResolvedValue(mockResponse(400))
    const retryingFetch = createRetryingFetch(fetchFn)

    const response = await retryingFetch('https://api.scaleway.com/test')

    expect(response.status).toBe(400)
    expect(fetchFn).toHaveBeenCalledTimes(1)
  })

  it('returns the last retryable response after exhausting retries', async () => {
    const fetchFn = vi.fn().mockResolvedValue(mockResponse(429))
    const retryingFetch = createRetryingFetch(fetchFn, { maxRetries: 2, minDelay: 1, maxDelay: 1 })

    const promise = retryingFetch('https://api.scaleway.com/test')
    await advanceSleep()
    await advanceSleep()
    const response = await promise

    expect(response.status).toBe(429)
    expect(fetchFn).toHaveBeenCalledTimes(3)
  })

  it('retries on network errors and succeeds', async () => {
    const fetchFn = vi
      .fn()
      .mockRejectedValueOnce(new TypeError('fetch failed'))
      .mockResolvedValueOnce(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn, { minDelay: 1, maxDelay: 1 })

    const promise = retryingFetch('https://api.scaleway.com/test')
    await advanceSleep()
    const response = await promise

    expect(response.status).toBe(200)
    expect(fetchFn).toHaveBeenCalledTimes(2)
  })

  it('throws the last network error after exhausting retries', async () => {
    const fetchFn = vi.fn().mockRejectedValue(new TypeError('fetch failed'))
    const retryingFetch = createRetryingFetch(fetchFn, { maxRetries: 1, minDelay: 1, maxDelay: 1 })

    const promise = retryingFetch('https://api.scaleway.com/test')
    const assertion = expect(promise).rejects.toThrow('fetch failed')
    await advanceSleep()
    await assertion
    expect(fetchFn).toHaveBeenCalledTimes(2)
  })

  it('does not retry on AbortError', async () => {
    const abortError = new DOMException('The operation was aborted', 'AbortError')
    const fetchFn = vi.fn().mockRejectedValue(abortError)
    const retryingFetch = createRetryingFetch(fetchFn, { maxRetries: 3 })

    await expect(retryingFetch('https://api.scaleway.com/test')).rejects.toThrow('The operation was aborted')
    expect(fetchFn).toHaveBeenCalledTimes(1)
  })

  it('respects the Retry-After header in seconds', async () => {
    const fetchFn = vi
      .fn()
      .mockResolvedValueOnce(mockResponse(429, { 'Retry-After': '5' }))
      .mockResolvedValueOnce(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn, { maxRetries: 1 })

    const promise = retryingFetch('https://api.scaleway.com/test')
    await vi.advanceTimersByTimeAsync(5000)
    const response = await promise

    expect(response.status).toBe(200)
    expect(fetchFn).toHaveBeenCalledTimes(2)
  })

  it('respects the Retry-After header as HTTP-date', async () => {
    const retryAfterDate = new Date(Date.now() + 3000)
    const fetchFn = vi
      .fn()
      .mockResolvedValueOnce(mockResponse(429, { 'Retry-After': retryAfterDate.toUTCString() }))
      .mockResolvedValueOnce(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn, { maxRetries: 1 })

    const promise = retryingFetch('https://api.scaleway.com/test')
    await vi.advanceTimersByTimeAsync(5000)
    const response = await promise

    expect(response.status).toBe(200)
    expect(fetchFn).toHaveBeenCalledTimes(2)
  })

  it('uses custom retryable status codes', async () => {
    const fetchFn = vi.fn().mockResolvedValueOnce(mockResponse(500)).mockResolvedValueOnce(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn, {
      retryableStatusCodes: [500],
      minDelay: 1,
      maxDelay: 1,
    })

    const promise = retryingFetch('https://api.scaleway.com/test')
    await advanceSleep()
    const response = await promise

    expect(response.status).toBe(200)
    expect(fetchFn).toHaveBeenCalledTimes(2)
  })

  it('aborts the retry loop when the options signal is already aborted', async () => {
    const controller = new AbortController()
    controller.abort()
    const fetchFn = vi.fn().mockResolvedValue(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn, { signal: controller.signal })

    await expect(retryingFetch('https://api.scaleway.com/test')).rejects.toThrow('The operation was aborted')
    expect(fetchFn).not.toHaveBeenCalled()
  })

  it('aborts the retry loop when the request signal is already aborted', async () => {
    const controller = new AbortController()
    controller.abort()
    const fetchFn = vi.fn().mockResolvedValue(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn)

    await expect(retryingFetch('https://api.scaleway.com/test', { signal: controller.signal })).rejects.toThrow(
      'The operation was aborted',
    )
    expect(fetchFn).not.toHaveBeenCalled()
  })

  it('passes through the request and init to the underlying fetch', async () => {
    const fetchFn = vi.fn().mockResolvedValue(mockResponse(200))
    const retryingFetch = createRetryingFetch(fetchFn)
    const init: RequestInit = { method: 'POST', body: '{"foo":"bar"}' }

    await retryingFetch('https://api.scaleway.com/test', init)

    expect(fetchFn).toHaveBeenCalledWith('https://api.scaleway.com/test', init)
  })

  it('makes maxRetries+1 total attempts', async () => {
    const fetchFn = vi.fn().mockResolvedValue(mockResponse(503))
    const retryingFetch = createRetryingFetch(fetchFn, { maxRetries: 3, minDelay: 1, maxDelay: 1 })

    const promise = retryingFetch('https://api.scaleway.com/test')
    await advanceSleep()
    await advanceSleep()
    await advanceSleep()
    await promise

    expect(fetchFn).toHaveBeenCalledTimes(4)
  })
})
