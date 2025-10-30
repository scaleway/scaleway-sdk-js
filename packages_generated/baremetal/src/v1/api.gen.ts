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
import { SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_BAREMETAL } from './content.gen.js'
import {
  marshalAddOptionServerRequest,
  marshalCreateServerRequest,
  marshalInstallServerRequest,
  marshalPrivateNetworkApiAddServerPrivateNetworkRequest,
  marshalPrivateNetworkApiSetServerPrivateNetworksRequest,
  marshalRebootServerRequest,
  marshalStartBMCAccessRequest,
  marshalStartServerRequest,
  marshalUpdateIPRequest,
  marshalUpdateServerRequest,
  marshalUpdateSettingRequest,
  marshalValidatePartitioningSchemaRequest,
  unmarshalBMCAccess,
  unmarshalGetServerMetricsResponse,
  unmarshalIP,
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
  unmarshalSchema,
  unmarshalServer,
  unmarshalServerPrivateNetwork,
  unmarshalSetServerPrivateNetworksResponse,
  unmarshalSetting,
} from './marshalling.gen.js'
import type {
  AddOptionServerRequest,
  BMCAccess,
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
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    zones: [
      'fr-par-1',
      'fr-par-2',
      'nl-ams-1',
      'nl-ams-2',
      'pl-waw-2',
      'pl-waw-3',
    ],
  })

  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}) =>
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
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['status', request.status],
          ['tags', request.tags],
        ),
      },
      unmarshalListServersResponse,
    )

  /**
   * List Elastic Metal servers for an Organization. List Elastic Metal servers for a specific Organization.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}) =>
    enrichForPagination('servers', this.pageOfListServers, request)

  /**
   * Get a specific Elastic Metal server. Get full details of an existing Elastic Metal server associated with the ID.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
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
            !SERVER_TRANSIENT_STATUSES_BAREMETAL.includes(res.status),
          )),
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
  createServer = (request: Readonly<CreateServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
      },
      unmarshalServer,
    )

  /**
   * Update an Elastic Metal server. Update the server associated with the ID. You can update parameters such as the server's name, tags, description and protection flag. Any parameters left null in the request body are not updated.
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
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  /**
   * Install an Elastic Metal server. Install an Operating System (OS) on the Elastic Metal server with a specific ID.
   *
   * @param request - The request {@link InstallServerRequest}
   * @returns A Promise of Server
   */
  installServer = async (request: Readonly<InstallServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          await marshalInstallServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/install`,
      },
      unmarshalServer,
    )

  /**
   * Return server metrics. Get the ping status of the server associated with the ID.
   *
   * @param request - The request {@link GetServerMetricsRequest}
   * @returns A Promise of GetServerMetricsResponse
   */
  getServerMetrics = (request: Readonly<GetServerMetricsRequest>) =>
    this.client.fetch<GetServerMetricsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/metrics`,
      },
      unmarshalGetServerMetricsResponse,
    )

  /**
   * Delete an Elastic Metal server. Delete the server associated with the ID.
   *
   * @param request - The request {@link DeleteServerRequest}
   * @returns A Promise of Server
   */
  deleteServer = (request: Readonly<DeleteServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'DELETE',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  /**
   * Reboot an Elastic Metal server. Reboot the Elastic Metal server associated with the ID, use the `boot_type` `rescue` to reboot the server in rescue mode.
   *
   * @param request - The request {@link RebootServerRequest}
   * @returns A Promise of Server
   */
  rebootServer = (request: Readonly<RebootServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalRebootServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
      },
      unmarshalServer,
    )

  /**
   * Start an Elastic Metal server. Start the server associated with the ID.
   *
   * @param request - The request {@link StartServerRequest}
   * @returns A Promise of Server
   */
  startServer = (request: Readonly<StartServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalStartServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/start`,
      },
      unmarshalServer,
    )

  /**
   * Stop an Elastic Metal server. Stop the server associated with the ID. The server remains allocated to your account and all data remains on the local storage of the server.
   *
   * @param request - The request {@link StopServerRequest}
   * @returns A Promise of Server
   */
  stopServer = (request: Readonly<StopServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/stop`,
      },
      unmarshalServer,
    )

  protected pageOfListServerEvents = (
    request: Readonly<ListServerEventsRequest>,
  ) =>
    this.client.fetch<ListServerEventsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/events`,
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
   * List server events. List event (i.e. start/stop/reboot) associated to the server ID.
   *
   * @param request - The request {@link ListServerEventsRequest}
   * @returns A Promise of ListServerEventsResponse
   */
  listServerEvents = (request: Readonly<ListServerEventsRequest>) =>
    enrichForPagination('events', this.pageOfListServerEvents, request)

  /**
   * Get default partitioning schema. Get the default partitioning schema for the given offer ID and OS ID.
   *
   * @param request - The request {@link GetDefaultPartitioningSchemaRequest}
   * @returns A Promise of Schema
   */
  getDefaultPartitioningSchema = (
    request: Readonly<GetDefaultPartitioningSchemaRequest>,
  ) =>
    this.client.fetch<Schema>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/partitioning-schemas/default`,
        urlParams: urlParams(
          ['offer_id', request.offerId],
          ['os_id', request.osId],
        ),
      },
      unmarshalSchema,
    )

  /**
   * Validate client partitioning schema. Validate the incoming partitioning schema from a user before installing the server. Return default ErrorCode if invalid.
   *
   * @param request - The request {@link ValidatePartitioningSchemaRequest}
   */
  validatePartitioningSchema = (
    request: Readonly<ValidatePartitioningSchemaRequest>,
  ) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalValidatePartitioningSchemaRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/partitioning-schemas/validate`,
    })

  /**
   * Start BMC access. Start BMC (Baseboard Management Controller) access associated with the ID.
The BMC (Baseboard Management Controller) access is available one hour after the installation of the server.
You need first to create an option Remote Access. You will find the ID and the price with a call to listOffers (https://developers.scaleway.com/en/products/baremetal/api/#get-78db92). Then add the option https://developers.scaleway.com/en/products/baremetal/api/#post-b14abd.
After adding the BMC option, you need to Get Remote Access to get the login/password https://developers.scaleway.com/en/products/baremetal/api/#get-cefc0f. Do not forget to delete the Option after use.
   *
   * @param request - The request {@link StartBMCAccessRequest}
   * @returns A Promise of BMCAccess
   */
  startBMCAccess = (request: Readonly<StartBMCAccessRequest>) =>
    this.client.fetch<BMCAccess>(
      {
        body: JSON.stringify(
          marshalStartBMCAccessRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
      },
      unmarshalBMCAccess,
    )

  /**
   * Get BMC access. Get the BMC (Baseboard Management Controller) access associated with the ID, including the URL and login information needed to connect.
   *
   * @param request - The request {@link GetBMCAccessRequest}
   * @returns A Promise of BMCAccess
   */
  getBMCAccess = (request: Readonly<GetBMCAccessRequest>) =>
    this.client.fetch<BMCAccess>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
      },
      unmarshalBMCAccess,
    )

  /**
   * Stop BMC access. Stop BMC (Baseboard Management Controller) access associated with the ID.
   *
   * @param request - The request {@link StopBMCAccessRequest}
   */
  stopBMCAccess = (request: Readonly<StopBMCAccessRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
    })

  /**
   * Update IP. Configure the IP address associated with the server ID and IP ID. You can use this method to set a reverse DNS for an IP address.
   *
   * @param request - The request {@link UpdateIPRequest}
   * @returns A Promise of IP
   */
  updateIP = (request: Readonly<UpdateIPRequest>) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalUpdateIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  /**
   * Add server option. Add an option, such as Private Networks, to a specific server.
   *
   * @param request - The request {@link AddOptionServerRequest}
   * @returns A Promise of Server
   */
  addOptionServer = (request: Readonly<AddOptionServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAddOptionServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/options/${validatePathParam('optionId', request.optionId)}`,
      },
      unmarshalServer,
    )

  /**
   * Delete server option. Delete an option from a specific server.
   *
   * @param request - The request {@link DeleteOptionServerRequest}
   * @returns A Promise of Server
   */
  deleteOptionServer = (request: Readonly<DeleteOptionServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'DELETE',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/options/${validatePathParam('optionId', request.optionId)}`,
      },
      unmarshalServer,
    )

  /**
   * Migrate server offer. Migrate server with hourly offer to monthly offer.
   *
   * @param request - The request {@link MigrateServerToMonthlyOfferRequest}
   * @returns A Promise of Server
   */
  migrateServerToMonthlyOffer = (
    request: Readonly<MigrateServerToMonthlyOfferRequest>,
  ) =>
    this.client.fetch<Server>(
      {
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/migrate-offer-monthly`,
      },
      unmarshalServer,
    )

  protected pageOfListOffers = (request: Readonly<ListOffersRequest> = {}) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/offers`,
        urlParams: urlParams(
          ['name', request.name],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['subscription_period', request.subscriptionPeriod],
        ),
      },
      unmarshalListOffersResponse,
    )

  /**
   * List offers. List all available Elastic Metal server configurations.
   *
   * @param request - The request {@link ListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<ListOffersRequest> = {}) =>
    enrichForPagination('offers', this.pageOfListOffers, request)

  /**
   * Get offer. Get details of an offer identified by its offer ID.
   *
   * @param request - The request {@link GetOfferRequest}
   * @returns A Promise of Offer
   */
  getOffer = (request: Readonly<GetOfferRequest>) =>
    this.client.fetch<Offer>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/offers/${validatePathParam('offerId', request.offerId)}`,
      },
      unmarshalOffer,
    )

  /**
   * Get option. Return specific option for the ID.
   *
   * @param request - The request {@link GetOptionRequest}
   * @returns A Promise of Option
   */
  getOption = (request: Readonly<GetOptionRequest>) =>
    this.client.fetch<Option>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/options/${validatePathParam('optionId', request.optionId)}`,
      },
      unmarshalOption,
    )

  protected pageOfListOptions = (request: Readonly<ListOptionsRequest> = {}) =>
    this.client.fetch<ListOptionsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/options`,
        urlParams: urlParams(
          ['name', request.name],
          ['offer_id', request.offerId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListOptionsResponse,
    )

  /**
   * List options. List all options matching with filters.
   *
   * @param request - The request {@link ListOptionsRequest}
   * @returns A Promise of ListOptionsResponse
   */
  listOptions = (request: Readonly<ListOptionsRequest> = {}) =>
    enrichForPagination('options', this.pageOfListOptions, request)

  protected pageOfListSettings = (
    request: Readonly<ListSettingsRequest> = {},
  ) =>
    this.client.fetch<ListSettingsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/settings`,
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
      unmarshalListSettingsResponse,
    )

  /**
   * List all settings. Return all settings for a Project ID.
   *
   * @param request - The request {@link ListSettingsRequest}
   * @returns A Promise of ListSettingsResponse
   */
  listSettings = (request: Readonly<ListSettingsRequest> = {}) =>
    enrichForPagination('settings', this.pageOfListSettings, request)

  /**
   * Update setting. Update a setting for a Project ID (enable or disable).
   *
   * @param request - The request {@link UpdateSettingRequest}
   * @returns A Promise of Setting
   */
  updateSetting = (request: Readonly<UpdateSettingRequest>) =>
    this.client.fetch<Setting>(
      {
        body: JSON.stringify(
          marshalUpdateSettingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/settings/${validatePathParam('settingId', request.settingId)}`,
      },
      unmarshalSetting,
    )

  protected pageOfListOS = (request: Readonly<ListOSRequest> = {}) =>
    this.client.fetch<ListOSResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os`,
        urlParams: urlParams(
          ['offer_id', request.offerId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListOSResponse,
    )

  /**
   * List available OSes. List all OSes that are available for installation on Elastic Metal servers.
   *
   * @param request - The request {@link ListOSRequest}
   * @returns A Promise of ListOSResponse
   */
  listOS = (request: Readonly<ListOSRequest> = {}) =>
    enrichForPagination('os', this.pageOfListOS, request)

  /**
   * Get OS with an ID. Return the specific OS for the ID.
   *
   * @param request - The request {@link GetOSRequest}
   * @returns A Promise of OS
   */
  getOS = (request: Readonly<GetOSRequest>) =>
    this.client.fetch<OS>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/os/${validatePathParam('osId', request.osId)}`,
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
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    zones: ['fr-par-2'],
  })

  /**
   * Add a server to a Private Network.
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
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks`,
      },
      unmarshalServerPrivateNetwork,
    )

  /**
   * Set multiple Private Networks on a server.
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
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks`,
      },
      unmarshalSetServerPrivateNetworksResponse,
    )

  protected pageOfListServerPrivateNetworks = (
    request: Readonly<PrivateNetworkApiListServerPrivateNetworksRequest> = {},
  ) =>
    this.client.fetch<ListServerPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/server-private-networks`,
        urlParams: urlParams(
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
   * List the Private Networks of a server.
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
      path: `/baremetal/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private-networks/${validatePathParam('privateNetworkId', request.privateNetworkId)}`,
    })
}
