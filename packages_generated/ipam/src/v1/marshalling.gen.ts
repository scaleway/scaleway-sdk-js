// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  AttachIPRequest,
  BookIPRequest,
  CustomResource,
  DetachIPRequest,
  IP,
  ListIPsResponse,
  MoveIPRequest,
  ReleaseIPSetRequest,
  Resource,
  Reverse,
  Source,
  UpdateIPRequest,
} from './types.gen.js'

const unmarshalResource = (data: unknown): Resource => {
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

const unmarshalReverse = (data: unknown): Reverse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Reverse' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    hostname: data.hostname,
  } as Reverse
}

const unmarshalSource = (data: unknown): Source => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Source' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNetworkId: data.private_network_id,
    subnetId: data.subnet_id,
    vpcId: data.vpc_id,
    zonal: data.zonal,
  } as Source
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
    id: data.id,
    isIpv6: data.is_ipv6,
    projectId: data.project_id,
    region: data.region,
    resource: data.resource ? unmarshalResource(data.resource) : undefined,
    reverses: unmarshalArrayOfObject(data.reverses, unmarshalReverse),
    source: data.source ? unmarshalSource(data.source) : undefined,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as IP
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

const marshalCustomResource = (
  request: CustomResource,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  mac_address: request.macAddress,
  name: request.name,
})

export const marshalAttachIPRequest = (
  request: AttachIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  resource: marshalCustomResource(request.resource, defaults),
})

const marshalSource = (
  request: Source,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'zonal', value: request.zonal },
    { param: 'private_network_id', value: request.privateNetworkId },
    { param: 'subnet_id', value: request.subnetId },
    { param: 'vpc_id', value: request.vpcId },
  ]),
})

export const marshalBookIPRequest = (
  request: BookIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  is_ipv6: request.isIpv6,
  project_id: request.projectId ?? defaults.defaultProjectId,
  resource:
    request.resource !== undefined
      ? marshalCustomResource(request.resource, defaults)
      : undefined,
  source: marshalSource(request.source, defaults),
  tags: request.tags,
})

export const marshalDetachIPRequest = (
  request: DetachIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  resource: marshalCustomResource(request.resource, defaults),
})

export const marshalMoveIPRequest = (
  request: MoveIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  from_resource: marshalCustomResource(request.fromResource, defaults),
  to_resource:
    request.toResource !== undefined
      ? marshalCustomResource(request.toResource, defaults)
      : undefined,
})

export const marshalReleaseIPSetRequest = (
  request: ReleaseIPSetRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_ids: request.ipIds,
})

const marshalReverse = (
  request: Reverse,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  hostname: request.hostname,
})

export const marshalUpdateIPRequest = (
  request: UpdateIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverses:
    request.reverses !== undefined
      ? request.reverses.map(elt => marshalReverse(elt, defaults))
      : undefined,
  tags: request.tags,
})
