// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, } from '@scaleway/sdk-client'


export type AclRuleProtocol =
  | 'ANY'
  | 'TCP'
  | 'UDP'
  | 'ICMP'

export type Action =
  | 'unknown_action'
  | 'accept'
  | 'drop'

export type ListPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListSubnetsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListVPCConnectorsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListVPCsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type RouteType =
  | 'unknown_route_type'
  | 'subnet'
  | 'default'
  | 'custom'
  | 'interlink'
  | 's2s_vpn'

export type VPCConnectorStatus =
  | 'unknown_vpc_connector_status'
  | 'orphan'
  | 'peered'
  | 'conflict'

export interface Subnet {
  /**
   * ID of the subnet.
   */
  id: string
  /**
   * Subnet creation date.
   */
  createdAt?: Date
  /**
   * Subnet last modification date.
   */
  updatedAt?: Date
  /**
   * Subnet CIDR.
   */
  subnet: string
  /**
   * Scaleway Project the subnet belongs to.
   */
  projectId: string
  /**
   * Private Network the subnet belongs to.
   */
  privateNetworkId: string
  /**
   * VPC the subnet belongs to.
   */
  vpcId: string
}


export interface PrivateNetwork {
  /**
   * Private Network ID.
   */
  id: string
  /**
   * Private Network name.
   */
  name: string
  /**
   * Scaleway Organization the Private Network belongs to.
   */
  organizationId: string
  /**
   * Scaleway Project the Private Network belongs to.
   */
  projectId: string
  /**
   * Region in which the Private Network is available.
   */
  region: ScwRegion
  /**
   * Tags of the Private Network.
   */
  tags: string[]
  /**
   * Date the Private Network was created.
   */
  createdAt?: Date
  /**
   * Date the Private Network was last modified.
   */
  updatedAt?: Date
  /**
   * Private Network subnets.
   */
  subnets: Subnet[]
  /**
   * VPC the Private Network belongs to.
   */
  vpcId: string
  /**
   * Defines whether managed DHCP is enabled for this Private Network.
   */
  dhcpEnabled: boolean
  /**
   * Defines whether default v4 and v6 routes are propagated for this Private Network.
   */
  defaultRoutePropagationEnabled: boolean
}


export interface Route {
  /**
   * Route ID.
   */
  id: string
  /**
   * Route description.
   */
  description: string
  /**
   * Tags of the Route.
   */
  tags: string[]
  /**
   * VPC the Route belongs to.
   */
  vpcId: string
  /**
   * Destination of the Route.
   */
  destination: string
  /**
   * ID of the nexthop resource.
   */
  nexthopResourceId?: string
  /**
   * ID of the nexthop private network.
   */
  nexthopPrivateNetworkId?: string
  /**
   * ID of the nexthop VPC connector.
   */
  nexthopVpcConnectorId?: string
  /**
   * Date the Route was created.
   */
  createdAt?: Date
  /**
   * Date the Route was last modified.
   */
  updatedAt?: Date
  /**
   * Defines whether the route can be modified or deleted by the user.
   */
  isReadOnly: boolean
  /**
   * Type of the Route.
   */
  type?: RouteType
  /**
   * Region of the Route.
   */
  region: ScwRegion
}


export interface VPCConnectorPeerInfo {
  organizationId: string
  projectId: string
  vpcName: string
}


export interface AclRule {
  /**
   * Protocol to which this rule applies.
   */
  protocol: AclRuleProtocol
  /**
   * Source IP range to which this rule applies (CIDR notation with subnet mask).
   */
  source: string
  /**
   * Starting port of the source port range to which this rule applies (inclusive).
   */
  srcPortLow: number
  /**
   * Ending port of the source port range to which this rule applies (inclusive).
   */
  srcPortHigh: number
  /**
   * Destination IP range to which this rule applies (CIDR notation with subnet mask).
   */
  destination: string
  /**
   * Starting port of the destination port range to which this rule applies (inclusive).
   */
  dstPortLow: number
  /**
   * Ending port of the destination port range to which this rule applies (inclusive).
   */
  dstPortHigh: number
  /**
   * Policy to apply to the packet.
   */
  action: Action
  /**
   * Rule description.
   */
  description?: string
}


export interface VPCConnector {
  /**
   * VPC connector ID.
   */
  id: string
  /**
   * VPC connector name.
   */
  name: string
  /**
   * Scaleway Organization the VPC connector belongs to.
   */
  organizationId: string
  /**
   * Scaleway Project the VPC connector belongs to.
   */
  projectId: string
  /**
   * VPC the VPC connector belongs to (origin VPC).
   */
  vpcId: string
  /**
   * VPC with which the VPC connector is peered (target VPC).
   */
  targetVpcId: string
  /**
   * Status of the VPC connector.
   */
  status: VPCConnectorStatus
  /**
   * Peer info of target VPC. Available when status is Peered.
   */
  peerInfo?: VPCConnectorPeerInfo
  /**
   * Region of the VPC connector.
   */
  region: ScwRegion
  /**
   * Tags for the VPC connector.
   */
  tags: string[]
  /**
   * Date the VPC connector was created.
   */
  createdAt?: Date
  /**
   * Date the VPC connector was last modified.
   */
  updatedAt?: Date
}


