// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Zone as ScwZone } from '@scaleway/sdk-client'

export type ListSnapshotsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListVolumesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ReferenceStatus =
  | 'unknown_status'
  | 'attaching'
  | 'attached'
  | 'detaching'
  | 'detached'
  | 'creating'
  | 'error'

export type ReferenceType = 'unknown_type' | 'link' | 'exclusive' | 'read_only'

export type SnapshotStatus =
  | 'unknown_status'
  | 'creating'
  | 'available'
  | 'error'
  | 'deleting'
  | 'deleted'
  | 'in_use'
  | 'locked'
  | 'exporting'

export type StorageClass =
  | 'unknown_storage_class'
  | 'unspecified'
  | 'bssd'
  | 'sbs'

export type VolumeStatus =
  | 'unknown_status'
  | 'creating'
  | 'available'
  | 'in_use'
  | 'deleting'
  | 'deleted'
  | 'resizing'
  | 'error'
  | 'snapshotting'
  | 'locked'
  | 'updating'

export interface Reference {
  /**
   * UUID of the reference.
   */
  id: string
  /**
   * Type of resource to which the reference is associated.
   */
  productResourceType: string
  /**
   * UUID of the product resource it refers to (according to the product_resource_type).
   */
  productResourceId: string
  /**
   * Creation date of the reference.
   */
  createdAt?: Date
  /**
   * Type of reference (link, exclusive, read_only).
   */
  type: ReferenceType
  /**
   * Status of the reference. Statuses include `attaching`, `attached`, and `detaching`.
   */
  status: ReferenceStatus
}

export interface SnapshotParentVolume {
  /**
   * Parent volume UUID (volume from which the snapshot originates).
   */
  id: string
  /**
   * Name of the parent volume.
   */
  name: string
  /**
   * Volume type of the parent volume.
   */
  type: string
  /**
   * Current status the parent volume.
   */
  status: VolumeStatus
}

export interface VolumeSpecifications {
  /**
   * The maximum IO/s expected, according to the different options available in stock (`5000 | 15000`).
   */
  perfIops?: number
  /**
   * The storage class of the volume.
   */
  class: StorageClass
}

export interface CreateVolumeRequestFromEmpty {
  /**
   * Must be compliant with the minimum (1 GB) and maximum (10 TB) allowed size.
   */
  size: number
}

export interface CreateVolumeRequestFromSnapshot {
  /**
   * Must be compliant with the minimum (1 GB) and maximum (10 TB) allowed size.
Size is optional and is used only if a resize of the volume is requested, otherwise original snapshot size will be used.
   */
  size?: number
  /**
   * Source snapshot from which volume will be created.
   */
  snapshotId: string
}

export interface Snapshot {
  /**
   * UUID of the snapshot.
   */
  id: string
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * If the parent volume was deleted, value is null.
   */
  parentVolume?: SnapshotParentVolume
  /**
   * Size in bytes of the snapshot.
   */
  size: number
  /**
   * UUID of the project the snapshot belongs to.
   */
  projectId: string
  /**
   * Creation date of the snapshot.
   */
  createdAt?: Date
  /**
   * Last modification date of the properties of a snapshot.
   */
  updatedAt?: Date
  /**
   * List of the references to the snapshot.
   */
  references: Reference[]
  /**
   * Current status of the snapshot (available, in_use, ...).
   */
  status: SnapshotStatus
  /**
   * List of tags assigned to the volume.
   */
  tags: string[]
  /**
   * Snapshot zone.
   */
  zone: ScwZone
  /**
   * Storage class of the snapshot.
   */
  class: StorageClass
}

export interface VolumeType {
  /**
   * Volume type.
   */
  type: string
  /**
   * Price of the volume billed in GB/hour.
   */
  pricing?: Money
  /**
   * Price of the snapshot billed in GB/hour.
   */
  snapshotPricing?: Money
  /**
   * Volume specifications of the volume type.
   */
  specs?: VolumeSpecifications
}

export interface Volume {
  /**
   * UUID of the volume.
   */
  id: string
  /**
   * Name of the volume.
   */
  name: string
  /**
   * Volume type.
   */
  type: string
  /**
   * Volume size in bytes.
   */
  size: number
  /**
   * UUID of the project to which the volume belongs.
   */
  projectId: string
  /**
   * Creation date of the volume.
   */
  createdAt?: Date
  /**
   * Last update of the properties of a volume.
   */
  updatedAt?: Date
  /**
   * List of the references to the volume.
   */
  references: Reference[]
  /**
   * When a volume is created from a snapshot, is the UUID of the snapshot from which the volume has been created.
   */
  parentSnapshotId?: string
  /**
   * Current status of the volume (available, in_use, ...).
   */
  status: VolumeStatus
  /**
   * List of tags assigned to the volume.
   */
  tags: string[]
  /**
   * Volume zone.
   */
  zone: ScwZone
  /**
   * Specifications of the volume.
   */
  specs?: VolumeSpecifications
  /**
   * Last time the volume was detached.
   */
  lastDetachedAt?: Date
}

