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

export type BgpStatus = 'unknown_bgp_status' | 'up' | 'down' | 'disabled'

export type DedicatedConnectionStatus =
  | 'unknown_status'
  | 'created'
  | 'configuring'
  | 'failed'
  | 'active'
  | 'disabled'
  | 'deleted'
  | 'locked'

export type LinkKind = 'hosted' | 'self_hosted'

export type LinkStatus =
  | 'unknown_link_status'
  | 'configuring'
  | 'failed'
  | 'requested'
  | 'refused'
  | 'expired'
  | 'provisioning'
  | 'active'
  | 'limited_connectivity'
  | 'all_down'
  | 'deprovisioning'
  | 'deleted'
  | 'locked'
  | 'ready'

export type ListDedicatedConnectionsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'

export type ListLinksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'

export type ListPartnersRequestOrderBy = 'name_asc' | 'name_desc'

export type ListPopsRequestOrderBy = 'name_asc' | 'name_desc'

export type ListRoutingPoliciesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export interface BgpConfig {
  /**
   * AS Number of the BGP peer.
   */
  asn: number
  /**
   * IPv4 address of the BGP peer.
   */
  ipv4: string
  /**
   * IPv6 address of the BGP peer.
   */
  ipv6: string
}

export interface PartnerHost {
  /**
   * ID of the partner facilitating the link.
   */
  partnerId: string
  /**
   * Used to identify a link from a user or partner's point of view.
   */
  pairingKey: string
  /**
   * Reason given by partner to explain why they did not approve the request for a hosted link.
   */
  disapprovedReason?: string
}

export interface SelfHost {
  /**
   * Dedicated physical connection supporting the link.
   */
  connectionId: string
}

export interface DedicatedConnection {
  /**
   * Unique identifier of the dedicated connection.
   */
  id: string
  /**
   * Project ID.
   */
  projectId: string
  /**
   * Organization ID.
   */
  organizationId: string
  /**
   * Status of the dedicated connection.
   */
  status: DedicatedConnectionStatus
  /**
   * Name of the dedicated connection.
   */
  name: string
  /**
   * List of tags associated with the dedicated connection.
   */
  tags: string[]
  /**
   * ID of the PoP where the dedicated connection is located.
   */
  popId: string
  /**
   * Bandwidth size of the dedicated connection.
   */
  bandwidthMbps: number
  /**
   * Size of the links supported on this dedicated connection.
   */
  availableLinkBandwidths: number[]
  /**
   * Creation date of the dedicated connection.
   */
  createdAt?: Date
  /**
   * Last modification date of the dedicated connection.
   */
  updatedAt?: Date
  /**
   * Demarcation details required by the data center to set up the supporting Cross Connect. This generally includes the physical space in the facility, the cabinet or rack the connection should land in, the patch panel to go in, the port designation, and the media type.
   */
  demarcationInfo?: string
  /**
   * Region of the dedicated connection.
   */
  region: ScwRegion
}

export interface Link {
  /**
   * Unique identifier of the link.
   */
  id: string
  /**
   * Project ID.
   */
  projectId: string
  /**
   * Organization ID.
   */
  organizationId: string
  /**
   * Name of the link.
   */
  name: string
  /**
   * List of tags associated with the link.
   */
  tags: string[]
  /**
   * ID of the PoP where the link's corresponding connection is located.
   */
  popId: string
  /**
   * Rate limited bandwidth of the link.
   */
  bandwidthMbps: number
  /**
   * Status of the link.
   */
  status: LinkStatus
  /**
   * Status of the link's BGP IPv4 session.
   */
  bgpV4Status: BgpStatus
  /**
   * Status of the link's BGP IPv6 session.
   */
  bgpV6Status: BgpStatus
  /**
   * ID of the Scaleway VPC attached to the link.
   */
  vpcId?: string
  /**
   * @deprecated Deprecated. Use routing_policy_v4_id or routing_policy_v6_id instead.
   */
  routingPolicyId?: string
  /**
   * Defines whether route propagation is enabled or not. To enable or disable route propagation, use the dedicated endpoint.
   */
  enableRoutePropagation: boolean
  /**
   * Creation date of the link.
   */
  createdAt?: Date
  /**
   * Last modification date of the link.
   */
  updatedAt?: Date
  /**
   * Partner host information.
   *
   * One-of ('hostInfo'): at most one of 'partner', 'self' could be set.
   */
  partner?: PartnerHost
  /**
   * Self-host information.
   *
   * One-of ('hostInfo'): at most one of 'partner', 'self' could be set.
   */
  self?: SelfHost
  /**
   * VLAN of the link.
   */
  vlan: number
  /**
   * BGP configuration on Scaleway's side.
   */
  scwBgpConfig?: BgpConfig
  /**
   * BGP configuration on peer's side (on-premises or other hosting provider).
   */
  peerBgpConfig?: BgpConfig
  /**
   * ID of the routing policy IPv4 attached to the link.
   */
  routingPolicyV4Id?: string
  /**
   * ID of the routing policy IPv6 attached to the link.
   */
  routingPolicyV6Id?: string
  /**
   * Region of the link.
   */
  region: ScwRegion
}

