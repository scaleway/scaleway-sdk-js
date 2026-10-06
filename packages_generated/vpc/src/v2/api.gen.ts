// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality, RequestOptions,} from '@scaleway/sdk-client'
import {
  marshalAddPrivateNetworkObjectStoragePrivateAccessRequest,
  unmarshalAddPrivateNetworkObjectStoragePrivateAccessResponse,
  marshalCreateIngressRuleRequest,
  marshalCreatePrivateNetworkRequest,
  marshalCreateRouteRequest,
  marshalCreateVPCConnectorRequest,
  marshalCreateVPCRequest,
  marshalEnableObjectStoragePrivateAccessRequest,
  unmarshalGetAclResponse,
  unmarshalIngressRule,
  unmarshalListIngressRulesResponse,
  unmarshalListPrivateNetworksResponse,
  unmarshalListSubnetOverlapsResponse,
  unmarshalListSubnetsResponse,
  unmarshalListVPCConnectorsResponse,
  unmarshalListVPCsResponse,
  unmarshalPrivateNetwork,
  unmarshalRoute,
  marshalSetAclRequest,
  unmarshalSetAclResponse,
  marshalSetPrivateNetworksObjectStoragePrivateAccessRequest,
  unmarshalSetPrivateNetworksObjectStoragePrivateAccessResponse,
  marshalUpdateIngressRuleRequest,
  marshalUpdatePrivateNetworkRequest,
  marshalUpdateRouteRequest,
  marshalUpdateVPCConnectorRequest,
  marshalUpdateVPCRequest,
  unmarshalVPC,
  unmarshalVPCConnector,
} from './marshalling.gen.js'
import type {
  AddPrivateNetworkObjectStoragePrivateAccessRequest,
  AddPrivateNetworkObjectStoragePrivateAccessResponse,
  CreateIngressRuleRequest,
  CreatePrivateNetworkRequest,
  CreateRouteRequest,
  CreateVPCConnectorRequest,
  CreateVPCRequest,
  DeleteIngressRuleRequest,
  DeletePrivateNetworkObjectStoragePrivateAccessRequest,
  DeletePrivateNetworkRequest,
  DeleteRouteRequest,
  DeleteVPCConnectorRequest,
  DeleteVPCRequest,
  DisableObjectStoragePrivateAccessRequest,
  EnableCustomRoutesPropagationRequest,
  EnableDHCPRequest,
  EnableObjectStoragePrivateAccessRequest,
  EnableRoutingRequest,
  GetAclRequest,
  GetAclResponse,
  GetIngressRuleRequest,
  GetPrivateNetworkRequest,
  GetRouteRequest,
  GetVPCConnectorRequest,
  GetVPCRequest,
  IngressRule,
  ListIngressRulesRequest,
  ListIngressRulesResponse,
  ListPrivateNetworksRequest,
  ListPrivateNetworksResponse,
  ListSubnetOverlapsRequest,
  ListSubnetOverlapsResponse,
  ListSubnetsRequest,
  ListSubnetsResponse,
  ListVPCConnectorsRequest,
  ListVPCConnectorsResponse,
  ListVPCsRequest,
  ListVPCsResponse,
  PrivateNetwork,
  Route,
  SetAclRequest,
  SetAclResponse,
  SetPrivateNetworksObjectStoragePrivateAccessRequest,
  SetPrivateNetworksObjectStoragePrivateAccessResponse,
  UpdateIngressRuleRequest,
  UpdatePrivateNetworkRequest,
  UpdateRouteRequest,
  UpdateVPCConnectorRequest,
  UpdateVPCRequest,
  VPC,
  VPCConnector,
} from './types.gen.js'

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
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      regions: [
        'fr-par',
        'it-mil',
        'nl-ams',
        'pl-waw',
      ],
    })
  
  protected pageOfListVPCs = (request: Readonly<ListVPCsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVPCsResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs`,
        urlParams: urlParams(
          ['is_default', request.isDefault],
          ['name', request.name],
          ['object_storage_private_access_enabled', request.objectStoragePrivateAccessEnabled],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['routing_enabled', request.routingEnabled],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListVPCsResponse,
    )
  
  /**
   * List VPCs. List existing VPCs in the specified region.
   *
   * @param request - The request {@link ListVPCsRequest}
   * @returns A Promise of ListVPCsResponse
   */
  listVPCs = (request: Readonly<ListVPCsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('vpcs', this.pageOfListVPCs, request, options)

  
  /**
   * Create a VPC. Create a new VPC in the specified region.
   *
   * @param request - The request {@link CreateVPCRequest}
   * @returns A Promise of VPC
   */
  createVPC = (request: Readonly<CreateVPCRequest>, options?: RequestOptions) =>
    this.client.fetch<VPC>(
      {
        body: JSON.stringify(
          marshalCreateVPCRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs`,
        signal: options?.signal,
      },
      unmarshalVPC,
    )

  
  /**
   * Get a VPC. Retrieve details of an existing VPC, specified by its VPC ID.
   *
   * @param request - The request {@link GetVPCRequest}
   * @returns A Promise of VPC
   */
  getVPC = (request: Readonly<GetVPCRequest>, options?: RequestOptions) =>
    this.client.fetch<VPC>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
        signal: options?.signal,
      },
      unmarshalVPC,
    )

  
  /**
   * Update VPC. Update parameters including name and tags of the specified VPC.
   *
   * @param request - The request {@link UpdateVPCRequest}
   * @returns A Promise of VPC
   */
  updateVPC = (request: Readonly<UpdateVPCRequest>, options?: RequestOptions) =>
    this.client.fetch<VPC>(
      {
        body: JSON.stringify(
          marshalUpdateVPCRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
        signal: options?.signal,
      },
      unmarshalVPC,
    )

  
  /**
   * Delete a VPC. Delete a VPC specified by its VPC ID.
   *
   * @param request - The request {@link DeleteVPCRequest}
   */
  deleteVPC = (request: Readonly<DeleteVPCRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListPrivateNetworks = (request: Readonly<ListPrivateNetworksRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks`,
        urlParams: urlParams(
          ['dhcp_enabled', request.dhcpEnabled],
          ['name', request.name],
          ['object_storage_private_access_enabled', request.objectStoragePrivateAccessEnabled],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['private_network_ids', request.privateNetworkIds],
          ['project_id', request.projectId],
          ['tags', request.tags],
          ['vpc_id', request.vpcId],
        ),
        signal: options?.signal,
      },
      unmarshalListPrivateNetworksResponse,
    )
  
  /**
   * List Private Networks. List existing Private Networks in the specified region. By default, the Private Networks returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field.
   *
   * @param request - The request {@link ListPrivateNetworksRequest}
   * @returns A Promise of ListPrivateNetworksResponse
   */
  listPrivateNetworks = (request: Readonly<ListPrivateNetworksRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('privateNetworks', this.pageOfListPrivateNetworks, request, options)

  
  /**
   * Create a Private Network. Create a new Private Network. Once created, you can attach Scaleway resources which are in the same region.
   *
   * @param request - The request {@link CreatePrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  createPrivateNetwork = (request: Readonly<CreatePrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalCreatePrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks`,
        signal: options?.signal,
      },
      unmarshalPrivateNetwork,
    )

  
  /**
   * Get a Private Network. Retrieve information about an existing Private Network, specified by its Private Network ID. Its full details are returned in the response object.
   *
   * @param request - The request {@link GetPrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  getPrivateNetwork = (request: Readonly<GetPrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetwork>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
        signal: options?.signal,
      },
      unmarshalPrivateNetwork,
    )

  
  /**
   * Update Private Network. Update parameters (such as name or tags) of an existing Private Network, specified by its Private Network ID.
   *
   * @param request - The request {@link UpdatePrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  updatePrivateNetwork = (request: Readonly<UpdatePrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalUpdatePrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
        signal: options?.signal,
      },
      unmarshalPrivateNetwork,
    )

  
  /**
   * Delete a Private Network. Delete an existing Private Network. Note that you must first detach all resources from the network, in order to delete it.
   *
   * @param request - The request {@link DeletePrivateNetworkRequest}
   */
  deletePrivateNetwork = (request: Readonly<DeletePrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Enable DHCP on a Private Network. Enable DHCP managed on an existing Private Network. Note that you will not be able to deactivate it afterwards.
   *
   * @param request - The request {@link EnableDHCPRequest}
   * @returns A Promise of PrivateNetwork
   */
  enableDHCP = (request: Readonly<EnableDHCPRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}/enable-dhcp`,
        signal: options?.signal,
      },
      unmarshalPrivateNetwork,
    )

  
  /**
   * Enable routing on a VPC. Enable routing on an existing VPC. Note that you will not be able to deactivate it afterwards.
   *
   * @param request - The request {@link EnableRoutingRequest}
   * @returns A Promise of VPC
   */
  enableRouting = (request: Readonly<EnableRoutingRequest>, options?: RequestOptions) =>
    this.client.fetch<VPC>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}/enable-routing`,
        signal: options?.signal,
      },
      unmarshalVPC,
    )

  
  /**
   * Enable custom routes propagation on a VPC. Enable custom routes propagation on an existing VPC. Note that you will not be able to deactivate it afterwards.
   *
   * @param request - The request {@link EnableCustomRoutesPropagationRequest}
   * @returns A Promise of VPC
   */
  enableCustomRoutesPropagation = (request: Readonly<EnableCustomRoutesPropagationRequest>, options?: RequestOptions) =>
    this.client.fetch<VPC>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}/enable-custom-routes-propagation`,
        signal: options?.signal,
      },
      unmarshalVPC,
    )

  
  protected pageOfListSubnets = (request: Readonly<ListSubnetsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSubnetsResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subnets`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['subnet_ids', request.subnetIds],
          ['vpc_id', request.vpcId],
        ),
        signal: options?.signal,
      },
      unmarshalListSubnetsResponse,
    )
  
  /**
   * List subnets. List any Private Network's subnets. See ListPrivateNetworks to list a specific Private Network's subnets.
   *
   * @param request - The request {@link ListSubnetsRequest}
   * @returns A Promise of ListSubnetsResponse
   */
  listSubnets = (request: Readonly<ListSubnetsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('subnets', this.pageOfListSubnets, request, options)

  
  /**
   * Create a Route. Create a new custom Route.
   *
   * @param request - The request {@link CreateRouteRequest}
   * @returns A Promise of Route
   */
  createRoute = (request: Readonly<CreateRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalCreateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Get a Route. Retrieve details of an existing Route, specified by its Route ID.
   *
   * @param request - The request {@link GetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<GetRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Update Route. Update parameters of the specified Route.
   *
   * @param request - The request {@link UpdateRouteRequest}
   * @returns A Promise of Route
   */
  updateRoute = (request: Readonly<UpdateRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalUpdateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Delete a Route. Delete a Route specified by its Route ID.
   *
   * @param request - The request {@link DeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<DeleteRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get ACL Rules for VPC. Retrieve a list of ACL rules for a VPC, specified by its VPC ID.
   *
   * @param request - The request {@link GetAclRequest}
   * @returns A Promise of GetAclResponse
   */
  getAcl = (request: Readonly<GetAclRequest>, options?: RequestOptions) =>
    this.client.fetch<GetAclResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}/acl-rules`,
        urlParams: urlParams(
          ['is_ipv6', request.isIpv6],
        ),
        signal: options?.signal,
      },
      unmarshalGetAclResponse,
    )

  
  /**
   * Set VPC ACL rules. Set the list of ACL rules and the default routing policy for a VPC.
   *
   * @param request - The request {@link SetAclRequest}
   * @returns A Promise of SetAclResponse
   */
  setAcl = (request: Readonly<SetAclRequest>, options?: RequestOptions) =>
    this.client.fetch<SetAclResponse>(
      {
        body: JSON.stringify(
          marshalSetAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpcs/${validatePathParam('vpcId', request.vpcId)}/acl-rules`,
        signal: options?.signal,
      },
      unmarshalSetAclResponse,
    )

  
  protected pageOfListVPCConnectors = (request: Readonly<ListVPCConnectorsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVPCConnectorsResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpc-connectors`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['status', request.status],
          ['tags', request.tags],
          ['target_vpc_id', request.targetVpcId],
          ['vpc_id', request.vpcId],
        ),
        signal: options?.signal,
      },
      unmarshalListVPCConnectorsResponse,
    )
  
  /**
   * List VPC connectors. List existing VPC connectors in the specified region.
   *
   * @param request - The request {@link ListVPCConnectorsRequest}
   * @returns A Promise of ListVPCConnectorsResponse
   */
  listVPCConnectors = (request: Readonly<ListVPCConnectorsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('vpcConnectors', this.pageOfListVPCConnectors, request, options)

  
  /**
   * Create a VPC connector. Create a new VPC connector in the specified region.
   *
   * @param request - The request {@link CreateVPCConnectorRequest}
   * @returns A Promise of VPCConnector
   */
  createVPCConnector = (request: Readonly<CreateVPCConnectorRequest>, options?: RequestOptions) =>
    this.client.fetch<VPCConnector>(
      {
        body: JSON.stringify(
          marshalCreateVPCConnectorRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpc-connectors`,
        signal: options?.signal,
      },
      unmarshalVPCConnector,
    )

  
  /**
   * Get a VPC connector. Retrieve details of an existing VPC connector, specified by its VPC connector ID.
   *
   * @param request - The request {@link GetVPCConnectorRequest}
   * @returns A Promise of VPCConnector
   */
  getVPCConnector = (request: Readonly<GetVPCConnectorRequest>, options?: RequestOptions) =>
    this.client.fetch<VPCConnector>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpc-connectors/${validatePathParam('vpcConnectorId', request.vpcConnectorId)}`,
        signal: options?.signal,
      },
      unmarshalVPCConnector,
    )

  
  /**
   * Update VPC connector. Update parameters including name and tags of the specified VPC connector.
   *
   * @param request - The request {@link UpdateVPCConnectorRequest}
   * @returns A Promise of VPCConnector
   */
  updateVPCConnector = (request: Readonly<UpdateVPCConnectorRequest>, options?: RequestOptions) =>
    this.client.fetch<VPCConnector>(
      {
        body: JSON.stringify(
          marshalUpdateVPCConnectorRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpc-connectors/${validatePathParam('vpcConnectorId', request.vpcConnectorId)}`,
        signal: options?.signal,
      },
      unmarshalVPCConnector,
    )

  
  /**
   * Delete a VPC connector. Delete a VPC connector specified by its VPC connector ID.
   *
   * @param request - The request {@link DeleteVPCConnectorRequest}
   */
  deleteVPCConnector = (request: Readonly<DeleteVPCConnectorRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpc-connectors/${validatePathParam('vpcConnectorId', request.vpcConnectorId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListSubnetOverlaps = (request: Readonly<ListSubnetOverlapsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListSubnetOverlapsResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpc-connectors/${validatePathParam('vpcConnectorId', request.vpcConnectorId)}/subnet-overlaps`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListSubnetOverlapsResponse,
    )
  
  /**
   * List subnet overlaps. List subnet overlaps between the VPCs on both sides of a connector, or for a specific subnet if specified.
   *
   * @param request - The request {@link ListSubnetOverlapsRequest}
   * @returns A Promise of ListSubnetOverlapsResponse
   */
  listSubnetOverlaps = (request: Readonly<ListSubnetOverlapsRequest>, options?: RequestOptions) =>
    enrichForPagination('subnetOverlaps', this.pageOfListSubnetOverlaps, request, options)

  
  protected pageOfListIngressRules = (request: Readonly<ListIngressRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListIngressRulesResponse>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ingress-rules`,
        urlParams: urlParams(
          ['is_ipv6', request.isIpv6],
          ['nexthop_private_network_id', request.nexthopPrivateNetworkId],
          ['nexthop_resource_ip', request.nexthopResourceIp],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
          ['vpc_id', request.vpcId],
        ),
        signal: options?.signal,
      },
      unmarshalListIngressRulesResponse,
    )
  
  /**
   * List ingress rules. List existing ingress rules in the specified region.
   *
   * @param request - The request {@link ListIngressRulesRequest}
   * @returns A Promise of ListIngressRulesResponse
   */
  listIngressRules = (request: Readonly<ListIngressRulesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('rules', this.pageOfListIngressRules, request, options)

  
  /**
   * Create an ingress rule. Create an ingress rule in the specified region.
   *
   * @param request - The request {@link CreateIngressRuleRequest}
   * @returns A Promise of IngressRule
   */
  createIngressRule = (request: Readonly<CreateIngressRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<IngressRule>(
      {
        body: JSON.stringify(
          marshalCreateIngressRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ingress-rules`,
        signal: options?.signal,
      },
      unmarshalIngressRule,
    )

  
  /**
   * Get an ingress rule. Retrieve details of an existing ingress rule, specified by its ingress rule ID.
   *
   * @param request - The request {@link GetIngressRuleRequest}
   * @returns A Promise of IngressRule
   */
  getIngressRule = (request: Readonly<GetIngressRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<IngressRule>(
      {
        method: 'GET',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ingress-rules/${validatePathParam('ruleId', request.ruleId)}`,
        signal: options?.signal,
      },
      unmarshalIngressRule,
    )

  
  /**
   * Update an ingress rule. Update an ingress rule specified by its ingress rule ID.
   *
   * @param request - The request {@link UpdateIngressRuleRequest}
   * @returns A Promise of IngressRule
   */
  updateIngressRule = (request: Readonly<UpdateIngressRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<IngressRule>(
      {
        body: JSON.stringify(
          marshalUpdateIngressRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ingress-rules/${validatePathParam('ruleId', request.ruleId)}`,
        signal: options?.signal,
      },
      unmarshalIngressRule,
    )

  
  /**
   * Delete an ingress rule. Delete an ingress rule specified by its ingress rule ID.
   *
   * @param request - The request {@link DeleteIngressRuleRequest}
   */
  deleteIngressRule = (request: Readonly<DeleteIngressRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ingress-rules/${validatePathParam('ruleId', request.ruleId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Enable Object Storage private access. Enable Object Storage private access for a VPC.
   *
   * @param request - The request {@link EnableObjectStoragePrivateAccessRequest}
   * @returns A Promise of VPC
   */
  enableObjectStoragePrivateAccess = (request: Readonly<EnableObjectStoragePrivateAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<VPC>(
      {
        body: JSON.stringify(
          marshalEnableObjectStoragePrivateAccessRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/object-storage-private-access/${validatePathParam('vpcId', request.vpcId)}/enable`,
        signal: options?.signal,
      },
      unmarshalVPC,
    )

  
  /**
   * Disable Object Storage private access. Disable Object Storage private access for a VPC.
   *
   * @param request - The request {@link DisableObjectStoragePrivateAccessRequest}
   * @returns A Promise of VPC
   */
  disableObjectStoragePrivateAccess = (request: Readonly<DisableObjectStoragePrivateAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<VPC>(
      {
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/object-storage-private-access/${validatePathParam('vpcId', request.vpcId)}/disable`,
        signal: options?.signal,
      },
      unmarshalVPC,
    )

  
  /**
   * Add a Private Network to an Object Storage private access. Add a Private Network to the Object Storage private access to enable Object Storage integration for its resources.
   *
   * @param request - The request {@link AddPrivateNetworkObjectStoragePrivateAccessRequest}
   * @returns A Promise of AddPrivateNetworkObjectStoragePrivateAccessResponse
   */
  addPrivateNetworkObjectStoragePrivateAccess = (request: Readonly<AddPrivateNetworkObjectStoragePrivateAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<AddPrivateNetworkObjectStoragePrivateAccessResponse>(
      {
        body: JSON.stringify(
          marshalAddPrivateNetworkObjectStoragePrivateAccessRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/object-storage-private-access/${validatePathParam('vpcId', request.vpcId)}/private-networks`,
        signal: options?.signal,
      },
      unmarshalAddPrivateNetworkObjectStoragePrivateAccessResponse,
    )

  
  /**
   * Set Object Storage private access Private Networks. Set the Private Networks associated with the Object Storage private access to enable Object Storage integration for their resources.
   *
   * @param request - The request {@link SetPrivateNetworksObjectStoragePrivateAccessRequest}
   * @returns A Promise of SetPrivateNetworksObjectStoragePrivateAccessResponse
   */
  setPrivateNetworksObjectStoragePrivateAccess = (request: Readonly<SetPrivateNetworksObjectStoragePrivateAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<SetPrivateNetworksObjectStoragePrivateAccessResponse>(
      {
        body: JSON.stringify(
          marshalSetPrivateNetworksObjectStoragePrivateAccessRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/object-storage-private-access/${validatePathParam('vpcId', request.vpcId)}/private-networks`,
        signal: options?.signal,
      },
      unmarshalSetPrivateNetworksObjectStoragePrivateAccessResponse,
    )

  
  /**
   * Remove a Private Network from an Object Storage private access. Remove a Private Network from the Object Storage private access to disable Object Storage integration for its resources.
   *
   * @param request - The request {@link DeletePrivateNetworkObjectStoragePrivateAccessRequest}
   */
  deletePrivateNetworkObjectStoragePrivateAccess = (request: Readonly<DeletePrivateNetworkObjectStoragePrivateAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/vpc/v2/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/object-storage-private-access/${validatePathParam('vpcId', request.vpcId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
        signal: options?.signal,
      },
    )

  
}

