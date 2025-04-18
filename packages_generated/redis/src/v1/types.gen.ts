// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone as ScwZone, TimeSeries } from '@scaleway/sdk-client'

export type AvailableClusterSettingPropertyType =
  | 'UNKNOWN'
  | 'BOOLEAN'
  | 'INT'
  | 'STRING'

export type ClusterStatus =
  | 'unknown'
  | 'ready'
  | 'provisioning'
  | 'configuring'
  | 'deleting'
  | 'error'
  | 'autohealing'
  | 'locked'
  | 'suspended'
  | 'initializing'

export type ListClustersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type NodeTypeStock =
  | 'unknown'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type PrivateNetworkProvisioningMode = 'static' | 'ipam'

export interface EndpointSpecPrivateNetworkSpecIpamConfig {}

export interface PrivateNetwork {
  /**
   * UUID of the Private Network.
   */
  id: string
  /**
   * List of IPv4 CIDR notation addresses of the endpoint.
   */
  serviceIps: string[]
  /**
   * Zone of the Private Network.
   */
  zone: ScwZone
  /**
   * How your endpoint ips are provisioned.
   */
  provisioningMode: PrivateNetworkProvisioningMode
}

export interface PublicNetwork {}

export interface EndpointSpecPrivateNetworkSpec {
  /**
   * UUID of the Private Network to connect to the Database Instance.
   */
  id: string
  /**
   * Endpoint IPv4 address with a CIDR notation. You must provide at least one IPv4 per node.
   */
  serviceIps: string[]
  /**
   * Automated configuration of your Private Network endpoint with Scaleway IPAM service.
   */
  ipamConfig?: EndpointSpecPrivateNetworkSpecIpamConfig
}

export interface EndpointSpecPublicNetworkSpec {}

export interface AvailableClusterSetting {
  /**
   * Name of the setting.
   */
  name: string
  /**
   * Default value of the setting.
   */
  defaultValue?: string
  /**
   * Type of setting.
   */
  type: AvailableClusterSettingPropertyType
  /**
   * Description of the setting.
   */
  description: string
  /**
   * Optional maximum value of the setting.
   */
  maxValue?: number
  /**
   * Optional minimum value of the setting.
   */
  minValue?: number
  /**
   * Optional validation rule of the setting.
   */
  regex?: string
  /**
   * Defines whether or not the setting is deprecated.
   */
  deprecated: boolean
}

export interface ACLRule {
  /**
   * ID of the rule.
   */
  id: string
  /**
   * IPv4 network address of the rule.
   */
  ipCidr?: string
  /**
   * Description of the rule.
   */
  description?: string
}

export interface ClusterSetting {
  /**
   * Value of the setting.
   */
  value: string
  /**
   * Name of the setting.
   */
  name: string
}

export interface Endpoint {
  /**
   * TCP port of the endpoint.
   */
  port: number
  /**
   * Private Network details.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'publicNetwork' could be set.
   */
  privateNetwork?: PrivateNetwork
  /**
   * Public network details.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'publicNetwork' could be set.
   */
  publicNetwork?: PublicNetwork
  /**
   * List of IPv4 addresses of the endpoint.
   */
  ips: string[]
  /**
   * UUID of the endpoint.
   */
  id: string
}

export interface ACLRuleSpec {
  /**
   * IPv4 network address of the rule.
   */
  ipCidr: string
  /**
   * Description of the rule.
   */
  description: string
}

export interface EndpointSpec {
  /**
   * Private Network specification details.
   *
   * One-of ('endpointType'): at most one of 'privateNetwork', 'publicNetwork' could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetworkSpec
  /**
   * Public network specification details.
   *
   * One-of ('endpointType'): at most one of 'privateNetwork', 'publicNetwork' could be set.
   */
  publicNetwork?: EndpointSpecPublicNetworkSpec
}

export interface ClusterVersion {
  /**
   * Redis™ engine version.
   */
  version: string
  /**
   * Date of End of Life.
   */
  endOfLifeAt?: Date
  /**
   * Cluster settings available to be updated.
   */
  availableSettings: AvailableClusterSetting[]
  /**
   * Redis™ logo url.
   */
  logoUrl: string
  /**
   * Zone of the Redis™ Database Instance.
   */
  zone: ScwZone
}

