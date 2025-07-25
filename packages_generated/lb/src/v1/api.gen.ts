// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality, WaitForOptions } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import {
  CERTIFICATE_TRANSIENT_STATUSES as CERTIFICATE_TRANSIENT_STATUSES_LB,
  LB_TRANSIENT_STATUSES as LB_TRANSIENT_STATUSES_LB,
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
  unmarshalListLbsResponse,
  unmarshalListLbTypesResponse,
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
  ListLbsRequest,
  ListLbsResponse,
  ListLbTypesRequest,
  ListLbTypesResponse,
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
  Subscriber,
  SubscribeToLbRequest,
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
  ZonedApiListLbsRequest,
  ZonedApiListLbTypesRequest,
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
 * Load Balancer API.

This API allows you to manage your Scaleway Load Balancer services.
 */
export class ZonedAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
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

  protected pageOfListLbs = (request: Readonly<ZonedApiListLbsRequest> = {}) =>
    this.client.fetch<ListLbsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs`,
        urlParams: urlParams(
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
      unmarshalListLbsResponse,
    )

  /**
   * List Load Balancers. List all Load Balancers in the specified zone, for a Scaleway Organization or Scaleway Project. By default, the Load Balancers returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ZonedApiListLbsRequest}
   * @returns A Promise of ListLbsResponse
   */
  listLbs = (request: Readonly<ZonedApiListLbsRequest> = {}) =>
    enrichForPagination('lbs', this.pageOfListLbs, request)

  /**
   * Create a Load Balancer. Create a new Load Balancer. Note that the Load Balancer will be created without frontends or backends; these must be created separately via the dedicated endpoints.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs`,
      },
      unmarshalLb,
    )

  /**
   * Get a Load Balancer. Retrieve information about an existing Load Balancer, specified by its Load Balancer ID. Its full details, including name, status and IP address, are returned in the response object.
   *
   * @param request - The request {@link ZonedApiGetLbRequest}
   * @returns A Promise of Lb
   */
  getLb = (request: Readonly<ZonedApiGetLbRequest>) =>
    this.client.fetch<Lb>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}`,
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
      options?.stop ??
        (res =>
          Promise.resolve(!LB_TRANSIENT_STATUSES_LB.includes(res.status))),
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
  updateLb = (request: Readonly<ZonedApiUpdateLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalZonedApiUpdateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}`,
      },
      unmarshalLb,
    )

  /**
   * Delete a Load Balancer. Delete an existing Load Balancer, specified by its Load Balancer ID. Deleting a Load Balancer is permanent, and cannot be undone. The Load Balancer's flexible IP address can either be deleted with the Load Balancer, or kept in your account for future use.
   *
   * @param request - The request {@link ZonedApiDeleteLbRequest}
   */
  deleteLb = (request: Readonly<ZonedApiDeleteLbRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}`,
      urlParams: urlParams(['release_ip', request.releaseIp]),
    })

  /**
   * Migrate a Load Balancer. Migrate an existing Load Balancer from one commercial type to another. Allows you to scale your Load Balancer up or down in terms of bandwidth or multi-cloud provision.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/migrate`,
      },
      unmarshalLb,
    )

  protected pageOfListIPs = (request: Readonly<ZonedApiListIPsRequest> = {}) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
        urlParams: urlParams(
          ['ip_address', request.ipAddress],
          ['ip_type', request.ipType],
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
      unmarshalListIpsResponse,
    )

  /**
   * List IP addresses. List the Load Balancer flexible IP addresses held in the account (filtered by Organization ID or Project ID). It is also possible to search for a specific IP address.
   *
   * @param request - The request {@link ZonedApiListIPsRequest}
   * @returns A Promise of ListIpsResponse
   */
  listIPs = (request: Readonly<ZonedApiListIPsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIPs, request)

  /**
   * Create an IP address. Create a new Load Balancer flexible IP address, in the specified Scaleway Project. This can be attached to new Load Balancers created in the future.
   *
   * @param request - The request {@link ZonedApiCreateIpRequest}
   * @returns A Promise of Ip
   */
  createIp = (request: Readonly<ZonedApiCreateIpRequest>) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalZonedApiCreateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
      },
      unmarshalIp,
    )

  /**
   * Get an IP address. Retrieve the full details of a Load Balancer flexible IP address.
   *
   * @param request - The request {@link ZonedApiGetIpRequest}
   * @returns A Promise of Ip
   */
  getIp = (request: Readonly<ZonedApiGetIpRequest>) =>
    this.client.fetch<Ip>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIp,
    )

  /**
   * Delete an IP address. Delete a Load Balancer flexible IP address. This action is irreversible, and cannot be undone.
   *
   * @param request - The request {@link ZonedApiReleaseIpRequest}
   */
  releaseIp = (request: Readonly<ZonedApiReleaseIpRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
    })

  /**
   * Update an IP address. Update the reverse DNS of a Load Balancer flexible IP address.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIp,
    )

  protected pageOfListBackends = (
    request: Readonly<ZonedApiListBackendsRequest>,
  ) =>
    this.client.fetch<ListBackendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List the backends of a given Load Balancer. List all the backends of a Load Balancer, specified by its Load Balancer ID. By default, results are returned in ascending order by the creation date of each backend. The response is an array of backend objects, containing full details of each one including their configuration parameters such as protocol, port and forwarding algorithm.
   *
   * @param request - The request {@link ZonedApiListBackendsRequest}
   * @returns A Promise of ListBackendsResponse
   */
  listBackends = (request: Readonly<ZonedApiListBackendsRequest>) =>
    enrichForPagination('backends', this.pageOfListBackends, request)

  /**
   * Create a backend for a given Load Balancer. Create a new backend for a given Load Balancer, specifying its full configuration including protocol, port and forwarding algorithm.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
      },
      unmarshalBackend,
    )

  /**
   * Get a backend of a given Load Balancer. Get the full details of a given backend, specified by its backend ID. The response contains the backend's full configuration parameters including protocol, port and forwarding algorithm.
   *
   * @param request - The request {@link ZonedApiGetBackendRequest}
   * @returns A Promise of Backend
   */
  getBackend = (request: Readonly<ZonedApiGetBackendRequest>) =>
    this.client.fetch<Backend>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}`,
      },
      unmarshalBackend,
    )

  /**
   * Update a backend of a given Load Balancer. Update a backend of a given Load Balancer, specified by its backend ID. Note that the request type is PUT and not PATCH. You must set all parameters.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}`,
      },
      unmarshalBackend,
    )

  /**
   * Delete a backend of a given Load Balancer. Delete a backend of a given Load Balancer, specified by its backend ID. This action is irreversible and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteBackendRequest}
   */
  deleteBackend = (request: Readonly<ZonedApiDeleteBackendRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}`,
    })

  /**
   * Add a set of backend servers to a given backend. For a given backend specified by its backend ID, add a set of backend servers (identified by their IP addresses) it should forward traffic to. These will be appended to any existing set of backend servers for this backend.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Remove a set of servers for a given backend. For a given backend specified by its backend ID, remove the specified backend servers (identified by their IP addresses) so that it no longer forwards traffic to them.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Define all backend servers for a given backend. For a given backend specified by its backend ID, define the set of backend servers (identified by their IP addresses) that it should forward traffic to. Any existing backend servers configured for this backend will be removed.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Update a health check for a given backend. Update the configuration of the health check performed by a given backend to verify the health of its backend servers, identified by its backend ID. Note that the request type is PUT and not PATCH. You must set all parameters.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/backends/${validatePathParam('backendId', request.backendId)}/healthcheck`,
      },
      unmarshalHealthCheck,
    )

  protected pageOfListFrontends = (
    request: Readonly<ZonedApiListFrontendsRequest>,
  ) =>
    this.client.fetch<ListFrontendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List frontends of a given Load Balancer. List all the frontends of a Load Balancer, specified by its Load Balancer ID. By default, results are returned in ascending order by the creation date of each frontend. The response is an array of frontend objects, containing full details of each one including the port they listen on and the backend they are attached to.
   *
   * @param request - The request {@link ZonedApiListFrontendsRequest}
   * @returns A Promise of ListFrontendsResponse
   */
  listFrontends = (request: Readonly<ZonedApiListFrontendsRequest>) =>
    enrichForPagination('frontends', this.pageOfListFrontends, request)

  /**
   * Create a frontend in a given Load Balancer. Create a new frontend for a given Load Balancer, specifying its configuration including the port it should listen on and the backend to attach it to.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
      },
      unmarshalFrontend,
    )

  /**
   * Get a frontend. Get the full details of a given frontend, specified by its frontend ID. The response contains the frontend's full configuration parameters including the backend it is attached to, the port it listens on, and any certificates it has.
   *
   * @param request - The request {@link ZonedApiGetFrontendRequest}
   * @returns A Promise of Frontend
   */
  getFrontend = (request: Readonly<ZonedApiGetFrontendRequest>) =>
    this.client.fetch<Frontend>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
      },
      unmarshalFrontend,
    )

  /**
   * Update a frontend. Update a given frontend, specified by its frontend ID. You can update configuration parameters including its name and the port it listens on. Note that the request type is PUT and not PATCH. You must set all parameters.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
      },
      unmarshalFrontend,
    )

  /**
   * Delete a frontend. Delete a given frontend, specified by its frontend ID. This action is irreversible and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteFrontendRequest}
   */
  deleteFrontend = (request: Readonly<ZonedApiDeleteFrontendRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
    })

  protected pageOfListRoutes = (
    request: Readonly<ZonedApiListRoutesRequest> = {},
  ) =>
    this.client.fetch<ListRoutesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes`,
        urlParams: urlParams(
          ['frontend_id', request.frontendId],
          ['order_by', request.orderBy],
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
   * List all routes. List all routes for a given frontend. The response is an array of routes, each one  with a specified backend to direct to if a certain condition is matched (based on the value of the SNI field or HTTP Host header).
   *
   * @param request - The request {@link ZonedApiListRoutesRequest}
   * @returns A Promise of ListRoutesResponse
   */
  listRoutes = (request: Readonly<ZonedApiListRoutesRequest> = {}) =>
    enrichForPagination('routes', this.pageOfListRoutes, request)

  /**
   * Create a route. Create a new route on a given frontend. To configure a route, specify the backend to direct to if a certain condition is matched (based on the value of the SNI field or HTTP Host header).
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes`,
      },
      unmarshalRoute,
    )

  /**
   * Get a route. Retrieve information about an existing route, specified by its route ID. Its full details, origin frontend, target backend and match condition, are returned in the response object.
   *
   * @param request - The request {@link ZonedApiGetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<ZonedApiGetRouteRequest>) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Update a route. Update the configuration of an existing route, specified by its route ID.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Delete a route. Delete an existing route, specified by its route ID. Deleting a route is permanent, and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<ZonedApiDeleteRouteRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/routes/${validatePathParam('routeId', request.routeId)}`,
    })

  /**
   * Get usage statistics of a given Load Balancer.
   *
   * @deprecated
   * @param request - The request {@link ZonedApiGetLbStatsRequest}
   * @returns A Promise of LbStats
   */
  getLbStats = (request: Readonly<ZonedApiGetLbStatsRequest>) =>
    this.client.fetch<LbStats>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/stats`,
        urlParams: urlParams(['backend_id', request.backendId]),
      },
      unmarshalLbStats,
    )

  protected pageOfListBackendStats = (
    request: Readonly<ZonedApiListBackendStatsRequest>,
  ) =>
    this.client.fetch<ListBackendStatsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/backend-stats`,
        urlParams: urlParams(
          ['backend_id', request.backendId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListBackendStatsResponse,
    )

  /**
   * List backend server statistics. List information about your backend servers, including their state and the result of their last health check.
   *
   * @param request - The request {@link ZonedApiListBackendStatsRequest}
   * @returns A Promise of ListBackendStatsResponse
   */
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List ACLs for a given frontend. List the ACLs for a given frontend, specified by its frontend ID. The response is an array of ACL objects, each one representing an ACL that denies or allows traffic based on certain conditions.
   *
   * @param request - The request {@link ZonedApiListAclsRequest}
   * @returns A Promise of ListAclResponse
   */
  listAcls = (request: Readonly<ZonedApiListAclsRequest>) =>
    enrichForPagination('acls', this.pageOfListAcls, request)

  /**
   * Create an ACL for a given frontend. Create a new ACL for a given frontend. Each ACL must have a name, an action to perform (allow or deny), and a match rule (the action is carried out when the incoming traffic matches the rule).
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
      },
      unmarshalAcl,
    )

  /**
   * Get an ACL. Get information for a particular ACL, specified by its ACL ID. The response returns full details of the ACL, including its name, action, match rule and frontend.
   *
   * @param request - The request {@link ZonedApiGetAclRequest}
   * @returns A Promise of Acl
   */
  getAcl = (request: Readonly<ZonedApiGetAclRequest>) =>
    this.client.fetch<Acl>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalAcl,
    )

  /**
   * Update an ACL. Update a particular ACL, specified by its ACL ID. You can update details including its name, action and match rule.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalAcl,
    )

  /**
   * Delete an ACL. Delete an ACL, specified by its ACL ID. Deleting an ACL is irreversible and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteAclRequest}
   */
  deleteAcl = (request: Readonly<ZonedApiDeleteAclRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/acls/${validatePathParam('aclId', request.aclId)}`,
    })

  /**
   * Define all ACLs for a given frontend. For a given frontend specified by its frontend ID, define and add the complete set of ACLS for that frontend. Any existing ACLs on this frontend will be removed.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
      },
      unmarshalSetAclsResponse,
    )

  /**
   * Create an SSL/TLS certificate. Generate a new SSL/TLS certificate for a given Load Balancer. You can choose to create a Let's Encrypt certificate, or import a custom certificate.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
      },
      unmarshalCertificate,
    )

  protected pageOfListCertificates = (
    request: Readonly<ZonedApiListCertificatesRequest>,
  ) =>
    this.client.fetch<ListCertificatesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List all SSL/TLS certificates on a given Load Balancer. List all the SSL/TLS certificates on a given Load Balancer. The response is an array of certificate objects, which are by default listed in ascending order of creation date.
   *
   * @param request - The request {@link ZonedApiListCertificatesRequest}
   * @returns A Promise of ListCertificatesResponse
   */
  listCertificates = (request: Readonly<ZonedApiListCertificatesRequest>) =>
    enrichForPagination('certificates', this.pageOfListCertificates, request)

  /**
   * Get an SSL/TLS certificate. Get information for a particular SSL/TLS certificate, specified by its certificate ID. The response returns full details of the certificate, including its type, main domain name, and alternative domain names.
   *
   * @param request - The request {@link ZonedApiGetCertificateRequest}
   * @returns A Promise of Certificate
   */
  getCertificate = (request: Readonly<ZonedApiGetCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
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
      options?.stop ??
        (res =>
          Promise.resolve(
            !CERTIFICATE_TRANSIENT_STATUSES_LB.includes(res.status),
          )),
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
      },
      unmarshalCertificate,
    )

  /**
   * Delete an SSL/TLS certificate. Delete an SSL/TLS certificate, specified by its certificate ID. Deleting a certificate is irreversible and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteCertificateRequest}
   */
  deleteCertificate = (request: Readonly<ZonedApiDeleteCertificateRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
    })

  protected pageOfListLbTypes = (
    request: Readonly<ZonedApiListLbTypesRequest> = {},
  ) =>
    this.client.fetch<ListLbTypesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lb-types`,
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
   * List all Load Balancer offer types. List all the different commercial Load Balancer types. The response includes an array of offer types, each with a name, description, and information about its stock availability.
   *
   * @param request - The request {@link ZonedApiListLbTypesRequest}
   * @returns A Promise of ListLbTypesResponse
   */
  listLbTypes = (request: Readonly<ZonedApiListLbTypesRequest> = {}) =>
    enrichForPagination('lbTypes', this.pageOfListLbTypes, request)

  /**
   * Create a subscriber. Create a new subscriber, either with an email configuration or a webhook configuration, for a specified Scaleway Project.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/subscribers`,
      },
      unmarshalSubscriber,
    )

  /**
   * Get a subscriber. Retrieve information about an existing subscriber, specified by its subscriber ID. Its full details, including name and email/webhook configuration, are returned in the response object.
   *
   * @param request - The request {@link ZonedApiGetSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  getSubscriber = (request: Readonly<ZonedApiGetSubscriberRequest>) =>
    this.client.fetch<Subscriber>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/subscribers/${validatePathParam('subscriberId', request.subscriberId)}`,
      },
      unmarshalSubscriber,
    )

  protected pageOfListSubscriber = (
    request: Readonly<ZonedApiListSubscriberRequest> = {},
  ) =>
    this.client.fetch<ListSubscriberResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/subscribers`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListSubscriberResponse,
    )

  /**
   * List all subscribers. List all subscribers to Load Balancer alerts. By default, returns all subscribers to Load Balancer alerts for the Organization associated with the authentication token used for the request.
   *
   * @param request - The request {@link ZonedApiListSubscriberRequest}
   * @returns A Promise of ListSubscriberResponse
   */
  listSubscriber = (request: Readonly<ZonedApiListSubscriberRequest> = {}) =>
    enrichForPagination('subscribers', this.pageOfListSubscriber, request)

  /**
   * Update a subscriber. Update the parameters of a given subscriber (e.g. name, webhook configuration, email configuration), specified by its subscriber ID.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/subscribers/${validatePathParam('subscriberId', request.subscriberId)}`,
      },
      unmarshalSubscriber,
    )

  /**
   * Delete a subscriber. Delete an existing subscriber, specified by its subscriber ID. Deleting a subscriber is permanent, and cannot be undone.
   *
   * @param request - The request {@link ZonedApiDeleteSubscriberRequest}
   */
  deleteSubscriber = (request: Readonly<ZonedApiDeleteSubscriberRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lb/subscription/${validatePathParam('subscriberId', request.subscriberId)}`,
    })

  /**
   * Subscribe a subscriber to alerts for a given Load Balancer. Subscribe an existing subscriber to alerts for a given Load Balancer.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lb/${validatePathParam('lbId', request.lbId)}/subscribe`,
      },
      unmarshalLb,
    )

  /**
   * Unsubscribe a subscriber from alerts for a given Load Balancer. Unsubscribe a subscriber from alerts for a given Load Balancer. The subscriber is not deleted, and can be resubscribed in the future if necessary.
   *
   * @param request - The request {@link ZonedApiUnsubscribeFromLbRequest}
   * @returns A Promise of Lb
   */
  unsubscribeFromLb = (request: Readonly<ZonedApiUnsubscribeFromLbRequest>) =>
    this.client.fetch<Lb>(
      {
        method: 'DELETE',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lb/${validatePathParam('lbId', request.lbId)}/unsubscribe`,
      },
      unmarshalLb,
    )

  protected pageOfListLbPrivateNetworks = (
    request: Readonly<ZonedApiListLbPrivateNetworksRequest>,
  ) =>
    this.client.fetch<ListLbPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
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
   * List Private Networks attached to a Load Balancer. List the Private Networks attached to a given Load Balancer, specified by its Load Balancer ID. The response is an array of Private Network objects, giving information including the status, configuration, name and creation date of each Private Network.
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
   * Attach a Load Balancer to a Private Network. Attach a specified Load Balancer to a specified Private Network, defining a static or DHCP configuration for the Load Balancer on the network.
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
        path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/attach-private-network`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Detach Load Balancer from Private Network. Detach a specified Load Balancer from a specified Private Network.
   *
   * @param request - The request {@link ZonedApiDetachPrivateNetworkRequest}
   */
  detachPrivateNetwork = (
    request: Readonly<ZonedApiDetachPrivateNetworkRequest>,
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalZonedApiDetachPrivateNetworkRequest(
          request,
          this.client.settings,
        ),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/lb/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/lbs/${validatePathParam('lbId', request.lbId)}/detach-private-network`,
    })
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
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListLbs = (request: Readonly<ListLbsRequest> = {}) =>
    this.client.fetch<ListLbsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs`,
        urlParams: urlParams(
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
      unmarshalListLbsResponse,
    )

  /**
   * List load balancers.
   *
   * @param request - The request {@link ListLbsRequest}
   * @returns A Promise of ListLbsResponse
   */
  listLbs = (request: Readonly<ListLbsRequest> = {}) =>
    enrichForPagination('lbs', this.pageOfListLbs, request)

  /**
   * Create a load balancer.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs`,
      },
      unmarshalLb,
    )

  /**
   * Get a load balancer.
   *
   * @param request - The request {@link GetLbRequest}
   * @returns A Promise of Lb
   */
  getLb = (request: Readonly<GetLbRequest>) =>
    this.client.fetch<Lb>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}`,
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
        (res =>
          Promise.resolve(!LB_TRANSIENT_STATUSES_LB.includes(res.status))),
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
  updateLb = (request: Readonly<UpdateLbRequest>) =>
    this.client.fetch<Lb>(
      {
        body: JSON.stringify(
          marshalUpdateLbRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}`,
      },
      unmarshalLb,
    )

  /**
   * Delete a load balancer.
   *
   * @param request - The request {@link DeleteLbRequest}
   */
  deleteLb = (request: Readonly<DeleteLbRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}`,
      urlParams: urlParams(['release_ip', request.releaseIp]),
    })

  /**
   * Migrate a load balancer.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/migrate`,
      },
      unmarshalLb,
    )

  protected pageOfListIPs = (request: Readonly<ListIPsRequest> = {}) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips`,
        urlParams: urlParams(
          ['ip_address', request.ipAddress],
          ['ip_type', request.ipType],
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
      unmarshalListIpsResponse,
    )

  /**
   * List IPs.
   *
   * @param request - The request {@link ListIPsRequest}
   * @returns A Promise of ListIpsResponse
   */
  listIPs = (request: Readonly<ListIPsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIPs, request)

  /**
   * Create an IP.
   *
   * @param request - The request {@link CreateIpRequest}
   * @returns A Promise of Ip
   */
  createIp = (request: Readonly<CreateIpRequest>) =>
    this.client.fetch<Ip>(
      {
        body: JSON.stringify(
          marshalCreateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips`,
      },
      unmarshalIp,
    )

  /**
   * Get an IP.
   *
   * @param request - The request {@link GetIpRequest}
   * @returns A Promise of Ip
   */
  getIp = (request: Readonly<GetIpRequest>) =>
    this.client.fetch<Ip>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIp,
    )

  /**
   * Delete an IP.
   *
   * @param request - The request {@link ReleaseIpRequest}
   */
  releaseIp = (request: Readonly<ReleaseIpRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
    })

  /**
   * Update an IP.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIp,
    )

  protected pageOfListBackends = (request: Readonly<ListBackendsRequest>) =>
    this.client.fetch<ListBackendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List backends in a given load balancer.
   *
   * @param request - The request {@link ListBackendsRequest}
   * @returns A Promise of ListBackendsResponse
   */
  listBackends = (request: Readonly<ListBackendsRequest>) =>
    enrichForPagination('backends', this.pageOfListBackends, request)

  /**
   * Create a backend in a given load balancer.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/backends`,
      },
      unmarshalBackend,
    )

  /**
   * Get a backend in a given load balancer.
   *
   * @param request - The request {@link GetBackendRequest}
   * @returns A Promise of Backend
   */
  getBackend = (request: Readonly<GetBackendRequest>) =>
    this.client.fetch<Backend>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}`,
      },
      unmarshalBackend,
    )

  /**
   * Update a backend in a given load balancer.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}`,
      },
      unmarshalBackend,
    )

  /**
   * Delete a backend in a given load balancer.
   *
   * @param request - The request {@link DeleteBackendRequest}
   */
  deleteBackend = (request: Readonly<DeleteBackendRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}`,
    })

  /**
   * Add a set of servers in a given backend.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Remove a set of servers for a given backend.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Define all servers in a given backend.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}/servers`,
      },
      unmarshalBackend,
    )

  /**
   * Update an health check for a given backend.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backends/${validatePathParam('backendId', request.backendId)}/healthcheck`,
      },
      unmarshalHealthCheck,
    )

  protected pageOfListFrontends = (request: Readonly<ListFrontendsRequest>) =>
    this.client.fetch<ListFrontendsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List frontends in a given load balancer.
   *
   * @param request - The request {@link ListFrontendsRequest}
   * @returns A Promise of ListFrontendsResponse
   */
  listFrontends = (request: Readonly<ListFrontendsRequest>) =>
    enrichForPagination('frontends', this.pageOfListFrontends, request)

  /**
   * Create a frontend in a given load balancer.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/frontends`,
      },
      unmarshalFrontend,
    )

  /**
   * Get a frontend.
   *
   * @param request - The request {@link GetFrontendRequest}
   * @returns A Promise of Frontend
   */
  getFrontend = (request: Readonly<GetFrontendRequest>) =>
    this.client.fetch<Frontend>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
      },
      unmarshalFrontend,
    )

  /**
   * Update a frontend.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
      },
      unmarshalFrontend,
    )

  /**
   * Delete a frontend.
   *
   * @param request - The request {@link DeleteFrontendRequest}
   */
  deleteFrontend = (request: Readonly<DeleteFrontendRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}`,
    })

  protected pageOfListRoutes = (request: Readonly<ListRoutesRequest> = {}) =>
    this.client.fetch<ListRoutesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes`,
        urlParams: urlParams(
          ['frontend_id', request.frontendId],
          ['order_by', request.orderBy],
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
   * List all backend redirections.
   *
   * @param request - The request {@link ListRoutesRequest}
   * @returns A Promise of ListRoutesResponse
   */
  listRoutes = (request: Readonly<ListRoutesRequest> = {}) =>
    enrichForPagination('routes', this.pageOfListRoutes, request)

  /**
   * Create a backend redirection.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes`,
      },
      unmarshalRoute,
    )

  /**
   * Get single backend redirection.
   *
   * @param request - The request {@link GetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<GetRouteRequest>) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Edit a backend redirection.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Delete a backend redirection.
   *
   * @param request - The request {@link DeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<DeleteRouteRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
    })

  /**
   * Get usage statistics of a given load balancer.
   *
   * @deprecated
   * @param request - The request {@link GetLbStatsRequest}
   * @returns A Promise of LbStats
   */
  getLbStats = (request: Readonly<GetLbStatsRequest>) =>
    this.client.fetch<LbStats>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/stats`,
        urlParams: urlParams(['backend_id', request.backendId]),
      },
      unmarshalLbStats,
    )

  protected pageOfListBackendStats = (
    request: Readonly<ListBackendStatsRequest>,
  ) =>
    this.client.fetch<ListBackendStatsResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/backend-stats`,
        urlParams: urlParams(
          ['backend_id', request.backendId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListBackendStatsResponse,
    )

  /**
   * List backend server statistics.
   *
   * @param request - The request {@link ListBackendStatsRequest}
   * @returns A Promise of ListBackendStatsResponse
   */
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List ACL for a given frontend.
   *
   * @param request - The request {@link ListAclsRequest}
   * @returns A Promise of ListAclResponse
   */
  listAcls = (request: Readonly<ListAclsRequest>) =>
    enrichForPagination('acls', this.pageOfListAcls, request)

  /**
   * Create an ACL for a given frontend.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/frontends/${validatePathParam('frontendId', request.frontendId)}/acls`,
      },
      unmarshalAcl,
    )

  /**
   * Get an ACL.
   *
   * @param request - The request {@link GetAclRequest}
   * @returns A Promise of Acl
   */
  getAcl = (request: Readonly<GetAclRequest>) =>
    this.client.fetch<Acl>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalAcl,
    )

  /**
   * Update an ACL.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
      },
      unmarshalAcl,
    )

  /**
   * Delete an ACL.
   *
   * @param request - The request {@link DeleteAclRequest}
   */
  deleteAcl = (request: Readonly<DeleteAclRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/acls/${validatePathParam('aclId', request.aclId)}`,
    })

  /**
   * Create a TLS certificate. Generate a new TLS certificate using Let's Encrypt or import your certificate.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
      },
      unmarshalCertificate,
    )

  protected pageOfListCertificates = (
    request: Readonly<ListCertificatesRequest>,
  ) =>
    this.client.fetch<ListCertificatesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/certificates`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
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
   * List all TLS certificates on a given load balancer.
   *
   * @param request - The request {@link ListCertificatesRequest}
   * @returns A Promise of ListCertificatesResponse
   */
  listCertificates = (request: Readonly<ListCertificatesRequest>) =>
    enrichForPagination('certificates', this.pageOfListCertificates, request)

  /**
   * Get a TLS certificate.
   *
   * @param request - The request {@link GetCertificateRequest}
   * @returns A Promise of Certificate
   */
  getCertificate = (request: Readonly<GetCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
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
            !CERTIFICATE_TRANSIENT_STATUSES_LB.includes(res.status),
          )),
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
  updateCertificate = (request: Readonly<UpdateCertificateRequest>) =>
    this.client.fetch<Certificate>(
      {
        body: JSON.stringify(
          marshalUpdateCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
      },
      unmarshalCertificate,
    )

  /**
   * Delete a TLS certificate.
   *
   * @param request - The request {@link DeleteCertificateRequest}
   */
  deleteCertificate = (request: Readonly<DeleteCertificateRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/certificates/${validatePathParam('certificateId', request.certificateId)}`,
    })

  protected pageOfListLbTypes = (request: Readonly<ListLbTypesRequest> = {}) =>
    this.client.fetch<ListLbTypesResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lb-types`,
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
   * List all load balancer offer type.
   *
   * @param request - The request {@link ListLbTypesRequest}
   * @returns A Promise of ListLbTypesResponse
   */
  listLbTypes = (request: Readonly<ListLbTypesRequest> = {}) =>
    enrichForPagination('lbTypes', this.pageOfListLbTypes, request)

  /**
   * Create a subscriber, webhook or email.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subscribers`,
      },
      unmarshalSubscriber,
    )

  /**
   * Get a subscriber.
   *
   * @param request - The request {@link GetSubscriberRequest}
   * @returns A Promise of Subscriber
   */
  getSubscriber = (request: Readonly<GetSubscriberRequest>) =>
    this.client.fetch<Subscriber>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subscribers/${validatePathParam('subscriberId', request.subscriberId)}`,
      },
      unmarshalSubscriber,
    )

  protected pageOfListSubscriber = (
    request: Readonly<ListSubscriberRequest> = {},
  ) =>
    this.client.fetch<ListSubscriberResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subscribers`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListSubscriberResponse,
    )

  /**
   * List all subscriber.
   *
   * @param request - The request {@link ListSubscriberRequest}
   * @returns A Promise of ListSubscriberResponse
   */
  listSubscriber = (request: Readonly<ListSubscriberRequest> = {}) =>
    enrichForPagination('subscribers', this.pageOfListSubscriber, request)

  /**
   * Update a subscriber.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/subscribers/${validatePathParam('subscriberId', request.subscriberId)}`,
      },
      unmarshalSubscriber,
    )

  /**
   * Delete a subscriber.
   *
   * @param request - The request {@link DeleteSubscriberRequest}
   */
  deleteSubscriber = (request: Readonly<DeleteSubscriberRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lb/subscriber/${validatePathParam('subscriberId', request.subscriberId)}`,
    })

  /**
   * Subscribe a subscriber to a given load balancer.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lb/${validatePathParam('lbId', request.lbId)}/subscribe`,
      },
      unmarshalLb,
    )

  /**
   * Unsubscribe a subscriber from a given load balancer.
   *
   * @param request - The request {@link UnsubscribeFromLbRequest}
   * @returns A Promise of Lb
   */
  unsubscribeFromLb = (request: Readonly<UnsubscribeFromLbRequest>) =>
    this.client.fetch<Lb>(
      {
        method: 'DELETE',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lb/${validatePathParam('lbId', request.lbId)}/unsubscribe`,
      },
      unmarshalLb,
    )

  protected pageOfListLbPrivateNetworks = (
    request: Readonly<ListLbPrivateNetworksRequest>,
  ) =>
    this.client.fetch<ListLbPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
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
   * List attached private network of load balancer.
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
   * Add load balancer on instance private network.
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
        path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}/attach`,
      },
      unmarshalPrivateNetwork,
    )

  /**
   * Remove load balancer of private network.
   *
   * @param request - The request {@link DetachPrivateNetworkRequest}
   */
  detachPrivateNetwork = (request: Readonly<DetachPrivateNetworkRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/lb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/lbs/${validatePathParam('lbId', request.lbId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}/detach`,
    })
}
