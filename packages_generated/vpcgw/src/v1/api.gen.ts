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
  GATEWAY_NETWORK_TRANSIENT_STATUSES as GATEWAY_NETWORK_TRANSIENT_STATUSES_VPCGW,
  GATEWAY_TRANSIENT_STATUSES as GATEWAY_TRANSIENT_STATUSES_VPCGW,
} from './content.gen.js'
import {
  marshalCreateDHCPEntryRequest,
  marshalCreateDHCPRequest,
  marshalCreateGatewayNetworkRequest,
  marshalCreateGatewayRequest,
  marshalCreateIPRequest,
  marshalCreatePATRuleRequest,
  unmarshalDHCP,
  unmarshalDHCPEntry,
  unmarshalGateway,
  unmarshalGatewayNetwork,
  unmarshalIP,
  unmarshalListDHCPEntriesResponse,
  unmarshalListDHCPsResponse,
  unmarshalListGatewayNetworksResponse,
  unmarshalListGatewayTypesResponse,
  unmarshalListGatewaysResponse,
  unmarshalListIPsResponse,
  unmarshalListPATRulesResponse,
  unmarshalPATRule,
  marshalSetDHCPEntriesRequest,
  unmarshalSetDHCPEntriesResponse,
  marshalSetPATRulesRequest,
  unmarshalSetPATRulesResponse,
  marshalUpdateDHCPEntryRequest,
  marshalUpdateDHCPRequest,
  marshalUpdateGatewayNetworkRequest,
  marshalUpdateGatewayRequest,
  marshalUpdateIPRequest,
  marshalUpdatePATRuleRequest,
  marshalUpgradeGatewayRequest,
} from './marshalling.gen.js'
import type {
  CreateDHCPEntryRequest,
  CreateDHCPRequest,
  CreateGatewayNetworkRequest,
  CreateGatewayRequest,
  CreateIPRequest,
  CreatePATRuleRequest,
  DHCP,
  DHCPEntry,
  DeleteDHCPEntryRequest,
  DeleteDHCPRequest,
  DeleteGatewayNetworkRequest,
  DeleteGatewayRequest,
  DeleteIPRequest,
  DeletePATRuleRequest,
  EnableIPMobilityRequest,
  Gateway,
  GatewayNetwork,
  GetDHCPEntryRequest,
  GetDHCPRequest,
  GetGatewayNetworkRequest,
  GetGatewayRequest,
  GetIPRequest,
  GetPATRuleRequest,
  IP,
  ListDHCPEntriesRequest,
  ListDHCPEntriesResponse,
  ListDHCPsRequest,
  ListDHCPsResponse,
  ListGatewayNetworksRequest,
  ListGatewayNetworksResponse,
  ListGatewayTypesRequest,
  ListGatewayTypesResponse,
  ListGatewaysRequest,
  ListGatewaysResponse,
  ListIPsRequest,
  ListIPsResponse,
  ListPATRulesRequest,
  ListPATRulesResponse,
  MigrateToV2Request,
  PATRule,
  RefreshSSHKeysRequest,
  SetDHCPEntriesRequest,
  SetDHCPEntriesResponse,
  SetPATRulesRequest,
  SetPATRulesResponse,
  UpdateDHCPEntryRequest,
  UpdateDHCPRequest,
  UpdateGatewayNetworkRequest,
  UpdateGatewayRequest,
  UpdateIPRequest,
  UpdatePATRuleRequest,
  UpgradeGatewayRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Public Gateways API.

This API allows you to manage your Public Gateways.
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
      'nl-ams-3',
      'pl-waw-1',
      'pl-waw-2',
      'pl-waw-3',
    ],
  })

  protected pageOfListGateways = (
    request: Readonly<ListGatewaysRequest> = {},
  ) =>
    this.client.fetch<ListGatewaysResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['private_network_id', request.privateNetworkId],
          ['project_id', request.projectId],
          ['status', request.status],
          ['tags', request.tags],
          ['type', request.type],
        ),
      },
      unmarshalListGatewaysResponse,
    )

  /**
   * List Public Gateways. List Public Gateways in a given Scaleway Organization or Project. By default, results are displayed in ascending order of creation date.
   *
   * @deprecated
   * @param request - The request {@link ListGatewaysRequest}
   * @returns A Promise of ListGatewaysResponse
   */
  listGateways = (request: Readonly<ListGatewaysRequest> = {}) =>
    enrichForPagination('gateways', this.pageOfListGateways, request)

  /**
   * Get a Public Gateway. Get details of a Public Gateway, specified by its gateway ID. The response object contains full details of the gateway, including its **name**, **type**, **status** and more.
   *
   * @deprecated
   * @param request - The request {@link GetGatewayRequest}
   * @returns A Promise of Gateway
   */
  getGateway = (request: Readonly<GetGatewayRequest>) =>
    this.client.fetch<Gateway>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
      },
      unmarshalGateway,
    )

  /**
   * Waits for {@link Gateway} to be in a final state.
   *
   * @param request - The request {@link GetGatewayRequest}
   * @param options - The waiting options
   * @returns A Promise of Gateway
   */
  waitForGateway = (
    request: Readonly<GetGatewayRequest>,
    options?: Readonly<WaitForOptions<Gateway>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !GATEWAY_TRANSIENT_STATUSES_VPCGW.includes(res.status),
          )),
      this.getGateway,
      request,
      options,
    )

  /**
   * Create a Public Gateway. Create a new Public Gateway in the specified Scaleway Project, defining its **name**, **type** and other configuration details such as whether to enable SSH bastion.
   *
   * @deprecated
   * @param request - The request {@link CreateGatewayRequest}
   * @returns A Promise of Gateway
   */
  createGateway = (request: Readonly<CreateGatewayRequest>) =>
    this.client.fetch<Gateway>(
      {
        body: JSON.stringify(
          marshalCreateGatewayRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways`,
      },
      unmarshalGateway,
    )

  /**
   * Update a Public Gateway. Update the parameters of an existing Public Gateway, for example, its **name**, **tags**, **SSH bastion configuration**, and **DNS servers**.
   *
   * @deprecated
   * @param request - The request {@link UpdateGatewayRequest}
   * @returns A Promise of Gateway
   */
  updateGateway = (request: Readonly<UpdateGatewayRequest>) =>
    this.client.fetch<Gateway>(
      {
        body: JSON.stringify(
          marshalUpdateGatewayRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
      },
      unmarshalGateway,
    )

  /**
   * Delete a Public Gateway. Delete an existing Public Gateway, specified by its gateway ID. This action is irreversible.
   *
   * @deprecated
   * @param request - The request {@link DeleteGatewayRequest}
   */
  deleteGateway = (request: Readonly<DeleteGatewayRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
      urlParams: urlParams(['cleanup_dhcp', request.cleanupDhcp]),
    })

  /**
   * Upgrade a Public Gateway to the latest version and/or to a different commercial offer type. Upgrade a given Public Gateway to the newest software version or to a different commercial offer type. This applies the latest bugfixes and features to your Public Gateway. Note that gateway service will be interrupted during the update.
   *
   * @deprecated
   * @param request - The request {@link UpgradeGatewayRequest}
   * @returns A Promise of Gateway
   */
  upgradeGateway = (request: Readonly<UpgradeGatewayRequest>) =>
    this.client.fetch<Gateway>(
      {
        body: JSON.stringify(
          marshalUpgradeGatewayRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/upgrade`,
      },
      unmarshalGateway,
    )

  /**
   * Upgrade a Public Gateway to IP mobility. Upgrade a Public Gateway to IP mobility (move from NAT IP to routed IP). This is idempotent: repeated calls after the first will return no error but have no effect.
   *
   * @deprecated
   * @param request - The request {@link EnableIPMobilityRequest}
   */
  enableIPMobility = (request: Readonly<EnableIPMobilityRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/enable-ip-mobility`,
    })

  protected pageOfListGatewayNetworks = (
    request: Readonly<ListGatewayNetworksRequest> = {},
  ) =>
    this.client.fetch<ListGatewayNetworksResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks`,
        urlParams: urlParams(
          ['dhcp_id', request.dhcpId],
          ['enable_masquerade', request.enableMasquerade],
          ['gateway_id', request.gatewayId],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['private_network_id', request.privateNetworkId],
          ['status', request.status],
        ),
      },
      unmarshalListGatewayNetworksResponse,
    )

  /**
   * List Public Gateway connections to Private Networks. List the connections between Public Gateways and Private Networks (a connection = a GatewayNetwork). You can choose to filter by `gateway-id` to list all Private Networks attached to the specified Public Gateway, or by `private_network_id` to list all Public Gateways attached to the specified Private Network. Other query parameters are also available. The result is an array of GatewayNetwork objects, each giving details of the connection between a given Public Gateway and a given Private Network.
   *
   * @deprecated
   * @param request - The request {@link ListGatewayNetworksRequest}
   * @returns A Promise of ListGatewayNetworksResponse
   */
  listGatewayNetworks = (request: Readonly<ListGatewayNetworksRequest> = {}) =>
    enrichForPagination(
      'gatewayNetworks',
      this.pageOfListGatewayNetworks,
      request,
    )

  /**
   * Get a Public Gateway connection to a Private Network. Get details of a given connection between a Public Gateway and a Private Network (this connection = a GatewayNetwork), specified by its `gateway_network_id`. The response object contains details of the connection including the IDs of the Public Gateway and Private Network, the dates the connection was created/updated and its configuration settings.
   *
   * @deprecated
   * @param request - The request {@link GetGatewayNetworkRequest}
   * @returns A Promise of GatewayNetwork
   */
  getGatewayNetwork = (request: Readonly<GetGatewayNetworkRequest>) =>
    this.client.fetch<GatewayNetwork>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks/${validatePathParam('gatewayNetworkId', request.gatewayNetworkId)}`,
      },
      unmarshalGatewayNetwork,
    )

  /**
   * Waits for {@link GatewayNetwork} to be in a final state.
   *
   * @param request - The request {@link GetGatewayNetworkRequest}
   * @param options - The waiting options
   * @returns A Promise of GatewayNetwork
   */
  waitForGatewayNetwork = (
    request: Readonly<GetGatewayNetworkRequest>,
    options?: Readonly<WaitForOptions<GatewayNetwork>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !GATEWAY_NETWORK_TRANSIENT_STATUSES_VPCGW.includes(res.status),
          )),
      this.getGatewayNetwork,
      request,
      options,
    )

  /**
   * Attach a Public Gateway to a Private Network. Attach a specific Public Gateway to a specific Private Network (create a GatewayNetwork). You can configure parameters for the connection including DHCP settings, whether to enable masquerade (dynamic NAT), and more.
   *
   * @deprecated
   * @param request - The request {@link CreateGatewayNetworkRequest}
   * @returns A Promise of GatewayNetwork
   */
  createGatewayNetwork = (request: Readonly<CreateGatewayNetworkRequest>) =>
    this.client.fetch<GatewayNetwork>(
      {
        body: JSON.stringify(
          marshalCreateGatewayNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks`,
      },
      unmarshalGatewayNetwork,
    )

  /**
   * Update a Public Gateway's connection to a Private Network. Update the configuration parameters of a connection between a given Public Gateway and Private Network (the connection = a GatewayNetwork). Updatable parameters include DHCP settings and whether to enable traffic masquerade (dynamic NAT).
   *
   * @deprecated
   * @param request - The request {@link UpdateGatewayNetworkRequest}
   * @returns A Promise of GatewayNetwork
   */
  updateGatewayNetwork = (request: Readonly<UpdateGatewayNetworkRequest>) =>
    this.client.fetch<GatewayNetwork>(
      {
        body: JSON.stringify(
          marshalUpdateGatewayNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks/${validatePathParam('gatewayNetworkId', request.gatewayNetworkId)}`,
      },
      unmarshalGatewayNetwork,
    )

  /**
   * Detach a Public Gateway from a Private Network. Detach a given Public Gateway from a given Private Network, i.e. delete a GatewayNetwork specified by a gateway_network_id.
   *
   * @deprecated
   * @param request - The request {@link DeleteGatewayNetworkRequest}
   */
  deleteGatewayNetwork = (request: Readonly<DeleteGatewayNetworkRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks/${validatePathParam('gatewayNetworkId', request.gatewayNetworkId)}`,
      urlParams: urlParams(['cleanup_dhcp', request.cleanupDhcp]),
    })

  protected pageOfListDHCPs = (request: Readonly<ListDHCPsRequest> = {}) =>
    this.client.fetch<ListDHCPsResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcps`,
        urlParams: urlParams(
          ['address', request.address],
          ['has_address', request.hasAddress],
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
      unmarshalListDHCPsResponse,
    )

  /**
   * List DHCP configurations. List DHCP configurations, optionally filtering by Organization, Project, Public Gateway IP address or more. The response is an array of DHCP configuration objects, each identified by a DHCP ID and containing configuration settings for the assignment of IP addresses to devices on a Private Network attached to a Public Gateway. Note that the response does not contain the IDs of any Private Network / Public Gateway the configuration is attached to. Use the `List Public Gateway connections to Private Networks` method for that purpose, filtering on DHCP ID.
   *
   * @deprecated
   * @param request - The request {@link ListDHCPsRequest}
   * @returns A Promise of ListDHCPsResponse
   */
  listDHCPs = (request: Readonly<ListDHCPsRequest> = {}) =>
    enrichForPagination('dhcps', this.pageOfListDHCPs, request)

  /**
   * Get a DHCP configuration. Get a DHCP configuration object, identified by its DHCP ID. The response object contains configuration settings for the assignment of IP addresses to devices on a Private Network attached to a Public Gateway. Note that the response does not contain the IDs of any Private Network / Public Gateway the configuration is attached to. Use the `List Public Gateway connections to Private Networks` method for that purpose, filtering on DHCP ID.
   *
   * @deprecated
   * @param request - The request {@link GetDHCPRequest}
   * @returns A Promise of DHCP
   */
  getDHCP = (request: Readonly<GetDHCPRequest>) =>
    this.client.fetch<DHCP>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcps/${validatePathParam('dhcpId', request.dhcpId)}`,
      },
      unmarshalDHCP,
    )

  /**
   * Create a DHCP configuration. Create a new DHCP configuration object, containing settings for the assignment of IP addresses to devices on a Private Network attached to a Public Gateway. The response object includes the ID of the DHCP configuration object. You can use this ID as part of a call to `Create a Public Gateway connection to a Private Network` or `Update a Public Gateway connection to a Private Network` to directly apply this DHCP configuration.
   *
   * @deprecated
   * @param request - The request {@link CreateDHCPRequest}
   * @returns A Promise of DHCP
   */
  createDHCP = (request: Readonly<CreateDHCPRequest>) =>
    this.client.fetch<DHCP>(
      {
        body: JSON.stringify(
          marshalCreateDHCPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcps`,
      },
      unmarshalDHCP,
    )

  /**
   * Update a DHCP configuration. Update a DHCP configuration object, identified by its DHCP ID.
   *
   * @deprecated
   * @param request - The request {@link UpdateDHCPRequest}
   * @returns A Promise of DHCP
   */
  updateDHCP = (request: Readonly<UpdateDHCPRequest>) =>
    this.client.fetch<DHCP>(
      {
        body: JSON.stringify(
          marshalUpdateDHCPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcps/${validatePathParam('dhcpId', request.dhcpId)}`,
      },
      unmarshalDHCP,
    )

  /**
   * Delete a DHCP configuration. Delete a DHCP configuration object, identified by its DHCP ID. Note that you cannot delete a DHCP configuration object that is currently being used by a Gateway Network.
   *
   * @deprecated
   * @param request - The request {@link DeleteDHCPRequest}
   */
  deleteDHCP = (request: Readonly<DeleteDHCPRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcps/${validatePathParam('dhcpId', request.dhcpId)}`,
    })

  protected pageOfListDHCPEntries = (
    request: Readonly<ListDHCPEntriesRequest> = {},
  ) =>
    this.client.fetch<ListDHCPEntriesResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcp-entries`,
        urlParams: urlParams(
          ['gateway_network_id', request.gatewayNetworkId],
          ['hostname', request.hostname],
          ['ip_address', request.ipAddress],
          ['mac_address', request.macAddress],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['type', request.type],
        ),
      },
      unmarshalListDHCPEntriesResponse,
    )

  /**
   * List DHCP entries. List DHCP entries, whether dynamically assigned and/or statically reserved. DHCP entries can be filtered by the Gateway Network they are on, their MAC address, IP address, type or hostname.
   *
   * @deprecated
   * @param request - The request {@link ListDHCPEntriesRequest}
   * @returns A Promise of ListDHCPEntriesResponse
   */
  listDHCPEntries = (request: Readonly<ListDHCPEntriesRequest> = {}) =>
    enrichForPagination('dhcpEntries', this.pageOfListDHCPEntries, request)

  /**
   * Get a DHCP entry. Get a DHCP entry, specified by its DHCP entry ID.
   *
   * @deprecated
   * @param request - The request {@link GetDHCPEntryRequest}
   * @returns A Promise of DHCPEntry
   */
  getDHCPEntry = (request: Readonly<GetDHCPEntryRequest>) =>
    this.client.fetch<DHCPEntry>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcp-entries/${validatePathParam('dhcpEntryId', request.dhcpEntryId)}`,
      },
      unmarshalDHCPEntry,
    )

  /**
   * Create a DHCP entry. Create a static DHCP reservation, specifying the Gateway Network for the reservation, the MAC address of the target device and the IP address to assign this device. The response is a DHCP entry object, confirming the ID and configuration details of the static DHCP reservation.
   *
   * @deprecated
   * @param request - The request {@link CreateDHCPEntryRequest}
   * @returns A Promise of DHCPEntry
   */
  createDHCPEntry = (request: Readonly<CreateDHCPEntryRequest>) =>
    this.client.fetch<DHCPEntry>(
      {
        body: JSON.stringify(
          marshalCreateDHCPEntryRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcp-entries`,
      },
      unmarshalDHCPEntry,
    )

  /**
   * Update a DHCP entry. Update the IP address for a DHCP entry, specified by its DHCP entry ID. You can update an existing DHCP entry of any type (`reservation` (static), `lease` (dynamic) or `unknown`), but in manually updating the IP address the entry will necessarily be of type `reservation` after the update.
   *
   * @deprecated
   * @param request - The request {@link UpdateDHCPEntryRequest}
   * @returns A Promise of DHCPEntry
   */
  updateDHCPEntry = (request: Readonly<UpdateDHCPEntryRequest>) =>
    this.client.fetch<DHCPEntry>(
      {
        body: JSON.stringify(
          marshalUpdateDHCPEntryRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcp-entries/${validatePathParam('dhcpEntryId', request.dhcpEntryId)}`,
      },
      unmarshalDHCPEntry,
    )

  /**
   * Set all DHCP reservations on a Gateway Network. Set the list of DHCP reservations attached to a Gateway Network. Reservations are identified by their MAC address, and will sync the current DHCP entry list to the given list, creating, updating or deleting DHCP entries accordingly.
   *
   * @deprecated
   * @param request - The request {@link SetDHCPEntriesRequest}
   * @returns A Promise of SetDHCPEntriesResponse
   */
  setDHCPEntries = (request: Readonly<SetDHCPEntriesRequest>) =>
    this.client.fetch<SetDHCPEntriesResponse>(
      {
        body: JSON.stringify(
          marshalSetDHCPEntriesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcp-entries`,
      },
      unmarshalSetDHCPEntriesResponse,
    )

  /**
   * Delete a DHCP entry. Delete a static DHCP reservation, identified by its DHCP entry ID. Note that you cannot delete DHCP entries of type `lease`, these are deleted automatically when their time-to-live expires.
   *
   * @deprecated
   * @param request - The request {@link DeleteDHCPEntryRequest}
   */
  deleteDHCPEntry = (request: Readonly<DeleteDHCPEntryRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dhcp-entries/${validatePathParam('dhcpEntryId', request.dhcpEntryId)}`,
    })

  protected pageOfListPATRules = (
    request: Readonly<ListPATRulesRequest> = {},
  ) =>
    this.client.fetch<ListPATRulesResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules`,
        urlParams: urlParams(
          ['gateway_id', request.gatewayId],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['private_ip', request.privateIp],
          ['protocol', request.protocol],
        ),
      },
      unmarshalListPATRulesResponse,
    )

  /**
   * List PAT rules. List PAT rules. You can filter by gateway ID to list all PAT rules for a particular gateway, or filter for PAT rules targeting a specific IP address or using a specific protocol.
   *
   * @deprecated
   * @param request - The request {@link ListPATRulesRequest}
   * @returns A Promise of ListPATRulesResponse
   */
  listPATRules = (request: Readonly<ListPATRulesRequest> = {}) =>
    enrichForPagination('patRules', this.pageOfListPATRules, request)

  /**
   * Get a PAT rule. Get a PAT rule, specified by its PAT rule ID. The response object gives full details of the PAT rule, including the Public Gateway it belongs to and the configuration settings in terms of public / private ports, private IP and protocol.
   *
   * @deprecated
   * @param request - The request {@link GetPATRuleRequest}
   * @returns A Promise of PATRule
   */
  getPATRule = (request: Readonly<GetPATRuleRequest>) =>
    this.client.fetch<PATRule>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
      },
      unmarshalPATRule,
    )

  /**
   * Create a PAT rule. Create a new PAT rule on a specified Public Gateway, defining the protocol to use, public port to listen on, and private port / IP address to map to.
   *
   * @deprecated
   * @param request - The request {@link CreatePATRuleRequest}
   * @returns A Promise of PATRule
   */
  createPATRule = (request: Readonly<CreatePATRuleRequest>) =>
    this.client.fetch<PATRule>(
      {
        body: JSON.stringify(
          marshalCreatePATRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules`,
      },
      unmarshalPATRule,
    )

  /**
   * Update a PAT rule. Update a PAT rule, specified by its PAT rule ID. Configuration settings including private/public port, private IP address and protocol can all be updated.
   *
   * @deprecated
   * @param request - The request {@link UpdatePATRuleRequest}
   * @returns A Promise of PATRule
   */
  updatePATRule = (request: Readonly<UpdatePATRuleRequest>) =>
    this.client.fetch<PATRule>(
      {
        body: JSON.stringify(
          marshalUpdatePATRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
      },
      unmarshalPATRule,
    )

  /**
   * Set all PAT rules. Set a definitive list of PAT rules attached to a Public Gateway. Each rule is identified by its public port and protocol. This will sync the current PAT rule list on the gateway with the new list, creating, updating or deleting PAT rules accordingly.
   *
   * @deprecated
   * @param request - The request {@link SetPATRulesRequest}
   * @returns A Promise of SetPATRulesResponse
   */
  setPATRules = (request: Readonly<SetPATRulesRequest>) =>
    this.client.fetch<SetPATRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetPATRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules`,
      },
      unmarshalSetPATRulesResponse,
    )

  /**
   * Delete a PAT rule. Delete a PAT rule, identified by its PAT rule ID. This action is irreversible.
   *
   * @deprecated
   * @param request - The request {@link DeletePATRuleRequest}
   */
  deletePATRule = (request: Readonly<DeletePATRuleRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
    })

  /**
   * List Public Gateway types. List the different Public Gateway commercial offer types available at Scaleway. The response is an array of objects describing the name and technical details of each available gateway type.
   *
   * @deprecated
   * @param request - The request {@link ListGatewayTypesRequest}
   * @returns A Promise of ListGatewayTypesResponse
   */
  listGatewayTypes = (request: Readonly<ListGatewayTypesRequest> = {}) =>
    this.client.fetch<ListGatewayTypesResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-types`,
      },
      unmarshalListGatewayTypesResponse,
    )

  protected pageOfListIPs = (request: Readonly<ListIPsRequest> = {}) =>
    this.client.fetch<ListIPsResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
        urlParams: urlParams(
          ['is_free', request.isFree],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['reverse', request.reverse],
          ['tags', request.tags],
        ),
      },
      unmarshalListIPsResponse,
    )

  /**
   * List IPs. List Public Gateway flexible IP addresses. A number of filter options are available for limiting results in the response.
   *
   * @deprecated
   * @param request - The request {@link ListIPsRequest}
   * @returns A Promise of ListIPsResponse
   */
  listIPs = (request: Readonly<ListIPsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIPs, request)

  /**
   * Get an IP. Get details of a Public Gateway flexible IP address, identified by its IP ID. The response object contains information including which (if any) Public Gateway using this IP address, the reverse and various other metadata.
   *
   * @deprecated
   * @param request - The request {@link GetIPRequest}
   * @returns A Promise of IP
   */
  getIP = (request: Readonly<GetIPRequest>) =>
    this.client.fetch<IP>(
      {
        method: 'GET',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  /**
   * Reserve an IP. Create (reserve) a new flexible IP address that can be used for a Public Gateway in a specified Scaleway Project.
   *
   * @deprecated
   * @param request - The request {@link CreateIPRequest}
   * @returns A Promise of IP
   */
  createIP = (request: Readonly<CreateIPRequest> = {}) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalCreateIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
      },
      unmarshalIP,
    )

  /**
   * Update an IP. Update details of an existing flexible IP address, including its tags, reverse and the Public Gateway it is assigned to.
   *
   * @deprecated
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
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  /**
   * Delete an IP. Delete a flexible IP address from your account. This action is irreversible.
   *
   * @deprecated
   * @param request - The request {@link DeleteIPRequest}
   */
  deleteIP = (request: Readonly<DeleteIPRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
    })

  /**
   * Refresh a Public Gateway's SSH keys. Refresh the SSH keys of a given Public Gateway, specified by its gateway ID. This adds any new SSH keys in the gateway's Scaleway Project to the gateway itself.
   *
   * @deprecated
   * @param request - The request {@link RefreshSSHKeysRequest}
   * @returns A Promise of Gateway
   */
  refreshSSHKeys = (request: Readonly<RefreshSSHKeysRequest>) =>
    this.client.fetch<Gateway>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/refresh-ssh-keys`,
      },
      unmarshalGateway,
    )

  /**
   * Put a Public Gateway in IPAM mode. Put a Public Gateway in IPAM mode, so that it can be used with the Public Gateways API v2. This call is idempotent.
   *
   * @deprecated
   * @param request - The request {@link MigrateToV2Request}
   */
  migrateToV2 = (request: Readonly<MigrateToV2Request>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/vpc-gw/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/migrate-to-v2`,
    })
}
