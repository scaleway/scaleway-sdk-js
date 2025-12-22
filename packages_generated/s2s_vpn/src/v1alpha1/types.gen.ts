// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type BgpSessionStatus =
  | 'unknown_status'
  | 'up'
  | 'down'
  | 'disabled'

export type ConnectionDhGroup =
  | 'unknown_dhgroup'
  | 'modp2048'
  | 'modp3072'
  | 'modp4096'
  | 'ecp256'
  | 'ecp384'
  | 'ecp521'
  | 'curve25519'

export type ConnectionEncryption =
  | 'unknown_encryption'
  | 'aes128'
  | 'aes192'
  | 'aes256'
  | 'aes128gcm'
  | 'aes192gcm'
  | 'aes256gcm'
  | 'aes128ccm'
  | 'aes256ccm'
  | 'chacha20poly1305'

export type ConnectionInitiationPolicy =
  | 'unknown_initiation_policy'
  | 'vpn_gateway'
  | 'customer_gateway'

export type ConnectionIntegrity =
  | 'unknown_integrity'
  | 'sha256'
  | 'sha384'
  | 'sha512'

export type ConnectionStatus =
  | 'unknown_status'
  | 'active'
  | 'limited_connectivity'
  | 'down'
  | 'locked'

export type CreateConnectionRequestInitiationPolicy =
  | 'unknown_initiation_policy'
  | 'vpn_gateway'
  | 'customer_gateway'

export type ListConnectionsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'

export type ListCustomerGatewaysRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListRoutingPoliciesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListVpnGatewaysRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'type_asc'
  | 'type_desc'
  | 'status_asc'
  | 'status_desc'

export type TunnelStatus =
  | 'unknown_tunnel_status'
  | 'up'
  | 'down'

export type VpnGatewayStatus =
  | 'unknown_status'
  | 'configuring'
  | 'failed'
  | 'provisioning'
  | 'active'
  | 'deprovisioning'
  | 'locked'

export interface BgpSession {
  routingPolicyId: string
  privateIp: string
  peerPrivateIp: string
}


export interface ConnectionCipher {
  encryption: ConnectionEncryption
  integrity?: ConnectionIntegrity
  dhGroup?: ConnectionDhGroup
}


export interface VpnGatewayPrivateConfig {
}


export interface VpnGatewayPublicConfig {
  ipamIpv4Id?: string
  ipamIpv6Id?: string
}


export interface CreateConnectionRequestBgpConfig {
  routingPolicyId: string
  privateIp?: string
  peerPrivateIp?: string
}


export interface Connection {
  /**
   * Unique identifier of the connection.
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
   * Name of the connection.
   */
  name: string
  /**
   * List of tags applied to the connection.
   */
  tags: string[]
  /**
   * Creation date of the connection.
   */
  createdAt?: Date
  /**
   * Last modification date of the connection.
   */
  updatedAt?: Date
  /**
   * Status of the connection.
   */
  status: ConnectionStatus
  /**
   * IP version of the IPSec Tunnel.
   */
  isIpv6: boolean
  /**
   * Who initiates the IPsec tunnel.
   */
  initiationPolicy: ConnectionInitiationPolicy
  /**
   * ID of the secret in Secret Manager which contains the PSK.
   */
  secretId: string
  /**
   * Version number of the secret in Secret Manager which contains the PSK.
   */
  secretRevision: number
  /**
   * List of IKE v2 ciphers proposed for the IPsec tunnel.
   */
  ikev2Ciphers: ConnectionCipher[]
  /**
   * List of ESP ciphers proposed for the IPsec tunnel.
   */
  espCiphers: ConnectionCipher[]
  /**
   * Defines whether route propagation is enabled or not.
   */
  routePropagationEnabled: boolean
  /**
   * ID of the VPN gateway attached to the connection.
   */
  vpnGatewayId: string
  /**
   * ID of the customer gateway attached to the connection.
   */
  customerGatewayId: string
  /**
   * Status of the IPsec tunnel.
   */
  tunnelStatus: TunnelStatus
  /**
   * @deprecated Status of the IPv4 IPsec tunnel.
   */
  tunnelStatusIpv4?: TunnelStatus
  /**
   * @deprecated Status of the IPv6 IPsec tunnel.
   */
  tunnelStatusIpv6?: TunnelStatus
  /**
   * Status of the BGP IPv4 session.
   */
  bgpStatusIpv4: BgpSessionStatus
  /**
   * Status of the BGP IPv6 session.
   */
  bgpStatusIpv6: BgpSessionStatus
  /**
   * BGP IPv4 session, including status, interco private IPv4 subnet and attached routing policy.
   */
  bgpSessionIpv4?: BgpSession
  /**
   * BGP IPv6 session, including status, interco private IPv6 subnet and attached routing policy.
   */
  bgpSessionIpv6?: BgpSession
  /**
   * Region of the connection.
   */
  region: ScwRegion
}


