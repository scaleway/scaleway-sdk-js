// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality, WaitForOptions } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import {
  DATABASE_BACKUP_TRANSIENT_STATUSES as DATABASE_BACKUP_TRANSIENT_STATUSES_RDB,
  INSTANCE_LOG_TRANSIENT_STATUSES as INSTANCE_LOG_TRANSIENT_STATUSES_RDB,
  INSTANCE_TRANSIENT_STATUSES as INSTANCE_TRANSIENT_STATUSES_RDB,
  READ_REPLICA_TRANSIENT_STATUSES as READ_REPLICA_TRANSIENT_STATUSES_RDB,
  SNAPSHOT_TRANSIENT_STATUSES as SNAPSHOT_TRANSIENT_STATUSES_RDB,
} from './content.gen.js'
import {
  marshalAddInstanceACLRulesRequest,
  marshalAddInstanceSettingsRequest,
  marshalCloneInstanceRequest,
  marshalCreateDatabaseBackupRequest,
  marshalCreateDatabaseRequest,
  marshalCreateEndpointRequest,
  marshalCreateInstanceFromSnapshotRequest,
  marshalCreateInstanceRequest,
  marshalCreateReadReplicaEndpointRequest,
  marshalCreateReadReplicaRequest,
  marshalCreateSnapshotRequest,
  marshalCreateUserRequest,
  marshalDeleteInstanceACLRulesRequest,
  marshalDeleteInstanceSettingsRequest,
  marshalMigrateEndpointRequest,
  marshalPrepareInstanceLogsRequest,
  marshalPurgeInstanceLogsRequest,
  marshalRestoreDatabaseBackupRequest,
  marshalSetInstanceACLRulesRequest,
  marshalSetInstanceSettingsRequest,
  marshalSetPrivilegeRequest,
  marshalUpdateDatabaseBackupRequest,
  marshalUpdateInstanceRequest,
  marshalUpdateSnapshotRequest,
  marshalUpdateUserRequest,
  marshalUpgradeInstanceRequest,
  unmarshalAddInstanceACLRulesResponse,
  unmarshalAddInstanceSettingsResponse,
  unmarshalDatabase,
  unmarshalDatabaseBackup,
  unmarshalDeleteInstanceACLRulesResponse,
  unmarshalDeleteInstanceSettingsResponse,
  unmarshalEndpoint,
  unmarshalInstance,
  unmarshalInstanceLog,
  unmarshalInstanceMetrics,
  unmarshalListDatabaseBackupsResponse,
  unmarshalListDatabaseEnginesResponse,
  unmarshalListDatabasesResponse,
  unmarshalListInstanceACLRulesResponse,
  unmarshalListInstanceLogsDetailsResponse,
  unmarshalListInstanceLogsResponse,
  unmarshalListInstancesResponse,
  unmarshalListNodeTypesResponse,
  unmarshalListPrivilegesResponse,
  unmarshalListSnapshotsResponse,
  unmarshalListUsersResponse,
  unmarshalMaintenance,
  unmarshalPrepareInstanceLogsResponse,
  unmarshalPrivilege,
  unmarshalReadReplica,
  unmarshalSetInstanceACLRulesResponse,
  unmarshalSetInstanceSettingsResponse,
  unmarshalSnapshot,
  unmarshalUser,
} from './marshalling.gen.js'
import type {
  AddInstanceACLRulesRequest,
  AddInstanceACLRulesResponse,
  AddInstanceSettingsRequest,
  AddInstanceSettingsResponse,
  ApplyInstanceMaintenanceRequest,
  CloneInstanceRequest,
  CreateDatabaseBackupRequest,
  CreateDatabaseRequest,
  CreateEndpointRequest,
  CreateInstanceFromSnapshotRequest,
  CreateInstanceRequest,
  CreateReadReplicaEndpointRequest,
  CreateReadReplicaRequest,
  CreateSnapshotRequest,
  CreateUserRequest,
  Database,
  DatabaseBackup,
  DeleteDatabaseBackupRequest,
  DeleteDatabaseRequest,
  DeleteEndpointRequest,
  DeleteInstanceACLRulesRequest,
  DeleteInstanceACLRulesResponse,
  DeleteInstanceRequest,
  DeleteInstanceSettingsRequest,
  DeleteInstanceSettingsResponse,
  DeleteReadReplicaRequest,
  DeleteSnapshotRequest,
  DeleteUserRequest,
  Endpoint,
  ExportDatabaseBackupRequest,
  GetDatabaseBackupRequest,
  GetEndpointRequest,
  GetInstanceCertificateRequest,
  GetInstanceLogRequest,
  GetInstanceMetricsRequest,
  GetInstanceRequest,
  GetReadReplicaRequest,
  GetSnapshotRequest,
  Instance,
  InstanceLog,
  InstanceMetrics,
  ListDatabaseBackupsRequest,
  ListDatabaseBackupsResponse,
  ListDatabaseEnginesRequest,
  ListDatabaseEnginesResponse,
  ListDatabasesRequest,
  ListDatabasesResponse,
  ListInstanceACLRulesRequest,
  ListInstanceACLRulesResponse,
  ListInstanceLogsDetailsRequest,
  ListInstanceLogsDetailsResponse,
  ListInstanceLogsRequest,
  ListInstanceLogsResponse,
  ListInstancesRequest,
  ListInstancesResponse,
  ListNodeTypesRequest,
  ListNodeTypesResponse,
  ListPrivilegesRequest,
  ListPrivilegesResponse,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListUsersRequest,
  ListUsersResponse,
  Maintenance,
  MigrateEndpointRequest,
  PrepareInstanceLogsRequest,
  PrepareInstanceLogsResponse,
  Privilege,
  PromoteReadReplicaRequest,
  PurgeInstanceLogsRequest,
  ReadReplica,
  RenewInstanceCertificateRequest,
  ResetReadReplicaRequest,
  RestartInstanceRequest,
  RestoreDatabaseBackupRequest,
  SetInstanceACLRulesRequest,
  SetInstanceACLRulesResponse,
  SetInstanceSettingsRequest,
  SetInstanceSettingsResponse,
  SetPrivilegeRequest,
  Snapshot,
  UpdateDatabaseBackupRequest,
  UpdateInstanceRequest,
  UpdateSnapshotRequest,
  UpdateUserRequest,
  UpgradeInstanceRequest,
  User,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Managed Database for PostgreSQL and MySQL API.

This API allows you to manage your Managed Databases for PostgreSQL and MySQL.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListDatabaseEngines = (
    request: Readonly<ListDatabaseEnginesRequest> = {},
  ) =>
    this.client.fetch<ListDatabaseEnginesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/database-engines`,
        urlParams: urlParams(
          ['name', request.name],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['version', request.version],
        ),
      },
      unmarshalListDatabaseEnginesResponse,
    )

  /**
   * List available database engines. List the PostgreSQL and MySQL database engines available at Scaleway.
   *
   * @param request - The request {@link ListDatabaseEnginesRequest}
   * @returns A Promise of ListDatabaseEnginesResponse
   */
  listDatabaseEngines = (request: Readonly<ListDatabaseEnginesRequest> = {}) =>
    enrichForPagination('engines', this.pageOfListDatabaseEngines, request)

  protected pageOfListNodeTypes = (request: Readonly<ListNodeTypesRequest>) =>
    this.client.fetch<ListNodeTypesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-types`,
        urlParams: urlParams(
          ['include_disabled_types', request.includeDisabledTypes],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListNodeTypesResponse,
    )

  /**
   * List available node types. List all available node types. By default, the node types returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListNodeTypesRequest}
   * @returns A Promise of ListNodeTypesResponse
   */
  listNodeTypes = (request: Readonly<ListNodeTypesRequest>) =>
    enrichForPagination('nodeTypes', this.pageOfListNodeTypes, request)

  protected pageOfListDatabaseBackups = (
    request: Readonly<ListDatabaseBackupsRequest> = {},
  ) =>
    this.client.fetch<ListDatabaseBackupsResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups`,
        urlParams: urlParams(
          ['instance_id', request.instanceId],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListDatabaseBackupsResponse,
    )

  /**
   * List database backups. List all backups in a specified region, for a given Scaleway Organization or Scaleway Project. By default, the backups listed are ordered by creation date in ascending order. This can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListDatabaseBackupsRequest}
   * @returns A Promise of ListDatabaseBackupsResponse
   */
  listDatabaseBackups = (request: Readonly<ListDatabaseBackupsRequest> = {}) =>
    enrichForPagination(
      'databaseBackups',
      this.pageOfListDatabaseBackups,
      request,
    )

  /**
   * Create a database backup. Create a new backup. You must set the `instance_id`, `database_name`, `name` and `expires_at` parameters.
   *
   * @param request - The request {@link CreateDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  createDatabaseBackup = (request: Readonly<CreateDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        body: JSON.stringify(
          marshalCreateDatabaseBackupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Get a database backup. Retrieve information about a given backup, specified by its database backup ID and region. Full details about the backup, like size, URL and expiration date, are returned in the response.
   *
   * @param request - The request {@link GetDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  getDatabaseBackup = (request: Readonly<GetDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups/${validatePathParam('databaseBackupId', request.databaseBackupId)}`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Waits for {@link DatabaseBackup} to be in a final state.
   *
   * @param request - The request {@link GetDatabaseBackupRequest}
   * @param options - The waiting options
   * @returns A Promise of DatabaseBackup
   */
  waitForDatabaseBackup = (
    request: Readonly<GetDatabaseBackupRequest>,
    options?: Readonly<WaitForOptions<DatabaseBackup>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !DATABASE_BACKUP_TRANSIENT_STATUSES_RDB.includes(res.status),
          )),
      this.getDatabaseBackup,
      request,
      options,
    )

  /**
   * Update a database backup. Update the parameters of a backup, including name and expiration date.
   *
   * @param request - The request {@link UpdateDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  updateDatabaseBackup = (request: Readonly<UpdateDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        body: JSON.stringify(
          marshalUpdateDatabaseBackupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups/${validatePathParam('databaseBackupId', request.databaseBackupId)}`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Delete a database backup. Delete a backup, specified by its database backup ID and region. Deleting a backup is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  deleteDatabaseBackup = (request: Readonly<DeleteDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups/${validatePathParam('databaseBackupId', request.databaseBackupId)}`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Restore a database backup. Launch the process of restoring database backup. You must specify the `instance_id` of the Database Instance of destination, where the backup will be restored. Note that large database backups can take up to several hours to restore.
   *
   * @param request - The request {@link RestoreDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  restoreDatabaseBackup = (request: Readonly<RestoreDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        body: JSON.stringify(
          marshalRestoreDatabaseBackupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups/${validatePathParam('databaseBackupId', request.databaseBackupId)}/restore`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Export a database backup. Export a backup, specified by the `database_backup_id` and the `region` parameters. The download URL is returned in the response.
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
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/backups/${validatePathParam('databaseBackupId', request.databaseBackupId)}/export`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Upgrade a Database Instance. Upgrade your current Database Instance specifications like node type, high availability, volume, or the database engine version. Note that upon upgrade the `enable_ha` parameter can only be set to `true`.
   *
   * @param request - The request {@link UpgradeInstanceRequest}
   * @returns A Promise of Instance
   */
  upgradeInstance = (request: Readonly<UpgradeInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        body: JSON.stringify(
          marshalUpgradeInstanceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/upgrade`,
      },
      unmarshalInstance,
    )

  protected pageOfListInstances = (
    request: Readonly<ListInstancesRequest> = {},
  ) =>
    this.client.fetch<ListInstancesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances`,
        urlParams: urlParams(
          ['has_maintenances', request.hasMaintenances],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
      },
      unmarshalListInstancesResponse,
    )

  /**
   * List Database Instances. List all Database Instances in the specified region, for a given Scaleway Organization or Scaleway Project. By default, the Database Instances returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field. You can define additional parameters for your query, such as `tags` and `name`. For the `name` parameter, the value you include will be checked against the whole name string to see if it includes the string you put in the parameter.
   *
   * @param request - The request {@link ListInstancesRequest}
   * @returns A Promise of ListInstancesResponse
   */
  listInstances = (request: Readonly<ListInstancesRequest> = {}) =>
    enrichForPagination('instances', this.pageOfListInstances, request)

  /**
   * Get a Database Instance. Retrieve information about a given Database Instance, specified by the `region` and `instance_id` parameters. Its full details, including name, status, IP address and port, are returned in the response object.
   *
   * @param request - The request {@link GetInstanceRequest}
   * @returns A Promise of Instance
   */
  getInstance = (request: Readonly<GetInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}`,
      },
      unmarshalInstance,
    )

  /**
   * Waits for {@link Instance} to be in a final state.
   *
   * @param request - The request {@link GetInstanceRequest}
   * @param options - The waiting options
   * @returns A Promise of Instance
   */
  waitForInstance = (
    request: Readonly<GetInstanceRequest>,
    options?: Readonly<WaitForOptions<Instance>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !INSTANCE_TRANSIENT_STATUSES_RDB.includes(res.status),
          )),
      this.getInstance,
      request,
      options,
    )

  /**
   * Create a Database Instance. Create a new Database Instance. You must set the `engine`, `user_name`, `password` and `node_type` parameters. Optionally, you can specify the volume type and size.
   *
   * @param request - The request {@link CreateInstanceRequest}
   * @returns A Promise of Instance
   */
  createInstance = (request: Readonly<CreateInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        body: JSON.stringify(
          marshalCreateInstanceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances`,
      },
      unmarshalInstance,
    )

  /**
   * Update a Database Instance. Update the parameters of a Database Instance, including name, tags and backup schedule details.
   *
   * @param request - The request {@link UpdateInstanceRequest}
   * @returns A Promise of Instance
   */
  updateInstance = (request: Readonly<UpdateInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        body: JSON.stringify(
          marshalUpdateInstanceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}`,
      },
      unmarshalInstance,
    )

  /**
   * Delete a Database Instance. Delete a given Database Instance, specified by the `region` and `instance_id` parameters. Deleting a Database Instance is permanent, and cannot be undone. Note that upon deletion all your data will be lost.
   *
   * @param request - The request {@link DeleteInstanceRequest}
   * @returns A Promise of Instance
   */
  deleteInstance = (request: Readonly<DeleteInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}`,
      },
      unmarshalInstance,
    )

  /**
   * Clone a Database Instance. Clone a given Database Instance, specified by the `region` and `instance_id` parameters. The clone feature allows you to create a new Database Instance from an existing one. The clone includes all existing databases, users and permissions. You can create a clone on a Database Instance bigger than your current one.
   *
   * @param request - The request {@link CloneInstanceRequest}
   * @returns A Promise of Instance
   */
  cloneInstance = (request: Readonly<CloneInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        body: JSON.stringify(
          marshalCloneInstanceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/clone`,
      },
      unmarshalInstance,
    )

  /**
   * Restart Database Instance. Restart a given Database Instance, specified by the `region` and `instance_id` parameters. The status of the Database Instance returned in the response.
   *
   * @param request - The request {@link RestartInstanceRequest}
   * @returns A Promise of Instance
   */
  restartInstance = (request: Readonly<RestartInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/restart`,
      },
      unmarshalInstance,
    )

  /**
   * Get the TLS certificate of a Database Instance. Retrieve information about the TLS certificate of a given Database Instance. Details like name and content are returned in the response.
   *
   * @param request - The request {@link GetInstanceCertificateRequest}
   * @returns A Promise of Blob
   */
  getInstanceCertificate = (request: Readonly<GetInstanceCertificateRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/certificate`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  /**
   * Renew the TLS certificate of a Database Instance. Renew a TLS for a Database Instance. Renewing a certificate means that you will not be able to connect to your Database Instance using the previous certificate. You will also need to download and update the new certificate for all database clients.
   *
   * @param request - The request {@link RenewInstanceCertificateRequest}
   */
  renewInstanceCertificate = (
    request: Readonly<RenewInstanceCertificateRequest>,
  ) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/renew-certificate`,
    })

  /**
   * Get Database Instance metrics. Retrieve the time series metrics of a given Database Instance. You can define the period from which to retrieve metrics by specifying the `start_date` and `end_date`.
   *
   * @param request - The request {@link GetInstanceMetricsRequest}
   * @returns A Promise of InstanceMetrics
   */
  getInstanceMetrics = (request: Readonly<GetInstanceMetricsRequest>) =>
    this.client.fetch<InstanceMetrics>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/metrics`,
        urlParams: urlParams(
          ['end_date', request.endDate],
          ['metric_name', request.metricName],
          ['start_date', request.startDate],
        ),
      },
      unmarshalInstanceMetrics,
    )

  /**
   * Create a Read Replica. Create a new Read Replica of a Database Instance. You must specify the `region` and the `instance_id`. You can only create a maximum of 3 Read Replicas per Database Instance.
   *
   * @param request - The request {@link CreateReadReplicaRequest}
   * @returns A Promise of ReadReplica
   */
  createReadReplica = (request: Readonly<CreateReadReplicaRequest>) =>
    this.client.fetch<ReadReplica>(
      {
        body: JSON.stringify(
          marshalCreateReadReplicaRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/read-replicas`,
      },
      unmarshalReadReplica,
    )

  /**
   * Get a Read Replica. Retrieve information about a Database Instance Read Replica. Full details about the Read Replica, like `endpoints`, `status`  and `region` are returned in the response.
   *
   * @param request - The request {@link GetReadReplicaRequest}
   * @returns A Promise of ReadReplica
   */
  getReadReplica = (request: Readonly<GetReadReplicaRequest>) =>
    this.client.fetch<ReadReplica>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/read-replicas/${validatePathParam('readReplicaId', request.readReplicaId)}`,
      },
      unmarshalReadReplica,
    )

  /**
   * Waits for {@link ReadReplica} to be in a final state.
   *
   * @param request - The request {@link GetReadReplicaRequest}
   * @param options - The waiting options
   * @returns A Promise of ReadReplica
   */
  waitForReadReplica = (
    request: Readonly<GetReadReplicaRequest>,
    options?: Readonly<WaitForOptions<ReadReplica>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !READ_REPLICA_TRANSIENT_STATUSES_RDB.includes(res.status),
          )),
      this.getReadReplica,
      request,
      options,
    )

  /**
   * Delete a Read Replica. Delete a Read Replica of a Database Instance. You must specify the `region` and `read_replica_id` parameters of the Read Replica you want to delete.
   *
   * @param request - The request {@link DeleteReadReplicaRequest}
   * @returns A Promise of ReadReplica
   */
  deleteReadReplica = (request: Readonly<DeleteReadReplicaRequest>) =>
    this.client.fetch<ReadReplica>(
      {
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/read-replicas/${validatePathParam('readReplicaId', request.readReplicaId)}`,
      },
      unmarshalReadReplica,
    )

  /**
   * Resync a Read Replica. When you resync a Read Replica, first it is reset, then its data is resynchronized from the primary node. Your Read Replica remains unavailable during the resync process. The duration of this process is proportional to the size of your Database Instance.
The configured endpoints do not change.
   *
   * @param request - The request {@link ResetReadReplicaRequest}
   * @returns A Promise of ReadReplica
   */
  resetReadReplica = (request: Readonly<ResetReadReplicaRequest>) =>
    this.client.fetch<ReadReplica>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/read-replicas/${validatePathParam('readReplicaId', request.readReplicaId)}/reset`,
      },
      unmarshalReadReplica,
    )

  /**
   * Promote a Read Replica. Promote a Read Replica to Database Instance automatically.
   *
   * @param request - The request {@link PromoteReadReplicaRequest}
   * @returns A Promise of Instance
   */
  promoteReadReplica = (request: Readonly<PromoteReadReplicaRequest>) =>
    this.client.fetch<Instance>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/read-replicas/${validatePathParam('readReplicaId', request.readReplicaId)}/promote`,
      },
      unmarshalInstance,
    )

  /**
   * Create an endpoint for a Read Replica. Create a new endpoint for a Read Replica. Read Replicas can have at most one direct access and one Private Network endpoint.
   *
   * @param request - The request {@link CreateReadReplicaEndpointRequest}
   * @returns A Promise of ReadReplica
   */
  createReadReplicaEndpoint = (
    request: Readonly<CreateReadReplicaEndpointRequest>,
  ) =>
    this.client.fetch<ReadReplica>(
      {
        body: JSON.stringify(
          marshalCreateReadReplicaEndpointRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/read-replicas/${validatePathParam('readReplicaId', request.readReplicaId)}/endpoints`,
      },
      unmarshalReadReplica,
    )

  /**
   * Prepare logs of a Database Instance. Prepare your Database Instance logs. You can define the `start_date` and `end_date` parameters for your query. The download URL is returned in the response. Logs are recorded from 00h00 to 23h59 and then aggregated in a `.log` file once a day. Therefore, even if you specify a timeframe from which you want to get the logs, you will receive logs from the full 24 hours.
   *
   * @param request - The request {@link PrepareInstanceLogsRequest}
   * @returns A Promise of PrepareInstanceLogsResponse
   */
  prepareInstanceLogs = (request: Readonly<PrepareInstanceLogsRequest>) =>
    this.client.fetch<PrepareInstanceLogsResponse>(
      {
        body: JSON.stringify(
          marshalPrepareInstanceLogsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/prepare-logs`,
      },
      unmarshalPrepareInstanceLogsResponse,
    )

  /**
   * List available logs of a Database Instance. List the available logs of a Database Instance. By default, the logs returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field.
   *
   * @param request - The request {@link ListInstanceLogsRequest}
   * @returns A Promise of ListInstanceLogsResponse
   */
  listInstanceLogs = (request: Readonly<ListInstanceLogsRequest>) =>
    this.client.fetch<ListInstanceLogsResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/logs`,
        urlParams: urlParams(['order_by', request.orderBy]),
      },
      unmarshalListInstanceLogsResponse,
    )

  /**
   * Get given logs of a Database Instance. Retrieve information about the logs of a Database Instance. Specify the `instance_log_id` and `region` in your request to get information such as `download_url`, `status`, `expires_at` and `created_at` about your logs in the response.
   *
   * @param request - The request {@link GetInstanceLogRequest}
   * @returns A Promise of InstanceLog
   */
  getInstanceLog = (request: Readonly<GetInstanceLogRequest>) =>
    this.client.fetch<InstanceLog>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/logs/${validatePathParam('instanceLogId', request.instanceLogId)}`,
      },
      unmarshalInstanceLog,
    )

  /**
   * Waits for {@link InstanceLog} to be in a final state.
   *
   * @param request - The request {@link GetInstanceLogRequest}
   * @param options - The waiting options
   * @returns A Promise of InstanceLog
   */
  waitForInstanceLog = (
    request: Readonly<GetInstanceLogRequest>,
    options?: Readonly<WaitForOptions<InstanceLog>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !INSTANCE_LOG_TRANSIENT_STATUSES_RDB.includes(res.status),
          )),
      this.getInstanceLog,
      request,
      options,
    )

  /**
   * Purge remote Database Instance logs. Purge a given remote log from a Database Instance. You can specify the `log_name` of the log you wish to clean from your Database Instance.
   *
   * @param request - The request {@link PurgeInstanceLogsRequest}
   */
  purgeInstanceLogs = (request: Readonly<PurgeInstanceLogsRequest>) =>
    this.client.fetch<void>({
      body: JSON.stringify(
        marshalPurgeInstanceLogsRequest(request, this.client.settings),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/purge-logs`,
    })

  /**
   * List remote Database Instance logs details. List remote log details. By default, the details returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field.
   *
   * @param request - The request {@link ListInstanceLogsDetailsRequest}
   * @returns A Promise of ListInstanceLogsDetailsResponse
   */
  listInstanceLogsDetails = (
    request: Readonly<ListInstanceLogsDetailsRequest>,
  ) =>
    this.client.fetch<ListInstanceLogsDetailsResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/logs-details`,
      },
      unmarshalListInstanceLogsDetailsResponse,
    )

  /**
   * Add Database Instance advanced settings. Add an advanced setting to a Database Instance. You must set the `name` and the `value` of each setting.
   *
   * @param request - The request {@link AddInstanceSettingsRequest}
   * @returns A Promise of AddInstanceSettingsResponse
   */
  addInstanceSettings = (request: Readonly<AddInstanceSettingsRequest>) =>
    this.client.fetch<AddInstanceSettingsResponse>(
      {
        body: JSON.stringify(
          marshalAddInstanceSettingsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/settings`,
      },
      unmarshalAddInstanceSettingsResponse,
    )

  /**
   * Delete Database Instance advanced settings. Delete an advanced setting in a Database Instance. You must specify the names of the settings you want to delete in the request.
   *
   * @param request - The request {@link DeleteInstanceSettingsRequest}
   * @returns A Promise of DeleteInstanceSettingsResponse
   */
  deleteInstanceSettings = (request: Readonly<DeleteInstanceSettingsRequest>) =>
    this.client.fetch<DeleteInstanceSettingsResponse>(
      {
        body: JSON.stringify(
          marshalDeleteInstanceSettingsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/settings`,
      },
      unmarshalDeleteInstanceSettingsResponse,
    )

  /**
   * Set Database Instance advanced settings. Update an advanced setting for a Database Instance. Settings added upon database engine initialization can only be defined once, and cannot, therefore, be updated.
   *
   * @param request - The request {@link SetInstanceSettingsRequest}
   * @returns A Promise of SetInstanceSettingsResponse
   */
  setInstanceSettings = (request: Readonly<SetInstanceSettingsRequest>) =>
    this.client.fetch<SetInstanceSettingsResponse>(
      {
        body: JSON.stringify(
          marshalSetInstanceSettingsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/settings`,
      },
      unmarshalSetInstanceSettingsResponse,
    )

  protected pageOfListInstanceACLRules = (
    request: Readonly<ListInstanceACLRulesRequest>,
  ) =>
    this.client.fetch<ListInstanceACLRulesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/acls`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListInstanceACLRulesResponse,
    )

  /**
   * List ACL rules of a Database Instance. List the ACL rules for a given Database Instance. The response is an array of ACL objects, each one representing an ACL that denies, allows or redirects traffic based on certain conditions.
   *
   * @param request - The request {@link ListInstanceACLRulesRequest}
   * @returns A Promise of ListInstanceACLRulesResponse
   */
  listInstanceACLRules = (request: Readonly<ListInstanceACLRulesRequest>) =>
    enrichForPagination('rules', this.pageOfListInstanceACLRules, request)

  /**
   * Add an ACL rule to a Database Instance. Add an additional ACL rule to a Database Instance.
   *
   * @param request - The request {@link AddInstanceACLRulesRequest}
   * @returns A Promise of AddInstanceACLRulesResponse
   */
  addInstanceACLRules = (request: Readonly<AddInstanceACLRulesRequest>) =>
    this.client.fetch<AddInstanceACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddInstanceACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/acls`,
      },
      unmarshalAddInstanceACLRulesResponse,
    )

  /**
   * Set ACL rules for a Database Instance. Replace all the ACL rules of a Database Instance.
   *
   * @param request - The request {@link SetInstanceACLRulesRequest}
   * @returns A Promise of SetInstanceACLRulesResponse
   */
  setInstanceACLRules = (request: Readonly<SetInstanceACLRulesRequest>) =>
    this.client.fetch<SetInstanceACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetInstanceACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/acls`,
      },
      unmarshalSetInstanceACLRulesResponse,
    )

  /**
   * Delete ACL rules of a Database Instance. Delete one or more ACL rules of a Database Instance.
   *
   * @param request - The request {@link DeleteInstanceACLRulesRequest}
   * @returns A Promise of DeleteInstanceACLRulesResponse
   */
  deleteInstanceACLRules = (request: Readonly<DeleteInstanceACLRulesRequest>) =>
    this.client.fetch<DeleteInstanceACLRulesResponse>(
      {
        body: JSON.stringify(
          marshalDeleteInstanceACLRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/acls`,
      },
      unmarshalDeleteInstanceACLRulesResponse,
    )

  protected pageOfListUsers = (request: Readonly<ListUsersRequest>) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/users`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListUsersResponse,
    )

  /**
   * List users of a Database Instance. List all users of a given Database Instance. By default, the users returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field.
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest>) =>
    enrichForPagination('users', this.pageOfListUsers, request)

  /**
   * Create a user for a Database Instance. Create a new user for a Database Instance. You must define the `name`, `password` and `is_admin` parameters.
   *
   * @param request - The request {@link CreateUserRequest}
   * @returns A Promise of User
   */
  createUser = (request: Readonly<CreateUserRequest>) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalCreateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/users`,
      },
      unmarshalUser,
    )

  /**
   * Update a user on a Database Instance. Update the parameters of a user on a Database Instance. You can update the `password` and `is_admin` parameters, but you cannot change the name of the user.
   *
   * @param request - The request {@link UpdateUserRequest}
   * @returns A Promise of User
   */
  updateUser = (request: Readonly<UpdateUserRequest>) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/users/${validatePathParam('name', request.name)}`,
      },
      unmarshalUser,
    )

  /**
   * Delete a user on a Database Instance. Delete a given user on a Database Instance. You must specify, in the endpoint,  the `region`, `instance_id` and `name` parameters of the user you want to delete.
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/users/${validatePathParam('name', request.name)}`,
    })

  protected pageOfListDatabases = (request: Readonly<ListDatabasesRequest>) =>
    this.client.fetch<ListDatabasesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/databases`,
        urlParams: urlParams(
          ['managed', request.managed],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['owner', request.owner],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['skip_size_retrieval', request.skipSizeRetrieval],
        ),
      },
      unmarshalListDatabasesResponse,
    )

  /**
   * List databases in a Database Instance. List all databases of a given Database Instance. By default, the databases returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field. You can define additional parameters for your query, such as `name`, `managed` and `owner`.
   *
   * @param request - The request {@link ListDatabasesRequest}
   * @returns A Promise of ListDatabasesResponse
   */
  listDatabases = (request: Readonly<ListDatabasesRequest>) =>
    enrichForPagination('databases', this.pageOfListDatabases, request)

  /**
   * Create a database in a Database Instance. Create a new database. You must define the `name` parameter in the request.
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
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/databases`,
      },
      unmarshalDatabase,
    )

  /**
   * Delete a database in a Database Instance. Delete a given database on a Database Instance. You must specify, in the endpoint, the `region`, `instance_id` and `name` parameters of the database you want to delete.
   *
   * @param request - The request {@link DeleteDatabaseRequest}
   */
  deleteDatabase = (request: Readonly<DeleteDatabaseRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/databases/${validatePathParam('name', request.name)}`,
    })

  protected pageOfListPrivileges = (request: Readonly<ListPrivilegesRequest>) =>
    this.client.fetch<ListPrivilegesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/privileges`,
        urlParams: urlParams(
          ['database_name', request.databaseName],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['user_name', request.userName],
        ),
      },
      unmarshalListPrivilegesResponse,
    )

  /**
   * List user privileges for a database. List privileges of a user on a database. By default, the details returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field. You can define additional parameters for your query, such as `database_name` and `user_name`.
   *
   * @param request - The request {@link ListPrivilegesRequest}
   * @returns A Promise of ListPrivilegesResponse
   */
  listPrivileges = (request: Readonly<ListPrivilegesRequest>) =>
    enrichForPagination('privileges', this.pageOfListPrivileges, request)

  /**
   * Set user privileges for a database. Set the privileges of a user on a database. You must define `database_name`, `user_name` and `permission` in the request body.
   *
   * @param request - The request {@link SetPrivilegeRequest}
   * @returns A Promise of Privilege
   */
  setPrivilege = (request: Readonly<SetPrivilegeRequest>) =>
    this.client.fetch<Privilege>(
      {
        body: JSON.stringify(
          marshalSetPrivilegeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/privileges`,
      },
      unmarshalPrivilege,
    )

  protected pageOfListSnapshots = (
    request: Readonly<ListSnapshotsRequest> = {},
  ) =>
    this.client.fetch<ListSnapshotsResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots`,
        urlParams: urlParams(
          ['instance_id', request.instanceId],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListSnapshotsResponse,
    )

  /**
   * List snapshots. List snapshots. You can include the `instance_id` or `project_id` in your query to get the list of snapshots for specific Database Instances and/or Projects. By default, the details returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListSnapshotsRequest}
   * @returns A Promise of ListSnapshotsResponse
   */
  listSnapshots = (request: Readonly<ListSnapshotsRequest> = {}) =>
    enrichForPagination('snapshots', this.pageOfListSnapshots, request)

  /**
   * Get a Database Instance snapshot. Retrieve information about a given snapshot, specified by its `snapshot_id` and `region`. Full details about the snapshot, like size and expiration date, are returned in the response.
   *
   * @param request - The request {@link GetSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  getSnapshot = (request: Readonly<GetSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  /**
   * Waits for {@link Snapshot} to be in a final state.
   *
   * @param request - The request {@link GetSnapshotRequest}
   * @param options - The waiting options
   * @returns A Promise of Snapshot
   */
  waitForSnapshot = (
    request: Readonly<GetSnapshotRequest>,
    options?: Readonly<WaitForOptions<Snapshot>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !SNAPSHOT_TRANSIENT_STATUSES_RDB.includes(res.status),
          )),
      this.getSnapshot,
      request,
      options,
    )

  /**
   * Create a Database Instance snapshot. Create a new snapshot of a Database Instance. You must define the `name` parameter in the request.
   *
   * @param request - The request {@link CreateSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  createSnapshot = (request: Readonly<CreateSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalCreateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/snapshots`,
      },
      unmarshalSnapshot,
    )

  /**
   * Update a Database Instance snapshot. Update the parameters of a snapshot of a Database Instance. You can update the `name` and `expires_at` parameters.
   *
   * @param request - The request {@link UpdateSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  updateSnapshot = (request: Readonly<UpdateSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalUpdateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  /**
   * Delete a Database Instance snapshot. Delete a given snapshot of a Database Instance. You must specify, in the endpoint,  the `region` and `snapshot_id` parameters of the snapshot you want to delete.
   *
   * @param request - The request {@link DeleteSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  deleteSnapshot = (request: Readonly<DeleteSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  /**
   * Create a new Database Instance from a snapshot. Restore a snapshot. When you restore a snapshot, a new Instance is created and billed to your account. Note that is possible to select a larger node type for your new Database Instance. However, the Block volume size will be the same as the size of the restored snapshot. All Instance settings will be restored if you chose a node type with the same or more memory size than the initial Instance. Settings will be reset to the default if your node type has less memory.
   *
   * @param request - The request {@link CreateInstanceFromSnapshotRequest}
   * @returns A Promise of Instance
   */
  createInstanceFromSnapshot = (
    request: Readonly<CreateInstanceFromSnapshotRequest>,
  ) =>
    this.client.fetch<Instance>(
      {
        body: JSON.stringify(
          marshalCreateInstanceFromSnapshotRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}/create-instance`,
      },
      unmarshalInstance,
    )

  /**
   * Create a new Database Instance endpoint. Create a new endpoint for a Database Instance. You can add `load_balancer` and `private_network` specifications to the body of the request.
   *
   * @param request - The request {@link CreateEndpointRequest}
   * @returns A Promise of Endpoint
   */
  createEndpoint = (request: Readonly<CreateEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        body: JSON.stringify(
          marshalCreateEndpointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/endpoints`,
      },
      unmarshalEndpoint,
    )

  /**
   * Delete a Database Instance endpoint. Delete the endpoint of a Database Instance. You must specify the `region` and `endpoint_id` parameters of the endpoint you want to delete. Note that might need to update any environment configurations that point to the deleted endpoint.
   *
   * @param request - The request {@link DeleteEndpointRequest}
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
    })

  /**
   * Get a Database Instance endpoint. Retrieve information about a Database Instance endpoint. Full details about the endpoint, like `ip`, `port`, `private_network` and `load_balancer` specifications are returned in the response.
   *
   * @param request - The request {@link GetEndpointRequest}
   * @returns A Promise of Endpoint
   */
  getEndpoint = (request: Readonly<GetEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalEndpoint,
    )

  /**
   * Migrate an existing instance endpoint to another instance.
   *
   * @param request - The request {@link MigrateEndpointRequest}
   * @returns A Promise of Endpoint
   */
  migrateEndpoint = (request: Readonly<MigrateEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        body: JSON.stringify(
          marshalMigrateEndpointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}/migrate`,
      },
      unmarshalEndpoint,
    )

  /**
   * Apply Database Instance maintenance. Apply maintenance tasks to your Database Instance. This will trigger pending maintenance tasks to start in your Database Instance and can generate service interruption. Maintenance tasks can be applied between `starts_at` and `stops_at` times, and are run directly by Scaleway at `forced_at` timestamp.
   *
   * @param request - The request {@link ApplyInstanceMaintenanceRequest}
   * @returns A Promise of Maintenance
   */
  applyInstanceMaintenance = (
    request: Readonly<ApplyInstanceMaintenanceRequest>,
  ) =>
    this.client.fetch<Maintenance>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/rdb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/apply-maintenance`,
      },
      unmarshalMaintenance,
    )
}
