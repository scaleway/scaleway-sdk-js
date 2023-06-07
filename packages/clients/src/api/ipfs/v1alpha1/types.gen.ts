// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListPinsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListVolumesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

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
  statusDetails?: string
  id?: string
  url?: string
  size?: number
  progress?: number
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
