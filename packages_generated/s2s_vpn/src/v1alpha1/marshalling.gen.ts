// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  BgpSession,
  Connection,
  ConnectionCipher,
  CreateConnectionRequest,
  CreateConnectionRequestBgpConfig,
  CreateConnectionResponse,
  CreateCustomerGatewayRequest,
  CreateRoutingPolicyRequest,
  CreateVpnGatewayRequest,
  CreateVpnGatewayRequestPublicConfig,
  CustomerGateway,
  DetachRoutingPolicyRequest,
  GatewayType,
  ListConnectionsResponse,
  ListCustomerGatewaysResponse,
  ListRoutingPoliciesResponse,
  ListVpnGatewaysResponse,
  ListVpnGatewayTypesResponse,
  RenewConnectionPskResponse,
  RoutingPolicy,
  SetRoutingPolicyRequest,
  UpdateConnectionRequest,
  UpdateCustomerGatewayRequest,
  UpdateRoutingPolicyRequest,
  UpdateVpnGatewayRequest,
  VpnGateway,
  VpnGatewayPrivateConfig,
  VpnGatewayPublicConfig,
} from './types.gen'

const unmarshalBgpSession = (data: unknown): BgpSession => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BgpSession' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateIp: data.private_ip,
    routingPolicyId: data.routing_policy_id,
  } as BgpSession
}

const unmarshalConnectionCipher = (data: unknown): ConnectionCipher => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ConnectionCipher' failed as data isn't a dictionary.`,
    )
  }

  return {
    dhGroup: data.dh_group ? data.dh_group : undefined,
    encryption: data.encryption,
    integrity: data.integrity ? data.integrity : undefined,
  } as ConnectionCipher
}

export const unmarshalConnection = (data: unknown): Connection => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Connection' failed as data isn't a dictionary.`,
    )
  }

  return {
    bgpSessionIpv4: data.bgp_session_ipv4
      ? unmarshalBgpSession(data.bgp_session_ipv4)
      : undefined,
    bgpSessionIpv6: data.bgp_session_ipv6
      ? unmarshalBgpSession(data.bgp_session_ipv6)
      : undefined,
    bgpStatusIpv4: data.bgp_status_ipv4,
    bgpStatusIpv6: data.bgp_status_ipv6,
    createdAt: unmarshalDate(data.created_at),
    customerGatewayId: data.customer_gateway_id,
    espCiphers: unmarshalArrayOfObject(
      data.esp_ciphers,
      unmarshalConnectionCipher,
    ),
    id: data.id,
    ikev2Ciphers: unmarshalArrayOfObject(
      data.ikev2_ciphers,
      unmarshalConnectionCipher,
    ),
    initiationPolicy: data.initiation_policy,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    routePropagationEnabled: data.route_propagation_enabled,
    status: data.status,
    tags: data.tags,
    tunnelStatusIpv4: data.tunnel_status_ipv4,
    tunnelStatusIpv6: data.tunnel_status_ipv6,
    updatedAt: unmarshalDate(data.updated_at),
    vpnGatewayId: data.vpn_gateway_id,
  } as Connection
}

export const unmarshalCustomerGateway = (data: unknown): CustomerGateway => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CustomerGateway' failed as data isn't a dictionary.`,
    )
  }

  return {
    asn: data.asn,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    publicIpv4: data.public_ipv4,
    publicIpv6: data.public_ipv6,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as CustomerGateway
}

export const unmarshalRoutingPolicy = (data: unknown): RoutingPolicy => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RoutingPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    isIpv6: data.is_ipv6,
    name: data.name,
    organizationId: data.organization_id,
    prefixFilterIn: data.prefix_filter_in,
    prefixFilterOut: data.prefix_filter_out,
    projectId: data.project_id,
    region: data.region,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as RoutingPolicy
}

const unmarshalVpnGatewayPrivateConfig = (
  data: unknown,
): VpnGatewayPrivateConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VpnGatewayPrivateConfig' failed as data isn't a dictionary.`,
    )
  }

  return {} as VpnGatewayPrivateConfig
}

