// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ImageState,
  IpState,
  PrivateNICState,
  SecurityGroupState,
  ServerFilesystemState,
  ServerIpState,
  ServerState,
  SnapshotState,
  TaskStatus,
  VolumeServerState,
  VolumeState,
} from './types.gen.js'

/** Lists transient statutes of the enum {@link ImageState}. */
export const IMAGE_TRANSIENT_STATUSES: ImageState[] = ['creating']

/** Lists transient statutes of the enum {@link IpState}. */
export const IP_TRANSIENT_STATUSES: IpState[] = ['pending']

/** Lists transient statutes of the enum {@link PrivateNICState}. */
export const PRIVATE_NIC_TRANSIENT_STATUSES: PrivateNICState[] = ['syncing']

/** Lists transient statutes of the enum {@link SecurityGroupState}. */
export const SECURITY_GROUP_TRANSIENT_STATUSES: SecurityGroupState[] = [
  'syncing',
]

/** Lists transient statutes of the enum {@link ServerFilesystemState}. */
export const SERVER_FILESYSTEM_TRANSIENT_STATUSES: ServerFilesystemState[] = [
  'attaching',
  'detaching',
]

/** Lists transient statutes of the enum {@link ServerIpState}. */
export const SERVER_IP_TRANSIENT_STATUSES: ServerIpState[] = ['pending']

/** Lists transient statutes of the enum {@link ServerState}. */
export const SERVER_TRANSIENT_STATUSES: ServerState[] = ['starting', 'stopping']

/** Lists transient statutes of the enum {@link SnapshotState}. */
export const SNAPSHOT_TRANSIENT_STATUSES: SnapshotState[] = [
  'snapshotting',
  'importing',
  'exporting',
]

/** Lists transient statutes of the enum {@link TaskStatus}. */
export const TASK_TRANSIENT_STATUSES: TaskStatus[] = [
  'pending',
  'started',
  'retry',
]

/** Lists transient statutes of the enum {@link VolumeServerState}. */
export const VOLUME_SERVER_TRANSIENT_STATUSES: VolumeServerState[] = [
  'snapshotting',
  'resizing',
  'fetching',
  'saving',
  'hotsyncing',
  'attaching',
]

/** Lists transient statutes of the enum {@link VolumeState}. */
export const VOLUME_TRANSIENT_STATUSES: VolumeState[] = [
  'snapshotting',
  'fetching',
  'saving',
  'attaching',
  'resizing',
  'hotsyncing',
]
