// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone as ScwZone } from '@scaleway/sdk-client'

export type DHCPEntryType = 'unknown' | 'reservation' | 'lease'

export type GatewayNetworkStatus =
  | 'unknown'
  | 'created'
  | 'attaching'
  | 'configuring'
  | 'ready'
  | 'detaching'
  | 'deleted'

export type GatewayStatus =
  | 'unknown'
  | 'stopped'
  | 'allocating'
  | 'configuring'
  | 'running'
  | 'stopping'
  | 'failed'
  | 'deleting'
  | 'deleted'
  | 'locked'

export type ListDHCPEntriesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'ip_address_asc'
  | 'ip_address_desc'
  | 'hostname_asc'
  | 'hostname_desc'

export type ListDHCPsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'subnet_asc'
  | 'subnet_desc'

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
  | 'ip_asc'
  | 'ip_desc'
  | 'reverse_asc'
  | 'reverse_desc'

export type ListPATRulesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'public_port_asc'
  | 'public_port_desc'

export type PATRuleProtocol = 'unknown' | 'both' | 'tcp' | 'udp'

export interface DHCP {
  /**
   * ID of the DHCP config.
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
   * Date the DHCP configuration was created.
   */
  createdAt?: Date
  /**
   * Configuration last modification date.
   */
  updatedAt?: Date
  /**
   * Subnet for the DHCP server.
   */
  subnet: string
  /**
   * IP address of the DHCP server. This will be the Public Gateway's address in the Private Network. It must be part of config's subnet.
   */
  address: string
  /**
   * Low IP (inclusive) of the dynamic address pool. Must be in the config's subnet.
   */
  poolLow: string
  /**
   * High IP (inclusive) of the dynamic address pool. Must be in the config's subnet.
   */
  poolHigh: string
  /**
   * Defines whether to enable dynamic pooling of IPs. When false, only pre-existing DHCP reservations will be handed out.
   */
  enableDynamic: boolean
  /**
   * How long DHCP entries will be valid for.
   */
  validLifetime?: string
  /**
   * After how long a renew will be attempted. Must be 30s lower than `rebind_timer`.
   */
  renewTimer?: string
  /**
   * After how long a DHCP client will query for a new lease if previous renews fail. Must be 30s lower than `valid_lifetime`.
   */
  rebindTimer?: string
  /**
   * Defines whether the gateway should push a default route to DHCP clients, or only hand out IPs.
   */
  pushDefaultRoute: boolean
  /**
   * Defines whether the gateway should push custom DNS servers to clients. This allows for instance hostname -> IP resolution.
   */
  pushDnsServer: boolean
  /**
   * Array of DNS server IP addresses used to override the DNS server list pushed to DHCP clients, instead of the gateway itself.
   */
  dnsServersOverride: string[]
  /**
   * Array of search paths in addition to the pushed DNS configuration.
   */
  dnsSearch: string[]
  /**
   * TLD given to hostnames in the Private Networks. If an Instance with hostname `foo` gets a lease, and this is set to `bar`, `foo.bar` will resolve.
   */
  dnsLocalName: string
  /**
   * Zone of this DHCP configuration.
   */
  zone: ScwZone
}

export interface IpamConfig {
  /**
   * Defines whether the default route is enabled on that Gateway Network.
   */
  pushDefaultRoute: boolean
  /**
   * IPAM-booked IP ID as the Gateway's IP in this Private Network.
   */
  ipamIpId: string
}

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
  enableMasquerade: boolean
  /**
   * Current status of the Public Gateway's connection to the Private Network.
   */
  status: GatewayNetworkStatus
  /**
   * DHCP configuration for the connected Private Network.
   */
  dhcp?: DHCP
  /**
   * Defines whether DHCP is enabled on the connected Private Network.
   */
  enableDhcp: boolean
  /**
   * Address of the Gateway (in CIDR form) to use when DHCP is not used.
   */
  address?: string
  /**
   * IPAM IP configuration used.
   */
  ipamConfig?: IpamConfig
  /**
   * Zone of the GatewayNetwork connection.
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

export type CreateDHCPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project to create the DHCP configuration in.
   */
  projectId?: string
  /**
   * Subnet for the DHCP server.
   */
  subnet: string
  /**
   * IP address of the DHCP server. This will be the gateway's address in the Private Network. Defaults to the first address of the subnet.
   */
  address?: string
  /**
   * Low IP (inclusive) of the dynamic address pool. Must be in the config's subnet. Defaults to the second address of the subnet.
   */
  poolLow?: string
  /**
   * High IP (inclusive) of the dynamic address pool. Must be in the config's subnet. Defaults to the last address of the subnet.
   */
  poolHigh?: string
  /**
   * Defines whether to enable dynamic pooling of IPs. When false, only pre-existing DHCP reservations will be handed out. Defaults to true.
   */
  enableDynamic?: boolean
  /**
   * How long DHCP entries will be valid for. Defaults to 1h (3600s).
   */
  validLifetime?: string
  /**
   * After how long a renew will be attempted. Must be 30s lower than `rebind_timer`. Defaults to 50m (3000s).
   */
  renewTimer?: string
  /**
   * After how long a DHCP client will query for a new lease if previous renews fail. Must be 30s lower than `valid_lifetime`. Defaults to 51m (3060s).
   */
  rebindTimer?: string
  /**
   * Defines whether the gateway should push a default route to DHCP clients or only hand out IPs. Defaults to true.
   */
  pushDefaultRoute?: boolean
  /**
   * Defines whether the gateway should push custom DNS servers to clients. This allows for Instance hostname -> IP resolution. Defaults to true.
   */
  pushDnsServer?: boolean
  /**
   * Array of DNS server IP addresses used to override the DNS server list pushed to DHCP clients, instead of the gateway itself.
   */
  dnsServersOverride?: string[]
  /**
   * Array of search paths in addition to the pushed DNS configuration.
   */
  dnsSearch?: string[]
  /**
   * TLD given to hostnames in the Private Network. Allowed characters are `a-z0-9-.`. Defaults to the slugified Private Network name if created along a GatewayNetwork, or else to `priv`.
   */
  dnsLocalName?: string
}

