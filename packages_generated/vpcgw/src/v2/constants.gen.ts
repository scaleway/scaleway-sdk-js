// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  GatewayNetworkStatus,
  GatewayStatus,
  ListGatewayNetworksRequestOrderBy,
  ListGatewaysRequestOrderBy,
  ListIPsRequestOrderBy,
  ListPatRulesRequestOrderBy,
  PatRuleProtocol,
} from './types.gen.js'


/** Lists all values of the enum {@link GatewayNetworkStatus}. */
export const GATEWAY_NETWORK_STATUSES: GatewayNetworkStatus[] = [
  'unknown_status',
  'created',
  'attaching',
  'configuring',
  'ready',
  'detaching',
]

/** Lists all values of the enum {@link GatewayStatus}. */
export const GATEWAY_STATUSES: GatewayStatus[] = [
  'unknown_status',
  'stopped',
  'allocating',
  'configuring',
  'running',
  'stopping',
  'failed',
  'deleting',
  'locked',
]

/** Lists all values of the enum {@link ListGatewayNetworksRequestOrderBy}. */
export const LIST_GATEWAY_NETWORKS_REQUEST_ORDER_BIES: ListGatewayNetworksRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListGatewaysRequestOrderBy}. */
export const LIST_GATEWAYS_REQUEST_ORDER_BIES: ListGatewaysRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'type_asc',
  'type_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListIPsRequestOrderBy}. */
export const LIST_I_PS_REQUEST_ORDER_BIES: ListIPsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'address_asc',
  'address_desc',
  'reverse_asc',
  'reverse_desc',
]

/** Lists all values of the enum {@link ListPatRulesRequestOrderBy}. */
export const LIST_PAT_RULES_REQUEST_ORDER_BIES: ListPatRulesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'public_port_asc',
  'public_port_desc',
]

/** Lists all values of the enum {@link PatRuleProtocol}. */
export const PAT_RULE_PROTOCOLS: PatRuleProtocol[] = [
  'unknown_protocol',
  'both',
  'tcp',
  'udp',
]

