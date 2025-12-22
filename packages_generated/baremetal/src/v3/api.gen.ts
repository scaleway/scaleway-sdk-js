// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality,} from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  marshalPrivateNetworkApiAddServerPrivateNetworkRequest,
  marshalPrivateNetworkApiSetServerPrivateNetworksRequest,
  unmarshalListServerPrivateNetworksResponse,
  unmarshalServerPrivateNetwork,
  unmarshalSetServerPrivateNetworksResponse,
} from './marshalling.gen.js'
import type {
  ListServerPrivateNetworksResponse,
  PrivateNetworkApiAddServerPrivateNetworkRequest,
  PrivateNetworkApiDeleteServerPrivateNetworkRequest,
  PrivateNetworkApiListServerPrivateNetworksRequest,
  PrivateNetworkApiSetServerPrivateNetworksRequest,
  ServerPrivateNetwork,
  SetServerPrivateNetworksResponse,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Elastic Metal - Private Networks API.
 */
export class PrivateNetworkAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      zones: [
        'fr-par-1',
        'fr-par-2',
        'nl-ams-1',
        'nl-ams-2',
        'pl-waw-2',
        'pl-waw-3',
      ],
    })
  
  /**
   * Add a server to a Private Network. Add an Elastic Metal server to a Private Network.
   *
   * @param request - The request {@link PrivateNetworkApiAddServerPrivateNetworkRequest}
   * @returns A Promise of ServerPrivateNetwork
   */
  addServerPrivateNetwork = (request: Readonly<PrivateNetworkApiAddServerPrivateNetworkRequest>) =>
    this.client.fetch<ServerPrivateNetwork>(
      {
        body: JSON.stringify(
          marshalPrivateNetworkApiAddServerPrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v3/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks`,
      },
      unmarshalServerPrivateNetwork,
    )

  
  /**
   * Set multiple Private Networks on a server. Configure multiple Private Networks on an Elastic Metal server.
   *
   * @param request - The request {@link PrivateNetworkApiSetServerPrivateNetworksRequest}
   * @returns A Promise of SetServerPrivateNetworksResponse
   */
  setServerPrivateNetworks = (request: Readonly<PrivateNetworkApiSetServerPrivateNetworksRequest>) =>
    this.client.fetch<SetServerPrivateNetworksResponse>(
      {
        body: JSON.stringify(
          marshalPrivateNetworkApiSetServerPrivateNetworksRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/baremetal/v3/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks`,
      },
      unmarshalSetServerPrivateNetworksResponse,
    )

  
  protected pageOfListServerPrivateNetworks = (request: Readonly<PrivateNetworkApiListServerPrivateNetworksRequest> = {}) =>
    this.client.fetch<ListServerPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/baremetal/v3/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/server-private-networks`,
        urlParams: urlParams(
          ['ipam_ip_ids', request.ipamIpIds],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['private_network_id', request.privateNetworkId],
          ['project_id', request.projectId],
          ['server_id', request.serverId],
        ),
      },
      unmarshalListServerPrivateNetworksResponse,
    )
  
  /**
   * List the Private Networks of a server. List the Private Networks of an Elastic Metal server.
   *
   * @param request - The request {@link PrivateNetworkApiListServerPrivateNetworksRequest}
   * @returns A Promise of ListServerPrivateNetworksResponse
   */
  listServerPrivateNetworks = (request: Readonly<PrivateNetworkApiListServerPrivateNetworksRequest> = {}) =>
    enrichForPagination('serverPrivateNetworks', this.pageOfListServerPrivateNetworks, request)

  
  /**
   * Delete a Private Network.
   *
   * @param request - The request {@link PrivateNetworkApiDeleteServerPrivateNetworkRequest}
   */
  deleteServerPrivateNetwork = (request: Readonly<PrivateNetworkApiDeleteServerPrivateNetworkRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/baremetal/v3/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
      },
    )

  
}

