import type { JSONObject } from '../../../helpers/json.js'
import { ScalewayError } from '../scw-error.js'

/**
 * Options for {@link AlreadyExistsError}.
 *
 * @public
 */
export type AlreadyExistsErrorOptions = {
  resource: string
  resourceId: string
  helpMessage: string
}

/**
 * AlreadyExists error is used when a resource already exists.
 *
 * @public
 */
export class AlreadyExistsError extends ScalewayError {
  public readonly status: number
  public readonly body: JSONObject
  public readonly resource: string
  public readonly resourceId: string
  public readonly helpMessage: string

  public constructor(status: number, body: JSONObject, options: AlreadyExistsErrorOptions) {
    super(
      status,
      body,
      `resource ${options.resource} with ID ${options.resourceId} already exists: ${options.helpMessage}`,
    )
    this.status = status
    this.body = body
    this.name = 'AlreadyExistsError'
    this.resource = options.resource
    this.resourceId = options.resourceId
    this.helpMessage = options.helpMessage
  }

  public static fromJSON(status: number, obj: Readonly<JSONObject>) {
    if (
      typeof obj.resource !== 'string' ||
      typeof obj.resource_id !== 'string' ||
      typeof obj.help_message !== 'string'
    ) {
      return null
    }

    return new AlreadyExistsError(status, obj, {
      resource: obj.resource,
      resourceId: obj.resource_id,
      helpMessage: obj.help_message,
    })
  }
}
