// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { WaitForOptions, Zone } from '../../../bridge'
import { SERVER_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalCreateServerRequest,
  marshalUpdateServerRequest,
  unmarshalListOSResponse,
  unmarshalListServerTypesResponse,
  unmarshalListServersResponse,
  unmarshalOS,
  unmarshalServer,
  unmarshalServerType,
} from './marshalling.gen'
import type {
  CreateServerRequest,
  DeleteServerRequest,
  GetOSRequest,
  GetServerRequest,
  GetServerTypeRequest,
  ListOSRequest,
  ListOSResponse,
  ListServerTypesRequest,
  ListServerTypesResponse,
  ListServersRequest,
  ListServersResponse,
  OS,
  RebootServerRequest,
  ReinstallServerRequest,
  Server,
  ServerType,
  UpdateServerRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Apple silicon.
 *
 * Scaleway Apple silicon M1 as-a-Service is built using the latest generation
 * of Apple Mac mini hardware (fifth generation).
 *
 * These dedicated Mac mini M1s are designed for developing, building, testing,
 * and signing applications for Apple devices, including iPhones, iPads, Mac
 * computers and much more.
 *
 * Get set to explore, learn and build on a dedicated Mac mini M1 with more
 * performance and speed than you ever thought possible.
 *
 * _Apple silicon as a Service comes with a minimum allocation period of 24 hours_*.
 *
 * Mac mini and macOS are trademarks of Apple Inc., registered in the U.S. and
 * other countries and regions. IOS is a trademark or registered trademark of
 * Cisco in the U.S. and other countries and is used by Apple under license.
 * Scaleway is not affiliated with Apple Inc.
 */
export class ApplesiliconV1Alpha1GenAPI extends API {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = ['fr-par-3']

  /**
   * List all server types technical details.
   *
   * @param request - The request {@link ListServerTypesRequest}
   * @returns A Promise of ListServerTypesResponse
   */
  listServerTypes = (request: Readonly<ListServerTypesRequest> = {}) =>
    this.client.fetch<ListServerTypesResponse>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/server-types`,
      },
      unmarshalListServerTypesResponse,
    )

  /**
   * Get a server technical details.
   *
   * @param request - The request {@link GetServerTypeRequest}
   * @returns A Promise of ServerType
   */
  getServerType = (request: Readonly<GetServerTypeRequest>) =>
    this.client.fetch<ServerType>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/server-type/${validatePathParam('serverType', request.serverType)}`,
      },
      unmarshalServerType,
    )

  /**
   * Create a server.
   *
   * @param request - The request {@link CreateServerRequest}
   * @returns A Promise of Server
   */
  createServer = (request: Readonly<CreateServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers`,
      },
      unmarshalServer,
    )

  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers`,
        urlParams: urlParams(
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
      unmarshalListServersResponse,
    )

  /**
   * List all servers.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}) =>
    enrichForPagination('servers', this.pageOfListServers, request)

  protected pageOfListOS = (request: Readonly<ListOSRequest> = {}) =>
    this.client.fetch<ListOSResponse>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/os`,
        urlParams: urlParams(
          ['name', request.name],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['server_type', request.serverType],
        ),
      },
      unmarshalListOSResponse,
    )

  /**
   * List all Operating System (OS).
   *
   * @param request - The request {@link ListOSRequest}
   * @returns A Promise of ListOSResponse
   */
  listOS = (request: Readonly<ListOSRequest> = {}) =>
    enrichForPagination('os', this.pageOfListOS, request)

  /**
   * Get an Operating System (OS).
   *
   * @param request - The request {@link GetOSRequest}
   * @returns A Promise of OS
   */
  getOS = (request: Readonly<GetOSRequest>) =>
    this.client.fetch<OS>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/os/${validatePathParam('osId', request.osId)}`,
      },
      unmarshalOS,
    )

  /**
   * Get a server.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  /**
   * Waits for {@link Server} to be in a final state.
   *
   * @param request - The request {@link GetServerRequest}
   * @param options - The waiting options
   * @returns A Promise of Server
   */
  waitForServer = (
    request: Readonly<GetServerRequest>,
    options?: Readonly<WaitForOptions<Server>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!SERVER_TRANSIENT_STATUSES.includes(res.status))),
      this.getServer,
      request,
      options,
    )

  /**
   * Update a server.
   *
   * @param request - The request {@link UpdateServerRequest}
   * @returns A Promise of Server
   */
  updateServer = (request: Readonly<UpdateServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalUpdateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  /**
   * Delete a server.
   *
   * @param request - The request {@link DeleteServerRequest}
   */
  deleteServer = (request: Readonly<DeleteServerRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/servers/${validatePathParam('serverId', request.serverId)}`,
    })

  /**
   * Reboot a server.
   *
   * @param request - The request {@link RebootServerRequest}
   * @returns A Promise of Server
   */
  rebootServer = (request: Readonly<RebootServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
      },
      unmarshalServer,
    )

  /**
   * Reinstall a server.
   *
   * @param request - The request {@link ReinstallServerRequest}
   * @returns A Promise of Server
   */
  reinstallServer = (request: Readonly<ReinstallServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/reinstall`,
      },
      unmarshalServer,
    )
}
