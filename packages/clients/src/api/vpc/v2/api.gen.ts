// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Region } from '../../../bridge'
import {
  marshalAddSubnetsRequest,
  marshalCreatePrivateNetworkRequest,
  marshalCreateVPCRequest,
  marshalDeleteSubnetsRequest,
  marshalMigrateZonalPrivateNetworksRequest,
  marshalSetSubnetsRequest,
  marshalUpdatePrivateNetworkRequest,
  marshalUpdateVPCRequest,
  unmarshalAddSubnetsResponse,
  unmarshalDeleteSubnetsResponse,
  unmarshalListPrivateNetworksResponse,
  unmarshalListVPCsResponse,
  unmarshalPrivateNetwork,
  unmarshalSetSubnetsResponse,
  unmarshalVPC,
} from './marshalling.gen'
import type {
  AddSubnetsRequest,
  AddSubnetsResponse,
  CreatePrivateNetworkRequest,
  CreateVPCRequest,
  DeletePrivateNetworkRequest,
  DeleteSubnetsRequest,
  DeleteSubnetsResponse,
  DeleteVPCRequest,
  GetPrivateNetworkRequest,
  GetVPCRequest,
  ListPrivateNetworksRequest,
  ListPrivateNetworksResponse,
  ListVPCsRequest,
  ListVPCsResponse,
  MigrateZonalPrivateNetworksRequest,
  PrivateNetwork,
  SetSubnetsRequest,
  SetSubnetsResponse,
  UpdatePrivateNetworkRequest,
  UpdateVPCRequest,
  VPC,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** VPC API. */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  protected pageOfListVPCs = (request: Readonly<ListVPCsRequest> = {}) =>
    this.client.fetch<ListVPCsResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/vpcs`,
        urlParams: urlParams(
          ['is_default', request.isDefault],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
      },
      unmarshalListVPCsResponse,
    )

  /**
   * List VPCs. List existing VPCs in the specified region.
   *
   * @param request - The request {@link ListVPCsRequest}
   * @returns A Promise of ListVPCsResponse
   */
  listVPCs = (request: Readonly<ListVPCsRequest> = {}) =>
    enrichForPagination('vpcs', this.pageOfListVPCs, request)

  /**
   * Create a VPC. Create a new VPC in the specified region.
   *
   * @param request - The request {@link CreateVPCRequest}
   * @returns A Promise of VPC
   */
  createVPC = (request: Readonly<CreateVPCRequest> = {}) =>
    this.client.fetch<VPC>(
      {
        body: JSON.stringify(
          marshalCreateVPCRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/vpcs`,
      },
      unmarshalVPC,
    )

  /**
   * Get a VPC. Retrieve details of an existing VPC, specified by its VPC ID.
   *
   * @param request - The request {@link GetVPCRequest}
   * @returns A Promise of VPC
   */
  getVPC = (request: Readonly<GetVPCRequest>) =>
    this.client.fetch<VPC>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
      },
      unmarshalVPC,
    )

  /**
   * Update VPC. Update parameters including name and tags of the specified VPC.
   *
   * @param request - The request {@link UpdateVPCRequest}
   * @returns A Promise of VPC
   */
  updateVPC = (request: Readonly<UpdateVPCRequest>) =>
    this.client.fetch<VPC>(
      {
        body: JSON.stringify(
          marshalUpdateVPCRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
      },
      unmarshalVPC,
    )

  /**
   * Delete a VPC. Delete a VPC specified by its VPC ID.
   *
   * @param request - The request {@link DeleteVPCRequest}
   */
  deleteVPC = (request: Readonly<DeleteVPCRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc/v2/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
    })

  protected pageOfListPrivateNetworks = (
    request: Readonly<ListPrivateNetworksRequest> = {},
  ) =>
    this.client.fetch<ListPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/private-networks`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['private_network_ids', request.privateNetworkIds],
          ['project_id', request.projectId],
          ['tags', request.tags],
          ['vpc_id', request.vpcId],
        ),
      },
      unmarshalListPrivateNetworksResponse,
    )

  /**
   * List Private Networks. List existing Private Networks in the specified
   * region. By default, the Private Networks returned in the list are ordered
   * by creation date in ascending order, though this can be modified via the
   * order_by field.
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
   * can attach Scaleway resources which are in the same region.
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
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/private-networks`,
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
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}`,
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
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}`,
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
      path: `/vpc/v2/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/private-networks/${validatePathParam(
        'privateNetworkId',
        request.privateNetworkId,
      )}`,
    })

  /**
   * Migrate Private Networks from zoned to regional. Transform multiple
   * existing zoned Private Networks (scoped to a single Availability Zone) into
   * regional Private Networks, scoped to an entire region. You can transform
   * one or many Private Networks (specified by their Private Network IDs)
   * within a single Scaleway Organization or Project, with the same call.
   *
   * @param request - The request {@link MigrateZonalPrivateNetworksRequest}
   */
  migrateZonalPrivateNetworks = (
    request: Readonly<MigrateZonalPrivateNetworksRequest> = {},
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalMigrateZonalPrivateNetworksRequest(
          request,
          this.client.settings,
        ),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/vpc/v2/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/private-networks/migrate-zonal`,
    })

  /**
   * Set the subnets of a Private Network. Set subnets for an existing Private
   * Network. Note that the method is PUT and not PATCH. Any existing subnets
   * will be removed in favor of the new specified set of subnets.
   *
   * @param request - The request {@link SetSubnetsRequest}
   * @returns A Promise of SetSubnetsResponse
   */
  setSubnets = (request: Readonly<SetSubnetsRequest>) =>
    this.client.fetch<SetSubnetsResponse>(
      {
        body: JSON.stringify(
          marshalSetSubnetsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}/subnets`,
      },
      unmarshalSetSubnetsResponse,
    )

  /**
   * Add subnets to a Private Network. Add new subnets to an existing Private
   * Network.
   *
   * @param request - The request {@link AddSubnetsRequest}
   * @returns A Promise of AddSubnetsResponse
   */
  addSubnets = (request: Readonly<AddSubnetsRequest>) =>
    this.client.fetch<AddSubnetsResponse>(
      {
        body: JSON.stringify(
          marshalAddSubnetsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}/subnets`,
      },
      unmarshalAddSubnetsResponse,
    )

  /**
   * Delete subnets from a Private Network. Delete the specified subnets from a
   * Private Network.
   *
   * @param request - The request {@link DeleteSubnetsRequest}
   * @returns A Promise of DeleteSubnetsResponse
   */
  deleteSubnets = (request: Readonly<DeleteSubnetsRequest>) =>
    this.client.fetch<DeleteSubnetsResponse>(
      {
        body: JSON.stringify(
          marshalDeleteSubnetsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/vpc/v2/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}/subnets`,
      },
      unmarshalDeleteSubnetsResponse,
    )
}
