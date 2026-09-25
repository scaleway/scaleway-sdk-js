import { afterAll, describe, expect, it, vi } from 'vitest'
import { isBrowser } from '../../../helpers/is-browser.js'
import * as sleepModule from '../../../internal/async/sleep.js'
import { addHeaderInterceptor } from '../../../internal/interceptors/helpers.js'
import { ScalewayError } from '../../errors/scw-error.js'
import type { Settings } from '../../client-settings.js'
import { buildFetcher, buildRequest } from '../build-fetcher.js'
import type { ScwRequest } from '../types.js'

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

const SCW_POST_REQUEST: ScwRequest = {
  method: 'POST',
  path: '/undefined',
}

describe(`buildRequest`, () => {
  it(`has the specified method & url`, () => {
    const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
    expect(fReq.method).toBe(SCW_POST_REQUEST.method)
    expect(fReq.url).toBe(`${DEFAULT_SETTINGS.apiURL}${SCW_POST_REQUEST.path}`)
  })

  it(`has the default header "Accept: 'application/json'"`, () => {
    const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
    expect(fReq.headers.get('accept')).toBe(`application/json`)
  })

  if (!isBrowser()) {
    it(`has the default header "User-Agent: 'scaleway-sdk-js/v1.0.0'"`, () => {
      const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
      expect(fReq.headers.get('User-Agent')).toBe(DEFAULT_SETTINGS.userAgent)
    })
  } else {
    it(`has NOT the default header "User-Agent: 'scaleway-sdk-js/v1.0.0'"`, () => {
      const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
      expect(fReq.headers.get('User-Agent')).toBeNull()
    })
  }

  it(`has the custom headers`, () => {
    const mReq: ScwRequest = {
      ...SCW_POST_REQUEST,
      headers: {
        randomName: 'random-value',
      },
    }
    const fReq = buildRequest(mReq, DEFAULT_SETTINGS)
    expect(fReq.headers.get('randomName')).toBe(mReq.headers?.randomName)
  })

  it('has the url params', () => {
    const mReq: ScwRequest = {
      ...SCW_POST_REQUEST,
      urlParams: new URLSearchParams([
        ['param1', 'value1'],
        ['param2', 'value2'],
      ]),
    }
    const fReq = buildRequest(mReq, DEFAULT_SETTINGS)
    expect(fReq.url).toBe('https://api.scaleway.com/undefined?param1=value1&param2=value2')
  })

  it(`wires the AbortSignal to the Request`, () => {
    const controller = new AbortController()
    const fReq = buildRequest({ ...SCW_POST_REQUEST, signal: controller.signal }, DEFAULT_SETTINGS)
    expect(fReq.signal.aborted).toBe(false)
    controller.abort()
    expect(fReq.signal.aborted).toBe(true)
  })

  it(`attaches AbortSignal.timeout when defaultTimeoutMs is set`, async () => {
    const fReq = buildRequest(SCW_POST_REQUEST, { ...DEFAULT_SETTINGS, defaultTimeoutMs: 1 })
    expect(fReq.signal.aborted).toBe(false)
    await expect(
      new Promise<void>((resolve, reject) => {
        fReq.signal.addEventListener('abort', () => {
          resolve()
        })
        setTimeout(() => {
          reject(new Error('timeout signal did not abort'))
        }, 100)
      }),
    ).resolves.toBeUndefined()
    expect(fReq.signal.aborted).toBe(true)
  })

  it(`prefers a caller-supplied signal over defaultTimeoutMs`, async () => {
    const controller = new AbortController()
    const fReq = buildRequest(
      { ...SCW_POST_REQUEST, signal: controller.signal },
      { ...DEFAULT_SETTINGS, defaultTimeoutMs: 1 },
    )
    expect(fReq.signal.aborted).toBe(false)
    await new Promise<void>(resolve => {
      setTimeout(resolve, 50)
    })
    expect(fReq.signal.aborted).toBe(false)
    controller.abort()
    expect(fReq.signal.aborted).toBe(true)
  })
})

