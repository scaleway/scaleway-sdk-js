// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  CreateNamespaceRequest,
  Image,
  ListImagesResponse,
  ListNamespacesResponse,
  ListTagsResponse,
  Namespace,
  Tag,
  UpdateImageRequest,
  UpdateNamespaceRequest,
} from './types.gen'

export const unmarshalImage = (data: unknown): Image => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Image' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    namespaceId: data.namespace_id,
    size: data.size,
    status: data.status,
    statusMessage: data.status_message,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    visibility: data.visibility,
  } as Image
}

export const unmarshalNamespace = (data: unknown): Namespace => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Namespace' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    endpoint: data.endpoint,
    id: data.id,
    imageCount: data.image_count,
    isPublic: data.is_public,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    size: data.size,
    status: data.status,
    statusMessage: data.status_message,
    updatedAt: unmarshalDate(data.updated_at),
  } as Namespace
}

export const unmarshalTag = (data: unknown): Tag => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Tag' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    digest: data.digest,
    id: data.id,
    imageId: data.image_id,
    name: data.name,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Tag
}

export const unmarshalListImagesResponse = (
  data: unknown,
): ListImagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListImagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    images: unmarshalArrayOfObject(data.images, unmarshalImage),
    totalCount: data.total_count,
  } as ListImagesResponse
}

export const unmarshalListNamespacesResponse = (
  data: unknown,
): ListNamespacesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNamespacesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    namespaces: unmarshalArrayOfObject(data.namespaces, unmarshalNamespace),
    totalCount: data.total_count,
  } as ListNamespacesResponse
}

export const unmarshalListTagsResponse = (data: unknown): ListTagsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTagsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    tags: unmarshalArrayOfObject(data.tags, unmarshalTag),
    totalCount: data.total_count,
  } as ListTagsResponse
}

export const marshalCreateNamespaceRequest = (
  request: CreateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  is_public: request.isPublic,
  name: request.name || randomName('ns'),
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

export const marshalUpdateImageRequest = (
  request: UpdateImageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  visibility: request.visibility,
})

export const marshalUpdateNamespaceRequest = (
  request: UpdateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  is_public: request.isPublic,
})
