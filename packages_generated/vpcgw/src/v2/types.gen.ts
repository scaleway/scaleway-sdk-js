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

export type GatewayNetworkStatus =
  | 'unknown_status'
  | 'created'
  | 'attaching'
  | 'configuring'
  | 'ready'
  | 'detaching'

export type GatewayStatus =
  | 'unknown_status'
  | 'stopped'
  | 'allocating'
  | 'configuring'
  | 'running'
  | 'stopping'
  | 'failed'
  | 'deleting'
  | 'locked'

export type ListGatewayNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'status_asc'
  | 'status_desc'

export type ListGatewaysRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'type_asc'
  | 'type_desc'
  | 'status_asc'
  | 'status_desc'

export type ListIPsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'address_asc'
  | 'address_desc'
  | 'reverse_asc'
  | 'reverse_desc'

export type ListPatRulesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'public_port_asc'
  | 'public_port_desc'

export type PatRuleProtocol = 'unknown_protocol' | 'both' | 'tcp' | 'udp'

export interface GatewayNetwork {
  /**
   * ID of the Public Gateway-Private Network connection.
   */
  id: string
  /**
   * Connection creation date.
   */
  createdAt?: Date
  /**
   * Connection last modification date.
   */
  updatedAt?: Date
  /**
   * ID of the connected Public Gateway.
   */
  gatewayId: string
  /**
   * ID of the connected Private Network.
   */
  privateNetworkId: string
  /**
   * MAC address of the gateway in the Private Network (if the gateway is up and running).
   */
  macAddress?: string
  /**
   * Defines whether the gateway masquerades traffic for this Private Network (Dynamic NAT).
   */
  masqueradeEnabled: boolean
  /**
   * Current status of the Public Gateway's connection to the Private Network.
   */
  status: GatewayNetworkStatus
  /**
   * Enabling the default route also enables masquerading.
   */
  pushDefaultRoute: boolean
  /**
   * Use this IPAM-booked IP ID as the Gateway's IP in this Private Network.
   */
  ipamIpId: string
  /**
   * Zone of the GatewayNetwork connection.
   */
  zone: ScwZone
}

export interface IP {
  /**
   * IP address ID.
   */
  id: string
  /**
   * Owning Organization.
   */
  organizationId: string
  /**
   * Owning Project.
   */
  projectId: string
  /**
   * IP address creation date.
   */
  createdAt?: Date
  /**
   * IP address last modification date.
   */
  updatedAt?: Date
  /**
   * Tags associated with the IP address.
   */
  tags: string[]
  /**
   * The IP address itself.
   */
  address: string
  /**
   * Reverse domain name for the IP address.
   */
  reverse?: string
  /**
   * Public Gateway associated with the IP address.
   */
  gatewayId?: string
  /**
   * Zone of the IP address.
   */
  zone: ScwZone
}

export interface GatewayType {
  /**
   * Public Gateway type name.
   */
  name: string
  /**
   * Bandwidth, in bps, of the Public Gateway. This is the public bandwidth to the outer Internet, and the internal bandwidth to each connected Private Networks.
   */
  bandwidth: number
  /**
   * Zone the Public Gateway type is available in.
   */
  zone: ScwZone
}

