/**
 * Validates an object is of type Response without using `instanceof`.
 *
 * @internal
 */
export const isResponse = (obj: unknown): obj is Response =>
  obj !== null &&
  obj !== undefined &&
  typeof obj === 'object' &&
  'status' in obj &&
  typeof obj.status === 'number' &&
  'statusText' in obj &&
  typeof obj.statusText === 'string' &&
  'headers' in obj &&
  typeof obj.headers === 'object' &&
  'body' in obj &&
  typeof obj.body !== 'undefined'
