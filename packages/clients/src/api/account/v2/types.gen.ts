// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export type ListMFAOTPsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListProjectsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

/** List mfaot ps response */
export interface ListMFAOTPsResponse {
  /** The total number of MFA OTPs */
  totalCount: number
  /** The paginated returned MFA OTPs */
  mfaOtps: Array<MFAOTP>
}

/** List projects response */
export interface ListProjectsResponse {
  /** The total number of projects */
  totalCount: number
  /** The paginated returned projects */
  projects: Array<Project>
}

/** Mfaotp */
export interface MFAOTP {
  /** The ID of the MFA OTP */
  id: string
}

/** Project */
export interface Project {
  /** The ID of the project */
  id: string
  /** The name of the project */
  name: string
  /** The organization ID of the project */
  organizationId: string
  /** The creation date of the project */
  createdAt?: Date
  /** The update date of the project */
  updatedAt?: Date
  /** The description of the project */
  description: string
}

/** Validate mfaotp response */
export interface ValidateMFAOTPResponse {
  /** The backup codes of the MFA OTP */
  backupCodes: Array<string>
}

export type CreateProjectRequest = {
  /** The name of the project */
  name: string
  /** The organization ID of the project */
  organizationId?: string
  /** The description of the project */
  description?: string
}

export type ListProjectsRequest = {
  /** The organization ID of the project */
  organizationId?: string
  /** The name of the project */
  name?: string
  /** The page number for the returned projects */
  page?: number
  /** The maximum number of project per page */
  pageSize?: number
  /** The sort order of the returned projects */
  orderBy?: ListProjectsRequestOrderBy
  /** Filter out by a list of project ID */
  projectIds?: Array<string>
}

export type GetProjectRequest = {
  /** The project ID of the project */
  projectId?: string
}

export type DeleteProjectRequest = {
  /** The project ID of the project */
  projectId?: string
}

export type UpdateProjectRequest = {
  /** The project ID of the project */
  projectId?: string
  /** The name of the project */
  name?: string
  /** The description of the project */
  description?: string
}

export type ListMFAOTPsRequest = {
  /** The page number for the returned MFA OTPs */
  page?: number
  /** The maximum number of MFA OTP per page */
  pageSize?: number
  /** The sort order of the returned MFA OTPs */
  orderBy?: ListMFAOTPsRequestOrderBy
  /** Filter out by a account root user ID */
  accountRootUserId: string
}

export type CreateMFAOTPRequest = {
  /** The account root user ID of the MFA OTP */
  accountRootUserId: string
}

export type ValidateMFAOTPRequest = {
  /** The MFA OTP ID */
  mfaOtpId: string
  /** The code of the MFA OTP */
  otp: string
}

export type DeleteMFAOTPRequest = {
  /** The MFA OTP ID */
  mfaOtpId: string
}
