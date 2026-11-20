// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type ListIPsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'
  | 'attached_at_desc'
  | 'attached_at_asc'
  | 'ip_address_desc'
  | 'ip_address_asc'
  | 'mac_address_desc'
  | 'mac_address_asc'

export type ResourceType =
  | 'unknown_type'
  | 'custom'
  | 'instance_server'
  | 'instance_ip'
  | 'instance_private_nic'
  | 'lb_server'
  | 'lb_ip'
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
  | 'mgdb_instance'
  | 'apple_silicon_server'
  | 'apple_silicon_private_nic'
  | 'serverless_container'
  | 'serverless_function'
  | 'serverless_job'
  | 'vpn_gateway'
  | 'ddl_datalab'
  | 'kafka_cluster'
  | 'bgp_endpoint'
  | 'scbl_sedb_cluster'
  | 'dtwh_deployment'
  | 'sedb_cluster'
  | 'msgq_cluster'
  | 'edge_vpc_endpoint'
  | 'dviz_cluster'
  | 'nats_cluster'

export interface Resource {
  /**
   * Type of resource the IP is attached to.
   */
  type: ResourceType
  /**
   * ID of the resource the IP is attached to.
   */
  id: string
  /**
   * MAC of the resource the IP is attached to.
   */
  macAddress?: string | null
  /**
   * When the IP is in a Private Network, then a DNS record is available to resolve the resource name to this IP.
   */
  name?: string | null
}


export interface Reverse {
  /**
   * Reverse domain name.
   */
  hostname: string
  /**
   * IP corresponding to the hostname.
   */
  address?: string | null
}


export interface Source {
  /**
   * This source is global.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId', 'vpcId', 'regional' could be set.
   */
  zonal?: string | null
  /**
   * This source is specific.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId', 'vpcId', 'regional' could be set.
   */
  privateNetworkId?: string | null
  /**
   * This source is specific.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId', 'vpcId', 'regional' could be set.
   */
  subnetId?: string | null
  /**
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId', 'vpcId', 'regional' could be set.
   */
  vpcId?: string | null
  /**
   * This source is global.
   *
   * One-of ('source'): at most one of 'zonal', 'privateNetworkId', 'subnetId', 'vpcId', 'regional' could be set.
   */
  regional?: boolean | null
}


export interface CustomResource {
  /**
   * MAC address of the custom resource.
   */
  macAddress: string
  /**
   * When the resource is in a Private Network, a DNS record is available to resolve the resource name.
   */
  name?: string | null
}


export interface IP {
  /**
   * IP ID.
   */
  id: string
  /**
   * The SRN of the IP.
   */
  srn: string
  /**
   * IPv4 or IPv6 address in CIDR notation.
   */
  address: string
  /**
   * Scaleway Project the IP belongs to.
   */
  projectId: string
  /**
   * Defines whether the IP is an IPv6 (false = IPv4).
   */
  isIpv6: boolean
  /**
   * Date the IP was reserved.
   */
  createdAt?: Date | null
  /**
   * Date the IP was last modified.
   */
  updatedAt?: Date | null
  /**
   * Source pool where the IP was reserved in.
   */
  source?: Source | null
  /**
   * Resource which the IP is attached to.
   */
  resource?: Resource | null
  /**
   * Tags for the IP.
   */
  tags: string[]
  /**
   * Array of reverses associated with the IP.
   */
  reverses: Reverse[]
  /**
   * Region of the IP.
   */
  region: ScwRegion
  /**
   * Zone of the IP, if zonal.
   */
  zone?: ScwZone | null
}


export type AttachIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * IP ID.
   */
  ipId: string
  /**
   * Custom resource to be attached to the IP.
   */
  resource: CustomResource
}


export type BookIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * When creating an IP in a Private Network, the Project must match the Private Network's Project.
   */
  projectId?: string | null
  /**
   * Source in which to reserve the IP. Not all sources are available for reservation.
   */
  source: Source
  /**
   * Request an IPv6 instead of an IPv4.
   */
  isIpv6: boolean
  /**
   * The requested address should not include the subnet mask (/suffix). Note that only the Private Network source allows you to pick a specific IP. If the requested IP is already reserved, then the call will fail.
   */
  address?: string | null
  /**
   * Tags for the IP.
   */
  tags?: string[] | null
  /**
   * Custom resource to attach to the IP being reserved. An example of a custom resource is a virtual machine hosted on an Elastic Metal server. Do not use this for attaching IP addresses to standard Scaleway resources, as it will fail - instead, see the relevant product API for an equivalent method.
   */
  resource?: CustomResource | null
}


