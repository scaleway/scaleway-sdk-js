// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type InstanceStatus =
  | 'unknown_status'
  | 'ready'
  | 'provisioning'
  | 'configuring'
  | 'deleting'
  | 'error'
  | 'initializing'
  | 'locked'
  | 'snapshotting'

export type ListInstancesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'

export type ListSnapshotsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'expires_at_asc'
  | 'expires_at_desc'

export type ListUsersRequestOrderBy = 'name_asc' | 'name_desc'

export type NodeTypeStock =
  | 'unknown_stock'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type SettingPropertyType = 'BOOLEAN' | 'INT' | 'STRING' | 'FLOAT'

export type SnapshotStatus =
  | 'unknown_status'
  | 'creating'
  | 'ready'
  | 'restoring'
  | 'deleting'
  | 'error'
  | 'locked'

export type VolumeType = 'unknown_type' | 'sbs_5k' | 'sbs_15k'

/** Private Network details. */
export interface EndpointPrivateNetworkDetails {
  /** UUID of the private network. */
  privateNetworkId: string
}

export interface EndpointPublicDetails {}

export interface EndpointSpecPrivateNetworkDetails {
  /** UUID of the private network. */
  privateNetworkId: string
}

export interface EndpointSpecPublicDetails {}

export interface Endpoint {
  /** UUID of the endpoint. */
  id: string
  /** List of IPv4 addresses of the endpoint. */
  ips: string[]
  /** List of DNS records of the endpoint. */
  dnsRecords: string[]
  /** TCP port of the endpoint. */
  port: number
  /**
   * Private Network endpoint details.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'public' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails
  /**
   * Public endpoint details.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'public' could be set.
   */
  public?: EndpointPublicDetails
}

export interface InstanceSetting {
  /** Name of the settings. */
  name: string
  /** Value of the settings. */
  value: string
}

export interface Volume {
  /** Type of volume where data is stored. */
  type: VolumeType
  /** Volume size. */
  size: number
}

export interface NodeTypeVolumeType {
  /** Volume Type. */
  type: VolumeType
  /** The description of the Volume. */
  description: string
  /** Mimimum size required for the Volume. */
  minSize: number
  /** Maximum size required for the Volume. */
  maxSize: number
  /** Minimum increment level for a Block Storage volume size. */
  chunkSize: number
}

export interface SnapshotVolumeType {
  type: VolumeType
}

export interface Setting {
  /** Setting name from the database engine. */
  name: string
  /** Value set when not specified. */
  defaultValue: string
  /** Setting can be applied without restarting. */
  hotConfigurable: boolean
  /** Setting description. */
  description: string
  /** Setting type. */
  propertyType: SettingPropertyType
  /** Setting base unit. */
  unit?: string
  /** Validation regex for string type settings. */
  stringConstraint?: string
  /** Minimum value for int types. */
  intMin?: number
  /** Maximum value for int types. */
  intMax?: number
  /** Minimum value for float types. */
  floatMin?: number
  /** Maximum value for float types. */
  floatMax?: number
}

export interface CreateInstanceRequestVolumeDetails {
  /** Volume size. */
  volumeSize: number
  /** Type of volume where data is stored. */
  volumeType: VolumeType
}

export interface EndpointSpec {
  /** One-of ('details'): at most one of 'public', 'privateNetwork' could be set. */
  public?: EndpointSpecPublicDetails
  /** One-of ('details'): at most one of 'public', 'privateNetwork' could be set. */
  privateNetwork?: EndpointSpecPrivateNetworkDetails
}

export interface Instance {
  /** UUID of the Database Instance. */
  id: string
  /** Name of the Database Instance. */
  name: string
  /** Project ID the Database Instance belongs to. */
  projectId: string
  /** Status of the Database Instance. */
  status: InstanceStatus
  /** MongoDB™ engine version of the Database Instance. */
  version: string
  /** List of tags applied to the Database Instance. */
  tags: string[]
  /** Advanced settings of the Database Instance. */
  settings: InstanceSetting[]
  /** Number of node in the Database Instance. */
  nodeNumber: number
  /** Node type of the Database Instance. */
  nodeType: string
  /** Volumes of the Database Instance. */
  volume?: Volume
  /** List of Database Instance endpoints. */
  endpoints: Endpoint[]
  /** Creation date (must follow the ISO 8601 format). */
  createdAt?: Date
  /** Region the Database Instance is in. */
  region: Region
}

export interface NodeType {
  /** Node Type name identifier. */
  name: string
  /** Current stock status for the Node Type. */
  stockStatus: NodeTypeStock
  /** Current specs of the offer. */
  description: string
  /** Number of virtual CPUs. */
  vcpus: number
  /** Quantity of RAM. */
  memory: number
  /** Available storage options for the Node Type. */
  availableVolumeTypes: NodeTypeVolumeType[]
  /** The Node Type is currently disabled. */
  disabled: boolean
  /** The Node Type is currently in beta. */
  beta: boolean
  /** Instance range associated with the NodeType offer. */
  instanceRange: string
}

export interface Snapshot {
  /** UUID of the snapshot. */
  id: string
  /** UUID of the Database Instance. */
  instanceId: string
  /** Name of the snapshot. */
  name: string
  /** Status of the snapshot. */
  status: SnapshotStatus
  /** Size of the snapshot. */
  size: number
  /** Expiration date (must follow the ISO 8601 format). */
  expiresAt?: Date
  /** Creation date (must follow the ISO 8601 format). */
  createdAt?: Date
  /** Updated date (must follow the ISO 8601 format). */
  updatedAt?: Date
  /** Name of the Database Instance of the snapshot. */
  instanceName: string
  /** Source node type. */
  nodeType: string
  /** Type of volume where data is stored sbs_5k or sbs_15k. */
  volumeType?: SnapshotVolumeType
  /** Region of this snapshot. */
  region: Region
}

