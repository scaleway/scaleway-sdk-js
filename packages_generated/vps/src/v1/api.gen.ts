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
import {SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_VPS,} from './content.gen.js'
import {
  unmarshalListLocationsResponse,
  unmarshalListOSResponse,
  unmarshalListOffersResponse,
  unmarshalListServersResponse,
  unmarshalOffer,
  unmarshalServer,
  marshalVpsApiChangeServerHostnameRequest,
  marshalVpsApiChangeServerPasswordRequest,
  marshalVpsApiCreateServerRequest,
  marshalVpsApiManageServerPowerRequest,
  marshalVpsApiReinstallServerRequest,
} from './marshalling.gen.js'
import type {
  ListLocationsResponse,
  ListOSResponse,
  ListOffersResponse,
  ListServersResponse,
  Offer,
  Server,
  VpsApiChangeServerHostnameRequest,
  VpsApiChangeServerPasswordRequest,
  VpsApiCreateServerRequest,
  VpsApiDeleteServerRequest,
  VpsApiGetOfferRequest,
  VpsApiGetServerRequest,
  VpsApiListLocationsRequest,
  VpsApiListOSRequest,
  VpsApiListOffersRequest,
  VpsApiListServersRequest,
  VpsApiManageServerPowerRequest,
  VpsApiReinstallServerRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * VPS API.

VPS API. Virtual private server API.
 */
export class VpsAPI extends ParentAPI {
  protected pageOfListServers = (request: Readonly<VpsApiListServersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/vps/v1/servers`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],  
          ...Object.entries(resolveOneOf([
            {default: this.client.settings.defaultOrganizationId,param: 'organization_id',
              value: request.organizationId,
            },
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListServersResponse,
    )
  
  /**
   * List VPS for project.
   *
   * @param request - The request {@link VpsApiListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<VpsApiListServersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('servers', this.pageOfListServers, request, options)

  
  /**
   * Get a specific VPS. Get the VPS associated with the given ID.
   *
   * @param request - The request {@link VpsApiGetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<VpsApiGetServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/vps/v1/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )
  
  /**
   * Waits for {@link Server} to be in a final state.
   *
   * @param request - The request {@link VpsApiGetServerRequest}
   * @param options - The waiting options
   * @returns A Promise of Server
   */
  waitForServer = (
    request: Readonly<VpsApiGetServerRequest>,
    options?: Readonly<WaitForOptions<Server>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!SERVER_TRANSIENT_STATUSES_VPS.includes(res.status))),
      this.getServer,
      request,
      options,
    )

  
  /**
   * Create a VPS. Create a new VPS. The order return you a service ID to follow the provisioning status with GetServer.
   *
   * @param request - The request {@link VpsApiCreateServerRequest}
   * @returns A Promise of Server
   */
  createServer = (request: Readonly<VpsApiCreateServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalVpsApiCreateServerRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/vps/v1/servers`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Delete a VPS. Delete the VPS associated with the given ID.
   *
   * @param request - The request {@link VpsApiDeleteServerRequest}
   * @returns A Promise of Server
   */
  deleteServer = (request: Readonly<VpsApiDeleteServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        method: 'DELETE',
        path: `/vps/v1/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Change VPS hostname. Change a VPS's hostname.
   *
   * @param request - The request {@link VpsApiChangeServerHostnameRequest}
   * @returns A Promise of Server
   */
  changeServerHostname = (request: Readonly<VpsApiChangeServerHostnameRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalVpsApiChangeServerHostnameRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/vps/v1/servers/${validatePathParam('serverId', request.serverId)}/change-hostname`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Change VPS password. Change a VPS's root password.
   *
   * @param request - The request {@link VpsApiChangeServerPasswordRequest}
   * @returns A Promise of Server
   */
  changeServerPassword = (request: Readonly<VpsApiChangeServerPasswordRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalVpsApiChangeServerPasswordRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/vps/v1/servers/${validatePathParam('serverId', request.serverId)}/change-password`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Manage VPS power. Switch VM off/on or reboot.
   *
   * @param request - The request {@link VpsApiManageServerPowerRequest}
   * @returns A Promise of Server
   */
  manageServerPower = (request: Readonly<VpsApiManageServerPowerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalVpsApiManageServerPowerRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/vps/v1/servers/${validatePathParam('serverId', request.serverId)}/manage-power`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Reinstall VPS. Reinstall a given OS to the VPS.
   *
   * @param request - The request {@link VpsApiReinstallServerRequest}
   * @returns A Promise of Server
   */
  reinstallServer = (request: Readonly<VpsApiReinstallServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalVpsApiReinstallServerRequest(request, this.client.settings),
        ),
        headers: { ...jsonContentHeaders, ...options?.headers },
        method: 'POST',
        path: `/vps/v1/servers/${validatePathParam('serverId', request.serverId)}/reinstall`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  protected pageOfListOffers = (request: Readonly<VpsApiListOffersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/vps/v1/offers`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListOffersResponse,
    )
  
  /**
   * List VPS offers.
   *
   * @param request - The request {@link VpsApiListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<VpsApiListOffersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('offers', this.pageOfListOffers, request, options)

  
  /**
   * Get offer. Return specific offer for the given ID.
   *
   * @param request - The request {@link VpsApiGetOfferRequest}
   * @returns A Promise of Offer
   */
  getOffer = (request: Readonly<VpsApiGetOfferRequest>, options?: RequestOptions) =>
    this.client.fetch<Offer>(
      {
        method: 'GET',
        path: `/vps/v1/offers/${validatePathParam('offerId', request.offerId)}`,
        signal: options?.signal,
      },
      unmarshalOffer,
    )

  
  protected pageOfListOS = (request: Readonly<VpsApiListOSRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListOSResponse>(
      {
        method: 'GET',
        path: `/vps/v1/os`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListOSResponse,
    )
  
  /**
   * List available OS. List all available OS.
   *
   * @param request - The request {@link VpsApiListOSRequest}
   * @returns A Promise of ListOSResponse
   */
  listOS = (request: Readonly<VpsApiListOSRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('os', this.pageOfListOS, request, options)

  
  protected pageOfListLocations = (request: Readonly<VpsApiListLocationsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListLocationsResponse>(
      {
        method: 'GET',
        path: `/vps/v1/locations`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListLocationsResponse,
    )
  
  /**
   * List available locations. List available locations and their available offers.
   *
   * @param request - The request {@link VpsApiListLocationsRequest}
   * @returns A Promise of ListLocationsResponse
   */
  listLocations = (request: Readonly<VpsApiListLocationsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('locations', this.pageOfListLocations, request, options)

  
}

