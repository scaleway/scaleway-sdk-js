// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Zone } from '../../../bridge'

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
  | 'snapshotting'
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

/** Create volume request. from empty. */
export interface CreateVolumeRequestFromEmpty {
  /**
   * Volume size in bytes, with a granularity of 1 GB (10^9 bytes). Must be
   * compliant with the minimum and maximum allowed size.
   */
  size: number
}

/** Create volume request. from snapshot. */
export interface CreateVolumeRequestFromSnapshot {
  /**
   * Volume size in bytes, with a granularity of 1 GB (10^9 bytes). Must be
   * compliant with the allowed minimum and maximum allowed size. Size is
   * optional and is used only if a resize of the volume is requested, otherwise
   * original snapshot size will be used.
   */
  size?: number
  /** Source snapshot from which create a volume. */
  snapshotId: string
}

/** List snapshots response. */
export interface ListSnapshotsResponse {
  /** Paginated returned list of snapshots. */
  snapshots: SnapshotSummary[]
  /** Total number of snpashots in the project. */
  totalCount: number
}

/** List volume types response. */
export interface ListVolumeTypesResponse {
  /** Paginated returned list of volume-types. */
  volumeTypes: VolumeType[]
  /** Total number of volume-types currently available in stock. */
  totalCount: number
}

/** List volumes response. */
export interface ListVolumesResponse {
  /** Paginated returned list of volumes. */
  volumes: Volume[]
  /** Total number of volumes in the project. */
  totalCount: number
}

/** Reference. */
export interface Reference {
  /** UUID of the reference. */
  id: string
  /** Type of the resoruce the reference is associated (else snapshot or volume). */
  productResourceType: string
  /**
   * UUID of the volume or the snapshot it refers to (according to the
   * product_resource_type).
   */
  productResourceId: string
  /** Creation date of the reference. */
  createdAt?: Date
  /** Type of the reference (link, exclusive, read_only). */
  type: ReferenceType
  /** Status of the reference (attaching, attached, detaching). */
  status: ReferenceStatus
}

/** Snapshot. */
export interface Snapshot {
  /** UUID of the snapshot. */
  id: string
  /** Name of the snapshot. */
  name: string
  /**
   * Informations about the parent volume. If the parent volume has been
   * deleted, value is null.
   */
  parentVolume?: SnapshotParentVolume
  /** Size in bytes of the snapshot. */
  size: number
  /** UUID of the project the snapshot belongs to. */
  projectId: string
  /** Creation date of the snapshot. */
  createdAt?: Date
  /** Last modification date of the properties of a snapshot. */
  updatedAt?: Date
  /** List of the references to the snapshot. */
  references: Reference[]
  /** Current status of the snapshot (available, in_use, ...). */
  status: SnapshotStatus
  /** List of tags assigned to the volume. */
  tags: string[]
  /** Snapshot zone. */
  zone: Zone
  /** Storage class of the snapshot. */
  class: StorageClass
}

/** Snapshot. parent volume. */
export interface SnapshotParentVolume {
  /** Volume ID on which the snapshot is based. */
  id: string
  /** Name of the parent volume from which the snapshot has been taken. */
  name: string
  /** Volume type of the parent volume from which the snapshot has been taken. */
  type: string
  /** Current status the parent volume from which the snapshot has been taken. */
  status: VolumeStatus
}

/** Snapshot summary. */
export interface SnapshotSummary {
  /** UUID of the snapshot. */
  id: string
  /** Name of the snapshot. */
  name: string
  /**
   * Information about the parent volume. If the parent volume has been deleted,
   * value is null.
   */
  parentVolume?: SnapshotParentVolume
  /** Size in bytes of the snapshot. */
  size: number
  /** UUID of the project the snapshot belongs to. */
  projectId: string
  /** Creation date of the snapshot. */
  createdAt?: Date
  /** Last modification date of the properties of a snapshot. */
  updatedAt?: Date
  /** Current status of the snapshot (available, in_use, ...). */
  status: SnapshotStatus
  /** List of tags assigned to the volume. */
  tags: string[]
  /** Snapshot zone. */
  zone: Zone
  /** Storage class of the snapshot. */
  class: StorageClass
}

