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
import {VPN_GATEWAY_TRANSIENT_STATUSES as VPN_GATEWAY_TRANSIENT_STATUSES_S2S_VPN,} from './content.gen.js'
import {
  marshalChangeConnectionPskRequest,
  unmarshalChangeConnectionPskResponse,
  unmarshalConnection,
  marshalCreateConnectionRequest,
  unmarshalCreateConnectionResponse,
  marshalCreateCustomerGatewayRequest,
  marshalCreateRoutingPolicyRequest,
  marshalCreateVpnGatewayRequest,
  unmarshalCustomerGateway,
  marshalDetachRoutingPolicyRequest,
  unmarshalListConnectionsResponse,
  unmarshalListCustomerGatewaysResponse,
  unmarshalListRoutingPoliciesResponse,
  unmarshalListVpnGatewayTypesResponse,
  unmarshalListVpnGatewaysResponse,
  marshalRenewConnectionPskRequest,
  unmarshalRenewConnectionPskResponse,
  unmarshalRoutingPolicy,
  marshalSetRoutingPolicyRequest,
  marshalUpdateConnectionRequest,
  marshalUpdateCustomerGatewayRequest,
  marshalUpdateRoutingPolicyRequest,
  marshalUpdateVpnGatewayRequest,
  unmarshalVpnGateway,
} from './marshalling.gen.js'
import type {
  ChangeConnectionPskRequest,
  ChangeConnectionPskResponse,
  Connection,
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateCustomerGatewayRequest,
  CreateRoutingPolicyRequest,
  CreateVpnGatewayRequest,
  CustomerGateway,
  DeleteConnectionRequest,
  DeleteCustomerGatewayRequest,
  DeleteRoutingPolicyRequest,
  DeleteVpnGatewayRequest,
  DetachRoutingPolicyRequest,
  DisableRoutePropagationRequest,
  EnableRoutePropagationRequest,
  GetConnectionRequest,
  GetCustomerGatewayRequest,
  GetRoutingPolicyRequest,
  GetVpnGatewayRequest,
  ListConnectionsRequest,
  ListConnectionsResponse,
  ListCustomerGatewaysRequest,
  ListCustomerGatewaysResponse,
  ListRoutingPoliciesRequest,
  ListRoutingPoliciesResponse,
  ListVpnGatewayTypesRequest,
  ListVpnGatewayTypesResponse,
  ListVpnGatewaysRequest,
  ListVpnGatewaysResponse,
  RenewConnectionPskRequest,
  RenewConnectionPskResponse,
  RoutingPolicy,
  SetRoutingPolicyRequest,
  UpdateConnectionRequest,
  UpdateCustomerGatewayRequest,
  UpdateRoutingPolicyRequest,
  UpdateVpnGatewayRequest,
  VpnGateway,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Site-to-Site VPN.

This API allows you to manage your Site-to-Site VPN.
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
  
  protected pageOfListVpnGatewayTypes = (request: Readonly<ListVpnGatewayTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVpnGatewayTypesResponse>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpn-gateway-types`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListVpnGatewayTypesResponse,
    )
  
  /**
   * List VPN gateway types. List the different VPN gateway commercial offer types available at Scaleway. The response is an array of objects describing the name and technical details of each available VPN gateway type.
   *
   * @param request - The request {@link ListVpnGatewayTypesRequest}
   * @returns A Promise of ListVpnGatewayTypesResponse
   */
  listVpnGatewayTypes = (request: Readonly<ListVpnGatewayTypesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('gatewayTypes', this.pageOfListVpnGatewayTypes, request, options)

  
  protected pageOfListVpnGateways = (request: Readonly<ListVpnGatewaysRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVpnGatewaysResponse>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpn-gateways`,
        urlParams: urlParams(
          ['gateway_types', request.gatewayTypes],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['private_network_ids', request.privateNetworkIds],
          ['project_id', request.projectId],
          ['statuses', request.statuses],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListVpnGatewaysResponse,
    )
  
  /**
   * List VPN gateways. List all your VPN gateways. A number of filters are available, including Project ID, name, tags and status.
   *
   * @param request - The request {@link ListVpnGatewaysRequest}
   * @returns A Promise of ListVpnGatewaysResponse
   */
  listVpnGateways = (request: Readonly<ListVpnGatewaysRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('gateways', this.pageOfListVpnGateways, request, options)

  
  /**
   * Get a VPN gateway. Get a VPN gateway for the given VPN gateway ID.
   *
   * @param request - The request {@link GetVpnGatewayRequest}
   * @returns A Promise of VpnGateway
   */
  getVpnGateway = (request: Readonly<GetVpnGatewayRequest>, options?: RequestOptions) =>
    this.client.fetch<VpnGateway>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpn-gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
        signal: options?.signal,
      },
      unmarshalVpnGateway,
    )
  
  /**
   * Waits for {@link VpnGateway} to be in a final state.
   *
   * @param request - The request {@link GetVpnGatewayRequest}
   * @param options - The waiting options
   * @returns A Promise of VpnGateway
   */
  waitForVpnGateway = (
    request: Readonly<GetVpnGatewayRequest>,
    options?: Readonly<WaitForOptions<VpnGateway>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!VPN_GATEWAY_TRANSIENT_STATUSES_S2S_VPN.includes(res.status))),
      this.getVpnGateway,
      request,
      options,
    )

  
  /**
   * Create VPN gateway.
   *
   * @param request - The request {@link CreateVpnGatewayRequest}
   * @returns A Promise of VpnGateway
   */
  createVpnGateway = (request: Readonly<CreateVpnGatewayRequest>, options?: RequestOptions) =>
    this.client.fetch<VpnGateway>(
      {
        body: JSON.stringify(
          marshalCreateVpnGatewayRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpn-gateways`,
        signal: options?.signal,
      },
      unmarshalVpnGateway,
    )

  
  /**
   * Update a VPN gateway. Update an existing VPN gateway, specified by its VPN gateway ID. Only its name and tags can be updated.
   *
   * @param request - The request {@link UpdateVpnGatewayRequest}
   * @returns A Promise of VpnGateway
   */
  updateVpnGateway = (request: Readonly<UpdateVpnGatewayRequest>, options?: RequestOptions) =>
    this.client.fetch<VpnGateway>(
      {
        body: JSON.stringify(
          marshalUpdateVpnGatewayRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpn-gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
        signal: options?.signal,
      },
      unmarshalVpnGateway,
    )

  
  /**
   * Delete a VPN gateway. Delete an existing VPN gateway, specified by its VPN gateway ID.
   *
   * @param request - The request {@link DeleteVpnGatewayRequest}
   * @returns A Promise of VpnGateway
   */
  deleteVpnGateway = (request: Readonly<DeleteVpnGatewayRequest>, options?: RequestOptions) =>
    this.client.fetch<VpnGateway>(
      {
        method: 'DELETE',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/vpn-gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
        signal: options?.signal,
      },
      unmarshalVpnGateway,
    )

  
  protected pageOfListConnections = (request: Readonly<ListConnectionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListConnectionsResponse>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections`,
        urlParams: urlParams(
          ['customer_gateway_ids', request.customerGatewayIds],
          ['is_ipv6', request.isIpv6],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['route_propagation_enabled', request.routePropagationEnabled],
          ['routing_policy_ids', request.routingPolicyIds],
          ['statuses', request.statuses],
          ['tags', request.tags],
          ['vpn_gateway_ids', request.vpnGatewayIds],
        ),
        signal: options?.signal,
      },
      unmarshalListConnectionsResponse,
    )
  
  /**
   * List connections. List all your connections. A number of filters are available, including Project ID, name, tags and status.
   *
   * @param request - The request {@link ListConnectionsRequest}
   * @returns A Promise of ListConnectionsResponse
   */
  listConnections = (request: Readonly<ListConnectionsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('connections', this.pageOfListConnections, request, options)

  
  /**
   * Get a connection. Get a connection for the given connection ID. The response object includes information about the connection's various configuration details.
   *
   * @param request - The request {@link GetConnectionRequest}
   * @returns A Promise of Connection
   */
  getConnection = (request: Readonly<GetConnectionRequest>, options?: RequestOptions) =>
    this.client.fetch<Connection>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}`,
        signal: options?.signal,
      },
      unmarshalConnection,
    )

  
  /**
   * Create a connection.
   *
   * @param request - The request {@link CreateConnectionRequest}
   * @returns A Promise of CreateConnectionResponse
   */
  createConnection = (request: Readonly<CreateConnectionRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateConnectionResponse>(
      {
        body: JSON.stringify(
          marshalCreateConnectionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections`,
        signal: options?.signal,
      },
      unmarshalCreateConnectionResponse,
    )

  
  /**
   * Update a connection. Update an existing connection, specified by its connection ID.
   *
   * @param request - The request {@link UpdateConnectionRequest}
   * @returns A Promise of Connection
   */
  updateConnection = (request: Readonly<UpdateConnectionRequest>, options?: RequestOptions) =>
    this.client.fetch<Connection>(
      {
        body: JSON.stringify(
          marshalUpdateConnectionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}`,
        signal: options?.signal,
      },
      unmarshalConnection,
    )

  
  /**
   * Delete a connection. Delete an existing connection, specified by its connection ID.
   *
   * @param request - The request {@link DeleteConnectionRequest}
   */
  deleteConnection = (request: Readonly<DeleteConnectionRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Renew pre-shared key. Renew pre-shared key for a given connection.
   *
   * @param request - The request {@link RenewConnectionPskRequest}
   * @returns A Promise of RenewConnectionPskResponse
   */
  renewConnectionPsk = (request: Readonly<RenewConnectionPskRequest>, options?: RequestOptions) =>
    this.client.fetch<RenewConnectionPskResponse>(
      {
        body: JSON.stringify(
          marshalRenewConnectionPskRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}/renew-psk`,
        signal: options?.signal,
      },
      unmarshalRenewConnectionPskResponse,
    )

  
  /**
   * Change pre-shared key. Change pre-shared key for a given connection.
   *
   * @param request - The request {@link ChangeConnectionPskRequest}
   * @returns A Promise of ChangeConnectionPskResponse
   */
  changeConnectionPsk = (request: Readonly<ChangeConnectionPskRequest>, options?: RequestOptions) =>
    this.client.fetch<ChangeConnectionPskResponse>(
      {
        body: JSON.stringify(
          marshalChangeConnectionPskRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}/change-psk`,
        signal: options?.signal,
      },
      unmarshalChangeConnectionPskResponse,
    )

  
  /**
   * Set a new routing policy. Set a new routing policy on a connection, overriding the existing one if present, specified by its connection ID.
   *
   * @param request - The request {@link SetRoutingPolicyRequest}
   * @returns A Promise of Connection
   */
  setRoutingPolicy = (request: Readonly<SetRoutingPolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<Connection>(
      {
        body: JSON.stringify(
          marshalSetRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}/set-routing-policy`,
        signal: options?.signal,
      },
      unmarshalConnection,
    )

  
  /**
   * Detach a routing policy. Detach an existing routing policy from a connection, specified by its connection ID.
   *
   * @param request - The request {@link DetachRoutingPolicyRequest}
   * @returns A Promise of Connection
   */
  detachRoutingPolicy = (request: Readonly<DetachRoutingPolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<Connection>(
      {
        body: JSON.stringify(
          marshalDetachRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}/detach-routing-policy`,
        signal: options?.signal,
      },
      unmarshalConnection,
    )

  
  /**
   * Enable route propagation. Enable all allowed prefixes (defined in a routing policy) to be announced in the BGP session. This allows traffic to flow between the attached VPC and the on-premises infrastructure along the announced routes. Note that by default, even when route propagation is enabled, all routes are blocked. It is essential to attach a routing policy to define the ranges of routes to announce.
   *
   * @param request - The request {@link EnableRoutePropagationRequest}
   * @returns A Promise of Connection
   */
  enableRoutePropagation = (request: Readonly<EnableRoutePropagationRequest>, options?: RequestOptions) =>
    this.client.fetch<Connection>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}/enable-route-propagation`,
        signal: options?.signal,
      },
      unmarshalConnection,
    )

  
  /**
   * Disable route propagation. Prevent any prefixes from being announced in the BGP session. Traffic will not be able to flow over the VPN Gateway until route propagation is re-enabled.
   *
   * @param request - The request {@link DisableRoutePropagationRequest}
   * @returns A Promise of Connection
   */
  disableRoutePropagation = (request: Readonly<DisableRoutePropagationRequest>, options?: RequestOptions) =>
    this.client.fetch<Connection>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/connections/${validatePathParam('connectionId', request.connectionId)}/disable-route-propagation`,
        signal: options?.signal,
      },
      unmarshalConnection,
    )

  
  protected pageOfListCustomerGateways = (request: Readonly<ListCustomerGatewaysRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListCustomerGatewaysResponse>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/customer-gateways`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListCustomerGatewaysResponse,
    )
  
  /**
   * List customer gateways. List all your customer gateways. A number of filters are available, including Project ID, name, and tags.
   *
   * @param request - The request {@link ListCustomerGatewaysRequest}
   * @returns A Promise of ListCustomerGatewaysResponse
   */
  listCustomerGateways = (request: Readonly<ListCustomerGatewaysRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('gateways', this.pageOfListCustomerGateways, request, options)

  
  /**
   * Get a customer gateway. Get a customer gateway for the given customer gateway ID.
   *
   * @param request - The request {@link GetCustomerGatewayRequest}
   * @returns A Promise of CustomerGateway
   */
  getCustomerGateway = (request: Readonly<GetCustomerGatewayRequest>, options?: RequestOptions) =>
    this.client.fetch<CustomerGateway>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/customer-gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
        signal: options?.signal,
      },
      unmarshalCustomerGateway,
    )

  
  /**
   * Create a customer gateway.
   *
   * @param request - The request {@link CreateCustomerGatewayRequest}
   * @returns A Promise of CustomerGateway
   */
  createCustomerGateway = (request: Readonly<CreateCustomerGatewayRequest>, options?: RequestOptions) =>
    this.client.fetch<CustomerGateway>(
      {
        body: JSON.stringify(
          marshalCreateCustomerGatewayRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/customer-gateways`,
        signal: options?.signal,
      },
      unmarshalCustomerGateway,
    )

  
  /**
   * Update a customer gateway. Update an existing customer gateway, specified by its customer gateway ID. You can update its name, tags, public IPv4 & IPv6 address and AS Number.
   *
   * @param request - The request {@link UpdateCustomerGatewayRequest}
   * @returns A Promise of CustomerGateway
   */
  updateCustomerGateway = (request: Readonly<UpdateCustomerGatewayRequest>, options?: RequestOptions) =>
    this.client.fetch<CustomerGateway>(
      {
        body: JSON.stringify(
          marshalUpdateCustomerGatewayRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/customer-gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
        signal: options?.signal,
      },
      unmarshalCustomerGateway,
    )

  
  /**
   * Delete a customer gateway. Delete an existing customer gateway, specified by its customer gateway ID.
   *
   * @param request - The request {@link DeleteCustomerGatewayRequest}
   */
  deleteCustomerGateway = (request: Readonly<DeleteCustomerGatewayRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/customer-gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListRoutingPolicies = (request: Readonly<ListRoutingPoliciesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRoutingPoliciesResponse>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies`,
        urlParams: urlParams(
          ['ipv6', request.ipv6],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListRoutingPoliciesResponse,
    )
  
  /**
   * List routing policies. List all routing policies in a given region. A routing policy can be attached to one or multiple connections (S2S VPN connections).
   *
   * @param request - The request {@link ListRoutingPoliciesRequest}
   * @returns A Promise of ListRoutingPoliciesResponse
   */
  listRoutingPolicies = (request: Readonly<ListRoutingPoliciesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('routingPolicies', this.pageOfListRoutingPolicies, request, options)

  
  /**
   * Get routing policy. Get a routing policy for the given routing policy ID. The response object gives information including the policy's name, tags and prefix filters.
   *
   * @param request - The request {@link GetRoutingPolicyRequest}
   * @returns A Promise of RoutingPolicy
   */
  getRoutingPolicy = (request: Readonly<GetRoutingPolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<RoutingPolicy>(
      {
        method: 'GET',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies/${validatePathParam('routingPolicyId', request.routingPolicyId)}`,
        signal: options?.signal,
      },
      unmarshalRoutingPolicy,
    )

  
  /**
   * Create a routing policy. Create a routing policy. Routing policies allow you to set IP prefix filters to define the incoming route announcements to accept from the customer gateway, and the outgoing routes to announce to the customer gateway.
   *
   * @param request - The request {@link CreateRoutingPolicyRequest}
   * @returns A Promise of RoutingPolicy
   */
  createRoutingPolicy = (request: Readonly<CreateRoutingPolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<RoutingPolicy>(
      {
        body: JSON.stringify(
          marshalCreateRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies`,
        signal: options?.signal,
      },
      unmarshalRoutingPolicy,
    )

  
  /**
   * Update a routing policy. Update an existing routing policy, specified by its routing policy ID. Its name, tags and incoming/outgoing prefix filters can be updated.
   *
   * @param request - The request {@link UpdateRoutingPolicyRequest}
   * @returns A Promise of RoutingPolicy
   */
  updateRoutingPolicy = (request: Readonly<UpdateRoutingPolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<RoutingPolicy>(
      {
        body: JSON.stringify(
          marshalUpdateRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies/${validatePathParam('routingPolicyId', request.routingPolicyId)}`,
        signal: options?.signal,
      },
      unmarshalRoutingPolicy,
    )

  
  /**
   * Delete a routing policy. Delete an existing routing policy, specified by its routing policy ID.
   *
   * @param request - The request {@link DeleteRoutingPolicyRequest}
   */
  deleteRoutingPolicy = (request: Readonly<DeleteRoutingPolicyRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/s2s-vpn/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies/${validatePathParam('routingPolicyId', request.routingPolicyId)}`,
        signal: options?.signal,
      },
    )

  
}

