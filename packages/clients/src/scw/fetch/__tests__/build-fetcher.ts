import { afterAll, describe, expect, it, jest } from '@jest/globals'
import type { Settings } from '../../client-settings'
import { buildFetcher, buildRequest } from '../build-fetcher'
import type { ScwRequest } from '../types'

const DEFAULT_SETTINGS: Settings = {
  apiURL: 'https://api.scaleway.com',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
  httpClient: global.fetch,
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

  it(`has the default header "User-Agent: 'scaleway-sdk-js/v1.0.0'"`, () => {
    const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
    expect(fReq.headers.get('User-Agent')).toBe(DEFAULT_SETTINGS.userAgent)
  })

  it(`has NOT the header "User-Agent" when browser is detected`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Fake window/document for the test
    global.window = { document: 'not-undefined' }
    const fReq = buildRequest(SCW_POST_REQUEST, DEFAULT_SETTINGS)
    expect(fReq.headers.get('User-Agent')).toBeNull()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Reset the global variable
    delete global.window
  })

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
    jest.restoreAllMocks()
  })

  jest.spyOn(global, 'fetch')
  const mockedFetch = jest.mocked(fetch)
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
})