export interface Cluster {
  /**
   * UUID of the Database Instance.
   */
  id: string
  /**
   * Name of the Database Instance.
   */
  name: string
  /**
   * Project ID the Database Instance belongs to.
   */
  projectId: string
  /**
   * Status of the Database Instance.
   */
  status: ClusterStatus
  /**
   * Redis™ engine version of the Database Instance.
   */
  version: string
  /**
   * List of Database Instance endpoints.
   */
  endpoints: Endpoint[]
  /**
   * List of tags applied to the Database Instance.
   */
  tags: string[]
  /**
   * Node type of the Database Instance.
   */
  nodeType: string
  /**
   * Creation date (Format ISO 8601).
   */
  createdAt?: Date
  /**
   * Update date (Format ISO 8601).
   */
  updatedAt?: Date
  /**
   * Defines whether or not TLS is enabled.
   */
  tlsEnabled: boolean
  /**
   * List of Database Instance settings.
   */
  clusterSettings: ClusterSetting[]
  /**
   * List of ACL rules.
   */
  aclRules: ACLRule[]
  /**
   * Number of nodes of the Database Instance cluster.
   */
  clusterSize: number
  /**
   * Zone of the Database Instance.
   */
  zone: ScwZone
  /**
   * Name of the user associated to the cluster.
   */
  userName: string
  /**
   * List of engine versions the Database Instance can upgrade to.
   */
  upgradableVersions: string[]
}

export interface NodeType {
  /**
   * Node type name.
   */
  name: string
  /**
   * Current stock status of the node type.
   */
  stockStatus: NodeTypeStock
  /**
   * Current specifications of the offer.
   */
  description: string
  /**
   * Number of virtual CPUs.
   */
  vcpus: number
  /**
   * Quantity of RAM.
   */
  memory: number
  /**
   * Defines whether node type is currently disabled or not.
   */
  disabled: boolean
  /**
   * Defines whether node type is currently in beta.
   */
  beta: boolean
  /**
   * Zone of the node type.
   */
  zone: ScwZone
}

export type AddAclRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance you want to add ACL rules to.
   */
  clusterId: string
  /**
   * ACLs rules to add to the cluster.
   */
  aclRules: ACLRuleSpec[]
}

export interface AddAclRulesResponse {
  /**
   * ACL Rules enabled for the Database Instance.
   */
  aclRules: ACLRule[]
  /**
   * Total count of ACL rules of the Database Instance.
   */
  totalCount: number
}

export type AddClusterSettingsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance you want to add settings to.
   */
  clusterId: string
  /**
   * Settings to add to the cluster.
   */
  settings: ClusterSetting[]
}

export type AddEndpointsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance you want to add endpoints to.
   */
  clusterId: string
  /**
   * Endpoints to add to the Database Instance.
   */
  endpoints: EndpointSpec[]
}

export interface AddEndpointsResponse {
  /**
   * Endpoints defined on the Database Instance.
   */
  endpoints: Endpoint[]
  /**
   * Total count of endpoints of the Database Instance.
   */
  totalCount: number
}

export interface ClusterMetricsResponse {
  /**
   * Time series of metrics of a given cluster.
   */
  timeseries: TimeSeries[]
}

export interface ClusterSettingsResponse {
  /**
   * Settings configured for a given Database Instance.
   */
  settings: ClusterSetting[]
}

export type CreateClusterRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project ID in which to create the Database Instance.
   */
  projectId?: string
  /**
   * Name of the Database Instance.
   */
  name?: string
  /**
   * Redis™ engine version of the Database Instance.
   */
  version: string
  /**
   * Tags to apply to the Database Instance.
   */
  tags?: string[]
  /**
   * Type of node to use for the Database Instance.
   */
  nodeType: string
  /**
   * Name of the user created upon Database Instance creation.
   */
  userName: string
  /**
   * Password of the user.
   */
  password: string
  /**
   * Number of nodes in the Redis™ cluster.
   */
  clusterSize?: number
  /**
   * List of ACLRuleSpec used to secure your publicly exposed cluster.
   */
  aclRules?: ACLRuleSpec[]
  /**
   * Zero or multiple EndpointSpec used to expose your cluster publicly and inside private networks. If no EndpoindSpec is given the cluster will be publicly exposed by default.
   */
  endpoints?: EndpointSpec[]
  /**
   * Defines whether or not TLS is enabled.
   */
  tlsEnabled: boolean
  /**
   * List of advanced settings to be set upon Database Instance initialization.
   */
  clusterSettings?: ClusterSetting[]
}

export type DeleteAclRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the ACL rule you want to delete.
   */
  aclId: string
}

export type DeleteClusterRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance to delete.
   */
  clusterId: string
}

export type DeleteClusterSettingRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance where the settings must be set.
   */
  clusterId: string
  /**
   * Setting name to delete.
   */
  settingName: string
}

