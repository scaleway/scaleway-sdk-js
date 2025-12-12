// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { WaitForOptions, ApiLocality } from '@scaleway/sdk-client'
import {
  BMC_ACCESS_TRANSIENT_STATUSES as BMC_ACCESS_TRANSIENT_STATUSES_DEDIBOX,
  RPN_SAN_TRANSIENT_STATUSES as RPN_SAN_TRANSIENT_STATUSES_DEDIBOX,
  RPN_V2_GROUP_TRANSIENT_STATUSES as RPN_V2_GROUP_TRANSIENT_STATUSES_DEDIBOX,
  SERVER_INSTALL_TRANSIENT_STATUSES as SERVER_INSTALL_TRANSIENT_STATUSES_DEDIBOX,
  SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_DEDIBOX,
} from './content.gen.js'
import {
  marshalAttachFailoverIPToMacAddressRequest,
  marshalAttachFailoverIPsRequest,
  unmarshalBMCAccess,
  unmarshalBackup,
  unmarshalCanOrderResponse,
  marshalCreateFailoverIPsRequest,
  unmarshalCreateFailoverIPsResponse,
  marshalCreateServerRequest,
  marshalDetachFailoverIPsRequest,
  unmarshalFailoverIP,
  unmarshalGetIPv6BlockQuotasResponse,
  unmarshalGetRemainingQuotaResponse,
  unmarshalGetRpnStatusResponse,
  unmarshalIP,
  unmarshalIPv6Block,
  marshalIPv6BlockApiCreateIPv6BlockRequest,
  marshalIPv6BlockApiCreateIPv6BlockSubnetRequest,
  marshalIPv6BlockApiUpdateIPv6BlockRequest,
  marshalInstallServerRequest,
  unmarshalInvoice,
  unmarshalListFailoverIPsResponse,
  unmarshalListIPv6BlockSubnetsAvailableResponse,
  unmarshalListIPv6BlocksResponse,
  unmarshalListInvoicesResponse,
  unmarshalListIpsResponse,
  unmarshalListOSResponse,
  unmarshalListOffersResponse,
  unmarshalListRefundsResponse,
  unmarshalListRpnCapableSanServersResponse,
  unmarshalListRpnCapableServersResponse,
  unmarshalListRpnGroupMembersResponse,
  unmarshalListRpnGroupsResponse,
  unmarshalListRpnInvitesResponse,
  unmarshalListRpnSansResponse,
  unmarshalListRpnServerCapabilitiesResponse,
  unmarshalListRpnV2CapableResourcesResponse,
  unmarshalListRpnV2GroupLogsResponse,
  unmarshalListRpnV2GroupsResponse,
  unmarshalListRpnV2MembersResponse,
  unmarshalListServerDisksResponse,
  unmarshalListServerEventsResponse,
  unmarshalListServersResponse,
  unmarshalListServicesResponse,
  unmarshalListSubscribableServerOptionsResponse,
  unmarshalOS,
  unmarshalOffer,
  unmarshalRaid,
  unmarshalRefund,
  unmarshalRescue,
  unmarshalRpnGroup,
  unmarshalRpnSan,
  marshalRpnSanApiAddIpRequest,
  marshalRpnSanApiCreateRpnSanRequest,
  marshalRpnSanApiRemoveIpRequest,
  marshalRpnV1ApiAddRpnGroupMembersRequest,
  marshalRpnV1ApiCreateRpnGroupRequest,
  marshalRpnV1ApiDeleteRpnGroupMembersRequest,
  marshalRpnV1ApiLeaveRpnGroupRequest,
  marshalRpnV1ApiRpnGroupInviteRequest,
  marshalRpnV1ApiUpdateRpnGroupNameRequest,
  marshalRpnV2ApiAddRpnV2MembersRequest,
  marshalRpnV2ApiCreateRpnV2GroupRequest,
  marshalRpnV2ApiDeleteRpnV2MembersRequest,
  marshalRpnV2ApiEnableRpnV2GroupCompatibilityRequest,
  marshalRpnV2ApiUpdateRpnV2GroupNameRequest,
  marshalRpnV2ApiUpdateRpnV2VlanForMembersRequest,
  unmarshalRpnV2Group,
  unmarshalServer,
  unmarshalServerDefaultPartitioning,
  unmarshalServerInstall,
  unmarshalService,
  marshalStartBMCAccessRequest,
  marshalStartRescueRequest,
  marshalSubscribeServerOptionRequest,
  marshalSubscribeStorageOptionsRequest,
  unmarshalSubscribeStorageOptionsResponse,
  marshalUpdateRaidRequest,
  marshalUpdateReverseRequest,
  marshalUpdateServerBackupRequest,
  marshalUpdateServerRequest,
  marshalUpdateServerTagsRequest,
} from './marshalling.gen.js'
import type {
  AttachFailoverIPToMacAddressRequest,
  AttachFailoverIPsRequest,
  BMCAccess,
  Backup,
  BillingApiCanOrderRequest,
  BillingApiDownloadInvoiceRequest,
  BillingApiDownloadRefundRequest,
  BillingApiGetInvoiceRequest,
  BillingApiGetRefundRequest,
  BillingApiListInvoicesRequest,
  BillingApiListRefundsRequest,
  CanOrderResponse,
  CancelServerInstallRequest,
  CreateFailoverIPsRequest,
  CreateFailoverIPsResponse,
  CreateServerRequest,
  DeleteFailoverIPRequest,
  DeleteServerRequest,
  DeleteServiceRequest,
  DetachFailoverIPFromMacAddressRequest,
  DetachFailoverIPsRequest,
  FailoverIP,
  GetBMCAccessRequest,
  GetFailoverIPRequest,
  GetIPv6BlockQuotasResponse,
  GetOSRequest,
  GetOfferRequest,
  GetOrderedServiceRequest,
  GetRaidRequest,
  GetRemainingQuotaRequest,
  GetRemainingQuotaResponse,
  GetRescueRequest,
  GetRpnStatusResponse,
  GetServerBackupRequest,
  GetServerDefaultPartitioningRequest,
  GetServerInstallRequest,
  GetServerRequest,
  GetServiceRequest,
  IP,
  IPv6Block,
  IPv6BlockApiCreateIPv6BlockRequest,
  IPv6BlockApiCreateIPv6BlockSubnetRequest,
  IPv6BlockApiDeleteIPv6BlockRequest,
  IPv6BlockApiGetIPv6BlockQuotasRequest,
  IPv6BlockApiGetIPv6BlockRequest,
  IPv6BlockApiListIPv6BlockSubnetsAvailableRequest,
  IPv6BlockApiListIPv6BlocksRequest,
  IPv6BlockApiUpdateIPv6BlockRequest,
  InstallServerRequest,
  Invoice,
  ListFailoverIPsRequest,
  ListFailoverIPsResponse,
  ListIPv6BlockSubnetsAvailableResponse,
  ListIPv6BlocksResponse,
  ListInvoicesResponse,
  ListIpsResponse,
  ListOSRequest,
  ListOSResponse,
  ListOffersRequest,
  ListOffersResponse,
  ListRefundsResponse,
  ListRpnCapableSanServersResponse,
  ListRpnCapableServersResponse,
  ListRpnGroupMembersResponse,
  ListRpnGroupsResponse,
  ListRpnInvitesResponse,
  ListRpnSansResponse,
  ListRpnServerCapabilitiesResponse,
  ListRpnV2CapableResourcesResponse,
  ListRpnV2GroupLogsResponse,
  ListRpnV2GroupsResponse,
  ListRpnV2MembersResponse,
  ListServerDisksRequest,
  ListServerDisksResponse,
  ListServerEventsRequest,
  ListServerEventsResponse,
  ListServersRequest,
  ListServersResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListSubscribableServerOptionsRequest,
  ListSubscribableServerOptionsResponse,
  OS,
  Offer,
  Raid,
  RebootServerRequest,
  Refund,
  Rescue,
  RpnApiGetRpnStatusRequest,
  RpnApiListRpnServerCapabilitiesRequest,
  RpnGroup,
  RpnSan,
  RpnSanApiAddIpRequest,
  RpnSanApiCreateRpnSanRequest,
  RpnSanApiDeleteRpnSanRequest,
  RpnSanApiGetRpnSanRequest,
  RpnSanApiListAvailableIpsRequest,
  RpnSanApiListIpsRequest,
  RpnSanApiListRpnSansRequest,
  RpnSanApiRemoveIpRequest,
  RpnV1ApiAcceptRpnInviteRequest,
  RpnV1ApiAddRpnGroupMembersRequest,
  RpnV1ApiCreateRpnGroupRequest,
  RpnV1ApiDeleteRpnGroupMembersRequest,
  RpnV1ApiDeleteRpnGroupRequest,
  RpnV1ApiGetRpnGroupRequest,
  RpnV1ApiLeaveRpnGroupRequest,
  RpnV1ApiListRpnCapableSanServersRequest,
  RpnV1ApiListRpnCapableServersRequest,
  RpnV1ApiListRpnGroupMembersRequest,
  RpnV1ApiListRpnGroupsRequest,
  RpnV1ApiListRpnInvitesRequest,
  RpnV1ApiRefuseRpnInviteRequest,
  RpnV1ApiRpnGroupInviteRequest,
  RpnV1ApiUpdateRpnGroupNameRequest,
  RpnV2ApiAddRpnV2MembersRequest,
  RpnV2ApiCreateRpnV2GroupRequest,
  RpnV2ApiDeleteRpnV2GroupRequest,
  RpnV2ApiDeleteRpnV2MembersRequest,
  RpnV2ApiDisableRpnV2GroupCompatibilityRequest,
  RpnV2ApiEnableRpnV2GroupCompatibilityRequest,
  RpnV2ApiGetRpnV2GroupRequest,
  RpnV2ApiListRpnV2CapableResourcesRequest,
  RpnV2ApiListRpnV2GroupLogsRequest,
  RpnV2ApiListRpnV2GroupsRequest,
  RpnV2ApiListRpnV2MembersRequest,
  RpnV2ApiUpdateRpnV2GroupNameRequest,
  RpnV2ApiUpdateRpnV2VlanForMembersRequest,
  RpnV2Group,
  Server,
  ServerDefaultPartitioning,
  ServerInstall,
  Service,
  StartBMCAccessRequest,
  StartRescueRequest,
  StartServerRequest,
  StopBMCAccessRequest,
  StopRescueRequest,
  StopServerRequest,
  SubscribeServerOptionRequest,
  SubscribeStorageOptionsRequest,
  SubscribeStorageOptionsResponse,
  UpdateRaidRequest,
  UpdateReverseRequest,
  UpdateServerBackupRequest,
  UpdateServerRequest,
  UpdateServerTagsRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Dedibox Phoenix API.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    zones: ['fr-par-1', 'fr-par-2', 'nl-ams-1'],
  })

  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['search', request.search],
        ),
      },
      unmarshalListServersResponse,
    )

  /**
   * List baremetal servers for project.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}) =>
    enrichForPagination('servers', this.pageOfListServers, request)

  /**
   * Get a specific baremetal server. Get the server associated with the given ID.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
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
            !SERVER_TRANSIENT_STATUSES_DEDIBOX.includes(res.status),
          )),
      this.getServer,
      request,
      options,
    )

  getServerBackup = (request: Readonly<GetServerBackupRequest>) =>
    this.client.fetch<Backup>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/backups`,
      },
      unmarshalBackup,
    )

  updateServerBackup = (request: Readonly<UpdateServerBackupRequest>) =>
    this.client.fetch<Backup>(
      {
        body: JSON.stringify(
          marshalUpdateServerBackupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/backups`,
      },
      unmarshalBackup,
    )

  protected pageOfListSubscribableServerOptions = (
    request: Readonly<ListSubscribableServerOptionsRequest>,
  ) =>
    this.client.fetch<ListSubscribableServerOptionsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/subscribable-server-options`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListSubscribableServerOptionsResponse,
    )

  /**
   * List subscribable server options. List subscribable options associated to the given server ID.
   *
   * @param request - The request {@link ListSubscribableServerOptionsRequest}
   * @returns A Promise of ListSubscribableServerOptionsResponse
   */
  listSubscribableServerOptions = (
    request: Readonly<ListSubscribableServerOptionsRequest>,
  ) =>
    enrichForPagination(
      'serverOptions',
      this.pageOfListSubscribableServerOptions,
      request,
    )

  /**
   * Subscribe server option. Subscribe option for the given server ID.
   *
   * @param request - The request {@link SubscribeServerOptionRequest}
   * @returns A Promise of Service
   */
  subscribeServerOption = (request: Readonly<SubscribeServerOptionRequest>) =>
    this.client.fetch<Service>(
      {
        body: JSON.stringify(
          marshalSubscribeServerOptionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/subscribe-server-option`,
      },
      unmarshalService,
    )

  /**
   * Create a baremetal server. Create a new baremetal server. The order return you a service ID to follow the provisionning status you could call GetService.
   *
   * @param request - The request {@link CreateServerRequest}
   * @returns A Promise of Service
   */
  createServer = (request: Readonly<CreateServerRequest>) =>
    this.client.fetch<Service>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
      },
      unmarshalService,
    )

  /**
   * Subscribe storage server option. Subscribe storage option for the given server ID.
   *
   * @param request - The request {@link SubscribeStorageOptionsRequest}
   * @returns A Promise of SubscribeStorageOptionsResponse
   */
  subscribeStorageOptions = (
    request: Readonly<SubscribeStorageOptionsRequest>,
  ) =>
    this.client.fetch<SubscribeStorageOptionsResponse>(
      {
        body: JSON.stringify(
          marshalSubscribeStorageOptionsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/subscribe-storage-options`,
      },
      unmarshalSubscribeStorageOptionsResponse,
    )

  /**
   * Update a baremetal server. Update the server associated with the given ID.
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
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  updateServerTags = (request: Readonly<UpdateServerTagsRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalUpdateServerTagsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/tags`,
      },
      unmarshalServer,
    )

  /**
   * Reboot a baremetal server. Reboot the server associated with the given ID, use boot param to reboot in rescue.
   *
   * @param request - The request {@link RebootServerRequest}
   */
  rebootServer = (request: Readonly<RebootServerRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
    })

  /**
   * Start a baremetal server. Start the server associated with the given ID.
   *
   * @param request - The request {@link StartServerRequest}
   */
  startServer = (request: Readonly<StartServerRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/start`,
    })

  /**
   * Stop a baremetal server. Stop the server associated with the given ID.
   *
   * @param request - The request {@link StopServerRequest}
   */
  stopServer = (request: Readonly<StopServerRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/stop`,
    })

  /**
   * Delete a baremetal server. Delete the server associated with the given ID.
   *
   * @param request - The request {@link DeleteServerRequest}
   */
  deleteServer = (request: Readonly<DeleteServerRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
    })

  protected pageOfListServerEvents = (
    request: Readonly<ListServerEventsRequest>,
  ) =>
    this.client.fetch<ListServerEventsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/events`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListServerEventsResponse,
    )

  /**
   * List server events. List events associated to the given server ID.
   *
   * @param request - The request {@link ListServerEventsRequest}
   * @returns A Promise of ListServerEventsResponse
   */
  listServerEvents = (request: Readonly<ListServerEventsRequest>) =>
    enrichForPagination('events', this.pageOfListServerEvents, request)

  protected pageOfListServerDisks = (
    request: Readonly<ListServerDisksRequest>,
  ) =>
    this.client.fetch<ListServerDisksResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/disks`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListServerDisksResponse,
    )

  /**
   * List server disks. List disks associated to the given server ID.
   *
   * @param request - The request {@link ListServerDisksRequest}
   * @returns A Promise of ListServerDisksResponse
   */
  listServerDisks = (request: Readonly<ListServerDisksRequest>) =>
    enrichForPagination('disks', this.pageOfListServerDisks, request)

  getOrderedService = (request: Readonly<GetOrderedServiceRequest>) =>
    this.client.fetch<Service>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ordered-services/${validatePathParam('orderedServiceId', request.orderedServiceId)}`,
      },
      unmarshalService,
    )

  /**
   * Get a specific service. Get the service associated with the given ID.
   *
   * @param request - The request {@link GetServiceRequest}
   * @returns A Promise of Service
   */
  getService = (request: Readonly<GetServiceRequest>) =>
    this.client.fetch<Service>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/services/${validatePathParam('serviceId', request.serviceId)}`,
      },
      unmarshalService,
    )

  /**
   * Delete a specific service. Delete the service associated with the given ID.
   *
   * @param request - The request {@link DeleteServiceRequest}
   * @returns A Promise of Service
   */
  deleteService = (request: Readonly<DeleteServiceRequest>) =>
    this.client.fetch<Service>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/services/${validatePathParam('serviceId', request.serviceId)}`,
      },
      unmarshalService,
    )

  protected pageOfListServices = (
    request: Readonly<ListServicesRequest> = {},
  ) =>
    this.client.fetch<ListServicesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/services`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListServicesResponse,
    )

  /**
   * List services.
   *
   * @param request - The request {@link ListServicesRequest}
   * @returns A Promise of ListServicesResponse
   */
  listServices = (request: Readonly<ListServicesRequest> = {}) =>
    enrichForPagination('services', this.pageOfListServices, request)

  /**
   * Install a baremetal server. Install an OS on the server associated with the given ID.
   *
   * @param request - The request {@link InstallServerRequest}
   * @returns A Promise of ServerInstall
   */
  installServer = (request: Readonly<InstallServerRequest>) =>
    this.client.fetch<ServerInstall>(
      {
        body: JSON.stringify(
          marshalInstallServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/install`,
      },
      unmarshalServerInstall,
    )

  /**
   * Get a specific server installation status. Get the server installation status associated with the given server ID.
   *
   * @param request - The request {@link GetServerInstallRequest}
   * @returns A Promise of ServerInstall
   */
  getServerInstall = (request: Readonly<GetServerInstallRequest>) =>
    this.client.fetch<ServerInstall>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/install`,
      },
      unmarshalServerInstall,
    )

  /**
   * Waits for {@link ServerInstall} to be in a final state.
   *
   * @param request - The request {@link GetServerInstallRequest}
   * @param options - The waiting options
   * @returns A Promise of ServerInstall
   */
  waitForServerInstall = (
    request: Readonly<GetServerInstallRequest>,
    options?: Readonly<WaitForOptions<ServerInstall>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !SERVER_INSTALL_TRANSIENT_STATUSES_DEDIBOX.includes(res.status),
          )),
      this.getServerInstall,
      request,
      options,
    )

  /**
   * Cancels the current (running) server installation. Cancels the current server installation associated with the given server ID.
   *
   * @param request - The request {@link CancelServerInstallRequest}
   */
  cancelServerInstall = (request: Readonly<CancelServerInstallRequest>) =>
    this.client.fetch<void>({
      method: 'POST',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/cancel-install`,
    })

  /**
   * Get server default partitioning. Get the server default partitioning schema associated with the given server ID and OS ID.
   *
   * @param request - The request {@link GetServerDefaultPartitioningRequest}
   * @returns A Promise of ServerDefaultPartitioning
   */
  getServerDefaultPartitioning = (
    request: Readonly<GetServerDefaultPartitioningRequest>,
  ) =>
    this.client.fetch<ServerDefaultPartitioning>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/partitioning/${validatePathParam('osId', request.osId)}`,
      },
      unmarshalServerDefaultPartitioning,
    )

  /**
   * Start BMC (Baseboard Management Controller) access for a given baremetal server. Start BMC (Baseboard Management Controller) access associated with the given ID.
The BMC (Baseboard Management Controller) access is available one hour after the installation of the server.
   *
   * @param request - The request {@link StartBMCAccessRequest}
   */
  startBMCAccess = (request: Readonly<StartBMCAccessRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalStartBMCAccessRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
    })

  /**
   * Get BMC (Baseboard Management Controller) access for a given baremetal server. Get the BMC (Baseboard Management Controller) access associated with the given ID.
   *
   * @param request - The request {@link GetBMCAccessRequest}
   * @returns A Promise of BMCAccess
   */
  getBMCAccess = (request: Readonly<GetBMCAccessRequest>) =>
    this.client.fetch<BMCAccess>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
      },
      unmarshalBMCAccess,
    )

  /**
   * Waits for {@link BMCAccess} to be in a final state.
   *
   * @param request - The request {@link GetBMCAccessRequest}
   * @param options - The waiting options
   * @returns A Promise of BMCAccess
   */
  waitForBMCAccess = (
    request: Readonly<GetBMCAccessRequest>,
    options?: Readonly<WaitForOptions<BMCAccess>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !BMC_ACCESS_TRANSIENT_STATUSES_DEDIBOX.includes(res.status),
          )),
      this.getBMCAccess,
      request,
      options,
    )

  /**
   * Stop BMC (Baseboard Management Controller) access for a given baremetal server. Stop BMC (Baseboard Management Controller) access associated with the given ID.
   *
   * @param request - The request {@link StopBMCAccessRequest}
   */
  stopBMCAccess = (request: Readonly<StopBMCAccessRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
    })

  protected pageOfListOffers = (request: Readonly<ListOffersRequest> = {}) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/offers`,
        urlParams: urlParams(
          ['available_only', request.availableOnly],
          ['catalog', request.catalog],
          ['commercial_range', request.commercialRange],
          ['is_failover_block', request.isFailoverBlock],
          ['is_failover_ip', request.isFailoverIp],
          ['is_rpn_san', request.isRpnSan],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          [
            'sold_in',
            request.soldIn && request.soldIn.length > 0
              ? request.soldIn.join(',')
              : undefined,
          ],
        ),
      },
      unmarshalListOffersResponse,
    )

  /**
   * List offers. List all available server offers.
   *
   * @param request - The request {@link ListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<ListOffersRequest> = {}) =>
    enrichForPagination('offers', this.pageOfListOffers, request)

  /**
   * Get offer. Return specific offer for the given ID.
   *
   * @param request - The request {@link GetOfferRequest}
   * @returns A Promise of Offer
   */
  getOffer = (request: Readonly<GetOfferRequest>) =>
    this.client.fetch<Offer>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/offers/${validatePathParam('offerId', request.offerId)}`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalOffer,
    )

  protected pageOfListOS = (request: Readonly<ListOSRequest>) =>
    this.client.fetch<ListOSResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['server_id', request.serverId],
          ['type', request.type],
        ),
      },
      unmarshalListOSResponse,
    )

  /**
   * List all available OS that can be install on a baremetal server.
   *
   * @param request - The request {@link ListOSRequest}
   * @returns A Promise of ListOSResponse
   */
  listOS = (request: Readonly<ListOSRequest>) =>
    enrichForPagination('os', this.pageOfListOS, request)

  /**
   * Get an OS with a given ID. Return specific OS for the given ID.
   *
   * @param request - The request {@link GetOSRequest}
   * @returns A Promise of OS
   */
  getOS = (request: Readonly<GetOSRequest>) =>
    this.client.fetch<OS>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os/${validatePathParam('osId', request.osId)}`,
        urlParams: urlParams(
          ['project_id', request.projectId],
          ['server_id', request.serverId],
        ),
      },
      unmarshalOS,
    )

  /**
   * Update reverse of ip. Update reverse of ip associated with the given ID.
   *
   * @param request - The request {@link UpdateReverseRequest}
   * @returns A Promise of IP
   */
  updateReverse = (request: Readonly<UpdateReverseRequest>) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalUpdateReverseRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/reverses/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  /**
   * Order failover IPs. Order X failover IPs.
   *
   * @param request - The request {@link CreateFailoverIPsRequest}
   * @returns A Promise of CreateFailoverIPsResponse
   */
  createFailoverIPs = (request: Readonly<CreateFailoverIPsRequest>) =>
    this.client.fetch<CreateFailoverIPsResponse>(
      {
        body: JSON.stringify(
          marshalCreateFailoverIPsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips`,
      },
      unmarshalCreateFailoverIPsResponse,
    )

  /**
   * Attach failovers on baremetal server. Attach failovers on the server associated with the given ID.
   *
   * @param request - The request {@link AttachFailoverIPsRequest}
   */
  attachFailoverIPs = (request: Readonly<AttachFailoverIPsRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalAttachFailoverIPsRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/attach`,
    })

  /**
   * Detach failovers on baremetal server. Detach failovers on the server associated with the given ID.
   *
   * @param request - The request {@link DetachFailoverIPsRequest}
   */
  detachFailoverIPs = (request: Readonly<DetachFailoverIPsRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalDetachFailoverIPsRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/detach`,
    })

  /**
   * Attach a failover IP to a MAC address.
   *
   * @param request - The request {@link AttachFailoverIPToMacAddressRequest}
   * @returns A Promise of IP
   */
  attachFailoverIPToMacAddress = (
    request: Readonly<AttachFailoverIPToMacAddressRequest>,
  ) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalAttachFailoverIPToMacAddressRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/${validatePathParam('ipId', request.ipId)}/attach-to-mac-address`,
      },
      unmarshalIP,
    )

  /**
   * Detach a failover IP from a MAC address.
   *
   * @param request - The request {@link DetachFailoverIPFromMacAddressRequest}
   * @returns A Promise of IP
   */
  detachFailoverIPFromMacAddress = (
    request: Readonly<DetachFailoverIPFromMacAddressRequest>,
  ) =>
    this.client.fetch<IP>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/${validatePathParam('ipId', request.ipId)}/detach-from-mac-address`,
      },
      unmarshalIP,
    )

  /**
   * Delete a failover server. Delete the failover associated with the given ID.
   *
   * @param request - The request {@link DeleteFailoverIPRequest}
   */
  deleteFailoverIP = (request: Readonly<DeleteFailoverIPRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/${validatePathParam('ipId', request.ipId)}`,
    })

  protected pageOfListFailoverIPs = (
    request: Readonly<ListFailoverIPsRequest> = {},
  ) =>
    this.client.fetch<ListFailoverIPsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips`,
        urlParams: urlParams(
          ['only_available', request.onlyAvailable],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['search', request.search],
        ),
      },
      unmarshalListFailoverIPsResponse,
    )

  /**
   * List failovers for project. List failovers servers for project.
   *
   * @param request - The request {@link ListFailoverIPsRequest}
   * @returns A Promise of ListFailoverIPsResponse
   */
  listFailoverIPs = (request: Readonly<ListFailoverIPsRequest> = {}) =>
    enrichForPagination('failoverIps', this.pageOfListFailoverIPs, request)

  /**
   * Get a specific baremetal server. Get the server associated with the given ID.
   *
   * @param request - The request {@link GetFailoverIPRequest}
   * @returns A Promise of FailoverIP
   */
  getFailoverIP = (request: Readonly<GetFailoverIPRequest>) =>
    this.client.fetch<FailoverIP>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalFailoverIP,
    )

  /**
   * Get remaining quota.
   *
   * @param request - The request {@link GetRemainingQuotaRequest}
   * @returns A Promise of GetRemainingQuotaResponse
   */
  getRemainingQuota = (request: Readonly<GetRemainingQuotaRequest> = {}) =>
    this.client.fetch<GetRemainingQuotaResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/remaining-quota`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalGetRemainingQuotaResponse,
    )

  /**
   * Get raid. Return raid for the given server ID.
   *
   * @param request - The request {@link GetRaidRequest}
   * @returns A Promise of Raid
   */
  getRaid = (request: Readonly<GetRaidRequest>) =>
    this.client.fetch<Raid>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/raid`,
      },
      unmarshalRaid,
    )

  /**
   * Update RAID. Update RAID associated with the given server ID.
   *
   * @param request - The request {@link UpdateRaidRequest}
   */
  updateRaid = (request: Readonly<UpdateRaidRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalUpdateRaidRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/update-raid`,
    })

  /**
   * Start in rescue baremetal server. Start in rescue the server associated with the given ID.
   *
   * @param request - The request {@link StartRescueRequest}
   * @returns A Promise of Rescue
   */
  startRescue = (request: Readonly<StartRescueRequest>) =>
    this.client.fetch<Rescue>(
      {
        body: JSON.stringify(
          marshalStartRescueRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/rescue`,
      },
      unmarshalRescue,
    )

  /**
   * Get rescue information. Return rescue information for the given server ID.
   *
   * @param request - The request {@link GetRescueRequest}
   * @returns A Promise of Rescue
   */
  getRescue = (request: Readonly<GetRescueRequest>) =>
    this.client.fetch<Rescue>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/rescue`,
      },
      unmarshalRescue,
    )

  /**
   * Stop rescue on baremetal server. Stop rescue on the server associated with the given ID.
   *
   * @param request - The request {@link StopRescueRequest}
   */
  stopRescue = (request: Readonly<StopRescueRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/rescue`,
    })
}

