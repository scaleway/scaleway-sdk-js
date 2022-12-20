// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region, TimeSeries, Zone } from '../../../bridge'

export type ACLRuleAction = 'allow' | 'deny'

export type ACLRuleDirection = 'inbound' | 'outbound'

export type ACLRuleProtocol = 'tcp' | 'udp' | 'icmp'

export type DatabaseBackupStatus =
  | 'unknown'
  | 'creating'
  | 'ready'
  | 'restoring'
  | 'deleting'
  | 'error'
  | 'exporting'
  | 'locked'

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

export type ListDatabaseBackupsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'

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

export type NodeTypeStock =
  | 'unknown'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type Permission = 'readonly' | 'readwrite' | 'all' | 'custom' | 'none'

/** Read replica. status */
export type ReadReplicaStatus =
  | 'unknown'
  | 'provisioning'
  | 'initializing'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'configuring'

export type SnapshotStatus =
  | 'unknown'
  | 'creating'
  | 'ready'
  | 'restoring'
  | 'deleting'
  | 'error'
  | 'locked'

export type VolumeType = 'lssd' | 'bssd'

export interface ACLRule {
  ip: string
  port: number
  protocol: ACLRuleProtocol
  direction: ACLRuleDirection
  action: ACLRuleAction
  description: string
}

export interface ACLRuleRequest {
  ip: string
  description: string
}

/** Add instance acl rules response */
export interface AddInstanceACLRulesResponse {
  /** Rules enabled on the instance */
  rules: Array<ACLRule>
}

/** Add instance settings response */
export interface AddInstanceSettingsResponse {
  /** Settings available on the instance */
  settings: Array<InstanceSetting>
}

export interface BackupSchedule {
  frequency: number
  retention: number
  disabled: boolean
}

/** Database */
export interface Database {
  /** Name of the database */
  name: string
  /** Name of the owner of the database */
  owner: string
  /** Whether or not the database is managed or not */
  managed: boolean
  /** Size of the database */
  size: number
}

/** Database backup */
export interface DatabaseBackup {
  /** UUID of the database backup */
  id: string
  /** UUID of the instance */
  instanceId: string
  /** Name of the database of this backup */
  databaseName: string
  /** Name of the backup */
  name: string
  /** Status of the backup */
  status: DatabaseBackupStatus
  /** Size of the database backup */
  size?: number
  /** Expiration date (Format ISO 8601) */
  expiresAt?: Date
  /** Creation date (Format ISO 8601) */
  createdAt?: Date
  /** Updated date (Format ISO 8601) */
  updatedAt?: Date
  /** Name of the instance of the backup */
  instanceName: string
  /** URL you can download the backup from */
  downloadUrl?: string
  /** Expiration date of the download link */
  downloadUrlExpiresAt?: Date
  /** Region of this database backup */
  region: Region
  /** Store logical backups in the same region as the source database instance */
  sameRegion: boolean
}

/** Database engine */
export interface DatabaseEngine {
  /** Engine name */
  name: string
  /** Engine logo URL */
  logoUrl: string
  /** Available versions */
  versions: Array<EngineVersion>
  /** Region of this database engine */
  region: Region
}

/** Delete instance acl rules response */
export interface DeleteInstanceACLRulesResponse {
  /** ACL rules present on the instance */
  rules: Array<ACLRule>
}

/** Delete instance settings response */
export interface DeleteInstanceSettingsResponse {
  /** Settings names to delete from the instance */
  settings: Array<InstanceSetting>
}

