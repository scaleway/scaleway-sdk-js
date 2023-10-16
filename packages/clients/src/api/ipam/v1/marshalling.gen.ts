// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  BookIPRequest,
  IP,
  ListIPsResponse,
  Resource,
  Source,
  UpdateIPRequest,
} from './types.gen'

const unmarshalResource = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Resource' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    macAddress: data.mac_address,
    name: data.name,
    type: data.type,
  } as Resource
}

const unmarshalSource = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Source' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNetworkId: data.private_network_id,
    subnetId: data.subnet_id,
    zonal: data.zonal,
  } as Source
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
    id: data.id,
    isIpv6: data.is_ipv6,
    projectId: data.project_id,
    region: data.region,
    resource: unmarshalResource(data.resource),
    source: unmarshalSource(data.source),
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as IP
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

const marshalSource = (
  request: Source,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf<unknown>([
    { param: 'zonal', value: request.zonal },
    { param: 'private_network_id', value: request.privateNetworkId },
    { param: 'subnet_id', value: request.subnetId },
  ]),
})

export const marshalBookIPRequest = (
  request: BookIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  is_ipv6: request.isIpv6,
  project_id: request.projectId ?? defaults.defaultProjectId,
  source:
    request.source !== undefined
      ? marshalSource(request.source, defaults)
      : undefined,
  tags: request.tags,
})

export const marshalUpdateIPRequest = (
  request: UpdateIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  tags: request.tags,
})
