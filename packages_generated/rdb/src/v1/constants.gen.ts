// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ACLRuleAction,
  ACLRuleDirection,
  ACLRuleProtocol,
  DatabaseBackupStatus,
  EndpointPrivateNetworkDetailsProvisioningMode,
  EngineSettingPropertyType,
  HighAvailabilityMode,
  InstanceLogStatus,
  InstanceStatus,
  ListDatabaseBackupsRequestOrderBy,
  ListDatabasesRequestOrderBy,
  ListInstanceLogsRequestOrderBy,
  ListInstancesRequestOrderBy,
  ListPrivilegesRequestOrderBy,
  ListSnapshotsRequestOrderBy,
  ListUsersRequestOrderBy,
  MaintenanceStatus,
  NodeTypeGeneration,
  NodeTypeStock,
  Permission,
  ReadReplicaStatus,
  SnapshotStatus,
  StorageClass,
  VolumeType,
} from './types.gen.js'


/** Lists all values of the enum {@link ACLRuleAction}. */
export const ACL_RULE_ACTIONS: ACLRuleAction[] = [
  'allow',
  'deny',
]

/** Lists all values of the enum {@link ACLRuleDirection}. */
export const ACL_RULE_DIRECTIONS: ACLRuleDirection[] = [
  'inbound',
  'outbound',
]

/** Lists all values of the enum {@link ACLRuleProtocol}. */
export const ACL_RULE_PROTOCOLS: ACLRuleProtocol[] = [
  'tcp',
  'udp',
  'icmp',
]

/** Lists all values of the enum {@link DatabaseBackupStatus}. */
export const DATABASE_BACKUP_STATUSES: DatabaseBackupStatus[] = [
  'unknown',
  'creating',
  'ready',
  'restoring',
  'deleting',
  'error',
  'exporting',
  'locked',
]

/** Lists all values of the enum {@link EndpointPrivateNetworkDetailsProvisioningMode}. */
export const ENDPOINT_PRIVATE_NETWORK_DETAILS_PROVISIONING_MODES: EndpointPrivateNetworkDetailsProvisioningMode[] = [
  'static',
  'ipam',
]

/** Lists all values of the enum {@link EngineSettingPropertyType}. */
export const ENGINE_SETTING_PROPERTY_TYPES: EngineSettingPropertyType[] = [
  'BOOLEAN',
  'INT',
  'STRING',
  'FLOAT',
]

/** Lists all values of the enum {@link HighAvailabilityMode}. */
export const HIGH_AVAILABILITY_MODES: HighAvailabilityMode[] = [
  'unknown_high_availability_mode',
  'disabled',
  'single_zone',
  'multiple_zone',
]

/** Lists all values of the enum {@link InstanceLogStatus}. */
export const INSTANCE_LOG_STATUSES: InstanceLogStatus[] = [
  'unknown',
  'ready',
  'creating',
  'error',
]

/** Lists all values of the enum {@link InstanceStatus}. */
export const INSTANCE_STATUSES: InstanceStatus[] = [
  'unknown',
  'ready',
  'provisioning',
  'configuring',
  'deleting',
  'error',
  'autohealing',
  'locked',
  'initializing',
  'disk_full',
  'backuping',
  'snapshotting',
  'restarting',
]

/** Lists all values of the enum {@link ListDatabaseBackupsRequestOrderBy}. */
export const LIST_DATABASE_BACKUPS_REQUEST_ORDER_BIES: ListDatabaseBackupsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListDatabasesRequestOrderBy}. */
export const LIST_DATABASES_REQUEST_ORDER_BIES: ListDatabasesRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'size_asc',
  'size_desc',
]

/** Lists all values of the enum {@link ListInstanceLogsRequestOrderBy}. */
export const LIST_INSTANCE_LOGS_REQUEST_ORDER_BIES: ListInstanceLogsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListInstancesRequestOrderBy}. */
export const LIST_INSTANCES_REQUEST_ORDER_BIES: ListInstancesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'region',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListPrivilegesRequestOrderBy}. */
export const LIST_PRIVILEGES_REQUEST_ORDER_BIES: ListPrivilegesRequestOrderBy[] = [
  'user_name_asc',
  'user_name_desc',
  'database_name_asc',
  'database_name_desc',
]

/** Lists all values of the enum {@link ListSnapshotsRequestOrderBy}. */
export const LIST_SNAPSHOTS_REQUEST_ORDER_BIES: ListSnapshotsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'expires_at_asc',
  'expires_at_desc',
]

/** Lists all values of the enum {@link ListUsersRequestOrderBy}. */
export const LIST_USERS_REQUEST_ORDER_BIES: ListUsersRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'is_admin_asc',
  'is_admin_desc',
]

/** Lists all values of the enum {@link MaintenanceStatus}. */
export const MAINTENANCE_STATUSES: MaintenanceStatus[] = [
  'unknown',
  'pending',
  'done',
  'canceled',
  'ongoing',
]

/** Lists all values of the enum {@link NodeTypeGeneration}. */
export const NODE_TYPE_GENERATIONS: NodeTypeGeneration[] = [
  'unknown_generation',
  'generation_v1',
  'generation_v2',
  'generation_v3',
]

/** Lists all values of the enum {@link NodeTypeStock}. */
export const NODE_TYPE_STOCKS: NodeTypeStock[] = [
  'unknown',
  'low_stock',
  'out_of_stock',
  'available',
]

/** Lists all values of the enum {@link Permission}. */
export const PERMISSIONS: Permission[] = [
  'readonly',
  'readwrite',
  'all',
  'custom',
  'none',
]

/** Lists all values of the enum {@link ReadReplicaStatus}. */
export const READ_REPLICA_STATUSES: ReadReplicaStatus[] = [
  'unknown',
  'provisioning',
  'initializing',
  'ready',
  'deleting',
  'error',
  'locked',
  'configuring',
  'promoting',
]

/** Lists all values of the enum {@link SnapshotStatus}. */
export const SNAPSHOT_STATUSES: SnapshotStatus[] = [
  'unknown',
  'creating',
  'ready',
  'restoring',
  'deleting',
  'error',
  'locked',
]

/** Lists all values of the enum {@link StorageClass}. */
export const STORAGE_CLASSES: StorageClass[] = [
  'unknown_storage_class',
  'lssd',
  'bssd',
  'sbs',
]

/** Lists all values of the enum {@link VolumeType}. */
export const VOLUME_TYPES: VolumeType[] = [
  'lssd',
  'bssd',
  'sbs_5k',
  'sbs_15k',
]

