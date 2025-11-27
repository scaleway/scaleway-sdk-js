import { describe, expect, it } from 'vitest'
import { isBrowser } from '../../../helpers/is-browser.js'
import type { Settings } from '../../client-settings.js'
import { buildRequest } from '../build-fetcher.js'
import { dumpRequest, dumpResponse } from '../http-dumper.js'

const DEFAULT_SETTINGS: Settings = {
  apiURL: 'https://api.scaleway.com',
  defaultRegion: 'fr-par',
  defaultZone: 'fr-par-1',
  httpClient: fetch,
  interceptors: [],
  requestInterceptors: [],
  responseInterceptors: [],
  userAgent: 'scaleway-sdk-js/v1.0.0',
}

describe(`dumpRequest`, () => {
  it(`returns a readable string`, () => {
    const userAgentHeader = !isBrowser()
      ? `User-Agent: scaleway-sdk-js/v1.0.0\r\n`
      : ''

    return expect(
      dumpRequest(
        buildRequest(
          {
            body: JSON.stringify({ myProp: 'random-value' }),
            method: 'POST',
            path: '/random/path',
          },
          DEFAULT_SETTINGS,
        ),
      ),
    ).resolves.toBe(
      `POST: https://api.scaleway.com/random/path\r\nAccept: application/json\r\nContent-Type: text/plain;charset=UTF-8\r\n${userAgentHeader}{"myProp":"random-value"}`,
    )
  })
})

const convertObjToBuffer = (obj: unknown): Buffer =>
  Buffer.from(JSON.stringify(obj))

const makeFetchResponse = (
  value: unknown,
  contentType: string,
  status: number,
): Response =>
  new Response(new Uint8Array(convertObjToBuffer(value)), {
    headers: { 'Content-Type': contentType },
    status,
  })

describe('dumpResponse', () => {
  it('returns a readable string for ok response', async () => {
    const input = { randomKey: 42 }
    const res = makeFetchResponse(input, 'application/json', 200)
    const expectedDump = `HTTP 200 OK\r\nContent-Type: application/json\r\n${JSON.stringify(
      input,
    )}`

    return expect(dumpResponse(res)).resolves.toBe(expectedDump)
  })

  it('returns a readable string for nok response', async () => {
    const input = 'Raw error message'
    const res = makeFetchResponse(input, 'text/plain', 400)
    const expectedDump = `HTTP 400 NOK\r\nContent-Type: text/plain\r\n${JSON.stringify(
      input,
    )}`

    return expect(dumpResponse(res)).resolves.toBe(expectedDump)
  })
})
