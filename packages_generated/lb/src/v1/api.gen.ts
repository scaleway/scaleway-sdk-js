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
import {CERTIFICATE_TRANSIENT_STATUSES as CERTIFICATE_TRANSIENT_STATUSES_LB,INSTANCE_TRANSIENT_STATUSES as INSTANCE_TRANSIENT_STATUSES_LB,LB_TRANSIENT_STATUSES as LB_TRANSIENT_STATUSES_LB,PRIVATE_NETWORK_TRANSIENT_STATUSES as PRIVATE_NETWORK_TRANSIENT_STATUSES_LB,} from './content.gen.js'
import {
  unmarshalAcl,
  marshalAddBackendServersRequest,
  marshalAttachPrivateNetworkRequest,
  unmarshalBackend,
  unmarshalCertificate,
  marshalCreateAclRequest,
  marshalCreateBackendRequest,
  marshalCreateCertificateRequest,
  marshalCreateFrontendRequest,
  marshalCreateIpRequest,
  marshalCreateLbRequest,
  marshalCreateRouteRequest,
  marshalCreateSubscriberRequest,
  unmarshalFrontend,
  unmarshalHealthCheck,
  unmarshalIp,
  unmarshalLb,
  unmarshalLbStats,
  unmarshalListAclResponse,
  unmarshalListBackendStatsResponse,
  unmarshalListBackendsResponse,
  unmarshalListCertificatesResponse,
  unmarshalListFrontendsResponse,
  unmarshalListIpsResponse,
  unmarshalListLbPrivateNetworksResponse,
  unmarshalListLbTypesResponse,
  unmarshalListLbsResponse,
  unmarshalListRoutesResponse,
  unmarshalListSubscriberResponse,
  marshalMigrateLbRequest,
  unmarshalPrivateNetwork,
  marshalRemoveBackendServersRequest,
  unmarshalRoute,
  unmarshalSetAclsResponse,
  marshalSetBackendServersRequest,
  marshalSubscribeToLbRequest,
  unmarshalSubscriber,
  marshalUpdateAclRequest,
  marshalUpdateBackendRequest,
  marshalUpdateCertificateRequest,
  marshalUpdateFrontendRequest,
  marshalUpdateHealthCheckRequest,
  marshalUpdateIpRequest,
  marshalUpdateLbRequest,
  marshalUpdateRouteRequest,
  marshalUpdateSubscriberRequest,
  marshalZonedApiAddBackendServersRequest,
  marshalZonedApiAttachPrivateNetworkRequest,
  marshalZonedApiCreateAclRequest,
  marshalZonedApiCreateBackendRequest,
  marshalZonedApiCreateCertificateRequest,
  marshalZonedApiCreateFrontendRequest,
  marshalZonedApiCreateIpRequest,
  marshalZonedApiCreateLbRequest,
  marshalZonedApiCreateRouteRequest,
  marshalZonedApiCreateSubscriberRequest,
  marshalZonedApiDetachPrivateNetworkRequest,
  marshalZonedApiMigrateLbRequest,
  marshalZonedApiRemoveBackendServersRequest,
  marshalZonedApiSetAclsRequest,
  marshalZonedApiSetBackendServersRequest,
  marshalZonedApiSubscribeToLbRequest,
  marshalZonedApiUpdateAclRequest,
  marshalZonedApiUpdateBackendRequest,
  marshalZonedApiUpdateCertificateRequest,
  marshalZonedApiUpdateFrontendRequest,
  marshalZonedApiUpdateHealthCheckRequest,
  marshalZonedApiUpdateIpRequest,
  marshalZonedApiUpdateLbRequest,
  marshalZonedApiUpdateRouteRequest,
  marshalZonedApiUpdateSubscriberRequest,
} from './marshalling.gen.js'
import type {
  Acl,
  AddBackendServersRequest,
  AttachPrivateNetworkRequest,
  Backend,
  Certificate,
  CreateAclRequest,
  CreateBackendRequest,
  CreateCertificateRequest,
  CreateFrontendRequest,
  CreateIpRequest,
  CreateLbRequest,
  CreateRouteRequest,
  CreateSubscriberRequest,
  DeleteAclRequest,
  DeleteBackendRequest,
  DeleteCertificateRequest,
  DeleteFrontendRequest,
  DeleteLbRequest,
  DeleteRouteRequest,
  DeleteSubscriberRequest,
  DetachPrivateNetworkRequest,
  Frontend,
  GetAclRequest,
  GetBackendRequest,
  GetCertificateRequest,
  GetFrontendRequest,
  GetIpRequest,
  GetLbRequest,
  GetLbStatsRequest,
  GetRouteRequest,
  GetSubscriberRequest,
  HealthCheck,
  Ip,
  Lb,
  LbStats,
  ListAclResponse,
  ListAclsRequest,
  ListBackendStatsRequest,
  ListBackendStatsResponse,
  ListBackendsRequest,
  ListBackendsResponse,
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListFrontendsRequest,
  ListFrontendsResponse,
  ListIPsRequest,
  ListIpsResponse,
  ListLbPrivateNetworksRequest,
  ListLbPrivateNetworksResponse,
  ListLbTypesRequest,
  ListLbTypesResponse,
  ListLbsRequest,
  ListLbsResponse,
  ListRoutesRequest,
  ListRoutesResponse,
  ListSubscriberRequest,
  ListSubscriberResponse,
  MigrateLbRequest,
  PrivateNetwork,
  ReleaseIpRequest,
  RemoveBackendServersRequest,
  Route,
  SetAclsResponse,
  SetBackendServersRequest,
  SubscribeToLbRequest,
  Subscriber,
  UnsubscribeFromLbRequest,
  UpdateAclRequest,
  UpdateBackendRequest,
  UpdateCertificateRequest,
  UpdateFrontendRequest,
  UpdateHealthCheckRequest,
  UpdateIpRequest,
  UpdateLbRequest,
  UpdateRouteRequest,
  UpdateSubscriberRequest,
  ZonedApiAddBackendServersRequest,
  ZonedApiAttachPrivateNetworkRequest,
  ZonedApiCreateAclRequest,
  ZonedApiCreateBackendRequest,
  ZonedApiCreateCertificateRequest,
  ZonedApiCreateFrontendRequest,
  ZonedApiCreateIpRequest,
  ZonedApiCreateLbRequest,
  ZonedApiCreateRouteRequest,
  ZonedApiCreateSubscriberRequest,
  ZonedApiDeleteAclRequest,
  ZonedApiDeleteBackendRequest,
  ZonedApiDeleteCertificateRequest,
  ZonedApiDeleteFrontendRequest,
  ZonedApiDeleteLbRequest,
  ZonedApiDeleteRouteRequest,
  ZonedApiDeleteSubscriberRequest,
  ZonedApiDetachPrivateNetworkRequest,
  ZonedApiGetAclRequest,
  ZonedApiGetBackendRequest,
  ZonedApiGetCertificateRequest,
  ZonedApiGetFrontendRequest,
  ZonedApiGetIpRequest,
  ZonedApiGetLbRequest,
  ZonedApiGetLbStatsRequest,
  ZonedApiGetRouteRequest,
  ZonedApiGetSubscriberRequest,
  ZonedApiListAclsRequest,
  ZonedApiListBackendStatsRequest,
  ZonedApiListBackendsRequest,
  ZonedApiListCertificatesRequest,
  ZonedApiListFrontendsRequest,
  ZonedApiListIPsRequest,
  ZonedApiListLbPrivateNetworksRequest,
  ZonedApiListLbTypesRequest,
  ZonedApiListLbsRequest,
  ZonedApiListRoutesRequest,
  ZonedApiListSubscriberRequest,
  ZonedApiMigrateLbRequest,
  ZonedApiReleaseIpRequest,
  ZonedApiRemoveBackendServersRequest,
  ZonedApiSetAclsRequest,
  ZonedApiSetBackendServersRequest,
  ZonedApiSubscribeToLbRequest,
  ZonedApiUnsubscribeFromLbRequest,
  ZonedApiUpdateAclRequest,
  ZonedApiUpdateBackendRequest,
  ZonedApiUpdateCertificateRequest,
  ZonedApiUpdateFrontendRequest,
  ZonedApiUpdateHealthCheckRequest,
  ZonedApiUpdateIpRequest,
  ZonedApiUpdateLbRequest,
  ZonedApiUpdateRouteRequest,
  ZonedApiUpdateSubscriberRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Load Balancer API.

This API allows you to manage your Scaleway Load Balancer services.
 */
export class ZonedAPI extends ParentAPI {
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
        'nl-ams-3',
        'pl-waw-1',
        'pl-waw-2',
        'pl-waw-3',
      ],
    })
  
  protected pageOfListLbs = (request: Readonly<ZonedApiListLbsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListLbsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs`,
        urlParams: urlParams(
          ['lb_ids', request.lbIds],
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
      unmarshalListLbsResponse,
    )
  
  /**
   * List Load Balancers. List all Load Balancers in the specified zone, for a Scaleway Organization or Scaleway Project. By default, the Load Balancers returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ZonedApiListLbsRequest}
   * @returns A Promise of ListLbsResponse
   */
  listLbs = (request: Readonly<ZonedApiListLbsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('lbs', this.pageOfListLbs, request, options)

  
  /**
   * Create a Load Balancer. Create a new Load Balancer. Note that the Load Balancer will be created without frontends or backends; these must be created separately via the dedicated endpoints.
   *
   * @param request - The request {@link ZonedApiCreateLbRequest}
   * @returns A Promise of Lb
   */
  createLb = (request: Readonly<ZonedApiCreateLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  /**
   * Get a Load Balancer. Retrieve information about an existing Load Balancer, specified by its Load Balancer ID. Its full details, including name, status and IP address, are returned in the response object.
   *
   * @param request - The request {@link ZonedApiGetLbRequest}
   * @returns A Promise of Lb
   */
  getLb = (request: Readonly<ZonedApiGetLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}`,
        signal: options?.signal,
      },
      unmarshalLb,
    )
  
  /**
   * Waits for {@link Lb} to be in a final state.
   *
   * @param request - The request {@link ZonedApiGetLbRequest}
   * @param options - The waiting options
   * @returns A Promise of Lb
   */
  waitForLb = (
    request: Readonly<ZonedApiGetLbRequest>,
    options?: Readonly<WaitForOptions<Lb>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!LB_TRANSIENT_STATUSES_LB.includes(res.status))),
      this.getLb,
      request,
      options,
    )

  
  /**
   * Update a Load Balancer. Update the parameters of an existing Load Balancer, specified by its Load Balancer ID. Note that the request type is PUT and not PATCH. You must set all parameters.
   *
   * @param request - The request {@link ZonedApiUpdateLbRequest}
   * @returns A Promise of Lb
   */
  updateLb = (request: Readonly<ZonedApiUpdateLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  /**
   * Delete a Load Balancer. Delete an existing Load Balancer, specified by its Load Balancer ID. Deleting a Load Balancer is permanent, and cannot be undone. The Load Balancer's flexible IP address can either be deleted with the Load Balancer, or kept in your account for future use.
   *
   * @param request - The request {@link ZonedApiDeleteLbRequest}
   */
  deleteLb = (request: Readonly<ZonedApiDeleteLbRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}`,
        urlParams: urlParams(
          ['release_ip', request.releaseIp],
        ),
        signal: options?.signal,
      },
    )

  
  /**
   * Migrate a Load Balancer. Migrate an existing Load Balancer from one commercial type to another. Allows you to scale your Load Balancer up or down in terms of bandwidth or multi-cloud provision.
   *
   * @param request - The request {@link ZonedApiMigrateLbRequest}
   * @returns A Promise of Lb
   */
  migrateLb = (request: Readonly<ZonedApiMigrateLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiMigrateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/migrate`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  protected pageOfListIPs = (request: Readonly<ZonedApiListIPsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
        urlParams: urlParams(
          ['ip_address', request.ipAddress],
          ['ip_type', request.ipType],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListIpsResponse,
    )
  
  /**
   * List IP addresses. List the Load Balancer flexible IP addresses held in the account (filtered by Organization ID or Project ID). It is also possible to search for a specific IP address.
   *
   * @param request - The request {@link ZonedApiListIPsRequest}
   * @returns A Promise of ListIpsResponse
   */
  listIPs = (request: Readonly<ZonedApiListIPsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('ips', this.pageOfListIPs, request, options)

  
  /**
   * Create an IP address. Create a new Load Balancer flexible IP address, in the specified Scaleway Project. This can be attached to new Load Balancers created in the future.
   *
   * @param request - The request {@link ZonedApiCreateIpRequest}
   * @returns A Promise of Ip
   */
  createIp = (request: Readonly<ZonedApiCreateIpRequest>, options?: RequestOptions) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
        signal: options?.signal,
      },
      unmarshalIp,
    )

  
  /**
   * Get an IP address. Retrieve the full details of a Load Balancer flexible IP address.
   *
   * @param request - The request {@link ZonedApiGetIpRequest}
   * @returns A Promise of Ip
   */
  getIp = (request: Readonly<ZonedApiGetIpRequest>, options?: RequestOptions) =>
    this.client.fetch<Ip>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
      unmarshalIp,
    )

  
  /**
   * Delete an IP address. Delete a Load Balancer flexible IP address. This action is irreversible, and cannot be undone.
   *
   * @param request - The request {@link ZonedApiReleaseIpRequest}
   */
  releaseIp = (request: Readonly<ZonedApiReleaseIpRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Update an IP address. Update the reverse DNS of a Load Balancer flexible IP address.
   *
   * @param request - The request {@link ZonedApiUpdateIpRequest}
   * @returns A Promise of Ip
   */
  updateIp = (request: Readonly<ZonedApiUpdateIpRequest>, options?: RequestOptions) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
      unmarshalIp,
    )

  
  protected pageOfListBackends = (request: Readonly<ZonedApiListBackendsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListBackendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListBackendsResponse,
    )
  
  /**
   * List the backends of a given Load Balancer. List all the backends of a Load Balancer, specified by its Load Balancer ID. By default, results are returned in ascending order by the creation date of each backend. The response is an array of backend objects, containing full details of each one including their configuration parameters such as protocol, port and forwarding algorithm.
   *
   * @param request - The request {@link ZonedApiListBackendsRequest}
   * @returns A Promise of ListBackendsResponse
   */
  listBackends = (request: Readonly<ZonedApiListBackendsRequest>, options?: RequestOptions) =>
    enrichForPagination('backends', this.pageOfListBackends, request, options)

  
  /**
   * Create a backend for a given Load Balancer. Create a new backend for a given Load Balancer, specifying its full configuration including protocol, port and forwarding algorithm.
   *
   * @param request - The request {@link ZonedApiCreateBackendRequest}
   * @returns A Promise of Backend
   */
  createBackend = (request: Readonly<ZonedApiCreateBackendRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateBackendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Get a backend of a given Load Balancer. Get the full details of a given backend, specified by its backend ID. The response contains the backend's full configuration parameters including protocol, port and forwarding algorithm.
   *
   * @param request - The request {@link ZonedApiGetBackendRequest}
   * @returns A Promise of Backend
   */
  getBackend = (request: Readonly<ZonedApiGetBackendRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Update a backend of a given Load Balancer. Update a backend of a given Load Balancer, specified by its backend ID. Note that the request type is PUT and not PATCH. You must set all parameters.
   *
   * @param request - The request {@link ZonedApiUpdateBackendRequest}
   * @returns A Promise of Backend
   */
  updateBackend = (request: Readonly<ZonedApiUpdateBackendRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateBackendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Delete a backend of a given Load Balancer. Delete a backend of a given Load Balancer, specified by its backend ID. This action is irreversible and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteBackendRequest}
   */
  deleteBackend = (request: Readonly<ZonedApiDeleteBackendRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Add a set of backend servers to a given backend. For a given backend specified by its backend ID, add a set of backend servers (identified by their IP addresses) it should forward traffic to. These will be appended to any existing set of backend servers for this backend.
   *
   * @param request - The request {@link ZonedApiAddBackendServersRequest}
   * @returns A Promise of Backend
   */
  addBackendServers = (request: Readonly<ZonedApiAddBackendServersRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiAddBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Remove a set of servers for a given backend. For a given backend specified by its backend ID, remove the specified backend servers (identified by their IP addresses) so that it no longer forwards traffic to them.
   *
   * @param request - The request {@link ZonedApiRemoveBackendServersRequest}
   * @returns A Promise of Backend
   */
  removeBackendServers = (request: Readonly<ZonedApiRemoveBackendServersRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiRemoveBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Define all backend servers for a given backend. For a given backend specified by its backend ID, define the set of backend servers (identified by their IP addresses) that it should forward traffic to. Any existing backend servers configured for this backend will be removed.
   *
   * @param request - The request {@link ZonedApiSetBackendServersRequest}
   * @returns A Promise of Backend
   */
  setBackendServers = (request: Readonly<ZonedApiSetBackendServersRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiSetBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Update a health check for a given backend. Update the configuration of the health check performed by a given backend to verify the health of its backend servers, identified by its backend ID. Note that the request type is PUT and not PATCH. You must set all parameters.
   *
   * @param request - The request {@link ZonedApiUpdateHealthCheckRequest}
   * @returns A Promise of HealthCheck
   */
  updateHealthCheck = (request: Readonly<ZonedApiUpdateHealthCheckRequest>, options?: RequestOptions) =>
    this.client.fetch<HealthCheck>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateHealthCheckRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}/healthcheck`,
        signal: options?.signal,
      },
      unmarshalHealthCheck,
    )

  
  protected pageOfListFrontends = (request: Readonly<ZonedApiListFrontendsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListFrontendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListFrontendsResponse,
    )
  
  /**
   * List frontends of a given Load Balancer. List all the frontends of a Load Balancer, specified by its Load Balancer ID. By default, results are returned in ascending order by the creation date of each frontend. The response is an array of frontend objects, containing full details of each one including the port they listen on and the backend they are attached to.
   *
   * @param request - The request {@link ZonedApiListFrontendsRequest}
   * @returns A Promise of ListFrontendsResponse
   */
  listFrontends = (request: Readonly<ZonedApiListFrontendsRequest>, options?: RequestOptions) =>
    enrichForPagination('frontends', this.pageOfListFrontends, request, options)

  
  /**
   * Create a frontend in a given Load Balancer. Create a new frontend for a given Load Balancer, specifying its configuration including the port it should listen on and the backend to attach it to.
   *
   * @param request - The request {@link ZonedApiCreateFrontendRequest}
   * @returns A Promise of Frontend
   */
  createFrontend = (request: Readonly<ZonedApiCreateFrontendRequest>, options?: RequestOptions) =>
    this.client.fetch<Frontend>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateFrontendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
        signal: options?.signal,
      },
      unmarshalFrontend,
    )

  
  /**
   * Get a frontend. Get the full details of a given frontend, specified by its frontend ID. The response contains the frontend's full configuration parameters including the backend it is attached to, the port it listens on, and any certificates it has.
   *
   * @param request - The request {@link ZonedApiGetFrontendRequest}
   * @returns A Promise of Frontend
   */
  getFrontend = (request: Readonly<ZonedApiGetFrontendRequest>, options?: RequestOptions) =>
    this.client.fetch<Frontend>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
        signal: options?.signal,
      },
      unmarshalFrontend,
    )

  
  /**
   * Update a frontend. Update a given frontend, specified by its frontend ID. You can update configuration parameters including its name and the port it listens on. Note that the request type is PUT and not PATCH. You must set all parameters.
   *
   * @param request - The request {@link ZonedApiUpdateFrontendRequest}
   * @returns A Promise of Frontend
   */
  updateFrontend = (request: Readonly<ZonedApiUpdateFrontendRequest>, options?: RequestOptions) =>
    this.client.fetch<Frontend>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateFrontendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
        signal: options?.signal,
      },
      unmarshalFrontend,
    )

  
  /**
   * Delete a frontend. Delete a given frontend, specified by its frontend ID. This action is irreversible and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteFrontendRequest}
   */
  deleteFrontend = (request: Readonly<ZonedApiDeleteFrontendRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListRoutes = (request: Readonly<ZonedApiListRoutesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRoutesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes`,
        urlParams: urlParams(
          ['frontend_id', request.frontendId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListRoutesResponse,
    )
  
  /**
   * List all routes. List all routes for a given frontend. The response is an array of routes, each one with a specified backend to direct to if a certain condition is matched (based on the value of the SNI field or HTTP Host header).
   *
   * @param request - The request {@link ZonedApiListRoutesRequest}
   * @returns A Promise of ListRoutesResponse
   */
  listRoutes = (request: Readonly<ZonedApiListRoutesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('routes', this.pageOfListRoutes, request, options)

  
  /**
   * Create a route. Create a new route on a given frontend. To configure a route, specify the backend to direct to if a certain condition is matched (based on the value of the SNI field or HTTP Host header).
   *
   * @param request - The request {@link ZonedApiCreateRouteRequest}
   * @returns A Promise of Route
   */
  createRoute = (request: Readonly<ZonedApiCreateRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Get a route. Retrieve information about an existing route, specified by its route ID. Its full details, origin frontend, target backend and match condition, are returned in the response object.
   *
   * @param request - The request {@link ZonedApiGetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<ZonedApiGetRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Update a route. Update the configuration of an existing route, specified by its route ID.
   *
   * @param request - The request {@link ZonedApiUpdateRouteRequest}
   * @returns A Promise of Route
   */
  updateRoute = (request: Readonly<ZonedApiUpdateRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Delete a route. Delete an existing route, specified by its route ID. Deleting a route is permanent, and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<ZonedApiDeleteRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get usage statistics of a given Load Balancer.
   *
   * @deprecated
   * @param request - The request {@link ZonedApiGetLbStatsRequest}
   * @returns A Promise of LbStats
   */
  getLbStats = (request: Readonly<ZonedApiGetLbStatsRequest>, options?: RequestOptions) =>
    this.client.fetch<LbStats>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/stats`,
        urlParams: urlParams(
          ['backend_id', request.backendId],
        ),
        signal: options?.signal,
      },
      unmarshalLbStats,
    )

  
  protected pageOfListBackendStats = (request: Readonly<ZonedApiListBackendStatsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListBackendStatsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/backend-stats`,
        urlParams: urlParams(
          ['backend_id', request.backendId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListBackendStatsResponse,
    )
  
  /**
   * List backend server statistics. List information about your backend servers, including their state and the result of their last health check.
   *
   * @param request - The request {@link ZonedApiListBackendStatsRequest}
   * @returns A Promise of ListBackendStatsResponse
   */
  listBackendStats = (request: Readonly<ZonedApiListBackendStatsRequest>, options?: RequestOptions) =>
    enrichForPagination('backendServersStats', this.pageOfListBackendStats, request, options)

  
  protected pageOfListAcls = (request: Readonly<ZonedApiListAclsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListAclResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListAclResponse,
    )
  
  /**
   * List ACLs for a given frontend. List the ACLs for a given frontend, specified by its frontend ID. The response is an array of ACL objects, each one representing an ACL that denies or allows traffic based on certain conditions.
   *
   * @param request - The request {@link ZonedApiListAclsRequest}
   * @returns A Promise of ListAclResponse
   */
  listAcls = (request: Readonly<ZonedApiListAclsRequest>, options?: RequestOptions) =>
    enrichForPagination('acls', this.pageOfListAcls, request, options)

  
  /**
   * Create an ACL for a given frontend. Create a new ACL for a given frontend. Each ACL must have a name, an action to perform (allow or deny), and a match rule (the action is carried out when the incoming traffic matches the rule).
   *
   * @param request - The request {@link ZonedApiCreateAclRequest}
   * @returns A Promise of Acl
   */
  createAcl = (request: Readonly<ZonedApiCreateAclRequest>, options?: RequestOptions) =>
    this.client.fetch<Acl>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
        signal: options?.signal,
      },
      unmarshalAcl,
    )

  
  /**
   * Get an ACL. Get information for a particular ACL, specified by its ACL ID. The response returns full details of the ACL, including its name, action, match rule and frontend.
   *
   * @param request - The request {@link ZonedApiGetAclRequest}
   * @returns A Promise of Acl
   */
  getAcl = (request: Readonly<ZonedApiGetAclRequest>, options?: RequestOptions) =>
    this.client.fetch<Acl>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/acls/${validatePathParam('aclId', request.aclId)}`,
        signal: options?.signal,
      },
      unmarshalAcl,
    )

  
  /**
   * Update an ACL. Update a particular ACL, specified by its ACL ID. You can update details including its name, action and match rule.
   *
   * @param request - The request {@link ZonedApiUpdateAclRequest}
   * @returns A Promise of Acl
   */
  updateAcl = (request: Readonly<ZonedApiUpdateAclRequest>, options?: RequestOptions) =>
    this.client.fetch<Acl>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/acls/${validatePathParam('aclId', request.aclId)}`,
        signal: options?.signal,
      },
      unmarshalAcl,
    )

  
  /**
   * Delete an ACL. Delete an ACL, specified by its ACL ID. Deleting an ACL is irreversible and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteAclRequest}
   */
  deleteAcl = (request: Readonly<ZonedApiDeleteAclRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/acls/${validatePathParam('aclId', request.aclId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Define all ACLs for a given frontend. For a given frontend specified by its frontend ID, define and add the complete set of ACLS for that frontend. Any existing ACLs on this frontend will be removed.
   *
   * @param request - The request {@link ZonedApiSetAclsRequest}
   * @returns A Promise of SetAclsResponse
   */
  setAcls = (request: Readonly<ZonedApiSetAclsRequest>, options?: RequestOptions) =>
    this.client.fetch<SetAclsResponse>(
      {
        body: JSON.stringify(
          marshalZonedApiSetAclsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
        signal: options?.signal,
      },
      unmarshalSetAclsResponse,
    )

  
  /**
   * Create an SSL/TLS certificate. Generate a new SSL/TLS certificate for a given Load Balancer. You can choose to create a Let's Encrypt certificate, or import a custom certificate.
   *
   * @param request - The request {@link ZonedApiCreateCertificateRequest}
   * @returns A Promise of Certificate
   */
  createCertificate = (request: Readonly<ZonedApiCreateCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
        signal: options?.signal,
      },
      unmarshalCertificate,
    )

  
  protected pageOfListCertificates = (request: Readonly<ZonedApiListCertificatesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListCertificatesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListCertificatesResponse,
    )
  
  /**
   * List all SSL/TLS certificates on a given Load Balancer. List all the SSL/TLS certificates on a given Load Balancer. The response is an array of certificate objects, which are by default listed in ascending order of creation date.
   *
   * @param request - The request {@link ZonedApiListCertificatesRequest}
   * @returns A Promise of ListCertificatesResponse
   */
  listCertificates = (request: Readonly<ZonedApiListCertificatesRequest>, options?: RequestOptions) =>
    enrichForPagination('certificates', this.pageOfListCertificates, request, options)

  
  /**
   * Get an SSL/TLS certificate. Get information for a particular SSL/TLS certificate, specified by its certificate ID. The response returns full details of the certificate, including its type, main domain name, and alternative domain names.
   *
   * @param request - The request {@link ZonedApiGetCertificateRequest}
   * @returns A Promise of Certificate
   */
  getCertificate = (request: Readonly<ZonedApiGetCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<Certificate>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
        signal: options?.signal,
      },
      unmarshalCertificate,
    )
  
  /**
   * Waits for {@link Certificate} to be in a final state.
   *
   * @param request - The request {@link ZonedApiGetCertificateRequest}
   * @param options - The waiting options
   * @returns A Promise of Certificate
   */
  waitForCertificate = (
    request: Readonly<ZonedApiGetCertificateRequest>,
    options?: Readonly<WaitForOptions<Certificate>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!CERTIFICATE_TRANSIENT_STATUSES_LB.includes(res.status))),
      this.getCertificate,
      request,
      options,
    )

  
  /**
   * Update an SSL/TLS certificate. Update the name of a particular SSL/TLS certificate, specified by its certificate ID.
   *
   * @param request - The request {@link ZonedApiUpdateCertificateRequest}
   * @returns A Promise of Certificate
   */
  updateCertificate = (request: Readonly<ZonedApiUpdateCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
        signal: options?.signal,
      },
      unmarshalCertificate,
    )

  
  /**
   * Delete an SSL/TLS certificate. Delete an SSL/TLS certificate, specified by its certificate ID. Deleting a certificate is irreversible and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteCertificateRequest}
   */
  deleteCertificate = (request: Readonly<ZonedApiDeleteCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListLbTypes = (request: Readonly<ZonedApiListLbTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListLbTypesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lb-types`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListLbTypesResponse,
    )
  
  /**
   * List all Load Balancer offer types. List all the different commercial Load Balancer types. The response includes an array of offer types, each with a name, description, and information about its stock availability.
   *
   * @param request - The request {@link ZonedApiListLbTypesRequest}
   * @returns A Promise of ListLbTypesResponse
   */
  listLbTypes = (request: Readonly<ZonedApiListLbTypesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('lbTypes', this.pageOfListLbTypes, request, options)

  
  /**
   * Create a subscriber. Create a new subscriber, either with an email configuration or a webhook configuration, for a specified Scaleway Project.
   *
   * @param request - The request {@link ZonedApiCreateSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  createSubscriber = (request: Readonly<ZonedApiCreateSubscriberRequest>, options?: RequestOptions) =>
    this.client.fetch<Subscriber>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateSubscriberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/subscribers`,
        signal: options?.signal,
      },
      unmarshalSubscriber,
    )

  
  /**
   * Get a subscriber. Retrieve information about an existing subscriber, specified by its subscriber ID. Its full details, including name and email/webhook configuration, are returned in the response object.
   *
   * @param request - The request {@link ZonedApiGetSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  getSubscriber = (request: Readonly<ZonedApiGetSubscriberRequest>, options?: RequestOptions) =>
    this.client.fetch<Subscriber>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/subscribers/${validatePathParam('subscriberId', request.subscriberId)}`,
        signal: options?.signal,
      },
      unmarshalSubscriber,
    )

  
  protected pageOfListSubscriber = (request: Readonly<ZonedApiListSubscriberRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSubscriberResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/subscribers`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListSubscriberResponse,
    )
  
  /**
   * List all subscribers. List all subscribers to Load Balancer alerts. By default, returns all subscribers to Load Balancer alerts for the Organization associated with the authentication token used for the request.
   *
   * @param request - The request {@link ZonedApiListSubscriberRequest}
   * @returns A Promise of ListSubscriberResponse
   */
  listSubscriber = (request: Readonly<ZonedApiListSubscriberRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('subscribers', this.pageOfListSubscriber, request, options)

  
  /**
   * Update a subscriber. Update the parameters of a given subscriber (e.g. name, webhook configuration, email configuration), specified by its subscriber ID.
   *
   * @param request - The request {@link ZonedApiUpdateSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  updateSubscriber = (request: Readonly<ZonedApiUpdateSubscriberRequest>, options?: RequestOptions) =>
    this.client.fetch<Subscriber>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateSubscriberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/subscribers/${validatePathParam('subscriberId', request.subscriberId)}`,
        signal: options?.signal,
      },
      unmarshalSubscriber,
    )

  
  /**
   * Delete a subscriber. Delete an existing subscriber, specified by its subscriber ID. Deleting a subscriber is permanent, and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteSubscriberRequest}
   */
  deleteSubscriber = (request: Readonly<ZonedApiDeleteSubscriberRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lb/subscription/${validatePathParam('subscriberId', request.subscriberId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Subscribe a subscriber to alerts for a given Load Balancer. Subscribe an existing subscriber to alerts for a given Load Balancer.
   *
   * @param request - The request {@link ZonedApiSubscribeToLbRequest}
   * @returns A Promise of Lb
   */
  subscribeToLb = (request: Readonly<ZonedApiSubscribeToLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiSubscribeToLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lb/${validatePathParam('lbId', request.lbId)}/subscribe`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  /**
   * Unsubscribe a subscriber from alerts for a given Load Balancer. Unsubscribe a subscriber from alerts for a given Load Balancer. The subscriber is not deleted, and can be resubscribed in the future if necessary.
   *
   * @param request - The request {@link ZonedApiUnsubscribeFromLbRequest}
   * @returns A Promise of Lb
   */
  unsubscribeFromLb = (request: Readonly<ZonedApiUnsubscribeFromLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lb/${validatePathParam('lbId', request.lbId)}/unsubscribe`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  protected pageOfListLbPrivateNetworks = (request: Readonly<ZonedApiListLbPrivateNetworksRequest>, options?: RequestOptions) =>
    this.client.fetch<ListLbPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListLbPrivateNetworksResponse,
    )
  
  /**
   * List Private Networks attached to a Load Balancer. List the Private Networks attached to a given Load Balancer, specified by its Load Balancer ID. The response is an array of Private Network objects, giving information including the status, configuration, name and creation date of each Private Network.
   *
   * @param request - The request {@link ZonedApiListLbPrivateNetworksRequest}
   * @returns A Promise of ListLbPrivateNetworksResponse
   */
  listLbPrivateNetworks = (request: Readonly<ZonedApiListLbPrivateNetworksRequest>, options?: RequestOptions) =>
    enrichForPagination('privateNetwork', this.pageOfListLbPrivateNetworks, request, options)

  
  /**
   * Attach a Load Balancer to a Private Network. Attach a specified Load Balancer to a specified Private Network, defining a static or DHCP configuration for the Load Balancer on the network.
   *
   * @param request - The request {@link ZonedApiAttachPrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  attachPrivateNetwork = (request: Readonly<ZonedApiAttachPrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalZonedApiAttachPrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/attach-private-network`,
        signal: options?.signal,
      },
      unmarshalPrivateNetwork,
    )

  
  /**
   * Detach Load Balancer from Private Network. Detach a specified Load Balancer from a specified Private Network.
   *
   * @param request - The request {@link ZonedApiDetachPrivateNetworkRequest}
   */
  detachPrivateNetwork = (request: Readonly<ZonedApiDetachPrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalZonedApiDetachPrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/detach-private-network`,
        signal: options?.signal,
      },
    )

  
}

/**
 * Load balancer API.

This API allows you to manage your Load Balancers.
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
        'nl-ams',
        'pl-waw',
      ],
    })
  
  protected pageOfListLbs = (request: Readonly<ListLbsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListLbsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs`,
        urlParams: urlParams(
          ['lb_ids', request.lbIds],
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
      unmarshalListLbsResponse,
    )
  
  /**
   * List load balancers.
   *
   * @param request - The request {@link ListLbsRequest}
   * @returns A Promise of ListLbsResponse
   */
  listLbs = (request: Readonly<ListLbsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('lbs', this.pageOfListLbs, request, options)

  
  /**
   * Create a load balancer.
   *
   * @param request - The request {@link CreateLbRequest}
   * @returns A Promise of Lb
   */
  createLb = (request: Readonly<CreateLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalCreateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  /**
   * Get a load balancer.
   *
   * @param request - The request {@link GetLbRequest}
   * @returns A Promise of Lb
   */
  getLb = (request: Readonly<GetLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}`,
        signal: options?.signal,
      },
      unmarshalLb,
    )
  
  /**
   * Waits for {@link Lb} to be in a final state.
   *
   * @param request - The request {@link GetLbRequest}
   * @param options - The waiting options
   * @returns A Promise of Lb
   */
  waitForLb = (
    request: Readonly<GetLbRequest>,
    options?: Readonly<WaitForOptions<Lb>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!LB_TRANSIENT_STATUSES_LB.includes(res.status))),
      this.getLb,
      request,
      options,
    )

  
  /**
   * Update a load balancer.
   *
   * @param request - The request {@link UpdateLbRequest}
   * @returns A Promise of Lb
   */
  updateLb = (request: Readonly<UpdateLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalUpdateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  /**
   * Delete a load balancer.
   *
   * @param request - The request {@link DeleteLbRequest}
   */
  deleteLb = (request: Readonly<DeleteLbRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}`,
        urlParams: urlParams(
          ['release_ip', request.releaseIp],
        ),
        signal: options?.signal,
      },
    )

  
  /**
   * Migrate a load balancer.
   *
   * @param request - The request {@link MigrateLbRequest}
   * @returns A Promise of Lb
   */
  migrateLb = (request: Readonly<MigrateLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalMigrateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/migrate`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  protected pageOfListIPs = (request: Readonly<ListIPsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips`,
        urlParams: urlParams(
          ['ip_address', request.ipAddress],
          ['ip_type', request.ipType],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListIpsResponse,
    )
  
  /**
   * List IPs.
   *
   * @param request - The request {@link ListIPsRequest}
   * @returns A Promise of ListIpsResponse
   */
  listIPs = (request: Readonly<ListIPsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('ips', this.pageOfListIPs, request, options)

  
  /**
   * Create an IP.
   *
   * @param request - The request {@link CreateIpRequest}
   * @returns A Promise of Ip
   */
  createIp = (request: Readonly<CreateIpRequest>, options?: RequestOptions) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalCreateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips`,
        signal: options?.signal,
      },
      unmarshalIp,
    )

  
  /**
   * Get an IP.
   *
   * @param request - The request {@link GetIpRequest}
   * @returns A Promise of Ip
   */
  getIp = (request: Readonly<GetIpRequest>, options?: RequestOptions) =>
    this.client.fetch<Ip>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
      unmarshalIp,
    )

  
  /**
   * Delete an IP.
   *
   * @param request - The request {@link ReleaseIpRequest}
   */
  releaseIp = (request: Readonly<ReleaseIpRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Update an IP.
   *
   * @param request - The request {@link UpdateIpRequest}
   * @returns A Promise of Ip
   */
  updateIp = (request: Readonly<UpdateIpRequest>, options?: RequestOptions) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalUpdateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
      unmarshalIp,
    )

  
  protected pageOfListBackends = (request: Readonly<ListBackendsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListBackendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListBackendsResponse,
    )
  
  /**
   * List backends in a given load balancer.
   *
   * @param request - The request {@link ListBackendsRequest}
   * @returns A Promise of ListBackendsResponse
   */
  listBackends = (request: Readonly<ListBackendsRequest>, options?: RequestOptions) =>
    enrichForPagination('backends', this.pageOfListBackends, request, options)

  
  /**
   * Create a backend in a given load balancer.
   *
   * @param request - The request {@link CreateBackendRequest}
   * @returns A Promise of Backend
   */
  createBackend = (request: Readonly<CreateBackendRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalCreateBackendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Get a backend in a given load balancer.
   *
   * @param request - The request {@link GetBackendRequest}
   * @returns A Promise of Backend
   */
  getBackend = (request: Readonly<GetBackendRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Update a backend in a given load balancer.
   *
   * @param request - The request {@link UpdateBackendRequest}
   * @returns A Promise of Backend
   */
  updateBackend = (request: Readonly<UpdateBackendRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalUpdateBackendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Delete a backend in a given load balancer.
   *
   * @param request - The request {@link DeleteBackendRequest}
   */
  deleteBackend = (request: Readonly<DeleteBackendRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Add a set of servers in a given backend.
   *
   * @param request - The request {@link AddBackendServersRequest}
   * @returns A Promise of Backend
   */
  addBackendServers = (request: Readonly<AddBackendServersRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalAddBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Remove a set of servers for a given backend.
   *
   * @param request - The request {@link RemoveBackendServersRequest}
   * @returns A Promise of Backend
   */
  removeBackendServers = (request: Readonly<RemoveBackendServersRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalRemoveBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Define all servers in a given backend.
   *
   * @param request - The request {@link SetBackendServersRequest}
   * @returns A Promise of Backend
   */
  setBackendServers = (request: Readonly<SetBackendServersRequest>, options?: RequestOptions) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalSetBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
        signal: options?.signal,
      },
      unmarshalBackend,
    )

  
  /**
   * Update an health check for a given backend.
   *
   * @param request - The request {@link UpdateHealthCheckRequest}
   * @returns A Promise of HealthCheck
   */
  updateHealthCheck = (request: Readonly<UpdateHealthCheckRequest>, options?: RequestOptions) =>
    this.client.fetch<HealthCheck>(
      {
        body: JSON.stringify(
          marshalUpdateHealthCheckRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}/healthcheck`,
        signal: options?.signal,
      },
      unmarshalHealthCheck,
    )

  
  protected pageOfListFrontends = (request: Readonly<ListFrontendsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListFrontendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListFrontendsResponse,
    )
  
  /**
   * List frontends in a given load balancer.
   *
   * @param request - The request {@link ListFrontendsRequest}
   * @returns A Promise of ListFrontendsResponse
   */
  listFrontends = (request: Readonly<ListFrontendsRequest>, options?: RequestOptions) =>
    enrichForPagination('frontends', this.pageOfListFrontends, request, options)

  
  /**
   * Create a frontend in a given load balancer.
   *
   * @param request - The request {@link CreateFrontendRequest}
   * @returns A Promise of Frontend
   */
  createFrontend = (request: Readonly<CreateFrontendRequest>, options?: RequestOptions) =>
    this.client.fetch<Frontend>(
      {
        body: JSON.stringify(
          marshalCreateFrontendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
        signal: options?.signal,
      },
      unmarshalFrontend,
    )

  
  /**
   * Get a frontend.
   *
   * @param request - The request {@link GetFrontendRequest}
   * @returns A Promise of Frontend
   */
  getFrontend = (request: Readonly<GetFrontendRequest>, options?: RequestOptions) =>
    this.client.fetch<Frontend>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
        signal: options?.signal,
      },
      unmarshalFrontend,
    )

  
  /**
   * Update a frontend.
   *
   * @param request - The request {@link UpdateFrontendRequest}
   * @returns A Promise of Frontend
   */
  updateFrontend = (request: Readonly<UpdateFrontendRequest>, options?: RequestOptions) =>
    this.client.fetch<Frontend>(
      {
        body: JSON.stringify(
          marshalUpdateFrontendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
        signal: options?.signal,
      },
      unmarshalFrontend,
    )

  
  /**
   * Delete a frontend.
   *
   * @param request - The request {@link DeleteFrontendRequest}
   */
  deleteFrontend = (request: Readonly<DeleteFrontendRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListRoutes = (request: Readonly<ListRoutesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRoutesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes`,
        urlParams: urlParams(
          ['frontend_id', request.frontendId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListRoutesResponse,
    )
  
  /**
   * List all backend redirections.
   *
   * @param request - The request {@link ListRoutesRequest}
   * @returns A Promise of ListRoutesResponse
   */
  listRoutes = (request: Readonly<ListRoutesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('routes', this.pageOfListRoutes, request, options)

  
  /**
   * Create a backend redirection.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Get single backend redirection.
   *
   * @param request - The request {@link GetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<GetRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Edit a backend redirection.
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
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Delete a backend redirection.
   *
   * @param request - The request {@link DeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<DeleteRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get usage statistics of a given load balancer.
   *
   * @deprecated
   * @param request - The request {@link GetLbStatsRequest}
   * @returns A Promise of LbStats
   */
  getLbStats = (request: Readonly<GetLbStatsRequest>, options?: RequestOptions) =>
    this.client.fetch<LbStats>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/stats`,
        urlParams: urlParams(
          ['backend_id', request.backendId],
        ),
        signal: options?.signal,
      },
      unmarshalLbStats,
    )

  
  protected pageOfListBackendStats = (request: Readonly<ListBackendStatsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListBackendStatsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/backend-stats`,
        urlParams: urlParams(
          ['backend_id', request.backendId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListBackendStatsResponse,
    )
  
  /**
   * List backend server statistics.
   *
   * @param request - The request {@link ListBackendStatsRequest}
   * @returns A Promise of ListBackendStatsResponse
   */
  listBackendStats = (request: Readonly<ListBackendStatsRequest>, options?: RequestOptions) =>
    enrichForPagination('backendServersStats', this.pageOfListBackendStats, request, options)

  
  protected pageOfListAcls = (request: Readonly<ListAclsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListAclResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListAclResponse,
    )
  
  /**
   * List ACL for a given frontend.
   *
   * @param request - The request {@link ListAclsRequest}
   * @returns A Promise of ListAclResponse
   */
  listAcls = (request: Readonly<ListAclsRequest>, options?: RequestOptions) =>
    enrichForPagination('acls', this.pageOfListAcls, request, options)

  
  /**
   * Create an ACL for a given frontend.
   *
   * @param request - The request {@link CreateAclRequest}
   * @returns A Promise of Acl
   */
  createAcl = (request: Readonly<CreateAclRequest>, options?: RequestOptions) =>
    this.client.fetch<Acl>(
      {
        body: JSON.stringify(
          marshalCreateAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
        signal: options?.signal,
      },
      unmarshalAcl,
    )

  
  /**
   * Get an ACL.
   *
   * @param request - The request {@link GetAclRequest}
   * @returns A Promise of Acl
   */
  getAcl = (request: Readonly<GetAclRequest>, options?: RequestOptions) =>
    this.client.fetch<Acl>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
        signal: options?.signal,
      },
      unmarshalAcl,
    )

  
  /**
   * Update an ACL.
   *
   * @param request - The request {@link UpdateAclRequest}
   * @returns A Promise of Acl
   */
  updateAcl = (request: Readonly<UpdateAclRequest>, options?: RequestOptions) =>
    this.client.fetch<Acl>(
      {
        body: JSON.stringify(
          marshalUpdateAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
        signal: options?.signal,
      },
      unmarshalAcl,
    )

  
  /**
   * Delete an ACL.
   *
   * @param request - The request {@link DeleteAclRequest}
   */
  deleteAcl = (request: Readonly<DeleteAclRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Create a TLS certificate. Generate a new TLS certificate using Let's Encrypt or import your certificate.
   *
   * @param request - The request {@link CreateCertificateRequest}
   * @returns A Promise of Certificate
   */
  createCertificate = (request: Readonly<CreateCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalCreateCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
        signal: options?.signal,
      },
      unmarshalCertificate,
    )

  
  protected pageOfListCertificates = (request: Readonly<ListCertificatesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListCertificatesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListCertificatesResponse,
    )
  
  /**
   * List all TLS certificates on a given load balancer.
   *
   * @param request - The request {@link ListCertificatesRequest}
   * @returns A Promise of ListCertificatesResponse
   */
  listCertificates = (request: Readonly<ListCertificatesRequest>, options?: RequestOptions) =>
    enrichForPagination('certificates', this.pageOfListCertificates, request, options)

  
  /**
   * Get a TLS certificate.
   *
   * @param request - The request {@link GetCertificateRequest}
   * @returns A Promise of Certificate
   */
  getCertificate = (request: Readonly<GetCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<Certificate>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
        signal: options?.signal,
      },
      unmarshalCertificate,
    )
  
  /**
   * Waits for {@link Certificate} to be in a final state.
   *
   * @param request - The request {@link GetCertificateRequest}
   * @param options - The waiting options
   * @returns A Promise of Certificate
   */
  waitForCertificate = (
    request: Readonly<GetCertificateRequest>,
    options?: Readonly<WaitForOptions<Certificate>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!CERTIFICATE_TRANSIENT_STATUSES_LB.includes(res.status))),
      this.getCertificate,
      request,
      options,
    )

  
  /**
   * Update a TLS certificate.
   *
   * @param request - The request {@link UpdateCertificateRequest}
   * @returns A Promise of Certificate
   */
  updateCertificate = (request: Readonly<UpdateCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalUpdateCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
        signal: options?.signal,
      },
      unmarshalCertificate,
    )

  
  /**
   * Delete a TLS certificate.
   *
   * @param request - The request {@link DeleteCertificateRequest}
   */
  deleteCertificate = (request: Readonly<DeleteCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListLbTypes = (request: Readonly<ListLbTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListLbTypesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lb-types`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListLbTypesResponse,
    )
  
  /**
   * List all load balancer offer type.
   *
   * @param request - The request {@link ListLbTypesRequest}
   * @returns A Promise of ListLbTypesResponse
   */
  listLbTypes = (request: Readonly<ListLbTypesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('lbTypes', this.pageOfListLbTypes, request, options)

  
  /**
   * Create a subscriber, webhook or email.
   *
   * @param request - The request {@link CreateSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  createSubscriber = (request: Readonly<CreateSubscriberRequest>, options?: RequestOptions) =>
    this.client.fetch<Subscriber>(
      {
        body: JSON.stringify(
          marshalCreateSubscriberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subscribers`,
        signal: options?.signal,
      },
      unmarshalSubscriber,
    )

  
  /**
   * Get a subscriber.
   *
   * @param request - The request {@link GetSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  getSubscriber = (request: Readonly<GetSubscriberRequest>, options?: RequestOptions) =>
    this.client.fetch<Subscriber>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subscribers/${validatePathParam('subscriberId', request.subscriberId)}`,
        signal: options?.signal,
      },
      unmarshalSubscriber,
    )

  
  protected pageOfListSubscriber = (request: Readonly<ListSubscriberRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSubscriberResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subscribers`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListSubscriberResponse,
    )
  
  /**
   * List all subscriber.
   *
   * @param request - The request {@link ListSubscriberRequest}
   * @returns A Promise of ListSubscriberResponse
   */
  listSubscriber = (request: Readonly<ListSubscriberRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('subscribers', this.pageOfListSubscriber, request, options)

  
  /**
   * Update a subscriber.
   *
   * @param request - The request {@link UpdateSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  updateSubscriber = (request: Readonly<UpdateSubscriberRequest>, options?: RequestOptions) =>
    this.client.fetch<Subscriber>(
      {
        body: JSON.stringify(
          marshalUpdateSubscriberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subscribers/${validatePathParam('subscriberId', request.subscriberId)}`,
        signal: options?.signal,
      },
      unmarshalSubscriber,
    )

  
  /**
   * Delete a subscriber.
   *
   * @param request - The request {@link DeleteSubscriberRequest}
   */
  deleteSubscriber = (request: Readonly<DeleteSubscriberRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lb/subscriber/${validatePathParam('subscriberId', request.subscriberId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Subscribe a subscriber to a given load balancer.
   *
   * @param request - The request {@link SubscribeToLbRequest}
   * @returns A Promise of Lb
   */
  subscribeToLb = (request: Readonly<SubscribeToLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalSubscribeToLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lb/${validatePathParam('lbId', request.lbId)}/subscribe`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  /**
   * Unsubscribe a subscriber from a given load balancer.
   *
   * @param request - The request {@link UnsubscribeFromLbRequest}
   * @returns A Promise of Lb
   */
  unsubscribeFromLb = (request: Readonly<UnsubscribeFromLbRequest>, options?: RequestOptions) =>
    this.client.fetch<Lb>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lb/${validatePathParam('lbId', request.lbId)}/unsubscribe`,
        signal: options?.signal,
      },
      unmarshalLb,
    )

  
  protected pageOfListLbPrivateNetworks = (request: Readonly<ListLbPrivateNetworksRequest>, options?: RequestOptions) =>
    this.client.fetch<ListLbPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListLbPrivateNetworksResponse,
    )
  
  /**
   * List attached private network of load balancer.
   *
   * @param request - The request {@link ListLbPrivateNetworksRequest}
   * @returns A Promise of ListLbPrivateNetworksResponse
   */
  listLbPrivateNetworks = (request: Readonly<ListLbPrivateNetworksRequest>, options?: RequestOptions) =>
    enrichForPagination('privateNetwork', this.pageOfListLbPrivateNetworks, request, options)

  
  /**
   * Add load balancer on instance private network.
   *
   * @param request - The request {@link AttachPrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  attachPrivateNetwork = (request: Readonly<AttachPrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalAttachPrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}/attach`,
        signal: options?.signal,
      },
      unmarshalPrivateNetwork,
    )

  
  /**
   * Remove load balancer of private network.
   *
   * @param request - The request {@link DetachPrivateNetworkRequest}
   */
  detachPrivateNetwork = (request: Readonly<DetachPrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}/detach`,
        signal: options?.signal,
      },
    )

  
}

