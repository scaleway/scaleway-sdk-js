/**
 * Validates an object is of type Response without using `instanceof`.
 *
 * @internal
 */
export const isResponse = (value: unknown): value is Response =>
  value !== null &&
  value !== undefined &&
  typeof value === 'object' &&
  'status' in value &&
  typeof value.status === 'number' &&
  'statusText' in value &&
  typeof value.statusText === 'string' &&
  'headers' in value &&
  typeof value.headers === 'object' &&
  'body' in value &&
  typeof value.body !== 'undefined'
