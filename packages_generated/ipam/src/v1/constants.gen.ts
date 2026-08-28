// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ListIPsRequestOrderBy,
  ResourceType,
} from './types.gen.js'


/** Lists all values of the enum {@link ListIPsRequestOrderBy}. */
export const LIST_I_PS_REQUEST_ORDER_BIES: ListIPsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
  'attached_at_desc',
  'attached_at_asc',
  'ip_address_desc',
  'ip_address_asc',
  'mac_address_desc',
  'mac_address_asc',
]

/** Lists all values of the enum {@link ResourceType}. */
export const RESOURCE_TYPES: ResourceType[] = [
  'unknown_type',
  'custom',
  'instance_server',
  'instance_ip',
  'instance_private_nic',
  'lb_server',
  'fip_ip',
  'vpc_gateway',
  'vpc_gateway_network',
  'k8s_node',
  'k8s_cluster',
  'rdb_instance',
  'redis_cluster',
  'baremetal_server',
  'baremetal_private_nic',
  'llm_deployment',
  'mgdb_instance',
  'apple_silicon_server',
  'apple_silicon_private_nic',
  'serverless_container',
  'serverless_function',
  'vpn_gateway',
  'ddl_datalab',
  'kafka_cluster',
  'bgp_endpoint',
  'scbl_sedb_cluster',
  'dtwh_deployment',
  'sedb_cluster',
  'msgq_cluster',
  'edge_vpc_endpoint',
  'dviz_cluster',
  'nats_cluster',
]

