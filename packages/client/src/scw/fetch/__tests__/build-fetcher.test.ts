import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { isBrowser } from '../../../helpers/is-browser.js'
import { addHeaderInterceptor } from '../../../internal/interceptors/helpers.js'
import type { Settings } from '../../client-settings.js'
import { ScalewayError } from '../../errors/scw-error.js'
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
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it(`gets a response without error for a simple request with unmarshaller`, async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      Response.json(
        {},
        {
          headers: { 'Content-Type': 'application/json' },
        },
      ),
    )

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock }, fetchMock)(
        {
          method: 'POST',
          path: '/undefined',
        },
        () => 'dummy-output',
      ),
    ).resolves.toStrictEqual('dummy-output')
  })

  it('gets modified response', async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      Response.json(
        {},
        {
          headers: { 'Content-Type': 'application/json' },
        },
      ),
    )

    await expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          httpClient: fetchMock,
          interceptors: [
            {
              response: () => Response.json('42'),
            },
          ],
        },
        fetchMock,
      )({
        method: 'POST',
        path: '/undefined',
      }),
    ).resolves.toStrictEqual('42')
  })

  it(`gets a response without error for a simple request without unmarshaller`, async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      Response.json(
        { any_parameter: 'any-value' },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      ),
    )

    await expect(
      buildFetcher({ ...DEFAULT_SETTINGS, httpClient: fetchMock }, fetchMock)({
        method: 'POST',
        path: '/undefined',
      }),
    ).resolves.toMatchObject({ any_parameter: 'any-value' })
  })

  it('gets a response with response error interceptor despite the error', async () => {
    const fetchMock = vi.fn<typeof fetch>().mockRejectedValue(new TypeError('fetch failed'))

    await expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          httpClient: fetchMock,
          interceptors: [
            {
              responseError: () => 42,
            },
          ],
        },
        fetchMock,
      )({
        method: 'GET',
        path: '/will-trigger-an-error',
      }),
    ).resolves.toBe(42)
  })

  it('gets the unmarshalled value of what responseError returns', async () => {
    const fetchMock = vi.fn<typeof fetch>().mockRejectedValue(new TypeError('fetch failed'))

    await expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          httpClient: fetchMock,
          interceptors: [
            {
              responseError: () => 42,
            },
          ],
        },
        fetchMock,
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
    const fetchMock = vi.fn<typeof fetch>().mockRejectedValue(new TypeError('fetch failed'))

    await expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          httpClient: fetchMock,
          interceptors: [
            {
              request: addHeaderInterceptor('random-header', '42'),
              responseError: ({ request }) => request.headers.get('random-header'),
            },
          ],
        },
        fetchMock,
      )({
        method: 'GET',
        path: '/will-trigger-an-error',
      }),
    ).resolves.toBe('42')
  })
})

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
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- force invalid response for parser TypeError
      'not-a-response' as unknown as Response,
    )

    await expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          httpClient: fetchMock,
          interceptors: [
            {
              response: () => 'not-a-response' as unknown as Response,
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
