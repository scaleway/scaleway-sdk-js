// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListNamesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListPinsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListVolumesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type NameStatus =
  | 'unknown_status'
  | 'queued'
  | 'publishing'
  | 'failed'
  | 'published'

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

export interface ExportKeyNameResponse {
  nameId: string
  projectId: string
  createdAt?: Date
  updatedAt?: Date
  publicKey: string
  privateKey: string
}

export interface ListNamesResponse {
  names: Name[]
  totalCount: number
}

export interface ListPinsResponse {
  totalCount: number
  pins: Pin[]
}

export interface ListVolumesResponse {
  volumes: Volume[]
  totalCount: number
}

export interface Name {
  nameId: string
  projectId: string
  createdAt?: Date
  updatedAt?: Date
  tags: string[]
  name: string
  key: string
  status: NameStatus
  value: string
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
  projectId?: string
  name: string
}

export type GetVolumeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  volumeId: string
}

export type ListVolumesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  projectId?: string
  page?: number
  pageSize?: number
  orderBy?: ListVolumesRequestOrderBy
}

export type UpdateVolumeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  volumeId: string
  name?: string
  tags?: string[]
}

export type DeleteVolumeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  volumeId: string
}

export type CreatePinByURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  volumeId: string
  url: string
  name?: string
  pinOptions?: PinOptions
}

export type CreatePinByCIDRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  volumeId: string
  cid: string
  name?: string
  origins?: string[]
  pinOptions?: PinOptions
}

export type ReplacePinRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  pinId: string
  volumeId: string
  cid: string
  name?: string
  origins?: string[]
  pinOptions?: PinOptions
}

export type GetPinRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  pinId: string
  volumeId: string
}

export type ListPinsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  volumeId: string
  projectId?: string
  organizationId?: string
  page?: number
  pageSize?: number
  orderBy?: ListPinsRequestOrderBy
  status?: PinStatus
}

export type DeletePinRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  pinId: string
  volumeId: string
}

export type CreateNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  projectId?: string
  name: string
  value: string
}

export type GetNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  nameId: string
}

export type DeleteNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  nameId: string
}

export type ListNamesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListNamesRequestOrderBy
  projectId?: string
  organizationId?: string
}

export type UpdateNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  nameId: string
  name?: string
  tags?: string[]
  value?: string
}

export type ExportKeyNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  nameId: string
}

export type ImportKeyNameRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  projectId?: string
  name: string
  privateKey: string
  value: string
}
