import { describe, expect, it } from 'vitest'
import {
  marshalBlobToScwFile,
  marshalDecimal,
  marshalMoney,
  marshalScwFile,
  marshalTimeSeries,
  marshalTimeSeriesPoint,
  unmarshalAnyRes,
  unmarshalDates,
  unmarshalDecimal,
  unmarshalMoney,
  unmarshalScwFile,
  unmarshalServiceInfo,
  unmarshalTimeSeries,
  unmarshalTimeSeriesPoint,
} from '../custom-marshalling.js'
import { Decimal } from '../custom-types.js'

describe('unmarshalMoney', () => {
  it('returns the proper object', () => {
    expect(
      unmarshalMoney({
        currency_code: 'EUR',
        nanos: 0,
        units: 42,
      }),
    ).toStrictEqual({
      currencyCode: 'EUR',
      nanos: 0,
      units: 42,
    })
  })

  it('throws for invalid input', () => {
    expect(() => {
      unmarshalMoney(null)
    }).toThrow()
  })
})

describe('unmarshalServiceInfo', () => {
  it('returns the proper object', () => {
    expect(
      unmarshalServiceInfo({
        description: 'Service description',
        documentation_url: 'https://',
        name: 'TheService',
        version: 'v1',
      }),
    ).toStrictEqual({
      description: 'Service description',
      documentationUrl: 'https://',
      name: 'TheService',
      version: 'v1',
    })
  })

  it('throws for invalid input', () => {
    expect(() => {
      unmarshalServiceInfo(null)
    }).toThrow()
  })
})

describe('unmarshalScwFile', () => {
  it('returns the proper object', () => {
    expect(
      unmarshalScwFile({
        content: 'eyJoZWxsbyI6IndvcmxkIn0=',
        content_type: 'text/plain',
        name: 'filename',
      }),
    ).toStrictEqual({
      content: 'eyJoZWxsbyI6IndvcmxkIn0=',
      contentType: 'text/plain',
      name: 'filename',
    })
  })

  it('throws for invalid input', () => {
    expect(() => {
      unmarshalScwFile(null)
    }).toThrow()
  })
})

describe('unmarshalTimeSeriesPoint', () => {
  it('returns the proper object', () => {
    expect(unmarshalTimeSeriesPoint(['2019-08-08T15:00:00.000Z', 42])).toStrictEqual({
      timestamp: new Date('2019-08-08T15:00:00.000Z'),
      value: 42,
    })
  })

  it('throws for invalid input', () => {
    expect(() => {
      unmarshalTimeSeriesPoint(null)
    }).toThrow()
  })
})

describe('unmarshalTimeSeries', () => {
  it('returns the proper object', () => {
    expect(
      unmarshalTimeSeries({
        metadata: { mattress: 'cloud' },
        name: 'sleep',
        points: [['2019-08-08T15:00:00.000Z', 8]],
      }),
    ).toStrictEqual({
      metadata: { mattress: 'cloud' },
      name: 'sleep',
      points: [
        {
          timestamp: new Date('2019-08-08T15:00:00.000Z'),
          value: 8,
        },
      ],
    })
  })

  it('throws for invalid input', () => {
    expect(() => {
      unmarshalTimeSeries(null)
    }).toThrow()
  })
})

describe('unmarshalDecimal', () => {
  it('returns the proper object', () => {
    const decimal = unmarshalDecimal({
      value: '0.01',
    })
    expect(decimal).toBeInstanceOf(Decimal)
    expect(decimal?.toString()).toStrictEqual('0.01')
  })

  it('throws for invalid input', () => {
    expect(unmarshalDecimal(null)).toBeNull()
    expect(() => {
      unmarshalDecimal({})
    }).toThrow()
    expect(() => {
      unmarshalDecimal({ value: null })
    }).toThrow()
    expect(() => {
      unmarshalDecimal({ value: 0.02 })
    }).toThrow()
    expect(() => {
      unmarshalDecimal('not-an-object')
    }).toThrow(TypeError)
  })
})

describe('marshalScwFile', () => {
  it('returns a the proper object', () => {
    expect(
      marshalScwFile({
        content: 'eyJoZWxsbyI6IndvcmxkIn0=',
        contentType: 'text/plain',
        name: 'filename',
      }),
    ).toStrictEqual({
      content: 'eyJoZWxsbyI6IndvcmxkIn0=',
      content_type: 'text/plain',
      name: 'filename',
    })
  })
})

describe('marshalMoney', () => {
  it('returns the proper object', () => {
    expect(
      marshalMoney({
        currencyCode: 'EUR',
        nanos: 0,
        units: 42,
      }),
    ).toStrictEqual({
      currency_code: 'EUR',
      nanos: 0,
      units: 42,
    })
  })
})

