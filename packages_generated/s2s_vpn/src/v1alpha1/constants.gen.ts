// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  BgpSessionStatus,
  ConnectionDhGroup,
  ConnectionEncryption,
  ConnectionInitiationPolicy,
  ConnectionIntegrity,
  ConnectionStatus,
  CreateConnectionRequestInitiationPolicy,
  ListConnectionsRequestOrderBy,
  ListCustomerGatewaysRequestOrderBy,
  ListRoutingPoliciesRequestOrderBy,
  ListVpnGatewaysRequestOrderBy,
  TunnelStatus,
  VpnGatewayStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link BgpSessionStatus}. */
export const BGP_SESSION_STATUSES: BgpSessionStatus[] = [
  'unknown_status',
  'up',
  'down',
  'disabled',
]

/** Lists all values of the enum {@link ConnectionDhGroup}. */
export const CONNECTION_DH_GROUPS: ConnectionDhGroup[] = [
  'unknown_dhgroup',
  'modp2048',
  'modp3072',
  'modp4096',
  'ecp256',
  'ecp384',
  'ecp521',
  'curve25519',
]

/** Lists all values of the enum {@link ConnectionEncryption}. */
export const CONNECTION_ENCRYPTIONS: ConnectionEncryption[] = [
  'unknown_encryption',
  'aes128',
  'aes192',
  'aes256',
  'aes128gcm',
  'aes192gcm',
  'aes256gcm',
  'aes128ccm',
  'aes256ccm',
  'chacha20poly1305',
]

/** Lists all values of the enum {@link ConnectionInitiationPolicy}. */
export const CONNECTION_INITIATION_POLICIES: ConnectionInitiationPolicy[] = [
  'unknown_initiation_policy',
  'vpn_gateway',
  'customer_gateway',
]

/** Lists all values of the enum {@link ConnectionIntegrity}. */
export const CONNECTION_INTEGRITIES: ConnectionIntegrity[] = [
  'unknown_integrity',
  'sha256',
  'sha384',
  'sha512',
]

/** Lists all values of the enum {@link ConnectionStatus}. */
export const CONNECTION_STATUSES: ConnectionStatus[] = [
  'unknown_status',
  'active',
  'limited_connectivity',
  'down',
  'locked',
]

/** Lists all values of the enum {@link CreateConnectionRequestInitiationPolicy}. */
export const CREATE_CONNECTION_REQUEST_INITIATION_POLICIES: CreateConnectionRequestInitiationPolicy[] = [
  'unknown_initiation_policy',
  'vpn_gateway',
  'customer_gateway',
]

/** Lists all values of the enum {@link ListConnectionsRequestOrderBy}. */
export const LIST_CONNECTIONS_REQUEST_ORDER_BIES: ListConnectionsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListCustomerGatewaysRequestOrderBy}. */
export const LIST_CUSTOMER_GATEWAYS_REQUEST_ORDER_BIES: ListCustomerGatewaysRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListRoutingPoliciesRequestOrderBy}. */
export const LIST_ROUTING_POLICIES_REQUEST_ORDER_BIES: ListRoutingPoliciesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListVpnGatewaysRequestOrderBy}. */
export const LIST_VPN_GATEWAYS_REQUEST_ORDER_BIES: ListVpnGatewaysRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'type_asc',
  'type_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link TunnelStatus}. */
export const TUNNEL_STATUSES: TunnelStatus[] = [
  'unknown_tunnel_status',
  'up',
  'down',
]

/** Lists all values of the enum {@link VpnGatewayStatus}. */
export const VPN_GATEWAY_STATUSES: VpnGatewayStatus[] = [
  'unknown_status',
  'configuring',
  'failed',
  'provisioning',
  'active',
  'deprovisioning',
  'locked',
]

