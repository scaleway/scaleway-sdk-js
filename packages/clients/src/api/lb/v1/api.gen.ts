// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, WaitForOptions, Zone } from '../../../bridge'
import {
  CERTIFICATE_TRANSIENT_STATUSES,
  LB_TRANSIENT_STATUSES,
} from './content.gen'
import {
  marshalAddBackendServersRequest,
  marshalAttachPrivateNetworkRequest,
  marshalCreateAclRequest,
  marshalCreateBackendRequest,
  marshalCreateCertificateRequest,
  marshalCreateFrontendRequest,
  marshalCreateIpRequest,
  marshalCreateLbRequest,
  marshalCreateRouteRequest,
  marshalCreateSubscriberRequest,
  marshalMigrateLbRequest,
  marshalRemoveBackendServersRequest,
  marshalSetBackendServersRequest,
  marshalSubscribeToLbRequest,
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
  unmarshalAcl,
  unmarshalBackend,
  unmarshalCertificate,
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
  unmarshalPrivateNetwork,
  unmarshalRoute,
  unmarshalSetAclsResponse,
  unmarshalSubscriber,
} from './marshalling.gen'
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
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Load balancer API.
 *
 * This API allows you to manage your load balancer service.
 */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  protected pageOfListLbs = (request: Readonly<ListLbsRequest> = {}) =>
    this.client.fetch<ListLbsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs`,
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
        ),
      },
      unmarshalListLbsResponse,
    )

  /**
   * List load balancers
   *
   * @param request - The request {@link ListLbsRequest}
   * @returns A Promise of ListLbsResponse
   */
  listLbs = (request: Readonly<ListLbsRequest> = {}) =>
    enrichForPagination('lbs', this.pageOfListLbs, request)

  /**
   * Create a load balancer
   *
   * @param request - The request {@link CreateLbRequest}
   * @returns A Promise of Lb
   */
  createLb = (request: Readonly<CreateLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalCreateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs`,
      },
      unmarshalLb,
    )

  /**
   * Get a load balancer
   *
   * @param request - The request {@link GetLbRequest}
   * @returns A Promise of Lb
   */
  getLb = (request: Readonly<GetLbRequest>) =>
    this.client.fetch<Lb>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}`,
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
      options?.stop ??
        (res => Promise.resolve(!LB_TRANSIENT_STATUSES.includes(res.status))),
      this.getLb,
      request,
      options,
    )

  /**
   * Update a load balancer
   *
   * @param request - The request {@link UpdateLbRequest}
   * @returns A Promise of Lb
   */
  updateLb = (request: Readonly<UpdateLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalUpdateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}`,
      },
      unmarshalLb,
    )

  /**
   * Delete a load balancer
   *
   * @param request - The request {@link DeleteLbRequest}
   */
  deleteLb = (request: Readonly<DeleteLbRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/lbs/${validatePathParam('lbId', request.lbId)}`,
      urlParams: urlParams(['release_ip', request.releaseIp]),
    })

  /**
   * Migrate a load balancer
   *
   * @param request - The request {@link MigrateLbRequest}
   * @returns A Promise of Lb
   */
  migrateLb = (request: Readonly<MigrateLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalMigrateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/migrate`,
      },
      unmarshalLb,
    )

  protected pageOfListIPs = (request: Readonly<ListIPsRequest> = {}) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/ips`,
        urlParams: urlParams(
          ['ip_address', request.ipAddress],
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
        ),
      },
      unmarshalListIpsResponse,
    )

  /**
   * List IPs
   *
   * @param request - The request {@link ListIPsRequest}
   * @returns A Promise of ListIpsResponse
   */
  listIPs = (request: Readonly<ListIPsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIPs, request)

  /**
   * Create an IP
   *
   * @param request - The request {@link CreateIpRequest}
   * @returns A Promise of Ip
   */
  createIp = (request: Readonly<CreateIpRequest> = {}) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalCreateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/ips`,
      },
      unmarshalIp,
    )

  /**
   * Get an IP
   *
   * @param request - The request {@link GetIpRequest}
   * @returns A Promise of Ip
   */
  getIp = (request: Readonly<GetIpRequest>) =>
    this.client.fetch<Ip>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIp,
    )

  /**
   * Delete an IP
   *
   * @param request - The request {@link ReleaseIpRequest}
   */
  releaseIp = (request: Readonly<ReleaseIpRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/ips/${validatePathParam('ipId', request.ipId)}`,
    })

  /**
   * Update an IP
   *
   * @param request - The request {@link UpdateIpRequest}
   * @returns A Promise of Ip
   */
  updateIp = (request: Readonly<UpdateIpRequest>) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalUpdateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIp,
    )

  protected pageOfListBackends = (request: Readonly<ListBackendsRequest>) =>
    this.client.fetch<ListBackendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListBackendsResponse,
    )

  /**
   * List backends in a given load balancer
   *
   * @param request - The request {@link ListBackendsRequest}
   * @returns A Promise of ListBackendsResponse
   */
  listBackends = (request: Readonly<ListBackendsRequest>) =>
    enrichForPagination('backends', this.pageOfListBackends, request)

  /**
   * Create a backend in a given load balancer
   *
   * @param request - The request {@link CreateBackendRequest}
   * @returns A Promise of Backend
   */
  createBackend = (request: Readonly<CreateBackendRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalCreateBackendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
      },
      unmarshalBackend,
    )

  /**
   * Get a backend in a given load balancer
   *
   * @param request - The request {@link GetBackendRequest}
   * @returns A Promise of Backend
   */
  getBackend = (request: Readonly<GetBackendRequest>) =>
    this.client.fetch<Backend>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backends/${validatePathParam('backendId', request.backendId)}`,
      },
      unmarshalBackend,
    )

  /**
   * Update a backend in a given load balancer
   *
   * @param request - The request {@link UpdateBackendRequest}
   * @returns A Promise of Backend
   */
  updateBackend = (request: Readonly<UpdateBackendRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalUpdateBackendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backends/${validatePathParam('backendId', request.backendId)}`,
      },
      unmarshalBackend,
    )

  /**
   * Delete a backend in a given load balancer
   *
   * @param request - The request {@link DeleteBackendRequest}
   */
  deleteBackend = (request: Readonly<DeleteBackendRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/backends/${validatePathParam('backendId', request.backendId)}`,
    })

  /**
   * Add a set of servers in a given backend
   *
   * @param request - The request {@link AddBackendServersRequest}
   * @returns A Promise of Backend
   */
  addBackendServers = (request: Readonly<AddBackendServersRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalAddBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backends/${validatePathParam(
          'backendId',
          request.backendId,
        )}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Remove a set of servers for a given backend
   *
   * @param request - The request {@link RemoveBackendServersRequest}
   * @returns A Promise of Backend
   */
  removeBackendServers = (request: Readonly<RemoveBackendServersRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalRemoveBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backends/${validatePathParam(
          'backendId',
          request.backendId,
        )}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Define all servers in a given backend
   *
   * @param request - The request {@link SetBackendServersRequest}
   * @returns A Promise of Backend
   */
  setBackendServers = (request: Readonly<SetBackendServersRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalSetBackendServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backends/${validatePathParam(
          'backendId',
          request.backendId,
        )}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Update an health check for a given backend
   *
   * @param request - The request {@link UpdateHealthCheckRequest}
   * @returns A Promise of HealthCheck
   */
  updateHealthCheck = (request: Readonly<UpdateHealthCheckRequest>) =>
    this.client.fetch<HealthCheck>(
      {
        body: JSON.stringify(
          marshalUpdateHealthCheckRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backends/${validatePathParam(
          'backendId',
          request.backendId,
        )}/healthcheck`,
      },
      unmarshalHealthCheck,
    )

  protected pageOfListFrontends = (request: Readonly<ListFrontendsRequest>) =>
    this.client.fetch<ListFrontendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListFrontendsResponse,
    )

  /**
   * List frontends in a given load balancer
   *
   * @param request - The request {@link ListFrontendsRequest}
   * @returns A Promise of ListFrontendsResponse
   */
  listFrontends = (request: Readonly<ListFrontendsRequest>) =>
    enrichForPagination('frontends', this.pageOfListFrontends, request)

  /**
   * Create a frontend in a given load balancer
   *
   * @param request - The request {@link CreateFrontendRequest}
   * @returns A Promise of Frontend
   */
  createFrontend = (request: Readonly<CreateFrontendRequest>) =>
    this.client.fetch<Frontend>(
      {
        body: JSON.stringify(
          marshalCreateFrontendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
      },
      unmarshalFrontend,
    )

  /**
   * Get a frontend
   *
   * @param request - The request {@link GetFrontendRequest}
   * @returns A Promise of Frontend
   */
  getFrontend = (request: Readonly<GetFrontendRequest>) =>
    this.client.fetch<Frontend>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
      },
      unmarshalFrontend,
    )

  /**
   * Update a frontend
   *
   * @param request - The request {@link UpdateFrontendRequest}
   * @returns A Promise of Frontend
   */
  updateFrontend = (request: Readonly<UpdateFrontendRequest>) =>
    this.client.fetch<Frontend>(
      {
        body: JSON.stringify(
          marshalUpdateFrontendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
      },
      unmarshalFrontend,
    )

  /**
   * Delete a frontend
   *
   * @param request - The request {@link DeleteFrontendRequest}
   */
  deleteFrontend = (request: Readonly<DeleteFrontendRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
    })

  protected pageOfListRoutes = (request: Readonly<ListRoutesRequest> = {}) =>
    this.client.fetch<ListRoutesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/routes`,
        urlParams: urlParams(
          ['frontend_id', request.frontendId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListRoutesResponse,
    )

  /**
   * List all backend redirections
   *
   * @param request - The request {@link ListRoutesRequest}
   * @returns A Promise of ListRoutesResponse
   */
  listRoutes = (request: Readonly<ListRoutesRequest> = {}) =>
    enrichForPagination('routes', this.pageOfListRoutes, request)

  /**
   * Create a backend redirection
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
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/routes`,
      },
      unmarshalRoute,
    )

  /**
   * Get single backend redirection
   *
   * @param request - The request {@link GetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<GetRouteRequest>) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Edit a backend redirection
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
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Delete a backend redirection
   *
   * @param request - The request {@link DeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<DeleteRouteRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/routes/${validatePathParam('routeId', request.routeId)}`,
    })

  /**
   * Get usage statistics of a given load balancer
   *
   * @deprecated
   * @param request - The request {@link GetLbStatsRequest}
   * @returns A Promise of LbStats
   */
  getLbStats = (request: Readonly<GetLbStatsRequest>) =>
    this.client.fetch<LbStats>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/stats`,
      },
      unmarshalLbStats,
    )

  protected pageOfListBackendStats = (
    request: Readonly<ListBackendStatsRequest>,
  ) =>
    this.client.fetch<ListBackendStatsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/backend-stats`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListBackendStatsResponse,
    )

  listBackendStats = (request: Readonly<ListBackendStatsRequest>) =>
    enrichForPagination(
      'backendServersStats',
      this.pageOfListBackendStats,
      request,
    )

  protected pageOfListAcls = (request: Readonly<ListAclsRequest>) =>
    this.client.fetch<ListAclResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/frontends/${validatePathParam(
          'frontendId',
          request.frontendId,
        )}/acls`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListAclResponse,
    )

  /**
   * List ACL for a given frontend
   *
   * @param request - The request {@link ListAclsRequest}
   * @returns A Promise of ListAclResponse
   */
  listAcls = (request: Readonly<ListAclsRequest>) =>
    enrichForPagination('acls', this.pageOfListAcls, request)

  /**
   * Create an ACL for a given frontend
   *
   * @param request - The request {@link CreateAclRequest}
   * @returns A Promise of Acl
   */
  createAcl = (request: Readonly<CreateAclRequest>) =>
    this.client.fetch<Acl>(
      {
        body: JSON.stringify(
          marshalCreateAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/frontends/${validatePathParam(
          'frontendId',
          request.frontendId,
        )}/acls`,
      },
      unmarshalAcl,
    )

  /**
   * Get an ACL
   *
   * @param request - The request {@link GetAclRequest}
   * @returns A Promise of Acl
   */
  getAcl = (request: Readonly<GetAclRequest>) =>
    this.client.fetch<Acl>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalAcl,
    )

  /**
   * Update an ACL
   *
   * @param request - The request {@link UpdateAclRequest}
   * @returns A Promise of Acl
   */
  updateAcl = (request: Readonly<UpdateAclRequest>) =>
    this.client.fetch<Acl>(
      {
        body: JSON.stringify(
          marshalUpdateAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalAcl,
    )

  /**
   * Delete an ACL
   *
   * @param request - The request {@link DeleteAclRequest}
   */
  deleteAcl = (request: Readonly<DeleteAclRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/acls/${validatePathParam('aclId', request.aclId)}`,
    })

  /**
   * Generate a new TLS certificate using Let's Encrypt or import your
   * certificate.
   *
   * @param request - The request {@link CreateCertificateRequest}
   * @returns A Promise of Certificate
   */
  createCertificate = (request: Readonly<CreateCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalCreateCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
      },
      unmarshalCertificate,
    )

  protected pageOfListCertificates = (
    request: Readonly<ListCertificatesRequest>,
  ) =>
    this.client.fetch<ListCertificatesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListCertificatesResponse,
    )

  /**
   * List all TLS certificates on a given load balancer
   *
   * @param request - The request {@link ListCertificatesRequest}
   * @returns A Promise of ListCertificatesResponse
   */
  listCertificates = (request: Readonly<ListCertificatesRequest>) =>
    enrichForPagination('certificates', this.pageOfListCertificates, request)

  /**
   * Get a TLS certificate
   *
   * @param request - The request {@link GetCertificateRequest}
   * @returns A Promise of Certificate
   */
  getCertificate = (request: Readonly<GetCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/certificates/${validatePathParam(
          'certificateId',
          request.certificateId,
        )}`,
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
      options?.stop ??
        (res =>
          Promise.resolve(
            !CERTIFICATE_TRANSIENT_STATUSES.includes(res.status),
          )),
      this.getCertificate,
      request,
      options,
    )

  /**
   * Update a TLS certificate
   *
   * @param request - The request {@link UpdateCertificateRequest}
   * @returns A Promise of Certificate
   */
  updateCertificate = (request: Readonly<UpdateCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalUpdateCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/certificates/${validatePathParam(
          'certificateId',
          request.certificateId,
        )}`,
      },
      unmarshalCertificate,
    )

  /**
   * Delete a TLS certificate
   *
   * @param request - The request {@link DeleteCertificateRequest}
   */
  deleteCertificate = (request: Readonly<DeleteCertificateRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/certificates/${validatePathParam(
        'certificateId',
        request.certificateId,
      )}`,
    })

  protected pageOfListLbTypes = (request: Readonly<ListLbTypesRequest> = {}) =>
    this.client.fetch<ListLbTypesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lb-types`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListLbTypesResponse,
    )

  /**
   * List all load balancer offer type
   *
   * @param request - The request {@link ListLbTypesRequest}
   * @returns A Promise of ListLbTypesResponse
   */
  listLbTypes = (request: Readonly<ListLbTypesRequest> = {}) =>
    enrichForPagination('lbTypes', this.pageOfListLbTypes, request)

  /**
   * Create a subscriber, webhook or email
   *
   * @param request - The request {@link CreateSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  createSubscriber = (request: Readonly<CreateSubscriberRequest>) =>
    this.client.fetch<Subscriber>(
      {
        body: JSON.stringify(
          marshalCreateSubscriberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/subscribers`,
      },
      unmarshalSubscriber,
    )

  /**
   * Get a subscriber
   *
   * @param request - The request {@link GetSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  getSubscriber = (request: Readonly<GetSubscriberRequest>) =>
    this.client.fetch<Subscriber>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/subscribers/${validatePathParam(
          'subscriberId',
          request.subscriberId,
        )}`,
      },
      unmarshalSubscriber,
    )

  protected pageOfListSubscriber = (request: Readonly<ListSubscriberRequest>) =>
    this.client.fetch<ListSubscriberResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/subscribers`,
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
        ),
      },
      unmarshalListSubscriberResponse,
    )

  /**
   * List all subscriber
   *
   * @param request - The request {@link ListSubscriberRequest}
   * @returns A Promise of ListSubscriberResponse
   */
  listSubscriber = (request: Readonly<ListSubscriberRequest>) =>
    enrichForPagination('subscribers', this.pageOfListSubscriber, request)

  /**
   * Update a subscriber
   *
   * @param request - The request {@link UpdateSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  updateSubscriber = (request: Readonly<UpdateSubscriberRequest>) =>
    this.client.fetch<Subscriber>(
      {
        body: JSON.stringify(
          marshalUpdateSubscriberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/subscribers/${validatePathParam(
          'subscriberId',
          request.subscriberId,
        )}`,
      },
      unmarshalSubscriber,
    )

  /**
   * Delete a subscriber
   *
   * @param request - The request {@link DeleteSubscriberRequest}
   */
  deleteSubscriber = (request: Readonly<DeleteSubscriberRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/lb/subscriber/${validatePathParam(
        'subscriberId',
        request.subscriberId,
      )}`,
    })

  /**
   * Subscribe a subscriber to a given load balancer
   *
   * @param request - The request {@link SubscribeToLbRequest}
   * @returns A Promise of Lb
   */
  subscribeToLb = (request: Readonly<SubscribeToLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalSubscribeToLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lb/${validatePathParam('lbId', request.lbId)}/subscribe`,
      },
      unmarshalLb,
    )

  /**
   * Unsubscribe a subscriber from a given load balancer
   *
   * @param request - The request {@link UnsubscribeFromLbRequest}
   * @returns A Promise of Lb
   */
  unsubscribeFromLb = (request: Readonly<UnsubscribeFromLbRequest>) =>
    this.client.fetch<Lb>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lb/${validatePathParam('lbId', request.lbId)}/unsubscribe`,
      },
      unmarshalLb,
    )

  protected pageOfListLbPrivateNetworks = (
    request: Readonly<ListLbPrivateNetworksRequest>,
  ) =>
    this.client.fetch<ListLbPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListLbPrivateNetworksResponse,
    )

  /**
   * List attached private network of load balancer
   *
   * @param request - The request {@link ListLbPrivateNetworksRequest}
   * @returns A Promise of ListLbPrivateNetworksResponse
   */
  listLbPrivateNetworks = (request: Readonly<ListLbPrivateNetworksRequest>) =>
    enrichForPagination(
      'privateNetwork',
      this.pageOfListLbPrivateNetworks,
      request,
    )

  /**
   * Add load balancer on instance private network
   *
   * @param request - The request {@link AttachPrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  attachPrivateNetwork = (request: Readonly<AttachPrivateNetworkRequest>) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalAttachPrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/lbs/${validatePathParam(
          'lbId',
          request.lbId,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}/attach`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Remove load balancer of private network
   *
   * @param request - The request {@link DetachPrivateNetworkRequest}
   */
  detachPrivateNetwork = (request: Readonly<DetachPrivateNetworkRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/lb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/lbs/${validatePathParam(
        'lbId',
        request.lbId,
      )}/private-networks/${validatePathParam(
        'privateNetworkId',
        request.privateNetworkId,
      )}/detach`,
    })
}

/**
 * Load balancer API.
 *
 * This API allows you to manage your load balancer service.
 */
export class ZonedAPI extends ParentAPI {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = [
    'fr-par-1',
    'fr-par-2',
    'nl-ams-1',
    'nl-ams-2',
    'pl-waw-1',
    'pl-waw-2',
  ]

  protected pageOfListLbs = (request: Readonly<ZonedApiListLbsRequest> = {}) =>
    this.client.fetch<ListLbsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs`,
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
        ),
      },
      unmarshalListLbsResponse,
    )

  /**
   * List load balancers
   *
   * @param request - The request {@link ZonedApiListLbsRequest}
   * @returns A Promise of ListLbsResponse
   */
  listLbs = (request: Readonly<ZonedApiListLbsRequest> = {}) =>
    enrichForPagination('lbs', this.pageOfListLbs, request)

  /**
   * Create a load balancer
   *
   * @param request - The request {@link ZonedApiCreateLbRequest}
   * @returns A Promise of Lb
   */
  createLb = (request: Readonly<ZonedApiCreateLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs`,
      },
      unmarshalLb,
    )

  /**
   * Get a load balancer
   *
   * @param request - The request {@link ZonedApiGetLbRequest}
   * @returns A Promise of Lb
   */
  getLb = (request: Readonly<ZonedApiGetLbRequest>) =>
    this.client.fetch<Lb>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}`,
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
    request: Readonly<ZonedApiGetLbRequest>,
    options?: Readonly<WaitForOptions<Lb>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res => Promise.resolve(!LB_TRANSIENT_STATUSES.includes(res.status))),
      this.getLb,
      request,
      options,
    )

  /**
   * Update a load balancer
   *
   * @param request - The request {@link ZonedApiUpdateLbRequest}
   * @returns A Promise of Lb
   */
  updateLb = (request: Readonly<ZonedApiUpdateLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}`,
      },
      unmarshalLb,
    )

  /**
   * Delete a load balancer
   *
   * @param request - The request {@link ZonedApiDeleteLbRequest}
   */
  deleteLb = (request: Readonly<ZonedApiDeleteLbRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/lbs/${validatePathParam('lbId', request.lbId)}`,
      urlParams: urlParams(['release_ip', request.releaseIp]),
    })

  /**
   * Migrate a load balancer
   *
   * @param request - The request {@link ZonedApiMigrateLbRequest}
   * @returns A Promise of Lb
   */
  migrateLb = (request: Readonly<ZonedApiMigrateLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiMigrateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/migrate`,
      },
      unmarshalLb,
    )

  protected pageOfListIPs = (request: Readonly<ZonedApiListIPsRequest> = {}) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips`,
        urlParams: urlParams(
          ['ip_address', request.ipAddress],
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
        ),
      },
      unmarshalListIpsResponse,
    )

  /**
   * List IPs
   *
   * @param request - The request {@link ZonedApiListIPsRequest}
   * @returns A Promise of ListIpsResponse
   */
  listIPs = (request: Readonly<ZonedApiListIPsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIPs, request)

  /**
   * Create an IP
   *
   * @param request - The request {@link ZonedApiCreateIpRequest}
   * @returns A Promise of Ip
   */
  createIp = (request: Readonly<ZonedApiCreateIpRequest> = {}) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips`,
      },
      unmarshalIp,
    )

  /**
   * Get an IP
   *
   * @param request - The request {@link ZonedApiGetIpRequest}
   * @returns A Promise of Ip
   */
  getIp = (request: Readonly<ZonedApiGetIpRequest>) =>
    this.client.fetch<Ip>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIp,
    )

  /**
   * Delete an IP
   *
   * @param request - The request {@link ZonedApiReleaseIpRequest}
   */
  releaseIp = (request: Readonly<ZonedApiReleaseIpRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/ips/${validatePathParam('ipId', request.ipId)}`,
    })

  /**
   * Update an IP
   *
   * @param request - The request {@link ZonedApiUpdateIpRequest}
   * @returns A Promise of Ip
   */
  updateIp = (request: Readonly<ZonedApiUpdateIpRequest>) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIp,
    )

  protected pageOfListBackends = (
    request: Readonly<ZonedApiListBackendsRequest>,
  ) =>
    this.client.fetch<ListBackendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListBackendsResponse,
    )

  /**
   * List backends in a given load balancer
   *
   * @param request - The request {@link ZonedApiListBackendsRequest}
   * @returns A Promise of ListBackendsResponse
   */
  listBackends = (request: Readonly<ZonedApiListBackendsRequest>) =>
    enrichForPagination('backends', this.pageOfListBackends, request)

  /**
   * Create a backend in a given load balancer
   *
   * @param request - The request {@link ZonedApiCreateBackendRequest}
   * @returns A Promise of Backend
   */
  createBackend = (request: Readonly<ZonedApiCreateBackendRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateBackendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
      },
      unmarshalBackend,
    )

  /**
   * Get a backend in a given load balancer
   *
   * @param request - The request {@link ZonedApiGetBackendRequest}
   * @returns A Promise of Backend
   */
  getBackend = (request: Readonly<ZonedApiGetBackendRequest>) =>
    this.client.fetch<Backend>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/backends/${validatePathParam('backendId', request.backendId)}`,
      },
      unmarshalBackend,
    )

  /**
   * Update a backend in a given load balancer
   *
   * @param request - The request {@link ZonedApiUpdateBackendRequest}
   * @returns A Promise of Backend
   */
  updateBackend = (request: Readonly<ZonedApiUpdateBackendRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateBackendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/backends/${validatePathParam('backendId', request.backendId)}`,
      },
      unmarshalBackend,
    )

  /**
   * Delete a backend in a given load balancer
   *
   * @param request - The request {@link ZonedApiDeleteBackendRequest}
   */
  deleteBackend = (request: Readonly<ZonedApiDeleteBackendRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/backends/${validatePathParam('backendId', request.backendId)}`,
    })

  /**
   * Add a set of servers in a given backend
   *
   * @param request - The request {@link ZonedApiAddBackendServersRequest}
   * @returns A Promise of Backend
   */
  addBackendServers = (request: Readonly<ZonedApiAddBackendServersRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiAddBackendServersRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/backends/${validatePathParam(
          'backendId',
          request.backendId,
        )}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Remove a set of servers for a given backend
   *
   * @param request - The request {@link ZonedApiRemoveBackendServersRequest}
   * @returns A Promise of Backend
   */
  removeBackendServers = (
    request: Readonly<ZonedApiRemoveBackendServersRequest>,
  ) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiRemoveBackendServersRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/backends/${validatePathParam(
          'backendId',
          request.backendId,
        )}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Define all servers in a given backend
   *
   * @param request - The request {@link ZonedApiSetBackendServersRequest}
   * @returns A Promise of Backend
   */
  setBackendServers = (request: Readonly<ZonedApiSetBackendServersRequest>) =>
    this.client.fetch<Backend>(
      {
        body: JSON.stringify(
          marshalZonedApiSetBackendServersRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/backends/${validatePathParam(
          'backendId',
          request.backendId,
        )}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Update an healthcheck for a given backend
   *
   * @param request - The request {@link ZonedApiUpdateHealthCheckRequest}
   * @returns A Promise of HealthCheck
   */
  updateHealthCheck = (request: Readonly<ZonedApiUpdateHealthCheckRequest>) =>
    this.client.fetch<HealthCheck>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateHealthCheckRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/backends/${validatePathParam(
          'backendId',
          request.backendId,
        )}/healthcheck`,
      },
      unmarshalHealthCheck,
    )

  protected pageOfListFrontends = (
    request: Readonly<ZonedApiListFrontendsRequest>,
  ) =>
    this.client.fetch<ListFrontendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListFrontendsResponse,
    )

  /**
   * List frontends in a given load balancer
   *
   * @param request - The request {@link ZonedApiListFrontendsRequest}
   * @returns A Promise of ListFrontendsResponse
   */
  listFrontends = (request: Readonly<ZonedApiListFrontendsRequest>) =>
    enrichForPagination('frontends', this.pageOfListFrontends, request)

  /**
   * Create a frontend in a given load balancer
   *
   * @param request - The request {@link ZonedApiCreateFrontendRequest}
   * @returns A Promise of Frontend
   */
  createFrontend = (request: Readonly<ZonedApiCreateFrontendRequest>) =>
    this.client.fetch<Frontend>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateFrontendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
      },
      unmarshalFrontend,
    )

  /**
   * Get a frontend
   *
   * @param request - The request {@link ZonedApiGetFrontendRequest}
   * @returns A Promise of Frontend
   */
  getFrontend = (request: Readonly<ZonedApiGetFrontendRequest>) =>
    this.client.fetch<Frontend>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
      },
      unmarshalFrontend,
    )

  /**
   * Update a frontend
   *
   * @param request - The request {@link ZonedApiUpdateFrontendRequest}
   * @returns A Promise of Frontend
   */
  updateFrontend = (request: Readonly<ZonedApiUpdateFrontendRequest>) =>
    this.client.fetch<Frontend>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateFrontendRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
      },
      unmarshalFrontend,
    )

  /**
   * Delete a frontend
   *
   * @param request - The request {@link ZonedApiDeleteFrontendRequest}
   */
  deleteFrontend = (request: Readonly<ZonedApiDeleteFrontendRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
    })

  protected pageOfListRoutes = (
    request: Readonly<ZonedApiListRoutesRequest> = {},
  ) =>
    this.client.fetch<ListRoutesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/routes`,
        urlParams: urlParams(
          ['frontend_id', request.frontendId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListRoutesResponse,
    )

  /**
   * List all backend redirections
   *
   * @param request - The request {@link ZonedApiListRoutesRequest}
   * @returns A Promise of ListRoutesResponse
   */
  listRoutes = (request: Readonly<ZonedApiListRoutesRequest> = {}) =>
    enrichForPagination('routes', this.pageOfListRoutes, request)

  /**
   * Create a backend redirection
   *
   * @param request - The request {@link ZonedApiCreateRouteRequest}
   * @returns A Promise of Route
   */
  createRoute = (request: Readonly<ZonedApiCreateRouteRequest>) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/routes`,
      },
      unmarshalRoute,
    )

  /**
   * Get single backend redirection
   *
   * @param request - The request {@link ZonedApiGetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<ZonedApiGetRouteRequest>) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Edit a backend redirection
   *
   * @param request - The request {@link ZonedApiUpdateRouteRequest}
   * @returns A Promise of Route
   */
  updateRoute = (request: Readonly<ZonedApiUpdateRouteRequest>) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Delete a backend redirection
   *
   * @param request - The request {@link ZonedApiDeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<ZonedApiDeleteRouteRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/routes/${validatePathParam('routeId', request.routeId)}`,
    })

  /**
   * Get usage statistics of a given load balancer
   *
   * @deprecated
   * @param request - The request {@link ZonedApiGetLbStatsRequest}
   * @returns A Promise of LbStats
   */
  getLbStats = (request: Readonly<ZonedApiGetLbStatsRequest>) =>
    this.client.fetch<LbStats>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/stats`,
      },
      unmarshalLbStats,
    )

  protected pageOfListBackendStats = (
    request: Readonly<ZonedApiListBackendStatsRequest>,
  ) =>
    this.client.fetch<ListBackendStatsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/backend-stats`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListBackendStatsResponse,
    )

  listBackendStats = (request: Readonly<ZonedApiListBackendStatsRequest>) =>
    enrichForPagination(
      'backendServersStats',
      this.pageOfListBackendStats,
      request,
    )

  protected pageOfListAcls = (request: Readonly<ZonedApiListAclsRequest>) =>
    this.client.fetch<ListAclResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/frontends/${validatePathParam(
          'frontendId',
          request.frontendId,
        )}/acls`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListAclResponse,
    )

  /**
   * List ACL for a given frontend
   *
   * @param request - The request {@link ZonedApiListAclsRequest}
   * @returns A Promise of ListAclResponse
   */
  listAcls = (request: Readonly<ZonedApiListAclsRequest>) =>
    enrichForPagination('acls', this.pageOfListAcls, request)

  /**
   * Create an ACL for a given frontend
   *
   * @param request - The request {@link ZonedApiCreateAclRequest}
   * @returns A Promise of Acl
   */
  createAcl = (request: Readonly<ZonedApiCreateAclRequest>) =>
    this.client.fetch<Acl>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/frontends/${validatePathParam(
          'frontendId',
          request.frontendId,
        )}/acls`,
      },
      unmarshalAcl,
    )

  /**
   * Get an ACL
   *
   * @param request - The request {@link ZonedApiGetAclRequest}
   * @returns A Promise of Acl
   */
  getAcl = (request: Readonly<ZonedApiGetAclRequest>) =>
    this.client.fetch<Acl>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalAcl,
    )

  /**
   * Update an ACL
   *
   * @param request - The request {@link ZonedApiUpdateAclRequest}
   * @returns A Promise of Acl
   */
  updateAcl = (request: Readonly<ZonedApiUpdateAclRequest>) =>
    this.client.fetch<Acl>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateAclRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalAcl,
    )

  /**
   * Delete an ACL
   *
   * @param request - The request {@link ZonedApiDeleteAclRequest}
   */
  deleteAcl = (request: Readonly<ZonedApiDeleteAclRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/acls/${validatePathParam('aclId', request.aclId)}`,
    })

  /**
   * Set all ACLs for a given frontend
   *
   * @param request - The request {@link ZonedApiSetAclsRequest}
   * @returns A Promise of SetAclsResponse
   */
  setAcls = (request: Readonly<ZonedApiSetAclsRequest>) =>
    this.client.fetch<SetAclsResponse>(
      {
        body: JSON.stringify(
          marshalZonedApiSetAclsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/frontends/${validatePathParam(
          'frontendId',
          request.frontendId,
        )}/acls`,
      },
      unmarshalSetAclsResponse,
    )

  /**
   * Generate a new TLS certificate using Let's Encrypt or import your
   * certificate.
   *
   * @param request - The request {@link ZonedApiCreateCertificateRequest}
   * @returns A Promise of Certificate
   */
  createCertificate = (request: Readonly<ZonedApiCreateCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateCertificateRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
      },
      unmarshalCertificate,
    )

  protected pageOfListCertificates = (
    request: Readonly<ZonedApiListCertificatesRequest>,
  ) =>
    this.client.fetch<ListCertificatesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListCertificatesResponse,
    )

  /**
   * List all TLS certificates on a given load balancer
   *
   * @param request - The request {@link ZonedApiListCertificatesRequest}
   * @returns A Promise of ListCertificatesResponse
   */
  listCertificates = (request: Readonly<ZonedApiListCertificatesRequest>) =>
    enrichForPagination('certificates', this.pageOfListCertificates, request)

  /**
   * Get a TLS certificate
   *
   * @param request - The request {@link ZonedApiGetCertificateRequest}
   * @returns A Promise of Certificate
   */
  getCertificate = (request: Readonly<ZonedApiGetCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/certificates/${validatePathParam(
          'certificateId',
          request.certificateId,
        )}`,
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
    request: Readonly<ZonedApiGetCertificateRequest>,
    options?: Readonly<WaitForOptions<Certificate>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !CERTIFICATE_TRANSIENT_STATUSES.includes(res.status),
          )),
      this.getCertificate,
      request,
      options,
    )

  /**
   * Update a TLS certificate
   *
   * @param request - The request {@link ZonedApiUpdateCertificateRequest}
   * @returns A Promise of Certificate
   */
  updateCertificate = (request: Readonly<ZonedApiUpdateCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateCertificateRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/certificates/${validatePathParam(
          'certificateId',
          request.certificateId,
        )}`,
      },
      unmarshalCertificate,
    )

  /**
   * Delete a TLS certificate
   *
   * @param request - The request {@link ZonedApiDeleteCertificateRequest}
   */
  deleteCertificate = (request: Readonly<ZonedApiDeleteCertificateRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/certificates/${validatePathParam(
        'certificateId',
        request.certificateId,
      )}`,
    })

  protected pageOfListLbTypes = (
    request: Readonly<ZonedApiListLbTypesRequest> = {},
  ) =>
    this.client.fetch<ListLbTypesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lb-types`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListLbTypesResponse,
    )

  /**
   * List all load balancer offer type
   *
   * @param request - The request {@link ZonedApiListLbTypesRequest}
   * @returns A Promise of ListLbTypesResponse
   */
  listLbTypes = (request: Readonly<ZonedApiListLbTypesRequest> = {}) =>
    enrichForPagination('lbTypes', this.pageOfListLbTypes, request)

  /**
   * Create a subscriber, webhook or email
   *
   * @param request - The request {@link ZonedApiCreateSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  createSubscriber = (request: Readonly<ZonedApiCreateSubscriberRequest>) =>
    this.client.fetch<Subscriber>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateSubscriberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/subscribers`,
      },
      unmarshalSubscriber,
    )

  /**
   * Get a subscriber
   *
   * @param request - The request {@link ZonedApiGetSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  getSubscriber = (request: Readonly<ZonedApiGetSubscriberRequest>) =>
    this.client.fetch<Subscriber>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/subscribers/${validatePathParam(
          'subscriberId',
          request.subscriberId,
        )}`,
      },
      unmarshalSubscriber,
    )

  protected pageOfListSubscriber = (
    request: Readonly<ZonedApiListSubscriberRequest>,
  ) =>
    this.client.fetch<ListSubscriberResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/subscribers`,
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
        ),
      },
      unmarshalListSubscriberResponse,
    )

  /**
   * List all subscriber
   *
   * @param request - The request {@link ZonedApiListSubscriberRequest}
   * @returns A Promise of ListSubscriberResponse
   */
  listSubscriber = (request: Readonly<ZonedApiListSubscriberRequest>) =>
    enrichForPagination('subscribers', this.pageOfListSubscriber, request)

  /**
   * Update a subscriber
   *
   * @param request - The request {@link ZonedApiUpdateSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  updateSubscriber = (request: Readonly<ZonedApiUpdateSubscriberRequest>) =>
    this.client.fetch<Subscriber>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateSubscriberRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/subscribers/${validatePathParam(
          'subscriberId',
          request.subscriberId,
        )}`,
      },
      unmarshalSubscriber,
    )

  /**
   * Delete a subscriber
   *
   * @param request - The request {@link ZonedApiDeleteSubscriberRequest}
   */
  deleteSubscriber = (request: Readonly<ZonedApiDeleteSubscriberRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/lb/subscription/${validatePathParam(
        'subscriberId',
        request.subscriberId,
      )}`,
    })

  /**
   * Subscribe a subscriber to a given load balancer
   *
   * @param request - The request {@link ZonedApiSubscribeToLbRequest}
   * @returns A Promise of Lb
   */
  subscribeToLb = (request: Readonly<ZonedApiSubscribeToLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiSubscribeToLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lb/${validatePathParam('lbId', request.lbId)}/subscribe`,
      },
      unmarshalLb,
    )

  /**
   * Unsubscribe a subscriber from a given load balancer
   *
   * @param request - The request {@link ZonedApiUnsubscribeFromLbRequest}
   * @returns A Promise of Lb
   */
  unsubscribeFromLb = (request: Readonly<ZonedApiUnsubscribeFromLbRequest>) =>
    this.client.fetch<Lb>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lb/${validatePathParam('lbId', request.lbId)}/unsubscribe`,
      },
      unmarshalLb,
    )

  protected pageOfListLbPrivateNetworks = (
    request: Readonly<ZonedApiListLbPrivateNetworksRequest>,
  ) =>
    this.client.fetch<ListLbPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListLbPrivateNetworksResponse,
    )

  /**
   * List attached private network of load balancer
   *
   * @param request - The request {@link ZonedApiListLbPrivateNetworksRequest}
   * @returns A Promise of ListLbPrivateNetworksResponse
   */
  listLbPrivateNetworks = (
    request: Readonly<ZonedApiListLbPrivateNetworksRequest>,
  ) =>
    enrichForPagination(
      'privateNetwork',
      this.pageOfListLbPrivateNetworks,
      request,
    )

  /**
   * Add load balancer on instance private network
   *
   * @param request - The request {@link ZonedApiAttachPrivateNetworkRequest}
   * @returns A Promise of PrivateNetwork
   */
  attachPrivateNetwork = (
    request: Readonly<ZonedApiAttachPrivateNetworkRequest>,
  ) =>
    this.client.fetch<PrivateNetwork>(
      {
        body: JSON.stringify(
          marshalZonedApiAttachPrivateNetworkRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/lbs/${validatePathParam(
          'lbId',
          request.lbId,
        )}/private-networks/${validatePathParam(
          'privateNetworkId',
          request.privateNetworkId,
        )}/attach`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Remove load balancer of private network
   *
   * @param request - The request {@link ZonedApiDetachPrivateNetworkRequest}
   */
  detachPrivateNetwork = (
    request: Readonly<ZonedApiDetachPrivateNetworkRequest>,
  ) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/lb/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/lbs/${validatePathParam(
        'lbId',
        request.lbId,
      )}/private-networks/${validatePathParam(
        'privateNetworkId',
        request.privateNetworkId,
      )}/detach`,
    })
}
