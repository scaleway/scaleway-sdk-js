import { describe, expect, it } from '@jest/globals'
import type { JSON } from '../../../helpers/json'
import { isJSONObject } from '../../../helpers/json'
import { ScalewayError } from '../../errors/scw-error'
import { fixLegacyTotalCount, responseParser } from '../response-parser'

const SIMPLE_REQ_BODY = { 'what-is-life': 42 }

const convertObjToBuffer = (obj: JSON): Buffer => {
  const str = JSON.stringify(obj)
  const bytes = new TextEncoder().encode(str)

  return Buffer.from(bytes)
}

const unmarshalJSON = (obj: unknown) => {
  if (!isJSONObject(obj)) throw new Error(`couldn't unwrap response value`)

  return obj
}

const makeValidJSONResponse = (
  value: JSON | null = SIMPLE_REQ_BODY,
  status = 200,
) =>
  new Response(value !== null ? convertObjToBuffer(value) : value, {
    headers: { 'Content-Type': 'application/json' },
    status,
  })

const makeValidTextResponse = (value: string | null, status = 200) =>
  new Response(value, {
    headers: { 'Content-Type': 'plain/text' },
    status,
  })

describe(`responseParser`, () => {
  const parseJson = responseParser(unmarshalJSON)
  const parseAsIs = responseParser(<T>(response: unknown) => response as T)

  it(`triggers a type error for non 'Response' object`, () =>
    expect(
      // @ts-expect-error Different type
      parseJson('not-a-response'),
    ).rejects.toThrow(new TypeError('Invalid response object')))

  it(`triggers an error for invalid status code`, async () => {
    const invalidResponse = new Response(convertObjToBuffer(SIMPLE_REQ_BODY), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })

    return expect(parseJson(invalidResponse)).rejects.toThrow()
  })

  it(`triggers an error with string payload`, async () => {
    const invalidResponse = new Response(convertObjToBuffer('random-error'), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })

    return expect(parseJson(invalidResponse)).rejects.toThrow(
      new ScalewayError(500, 'random-error'),
    )
  })

  it(`triggers an error with unknown payload`, async () => {
    const invalidResponse = new Response(convertObjToBuffer(null), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })

    return expect(parseJson(invalidResponse)).rejects.toThrow(
      new ScalewayError(500, 'cannot read error response body'),
    )
  })

  it(`triggers an error with server response message when parsing fails`, async () => {
    const alreadyReadResponse = new Response('text error content', {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })

    return expect(parseJson(alreadyReadResponse)).rejects.toThrow(
      new ScalewayError(500, 'text error content'),
    )
  })

  it(`triggers an error for unsuccessful unmarshalling`, async () => {
    const validResponse = makeValidJSONResponse()

    await expect(
      responseParser(() => {
        throw new Error(`couldn't unwrap response value`)
      })(validResponse.clone()),
    ).rejects.toThrow(
      new ScalewayError(
        validResponse.status,
        `could not parse 'application/json' response: couldn't unwrap response value`,
      ),
    )

    await expect(
      responseParser(() => {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw 'not-of-error-type'
      })(validResponse.clone()),
    ).rejects.toThrow(
      new ScalewayError(
        validResponse.status,
        `could not parse 'application/json' response`,
      ),
    )
  })

  it(`returns the response as-if for unknown content type`, async () => {
    const textResponse = makeValidTextResponse('text-body')

    return expect(parseAsIs(textResponse)).resolves.toBe('text-body')
  })

  it(`returns a simple object for a valid 'Response' object`, async () =>
    expect(parseJson(makeValidJSONResponse())).resolves.toMatchObject(
      SIMPLE_REQ_BODY,
    ))

  it(`returns undefined for a 204 status code, even if content-type is json`, async () =>
    expect(
      parseAsIs(makeValidJSONResponse(null, 204)),
    ).resolves.toBeUndefined())
})

describe('fixLegacyTotalCount', () => {
  it('appends total_count if headers contains the key', () => {
    expect(
      fixLegacyTotalCount(
        { my_key: 'anything' },
        new Headers({ 'x-total-count': '3' }),
      ),
    ).toStrictEqual({ my_key: 'anything', total_count: 3 })
  })

  it('does nothing if expected key is empty', () => {
    expect(
      fixLegacyTotalCount({ my_key: 'anything' }, new Headers({})),
    ).toStrictEqual({ my_key: 'anything' })
  })

  it('does nothing if expected key is not of valid value', () => {
    expect(
      fixLegacyTotalCount(
        { my_key: 'anything' },
        new Headers({ 'x-total-count': 'true' }),
      ),
    ).toStrictEqual({ my_key: 'anything' })
  })

  it('does nothing if total_count already exists', () => {
    expect(
      fixLegacyTotalCount(
        { my_key: 'anything', total_count: 5 },
        new Headers({ 'x-total-count': '3' }),
      ),
    ).toStrictEqual({ my_key: 'anything', total_count: 5 })
  })

  it('does nothing if input is not a Record', () => {
    expect(
      fixLegacyTotalCount('my-value', new Headers({ 'x-total-count': '3' })),
    ).toStrictEqual('my-value')
  })
})
