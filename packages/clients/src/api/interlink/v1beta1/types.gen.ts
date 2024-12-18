// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type BgpStatus = 'unknown_bgp_status' | 'up' | 'down'

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

export interface Link {
  /** Unique identifier of the link. */
  id: string
  /** Project ID. */
  projectId: string
  /** Organization ID. */
  organizationId: string
  /** Name of the link. */
  name: string
  /** List of tags associated with the link. */
  tags: string[]
  /** ID of the PoP where the link's corresponding port is located. */
  popId: string
  /** ID of the partner facilitating this link. */
  partnerId?: string
  /** Rate limited bandwidth of the link. */
  bandwidthMbps: number
  /** Status of the link. */
  status: LinkStatus
  /** Status of the link's BGP IPv4 session. */
  bgpV4Status: BgpStatus
  /** Status of the link's BGP IPv6 session. */
  bgpV6Status: BgpStatus
  /** ID of the Scaleway VPC attached to the link. */
  vpcId?: string
  /** ID of the routing policy attached to the link. */
  routingPolicyId?: string
  /**
   * Defines whether route propagation is enabled or not. To enable or disable
   * route propagation, use the dedicated endpoint.
   */
  enableRoutePropagation: boolean
  /** Creation date of the link. */
  createdAt?: Date
  /** Last modification date of the link. */
  updatedAt?: Date
  /** Used to identify a link from a user or partner's point of view. */
  pairingKey: string
  /** Region of the link. */
  region: Region
}

export interface Partner {
  /** Unique identifier of the partner. */
  id: string
  /** Name of the partner. */
  name: string
  /** Contact email address of partner. */
  contactEmail: string
  /** Image URL of the partner's logo. */
  logoUrl: string
  /** URL of the partner's portal. */
  portalUrl: string
  /** Creation date of the partner. */
  createdAt?: Date
  /** Last modification date of the partner. */
  updatedAt?: Date
}

export interface Pop {
  /** Unique identifier of the PoP. */
  id: string
  /** Name of the PoP. It is the common reference of Hosting DC (ex: TH2). */
  name: string
  /**
   * Name of the PoP's hosting provider, e.g. Telehouse for TH2 or OpCore for
   * DC3.
   */
  hostingProviderName: string
  /** Physical address of the PoP. */
  address: string
  /** City where PoP is located. */
  city: string
  /** Image URL of the PoP's logo. */
  logoUrl: string
  /**
   * Available bandwidth in Mbits/s for future hosted_links from available ports
   * in this PoP.
   */
  availableLinkBandwidthsMbps: number[]
  /** Region of the PoP. */
  region: Region
}

export interface RoutingPolicy {
  /** Unique identifier of the routing policy. */
  id: string
  /** Project ID. */
  projectId: string
  /** Organization ID. */
  organizationId: string
  /** Name of the routing policy. */
  name: string
  /** List of tags associated with the routing policy. */
  tags: string[]
  /**
   * IP prefixes to accept from the peer (ranges of route announcements to
   * accept).
   */
  prefixFilterIn: string[]
  /** IP prefix filters to advertise to the peer (ranges of routes to advertise). */
  prefixFilterOut: string[]
  /** Creation date of the routing policy. */
  createdAt?: Date
  /** Last modification date of the routing policy. */
  updatedAt?: Date
  /** Region of the routing policy. */
  region: Region
}

export type AttachRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link to attach a routing policy to. */
  linkId: string
  /** ID of the routing policy to be attached. */
  routingPolicyId: string
}

export type AttachVpcRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link to attach VPC to. */
  linkId: string
  /** ID of the VPC to attach. */
  vpcId: string
}

export type CreateLinkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project to create the link in. */
  projectId?: string
  /** Name of the link. */
  name: string
  /** List of tags to apply to the link. */
  tags?: string[]
  /** PoP (location) where the link will be created. */
  popId: string
  /**
   * Desired bandwidth for the link. Must be compatible with available link
   * bandwidths and remaining bandwidth capacity of the port.
   */
  bandwidthMbps: number
  /**
   * If true, a dedicated link (1 link per port, dedicated to one customer) will
   * be crated. It is not necessary to specify a `port_id` or `partner_id`. A
   * new port will created and assigned to the link. Note that Scaleway has not
   * yet enabled the creation of dedicated links, this field is reserved for
   * future use.
   *
   * One-of ('linkKind'): at most one of 'dedicated', 'portId', 'partnerId'
   * could be set.
   */
  dedicated?: boolean
  /**
   * If set, a shared link (N links per port, one of which is this customer's
   * port) will be created. As the customer, specify the ID of the port you
   * already have for this link. Note that shared links are not currently
   * available. Note that Scaleway has not yet enabled the creation of shared
   * links, this field is reserved for future use.
   *
   * One-of ('linkKind'): at most one of 'dedicated', 'portId', 'partnerId'
   * could be set.
   */
  portId?: string
  /**
   * If set, a hosted link (N links per port on a partner port) will be created.
   * Specify the ID of the chosen partner, who already has a shareable port with
   * available bandwidth. Note that this is currently the only type of link
   * offered by Scaleway, and therefore this field must be set when creating a
   * link.
   *
   * One-of ('linkKind'): at most one of 'dedicated', 'portId', 'partnerId'
   * could be set.
   */
  partnerId?: string
}

