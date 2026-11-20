// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, marshalBlobToScwFile, marshalDecimal, marshalMoney, marshalScwFile, marshalTimeSeries, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalDecimal, unmarshalMapOfObject, unmarshalMoney, unmarshalScwFile, unmarshalServiceInfo, unmarshalTimeSeries, unmarshalTimeSeriesPoint } from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, DefaultValues } from '@scaleway/sdk-client'
import type {
  Resource,
  Reverse,
  Source,
  IP,
  ListIPsResponse,
  CustomResource,
  AttachIPRequest,
  BookIPRequest,
  DetachIPRequest,
  MoveIPRequest,
  ReleaseIPSetRequest,
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
    macAddress: data.mac_address ?? null,
    name: data.name ?? null,
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
    address: data.address ?? null,
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
    privateNetworkId: data.private_network_id ?? null,
    regional: data.regional ?? null,
    subnetId: data.subnet_id ?? null,
    vpcId: data.vpc_id ?? null,
    zonal: data.zonal ?? null,
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
    createdAt: unmarshalDate(data.created_at) ?? null,
    id: data.id,
    isIpv6: data.is_ipv6,
    projectId: data.project_id,
    region: data.region,
    resource: data.resource ? unmarshalResource(data.resource) : null,
    reverses: unmarshalArrayOfObject(data.reverses, unmarshalReverse),
    source: data.source ? unmarshalSource(data.source) : null,
    srn: data.srn,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
    zone: data.zone ?? null,
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
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mac_address: request.macAddress,
  name: request.name,
})

export const marshalAttachIPRequest = (
  request: AttachIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  resource:  marshalCustomResource(request.resource, defaults),
})

const marshalSource = (
  request: Source,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf<string | boolean>([
    {param: 'zonal',
      value: request.zonal,
    },
    {param: 'private_network_id',
      value: request.privateNetworkId,
    },
    {param: 'subnet_id',
      value: request.subnetId,
    },
    {param: 'vpc_id',
      value: request.vpcId,
    },
    {param: 'regional',
      value: request.regional,
    },
  ]),
})

export const marshalBookIPRequest = (
  request: BookIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  is_ipv6: request.isIpv6,
  project_id: request.projectId ?? defaults.defaultProjectId,
  resource: ((request.resource != null) ?  marshalCustomResource(request.resource, defaults): undefined),
  source:  marshalSource(request.source, defaults),
  tags: request.tags,
})

export const marshalDetachIPRequest = (
  request: DetachIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  resource:  marshalCustomResource(request.resource, defaults),
})

export const marshalMoveIPRequest = (
  request: MoveIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  from_resource:  marshalCustomResource(request.fromResource, defaults),
  to_resource: ((request.toResource != null) ?  marshalCustomResource(request.toResource, defaults): undefined),
})

export const marshalReleaseIPSetRequest = (
  request: ReleaseIPSetRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_ids: request.ipIds,
})

const marshalReverse = (
  request: Reverse,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  hostname: request.hostname,
})

export const marshalUpdateIPRequest = (
  request: UpdateIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverses: ((request.reverses != null) ?  request.reverses.map(elt => marshalReverse(elt, defaults)): undefined),
  tags: request.tags,
})
