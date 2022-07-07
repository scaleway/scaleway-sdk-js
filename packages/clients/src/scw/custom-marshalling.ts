import { isJSONObject } from '../helpers/json'
import { unmarshalArrayOfObject, unmarshalDate } from '../helpers/marshalling'
import type {
  Money,
  ScwFile,
  ServiceInfo,
  TimeSeries,
  TimeSeriesPoint,
} from './custom-types'

/** Unmarshals {@link Money} */
export const unmarshalMoney = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Expected input isn't a dictionary.`)
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
    throw new TypeError(`Expected input isn't a dictionary.`)
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
    throw new TypeError(`Expected input isn't a dictionary.`)
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
 * @internal
 */
export const unmarshalTimeSeriesPoint = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Expected input isn't a dictionary.`)
  }

  return {
    timestamp: unmarshalDate(data.timestamp),
    value: data.value,
  } as TimeSeriesPoint
}

/**
 * Unmarshals {@link TimeSeries}
 *
 * @internal
 */
export const unmarshalTimeSeries = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Expected input isn't a dictionary.`)
  }

  return {
    metadata: data.metadata,
    name: data.name,
    points: unmarshalArrayOfObject(data.points, unmarshalTimeSeriesPoint),
  } as TimeSeries
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