const unmarshalVpnGatewayPublicConfig = (
  data: unknown,
): VpnGatewayPublicConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VpnGatewayPublicConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    ipamIpv4Id: data.ipam_ipv4_id,
    ipamIpv6Id: data.ipam_ipv6_id,
  } as VpnGatewayPublicConfig
}

export const unmarshalVpnGateway = (data: unknown): VpnGateway => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VpnGateway' failed as data isn't a dictionary.`,
    )
  }

  return {
    asn: data.asn,
    createdAt: unmarshalDate(data.created_at),
    gatewayType: data.gateway_type,
    id: data.id,
    ipamPrivateIpv4Id: data.ipam_private_ipv4_id,
    ipamPrivateIpv6Id: data.ipam_private_ipv6_id,
    name: data.name,
    organizationId: data.organization_id,
    privateConfig: data.private_config
      ? unmarshalVpnGatewayPrivateConfig(data.private_config)
      : undefined,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    publicConfig: data.public_config
      ? unmarshalVpnGatewayPublicConfig(data.public_config)
      : undefined,
    region: data.region,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as VpnGateway
}

export const unmarshalCreateConnectionResponse = (
  data: unknown,
): CreateConnectionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateConnectionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    connection: data.connection
      ? unmarshalConnection(data.connection)
      : undefined,
    preSharedKey: data.pre_shared_key,
  } as CreateConnectionResponse
}

export const unmarshalListConnectionsResponse = (
  data: unknown,
): ListConnectionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListConnectionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    connections: unmarshalArrayOfObject(data.connections, unmarshalConnection),
    totalCount: data.total_count,
  } as ListConnectionsResponse
}

export const unmarshalListCustomerGatewaysResponse = (
  data: unknown,
): ListCustomerGatewaysResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListCustomerGatewaysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    gateways: unmarshalArrayOfObject(data.gateways, unmarshalCustomerGateway),
    totalCount: data.total_count,
  } as ListCustomerGatewaysResponse
}

export const unmarshalListRoutingPoliciesResponse = (
  data: unknown,
): ListRoutingPoliciesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRoutingPoliciesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    routingPolicies: unmarshalArrayOfObject(
      data.routing_policies,
      unmarshalRoutingPolicy,
    ),
    totalCount: data.total_count,
  } as ListRoutingPoliciesResponse
}

const unmarshalGatewayType = (data: unknown): GatewayType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GatewayType' failed as data isn't a dictionary.`,
    )
  }

  return {
    allowedConnections: data.allowed_connections,
    bandwidth: data.bandwidth,
    name: data.name,
    region: data.region,
  } as GatewayType
}

export const unmarshalListVpnGatewayTypesResponse = (
  data: unknown,
): ListVpnGatewayTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVpnGatewayTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    gatewayTypes: unmarshalArrayOfObject(
      data.gateway_types,
      unmarshalGatewayType,
    ),
    totalCount: data.total_count,
  } as ListVpnGatewayTypesResponse
}

export const unmarshalListVpnGatewaysResponse = (
  data: unknown,
): ListVpnGatewaysResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVpnGatewaysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    gateways: unmarshalArrayOfObject(data.gateways, unmarshalVpnGateway),
    totalCount: data.total_count,
  } as ListVpnGatewaysResponse
}

export const unmarshalRenewConnectionPskResponse = (
  data: unknown,
): RenewConnectionPskResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RenewConnectionPskResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    connection: data.connection
      ? unmarshalConnection(data.connection)
      : undefined,
    preSharedKey: data.pre_shared_key,
  } as RenewConnectionPskResponse
}

const marshalConnectionCipher = (
  request: ConnectionCipher,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  dh_group: request.dhGroup,
  encryption: request.encryption,
  integrity: request.integrity,
})

