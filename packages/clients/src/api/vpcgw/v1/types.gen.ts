// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

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

/** Dhcp */
export interface DHCP {
  /** ID of the DHCP config */
  id: string
  /** Owning organization */
  organizationId: string
  /** Owning project */
  projectId: string
  /** Configuration creation date */
  createdAt?: Date
  /** Configuration last modification date */
  updatedAt?: Date
  /** Subnet for the DHCP server */
  subnet: string
  /**
   * Address of the DHCP server. This will be the gateway's address in the
   * private network. It must be part of config's subnet.
   */
  address: string
  /**
   * Low IP (included) of the dynamic address pool. Must be in the config's
   * subnet
   */
  poolLow: string
  /**
   * High IP (included) of the dynamic address pool. Must be in the config's
   * subnet
   */
  poolHigh: string
  /**
   * Whether to enable dynamic pooling of IPs. By turning the dynamic pool off,
   * only pre-existing DHCP reservations will be handed out.
   */
  enableDynamic: boolean
  /** How long, in seconds, DHCP entries will be valid for */
  validLifetime?: string
  /**
   * After how long, in seconds, a renew will be attempted. Must be 30s lower
   * than `rebind_timer`.
   */
  renewTimer?: string
  /**
   * After how long, in seconds, a DHCP client will query for a new lease if
   * previous renews fail. Must be 30s lower than `valid_lifetime`.
   */
  rebindTimer?: string
  /**
   * Whether the gateway should push a default route to DHCP clients or only
   * hand out IPs
   */
  pushDefaultRoute: boolean
  /**
   * Whether the gateway should push custom DNS servers to clients. This allows
   * for instance hostname -> IP resolution.
   */
  pushDnsServer: boolean
  /**
   * Override the DNS server list pushed to DHCP clients, instead of the gateway
   * itself
   */
  dnsServersOverride: Array<string>
  /** Add search paths to the pushed DNS configuration */
  dnsSearch: Array<string>
  /**
   * TLD given to hostnames in the Private Network. If an instance with hostname
   * `foo` gets a lease, and this is set to `bar`, `foo.bar` will resolve.
   */
  dnsLocalName: string
  /** Zone this configuration is available in */
  zone: Zone
}

/** Dhcp entry */
export interface DHCPEntry {
  /** Entry ID */
  id: string
  /** Configuration creation date */
  createdAt?: Date
  /** Configuration last modification date */
  updatedAt?: Date
  /** Owning GatewayNetwork */
  gatewayNetworkId: string
  /** MAC address of the client machine */
  macAddress: string
  /** Assigned IP address */
  ipAddress: string
  /** Hostname of the client machine */
  hostname: string
  /** Entry type, either static (DHCP reservation) or dynamic (DHCP lease) */
  type: DHCPEntryType
  /** Zone this entry is available in */
  zone: Zone
}

/** Gateway */
export interface Gateway {
  /** ID of the gateway */
  id: string
  /** Owning organization */
  organizationId: string
  /** Owning project */
  projectId: string
  /** Gateway creation date */
  createdAt?: Date
  /** Gateway last modification date */
  updatedAt?: Date
  /** Gateway type */
  type?: GatewayType
  /** Gateway's current status */
  status: GatewayStatus
  /** Name of the gateway */
  name: string
  /** Tags of the gateway */
  tags: Array<string>
  /** Public IP of the gateway */
  ip?: IP
  /** GatewayNetworks attached to the gateway */
  gatewayNetworks: Array<GatewayNetwork>
  /** Override the gateway's default recursive DNS servers */
  upstreamDnsServers: Array<string>
  /** Version of the running gateway software */
  version?: string
  /** Newly available gateway software version that can be updated to */
  canUpgradeTo?: string
  /** Whether SSH bastion is enabled on the gateway */
  bastionEnabled: boolean
  /** Port of the SSH bastion */
  bastionPort: number
  /** Whether SMTP traffic is allowed to pass through the gateway */
  smtpEnabled: boolean
  /** Zone the gateway is available in */
  zone: Zone
}