/**
 * Dedibox Phoenix Billing API.
 */
export class BillingAPI extends ParentAPI {
  protected pageOfListInvoices = (
    request: Readonly<BillingApiListInvoicesRequest> = {},
  ) =>
    this.client.fetch<ListInvoicesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/invoices`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListInvoicesResponse,
    )

  listInvoices = (request: Readonly<BillingApiListInvoicesRequest> = {}) =>
    enrichForPagination('invoices', this.pageOfListInvoices, request)

  getInvoice = (request: Readonly<BillingApiGetInvoiceRequest>) =>
    this.client.fetch<Invoice>(
      {
        method: 'GET',
        path: `/dedibox/v1/invoices/${validatePathParam('invoiceId', request.invoiceId)}`,
      },
      unmarshalInvoice,
    )

  downloadInvoice = (request: Readonly<BillingApiDownloadInvoiceRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/dedibox/v1/invoices/${validatePathParam('invoiceId', request.invoiceId)}/download`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  protected pageOfListRefunds = (
    request: Readonly<BillingApiListRefundsRequest> = {},
  ) =>
    this.client.fetch<ListRefundsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/refunds`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRefundsResponse,
    )

  listRefunds = (request: Readonly<BillingApiListRefundsRequest> = {}) =>
    enrichForPagination('refunds', this.pageOfListRefunds, request)

  getRefund = (request: Readonly<BillingApiGetRefundRequest>) =>
    this.client.fetch<Refund>(
      {
        method: 'GET',
        path: `/dedibox/v1/refunds/${validatePathParam('refundId', request.refundId)}`,
      },
      unmarshalRefund,
    )

  downloadRefund = (request: Readonly<BillingApiDownloadRefundRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/dedibox/v1/refunds/${validatePathParam('refundId', request.refundId)}/download`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  canOrder = (request: Readonly<BillingApiCanOrderRequest> = {}) =>
    this.client.fetch<CanOrderResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/can-order`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalCanOrderResponse,
    )
}

/**
 * Dedibox Phoenix IPv6 Block API.
 */
export class IPv6BlockAPI extends ParentAPI {
  /**
   * Get IPv6 block quota. Get IPv6 block quota with the given project ID.
/48 one per organization.
/56 link to your number of server.
/64 link to your number of failover IP.
   *
   * @param request - The request {@link IPv6BlockApiGetIPv6BlockQuotasRequest}
   * @returns A Promise of GetIPv6BlockQuotasResponse
   */
  getIPv6BlockQuotas = (
    request: Readonly<IPv6BlockApiGetIPv6BlockQuotasRequest> = {},
  ) =>
    this.client.fetch<GetIPv6BlockQuotasResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/ipv6-block-quotas`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalGetIPv6BlockQuotasResponse,
    )

  /**
   * Create IPv6 block for baremetal server. Create IPv6 block associated with the given project ID.
   *
   * @param request - The request {@link IPv6BlockApiCreateIPv6BlockRequest}
   * @returns A Promise of IPv6Block
   */
  createIPv6Block = (
    request: Readonly<IPv6BlockApiCreateIPv6BlockRequest> = {},
  ) =>
    this.client.fetch<IPv6Block>(
      {
        body: JSON.stringify(
          marshalIPv6BlockApiCreateIPv6BlockRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/ipv6-block`,
      },
      unmarshalIPv6Block,
    )

  /**
   * List IPv6 blocks. List IPv6 blocks associated given project ID.
   *
   * @param request - The request {@link IPv6BlockApiListIPv6BlocksRequest}
   * @returns A Promise of ListIPv6BlocksResponse
   */
  listIPv6Blocks = (
    request: Readonly<IPv6BlockApiListIPv6BlocksRequest> = {},
  ) =>
    this.client.fetch<ListIPv6BlocksResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/ipv6-blocks`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalListIPv6BlocksResponse,
    )

  /**
   * Get first IPv6 block. Get the first IPv6 block associated with the given project ID.
   *
   * @param request - The request {@link IPv6BlockApiGetIPv6BlockRequest}
   * @returns A Promise of IPv6Block
   */
  getIPv6Block = (request: Readonly<IPv6BlockApiGetIPv6BlockRequest> = {}) =>
    this.client.fetch<IPv6Block>(
      {
        method: 'GET',
        path: `/dedibox/v1/ipv6-block`,
        urlParams: urlParams(['project_id', request.projectId]),
      },
      unmarshalIPv6Block,
    )

  /**
   * Update IPv6 block. Update DNS associated to IPv6 block.
If DNS is used, minimum of 2 is necessary and maximum of 5 (no duplicate).
   *
   * @param request - The request {@link IPv6BlockApiUpdateIPv6BlockRequest}
   * @returns A Promise of IPv6Block
   */
  updateIPv6Block = (request: Readonly<IPv6BlockApiUpdateIPv6BlockRequest>) =>
    this.client.fetch<IPv6Block>(
      {
        body: JSON.stringify(
          marshalIPv6BlockApiUpdateIPv6BlockRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/ipv6-blocks/${validatePathParam('blockId', request.blockId)}`,
      },
      unmarshalIPv6Block,
    )

  /**
   * Delete IPv6 block. Delete IPv6 block subnet with the given ID.
   *
   * @param request - The request {@link IPv6BlockApiDeleteIPv6BlockRequest}
   */
  deleteIPv6Block = (request: Readonly<IPv6BlockApiDeleteIPv6BlockRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/dedibox/v1/ipv6-blocks/${validatePathParam('blockId', request.blockId)}`,
    })

  /**
   * Create IPv6 block subnet. Create IPv6 block subnet for the given IP ID.
/48 could create subnet in /56 (quota link to your number of server).
/56 could create subnet in /64 (quota link to your number of failover IP).
   *
   * @param request - The request {@link IPv6BlockApiCreateIPv6BlockSubnetRequest}
   * @returns A Promise of IPv6Block
   */
  createIPv6BlockSubnet = (
    request: Readonly<IPv6BlockApiCreateIPv6BlockSubnetRequest>,
  ) =>
    this.client.fetch<IPv6Block>(
      {
        body: JSON.stringify(
          marshalIPv6BlockApiCreateIPv6BlockSubnetRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/ipv6-blocks/${validatePathParam('blockId', request.blockId)}/subnets`,
      },
      unmarshalIPv6Block,
    )

  /**
   * List available IPv6 block subnets. List all available IPv6 block subnets for given IP ID.
   *
   * @param request - The request {@link IPv6BlockApiListIPv6BlockSubnetsAvailableRequest}
   * @returns A Promise of ListIPv6BlockSubnetsAvailableResponse
   */
  listIPv6BlockSubnetsAvailable = (
    request: Readonly<IPv6BlockApiListIPv6BlockSubnetsAvailableRequest>,
  ) =>
    this.client.fetch<ListIPv6BlockSubnetsAvailableResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/ipv6-blocks/${validatePathParam('blockId', request.blockId)}/subnets`,
      },
      unmarshalListIPv6BlockSubnetsAvailableResponse,
    )
}

/**
 * Dedibox Phoenix RPN API.
 */
export class RpnAPI extends ParentAPI {
  protected pageOfListRpnServerCapabilities = (
    request: Readonly<RpnApiListRpnServerCapabilitiesRequest> = {},
  ) =>
    this.client.fetch<ListRpnServerCapabilitiesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn/server-capabilities`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRpnServerCapabilitiesResponse,
    )

  listRpnServerCapabilities = (
    request: Readonly<RpnApiListRpnServerCapabilitiesRequest> = {},
  ) =>
    enrichForPagination(
      'servers',
      this.pageOfListRpnServerCapabilities,
      request,
    )

  getRpnStatus = (request: Readonly<RpnApiGetRpnStatusRequest> = {}) =>
    this.client.fetch<GetRpnStatusResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn/status`,
        urlParams: urlParams(
          ['project_id', request.projectId],
          ['rpnv1_group_id', request.rpnv1GroupId],
          ['rpnv2_group_id', request.rpnv2GroupId],
        ),
      },
      unmarshalGetRpnStatusResponse,
    )
}

/**
 * Dedibox Phoenix RPN SAN API.
 */
export class RpnSanAPI extends ParentAPI {
  protected pageOfListRpnSans = (
    request: Readonly<RpnSanApiListRpnSansRequest> = {},
  ) =>
    this.client.fetch<ListRpnSansResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn-sans`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRpnSansResponse,
    )

  listRpnSans = (request: Readonly<RpnSanApiListRpnSansRequest> = {}) =>
    enrichForPagination('rpnSans', this.pageOfListRpnSans, request)

  getRpnSan = (request: Readonly<RpnSanApiGetRpnSanRequest>) =>
    this.client.fetch<RpnSan>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}`,
      },
      unmarshalRpnSan,
    )

  /**
   * Waits for {@link RpnSan} to be in a final state.
   *
   * @param request - The request {@link RpnSanApiGetRpnSanRequest}
   * @param options - The waiting options
   * @returns A Promise of RpnSan
   */
  waitForRpnSan = (
    request: Readonly<RpnSanApiGetRpnSanRequest>,
    options?: Readonly<WaitForOptions<RpnSan>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !RPN_SAN_TRANSIENT_STATUSES_DEDIBOX.includes(res.status),
          )),
      this.getRpnSan,
      request,
      options,
    )

  deleteRpnSan = (request: Readonly<RpnSanApiDeleteRpnSanRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}`,
    })

  createRpnSan = (request: Readonly<RpnSanApiCreateRpnSanRequest>) =>
    this.client.fetch<Service>(
      {
        body: JSON.stringify(
          marshalRpnSanApiCreateRpnSanRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpn-sans`,
      },
      unmarshalService,
    )

  listIps = (request: Readonly<RpnSanApiListIpsRequest>) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}/ips`,
        urlParams: urlParams(['type', request.type]),
      },
      unmarshalListIpsResponse,
    )

  addIp = (request: Readonly<RpnSanApiAddIpRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRpnSanApiAddIpRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}/ips`,
    })

  removeIp = (request: Readonly<RpnSanApiRemoveIpRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRpnSanApiRemoveIpRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'DELETE',
      path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}/ips`,
    })

  listAvailableIps = (request: Readonly<RpnSanApiListAvailableIpsRequest>) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}/available-ips`,
        urlParams: urlParams(['type', request.type]),
      },
      unmarshalListIpsResponse,
    )
}

