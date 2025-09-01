// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '@scaleway/sdk-client'
import type {
  CreateSnapshotRequest,
  CreateVolumeRequest,
  CreateVolumeRequestFromEmpty,
  CreateVolumeRequestFromSnapshot,
  ExportSnapshotToObjectStorageRequest,
  ImportSnapshotFromObjectStorageRequest,
  ListSnapshotsResponse,
  ListVolumeTypesResponse,
  ListVolumesResponse,
  Reference,
  Snapshot,
  SnapshotParentVolume,
  UpdateSnapshotRequest,
  UpdateVolumeRequest,
  Volume,
  VolumeSpecifications,
  VolumeType,
} from './types.gen'

export const unmarshalReference = (data: unknown): Reference => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Reference' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    productResourceId: data.product_resource_id,
    productResourceType: data.product_resource_type,
    status: data.status,
    type: data.type,
  } as Reference
}

const unmarshalSnapshotParentVolume = (data: unknown): SnapshotParentVolume => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnapshotParentVolume' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
    status: data.status,
    type: data.type,
  } as SnapshotParentVolume
}

export const unmarshalSnapshot = (data: unknown): Snapshot => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Snapshot' failed as data isn't a dictionary.`,
    )
  }

  return {
    class: data.class,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    parentVolume: data.parent_volume
      ? unmarshalSnapshotParentVolume(data.parent_volume)
      : undefined,
    projectId: data.project_id,
    references: unmarshalArrayOfObject(data.references, unmarshalReference),
    size: data.size,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as Snapshot
}

const unmarshalVolumeSpecifications = (data: unknown): VolumeSpecifications => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeSpecifications' failed as data isn't a dictionary.`,
    )
  }

  return {
    class: data.class,
    perfIops: data.perf_iops,
  } as VolumeSpecifications
}

export const unmarshalVolume = (data: unknown): Volume => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Volume' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    lastDetachedAt: unmarshalDate(data.last_detached_at),
    name: data.name,
    parentSnapshotId: data.parent_snapshot_id,
    projectId: data.project_id,
    references: unmarshalArrayOfObject(data.references, unmarshalReference),
    size: data.size,
    specs: data.specs ? unmarshalVolumeSpecifications(data.specs) : undefined,
    status: data.status,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as Volume
}

export const unmarshalListSnapshotsResponse = (
  data: unknown,
): ListSnapshotsResponse => {
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

const unmarshalVolumeType = (data: unknown): VolumeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    pricing: data.pricing ? unmarshalMoney(data.pricing) : undefined,
    snapshotPricing: data.snapshot_pricing
      ? unmarshalMoney(data.snapshot_pricing)
      : undefined,
    specs: data.specs ? unmarshalVolumeSpecifications(data.specs) : undefined,
    type: data.type,
  } as VolumeType
}

export const unmarshalListVolumeTypesResponse = (
  data: unknown,
): ListVolumeTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVolumeTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    volumeTypes: unmarshalArrayOfObject(data.volume_types, unmarshalVolumeType),
  } as ListVolumeTypesResponse
}

export const unmarshalListVolumesResponse = (
  data: unknown,
): ListVolumesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVolumesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    volumes: unmarshalArrayOfObject(data.volumes, unmarshalVolume),
  } as ListVolumesResponse
}

export const marshalCreateSnapshotRequest = (
  request: CreateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('snp'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  volume_id: request.volumeId,
})

const marshalCreateVolumeRequestFromEmpty = (
  request: CreateVolumeRequestFromEmpty,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  size: request.size,
})

const marshalCreateVolumeRequestFromSnapshot = (
  request: CreateVolumeRequestFromSnapshot,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  size: request.size,
  snapshot_id: request.snapshotId,
})

export const marshalCreateVolumeRequest = (
  request: CreateVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('vol'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  ...resolveOneOf([
    {
      param: 'from_empty',
      value:
        request.fromEmpty !== undefined
          ? marshalCreateVolumeRequestFromEmpty(request.fromEmpty, defaults)
          : undefined,
    },
    {
      param: 'from_snapshot',
      value:
        request.fromSnapshot !== undefined
          ? marshalCreateVolumeRequestFromSnapshot(
              request.fromSnapshot,
              defaults,
            )
          : undefined,
    },
  ]),
  ...resolveOneOf([{ param: 'perf_iops', value: request.perfIops }]),
})

export const marshalExportSnapshotToObjectStorageRequest = (
  request: ExportSnapshotToObjectStorageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket: request.bucket,
  key: request.key,
})

export const marshalImportSnapshotFromObjectStorageRequest = (
  request: ImportSnapshotFromObjectStorageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket: request.bucket,
  key: request.key,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
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

export const marshalUpdateVolumeRequest = (
  request: UpdateVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  perf_iops: request.perfIops,
  size: request.size,
  tags: request.tags,
})