/** Endpoint */
export interface Endpoint {
  /** UUID of the endpoint */
  id: string
  /**
   * IPv4 address of the endpoint.
   *
   * One-of ('address'): at most one of 'ip', 'hostname' could be set.
   */
  ip?: string
  /** TCP port of the endpoint */
  port: number
  /** Name of the endpoint */
  name?: string
  /**
   * Private network details. One at the most per RDB instance or read replica
   * (an RDB instance and its read replica can have different private networks).
   * Cannot be updated (has to be deleted and recreated).
   *
   * One-of ('details'): at most one of 'privateNetwork', 'loadBalancer',
   * 'directAccess' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails
  /**
   * Load balancer details. Public endpoint for RDB instances which is
   * systematically present. One per RDB instance.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'loadBalancer',
   * 'directAccess' could be set.
   */
  loadBalancer?: EndpointLoadBalancerDetails
  /**
   * Direct access details. Public endpoint reserved for read replicas. One per
   * read replica.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'loadBalancer',
   * 'directAccess' could be set.
   */
  directAccess?: EndpointDirectAccessDetails
  /**
   * Hostname of the endpoint.
   *
   * One-of ('address'): at most one of 'ip', 'hostname' could be set.
   */
  hostname?: string
}

export interface EndpointDirectAccessDetails {}

export interface EndpointLoadBalancerDetails {}

/** Endpoint. private network details */
export interface EndpointPrivateNetworkDetails {
  /** UUID of the private network */
  privateNetworkId: string
  /** CIDR notation of the endpoint IPv4 address */
  serviceIp: string
  /** Private network zone */
  zone: Zone
}

/** Endpoint spec */
export interface EndpointSpec {
  /**
   * Load balancer endpoint specifications. Public endpoint for RDB instances
   * which is systematically present. One per RDB instance.
   *
   * One-of ('spec'): at most one of 'loadBalancer', 'privateNetwork' could be
   * set.
   */
  loadBalancer?: EndpointSpecLoadBalancer
  /**
   * Private network endpoint specifications. One at the most per RDB instance
   * or read replica (an RDB instance and its read replica can have different
   * private networks). Cannot be updated (has to be deleted and recreated).
   *
   * One-of ('spec'): at most one of 'loadBalancer', 'privateNetwork' could be
   * set.
   */
  privateNetwork?: EndpointSpecPrivateNetwork
}

export interface EndpointSpecLoadBalancer {}

/** Endpoint spec. private network */
export interface EndpointSpecPrivateNetwork {
  /** UUID of the private network to be connected to the database instance */
  privateNetworkId: string
  /**
   * Endpoint IPv4 adress with a CIDR notation. Check documentation about IP and
   * subnet limitation.
   */
  serviceIp: string
}

/** Engine setting */
export interface EngineSetting {
  /** Setting name from database engine */
  name: string
  /** Value set when not specified */
  defaultValue: string
  /** Setting can be applied without restarting */
  hotConfigurable: boolean
  /** Setting description */
  description: string
  /** Setting type */
  propertyType: EngineSettingPropertyType
  /** Setting base unit */
  unit?: string
  /** Validation regex for string type settings */
  stringConstraint?: string
  /** Minimum value for int types */
  intMin?: number
  /** Maximum value for int types */
  intMax?: number
  /** Minimum value for float types */
  floatMin?: number
  /** Maximum value for float types */
  floatMax?: number
}

/** Engine version */
export interface EngineVersion {
  /** Database engine version */
  version: string
  /** Database engine name */
  name: string
  /** End of life date */
  endOfLife?: Date
  /** Engine settings available to be set */
  availableSettings: Array<EngineSetting>
  /** Disabled versions cannot be created */
  disabled: boolean
  /** Beta status of engine version */
  beta: boolean
  /** Engine settings available to be set at database initialisation */
  availableInitSettings: Array<EngineSetting>
}

/** Instance */
export interface Instance {
  /** Creation date (Format ISO 8601) */
  createdAt?: Date
  /** Volumes of the instance */
  volume?: Volume
  /** Region the instance is in */
  region: Region
  /** UUID of the instance */
  id: string
  /** Name of the instance */
  name: string
  /** Organization ID the instance belongs to */
  organizationId: string
  /** Project ID the instance belongs to */
  projectId: string
  /** Status of the instance */
  status: InstanceStatus
  /** Database engine of the database (PostgreSQL, MySQL, ...) */
  engine: string
  /** Available database engine versions for upgrade */
  upgradableVersion: Array<UpgradableVersion>
  /** @deprecated Endpoint of the instance */
  endpoint?: Endpoint
  /** List of tags applied to the instance */
  tags: Array<string>
  /** Advanced settings of the instance */
  settings: Array<InstanceSetting>
  /** Backup schedule of the instance */
  backupSchedule?: BackupSchedule
  /** Whether or not High-Availability is enabled */
  isHaCluster: boolean
  /** Read replicas of the instance */
  readReplicas: Array<ReadReplica>
  /** Node type of the instance */
  nodeType: string
  /** List of engine settings to be set at database initialisation */
  initSettings: Array<InstanceSetting>
  /** List of instance endpoints */
  endpoints: Array<Endpoint>
  /** Logs policy of the instance */
  logsPolicy?: LogsPolicy
  /** Store logical backups in the same region as the database instance */
  backupSameRegion: boolean
  /** List of instance maintenances */
  maintenances: Array<Maintenance>
}