export interface Gateway {
  /**
   * ID of the gateway.
   */
  id: string
  /**
   * Owning Organization.
   */
  organizationId: string
  /**
   * Owning Project.
   */
  projectId: string
  /**
   * Gateway creation date.
   */
  createdAt?: Date
  /**
   * Gateway last modification date.
   */
  updatedAt?: Date
  /**
   * Gateway type name (commercial offer).
   */
  type: string
  /**
   * Bandwidth available of the gateway.
   */
  bandwidth: number
  /**
   * Current status of the gateway.
   */
  status: GatewayStatus
  /**
   * Name of the gateway.
   */
  name: string
  /**
   * Tags associated with the gateway.
   */
  tags: string[]
  /**
   * Public IPv4 address of the gateway.
   */
  ipv4?: IP
  /**
   * GatewayNetwork objects attached to the gateway (each one represents a connection to a Private Network).
   */
  gatewayNetworks: GatewayNetwork[]
  /**
   * Version of the running gateway software.
   */
  version?: string
  /**
   * Newly available gateway software version that can be updated to.
   */
  canUpgradeTo?: string
  /**
   * Defines whether SSH bastion is enabled on the gateway.
   */
  bastionEnabled: boolean
  /**
   * Port of the SSH bastion.
   */
  bastionPort: number
  /**
   * Defines whether SMTP traffic is allowed to pass through the gateway.
   */
  smtpEnabled: boolean
  /**
   * Defines whether the gateway uses non-IPAM IP configurations.
   */
  isLegacy: boolean
  /**
   * Ranges of IP addresses allowed to connect to the gateway's SSH bastion.
   */
  bastionAllowedIps: string[]
  /**
   * Zone of the gateway.
   */
  zone: ScwZone
}

export interface PatRule {
  /**
   * PAT rule ID.
   */
  id: string
  /**
   * Gateway the PAT rule applies to.
   */
  gatewayId: string
  /**
   * PAT rule creation date.
   */
  createdAt?: Date
  /**
   * PAT rule last modification date.
   */
  updatedAt?: Date
  /**
   * Public port to listen on.
   */
  publicPort: number
  /**
   * Private IP address to forward data to.
   */
  privateIp: string
  /**
   * Private port to translate to.
   */
  privatePort: number
  /**
   * Protocol the rule applies to.
   */
  protocol: PatRuleProtocol
  /**
   * Zone of the PAT rule.
   */
  zone: ScwZone
}

export interface SetPatRulesRequestRule {
  /**
   * Public port to listen on. Uniquely identifies the rule, and a matching rule will be updated with the new parameters.
   */
  publicPort: number
  /**
   * Private IP to forward data to.
   */
  privateIp: string
  /**
   * Private port to translate to.
   */
  privatePort: number
  /**
   * Protocol the rule should apply to.
   */
  protocol: PatRuleProtocol
}

export type AddBastionAllowedIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway to add the allowed IP range to.
   */
  gatewayId: string
  /**
   * IP range allowed to connect to the SSH bastion.
   */
  ipRange: string
}

export interface AddBastionAllowedIPsResponse {
  /**
   * Ranges of IP addresses allowed to connect to the gateway's SSH bastion.
   */
  ipRanges: string[]
}

export type CreateGatewayNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Public Gateway to connect.
   */
  gatewayId: string
  /**
   * Private Network to connect.
   */
  privateNetworkId: string
  /**
   * Defines whether to enable masquerade (dynamic NAT) on the GatewayNetwork.
   */
  enableMasquerade: boolean
  /**
   * Enabling the default route also enables masquerading.
   */
  pushDefaultRoute: boolean
  /**
   * Use this IPAM-booked IP ID as the Gateway's IP in this Private Network.
   */
  ipamIpId?: string
}

export type CreateGatewayRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Scaleway Project to create the gateway in.
   */
  projectId?: string
  /**
   * Name for the gateway.
   */
  name?: string
  /**
   * Tags for the gateway.
   */
  tags?: string[]
  /**
   * Gateway type (commercial offer type).
   */
  type: string
  /**
   * Existing IP address to attach to the gateway.
   */
  ipId?: string
  /**
   * Defines whether SMTP traffic should be allowed pass through the gateway.
   */
  enableSmtp: boolean
  /**
   * Defines whether SSH bastion should be enabled the gateway.
   */
  enableBastion: boolean
  /**
   * Port of the SSH bastion.
   */
  bastionPort?: number
}

export type CreateIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project to create the IP address in.
   */
  projectId?: string
  /**
   * Tags to give to the IP address.
   */
  tags?: string[]
}

