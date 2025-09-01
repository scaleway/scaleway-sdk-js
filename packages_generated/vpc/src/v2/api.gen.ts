// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality } from '@scaleway/sdk-client'
import {
  API as ParentAPI,
  enrichForPagination,
  toApiLocality,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  marshalAddSubnetsRequest,
  marshalCreatePrivateNetworkRequest,
  marshalCreateRouteRequest,
  marshalCreateVPCRequest,
  marshalDeleteSubnetsRequest,
  marshalSetAclRequest,
  marshalUpdatePrivateNetworkRequest,
  marshalUpdateRouteRequest,
  marshalUpdateVPCRequest,
  unmarshalAddSubnetsResponse,
  unmarshalDeleteSubnetsResponse,
  unmarshalGetAclResponse,
  unmarshalListPrivateNetworksResponse,
  unmarshalListSubnetsResponse,
  unmarshalListVPCsResponse,
  unmarshalPrivateNetwork,
  unmarshalRoute,
  unmarshalSetAclResponse,
  unmarshalVPC,
} from './marshalling.gen'
import type {
  AddSubnetsRequest,
  AddSubnetsResponse,
  CreatePrivateNetworkRequest,
  CreateRouteRequest,
  CreateVPCRequest,
  DeletePrivateNetworkRequest,
  DeleteRouteRequest,
  DeleteSubnetsRequest,
  DeleteSubnetsResponse,
  DeleteVPCRequest,
  EnableCustomRoutesPropagationRequest,
  EnableDHCPRequest,
  EnableRoutingRequest,
  GetAclRequest,
  GetAclResponse,
  GetPrivateNetworkRequest,
  GetRouteRequest,
  GetVPCRequest,
  ListPrivateNetworksRequest,
  ListPrivateNetworksResponse,
  ListSubnetsRequest,
  ListSubnetsResponse,
  ListVPCsRequest,
  ListVPCsResponse,
  PrivateNetwork,
  Route,
  SetAclRequest,
  SetAclResponse,
  UpdatePrivateNetworkRequest,
  UpdateRouteRequest,
  UpdateVPCRequest,
  VPC,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * VPC API.

This API allows you to manage your Virtual Private Clouds (VPCs) and Private Networks.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListVPCs = (request: Readonly<ListVPCsRequest> = {}) =>
    this.client.fetch<ListVPCsResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs`,
        urlParams: urlParams(
          ['is_default', request.isDefault],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['routing_enabled', request.routingEnabled],
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
  createVPC = (request: Readonly<CreateVPCRequest>) =>
    this.client.fetch<VPC>(
      {
        body: JSON.stringify(
          marshalCreateVPCRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs`,
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
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
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
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
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
      path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
    })

  protected pageOfListPrivateNetworks = (
    request: Readonly<ListPrivateNetworksRequest> = {},
  ) =>
    this.client.fetch<ListPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks`,
        urlParams: urlParams(
          ['dhcp_enabled', request.dhcpEnabled],
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
          ['vpc_id', request.vpcId],
        ),
      },
      unmarshalListPrivateNetworksResponse,
    )

  /**
   * List Private Networks. List existing Private Networks in the specified region. By default, the Private Networks returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field.
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
   * Create a Private Network. Create a new Private Network. Once created, you can attach Scaleway resources which are in the same region.
   *
   * @param request - The request {@link CreatePrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  createPrivateNetwork = (request: Readonly<CreatePrivateNetworkRequest>) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalCreatePrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Get a Private Network. Retrieve information about an existing Private Network, specified by its Private Network ID. Its full details are returned in the response object.
   *
   * @param request - The request {@link GetPrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  getPrivateNetwork = (request: Readonly<GetPrivateNetworkRequest>) =>
    this.client.fetch<PrivateNetwork>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Update Private Network. Update parameters (such as name or tags) of an existing Private Network, specified by its Private Network ID.
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
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Delete a Private Network. Delete an existing Private Network. Note that you must first detach all resources from the network, in order to delete it.
   *
   * @param request - The request {@link DeletePrivateNetworkRequest}
   */
  deletePrivateNetwork = (request: Readonly<DeletePrivateNetworkRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
    })

  /**
   * Enable DHCP on a Private Network. Enable DHCP managed on an existing Private Network. Note that you will not be able to deactivate it afterwards.
   *
   * @param request - The request {@link EnableDHCPRequest}
   * @returns A Promise of PrivateNetwork
   */
  enableDHCP = (request: Readonly<EnableDHCPRequest>) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}/enable-dhcp`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Enable routing on a VPC. Enable routing on an existing VPC. Note that you will not be able to deactivate it afterwards.
   *
   * @param request - The request {@link EnableRoutingRequest}
   * @returns A Promise of VPC
   */
  enableRouting = (request: Readonly<EnableRoutingRequest>) =>
    this.client.fetch<VPC>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}/enable-routing`,
      },
      unmarshalVPC,
    )

  /**
   * Enable custom routes propagation on a VPC. Enable custom routes propagation on an existing VPC. Note that you will not be able to deactivate it afterwards.
   *
   * @param request - The request {@link EnableCustomRoutesPropagationRequest}
   * @returns A Promise of VPC
   */
  enableCustomRoutesPropagation = (
    request: Readonly<EnableCustomRoutesPropagationRequest>,
  ) =>
    this.client.fetch<VPC>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}/enable-custom-routes-propagation`,
      },
      unmarshalVPC,
    )

  protected pageOfListSubnets = (request: Readonly<ListSubnetsRequest> = {}) =>
    this.client.fetch<ListSubnetsResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subnets`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['subnet_ids', request.subnetIds],
          ['vpc_id', request.vpcId],
        ),
      },
      unmarshalListSubnetsResponse,
    )

  /**
   * List subnets. List any Private Network's subnets. See ListPrivateNetworks to list a specific Private Network's subnets.
   *
   * @param request - The request {@link ListSubnetsRequest}
   * @returns A Promise of ListSubnetsResponse
   */
  listSubnets = (request: Readonly<ListSubnetsRequest> = {}) =>
    enrichForPagination('subnets', this.pageOfListSubnets, request)

  /**
   * Add subnets to a Private Network. Add new subnets to an existing Private Network.
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
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}/subnets`,
      },
      unmarshalAddSubnetsResponse,
    )

  /**
   * Delete subnets from a Private Network. Delete the specified subnets from a Private Network.
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
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}/subnets`,
      },
      unmarshalDeleteSubnetsResponse,
    )

  /**
   * Create a Route. Create a new custom Route.
   *
   * @param request - The request {@link CreateRouteRequest}
   * @returns A Promise of Route
   */
  createRoute = (request: Readonly<CreateRouteRequest>) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalCreateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes`,
      },
      unmarshalRoute,
    )

  /**
   * Get a Route. Retrieve details of an existing Route, specified by its Route ID.
   *
   * @param request - The request {@link GetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<GetRouteRequest>) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Update Route. Update parameters of the specified Route.
   *
   * @param request - The request {@link UpdateRouteRequest}
   * @returns A Promise of Route
   */
  updateRoute = (request: Readonly<UpdateRouteRequest>) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalUpdateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Delete a Route. Delete a Route specified by its Route ID.
   *
   * @param request - The request {@link DeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<DeleteRouteRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
    })

  /**
   * Get ACL Rules for VPC. Retrieve a list of ACL rules for a VPC, specified by its VPC ID.
   *
   * @param request - The request {@link GetAclRequest}
   * @returns A Promise of GetAclResponse
   */
  getAcl = (request: Readonly<GetAclRequest>) =>
    this.client.fetch<GetAclResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}/acl-rules`,
        urlParams: urlParams(['is_ipv6', request.isIpv6]),
      },
      unmarshalGetAclResponse,
    )

  /**
   * Set VPC ACL rules. Set the list of ACL rules and the default routing policy for a VPC.
   *
   * @param request - The request {@link SetAclRequest}
   * @returns A Promise of SetAclResponse
   */
  setAcl = (request: Readonly<SetAclRequest>) =>
    this.client.fetch<SetAclResponse>(
      {
        body: JSON.stringify(
          marshalSetAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}/acl-rules`,
      },
      unmarshalSetAclResponse,
    )
}
