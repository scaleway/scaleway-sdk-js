// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  AclRule,
  AddSubnetsRequest,
  AddSubnetsResponse,
  CreatePrivateNetworkRequest,
  CreateRouteRequest,
  CreateVPCRequest,
  DeleteSubnetsRequest,
  DeleteSubnetsResponse,
  GetAclResponse,
  ListPrivateNetworksResponse,
  ListSubnetsResponse,
  ListVPCsResponse,
  PrivateNetwork,
  Route,
  SetAclRequest,
  SetAclResponse,
  Subnet,
  UpdatePrivateNetworkRequest,
  UpdateRouteRequest,
  UpdateVPCRequest,
  VPC,
} from './types.gen.js'

const unmarshalSubnet = (data: unknown): Subnet => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Subnet' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    subnet: data.subnet,
    updatedAt: unmarshalDate(data.updated_at),
    vpcId: data.vpc_id,
  } as Subnet
}

export const unmarshalPrivateNetwork = (data: unknown): PrivateNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    defaultRoutePropagationEnabled: data.default_route_propagation_enabled,
    dhcpEnabled: data.dhcp_enabled,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    subnets: unmarshalArrayOfObject(data.subnets, unmarshalSubnet),
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    vpcId: data.vpc_id,
  } as PrivateNetwork
}

export const unmarshalRoute = (data: unknown): Route => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Route' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    destination: data.destination,
    id: data.id,
    isReadOnly: data.is_read_only,
    nexthopPrivateNetworkId: data.nexthop_private_network_id,
    nexthopResourceId: data.nexthop_resource_id,
    region: data.region,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    vpcId: data.vpc_id,
  } as Route
}

export const unmarshalVPC = (data: unknown): VPC => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VPC' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    customRoutesPropagationEnabled: data.custom_routes_propagation_enabled,
    id: data.id,
    isDefault: data.is_default,
    name: data.name,
    organizationId: data.organization_id,
    privateNetworkCount: data.private_network_count,
    projectId: data.project_id,
    region: data.region,
    routingEnabled: data.routing_enabled,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as VPC
}

export const unmarshalAddSubnetsResponse = (
  data: unknown,
): AddSubnetsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddSubnetsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    subnets: data.subnets,
  } as AddSubnetsResponse
}

export const unmarshalDeleteSubnetsResponse = (
  data: unknown,
): DeleteSubnetsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteSubnetsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    subnets: data.subnets,
  } as DeleteSubnetsResponse
}

export const unmarshalAclRule = (data: unknown): AclRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AclRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    description: data.description,
    destination: data.destination,
    dstPortHigh: data.dst_port_high,
    dstPortLow: data.dst_port_low,
    protocol: data.protocol,
    source: data.source,
    srcPortHigh: data.src_port_high,
    srcPortLow: data.src_port_low,
  } as AclRule
}

export const unmarshalGetAclResponse = (data: unknown): GetAclResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetAclResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    defaultPolicy: data.default_policy,
    rules: unmarshalArrayOfObject(data.rules, unmarshalAclRule),
  } as GetAclResponse
}

export const unmarshalListPrivateNetworksResponse = (
  data: unknown,
): ListPrivateNetworksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNetworks: unmarshalArrayOfObject(
      data.private_networks,
      unmarshalPrivateNetwork,
    ),
    totalCount: data.total_count,
  } as ListPrivateNetworksResponse
}

export const unmarshalListSubnetsResponse = (
  data: unknown,
): ListSubnetsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSubnetsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    subnets: unmarshalArrayOfObject(data.subnets, unmarshalSubnet),
    totalCount: data.total_count,
  } as ListSubnetsResponse
}

export const unmarshalListVPCsResponse = (data: unknown): ListVPCsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVPCsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    vpcs: unmarshalArrayOfObject(data.vpcs, unmarshalVPC),
  } as ListVPCsResponse
}

export const unmarshalSetAclResponse = (data: unknown): SetAclResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetAclResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    defaultPolicy: data.default_policy,
    rules: unmarshalArrayOfObject(data.rules, unmarshalAclRule),
  } as SetAclResponse
}

export const marshalAddSubnetsRequest = (
  request: AddSubnetsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  subnets: request.subnets,
})

export const marshalCreatePrivateNetworkRequest = (
  request: CreatePrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default_route_propagation_enabled: request.defaultRoutePropagationEnabled,
  name: request.name || randomName('pn'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  subnets: request.subnets,
  tags: request.tags,
  vpc_id: request.vpcId,
})

export const marshalCreateRouteRequest = (
  request: CreateRouteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  destination: request.destination,
  nexthop_private_network_id: request.nexthopPrivateNetworkId,
  nexthop_resource_id: request.nexthopResourceId,
  tags: request.tags,
  vpc_id: request.vpcId,
})

export const marshalCreateVPCRequest = (
  request: CreateVPCRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable_routing: request.enableRouting,
  name: request.name || randomName('vpc'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalDeleteSubnetsRequest = (
  request: DeleteSubnetsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  subnets: request.subnets,
})

export const marshalAclRule = (
  request: AclRule,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  description: request.description,
  destination: request.destination,
  dst_port_high: request.dstPortHigh,
  dst_port_low: request.dstPortLow,
  protocol: request.protocol,
  source: request.source,
  src_port_high: request.srcPortHigh,
  src_port_low: request.srcPortLow,
})

export const marshalSetAclRequest = (
  request: SetAclRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default_policy: request.defaultPolicy,
  is_ipv6: request.isIpv6,
  rules: request.rules.map(elt => marshalAclRule(elt, defaults)),
})

export const marshalUpdatePrivateNetworkRequest = (
  request: UpdatePrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default_route_propagation_enabled: request.defaultRoutePropagationEnabled,
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateRouteRequest = (
  request: UpdateRouteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  destination: request.destination,
  nexthop_private_network_id: request.nexthopPrivateNetworkId,
  nexthop_resource_id: request.nexthopResourceId,
  tags: request.tags,
})

export const marshalUpdateVPCRequest = (
  request: UpdateVPCRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})
