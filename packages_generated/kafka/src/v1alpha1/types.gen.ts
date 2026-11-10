// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type ClusterStatus =
  | 'unknown_status'
  | 'ready'
  | 'creating'
  | 'configuring'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'stopped'
  | 'upgrading'

export type ListClustersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'

export type ListUsersRequestOrderBy =
  | 'name_asc'
  | 'name_desc'

export type NodeTypeStock =
  | 'unknown_stock'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type VolumeType =
  | 'unknown_type'
  | 'sbs_5k'
  | 'sbs_15k'

/**
 * Private Network details.
 */
export interface EndpointPrivateNetworkDetails {
  /**
   * UUID of the Private Network.
   */
  privateNetworkId: string
}


/**
 * Public Access details.
 */
export interface EndpointPublicDetails {
}


export interface VersionAvailableSettingBooleanProperty {
  defaultValue: boolean
}


export interface VersionAvailableSettingFloatProperty {
  min: number
  max: number
  defaultValue: number
  unit?: string | null
}


export interface VersionAvailableSettingIntegerProperty {
  min: number
  max: number
  defaultValue: number
  unit?: string | null
}


export interface VersionAvailableSettingStringProperty {
  stringConstraint?: string | null
  defaultValue: string
}


export interface EndpointSpecPrivateNetworkDetails {
  /**
   * UUID of the Private Network.
   */
  privateNetworkId: string
}


export interface EndpointSpecPublicDetails {
}


/**
 * MonoAZ details.
 */
export interface ClusterMonoAZDetails {
  /**
   * Zone is the zone on which the cluster nodes are deployed.
   */
  zone?: ScwZone | null
}


/**
 * MultiAZ details.
 */
export interface ClusterMultiAZDetails {
}


export interface ClusterSetting {
  /**
   * Name of the setting.
   */
  name: string
  /**
   * Boolean value of the setting.
   *
   * One-of ('value'): at most one of 'boolValue', 'stringValue', 'intValue', 'floatValue' could be set.
   */
  boolValue?: boolean | null
  /**
   * String value of the setting.
   *
   * One-of ('value'): at most one of 'boolValue', 'stringValue', 'intValue', 'floatValue' could be set.
   */
  stringValue?: string | null
  /**
   * Integer value of the setting.
   *
   * One-of ('value'): at most one of 'boolValue', 'stringValue', 'intValue', 'floatValue' could be set.
   */
  intValue?: number | null
  /**
   * Float value of the setting.
   *
   * One-of ('value'): at most one of 'boolValue', 'stringValue', 'intValue', 'floatValue' could be set.
   */
  floatValue?: number | null
}


export interface Endpoint {
  /**
   * UUID of the endpoint.
   */
  id: string
  /**
   * List of DNS records of the endpoint.
   */
  dnsRecords: string[]
  /**
   * TCP port of the endpoint.
   */
  port: number
  /**
   * Private Network endpoint details.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'publicNetwork' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails | null
  /**
   * Public endpoint details.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'publicNetwork' could be set.
   */
  publicNetwork?: EndpointPublicDetails | null
}


export interface Volume {
  /**
   * Type of volume where data is stored.
   */
  type: VolumeType
  /**
   * Volume size.
   */
  sizeBytes: number
}


export interface NodeTypeVolumeType {
  /**
   * Volume type.
   */
  type: VolumeType
  /**
   * The description of the volume.
   */
  description: string
  /**
   * Minimum size required for the volume.
   */
  minSizeBytes: number
  /**
   * Maximum size required for the volume.
   */
  maxSizeBytes: number
  /**
   * Minimum increment level for a Block Storage volume size.
   */
  chunkSizeBytes: number
}


