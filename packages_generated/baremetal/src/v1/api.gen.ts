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
import {SERVER_INSTALL_TRANSIENT_STATUSES as SERVER_INSTALL_TRANSIENT_STATUSES_BAREMETAL,SERVER_PRIVATE_NETWORK_TRANSIENT_STATUSES as SERVER_PRIVATE_NETWORK_TRANSIENT_STATUSES_BAREMETAL,SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_BAREMETAL,} from './content.gen.js'
import {
  marshalAddOptionServerRequest,
  unmarshalBMCAccess,
  marshalBatchCreateServersRequest,
  unmarshalBatchCreateServersResponse,
  marshalCreateServerRequest,
  unmarshalGetServerMetricsResponse,
  unmarshalIP,
  marshalInstallServerRequest,
  unmarshalListOSResponse,
  unmarshalListOffersResponse,
  unmarshalListOptionsResponse,
  unmarshalListServerEventsResponse,
  unmarshalListServerPrivateNetworksResponse,
  unmarshalListServersResponse,
  unmarshalListSettingsResponse,
  unmarshalOS,
  unmarshalOffer,
  unmarshalOption,
  marshalPrivateNetworkApiAddServerPrivateNetworkRequest,
  marshalPrivateNetworkApiSetServerPrivateNetworksRequest,
  marshalRebootServerRequest,
  unmarshalSchema,
  unmarshalServer,
  unmarshalServerPrivateNetwork,
  unmarshalSetServerPrivateNetworksResponse,
  unmarshalSetting,
  marshalStartBMCAccessRequest,
  marshalStartServerRequest,
  marshalUpdateIPRequest,
  marshalUpdateServerRequest,
  marshalUpdateSettingRequest,
  marshalValidatePartitioningSchemaRequest,
} from './marshalling.gen.js'
import type {
  AddOptionServerRequest,
  BMCAccess,
  BatchCreateServersRequest,
  BatchCreateServersResponse,
  CreateServerRequest,
  DeleteOptionServerRequest,
  DeleteServerRequest,
  GetBMCAccessRequest,
  GetDefaultPartitioningSchemaRequest,
  GetOSRequest,
  GetOfferRequest,
  GetOptionRequest,
  GetServerMetricsRequest,
  GetServerMetricsResponse,
  GetServerRequest,
  IP,
  InstallServerRequest,
  ListOSRequest,
  ListOSResponse,
  ListOffersRequest,
  ListOffersResponse,
  ListOptionsRequest,
  ListOptionsResponse,
  ListServerEventsRequest,
  ListServerEventsResponse,
  ListServerPrivateNetworksResponse,
  ListServersRequest,
  ListServersResponse,
  ListSettingsRequest,
  ListSettingsResponse,
  MigrateServerToMonthlyOfferRequest,
  OS,
  Offer,
  Option,
  PrivateNetworkApiAddServerPrivateNetworkRequest,
  PrivateNetworkApiDeleteServerPrivateNetworkRequest,
  PrivateNetworkApiListServerPrivateNetworksRequest,
  PrivateNetworkApiSetServerPrivateNetworksRequest,
  RebootServerRequest,
  Schema,
  Server,
  ServerPrivateNetwork,
  SetServerPrivateNetworksResponse,
  Setting,
  StartBMCAccessRequest,
  StartServerRequest,
  StopBMCAccessRequest,
  StopServerRequest,
  UpdateIPRequest,
  UpdateServerRequest,
  UpdateSettingRequest,
  ValidatePartitioningSchemaRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Elastic Metal API.

This API allows you to manage your Elastic Metal servers.
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
        'nl-ams-2',
        'pl-waw-2',
        'pl-waw-3',
      ],
    })
  
  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        urlParams: urlParams(
          ['name', request.name],
          ['option_id', request.optionId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['status', request.status],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListServersResponse,
    )
  
  /**
   * List Elastic Metal servers for an Organization. List Elastic Metal servers for a specific Organization.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('servers', this.pageOfListServers, request, options)

  
  /**
   * Get a specific Elastic Metal server. Get full details of an existing Elastic Metal server associated with the ID.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
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
      options?.stop ?? (res => Promise.resolve(!SERVER_TRANSIENT_STATUSES_BAREMETAL.includes(res.status))),
      this.getServer,
      request,
      options,
    )

  
  /**
   * Create an Elastic Metal server. Create a new Elastic Metal server. Once the server is created, proceed with the [installation of an OS](#post-3e949e).
   *
   * @param request - The request {@link CreateServerRequest}
   * @returns A Promise of Server
   */
  createServer = (request: Readonly<CreateServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Create multiple Elastic Metal servers. Create multiple new Elastic Metal servers. Once the servers are created, proceed with the [installation of an OS](#post-3e949e).
   *
   * @param request - The request {@link BatchCreateServersRequest}
   * @returns A Promise of BatchCreateServersResponse
   */
  batchCreateServers = (request: Readonly<BatchCreateServersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<BatchCreateServersResponse>(
      {
        body: JSON.stringify(
          marshalBatchCreateServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/batch-create-servers`,
        signal: options?.signal,
      },
      unmarshalBatchCreateServersResponse,
    )

  
  /**
   * Update an Elastic Metal server. Update the server associated with the ID. You can update parameters such as the server's name, tags, description and protection flag. Any parameters left null in the request body are not updated.
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
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Install an Elastic Metal server. Install an Operating System (OS) on the Elastic Metal server with a specific ID.
   *
   * @param request - The request {@link InstallServerRequest}
   * @returns A Promise of Server
   */
  installServer = async (request: Readonly<InstallServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          await marshalInstallServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/install`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Return server metrics. Get the ping status of the server associated with the ID.
   *
   * @param request - The request {@link GetServerMetricsRequest}
   * @returns A Promise of GetServerMetricsResponse
   */
  getServerMetrics = (request: Readonly<GetServerMetricsRequest>, options?: RequestOptions) =>
    this.client.fetch<GetServerMetricsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/metrics`,
        signal: options?.signal,
      },
      unmarshalGetServerMetricsResponse,
    )

  
  /**
   * Delete an Elastic Metal server. Delete the server associated with the ID.
   *
   * @param request - The request {@link DeleteServerRequest}
   * @returns A Promise of Server
   */
  deleteServer = (request: Readonly<DeleteServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        method: 'DELETE',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Reboot an Elastic Metal server. Reboot the Elastic Metal server associated with the ID, use the `boot_type` `rescue` to reboot the server in rescue mode.
   *
   * @param request - The request {@link RebootServerRequest}
   * @returns A Promise of Server
   */
  rebootServer = (request: Readonly<RebootServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalRebootServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Start an Elastic Metal server. Start the server associated with the ID.
   *
   * @param request - The request {@link StartServerRequest}
   * @returns A Promise of Server
   */
  startServer = (request: Readonly<StartServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalStartServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/start`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Stop an Elastic Metal server. Stop the server associated with the ID. The server remains allocated to your account and all data remains on the local storage of the server.
   *
   * @param request - The request {@link StopServerRequest}
   * @returns A Promise of Server
   */
  stopServer = (request: Readonly<StopServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/stop`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  protected pageOfListServerEvents = (request: Readonly<ListServerEventsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListServerEventsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/events`,
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
   * List server events. List event (i.e. start/stop/reboot) associated to the server ID.
   *
   * @param request - The request {@link ListServerEventsRequest}
   * @returns A Promise of ListServerEventsResponse
   */
  listServerEvents = (request: Readonly<ListServerEventsRequest>, options?: RequestOptions) =>
    enrichForPagination('events', this.pageOfListServerEvents, request, options)

  
  /**
   * Get default partitioning schema. Get the default partitioning schema for the given offer ID and OS ID.
   *
   * @param request - The request {@link GetDefaultPartitioningSchemaRequest}
   * @returns A Promise of Schema
   */
  getDefaultPartitioningSchema = (request: Readonly<GetDefaultPartitioningSchemaRequest>, options?: RequestOptions) =>
    this.client.fetch<Schema>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/partitioning-schemas/default`,
        urlParams: urlParams(
          ['offer_id', request.offerId],
          ['os_id', request.osId],
        ),
        signal: options?.signal,
      },
      unmarshalSchema,
    )

  
  /**
   * Validate client partitioning schema. Validate the incoming partitioning schema from a user before installing the server. Return default ErrorCode if invalid.
   *
   * @param request - The request {@link ValidatePartitioningSchemaRequest}
   */
  validatePartitioningSchema = (request: Readonly<ValidatePartitioningSchemaRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalValidatePartitioningSchemaRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/partitioning-schemas/validate`,
        signal: options?.signal,
      },
    )

  
  /**
   * Start BMC access. Start BMC (Baseboard Management Controller) access associated with the ID.
The BMC (Baseboard Management Controller) access is available one hour after the installation of the server.
You need first to create an option Remote Access. You will find the ID and the price with a call to listOffers (https://developers.scaleway.com/en/products/baremetal/api/#get-78db92). Then add the option https://developers.scaleway.com/en/products/baremetal/api/#post-b14abd.
After adding the BMC option, you need to Get Remote Access to get the login/password https://developers.scaleway.com/en/products/baremetal/api/#get-cefc0f. Do not forget to delete the Option after use.
   *
   * @param request - The request {@link StartBMCAccessRequest}
   * @returns A Promise of BMCAccess
   */
  startBMCAccess = (request: Readonly<StartBMCAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<BMCAccess>(
      {
        body: JSON.stringify(
          marshalStartBMCAccessRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
        signal: options?.signal,
      },
      unmarshalBMCAccess,
    )

  
  /**
   * Get BMC access. Get the BMC (Baseboard Management Controller) access associated with the ID, including the URL and login information needed to connect.
   *
   * @param request - The request {@link GetBMCAccessRequest}
   * @returns A Promise of BMCAccess
   */
  getBMCAccess = (request: Readonly<GetBMCAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<BMCAccess>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
        signal: options?.signal,
      },
      unmarshalBMCAccess,
    )

  
  /**
   * Stop BMC access. Stop BMC (Baseboard Management Controller) access associated with the ID.
   *
   * @param request - The request {@link StopBMCAccessRequest}
   */
  stopBMCAccess = (request: Readonly<StopBMCAccessRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
        signal: options?.signal,
      },
    )

  
  /**
   * Update IP. Configure the IP address associated with the server ID and IP ID. You can use this method to set a reverse DNS for an IP address.
   *
   * @param request - The request {@link UpdateIPRequest}
   * @returns A Promise of IP
   */
  updateIP = (request: Readonly<UpdateIPRequest>, options?: RequestOptions) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalUpdateIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/ips/${validatePathParam('ipId', request.ipId)}`,
        signal: options?.signal,
      },
      unmarshalIP,
    )

  
  /**
   * Add server option. Add an option, such as Private Networks, to a specific server.
   *
   * @param request - The request {@link AddOptionServerRequest}
   * @returns A Promise of Server
   */
  addOptionServer = (request: Readonly<AddOptionServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAddOptionServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/options/${validatePathParam('optionId', request.optionId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Delete server option. Delete an option from a specific server.
   *
   * @param request - The request {@link DeleteOptionServerRequest}
   * @returns A Promise of Server
   */
  deleteOptionServer = (request: Readonly<DeleteOptionServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        method: 'DELETE',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/options/${validatePathParam('optionId', request.optionId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Migrate server offer. Migrate server with hourly offer to monthly offer.
   *
   * @param request - The request {@link MigrateServerToMonthlyOfferRequest}
   * @returns A Promise of Server
   */
  migrateServerToMonthlyOffer = (request: Readonly<MigrateServerToMonthlyOfferRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/migrate-offer-monthly`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  protected pageOfListOffers = (request: Readonly<ListOffersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/offers`,
        urlParams: urlParams(
          ['name', request.name],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['subscription_period', request.subscriptionPeriod],
        ),
        signal: options?.signal,
      },
      unmarshalListOffersResponse,
    )
  
  /**
   * List offers. List all available Elastic Metal server configurations.
   *
   * @param request - The request {@link ListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<ListOffersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('offers', this.pageOfListOffers, request, options)

  
  /**
   * Get offer. Get details of an offer identified by its offer ID.
   *
   * @param request - The request {@link GetOfferRequest}
   * @returns A Promise of Offer
   */
  getOffer = (request: Readonly<GetOfferRequest>, options?: RequestOptions) =>
    this.client.fetch<Offer>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/offers/${validatePathParam('offerId', request.offerId)}`,
        signal: options?.signal,
      },
      unmarshalOffer,
    )

  
  /**
   * Get option. Return specific option for the ID.
   *
   * @param request - The request {@link GetOptionRequest}
   * @returns A Promise of Option
   */
  getOption = (request: Readonly<GetOptionRequest>, options?: RequestOptions) =>
    this.client.fetch<Option>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/options/${validatePathParam('optionId', request.optionId)}`,
        signal: options?.signal,
      },
      unmarshalOption,
    )

  
  protected pageOfListOptions = (request: Readonly<ListOptionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListOptionsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/options`,
        urlParams: urlParams(
          ['name', request.name],
          ['offer_id', request.offerId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListOptionsResponse,
    )
  
  /**
   * List options. List all options matching with filters.
   *
   * @param request - The request {@link ListOptionsRequest}
   * @returns A Promise of ListOptionsResponse
   */
  listOptions = (request: Readonly<ListOptionsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('options', this.pageOfListOptions, request, options)

  
  protected pageOfListSettings = (request: Readonly<ListSettingsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSettingsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/settings`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
        ),
        signal: options?.signal,
      },
      unmarshalListSettingsResponse,
    )
  
  /**
   * List all settings. Return all settings for a Project ID.
   *
   * @param request - The request {@link ListSettingsRequest}
   * @returns A Promise of ListSettingsResponse
   */
  listSettings = (request: Readonly<ListSettingsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('settings', this.pageOfListSettings, request, options)

  
  /**
   * Update setting. Update a setting for a Project ID (enable or disable).
   *
   * @param request - The request {@link UpdateSettingRequest}
   * @returns A Promise of Setting
   */
  updateSetting = (request: Readonly<UpdateSettingRequest>, options?: RequestOptions) =>
    this.client.fetch<Setting>(
      {
        body: JSON.stringify(
          marshalUpdateSettingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/settings/${validatePathParam('settingId', request.settingId)}`,
        signal: options?.signal,
      },
      unmarshalSetting,
    )

  
  protected pageOfListOS = (request: Readonly<ListOSRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListOSResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os`,
        urlParams: urlParams(
          ['offer_id', request.offerId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListOSResponse,
    )
  
  /**
   * List available OSes. List all OSes that are available for installation on Elastic Metal servers.
   *
   * @param request - The request {@link ListOSRequest}
   * @returns A Promise of ListOSResponse
   */
  listOS = (request: Readonly<ListOSRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('os', this.pageOfListOS, request, options)

  
  /**
   * Get OS with an ID. Return the specific OS for the ID.
   *
   * @param request - The request {@link GetOSRequest}
   * @returns A Promise of OS
   */
  getOS = (request: Readonly<GetOSRequest>, options?: RequestOptions) =>
    this.client.fetch<OS>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os/${validatePathParam('osId', request.osId)}`,
        signal: options?.signal,
      },
      unmarshalOS,
    )

  
}

/**
 * Elastic Metal - Private Network API.
 */
export class PrivateNetworkAPI extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      zones: [
        'fr-par-2',
      ],
    })
  
  /**
   * Add a server to a Private Network.
   *
   * @param request - The request {@link PrivateNetworkApiAddServerPrivateNetworkRequest}
   * @returns A Promise of ServerPrivateNetwork
   */
  addServerPrivateNetwork = (request: Readonly<PrivateNetworkApiAddServerPrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<ServerPrivateNetwork>(
      {
        body: JSON.stringify(
          marshalPrivateNetworkApiAddServerPrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks`,
        signal: options?.signal,
      },
      unmarshalServerPrivateNetwork,
    )

  
  /**
   * Set multiple Private Networks on a server.
   *
   * @param request - The request {@link PrivateNetworkApiSetServerPrivateNetworksRequest}
   * @returns A Promise of SetServerPrivateNetworksResponse
   */
  setServerPrivateNetworks = (request: Readonly<PrivateNetworkApiSetServerPrivateNetworksRequest>, options?: RequestOptions) =>
    this.client.fetch<SetServerPrivateNetworksResponse>(
      {
        body: JSON.stringify(
          marshalPrivateNetworkApiSetServerPrivateNetworksRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks`,
        signal: options?.signal,
      },
      unmarshalSetServerPrivateNetworksResponse,
    )

  
  protected pageOfListServerPrivateNetworks = (request: Readonly<PrivateNetworkApiListServerPrivateNetworksRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServerPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/server-private-networks`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['private_network_id', request.privateNetworkId],
          ['project_id', request.projectId],
          ['server_id', request.serverId],
        ),
        signal: options?.signal,
      },
      unmarshalListServerPrivateNetworksResponse,
    )
  
  /**
   * List the Private Networks of a server.
   *
   * @param request - The request {@link PrivateNetworkApiListServerPrivateNetworksRequest}
   * @returns A Promise of ListServerPrivateNetworksResponse
   */
  listServerPrivateNetworks = (request: Readonly<PrivateNetworkApiListServerPrivateNetworksRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('serverPrivateNetworks', this.pageOfListServerPrivateNetworks, request, options)

  
  /**
   * Delete a Private Network.
   *
   * @param request - The request {@link PrivateNetworkApiDeleteServerPrivateNetworkRequest}
   */
  deleteServerPrivateNetwork = (request: Readonly<PrivateNetworkApiDeleteServerPrivateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
        signal: options?.signal,
      },
    )

  
}

