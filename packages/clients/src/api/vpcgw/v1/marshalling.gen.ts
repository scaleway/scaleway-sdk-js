// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateDHCPEntryRequest,
  CreateDHCPRequest,
  CreateGatewayNetworkRequest,
  CreateGatewayRequest,
  CreateIPRequest,
  CreatePATRuleRequest,
  DHCP,
  DHCPEntry,
  Gateway,
  GatewayNetwork,
  GatewayType,
  IP,
  ListDHCPEntriesResponse,
  ListDHCPsResponse,
  ListGatewayNetworksResponse,
  ListGatewayTypesResponse,
  ListGatewaysResponse,
  ListIPsResponse,
  ListPATRulesResponse,
  PATRule,
  SetDHCPEntriesRequest,
  SetDHCPEntriesRequestEntry,
  SetDHCPEntriesResponse,
  SetPATRulesRequest,
  SetPATRulesRequestRule,
  SetPATRulesResponse,
  UpdateDHCPEntryRequest,
  UpdateDHCPRequest,
  UpdateGatewayNetworkRequest,
  UpdateGatewayRequest,
  UpdateIPRequest,
  UpdatePATRuleRequest,
} from './types.gen'

export const unmarshalDHCP = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DHCP' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    createdAt: unmarshalDate(data.created_at),
    dnsLocalName: data.dns_local_name,
    dnsSearch: data.dns_search,
    dnsServersOverride: data.dns_servers_override,
    enableDynamic: data.enable_dynamic,
    id: data.id,
    organizationId: data.organization_id,
    poolHigh: data.pool_high,
    poolLow: data.pool_low,
    projectId: data.project_id,
    pushDefaultRoute: data.push_default_route,
    pushDnsServer: data.push_dns_server,
    rebindTimer: data.rebind_timer,
    renewTimer: data.renew_timer,
    subnet: data.subnet,
    updatedAt: unmarshalDate(data.updated_at),
    validLifetime: data.valid_lifetime,
    zone: data.zone,
  } as DHCP
}

export const unmarshalGatewayNetwork = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GatewayNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    createdAt: unmarshalDate(data.created_at),
    dhcp: data.dhcp ? unmarshalDHCP(data.dhcp) : undefined,
    enableDhcp: data.enable_dhcp,
    enableMasquerade: data.enable_masquerade,
    gatewayId: data.gateway_id,
    id: data.id,
    macAddress: data.mac_address,
    privateNetworkId: data.private_network_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as GatewayNetwork
}

const unmarshalGatewayType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GatewayType' failed as data isn't a dictionary.`,
    )
  }

  return {
    bandwidth: data.bandwidth,
    name: data.name,
    zone: data.zone,
  } as GatewayType
}

export const unmarshalIP = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'IP' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    createdAt: unmarshalDate(data.created_at),
    gatewayId: data.gateway_id,
    id: data.id,
    organizationId: data.organization_id,
    projectId: data.project_id,
    reverse: data.reverse,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as IP
}

export const unmarshalDHCPEntry = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DHCPEntry' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    gatewayNetworkId: data.gateway_network_id,
    hostname: data.hostname,
    id: data.id,
    ipAddress: data.ip_address,
    macAddress: data.mac_address,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as DHCPEntry
}

export const unmarshalGateway = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Gateway' failed as data isn't a dictionary.`,
    )
  }

  return {
    bastionEnabled: data.bastion_enabled,
    bastionPort: data.bastion_port,
    canUpgradeTo: data.can_upgrade_to,
    createdAt: unmarshalDate(data.created_at),
    gatewayNetworks: unmarshalArrayOfObject(
      data.gateway_networks,
      unmarshalGatewayNetwork,
    ),
    id: data.id,
    ip: data.ip ? unmarshalIP(data.ip) : undefined,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    smtpEnabled: data.smtp_enabled,
    status: data.status,
    tags: data.tags,
    type: data.type ? unmarshalGatewayType(data.type) : undefined,
    updatedAt: unmarshalDate(data.updated_at),
    upstreamDnsServers: data.upstream_dns_servers,
    version: data.version,
    zone: data.zone,
  } as Gateway
}

export const unmarshalPATRule = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PATRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    gatewayId: data.gateway_id,
    id: data.id,
    privateIp: data.private_ip,
    privatePort: data.private_port,
    protocol: data.protocol,
    publicPort: data.public_port,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as PATRule
}

export const unmarshalListDHCPEntriesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDHCPEntriesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dhcpEntries: unmarshalArrayOfObject(data.dhcp_entries, unmarshalDHCPEntry),
    totalCount: data.total_count,
  } as ListDHCPEntriesResponse
}

export const unmarshalListDHCPsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDHCPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dhcps: unmarshalArrayOfObject(data.dhcps, unmarshalDHCP),
    totalCount: data.total_count,
  } as ListDHCPsResponse
}

export const unmarshalListGatewayNetworksResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGatewayNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    gatewayNetworks: unmarshalArrayOfObject(
      data.gateway_networks,
      unmarshalGatewayNetwork,
    ),
    totalCount: data.total_count,
  } as ListGatewayNetworksResponse
}

export const unmarshalListGatewayTypesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGatewayTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    types: unmarshalArrayOfObject(data.types, unmarshalGatewayType),
  } as ListGatewayTypesResponse
}

export const unmarshalListGatewaysResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGatewaysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    gateways: unmarshalArrayOfObject(data.gateways, unmarshalGateway),
    totalCount: data.total_count,
  } as ListGatewaysResponse
}