export interface CreateGatewayNetworkRequestIpamConfig {
  /**
   * Enabling the default route also enables masquerading.
   */
  pushDefaultRoute: boolean
  /**
   * Use this IPAM-booked IP ID as the Gateway's IP in this Private Network.
   */
  ipamIpId?: string
}

export interface DHCPEntry {
  /**
   * DHCP entry ID.
   */
  id: string
  /**
   * DHCP entry creation date.
   */
  createdAt?: Date
  /**
   * DHCP entry last modification date.
   */
  updatedAt?: Date
  /**
   * Owning GatewayNetwork.
   */
  gatewayNetworkId: string
  /**
   * MAC address of the client device.
   */
  macAddress: string
  /**
   * Assigned IP address.
   */
  ipAddress: string
  /**
   * Hostname of the client device.
   */
  hostname: string
  /**
   * Entry type, either static (DHCP reservation) or dynamic (DHCP lease).
   */
  type: DHCPEntryType
  /**
   * Zone of this DHCP entry.
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
   * Gateway type (commercial offer).
   */
  type?: GatewayType
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
   * Public IP address of the gateway.
   */
  ip?: IP
  /**
   * GatewayNetwork objects attached to the gateway (each one represents a connection to a Private Network).
   */
  gatewayNetworks: GatewayNetwork[]
  /**
   * Array of DNS server IP addresses to override the gateway's default recursive DNS servers.
   */
  upstreamDnsServers: string[]
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
   * Defines whether the gateway uses routed IPs (IP mobility) instead of NAT IPs.
   */
  ipMobilityEnabled: boolean
  /**
   * Zone of the gateway.
   */
  zone: ScwZone
}

export interface PATRule {
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
  protocol: PATRuleProtocol
  /**
   * Zone of the PAT rule.
   */
  zone: ScwZone
}

export interface SetDHCPEntriesRequestEntry {
  /**
   * MAC address to give a static entry to. A matching entry will be upgraded to a reservation, and a matching reservation will be updated.
   */
  macAddress: string
  /**
   * IP address to give to the device.
   */
  ipAddress: string
}

export interface SetPATRulesRequestRule {
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
  protocol: PATRuleProtocol
}

export interface UpdateGatewayNetworkRequestIpamConfig {
  /**
   * Enabling the default route also enables masquerading.
   */
  pushDefaultRoute?: boolean
  /**
   * Use this IPAM-booked IP ID as the Gateway's IP in this Private Network.
   */
  ipamIpId?: string
}

