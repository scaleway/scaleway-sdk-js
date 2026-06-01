/** Scaleway Request. */
export interface ScwRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  headers?: Record<string, string>
  body?: string
  urlParams?: URLSearchParams
  responseType?: 'json' | 'text' | 'blob'
  /**
   * Enables the Modern IAM scope guard for listing methods.
   * - `'org'`: injects `defaultOrganizationId` if neither `organization_id` nor
   *   `project_id` is already present in the URL parameters.
   * - `'project'`: injects `defaultProjectId` if neither `project_id` nor
   *   `organization_id` is already present in the URL parameters.
   */
  listScopeGuard?: 'org' | 'project'
}

/**
 * A factory to unmarshal a response.
 *
 * @param obj - The input object.
 * @returns The output object
 */
export type ResponseUnmarshaller<T> = (obj: unknown) => T
