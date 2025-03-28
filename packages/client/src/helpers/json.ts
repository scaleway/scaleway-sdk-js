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