export const unmarshalListIPsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListIPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ips: unmarshalArrayOfObject(data.ips, unmarshalIP),
    totalCount: data.total_count,
  } as ListIPsResponse
}

export const unmarshalListPATRulesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPATRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    patRules: unmarshalArrayOfObject(data.pat_rules, unmarshalPATRule),
    totalCount: data.total_count,
  } as ListPATRulesResponse
}

export const unmarshalSetDHCPEntriesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetDHCPEntriesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dhcpEntries: unmarshalArrayOfObject(data.dhcp_entries, unmarshalDHCPEntry),
  } as SetDHCPEntriesResponse
}

export const unmarshalSetPATRulesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetPATRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    patRules: unmarshalArrayOfObject(data.pat_rules, unmarshalPATRule),
  } as SetPATRulesResponse
}

const marshalSetDHCPEntriesRequestEntry = (
  request: SetDHCPEntriesRequestEntry,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_address: request.ipAddress,
  mac_address: request.macAddress,
})

const marshalSetPATRulesRequestRule = (
  request: SetPATRulesRequestRule,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_ip: request.privateIp,
  private_port: request.privatePort,
  protocol: request.protocol,
  public_port: request.publicPort,
})

export const marshalCreateDHCPEntryRequest = (
  request: CreateDHCPEntryRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  gateway_network_id: request.gatewayNetworkId,
  ip_address: request.ipAddress,
  mac_address: request.macAddress,
})

export const marshalCreateDHCPRequest = (
  request: CreateDHCPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  dns_local_name: request.dnsLocalName,
  dns_search: request.dnsSearch,
  dns_servers_override: request.dnsServersOverride,
  enable_dynamic: request.enableDynamic,
  pool_high: request.poolHigh,
  pool_low: request.poolLow,
  project_id: request.projectId ?? defaults.defaultProjectId,
  push_default_route: request.pushDefaultRoute,
  push_dns_server: request.pushDnsServer,
  rebind_timer: request.rebindTimer,
  renew_timer: request.renewTimer,
  subnet: request.subnet,
  valid_lifetime: request.validLifetime,
})

export const marshalCreateGatewayNetworkRequest = (
  request: CreateGatewayNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable_dhcp: request.enableDhcp,
  enable_masquerade: request.enableMasquerade,
  gateway_id: request.gatewayId,
  private_network_id: request.privateNetworkId,
  ...resolveOneOf([
    {
      param: 'dhcp_id',
      value: request.dhcpId,
    },
    {
      param: 'address',
      value: request.address,
    },
  ]),
})

export const marshalCreateGatewayRequest = (
  request: CreateGatewayRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bastion_port: request.bastionPort,
  enable_bastion: request.enableBastion,
  enable_smtp: request.enableSmtp,
  ip_id: request.ipId,
  name: request.name || randomName('gw'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  type: request.type,
  upstream_dns_servers: request.upstreamDnsServers,
})

export const marshalCreateIPRequest = (
  request: CreateIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalCreatePATRuleRequest = (
  request: CreatePATRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  gateway_id: request.gatewayId,
  private_ip: request.privateIp,
  private_port: request.privatePort,
  protocol: request.protocol,
  public_port: request.publicPort,
})

export const marshalSetDHCPEntriesRequest = (
  request: SetDHCPEntriesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  dhcp_entries: request.dhcpEntries
    ? request.dhcpEntries.map(elt =>
        marshalSetDHCPEntriesRequestEntry(elt, defaults),
      )
    : undefined,
  gateway_network_id: request.gatewayNetworkId,
})

export const marshalSetPATRulesRequest = (
  request: SetPATRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  gateway_id: request.gatewayId,
  pat_rules: request.patRules.map(elt =>
    marshalSetPATRulesRequestRule(elt, defaults),
  ),
})

export const marshalUpdateDHCPEntryRequest = (
  request: UpdateDHCPEntryRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_address: request.ipAddress,
})

export const marshalUpdateDHCPRequest = (
  request: UpdateDHCPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  dns_local_name: request.dnsLocalName,
  dns_search: request.dnsSearch,
  dns_servers_override: request.dnsServersOverride,
  enable_dynamic: request.enableDynamic,
  pool_high: request.poolHigh,
  pool_low: request.poolLow,
  push_default_route: request.pushDefaultRoute,
  push_dns_server: request.pushDnsServer,
  rebind_timer: request.rebindTimer,
  renew_timer: request.renewTimer,
  subnet: request.subnet,
  valid_lifetime: request.validLifetime,
})

export const marshalUpdateGatewayNetworkRequest = (
  request: UpdateGatewayNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable_dhcp: request.enableDhcp,
  enable_masquerade: request.enableMasquerade,
  ...resolveOneOf([
    {
      param: 'dhcp_id',
      value: request.dhcpId,
    },
    {
      param: 'address',
      value: request.address,
    },
  ]),
})

export const marshalUpdateGatewayRequest = (
  request: UpdateGatewayRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bastion_port: request.bastionPort,
  enable_bastion: request.enableBastion,
  enable_smtp: request.enableSmtp,
  name: request.name,
  tags: request.tags,
  upstream_dns_servers: request.upstreamDnsServers,
})

export const marshalUpdateIPRequest = (
  request: UpdateIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  gateway_id: request.gatewayId,
  reverse: request.reverse,
  tags: request.tags,
})

export const marshalUpdatePATRuleRequest = (
  request: UpdatePATRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_ip: request.privateIp,
  private_port: request.privatePort,
  protocol: request.protocol,
  public_port: request.publicPort,
})
