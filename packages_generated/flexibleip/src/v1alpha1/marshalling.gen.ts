// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  AttachFlexibleIPRequest,
  AttachFlexibleIPsResponse,
  CreateFlexibleIPRequest,
  DetachFlexibleIPRequest,
  DetachFlexibleIPsResponse,
  DuplicateMACAddrRequest,
  FlexibleIP,
  GenerateMACAddrRequest,
  ListFlexibleIPsResponse,
  MACAddress,
  MoveMACAddrRequest,
  UpdateFlexibleIPRequest,
} from './types.gen'

const unmarshalMACAddress = (data: unknown): MACAddress => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MACAddress' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    macAddress: data.mac_address,
    macType: data.mac_type,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as MACAddress
}

export const unmarshalFlexibleIP = (data: unknown): FlexibleIP => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FlexibleIP' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    id: data.id,
    ipAddress: data.ip_address,
    macAddress: data.mac_address
      ? unmarshalMACAddress(data.mac_address)
      : undefined,
    organizationId: data.organization_id,
    projectId: data.project_id,
    reverse: data.reverse,
    serverId: data.server_id,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as FlexibleIP
}

export const unmarshalAttachFlexibleIPsResponse = (
  data: unknown,
): AttachFlexibleIPsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AttachFlexibleIPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    flexibleIps: unmarshalArrayOfObject(data.flexible_ips, unmarshalFlexibleIP),
    totalCount: data.total_count,
  } as AttachFlexibleIPsResponse
}

export const unmarshalDetachFlexibleIPsResponse = (
  data: unknown,
): DetachFlexibleIPsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DetachFlexibleIPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    flexibleIps: unmarshalArrayOfObject(data.flexible_ips, unmarshalFlexibleIP),
    totalCount: data.total_count,
  } as DetachFlexibleIPsResponse
}

export const unmarshalListFlexibleIPsResponse = (
  data: unknown,
): ListFlexibleIPsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFlexibleIPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    flexibleIps: unmarshalArrayOfObject(data.flexible_ips, unmarshalFlexibleIP),
    totalCount: data.total_count,
  } as ListFlexibleIPsResponse
}

export const marshalAttachFlexibleIPRequest = (
  request: AttachFlexibleIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  fips_ids: request.fipsIds,
  server_id: request.serverId,
})

export const marshalCreateFlexibleIPRequest = (
  request: CreateFlexibleIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  is_ipv6: request.isIpv6,
  project_id: request.projectId ?? defaults.defaultProjectId,
  reverse: request.reverse,
  server_id: request.serverId,
  tags: request.tags,
})

export const marshalDetachFlexibleIPRequest = (
  request: DetachFlexibleIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  fips_ids: request.fipsIds,
})

export const marshalDuplicateMACAddrRequest = (
  request: DuplicateMACAddrRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  duplicate_from_fip_id: request.duplicateFromFipId,
})

export const marshalGenerateMACAddrRequest = (
  request: GenerateMACAddrRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mac_type: request.macType,
})

export const marshalMoveMACAddrRequest = (
  request: MoveMACAddrRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  dst_fip_id: request.dstFipId,
})

export const marshalUpdateFlexibleIPRequest = (
  request: UpdateFlexibleIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  reverse: request.reverse,
  tags: request.tags,
})
