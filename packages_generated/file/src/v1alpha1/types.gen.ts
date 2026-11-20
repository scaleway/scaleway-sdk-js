// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type AttachmentResourceType =
  | 'unknown_resource_type'
  | 'instance_server'

export type FileSystemStatus =
  | 'unknown_status'
  | 'available'
  | 'error'
  | 'creating'
  | 'updating'
  | 'snapshotting'

export type ListFileSystemsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListSnapshotsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type SnapshotStatus =
  | 'unknown_status'
  | 'available'
  | 'error'
  | 'creating'
  | 'deleting'
  | 'deleted'
  | 'locked'
  | 'cloning'

export interface SnapshotParentFilesystem {
  /**
   * Parent filesystem UUID (filesystem from which the snapshot originates).
   */
  id: string
  /**
   * Name of the parent filesystem.
   */
  name: string
}


export interface CreateFileSystemRequestFromEmpty {
  /**
   * Must be compliant with the minimum (25 GB) and maximum (50 TB) allowed size.
   */
  size: number
}


export interface CreateFileSystemRequestFromSnapshot {
  /**
   * Must be compliant with the minimum (25 GB) and maximum (50 TB) allowed size.
Size is optional. When not set, the current size of the parent filesystem is used.
When set, it must be greater than or equal to the snapshot size.
   */
  size?: number | null
  /**
   * Source snapshot from which the filesystem will be created.
   */
  snapshotId: string
}


/**
 * Represents an attachment between a filesystem and a resource.
 */
export interface Attachment {
  /**
   * UUID of the attachment.
   */
  id: string
  /**
   * UUID of the filesystem.
   */
  filesystemId: string
  /**
   * UUID of the attached resource.
   */
  resourceId: string
  /**
   * The type of the attached resource.
   */
  resourceType: AttachmentResourceType
  /**
   * The zone where the resource is located.
   */
  zone?: ScwZone | null
  /**
   * The region where the attachment is located.
   */
  region: ScwRegion
  /**
   * The SRN of the attachment.
   */
  srn: string
}


export interface FileSystemType {
  /**
   * Filesystem type name.
   */
  name: string
  /**
   * Price of the filesystem billed in GB/hour.
   */
  filesystemPriceGbPerHour?: Money | null
  /**
   * Price of the snapshot billed in GB/hour.
   */
  snapshotPriceGbPerHour?: Money | null
}


/**
 * Represents a filesystem resource and its properties.
 */
export interface FileSystem {
  /**
   * UUID of the filesystem.
   */
  id: string
  /**
   * Name of the filesystem.
   */
  name: string
  /**
   * Filesystem size in bytes.
   */
  size: number
  /**
   * Current status of the filesystem (e.g. creating, available, ...).
   */
  status: FileSystemStatus
  /**
   * UUID of the project to which the filesystem belongs.
   */
  projectId: string
  /**
   * UUID of the organization to which the filesystem belongs.
   */
  organizationId: string
  /**
   * List of tags assigned to the filesystem.
   */
  tags: string[]
  /**
   * The current number of attachments (mounts) that the filesystem has.
   */
  numberOfAttachments: number
  /**
   * Region where the filesystem is located.
   */
  region: ScwRegion
  /**
   * Creation date of the filesystem.
   */
  createdAt?: Date | null
  /**
   * Last update date of the properties of the filesystem.
   */
  updatedAt?: Date | null
  /**
   * UUID of the filesystem type.
   */
  filesystemTypeId: string
  /**
   * The SRN of the filesystem.
   */
  srn: string
}


/**
 * Represents a snapshot of a filesystem and its properties.
 */
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
   * If the parent filesystem was deleted, value is null.
   */
  parentFilesystem?: SnapshotParentFilesystem | null
  /**
   * Snapshot size in bytes.
   */
  size?: number | null
  /**
   * Current status of the snapshot (e.g. creating, available, ...).
   */
  status: SnapshotStatus
  /**
   * UUID of the project to which the snapshot belongs.
   */
  projectId: string
  /**
   * UUID of the organization to which the snapshot belongs.
   */
  organizationId: string
  /**
   * List of tags assigned to the snapshot.
   */
  tags: string[]
  /**
   * Creation date of the snapshot.
   */
  createdAt?: Date | null
  /**
   * Last update date of the properties of the snapshot.
   */
  updatedAt?: Date | null
  /**
   * Region where the snapshot is located.
   */
  region: ScwRegion
  /**
   * The SRN of the snapshot.
   */
  srn: string
}


/**
 * Request to create a new filesystem.
 */
export type CreateFileSystemRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Name of the filesystem.
   */
  name: string
  /**
   * UUID of the project the filesystem belongs to.
   */
  projectId?: string | null
  /**
   * @deprecated Filesystem size in bytes, with a granularity in GB (10^9 bytes).
Must be compliant with the minimum (25 GB) and maximum (50 TB) allowed size.
Must not be set along with `from_empty` or `from_snapshot`.
   */
  size: number
  /**
   * Specify the size of the new filesystem if creating a new one from scratch.
   *
   * One-of ('from'): at most one of 'fromEmpty', 'fromSnapshot' could be set.
   */
  fromEmpty?: CreateFileSystemRequestFromEmpty | null
  /**
   * Specify the snapshot ID of the original snapshot to create the filesystem from.
   *
   * One-of ('from'): at most one of 'fromEmpty', 'fromSnapshot' could be set.
   */
  fromSnapshot?: CreateFileSystemRequestFromSnapshot | null
  /**
   * Type of the filesystem.
   */
  type?: string | null
  /**
   * List of tags assigned to the filesystem.
   */
  tags?: string[] | null
}