export interface VPC {
  /**
   * VPC ID.
   */
  id: string
  /**
   * VPC name.
   */
  name: string
  /**
   * Scaleway Organization the VPC belongs to.
   */
  organizationId: string
  /**
   * Scaleway Project the VPC belongs to.
   */
  projectId: string
  /**
   * Region of the VPC.
   */
  region: ScwRegion
  /**
   * Tags for the VPC.
   */
  tags: string[]
  /**
   * Defines whether the VPC is the default one for its Project.
   */
  isDefault: boolean
  /**
   * Date the VPC was created.
   */
  createdAt?: Date
  /**
   * Date the VPC was last modified.
   */
  updatedAt?: Date
  /**
   * Number of Private Networks within this VPC.
   */
  privateNetworkCount: number
  /**
   * Defines whether the VPC routes traffic between its Private Networks.
   */
  routingEnabled: boolean
  /**
   * Defines whether the VPC advertises custom routes between its Private Networks.
   */
  customRoutesPropagationEnabled: boolean
}


export type AddSubnetsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Private Network ID.
   */
  privateNetworkId: string
  /**
   * Private Network subnets CIDR.
   */
  subnets?: string[]
}


export interface AddSubnetsResponse {
  subnets: string[]
}


export type CreatePrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name for the Private Network.
   */
  name?: string
  /**
   * Scaleway Project in which to create the Private Network.
   */
  projectId?: string
  /**
   * Tags for the Private Network.
   */
  tags?: string[]
  /**
   * Private Network subnets CIDR.
   */
  subnets?: string[]
  /**
   * VPC in which to create the Private Network.
   */
  vpcId?: string
  /**
   * Defines whether default v4 and v6 routes are propagated for this Private Network.
   */
  defaultRoutePropagationEnabled: boolean
}


export type CreateRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route description.
   */
  description: string
  /**
   * Tags of the Route.
   */
  tags?: string[]
  /**
   * VPC the Route belongs to.
   */
  vpcId: string
  /**
   * Destination of the Route.
   */
  destination: string
  /**
   * ID of the nexthop resource.
   */
  nexthopResourceId?: string
  /**
   * ID of the nexthop private network.
   */
  nexthopPrivateNetworkId?: string
  /**
   * ID of the nexthop VPC Connector.
   */
  nexthopVpcConnectorId?: string
}


export type CreateVPCConnectorRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name for the VPC connector.
   */
  name?: string
  /**
   * Tags for the VPC connector.
   */
  tags?: string[]
  /**
   * VPC ID to filter for. Only connectors belonging to this VPC will be returned.
   */
  vpcId: string
  /**
   * Target VPC ID to filter for. Only connectors belonging to this target VPC will be returned.
   */
  targetVpcId: string
}


export type CreateVPCRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name for the VPC.
   */
  name?: string
  /**
   * Scaleway Project in which to create the VPC.
   */
  projectId?: string
  /**
   * Tags for the VPC.
   */
  tags?: string[]
  /**
   * Enable routing between Private Networks in the VPC.
   */
  enableRouting: boolean
}


export type DeletePrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Private Network ID.
   */
  privateNetworkId: string
}


export type DeleteRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route ID.
   */
  routeId: string
}


export type DeleteSubnetsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Private Network ID.
   */
  privateNetworkId: string
  /**
   * Private Network subnets CIDR.
   */
  subnets?: string[]
}


export interface DeleteSubnetsResponse {
  subnets: string[]
}


export type DeleteVPCConnectorRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * VPC connector ID.
   */
  vpcConnectorId: string
}


export type DeleteVPCRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * VPC ID.
   */
  vpcId: string
}


export type EnableCustomRoutesPropagationRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * VPC ID.
   */
  vpcId: string
}


export type EnableDHCPRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Private Network ID.
   */
  privateNetworkId: string
}


export type EnableRoutingRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * VPC ID.
   */
  vpcId: string
}


export type GetAclRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Network ACL's VPC.
   */
  vpcId: string
  /**
   * Defines whether this set of ACL rules is for IPv6 (false = IPv4). Each Network ACL can have rules for only one IP type.
   */
  isIpv6: boolean
}


export interface GetAclResponse {
  rules: AclRule[]
  defaultPolicy: Action
}


export type GetPrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Private Network ID.
   */
  privateNetworkId: string
}


export type GetRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route ID.
   */
  routeId: string
}


export type GetVPCConnectorRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * VPC connector ID.
   */
  vpcConnectorId: string
}


export type GetVPCRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * VPC ID.
   */
  vpcId: string
}


