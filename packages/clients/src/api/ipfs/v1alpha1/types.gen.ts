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

export interface PinCIDMeta {
  id?: string
}

export interface PinCID {
  cid?: string
  name?: string
  origins: string[]
  meta: PinCIDMeta
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

export interface Pin {
  pinId: string
  status: PinStatus
  createdAt?: Date
  cid: PinCID
  delegates: string[]
  info: PinInfo
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

export type CreatePinByCIDRequest = {
  region?: Region
  volumeId: string
  cid: string
  name?: string
  origins?: string[]
  pinOptions: PinOptions
}

export type CreatePinByURLRequest = {
  region?: Region
  volumeId: string
  url: string
  name?: string
  pinOptions: PinOptions
}

export type CreateVolumeRequest = {
  region?: Region
  projectId?: string
  name: string
}

export type DeletePinRequest = {
  region?: Region
  pinId: string
  volumeId: string
}

export type DeleteVolumeRequest = {
  region?: Region
  volumeId: string
}

export type GetPinRequest = {
  region?: Region
  pinId: string
  volumeId: string
}

export type GetVolumeRequest = {
  region?: Region
  volumeId: string
}

export type ListPinsRequest = {
  region?: Region
  volumeId: string
  projectId?: string
  organizationId?: string
  page?: number
  pageSize?: number
  orderBy?: ListPinsRequestOrderBy
  status?: PinStatus
}

export interface ListPinsResponse {
  totalCount: number
  pins: Pin[]
}

export type ListVolumesRequest = {
  region?: Region
  projectId?: string
  page?: number
  pageSize?: number
  orderBy?: ListVolumesRequestOrderBy
}

export interface ListVolumesResponse {
  volumes: Volume[]
  totalCount: number
}

export type ReplacePinRequest = {
  region?: Region
  pinId: string
  volumeId: string
  cid: string
  name?: string
  origins?: string[]
  pinOptions: PinOptions
}

export interface ReplacePinResponse {
  pin: Pin
}

export type UpdateVolumeRequest = {
  region?: Region
  volumeId: string
  name?: string
  tags?: string[]
}
