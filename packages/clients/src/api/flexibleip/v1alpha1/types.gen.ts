// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export type FlexibleIPStatus =
  | 'unknown'
  | 'ready'
  | 'updating'
  | 'attached'
  | 'error'
  | 'detaching'
  | 'locked'

export type ListFlexibleIPsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type MACAddressStatus =
  | 'unknown'
  | 'ready'
  | 'updating'
  | 'used'
  | 'error'
  | 'deleting'

export type MACAddressType = 'unknown_type' | 'vmware' | 'xen' | 'kvm'

/** Attach flexible i ps response. */
export interface AttachFlexibleIPsResponse {
  /** Total count of Flexible IPs being updated. */
  totalCount: number
  /** Listing of Flexible IPs in updating state. */
  flexibleIps: FlexibleIP[]
}

/** Detach flexible i ps response. */
export interface DetachFlexibleIPsResponse {
  /** Total count of Flexible IPs being detached. */
  totalCount: number
  /** Listing of Flexible IPs in detaching state. */
  flexibleIps: FlexibleIP[]
}

/** Flexible ip. */
export interface FlexibleIP {
  /** ID of the Flexible IP. */
  id: string
  /** Organization ID the Flexible IP is attached to. */
  organizationId: string
  /** Project ID the Flexible IP is attached to. */
  projectId: string
  /** Description of the Flexible IP. */
  description: string
  /** Tags associated with the Flexible IP. */
  tags: string[]
  /** Date of last update of the Flexible IP. */
  updatedAt?: Date
  /** Date of creation of the Flexible IP. */
  createdAt?: Date
  /**
   * Status of the Flexible IP.
   *
   * - Ready : Flexible IP is created and ready to be attached to a server or to
   *   have a virtual MAC generated.
   * - Updating: Flexible IP is being attached to a server or a virtual MAC
   *   operation is ongoing
   * - Attached: Flexible IP is attached to a server
   * - Error: a Flexible IP operation resulted in an error
   * - Detaching: Flexible IP is being detached from a server
   * - Locked: Flexible IP resource is locked.
   */
  status: FlexibleIPStatus
  /** IP of the Flexible IP. */
  ipAddress: string
  /** MAC address of the Flexible IP. */
  macAddress?: MACAddress
  /** ID of the server linked to the Flexible IP. */
  serverId?: string
  /** Reverse DNS value. */
  reverse: string
  /** Flexible IP Availability Zone. */
  zone: Zone
}

/** List flexible i ps response. */
export interface ListFlexibleIPsResponse {
  /** Total count of matching Flexible IPs. */
  totalCount: number
  /** Listing of Flexible IPs. */
  flexibleIps: FlexibleIP[]
}

/** Mac address. */
export interface MACAddress {
  /** ID of the Flexible IP. */
  id: string
  /** MAC address of the Virtual MAC. */
  macAddress: string
  /** Virtual MAC type. */
  macType: MACAddressType
  /** Virtual MAC status. */
  status: MACAddressStatus
  /** Date of last update of the Virtual MAC. */
  updatedAt?: Date
  /** Date of creation of the Virtual MAC. */
  createdAt?: Date
  /** MAC Addr IP Availability Zone. */
  zone: Zone
}

export type CreateFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the project to associate with the Flexible IP. */
  projectId?: string
  /** Description to associate with the Flexible IP, max 255 characters. */
  description: string
  /** Tags to associate to the Flexible IP. */
  tags?: string[]
  /** Server ID on which to attach the created Flexible IP. */
  serverId?: string
  /** Reverse DNS value. */
  reverse?: string
  /** If true, creates a Flexible IP with an ipv6 address. */
  isIpv6: boolean
}

export type GetFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Flexible IP ID. */
  fipId: string
}

export type ListFlexibleIPsRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** The sort order of the returned Flexible IPs. */
  orderBy?: ListFlexibleIPsRequestOrderBy
  /** The page number for the returned Flexible IPs. */
  page?: number
  /** The maximum number of Flexible IPs per page. */
  pageSize?: number
  /** Filter Flexible IPs with one or more matching tags. */
  tags?: string[]
  /** Filter Flexible IPs by status. */
  status?: FlexibleIPStatus[]
  /** Filter Flexible IPs by server IDs. */
  serverIds?: string[]
  /** Filter Flexible IPs by organization ID. */
  organizationId?: string
  /** Filter Flexible IPs by project ID. */
  projectId?: string
}

export type UpdateFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the Flexible IP to update. */
  fipId: string
  /** Description to associate with the Flexible IP, max 255 characters. */
  description?: string
  /** Tags to associate with the Flexible IP. */
  tags?: string[]
  /** Reverse DNS value. */
  reverse?: string
}

export type DeleteFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the Flexible IP to delete. */
  fipId: string
}

export type AttachFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /**
   * A list of Flexible IP IDs to attach. Multiple IDs can be provided as long
   * as Flexible IPs belong to the same MAC groups (see details about MAC
   * groups).
   */
  fipsIds: string[]
  /** A server ID on which to attach the Flexible IPs. */
  serverId: string
}

export type DetachFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /**
   * A list of Flexible IP IDs to detach. Multiple IDs can be provided as long
   * as Flexible IPs belong to the same MAC groups (see details about MAC
   * groups).
   */
  fipsIds: string[]
}

export type GenerateMACAddrRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Flexible IP ID on which to generate a Virtual MAC. */
  fipId: string
  /** TODO. */
  macType: MACAddressType
}

export type DuplicateMACAddrRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /**
   * Flexible IP ID on which to duplicate the Virtual MAC. Flexible IPs need to
   * be attached to the same server.
   */
  fipId: string
  /**
   * Flexible IP ID to duplicate the Virtual MAC from. Flexible IPs need to be
   * attached to the same server.
   */
  duplicateFromFipId: string
}

export type MoveMACAddrRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  fipId: string
  dstFipId: string
}

export type DeleteMACAddrRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /**
   * Flexible IP ID from which to delete the Virtual MAC. If the Flexible IP
   * belongs to a MAC group, the MAC will be removed from the MAC group and from
   * the Flexible IP.
   */
  fipId: string
}
