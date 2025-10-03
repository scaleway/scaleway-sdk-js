import { isResponse } from '../../helpers/is-response.js'
import { isJSONObject } from '../../helpers/json.js'
import { parseScalewayError } from '../errors/error-parser.js'
import { ScalewayError } from '../errors/scw-error.js'
import type { ResponseUnmarshaller } from './types.js'

const X_TOTAL_COUNT_HEADER_KEY = 'x-total-count'
const TOTAL_COUNT_RES_KEY = 'total_count'

/**
 * Fixes the totalCount property for old APIs.
 *
 * @internal
 */
export const fixLegacyTotalCount = <T>(obj: T, headers: Headers): T => {
  const headerVal = headers.get(X_TOTAL_COUNT_HEADER_KEY)
  if (!headerVal) {
    return obj
  }
  const totalCount = parseInt(headerVal, 10)
  if (Number.isNaN(totalCount)) {
    return obj
  }
  if (isJSONObject(obj) && !(TOTAL_COUNT_RES_KEY in obj)) {
    return Object.assign(obj, { [TOTAL_COUNT_RES_KEY]: totalCount })
  }

  return obj
}

/**
 * Makes response parser.
 *
 * @param unmarshaller - The response payload unmarshaller
 * @returns An async converter of HTTP Response to desired result
 *
 * @throws {@link ScalewayError}
 * Thrown by the API if the request couldn't be completed.
 *
 * @throws TypeError
 * Thrown if the response parameter isn't of the expected type.
 *
 * @throws Error
 * JSON parsing could trigger an error.
 *
 * @internal
 */
export const responseParser =
  <T>(
    unmarshaller: ResponseUnmarshaller<T>,
    responseType: 'json' | 'text' | 'blob',
  ) =>
  async (response: Response): Promise<T> => {
    if (!isResponse(response)) {
      throw new TypeError('Invalid response object')
    }

    if (response.ok) {
      if (response.status === 204) return unmarshaller(undefined)
      const contentType = response.headers.get('Content-Type')
      try {
        if (responseType === 'json' && contentType === 'application/json') {
          return unmarshaller(
            fixLegacyTotalCount(await response.json(), response.headers),
          )
        }
        if (responseType === 'blob') {
          return unmarshaller(await response.blob())
        }

        return unmarshaller(await response.text())
      } catch (err) {
        throw new ScalewayError(
          response.status,
          `could not parse '${contentType ?? ''}' response${
            err instanceof Error ? `: ${err.message}` : ''
          }`,
        )
      }
    }

    const error: unknown = await response
      .clone()
      .json()
      .catch(() => response.text())

    if (isJSONObject(error)) throw parseScalewayError(response.status, error)

    throw new ScalewayError(
      response.status,
      typeof error === 'string' ? error : 'cannot read error response body',
    )
  }
