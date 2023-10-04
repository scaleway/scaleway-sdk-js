// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region, TimeSeries, Zone } from '../../../bridge'

export type ACLRuleAction = 'allow' | 'deny'

export type ACLRuleDirection = 'inbound' | 'outbound'

export type ACLRuleProtocol = 'tcp' | 'udp' | 'icmp'

export type EngineSettingPropertyType = 'BOOLEAN' | 'INT' | 'STRING' | 'FLOAT'

export type InstanceLogStatus = 'unknown' | 'ready' | 'creating' | 'error'

export type InstanceStatus =
  | 'unknown'
  | 'ready'
  | 'provisioning'
  | 'configuring'
  | 'deleting'
  | 'error'
  | 'autohealing'
  | 'locked'
  | 'initializing'
  | 'disk_full'
  | 'backuping'
  | 'snapshotting'
  | 'restarting'

export type ListDatabasesRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'size_asc'
  | 'size_desc'

export type ListInstanceLogsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListInstancesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'region'
  | 'status_asc'
  | 'status_desc'

export type ListPrivilegesRequestOrderBy =
  | 'user_name_asc'
  | 'user_name_desc'
  | 'database_name_asc'
  | 'database_name_desc'

export type ListSnapshotsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'expires_at_asc'
  | 'expires_at_desc'

export type ListUsersRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'is_admin_asc'
  | 'is_admin_desc'

export type MaintenanceStatus = 'unknown' | 'pending' | 'done' | 'canceled'

export type NodeTypeGeneration =
  | 'unknown_generation'
  | 'generation_v1'
  | 'generation_v2'

export type NodeTypeStock =
  | 'unknown'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type Permission = 'readonly' | 'readwrite' | 'all' | 'custom' | 'none'

export type ReadReplicaStatus =
  | 'unknown'
  | 'provisioning'
  | 'initializing'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'configuring'
  | 'promoting'

export type SnapshotStatus =
  | 'unknown'
  | 'creating'
  | 'ready'
  | 'restoring'
  | 'deleting'
  | 'error'
  | 'locked'

export type VolumeType = 'lssd' | 'bssd'

export interface EndpointDirectAccessDetails {}

export interface EndpointLoadBalancerDetails {}

export interface EndpointPrivateNetworkDetails {
  /** UUID of the Private Network. */
  privateNetworkId: string
  /** CIDR notation of the endpoint IPv4 address. */
  serviceIp: string
  /** Private network zone. */
  zone: Zone
}

export interface EndpointSpecPrivateNetworkIpamConfig {}

export interface ReadReplicaEndpointSpecPrivateNetworkIpamConfig {}