export type CreateDHCPEntryRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * GatewayNetwork on which to create a DHCP reservation.
   */
  gatewayNetworkId: string
  /**
   * MAC address to give a static entry to.
   */
  macAddress: string
  /**
   * IP address to give to the device.
   */
  ipAddress: string
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
   * Note: this setting is ignored when passing `ipam_config`.
   */
  enableMasquerade: boolean
  /**
   * Defaults to `true` if either `dhcp_id` or `dhcp` are present. If set to `true`, either `dhcp_id` or `dhcp` must be present.
Note: this setting is ignored when passing `ipam_config`.
   */
  enableDhcp?: boolean
  /**
   * ID of an existing DHCP configuration object to use for this GatewayNetwork.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'dhcp', 'address', 'ipamConfig' could be set.
   */
  dhcpId?: string
  /**
   * New DHCP configuration object to use for this GatewayNetwork.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'dhcp', 'address', 'ipamConfig' could be set.
   */
  dhcp?: CreateDHCPRequest
  /**
   * Static IP address in CIDR format to use without DHCP.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'dhcp', 'address', 'ipamConfig' could be set.
   */
  address?: string
  /**
   * Note: all or none of the GatewayNetworks for a single gateway can use the IPAM. DHCP and IPAM configurations cannot be mixed. Some products may require that the Public Gateway uses the IPAM, to ensure correct functionality.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'dhcp', 'address', 'ipamConfig' could be set.
   */
  ipamConfig?: CreateGatewayNetworkRequestIpamConfig
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
   * Array of DNS server IP addresses to override the gateway's default recursive DNS servers.
   */
  upstreamDnsServers?: string[]
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

export type CreatePATRuleRequest = {
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
  protocol?: PATRuleProtocol
}

export type DeleteDHCPEntryRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the DHCP entry to delete.
   */
  dhcpEntryId: string
}

export type DeleteDHCPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * DHCP configuration ID to delete.
   */
  dhcpId: string
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
  /**
   * Defines whether to clean up attached DHCP configurations (if any, and if not attached to another Gateway Network).
   */
  cleanupDhcp: boolean
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
   * Defines whether to clean up attached DHCP configurations (if any, and if not attached to another Gateway Network).
   */
  cleanupDhcp: boolean
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

export type DeletePATRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the PAT rule to delete.
   */
  patRuleId: string
}

export type EnableIPMobilityRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway to upgrade to IP mobility.
   */
  gatewayId: string
}

export type GetDHCPEntryRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the DHCP entry to fetch.
   */
  dhcpEntryId: string
}

export type GetDHCPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the DHCP configuration to fetch.
   */
  dhcpId: string
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

export type GetPATRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the PAT rule to get.
   */
  patRuleId: string
}

export type ListDHCPEntriesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Order in which to return results.
   */
  orderBy?: ListDHCPEntriesRequestOrderBy
  /**
   * Page number.
   */
  page?: number
  /**
   * DHCP entries per page.
   */
  pageSize?: number
  /**
   * Filter for entries on this GatewayNetwork.
   */
  gatewayNetworkId?: string
  /**
   * Filter for entries with this MAC address.
   */
  macAddress?: string
  /**
   * Filter for entries with this IP address.
   */
  ipAddress?: string
  /**
   * Filter for entries with this hostname substring.
   */
  hostname?: string
  /**
   * Filter for entries of this type.
   */
  type?: DHCPEntryType
}

export interface ListDHCPEntriesResponse {
  /**
   * DHCP entries in this page.
   */
  dhcpEntries: DHCPEntry[]
  /**
   * Total count of DHCP entries matching the filter.
   */
  totalCount: number
}

export type ListDHCPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Order in which to return results.
   */
  orderBy?: ListDHCPsRequestOrderBy
  /**
   * Page number.
   */
  page?: number
  /**
   * DHCP configurations per page.
   */
  pageSize?: number
  /**
   * Include only DHCP configuration objects in this Organization.
   */
  organizationId?: string
  /**
   * Include only DHCP configuration objects in this Project.
   */
  projectId?: string
  /**
   * Filter for DHCP configuration objects with this DHCP server IP address (the gateway's address in the Private Network).
   */
  address?: string
  /**
   * Filter for DHCP configuration objects with subnets containing this IP address.
   */
  hasAddress?: string
}

export interface ListDHCPsResponse {
  /**
   * First page of DHCP configuration objects.
   */
  dhcps: DHCP[]
  /**
   * Total count of DHCP configuration objects matching the filter.
   */
  totalCount: number
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
   * Filter for GatewayNetworks connected to this gateway.
   */
  gatewayId?: string
  /**
   * Filter for GatewayNetworks connected to this Private Network.
   */
  privateNetworkId?: string
  /**
   * Filter for GatewayNetworks with this `enable_masquerade` setting.
   */
  enableMasquerade?: boolean
  /**
   * Filter for GatewayNetworks using this DHCP configuration.
   */
  dhcpId?: string
  /**
   * Filter for GatewayNetworks with this current status this status. Use `unknown` to include all statuses.
   */
  status?: GatewayNetworkStatus
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
   * Filter for gateways of this type.
   */
  type?: string
  /**
   * Filter for gateways with this current status. Use `unknown` to include all statuses.
   */
  status?: GatewayStatus
  /**
   * Filter for gateways attached to this Private nNetwork.
   */
  privateNetworkId?: string
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
   * Filter for IP addresses in this Organization.
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

export type ListPATRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Order in which to return results.
   */
  orderBy?: ListPATRulesRequestOrderBy
  /**
   * Page number.
   */
  page?: number
  /**
   * PAT rules per page.
   */
  pageSize?: number
  /**
   * Filter for PAT rules on this Gateway.
   */
  gatewayId?: string
  /**
   * Filter for PAT rules targeting this private ip.
   */
  privateIp?: string
  /**
   * Filter for PAT rules with this protocol.
   */
  protocol?: PATRuleProtocol
}

