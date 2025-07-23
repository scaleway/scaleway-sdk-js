// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import type { ApiLocality, WaitForOptions } from '@scaleway/sdk-client'
import { DATABASE_TRANSIENT_STATUSES as DATABASE_TRANSIENT_STATUSES_SERVERLESS_SQLDB } from './content.gen.js'
import {
  marshalCreateDatabaseRequest,
  marshalRestoreDatabaseFromBackupRequest,
  marshalUpdateDatabaseRequest,
  unmarshalDatabase,
  unmarshalDatabaseBackup,
  unmarshalListDatabaseBackupsResponse,
  unmarshalListDatabasesResponse,
} from './marshalling.gen.js'
import type {
  CreateDatabaseRequest,
  Database,
  DatabaseBackup,
  DeleteDatabaseRequest,
  ExportDatabaseBackupRequest,
  GetDatabaseBackupRequest,
  GetDatabaseRequest,
  ListDatabaseBackupsRequest,
  ListDatabaseBackupsResponse,
  ListDatabasesRequest,
  ListDatabasesResponse,
  RestoreDatabaseFromBackupRequest,
  UpdateDatabaseRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Serverless SQL Databases API.

This API allows you to manage your Serverless SQL Databases.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par'],
  })

  /**
   * Create a new Serverless SQL Database. You must provide the following parameters: `organization_id`, `project_id`, `name`, `cpu_min`, `cpu_max`. You can also provide `from_backup_id` to create a database from a backup.
   *
   * @param request - The request {@link CreateDatabaseRequest}
   * @returns A Promise of Database
   */
  createDatabase = (request: Readonly<CreateDatabaseRequest>) =>
    this.client.fetch<Database>(
      {
        body: JSON.stringify(
          marshalCreateDatabaseRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/databases`,
      },
      unmarshalDatabase,
    )

  /**
   * Get a database information. Retrieve information about your Serverless SQL Database. You must provide the `database_id` parameter.
   *
   * @param request - The request {@link GetDatabaseRequest}
   * @returns A Promise of Database
   */
  getDatabase = (request: Readonly<GetDatabaseRequest>) =>
    this.client.fetch<Database>(
      {
        method: 'GET',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/databases/${validatePathParam('databaseId', request.databaseId)}`,
      },
      unmarshalDatabase,
    )

  /**
   * Waits for {@link Database} to be in a final state.
   *
   * @param request - The request {@link GetDatabaseRequest}
   * @param options - The waiting options
   * @returns A Promise of Database
   */
  waitForDatabase = (
    request: Readonly<GetDatabaseRequest>,
    options?: Readonly<WaitForOptions<Database>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !DATABASE_TRANSIENT_STATUSES_SERVERLESS_SQLDB.includes(res.status),
          )),
      this.getDatabase,
      request,
      options,
    )

  /**
   * Delete a database. Deletes a database. You must provide the `database_id` parameter. All data stored in the database will be permanently deleted.
   *
   * @param request - The request {@link DeleteDatabaseRequest}
   * @returns A Promise of Database
   */
  deleteDatabase = (request: Readonly<DeleteDatabaseRequest>) =>
    this.client.fetch<Database>(
      {
        method: 'DELETE',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/databases/${validatePathParam('databaseId', request.databaseId)}`,
      },
      unmarshalDatabase,
    )

  protected pageOfListDatabases = (
    request: Readonly<ListDatabasesRequest> = {},
  ) =>
    this.client.fetch<ListDatabasesResponse>(
      {
        method: 'GET',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/databases`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListDatabasesResponse,
    )

  /**
   * List your Serverless SQL Databases. List all Serverless SQL Databases for a given Scaleway Organization or Scaleway Project. By default, the databases returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field. For the `name` parameter, the value you include will be checked against the whole name string to see if it includes the string you put in the parameter.
   *
   * @param request - The request {@link ListDatabasesRequest}
   * @returns A Promise of ListDatabasesResponse
   */
  listDatabases = (request: Readonly<ListDatabasesRequest> = {}) =>
    enrichForPagination('databases', this.pageOfListDatabases, request)

  /**
   * Update database information. Update CPU limits of your Serverless SQL Database. You must provide the `database_id` parameter.
   *
   * @param request - The request {@link UpdateDatabaseRequest}
   * @returns A Promise of Database
   */
  updateDatabase = (request: Readonly<UpdateDatabaseRequest>) =>
    this.client.fetch<Database>(
      {
        body: JSON.stringify(
          marshalUpdateDatabaseRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/databases/${validatePathParam('databaseId', request.databaseId)}`,
      },
      unmarshalDatabase,
    )

  /**
   * Restore a database from a backup. Restore a database from a backup. You must provide the `backup_id` parameter.
   *
   * @param request - The request {@link RestoreDatabaseFromBackupRequest}
   * @returns A Promise of Database
   */
  restoreDatabaseFromBackup = (
    request: Readonly<RestoreDatabaseFromBackupRequest>,
  ) =>
    this.client.fetch<Database>(
      {
        body: JSON.stringify(
          marshalRestoreDatabaseFromBackupRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/databases/${validatePathParam('databaseId', request.databaseId)}/restore`,
      },
      unmarshalDatabase,
    )

  /**
   * Get a database backup information. Retrieve information about your Serverless SQL Database backup. You must provide the `backup_id` parameter.
   *
   * @param request - The request {@link GetDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  getDatabaseBackup = (request: Readonly<GetDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        method: 'GET',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups/${validatePathParam('backupId', request.backupId)}`,
      },
      unmarshalDatabaseBackup,
    )

  protected pageOfListDatabaseBackups = (
    request: Readonly<ListDatabaseBackupsRequest>,
  ) =>
    this.client.fetch<ListDatabaseBackupsResponse>(
      {
        method: 'GET',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups`,
        urlParams: urlParams(
          ['database_id', request.databaseId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListDatabaseBackupsResponse,
    )

  /**
   * List your Serverless SQL Database backups. List all Serverless SQL Database backups for a given Scaleway Project or Database. By default, the backups returned in the list are ordered by creation date in descending order, though this can be modified via the order_by field.
   *
   * @param request - The request {@link ListDatabaseBackupsRequest}
   * @returns A Promise of ListDatabaseBackupsResponse
   */
  listDatabaseBackups = (request: Readonly<ListDatabaseBackupsRequest>) =>
    enrichForPagination('backups', this.pageOfListDatabaseBackups, request)

  /**
   * Export a database backup. Export a database backup providing a download link once the export process is completed. You must provide the `backup_id` parameter.
   *
   * @param request - The request {@link ExportDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  exportDatabaseBackup = (request: Readonly<ExportDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-sqldb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups/${validatePathParam('backupId', request.backupId)}/export`,
      },
      unmarshalDatabaseBackup,
    )
}
