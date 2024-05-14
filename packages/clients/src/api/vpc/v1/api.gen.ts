// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Zone } from '../../../bridge'
import {
  marshalCreatePrivateNetworkRequest,
  marshalUpdatePrivateNetworkRequest,
  unmarshalListPrivateNetworksResponse,
  unmarshalPrivateNetwork,
} from './marshalling.gen'
import type {
  CreatePrivateNetworkRequest,
  DeletePrivateNetworkRequest,
  GetPrivateNetworkRequest,
  ListPrivateNetworksRequest,
  ListPrivateNetworksResponse,
  PrivateNetwork,
  UpdatePrivateNetworkRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * VPC API.
 *
 * This API allows you to manage your Virtual Private Clouds (VPCs) and Private
 * Networks.
 */
export class API extends ParentAPI {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = [
    'fr-par-1',
    'fr-par-2',
    'fr-par-3',
    'nl-ams-1',
    'nl-ams-2',
    'nl-ams-3',
    'pl-waw-1',
    'pl-waw-2',
  ]

  protected pageOfListPrivateNetworks = (
    request: Readonly<ListPrivateNetworksRequest> = {},
  ) =>
    this.client.fetch<ListPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/vpc/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-networks`,
        urlParams: urlParams(
          ['include_regional', request.includeRegional],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['private_network_ids', request.privateNetworkIds],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
      },
      unmarshalListPrivateNetworksResponse,
    )

  /**
   * List Private Networks. List existing Private Networks in a specified
   * Availability Zone. By default, the Private Networks returned in the list
   * are ordered by creation date in ascending order, though this can be
   * modified via the order_by field.
   *
   * @param request - The request {@link ListPrivateNetworksRequest}
   * @returns A Promise of ListPrivateNetworksResponse
   */
  listPrivateNetworks = (request: Readonly<ListPrivateNetworksRequest> = {}) =>
    enrichForPagination(
      'privateNetworks',
      this.pageOfListPrivateNetworks,
      request,
    )

  /**
   * Create a Private Network. Create a new Private Network. Once created, you
   * can attach Scaleway resources in the same Availability Zone.
   *
   * @param request - The request {@link CreatePrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  createPrivateNetwork = (
    request: Readonly<CreatePrivateNetworkRequest> = {},
  ) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalCreatePrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-networks`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Get a Private Network. Retrieve information about an existing Private
   * Network, specified by its Private Network ID. Its full details are returned
   * in the response object.
   *
   * @param request - The request {@link GetPrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  getPrivateNetwork = (request: Readonly<GetPrivateNetworkRequest>) =>
    this.client.fetch<PrivateNetwork>(
      {
        method: 'GET',
        path: `/vpc/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Update Private Network. Update parameters (such as name or tags) of an
   * existing Private Network, specified by its Private Network ID.
   *
   * @param request - The request {@link UpdatePrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  updatePrivateNetwork = (request: Readonly<UpdatePrivateNetworkRequest>) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalUpdatePrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Delete a Private Network. Delete an existing Private Network. Note that you
   * must first detach all resources from the network, in order to delete it.
   *
   * @param request - The request {@link DeletePrivateNetworkRequest}
   */
  deletePrivateNetwork = (request: Readonly<DeletePrivateNetworkRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
    })
}
