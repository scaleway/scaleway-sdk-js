// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  InstanceStatus,
  ListInstancesRequestOrderBy,
  ListSnapshotsRequestOrderBy,
  ListUsersRequestOrderBy,
  NodeTypeStock,
  SettingPropertyType,
  SnapshotStatus,
  UserRoleRole,
  VolumeType,
} from './types.gen.js'


/** Lists all values of the enum {@link InstanceStatus}. */
export const INSTANCE_STATUSES: InstanceStatus[] = [
  'unknown_status',
  'ready',
  'provisioning',
  'configuring',
  'deleting',
  'error',
  'initializing',
  'locked',
  'snapshotting',
]

/** Lists all values of the enum {@link ListInstancesRequestOrderBy}. */
export const LIST_INSTANCES_REQUEST_ORDER_BIES: ListInstancesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
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
]

/** Lists all values of the enum {@link NodeTypeStock}. */
export const NODE_TYPE_STOCKS: NodeTypeStock[] = [
  'unknown_stock',
  'low_stock',
  'out_of_stock',
  'available',
]

/** Lists all values of the enum {@link SettingPropertyType}. */
export const SETTING_PROPERTY_TYPES: SettingPropertyType[] = [
  'BOOLEAN',
  'INT',
  'STRING',
  'FLOAT',
]

/** Lists all values of the enum {@link SnapshotStatus}. */
export const SNAPSHOT_STATUSES: SnapshotStatus[] = [
  'unknown_status',
  'creating',
  'ready',
  'restoring',
  'deleting',
  'error',
  'locked',
]

/** Lists all values of the enum {@link UserRoleRole}. */
export const USER_ROLE_ROLES: UserRoleRole[] = [
  'unknown_role',
  'read',
  'read_write',
  'db_admin',
  'sync',
]

/** Lists all values of the enum {@link VolumeType}. */
export const VOLUME_TYPES: VolumeType[] = [
  'unknown_type',
  'sbs_5k',
  'sbs_15k',
]