export type DetachIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * IP ID.
   */
  ipId: string
  /**
   * Custom resource currently attached to the IP.
   */
  resource: CustomResource
}


export type GetIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * IP ID.
   */
  ipId: string
}


export type ListIPsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Sort order of the returned IPs.
   */
  orderBy?: ListIPsRequestOrderBy | null
  /**
   * Page number to return, from the paginated results.
   */
  page?: number | null
  /**
   * Maximum number of IPs to return per page.
   */
  pageSize?: number | null
  /**
   * Project ID to filter for. Only IPs belonging to this Project will be returned.
   */
  projectId?: string | null
  /**
   * Zone to filter for. Only IPs that are zonal, and in this zone, will be returned.
   *
   * One-of ('source'): at most one of 'zonal', 'regional', 'privateNetworkId', 'subnetId', 'sourceVpcId' could be set.
   */
  zonal?: string | null
  /**
   * Filter on regional IPs only.
   *
   * One-of ('source'): at most one of 'zonal', 'regional', 'privateNetworkId', 'subnetId', 'sourceVpcId' could be set.
   */
  regional?: boolean | null
  /**
   * Only IPs that are private, and in this Private Network, will be returned.
   *
   * One-of ('source'): at most one of 'zonal', 'regional', 'privateNetworkId', 'subnetId', 'sourceVpcId' could be set.
   */
  privateNetworkId?: string | null
  /**
   * Only IPs inside this exact subnet will be returned.
   *
   * One-of ('source'): at most one of 'zonal', 'regional', 'privateNetworkId', 'subnetId', 'sourceVpcId' could be set.
   */
  subnetId?: string | null
  /**
   * Only IPs owned by resources in this VPC will be returned.
   */
  vpcId?: string | null
  /**
   * Defines whether to filter only for IPs which are attached to a resource.
   */
  attached?: boolean | null
  /**
   * Attached resource name to filter for, only IPs attached to a resource with this string within their name will be returned.
   */
  resourceName?: string | null
  /**
   * Resource ID to filter for. Only IPs attached to this resource will be returned.
   */
  resourceId?: string | null
  /**
   * Resource IDs to filter for. Only IPs attached to at least one of these resources will be returned.
   */
  resourceIds?: string[] | null
  /**
   * Resource type to filter for. Only IPs attached to this type of resource will be returned.
   */
  resourceType?: ResourceType | null
  /**
   * Resource types to filter for. Only IPs attached to these types of resources will be returned.
   */
  resourceTypes?: ResourceType[] | null
  /**
   * MAC address to filter for. Only IPs attached to a resource with this MAC address will be returned.
   */
  macAddress?: string | null
  /**
   * Tags to filter for, only IPs with one or more matching tags will be returned.
   */
  tags?: string[] | null
  /**
   * Organization ID to filter for. Only IPs belonging to this Organization will be returned.
   */
  organizationId?: string | null
  /**
   * Defines whether to filter only for IPv4s or IPv6s.
   */
  isIpv6?: boolean | null
  /**
   * IP IDs to filter for. Only IPs with these UUIDs will be returned.
   */
  ipIds?: string[] | null
  /**
   *
   * One-of ('source'): at most one of 'zonal', 'regional', 'privateNetworkId', 'subnetId', 'sourceVpcId' could be set.
   */
  sourceVpcId?: string | null
}


export interface ListIPsResponse {
  totalCount: number
  ips: IP[]
}


export type MoveIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * IP ID.
   */
  ipId: string
  /**
   * Custom resource currently attached to the IP.
   */
  fromResource: CustomResource
  /**
   * Custom resource to be attached to the IP.
   */
  toResource?: CustomResource | null
}


export type ReleaseIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * IP ID.
   */
  ipId: string
}


export type ReleaseIPSetRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  ipIds?: string[] | null
}


export type UpdateIPRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * IP ID.
   */
  ipId: string
  /**
   * Tags for the IP.
   */
  tags?: string[] | null
  /**
   * Array of reverse domain names associated with an IP in the subnet of the current IP.
   */
  reverses?: Reverse[] | null
}


