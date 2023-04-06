// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CaptchaProvider,
  CreateProjectRequest,
  ListProjectsResponse,
  Project,
  UpdateProjectRequest,
} from './types.gen'

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

export const unmarshalCaptchaProvider = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CaptchaProvider' failed as data isn't a dictionary.`,
    )
  }

  return { name: data.name } as CaptchaProvider
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
