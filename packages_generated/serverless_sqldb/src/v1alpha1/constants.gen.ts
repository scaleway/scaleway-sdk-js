// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DatabaseBackupStatus,
  DatabaseStatus,
  ListDatabaseBackupsRequestOrderBy,
  ListDatabasesRequestOrderBy,
} from './types.gen.js'


/** Lists all values of the enum {@link DatabaseBackupStatus}. */
export const DATABASE_BACKUP_STATUSES: DatabaseBackupStatus[] = [
  'unknown_status',
  'error',
  'ready',
  'locked',
]

/** Lists all values of the enum {@link DatabaseStatus}. */
export const DATABASE_STATUSES: DatabaseStatus[] = [
  'unknown_status',
  'error',
  'creating',
  'ready',
  'deleting',
  'restoring',
  'locked',
]

/** Lists all values of the enum {@link ListDatabaseBackupsRequestOrderBy}. */
export const LIST_DATABASE_BACKUPS_REQUEST_ORDER_BIES: ListDatabaseBackupsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link ListDatabasesRequestOrderBy}. */
export const LIST_DATABASES_REQUEST_ORDER_BIES: ListDatabasesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

