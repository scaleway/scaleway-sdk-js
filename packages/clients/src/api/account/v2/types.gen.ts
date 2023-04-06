// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export type CaptchaProviderName =
  | 'unknown_name'
  | 'recaptcha_v2'
  | 'friendly_captcha'
  | 'hcaptcha'

export type ListProjectsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export interface CaptchaProvider {
  name: CaptchaProviderName
}

/** List projects response. */
export interface ListProjectsResponse {
  /** Total number of Projects. */
  totalCount: number
  /** Paginated returned Projects. */
  projects: Project[]
}

/** Project. */
export interface Project {
  /** ID of the Project. */
  id: string
  /** Name of the Project. */
  name: string
  /** Organization ID of the Project. */
  organizationId: string
  /** Creation date of the Project. */
  createdAt?: Date
  /** Update date of the Project. */
  updatedAt?: Date
  /** Description of the Project. */
  description: string
}

export type CreateProjectRequest = {
  /** Name of the Project. */
  name: string
  /** Organization ID of the Project. */
  organizationId?: string
  /** Description of the Project. */
  description?: string
}

export type ListProjectsRequest = {
  /** Organization ID of the Project. */
  organizationId?: string
  /** Name of the Project. */
  name?: string
  /** Page number for the returned Projects. */
  page?: number
  /** Maximum number of Project per page. */
  pageSize?: number
  /** Sort order of the returned Projects. */
  orderBy?: ListProjectsRequestOrderBy
  /**
   * Project IDs to filter for. The results will be limited to any Projects with
   * an ID in this array.
   */
  projectIds?: string[]
}

export type GetProjectRequest = {
  /** Project ID of the Project. */
  projectId?: string
}

export type DeleteProjectRequest = {
  /** Project ID of the Project. */
  projectId?: string
}

export type UpdateProjectRequest = {
  /** Project ID of the Project. */
  projectId?: string
  /** Name of the Project. */
  name?: string
  /** Description of the Project. */
  description?: string
}
