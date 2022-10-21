// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { TimeSeries, Zone } from '../../../bridge'

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

/** Acl rule */
export interface ACLRule {
  /** ID of the rule */
  id: string
  /** IPv4 network address of the rule */
  ipCidr?: string
  /** Description of the rule */
  description?: string
}

/** Acl rule spec */
export interface ACLRuleSpec {
  /** IPv4 network address of the rule */
  ipCidr: string
  /** Description of the rule */
  description: string
}

/** Add acl rules response */
export interface AddAclRulesResponse {
  /** ACL Rules enabled on the cluster */
  aclRules: Array<ACLRule>
  /** Total count of acl rules of the cluster */
  totalCount: number
}

/** Add endpoints response */
export interface AddEndpointsResponse {
  /** Endpoints defined on the cluster */
  endpoints: Array<Endpoint>
  /** Total count of endpoints of the cluster */
  totalCount: number
}

/** Available cluster setting */
export interface AvailableClusterSetting {
  /** Name of the setting */
  name: string
  /** Default value of the setting */
  defaultValue?: string
  /** Type of the setting */
  type: AvailableClusterSettingPropertyType
  /** Description of the setting */
  description: string
  /** Optional maximum value of the setting */
  maxValue?: number
  /** Optional minimum value of the setting */
  minValue?: number
  /** Optional validation rule of the setting */
  regex?: string
  /** Whether the setting is deprecated */
  deprecated: boolean
}

/** Cluster */
export interface Cluster {
  /** UUID of the cluster */
  id: string
  /** Name of the cluster */
  name: string
  /** Project ID the cluster belongs to */
  projectId: string
  /** Status of the cluster */
  status: ClusterStatus
  /** Redis™ engine version of the cluster */
  version: string
  /** List of cluster endpoints */
  endpoints: Array<Endpoint>
  /** List of tags applied to the cluster */
  tags: Array<string>
  /** Node type of the cluster */
  nodeType: string
  /** Creation date (Format ISO 8601) */
  createdAt?: Date
  /** Update date (Format ISO 8601) */
  updatedAt?: Date
  /** Whether or not TLS is enabled */
  tlsEnabled: boolean
  /** List of cluster settings */
  clusterSettings: Array<ClusterSetting>
  /** List of acl rules */
  aclRules: Array<ACLRule>
  /** Number of nodes of the cluster */
  clusterSize: number
  /** Zone of the cluster */
  zone: Zone
  /** Name of the user associated to the cluster */
  userName: string
}

/** Cluster metrics response */
export interface ClusterMetricsResponse {
  /** Time series of metrics of a given cluster */
  timeseries: Array<TimeSeries>
}

/** Cluster setting */
export interface ClusterSetting {
  /** Value of the setting */
  value: string
  /** Name of the setting */
  name: string
}

/** Cluster settings response */
export interface ClusterSettingsResponse {
  /** Settings configured for a given cluster */
  settings: Array<ClusterSetting>
}

/** Cluster version */
export interface ClusterVersion {
  /** Redis™ engine version */
  version: string
  /** End of life date */
  endOfLifeAt?: Date
  /** Cluster settings available to be set */
  availableSettings: Array<AvailableClusterSetting>
  /** Redis™ logo url */
  logoUrl: string
  /** Zone of the Managed Database for Redis™ */
  zone: Zone
}

/** Endpoint */
export interface Endpoint {
  /** TCP port of the endpoint */
  port: number
  /**
   * Private network details.
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
  /** Lis of IPv4 address of the endpoint */
  ips: Array<string>
  /** UUID of the endpoint */
  id: string
}

/** Endpoint spec */
export interface EndpointSpec {
  /**
   * Private network spec details.
   *
   * One-of ('endpointType'): at most one of 'privateNetwork', 'publicNetwork'
   * could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetworkSpec
  /**
   * Public network spec details.
   *
   * One-of ('endpointType'): at most one of 'privateNetwork', 'publicNetwork'
   * could be set.
   */
  publicNetwork?: EndpointSpecPublicNetworkSpec
}

/** Endpoint spec. private network spec */
export interface EndpointSpecPrivateNetworkSpec {
  /** UUID of the private network to be connected to the cluster */
  id: string
  /**
   * Endpoint IPv4 adress with a CIDR notation. You must provide at least one
   * IPv4 per node. Check documentation about IP and subnet limitation.
   */
  serviceIps: Array<string>
}

/** Endpoint spec. public network spec */
export interface EndpointSpecPublicNetworkSpec {}

/** List cluster versions response */
export interface ListClusterVersionsResponse {
  /** List of the available Redis™ engine versions */
  versions: Array<ClusterVersion>
  /** Total count of available Redis™ engine versions */
  totalCount: number
}

/** List clusters response */
export interface ListClustersResponse {
  /** List all clusters */
  clusters: Array<Cluster>
  /** Total count of clusters */
  totalCount: number
}

/** List node types response */
export interface ListNodeTypesResponse {
  /** Types of the node */
  nodeTypes: Array<NodeType>
  /** Total count of node-types available */
  totalCount: number
}

/** Node type */
export interface NodeType {
  /** Node Type name identifier */
  name: string
  /** Current stock status for the Node Type */
  stockStatus: NodeTypeStock
  /** Current specs of the offer */
  description: string
  /** Number of virtual CPUs */
  vcpus: number
  /** Quantity of RAM */
  memory: number
  /** The Node Type is currently disabled */
  disabled: boolean
  /** The Node Type is currently in beta */
  beta: boolean
  /** Zone the Node Type is in */
  zone: Zone
}

