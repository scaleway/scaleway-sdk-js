// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region, Zone } from '../../../bridge'

export type ListIPsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'
  | 'attached_at_desc'
  | 'attached_at_asc'

export type ResourceType =
  | 'unknown_type'
  | 'instance_server'
  | 'instance_ip'
  | 'instance_private_nic'
  | 'lb_server'
  | 'fip_ip'
  | 'vpc_gateway'
  | 'vpc_gateway_network'
  | 'k8s_node'
  | 'k8s_cluster'
  | 'rdb_instance'
  | 'redis_cluster'
  | 'baremetal_server'
  | 'baremetal_private_nic'
  | 'llm_deployment'

export interface Resource {
  /** Type of resource the IP is attached to. */
  type: ResourceType
  /** ID of the resource the IP is attached to. */
  id: string
  /** MAC of the resource the IP is attached to. */
  macAddress?: string
  /**
   * When the IP is in a Private Network, then a DNS record is available to
   * resolve the resource name to this IP.
   */
  name?: string
}

export interface Reverse {
  /** Reverse domain name. */
  hostname: string
  /** IP corresponding to the hostname. */
  address?: string
}

export interface Source {
  /**
   * This source is global.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId'
   * could be set.
   */
  zonal?: string
  /**
   * This source is specific.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId'
   * could be set.
   */
  privateNetworkId?: string
  /**
   * This source is specific.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId'
   * could be set.
   */
  subnetId?: string
}

export interface IP {
  /** IP ID. */
  id: string
  /** IPv4 or IPv6 address in CIDR notation. */
  address: string
  /** Scaleway Project the IP belongs to. */
  projectId: string
  /** Defines whether the IP is an IPv6 (false = IPv4). */
  isIpv6: boolean
  /** Date the IP was booked. */
  createdAt?: Date
  /** Date the IP was last modified. */
  updatedAt?: Date
  /** Source pool where the IP was booked in. */
  source?: Source
  /** Resource which the IP is attached to. */
  resource?: Resource
  /** Tags for the IP. */
  tags: string[]
  /** Array of reverses associated with the IP. */
  reverses: Reverse[]
  /** Region of the IP. */
  region: Region
  /** Zone of the IP, if zonal. */
  zone?: Zone
}

export type BookIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /**
   * When creating an IP in a Private Network, the Project must match the
   * Private Network's Project.
   */
  projectId?: string
  /** Source in which to book the IP. Not all sources are available for booking. */
  source: Source
  /** Request an IPv6 instead of an IPv4. */
  isIpv6: boolean
  /**
   * The requested address should not include the subnet mask (/suffix). Note
   * that only the Private Network source allows you to pick a specific IP. If
   * the requested IP is already booked, then the call will fail.
   */
  address?: string
  /** Tags for the IP. */
  tags?: string[]
}

export type GetIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** IP ID. */
  ipId: string
}

export type ListIPsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Sort order of the returned IPs. */
  orderBy?: ListIPsRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Maximum number of IPs to return per page. */
  pageSize?: number
  /**
   * Project ID to filter for. Only IPs belonging to this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Zone to filter for. Only IPs that are zonal, and in this zone, will be
   * returned.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId'
   * could be set.
   */
  zonal?: string
  /**
   * Only IPs that are private, and in this Private Network, will be returned.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId'
   * could be set.
   */
  privateNetworkId?: string
  /**
   * Only IPs inside this exact subnet will be returned.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId'
   * could be set.
   */
  subnetId?: string
  /** Only IPs owned by resources in this VPC will be returned. */
  vpcId?: string
  /** Defines whether to filter only for IPs which are attached to a resource. */
  attached?: boolean
  /**
   * Resource ID to filter for. Only IPs attached to this resource will be
   * returned.
   */
  resourceId?: string
  /**
   * Resource type to filter for. Only IPs attached to this type of resource
   * will be returned.
   */
  resourceType?: ResourceType
  /**
   * MAC address to filter for. Only IPs attached to a resource with this MAC
   * address will be returned.
   */
  macAddress?: string
  /**
   * Tags to filter for, only IPs with one or more matching tags will be
   * returned.
   */
  tags?: string[]
  /**
   * Organization ID to filter for. Only IPs belonging to this Organization will
   * be returned.
   */
  organizationId?: string
  /** Defines whether to filter only for IPv4s or IPv6s. */
  isIpv6?: boolean
  /**
   * Attached resource name to filter for, only IPs attached to a resource with
   * this string within their name will be returned.
   */
  resourceName?: string
  /**
   * Resource types to filter for. Only IPs attached to these types of resources
   * will be returned.
   */
  resourceTypes?: ResourceType[]
}

export interface ListIPsResponse {
  totalCount: number
  ips: IP[]
}

export type ReleaseIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** IP ID. */
  ipId: string
}

export type ReleaseIPSetRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  ipIds?: string[]
}

export type UpdateIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** IP ID. */
  ipId: string
  /** Tags for the IP. */
  tags?: string[]
  /**
   * Array of reverse domain names associated with an IP in the subnet of the
   * current IP.
   */
  reverses?: Reverse[]
}