export type DeleteEndpointRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the endpoint you want to delete.
   */
  endpointId: string
}

export type GetAclRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the ACL rule you want to get.
   */
  aclId: string
}

export type GetClusterCertificateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the cluster.
   */
  clusterId: string
}

export type GetClusterMetricsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the cluster.
   */
  clusterId: string
  /**
   * Start date.
   */
  startAt?: Date
  /**
   * End date.
   */
  endAt?: Date
  /**
   * Name of the metric to gather.
   */
  metricName?: string
}

export type GetClusterRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the cluster.
   */
  clusterId: string
}

export type GetEndpointRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the endpoint you want to get.
   */
  endpointId: string
}

export type ListClusterVersionsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Defines whether or not to include disabled Redis™ engine versions.
   */
  includeDisabled: boolean
  /**
   * Defines whether or not to include beta Redis™ engine versions.
   */
  includeBeta: boolean
  /**
   * Defines whether or not to include deprecated Redis™ engine versions.
   */
  includeDeprecated: boolean
  /**
   * List Redis™ engine versions that match a given name pattern.
   */
  version?: string
  page?: number
  pageSize?: number
}

export interface ListClusterVersionsResponse {
  /**
   * List of available Redis™ engine versions.
   */
  versions: ClusterVersion[]
  /**
   * Total count of available Redis™ engine versions.
   */
  totalCount: number
}

export type ListClustersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Filter by Database Instance tags.
   */
  tags?: string[]
  /**
   * Filter by Database Instance names.
   */
  name?: string
  /**
   * Criteria to use when ordering the list.
   */
  orderBy?: ListClustersRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Filter by Redis™ engine version.
   */
  version?: string
  page?: number
  pageSize?: number
}

export interface ListClustersResponse {
  /**
   * List all Database Instances.
   */
  clusters: Cluster[]
  /**
   * Total count of Database Instances.
   */
  totalCount: number
}

export type ListNodeTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Defines whether or not to include disabled types.
   */
  includeDisabledTypes: boolean
  page?: number
  pageSize?: number
}

export interface ListNodeTypesResponse {
  /**
   * Types of node.
   */
  nodeTypes: NodeType[]
  /**
   * Total count of node types available.
   */
  totalCount: number
}

export type MigrateClusterRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance to update.
   */
  clusterId: string
  /**
   * Redis™ engine version of the Database Instance.
   *
   * One-of ('action'): at most one of 'version', 'nodeType', 'clusterSize' could be set.
   */
  version?: string
  /**
   * Type of node to use for the Database Instance.
   *
   * One-of ('action'): at most one of 'version', 'nodeType', 'clusterSize' could be set.
   */
  nodeType?: string
  /**
   * Number of nodes for the Database Instance.
   *
   * One-of ('action'): at most one of 'version', 'nodeType', 'clusterSize' could be set.
   */
  clusterSize?: number
}

export type RenewClusterCertificateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the cluster.
   */
  clusterId: string
}

export type SetAclRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance where the ACL rules have to be set.
   */
  clusterId: string
  /**
   * ACLs rules to define for the cluster.
   */
  aclRules: ACLRuleSpec[]
}

export interface SetAclRulesResponse {
  /**
   * ACL Rules enabled for the Database Instance.
   */
  aclRules: ACLRule[]
}

export type SetClusterSettingsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance where the settings must be set.
   */
  clusterId: string
  /**
   * Settings to define for the Database Instance.
   */
  settings: ClusterSetting[]
}

export type SetEndpointsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance where the endpoints have to be set.
   */
  clusterId: string
  /**
   * Endpoints to define for the Database Instance.
   */
  endpoints: EndpointSpec[]
}

export interface SetEndpointsResponse {
  /**
   * Endpoints defined on the Database Instance.
   */
  endpoints: Endpoint[]
}

export type UpdateClusterRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the Database Instance to update.
   */
  clusterId: string
  /**
   * Name of the Database Instance.
   */
  name?: string
  /**
   * Database Instance tags.
   */
  tags?: string[]
  /**
   * Name of the Database Instance user.
   */
  userName?: string
  /**
   * Password of the Database Instance user.
   */
  password?: string
}

export type UpdateEndpointRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the endpoint you want to get.
   */
  endpointId: string
  /**
   * Private Network details.
   *
   * One-of ('endpointType'): at most one of 'privateNetwork', 'publicNetwork' could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetworkSpec
  /**
   * Public network details.
   *
   * One-of ('endpointType'): at most one of 'privateNetwork', 'publicNetwork' could be set.
   */
  publicNetwork?: EndpointSpecPublicNetworkSpec
}
