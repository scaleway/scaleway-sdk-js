// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListPinsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListVolumesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type PinDetails =
  | 'unknown_details'
  | 'pinning_looking_for_provider'
  | 'pinning_in_progress'
  | 'pinning_blocks_fetched'
  | 'pinning_fetching_url_data'
  | 'pinned_ok'
  | 'unpinned_ok'
  | 'unpinning_in_progress'
  | 'failed_contains_banned_cid'
  | 'failed_pinning'
  | 'failed_pinning_no_provider'
  | 'failed_pinning_bad_cid_format'
  | 'failed_pinning_timeout'
  | 'failed_pinning_too_big_content'
  | 'failed_pinning_unreachable_url'
  | 'failed_pinning_bad_url_format'
  | 'failed_pinning_no_url_content_length'
  | 'failed_pinning_bad_url_status_code'
  | 'failed_unpinning'
  | 'checking_coherence'
  | 'rescheduled'

export type PinStatus =
  | 'unknown_status'
  | 'queued'
  | 'pinning'
  | 'failed'
  | 'pinned'

export interface ListPinsResponse {
  totalCount: number
  pins: Pin[]
}

export interface ListVolumesResponse {
  volumes: Volume[]
  totalCount: number
}

export interface Pin {
  pinId: string
  status: PinStatus
  createdAt?: Date
  cid?: PinCID
  delegates: string[]
  info?: PinInfo
}

export interface PinCID {
  cid?: string
  name?: string
  origins: string[]
  meta?: PinCIDMeta
}

export interface PinCIDMeta {
  id?: string
}

export interface PinInfo {
  id?: string
  url?: string
  size?: number
  progress?: number
  statusDetails: PinDetails
}

export interface PinOptions {
  requiredZones: string[]
  replicationCount: number
}

export interface ReplacePinResponse {
  pin?: Pin
}

export interface Volume {
  id: string
  projectId: string
  region: Region
  countPin: number
  createdAt?: Date
  updatedAt?: Date
  tags: string[]
  name: string
  size?: number
}

export type CreateVolumeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Project ID. */
  projectId?: string
  /** Volume name. */
  name: string
}

export type GetVolumeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Volume ID. */
  volumeId: string
}

export type ListVolumesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Project ID, only volumes belonging to this project will be listed. */
  projectId?: string
  /** Sort the order of the returned volumes. */
  orderBy?: ListVolumesRequestOrderBy
  /** Page number. */
  page?: number
  /** Maximum number of volumes to return per page. */
  pageSize?: number
}

export type UpdateVolumeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Volume ID. */
  volumeId: string
  /** Volume name. */
  name?: string
  /** Tags of the volume. */
  tags?: string[]
}

export type DeleteVolumeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Volume ID. */
  volumeId: string
}

export type CreatePinByURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Volume ID on which you want to pin your content. */
  volumeId: string
  /** URL containing the content you want to pin. */
  url: string
  /** Pin name. */
  name?: string
  /** Pin options. */
  pinOptions?: PinOptions
}

export type CreatePinByCIDRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Volume ID on which you want to pin your content. */
  volumeId: string
  /** CID containing the content you want to pin. */
  cid: string
  /** Node containing the content you want to pin. */
  origins?: string[]
  /** Pin name. */
  name?: string
  /** Pin options. */
  pinOptions?: PinOptions
}

export type ReplacePinRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Pin ID whose information you wish to replace. */
  pinId: string
  /** Volume ID. */
  volumeId: string
  /** New CID you want to pin in place of the old one. */
  cid: string
  /** New name to replace. */
  name?: string
  /** Node containing the content you want to pin. */
  origins?: string[]
  /** Pin options. */
  pinOptions?: PinOptions
}

export type GetPinRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Pin ID of which you want to obtain information. */
  pinId: string
  /** Volume ID. */
  volumeId: string
}

export type ListPinsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Volume ID of which you want to list the pins. */
  volumeId: string
  /** Project ID. */
  projectId?: string
  /** Organization ID. */
  organizationId?: string
  /** Sort order of the returned Volume. */
  orderBy?: ListPinsRequestOrderBy
  /** Page number. */
  page?: number
  /** Maximum number of volumes to return per page. */
  pageSize?: number
  /** List pins by status. */
  status?: PinStatus
}

export type DeletePinRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Pin ID you want to remove from the volume. */
  pinId: string
  /** Volume ID. */
  volumeId: string
}
