// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
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

/** VPC API. */
export class VpcV1GenAPI extends API {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = ['fr-par-1', 'nl-ams-1']

  protected pageOfListPrivateNetworks = (
    request: Readonly<ListPrivateNetworksRequest> = {},
  ) =>
    this.client.fetch<ListPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/vpc/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/private-networks`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['tags', request.tags],
        ),
      },
      unmarshalListPrivateNetworksResponse,
    )

  /**
   * List private networks
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
   * Create a private network
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
        path: `/vpc/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/private-networks`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Get a private network
   *
   * @param request - The request {@link GetPrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  getPrivateNetwork = (request: Readonly<GetPrivateNetworkRequest>) =>
    this.client.fetch<PrivateNetwork>(
      {
        method: 'GET',
        path: `/vpc/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Update private network
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
        path: `/vpc/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Delete a private network
   *
   * @param request - The request {@link DeletePrivateNetworkRequest}
   */
  deletePrivateNetwork = (request: Readonly<DeletePrivateNetworkRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/private-networks/${validatePathParam(
        'privateNetworkId',
        request.privateNetworkId,
      )}`,
    })
}