/** Instance log */
export interface InstanceLog {
  /** Presigned S3 URL to download your log file */
  downloadUrl?: string
  /** UUID of the instance log */
  id: string
  /** Status of the logs in a given instance */
  status: InstanceLogStatus
  /** Name of the undelying node */
  nodeName: string
  /** Expiration date (Format ISO 8601) */
  expiresAt?: Date
  /** Creation date (Format ISO 8601) */
  createdAt?: Date
  /** Region the instance is in */
  region: Region
}

/** Instance metrics */
export interface InstanceMetrics {
  /** Time series of metrics of a given instance */
  timeseries: Array<TimeSeries>
}

export interface InstanceSetting {
  name: string
  value: string
}

/** List database backups response */
export interface ListDatabaseBackupsResponse {
  /** List of database backups */
  databaseBackups: Array<DatabaseBackup>
  /** Total count of database backups available */
  totalCount: number
}

/** List database engines response */
export interface ListDatabaseEnginesResponse {
  /** List of the available database engines */
  engines: Array<DatabaseEngine>
  /** Total count of database engines available */
  totalCount: number
}

/** List databases response */
export interface ListDatabasesResponse {
  /** List of the databases */
  databases: Array<Database>
  /** Total count of databases present on a given instance */
  totalCount: number
}

/** List instance acl rules response */
export interface ListInstanceACLRulesResponse {
  /** List of the ACL rules present on a given instance */
  rules: Array<ACLRule>
  /** Total count of ACL rules present on a given instance */
  totalCount: number
}

/** List instance logs details response */
export interface ListInstanceLogsDetailsResponse {
  /** Remote instance logs details */
  details: Array<ListInstanceLogsDetailsResponseInstanceLogDetail>
}

export interface ListInstanceLogsDetailsResponseInstanceLogDetail {
  logName: string
  size: number
}

/** List instance logs response */
export interface ListInstanceLogsResponse {
  /** Available logs in a given instance */
  instanceLogs: Array<InstanceLog>
}

/** List instances response */
export interface ListInstancesResponse {
  /** List all instances available in a given organization/project */
  instances: Array<Instance>
  /** Total count of instances available in a given organization/project */
  totalCount: number
}

/** List node types response */
export interface ListNodeTypesResponse {
  /** Types of the node */
  nodeTypes: Array<NodeType>
  /** Total count of node-types available */
  totalCount: number
}

/** List privileges response */
export interface ListPrivilegesResponse {
  /** Privileges of a given user in a given database in a given instance */
  privileges: Array<Privilege>
  /** Total count of privileges present on a given database */
  totalCount: number
}

/** List snapshots response */
export interface ListSnapshotsResponse {
  /** List of snapshots */
  snapshots: Array<Snapshot>
  /** Total count of snapshots available */
  totalCount: number
}

/** List users response */
export interface ListUsersResponse {
  /** List of users in a given instance */
  users: Array<User>
  /** Total count of users present on a given instance */
  totalCount: number
}

/** Logs policy */
export interface LogsPolicy {
  /** Max age (in day) of remote logs to keep on the database instance */
  maxAgeRetention?: number
  /** Max disk size of remote logs to keep on the database instance */
  totalDiskRetention?: number
}

