import { describe, expect, it } from 'vitest'
import { isJSONObject } from '../json.js'
import {
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMapOfObject,
  urlParams,
  validatePathParam,
} from '../marshalling.js'

describe('validatePathParam', () => {
  it('returns parameter for a non-empty string', () => {
    expect(validatePathParam('keyName', 'value')).toBe('value')
  })

  it('returns parameter for a number', () => {
    expect(validatePathParam('keyName', 42)).toBe('42')
  })

  it('throws error for an undefined value', () => {
    expect(() => {
      validatePathParam('keyName', undefined)
    }).toThrow(new TypeError(`param keyName cannot be empty in request`))
  })

  it('throws error for an empty string', () => {
    expect(() => {
      validatePathParam('keyName', '')
    }).toThrow(new TypeError(`param keyName cannot be empty in request`))
  })
})

describe('urlParams', () => {
  it('accepts non-empty string | number | boolean values', () => {
    expect(
      urlParams(['key1', 'myValue'], ['key2', 0], ['key3', false]).toString(),
    ).toStrictEqual('key1=myValue&key2=0&key3=false')
  })

  it('accepts Date value', () => {
    const now = new Date()
    expect(urlParams(['key1', now]).toString()).toStrictEqual(
      `key1=${encodeURIComponent(now.toISOString())}`,
    )
  })

  it('accepts array of string', () => {
    expect(
      urlParams(['my_param', ['value-1', 'value-2']]).toString(),
    ).toStrictEqual('my_param=value-1&my_param=value-2')
  })

  it('accepts array of different objects', () => {
    const now = new Date()
    expect(urlParams(['my_param', ['value-1', now]]).toString()).toStrictEqual(
      `my_param=value-1&my_param=${encodeURIComponent(now.toISOString())}`,
    )
  })

  it('accepts array of string with a null value', () => {
    expect(urlParams(['my_param', ['value-1', null]]).toString()).toStrictEqual(
      'my_param=value-1',
    )
  })

  it('filters null or undefined values', () => {
    expect(
      urlParams(['key1', null], ['key2', undefined]).toString(),
    ).toStrictEqual('')
  })

  it('filters non-string keys', () => {
    expect(
      urlParams(
        [0, 'valid'] as unknown as [string, string],
        [null, 'valid'] as unknown as [string, string],
      ).toString(),
    ).toStrictEqual('')
  })

  it('properly resolves input from resolveOneOf', () => {
    const value = resolveOneOf([{ param: 'one_of_param', value: 42 }])
    expect(
      urlParams(['my_param', 'my-value'], ...Object.entries(value)).toString(),
    ).toStrictEqual('my_param=my-value&one_of_param=42')
  })
})