export interface VersionAvailableSetting {
  /**
   * Kafka cluster setting name.
   */
  name: string
  /**
   * Defines whether this setting can be applied without needing a restart.
   */
  hotConfigurable: boolean
  /**
   * Setting description.
   */
  description: string
  /**
   * Boolean property, if the setting is a boolean.
   *
   * One-of ('property'): at most one of 'boolProperty', 'stringProperty', 'intProperty', 'floatProperty' could be set.
   */
  boolProperty?: VersionAvailableSettingBooleanProperty | null
  /**
   * String property, if the setting is a string.
   *
   * One-of ('property'): at most one of 'boolProperty', 'stringProperty', 'intProperty', 'floatProperty' could be set.
   */
  stringProperty?: VersionAvailableSettingStringProperty | null
  /**
   * Integer property, if the setting is an integer.
   *
   * One-of ('property'): at most one of 'boolProperty', 'stringProperty', 'intProperty', 'floatProperty' could be set.
   */
  intProperty?: VersionAvailableSettingIntegerProperty | null
  /**
   * Float property, if the setting is a float.
   *
   * One-of ('property'): at most one of 'boolProperty', 'stringProperty', 'intProperty', 'floatProperty' could be set.
   */
  floatProperty?: VersionAvailableSettingFloatProperty | null
}


export interface CreateClusterRequestVolumeSpec {
  /**
   * Volume size.
   */
  sizeBytes: number
  /**
   * Type of volume where data is stored.
   */
  type: VolumeType
}


export interface EndpointSpec {
  /**
   *
   * One-of ('details'): at most one of 'publicNetwork', 'privateNetwork' could be set.
   */
  publicNetwork?: EndpointSpecPublicDetails | null
  /**
   *
   * One-of ('details'): at most one of 'publicNetwork', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetworkDetails | null
}


export interface Cluster {
  /**
   * UUID of the Kafka cluster.
   */
  id: string
  /**
   * Name of the Kafka cluster.
   */
  name: string
  /**
   * Project ID the Kafka cluster belongs to.
   */
  projectId: string
  /**
   * Organisation ID the Kafka cluster belongs to.
   */
  organizationId: string
  /**
   * Status of the Kafka cluster.
   */
  status: ClusterStatus
  /**
   * Kafka version of the Kafka cluster.
   */
  version: string
  /**
   * List of tags applied to the Kafka cluster.
   */
  tags: string[]
  /**
   * Advanced settings of the Kafka cluster.
   */
  settings: ClusterSetting[]
  /**
   * Number of nodes in Kafka cluster.
   */
  nodeAmount: number
  /**
   * Node type of the Kafka cluster.
   */
  nodeType: string
  /**
   * Volumes of the Kafka cluster.
   */
  volume?: Volume | null
  /**
   * List of Kafka cluster endpoints.
   */
  endpoints: Endpoint[]
  /**
   * Creation date (must follow the ISO 8601 format).
   */
  createdAt?: Date | null
  /**
   * Last update date (must follow the ISO 8601 format).
   */
  updatedAt?: Date | null
  /**
   * Region the Kafka cluster is in.
   */
  region: ScwRegion
  /**
   * MultiAZ tell the cluster is deployed on multiple availability zones in the region.
   *
   * One-of ('availability'): at most one of 'multiAz', 'monoAz' could be set.
   */
  multiAz?: ClusterMultiAZDetails | null
  /**
   * MonoAZ details.
   *
   * One-of ('availability'): at most one of 'multiAz', 'monoAz' could be set.
   */
  monoAz?: ClusterMonoAZDetails | null
}


export interface NodeType {
  /**
   * Node type name identifier.
   */
  name: string
  /**
   * Current stock status for the node type.
   */
  stockStatus: NodeTypeStock
  /**
   * Current specifications of the node type offer.
   */
  description: string
  /**
   * Number of virtual CPUs of the node type.
   */
  vcpus: number
  /**
   * Quantity of RAM.
   */
  memoryBytes: number
  /**
   * Available storage options for the node type.
   */
  availableVolumeTypes: NodeTypeVolumeType[]
  /**
   * Defines whether the node type is currently disabled.
   */
  disabled: boolean
  /**
   * Defines whether the node type is currently in beta.
   */
  beta: boolean
  /**
   * Cluster range associated with the node type offer.
   */
  clusterRange: string
}


export interface User {
  username: string
}


export interface Version {
  /**
   * Kafka version.
   */
  version: string
  /**
   * Date of End of Life for the version.
   */
  endOfLifeAt?: Date | null
  /**
   * Cluster configuration settings you are able to change for clusters running this version. Each item in `available_settings` describes one configurable cluster setting.
   */
  availableSettings: VersionAvailableSetting[]
}