export interface CreateVpnGatewayRequestPublicConfig {
  ipamIpv4Id?: string
  ipamIpv6Id?: string
}


export interface CustomerGateway {
  /**
   * Unique identifier of the customer gateway.
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
   * Name of the customer gateway.
   */
  name: string
  /**
   * List of tags applied to the customer gateway.
   */
  tags: string[]
  /**
   * Creation date of the customer gateway.
   */
  createdAt?: Date
  /**
   * Last modification date of the customer gateway.
   */
  updatedAt?: Date
  /**
   * Public IPv4 address of the customer gateway.
   */
  publicIpv4?: string
  /**
   * Public IPv6 address of the customer gateway.
   */
  publicIpv6?: string
  /**
   * AS Number of the customer gateway.
   */
  asn: number
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
   * IP prefixes to accept from the peer (ranges of route announcements to accept).
   */
  prefixFilterIn: string[]
  /**
   * IP prefix filters to advertise to the peer (ranges of routes to advertise).
   */
  prefixFilterOut: string[]
  /**
   * Region of the routing policy.
   */
  region: ScwRegion
}


export interface GatewayType {
  name: string
  bandwidth: number
  allowedConnections: number
  zones: string[]
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
}


export interface VpnGateway {
  /**
   * Unique identifier of the VPN gateway.
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
   * Name of the VPN gateway.
   */
  name: string
  /**
   * List of tags applied to the VPN gateway.
   */
  tags: string[]
  /**
   * Creation date of the VPN gateway.
   */
  createdAt?: Date
  /**
   * Last modification date of the VPN gateway.
   */
  updatedAt?: Date
  /**
   * Status of the VPN gateway.
   */
  status: VpnGatewayStatus
  /**
   * Gateway type of the VPN gateway.
   */
  gatewayType: string
  /**
   * Public endpoint configuration of the VPN gateway.
   *
   * One-of ('endpoint'): at most one of 'publicConfig', 'privateConfig' could be set.
   */
  publicConfig?: VpnGatewayPublicConfig
  /**
   * ID of the Private Network attached to the VPN gateway.
   */
  privateNetworkId: string
  /**
   *
   * One-of ('endpoint'): at most one of 'publicConfig', 'privateConfig' could be set.
   */
  privateConfig?: VpnGatewayPrivateConfig
  /**
   * ID of the IPAM private IPv4 address attached to the VPN gateway.
   */
  ipamPrivateIpv4Id: string
  /**
   * ID of the IPAM private IPv6 address attached to the VPN gateway.
   */
  ipamPrivateIpv6Id: string
  /**
   * Autonomous System Number (ASN) of the VPN gateway, used by Border Gateway Protocol (BGP) to exchange routing information with the customer gateway.
   */
  asn: number
  /**
   * Zone where the VPN gateway resource is currently provisioned.
   */
  zone: ScwZone
  /**
   * Region of the VPN gateway.
   */
  region: ScwRegion
}


export type CreateConnectionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project to create the connection in.
   */
  projectId?: string
  /**
   * Name of the connection.
   */
  name: string
  /**
   * List of tags to apply to the connection.
   */
  tags?: string[]
  /**
   * Defines IP version of the IPSec Tunnel.
   */
  isIpv6: boolean
  /**
   * Who initiates the IPsec tunnel.
   */
  initiationPolicy: CreateConnectionRequestInitiationPolicy
  /**
   * List of IKE v2 ciphers proposed for the IPsec tunnel.
   */
  ikev2Ciphers: ConnectionCipher[]
  /**
   * List of ESP ciphers proposed for the IPsec tunnel.
   */
  espCiphers: ConnectionCipher[]
  /**
   * Defines whether route propagation is enabled or not.
   */
  enableRoutePropagation: boolean
  /**
   * ID of the VPN gateway to attach to the connection.
   */
  vpnGatewayId: string
  /**
   * ID of the customer gateway to attach to the connection.
   */
  customerGatewayId: string
  /**
   * BGP config of IPv4 session, including interco private IPv4 subnet (first IP assigned to the VPN Gateway, second IP to the Customer Gateway) and attached routing policy.
   */
  bgpConfigIpv4?: CreateConnectionRequestBgpConfig
  /**
   * BGP config of IPv6 session, including interco private IPv6 subnet (first IP assigned to the VPN Gateway, second IP to the Customer Gateway) and attached routing policy.
   */
  bgpConfigIpv6?: CreateConnectionRequestBgpConfig
}


