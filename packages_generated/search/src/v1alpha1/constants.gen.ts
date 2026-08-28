// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ObsDatasourceInfoDataType,
  ObsExporterInfoDestinationType,
  ResourceType,
  SearchResourcesRequestOrderBy,
} from './types.gen.js'


/** Lists all values of the enum {@link ObsDatasourceInfoDataType}. */
export const OBS_DATASOURCE_INFO_DATA_TYPES: ObsDatasourceInfoDataType[] = [
  'unknown_data_type',
  'metrics',
  'logs',
  'traces',
]

/** Lists all values of the enum {@link ObsExporterInfoDestinationType}. */
export const OBS_EXPORTER_INFO_DESTINATION_TYPES: ObsExporterInfoDestinationType[] = [
  'unknown_destination_type',
  'datadog',
  'otlp',
]

/** Lists all values of the enum {@link ResourceType}. */
export const RESOURCE_TYPES: ResourceType[] = [
  'unknown_type',
  'instance_server',
  'instance_volume',
  'instance_image',
  'instance_security_group',
  'instance_private_nic',
  'instance_snapshot',
  'instance_placement_group',
  'instance_template',
  'k8s_cluster',
  'k8s_pool',
  'k8s_node',
  'domain_domain',
  'dns_zone',
  'vpc_private_network',
  'vpc_vpc',
  'vpg_gateway',
  'apple_silicon_server',
  'rdb_instance',
  'rdb_snapshot',
  'rdb_backup',
  'baremetal_server',
  'tem_domain',
  'lb_server',
  'serverless_functions_function',
  'serverless_containers_container',
  'wbh_hosting',
  'redis_cluster',
  'sm_secret',
  'kms_key',
  'edg_pipeline',
  'mnq_nats_account',
  'sbs_volume',
  'sbs_snapshot',
  'serverless_job_definition',
  'serverless_sqldb_database',
  'serverless_sqldb_backup',
  'ddl_datalab',
  'mgdb_instance',
  'mgdb_snapshot',
  'ifr_deployment',
  'ifr_model',
  'gapi_batch',
  'dtwh_deployment',
  'obs_datasource',
  'obs_exporter',
  'svpn_vpn_gateway',
  'svpn_customer_gateway',
  'svpn_connection',
  'svpn_routing_policy',
  'kafk_cluster',
  'sedb_cluster',
  'autoscaling_group',
]

/** Lists all values of the enum {@link SearchResourcesRequestOrderBy}. */
export const SEARCH_RESOURCES_REQUEST_ORDER_BIES: SearchResourcesRequestOrderBy[] = [
  'relevance',
  'created_at_asc',
  'created_at_desc',
  'modified_at_asc',
  'modified_at_desc',
  'name_asc',
  'name_desc',
  'type_asc',
  'type_desc',
]