export type CreateClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * The ID of the Project in which the Kafka cluster will be created.
   */
  projectId?: string | null
  /**
   * Name of the Kafka cluster.
   */
  name?: string | null
  /**
   * Version of Kafka.
   */
  version: string
  /**
   * Tags to apply to the Kafka cluster.
   */
  tags?: string[] | null
  /**
   * Number of nodes to use for the Kafka cluster.
   */
  nodeAmount: number
  /**
   * Type of node to use for the Kafka cluster.
   */
  nodeType: string
  /**
   * Kafka volume information.
   */
  volume?: CreateClusterRequestVolumeSpec | null
  /**
   * One or multiple EndpointSpec used to expose your Kafka cluster.
   */
  endpoints?: EndpointSpec[] | null
  /**
   * Username for the kafka user.
   */
  userName?: string | null
  /**
   * Password for the kafka user.
   */
  password?: string | null
  /**
   * MultiAZ tell the cluster is deployed on multiple availability zones in the region.
   *
   * One-of ('availability'): at most one of 'multiAz', 'monoAz' could be set.
   */
  multiAz?: ClusterMultiAZDetails | null
  /**
   * MonoAZ details.
   *
   * One-of ('availability'): at most one of 'multiAz', 'monoAz' could be set.
   */
  monoAz?: ClusterMonoAZDetails | null
}


export type CreateEndpointRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the Kafka Cluster.
   */
  clusterId: string
  /**
   * Endpoint object (`EndpointSpec`) used to expose your Kafka EndpointSpec.
   */
  endpoint: EndpointSpec
}


export type DeleteClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the Kafka Cluster to delete.
   */
  clusterId: string
}


export type DeleteEndpointRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the endpoint to delete.
   */
  endpointId: string
}


export type GetClusterCertificateAuthorityRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the Kafka Cluster.
   */
  clusterId: string
}


export type GetClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the Kafka Cluster.
   */
  clusterId: string
}


export type ListClustersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * List Kafka cluster with a given tag.
   */
  tags?: string[] | null
  /**
   * Lists Kafka clusters that match a name pattern.
   */
  name?: string | null
  /**
   * Criteria to use when ordering Kafka cluster listings.
   */
  orderBy?: ListClustersRequestOrderBy | null
  /**
   * Organization ID of the Kafka cluster.
   */
  organizationId?: string | null
  /**
   * Project ID.
   */
  projectId?: string | null
  page?: number | null
  pageSize?: number | null
}


export interface ListClustersResponse {
  /**
   * List of all Kafka cluster available in an Organization or Project.
   */
  clusters: Cluster[]
  /**
   * Total count of Kafka cluster available in an Organization or Project.
   */
  totalCount: number
}


export type ListNodeTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Defines whether or not to include disabled types.
   */
  includeDisabledTypes?: boolean | null
  page?: number | null
  pageSize?: number | null
}


export interface ListNodeTypesResponse {
  /**
   * Types of the node.
   */
  nodeTypes: NodeType[]
  /**
   * Total count of node types available.
   */
  totalCount: number
}


export type ListUsersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  clusterId: string
  page?: number | null
  pageSize?: number | null
  orderBy?: ListUsersRequestOrderBy | null
  name?: string | null
}


export interface ListUsersResponse {
  users: User[]
  totalCount: number
}


export type ListVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Kafka version to filter for.
   */
  version?: string | null
  /**
   * The page number to return, from the paginated results.
   */
  page?: number | null
  /**
   * The number of items to return.
   */
  pageSize?: number | null
}


export interface ListVersionsResponse {
  /**
   * Available Kafka versions.
   */
  versions: Version[]
  /**
   * Total count of Kafka versions available.
   */
  totalCount: number
}


export type RenewClusterCertificateAuthorityRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the Kafka Cluster.
   */
  clusterId: string
}


export type UpdateClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the Kafka Clusters to update.
   */
  clusterId: string
  /**
   * Name of the Kafka Cluster.
   */
  name?: string | null
  /**
   * Tags of a Kafka Cluster.
   */
  tags?: string[] | null
  /**
   * Version of Kafka.
   */
  version?: string | null
  /**
   * New volume size for each broker, can only increase.
   */
  volumeSizeBytes?: number | null
}


/**
 * Update a user of a Kafka cluster.
 */
export type UpdateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster in which to update the user's password.
   */
  clusterId: string
  /**
   * Username of the Kafka cluster user.
   */
  username: string
  /**
   * New password for the Kafka cluster user.
   */
  password?: string | null
}


