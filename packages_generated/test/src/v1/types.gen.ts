// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  Decimal,
  Money,
  ServiceInfo,
  Region as ScwRegion,
  ScwFile,
  TimeSeries,
  Zone as ScwZone,
} from '@scaleway/sdk-client'

export type EyeColors =
  | 'unknown'
  | 'amber'
  | 'blue'
  | 'brown'
  | 'gray'
  | 'green'
  | 'hazel'
  | 'red'
  | 'violet'

export type HumanStatus = 'unknown' | 'stopped' | 'running'

export type ListHumansRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'height_asc'
  | 'height_desc'

export interface Human {
  id: string
  organizationId: string
  createdAt?: Date
  updatedAt?: Date
  height: number
  shoeSize: number
  altitudeInMeter: number
  altitudeInMillimeter: number
  fingersCount: number
  hairCount: number
  isHappy: boolean
  eyesColor: EyeColors
  status: HumanStatus
  name: string
  projectId: string
}

export type CreateHumanRequest = {
  height: number
  shoeSize: number
  altitudeInMeter: number
  altitudeInMillimeter: number
  fingersCount: number
  hairCount: number
  isHappy: boolean
  eyesColor?: EyeColors
  /**
   * @deprecated
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  name: string
  /**
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
}

export type DeleteHumanRequest = {
  /**
   * UUID of the human you want to delete.
   */
  humanId: string
}

export type GetHumanRequest = {
  /**
   * UUID of the human you want to get.
   */
  humanId: string
}

export type ListHumansRequest = {
  page?: number
  pageSize?: number
  orderBy?: ListHumansRequestOrderBy
  organizationId?: string
  projectId?: string
}

export interface ListHumansResponse {
  totalCount: number
  humans: Human[]
}

export type RegisterRequest = {
  username: string
}

export interface RegisterResponse {
  secretKey: string
  accessKey: string
}

export type RunHumanRequest = {
  /**
   * UUID of the human you want to make run.
   */
  humanId: string
}

export type SmokeHumanRequest = {
  /**
   * @deprecated UUID of the human you want to make smoking.
   */
  humanId: string
}

export type UpdateHumanRequest = {
  /**
   * UUID of the human you want to update.
   */
  humanId: string
  /**
   * Height of the human in meters.
   */
  height?: number
  shoeSize?: number
  altitudeInMeter?: number
  altitudeInMillimeter?: number
  fingersCount?: number
  hairCount?: number
  isHappy?: boolean
  eyesColor?: EyeColors
  name?: string
}