export interface EngineSetting {
  /** Setting name from the database engine. */
  name: string
  /** Value set when not specified. */
  defaultValue: string
  /** Setting can be applied without restarting. */
  hotConfigurable: boolean
  /** Setting description. */
  description: string
  /** Setting type. */
  propertyType: EngineSettingPropertyType
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

export interface Endpoint {
  /** UUID of the endpoint. */
  id: string
  /**
   * IPv4 address of the endpoint. One-of ('address'): at most one of 'ip',
   * 'hostname' could be set.
   */
  ip?: string
  /** TCP port of the endpoint. */
  port: number
  /** Name of the endpoint. */
  name?: string
  /**
   * Private Network details. One maximum per Database Instance or Read Replica
   * (a Database Instance and its Read Replica can have different Private
   * Networks). Cannot be updated (has to be deleted and recreated). One-of
   * ('details'): at most one of 'privateNetwork', 'loadBalancer',
   * 'directAccess' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails
  /**
   * Load Balancer details. Public endpoint for Database Instance which is
   * systematically present. One per Database Instance. One-of ('details'): at
   * most one of 'privateNetwork', 'loadBalancer', 'directAccess' could be set.
   */
  loadBalancer?: EndpointLoadBalancerDetails
  /**
   * Direct access details. Public endpoint reserved for Read Replicas. One per
   * Read Replica. One-of ('details'): at most one of 'privateNetwork',
   * 'loadBalancer', 'directAccess' could be set.
   */
  directAccess?: EndpointDirectAccessDetails
  /**
   * Hostname of the endpoint. One-of ('address'): at most one of 'ip',
   * 'hostname' could be set.
   */
  hostname?: string
}

export interface EndpointSpecLoadBalancer {}

export interface EndpointSpecPrivateNetwork {
  /** UUID of the Private Network to be connected to the Database Instance. */
  privateNetworkId: string
  /**
   * Endpoint IPv4 address with a CIDR notation. Refer to the official Scaleway
   * documentation to learn more about IP and subnet limitations. One-of
   * ('config'): at most one of 'serviceIp', 'ipamConfig' could be set.
   */
  serviceIp?: string
  /**
   * Automated configuration of your Private Network endpoint with Scaleway IPAM
   * service. One at the most per Database Instance or Read Replica (a Database
   * Instance and its Read Replica can have different Private Networks). Cannot
   * be updated (has to be deleted and recreated). One-of ('config'): at most
   * one of 'serviceIp', 'ipamConfig' could be set.
   */
  ipamConfig?: EndpointSpecPrivateNetworkIpamConfig
}

export interface ReadReplicaEndpointSpecDirectAccess {}

export interface ReadReplicaEndpointSpecPrivateNetwork {
  /** UUID of the Private Network to be connected to the Read Replica. */
  privateNetworkId: string
  /**
   * Endpoint IPv4 address with a CIDR notation. Refer to the official Scaleway
   * documentation to learn more about IP and subnet limitations. One-of
   * ('config'): at most one of 'serviceIp', 'ipamConfig' could be set.
   */
  serviceIp?: string
  /**
   * Automated configuration of your Private Network endpoint with Scaleway IPAM
   * service. One at the most per Database Instance or Read Replica (a Database
   * Instance and its Read Replica can have different private networks). Cannot
   * be updated (has to be deleted and recreated). One-of ('config'): at most
   * one of 'serviceIp', 'ipamConfig' could be set.
   */
  ipamConfig?: ReadReplicaEndpointSpecPrivateNetworkIpamConfig
}

export interface EngineVersion {
  /** Database engine version. */
  version: string
  /** Database engine name. */
  name: string
  /** End of life date. */
  endOfLife?: Date
  /** Engine settings available to be set. */
  availableSettings: EngineSetting[]
  /** Disabled versions cannot be created. */
  disabled: boolean
  /** Beta status of engine version. */
  beta: boolean
  /** Engine settings available to be set at database initialization. */
  availableInitSettings: EngineSetting[]
}

export interface BackupSchedule {
  /** Frequency of the backup schedule (in hours). */
  frequency: number
  /** Default retention period of backups (in days). */
  retention: number
  /** Defines whether the backup schedule feature is disabled. */
  disabled: boolean
  /** Next run of the backup schedule (accurate to 10 minutes). */
  nextRunAt?: Date
}

export interface InstanceSetting {
  name: string
  value: string
}

export interface LogsPolicy {
  /** Max age (in days) of remote logs to keep on the Database Instance. */
  maxAgeRetention?: number
  /** Max disk size of remote logs to keep on the Database Instance. */
  totalDiskRetention?: number
}

export interface Maintenance {
  /** Start date of the maintenance window. */
  startsAt?: Date
  /** End date of the maintenance window. */
  stopsAt?: Date
  /** Closed maintenance date. */
  closedAt?: Date
  /** Maintenance information message. */
  reason: string
  /** Status of the maintenance. */
  status: MaintenanceStatus
}

export interface ReadReplica {
  /** UUID of the Read Replica. */
  id: string
  /** Display Read Replica connection information. */
  endpoints: Endpoint[]
  /** Read replica status. */
  status: ReadReplicaStatus
  /** Region the Read Replica is in. */
  region: Region
  /**
   * Whether the replica is in the same Availability Zone as the main Database
   * Instance nodes or not.
   */
  sameZone: boolean
}

export interface UpgradableVersion {
  id: string
  name: string
  version: string
  minorVersion: string
}

export interface Volume {
  type: VolumeType
  size: number
}

export interface NodeTypeVolumeConstraintSizes {
  /** [deprecated] Mimimum size required for the Volume. */
  minSize: number
  /** [deprecated] Maximum size required for the Volume. */
  maxSize: number
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

export interface ACLRuleRequest {
  ip: string
  description: string
}

export interface ACLRule {
  ip: string
  port?: number
  protocol: ACLRuleProtocol
  direction: ACLRuleDirection
  action: ACLRuleAction
  description: string
}

export interface EndpointSpec {
  /**
   * Load Balancer endpoint specifications. Public endpoint for Database
   * Instance which is systematically present. One per Document Database
   * Instance. One-of ('spec'): at most one of 'loadBalancer', 'privateNetwork'
   * could be set.
   */
  loadBalancer?: EndpointSpecLoadBalancer
  /**
   * Private Network endpoint specifications. One maximum per Database Instance
   * or Read Replica (a Database Instance and its Read Replica can have
   * different Private Networks). Cannot be updated (has to be deleted and
   * recreated). One-of ('spec'): at most one of 'loadBalancer',
   * 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetwork
}

export interface ReadReplicaEndpointSpec {
  /**
   * Direct access endpoint specifications. Public endpoint reserved for Read
   * Replicas. One per Read Replica. One-of ('spec'): at most one of
   * 'directAccess', 'privateNetwork' could be set.
   */
  directAccess?: ReadReplicaEndpointSpecDirectAccess
  /**
   * Private Network endpoint specifications. One at most, per Read Replica.
   * Cannot be updated (has to be deleted and recreated). One-of ('spec'): at
   * most one of 'directAccess', 'privateNetwork' could be set.
   */
  privateNetwork?: ReadReplicaEndpointSpecPrivateNetwork
}

export interface DatabaseEngine {
  /** Engine name. */
  name: string
  /** Engine logo URL. */
  logoUrl: string
  /** Available versions. */
  versions: EngineVersion[]
  /** Region of this Database Instance. */
  region: Region
}

export interface Database {
  /** Name of the database. */
  name: string
  /** Name of the database owner. */
  owner: string
  /** Defines whether the database is managed or not. */
  managed: boolean
  /** Size of the database. */
  size: number
}

export interface ListInstanceLogsDetailsResponseInstanceLogDetail {
  logName: string
  size: number
}

export interface InstanceLog {
  /** Presigned S3 URL to download your log file. */
  downloadUrl?: string
  /** UUID of the Database Instance log. */
  id: string
  /** Status of the logs in a Database Instance. */
  status: InstanceLogStatus
  /** Name of the underlying node. */
  nodeName: string
  /** Expiration date (must follow the ISO 8601 format). */
  expiresAt?: Date
  /** Creation date (must follow the ISO 8601 format). */
  createdAt?: Date
  /** Region the Database Instance is in. */
  region: Region
}

export interface Instance {
  /** Creation date (must follow the ISO 8601 format). */
  createdAt?: Date
  /** Volumes of the Database Instance. */
  volume: Volume
  /** Region the Database Instance is in. */
  region: Region
  /** UUID of the Database Instance. */
  id: string
  /** Name of the Database Instance. */
  name: string
  /** Organization ID the Database Instance belongs to. */
  organizationId: string
  /** Project ID the Database Instance belongs to. */
  projectId: string
  /** Status of the Database Instance. */
  status: InstanceStatus
  /** Database engine of the database. */
  engine: string
  /** Available database engine versions for upgrade. */
  upgradableVersion: UpgradableVersion[]
  /** Endpoint of the Database Instance. */
  endpoint?: Endpoint
  /** List of tags applied to the Database Instance. */
  tags: string[]
  /** Advanced settings of the Database Instance. */
  settings: InstanceSetting[]
  /** Backup schedule of the Database Instance. */
  backupSchedule: BackupSchedule
  /** Defines whether or not High-Availability is enabled. */
  isHaCluster: boolean
  /** Read Replicas of the Database Instance. */
  readReplicas: ReadReplica[]
  /** Node type of the Database Instance. */
  nodeType: string
  /** List of engine settings to be set at Database Instance initialization. */
  initSettings: InstanceSetting[]
  /** List of Database Instance endpoints. */
  endpoints: Endpoint[]
  /** Logs policy of the Database Instance. */
  logsPolicy: LogsPolicy
  /** Store logical backups in the same region as the Database Instance. */
  backupSameRegion: boolean
  /** List of Database Instance maintenance events. */
  maintenances: Maintenance[]
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
  /** [deprecated] Node Type volume constraints. */
  volumeConstraint?: NodeTypeVolumeConstraintSizes
  /** The Node Type is compliant with Block Storage. */
  isBssdCompatible?: boolean
  /** The Node Type is currently disabled. */
  disabled: boolean
  /** The Node Type is currently in beta. */
  beta: boolean
  /** Available storage options for the Node Type. */
  availableVolumeTypes: NodeTypeVolumeType[]
  /** The Node Type can be used only with the High Availability option. */
  isHaRequired: boolean
  /** Generation associated the NodeType offer. */
  generation: NodeTypeGeneration
  /** Instance range associated with the NodeType offer. */
  instanceRange: string
  /** Region the Node Type is in. */
  region: Region
}

export interface Privilege {
  /** Permission (Read, Read/Write, All, Custom). */
  permission: Permission
  /** Name of the database. */
  databaseName: string
  /** Name of the user. */
  userName: string
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
  size?: number
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
  /** Region of this snapshot. */
  region: Region
}

export interface User {
  /**
   * Name of the user (Length must be between 1 and 63 characters. First
   * character must be an alphabet character (a-zA-Z). Your username cannot
   * start with '_rdb' or 'pg_'. Only a-zA-Z0-9_$- characters are accepted).
   */
  name: string
  /**
   * Defines whether or not a user got administrative privileges on the Database
   * Instance.
   */
  isAdmin: boolean
}

export type AddInstanceACLRulesRequest = {
  region?: Region
  /** UUID of the Database Instance you want to add ACL rules to. */
  instanceId: string
  /** ACL rules to add to the Database Instance. */
  rules?: ACLRuleRequest[]
}

export interface AddInstanceACLRulesResponse {
  /** ACL Rules enabled for the Database Instance. */
  rules: ACLRule[]
}

export type AddInstanceSettingsRequest = {
  region?: Region
  /** UUID of the Database Instance you want to add settings to. */
  instanceId: string
  /** Settings to add to the Database Instance. */
  settings?: InstanceSetting[]
}

export interface AddInstanceSettingsResponse {
  /** Settings available on the Database Instance. */
  settings: InstanceSetting[]
}

export type CloneInstanceRequest = {
  region?: Region
  /** UUID of the Database Instance you want to clone. */
  instanceId: string
  /** Name of the Database Instance clone. */
  name: string
  /** Node type of the clone. */
  nodeType?: string
}

export type CreateDatabaseRequest = {
  region?: Region
  /** UUID of the Database Instance where to create the database. */
  instanceId: string
  /** Name of the database. */
  name: string
}

export type CreateEndpointRequest = {
  region?: Region
  /** UUID of the Database Instance you to which you want to add an endpoint. */
  instanceId: string
  /** Specification of the endpoint you want to create. */
  endpointSpec?: EndpointSpec
}

export type CreateInstanceFromSnapshotRequest = {
  region?: Region
  /** Block snapshot of the Database Instance. */
  snapshotId: string
  /** Name of the Database Instance created with the snapshot. */
  instanceName: string
  /**
   * Defines whether or not High Availability is enabled on the new Database
   * Instance.
   */
  isHaCluster?: boolean
  /** The node type used to restore the snapshot. */
  nodeType?: string
}

export type CreateInstanceRequest = {
  region?: Region
  /**
   * Please use project_id instead. One-of ('projectIdentifier'): at most one of
   * 'organizationId', 'projectId' could be set.
   */
  organizationId?: string
  /**
   * The Project ID on which the Database Instance will be created. One-of
   * ('projectIdentifier'): at most one of 'organizationId', 'projectId' could
   * be set.
   */
  projectId?: string
  /** Name of the Database Instance. */
  name?: string
  /** Database engine of the Database Instance. */
  engine: string
  /** Username created when the Database Instance is created. */
  userName: string
  /** Password of the user. */
  password: string
  /** Type of node to use for the Database Instance. */
  nodeType: string
  /** Defines whether or not High-Availability is enabled. */
  isHaCluster: boolean
  /** Defines whether or not backups are disabled. */
  disableBackup: boolean
  /** Tags to apply to the Database Instance. */
  tags?: string[]
  /** List of engine settings to be set upon Database Instance initialization. */
  initSettings?: InstanceSetting[]
  /** Type of volume where data is stored (lssd, bssd, ...). */
  volumeType?: VolumeType
  /** Volume size when volume_type is not lssd. */
  volumeSize: number
  /**
   * One or multiple EndpointSpec used to expose your Database Instance. A
   * load_balancer public endpoint is systematically created.
   */
  initEndpoints?: EndpointSpec[]
  /**
   * Defines whether to or not to store logical backups in the same region as
   * the Database Instance.
   */
  backupSameRegion: boolean
}

export type CreateReadReplicaEndpointRequest = {
  region?: Region
  /** UUID of the Read Replica. */
  readReplicaId: string
  /** Specification of the endpoint you want to create. */
  endpointSpec?: ReadReplicaEndpointSpec[]
}

export type CreateReadReplicaRequest = {
  region?: Region
  /** UUID of the Database Instance you want to create a Read Replica from. */
  instanceId: string
  /** Specification of the endpoint you want to create. */
  endpointSpec?: ReadReplicaEndpointSpec[]
  /**
   * Defines whether or not to create the replica in the same Availability Zone
   * as the main Database Instance nodes.
   */
  sameZone?: boolean
}

export type CreateSnapshotRequest = {
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
  /** Name of the snapshot. */
  name?: string
  /** Expiration date (must follow the ISO 8601 format). */
  expiresAt?: Date
}

export type CreateUserRequest = {
  region?: Region
  /** UUID of the Database Instance in which you want to create a user. */
  instanceId: string
  /** Name of the user you want to create. */
  name: string
  /** Password of the user you want to create. */
  password: string
  /** Defines whether the user will have administrative privileges. */
  isAdmin: boolean
}

export type DeleteDatabaseRequest = {
  region?: Region
  /** UUID of the Database Instance where to delete the database. */
  instanceId: string
  /** Name of the database to delete. */
  name: string
}

export type DeleteEndpointRequest = {
  region?: Region
  /** This endpoint can also be used to delete a Read Replica endpoint. */
  endpointId: string
}

export type DeleteInstanceACLRulesRequest = {
  region?: Region
  /** UUID of the Database Instance you want to delete an ACL rule from. */
  instanceId: string
  /** IP addresses defined in the ACL rules of the Database Instance. */
  aclRuleIps?: string[]
}

export interface DeleteInstanceACLRulesResponse {
  /** IP addresses defined in the ACL rules of the Database Instance. */
  rules: ACLRule[]
}

export type DeleteInstanceRequest = {
  region?: Region
  /** UUID of the Database Instance to delete. */
  instanceId: string
}

export type DeleteInstanceSettingsRequest = {
  region?: Region
  /** UUID of the Database Instance to delete settings from. */
  instanceId: string
  /** Settings names to delete. */
  settingNames?: string[]
}

export interface DeleteInstanceSettingsResponse {
  /** Settings names to delete from the Database Instance. */
  settings: InstanceSetting[]
}

export type DeleteReadReplicaRequest = {
  region?: Region
  /** UUID of the Read Replica. */
  readReplicaId: string
}

export type DeleteSnapshotRequest = {
  region?: Region
  /** UUID of the snapshot to delete. */
  snapshotId: string
}

export type DeleteUserRequest = {
  region?: Region
  /** UUID of the Database Instance to delete the user from. */
  instanceId: string
  /** Name of the user. */
  name: string
}

export type GetEndpointRequest = {
  region?: Region
  /** UUID of the endpoint you want to get. */
  endpointId: string
}

export type GetInstanceCertificateRequest = {
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
}

export type GetInstanceLogRequest = {
  region?: Region
  /** UUID of the instance_log you want. */
  instanceLogId: string
}

export type GetInstanceMetricsRequest = {
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
  /** Start date to gather metrics from. */
  startDate?: Date
  /** End date to gather metrics from. */
  endDate?: Date
  /** Name of the metric to gather. */
  metricName?: string
}

export type GetInstanceRequest = {
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
}

export type GetReadReplicaRequest = {
  region?: Region
  /** UUID of the Read Replica. */
  readReplicaId: string
}

export type GetSnapshotRequest = {
  region?: Region
  /** UUID of the snapshot. */
  snapshotId: string
}

export interface InstanceMetrics {
  /** Time series of metrics of a Database Instance. */
  timeseries: TimeSeries[]
}

export type ListDatabaseEnginesRequest = {
  region?: Region
  /** Name of the database engine. */
  name?: string
  /** Version of the database engine. */
  version?: string
  page?: number
  pageSize?: number
}

export interface ListDatabaseEnginesResponse {
  /** List of the available database engines. */
  engines: DatabaseEngine[]
  /** Total count of database engines available. */
  totalCount: number
}

export type ListDatabasesRequest = {
  region?: Region
  /** UUID of the Database Instance to list the databases of. */
  instanceId: string
  /** Name of the database. */
  name?: string
  /** Defines whether or not the database is managed. */
  managed?: boolean
  /** User that owns this database. */
  owner?: string
  /** Criteria to use when ordering database listing. */
  orderBy?: ListDatabasesRequestOrderBy
  page?: number
  pageSize?: number
}

export interface ListDatabasesResponse {
  /** List of the databases. */
  databases: Database[]
  /** Total count of databases present on a Database Instance. */
  totalCount: number
}

export type ListInstanceACLRulesRequest = {
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
  page?: number
  pageSize?: number
}

export interface ListInstanceACLRulesResponse {
  /** List of ACL rules present on a Database Instance. */
  rules: ACLRule[]
  /** Total count of ACL rules present on a Database Instance. */
  totalCount: number
}

export type ListInstanceLogsDetailsRequest = {
  region?: Region
  /** UUID of the Database Instance you want logs of. */
  instanceId: string
}

export interface ListInstanceLogsDetailsResponse {
  /** Remote Database Instance logs details. */
  details: ListInstanceLogsDetailsResponseInstanceLogDetail[]
}

export type ListInstanceLogsRequest = {
  region?: Region
  /** UUID of the Database Instance you want logs of. */
  instanceId: string
  /** Criteria to use when ordering Database Instance logs listing. */
  orderBy?: ListInstanceLogsRequestOrderBy
}

export interface ListInstanceLogsResponse {
  /** Available logs in a Database Instance. */
  instanceLogs: InstanceLog[]
}

export type ListInstancesRequest = {
  region?: Region
  /** List Database Instances that have a given tag. */
  tags?: string[]
  /** Lists Database Instances that match a name pattern. */
  name?: string
  /** Criteria to use when ordering Database Instance listings. */
  orderBy?: ListInstancesRequestOrderBy
  /** Please use project_id instead. */
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
  region?: Region
  /** Defines whether or not to include disabled types. */
  includeDisabledTypes: boolean
  page?: number
  pageSize?: number
}

export interface ListNodeTypesResponse {
  /** Types of the node. */
  nodeTypes: NodeType[]
  /** Total count of node-types available. */
  totalCount: number
}

export type ListPrivilegesRequest = {
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
  /** Criteria to use when ordering privileges listing. */
  orderBy?: ListPrivilegesRequestOrderBy
  page?: number
  pageSize?: number
  /** Name of the database. */
  databaseName?: string
  /** Name of the user. */
  userName?: string
}

export interface ListPrivilegesResponse {
  /** Privileges of a user in a database in a Database Instance. */
  privileges: Privilege[]
  /** Total count of privileges present on a database. */
  totalCount: number
}

export type ListSnapshotsRequest = {
  region?: Region
  /** Name of the snapshot. */
  name?: string
  /** Criteria to use when ordering snapshot listing. */
  orderBy?: ListSnapshotsRequestOrderBy
  /** UUID of the Database Instance. */
  instanceId?: string
  /** Organization ID the snapshots belongs to. */
  organizationId?: string
  /** Project ID the snapshots belongs to. */
  projectId?: string
  page?: number
  pageSize?: number
}

export interface ListSnapshotsResponse {
  /** List of snapshots. */
  snapshots: Snapshot[]
  /** Total count of snapshots available. */
  totalCount: number
}

export type ListUsersRequest = {
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

export type MigrateEndpointRequest = {
  region?: Region
  /** UUID of the endpoint you want to migrate. */
  endpointId: string
  /** UUID of the instance you want to attach the endpoint to. */
  instanceId: string
}

export type PromoteReadReplicaRequest = {
  region?: Region
  /** UUID of the Read Replica. */
  readReplicaId: string
}

export type PurgeInstanceLogsRequest = {
  region?: Region
  /** UUID of the Database Instance you want logs of. */
  instanceId: string
  /** Given log name to purge. */
  logName?: string
}

export type RenewInstanceCertificateRequest = {
  region?: Region
  /** UUID of the Database Instance you want logs of. */
  instanceId: string
}

export type ResetReadReplicaRequest = {
  region?: Region
  /** UUID of the Read Replica. */
  readReplicaId: string
}

export type RestartInstanceRequest = {
  region?: Region
  /** UUID of the Database Instance you want to restart. */
  instanceId: string
}

export type SetInstanceACLRulesRequest = {
  region?: Region
  /** UUID of the Database Instance where the ACL rules must be set. */
  instanceId: string
  /** ACL rules to define for the Database Instance. */
  rules?: ACLRuleRequest[]
}

export interface SetInstanceACLRulesResponse {
  /** ACLs rules configured for a Database Instance. */
  rules: ACLRule[]
}

export type SetInstanceSettingsRequest = {
  region?: Region
  /** UUID of the Database Instance where the settings must be set. */
  instanceId: string
  /** Settings to define for the Database Instance. */
  settings?: InstanceSetting[]
}

export interface SetInstanceSettingsResponse {
  /** Settings configured for a Database Instance. */
  settings: InstanceSetting[]
}

export type SetPrivilegeRequest = {
  region?: Region
  /** UUID of the Database Instance. */
  instanceId: string
  /** Name of the database. */
  databaseName: string
  /** Name of the user. */
  userName: string
  /** Permission to set (Read, Read/Write, All, Custom). */
  permission?: Permission
}

export type UpdateInstanceRequest = {
  region?: Region
  /** UUID of the Database Instance to update. */
  instanceId: string
  /** In hours. */
  backupScheduleFrequency?: number
  /** In days. */
  backupScheduleRetention?: number
  /** Defines whether or not the backup schedule is disabled. */
  isBackupScheduleDisabled?: boolean
  /** Name of the Database Instance. */
  name?: string
  /** Tags of a Database Instance. */
  tags?: string[]
  /** Logs policy of the Database Instance. */
  logsPolicy?: LogsPolicy
  /** Store logical backups in the same region as the Database Instance. */
  backupSameRegion?: boolean
  /** Defines the start time of the autobackup. */
  backupScheduleStartHour?: number
}

export type UpdateSnapshotRequest = {
  region?: Region
  /** UUID of the snapshot to update. */
  snapshotId: string
  /** Name of the snapshot. */
  name?: string
  /** Expiration date (must follow the ISO 8601 format). */
  expiresAt?: Date
}

export type UpdateUserRequest = {
  region?: Region
  /** UUID of the Database Instance the user belongs to. */
  instanceId: string
  /** Name of the database user. */
  name: string
  /** Password of the database user. */
  password?: string
  /** Defines whether or not this user got administrative privileges. */
  isAdmin?: boolean
}

export type UpgradeInstanceRequest = {
  region?: Region
  /** UUID of the Database Instance you want to upgrade. */
  instanceId: string
  /**
   * Node type of the Database Instance you want to upgrade to. One-of
   * ('upgradeTarget'): at most one of 'nodeType', 'enableHa', 'volumeSize',
   * 'volumeType', 'upgradableVersionId' could be set.
   */
  nodeType?: string
  /**
   * Defines whether or not High Availability should be enabled on the Database
   * Instance. One-of ('upgradeTarget'): at most one of 'nodeType', 'enableHa',
   * 'volumeSize', 'volumeType', 'upgradableVersionId' could be set.
   */
  enableHa?: boolean
  /**
   * Increase your Block volume size. One-of ('upgradeTarget'): at most one of
   * 'nodeType', 'enableHa', 'volumeSize', 'volumeType', 'upgradableVersionId'
   * could be set.
   */
  volumeSize?: number
  /**
   * Change your Database Instance storage type. One-of ('upgradeTarget'): at
   * most one of 'nodeType', 'enableHa', 'volumeSize', 'volumeType',
   * 'upgradableVersionId' could be set.
   */
  volumeType?: VolumeType
  /**
   * This will create a new Database Instance with same specifications as the
   * current one and perform a Database Engine upgrade. One-of
   * ('upgradeTarget'): at most one of 'nodeType', 'enableHa', 'volumeSize',
   * 'volumeType', 'upgradableVersionId' could be set.
   */
  upgradableVersionId?: string
}
