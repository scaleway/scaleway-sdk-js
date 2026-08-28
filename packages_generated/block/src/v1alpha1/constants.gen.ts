// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ListSnapshotsRequestOrderBy,
  ListVolumesRequestOrderBy,
  ReferenceStatus,
  ReferenceType,
  SnapshotStatus,
  StorageClass,
  VolumeStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link ListSnapshotsRequestOrderBy}. */
export const LIST_SNAPSHOTS_REQUEST_ORDER_BIES: ListSnapshotsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListVolumesRequestOrderBy}. */
export const LIST_VOLUMES_REQUEST_ORDER_BIES: ListVolumesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ReferenceStatus}. */
export const REFERENCE_STATUSES: ReferenceStatus[] = [
  'unknown_status',
  'attaching',
  'attached',
  'detaching',
  'detached',
  'creating',
  'error',
]

/** Lists all values of the enum {@link ReferenceType}. */
export const REFERENCE_TYPES: ReferenceType[] = [
  'unknown_type',
  'link',
  'exclusive',
  'read_only',
]

/** Lists all values of the enum {@link SnapshotStatus}. */
export const SNAPSHOT_STATUSES: SnapshotStatus[] = [
  'unknown_status',
  'creating',
  'available',
  'error',
  'deleting',
  'deleted',
  'in_use',
  'locked',
  'exporting',
]

/** Lists all values of the enum {@link StorageClass}. */
export const STORAGE_CLASSES: StorageClass[] = [
  'unknown_storage_class',
  'unspecified',
  'bssd',
  'sbs',
]

/** Lists all values of the enum {@link VolumeStatus}. */
export const VOLUME_STATUSES: VolumeStatus[] = [
  'unknown_status',
  'creating',
  'available',
  'in_use',
  'deleting',
  'deleted',
  'resizing',
  'error',
  'snapshotting',
  'locked',
  'updating',
]

