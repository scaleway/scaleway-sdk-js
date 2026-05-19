// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, Zone as ScwZone, } from '@scaleway/sdk-client'


export type ResourceType =
  | 'unknown_type'
  | 'instance_server'
  | 'instance_volume'
  | 'instance_image'
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
  | 'obs_token'
  | 'obs_alert'

export interface BrmServerInfo {
  ip: string
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
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo' could be set.
   */
  vpcPrivateNetworkInfo?: VpcPrivateNetworkInfo
  /**
   * Additional information for a Serverless Function.
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo' could be set.
   */
  serverlessFunctionsFunctionInfo?: ServerlessFunctionsFunctionInfo
  /**
   * Additional information for a Serverless Container.
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo' could be set.
   */
  serverlessContainersContainerInfo?: ServerlessContainersContainerInfo
  /**
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo' could be set.
   */
  baremetalServerInfo?: BrmServerInfo
  /**
   *
   * One-of ('info'): at most one of 'vpcPrivateNetworkInfo', 'serverlessFunctionsFunctionInfo', 'serverlessContainersContainerInfo', 'baremetalServerInfo', 'serverlessSqldbBackupInfo' could be set.
   */
  serverlessSqldbBackupInfo?: ServerlessSqldbBackupInfo
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
}


export interface SearchResourcesResponse {
  /**
   * Top resources found.
   */
  resources: Resource[]
}