/** Private network */
export interface PrivateNetwork {
  /** UUID of the private network */
  id: string
  /** List of IPv4 CIDR notation addresses of the endpoint */
  serviceIps: Array<string>
  /** Private network zone */
  zone: Zone
}

export interface PublicNetwork {}

/** Set acl rules response */
export interface SetAclRulesResponse {
  /** ACL Rules enabled on the cluster */
  aclRules: Array<ACLRule>
}

/** Set endpoints response */
export interface SetEndpointsResponse {
  /** Endpoints defined on the cluster */
  endpoints: Array<Endpoint>
}

export type CreateClusterRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The project ID on which to create the cluster */
  projectId?: string
  /** Name of the cluster */
  name?: string
  /** Redis™ engine version of the cluster */
  version: string
  /** Tags to apply to the cluster */
  tags?: Array<string>
  /** Type of node to use for the cluster */
  nodeType: string
  /** Name of the user created when the cluster is created */
  userName: string
  /** Password of the user */
  password: string
  /** Number of nodes for the cluster */
  clusterSize?: number
  /** List of ACLRuleSpec used to secure your publicly exposed cluster */
  aclRules?: Array<ACLRuleSpec>
  /**
   * Zero or multiple EndpointSpec used to expose your cluster publicly and
   * inside private networks. If no EndpoindSpec is given the cluster will be
   * publicly exposed by default.
   */
  endpoints?: Array<EndpointSpec>
  /** Whether or not TLS is enabled */
  tlsEnabled: boolean
  /** List of cluster settings to be set at cluster initialisation */
  clusterSettings?: Array<ClusterSetting>
}

export type UpdateClusterRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster to update */
  clusterId: string
  /** Name of the cluster */
  name?: string
  /** Tags of a given cluster */
  tags?: Array<string>
  /** Name of the cluster user */
  userName?: string
  /** Password of the cluster user */
  password?: string
}

export type GetClusterRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster */
  clusterId: string
}

export type ListClustersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Tags of the clusters to filter upon */
  tags?: Array<string>
  /** Name of the clusters to filter upon */
  name?: string
  /** Criteria to use when ordering cluster listing */
  orderBy?: ListClustersRequestOrderBy
  /** Project ID to list the cluster of */
  projectId?: string
  /** Organization ID to list the cluster of */
  organizationId?: string
  page?: number
  pageSize?: number
}

export type MigrateClusterRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster to update */
  clusterId: string
  /**
   * Redis™ engine version of the cluster.
   *
   * One-of ('action'): at most one of 'version', 'nodeType', 'clusterSize' could be set.
   */
  version?: string
  /**
   * Type of node to use for the cluster.
   *
   * One-of ('action'): at most one of 'version', 'nodeType', 'clusterSize' could be set.
   */
  nodeType?: string
  /**
   * Number of nodes for the cluster.
   *
   * One-of ('action'): at most one of 'version', 'nodeType', 'clusterSize' could be set.
   */
  clusterSize?: number
}

export type DeleteClusterRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster to delete */
  clusterId: string
}

export type GetClusterMetricsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster */
  clusterId: string
  /** Start date to gather metrics from */
  startAt?: Date
  /** End date to gather metrics from */
  endAt?: Date
  /** Name of the metric to gather */
  metricName?: string
}

export type ListNodeTypesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Whether or not to include disabled types */
  includeDisabledTypes: boolean
  page?: number
  pageSize?: number
}

export type ListClusterVersionsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Whether or not to include disabled Redis™ engine versions */
  includeDisabled: boolean
  /** Whether or not to include beta Redis™ engine versions */
  includeBeta: boolean
  /** Whether or not to include deprecated Redis™ engine versions */
  includeDeprecated: boolean
  /** List Redis™ engine versions that match a given name pattern */
  version?: string
  page?: number
  pageSize?: number
}

export type GetClusterCertificateRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster */
  clusterId: string
}

export type RenewClusterCertificateRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster */
  clusterId: string
}

export type AddClusterSettingsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster you want to add settings to */
  clusterId: string
  /** Settings to add on the cluster */
  settings: Array<ClusterSetting>
}

export type DeleteClusterSettingRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster where the settings has to be set */
  clusterId: string
  /** Setting name to delete */
  settingName: string
}

export type SetClusterSettingsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster where the settings has to be set */
  clusterId: string
  /** Settings to define for the cluster */
  settings: Array<ClusterSetting>
}

export type SetAclRulesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster where the ACL rules has to be set */
  clusterId: string
  /** ACLs rules to define for the cluster */
  aclRules: Array<ACLRuleSpec>
}

export type AddAclRulesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster you want to add acl rules to */
  clusterId: string
  /** ACLs rules to add to the cluster */
  aclRules: Array<ACLRuleSpec>
}

export type DeleteAclRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the acl rule you want to delete */
  aclId: string
}

export type GetAclRuleRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the acl rule you want to get */
  aclId: string
}

export type SetEndpointsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster where the endpoints has to be set */
  clusterId: string
  /** Endpoints to define for the cluster */
  endpoints: Array<EndpointSpec>
}

export type AddEndpointsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the cluster you want to add endpoints to */
  clusterId: string
  /** Endpoints to add to the cluster */
  endpoints: Array<EndpointSpec>
}

export type DeleteEndpointRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the endpoint you want to delete */
  endpointId: string
}

export type GetEndpointRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the endpoint you want to get */
  endpointId: string
}

export type UpdateEndpointRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  endpointId: string
  /**
   * One-of ('endpointType'): at most one of 'privateNetwork', 'publicNetwork'
   * could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetworkSpec
  /**
   * One-of ('endpointType'): at most one of 'privateNetwork', 'publicNetwork'
   * could be set.
   */
  publicNetwork?: EndpointSpecPublicNetworkSpec
}