/** Maintenance */
export interface Maintenance {
  /** Start date of the maintenance window */
  startsAt?: Date
  /** End date of the maintenance window */
  stopsAt?: Date
  /** Closed maintenance date */
  closedAt?: Date
  /** Maintenance information message */
  reason: string
  /** Status of the maintenance */
  status: MaintenanceStatus
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
  /** @deprecated {undefined} Deprecated Node Type volume constraints */
  volumeConstraint?: NodeTypeVolumeConstraintSizes
  /** @deprecated The Node Type is compliant with Block Storage */
  isBssdCompatible?: boolean
  /** The Node Type is currently disabled */
  disabled: boolean
  /** The Node Type is currently in beta */
  beta: boolean
  /** Available storage options for the Node Type */
  availableVolumeTypes: Array<NodeTypeVolumeType>
  /** The Node Type can be used only with high availability option */
  isHaRequired: boolean
  /** Region the Node Type is in */
  region: Region
}

/** Node type. volume constraint sizes */
export interface NodeTypeVolumeConstraintSizes {
  /** [deprecated] Mimimum size required for the Volume */
  minSize: number
  /** [deprecated] Maximum size required for the Volume */
  maxSize: number
}

/** Node type. volume type */
export interface NodeTypeVolumeType {
  /** Volume Type */
  type: VolumeType
  /** The description of the Volume */
  description: string
  /** Mimimum size required for the Volume */
  minSize: number
  /** Maximum size required for the Volume */
  maxSize: number
  /** Minimum increment level for a Block Storage volume size */
  chunkSize: number
}

/** Prepare instance logs response */
export interface PrepareInstanceLogsResponse {
  /** Instance logs for a given instance between a start and an end date */
  instanceLogs: Array<InstanceLog>
}

/** Privilege */
export interface Privilege {
  /** Permission (Read, Read/Write, All, Custom) */
  permission: Permission
  /** Name of the database */
  databaseName: string
  /** Name of the user */
  userName: string
}

/** Read replica */
export interface ReadReplica {
  /** UUID of the read replica */
  id: string
  /** Display read replica connection information */
  endpoints: Array<Endpoint>
  /** Read replica status */
  status: ReadReplicaStatus
  /** Region the read replica is in */
  region: Region
}

/** Read replica endpoint spec */
export interface ReadReplicaEndpointSpec {
  /**
   * Direct access endpoint specifications. Public endpoint reserved for read
   * replicas. One per read replica.
   *
   * One-of ('spec'): at most one of 'directAccess', 'privateNetwork' could be
   * set.
   */
  directAccess?: ReadReplicaEndpointSpecDirectAccess
  /**
   * Private network endpoint specifications. One at the most per read replica.
   * Cannot be updated (has to be deleted and recreated).
   *
   * One-of ('spec'): at most one of 'directAccess', 'privateNetwork' could be
   * set.
   */
  privateNetwork?: ReadReplicaEndpointSpecPrivateNetwork
}

export interface ReadReplicaEndpointSpecDirectAccess {}

/** Read replica endpoint spec. private network */
export interface ReadReplicaEndpointSpecPrivateNetwork {
  /** UUID of the private network to be connected to the read replica */
  privateNetworkId: string
  /**
   * Endpoint IPv4 adress with a CIDR notation. Check documentation about IP and
   * subnet limitations.
   */
  serviceIp: string
}

/** Set instance acl rules response */
export interface SetInstanceACLRulesResponse {
  /** ACLs rules configured for an instance */
  rules: Array<ACLRule>
}

/** Set instance settings response */
export interface SetInstanceSettingsResponse {
  /** Settings configured for a given instance */
  settings: Array<InstanceSetting>
}

/** Snapshot */
export interface Snapshot {
  /** UUID of the snapshot */
  id: string
  /** UUID of the instance */
  instanceId: string
  /** Name of the snapshot */
  name: string
  /** Status of the snapshot */
  status: SnapshotStatus
  /** Size of the snapshot */
  size?: number
  /** Expiration date (Format ISO 8601) */
  expiresAt?: Date
  /** Creation date (Format ISO 8601) */
  createdAt?: Date
  /** Updated date (Format ISO 8601) */
  updatedAt?: Date
  /** Name of the instance of the snapshot */
  instanceName: string
  /** Source node type */
  nodeType: string
  /** Region of this snapshot */
  region: Region
}

