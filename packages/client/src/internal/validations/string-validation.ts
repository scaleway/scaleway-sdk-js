const isAccessKeyRegex = /^SCW[A-Z0-9]{17}$/i
const isEmailRegex = /^.+@.+$/i
const isRegionRegex = /^[a-z]{2}-[a-z]{3}$/i
const isUUIDRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i
const isZoneRegex = /^[a-z]{2}-[a-z]{3}-[1-9]$/i

/** Returns true if the given string has a valid UUID format. */
export const isUUID = (str: string): boolean => isUUIDRegex.test(str)

/** Returns true if the given string has a valid Scaleway access key format. */
export const isAccessKey = (str: string): boolean => isAccessKeyRegex.test(str)

/** Returns true if the given string has a valid Scaleway secret key format. */
export const isSecretKey = (str: string): boolean => isUUID(str)

/** Returns true if the given string has a valid Scaleway organization ID format. */
export const isOrganizationId = (str: string): boolean => isUUID(str)

/** Returns true if the given string has a valid Scaleway project ID format. */
export const isProjectId = (str: string): boolean => isUUID(str)

/** Returns true if the given string has a valid region format. */
export const isRegion = (str: string): boolean => isRegionRegex.test(str)

/** Returns true if the given string has a valid zone format. */
export const isZone = (str: string): boolean => isZoneRegex.test(str)

/** Returns true if the given string has a valid URL format and starts by `http(s):`. */
export const isURL = (str: string): boolean => {
  let url: URL
  try {
    url = new URL(str)
  } catch {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}

/** Returns true if the given string has an email format. */
export const isEmail = (str: string): boolean => isEmailRegex.test(str)