export interface Partner {
  /**
   * Unique identifier of the partner.
   */
  id: string
  /**
   * Name of the partner.
   */
  name: string
  /**
   * Contact email address of partner.
   */
  contactEmail: string
  /**
   * Image URL of the partner's logo.
   */
  logoUrl: string
  /**
   * URL of the partner's portal.
   */
  portalUrl: string
  /**
   * Creation date of the partner.
   */
  createdAt?: Date
  /**
   * Last modification date of the partner.
   */
  updatedAt?: Date
}

export interface Pop {
  /**
   * Unique identifier of the PoP.
   */
  id: string
  /**
   * Name of the PoP. It is the common reference of Hosting DC (ex: TH2).
   */
  name: string
  /**
   * Name of the PoP's hosting provider, e.g. Telehouse for TH2 or OpCore for DC3.
   */
  hostingProviderName: string
  /**
   * Physical address of the PoP.
   */
  address: string
  /**
   * City where PoP is located.
   */
  city: string
  /**
   * Image URL of the PoP's logo.
   */
  logoUrl: string
  /**
   * Available bandwidth in Mbits/s for future hosted links from available connections in this PoP.
   */
  availableLinkBandwidthsMbps: number[]
  /**
   * Region of the PoP.
   */
  region: ScwRegion
}

export interface RoutingPolicy {
  /**
   * Unique identifier of the routing policy.
   */
  id: string
  /**
   * Project ID.
   */
  projectId: string
  /**
   * Organization ID.
   */
  organizationId: string
  /**
   * Name of the routing policy.
   */
  name: string
  /**
   * List of tags associated with the routing policy.
   */
  tags: string[]
  /**
   * IP prefixes to accept from the peer (ranges of route announcements to accept).
   */
  prefixFilterIn: string[]
  /**
   * IP prefix filters to advertise to the peer (ranges of routes to advertise).
   */
  prefixFilterOut: string[]
  /**
   * Creation date of the routing policy.
   */
  createdAt?: Date
  /**
   * Last modification date of the routing policy.
   */
  updatedAt?: Date
  /**
   * IP prefixes version of the routing policy.
   */
  isIpv6: boolean
  /**
   * Region of the routing policy.
   */
  region: ScwRegion
}

export type AttachRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link to attach a routing policy to.
   */
  linkId: string
  /**
   * ID of the routing policy to be attached.
   */
  routingPolicyId: string
}

export type AttachVpcRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link to attach VPC to.
   */
  linkId: string
  /**
   * ID of the VPC to attach.
   */
  vpcId: string
}

