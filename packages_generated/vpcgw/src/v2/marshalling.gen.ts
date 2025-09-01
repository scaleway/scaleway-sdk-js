// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  AddBastionAllowedIPsRequest,
  AddBastionAllowedIPsResponse,
  CreateGatewayNetworkRequest,
  CreateGatewayRequest,
  CreateIPRequest,
  CreatePatRuleRequest,
  Gateway,
  GatewayNetwork,
  GatewayType,
  IP,
  ListGatewayNetworksResponse,
  ListGatewayTypesResponse,
  ListGatewaysResponse,
  ListIPsResponse,
  ListPatRulesResponse,
  PatRule,
  SetBastionAllowedIPsRequest,
  SetBastionAllowedIPsResponse,
  SetPatRulesRequest,
  SetPatRulesRequestRule,
  SetPatRulesResponse,
  UpdateGatewayNetworkRequest,
  UpdateGatewayRequest,
  UpdateIPRequest,
  UpdatePatRuleRequest,
  UpgradeGatewayRequest,
} from './types.gen'

export const unmarshalGatewayNetwork = (data: unknown): GatewayNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GatewayNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    gatewayId: data.gateway_id,
    id: data.id,
    ipamIpId: data.ipam_ip_id,
    macAddress: data.mac_address,
    masqueradeEnabled: data.masquerade_enabled,
    privateNetworkId: data.private_network_id,
    pushDefaultRoute: data.push_default_route,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as GatewayNetwork
}

export const unmarshalIP = (data: unknown): IP => {
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

export const unmarshalGateway = (data: unknown): Gateway => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Gateway' failed as data isn't a dictionary.`,
    )
  }

  return {
    bandwidth: data.bandwidth,
    bastionAllowedIps: data.bastion_allowed_ips,
    bastionEnabled: data.bastion_enabled,
    bastionPort: data.bastion_port,
    canUpgradeTo: data.can_upgrade_to,
    createdAt: unmarshalDate(data.created_at),
    gatewayNetworks: unmarshalArrayOfObject(
      data.gateway_networks,
      unmarshalGatewayNetwork,
    ),
    id: data.id,
    ipv4: data.ipv4 ? unmarshalIP(data.ipv4) : undefined,
    isLegacy: data.is_legacy,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    smtpEnabled: data.smtp_enabled,
    status: data.status,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    version: data.version,
    zone: data.zone,
  } as Gateway
}

export const unmarshalPatRule = (data: unknown): PatRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PatRule' failed as data isn't a dictionary.`,
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
  } as PatRule
}

export const unmarshalAddBastionAllowedIPsResponse = (
  data: unknown,
): AddBastionAllowedIPsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddBastionAllowedIPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ipRanges: data.ip_ranges,
  } as AddBastionAllowedIPsResponse
}

export const unmarshalListGatewayNetworksResponse = (
  data: unknown,
): ListGatewayNetworksResponse => {
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

const unmarshalGatewayType = (data: unknown): GatewayType => {
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

export const unmarshalListGatewayTypesResponse = (
  data: unknown,
): ListGatewayTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGatewayTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    types: unmarshalArrayOfObject(data.types, unmarshalGatewayType),
  } as ListGatewayTypesResponse
}

export const unmarshalListGatewaysResponse = (
  data: unknown,
): ListGatewaysResponse => {
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

export const unmarshalListIPsResponse = (data: unknown): ListIPsResponse => {
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

export const unmarshalListPatRulesResponse = (
  data: unknown,
): ListPatRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPatRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    patRules: unmarshalArrayOfObject(data.pat_rules, unmarshalPatRule),
    totalCount: data.total_count,
  } as ListPatRulesResponse
}

export const unmarshalSetBastionAllowedIPsResponse = (
  data: unknown,
): SetBastionAllowedIPsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetBastionAllowedIPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ipRanges: data.ip_ranges,
  } as SetBastionAllowedIPsResponse
}

export const unmarshalSetPatRulesResponse = (
  data: unknown,
): SetPatRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetPatRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    patRules: unmarshalArrayOfObject(data.pat_rules, unmarshalPatRule),
  } as SetPatRulesResponse
}

export const marshalAddBastionAllowedIPsRequest = (
  request: AddBastionAllowedIPsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_range: request.ipRange,
})

export const marshalCreateGatewayNetworkRequest = (
  request: CreateGatewayNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable_masquerade: request.enableMasquerade,
  gateway_id: request.gatewayId,
  ipam_ip_id: request.ipamIpId,
  private_network_id: request.privateNetworkId,
  push_default_route: request.pushDefaultRoute,
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
})

export const marshalCreateIPRequest = (
  request: CreateIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalCreatePatRuleRequest = (
  request: CreatePatRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  gateway_id: request.gatewayId,
  private_ip: request.privateIp,
  private_port: request.privatePort,
  protocol: request.protocol,
  public_port: request.publicPort,
})

export const marshalSetBastionAllowedIPsRequest = (
  request: SetBastionAllowedIPsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_ranges: request.ipRanges,
})

const marshalSetPatRulesRequestRule = (
  request: SetPatRulesRequestRule,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_ip: request.privateIp,
  private_port: request.privatePort,
  protocol: request.protocol,
  public_port: request.publicPort,
})

export const marshalSetPatRulesRequest = (
  request: SetPatRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  gateway_id: request.gatewayId,
  pat_rules: request.patRules.map(elt =>
    marshalSetPatRulesRequestRule(elt, defaults),
  ),
})

export const marshalUpdateGatewayNetworkRequest = (
  request: UpdateGatewayNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable_masquerade: request.enableMasquerade,
  ipam_ip_id: request.ipamIpId,
  push_default_route: request.pushDefaultRoute,
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
})

export const marshalUpdateIPRequest = (
  request: UpdateIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  gateway_id: request.gatewayId,
  reverse: request.reverse,
  tags: request.tags,
})

export const marshalUpdatePatRuleRequest = (
  request: UpdatePatRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_ip: request.privateIp,
  private_port: request.privatePort,
  protocol: request.protocol,
  public_port: request.publicPort,
})

export const marshalUpgradeGatewayRequest = (
  request: UpgradeGatewayRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  type: request.type,
})