export interface UpgradableVersion {
  id: string
  name: string
  version: string
  minorVersion: string
}

/** User */
export interface User {
  /**
   * Name of the user (Length must be between 1 and 63 characters, First
   * character must be an alphabet character (a-zA-Z), Your Username cannot
   * start with '_rdb', Only a-zA-Z0-9_$- characters are accepted)
   */
  name: string
  /**
   * Whether or not a user got administrative privileges on the database
   * instance
   */
  isAdmin: boolean
}

export interface Volume {
  type: VolumeType
  size: number
}

export type ListDatabaseEnginesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Name of the Database Engine */
  name?: string
  /** Version of the Database Engine */
  version?: string
  page?: number
  pageSize?: number
}

export type ListNodeTypesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Whether or not to include disabled types */
  includeDisabledTypes: boolean
  page?: number
  pageSize?: number
}

export type ListDatabaseBackupsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Name of the database backups */
  name?: string
  /** Criteria to use when ordering database backups listing */
  orderBy?: ListDatabaseBackupsRequestOrderBy
  /** UUID of the instance */
  instanceId?: string
  /** Organization ID the database backups belongs to */
  organizationId?: string
  /** Project ID the database backups belongs to */
  projectId?: string
  page?: number
  pageSize?: number
}

export type CreateDatabaseBackupRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
  /** Name of the database you want to make a backup of */
  databaseName: string
  /** Name of the backup */
  name?: string
  /** Expiration date (Format ISO 8601) */
  expiresAt?: Date
}

export type GetDatabaseBackupRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the database backup */
  databaseBackupId: string
}

export type UpdateDatabaseBackupRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the database backup to update */
  databaseBackupId: string
  /** Name of the Database Backup */
  name?: string
  /** Expiration date (Format ISO 8601) */
  expiresAt?: Date
}

export type DeleteDatabaseBackupRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the database backup to delete */
  databaseBackupId: string
}

export type RestoreDatabaseBackupRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Backup of a logical database */
  databaseBackupId: string
  /**
   * Defines the destination database in order to restore into a specified
   * database, the default destination is set to the origin database of the
   * backup
   */
  databaseName?: string
  /** Defines the rdb instance where the backup has to be restored */
  instanceId: string
}

export type ExportDatabaseBackupRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the database backup you want to export */
  databaseBackupId: string
}

export type UpgradeInstanceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want to upgrade */
  instanceId: string
  /**
   * Node type of the instance you want to upgrade to.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeType', 'enableHa',
   * 'volumeSize', 'volumeType', 'upgradableVersionId' could be set.
   */
  nodeType?: string
  /**
   * Set to true to enable high availability on your instance.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeType', 'enableHa',
   * 'volumeSize', 'volumeType', 'upgradableVersionId' could be set.
   */
  enableHa?: boolean
  /**
   * Increase your block storage volume size.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeType', 'enableHa',
   * 'volumeSize', 'volumeType', 'upgradableVersionId' could be set.
   */
  volumeSize?: number
  /**
   * Change your instance storage type.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeType', 'enableHa',
   * 'volumeSize', 'volumeType', 'upgradableVersionId' could be set.
   */
  volumeType?: VolumeType
  /**
   * This will create a new Database Instance with same instance specification
   * as the current one and perform a Database Engine upgrade.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeType', 'enableHa',
   * 'volumeSize', 'volumeType', 'upgradableVersionId' could be set.
   */
  upgradableVersionId?: string
}

export type ListInstancesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** List instance that have a given tags */
  tags?: Array<string>
  /** List instance that match a given name pattern */
  name?: string
  /** Criteria to use when ordering instance listing */
  orderBy?: ListInstancesRequestOrderBy
  /** Please use `project_id` instead */
  organizationId?: string
  /** Project ID to list the instance of */
  projectId?: string
  page?: number
  pageSize?: number
}

export type GetInstanceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
}