export type CreateLinkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project to create the link in.
   */
  projectId?: string
  /**
   * Name of the link.
   */
  name: string
  /**
   * List of tags to apply to the link.
   */
  tags?: string[]
  /**
   * PoP (location) where the link will be created.
   */
  popId: string
  /**
   * Desired bandwidth for the link. Must be compatible with available link bandwidths and remaining bandwidth capacity of the connection.
   */
  bandwidthMbps: number
  /**
   * If set, creates a self-hosted link using this dedicated physical connection. As the customer, specify the ID of the physical connection you already have for this link.
   *
   * One-of ('host'): at most one of 'connectionId', 'partnerId' could be set.
   */
  connectionId?: string
  /**
   * If set, creates a hosted link on a partner's connection. Specify the ID of the chosen partner, who already has a shared connection with available bandwidth.
   *
   * One-of ('host'): at most one of 'connectionId', 'partnerId' could be set.
   */
  partnerId?: string
  /**
   * For self-hosted links we need the peer AS Number to establish BGP session. If not given, a default one will be assigned.
   */
  peerAsn?: number
  /**
   * For self-hosted links only, it is possible to choose the VLAN ID. If the VLAN is not available (ie already taken or out of range), an error is returned.
   */
  vlan?: number
  /**
   * If set, attaches this routing policy containing IPv4 prefixes to the Link. Hence, a BGP IPv4 session will be created.
   */
  routingPolicyV4Id?: string
  /**
   * If set, attaches this routing policy containing IPv6 prefixes to the Link. Hence, a BGP IPv6 session will be created.
   */
  routingPolicyV6Id?: string
}

export type CreateRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project to create the routing policy in.
   */
  projectId?: string
  /**
   * Name of the routing policy.
   */
  name: string
  /**
   * List of tags to apply to the routing policy.
   */
  tags?: string[]
  /**
   * IP prefixes to accept from the peer (ranges of route announcements to accept).
   */
  prefixFilterIn?: string[]
  /**
   * IP prefix filters to advertise to the peer (ranges of routes to advertise).
   */
  prefixFilterOut?: string[]
  /**
   * IP prefixes version of the routing policy.
   */
  isIpv6: boolean
}

export type DeleteLinkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link to delete.
   */
  linkId: string
}

export type DeleteRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the routing policy to delete.
   */
  routingPolicyId: string
}

export type DetachRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link to detach a routing policy from.
   */
  linkId: string
  /**
   * ID of the routing policy to be detached.
   */
  routingPolicyId: string
}

export type DetachVpcRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link to detach the VPC from.
   */
  linkId: string
}

export type DisableRoutePropagationRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link on which to disable route propagation.
   */
  linkId: string
}

export type EnableRoutePropagationRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link on which to enable route propagation.
   */
  linkId: string
}

export type GetDedicatedConnectionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of connection to get.
   */
  connectionId: string
}

export type GetLinkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link to get.
   */
  linkId: string
}

export type GetPartnerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of partner to get.
   */
  partnerId: string
}

export type GetPopRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of PoP to get.
   */
  popId: string
}

export type GetRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the routing policy to get.
   */
  routingPolicyId: string
}

export type ListDedicatedConnectionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Order in which to return results.
   */
  orderBy?: ListDedicatedConnectionsRequestOrderBy
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of connections to return per page.
   */
  pageSize?: number
  /**
   * Project ID to filter for.
   */
  projectId?: string
  /**
   * Organization ID to filter for.
   */
  organizationId?: string
  /**
   * Link name to filter for.
   */
  name?: string
  /**
   * Tags to filter for.
   */
  tags?: string[]
  /**
   * Connection status to filter for.
   */
  status?: DedicatedConnectionStatus
  /**
   * Filter for dedicated connections with this bandwidth size.
   */
  bandwidthMbps?: number
  /**
   * Filter for dedicated connections present in this PoP.
   */
  popId?: string
}

export interface ListDedicatedConnectionsResponse {
  /**
   * List of connections on current page.
   */
  connections: DedicatedConnection[]
  /**
   * Total number of connections returned.
   */
  totalCount: number
}

