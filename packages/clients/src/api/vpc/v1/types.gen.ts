// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export type ListPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export interface ListPrivateNetworksResponse {
  privateNetworks: Array<PrivateNetwork>
  totalCount: number
}

/** Private network */
export interface PrivateNetwork {
  /** The private network ID */
  id: string
  /** The private network name */
  name: string
  /** The private network organization */
  organizationId: string
  /** The private network project ID */
  projectId: string
  /** The zone in which the private network is available */
  zone: Zone
  /** The private network tags */
  tags: Array<string>
  /** The private network creation date */
  createdAt?: Date
  /** The last private network modification date */
  updatedAt?: Date
  /** Private network subnets CIDR */
  subnets: Array<string>
}

export type ListPrivateNetworksRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The sort order of the returned private networks */
  orderBy?: ListPrivateNetworksRequestOrderBy
  /** The page number for the returned private networks */
  page?: number
  /** The maximum number of private networks per page */
  pageSize?: number
  /** Filter private networks with names containing this string */
  name?: string
  /** Filter private networks with one or more matching tags */
  tags?: Array<string>
  /** The organization ID on which to filter the returned private networks */
  organizationId?: string
  /** The project ID on which to filter the returned private networks */
  projectId?: string
  /** The PrivateNetwork IDs on which to filter the returned private networks */
  privateNetworkIds?: Array<string>
}

export type CreatePrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The name of the private network */
  name?: string
  /** The project ID of the private network */
  projectId?: string
  /** The private networks tags */
  tags?: Array<string>
  /** Private network subnets CIDR */
  subnets?: Array<string>
}

export type GetPrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The private network id */
  privateNetworkId: string
}

export type UpdatePrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The private network ID */
  privateNetworkId: string
  /** The name of the private network */
  name?: string
  /** The private networks tags */
  tags?: Array<string>
  /** Private network subnets CIDR */
  subnets?: Array<string>
}

export type DeletePrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The private network ID */
  privateNetworkId: string
}
