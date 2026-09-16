import { isJSONObject } from '../../helpers/json.js'

/**
 * Verifies the object is a record of string to string[].
 *
 * @param obj - The object
 * @returns Whether the object is of the expected type
 *
 * @internal
 */
export const isRecordOfStringArray = (obj: Readonly<unknown>): obj is Record<string, string[]> => {
  if (!isJSONObject(obj)) {
    return false
  }
  for (const elt of Object.values(obj)) {
    if (!Array.isArray(elt) || Object.values(elt).some(x => typeof x !== 'string')) {
      return false
    }
  }

  return true
}