export type ListLinksRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Order in which to return results.
   */
  orderBy?: ListLinksRequestOrderBy
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of links to return per page.
   */
  pageSize?: number
  /**
   * Project ID to filter for.
   */
  projectId?: string
  /**
   * Organization ID to filter for.
   */
  organizationId?: string
  /**
   * Link name to filter for.
   */
  name?: string
  /**
   * Tags to filter for.
   */
  tags?: string[]
  /**
   * Link status to filter for.
   */
  status?: LinkStatus
  /**
   * BGP IPv4 status to filter for.
   */
  bgpV4Status?: BgpStatus
  /**
   * BGP IPv6 status to filter for.
   */
  bgpV6Status?: BgpStatus
  /**
   * Filter for links attached to this PoP (via connections).
   */
  popId?: string
  /**
   * Filter for link bandwidth (in Mbps).
   */
  bandwidthMbps?: number
  /**
   * Filter for links hosted by this partner.
   */
  partnerId?: string
  /**
   * Filter for links attached to this VPC.
   */
  vpcId?: string
  /**
   * Filter for links using this routing policy.
   */
  routingPolicyId?: string
  /**
   * Filter for the link with this pairing_key.
   */
  pairingKey?: string
  /**
   * Filter for hosted or self-hosted links.
   */
  kind?: LinkKind
  /**
   * Filter for links self-hosted on this connection.
   */
  connectionId?: string
}

export interface ListLinksResponse {
  /**
   * List of links on the current page.
   */
  links: Link[]
  /**
   * Total number of links.
   */
  totalCount: number
}

export type ListPartnersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Order in which to return results.
   */
  orderBy?: ListPartnersRequestOrderBy
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of partners to return per page.
   */
  pageSize?: number
  /**
   * Filter for partners present (offering a connection) in one of these PoPs.
   */
  popIds?: string[]
}

export interface ListPartnersResponse {
  /**
   * List of partners on current page.
   */
  partners: Partner[]
  /**
   * Total number of partners returned.
   */
  totalCount: number
}

export type ListPopsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Order in which to return results.
   */
  orderBy?: ListPopsRequestOrderBy
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of PoPs to return per page.
   */
  pageSize?: number
  /**
   * PoP name to filter for.
   */
  name?: string
  /**
   * Hosting provider name to filter for.
   */
  hostingProviderName?: string
  /**
   * Filter for PoPs hosting an available shared connection from this partner.
   */
  partnerId?: string
  /**
   * Filter for PoPs with a shared connection allowing this bandwidth size. Note that we cannot guarantee that PoPs returned will have available capacity.
   */
  linkBandwidthMbps?: number
  /**
   * Filter for PoPs with a dedicated connection available for self-hosted links.
   */
  dedicatedAvailable?: boolean
}

export interface ListPopsResponse {
  /**
   * List of PoPs on the current page.
   */
  pops: Pop[]
  /**
   * Total number of PoPs.
   */
  totalCount: number
}

export type ListRoutingPoliciesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Order in which to return results.
   */
  orderBy?: ListRoutingPoliciesRequestOrderBy
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of routing policies to return per page.
   */
  pageSize?: number
  /**
   * Project ID to filter for.
   */
  projectId?: string
  /**
   * Organization ID to filter for.
   */
  organizationId?: string
  /**
   * Routing policy name to filter for.
   */
  name?: string
  /**
   * Tags to filter for.
   */
  tags?: string[]
  /**
   * Filter for the routing policies based on IP prefixes version.
   */
  ipv6?: boolean
}

export interface ListRoutingPoliciesResponse {
  routingPolicies: RoutingPolicy[]
  totalCount: number
}

export type SetRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link to set a routing policy from.
   */
  linkId: string
  /**
   * ID of the routing policy to be set.
   */
  routingPolicyId: string
}

export type UpdateLinkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the link to update.
   */
  linkId: string
  /**
   * Name of the link.
   */
  name?: string
  /**
   * List of tags to apply to the link.
   */
  tags?: string[]
  /**
   * For self-hosted links, AS Number to establish BGP session.
   */
  peerAsn?: number
}

export type UpdateRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the routing policy to update.
   */
  routingPolicyId: string
  /**
   * Name of the routing policy.
   */
  name?: string
  /**
   * List of tags to apply to the routing policy.
   */
  tags?: string[]
  /**
   * IP prefixes to accept from the peer (ranges of route announcements to accept).
   */
  prefixFilterIn?: string[]
  /**
   * IP prefix filters for routes to advertise to the peer (ranges of routes to advertise).
   */
  prefixFilterOut?: string[]
}