/** Gateway network */
export interface GatewayNetwork {
  /** ID of the connection */
  id: string
  /** Connection creation date */
  createdAt?: Date
  /** Connection last modification date */
  updatedAt?: Date
  /** ID of the connected gateway */
  gatewayId: string
  /** ID of the connected private network */
  privateNetworkId: string
  /**
   * MAC address of the gateway in the network (if the gateway is up and
   * running)
   */
  macAddress?: string
  /** Whether the gateway masquerades traffic for this network */
  enableMasquerade: boolean
  /** Current status of the gateway network connection */
  status: GatewayNetworkStatus
  /** DHCP configuration for the connected private network */
  dhcp?: DHCP
  /** Whether DHCP is enabled on the connected Private Network */
  enableDhcp: boolean
  /** Address of the Gateway in CIDR form to use when DHCP is not used */
  address?: string
  /** Zone the connection lives in */
  zone: Zone
}

/** Gateway type */
export interface GatewayType {
  /** Type name */
  name: string
  /**
   * Bandwidth, in bps, the gateway has. This is the public bandwidth to the
   * outer internet, and the internal bandwidth to each connected Private
   * Networks.
   */
  bandwidth: number
  /** Zone the type is available in */
  zone: Zone
}

/** Ip */
export interface IP {
  /** IP ID */
  id: string
  /** Owning organization */
  organizationId: string
  /** Owning project */
  projectId: string
  /** Configuration creation date */
  createdAt?: Date
  /** Configuration last modification date */
  updatedAt?: Date
  /** Tags associated with the IP */
  tags: Array<string>
  /** The IP itself */
  address: string
  /** Reverse domain name for the IP address */
  reverse?: string
  /** Gateway associated to the IP */
  gatewayId?: string
  /** Zone this IP is available in */
  zone: Zone
}

/** List dhcp entries response */
export interface ListDHCPEntriesResponse {
  /** DHCP entries in this page */
  dhcpEntries: Array<DHCPEntry>
  /** Total DHCP entries matching the filter */
  totalCount: number
}

/** List dhc ps response */
export interface ListDHCPsResponse {
  /** First page of DHCP configs */
  dhcps: Array<DHCP>
  /** Total DHCP configs matching the filter */
  totalCount: number
}

/** List gateway networks response */
export interface ListGatewayNetworksResponse {
  /** GatewayNetworks in this page */
  gatewayNetworks: Array<GatewayNetwork>
  /** Total GatewayNetworks count matching the filter */
  totalCount: number
}

/** List gateway types response */
export interface ListGatewayTypesResponse {
  /** Available types of gateway */
  types: Array<GatewayType>
}

/** List gateways response */
export interface ListGatewaysResponse {
  /** Gateways in this page */
  gateways: Array<Gateway>
  /** Total count of gateways matching the filter */
  totalCount: number
}

/** List i ps response */
export interface ListIPsResponse {
  /** IPs in this page */
  ips: Array<IP>
  /** Total IP count matching the filter */
  totalCount: number
}

/** List pat rules response */
export interface ListPATRulesResponse {
  /** This page of PAT rules matching the filter */
  patRules: Array<PATRule>
  /** Total PAT rules matching the filter */
  totalCount: number
}

/** Pat rule */
export interface PATRule {
  /** Rule ID */
  id: string
  /** Gateway the PAT rule applies to */
  gatewayId: string
  /** Rule creation date */
  createdAt?: Date
  /** Rule last modification date */
  updatedAt?: Date
  /** Public port to listen on */
  publicPort: number
  /** Private IP to forward data to */
  privateIp: string
  /** Private port to translate to */
  privatePort: number
  /** Protocol the rule applies to */
  protocol: PATRuleProtocol
  /** Zone this rule is available in */
  zone: Zone
}

/** Set dhcp entries request. entry */
export interface SetDHCPEntriesRequestEntry {
  /**
   * MAC address to give a static entry to. A matching entry will be upgraded to
   * a reservation, and a matching reservation will be updated.
   */
  macAddress: string
  /** IP address to give to the machine */
  ipAddress: string
}

/** Set dhcp entries response */
export interface SetDHCPEntriesResponse {
  /** List of DHCP entries */
  dhcpEntries: Array<DHCPEntry>
}

/** Set pat rules request. rule */
export interface SetPATRulesRequestRule {
  /**
   * Public port to listen on. Uniquely identifies the rule, and a matching rule
   * will be updated with the new parameters.
   */
  publicPort: number
  /** Private IP to forward data to */
  privateIp: string
  /** Private port to translate to */
  privatePort: number
  /** Protocol the rule should apply to */
  protocol: PATRuleProtocol
}