/** Volume. */
export interface Volume {
  /** UUID of the volume. */
  id: string
  /** Name of the volume. */
  name: string
  /** Type of the volume. */
  type: string
  /** Volume size in bytes. */
  size: number
  /** UUID of the project the volume belongs to. */
  projectId: string
  /** Creation date of the volume. */
  createdAt?: Date
  /** Last modification date of the properties of a volume. */
  updatedAt?: Date
  /** List of the references to the volume. */
  references: Reference[]
  /**
   * When a volume is created from a snapshot, is the UUID of the snapshot from
   * which the volume has been created.
   */
  parentSnapshotId?: string
  /** Current status of the volume (available, in_use, ...). */
  status: VolumeStatus
  /** List of tags assigned to the volume. */
  tags: string[]
  /** Volume zone. */
  zone: Zone
  /** Volume specifications of the volume. */
  specs?: VolumeSpecifications
}

/** Volume specifications. */
export interface VolumeSpecifications {
  /**
   * The maximum IO/s expected, according to the different options available in
   * stock (`5000 | 15000`).
   */
  perfIops?: number
  /** The storage class of the volume. */
  class: StorageClass
}

/** Volume type. */
export interface VolumeType {
  /** Internal type of the volume. */
  type: string
  /** Price of the volume billed in GB/hour. */
  pricing?: Money
  /** Price of the snapshot billed in GB/hour. */
  snapshotPricing?: Money
  /** Volume specifications of the volume type. */
  specs?: VolumeSpecifications
}

export type ListVolumeTypesRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Positive integer to choose the page to return. */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to
   * return.
   */
  pageSize?: number
}

export type ListVolumesRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Sort order of the returned volumes. */
  orderBy?: ListVolumesRequestOrderBy
  /** Only list volumes of this project ID. */
  projectId?: string
  /** Positive integer to choose the page to return. */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to
   * return.
   */
  pageSize?: number
  /** Filter the return volumes by their names. */
  name?: string
  /**
   * Filter by a Product Resource Id linked to this volume (such as an Instance
   * Server Id).
   */
  productResourceId?: string
}

export type CreateVolumeRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Name of the volume you want to create. */
  name: string
  /**
   * The maximum IO/s expected, according to the different options available in
   * stock (`5000 | 15000`).
   *
   * One-of ('requirements'): at most one of 'perfIops' could be set.
   */
  perfIops?: number
  /** UUID of the project the volume belongs to. */
  projectId?: string
  /**
   * Create a new and empty volume.
   *
   * One-of ('from'): at most one of 'fromEmpty', 'fromSnapshot' could be set.
   */
  fromEmpty?: CreateVolumeRequestFromEmpty
  /**
   * Create a volume from an existing snapshot.
   *
   * One-of ('from'): at most one of 'fromEmpty', 'fromSnapshot' could be set.
   */
  fromSnapshot?: CreateVolumeRequestFromSnapshot
  /** List of tags assigned to the volume. */
  tags?: string[]
}

export type GetVolumeRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the volume you want to get. */
  volumeId: string
}

export type DeleteVolumeRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the volume. */
  volumeId: string
}

export type UpdateVolumeRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the volume. */
  volumeId: string
  /** When defined, is the new name of the volume. */
  name?: string
  /**
   * Optional field for growing a volume (size must be equal or larger than the
   * current one). Size in bytes of the volume, with a granularity of 1 GB (10^9
   * bytes). Must be compliant with the minimum and maximum allowed size.
   */
  size?: number
  /** List of tags assigned to the volume. */
  tags?: string[]
  /**
   * The maximum IO/s expected, according to the different options available in
   * stock (`5000 | 15000`). The selected value must be available on the Storage
   * Class where is currently located the volume.
   */
  perfIops?: number
}

export type ListSnapshotsRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Sort order of the returned snapshots. */
  orderBy?: ListSnapshotsRequestOrderBy
  /** Only list snapshots of this project ID. */
  projectId?: string
  /** Positive integer to choose the page to return. */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to
   * return.
   */
  pageSize?: number
  /** Filter the return snapshots by the volume it belongs to. */
  volumeId?: string
  /** Filter the return snapshots by their names. */
  name?: string
}

export type GetSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the snapshot. */
  snapshotId: string
}

export type CreateSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the volume from which creates a snpashot. */
  volumeId: string
  /** Name of the snapshot. */
  name: string
  /** UUID of the project the volume and the snapshot belong to. */
  projectId?: string
  /** List of tags assigned to the snapshot. */
  tags?: string[]
}

export type DeleteSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the snapshot. */
  snapshotId: string
}

export type UpdateSnapshotRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the snapshot. */
  snapshotId: string
  /** When defined, is the name of the snapshot. */
  name?: string
  /** List of tags assigned to the snapshot. */
  tags?: string[]
}
