// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type FlexibleIPStatus =
  | 'unknown'
  | 'ready'
  | 'updating'
  | 'attached'
  | 'error'
  | 'detaching'
  | 'locked'

export type ListFlexibleIPsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type MACAddressStatus =
  | 'unknown'
  | 'ready'
  | 'updating'
  | 'used'
  | 'error'
  | 'deleting'

export type MACAddressType =
  | 'unknown_type'
  | 'vmware'
  | 'xen'
  | 'kvm'

export interface MACAddress {
  /**
   * ID of the flexible IP.
   */
  id: string
  /**
   * MAC address of the Virtual MAC.
   */
  macAddress: string
  /**
   * Type of virtual MAC.
   */
  macType: MACAddressType
  /**
   * Status of virtual MAC.
   */
  status: MACAddressStatus
  /**
   * Date on which the virtual MAC was last updated.
   */
  updatedAt?: Date | null
  /**
   * Date on which the virtual MAC was created.
   */
  createdAt?: Date | null
  /**
   * MAC address IP Availability Zone.
   */
  zone: ScwZone
}


export interface FlexibleIP {
  /**
   * ID of the flexible IP.
   */
  id: string
  /**
   * ID of the Organization the flexible IP is attached to.
   */
  organizationId: string
  /**
   * ID of the Project the flexible IP is attached to.
   */
  projectId: string
  /**
   * Flexible IP description.
   */
  description: string
  /**
   * Flexible IP tags.
   */
  tags: string[]
  /**
   * Date on which the flexible IP was last updated.
   */
  updatedAt?: Date | null
  /**
   * Date on which the flexible IP was created.
   */
  createdAt?: Date | null
  /**
   * - ready : flexible IP is created and ready to be attached to a server or to be associated with a virtual MAC.
- updating: flexible IP is being attached to a server or a virtual MAC operation is ongoing
- attached: flexible IP is attached to a server
- error: a flexible IP operation resulted in an error
- detaching: flexible IP is being detached from a server
- locked: the resource of the flexible IP is locked.
   */
  status: FlexibleIPStatus
  /**
   * IP of the flexible IP.
   */
  ipAddress: string
  /**
   * MAC address of the flexible IP.
   */
  macAddress?: MACAddress | null
  /**
   * ID of the server linked to the flexible IP.
   */
  serverId?: string | null
  /**
   * Reverse DNS value.
   */
  reverse: string
  /**
   * Availability Zone of the flexible IP.
   */
  zone: ScwZone
  /**
   * The SRN of the flexible ip.
   */
  srn: string
}


export type AttachFlexibleIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Multiple IDs can be provided, but note that flexible IPs must belong to the same MAC group (see details about MAC groups).
   */
  fipsIds: string[]
  /**
   * ID of the server on which to attach the flexible IPs.
   */
  serverId: string
}


export interface AttachFlexibleIPsResponse {
  /**
   * Total count of flexible IPs that are being updated.
   */
  totalCount: number
  /**
   * List of flexible IPs in an updating state.
   */
  flexibleIps: FlexibleIP[]
}


export type CreateFlexibleIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the project to associate with the Flexible IP.
   */
  projectId?: string | null
  /**
   * Flexible IP description (max. of 255 characters).
   */
  description: string
  /**
   * Tags to associate to the flexible IP.
   */
  tags?: string[] | null
  /**
   * ID of the server to which the newly created flexible IP will be attached.
   */
  serverId?: string | null
  /**
   * Value of the reverse DNS.
   */
  reverse?: string | null
  /**
   * Defines whether the flexible IP has an IPv6 address.
   */
  isIpv6: boolean
}


export type DeleteFlexibleIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the flexible IP to delete.
   */
  fipId: string
}


export type DeleteMACAddrRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * If the flexible IP belongs to a MAC group, the MAC will be removed from both the MAC group and flexible IP.
   */
  fipId: string
}


export type DetachFlexibleIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * List of flexible IP IDs to detach from a server. Multiple IDs can be provided. Note that flexible IPs must belong to the same MAC group.
   */
  fipsIds: string[]
}


export interface DetachFlexibleIPsResponse {
  /**
   * Total count of flexible IPs that are being detached.
   */
  totalCount: number
  /**
   * List of flexible IPs in a detaching state.
   */
  flexibleIps: FlexibleIP[]
}


export type DuplicateMACAddrRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Note that the flexible IPs need to be attached to the same server.
   */
  fipId: string
  /**
   * Note that flexible IPs need to be attached to the same server.
   */
  duplicateFromFipId: string
}


export type GenerateMACAddrRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the flexible IP for which to generate a virtual MAC.
   */
  fipId: string
  /**
   * TODO.
   */
  macType: MACAddressType
}


export type GetFlexibleIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the flexible IP.
   */
  fipId: string
}


export type ListFlexibleIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Sort order of the returned flexible IPs.
   */
  orderBy?: ListFlexibleIPsRequestOrderBy | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Maximum number of flexible IPs per page.
   */
  pageSize?: number | null
  /**
   * Filter by tag, only flexible IPs with one or more matching tags will be returned.
   */
  tags?: string[] | null
  /**
   * Filter by status, only flexible IPs with this status will be returned.
   */
  status?: FlexibleIPStatus[] | null
  /**
   * Filter by server IDs, only flexible IPs with these server IDs will be returned.
   */
  serverIds?: string[] | null
  /**
   * Filter by Organization ID, only flexible IPs from this Organization will be returned.
   */
  organizationId?: string | null
  /**
   * Filter by Project ID, only flexible IPs from this Project will be returned.
   */
  projectId?: string | null
}


export interface ListFlexibleIPsResponse {
  /**
   * Total count of matching flexible IPs.
   */
  totalCount: number
  /**
   * List of all flexible IPs.
   */
  flexibleIps: FlexibleIP[]
}


export type MoveMACAddrRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  fipId: string
  dstFipId: string
}


export type UpdateFlexibleIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the flexible IP to update.
   */
  fipId: string
  /**
   * Flexible IP description (max. 255 characters).
   */
  description?: string | null
  /**
   * Tags associated with the flexible IP.
   */
  tags?: string[] | null
  /**
   * Value of the reverse DNS.
   */
  reverse?: string | null
}


