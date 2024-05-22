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
  AddSubnetsRequest,
  AddSubnetsResponse,
  CreatePrivateNetworkRequest,
  CreateVPCRequest,
  DeleteSubnetsRequest,
  DeleteSubnetsResponse,
  ListPrivateNetworksResponse,
  ListSubnetsResponse,
  ListVPCsResponse,
  MigrateZonalPrivateNetworksRequest,
  PrivateNetwork,
  SetSubnetsRequest,
  SetSubnetsResponse,
  Subnet,
  UpdatePrivateNetworkRequest,
  UpdateVPCRequest,
  VPC,
} from './types.gen'

const unmarshalSubnet = (data: unknown): Subnet => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Subnet' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    subnet: data.subnet,
    updatedAt: unmarshalDate(data.updated_at),
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

export const unmarshalVPC = (data: unknown): VPC => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VPC' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
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

export const unmarshalSetSubnetsResponse = (
  data: unknown,
): SetSubnetsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSubnetsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    subnets: data.subnets,
  } as SetSubnetsResponse
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
  name: request.name || randomName('pn'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  subnets: request.subnets,
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

export const marshalMigrateZonalPrivateNetworksRequest = (
  request: MigrateZonalPrivateNetworksRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_ids: request.privateNetworkIds,
  ...resolveOneOf([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
  ]),
})

export const marshalSetSubnetsRequest = (
  request: SetSubnetsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  subnets: request.subnets,
})

export const marshalUpdatePrivateNetworkRequest = (
  request: UpdatePrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateVPCRequest = (
  request: UpdateVPCRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})