/** Set pat rules response */
export interface SetPATRulesResponse {
  /** List of PAT rules */
  patRules: Array<PATRule>
}

export type ListGatewaysRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Order in which to return results */
  orderBy?: ListGatewaysRequestOrderBy
  /** Page number */
  page?: number
  /** Gateways per page */
  pageSize?: number
  /** Include only gateways in this organization */
  organizationId?: string
  /** Include only gateways in this project */
  projectId?: string
  /** Filter gateways including this name */
  name?: string
  /** Filter gateways with these tags */
  tags?: Array<string>
  /** Filter gateways of this type */
  type?: string
  /** Filter gateways in this status (unknown for any) */
  status?: GatewayStatus
  /** Filter gateways attached to this private network */
  privateNetworkId?: string
}

export type GetGatewayRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the gateway to fetch */
  gatewayId: string
}

export type CreateGatewayRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Project to create the gateway into */
  projectId?: string
  /** Name of the gateway */
  name?: string
  /** Tags for the gateway */
  tags?: Array<string>
  /** Gateway type */
  type: string
  /**
   * Override the gateway's default recursive DNS servers, if DNS features are
   * enabled
   */
  upstreamDnsServers?: Array<string>
  /** Attach an existing IP to the gateway */
  ipId?: string
  /** Allow SMTP traffic to pass through the gateway */
  enableSmtp: boolean
  /** Enable SSH bastion on the gateway */
  enableBastion: boolean
  /** Port of the SSH bastion */
  bastionPort?: number
}

export type UpdateGatewayRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the gateway to update */
  gatewayId: string
  /** Name fo the gateway */
  name?: string
  /** Tags for the gateway */
  tags?: Array<string>
  /**
   * Override the gateway's default recursive DNS servers, if DNS features are
   * enabled
   */
  upstreamDnsServers?: Array<string>
  /** Enable SSH bastion on the gateway */
  enableBastion?: boolean
  /** Port of the SSH bastion */
  bastionPort?: number
  /** Allow SMTP traffic to pass through the gateway */
  enableSmtp?: boolean
}

export type DeleteGatewayRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the gateway to delete */
  gatewayId: string
  /**
   * Whether to cleanup attached DHCP configurations (if any, and if not
   * attached to another Gateway Network).
   */
  cleanupDhcp: boolean
}

export type UpgradeGatewayRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the gateway to upgrade */
  gatewayId: string
}

export type ListGatewayNetworksRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Order in which to return results */
  orderBy?: ListGatewayNetworksRequestOrderBy
  /** Page number */
  page?: number
  /** GatewayNetworks per page */
  pageSize?: number
  /** Filter by gateway */
  gatewayId?: string
  /** Filter by private network */
  privateNetworkId?: string
  /** Filter by masquerade enablement */
  enableMasquerade?: boolean
  /** Filter by DHCP configuration */
  dhcpId?: string
  /** Filter GatewayNetworks by this status (unknown for any) */
  status?: GatewayNetworkStatus
}

export type GetGatewayNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the GatewayNetwork to fetch */
  gatewayNetworkId: string
}

export type CreateGatewayNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Gateway to connect */
  gatewayId: string
  /** Private Network to connect */
  privateNetworkId: string
  /** Whether to enable masquerade on this network */
  enableMasquerade: boolean
  /**
   * Existing configuration.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'address' could be set.
   */
  dhcpId?: string
  /**
   * Static IP address in CIDR format to to use without DHCP.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'address' could be set.
   */
  address?: string
  /**
   * Whether to enable DHCP on this Private Network. Defaults to `true` if
   * either `dhcp_id` or `dhcp` short: are present. If set to `true`, requires
   * that either `dhcp_id` or `dhcp` to be present.
   */
  enableDhcp?: boolean
}

export type UpdateGatewayNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the GatewayNetwork to update */
  gatewayNetworkId: string
  /** New masquerade enablement */
  enableMasquerade?: boolean
  /**
   * New DHCP configuration.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'address' could be set.
   */
  dhcpId?: string
  /** Whether to enable DHCP on the connected Private Network */
  enableDhcp?: boolean
  /**
   * New static IP address.
   *
   * One-of ('ipConfig'): at most one of 'dhcpId', 'address' could be set.
   */
  address?: string
}