describe(`buildFetcher (mock)`, () => {
  afterAll(() => {
    vi.restoreAllMocks()
  })

  vi.spyOn(globalThis, 'fetch')
  const mockedFetch = vi.mocked(fetch)
  const fetcher = buildFetcher(DEFAULT_SETTINGS, globalThis.fetch)

  it(`gets a response without error for a simple request with unmarshaller`, async () => {
    mockedFetch.mockResolvedValue(
      Response.json(
        {},
        {
          headers: { 'Content-Type': 'application/json' },
        },
      ),
    )

    return expect(
      fetcher(
        {
          method: 'POST',
          path: '/undefined',
        },
        () => 'dummy-output',
      ),
    ).resolves.toStrictEqual('dummy-output')
  })

  it('gets modified response', async () => {
    mockedFetch.mockResolvedValue(
      Response.json(
        {},
        {
          headers: { 'Content-Type': 'application/json' },
        },
      ),
    )

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              response: () => Response.json('42'),
            },
          ],
        },
        globalThis.fetch,
      )({
        method: 'POST',
        path: '/undefined',
      }),
    ).resolves.toStrictEqual('42')
  })

  it(`gets a response without error for a simple request without unmarshaller`, async () => {
    mockedFetch.mockResolvedValue(
      Response.json(
        { any_parameter: 'any-value' },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      ),
    )

    return expect(
      fetcher({
        method: 'POST',
        path: '/undefined',
      }),
    ).resolves.toMatchObject({ any_parameter: 'any-value' })
  })

  it('gets a response with response error interceptor despite the error', async () => {
    mockedFetch.mockRejectedValue(new TypeError('mock fetch error'))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              responseError: () => 42,
            },
          ],
        },
        globalThis.fetch,
      )({
        method: 'GET',
        path: '/will-trigger-an-error',
      }),
    ).resolves.toBe(42)
  })

  it('gets the unmarshalled value of what responseError returns', async () => {
    mockedFetch.mockRejectedValue(new TypeError('mock fetch error'))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              responseError: () => 42,
            },
          ],
        },
        globalThis.fetch,
      )(
        {
          method: 'GET',
          path: '/will-trigger-an-error',
        },
        data => `${typeof data === 'number' ? data : ''}-dummy-output`,
      ),
    ).resolves.toBe('42-dummy-output')
  })

  it('gets modified request in response error', async () => {
    mockedFetch.mockRejectedValue(new TypeError('mock fetch error'))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              request: addHeaderInterceptor('random-header', '42'),
              responseError: ({ request }) => request.headers.get('random-header'),
            },
          ],
        },
        globalThis.fetch,
      )({
        method: 'GET',
        path: '/will-trigger-an-error',
      }),
    ).resolves.toBe('42')
  })
})

describe('buildFetcher retry', () => {
  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('does not retry when retry is unset', async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response(JSON.stringify({ message: 'unavailable' }), { status: 503 }))

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock }, fetchMock)({
        method: 'GET',
        path: '/no-retry',
      }),
    ).rejects.toThrow(ScalewayError)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('retries 503 then succeeds', async () => {
    vi.spyOn(sleepModule, 'sleep').mockResolvedValue(undefined)
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response(JSON.stringify({ message: 'unavailable' }), { status: 503 }))
      .mockResolvedValueOnce(
        Response.json(
          { ok: true },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      )

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 2 } }, fetchMock)({
        method: 'GET',
        path: '/retry-503',
      }),
    ).resolves.toMatchObject({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('honours Retry-After before retrying 429', async () => {
    const sleepMock = vi.spyOn(sleepModule, 'sleep').mockResolvedValue(undefined)
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ help_message: 'slow down', type: 'too_many_requests' }), {
          headers: { 'Retry-After': '3' },
          status: 429,
        }),
      )
      .mockResolvedValueOnce(
        Response.json(
          { ok: true },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      )

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 1 } }, fetchMock)({
        method: 'GET',
        path: '/retry-after',
      }),
    ).resolves.toMatchObject({ ok: true })
    expect(sleepMock).toHaveBeenCalledWith(3000)
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('caps oversized Retry-After by maxDelay', async () => {
    const sleepMock = vi.spyOn(sleepModule, 'sleep').mockResolvedValue(undefined)
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ help_message: 'slow down', type: 'too_many_requests' }), {
          headers: { 'Retry-After': '120' },
          status: 429,
        }),
      )
      .mockResolvedValueOnce(
        Response.json(
          { ok: true },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      )

    await expect(
      buildFetcher(
        { ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 1, maxDelay: 30 } },
        fetchMock,
      )({
        method: 'GET',
        path: '/retry-after-capped',
      }),
    ).resolves.toMatchObject({ ok: true })
    expect(sleepMock).toHaveBeenCalledWith(30_000)
  })

  it('retries network errors', async () => {
    vi.spyOn(sleepModule, 'sleep').mockResolvedValue(undefined)
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

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 1 } }, fetchMock)({
        method: 'GET',
        path: '/network',
      }),
    ).resolves.toMatchObject({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('stops after maxRetries', async () => {
    vi.spyOn(sleepModule, 'sleep').mockResolvedValue(undefined)
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response(JSON.stringify({ message: 'unavailable' }), { status: 503 }))

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock, retry: { maxRetries: 2 } }, fetchMock)({
        method: 'GET',
        path: '/exhausted',
      }),
    ).rejects.toThrow(ScalewayError)
    expect(fetchMock).toHaveBeenCalledTimes(3)
  })
})