export interface CreateConnectionResponse {
  /**
   * This connection.
   */
  connection?: Connection
  /**
   * @deprecated Deprecated, use secret_id & secret_revision fields.
   */
  preSharedKey?: string
}


export type CreateCustomerGatewayRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project to create the customer gateway in.
   */
  projectId?: string
  /**
   * Name of the customer gateway.
   */
  name: string
  /**
   * List of tags to apply to the customer gateway.
   */
  tags?: string[]
  /**
   * Public IPv4 address of the customer gateway.
   */
  ipv4Public?: string
  /**
   * Public IPv6 address of the customer gateway.
   */
  ipv6Public?: string
  /**
   * AS Number of the customer gateway.
   */
  asn: number
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
   * IP prefixes version of the routing policy.
   */
  isIpv6: boolean
  /**
   * IP prefixes to accept from the peer (ranges of route announcements to accept).
   */
  prefixFilterIn?: string[]
  /**
   * IP prefix filters to advertise to the peer (ranges of routes to advertise).
   */
  prefixFilterOut?: string[]
}


export type CreateVpnGatewayRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Project to create the VPN gateway in.
   */
  projectId?: string
  /**
   * Name of the VPN gateway.
   */
  name: string
  /**
   * List of tags to apply to the VPN gateway.
   */
  tags?: string[]
  /**
   * VPN gateway type (commercial offer type).
   */
  gatewayType: string
  /**
   * Public endpoint configuration of the VPN gateway.
   *
   * One-of ('endpoint'): at most one of 'publicConfig' could be set.
   */
  publicConfig?: CreateVpnGatewayRequestPublicConfig
  /**
   * ID of the Private Network to attach to the VPN gateway.
   */
  privateNetworkId: string
  /**
   * ID of the IPAM private IPv4 address to attach to the VPN gateway.
   */
  ipamPrivateIpv4Id?: string
  /**
   * ID of the IPAM private IPv6 address to attach to the VPN gateway.
   */
  ipamPrivateIpv6Id?: string
  /**
   * Availability Zone where the VPN gateway should be provisioned. If no zone is specified, the VPN gateway will be automatically placed.
   */
  zone?: ScwZone
}


export type DeleteConnectionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the connection to delete.
   */
  connectionId: string
}


export type DeleteCustomerGatewayRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the customer gateway to delete.
   */
  gatewayId: string
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


export type DeleteVpnGatewayRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the VPN gateway to delete.
   */
  gatewayId: string
}


export type DetachRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the connection from which routing policy is being detached.
   */
  connectionId: string
  /**
   * ID of the routing policy to detach from the BGP IPv4 session.
   *
   * One-of ('routingPolicy'): at most one of 'routingPolicyV4', 'routingPolicyV6' could be set.
   */
  routingPolicyV4?: string
  /**
   * ID of the routing policy to detach from the BGP IPv6 session.
   *
   * One-of ('routingPolicy'): at most one of 'routingPolicyV4', 'routingPolicyV6' could be set.
   */
  routingPolicyV6?: string
}


export type DisableRoutePropagationRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the connection on which to disable route propagation.
   */
  connectionId: string
}


export type EnableRoutePropagationRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the connection on which to enable route propagation.
   */
  connectionId: string
}


export type GetConnectionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the requested connection.
   */
  connectionId: string
}


export type GetCustomerGatewayRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the requested customer gateway.
   */
  gatewayId: string
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


export type GetVpnGatewayRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the requested VPN gateway.
   */
  gatewayId: string
}


export type ListConnectionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of connections to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListConnectionsRequestOrderBy
  /**
   * Project ID to filter for.
   */
  projectId?: string
  /**
   * Connection name to filter for.
   */
  name?: string
  /**
   * Tags to filter for.
   */
  tags?: string[]
  /**
   * Connection statuses to filter for.
   */
  statuses?: ConnectionStatus[]
  /**
   * Filter connections with IP version of IPSec tunnel.
   */
  isIpv6?: boolean
  /**
   * Filter for connections using these routing policies.
   */
  routingPolicyIds?: string[]
  /**
   * Filter for connections with route propagation enabled.
   */
  routePropagationEnabled?: boolean
  /**
   * Filter for connections attached to these VPN gateways.
   */
  vpnGatewayIds?: string[]
  /**
   * Filter for connections attached to these customer gateways.
   */
  customerGatewayIds?: string[]
}