export type DeleteGatewayNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** GatewayNetwork to delete */
  gatewayNetworkId: string
  /**
   * Whether to cleanup the attached DHCP configuration (if any, and if not
   * attached to another gateway_network).
   */
  cleanupDhcp: boolean
}

export type ListDHCPsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Order in which to return results */
  orderBy?: ListDHCPsRequestOrderBy
  /** Page number */
  page?: number
  /** DHCP configurations per page */
  pageSize?: number
  /** Include only DHCPs in this organization */
  organizationId?: string
  /** Include only DHCPs in this project */
  projectId?: string
  /** Filter on gateway address */
  address?: string
  /** Filter on subnets containing address */
  hasAddress?: string
}

export type GetDHCPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the DHCP config to fetch */
  dhcpId: string
}

export type CreateDHCPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Project to create the DHCP configuration in */
  projectId?: string
  /** Subnet for the DHCP server */
  subnet: string
  /**
   * Address of the DHCP server. This will be the gateway's address in the
   * private network. Defaults to the first address of the subnet
   */
  address?: string
  /**
   * Low IP (included) of the dynamic address pool. Defaults to the second
   * address of the subnet.
   */
  poolLow?: string
  /**
   * High IP (included) of the dynamic address pool. Defaults to the last
   * address of the subnet.
   */
  poolHigh?: string
  /**
   * Whether to enable dynamic pooling of IPs. By turning the dynamic pool off,
   * only pre-existing DHCP reservations will be handed out. Defaults to true.
   */
  enableDynamic?: boolean
  /**
   * For how long, in seconds, will DHCP entries will be valid. Defaults to 1h
   * (3600s).
   */
  validLifetime?: string
  /**
   * After how long, in seconds, a renew will be attempted. Must be 30s lower
   * than `rebind_timer`. Defaults to 50m (3000s).
   */
  renewTimer?: string
  /**
   * After how long, in seconds, a DHCP client will query for a new lease if
   * previous renews fail. Must be 30s lower than `valid_lifetime`. Defaults to
   * 51m (3060s).
   */
  rebindTimer?: string
  /**
   * Whether the gateway should push a default route to DHCP clients or only
   * hand out IPs. Defaults to true
   */
  pushDefaultRoute?: boolean
  /**
   * Whether the gateway should push custom DNS servers to clients. This allows
   * for instance hostname -> IP resolution. Defaults to true.
   */
  pushDnsServer?: boolean
  /**
   * Override the DNS server list pushed to DHCP clients, instead of the gateway
   * itself
   */
  dnsServersOverride?: Array<string>
  /** Additional DNS search paths */
  dnsSearch?: Array<string>
  /**
   * TLD given to hostnames in the Private Network. Allowed characters are
   * `a-z0-9-.`. Defaults to the slugified Private Network name if created along
   * a GatewayNetwork, or else to `priv`.
   */
  dnsLocalName?: string
}

export type UpdateDHCPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** DHCP config to update */
  dhcpId: string
  /** Subnet for the DHCP server */
  subnet?: string
  /**
   * Address of the DHCP server. This will be the gateway's address in the
   * private network
   */
  address?: string
  /** Low IP (included) of the dynamic address pool */
  poolLow?: string
  /** High IP (included) of the dynamic address pool */
  poolHigh?: string
  /**
   * Whether to enable dynamic pooling of IPs. By turning the dynamic pool off,
   * only pre-existing DHCP reservations will be handed out. Defaults to true.
   */
  enableDynamic?: boolean
  /** How long, in seconds, DHCP entries will be valid for */
  validLifetime?: string
  /**
   * After how long, in seconds, a renew will be attempted. Must be 30s lower
   * than `rebind_timer`.
   */
  renewTimer?: string
  /**
   * After how long, in seconds, a DHCP client will query for a new lease if
   * previous renews fail. Must be 30s lower than `valid_lifetime`.
   */
  rebindTimer?: string
  /**
   * Whether the gateway should push a default route to DHCP clients or only
   * hand out IPs
   */
  pushDefaultRoute?: boolean
  /**
   * Whether the gateway should push custom DNS servers to clients. This allows
   * for instance hostname -> IP resolution.
   */
  pushDnsServer?: boolean
  /**
   * Override the DNS server list pushed to DHCP clients, instead of the gateway
   * itself
   */
  dnsServersOverride?: Array<string>
  /** Additional DNS search paths */
  dnsSearch?: Array<string>
  /**
   * TLD given to hostnames in the Private Network. Allowed characters are
   * `a-z0-9-.`.
   */
  dnsLocalName?: string
}