/**
 * Dedibox Phoenix RPN v1 API.
 */
export class RpnV1API extends ParentAPI {
  protected pageOfListRpnGroups = (
    request: Readonly<RpnV1ApiListRpnGroupsRequest> = {},
  ) =>
    this.client.fetch<ListRpnGroupsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/groups`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRpnGroupsResponse,
    )

  listRpnGroups = (request: Readonly<RpnV1ApiListRpnGroupsRequest> = {}) =>
    enrichForPagination('rpnGroups', this.pageOfListRpnGroups, request)

  getRpnGroup = (request: Readonly<RpnV1ApiGetRpnGroupRequest>) =>
    this.client.fetch<RpnGroup>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalRpnGroup,
    )

  createRpnGroup = (request: Readonly<RpnV1ApiCreateRpnGroupRequest>) =>
    this.client.fetch<RpnGroup>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiCreateRpnGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv1/groups`,
      },
      unmarshalRpnGroup,
    )

  deleteRpnGroup = (request: Readonly<RpnV1ApiDeleteRpnGroupRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}`,
    })

  updateRpnGroupName = (request: Readonly<RpnV1ApiUpdateRpnGroupNameRequest>) =>
    this.client.fetch<RpnGroup>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiUpdateRpnGroupNameRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalRpnGroup,
    )

  protected pageOfListRpnGroupMembers = (
    request: Readonly<RpnV1ApiListRpnGroupMembersRequest>,
  ) =>
    this.client.fetch<ListRpnGroupMembersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/members`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRpnGroupMembersResponse,
    )

  listRpnGroupMembers = (
    request: Readonly<RpnV1ApiListRpnGroupMembersRequest>,
  ) => enrichForPagination('members', this.pageOfListRpnGroupMembers, request)

  rpnGroupInvite = (request: Readonly<RpnV1ApiRpnGroupInviteRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRpnV1ApiRpnGroupInviteRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/invite`,
    })

  leaveRpnGroup = (request: Readonly<RpnV1ApiLeaveRpnGroupRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRpnV1ApiLeaveRpnGroupRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/leave`,
    })

  addRpnGroupMembers = (request: Readonly<RpnV1ApiAddRpnGroupMembersRequest>) =>
    this.client.fetch<RpnGroup>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiAddRpnGroupMembersRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/members`,
      },
      unmarshalRpnGroup,
    )

  deleteRpnGroupMembers = (
    request: Readonly<RpnV1ApiDeleteRpnGroupMembersRequest>,
  ) =>
    this.client.fetch<RpnGroup>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiDeleteRpnGroupMembersRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/members`,
      },
      unmarshalRpnGroup,
    )

  protected pageOfListRpnCapableServers = (
    request: Readonly<RpnV1ApiListRpnCapableServersRequest> = {},
  ) =>
    this.client.fetch<ListRpnCapableServersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/capable-servers`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRpnCapableServersResponse,
    )

  listRpnCapableServers = (
    request: Readonly<RpnV1ApiListRpnCapableServersRequest> = {},
  ) => enrichForPagination('servers', this.pageOfListRpnCapableServers, request)

  protected pageOfListRpnCapableSanServers = (
    request: Readonly<RpnV1ApiListRpnCapableSanServersRequest> = {},
  ) =>
    this.client.fetch<ListRpnCapableSanServersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/capable-san-servers`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRpnCapableSanServersResponse,
    )

  listRpnCapableSanServers = (
    request: Readonly<RpnV1ApiListRpnCapableSanServersRequest> = {},
  ) =>
    enrichForPagination(
      'sanServers',
      this.pageOfListRpnCapableSanServers,
      request,
    )

  protected pageOfListRpnInvites = (
    request: Readonly<RpnV1ApiListRpnInvitesRequest> = {},
  ) =>
    this.client.fetch<ListRpnInvitesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/invites`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
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
      unmarshalListRpnInvitesResponse,
    )

  listRpnInvites = (request: Readonly<RpnV1ApiListRpnInvitesRequest> = {}) =>
    enrichForPagination('members', this.pageOfListRpnInvites, request)

  acceptRpnInvite = (request: Readonly<RpnV1ApiAcceptRpnInviteRequest>) =>
    this.client.fetch<void>({
      method: 'POST',
      path: `/dedibox/v1/rpnv1/invites/${validatePathParam('memberId', request.memberId)}/accept`,
    })

  refuseRpnInvite = (request: Readonly<RpnV1ApiRefuseRpnInviteRequest>) =>
    this.client.fetch<void>({
      method: 'POST',
      path: `/dedibox/v1/rpnv1/invites/${validatePathParam('memberId', request.memberId)}/refuse`,
    })
}

/**
 * Dedibox Phoenix RPN v2 API.
 */
export class RpnV2API extends ParentAPI {
  protected pageOfListRpnV2Groups = (
    request: Readonly<RpnV2ApiListRpnV2GroupsRequest> = {},
  ) =>
    this.client.fetch<ListRpnV2GroupsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRpnV2GroupsResponse,
    )

  listRpnV2Groups = (request: Readonly<RpnV2ApiListRpnV2GroupsRequest> = {}) =>
    enrichForPagination('rpnGroups', this.pageOfListRpnV2Groups, request)

  protected pageOfListRpnV2Members = (
    request: Readonly<RpnV2ApiListRpnV2MembersRequest>,
  ) =>
    this.client.fetch<ListRpnV2MembersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/members`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['type', request.type],
        ),
      },
      unmarshalListRpnV2MembersResponse,
    )

  listRpnV2Members = (request: Readonly<RpnV2ApiListRpnV2MembersRequest>) =>
    enrichForPagination('members', this.pageOfListRpnV2Members, request)

  getRpnV2Group = (request: Readonly<RpnV2ApiGetRpnV2GroupRequest>) =>
    this.client.fetch<RpnV2Group>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalRpnV2Group,
    )

  /**
   * Waits for {@link RpnV2Group} to be in a final state.
   *
   * @param request - The request {@link RpnV2ApiGetRpnV2GroupRequest}
   * @param options - The waiting options
   * @returns A Promise of RpnV2Group
   */
  waitForRpnV2Group = (
    request: Readonly<RpnV2ApiGetRpnV2GroupRequest>,
    options?: Readonly<WaitForOptions<RpnV2Group>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !RPN_V2_GROUP_TRANSIENT_STATUSES_DEDIBOX.includes(res.status),
          )),
      this.getRpnV2Group,
      request,
      options,
    )

  createRpnV2Group = (request: Readonly<RpnV2ApiCreateRpnV2GroupRequest>) =>
    this.client.fetch<RpnV2Group>(
      {
        body: JSON.stringify(
          marshalRpnV2ApiCreateRpnV2GroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv2/groups`,
      },
      unmarshalRpnV2Group,
    )

  deleteRpnV2Group = (request: Readonly<RpnV2ApiDeleteRpnV2GroupRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}`,
    })

  updateRpnV2GroupName = (
    request: Readonly<RpnV2ApiUpdateRpnV2GroupNameRequest>,
  ) =>
    this.client.fetch<RpnV2Group>(
      {
        body: JSON.stringify(
          marshalRpnV2ApiUpdateRpnV2GroupNameRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}`,
      },
      unmarshalRpnV2Group,
    )

  addRpnV2Members = (request: Readonly<RpnV2ApiAddRpnV2MembersRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRpnV2ApiAddRpnV2MembersRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/members`,
    })

  deleteRpnV2Members = (request: Readonly<RpnV2ApiDeleteRpnV2MembersRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRpnV2ApiDeleteRpnV2MembersRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'DELETE',
      path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/members`,
    })

  protected pageOfListRpnV2CapableResources = (
    request: Readonly<RpnV2ApiListRpnV2CapableResourcesRequest> = {},
  ) =>
    this.client.fetch<ListRpnV2CapableResourcesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups/capable`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRpnV2CapableResourcesResponse,
    )

  listRpnV2CapableResources = (
    request: Readonly<RpnV2ApiListRpnV2CapableResourcesRequest> = {},
  ) =>
    enrichForPagination(
      'servers',
      this.pageOfListRpnV2CapableResources,
      request,
    )

  protected pageOfListRpnV2GroupLogs = (
    request: Readonly<RpnV2ApiListRpnV2GroupLogsRequest>,
  ) =>
    this.client.fetch<ListRpnV2GroupLogsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/logs`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListRpnV2GroupLogsResponse,
    )

  listRpnV2GroupLogs = (request: Readonly<RpnV2ApiListRpnV2GroupLogsRequest>) =>
    enrichForPagination('logs', this.pageOfListRpnV2GroupLogs, request)

  updateRpnV2VlanForMembers = (
    request: Readonly<RpnV2ApiUpdateRpnV2VlanForMembersRequest>,
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRpnV2ApiUpdateRpnV2VlanForMembersRequest(
          request,
          this.client.settings,
        ),
      ),
      headers: jsonContentHeaders,
      method: 'PATCH',
      path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/vlan`,
    })

  enableRpnV2GroupCompatibility = (
    request: Readonly<RpnV2ApiEnableRpnV2GroupCompatibilityRequest>,
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalRpnV2ApiEnableRpnV2GroupCompatibilityRequest(
          request,
          this.client.settings,
        ),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/enable-compatibility`,
    })

  disableRpnV2GroupCompatibility = (
    request: Readonly<RpnV2ApiDisableRpnV2GroupCompatibilityRequest>,
  ) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/disable-compatibility`,
    })
}
