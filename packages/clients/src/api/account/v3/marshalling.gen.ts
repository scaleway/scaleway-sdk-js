// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  ListProjectsResponse,
  Project,
  ProjectApiCreateProjectRequest,
  ProjectApiUpdateProjectRequest,
} from './types.gen'

export const unmarshalProject = (data: unknown): Project => {
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

export const unmarshalListProjectsResponse = (
  data: unknown,
): ListProjectsResponse => {
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

export const marshalProjectApiCreateProjectRequest = (
  request: ProjectApiCreateProjectRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name || randomName('proj'),
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
})

export const marshalProjectApiUpdateProjectRequest = (
  request: ProjectApiUpdateProjectRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
})
