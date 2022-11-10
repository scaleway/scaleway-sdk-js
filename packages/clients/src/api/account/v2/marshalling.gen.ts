// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateMFAOTPRequest,
  CreateProjectRequest,
  ListMFAOTPsResponse,
  ListProjectsResponse,
  MFAOTP,
  Project,
  UpdateProjectRequest,
  ValidateMFAOTPRequest,
  ValidateMFAOTPResponse,
} from './types.gen'

export const unmarshalMFAOTP = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MFAOTP' failed as data isn't a dictionary.`,
    )
  }

  return { id: data.id } as MFAOTP
}

export const unmarshalProject = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Project' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    updatedAt: unmarshalDate(data.updated_at),
  } as Project
}

export const unmarshalListMFAOTPsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListMFAOTPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    mfaOtps: unmarshalArrayOfObject(data.mfa_otps, unmarshalMFAOTP),
    totalCount: data.total_count,
  } as ListMFAOTPsResponse
}

export const unmarshalListProjectsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListProjectsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    projects: unmarshalArrayOfObject(data.projects, unmarshalProject),
    totalCount: data.total_count,
  } as ListProjectsResponse
}

export const unmarshalValidateMFAOTPResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ValidateMFAOTPResponse' failed as data isn't a dictionary.`,
    )
  }

  return { backupCodes: data.backup_codes } as ValidateMFAOTPResponse
}

export const marshalCreateMFAOTPRequest = (
  request: CreateMFAOTPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  account_root_user_id: request.accountRootUserId,
})

export const marshalCreateProjectRequest = (
  request: CreateProjectRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
})

export const marshalUpdateProjectRequest = (
  request: UpdateProjectRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
})

export const marshalValidateMFAOTPRequest = (
  request: ValidateMFAOTPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  otp: request.otp,
})