describe('resolveOneOf', () => {
  it('returns the value for 1 element', () => {
    expect(
      resolveOneOf(
        [{ default: undefined, param: 'my_key', value: '42' }],
        true,
      ),
      /* biome-ignore lint/style/useNamingConvention: test data uses snake_case intentionally */
    ).toStrictEqual({ my_key: '42' })
  })

  it('returns the only defined value for 2 elements', () => {
    expect(
      resolveOneOf(
        [
          { default: undefined, param: 'my_key_1', value: undefined },
          { default: undefined, param: 'my_key_2', value: '42' },
        ],
        true,
      ),
      /* biome-ignore lint/style/useNamingConvention: test data uses snake_case intentionally */
    ).toStrictEqual({ my_key_2: '42' })
  })

  it('returns the default value with undefined values', () => {
    expect(
      resolveOneOf(
        [
          { default: '42', param: 'my_key_1', value: undefined },
          { default: undefined, param: 'my_key_2', value: undefined },
        ],
        true,
      ),
      /* biome-ignore lint/style/useNamingConvention: test data uses snake_case intentionally */
    ).toStrictEqual({ my_key_1: '42' })

    expect(
      resolveOneOf(
        [
          { default: undefined, param: 'my_key_2', value: undefined },
          { default: '42', param: 'my_key_1', value: undefined },
        ],
        true,
      ),
      /* biome-ignore lint/style/useNamingConvention: test data uses snake_case intentionally */
    ).toStrictEqual({ my_key_1: '42' })
  })

  it('throws an error when no value has been found', () => {
    expect(() => {
      resolveOneOf(
        [
          { default: undefined, param: 'my_key_1', value: undefined },
          { default: undefined, param: 'my_key_2', value: undefined },
        ],
        true,
      )
    }).toThrow(
      new TypeError(
        `one of my_key_1 or my_key_2 must be indicated in the request`,
      ),
    )
  })

  it('returns an empty record in case the resolve is optional', () => {
    expect(
      resolveOneOf(
        [
          { default: undefined, param: 'my_key_1', value: undefined },
          { default: undefined, param: 'my_key_2', value: undefined },
        ],
        false,
      ),
    ).toStrictEqual({})
  })

  it('handles false kind values, like boolean.false', () => {
    expect(
      resolveOneOf(
        [
          { default: undefined, param: 'my_key_1', value: false },
          { default: undefined, param: 'my_key_2', value: true },
        ],
        false,
      ),
      /* biome-ignore lint/style/useNamingConvention: test data uses snake_case intentionally */
    ).toStrictEqual({ my_key_1: false })
  })
})

describe('unmarshalDate', () => {
  it('unmarshals valid input', () => {
    expect(unmarshalDate('2019-08-08T15:00:00Z')).toStrictEqual(
      new Date('2019-08-08T15:00:00Z'),
    )
  })

  it(`doesn't unmarshal invalid input type`, () => {
    expect(unmarshalDate(42)).toBeUndefined()
  })

  it(`doesn't unmarshal invalid string format`, () => {
    expect(unmarshalDate('not a date')).toBeUndefined()
  })
})

describe('unmarshalArrayOfObject', () => {
  type MyResource = {
    myNumber: number
  }
  const unmarshaller = (data: unknown): MyResource => {
    if (!isJSONObject(data)) throw new Error('Should not happen')

    return { myNumber: data.my_number } as MyResource
  }

  it('unmarshals valid array of object', () => {
    expect(
      unmarshalArrayOfObject(
        /* biome-ignore lint/style/useNamingConvention: test data uses snake_case intentionally */
        [{ my_number: 42 }, { my_number: 94 }],
        unmarshaller,
      ),
    ).toStrictEqual([{ myNumber: 42 }, { myNumber: 94 }])
  })

  it(`doesn't unmarshal invalid input, with empty array as fallback`, () => {
    expect(unmarshalArrayOfObject(null, unmarshaller)).toStrictEqual([])
  })

  it(`doesn't unmarshal invalid input, with undefined as fallback`, () => {
    expect(unmarshalArrayOfObject(null, unmarshaller, false)).toBeUndefined()
  })
})

describe('unmarshalMapOfObject', () => {
  type MyResource = {
    myNumber: number
  }
  const unmarshaller = (data: unknown): MyResource => {
    if (!isJSONObject(data)) throw new Error('Should not happen')

    return { myNumber: data.my_number } as MyResource
  }

  it('unmarshals valid array of object', () => {
    expect(
      unmarshalMapOfObject(
        /* biome-ignore lint/style/useNamingConvention: test data uses snake_case intentionally */
        { 'first-key': { my_number: 42 }, 'second-key': { my_number: 94 } },
        unmarshaller,
      ),
    ).toStrictEqual({
      'first-key': { myNumber: 42 },
      'second-key': { myNumber: 94 },
    })
  })

  it(`doesn't unmarshal invalid input, with empty record as fallback`, () => {
    expect(unmarshalMapOfObject(null, unmarshaller)).toStrictEqual({})
  })

  it(`doesn't unmarshal invalid input, with undefined as fallback`, () => {
    expect(unmarshalMapOfObject(null, unmarshaller, false)).toBeUndefined()
  })
})
