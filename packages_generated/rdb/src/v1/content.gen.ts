// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
	DatabaseBackupStatus,
	InstanceLogStatus,
	InstanceStatus,
	MaintenanceStatus,
	ReadReplicaStatus,
	SnapshotStatus,
} from './types.gen.js'

/** Lists transient statutes of the enum {@link DatabaseBackupStatus}. */
export const DATABASE_BACKUP_TRANSIENT_STATUSES: DatabaseBackupStatus[] = [
	'creating',
	'restoring',
	'deleting',
	'exporting',
]

/** Lists transient statutes of the enum {@link InstanceLogStatus}. */
export const INSTANCE_LOG_TRANSIENT_STATUSES: InstanceLogStatus[] = ['creating']

/** Lists transient statutes of the enum {@link InstanceStatus}. */
export const INSTANCE_TRANSIENT_STATUSES: InstanceStatus[] = [
	'provisioning',
	'configuring',
	'deleting',
	'autohealing',
	'initializing',
	'backuping',
	'snapshotting',
	'restarting',
]

/** Lists transient statutes of the enum {@link MaintenanceStatus}. */
export const MAINTENANCE_TRANSIENT_STATUSES: MaintenanceStatus[] = ['ongoing']

/** Lists transient statutes of the enum {@link ReadReplicaStatus}. */
export const READ_REPLICA_TRANSIENT_STATUSES: ReadReplicaStatus[] = [
	'provisioning',
	'initializing',
	'deleting',
	'configuring',
	'promoting',
]

/** Lists transient statutes of the enum {@link SnapshotStatus}. */
export const SNAPSHOT_TRANSIENT_STATUSES: SnapshotStatus[] = [
	'creating',
	'restoring',
	'deleting',
]
