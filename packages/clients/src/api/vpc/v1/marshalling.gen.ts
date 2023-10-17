// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreatePrivateNetworkRequest,
  ListPrivateNetworksResponse,
  PrivateNetwork,
  UpdatePrivateNetworkRequest,
} from './types.gen'

export const unmarshalPrivateNetwork = (data: unknown): PrivateNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    subnets: data.subnets,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as PrivateNetwork
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

export const marshalCreatePrivateNetworkRequest = (
  request: CreatePrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('pn'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  subnets: request.subnets,
  tags: request.tags,
})

export const marshalUpdatePrivateNetworkRequest = (
  request: UpdatePrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  subnets: request.subnets,
  tags: request.tags,
})