export type DeleteDHCPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** DHCP config id to delete */
  dhcpId: string
}

export type ListDHCPEntriesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Order in which to return results */
  orderBy?: ListDHCPEntriesRequestOrderBy
  /** Page number */
  page?: number
  /** DHCP entries per page */
  pageSize?: number
  /** Filter entries based on the gateway network they are on */
  gatewayNetworkId?: string
  /** Filter entries on their MAC address */
  macAddress?: string
  /** Filter entries on their IP address */
  ipAddress?: string
  /** Filter entries on their hostname substring */
  hostname?: string
  /** Filter entries on their type */
  type?: DHCPEntryType
}

export type GetDHCPEntryRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the DHCP entry to fetch */
  dhcpEntryId: string
}

export type CreateDHCPEntryRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** GatewayNetwork on which to create a DHCP reservation */
  gatewayNetworkId: string
  /** MAC address to give a static entry to */
  macAddress: string
  /** IP address to give to the machine */
  ipAddress: string
}

export type UpdateDHCPEntryRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** DHCP entry ID to update */
  dhcpEntryId: string
  /** New IP address to give to the machine */
  ipAddress?: string
}

export type SetDHCPEntriesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Gateway Network on which to set DHCP reservation list */
  gatewayNetworkId: string
  /** New list of DHCP reservations */
  dhcpEntries?: Array<SetDHCPEntriesRequestEntry>
}

export type DeleteDHCPEntryRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** DHCP entry ID to delete */
  dhcpEntryId: string
}

export type ListPATRulesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Order in which to return results */
  orderBy?: ListPATRulesRequestOrderBy
  /** Page number */
  page?: number
  /** PAT rules per page */
  pageSize?: number
  /** Fetch rules for this gateway */
  gatewayId?: string
  /** Fetch rules targeting this private ip */
  privateIp?: string
  /** Fetch rules for this protocol */
  protocol?: PATRuleProtocol
}

export type GetPATRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** PAT rule to get */
  patRuleId: string
}

export type CreatePATRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Gateway on which to attach the rule to */
  gatewayId: string
  /** Public port to listen on */
  publicPort: number
  /** Private IP to forward data to */
  privateIp: string
  /** Private port to translate to */
  privatePort: number
  /** Protocol the rule should apply to */
  protocol?: PATRuleProtocol
}

export type UpdatePATRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** PAT rule to update */
  patRuleId: string
  /** Public port to listen on */
  publicPort?: number
  /** Private IP to forward data to */
  privateIp?: string
  /** Private port to translate to */
  privatePort?: number
  /** Protocol the rule should apply to */
  protocol?: PATRuleProtocol
}

export type SetPATRulesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Gateway on which to set the PAT rules */
  gatewayId: string
  /** New list of PAT rules */
  patRules: Array<SetPATRulesRequestRule>
}

export type DeletePATRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** PAT rule to delete */
  patRuleId: string
}

export type ListGatewayTypesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
}

export type ListIPsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Order in which to return results */
  orderBy?: ListIPsRequestOrderBy
  /** Page number */
  page?: number
  /** IPs per page */
  pageSize?: number
  /** Include only IPs in this organization */
  organizationId?: string
  /** Include only IPs in this project */
  projectId?: string
  /** Filter IPs with these tags */
  tags?: Array<string>
  /** Filter by reverse containing this string */
  reverse?: string
  /** Filter whether the IP is attached to a gateway or not */
  isFree?: boolean
}

export type GetIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the IP to get */
  ipId: string
}

export type CreateIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Project to create the IP into */
  projectId?: string
  /** Tags to give to the IP */
  tags?: Array<string>
}

export type UpdateIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the IP to update */
  ipId: string
  /** Tags to give to the IP */
  tags?: Array<string>
  /** Reverse to set on the IP. Empty string to unset */
  reverse?: string
  /** Gateway to attach the IP to. Empty string to detach */
  gatewayId?: string
}

export type DeleteIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the IP to delete */
  ipId: string
}

export type RefreshSSHKeysRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  gatewayId: string
}
