import type { DefaultValues } from '@scaleway/sdk-client'
import { isJSONObject, unmarshalArrayOfObject, unmarshalDate, unmarshalMoney } from '@scaleway/sdk-client'
import type {
  Attachment,
  CreateFileSystemRequest,
  FileSystem,
  FileSystemType,
  ListAttachmentsResponse,
  ListFileSystemsResponse,
  ListFileSystemTypesResponse,
  UpdateFileSystemRequest,
} from './types.gen.js'

export const unmarshalFileSystem = (data: unknown): FileSystem => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Unmarshalling the type 'FileSystem' failed as data isn't a dictionary.`)
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    filesystemTypeId: data.filesystem_type_id,
    id: data.id,
    name: data.name,
    numberOfAttachments: data.number_of_attachments,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    size: data.size,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as FileSystem
}

const unmarshalAttachment = (data: unknown): Attachment => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Unmarshalling the type 'Attachment' failed as data isn't a dictionary.`)
  }

  return {
    filesystemId: data.filesystem_id,
    id: data.id,
    resourceId: data.resource_id,
    resourceType: data.resource_type,
    zone: data.zone,
  } as Attachment
}

export const unmarshalListAttachmentsResponse = (data: unknown): ListAttachmentsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Unmarshalling the type 'ListAttachmentsResponse' failed as data isn't a dictionary.`)
  }

  return {
    attachments: unmarshalArrayOfObject(data.attachments, unmarshalAttachment),
    totalCount: data.total_count,
  } as ListAttachmentsResponse
}

const unmarshalFileSystemType = (data: unknown): FileSystemType => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Unmarshalling the type 'FileSystemType' failed as data isn't a dictionary.`)
  }

  return {
    filesystemPriceGbPerHour: data.filesystem_price_gb_per_hour
      ? unmarshalMoney(data.filesystem_price_gb_per_hour)
      : undefined,
    name: data.name,
    snapshotPriceGbPerHour: data.snapshot_price_gb_per_hour
      ? unmarshalMoney(data.snapshot_price_gb_per_hour)
      : undefined,
  } as FileSystemType
}

export const unmarshalListFileSystemTypesResponse = (data: unknown): ListFileSystemTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Unmarshalling the type 'ListFileSystemTypesResponse' failed as data isn't a dictionary.`)
  }

  return {
    filesystemTypes: unmarshalArrayOfObject(data.filesystem_types, unmarshalFileSystemType),
    totalCount: data.total_count,
  } as ListFileSystemTypesResponse
}

export const unmarshalListFileSystemsResponse = (data: unknown): ListFileSystemsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Unmarshalling the type 'ListFileSystemsResponse' failed as data isn't a dictionary.`)
  }

  return {
    filesystems: unmarshalArrayOfObject(data.filesystems, unmarshalFileSystem),
    totalCount: data.total_count,
  } as ListFileSystemsResponse
}

export const marshalCreateFileSystemRequest = (
  request: CreateFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  size: request.size,
  tags: request.tags,
  type: request.type,
})

export const marshalUpdateFileSystemRequest = (
  request: UpdateFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  size: request.size,
  tags: request.tags,
})
