import { describe, expect, it } from 'vitest'
import {
  marshalMoney,
  marshalScwFile,
  marshalTimeSeries,
  marshalTimeSeriesPoint,
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
    expect(
      unmarshalTimeSeriesPoint(['2019-08-08T15:00:00.000Z', 42]),
    ).toStrictEqual({
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
  })
})

describe('marshalScwFile', () => {
  it('returns a the proper object', () =>
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
    }))
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