export type CreateRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Project to create the routing policy in. */
  projectId?: string
  /** Name of the routing policy. */
  name: string
  /** List of tags to apply to the routing policy. */
  tags?: string[]
  /**
   * IP prefixes to accept from the peer (ranges of route announcements to
   * accept).
   */
  prefixFilterIn?: string[]
  /** IP prefix filters to advertise to the peer (ranges of routes to advertise). */
  prefixFilterOut?: string[]
}

export type DeleteLinkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link to delete. */
  linkId: string
}

export type DeleteRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the routing policy to delete. */
  routingPolicyId: string
}

export type DetachRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link to detach a routing policy from. */
  linkId: string
}

export type DetachVpcRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link to detach the VPC from. */
  linkId: string
}

export type DisableRoutePropagationRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link on which to disable route propagation. */
  linkId: string
}

export type EnableRoutePropagationRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link on which to enable route propagation. */
  linkId: string
}

export type GetLinkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link to get. */
  linkId: string
}

export type GetPartnerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of partner to get. */
  partnerId: string
}

export type GetPopRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of PoP to get. */
  popId: string
}

export type GetRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the routing policy to get. */
  routingPolicyId: string
}

export type ListLinksRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Order in which to return results. */
  orderBy?: ListLinksRequestOrderBy
  /** Page number to return. */
  page?: number
  /** Maximum number of links to return per page. */
  pageSize?: number
  /** Project ID to filter for. */
  projectId?: string
  /** Organization ID to filter for. */
  organizationId?: string
  /** Link name to filter for. */
  name?: string
  /** Tags to filter for. */
  tags?: string[]
  /** Link status to filter for. */
  status?: LinkStatus
  /** BGP IPv4 status to filter for. */
  bgpV4Status?: BgpStatus
  /** BGP IPv6 status to filter for. */
  bgpV6Status?: BgpStatus
  /** Filter for links attached to this PoP (via ports). */
  popId?: string
  /** Filter for link bandwidth (in Mbps). */
  bandwidthMbps?: number
  /** Filter for links hosted by this partner. */
  partnerId?: string
  /** Filter for links attached to this VPC. */
  vpcId?: string
  /** Filter for links using this routing policy. */
  routingPolicyId?: string
  /** Filter for the link with this pairing_key. */
  pairingKey?: string
}

export interface ListLinksResponse {
  /** List of links on the current page. */
  links: Link[]
  /** Total number of links. */
  totalCount: number
}

export type ListPartnersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Order in which to return results. */
  orderBy?: ListPartnersRequestOrderBy
  /** Page number to return. */
  page?: number
  /** Maximum number of partners to return per page. */
  pageSize?: number
  /** Filter for partners present (offering a port) in one of these PoPs. */
  popIds?: string[]
}

export interface ListPartnersResponse {
  /** List of partners on current page. */
  partners: Partner[]
  /** Total number of partners returned. */
  totalCount: number
}

export type ListPopsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Order in which to return results. */
  orderBy?: ListPopsRequestOrderBy
  /** Page number to return. */
  page?: number
  /** Maximum number of PoPs to return per page. */
  pageSize?: number
  /** PoP name to filter for. */
  name?: string
  /** Hosting provider name to filter for. */
  hostingProviderName?: string
  /** Filter for PoPs hosting an available shared port from this partner. */
  partnerId?: string
  /**
   * Filter for PoPs with a shared port allowing this bandwidth size. Note that
   * we cannot guarantee that PoPs returned will have available capacity.
   */
  linkBandwidthMbps?: number
}

export interface ListPopsResponse {
  /** List of PoPs on the current page. */
  pops: Pop[]
  /** Total number of PoPs. */
  totalCount: number
}

export type ListRoutingPoliciesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Order in which to return results. */
  orderBy?: ListRoutingPoliciesRequestOrderBy
  /** Page number to return. */
  page?: number
  /** Maximum number of routing policies to return per page. */
  pageSize?: number
  /** Project ID to filter for. */
  projectId?: string
  /** Organization ID to filter for. */
  organizationId?: string
  /** Routing policy name to filter for. */
  name?: string
  /** Tags to filter for. */
  tags?: string[]
}

export interface ListRoutingPoliciesResponse {
  routingPolicies: RoutingPolicy[]
  totalCount: number
}

export type UpdateLinkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the link to update. */
  linkId: string
  /** Name of the link. */
  name?: string
  /** List of tags to apply to the link. */
  tags?: string[]
}

export type UpdateRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the routing policy to update. */
  routingPolicyId: string
  /** Name of the routing policy. */
  name?: string
  /** List of tags to apply to the routing policy. */
  tags?: string[]
  /**
   * IP prefixes to accept from the peer (ranges of route announcements to
   * accept).
   */
  prefixFilterIn?: string[]
  /**
   * IP prefix filters for routes to advertise to the peer (ranges of routes to
   * advertise).
   */
  prefixFilterOut?: string[]
}