export type CreatePatRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the Gateway on which to create the rule.
   */
  gatewayId: string
  /**
   * Public port to listen on.
   */
  publicPort: number
  /**
   * Private IP to forward data to.
   */
  privateIp: string
  /**
   * Private port to translate to.
   */
  privatePort: number
  /**
   * Protocol the rule should apply to.
   */
  protocol?: PatRuleProtocol
}

export type DeleteBastionAllowedIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway on which to delete the allowed IP range.
   */
  gatewayId: string
  /**
   * IP range to delete from SSH bastion's list of allowed IPs.
   */
  ipRange: string
}

export type DeleteGatewayNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the GatewayNetwork to delete.
   */
  gatewayNetworkId: string
}

export type DeleteGatewayRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway to delete.
   */
  gatewayId: string
  /**
   * Defines whether the PGW's IP should be deleted.
   */
  deleteIp: boolean
}

export type DeleteIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the IP address to delete.
   */
  ipId: string
}

export type DeletePatRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the PAT rule to delete.
   */
  patRuleId: string
}

export type GetGatewayNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the GatewayNetwork to fetch.
   */
  gatewayNetworkId: string
}

export type GetGatewayRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway to fetch.
   */
  gatewayId: string
}

export type GetIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the IP address to get.
   */
  ipId: string
}

export type GetPatRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the PAT rule to get.
   */
  patRuleId: string
}

export type ListGatewayNetworksRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Order in which to return results.
   */
  orderBy?: ListGatewayNetworksRequestOrderBy
  /**
   * Page number.
   */
  page?: number
  /**
   * GatewayNetworks per page.
   */
  pageSize?: number
  /**
   * Filter for GatewayNetworks with these status. Use `unknown` to include all statuses.
   */
  status?: GatewayNetworkStatus[]
  /**
   * Filter for GatewayNetworks connected to these gateways.
   */
  gatewayIds?: string[]
  /**
   * Filter for GatewayNetworks connected to these Private Networks.
   */
  privateNetworkIds?: string[]
  /**
   * Filter for GatewayNetworks with this `enable_masquerade` setting.
   */
  masqueradeEnabled?: boolean
}

export interface ListGatewayNetworksResponse {
  /**
   * GatewayNetworks on this page.
   */
  gatewayNetworks: GatewayNetwork[]
  /**
   * Total GatewayNetworks count matching the filter.
   */
  totalCount: number
}

export type ListGatewayTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
}

export interface ListGatewayTypesResponse {
  /**
   * Available types of Public Gateway.
   */
  types: GatewayType[]
}

export type ListGatewaysRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Order in which to return results.
   */
  orderBy?: ListGatewaysRequestOrderBy
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Gateways per page.
   */
  pageSize?: number
  /**
   * Include only gateways in this Organization.
   */
  organizationId?: string
  /**
   * Include only gateways in this Project.
   */
  projectId?: string
  /**
   * Filter for gateways which have this search term in their name.
   */
  name?: string
  /**
   * Filter for gateways with these tags.
   */
  tags?: string[]
  /**
   * Filter for gateways of these types.
   */
  types?: string[]
  /**
   * Filter for gateways with these status. Use `unknown` to include all statuses.
   */
  status?: GatewayStatus[]
  /**
   * Filter for gateways attached to these Private Networks.
   */
  privateNetworkIds?: string[]
  /**
   * Include also legacy gateways.
   */
  includeLegacy?: boolean
}

export interface ListGatewaysResponse {
  /**
   * Gateways on this page.
   */
  gateways: Gateway[]
  /**
   * Total count of gateways matching the filter.
   */
  totalCount: number
}

export type ListIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Order in which to return results.
   */
  orderBy?: ListIPsRequestOrderBy
  /**
   * Page number.
   */
  page?: number
  /**
   * IP addresses per page.
   */
  pageSize?: number
  /**
   * Include only gateways in this Organization.
   */
  organizationId?: string
  /**
   * Filter for IP addresses in this Project.
   */
  projectId?: string
  /**
   * Filter for IP addresses with these tags.
   */
  tags?: string[]
  /**
   * Filter for IP addresses that have a reverse containing this string.
   */
  reverse?: string
  /**
   * Filter based on whether the IP is attached to a gateway or not.
   */
  isFree?: boolean
}

