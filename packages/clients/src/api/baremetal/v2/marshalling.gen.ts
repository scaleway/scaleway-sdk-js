// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  ListServerPrivateNetworksResponse,
  PrivateNetworkApiAddServerPrivateNetworkRequest,
  PrivateNetworkApiSetServerPrivateNetworksRequest,
  ServerPrivateNetwork,
  SetServerPrivateNetworksResponse,
} from './types.gen'

export const unmarshalServerPrivateNetwork = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerPrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    serverId: data.server_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    vlan: data.vlan ? data.vlan : undefined,
  } as ServerPrivateNetwork
}

export const unmarshalListServerPrivateNetworksResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverPrivateNetworks: unmarshalArrayOfObject(
      data.server_private_networks,
      unmarshalServerPrivateNetwork,
    ),
    totalCount: data.total_count,
  } as ListServerPrivateNetworksResponse
}

export const unmarshalSetServerPrivateNetworksResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetServerPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverPrivateNetworks: unmarshalArrayOfObject(
      data.server_private_networks,
      unmarshalServerPrivateNetwork,
    ),
  } as SetServerPrivateNetworksResponse
}

export const marshalPrivateNetworkApiAddServerPrivateNetworkRequest = (
  request: PrivateNetworkApiAddServerPrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

export const marshalPrivateNetworkApiSetServerPrivateNetworksRequest = (
  request: PrivateNetworkApiSetServerPrivateNetworksRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_ids: request.privateNetworkIds,
})