export type ListPrivateNetworksRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order of the returned Private Networks.
   */
  orderBy?: ListPrivateNetworksRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Maximum number of Private Networks to return per page.
   */
  pageSize?: number
  /**
   * Name to filter for. Only Private Networks with names containing this string will be returned.
   */
  name?: string
  /**
   * Tags to filter for. Only Private Networks with one or more matching tags will be returned.
   */
  tags?: string[]
  /**
   * Organization ID to filter for. Only Private Networks belonging to this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only Private Networks belonging to this Project will be returned.
   */
  projectId?: string
  /**
   * Private Network IDs to filter for. Only Private Networks with one of these IDs will be returned.
   */
  privateNetworkIds?: string[]
  /**
   * VPC ID to filter for. Only Private Networks belonging to this VPC will be returned.
   */
  vpcId?: string
  /**
   * DHCP status to filter for. When true, only Private Networks with managed DHCP enabled will be returned.
   */
  dhcpEnabled?: boolean
}


export interface ListPrivateNetworksResponse {
  privateNetworks: PrivateNetwork[]
  totalCount: number
}


export type ListSubnetsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order of the returned subnets.
   */
  orderBy?: ListSubnetsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Maximum number of Private Networks to return per page.
   */
  pageSize?: number
  /**
   * Organization ID to filter for. Only subnets belonging to this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only subnets belonging to this Project will be returned.
   */
  projectId?: string
  /**
   * Subnet IDs to filter for. Only subnets matching the specified IDs will be returned.
   */
  subnetIds?: string[]
  /**
   * VPC ID to filter for. Only subnets belonging to this VPC will be returned.
   */
  vpcId?: string
}


export interface ListSubnetsResponse {
  subnets: Subnet[]
  totalCount: number
}


export type ListVPCConnectorsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order of the returned VPC connectors.
   */
  orderBy?: ListVPCConnectorsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Maximum number of VPC connectors to return per page.
   */
  pageSize?: number
  /**
   * Name to filter for. Only connectors with names containing this string will be returned.
   */
  name?: string
  /**
   * Tags to filter for. Only connectors with one or more matching tags will be returned.
   */
  tags?: string[]
  /**
   * Organization ID to filter for. Only connectors belonging to this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only connectors belonging to this Project will be returned.
   */
  projectId?: string
  /**
   * VPC ID to filter for. Only connectors belonging to this VPC will be returned.
   */
  vpcId?: string
  /**
   * Target VPC ID to filter for. Only connectors belonging to this target VPC will be returned.
   */
  targetVpcId?: string
  /**
   * Status of the VPC connector.
   */
  status?: VPCConnectorStatus
}


export interface ListVPCConnectorsResponse {
  vpcConnectors: VPCConnector[]
  totalCount: number
}


export type ListVPCsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order of the returned VPCs.
   */
  orderBy?: ListVPCsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Maximum number of VPCs to return per page.
   */
  pageSize?: number
  /**
   * Name to filter for. Only VPCs with names containing this string will be returned.
   */
  name?: string
  /**
   * Tags to filter for. Only VPCs with one or more matching tags will be returned.
   */
  tags?: string[]
  /**
   * Organization ID to filter for. Only VPCs belonging to this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only VPCs belonging to this Project will be returned.
   */
  projectId?: string
  /**
   * Defines whether to filter only for VPCs which are the default one for their Project.
   */
  isDefault?: boolean
  /**
   * Defines whether to filter only for VPCs which route traffic between their Private Networks.
   */
  routingEnabled?: boolean
}


export interface ListVPCsResponse {
  vpcs: VPC[]
  totalCount: number
}


export type SetAclRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Network ACL's VPC.
   */
  vpcId: string
  /**
   * List of Network ACL rules.
   */
  rules: AclRule[]
  /**
   * Defines whether this set of ACL rules is for IPv6 (false = IPv4). Each Network ACL can have rules for only one IP type.
   */
  isIpv6: boolean
  /**
   * Action to take for packets which do not match any rules.
   */
  defaultPolicy: Action
}


export interface SetAclResponse {
  rules: AclRule[]
  defaultPolicy: Action
}


export type UpdatePrivateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Private Network ID.
   */
  privateNetworkId: string
  /**
   * Name for the Private Network.
   */
  name?: string
  /**
   * Tags for the Private Network.
   */
  tags?: string[]
  /**
   * Defines whether default v4 and v6 routes are propagated for this Private Network.
   */
  defaultRoutePropagationEnabled?: boolean
}


export type UpdateRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route ID.
   */
  routeId: string
  /**
   * Route description.
   */
  description?: string
  /**
   * Tags of the Route.
   */
  tags?: string[]
  /**
   * Destination of the Route.
   */
  destination?: string
  /**
   * ID of the nexthop resource.
   */
  nexthopResourceId?: string
  /**
   * ID of the nexthop private network.
   */
  nexthopPrivateNetworkId?: string
  /**
   * ID of the nexthop VPC connector.
   */
  nexthopVpcConnectorId?: string
}


export type UpdateVPCConnectorRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * VPC connector ID.
   */
  vpcConnectorId: string
  /**
   * Name for the VPC connector.
   */
  name?: string
  /**
   * Tags for the VPC connector.
   */
  tags?: string[]
}


export type UpdateVPCRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * VPC ID.
   */
  vpcId: string
  /**
   * Name for the VPC.
   */
  name?: string
  /**
   * Tags for the VPC.
   */
  tags?: string[]
}


