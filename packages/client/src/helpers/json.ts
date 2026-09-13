// oxlint-disable-next-line typescript/consistent-indexed-object-style -- recursive type cannot use Record<string, JSON> (TS2456 circular reference)
export type JSON = string | number | boolean | null | JSON[] | { [key: string]: JSON }

export interface JSONObject {
  // oxlint-disable-next-line typescript/consistent-indexed-object-style -- recursive type cannot use Record<string, JSON> (TS2456 circular reference)
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
export const camelizeKeys = <T>(obj: object | unknown[] | unknown, ignoreKeys: string[] = []): T => {
  if (Array.isArray(obj)) {
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- generic mapping result cannot be inferred as T
    return obj.map(v => camelizeKeys(v, ignoreKeys)) as unknown as T
  }

  if (obj && typeof obj === 'object' && !(obj instanceof Date)) {
    const result: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(obj)) {
      const outKey = camelize(key)
      result[outKey] = ignoreKeys.includes(key) ? (value as unknown) : camelizeKeys(value, ignoreKeys)
    }
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- built object keys are camelized, cast back to T
    return result as T
  }

  // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- primitive/date value passes through unchanged as T
  return obj as T
}
