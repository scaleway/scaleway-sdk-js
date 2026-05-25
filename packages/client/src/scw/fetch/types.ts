/** Scaleway Request. */
export interface ScwRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  headers?: Record<string, string>
  body?: string
  urlParams?: URLSearchParams
  responseType?: 'json' | 'text' | 'blob'
  /**
   * When true, ensures Modern IAM compliance for listing methods by injecting
   * `defaultOrganizationId` if neither `organization_id` nor `project_id` is
   * already present in the request's URL parameters.
   */
  miamScopeGuard?: boolean
}

/**
 * A factory to unmarshal a response.
 *
 * @param obj - The input object.
 * @returns The output object
 */
export type ResponseUnmarshaller<T> = (obj: unknown) => T
