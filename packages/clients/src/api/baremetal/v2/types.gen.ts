// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export type ListServerPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ServerPrivateNetworkStatus =
  | 'unknown'
  | 'attaching'
  | 'attached'
  | 'error'
  | 'detaching'
  | 'locked'

export interface ServerPrivateNetwork {
  /** Private Network UUID. */
  id: string
  /** Private Network Project UUID. */
  projectId: string
  /** Server UUID. */
  serverId: string
  /** Private Network UUID. */
  privateNetworkId: string
  /** VLAN UUID associated with the Private Network. */
  vlan?: number
  /** Configuration status of the Private Network. */
  status: ServerPrivateNetworkStatus
  /** Private Network creation date. */
  createdAt?: Date
  /** Date the Private Network was last modified. */
  updatedAt?: Date
}

export interface ListServerPrivateNetworksResponse {
  serverPrivateNetworks: ServerPrivateNetwork[]
  totalCount: number
}

export type PrivateNetworkApiAddServerPrivateNetworkRequest = {
  zone?: Zone
  /** UUID of the server. */
  serverId: string
  /** UUID of the Private Network. */
  privateNetworkId: string
}

export type PrivateNetworkApiDeleteServerPrivateNetworkRequest = {
  zone?: Zone
  /** UUID of the server. */
  serverId: string
  /** UUID of the Private Network. */
  privateNetworkId: string
}

export type PrivateNetworkApiListServerPrivateNetworksRequest = {
  zone?: Zone
  /** Sort order for the returned Private Networks. */
  orderBy?: ListServerPrivateNetworksRequestOrderBy
  /** Page number for the returned Private Networks. */
  page?: number
  /** Maximum number of Private Networks per page. */
  pageSize?: number
  /** Filter Private Networks by server UUID. */
  serverId?: string
  /** Filter Private Networks by Private Network UUID. */
  privateNetworkId?: string
  /** Filter Private Networks by organization UUID. */
  organizationId?: string
  /** Filter Private Networks by project UUID. */
  projectId?: string
}

export type PrivateNetworkApiSetServerPrivateNetworksRequest = {
  zone?: Zone
  /** UUID of the server. */
  serverId: string
  /** UUIDs of the Private Networks. */
  privateNetworkIds?: string[]
}

export interface SetServerPrivateNetworksResponse {
  serverPrivateNetworks: ServerPrivateNetwork[]
}
