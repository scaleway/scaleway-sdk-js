// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, Zone as ScwZone} from '@scaleway/sdk-client'


export type Locality =
  | 'unknown_locality'
  | 'global'
  | 'fr_rz'
  | 'fr_srr'
  | 'fr_srr_1'
  | 'fr_par'
  | 'fr_par_1'
  | 'fr_par_2'
  | 'fr_par_3'
  | 'fr_par_4'
  | 'nl_ams'
  | 'nl_ams_1'
  | 'nl_ams_2'
  | 'nl_ams_3'
  | 'pl_waw'
  | 'pl_waw_1'
  | 'pl_waw_2'
  | 'pl_waw_3'
  | 'fr_int'
  | 'fr_int_1'
  | 'fr_lab'
  | 'fr_lab_1'
  | 'it_mil'
  | 'it_mil_1'

export type ObsDatasourceInfoDataType =
  | 'unknown_data_type'
  | 'metrics'
  | 'logs'
  | 'traces'

export type ObsExporterInfoDestinationType =
  | 'unknown_destination_type'
  | 'datadog'
  | 'otlp'

export type ResourceType =
  | 'unknown_type'
  | 'instance_server'
  | 'instance_volume'
  | 'instance_image'
  | 'instance_security_group'
  | 'instance_private_nic'
  | 'instance_snapshot'
  | 'instance_placement_group'
  | 'k8s_cluster'
  | 'k8s_pool'
  | 'k8s_node'
  | 'domain_domain'
  | 'dns_zone'
  | 'vpc_private_network'
  | 'vpc_vpc'
  | 'vpg_gateway'
  | 'apple_silicon_server'
  | 'rdb_instance'
  | 'rdb_snapshot'
  | 'rdb_backup'
  | 'baremetal_server'
  | 'tem_domain'
  | 'lb_server'
  | 'serverless_functions_function'
  | 'serverless_containers_container'
  | 'wbh_hosting'
  | 'redis_cluster'
  | 'sm_secret'
  | 'kms_key'
  | 'edg_pipeline'
  | 'mnq_nats_account'
  | 'sbs_volume'
  | 'sbs_snapshot'
  | 'serverless_job_definition'
  | 'serverless_sqldb_database'
  | 'serverless_sqldb_backup'
  | 'ddl_datalab'
  | 'mgdb_instance'
  | 'mgdb_snapshot'
  | 'ifr_deployment'
  | 'ifr_model'
  | 'gapi_batch'
  | 'dtwh_deployment'
  | 'obs_datasource'
  | 'obs_exporter'
  | 'svpn_vpn_gateway'
  | 'svpn_customer_gateway'
  | 'svpn_connection'
  | 'svpn_routing_policy'
  | 'kafk_cluster'
  | 'iam_api_key'
  | 'iam_application'
  | 'iam_user'
  | 'iam_group'
  | 'iam_policy'


export interface BrmServerInfo {
  ip: string
}


export interface ObsDatasourceInfo {
  type: ObsDatasourceInfoDataType
}


export interface ObsExporterInfo {
  destinationType: ObsExporterInfoDestinationType
}


export interface ServerlessContainersContainerInfo {
  /**
   * ID of the Namespace the Serverless Container belongs to.
   */
  namespaceId: string
}


export interface ServerlessFunctionsFunctionInfo {
  /**
   * ID of the Namespace the Serverless Function belongs to.
   */
  namespaceId: string
}


export interface ServerlessSqldbBackupInfo {
  databaseId: string
}


export interface VpcPrivateNetworkInfo {
  /**
   * ID of the VPC the Private Network belongs to.
   */
  vpcId: string
}


export interface Resource {
  /**
   * ID of the resource.
   */
  id: string
  /**
   * Name of the resource.
   */
  name?: string
  /**
   * ID of the Project the resource belongs to.
   */
  projectId?: string
  /**
   * ID of the Organization the resource belongs to.
   */
  organizationId: string
  /**
   * Type of the resource.
   */
  type: ResourceType
  /**
   * Locality the resource is in if this is a global resource.
   *
   * One-of ('locality'): at most one of 'global', 'zone', 'region' could be set.
   */
  global?: boolean
  /**
   * Locality the resource is in if this is a zonal resource.
   *
   * One-of ('locality'): at most one of 'global', 'zone', 'region' could be set.
   */
  zone?: ScwZone
  /**
   * Locality the resource is in if this is a regional resource.
   *
   * One-of ('locality'): at most one of 'global', 'zone', 'region' could be set.
   */
  region?: ScwRegion
  /**
   * Additional information for a VPC Private Network.
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo', 'obsDatasourceInfo', 'obsExporterInfo' could be set.
   */
  vpcPrivateNetworkInfo?: VpcPrivateNetworkInfo
  /**
   * Additional information for a Serverless Function.
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo', 'obsDatasourceInfo', 'obsExporterInfo' could be set.
   */
  serverlessFunctionsFunctionInfo?: ServerlessFunctionsFunctionInfo
  /**
   * Additional information for a Serverless Container.
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo', 'obsDatasourceInfo', 'obsExporterInfo' could be set.
   */
  serverlessContainersContainerInfo?: ServerlessContainersContainerInfo
  /**
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo', 'obsDatasourceInfo', 'obsExporterInfo' could be set.
   */
  baremetalServerInfo?: BrmServerInfo
  /**
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo', 'obsDatasourceInfo', 'obsExporterInfo' could be set.
   */
  serverlessSqldbBackupInfo?: ServerlessSqldbBackupInfo
  /**
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo', 'obsDatasourceInfo', 'obsExporterInfo' could be set.
   */
  obsDatasourceInfo?: ObsDatasourceInfo
  /**
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo', 'obsDatasourceInfo', 'obsExporterInfo' could be set.
   */
  obsExporterInfo?: ObsExporterInfo
}


export type SearchResourcesRequest = {
  /**
   * Search query.
   */
  query: string
  /**
   * ID of the Organization to search in.
   */
  organizationId?: string
  /**
   * List of Project IDs to filter the resources by.
   */
  projectIds?: string[]
  /**
   * List of resource types to filter the resources by.
   */
  types?: ResourceType[]
  /**
   * List of scopes (zones, regions, or global) to filter the resources by.
   */
  localities?: Locality[]
  /**
   * Filter resources created after this timestamp.
   */
  createdAfter?: Date
  /**
   * Filter resources created before this timestamp.
   */
  createdBefore?: Date
  /**
   * Filter resources modified after this timestamp.
   */
  modifiedAfter?: Date
  /**
   * Filter resources modified before this timestamp.
   */
  modifiedBefore?: Date
}


export interface SearchResourcesResponse {
  /**
   * Top resources found.
   */
  resources: Resource[]
}


