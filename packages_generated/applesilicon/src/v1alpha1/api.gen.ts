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
  SERVER_PRIVATE_NETWORK_SERVER_TRANSIENT_STATUSES as SERVER_PRIVATE_NETWORK_SERVER_TRANSIENT_STATUSES_APPLESILICON,
  SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_APPLESILICON,
} from './content.gen'
import {
  marshalBatchCreateServersRequest,
  marshalCreateServerRequest,
  marshalPrivateNetworkApiAddServerPrivateNetworkRequest,
  marshalPrivateNetworkApiSetServerPrivateNetworksRequest,
  marshalReinstallServerRequest,
  marshalStartConnectivityDiagnosticRequest,
  marshalUpdateServerRequest,
  unmarshalBatchCreateServersResponse,
  unmarshalConnectivityDiagnostic,
  unmarshalListOSResponse,
  unmarshalListServerPrivateNetworksResponse,
  unmarshalListServersResponse,
  unmarshalListServerTypesResponse,
  unmarshalOS,
  unmarshalServer,
  unmarshalServerPrivateNetwork,
  unmarshalServerType,
  unmarshalSetServerPrivateNetworksResponse,
  unmarshalStartConnectivityDiagnosticResponse,
} from './marshalling.gen'
import type {
  BatchCreateServersRequest,
  BatchCreateServersResponse,
  ConnectivityDiagnostic,
  CreateServerRequest,
  DeleteServerRequest,
  GetConnectivityDiagnosticRequest,
  GetOSRequest,
  GetServerRequest,
  GetServerTypeRequest,
  ListOSRequest,
  ListOSResponse,
  ListServerPrivateNetworksResponse,
  ListServersRequest,
  ListServersResponse,
  ListServerTypesRequest,
  ListServerTypesResponse,
  OS,
  PrivateNetworkApiAddServerPrivateNetworkRequest,
  PrivateNetworkApiDeleteServerPrivateNetworkRequest,
  PrivateNetworkApiGetServerPrivateNetworkRequest,
  PrivateNetworkApiListServerPrivateNetworksRequest,
  PrivateNetworkApiSetServerPrivateNetworksRequest,
  RebootServerRequest,
  ReinstallServerRequest,
  Server,
  ServerPrivateNetwork,
  ServerType,
  SetServerPrivateNetworksResponse,
  StartConnectivityDiagnosticRequest,
  StartConnectivityDiagnosticResponse,
  UpdateServerRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Apple silicon API.

This API allows you to manage your Apple silicon machines.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    zones: ['fr-par-3'],
  })

  /**
   * List server types. List all technical details about Apple silicon server types available in the specified zone. Since there is only one Availability Zone for Apple silicon servers, the targeted value is `fr-par-3`.
   *
   * @param request - The request {@link ListServerTypesRequest}
   * @returns A Promise of ListServerTypesResponse
   */
  listServerTypes = (request: Readonly<ListServerTypesRequest> = {}) =>
    this.client.fetch<ListServerTypesResponse>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/server-types`,
      },
      unmarshalListServerTypesResponse,
    )

  /**
   * Get a server type. Get technical details (CPU, disk size etc.) of a server type.
   *
   * @param request - The request {@link GetServerTypeRequest}
   * @returns A Promise of ServerType
   */
  getServerType = (request: Readonly<GetServerTypeRequest>) =>
    this.client.fetch<ServerType>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/server-type/${validatePathParam('serverType', request.serverType)}`,
      },
      unmarshalServerType,
    )

  /**
   * Create a server. Create a new server in the targeted zone, specifying its configuration including name and type.
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
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
      },
      unmarshalServer,
    )

  /**
   * Create multiple servers atomically. Create multiple servers in the targeted zone specifying their configurations. If the request cannot entirely be fulfilled, no servers are created.
   *
   * @param request - The request {@link BatchCreateServersRequest}
   * @returns A Promise of BatchCreateServersResponse
   */
  batchCreateServers = (request: Readonly<BatchCreateServersRequest>) =>
    this.client.fetch<BatchCreateServersResponse>(
      {
        body: JSON.stringify(
          marshalBatchCreateServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/batch-create-servers`,
      },
      unmarshalBatchCreateServersResponse,
    )

  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        urlParams: urlParams(
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
      unmarshalListServersResponse,
    )

  /**
   * List all servers. List all servers in the specified zone. By default, returned servers in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
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
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os`,
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
   * List all Operating Systems (OS). List all Operating Systems (OS). The response will include the total number of OS as well as their associated IDs, names and labels.
   *
   * @param request - The request {@link ListOSRequest}
   * @returns A Promise of ListOSResponse
   */
  listOS = (request: Readonly<ListOSRequest> = {}) =>
    enrichForPagination('os', this.pageOfListOS, request)

  /**
   * Get an Operating System (OS). Get an Operating System (OS).  The response will include the OS's unique ID as well as its name and label.
   *
   * @param request - The request {@link GetOSRequest}
   * @returns A Promise of OS
   */
  getOS = (request: Readonly<GetOSRequest>) =>
    this.client.fetch<OS>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os/${validatePathParam('osId', request.osId)}`,
      },
      unmarshalOS,
    )

  /**
   * Get a server. Retrieve information about an existing Apple silicon server, specified by its server ID. Its full details, including name, status and IP address, are returned in the response object.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
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
          Promise.resolve(
            !SERVER_TRANSIENT_STATUSES_APPLESILICON.includes(res.status),
          )),
      this.getServer,
      request,
      options,
    )

  /**
   * Update a server. Update the parameters of an existing Apple silicon server, specified by its server ID.
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
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  /**
   * Delete a server. Delete an existing Apple silicon server, specified by its server ID. Deleting a server is permanent, and cannot be undone. Note that the minimum allocation period for Apple silicon-as-a-service is 24 hours, meaning you cannot delete your server prior to that.
   *
   * @param request - The request {@link DeleteServerRequest}
   */
  deleteServer = (request: Readonly<DeleteServerRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
    })

  /**
   * Reboot a server. Reboot an existing Apple silicon server, specified by its server ID.
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
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
      },
      unmarshalServer,
    )

  /**
   * Reinstall a server. Reinstall an existing Apple silicon server (specified by its server ID) from a new image (OS). All the data on the disk is deleted and all configuration is reset to the defailt configuration values of the image (OS).
   *
   * @param request - The request {@link ReinstallServerRequest}
   * @returns A Promise of Server
   */
  reinstallServer = (request: Readonly<ReinstallServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalReinstallServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/reinstall`,
      },
      unmarshalServer,
    )

  startConnectivityDiagnostic = (
    request: Readonly<StartConnectivityDiagnosticRequest>,
  ) =>
    this.client.fetch<StartConnectivityDiagnosticResponse>(
      {
        body: JSON.stringify(
          marshalStartConnectivityDiagnosticRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/connectivity-diagnostics`,
      },
      unmarshalStartConnectivityDiagnosticResponse,
    )

  getConnectivityDiagnostic = (
    request: Readonly<GetConnectivityDiagnosticRequest>,
  ) =>
    this.client.fetch<ConnectivityDiagnostic>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/connectivity-diagnostics/${validatePathParam('diagnosticId', request.diagnosticId)}`,
      },
      unmarshalConnectivityDiagnostic,
    )
}

/**
 * Apple silicon - Private Networks API.
 */
export class PrivateNetworkAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    zones: ['fr-par-1', 'fr-par-3'],
  })

  getServerPrivateNetwork = (
    request: Readonly<PrivateNetworkApiGetServerPrivateNetworkRequest>,
  ) =>
    this.client.fetch<ServerPrivateNetwork>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
      },
      unmarshalServerPrivateNetwork,
    )

  /**
   * Waits for {@link ServerPrivateNetwork} to be in a final state.
   *
   * @param request - The request {@link PrivateNetworkApiGetServerPrivateNetworkRequest}
   * @param options - The waiting options
   * @returns A Promise of ServerPrivateNetwork
   */
  waitForServerPrivateNetwork = (
    request: Readonly<PrivateNetworkApiGetServerPrivateNetworkRequest>,
    options?: Readonly<WaitForOptions<ServerPrivateNetwork>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !SERVER_PRIVATE_NETWORK_SERVER_TRANSIENT_STATUSES_APPLESILICON.includes(
              res.status,
            ),
          )),
      this.getServerPrivateNetwork,
      request,
      options,
    )

  /**
   * Add a server to a Private Network. Add an Apple silicon server to a Private Network.
   *
   * @param request - The request {@link PrivateNetworkApiAddServerPrivateNetworkRequest}
   * @returns A Promise of ServerPrivateNetwork
   */
  addServerPrivateNetwork = (
    request: Readonly<PrivateNetworkApiAddServerPrivateNetworkRequest>,
  ) =>
    this.client.fetch<ServerPrivateNetwork>(
      {
        body: JSON.stringify(
          marshalPrivateNetworkApiAddServerPrivateNetworkRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks`,
      },
      unmarshalServerPrivateNetwork,
    )

  /**
   * Set multiple Private Networks on a server. Configure multiple Private Networks on an Apple silicon server.
   *
   * @param request - The request {@link PrivateNetworkApiSetServerPrivateNetworksRequest}
   * @returns A Promise of SetServerPrivateNetworksResponse
   */
  setServerPrivateNetworks = (
    request: Readonly<PrivateNetworkApiSetServerPrivateNetworksRequest>,
  ) =>
    this.client.fetch<SetServerPrivateNetworksResponse>(
      {
        body: JSON.stringify(
          marshalPrivateNetworkApiSetServerPrivateNetworksRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks`,
      },
      unmarshalSetServerPrivateNetworksResponse,
    )

  protected pageOfListServerPrivateNetworks = (
    request: Readonly<PrivateNetworkApiListServerPrivateNetworksRequest> = {},
  ) =>
    this.client.fetch<ListServerPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/server-private-networks`,
        urlParams: urlParams(
          ['ipam_ip_ids', request.ipamIpIds],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['private_network_id', request.privateNetworkId],
          ['project_id', request.projectId],
          ['server_id', request.serverId],
        ),
      },
      unmarshalListServerPrivateNetworksResponse,
    )

  /**
   * List the Private Networks of a server. List the Private Networks of an Apple silicon server.
   *
   * @param request - The request {@link PrivateNetworkApiListServerPrivateNetworksRequest}
   * @returns A Promise of ListServerPrivateNetworksResponse
   */
  listServerPrivateNetworks = (
    request: Readonly<PrivateNetworkApiListServerPrivateNetworksRequest> = {},
  ) =>
    enrichForPagination(
      'serverPrivateNetworks',
      this.pageOfListServerPrivateNetworks,
      request,
    )

  /**
   * Delete a Private Network.
   *
   * @param request - The request {@link PrivateNetworkApiDeleteServerPrivateNetworkRequest}
   */
  deleteServerPrivateNetwork = (
    request: Readonly<PrivateNetworkApiDeleteServerPrivateNetworkRequest>,
  ) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/apple-silicon/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
    })
}