export interface ListConnectionsResponse {
  /**
   * List of connections on the current page.
   */
  connections: Connection[]
  /**
   * Total number of connections.
   */
  totalCount: number
}


export type ListCustomerGatewaysRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of customer gateways to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListCustomerGatewaysRequestOrderBy
  /**
   * Project ID to filter for.
   */
  projectId?: string
  /**
   * Customer gateway name to filter for.
   */
  name?: string
  /**
   * Tags to filter for.
   */
  tags?: string[]
}


export interface ListCustomerGatewaysResponse {
  /**
   * List of customer gateways on the current page.
   */
  gateways: CustomerGateway[]
  /**
   * Total number of customer gateways.
   */
  totalCount: number
}


export type ListRoutingPoliciesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of routing policies to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListRoutingPoliciesRequestOrderBy
  /**
   * Project ID to filter for.
   */
  projectId?: string
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


export type ListVpnGatewayTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of VPN gateway types to return per page.
   */
  pageSize?: number
}


export interface ListVpnGatewayTypesResponse {
  /**
   * List of VPN gateway types on the current page.
   */
  gatewayTypes: GatewayType[]
  /**
   * Total number of gateway types.
   */
  totalCount: number
}


export type ListVpnGatewaysRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of VPN gateways to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListVpnGatewaysRequestOrderBy
  /**
   * Project ID to filter for.
   */
  projectId?: string
  /**
   * VPN gateway name to filter for.
   */
  name?: string
  /**
   * Tags to filter for.
   */
  tags?: string[]
  /**
   * VPN gateway statuses to filter for.
   */
  statuses?: VpnGatewayStatus[]
  /**
   * Filter for VPN gateways of these types.
   */
  gatewayTypes?: string[]
  /**
   * Filter for VPN gateways attached to these private networks.
   */
  privateNetworkIds?: string[]
}


export interface ListVpnGatewaysResponse {
  /**
   * List of VPN gateways on the current page.
   */
  gateways: VpnGateway[]
  /**
   * Total number of VPN gateways.
   */
  totalCount: number
}


export type RenewConnectionPskRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the connection to renew the PSK.
   */
  connectionId: string
}


export interface RenewConnectionPskResponse {
  /**
   * This connection.
   */
  connection?: Connection
  /**
   * @deprecated Deprecated, use secret_id & secret_revision fields.
   */
  preSharedKey?: string
}


export type SetRoutingPolicyRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the connection whose routing policy is being updated.
   */
  connectionId: string
  /**
   * ID of the routing policy to set for the BGP IPv4 session.
   *
   * One-of ('routingPolicy'): at most one of 'routingPolicyV4', 'routingPolicyV6' could be set.
   */
  routingPolicyV4?: string
  /**
   * ID of the routing policy to set for the BGP IPv6 session.
   *
   * One-of ('routingPolicy'): at most one of 'routingPolicyV4', 'routingPolicyV6' could be set.
   */
  routingPolicyV6?: string
}


export type UpdateConnectionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the connection to update.
   */
  connectionId: string
  /**
   * Name of the connection.
   */
  name?: string
  /**
   * List of tags to apply to the connection.
   */
  tags?: string[]
  /**
   * Who initiates the IPsec tunnel.
   */
  initiationPolicy?: CreateConnectionRequestInitiationPolicy
  /**
   * List of IKE v2 ciphers proposed for the IPsec tunnel.
   */
  ikev2Ciphers?: ConnectionCipher[]
  /**
   * List of ESP ciphers proposed for the IPsec tunnel.
   */
  espCiphers?: ConnectionCipher[]
}


export type UpdateCustomerGatewayRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the customer gateway to update.
   */
  gatewayId: string
  /**
   * Name of the customer gateway.
   */
  name?: string
  /**
   * List of tags to apply to the customer gateway.
   */
  tags?: string[]
  /**
   * Public IPv4 address of the customer gateway.
   */
  ipv4Public?: string
  /**
   * Public IPv6 address of the customer gateway.
   */
  ipv6Public?: string
  /**
   * AS Number of the customer gateway.
   */
  asn?: number
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


export type UpdateVpnGatewayRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the VPN gateway to update.
   */
  gatewayId: string
  /**
   * Name of the VPN gateway.
   */
  name?: string
  /**
   * List of tags to apply to the VPN Gateway.
   */
  tags?: string[]
}