/**
 * Request to create a new snapshot of a filesystem.
 */
export type CreateSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the filesystem to snapshot.
   */
  filesystemId: string
  /**
   * Name of the snapshot.
   */
  name: string
  /**
   * UUID of the project to which the filesystem and the snapshot belong.
   */
  projectId?: string | null
  /**
   * List of tags assigned to the snapshot.
   */
  tags?: string[] | null
}


/**
 * Request to delete a specific filesystem.
 */
export type DeleteFileSystemRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the filesystem.
   */
  filesystemId: string
}


/**
 * Request to delete a specific snapshot.
 */
export type DeleteSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
}


/**
 * Request to retrieve a specific filesystem.
 */
export type GetFileSystemRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the filesystem.
   */
  filesystemId: string
}


/**
 * Request to retrieve a specific snapshot.
 */
export type GetSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
}


/**
 * Request to list filesystem attachments with filtering and pagination options.
 */
export type ListAttachmentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the File Storage volume.
   */
  filesystemId?: string | null
  /**
   * Filter by resource ID.
   */
  resourceId?: string | null
  /**
   * Filter by resource type.
   */
  resourceType?: AttachmentResourceType | null
  /**
   * Filter by resource zone.
   */
  zone?: ScwZone | null
  /**
   * Page number (starting at 1).
   */
  page?: number | null
  /**
   * Number of entries per page (default: 20, max: 100).
   */
  pageSize?: number | null
}


/**
 * Response containing a list of filesystem attachments and total count.
 */
export interface ListAttachmentsResponse {
  /**
   * List of filesystem attachments matching the request criteria.
   */
  attachments: Attachment[]
  /**
   * Total number of filesystem attachments matching the criteria.
   */
  totalCount: number
}


/**
 * Request to list filesystem types with pagination options.
 */
export type ListFileSystemTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Page number (starts at 1).
   */
  page?: number | null
  /**
   * Number of entries per page (default: 50, max: 100).
   */
  pageSize?: number | null
}


export interface ListFileSystemTypesResponse {
  /**
   * Returns paginated list of filesystem-types.
   */
  filesystemTypes: FileSystemType[]
  /**
   * Total number of file system types.
   */
  totalCount: number
}


/**
 * Request to list filesystems with filtering and pagination options.
 */
export type ListFileSystemsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Criteria to use when ordering the list.
   */
  orderBy?: ListFileSystemsRequestOrderBy | null
  /**
   * Filter by project ID.
   */
  projectId?: string | null
  /**
   * Filter by organization ID.
   */
  organizationId?: string | null
  /**
   * Page number (starting at 1).
   */
  page?: number | null
  /**
   * Number of entries per page (default: 20, max: 100).
   */
  pageSize?: number | null
  /**
   * Filter the returned filesystems by their names.
   */
  name?: string | null
  /**
   * Type of the filesystem.
   */
  filesystemType?: string | null
  /**
   * Filter by tags. Only filesystems with one or more matching tags will be returned.
   */
  tags?: string[] | null
  /**
   * Filter by filesystem IDs. Only filesystems with one or more matching IDs will be returned.
   */
  filesystemIds?: string[] | null
}


/**
 * Response containing a list of filesystems and total count.
 */
export interface ListFileSystemsResponse {
  /**
   * List of filesystems matching the request criteria.
   */
  filesystems: FileSystem[]
  /**
   * Total number of filesystems matching the criteria.
   */
  totalCount: number
}


/**
 * Request to list snapshots with filtering and pagination options.
 */
export type ListSnapshotsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Criteria to use when ordering the list.
   */
  orderBy?: ListSnapshotsRequestOrderBy | null
  /**
   * Filter by project ID.
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string | null
  /**
   * Filter by organization ID.
   *
   * One-of ('scope'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string | null
  /**
   * Page number (starting at 1).
   */
  page?: number | null
  /**
   * Number of entries per page (default: 20, max: 100).
   */
  pageSize?: number | null
  /**
   * Filter the returned snapshots by their names.
   */
  name?: string | null
  /**
   * Filter by tags. Only snapshots with one or more matching tags will be returned.
   */
  tags?: string[] | null
  /**
   * Filter the returned snapshots by the ID of the original filesystem.
   */
  filesystemId?: string | null
  /**
   * Filter by snapshot IDs. Only snapshots with one or more matching IDs will be returned.
   */
  snapshotIds?: string[] | null
}


/**
 * Response containing a list of snapshots and total count.
 */
export interface ListSnapshotsResponse {
  /**
   * List of snapshots matching the request criteria.
   */
  snapshots: Snapshot[]
  /**
   * Total number of snapshots matching the criteria.
   */
  totalCount: number
}


/**
 * Request to update a specific filesystem.
 */
export type UpdateFileSystemRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the filesystem.
   */
  filesystemId: string
  /**
   * When defined, is the new name of the filesystem.
   */
  name?: string | null
  /**
   * Size in bytes, with a granularity in GB (10^9 bytes).
Must be compliant with the minimum (25 GB) and maximum (50 TB) allowed size.
   */
  size?: number | null
  /**
   * List of tags assigned to the filesystem.
   */
  tags?: string[] | null
}


/**
 * Request to update a specific snapshot.
 */
export type UpdateSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the snapshot.
   */
  snapshotId: string
  /**
   * When defined, is the new name of the snapshot.
   */
  name?: string | null
  /**
   * List of tags assigned to the snapshot.
   */
  tags?: string[] | null
}


