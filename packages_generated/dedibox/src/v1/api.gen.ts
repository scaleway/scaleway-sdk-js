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
import {BMC_ACCESS_TRANSIENT_STATUSES as BMC_ACCESS_TRANSIENT_STATUSES_DEDIBOX,I_PV6_BLOCK_DELEGATION_TRANSIENT_STATUSES as I_PV6_BLOCK_DELEGATION_TRANSIENT_STATUSES_DEDIBOX,RPN_GROUP_MEMBER_TRANSIENT_STATUSES as RPN_GROUP_MEMBER_TRANSIENT_STATUSES_DEDIBOX,RPN_SAN_TRANSIENT_STATUSES as RPN_SAN_TRANSIENT_STATUSES_DEDIBOX,RPN_V2_GROUP_TRANSIENT_STATUSES as RPN_V2_GROUP_TRANSIENT_STATUSES_DEDIBOX,RPN_V2_MEMBER_TRANSIENT_STATUSES as RPN_V2_MEMBER_TRANSIENT_STATUSES_DEDIBOX,SERVER_INSTALL_TRANSIENT_STATUSES as SERVER_INSTALL_TRANSIENT_STATUSES_DEDIBOX,SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_DEDIBOX,SERVICE_PROVISIONING_TRANSIENT_STATUSES as SERVICE_PROVISIONING_TRANSIENT_STATUSES_DEDIBOX,} from './content.gen.js'
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
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      zones: [
        'fr-par-1',
        'fr-par-2',
        'nl-ams-1',
      ],
    })
  
  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['search', request.search],
        ),
        signal: options?.signal,
      },
      unmarshalListServersResponse,
    )
  
  /**
   * List baremetal servers for project.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('servers', this.pageOfListServers, request, options)

  
  /**
   * Get a specific baremetal server. Get the server associated with the given ID.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!SERVER_TRANSIENT_STATUSES_DEDIBOX.includes(res.status))),
      this.getServer,
      request,
      options,
    )

  
  getServerBackup = (request: Readonly<GetServerBackupRequest>, options?: RequestOptions) =>
    this.client.fetch<Backup>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/backups`,
        signal: options?.signal,
      },
      unmarshalBackup,
    )

  
  updateServerBackup = (request: Readonly<UpdateServerBackupRequest>, options?: RequestOptions) =>
    this.client.fetch<Backup>(
      {
        body: JSON.stringify(
          marshalUpdateServerBackupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/backups`,
        signal: options?.signal,
      },
      unmarshalBackup,
    )

  
  protected pageOfListSubscribableServerOptions = (request: Readonly<ListSubscribableServerOptionsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListSubscribableServerOptionsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/subscribable-server-options`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListSubscribableServerOptionsResponse,
    )
  
  /**
   * List subscribable server options. List subscribable options associated to the given server ID.
   *
   * @param request - The request {@link ListSubscribableServerOptionsRequest}
   * @returns A Promise of ListSubscribableServerOptionsResponse
   */
  listSubscribableServerOptions = (request: Readonly<ListSubscribableServerOptionsRequest>, options?: RequestOptions) =>
    enrichForPagination('serverOptions', this.pageOfListSubscribableServerOptions, request, options)

  
  /**
   * Subscribe server option. Subscribe option for the given server ID.
   *
   * @param request - The request {@link SubscribeServerOptionRequest}
   * @returns A Promise of Service
   */
  subscribeServerOption = (request: Readonly<SubscribeServerOptionRequest>, options?: RequestOptions) =>
    this.client.fetch<Service>(
      {
        body: JSON.stringify(
          marshalSubscribeServerOptionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/subscribe-server-option`,
        signal: options?.signal,
      },
      unmarshalService,
    )

  
  /**
   * Create a baremetal server. Create a new baremetal server. The order return you a service ID to follow the provisioning status you could call GetService.
   *
   * @param request - The request {@link CreateServerRequest}
   * @returns A Promise of Service
   */
  createServer = (request: Readonly<CreateServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Service>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        signal: options?.signal,
      },
      unmarshalService,
    )

  
  /**
   * Subscribe storage server option. Subscribe storage option for the given server ID.
   *
   * @param request - The request {@link SubscribeStorageOptionsRequest}
   * @returns A Promise of SubscribeStorageOptionsResponse
   */
  subscribeStorageOptions = (request: Readonly<SubscribeStorageOptionsRequest>, options?: RequestOptions) =>
    this.client.fetch<SubscribeStorageOptionsResponse>(
      {
        body: JSON.stringify(
          marshalSubscribeStorageOptionsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/subscribe-storage-options`,
        signal: options?.signal,
      },
      unmarshalSubscribeStorageOptionsResponse,
    )

  
  /**
   * Update a baremetal server. Update the server associated with the given ID.
   *
   * @param request - The request {@link UpdateServerRequest}
   * @returns A Promise of Server
   */
  updateServer = (request: Readonly<UpdateServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalUpdateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  updateServerTags = (request: Readonly<UpdateServerTagsRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalUpdateServerTagsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/tags`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Reboot a baremetal server. Reboot the server associated with the given ID, use boot param to reboot in rescue.
   *
   * @param request - The request {@link RebootServerRequest}
   */
  rebootServer = (request: Readonly<RebootServerRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
        signal: options?.signal,
      },
    )

  
  /**
   * Start a baremetal server. Start the server associated with the given ID.
   *
   * @param request - The request {@link StartServerRequest}
   */
  startServer = (request: Readonly<StartServerRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/start`,
        signal: options?.signal,
      },
    )

  
  /**
   * Stop a baremetal server. Stop the server associated with the given ID.
   *
   * @param request - The request {@link StopServerRequest}
   */
  stopServer = (request: Readonly<StopServerRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/stop`,
        signal: options?.signal,
      },
    )

  
  /**
   * Delete a baremetal server. Delete the server associated with the given ID.
   *
   * @param request - The request {@link DeleteServerRequest}
   */
  deleteServer = (request: Readonly<DeleteServerRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListServerEvents = (request: Readonly<ListServerEventsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListServerEventsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/events`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListServerEventsResponse,
    )
  
  /**
   * List server events. List events associated to the given server ID.
   *
   * @param request - The request {@link ListServerEventsRequest}
   * @returns A Promise of ListServerEventsResponse
   */
  listServerEvents = (request: Readonly<ListServerEventsRequest>, options?: RequestOptions) =>
    enrichForPagination('events', this.pageOfListServerEvents, request, options)

  
  protected pageOfListServerDisks = (request: Readonly<ListServerDisksRequest>, options?: RequestOptions) =>
    this.client.fetch<ListServerDisksResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/disks`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListServerDisksResponse,
    )
  
  /**
   * List server disks. List disks associated to the given server ID.
   *
   * @param request - The request {@link ListServerDisksRequest}
   * @returns A Promise of ListServerDisksResponse
   */
  listServerDisks = (request: Readonly<ListServerDisksRequest>, options?: RequestOptions) =>
    enrichForPagination('disks', this.pageOfListServerDisks, request, options)

  
  getOrderedService = (request: Readonly<GetOrderedServiceRequest>, options?: RequestOptions) =>
    this.client.fetch<Service>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ordered-services/${validatePathParam('orderedServiceId', request.orderedServiceId)}`,
        signal: options?.signal,
      },
      unmarshalService,
    )

  
  /**
   * Get a specific service. Get the service associated with the given ID.
   *
   * @param request - The request {@link GetServiceRequest}
   * @returns A Promise of Service
   */
  getService = (request: Readonly<GetServiceRequest>, options?: RequestOptions) =>
    this.client.fetch<Service>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/services/${validatePathParam('serviceId', request.serviceId)}`,
        signal: options?.signal,
      },
      unmarshalService,
    )

  
  /**
   * Delete a specific service. Delete the service associated with the given ID.
   *
   * @param request - The request {@link DeleteServiceRequest}
   * @returns A Promise of Service
   */
  deleteService = (request: Readonly<DeleteServiceRequest>, options?: RequestOptions) =>
    this.client.fetch<Service>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/services/${validatePathParam('serviceId', request.serviceId)}`,
        signal: options?.signal,
      },
      unmarshalService,
    )

  
  protected pageOfListServices = (request: Readonly<ListServicesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServicesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/services`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListServicesResponse,
    )
  
  /**
   * List services.
   *
   * @param request - The request {@link ListServicesRequest}
   * @returns A Promise of ListServicesResponse
   */
  listServices = (request: Readonly<ListServicesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('services', this.pageOfListServices, request, options)

  
  /**
   * Install a baremetal server. Install an OS on the server associated with the given ID.
   *
   * @param request - The request {@link InstallServerRequest}
   * @returns A Promise of ServerInstall
   */
  installServer = (request: Readonly<InstallServerRequest>, options?: RequestOptions) =>
    this.client.fetch<ServerInstall>(
      {
        body: JSON.stringify(
          marshalInstallServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/install`,
        signal: options?.signal,
      },
      unmarshalServerInstall,
    )

  
  /**
   * Get a specific server installation status. Get the server installation status associated with the given server ID.
   *
   * @param request - The request {@link GetServerInstallRequest}
   * @returns A Promise of ServerInstall
   */
  getServerInstall = (request: Readonly<GetServerInstallRequest>, options?: RequestOptions) =>
    this.client.fetch<ServerInstall>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/install`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!SERVER_INSTALL_TRANSIENT_STATUSES_DEDIBOX.includes(res.status))),
      this.getServerInstall,
      request,
      options,
    )

  
  /**
   * Cancels the current (running) server installation. Cancels the current server installation associated with the given server ID.
   *
   * @param request - The request {@link CancelServerInstallRequest}
   */
  cancelServerInstall = (request: Readonly<CancelServerInstallRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/cancel-install`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get server default partitioning. Get the server default partitioning schema associated with the given server ID and OS ID.
   *
   * @param request - The request {@link GetServerDefaultPartitioningRequest}
   * @returns A Promise of ServerDefaultPartitioning
   */
  getServerDefaultPartitioning = (request: Readonly<GetServerDefaultPartitioningRequest>, options?: RequestOptions) =>
    this.client.fetch<ServerDefaultPartitioning>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/partitioning/${validatePathParam('osId', request.osId)}`,
        signal: options?.signal,
      },
      unmarshalServerDefaultPartitioning,
    )

  
  /**
   * Start BMC (Baseboard Management Controller) access for a given baremetal server. Start BMC (Baseboard Management Controller) access associated with the given ID.
The BMC (Baseboard Management Controller) access is available one hour after the installation of the server.
   *
   * @param request - The request {@link StartBMCAccessRequest}
   */
  startBMCAccess = (request: Readonly<StartBMCAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalStartBMCAccessRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get BMC (Baseboard Management Controller) access for a given baremetal server. Get the BMC (Baseboard Management Controller) access associated with the given ID.
   *
   * @param request - The request {@link GetBMCAccessRequest}
   * @returns A Promise of BMCAccess
   */
  getBMCAccess = (request: Readonly<GetBMCAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<BMCAccess>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!BMC_ACCESS_TRANSIENT_STATUSES_DEDIBOX.includes(res.status))),
      this.getBMCAccess,
      request,
      options,
    )

  
  /**
   * Stop BMC (Baseboard Management Controller) access for a given baremetal server. Stop BMC (Baseboard Management Controller) access associated with the given ID.
   *
   * @param request - The request {@link StopBMCAccessRequest}
   */
  stopBMCAccess = (request: Readonly<StopBMCAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListOffers = (request: Readonly<ListOffersRequest> = {}, options?: RequestOptions) =>
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
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['sold_in', request.soldIn
          && request.soldIn.length > 0 ? request.soldIn.join(',') : undefined],
        ),
        signal: options?.signal,
      },
      unmarshalListOffersResponse,
    )
  
  /**
   * List offers. List all available server offers.
   *
   * @param request - The request {@link ListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<ListOffersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('offers', this.pageOfListOffers, request, options)

  
  /**
   * Get offer. Return specific offer for the given ID.
   *
   * @param request - The request {@link GetOfferRequest}
   * @returns A Promise of Offer
   */
  getOffer = (request: Readonly<GetOfferRequest>, options?: RequestOptions) =>
    this.client.fetch<Offer>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/offers/${validatePathParam('offerId', request.offerId)}`,
        urlParams: urlParams(
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalOffer,
    )

  
  protected pageOfListOS = (request: Readonly<ListOSRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListOSResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['type', request.type],  
          ...Object.entries(resolveOneOf([
            {param: 'server_id',
              value: request.serverId,
            },
            {param: 'offer_id',
              value: request.offerId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListOSResponse,
    )
  
  /**
   * List all available OS that can be install on a baremetal server.
   *
   * @param request - The request {@link ListOSRequest}
   * @returns A Promise of ListOSResponse
   */
  listOS = (request: Readonly<ListOSRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('os', this.pageOfListOS, request, options)

  
  /**
   * Get an OS with a given ID. Return specific OS for the given ID.
   *
   * @param request - The request {@link GetOSRequest}
   * @returns A Promise of OS
   */
  getOS = (request: Readonly<GetOSRequest>, options?: RequestOptions) =>
    this.client.fetch<OS>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os/${validatePathParam('osId', request.osId)}`,
        urlParams: urlParams(
          ['project_id', request.projectId],
          ['server_id', request.serverId],
        ),
        signal: options?.signal,
      },
      unmarshalOS,
    )

  
  /**
   * Update reverse of ip. Update reverse of ip associated with the given ID.
   *
   * @param request - The request {@link UpdateReverseRequest}
   * @returns A Promise of IP
   */
  updateReverse = (request: Readonly<UpdateReverseRequest>, options?: RequestOptions) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalUpdateReverseRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/reverses/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
      unmarshalIP,
    )

  
  /**
   * Order failover IPs. Order X failover IPs.
   *
   * @param request - The request {@link CreateFailoverIPsRequest}
   * @returns A Promise of CreateFailoverIPsResponse
   */
  createFailoverIPs = (request: Readonly<CreateFailoverIPsRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateFailoverIPsResponse>(
      {
        body: JSON.stringify(
          marshalCreateFailoverIPsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips`,
        signal: options?.signal,
      },
      unmarshalCreateFailoverIPsResponse,
    )

  
  /**
   * Attach failovers on baremetal server. Attach failovers on the server associated with the given ID.
   *
   * @param request - The request {@link AttachFailoverIPsRequest}
   */
  attachFailoverIPs = (request: Readonly<AttachFailoverIPsRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalAttachFailoverIPsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/attach`,
        signal: options?.signal,
      },
    )

  
  /**
   * Detach failovers on baremetal server. Detach failovers on the server associated with the given ID.
   *
   * @param request - The request {@link DetachFailoverIPsRequest}
   */
  detachFailoverIPs = (request: Readonly<DetachFailoverIPsRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalDetachFailoverIPsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/detach`,
        signal: options?.signal,
      },
    )

  
  /**
   * Attach a failover IP to a MAC address.
   *
   * @param request - The request {@link AttachFailoverIPToMacAddressRequest}
   * @returns A Promise of IP
   */
  attachFailoverIPToMacAddress = (request: Readonly<AttachFailoverIPToMacAddressRequest>, options?: RequestOptions) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalAttachFailoverIPToMacAddressRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/${validatePathParam('ipId', request.ipId)}/attach-to-mac-address`,
        signal: options?.signal,
      },
      unmarshalIP,
    )

  
  /**
   * Detach a failover IP from a MAC address.
   *
   * @param request - The request {@link DetachFailoverIPFromMacAddressRequest}
   * @returns A Promise of IP
   */
  detachFailoverIPFromMacAddress = (request: Readonly<DetachFailoverIPFromMacAddressRequest>, options?: RequestOptions) =>
    this.client.fetch<IP>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/${validatePathParam('ipId', request.ipId)}/detach-from-mac-address`,
        signal: options?.signal,
      },
      unmarshalIP,
    )

  
  /**
   * Delete a failover server. Delete the failover associated with the given ID.
   *
   * @param request - The request {@link DeleteFailoverIPRequest}
   */
  deleteFailoverIP = (request: Readonly<DeleteFailoverIPRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListFailoverIPs = (request: Readonly<ListFailoverIPsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListFailoverIPsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips`,
        urlParams: urlParams(
          ['only_available', request.onlyAvailable],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['search', request.search],
        ),
        signal: options?.signal,
      },
      unmarshalListFailoverIPsResponse,
    )
  
  /**
   * List failovers for project. List failovers servers for project.
   *
   * @param request - The request {@link ListFailoverIPsRequest}
   * @returns A Promise of ListFailoverIPsResponse
   */
  listFailoverIPs = (request: Readonly<ListFailoverIPsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('failoverIps', this.pageOfListFailoverIPs, request, options)

  
  /**
   * Get a specific baremetal server. Get the server associated with the given ID.
   *
   * @param request - The request {@link GetFailoverIPRequest}
   * @returns A Promise of FailoverIP
   */
  getFailoverIP = (request: Readonly<GetFailoverIPRequest>, options?: RequestOptions) =>
    this.client.fetch<FailoverIP>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/failover-ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
      unmarshalFailoverIP,
    )

  
  /**
   * Get remaining quota.
   *
   * @param request - The request {@link GetRemainingQuotaRequest}
   * @returns A Promise of GetRemainingQuotaResponse
   */
  getRemainingQuota = (request: Readonly<GetRemainingQuotaRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<GetRemainingQuotaResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/remaining-quota`,
        urlParams: urlParams(
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalGetRemainingQuotaResponse,
    )

  
  /**
   * Get raid. Return raid for the given server ID.
   *
   * @param request - The request {@link GetRaidRequest}
   * @returns A Promise of Raid
   */
  getRaid = (request: Readonly<GetRaidRequest>, options?: RequestOptions) =>
    this.client.fetch<Raid>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/raid`,
        signal: options?.signal,
      },
      unmarshalRaid,
    )

  
  /**
   * Update RAID. Update RAID associated with the given server ID.
   *
   * @param request - The request {@link UpdateRaidRequest}
   */
  updateRaid = (request: Readonly<UpdateRaidRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalUpdateRaidRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/update-raid`,
        signal: options?.signal,
      },
    )

  
  /**
   * Start in rescue baremetal server. Start in rescue the server associated with the given ID.
   *
   * @param request - The request {@link StartRescueRequest}
   * @returns A Promise of Rescue
   */
  startRescue = (request: Readonly<StartRescueRequest>, options?: RequestOptions) =>
    this.client.fetch<Rescue>(
      {
        body: JSON.stringify(
          marshalStartRescueRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/rescue`,
        signal: options?.signal,
      },
      unmarshalRescue,
    )

  
  /**
   * Get rescue information. Return rescue information for the given server ID.
   *
   * @param request - The request {@link GetRescueRequest}
   * @returns A Promise of Rescue
   */
  getRescue = (request: Readonly<GetRescueRequest>, options?: RequestOptions) =>
    this.client.fetch<Rescue>(
      {
        method: 'GET',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/rescue`,
        signal: options?.signal,
      },
      unmarshalRescue,
    )

  
  /**
   * Stop rescue on baremetal server. Stop rescue on the server associated with the given ID.
   *
   * @param request - The request {@link StopRescueRequest}
   */
  stopRescue = (request: Readonly<StopRescueRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/rescue`,
        signal: options?.signal,
      },
    )

  
}

/**
 * Dedibox Phoenix Billing API.
 */
export class BillingAPI extends ParentAPI {
  protected pageOfListInvoices = (request: Readonly<BillingApiListInvoicesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListInvoicesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/invoices`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListInvoicesResponse,
    )
  
  listInvoices = (request: Readonly<BillingApiListInvoicesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('invoices', this.pageOfListInvoices, request, options)

  
  getInvoice = (request: Readonly<BillingApiGetInvoiceRequest>, options?: RequestOptions) =>
    this.client.fetch<Invoice>(
      {
        method: 'GET',
        path: `/dedibox/v1/invoices/${validatePathParam('invoiceId', request.invoiceId)}`,
        signal: options?.signal,
      },
      unmarshalInvoice,
    )

  
  downloadInvoice = (request: Readonly<BillingApiDownloadInvoiceRequest>, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/dedibox/v1/invoices/${validatePathParam('invoiceId', request.invoiceId)}/download`,
        urlParams: urlParams(
          ['dl', 1],
        ),
        responseType: 'blob',
        signal: options?.signal,
      },
    )

  
  protected pageOfListRefunds = (request: Readonly<BillingApiListRefundsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRefundsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/refunds`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRefundsResponse,
    )
  
  listRefunds = (request: Readonly<BillingApiListRefundsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('refunds', this.pageOfListRefunds, request, options)

  
  getRefund = (request: Readonly<BillingApiGetRefundRequest>, options?: RequestOptions) =>
    this.client.fetch<Refund>(
      {
        method: 'GET',
        path: `/dedibox/v1/refunds/${validatePathParam('refundId', request.refundId)}`,
        signal: options?.signal,
      },
      unmarshalRefund,
    )

  
  downloadRefund = (request: Readonly<BillingApiDownloadRefundRequest>, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/dedibox/v1/refunds/${validatePathParam('refundId', request.refundId)}/download`,
        urlParams: urlParams(
          ['dl', 1],
        ),
        responseType: 'blob',
        signal: options?.signal,
      },
    )

  
  canOrder = (request: Readonly<BillingApiCanOrderRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<CanOrderResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/can-order`,
        urlParams: urlParams(
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
        ),
        signal: options?.signal,
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
  getIPv6BlockQuotas = (request: Readonly<IPv6BlockApiGetIPv6BlockQuotasRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<GetIPv6BlockQuotasResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/ipv6-block-quotas`,
        urlParams: urlParams(
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalGetIPv6BlockQuotasResponse,
    )

  
  /**
   * Create IPv6 block for baremetal server. Create IPv6 block associated with the given project ID.
   *
   * @param request - The request {@link IPv6BlockApiCreateIPv6BlockRequest}
   * @returns A Promise of IPv6Block
   */
  createIPv6Block = (request: Readonly<IPv6BlockApiCreateIPv6BlockRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<IPv6Block>(
      {
        body: JSON.stringify(
          marshalIPv6BlockApiCreateIPv6BlockRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/ipv6-block`,
        signal: options?.signal,
      },
      unmarshalIPv6Block,
    )

  
  /**
   * List IPv6 blocks. List IPv6 blocks associated given project ID.
   *
   * @param request - The request {@link IPv6BlockApiListIPv6BlocksRequest}
   * @returns A Promise of ListIPv6BlocksResponse
   */
  listIPv6Blocks = (request: Readonly<IPv6BlockApiListIPv6BlocksRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListIPv6BlocksResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/ipv6-blocks`,
        urlParams: urlParams(
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListIPv6BlocksResponse,
    )

  
  /**
   * Get first IPv6 block. Get the first IPv6 block associated with the given project ID.
   *
   * @param request - The request {@link IPv6BlockApiGetIPv6BlockRequest}
   * @returns A Promise of IPv6Block
   */
  getIPv6Block = (request: Readonly<IPv6BlockApiGetIPv6BlockRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<IPv6Block>(
      {
        method: 'GET',
        path: `/dedibox/v1/ipv6-block`,
        urlParams: urlParams(
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
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
  updateIPv6Block = (request: Readonly<IPv6BlockApiUpdateIPv6BlockRequest>, options?: RequestOptions) =>
    this.client.fetch<IPv6Block>(
      {
        body: JSON.stringify(
          marshalIPv6BlockApiUpdateIPv6BlockRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/ipv6-blocks/${validatePathParam('blockId', request.blockId)}`,
        signal: options?.signal,
      },
      unmarshalIPv6Block,
    )

  
  /**
   * Delete IPv6 block. Delete IPv6 block subnet with the given ID.
   *
   * @param request - The request {@link IPv6BlockApiDeleteIPv6BlockRequest}
   */
  deleteIPv6Block = (request: Readonly<IPv6BlockApiDeleteIPv6BlockRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/ipv6-blocks/${validatePathParam('blockId', request.blockId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Create IPv6 block subnet. Create IPv6 block subnet for the given IP ID.
/48 could create subnet in /56 (quota link to your number of server).
/56 could create subnet in /64 (quota link to your number of failover IP).
   *
   * @param request - The request {@link IPv6BlockApiCreateIPv6BlockSubnetRequest}
   * @returns A Promise of IPv6Block
   */
  createIPv6BlockSubnet = (request: Readonly<IPv6BlockApiCreateIPv6BlockSubnetRequest>, options?: RequestOptions) =>
    this.client.fetch<IPv6Block>(
      {
        body: JSON.stringify(
          marshalIPv6BlockApiCreateIPv6BlockSubnetRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/ipv6-blocks/${validatePathParam('blockId', request.blockId)}/subnets`,
        signal: options?.signal,
      },
      unmarshalIPv6Block,
    )

  
  /**
   * List available IPv6 block subnets. List all available IPv6 block subnets for given IP ID.
   *
   * @param request - The request {@link IPv6BlockApiListIPv6BlockSubnetsAvailableRequest}
   * @returns A Promise of ListIPv6BlockSubnetsAvailableResponse
   */
  listIPv6BlockSubnetsAvailable = (request: Readonly<IPv6BlockApiListIPv6BlockSubnetsAvailableRequest>, options?: RequestOptions) =>
    this.client.fetch<ListIPv6BlockSubnetsAvailableResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/ipv6-blocks/${validatePathParam('blockId', request.blockId)}/subnets`,
        signal: options?.signal,
      },
      unmarshalListIPv6BlockSubnetsAvailableResponse,
    )

  
}

/**
 * Dedibox Phoenix RPN API.
 */
export class RpnAPI extends ParentAPI {
  protected pageOfListRpnServerCapabilities = (request: Readonly<RpnApiListRpnServerCapabilitiesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRpnServerCapabilitiesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn/server-capabilities`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnServerCapabilitiesResponse,
    )
  
  listRpnServerCapabilities = (request: Readonly<RpnApiListRpnServerCapabilitiesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('servers', this.pageOfListRpnServerCapabilities, request, options)

  
  getRpnStatus = (request: Readonly<RpnApiGetRpnStatusRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<GetRpnStatusResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn/status`,
        urlParams: urlParams(
          ['project_id', request.projectId],
          ['rpnv1_group_id', request.rpnv1GroupId],
          ['rpnv2_group_id', request.rpnv2GroupId],
        ),
        signal: options?.signal,
      },
      unmarshalGetRpnStatusResponse,
    )

  
}

/**
 * Dedibox Phoenix RPN SAN API.
 */
export class RpnSanAPI extends ParentAPI {
  protected pageOfListRpnSans = (request: Readonly<RpnSanApiListRpnSansRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRpnSansResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn-sans`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnSansResponse,
    )
  
  listRpnSans = (request: Readonly<RpnSanApiListRpnSansRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('rpnSans', this.pageOfListRpnSans, request, options)

  
  getRpnSan = (request: Readonly<RpnSanApiGetRpnSanRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnSan>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!RPN_SAN_TRANSIENT_STATUSES_DEDIBOX.includes(res.status))),
      this.getRpnSan,
      request,
      options,
    )

  
  deleteRpnSan = (request: Readonly<RpnSanApiDeleteRpnSanRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}`,
        signal: options?.signal,
      },
    )

  
  createRpnSan = (request: Readonly<RpnSanApiCreateRpnSanRequest>, options?: RequestOptions) =>
    this.client.fetch<Service>(
      {
        body: JSON.stringify(
          marshalRpnSanApiCreateRpnSanRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpn-sans`,
        signal: options?.signal,
      },
      unmarshalService,
    )

  
  listIps = (request: Readonly<RpnSanApiListIpsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}/ips`,
        urlParams: urlParams(
          ['type', request.type],
        ),
        signal: options?.signal,
      },
      unmarshalListIpsResponse,
    )

  
  addIp = (request: Readonly<RpnSanApiAddIpRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRpnSanApiAddIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}/ips`,
        signal: options?.signal,
      },
    )

  
  removeIp = (request: Readonly<RpnSanApiRemoveIpRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRpnSanApiRemoveIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}/ips`,
        signal: options?.signal,
      },
    )

  
  listAvailableIps = (request: Readonly<RpnSanApiListAvailableIpsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpn-sans/${validatePathParam('rpnSanId', request.rpnSanId)}/available-ips`,
        urlParams: urlParams(
          ['type', request.type],
        ),
        signal: options?.signal,
      },
      unmarshalListIpsResponse,
    )

  
}

/**
 * Dedibox Phoenix RPN v1 API.
 */
export class RpnV1API extends ParentAPI {
  protected pageOfListRpnGroups = (request: Readonly<RpnV1ApiListRpnGroupsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRpnGroupsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/groups`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnGroupsResponse,
    )
  
  listRpnGroups = (request: Readonly<RpnV1ApiListRpnGroupsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('rpnGroups', this.pageOfListRpnGroups, request, options)

  
  getRpnGroup = (request: Readonly<RpnV1ApiGetRpnGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnGroup>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
      },
      unmarshalRpnGroup,
    )

  
  createRpnGroup = (request: Readonly<RpnV1ApiCreateRpnGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnGroup>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiCreateRpnGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv1/groups`,
        signal: options?.signal,
      },
      unmarshalRpnGroup,
    )

  
  deleteRpnGroup = (request: Readonly<RpnV1ApiDeleteRpnGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
      },
    )

  
  updateRpnGroupName = (request: Readonly<RpnV1ApiUpdateRpnGroupNameRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnGroup>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiUpdateRpnGroupNameRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
      },
      unmarshalRpnGroup,
    )

  
  protected pageOfListRpnGroupMembers = (request: Readonly<RpnV1ApiListRpnGroupMembersRequest>, options?: RequestOptions) =>
    this.client.fetch<ListRpnGroupMembersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/members`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnGroupMembersResponse,
    )
  
  listRpnGroupMembers = (request: Readonly<RpnV1ApiListRpnGroupMembersRequest>, options?: RequestOptions) =>
    enrichForPagination('members', this.pageOfListRpnGroupMembers, request, options)

  
  rpnGroupInvite = (request: Readonly<RpnV1ApiRpnGroupInviteRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiRpnGroupInviteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/invite`,
        signal: options?.signal,
      },
    )

  
  leaveRpnGroup = (request: Readonly<RpnV1ApiLeaveRpnGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiLeaveRpnGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/leave`,
        signal: options?.signal,
      },
    )

  
  addRpnGroupMembers = (request: Readonly<RpnV1ApiAddRpnGroupMembersRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnGroup>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiAddRpnGroupMembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/members`,
        signal: options?.signal,
      },
      unmarshalRpnGroup,
    )

  
  deleteRpnGroupMembers = (request: Readonly<RpnV1ApiDeleteRpnGroupMembersRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnGroup>(
      {
        body: JSON.stringify(
          marshalRpnV1ApiDeleteRpnGroupMembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/dedibox/v1/rpnv1/groups/${validatePathParam('groupId', request.groupId)}/members`,
        signal: options?.signal,
      },
      unmarshalRpnGroup,
    )

  
  protected pageOfListRpnCapableServers = (request: Readonly<RpnV1ApiListRpnCapableServersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRpnCapableServersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/capable-servers`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnCapableServersResponse,
    )
  
  listRpnCapableServers = (request: Readonly<RpnV1ApiListRpnCapableServersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('servers', this.pageOfListRpnCapableServers, request, options)

  
  protected pageOfListRpnCapableSanServers = (request: Readonly<RpnV1ApiListRpnCapableSanServersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRpnCapableSanServersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/capable-san-servers`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnCapableSanServersResponse,
    )
  
  listRpnCapableSanServers = (request: Readonly<RpnV1ApiListRpnCapableSanServersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('sanServers', this.pageOfListRpnCapableSanServers, request, options)

  
  protected pageOfListRpnInvites = (request: Readonly<RpnV1ApiListRpnInvitesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRpnInvitesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv1/invites`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnInvitesResponse,
    )
  
  listRpnInvites = (request: Readonly<RpnV1ApiListRpnInvitesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('members', this.pageOfListRpnInvites, request, options)

  
  acceptRpnInvite = (request: Readonly<RpnV1ApiAcceptRpnInviteRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'POST',
        path: `/dedibox/v1/rpnv1/invites/${validatePathParam('memberId', request.memberId)}/accept`,
        signal: options?.signal,
      },
    )

  
  refuseRpnInvite = (request: Readonly<RpnV1ApiRefuseRpnInviteRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'POST',
        path: `/dedibox/v1/rpnv1/invites/${validatePathParam('memberId', request.memberId)}/refuse`,
        signal: options?.signal,
      },
    )

  
}

/**
 * Dedibox Phoenix RPN v2 API.
 */
export class RpnV2API extends ParentAPI {
  protected pageOfListRpnV2Groups = (request: Readonly<RpnV2ApiListRpnV2GroupsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRpnV2GroupsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnV2GroupsResponse,
    )
  
  listRpnV2Groups = (request: Readonly<RpnV2ApiListRpnV2GroupsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('rpnGroups', this.pageOfListRpnV2Groups, request, options)

  
  protected pageOfListRpnV2Members = (request: Readonly<RpnV2ApiListRpnV2MembersRequest>, options?: RequestOptions) =>
    this.client.fetch<ListRpnV2MembersResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/members`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['type', request.type],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnV2MembersResponse,
    )
  
  listRpnV2Members = (request: Readonly<RpnV2ApiListRpnV2MembersRequest>, options?: RequestOptions) =>
    enrichForPagination('members', this.pageOfListRpnV2Members, request, options)

  
  getRpnV2Group = (request: Readonly<RpnV2ApiGetRpnV2GroupRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnV2Group>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!RPN_V2_GROUP_TRANSIENT_STATUSES_DEDIBOX.includes(res.status))),
      this.getRpnV2Group,
      request,
      options,
    )

  
  createRpnV2Group = (request: Readonly<RpnV2ApiCreateRpnV2GroupRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnV2Group>(
      {
        body: JSON.stringify(
          marshalRpnV2ApiCreateRpnV2GroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv2/groups`,
        signal: options?.signal,
      },
      unmarshalRpnV2Group,
    )

  
  deleteRpnV2Group = (request: Readonly<RpnV2ApiDeleteRpnV2GroupRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
      },
    )

  
  updateRpnV2GroupName = (request: Readonly<RpnV2ApiUpdateRpnV2GroupNameRequest>, options?: RequestOptions) =>
    this.client.fetch<RpnV2Group>(
      {
        body: JSON.stringify(
          marshalRpnV2ApiUpdateRpnV2GroupNameRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}`,
        signal: options?.signal,
      },
      unmarshalRpnV2Group,
    )

  
  addRpnV2Members = (request: Readonly<RpnV2ApiAddRpnV2MembersRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRpnV2ApiAddRpnV2MembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/members`,
        signal: options?.signal,
      },
    )

  
  deleteRpnV2Members = (request: Readonly<RpnV2ApiDeleteRpnV2MembersRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRpnV2ApiDeleteRpnV2MembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/members`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListRpnV2CapableResources = (request: Readonly<RpnV2ApiListRpnV2CapableResourcesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRpnV2CapableResourcesResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups/capable`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnV2CapableResourcesResponse,
    )
  
  listRpnV2CapableResources = (request: Readonly<RpnV2ApiListRpnV2CapableResourcesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('servers', this.pageOfListRpnV2CapableResources, request, options)

  
  protected pageOfListRpnV2GroupLogs = (request: Readonly<RpnV2ApiListRpnV2GroupLogsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListRpnV2GroupLogsResponse>(
      {
        method: 'GET',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/logs`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListRpnV2GroupLogsResponse,
    )
  
  listRpnV2GroupLogs = (request: Readonly<RpnV2ApiListRpnV2GroupLogsRequest>, options?: RequestOptions) =>
    enrichForPagination('logs', this.pageOfListRpnV2GroupLogs, request, options)

  
  updateRpnV2VlanForMembers = (request: Readonly<RpnV2ApiUpdateRpnV2VlanForMembersRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRpnV2ApiUpdateRpnV2VlanForMembersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/vlan`,
        signal: options?.signal,
      },
    )

  
  enableRpnV2GroupCompatibility = (request: Readonly<RpnV2ApiEnableRpnV2GroupCompatibilityRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRpnV2ApiEnableRpnV2GroupCompatibilityRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/enable-compatibility`,
        signal: options?.signal,
      },
    )

  
  disableRpnV2GroupCompatibility = (request: Readonly<RpnV2ApiDisableRpnV2GroupCompatibilityRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dedibox/v1/rpnv2/groups/${validatePathParam('groupId', request.groupId)}/disable-compatibility`,
        signal: options?.signal,
      },
    )

  
}

