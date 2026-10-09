import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { Settings } from '../../client-settings.js'
import { ScalewayError } from '../../errors/scw-error.js'
import { buildFetcher } from '../build-fetcher.js'

const DEFAULT_SETTINGS: Settings = {
  apiURL: 'https://api.scaleway.com',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
  httpClient: globalThis.fetch,
  interceptors: [],
  requestInterceptors: [],
  responseInterceptors: [],
  userAgent: 'scaleway-sdk-js/v1.0.0',
}

describe('buildFetcher retry', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.spyOn(globalThis, 'setTimeout')
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('does not retry when retry is unset', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(Response.json({ message: 'unavailable' }, { status: 503 }))

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock }, fetchMock)({
        method: 'GET',
        path: '/no-retry',
      }),
    ).rejects.toThrow(ScalewayError)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('retries 503 on GET then succeeds', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(Response.json({ message: 'unavailable' }, { status: 503 }))
      .mockResolvedValueOnce(
        Response.json(
          { ok: true },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      )

    const resultPromise = buildFetcher(
      { ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 2 } },
      fetchMock,
    )({
      method: 'GET',
      path: '/retry-503',
    })
    await vi.runAllTimersAsync()
    await expect(resultPromise).resolves.toMatchObject({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('does not retry 503 on POST', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(Response.json({ message: 'unavailable' }, { status: 503 }))

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 2 } }, fetchMock)({
        method: 'POST',
        path: '/no-retry-post',
      }),
    ).rejects.toThrow(ScalewayError)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('retries 429 on POST', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        Response.json(
          { help_message: 'slow down', type: 'too_many_requests' },
          {
            status: 429,
          },
        ),
      )
      .mockResolvedValueOnce(
        Response.json(
          { ok: true },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      )

    const resultPromise = buildFetcher(
      { ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 1 } },
      fetchMock,
    )({
      method: 'POST',
      path: '/retry-429-post',
    })
    await vi.runAllTimersAsync()
    await expect(resultPromise).resolves.toMatchObject({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('honours Retry-After before retrying 429', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        Response.json(
          { help_message: 'slow down', type: 'too_many_requests' },
          {
            headers: { 'Retry-After': '3' },
            status: 429,
          },
        ),
      )
      .mockResolvedValueOnce(
        Response.json(
          { ok: true },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      )

    const resultPromise = buildFetcher(
      { ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 1 } },
      fetchMock,
    )({
      method: 'GET',
      path: '/retry-after',
    })
    await vi.runAllTimersAsync()
    await expect(resultPromise).resolves.toMatchObject({ ok: true })
    expect(globalThis.setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000)
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('caps oversized Retry-After by maxDelay', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        Response.json(
          { help_message: 'slow down', type: 'too_many_requests' },
          {
            headers: { 'Retry-After': '120' },
            status: 429,
          },
        ),
      )
      .mockResolvedValueOnce(
        Response.json(
          { ok: true },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      )

    const resultPromise = buildFetcher(
      { ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 1, maxDelay: 30 } },
      fetchMock,
    )({
      method: 'GET',
      path: '/retry-after-capped',
    })
    await vi.runAllTimersAsync()
    await expect(resultPromise).resolves.toMatchObject({ ok: true })
    expect(globalThis.setTimeout).toHaveBeenCalledWith(expect.any(Function), 30_000)
  })

  it('retries network errors on GET', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockRejectedValueOnce(new TypeError('fetch failed'))
      .mockResolvedValueOnce(
        Response.json(
          { ok: true },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      )

    const resultPromise = buildFetcher(
      { ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 1 } },
      fetchMock,
    )({
      method: 'GET',
      path: '/network',
    })
    await vi.runAllTimersAsync()
    await expect(resultPromise).resolves.toMatchObject({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('does not retry parser TypeError as network error', async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(Response.json({}))

    await expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          httpClient: fetchMock,
          interceptors: [
            {
              response: () => {
                throw new TypeError('Invalid response object')
              },
            },
          ],
          retry: { maxRetries: 2 },
        },
        fetchMock,
      )({
        method: 'GET',
        path: '/parser-typeerror',
      }),
    ).rejects.toThrow(TypeError)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('stops after maxRetries', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(Response.json({ message: 'unavailable' }, { status: 503 }))

    const resultPromise = buildFetcher(
      { ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 2 } },
      fetchMock,
    )({
      method: 'GET',
      path: '/exhausted',
    })
    const expectation = expect(resultPromise).rejects.toThrow(ScalewayError)
    await vi.runAllTimersAsync()
    await expectation
    expect(fetchMock).toHaveBeenCalledTimes(3)
  })

  it('runs responseError interceptors only after retries are exhausted', async () => {
    const responseError = vi.fn(() => {
      throw new ScalewayError(503, 'unavailable')
    })
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(Response.json({ message: 'unavailable' }, { status: 503 }))

    const resultPromise = buildFetcher(
      {
        ...DEFAULT_SETTINGS,
        httpClient: fetchMock,
        interceptors: [{ responseError }],
        retry: { maxRetries: 2 },
      },
      fetchMock,
    )({
      method: 'GET',
      path: '/interceptor-once',
    })
    const expectation = expect(resultPromise).rejects.toThrow(ScalewayError)
    await vi.runAllTimersAsync()
    await expectation
    expect(fetchMock).toHaveBeenCalledTimes(3)
    expect(responseError).toHaveBeenCalledTimes(1)
  })
})
