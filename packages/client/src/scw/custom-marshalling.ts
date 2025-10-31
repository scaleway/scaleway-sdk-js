import { camelizeKeys, isJSONObject } from '../helpers/json.js'
import {
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../helpers/marshalling.js'
import { fromByteArray } from '../vendor/base64'
import type {
  Money,
  ScwFile,
  ServiceInfo,
  TimeSeries,
  TimeSeriesPoint,
} from './custom-types.js'
import { Decimal } from './custom-types.js'

/**
 * Unmarshals {@link Money}
 *
 * @internal
 */
export const unmarshalMoney = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Money' failed as data isn't a dictionary.`,
    )
  }

  return {
    currencyCode: data.currency_code,
    nanos: data.nanos,
    units: data.units,
  } as Money
}

/**
 * Unmarshals {@link ServiceInfo}.
 *
 * @internal
 */
export const unmarshalServiceInfo = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServiceInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    documentationUrl: data.documentation_url,
    name: data.name,
    version: data.version,
  } as ServiceInfo
}

/**
 * Unmarshals {@link ScwFile}.
 *
 * @internal
 */
export const unmarshalScwFile = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ScwFile' failed as data isn't a dictionary.`,
    )
  }

  return {
    content: data.content,
    contentType: data.content_type,
    name: data.name,
  } as ScwFile
}

/**
 * Unmarshals {@link TimeSeriesPoint}
 *
 * @remarks To optimize the size of this message,
 * the JSON is compressed in an array instead of a dictionary.
 * Example: `["2019-08-08T15:00:00Z", 0.2]`.
 *
 * @internal
 */
export const unmarshalTimeSeriesPoint = (data: unknown) => {
  if (!Array.isArray(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TimeSeriesPoint' failed as data isn't an array.`,
    )
  }

  return {
    timestamp: unmarshalDate(data[0]),
    value: data[1] as number,
  } as TimeSeriesPoint
}

/**
 * Unmarshals {@link TimeSeries}
 *
 * @internal
 */
export const unmarshalTimeSeries = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TimeSeries' failed as data isn't a dictionary.`,
    )
  }

  return {
    metadata: data.metadata,
    name: data.name,
    points: unmarshalArrayOfObject(data.points, unmarshalTimeSeriesPoint),
  } as TimeSeries
}

/**
 * Unmarshals {@link Decimal}
 *
 * @internal
 */
export const unmarshalDecimal = (data: unknown) => {
  if (!(typeof data === 'object')) {
    throw new TypeError(
      `Unmarshalling the type 'Decimal' failed as data isn't an object.`,
    )
  }
  if (data === null) {
    return null
  }

  if (!('value' in data)) {
    throw new TypeError(
      `Unmarshalling the type 'Decimal' failed as data object does not have a 'value' key.`,
    )
  }

  if (!(typeof data.value === 'string')) {
    throw new TypeError(
      `Unmarshalling the type 'Decimal' failed as 'value' is not a string.`,
    )
  }

  return new Decimal(data.value)
}

/**
 * Marshals {@link ScwFile}.
 *
 * @internal
 */
export const marshalScwFile = (obj: ScwFile): Record<string, unknown> => ({
  content: obj.content,
  content_type: obj.contentType,
  name: obj.name,
})

/**
 * Marshals {@link Blob}.
 *
 * @internal
 */
export const marshalBlobToScwFile = async (
  blob: Blob,
): Promise<Record<string, unknown>> => ({
  content: fromByteArray(new Uint8Array(await blob.arrayBuffer())),
  content_type: blob.type,
  name: 'file',
})

/**
 * Marshals {@link Money}
 *
 * @internal
 */
export const marshalMoney = (obj: Money): Record<string, unknown> => ({
  currency_code: obj.currencyCode,
  nanos: obj.nanos,
  units: obj.units,
})

/**
 * Marshals {@link TimeSeriesPoint}
 *
 * @internal
 */
export const marshalTimeSeriesPoint = (
  obj: TimeSeriesPoint,
): Record<string, unknown> => ({
  timestamp: obj.timestamp?.toISOString(),
  value: obj.value,
})

/**
 * Marshals {@link TimeSeries}
 *
 * @internal
 */
export const marshalTimeSeries = (
  obj: TimeSeries,
): Record<string, unknown> => ({
  metadata: obj.metadata,
  name: obj.name,
  points: obj.points.map(elt => marshalTimeSeriesPoint(elt)),
})

/**
 * Marshals {@link Decimal}
 *
 * @internal
 */
export const marshalDecimal = (obj: Decimal): { value: string } => ({
  value: obj.toString(),
})

/**
 * Unmarshals record to convert iso dates from string to Dates.
 *
 * @param obj - The input
 * @param keys - The keys requiring a conversion
 * @returns The updated input
 *
 * @internal
 */
export const unmarshalDates = <T>(obj: unknown, keys: string[]): T => {
  if (Array.isArray(obj)) {
    return obj.map(v => unmarshalDates(v, keys)) as unknown as T
  }

  if (obj && typeof obj === 'object') {
    const result: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(obj)) {
      result[key] =
        typeof value === 'string' && keys.includes(key)
          ? new Date(value)
          : unmarshalDates(value, keys)
    }
    return result as T
  }

  return obj as T
}

/**
 * Unmarshals input to a record with camilized keys and instanciated Date.
 *
 * @param obj - The input
 * @param ignoreKeys - The keys which should be not be transformed
 * @param dateKeys - The keys which should be transformed to Date
 * @returns The record
 *
 * @throws TypeError
 * Thrown if the input isn't {@link JSONObject}.
 *
 * @internal
 */
export const unmarshalAnyRes = <T>(
  obj: unknown,
  ignoreKeys: string[] = [],
  dateKeys?: string[],
): T => {
  if (!isJSONObject(obj)) {
    throw new TypeError(`Data isn't a dictionary.`)
  }

  return camelizeKeys(
    dateKeys && dateKeys.length > 0 ? unmarshalDates(obj, dateKeys) : obj,
    ignoreKeys,
  )
}