export type CreateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the volume to snapshot.
   */
  volumeId: string
  /**
   * Name of the snapshot.
   */
  name?: string
  /**
   * UUID of the project to which the volume and the snapshot belong.
   */
  projectId?: string
  /**
   * List of tags assigned to the snapshot.
   */
  tags?: string[]
}

export type CreateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Name of the volume.
   */
  name?: string
  /**
   * The maximum IO/s expected, according to the different options available in stock (`5000 | 15000`).
   *
   * One-of ('requirements'): at most one of 'perfIops' could be set.
   */
  perfIops?: number
  /**
   * UUID of the project the volume belongs to.
   */
  projectId?: string
  /**
   * Specify the size of the new volume if creating a new one from scratch.
   *
   * One-of ('from'): at most one of 'fromEmpty', 'fromSnapshot' could be set.
   */
  fromEmpty?: CreateVolumeRequestFromEmpty
  /**
   * Specify the snapshot ID of the original snapshot.
   *
   * One-of ('from'): at most one of 'fromEmpty', 'fromSnapshot' could be set.
   */
  fromSnapshot?: CreateVolumeRequestFromSnapshot
  /**
   * List of tags assigned to the volume.
   */
  tags?: string[]
}

export type DeleteSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
}

export type DeleteVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the volume.
   */
  volumeId: string
}

export type ExportSnapshotToObjectStorageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
  /**
   * Scaleway Object Storage bucket where the object is stored.
   */
  bucket: string
  /**
   * The object key inside the given bucket.
   */
  key: string
}

export type GetSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
}

export type GetVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the volume.
   */
  volumeId: string
}

export type ImportSnapshotFromObjectStorageRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Scaleway Object Storage bucket where the object is stored.
   */
  bucket: string
  /**
   * The object key inside the given bucket.
   */
  key: string
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * UUID of the Project to which the volume and the snapshot belong.
   */
  projectId?: string
  /**
   * List of tags assigned to the snapshot.
   */
  tags?: string[]
  /**
   * Size of the snapshot.
   */
  size?: number
}

export type ImportSnapshotFromS3Request = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Scaleway Object Storage bucket where the object is stored.
   */
  bucket: string
  /**
   * The object key inside the given bucket.
   */
  key: string
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * UUID of the Project to which the volume and the snapshot belong.
   */
  projectId?: string
  /**
   * List of tags assigned to the snapshot.
   */
  tags?: string[]
  /**
   * Size of the snapshot.
   */
  size?: number
}

export type ListSnapshotsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Criteria to use when ordering the list.
   */
  orderBy?: ListSnapshotsRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Page number.
   */
  page?: number
  /**
   * Page size, defines how many entries are returned in one page, must be lower or equal to 100.
   */
  pageSize?: number
  /**
   * Filter snapshots by the ID of the original volume.
   */
  volumeId?: string
  /**
   * Filter snapshots by their names.
   */
  name?: string
  /**
   * Filter by tags. Only snapshots with one or more matching tags will be returned.
   */
  tags?: string[]
}

export interface ListSnapshotsResponse {
  /**
   * Paginated returned list of snapshots.
   */
  snapshots: Snapshot[]
  /**
   * Total number of snpashots in the project.
   */
  totalCount: number
}

export type ListVolumeTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Page number.
   */
  page?: number
  /**
   * Page size, defines how many entries are returned in one page, must be lower or equal to 100.
   */
  pageSize?: number
}

export interface ListVolumeTypesResponse {
  /**
   * Returns paginated list of volume-types.
   */
  volumeTypes: VolumeType[]
  /**
   * Total number of volume-types currently available in stock.
   */
  totalCount: number
}

export type ListVolumesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Criteria to use when ordering the list.
   */
  orderBy?: ListVolumesRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Page number.
   */
  page?: number
  /**
   * Page size, defines how many entries are returned in one page, must be lower or equal to 100.
   */
  pageSize?: number
  /**
   * Filter the return volumes by their names.
   */
  name?: string
  /**
   * Filter by a product resource ID linked to this volume (such as an Instance ID).
   */
  productResourceId?: string
  /**
   * Filter by tags. Only volumes with one or more matching tags will be returned.
   */
  tags?: string[]
}

export interface ListVolumesResponse {
  /**
   * Paginated returned list of volumes.
   */
  volumes: Volume[]
  /**
   * Total number of volumes in the project.
   */
  totalCount: number
}

export type UpdateSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
  /**
   * When defined, is the name of the snapshot.
   */
  name?: string
  /**
   * List of tags assigned to the snapshot.
   */
  tags?: string[]
}

export type UpdateVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the volume.
   */
  volumeId: string
  /**
   * When defined, is the new name of the volume.
   */
  name?: string
  /**
   * Size in bytes of the volume, with a granularity of 1 GB (10^9 bytes).
Must be compliant with the minimum (1GB) and maximum (10TB) allowed size.
   */
  size?: number
  /**
   * List of tags assigned to the volume.
   */
  tags?: string[]
  /**
   * The selected value must be available for the volume's current storage class.
   */
  perfIops?: number
}
