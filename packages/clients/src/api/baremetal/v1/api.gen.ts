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
  marshalAddOptionServerRequest,
  marshalAddServerPrivateNetworkRequest,
  marshalCreateServerRequest,
  marshalInstallServerRequest,
  marshalRebootServerRequest,
  marshalSetServerPrivateNetworksRequest,
  marshalStartBMCAccessRequest,
  marshalStartServerRequest,
  marshalUpdateIPRequest,
  marshalUpdateServerRequest,
  marshalUpdateSettingRequest,
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
  unmarshalServer,
  unmarshalServerPrivateNetwork,
  unmarshalSetServerPrivateNetworksResponse,
  unmarshalSetting,
} from './marshalling.gen'
import type {
  AddOptionServerRequest,
  AddServerPrivateNetworkRequest,
  BMCAccess,
  CreateServerRequest,
  DeleteOptionServerRequest,
  DeleteServerPrivateNetworkRequest,
  DeleteServerRequest,
  GetBMCAccessRequest,
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
  ListServerPrivateNetworksRequest,
  ListServerPrivateNetworksResponse,
  ListServersRequest,
  ListServersResponse,
  ListSettingsRequest,
  ListSettingsResponse,
  OS,
  Offer,
  Option,
  RebootServerRequest,
  Server,
  ServerPrivateNetwork,
  SetServerPrivateNetworksRequest,
  SetServerPrivateNetworksResponse,
  Setting,
  StartBMCAccessRequest,
  StartServerRequest,
  StopBMCAccessRequest,
  StopServerRequest,
  UpdateIPRequest,
  UpdateServerRequest,
  UpdateSettingRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Elastic metal API.
 *
 * This API allows to manage your Bare metal server.
 */
export class BaremetalV1GenAPI extends API {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = [
    'fr-par-1',
    'fr-par-2',
    'nl-ams-1',
  ]

  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers`,
        urlParams: urlParams(
          ['name', request.name],
          ['option_id', request.optionId],
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
          ['status', request.status],
          ['tags', request.tags],
        ),
      },
      unmarshalListServersResponse,
    )

  /**
   * List elastic metal servers for organization.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}) =>
    enrichForPagination('servers', this.pageOfListServers, request)

  /**
   * Get the server associated with the given ID.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
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
   * Create a new elastic metal server. Once the server is created, you probably
   * want to install an OS.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers`,
      },
      unmarshalServer,
    )

  /**
   * Update the server associated with the given ID.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  /**
   * Install an OS on the server associated with the given ID.
   *
   * @param request - The request {@link InstallServerRequest}
   * @returns A Promise of Server
   */
  installServer = (request: Readonly<InstallServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalInstallServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/install`,
      },
      unmarshalServer,
    )

  /**
   * Give the ping status on the server associated with the given ID.
   *
   * @param request - The request {@link GetServerMetricsRequest}
   * @returns A Promise of GetServerMetricsResponse
   */
  getServerMetrics = (request: Readonly<GetServerMetricsRequest>) =>
    this.client.fetch<GetServerMetricsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/metrics`,
      },
      unmarshalGetServerMetricsResponse,
    )

  /**
   * Delete the server associated with the given ID.
   *
   * @param request - The request {@link DeleteServerRequest}
   * @returns A Promise of Server
   */
  deleteServer = (request: Readonly<DeleteServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'DELETE',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  /**
   * Reboot the server associated with the given ID, use boot param to reboot in rescue.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
      },
      unmarshalServer,
    )

  /**
   * Start the server associated with the given ID.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/start`,
      },
      unmarshalServer,
    )

  /**
   * Stop the server associated with the given ID.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/stop`,
      },
      unmarshalServer,
    )

  protected pageOfListServerEvents = (
    request: Readonly<ListServerEventsRequest>,
  ) =>
    this.client.fetch<ListServerEventsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/events`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
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
   * List events associated to the given server ID.
   *
   * @param request - The request {@link ListServerEventsRequest}
   * @returns A Promise of ListServerEventsResponse
   */
  listServerEvents = (request: Readonly<ListServerEventsRequest>) =>
    enrichForPagination('events', this.pageOfListServerEvents, request)

  /**
   * Start BMC (Baseboard Management Controller) access associated with the
   * given ID. The BMC (Baseboard Management Controller) access is available one
   * hour after the installation of the server. You need first to create an
   * option Remote Access. You will find the ID and the price with a call to
   * listOffers
   * (https://developers.scaleway.com/en/products/baremetal/api/#get-78db92).
   * Then you can add the option
   * https://developers.scaleway.com/en/products/baremetal/api/#post-b14abd. Do
   * not forget to delete the Option. After start BMC, you need to Get Remote
   * Access to get the login/password
   * https://developers.scaleway.com/en/products/baremetal/api/#get-cefc0f.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/bmc-access`,
      },
      unmarshalBMCAccess,
    )

  /**
   * Get the BMC (Baseboard Management Controller) access associated with the given ID.
   *
   * @param request - The request {@link GetBMCAccessRequest}
   * @returns A Promise of BMCAccess
   */
  getBMCAccess = (request: Readonly<GetBMCAccessRequest>) =>
    this.client.fetch<BMCAccess>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/bmc-access`,
      },
      unmarshalBMCAccess,
    )

  /**
   * Stop BMC (Baseboard Management Controller) access associated with the given ID.
   *
   * @param request - The request {@link StopBMCAccessRequest}
   */
  stopBMCAccess = (request: Readonly<StopBMCAccessRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/baremetal/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/servers/${validatePathParam('serverId', request.serverId)}/bmc-access`,
    })

  /**
   * Configure ip associated with the given server ID and ipID. You can use this
   * method to set a reverse dns for an IP.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  /**
   * Add an option to a specific server.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/options/${validatePathParam('optionId', request.optionId)}`,
      },
      unmarshalServer,
    )

  /**
   * Delete an option from a specific server.
   *
   * @param request - The request {@link DeleteOptionServerRequest}
   * @returns A Promise of Server
   */
  deleteOptionServer = (request: Readonly<DeleteOptionServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'DELETE',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/options/${validatePathParam('optionId', request.optionId)}`,
      },
      unmarshalServer,
    )

  protected pageOfListOffers = (request: Readonly<ListOffersRequest> = {}) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/offers`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'subscription_period',
            request.subscriptionPeriod ?? 'unknown_subscription_period',
          ],
        ),
      },
      unmarshalListOffersResponse,
    )

  /**
   * List all available server offers.
   *
   * @param request - The request {@link ListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<ListOffersRequest> = {}) =>
    enrichForPagination('offers', this.pageOfListOffers, request)

  /**
   * Return specific offer for the given ID.
   *
   * @param request - The request {@link GetOfferRequest}
   * @returns A Promise of Offer
   */
  getOffer = (request: Readonly<GetOfferRequest>) =>
    this.client.fetch<Offer>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/offers/${validatePathParam('offerId', request.offerId)}`,
      },
      unmarshalOffer,
    )

  /**
   * Return specific option for the given ID.
   *
   * @param request - The request {@link GetOptionRequest}
   * @returns A Promise of Option
   */
  getOption = (request: Readonly<GetOptionRequest>) =>
    this.client.fetch<Option>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/options/${validatePathParam('optionId', request.optionId)}`,
      },
      unmarshalOption,
    )

  protected pageOfListOptions = (request: Readonly<ListOptionsRequest> = {}) =>
    this.client.fetch<ListOptionsResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/options`,
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
   * List all options matching with filters.
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/settings`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
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
   * Return all settings for a project ID.
   *
   * @param request - The request {@link ListSettingsRequest}
   * @returns A Promise of ListSettingsResponse
   */
  listSettings = (request: Readonly<ListSettingsRequest> = {}) =>
    enrichForPagination('settings', this.pageOfListSettings, request)

  /**
   * Update a setting for a project ID (enable or disable).
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
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/settings/${validatePathParam('settingId', request.settingId)}`,
      },
      unmarshalSetting,
    )

  protected pageOfListOS = (request: Readonly<ListOSRequest> = {}) =>
    this.client.fetch<ListOSResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/os`,
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
   * List all available OS that can be install on an elastic metal server.
   *
   * @param request - The request {@link ListOSRequest}
   * @returns A Promise of ListOSResponse
   */
  listOS = (request: Readonly<ListOSRequest> = {}) =>
    enrichForPagination('os', this.pageOfListOS, request)

  /**
   * Return specific OS for the given ID.
   *
   * @param request - The request {@link GetOSRequest}
   * @returns A Promise of OS
   */
  getOS = (request: Readonly<GetOSRequest>) =>
    this.client.fetch<OS>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/os/${validatePathParam('osId', request.osId)}`,
      },
      unmarshalOS,
    )

  /**
   * Add a server to a private network
   *
   * @param request - The request {@link AddServerPrivateNetworkRequest}
   * @returns A Promise of ServerPrivateNetwork
   */
  addServerPrivateNetwork = (
    request: Readonly<AddServerPrivateNetworkRequest>,
  ) =>
    this.client.fetch<ServerPrivateNetwork>(
      {
        body: JSON.stringify(
          marshalAddServerPrivateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/private-networks`,
      },
      unmarshalServerPrivateNetwork,
    )

  /**
   * Set multiple private networks on a server
   *
   * @param request - The request {@link SetServerPrivateNetworksRequest}
   * @returns A Promise of SetServerPrivateNetworksResponse
   */
  setServerPrivateNetworks = (
    request: Readonly<SetServerPrivateNetworksRequest>,
  ) =>
    this.client.fetch<SetServerPrivateNetworksResponse>(
      {
        body: JSON.stringify(
          marshalSetServerPrivateNetworksRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/private-networks`,
      },
      unmarshalSetServerPrivateNetworksResponse,
    )

  protected pageOfListServerPrivateNetworks = (
    request: Readonly<ListServerPrivateNetworksRequest> = {},
  ) =>
    this.client.fetch<ListServerPrivateNetworksResponse>(
      {
        method: 'GET',
        path: `/baremetal/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/server-private-networks`,
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
          ['private_network_id', request.privateNetworkId],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['server_id', request.serverId],
        ),
      },
      unmarshalListServerPrivateNetworksResponse,
    )

  /**
   * List the private networks of a server
   *
   * @param request - The request {@link ListServerPrivateNetworksRequest}
   * @returns A Promise of ListServerPrivateNetworksResponse
   */
  listServerPrivateNetworks = (
    request: Readonly<ListServerPrivateNetworksRequest> = {},
  ) =>
    enrichForPagination(
      'serverPrivateNetworks',
      this.pageOfListServerPrivateNetworks,
      request,
    )

  /**
   * Delete a private network
   *
   * @param request - The request {@link DeleteServerPrivateNetworkRequest}
   */
  deleteServerPrivateNetwork = (
    request: Readonly<DeleteServerPrivateNetworkRequest>,
  ) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/baremetal/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/servers/${validatePathParam(
        'serverId',
        request.serverId,
      )}/private-networks/${validatePathParam(
        'privateNetworkId',
        request.privateNetworkId,
      )}`,
    })
}
