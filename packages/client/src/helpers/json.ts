/* biome-ignore lint/style/useNamingConvention: public alias intended as JSON shape */
export type JSON =
  | string
  | number
  | boolean
  | null
  | JSON[]
  | { [key: string]: JSON }

export interface JSONObject {
  [key: string]: JSON
}

export const isJSON = (obj: unknown): obj is JSON => {
  const objT: string = typeof obj

  return (
    obj !== undefined &&
    (obj === null ||
      objT === 'string' ||
      objT === 'number' ||
      objT === 'boolean' ||
      Array.isArray(obj) ||
      objT === 'object')
  )
}

/**
 * Validates an unknown object is a JSON Object.
 *
 * @internal
 */
export const isJSONObject = (obj: unknown): obj is JSONObject => {
  const objT: string = typeof obj

  return (
    obj !== undefined &&
    obj !== null &&
    objT !== 'string' &&
    objT !== 'number' &&
    objT !== 'boolean' &&
    !Array.isArray(obj) &&
    objT === 'object'
  )
}

/**
 * Camelizes a string.
 *
 * @param str - The string to camelize
 * @returns The camelized string
 *
 * @internal
 */
export const camelize = (str: string): string => {
  const strLength = str.length
  if (strLength <= 0) {
    return str
  }
  let out = ''
  for (let capNext = false, index = 0; index < strLength; index += 1) {
    const char = str.charAt(index)
    if (char >= 'a' && char <= 'z') {
      if (capNext) {
        out += char.toUpperCase()
      } else {
        out += char
      }
    } else if (char >= 'A' && char <= 'Z') {
      out += char
    } else if (char >= '0' && char <= '9') {
      out += char
    }
    capNext = char === '_' || char === ' ' || char === '-' || char === '.'
  }

  return out.charAt(0).toLowerCase() + out.substring(1)
}

/**
 * Camelizes keys of an object (deeply).
 *
 * @param obj - The object
 * @param ignoreKeys - The keys to ignore
 * @returns The object with camelized keys
 *
 * @internal
 */
export const camelizeKeys = <T>(
  obj: object | unknown[] | unknown,
  ignoreKeys: string[] = [],
): T => {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v, ignoreKeys)) as unknown as T
  }

  if (obj && typeof obj === 'object' && !(obj instanceof Date)) {
    return Object.entries(obj).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [camelize(key)]: ignoreKeys.includes(key)
          ? (value as unknown)
          : camelizeKeys(value, ignoreKeys),
      }),
      {},
    ) as T
  }

  return obj as T
}
