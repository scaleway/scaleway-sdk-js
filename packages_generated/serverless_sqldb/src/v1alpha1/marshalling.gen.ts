// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  CreateDatabaseRequest,
  Database,
  DatabaseBackup,
  ListDatabaseBackupsResponse,
  ListDatabasesResponse,
  RestoreDatabaseFromBackupRequest,
  UpdateDatabaseRequest,
} from './types.gen'

export const unmarshalDatabaseBackup = (data: unknown): DatabaseBackup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DatabaseBackup' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    databaseId: data.database_id,
    dbSize: data.db_size,
    downloadUrl: data.download_url,
    downloadUrlExpiresAt: unmarshalDate(data.download_url_expires_at),
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    size: data.size,
    status: data.status,
  } as DatabaseBackup
}

export const unmarshalDatabase = (data: unknown): Database => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Database' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpuCurrent: data.cpu_current,
    cpuMax: data.cpu_max,
    cpuMin: data.cpu_min,
    createdAt: unmarshalDate(data.created_at),
    endpoint: data.endpoint,
    engineMajorVersion: data.engine_major_version,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    started: data.started,
    status: data.status,
  } as Database
}

export const unmarshalListDatabaseBackupsResponse = (
  data: unknown,
): ListDatabaseBackupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabaseBackupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    backups: unmarshalArrayOfObject(data.backups, unmarshalDatabaseBackup),
    totalCount: data.total_count,
  } as ListDatabaseBackupsResponse
}

export const unmarshalListDatabasesResponse = (
  data: unknown,
): ListDatabasesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabasesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    databases: unmarshalArrayOfObject(data.databases, unmarshalDatabase),
    totalCount: data.total_count,
  } as ListDatabasesResponse
}

export const marshalCreateDatabaseRequest = (
  request: CreateDatabaseRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cpu_max: request.cpuMax,
  cpu_min: request.cpuMin,
  from_backup_id: request.fromBackupId,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRestoreDatabaseFromBackupRequest = (
  request: RestoreDatabaseFromBackupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backup_id: request.backupId,
})

export const marshalUpdateDatabaseRequest = (
  request: UpdateDatabaseRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cpu_max: request.cpuMax,
  cpu_min: request.cpuMin,
})
