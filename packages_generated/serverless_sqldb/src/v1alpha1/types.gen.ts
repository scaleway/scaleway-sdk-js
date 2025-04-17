// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type DatabaseBackupStatus =
  | 'unknown_status'
  | 'error'
  | 'ready'
  | 'locked'

export type DatabaseStatus =
  | 'unknown_status'
  | 'error'
  | 'creating'
  | 'ready'
  | 'deleting'
  | 'restoring'
  | 'locked'

export type ListDatabaseBackupsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'

export type ListDatabasesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export interface DatabaseBackup {
  /**
   * UUID that uniquely identifies a Serverless SQL Database backup.
   */
  id: string
  /**
   * Status of the Serverless SQL Database backup. One of `unknown_status` | `error` | `ready` | `locked`.
   */
  status: DatabaseBackupStatus
  /**
   * The ID of your Scaleway organization.
   */
  organizationId: string
  /**
   * UUID of the Scaleway project.
   */
  projectId: string
  /**
   * UUID of the source Serverless SQL Database the backup is created from.
   */
  databaseId: string
  /**
   * Creation date.
   */
  createdAt?: Date
  /**
   * Expiration date.
   */
  expiresAt?: Date
  /**
   * Size (in bytes) of the database backup file.
   */
  size?: number
  /**
   * Size (in bytes) of the database when backup has been done.
   */
  dbSize?: number
  /**
   * Download URL of the exported database backup.
   */
  downloadUrl?: string
  /**
   * Expiration date of the download URL.
   */
  downloadUrlExpiresAt?: Date
  /**
   * Region of the database backup.
   */
  region: ScwRegion
}

export interface Database {
  /**
   * UUID that uniquely identifies your Serverless SQL DB Database.
   */
  id: string
  /**
   * Name of the database.
   */
  name: string
  /**
   * Status of the Serverless SQL Ddatabase. One of `unknown_status` | `ready` | `creating` | `deleting` | `error` | `restoring` | `locked`.
   */
  status: DatabaseStatus
  /**
   * Endpoint of the database.
   */
  endpoint: string
  /**
   * The ID of your Scaleway organization.
   */
  organizationId: string
  /**
   * Project ID the database belongs to.
   */
  projectId: string
  /**
   * Region of the database.
   */
  region: ScwRegion
  /**
   * Creation date.
   */
  createdAt?: Date
  /**
   * The minimum number of CPU units for your Serverless SQL Database.
   */
  cpuMin: number
  /**
   * The maximum number of CPU units for your Serverless SQL Database.
   */
  cpuMax: number
  /**
   * The current number of CPU units allocated to your Serverless SQL Database.
   */
  cpuCurrent: number
  /**
   * Whether your Serverless SQL Database is running or not.
   */
  started: boolean
  /**
   * The major version of the underlying database engine.
   */
  engineMajorVersion: number
}

export type CreateDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The ID of your Scaleway project.
   */
  projectId?: string
  /**
   * The name of the Serverless SQL Database to be created.
   */
  name: string
  /**
   * The minimum number of CPU units for your Serverless SQL Database.
   */
  cpuMin: number
  /**
   * The maximum number of CPU units for your Serverless SQL Database.
   */
  cpuMax: number
  /**
   * The ID of the backup to create the database from.
   */
  fromBackupId?: string
}

export type DeleteDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the Serverless SQL Database.
   */
  databaseId: string
}

export type ExportDatabaseBackupRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the Serverless SQL Database backup.
   */
  backupId: string
}

export type GetDatabaseBackupRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the Serverless SQL Database backup.
   */
  backupId: string
}

export type GetDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the Serverless SQL DB database.
   */
  databaseId: string
}

export type ListDatabaseBackupsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Filter by the UUID of the Scaleway organization.
   */
  organizationId?: string
  /**
   * Filter by the UUID of the Scaleway project.
   */
  projectId?: string
  /**
   * Filter by the UUID of the Serverless SQL Database.
   */
  databaseId: string
  /**
   * Page number.
   */
  page?: number
  /**
   * Page size.
   */
  pageSize?: number
  /**
   * Sorting criteria. One of `created_at_asc`, `created_at_desc`.
   */
  orderBy?: ListDatabaseBackupsRequestOrderBy
}

export interface ListDatabaseBackupsResponse {
  /**
   * List of the backups.
   */
  backups: DatabaseBackup[]
  /**
   * Length of the backups list.
   */
  totalCount: number
}

export type ListDatabasesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Filter by the UUID of the Scaleway organization.
   */
  organizationId?: string
  /**
   * UUID of the Scaleway project.
   */
  projectId?: string
  /**
   * Page number.
   */
  page?: number
  /**
   * Page size.
   */
  pageSize?: number
  /**
   * Filter by the name of the database.
   */
  name?: string
  /**
   * Sorting criteria. One of `created_at_asc`, `created_at_desc`, `name_asc`, `name_desc`.
   */
  orderBy?: ListDatabasesRequestOrderBy
}

export interface ListDatabasesResponse {
  /**
   * List of the databases.
   */
  databases: Database[]
  /**
   * Total count of Serverless SQL Databases.
   */
  totalCount: number
}

export type RestoreDatabaseFromBackupRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the Serverless SQL Database.
   */
  databaseId: string
  /**
   * UUID of the Serverless SQL Database backup to restore.
   */
  backupId: string
}

export type UpdateDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the Serverless SQL Database.
   */
  databaseId: string
  /**
   * The minimum number of CPU units for your Serverless SQL Database.
   */
  cpuMin?: number
  /**
   * The maximum number of CPU units for your Serverless SQL Database.
   */
  cpuMax?: number
}