export type CreateInstanceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /**
   * @deprecated Please use `project_id` instead.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * The project ID on which to create the instance.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** Name of the instance */
  name?: string
  /** Database engine of the database (PostgreSQL, MySQL, ...) */
  engine: string
  /** Name of the user created when the instance is created */
  userName: string
  /** Password of the user */
  password: string
  /** Type of node to use for the instance */
  nodeType: string
  /** Whether or not High-Availability is enabled */
  isHaCluster: boolean
  /** Whether or not backups are disabled */
  disableBackup: boolean
  /** Tags to apply to the instance */
  tags?: Array<string>
  /** List of engine settings to be set at database initialisation */
  initSettings?: Array<InstanceSetting>
  /** Type of volume where data are stored (lssd, bssd, ...) */
  volumeType: VolumeType
  /** Volume size when volume_type is not lssd */
  volumeSize: number
  /**
   * One or multiple EndpointSpec used to expose your database instance. A
   * load_balancer public endpoint is systematically created
   */
  initEndpoints?: Array<EndpointSpec>
  /** Store logical backups in the same region as the database instance */
  backupSameRegion: boolean
}

export type UpdateInstanceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance to update */
  instanceId: string
  /** In hours */
  backupScheduleFrequency?: number
  /** In days */
  backupScheduleRetention?: number
  /** Whether or not the backup schedule is disabled */
  isBackupScheduleDisabled?: boolean
  /** Name of the instance */
  name?: string
  /** Tags of a given instance */
  tags?: Array<string>
  /** Logs policy of the instance */
  logsPolicy?: LogsPolicy
  /** Store logical backups in the same region as the database instance */
  backupSameRegion?: boolean
}

export type DeleteInstanceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance to delete */
  instanceId: string
}

export type CloneInstanceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want to clone */
  instanceId: string
  /** Name of the clone instance */
  name: string
  /** Node type of the clone */
  nodeType?: string
}

export type RestartInstanceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want to restart */
  instanceId: string
}

export type GetInstanceCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
}

export type RenewInstanceCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want logs of */
  instanceId: string
}

export type GetInstanceMetricsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
  /** Start date to gather metrics from */
  startDate?: Date
  /** End date to gather metrics from */
  endDate?: Date
  /** Name of the metric to gather */
  metricName?: string
}

export type CreateReadReplicaRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want a read replica of */
  instanceId: string
  /** Specification of the endpoint you want to create */
  endpointSpec?: Array<ReadReplicaEndpointSpec>
}

export type GetReadReplicaRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the read replica */
  readReplicaId: string
}

export type DeleteReadReplicaRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the read replica */
  readReplicaId: string
}

export type ResetReadReplicaRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the read replica */
  readReplicaId: string
}

export type CreateReadReplicaEndpointRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the read replica */
  readReplicaId: string
  /** Specification of the endpoint you want to create */
  endpointSpec: Array<ReadReplicaEndpointSpec>
}

export type PrepareInstanceLogsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want logs of */
  instanceId: string
  /**
   * Start datetime of your log. Format:
   * `{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z`
   */
  startDate?: Date
  /**
   * End datetime of your log. Format:
   * `{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z`
   */
  endDate?: Date
}

export type ListInstanceLogsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want logs of */
  instanceId: string
  /** Criteria to use when ordering instance logs listing */
  orderBy: ListInstanceLogsRequestOrderBy
}

export type GetInstanceLogRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance_log you want */
  instanceLogId: string
}

export type PurgeInstanceLogsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want logs of */
  instanceId: string
  /** Specific log name to purge */
  logName?: string
}

export type ListInstanceLogsDetailsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want logs of */
  instanceId: string
}

export type AddInstanceSettingsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want to add settings to */
  instanceId: string
  /** Settings to add on the instance */
  settings: Array<InstanceSetting>
}

export type DeleteInstanceSettingsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance to delete settings from */
  instanceId: string
  /** Settings names to delete */
  settingNames: Array<string>
}

export type SetInstanceSettingsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance where the settings has to be set */
  instanceId: string
  /** Settings to define for the instance */
  settings: Array<InstanceSetting>
}

export type ListInstanceACLRulesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
  page?: number
  pageSize?: number
}

