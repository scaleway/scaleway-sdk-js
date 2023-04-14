// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export type ListPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export interface ListPrivateNetworksResponse {
  privateNetworks: PrivateNetwork[]
  totalCount: number
}

/** Private network. */
export interface PrivateNetwork {
  /** Private Network ID. */
  id: string
  /** Private Network name. */
  name: string
  /** Scaleway Organization the Private Network belongs to. */
  organizationId: string
  /** Scaleway Project the Private Network belongs to. */
  projectId: string
  /** Availability Zone in which the Private Network is available. */
  zone: Zone
  /** Tags of the Private Network. */
  tags: string[]
  /** Date the Private Network was created. */
  createdAt?: Date
  /** Date the Private Network was last modified. */
  updatedAt?: Date
  /** Private Network subnets CIDR. */
  subnets: string[]
}

export type ListPrivateNetworksRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Sort order of the returned Private Networks. */
  orderBy?: ListPrivateNetworksRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Maximum number of Private Networks to return per page. */
  pageSize?: number
  /**
   * Name to filter for. Only Private Networks with names containing this string
   * will be returned.
   */
  name?: string
  /**
   * Tags to filter for. Only Private Networks with one or more matching tags
   * will be returned.
   */
  tags?: string[]
  /**
   * Organization ID to filter for. Only Private Networks belonging to this
   * Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only Private Networks belonging to this Project
   * will be returned.
   */
  projectId?: string
  /**
   * Private Network IDs to filter for. Only Private Networks with one of these
   * IDs will be returned.
   */
  privateNetworkIds?: string[]
  /** Defines whether to include regional Private Networks in the response. */
  includeRegional?: boolean
}

export type CreatePrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Name for the Private Network. */
  name?: string
  /** Scaleway Project in which to create the Private Network. */
  projectId?: string
  /** Tags for the Private Network. */
  tags?: string[]
  /** Private Network subnets CIDR. */
  subnets?: string[]
}

export type GetPrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Private Network ID. */
  privateNetworkId: string
}

export type UpdatePrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Private Network ID. */
  privateNetworkId: string
  /** Name of the private network. */
  name?: string
  /** Tags for the Private Network. */
  tags?: string[]
  /** @deprecated Private Network subnets CIDR (deprecated). */
  subnets?: string[]
}

export type DeletePrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Private Network ID. */
  privateNetworkId: string
}
