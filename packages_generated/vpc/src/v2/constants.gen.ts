// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  AclRuleProtocol,
  Action,
  ListIngressRulesRequestOrderBy,
  ListPrivateNetworksRequestOrderBy,
  ListSubnetOverlapsRequestOrderBy,
  ListSubnetsRequestOrderBy,
  ListVPCConnectorsRequestOrderBy,
  ListVPCsRequestOrderBy,
  RouteType,
  VPCConnectorStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link AclRuleProtocol}. */
export const ACL_RULE_PROTOCOLS: AclRuleProtocol[] = [
  'ANY',
  'TCP',
  'UDP',
  'ICMP',
]

/** Lists all values of the enum {@link Action}. */
export const ACTIONS: Action[] = [
  'unknown_action',
  'accept',
  'drop',
]

/** Lists all values of the enum {@link ListIngressRulesRequestOrderBy}. */
export const LIST_INGRESS_RULES_REQUEST_ORDER_BIES: ListIngressRulesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'source_asc',
  'source_desc',
  'prefix_len_asc',
  'prefix_len_desc',
]

/** Lists all values of the enum {@link ListPrivateNetworksRequestOrderBy}. */
export const LIST_PRIVATE_NETWORKS_REQUEST_ORDER_BIES: ListPrivateNetworksRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListSubnetOverlapsRequestOrderBy}. */
export const LIST_SUBNET_OVERLAPS_REQUEST_ORDER_BIES: ListSubnetOverlapsRequestOrderBy[] = [
  'subnet_asc',
  'subnet_desc',
  'target_subnet_asc',
  'target_subnet_desc',
]

/** Lists all values of the enum {@link ListSubnetsRequestOrderBy}. */
export const LIST_SUBNETS_REQUEST_ORDER_BIES: ListSubnetsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListVPCConnectorsRequestOrderBy}. */
export const LIST_VPC_CONNECTORS_REQUEST_ORDER_BIES: ListVPCConnectorsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListVPCsRequestOrderBy}. */
export const LIST_VP_CS_REQUEST_ORDER_BIES: ListVPCsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link RouteType}. */
export const ROUTE_TYPES: RouteType[] = [
  'unknown_route_type',
  'subnet',
  'default',
  'custom',
  'interlink',
  's2s_vpn',
]

/** Lists all values of the enum {@link VPCConnectorStatus}. */
export const VPC_CONNECTOR_STATUSES: VPCConnectorStatus[] = [
  'unknown_vpc_connector_status',
  'orphan',
  'peered',
  'conflict',
]

