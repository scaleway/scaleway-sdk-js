// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, marshalBlobToScwFile, marshalDecimal, marshalMoney, marshalScwFile, marshalTimeSeries, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalDecimal, unmarshalMapOfObject, unmarshalMoney, unmarshalScwFile, unmarshalServiceInfo, unmarshalTimeSeries, unmarshalTimeSeriesPoint } from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, DefaultValues } from '@scaleway/sdk-client'
import type {
  FileSystem,
  SnapshotParentFilesystem,
  Snapshot,
  Attachment,
  ListAttachmentsResponse,
  FileSystemType,
  ListFileSystemTypesResponse,
  ListFileSystemsResponse,
  ListSnapshotsResponse,
  CreateFileSystemRequest,
  CreateSnapshotRequest,
  UpdateFileSystemRequest,
  UpdateSnapshotRequest,
} from './types.gen.js'

export const unmarshalFileSystem = (data: unknown): FileSystem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FileSystem' failed as data isn't a dictionary.`,
    )
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
    srn: data.srn,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as FileSystem
}

const unmarshalSnapshotParentFilesystem = (data: unknown): SnapshotParentFilesystem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnapshotParentFilesystem' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as SnapshotParentFilesystem
}

export const unmarshalSnapshot = (data: unknown): Snapshot => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Snapshot' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    parentFilesystem: data.parent_filesystem ? unmarshalSnapshotParentFilesystem(data.parent_filesystem) : undefined,
    projectId: data.project_id,
    region: data.region,
    size: data.size,
    srn: data.srn,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Snapshot
}

const unmarshalAttachment = (data: unknown): Attachment => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Attachment' failed as data isn't a dictionary.`,
    )
  }

  return {
    filesystemId: data.filesystem_id,
    id: data.id,
    region: data.region,
    resourceId: data.resource_id,
    resourceType: data.resource_type,
    srn: data.srn,
    zone: data.zone,
  } as Attachment
}

export const unmarshalListAttachmentsResponse = (data: unknown): ListAttachmentsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAttachmentsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    attachments: unmarshalArrayOfObject(data.attachments, unmarshalAttachment),
    totalCount: data.total_count,
  } as ListAttachmentsResponse
}

const unmarshalFileSystemType = (data: unknown): FileSystemType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FileSystemType' failed as data isn't a dictionary.`,
    )
  }

  return {
    filesystemPriceGbPerHour: data.filesystem_price_gb_per_hour ? unmarshalMoney(data.filesystem_price_gb_per_hour) : undefined,
    name: data.name,
    snapshotPriceGbPerHour: data.snapshot_price_gb_per_hour ? unmarshalMoney(data.snapshot_price_gb_per_hour) : undefined,
  } as FileSystemType
}

export const unmarshalListFileSystemTypesResponse = (data: unknown): ListFileSystemTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFileSystemTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    filesystemTypes: unmarshalArrayOfObject(data.filesystem_types, unmarshalFileSystemType),
    totalCount: data.total_count,
  } as ListFileSystemTypesResponse
}

export const unmarshalListFileSystemsResponse = (data: unknown): ListFileSystemsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFileSystemsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    filesystems: unmarshalArrayOfObject(data.filesystems, unmarshalFileSystem),
    totalCount: data.total_count,
  } as ListFileSystemsResponse
}

export const unmarshalListSnapshotsResponse = (data: unknown): ListSnapshotsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSnapshotsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshots: unmarshalArrayOfObject(data.snapshots, unmarshalSnapshot),
    totalCount: data.total_count,
  } as ListSnapshotsResponse
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

export const marshalCreateSnapshotRequest = (
  request: CreateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  filesystem_id: request.filesystemId,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalUpdateFileSystemRequest = (
  request: UpdateFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  size: request.size,
  tags: request.tags,
})

export const marshalUpdateSnapshotRequest = (
  request: UpdateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})