describe('marshalTimeSeriesPoint', () => {
  it('returns the proper object', () => {
    expect(
      marshalTimeSeriesPoint({
        timestamp: new Date('2019-08-08T15:00:00.000Z'),
        value: 42,
      }),
    ).toStrictEqual({
      timestamp: '2019-08-08T15:00:00.000Z',
      value: 42,
    })
  })

  it('omits the timestamp when undefined', () => {
    expect(
      marshalTimeSeriesPoint({
        timestamp: undefined,
        value: 42,
      }),
    ).toStrictEqual({
      timestamp: undefined,
      value: 42,
    })
  })
})

describe('marshalTimeSeries', () => {
  it('returns the proper object', () => {
    expect(
      marshalTimeSeries({
        metadata: { mattress: 'cloud' },
        name: 'sleep',
        points: [
          {
            timestamp: new Date('2019-08-08T15:00:00.000Z'),
            value: 8,
          },
        ],
      }),
    ).toStrictEqual({
      metadata: { mattress: 'cloud' },
      name: 'sleep',
      points: [
        {
          timestamp: '2019-08-08T15:00:00.000Z',
          value: 8,
        },
      ],
    })
  })
})

describe('marshalDecimal', () => {
  it('returns the proper object', () => {
    expect(marshalDecimal(new Decimal('0.01'))).toStrictEqual({ value: '0.01' })
  })
})

describe('marshalBlobToScwFile', () => {
  it('returns a base64-encoded ScwFile from a Blob', async () => {
    const blob = new Blob([new Uint8Array([104, 101, 108, 108, 111])], { type: 'text/plain' })
    const result = await marshalBlobToScwFile(blob)
    expect(result).toStrictEqual({
      content: 'aGVsbG8=',
      content_type: 'text/plain',
      name: 'file',
    })
  })
})

describe('unmarshalDates', () => {
  it('converts matching string keys to Date instances', () => {
    const result = unmarshalDates({ created_at: '2019-08-08T15:00:00.000Z', name: 'hello' }, ['created_at'])
    expect(result).toStrictEqual({
      created_at: new Date('2019-08-08T15:00:00.000Z'),
      name: 'hello',
    })
  })

  it('leaves non-matching keys untouched', () => {
    expect(unmarshalDates({ name: 'hello' }, ['created_at'])).toStrictEqual({
      name: 'hello',
    })
  })

  it('recurses into nested objects', () => {
    const result = unmarshalDates({ nested: { created_at: '2019-08-08T15:00:00.000Z' } }, ['created_at'])
    expect(result).toStrictEqual({
      nested: { created_at: new Date('2019-08-08T15:00:00.000Z') },
    })
  })

  it('recurses into arrays', () => {
    const result = unmarshalDates([{ created_at: '2019-08-08T15:00:00.000Z' }, { name: 'no-date' }], ['created_at'])
    expect(result).toStrictEqual([{ created_at: new Date('2019-08-08T15:00:00.000Z') }, { name: 'no-date' }])
  })

  it('returns primitives and null as-is', () => {
    expect(unmarshalDates(42, ['created_at'])).toBe(42)
    expect(unmarshalDates('str', ['created_at'])).toBe('str')
    expect(unmarshalDates(null, ['created_at'])).toBeNull()
  })
})

describe('unmarshalAnyRes', () => {
  it('camelizes keys of a flat object', () => {
    expect(unmarshalAnyRes({ snake_case: 1, other_key: 'v' })).toStrictEqual({
      snakeCase: 1,
      otherKey: 'v',
    })
  })

  it('camelizes keys and converts declared date keys', () => {
    const result = unmarshalAnyRes({ created_at: '2019-08-08T15:00:00.000Z', simple_key: 1 }, [], ['created_at'])
    expect(result).toStrictEqual({
      createdAt: new Date('2019-08-08T15:00:00.000Z'),
      simpleKey: 1,
    })
  })

  it('ignores specified keys (keeps original value untouched)', () => {
    expect(unmarshalAnyRes({ keep_snake: { nested_key: 1 }, camel_me: 2 }, ['keep_snake'])).toStrictEqual({
      keepSnake: { nested_key: 1 },
      camelMe: 2,
    })
  })

  it('throws a TypeError when the input is not a dictionary', () => {
    expect(() => unmarshalAnyRes(null)).toThrow(TypeError)
    expect(() => unmarshalAnyRes('str')).toThrow(TypeError)
    expect(() => unmarshalAnyRes([1, 2, 3])).toThrow(TypeError)
  })

  it('does not call unmarshalDates when dateKeys is empty', () => {
    expect(unmarshalAnyRes({ created_at: '2019-08-08T15:00:00.000Z' }, [], [])).toStrictEqual({
      createdAt: '2019-08-08T15:00:00.000Z',
    })
  })
})
