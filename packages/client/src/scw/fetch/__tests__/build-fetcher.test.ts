import { afterAll, describe, expect, it, vi } from 'vitest'
import { isBrowser } from '../../../helpers/is-browser.js'
import { addHeaderInterceptor } from '../../../internal/interceptors/helpers.js'
import type { Settings } from '../../client-settings.js'
import { buildFetcher, buildRequest } from '../build-fetcher.js'
import type { ScwRequest } from '../types.js'

const DEFAULT_SETTINGS: Settings = {
  apiURL: 'https://api.scaleway.com',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
  httpClient: global.fetch,
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
    expect(fReq.url).toBe(
      'https://api.scaleway.com/undefined?param1=value1&param2=value2',
    )
  })
})

describe(`buildFetcher (mock)`, () => {
  afterAll(() => {
    vi.restoreAllMocks()
  })

  vi.spyOn(global, 'fetch')
  const mockedFetch = vi.mocked(fetch)
  const fetcher = buildFetcher(DEFAULT_SETTINGS, global.fetch)

  it(`gets a response without error for a simple request with unmarshaller`, async () => {
    mockedFetch.mockResolvedValue(
      new Response(JSON.stringify({}), {
        headers: { 'Content-Type': 'application/json' },
      }),
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

  it('gets modified response', () => {
    mockedFetch.mockResolvedValue(
      new Response(JSON.stringify({}), {
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              response: () => new Response(JSON.stringify(42)),
            },
          ],
        },
        global.fetch,
      )({
        method: 'POST',
        path: '/undefined',
      }),
    ).resolves.toStrictEqual('42')
  })

  it(`gets a response without error for a simple request without unmarshaller`, async () => {
    mockedFetch.mockResolvedValue(
      new Response(JSON.stringify({ any_parameter: 'any-value' }), {
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    return expect(
      fetcher({
        method: 'POST',
        path: '/undefined',
      }),
    ).resolves.toMatchObject({ any_parameter: 'any-value' })
  })

  it('gets a response with response error interceptor despite the error', () => {
    mockedFetch.mockRejectedValue(new TypeError(''))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              responseError: () => Promise.resolve(42),
            },
          ],
        },
        global.fetch,
      )({
        method: 'GET',
        path: '/will-trigger-an-error',
      }),
    ).resolves.toBe(42)
  })

  it('gets the unmarshalled value of what responseError returns', () => {
    mockedFetch.mockRejectedValue(new TypeError(''))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              responseError: () => Promise.resolve(42),
            },
          ],
        },
        global.fetch,
      )(
        {
          method: 'GET',
          path: '/will-trigger-an-error',
        },
        data => `${typeof data === 'number' ? data : ''}-dummy-output`,
      ),
    ).resolves.toBe('42-dummy-output')
  })

  it('gets modified request in response error', () => {
    mockedFetch.mockRejectedValue(new TypeError(''))

    return expect(
      buildFetcher(
        {
          ...DEFAULT_SETTINGS,
          interceptors: [
            {
              request: addHeaderInterceptor('random-header', '42'),
              responseError: ({ request }) =>
                request.headers.get('random-header'),
            },
          ],
        },
        global.fetch,
      )({
        method: 'GET',
        path: '/will-trigger-an-error',
      }),
    ).resolves.toBe('42')
  })
})
