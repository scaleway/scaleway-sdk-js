// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import type { ApiLocality, WaitForOptions } from '@scaleway/sdk-client'
import {
  DEDICATED_CONNECTION_TRANSIENT_STATUSES as DEDICATED_CONNECTION_TRANSIENT_STATUSES_INTERLINK,
  LINK_TRANSIENT_STATUSES as LINK_TRANSIENT_STATUSES_INTERLINK,
} from './content.gen.js'
import {
  marshalAttachRoutingPolicyRequest,
  marshalAttachVpcRequest,
  marshalCreateLinkRequest,
  marshalCreateRoutingPolicyRequest,
  marshalDetachRoutingPolicyRequest,
  marshalSetRoutingPolicyRequest,
  marshalUpdateLinkRequest,
  marshalUpdateRoutingPolicyRequest,
  unmarshalDedicatedConnection,
  unmarshalLink,
  unmarshalListDedicatedConnectionsResponse,
  unmarshalListLinksResponse,
  unmarshalListPartnersResponse,
  unmarshalListPopsResponse,
  unmarshalListRoutingPoliciesResponse,
  unmarshalPartner,
  unmarshalPop,
  unmarshalRoutingPolicy,
} from './marshalling.gen.js'
import type {
  AttachRoutingPolicyRequest,
  AttachVpcRequest,
  CreateLinkRequest,
  CreateRoutingPolicyRequest,
  DedicatedConnection,
  DeleteLinkRequest,
  DeleteRoutingPolicyRequest,
  DetachRoutingPolicyRequest,
  DetachVpcRequest,
  DisableRoutePropagationRequest,
  EnableRoutePropagationRequest,
  GetDedicatedConnectionRequest,
  GetLinkRequest,
  GetPartnerRequest,
  GetPopRequest,
  GetRoutingPolicyRequest,
  Link,
  ListDedicatedConnectionsRequest,
  ListDedicatedConnectionsResponse,
  ListLinksRequest,
  ListLinksResponse,
  ListPartnersRequest,
  ListPartnersResponse,
  ListPopsRequest,
  ListPopsResponse,
  ListRoutingPoliciesRequest,
  ListRoutingPoliciesResponse,
  Partner,
  Pop,
  RoutingPolicy,
  SetRoutingPolicyRequest,
  UpdateLinkRequest,
  UpdateRoutingPolicyRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * InterLink API.

This API allows you to manage your Scaleway InterLink, to connect your on-premises infrastructure with your Scaleway VPC.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListDedicatedConnections = (
    request: Readonly<ListDedicatedConnectionsRequest> = {},
  ) =>
    this.client.fetch<ListDedicatedConnectionsResponse>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/dedicated-connections`,
        urlParams: urlParams(
          ['bandwidth_mbps', request.bandwidthMbps],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['pop_id', request.popId],
          ['project_id', request.projectId],
          ['status', request.status],
          ['tags', request.tags],
        ),
      },
      unmarshalListDedicatedConnectionsResponse,
    )

  /**
   * List dedicated connections. For self-hosted users, list their dedicated physical connections in a given region. By default, the connections returned in the list are ordered by name in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListDedicatedConnectionsRequest}
   * @returns A Promise of ListDedicatedConnectionsResponse
   */
  listDedicatedConnections = (
    request: Readonly<ListDedicatedConnectionsRequest> = {},
  ) =>
    enrichForPagination(
      'connections',
      this.pageOfListDedicatedConnections,
      request,
    )

  /**
   * Get a dedicated connection. For self-hosted users, get a dedicated physical connection corresponding to the given ID. The response object includes information such as the connection's name, status and total bandwidth.
   *
   * @param request - The request {@link GetDedicatedConnectionRequest}
   * @returns A Promise of DedicatedConnection
   */
  getDedicatedConnection = (request: Readonly<GetDedicatedConnectionRequest>) =>
    this.client.fetch<DedicatedConnection>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/dedicated-connections/${validatePathParam('connectionId', request.connectionId)}`,
      },
      unmarshalDedicatedConnection,
    )

  /**
   * Waits for {@link DedicatedConnection} to be in a final state.
   *
   * @param request - The request {@link GetDedicatedConnectionRequest}
   * @param options - The waiting options
   * @returns A Promise of DedicatedConnection
   */
  waitForDedicatedConnection = (
    request: Readonly<GetDedicatedConnectionRequest>,
    options?: Readonly<WaitForOptions<DedicatedConnection>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !DEDICATED_CONNECTION_TRANSIENT_STATUSES_INTERLINK.includes(
              res.status,
            ),
          )),
      this.getDedicatedConnection,
      request,
      options,
    )

  protected pageOfListPartners = (
    request: Readonly<ListPartnersRequest> = {},
  ) =>
    this.client.fetch<ListPartnersResponse>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/partners`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['pop_ids', request.popIds],
        ),
      },
      unmarshalListPartnersResponse,
    )

  /**
   * List available partners. List all available partners. By default, the partners returned in the list are ordered by name in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListPartnersRequest}
   * @returns A Promise of ListPartnersResponse
   */
  listPartners = (request: Readonly<ListPartnersRequest> = {}) =>
    enrichForPagination('partners', this.pageOfListPartners, request)

  /**
   * Get a partner. Get a partner for the given partner IP. The response object includes information such as the partner's name, email address and portal URL.
   *
   * @param request - The request {@link GetPartnerRequest}
   * @returns A Promise of Partner
   */
  getPartner = (request: Readonly<GetPartnerRequest>) =>
    this.client.fetch<Partner>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/partners/${validatePathParam('partnerId', request.partnerId)}`,
      },
      unmarshalPartner,
    )

  protected pageOfListPops = (request: Readonly<ListPopsRequest> = {}) =>
    this.client.fetch<ListPopsResponse>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pops`,
        urlParams: urlParams(
          ['dedicated_available', request.dedicatedAvailable],
          ['hosting_provider_name', request.hostingProviderName],
          ['link_bandwidth_mbps', request.linkBandwidthMbps],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['partner_id', request.partnerId],
        ),
      },
      unmarshalListPopsResponse,
    )

  /**
   * List PoPs. List all available PoPs (locations) for a given region. By default, the results are returned in ascending alphabetical order by name.
   *
   * @param request - The request {@link ListPopsRequest}
   * @returns A Promise of ListPopsResponse
   */
  listPops = (request: Readonly<ListPopsRequest> = {}) =>
    enrichForPagination('pops', this.pageOfListPops, request)

  /**
   * Get a PoP. Get a PoP for the given PoP ID. The response object includes the PoP's name and information about its physical location.
   *
   * @param request - The request {@link GetPopRequest}
   * @returns A Promise of Pop
   */
  getPop = (request: Readonly<GetPopRequest>) =>
    this.client.fetch<Pop>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pops/${validatePathParam('popId', request.popId)}`,
      },
      unmarshalPop,
    )

  protected pageOfListLinks = (request: Readonly<ListLinksRequest> = {}) =>
    this.client.fetch<ListLinksResponse>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links`,
        urlParams: urlParams(
          ['bandwidth_mbps', request.bandwidthMbps],
          ['bgp_v4_status', request.bgpV4Status],
          ['bgp_v6_status', request.bgpV6Status],
          ['connection_id', request.connectionId],
          ['kind', request.kind],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['pairing_key', request.pairingKey],
          ['partner_id', request.partnerId],
          ['pop_id', request.popId],
          ['project_id', request.projectId],
          ['routing_policy_id', request.routingPolicyId],
          ['status', request.status],
          ['tags', request.tags],
          ['vpc_id', request.vpcId],
        ),
      },
      unmarshalListLinksResponse,
    )

  /**
   * List links. List all your links (InterLink connections). A number of filters are available, including Project ID, name, tags and status.
   *
   * @param request - The request {@link ListLinksRequest}
   * @returns A Promise of ListLinksResponse
   */
  listLinks = (request: Readonly<ListLinksRequest> = {}) =>
    enrichForPagination('links', this.pageOfListLinks, request)

  /**
   * Get a link. Get a link (InterLink session / logical InterLink resource) for the given link ID. The response object includes information about the link's various configuration details.
   *
   * @param request - The request {@link GetLinkRequest}
   * @returns A Promise of Link
   */
  getLink = (request: Readonly<GetLinkRequest>) =>
    this.client.fetch<Link>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}`,
      },
      unmarshalLink,
    )

  /**
   * Waits for {@link Link} to be in a final state.
   *
   * @param request - The request {@link GetLinkRequest}
   * @param options - The waiting options
   * @returns A Promise of Link
   */
  waitForLink = (
    request: Readonly<GetLinkRequest>,
    options?: Readonly<WaitForOptions<Link>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !LINK_TRANSIENT_STATUSES_INTERLINK.includes(res.status),
          )),
      this.getLink,
      request,
      options,
    )

  /**
   * Create a link. Create a link (InterLink session / logical InterLink resource) in a given PoP, specifying its various configuration details. Links can either be hosted (facilitated by partners' shared physical connections) or self-hosted (for users who have purchased a dedicated physical connection).
   *
   * @param request - The request {@link CreateLinkRequest}
   * @returns A Promise of Link
   */
  createLink = (request: Readonly<CreateLinkRequest>) =>
    this.client.fetch<Link>(
      {
        body: JSON.stringify(
          marshalCreateLinkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links`,
      },
      unmarshalLink,
    )

  /**
   * Update a link. Update an existing link, specified by its link ID. Only its name and tags can be updated.
   *
   * @param request - The request {@link UpdateLinkRequest}
   * @returns A Promise of Link
   */
  updateLink = (request: Readonly<UpdateLinkRequest>) =>
    this.client.fetch<Link>(
      {
        body: JSON.stringify(
          marshalUpdateLinkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}`,
      },
      unmarshalLink,
    )

  /**
   * Delete a link. Delete an existing link, specified by its link ID. Note that as well as deleting the link here on the Scaleway side, it is also necessary to request deletion from the partner on their side. Only when this action has been carried out on both sides will the resource be completely deleted.
   *
   * @param request - The request {@link DeleteLinkRequest}
   * @returns A Promise of Link
   */
  deleteLink = (request: Readonly<DeleteLinkRequest>) =>
    this.client.fetch<Link>(
      {
        method: 'DELETE',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}`,
      },
      unmarshalLink,
    )

  /**
   * Attach a VPC. Attach a VPC to an existing link. This facilitates communication between the resources in your Scaleway VPC, and your on-premises infrastructure.
   *
   * @param request - The request {@link AttachVpcRequest}
   * @returns A Promise of Link
   */
  attachVpc = (request: Readonly<AttachVpcRequest>) =>
    this.client.fetch<Link>(
      {
        body: JSON.stringify(
          marshalAttachVpcRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}/attach-vpc`,
      },
      unmarshalLink,
    )

  /**
   * Detach a VPC. Detach a VPC from an existing link.
   *
   * @param request - The request {@link DetachVpcRequest}
   * @returns A Promise of Link
   */
  detachVpc = (request: Readonly<DetachVpcRequest>) =>
    this.client.fetch<Link>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}/detach-vpc`,
      },
      unmarshalLink,
    )

  /**
   * Attach a routing policy. Attach a routing policy to an existing link. As all routes across the link are blocked by default, you must attach a routing policy to set IP prefix filters for allowed routes, facilitating traffic flow.
   *
   * @param request - The request {@link AttachRoutingPolicyRequest}
   * @returns A Promise of Link
   */
  attachRoutingPolicy = (request: Readonly<AttachRoutingPolicyRequest>) =>
    this.client.fetch<Link>(
      {
        body: JSON.stringify(
          marshalAttachRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}/attach-routing-policy`,
      },
      unmarshalLink,
    )

  /**
   * Detach a routing policy. Detach a routing policy from an existing link. Without a routing policy, all routes across the link are blocked by default.
   *
   * @param request - The request {@link DetachRoutingPolicyRequest}
   * @returns A Promise of Link
   */
  detachRoutingPolicy = (request: Readonly<DetachRoutingPolicyRequest>) =>
    this.client.fetch<Link>(
      {
        body: JSON.stringify(
          marshalDetachRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}/detach-routing-policy`,
      },
      unmarshalLink,
    )

  /**
   * Set a routing policy. Replace a routing policy from an existing link. This is useful when route propagation is enabled because it changes the routing policy "in place", without blocking all routes like a attach / detach would do.
   *
   * @param request - The request {@link SetRoutingPolicyRequest}
   * @returns A Promise of Link
   */
  setRoutingPolicy = (request: Readonly<SetRoutingPolicyRequest>) =>
    this.client.fetch<Link>(
      {
        body: JSON.stringify(
          marshalSetRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}/set-routing-policy`,
      },
      unmarshalLink,
    )

  /**
   * Enable route propagation. Enable all allowed prefixes (defined in a routing policy) to be announced in the BGP session. This allows traffic to flow between the attached VPC and the on-premises infrastructure along the announced routes. Note that by default, even when route propagation is enabled, all routes are blocked. It is essential to attach a routing policy to define the ranges of routes to announce.
   *
   * @param request - The request {@link EnableRoutePropagationRequest}
   * @returns A Promise of Link
   */
  enableRoutePropagation = (request: Readonly<EnableRoutePropagationRequest>) =>
    this.client.fetch<Link>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}/enable-route-propagation`,
      },
      unmarshalLink,
    )

  /**
   * Disable route propagation. Prevent any prefixes from being announced in the BGP session. Traffic will not be able to flow over the InterLink until route propagation is re-enabled.
   *
   * @param request - The request {@link DisableRoutePropagationRequest}
   * @returns A Promise of Link
   */
  disableRoutePropagation = (
    request: Readonly<DisableRoutePropagationRequest>,
  ) =>
    this.client.fetch<Link>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/links/${validatePathParam('linkId', request.linkId)}/disable-route-propagation`,
      },
      unmarshalLink,
    )

  protected pageOfListRoutingPolicies = (
    request: Readonly<ListRoutingPoliciesRequest> = {},
  ) =>
    this.client.fetch<ListRoutingPoliciesResponse>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies`,
        urlParams: urlParams(
          ['ipv6', request.ipv6],
          ['name', request.name],
          ['order_by', request.orderBy],
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
      unmarshalListRoutingPoliciesResponse,
    )

  /**
   * List routing policies. List all routing policies in a given region. A routing policy can be attached to one or multiple links (InterLink connections).
   *
   * @param request - The request {@link ListRoutingPoliciesRequest}
   * @returns A Promise of ListRoutingPoliciesResponse
   */
  listRoutingPolicies = (request: Readonly<ListRoutingPoliciesRequest> = {}) =>
    enrichForPagination(
      'routingPolicies',
      this.pageOfListRoutingPolicies,
      request,
    )

  /**
   * Get routing policy. Get a routing policy for the given routing policy ID. The response object gives information including the policy's name, tags and prefix filters.
   *
   * @param request - The request {@link GetRoutingPolicyRequest}
   * @returns A Promise of RoutingPolicy
   */
  getRoutingPolicy = (request: Readonly<GetRoutingPolicyRequest>) =>
    this.client.fetch<RoutingPolicy>(
      {
        method: 'GET',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies/${validatePathParam('routingPolicyId', request.routingPolicyId)}`,
      },
      unmarshalRoutingPolicy,
    )

  /**
   * Create a routing policy. Create a routing policy. Routing policies allow you to set IP prefix filters to define the incoming route announcements to accept from the peer, and the outgoing routes to announce to the peer.
   *
   * @param request - The request {@link CreateRoutingPolicyRequest}
   * @returns A Promise of RoutingPolicy
   */
  createRoutingPolicy = (request: Readonly<CreateRoutingPolicyRequest>) =>
    this.client.fetch<RoutingPolicy>(
      {
        body: JSON.stringify(
          marshalCreateRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies`,
      },
      unmarshalRoutingPolicy,
    )

  /**
   * Update a routing policy. Update an existing routing policy, specified by its routing policy ID. Its name, tags and incoming/outgoing prefix filters can be updated.
   *
   * @param request - The request {@link UpdateRoutingPolicyRequest}
   * @returns A Promise of RoutingPolicy
   */
  updateRoutingPolicy = (request: Readonly<UpdateRoutingPolicyRequest>) =>
    this.client.fetch<RoutingPolicy>(
      {
        body: JSON.stringify(
          marshalUpdateRoutingPolicyRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies/${validatePathParam('routingPolicyId', request.routingPolicyId)}`,
      },
      unmarshalRoutingPolicy,
    )

  /**
   * Delete a routing policy. Delete an existing routing policy, specified by its routing policy ID.
   *
   * @param request - The request {@link DeleteRoutingPolicyRequest}
   */
  deleteRoutingPolicy = (request: Readonly<DeleteRoutingPolicyRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/interlink/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routing-policies/${validatePathParam('routingPolicyId', request.routingPolicyId)}`,
    })
}