export type AddInstanceACLRulesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want to add acl rules to */
  instanceId: string
  /** ACLs rules to add to the instance */
  rules: Array<ACLRuleRequest>
}

export type SetInstanceACLRulesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance where the ACL rules has to be set */
  instanceId: string
  /** ACL rules to define for the instance */
  rules: Array<ACLRuleRequest>
}

export type DeleteInstanceACLRulesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want to delete an ACL rules from */
  instanceId: string
  /** ACL rules IP present on the instance */
  aclRuleIps: Array<string>
}

export type ListUsersRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
  /** Name of the user */
  name?: string
  /** Criteria to use when ordering users listing */
  orderBy?: ListUsersRequestOrderBy
  page?: number
  pageSize?: number
}

export type CreateUserRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want to create a user in */
  instanceId: string
  /** Name of the user you want to create */
  name: string
  /** Password of the user you want to create */
  password: string
  /** Whether the user you want to create will have administrative privileges */
  isAdmin: boolean
}

export type UpdateUserRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance the user belongs to */
  instanceId: string
  /** Name of the database user */
  name: string
  /** Password of the database user */
  password?: string
  /** Whether or not this user got administrative privileges */
  isAdmin?: boolean
}

export type DeleteUserRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance to delete a user from */
  instanceId: string
  /** Name of the user */
  name: string
}

export type ListDatabasesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance to list database of */
  instanceId: string
  /** Name of the database */
  name?: string
  /** Whether or not the database is managed */
  managed?: boolean
  /** User that owns this database */
  owner?: string
  /** Criteria to use when ordering database listing */
  orderBy?: ListDatabasesRequestOrderBy
  page?: number
  pageSize?: number
}

export type CreateDatabaseRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance where to create the database */
  instanceId: string
  /** Name of the database */
  name: string
}

export type DeleteDatabaseRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance where to delete the database */
  instanceId: string
  /** Name of the database to delete */
  name: string
}

export type ListPrivilegesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
  /** Criteria to use when ordering privileges listing */
  orderBy?: ListPrivilegesRequestOrderBy
  page?: number
  pageSize?: number
  /** Name of the database */
  databaseName?: string
  /** Name of the user */
  userName?: string
}

export type SetPrivilegeRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
  /** Name of the database */
  databaseName: string
  /** Name of the user */
  userName: string
  /** Permission to set (Read, Read/Write, All, Custom) */
  permission: Permission
}

export type ListSnapshotsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Name of the snapshot */
  name?: string
  /** Criteria to use when ordering snapshot listing */
  orderBy?: ListSnapshotsRequestOrderBy
  /** UUID of the instance */
  instanceId?: string
  /** Organization ID the snapshots belongs to */
  organizationId?: string
  /** Project ID the snapshots belongs to */
  projectId?: string
  page?: number
  pageSize?: number
}

export type GetSnapshotRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the snapshot */
  snapshotId: string
}

export type CreateSnapshotRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance */
  instanceId: string
  /** Name of the snapshot */
  name?: string
  /** Expiration date (Format ISO 8601) */
  expiresAt?: Date
}

export type UpdateSnapshotRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the snapshot to update */
  snapshotId: string
  /** Name of the snapshot */
  name?: string
  /** Expiration date (Format ISO 8601) */
  expiresAt?: Date
}

export type DeleteSnapshotRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the snapshot to delete */
  snapshotId: string
}

export type CreateInstanceFromSnapshotRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Block snapshot of the instance */
  snapshotId: string
  /** Name of the instance created with the snapshot */
  instanceName: string
  /** Whether or not High-Availability is enabled on the new instance */
  isHaCluster?: boolean
  /** The node type used to restore the snapshot */
  nodeType?: string
}

export type CreateEndpointRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the instance you want to add endpoint to */
  instanceId: string
  /** Specification of the endpoint you want to create */
  endpointSpec?: EndpointSpec
}

export type DeleteEndpointRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** This endpoint can also be used to delete a read replica endpoint. */
  endpointId: string
}

export type GetEndpointRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** UUID of the endpoint you want to get */
  endpointId: string
}
