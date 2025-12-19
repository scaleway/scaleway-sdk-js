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
import type {
	WaitForOptions,
	ApiLocality,
} from '@scaleway/sdk-client'
import {
	GATEWAY_NETWORK_TRANSIENT_STATUSES as GATEWAY_NETWORK_TRANSIENT_STATUSES_VPCGW,
	GATEWAY_TRANSIENT_STATUSES as GATEWAY_TRANSIENT_STATUSES_VPCGW,
} from './content.gen.js'
import {
	marshalAddBastionAllowedIPsRequest,
	unmarshalAddBastionAllowedIPsResponse,
	marshalCreateGatewayNetworkRequest,
	marshalCreateGatewayRequest,
	marshalCreateIPRequest,
	marshalCreatePatRuleRequest,
	unmarshalGateway,
	unmarshalGatewayNetwork,
	unmarshalIP,
	unmarshalListGatewayNetworksResponse,
	unmarshalListGatewayTypesResponse,
	unmarshalListGatewaysResponse,
	unmarshalListIPsResponse,
	unmarshalListPatRulesResponse,
	unmarshalPatRule,
	marshalSetBastionAllowedIPsRequest,
	unmarshalSetBastionAllowedIPsResponse,
	marshalSetPatRulesRequest,
	unmarshalSetPatRulesResponse,
	marshalUpdateGatewayNetworkRequest,
	marshalUpdateGatewayRequest,
	marshalUpdateIPRequest,
	marshalUpdatePatRuleRequest,
	marshalUpgradeGatewayRequest,
} from './marshalling.gen.js'
import type {
	AddBastionAllowedIPsRequest,
	AddBastionAllowedIPsResponse,
	CreateGatewayNetworkRequest,
	CreateGatewayRequest,
	CreateIPRequest,
	CreatePatRuleRequest,
	DeleteBastionAllowedIPsRequest,
	DeleteGatewayNetworkRequest,
	DeleteGatewayRequest,
	DeleteIPRequest,
	DeletePatRuleRequest,
	Gateway,
	GatewayNetwork,
	GetGatewayNetworkRequest,
	GetGatewayRequest,
	GetIPRequest,
	GetPatRuleRequest,
	IP,
	ListGatewayNetworksRequest,
	ListGatewayNetworksResponse,
	ListGatewayTypesRequest,
	ListGatewayTypesResponse,
	ListGatewaysRequest,
	ListGatewaysResponse,
	ListIPsRequest,
	ListIPsResponse,
	ListPatRulesRequest,
	ListPatRulesResponse,
	PatRule,
	RefreshSSHKeysRequest,
	SetBastionAllowedIPsRequest,
	SetBastionAllowedIPsResponse,
	SetPatRulesRequest,
	SetPatRulesResponse,
	UpdateGatewayNetworkRequest,
	UpdateGatewayRequest,
	UpdateIPRequest,
	UpdatePatRuleRequest,
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
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways`,
				urlParams: urlParams(
					['include_legacy', request.includeLegacy],
					['name', request.name],
					['order_by', request.orderBy],
					['organization_id', request.organizationId],
					['page', request.page],
					[
						'page_size',
						request.pageSize ?? this.client.settings.defaultPageSize,
					],
					['private_network_ids', request.privateNetworkIds],
					['project_id', request.projectId],
					['status', request.status],
					['tags', request.tags],
					['types', request.types],
				),
			},
			unmarshalListGatewaysResponse,
		)

	/**
	 * List Public Gateways. List Public Gateways in a given Scaleway Organization or Project. By default, results are displayed in ascending order of creation date.
	 *
	 * @param request - The request {@link ListGatewaysRequest}
	 * @returns A Promise of ListGatewaysResponse
	 */
	listGateways = (request: Readonly<ListGatewaysRequest> = {}) =>
		enrichForPagination('gateways', this.pageOfListGateways, request)

	/**
	 * Get a Public Gateway. Get details of a Public Gateway, specified by its gateway ID. The response object contains full details of the gateway, including its **name**, **type**, **status** and more.
	 *
	 * @param request - The request {@link GetGatewayRequest}
	 * @returns A Promise of Gateway
	 */
	getGateway = (request: Readonly<GetGatewayRequest>) =>
		this.client.fetch<Gateway>(
			{
				method: 'GET',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
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
				((res) =>
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
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways`,
			},
			unmarshalGateway,
		)

	/**
	 * Update a Public Gateway. Update the parameters of an existing Public Gateway, for example, its **name**, **tags**, **SSH bastion configuration**, and **DNS servers**.
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
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
			},
			unmarshalGateway,
		)

	/**
	 * Delete a Public Gateway. Delete an existing Public Gateway, specified by its gateway ID. This action is irreversible.
	 *
	 * @param request - The request {@link DeleteGatewayRequest}
	 * @returns A Promise of Gateway
	 */
	deleteGateway = (request: Readonly<DeleteGatewayRequest>) =>
		this.client.fetch<Gateway>(
			{
				method: 'DELETE',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}`,
				urlParams: urlParams(['delete_ip', request.deleteIp]),
			},
			unmarshalGateway,
		)

	/**
	 * Upgrade a Public Gateway to the latest version and/or to a different commercial offer type. Upgrade a given Public Gateway to the newest software version or to a different commercial offer type. This applies the latest bugfixes and features to your Public Gateway. Note that gateway service will be interrupted during the update.
	 *
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
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/upgrade`,
			},
			unmarshalGateway,
		)

	protected pageOfListGatewayNetworks = (
		request: Readonly<ListGatewayNetworksRequest> = {},
	) =>
		this.client.fetch<ListGatewayNetworksResponse>(
			{
				method: 'GET',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks`,
				urlParams: urlParams(
					['gateway_ids', request.gatewayIds],
					['masquerade_enabled', request.masqueradeEnabled],
					['order_by', request.orderBy],
					['page', request.page],
					[
						'page_size',
						request.pageSize ?? this.client.settings.defaultPageSize,
					],
					['private_network_ids', request.privateNetworkIds],
					['status', request.status],
				),
			},
			unmarshalListGatewayNetworksResponse,
		)

	/**
	 * List Public Gateway connections to Private Networks. List the connections between Public Gateways and Private Networks (a connection = a GatewayNetwork). You can choose to filter by `gateway-id` to list all Private Networks attached to the specified Public Gateway, or by `private_network_id` to list all Public Gateways attached to the specified Private Network. Other query parameters are also available. The result is an array of GatewayNetwork objects, each giving details of the connection between a given Public Gateway and a given Private Network.
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
	 * Get a Public Gateway connection to a Private Network. Get details of a given connection between a Public Gateway and a Private Network (this connection = a GatewayNetwork), specified by its `gateway_network_id`. The response object contains details of the connection including the IDs of the Public Gateway and Private Network, the dates the connection was created/updated and its configuration settings.
	 *
	 * @param request - The request {@link GetGatewayNetworkRequest}
	 * @returns A Promise of GatewayNetwork
	 */
	getGatewayNetwork = (request: Readonly<GetGatewayNetworkRequest>) =>
		this.client.fetch<GatewayNetwork>(
			{
				method: 'GET',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks/${validatePathParam('gatewayNetworkId', request.gatewayNetworkId)}`,
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
				((res) =>
					Promise.resolve(
						!GATEWAY_NETWORK_TRANSIENT_STATUSES_VPCGW.includes(res.status),
					)),
			this.getGatewayNetwork,
			request,
			options,
		)

	/**
	 * Attach a Public Gateway to a Private Network. Attach a specific Public Gateway to a specific Private Network (create a GatewayNetwork). You can configure parameters for the connection including whether to enable masquerade (dynamic NAT), and more.
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
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks`,
			},
			unmarshalGatewayNetwork,
		)

	/**
	 * Update a Public Gateway's connection to a Private Network. Update the configuration parameters of a connection between a given Public Gateway and Private Network (the connection = a GatewayNetwork). Updatable parameters include whether to enable traffic masquerade (dynamic NAT).
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
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks/${validatePathParam('gatewayNetworkId', request.gatewayNetworkId)}`,
			},
			unmarshalGatewayNetwork,
		)

	/**
	 * Detach a Public Gateway from a Private Network. Detach a given Public Gateway from a given Private Network, i.e. delete a GatewayNetwork specified by a gateway_network_id.
	 *
	 * @param request - The request {@link DeleteGatewayNetworkRequest}
	 * @returns A Promise of GatewayNetwork
	 */
	deleteGatewayNetwork = (request: Readonly<DeleteGatewayNetworkRequest>) =>
		this.client.fetch<GatewayNetwork>(
			{
				method: 'DELETE',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-networks/${validatePathParam('gatewayNetworkId', request.gatewayNetworkId)}`,
			},
			unmarshalGatewayNetwork,
		)

	protected pageOfListPatRules = (
		request: Readonly<ListPatRulesRequest> = {},
	) =>
		this.client.fetch<ListPatRulesResponse>(
			{
				method: 'GET',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules`,
				urlParams: urlParams(
					['gateway_ids', request.gatewayIds],
					['order_by', request.orderBy],
					['page', request.page],
					[
						'page_size',
						request.pageSize ?? this.client.settings.defaultPageSize,
					],
					['private_ips', request.privateIps],
					['protocol', request.protocol],
				),
			},
			unmarshalListPatRulesResponse,
		)

	/**
	 * List PAT rules. List PAT rules. You can filter by gateway ID to list all PAT rules for a particular gateway, or filter for PAT rules targeting a specific IP address or using a specific protocol.
	 *
	 * @param request - The request {@link ListPatRulesRequest}
	 * @returns A Promise of ListPatRulesResponse
	 */
	listPatRules = (request: Readonly<ListPatRulesRequest> = {}) =>
		enrichForPagination('patRules', this.pageOfListPatRules, request)

	/**
	 * Get a PAT rule. Get a PAT rule, specified by its PAT rule ID. The response object gives full details of the PAT rule, including the Public Gateway it belongs to and the configuration settings in terms of public / private ports, private IP and protocol.
	 *
	 * @param request - The request {@link GetPatRuleRequest}
	 * @returns A Promise of PatRule
	 */
	getPatRule = (request: Readonly<GetPatRuleRequest>) =>
		this.client.fetch<PatRule>(
			{
				method: 'GET',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
			},
			unmarshalPatRule,
		)

	/**
	 * Create a PAT rule. Create a new PAT rule on a specified Public Gateway, defining the protocol to use, public port to listen on, and private port / IP address to map to.
	 *
	 * @param request - The request {@link CreatePatRuleRequest}
	 * @returns A Promise of PatRule
	 */
	createPatRule = (request: Readonly<CreatePatRuleRequest>) =>
		this.client.fetch<PatRule>(
			{
				body: JSON.stringify(
					marshalCreatePatRuleRequest(request, this.client.settings),
				),
				headers: jsonContentHeaders,
				method: 'POST',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules`,
			},
			unmarshalPatRule,
		)

	/**
	 * Update a PAT rule. Update a PAT rule, specified by its PAT rule ID. Configuration settings including private/public port, private IP address and protocol can all be updated.
	 *
	 * @param request - The request {@link UpdatePatRuleRequest}
	 * @returns A Promise of PatRule
	 */
	updatePatRule = (request: Readonly<UpdatePatRuleRequest>) =>
		this.client.fetch<PatRule>(
			{
				body: JSON.stringify(
					marshalUpdatePatRuleRequest(request, this.client.settings),
				),
				headers: jsonContentHeaders,
				method: 'PATCH',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
			},
			unmarshalPatRule,
		)

	/**
	 * Set all PAT rules. Set a definitive list of PAT rules attached to a Public Gateway. Each rule is identified by its public port and protocol. This will sync the current PAT rule list on the gateway with the new list, creating, updating or deleting PAT rules accordingly.
	 *
	 * @param request - The request {@link SetPatRulesRequest}
	 * @returns A Promise of SetPatRulesResponse
	 */
	setPatRules = (request: Readonly<SetPatRulesRequest>) =>
		this.client.fetch<SetPatRulesResponse>(
			{
				body: JSON.stringify(
					marshalSetPatRulesRequest(request, this.client.settings),
				),
				headers: jsonContentHeaders,
				method: 'PUT',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules`,
			},
			unmarshalSetPatRulesResponse,
		)

	/**
	 * Delete a PAT rule. Delete a PAT rule, identified by its PAT rule ID. This action is irreversible.
	 *
	 * @param request - The request {@link DeletePatRuleRequest}
	 */
	deletePatRule = (request: Readonly<DeletePatRuleRequest>) =>
		this.client.fetch<void>({
			method: 'DELETE',
			path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/pat-rules/${validatePathParam('patRuleId', request.patRuleId)}`,
		})

	/**
	 * List Public Gateway types. List the different Public Gateway commercial offer types available at Scaleway. The response is an array of objects describing the name and technical details of each available gateway type.
	 *
	 * @param request - The request {@link ListGatewayTypesRequest}
	 * @returns A Promise of ListGatewayTypesResponse
	 */
	listGatewayTypes = (request: Readonly<ListGatewayTypesRequest> = {}) =>
		this.client.fetch<ListGatewayTypesResponse>(
			{
				method: 'GET',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateway-types`,
			},
			unmarshalListGatewayTypesResponse,
		)

	protected pageOfListIPs = (request: Readonly<ListIPsRequest> = {}) =>
		this.client.fetch<ListIPsResponse>(
			{
				method: 'GET',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
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
	 * @param request - The request {@link ListIPsRequest}
	 * @returns A Promise of ListIPsResponse
	 */
	listIPs = (request: Readonly<ListIPsRequest> = {}) =>
		enrichForPagination('ips', this.pageOfListIPs, request)

	/**
	 * Get an IP. Get details of a Public Gateway flexible IP address, identified by its IP ID. The response object contains information including which (if any) Public Gateway using this IP address, the reverse and various other metadata.
	 *
	 * @param request - The request {@link GetIPRequest}
	 * @returns A Promise of IP
	 */
	getIP = (request: Readonly<GetIPRequest>) =>
		this.client.fetch<IP>(
			{
				method: 'GET',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
			},
			unmarshalIP,
		)

	/**
	 * Reserve an IP. Create (reserve) a new flexible IP address that can be used for a Public Gateway in a specified Scaleway Project.
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
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
			},
			unmarshalIP,
		)

	/**
	 * Update an IP. Update details of an existing flexible IP address, including its tags, reverse and the Public Gateway it is assigned to.
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
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
			},
			unmarshalIP,
		)

	/**
	 * Delete an IP. Delete a flexible IP address from your account. This action is irreversible.
	 *
	 * @param request - The request {@link DeleteIPRequest}
	 */
	deleteIP = (request: Readonly<DeleteIPRequest>) =>
		this.client.fetch<void>({
			method: 'DELETE',
			path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}`,
		})

	/**
	 * Refresh a Public Gateway's SSH keys. Refresh the SSH keys of a given Public Gateway, specified by its gateway ID. This adds any new SSH keys in the gateway's Scaleway Project to the gateway itself.
	 *
	 * @param request - The request {@link RefreshSSHKeysRequest}
	 * @returns A Promise of Gateway
	 */
	refreshSSHKeys = (request: Readonly<RefreshSSHKeysRequest>) =>
		this.client.fetch<Gateway>(
			{
				body: '{}',
				headers: jsonContentHeaders,
				method: 'POST',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/refresh-ssh-keys`,
			},
			unmarshalGateway,
		)

	/**
	 * Add allowed IP range to SSH bastion. Add an IP range (in CIDR notation) to be allowed to connect to the SSH bastion.
	 *
	 * @param request - The request {@link AddBastionAllowedIPsRequest}
	 * @returns A Promise of AddBastionAllowedIPsResponse
	 */
	addBastionAllowedIPs = (request: Readonly<AddBastionAllowedIPsRequest>) =>
		this.client.fetch<AddBastionAllowedIPsResponse>(
			{
				body: JSON.stringify(
					marshalAddBastionAllowedIPsRequest(request, this.client.settings),
				),
				headers: jsonContentHeaders,
				method: 'POST',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/bastion-allowed-ips`,
			},
			unmarshalAddBastionAllowedIPsResponse,
		)

	/**
	 * Set all IP ranges allowed for SSH bastion. Set a definitive list of IP ranges (in CIDR notation) allowed to connect to the SSH bastion.
	 *
	 * @param request - The request {@link SetBastionAllowedIPsRequest}
	 * @returns A Promise of SetBastionAllowedIPsResponse
	 */
	setBastionAllowedIPs = (request: Readonly<SetBastionAllowedIPsRequest>) =>
		this.client.fetch<SetBastionAllowedIPsResponse>(
			{
				body: JSON.stringify(
					marshalSetBastionAllowedIPsRequest(request, this.client.settings),
				),
				headers: jsonContentHeaders,
				method: 'PUT',
				path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/bastion-allowed-ips`,
			},
			unmarshalSetBastionAllowedIPsResponse,
		)

	/**
	 * Delete allowed IP range from SSH bastion. Delete an IP range (defined in CIDR notation) from SSH bastion, so that it is no longer allowed to connect.
	 *
	 * @param request - The request {@link DeleteBastionAllowedIPsRequest}
	 */
	deleteBastionAllowedIPs = (
		request: Readonly<DeleteBastionAllowedIPsRequest>,
	) =>
		this.client.fetch<void>({
			method: 'DELETE',
			path: `/vpc-gw/v2/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/gateways/${validatePathParam('gatewayId', request.gatewayId)}/bastion-allowed-ips/${validatePathParam('ipRange', request.ipRange)}`,
		})
}