export interface ListIPsResponse {
  /**
   * IP addresses on this page.
   */
  ips: IP[]
  /**
   * Total count of IP addresses matching the filter.
   */
  totalCount: number
}

export type ListPatRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Order in which to return results.
   */
  orderBy?: ListPatRulesRequestOrderBy
  /**
   * Page number.
   */
  page?: number
  /**
   * PAT rules per page.
   */
  pageSize?: number
  /**
   * Filter for PAT rules on these gateways.
   */
  gatewayIds?: string[]
  /**
   * Filter for PAT rules targeting these private ips.
   */
  privateIps?: string[]
  /**
   * Filter for PAT rules with this protocol.
   */
  protocol?: PatRuleProtocol
}

export interface ListPatRulesResponse {
  /**
   * Array of PAT rules matching the filter.
   */
  patRules: PatRule[]
  /**
   * Total count of PAT rules matching the filter.
   */
  totalCount: number
}

export type RefreshSSHKeysRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway to refresh SSH keys on.
   */
  gatewayId: string
}

export type SetBastionAllowedIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway on which to set the allowed IP range.
   */
  gatewayId: string
  /**
   * New list of IP ranges (each range in CIDR notation) allowed to connect to the SSH bastion.
   */
  ipRanges?: string[]
}

export interface SetBastionAllowedIPsResponse {
  /**
   * Ranges of IP addresses allowed to connect to the gateway's SSH bastion.
   */
  ipRanges: string[]
}

export type SetPatRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway on which to set the PAT rules.
   */
  gatewayId: string
  /**
   * New list of PAT rules.
   */
  patRules: SetPatRulesRequestRule[]
}

export interface SetPatRulesResponse {
  /**
   * List of PAT rules.
   */
  patRules: PatRule[]
}

export type UpdateGatewayNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the GatewayNetwork to update.
   */
  gatewayNetworkId: string
  /**
   * Defines whether to enable masquerade (dynamic NAT) on the GatewayNetwork.
   */
  enableMasquerade?: boolean
  /**
   * Enabling the default route also enables masquerading.
   */
  pushDefaultRoute?: boolean
  /**
   * Use this IPAM-booked IP ID as the Gateway's IP in this Private Network.
   */
  ipamIpId?: string
}

export type UpdateGatewayRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway to update.
   */
  gatewayId: string
  /**
   * Name for the gateway.
   */
  name?: string
  /**
   * Tags for the gateway.
   */
  tags?: string[]
  /**
   * Defines whether SSH bastion should be enabled the gateway.
   */
  enableBastion?: boolean
  /**
   * Port of the SSH bastion.
   */
  bastionPort?: number
  /**
   * Defines whether SMTP traffic should be allowed to pass through the gateway.
   */
  enableSmtp?: boolean
}

export type UpdateIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the IP address to update.
   */
  ipId: string
  /**
   * Tags to give to the IP address.
   */
  tags?: string[]
  /**
   * Reverse to set on the address. Empty string to unset.
   */
  reverse?: string
  /**
   * Gateway to attach the IP address to. Empty string to detach.
   */
  gatewayId?: string
}

export type UpdatePatRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the PAT rule to update.
   */
  patRuleId: string
  /**
   * Public port to listen on.
   */
  publicPort?: number
  /**
   * Private IP to forward data to.
   */
  privateIp?: string
  /**
   * Private port to translate to.
   */
  privatePort?: number
  /**
   * Protocol the rule should apply to.
   */
  protocol?: PatRuleProtocol
}

export type UpgradeGatewayRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway to upgrade.
   */
  gatewayId: string
  /**
   * Gateway type (commercial offer).
   */
  type?: string
}