const marshalCreateConnectionRequestBgpConfig = (
  request: CreateConnectionRequestBgpConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  routing_policy_id: request.routingPolicyId,
})

export const marshalCreateConnectionRequest = (
  request: CreateConnectionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bgp_config_ipv4:
    request.bgpConfigIpv4 !== undefined
      ? marshalCreateConnectionRequestBgpConfig(request.bgpConfigIpv4, defaults)
      : undefined,
  bgp_config_ipv6:
    request.bgpConfigIpv6 !== undefined
      ? marshalCreateConnectionRequestBgpConfig(request.bgpConfigIpv6, defaults)
      : undefined,
  customer_gateway_id: request.customerGatewayId,
  enable_route_propagation: request.enableRoutePropagation,
  esp_ciphers: request.espCiphers.map(elt =>
    marshalConnectionCipher(elt, defaults),
  ),
  ikev2_ciphers: request.ikev2Ciphers.map(elt =>
    marshalConnectionCipher(elt, defaults),
  ),
  initiation_policy: request.initiationPolicy,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  vpn_gateway_id: request.vpnGatewayId,
})

export const marshalCreateCustomerGatewayRequest = (
  request: CreateCustomerGatewayRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  asn: request.asn,
  ipv4_public: request.ipv4Public,
  ipv6_public: request.ipv6Public,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalCreateRoutingPolicyRequest = (
  request: CreateRoutingPolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  is_ipv6: request.isIpv6,
  name: request.name,
  prefix_filter_in: request.prefixFilterIn,
  prefix_filter_out: request.prefixFilterOut,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

const marshalCreateVpnGatewayRequestPublicConfig = (
  request: CreateVpnGatewayRequestPublicConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ipam_ipv4_id: request.ipamIpv4Id,
  ipam_ipv6_id: request.ipamIpv6Id,
})

export const marshalCreateVpnGatewayRequest = (
  request: CreateVpnGatewayRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  gateway_type: request.gatewayType,
  ipam_private_ipv4_id: request.ipamPrivateIpv4Id,
  ipam_private_ipv6_id: request.ipamPrivateIpv6Id,
  name: request.name,
  private_network_id: request.privateNetworkId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  zone: request.zone ?? defaults.defaultZone,
  ...resolveOneOf([
    {
      param: 'public_config',
      value:
        request.publicConfig !== undefined
          ? marshalCreateVpnGatewayRequestPublicConfig(
              request.publicConfig,
              defaults,
            )
          : undefined,
    },
  ]),
})

export const marshalDetachRoutingPolicyRequest = (
  request: DetachRoutingPolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'routing_policy_v4', value: request.routingPolicyV4 },
    { param: 'routing_policy_v6', value: request.routingPolicyV6 },
  ]),
})

export const marshalSetRoutingPolicyRequest = (
  request: SetRoutingPolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'routing_policy_v4', value: request.routingPolicyV4 },
    { param: 'routing_policy_v6', value: request.routingPolicyV6 },
  ]),
})

export const marshalUpdateConnectionRequest = (
  request: UpdateConnectionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  esp_ciphers:
    request.espCiphers !== undefined
      ? request.espCiphers.map(elt => marshalConnectionCipher(elt, defaults))
      : undefined,
  ikev2_ciphers:
    request.ikev2Ciphers !== undefined
      ? request.ikev2Ciphers.map(elt => marshalConnectionCipher(elt, defaults))
      : undefined,
  initiation_policy: request.initiationPolicy,
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateCustomerGatewayRequest = (
  request: UpdateCustomerGatewayRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  asn: request.asn,
  ipv4_public: request.ipv4Public,
  ipv6_public: request.ipv6Public,
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateRoutingPolicyRequest = (
  request: UpdateRoutingPolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  prefix_filter_in: request.prefixFilterIn,
  prefix_filter_out: request.prefixFilterOut,
  tags: request.tags,
})

export const marshalUpdateVpnGatewayRequest = (
  request: UpdateVpnGatewayRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})