export interface ListPATRulesResponse {
  /**
   * Array of PAT rules matching the filter.
   */
  patRules: PATRule[]
  /**
   * Total count of PAT rules matching the filter.
   */
  totalCount: number
}

export type MigrateToV2Request = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the gateway to put into IPAM mode.
   */
  gatewayId: string
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

export type SetDHCPEntriesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the Gateway Network on which to set DHCP reservation list.
   */
  gatewayNetworkId: string
  /**
   * New list of DHCP reservations.
   */
  dhcpEntries?: SetDHCPEntriesRequestEntry[]
}

export interface SetDHCPEntriesResponse {
  /**
   * List of DHCP entries.
   */
  dhcpEntries: DHCPEntry[]
}

export type SetPATRulesRequest = {
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
  patRules: SetPATRulesRequestRule[]
}

export interface SetPATRulesResponse {
  /**
   * List of PAT rules.
   */
  patRules: PATRule[]
}

export type UpdateDHCPEntryRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the DHCP entry to update.
   */
  dhcpEntryId: string
  /**
   * New IP address to give to the device.
   */
  ipAddress?: string
}

export type UpdateDHCPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * DHCP configuration to update.
   */
  dhcpId: string
  /**
   * Subnet for the DHCP server.
   */
  subnet?: string
  /**
   * IP address of the DHCP server. This will be the Public Gateway's address in the Private Network. It must be part of config's subnet.
   */
  address?: string
  /**
   * Low IP (inclusive) of the dynamic address pool. Must be in the config's subnet.
   */
  poolLow?: string
  /**
   * High IP (inclusive) of the dynamic address pool. Must be in the config's subnet.
   */
  poolHigh?: string
  /**
   * Defines whether to enable dynamic pooling of IPs. When false, only pre-existing DHCP reservations will be handed out. Defaults to true.
   */
  enableDynamic?: boolean
  /**
   * How long DHCP entries will be valid for.
   */
  validLifetime?: string
  /**
   * After how long a renew will be attempted. Must be 30s lower than `rebind_timer`.
   */
  renewTimer?: string
  /**
   * After how long a DHCP client will query for a new lease if previous renews fail. Must be 30s lower than `valid_lifetime`.
   */
  rebindTimer?: string
  /**
   * Defines whether the gateway should push a default route to DHCP clients, or only hand out IPs.
   */
  pushDefaultRoute?: boolean
  /**
   * Defines whether the gateway should push custom DNS servers to clients. This allows for instance hostname -> IP resolution.
   */
  pushDnsServer?: boolean
  /**
   * Array of DNS server IP addresses used to override the DNS server list pushed to DHCP clients, instead of the gateway itself.
   */
  dnsServersOverride?: string[]
  /**
   * Array of search paths in addition to the pushed DNS configuration.
   */
  dnsSearch?: string[]
  /**
   * TLD given to hostnames in the Private Networks. If an instance with hostname `foo` gets a lease, and this is set to `bar`, `foo.bar` will resolve. Allowed characters are `a-z0-9-.`.
   */
  dnsLocalName?: string
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
   * Note: this setting is ignored when passing `ipam_config`.
   */
  enableMasquerade?: boolean
  /**
   * Defaults to `true` if `dhcp_id` is present. If set to `true`, `dhcp_id` must be present.
Note: this setting is ignored when passing `ipam_config`.
   */
  enableDhcp?: boolean
  /**
   * ID of the new DHCP configuration object to use with this GatewayNetwork.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'address', 'ipamConfig' could be set.
   */
  dhcpId?: string
  /**
   * New static IP address.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'address', 'ipamConfig' could be set.
   */
  address?: string
  /**
   * Note: all or none of the GatewayNetworks for a single gateway can use the IPAM. DHCP and IPAM configurations cannot be mixed. Some products may require that the Public Gateway uses the IPAM, to ensure correct functionality.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'address', 'ipamConfig' could be set.
   */
  ipamConfig?: UpdateGatewayNetworkRequestIpamConfig
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
   * Array of DNS server IP addresses to override the gateway's default recursive DNS servers.
   */
  upstreamDnsServers?: string[]
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

export type UpdatePATRuleRequest = {
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
  protocol?: PATRuleProtocol
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
