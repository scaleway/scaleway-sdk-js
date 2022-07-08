// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ImageState,
  PrivateNICState,
  SecurityGroupState,
  ServerState,
  SnapshotState,
  TaskStatus,
  VolumeServerState,
  VolumeState,
} from './types.gen'

/** Lists transient statutes of the enum {@link ImageState}. */
export const IMAGE_TRANSIENT_STATUSES: ImageState[] = ['creating']

/** Lists transient statutes of the enum {@link PrivateNICState}. */
export const PRIVATE_NIC_TRANSIENT_STATUSES: PrivateNICState[] = ['syncing']

/** Lists transient statutes of the enum {@link SecurityGroupState}. */
export const SECURITY_GROUP_TRANSIENT_STATUSES: SecurityGroupState[] = [
  'syncing',
]

/** Lists transient statutes of the enum {@link ServerState}. */
export const SERVER_TRANSIENT_STATUSES: ServerState[] = ['starting', 'stopping']

/** Lists transient statutes of the enum {@link SnapshotState}. */
export const SNAPSHOT_TRANSIENT_STATUSES: SnapshotState[] = ['snapshotting']

/** Lists transient statutes of the enum {@link TaskStatus}. */
export const TASK_TRANSIENT_STATUSES: TaskStatus[] = [
  'pending',
  'started',
  'retry',
]

/** Lists transient statutes of the enum {@link VolumeServerState}. */
export const VOLUME_SERVER_TRANSIENT_STATUSES: VolumeServerState[] = [
  'snapshotting',
  'fetching',
  'resizing',
  'saving',
  'hotsyncing',
]

/** Lists transient statutes of the enum {@link VolumeState}. */
export const VOLUME_TRANSIENT_STATUSES: VolumeState[] = [
  'snapshotting',
  'fetching',
  'resizing',
  'saving',
  'hotsyncing',
]
