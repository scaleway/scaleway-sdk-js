// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Zone } from '../../../bridge'
import {
  marshalCreateDHCPEntryRequest,
  marshalCreateDHCPRequest,
  marshalCreateGatewayNetworkRequest,
  marshalCreateGatewayRequest,
  marshalCreateIPRequest,
  marshalCreatePATRuleRequest,
  marshalSetDHCPEntriesRequest,
  marshalSetPATRulesRequest,
  marshalUpdateDHCPEntryRequest,
  marshalUpdateDHCPRequest,
  marshalUpdateGatewayNetworkRequest,
  marshalUpdateGatewayRequest,
  marshalUpdateIPRequest,
  marshalUpdatePATRuleRequest,
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
  unmarshalSetDHCPEntriesResponse,
  unmarshalSetPATRulesResponse,
} from './marshalling.gen'
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
  PATRule,
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
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** VPC Public Gateway API. */
export class API extends ParentAPI {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = [
    'fr-par-1',
    'fr-par-2',
    'nl-ams-1',
    'pl-waw-1',
  ]

  protected pageOfListGateways = (
    request: Readonly<ListGatewaysRequest> = {},
  ) =>
    this.client.fetch<ListGatewaysResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateways`,
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
   * List VPC Public Gateways.
   *
   * @param request - The request {@link ListGatewaysRequest}
   * @returns A Promise of ListGatewaysResponse
   */
  listGateways = (request: Readonly<ListGatewaysRequest> = {}) =>
    enrichForPagination('gateways', this.pageOfListGateways, request)

  /**
   * Get a VPC Public Gateway.
   *
   * @param request - The request {@link GetGatewayRequest}
   * @returns A Promise of Gateway
   */
  getGateway = (request: Readonly<GetGatewayRequest>) =>
    this.client.fetch<Gateway>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
      },
      unmarshalGateway,
    )

  /**
   * Create a VPC Public Gateway.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateways`,
      },
      unmarshalGateway,
    )

  /**
   * Update a VPC Public Gateway.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
      },
      unmarshalGateway,
    )

  /**
   * Delete a VPC Public Gateway.
   *
   * @param request - The request {@link DeleteGatewayRequest}
   */
  deleteGateway = (request: Readonly<DeleteGatewayRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1beta1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
      urlParams: urlParams(['cleanup_dhcp', request.cleanupDhcp]),
    })

  /**
   * Upgrade a VPC Public Gateway to the latest version.
   *
   * @param request - The request {@link UpgradeGatewayRequest}
   * @returns A Promise of Gateway
   */
  upgradeGateway = (request: Readonly<UpgradeGatewayRequest>) =>
    this.client.fetch<Gateway>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateways/${validatePathParam(
          'gatewayId',
          request.gatewayId,
        )}/upgrade`,
      },
      unmarshalGateway,
    )

  protected pageOfListGatewayNetworks = (
    request: Readonly<ListGatewayNetworksRequest> = {},
  ) =>
    this.client.fetch<ListGatewayNetworksResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateway-networks`,
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
   * List gateway connections to Private Networks.
   *
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
   * Get a gateway connection to a Private Network.
   *
   * @param request - The request {@link GetGatewayNetworkRequest}
   * @returns A Promise of GatewayNetwork
   */
  getGatewayNetwork = (request: Readonly<GetGatewayNetworkRequest>) =>
    this.client.fetch<GatewayNetwork>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateway-networks/${validatePathParam(
          'gatewayNetworkId',
          request.gatewayNetworkId,
        )}`,
      },
      unmarshalGatewayNetwork,
    )

  /**
   * Attach a gateway to a Private Network.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateway-networks`,
      },
      unmarshalGatewayNetwork,
    )

  /**
   * Update a gateway connection to a Private Network.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateway-networks/${validatePathParam(
          'gatewayNetworkId',
          request.gatewayNetworkId,
        )}`,
      },
      unmarshalGatewayNetwork,
    )

  /**
   * Detach a gateway from a Private Network.
   *
   * @param request - The request {@link DeleteGatewayNetworkRequest}
   */
  deleteGatewayNetwork = (request: Readonly<DeleteGatewayNetworkRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1beta1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/gateway-networks/${validatePathParam(
        'gatewayNetworkId',
        request.gatewayNetworkId,
      )}`,
      urlParams: urlParams(['cleanup_dhcp', request.cleanupDhcp]),
    })

  protected pageOfListDHCPs = (request: Readonly<ListDHCPsRequest> = {}) =>
    this.client.fetch<ListDHCPsResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcps`,
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
   * List DHCP configurations.
   *
   * @param request - The request {@link ListDHCPsRequest}
   * @returns A Promise of ListDHCPsResponse
   */
  listDHCPs = (request: Readonly<ListDHCPsRequest> = {}) =>
    enrichForPagination('dhcps', this.pageOfListDHCPs, request)

  /**
   * Get a DHCP configuration.
   *
   * @param request - The request {@link GetDHCPRequest}
   * @returns A Promise of DHCP
   */
  getDHCP = (request: Readonly<GetDHCPRequest>) =>
    this.client.fetch<DHCP>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcps/${validatePathParam('dhcpId', request.dhcpId)}`,
      },
      unmarshalDHCP,
    )

  /**
   * Create a DHCP configuration.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcps`,
      },
      unmarshalDHCP,
    )

  /**
   * Update a DHCP configuration.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcps/${validatePathParam('dhcpId', request.dhcpId)}`,
      },
      unmarshalDHCP,
    )

  /**
   * Delete a DHCP configuration.
   *
   * @param request - The request {@link DeleteDHCPRequest}
   */
  deleteDHCP = (request: Readonly<DeleteDHCPRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1beta1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/dhcps/${validatePathParam('dhcpId', request.dhcpId)}`,
    })

  protected pageOfListDHCPEntries = (
    request: Readonly<ListDHCPEntriesRequest> = {},
  ) =>
    this.client.fetch<ListDHCPEntriesResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcp-entries`,
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
   * List DHCP entries.
   *
   * @param request - The request {@link ListDHCPEntriesRequest}
   * @returns A Promise of ListDHCPEntriesResponse
   */
  listDHCPEntries = (request: Readonly<ListDHCPEntriesRequest> = {}) =>
    enrichForPagination('dhcpEntries', this.pageOfListDHCPEntries, request)

  /**
   * Get DHCP entries.
   *
   * @param request - The request {@link GetDHCPEntryRequest}
   * @returns A Promise of DHCPEntry
   */
  getDHCPEntry = (request: Readonly<GetDHCPEntryRequest>) =>
    this.client.fetch<DHCPEntry>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcp-entries/${validatePathParam(
          'dhcpEntryId',
          request.dhcpEntryId,
        )}`,
      },
      unmarshalDHCPEntry,
    )

  /**
   * Create a static DHCP reservation.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcp-entries`,
      },
      unmarshalDHCPEntry,
    )

  /**
   * Update a DHCP entry.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcp-entries/${validatePathParam(
          'dhcpEntryId',
          request.dhcpEntryId,
        )}`,
      },
      unmarshalDHCPEntry,
    )

  /**
   * Set all DHCP reservations on a Gateway Network. Set the list of DHCP
   * reservations attached to a Gateway Network. Reservations are identified by
   * their MAC address, and will sync the current DHCP entry list to the given
   * list, creating, updating or deleting DHCP entries.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dhcp-entries`,
      },
      unmarshalSetDHCPEntriesResponse,
    )

  /**
   * Delete a DHCP reservation.
   *
   * @param request - The request {@link DeleteDHCPEntryRequest}
   */
  deleteDHCPEntry = (request: Readonly<DeleteDHCPEntryRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1beta1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/dhcp-entries/${validatePathParam('dhcpEntryId', request.dhcpEntryId)}`,
    })

  protected pageOfListPATRules = (
    request: Readonly<ListPATRulesRequest> = {},
  ) =>
    this.client.fetch<ListPATRulesResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/pat-rules`,
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
   * List PAT rules.
   *
   * @param request - The request {@link ListPATRulesRequest}
   * @returns A Promise of ListPATRulesResponse
   */
  listPATRules = (request: Readonly<ListPATRulesRequest> = {}) =>
    enrichForPagination('patRules', this.pageOfListPATRules, request)

  /**
   * Get a PAT rule.
   *
   * @param request - The request {@link GetPATRuleRequest}
   * @returns A Promise of PATRule
   */
  getPATRule = (request: Readonly<GetPATRuleRequest>) =>
    this.client.fetch<PATRule>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
      },
      unmarshalPATRule,
    )

  /**
   * Create a PAT rule.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/pat-rules`,
      },
      unmarshalPATRule,
    )

  /**
   * Update a PAT rule.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
      },
      unmarshalPATRule,
    )

  /**
   * Set all PAT rules on a Gateway. Set the list of PAT rules attached to a
   * Gateway. Rules are identified by their public port and protocol. This will
   * sync the current PAT rule list with the givent list, creating, updating or
   * deleting PAT rules.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/pat-rules`,
      },
      unmarshalSetPATRulesResponse,
    )

  /**
   * Delete a PAT rule.
   *
   * @param request - The request {@link DeletePATRuleRequest}
   */
  deletePATRule = (request: Readonly<DeletePATRuleRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1beta1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
    })

  /**
   * List VPC Public Gateway types.
   *
   * @param request - The request {@link ListGatewayTypesRequest}
   * @returns A Promise of ListGatewayTypesResponse
   */
  listGatewayTypes = (request: Readonly<ListGatewayTypesRequest> = {}) =>
    this.client.fetch<ListGatewayTypesResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/gateway-types`,
      },
      unmarshalListGatewayTypesResponse,
    )

  protected pageOfListIPs = (request: Readonly<ListIPsRequest> = {}) =>
    this.client.fetch<ListIPsResponse>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips`,
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
   * List IPs.
   *
   * @param request - The request {@link ListIPsRequest}
   * @returns A Promise of ListIPsResponse
   */
  listIPs = (request: Readonly<ListIPsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIPs, request)

  /**
   * Get an IP.
   *
   * @param request - The request {@link GetIPRequest}
   * @returns A Promise of IP
   */
  getIP = (request: Readonly<GetIPRequest>) =>
    this.client.fetch<IP>(
      {
        method: 'GET',
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  /**
   * Reserve an IP.
   *
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips`,
      },
      unmarshalIP,
    )

  /**
   * Update an IP.
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
        path: `/vpc-gw/v1beta1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  /**
   * Delete an IP.
   *
   * @param request - The request {@link DeleteIPRequest}
   */
  deleteIP = (request: Readonly<DeleteIPRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/vpc-gw/v1beta1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/ips/${validatePathParam('ipId', request.ipId)}`,
    })
}
