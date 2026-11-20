/**
 * Error thrown when the HTTP layer receives a value that is not a {@link Response}.
 *
 * @internal
 */
export class InvalidResponseError extends Error {
  public constructor(message = 'Invalid response object') {
    super(message)
    this.name = 'InvalidResponseError'
  }
}
