// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, Zone as ScwZone} from '@scaleway/sdk-client'


export type AttachmentResourceType =
  | 'unknown_resource_type'
  | 'instance_server'

export type FileSystemStatus =
  | 'unknown_status'
  | 'available'
  | 'error'
  | 'creating'
  | 'updating'

export type ListFileSystemsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

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
  zone?: ScwZone
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
  createdAt?: Date
  /**
   * Last update date of the properties of the filesystem.
   */
  updatedAt?: Date
}


/**
 * Request to create a new filesystem.
 */
export type CreateFileSystemRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the filesystem.
   */
  name: string
  /**
   * UUID of the project the filesystem belongs to.
   */
  projectId?: string
  /**
   * Must be compliant with the minimum (100 GB) and maximum (10 TB) allowed size.
   */
  size: number
  /**
   * List of tags assigned to the filesystem.
   */
  tags?: string[]
}


/**
 * Request to delete a specific filesystem.
 */
export type DeleteFileSystemRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the filesystem.
   */
  filesystemId: string
}


/**
 * Request to retrieve a specific filesystem.
 */
export type GetFileSystemRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the filesystem.
   */
  filesystemId: string
}


/**
 * Request to list filesystem attachments with filtering and pagination options.
 */
export type ListAttachmentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the File Storage volume.
   */
  filesystemId?: string
  /**
   * Filter by resource ID.
   */
  resourceId?: string
  /**
   * Filter by resource type.
   */
  resourceType?: AttachmentResourceType
  /**
   * Filter by resource zone.
   */
  zone?: ScwZone
  /**
   * Page number (starting at 1).
   */
  page?: number
  /**
   * Number of entries per page (default: 20, max: 100).
   */
  pageSize?: number
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
 * Request to list filesystems with filtering and pagination options.
 */
export type ListFileSystemsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Criteria to use when ordering the list.
   */
  orderBy?: ListFileSystemsRequestOrderBy
  /**
   * Filter by project ID.
   */
  projectId?: string
  /**
   * Filter by organization ID.
   */
  organizationId?: string
  /**
   * Page number (starting at 1).
   */
  page?: number
  /**
   * Number of entries per page (default: 20, max: 100).
   */
  pageSize?: number
  /**
   * Filter the returned filesystems by their names.
   */
  name?: string
  /**
   * Filter by tags. Only filesystems with one or more matching tags will be returned.
   */
  tags?: string[]
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
 * Request to update a specific filesystem.
 */
export type UpdateFileSystemRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the filesystem.
   */
  filesystemId: string
  /**
   * When defined, is the new name of the filesystem.
   */
  name?: string
  /**
   * Size in bytes, with a granularity of 100 GB (10^11 bytes).
Must be compliant with the minimum (100 GB) and maximum (10 TB) allowed size.
   */
  size?: number
  /**
   * List of tags assigned to the filesystem.
   */
  tags?: string[]
}


