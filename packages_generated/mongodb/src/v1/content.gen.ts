// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  InstanceStatus,
  MaintenanceStatus,
  SnapshotStatus,
} from './types.gen.js'

/** Lists transient statutes of the enum {@link InstanceStatus}. */
export const INSTANCE_TRANSIENT_STATUSES: InstanceStatus[] = [
  'provisioning',
  'configuring',
  'deleting',
  'initializing',
  'snapshotting',
]

/** Lists transient statutes of the enum {@link MaintenanceStatus}. */
export const MAINTENANCE_TRANSIENT_STATUSES: MaintenanceStatus[] = ['ongoing']

/** Lists transient statutes of the enum {@link SnapshotStatus}. */
export const SNAPSHOT_TRANSIENT_STATUSES: SnapshotStatus[] = [
  'creating',
  'restoring',
  'deleting',
]
