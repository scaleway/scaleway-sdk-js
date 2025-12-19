// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
	Zone as ScwZone,
} from '@scaleway/sdk-client'

export type ListServerPrivateNetworksRequestOrderBy =
	| 'created_at_asc'
	| 'created_at_desc'
	| 'updated_at_asc'
	| 'updated_at_desc'

export type ServerPrivateNetworkStatus =
	| 'unknown_status'
	| 'attaching'
	| 'attached'
	| 'error'
	| 'detaching'
	| 'locked'

export interface ServerPrivateNetwork {
	/**
	 * UUID of the Server-to-Private Network mapping.
	 */
	id: string
	/**
	 * Private Network Project UUID.
	 */
	projectId: string
	/**
	 * Server UUID.
	 */
	serverId: string
	/**
	 * Private Network UUID.
	 */
	privateNetworkId: string
	/**
	 * VLAN UUID associated with the Private Network.
	 */
	vlan?: number
	/**
	 * Configuration status of the Private Network.
	 */
	status: ServerPrivateNetworkStatus
	/**
	 * Private Network creation date.
	 */
	createdAt?: Date
	/**
	 * Date the Private Network was last modified.
	 */
	updatedAt?: Date
	/**
	 * IPAM IP IDs of the server, if it has any.
	 */
	ipamIpIds: string[]
}

export interface ListServerPrivateNetworksResponse {
	serverPrivateNetworks: ServerPrivateNetwork[]
	totalCount: number
}

export type PrivateNetworkApiAddServerPrivateNetworkRequest = {
	/**
	 * Zone to target. If none is passed will use default zone from the config.
	 */
	zone?: ScwZone
	/**
	 * UUID of the server.
	 */
	serverId: string
	/**
	 * UUID of the Private Network.
	 */
	privateNetworkId: string
	/**
	 * IPAM IDs of an IPs to attach to the server.
	 */
	ipamIpIds?: string[]
}

export type PrivateNetworkApiDeleteServerPrivateNetworkRequest = {
	/**
	 * Zone to target. If none is passed will use default zone from the config.
	 */
	zone?: ScwZone
	/**
	 * UUID of the server.
	 */
	serverId: string
	/**
	 * UUID of the Private Network.
	 */
	privateNetworkId: string
}

export type PrivateNetworkApiListServerPrivateNetworksRequest = {
	/**
	 * Zone to target. If none is passed will use default zone from the config.
	 */
	zone?: ScwZone
	/**
	 * Sort order for the returned Private Networks.
	 */
	orderBy?: ListServerPrivateNetworksRequestOrderBy
	/**
	 * Page number for the returned Private Networks.
	 */
	page?: number
	/**
	 * Maximum number of Private Networks per page.
	 */
	pageSize?: number
	/**
	 * Filter Private Networks by server UUID.
	 */
	serverId?: string
	/**
	 * Filter Private Networks by Private Network UUID.
	 */
	privateNetworkId?: string
	/**
	 * Filter Private Networks by organization UUID.
	 */
	organizationId?: string
	/**
	 * Filter Private Networks by project UUID.
	 */
	projectId?: string
	/**
	 * Filter Private Networks by IPAM IP UUIDs.
	 */
	ipamIpIds?: string[]
}

export type PrivateNetworkApiSetServerPrivateNetworksRequest = {
	/**
	 * Zone to target. If none is passed will use default zone from the config.
	 */
	zone?: ScwZone
	/**
	 * UUID of the server.
	 */
	serverId: string
	/**
	 * Object where the keys are the UUIDs of Private Networks and the values are arrays of IPAM IDs representing the IPs to assign to this Elastic Metal server on the Private Network. If the array supplied for a Private Network is empty, the next available IP from the Private Network's CIDR block will automatically be used for attachment.
	 */
	perPrivateNetworkIpamIpIds: Record<string, string[]>
}

export interface SetServerPrivateNetworksResponse {
	serverPrivateNetworks: ServerPrivateNetwork[]
}