export interface User {
  /**
   * Name of the user (Length must be between 1 and 63 characters. First
   * character must be an alphabet character (a-zA-Z). Only a-zA-Z0-9_$-
   * characters are accepted).
   */
  name: string
}

export interface Version {
  /** MongoDB™ engine version. */
  version: string
  /** Date of End of Life. */
  endOfLifeAt?: Date
  /** Instance settings available to be updated. */
  availableSettings: Setting[]
}

export interface RestoreSnapshotRequestVolumeDetails {
  /** Type of volume where data is stored. */
  volumeType: VolumeType
}

export type CreateInstanceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** The Project ID on which the Database Instance will be created. */
  projectId?: string
  /** Name of the Database Instance. */
  name?: string
  /** Version of the MongoDB™ engine. */
  version: string
  /** Tags to apply to the Database Instance. */
  tags?: string[]
  /** Number of node to use for the Database Instance. */
  nodeNumber: number
  /** Type of node to use for the Database Instance. */
  nodeType: string
  /** Username created when the Database Instance is created. */
  userName: string
  /** Password of the initial user. */
  password: string
  /** Instance volume information. */
  volume?: CreateInstanceRequestVolumeDetails
  /** One or multiple EndpointSpec used to expose your Database Instance. */
  endpoints?: EndpointSpec[]
}

export type CreateSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Database Instance to snapshot. */
  instanceId: string
  /** Name of the snapshot. */
  name: string
  /** Expiration date of the snapshot (must follow the ISO 8601 format). */
  expiresAt?: Date
}

export type DeleteInstanceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Database Instance to delete. */
  instanceId: string
}

export type DeleteSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the snapshot. */
  snapshotId: string
}

export type GetInstanceCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
}

export type GetInstanceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
}

export type GetSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the snapshot. */
  snapshotId: string
}

export type ListInstancesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** List Database Instances that have a given tag. */
  tags?: string[]
  /** Lists Database Instances that match a name pattern. */
  name?: string
  /** Criteria to use when ordering Database Instance listings. */
  orderBy?: ListInstancesRequestOrderBy
  /** Organization ID the Database Instance belongs to. */
  organizationId?: string
  /** Project ID to list the Database Instance of. */
  projectId?: string
  page?: number
  pageSize?: number
}

export interface ListInstancesResponse {
  /** List of all Database Instances available in an Organization or Project. */
  instances: Instance[]
  /** Total count of Database Instances available in a Organization or Project. */
  totalCount: number
}

export type ListNodeTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Defines whether or not to include disabled types. */
  includeDisabledTypes?: boolean
  page?: number
  pageSize?: number
}

export interface ListNodeTypesResponse {
  /** Types of the node. */
  nodeTypes: NodeType[]
  /** Total count of node-types available. */
  totalCount: number
}

export type ListSnapshotsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Instance ID the snapshots belongs to. */
  instanceId?: string
  /** Lists Database snapshots that match a name pattern. */
  name?: string
  /** Criteria to use when ordering snapshot listings. */
  orderBy?: ListSnapshotsRequestOrderBy
  /** Organization ID the snapshots belongs to. */
  organizationId?: string
  /** Project ID to list the snapshots of. */
  projectId?: string
  page?: number
  pageSize?: number
}

export interface ListSnapshotsResponse {
  /** List of all Database Snapshots available in an Organization or Project. */
  snapshots: Snapshot[]
  /** Total count of Database Snapshots available in a Organization or Project. */
  totalCount: number
}

export type ListUsersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
  /** Name of the user. */
  name?: string
  /** Criteria to use when requesting user listing. */
  orderBy?: ListUsersRequestOrderBy
  page?: number
  pageSize?: number
}

export interface ListUsersResponse {
  /** List of users in a Database Instance. */
  users: User[]
  /** Total count of users present on a Database Instance. */
  totalCount: number
}

export type ListVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  version?: string
  page?: number
  pageSize?: number
}

export interface ListVersionsResponse {
  /** Available MongoDB™ engine version. */
  versions: Version[]
  /** Total count of MongoDB™ engine version available. */
  totalCount: number
}

export type RestoreSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the snapshot. */
  snapshotId: string
  /** Name of the new Database Instance. */
  instanceName: string
  /** Node type to use for the new Database Instance. */
  nodeType: string
  /** Number of nodes to use for the new Database Instance. */
  nodeNumber: number
  /** Instance volume information. */
  volume: RestoreSnapshotRequestVolumeDetails
}

export type UpdateInstanceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Database Instance to update. */
  instanceId: string
  /** Name of the Database Instance. */
  name?: string
  /** Tags of a Database Instance. */
  tags?: string[]
}

export type UpdateSnapshotRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Snapshot. */
  snapshotId: string
  /** Name of the snapshot. */
  name?: string
  /** Expiration date of the snapshot (must follow the ISO 8601 format). */
  expiresAt?: Date
}

export type UpdateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Database Instance the user belongs to. */
  instanceId: string
  /** Name of the database user. */
  name: string
  /** Password of the database user. */
  password?: string
}

export type UpgradeInstanceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the Database Instance you want to upgrade. */
  instanceId: string
  /**
   * Increase your block storage volume size.
   *
   * One-of ('upgradeTarget'): at most one of 'volumeSize' could be set.
   */
  volumeSize?: number
}
