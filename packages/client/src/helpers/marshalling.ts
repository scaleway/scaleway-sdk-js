/**
 * Returns the parameter if it's valid as path parameter
 * (string and not empty, or number), else throws an exception.
 *
 * @param name - The parameter name
 * @param param - The parameter value
 * @returns The parameter value
 *
 * @throws TypeError
 * Thrown if the parameter is invalid.
 *
 * @internal
 */
export function validatePathParam(
  name: string,
  param: string | number | undefined,
): string {
  if (typeof param === 'string' && param.length > 0) return param
  if (typeof param === 'number') return param.toString()

  throw new TypeError(`param ${name} cannot be empty in request`)
}

/**
 * Resolves the ideal parameter and value amongst an optional list.
 *
 * @param list - The list to be looking into
 * @param isRequired - If at least one "one-of" should be found, false by default
 * @returns The parameter and value
 *
 * @throws TypeError
 * Thrown if isRequired is true, and no value or default value is specified.
 *
 * @internal
 */
export const resolveOneOf = <T>(
  list: {
    param: string
    value: T | undefined
    default?: T | undefined
  }[],
  isRequired = false,
): Record<string, T> => {
  const elt =
    list.find(obj => obj.value !== undefined) ??
    list.find(obj => obj.default !== undefined)
  const value = elt?.value ?? elt?.default
  if (elt && value !== undefined) {
    return { [elt.param]: value }
  }

  if (isRequired) {
    const keyList = list.map(obj => obj.param).join(' or ')
    throw new TypeError(`one of ${keyList} must be indicated in the request`)
  }

  return {}
}

type URLParameterValue = string | number | boolean | Date | null

/**
 * Filters defined parameters tuples and converts them to URLSearchParams.
 *
 * @param paramTuples - The key/value pairs
 * @returns URLSearchParams
 *
 * @internal
 */
const toParamString = (v: URLParameterValue): string | null => {
  if (v === null) return null
  if (v instanceof Date) return v.toISOString()
  return v.toString()
}

export const urlParams = (
  ...paramTuples: Readonly<
    [string, URLParameterValue | URLParameterValue[] | undefined]
  >[]
) => {
  const params = new URLSearchParams()
  for (const [key, value] of paramTuples) {
    if (typeof key !== 'string' || value == null) continue
    if (Array.isArray(value)) {
      for (const inner of value) {
        const s = toParamString(inner)
        if (s !== null) params.append(key, s)
      }
      continue
    }
    const s = toParamString(value)
    if (s !== null) params.append(key, s)
  }
  return params
}

/**
 * Unmarshals data to Date object.
 *
 * @internal
 */
export const unmarshalDate = (data: unknown): Date | undefined => {
  if (typeof data !== 'string') {
    return undefined
  }
  const date = new Date(data)
  if (Number.isNaN(date.getTime())) {
    return undefined
  }

  return date
}

/**
 * Unmarshals array of object.
 *
 * @internal
 */
export const unmarshalArrayOfObject = <T, B extends boolean>(
  data: unknown,
  unmarshaller: (input: unknown) => T,
  emptyFallback: B = true as B,
): B extends true ? T[] | undefined : T[] => {
  if (!Array.isArray(data)) {
    return (emptyFallback ? [] : undefined) as B extends true
      ? T[] | undefined
      : T[]
  }

  return data.map(elt => unmarshaller(elt))
}

/**
 * Unmarshals map of object.
 *
 * @internal
 */
export const unmarshalMapOfObject = <T, B extends boolean>(
  data: unknown,
  unmarshaller: (input: unknown) => T,
  emptyFallback: B = true as B,
): B extends true ? Record<string, T> | undefined : Record<string, T> => {
  if (
    !data ||
    typeof data !== 'object' ||
    !(data instanceof Object) ||
    Array.isArray(data)
  ) {
    return (emptyFallback ? {} : undefined) as B extends true
      ? Record<string, T> | undefined
      : Record<string, T>
  }

  const out: Record<string, T> = {}
  for (const [key, value] of Object.entries(data)) {
    out[key] = unmarshaller(value)
  }
  return out
}
