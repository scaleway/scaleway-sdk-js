// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  unmarshalScwFile,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, ScwFile, WaitForOptions } from '../../../bridge'
import {
  DATABASE_BACKUP_TRANSIENT_STATUSES,
  INSTANCE_LOG_TRANSIENT_STATUSES,
  INSTANCE_TRANSIENT_STATUSES,
} from './content.gen'
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
  unmarshalPrepareInstanceLogsResponse,
  unmarshalPrivilege,
  unmarshalReadReplica,
  unmarshalSetInstanceACLRulesResponse,
  unmarshalSetInstanceSettingsResponse,
  unmarshalSnapshot,
  unmarshalUser,
} from './marshalling.gen'
import type {
  AddInstanceACLRulesRequest,
  AddInstanceACLRulesResponse,
  AddInstanceSettingsRequest,
  AddInstanceSettingsResponse,
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
  PrepareInstanceLogsRequest,
  PrepareInstanceLogsResponse,
  Privilege,
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
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Database RDB API. */
export class RdbV1GenAPI extends API {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  protected pageOfListDatabaseEngines = (
    request: Readonly<ListDatabaseEnginesRequest> = {},
  ) =>
    this.client.fetch<ListDatabaseEnginesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/database-engines`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDatabaseEnginesResponse,
    )

  /**
   * List available database engines
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/node-types`,
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
   * List available node types
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backups`,
        urlParams: urlParams(
          ['instance_id', request.instanceId],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListDatabaseBackupsResponse,
    )

  /**
   * List database backups
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
   * Create a database backup
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backups`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Get a database backup
   *
   * @param request - The request {@link GetDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  getDatabaseBackup = (request: Readonly<GetDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backups/${validatePathParam(
          'databaseBackupId',
          request.databaseBackupId,
        )}`,
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
            !DATABASE_BACKUP_TRANSIENT_STATUSES.includes(res.status),
          )),
      this.getDatabaseBackup,
      request,
      options,
    )

  /**
   * Update a database backup
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backups/${validatePathParam(
          'databaseBackupId',
          request.databaseBackupId,
        )}`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Delete a database backup
   *
   * @param request - The request {@link DeleteDatabaseBackupRequest}
   * @returns A Promise of DatabaseBackup
   */
  deleteDatabaseBackup = (request: Readonly<DeleteDatabaseBackupRequest>) =>
    this.client.fetch<DatabaseBackup>(
      {
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backups/${validatePathParam(
          'databaseBackupId',
          request.databaseBackupId,
        )}`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Restore a database backup
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backups/${validatePathParam(
          'databaseBackupId',
          request.databaseBackupId,
        )}/restore`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Export a database backup
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/backups/${validatePathParam(
          'databaseBackupId',
          request.databaseBackupId,
        )}/export`,
      },
      unmarshalDatabaseBackup,
    )

  /**
   * Upgrade your current `node_type` or enable high availability on your
   * standalone database instance.
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/upgrade`,
      },
      unmarshalInstance,
    )

  protected pageOfListInstances = (
    request: Readonly<ListInstancesRequest> = {},
  ) =>
    this.client.fetch<ListInstancesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['tags', request.tags],
        ),
      },
      unmarshalListInstancesResponse,
    )

  /**
   * List instances
   *
   * @param request - The request {@link ListInstancesRequest}
   * @returns A Promise of ListInstancesResponse
   */
  listInstances = (request: Readonly<ListInstancesRequest> = {}) =>
    enrichForPagination('instances', this.pageOfListInstances, request)

  /**
   * Get an instance
   *
   * @param request - The request {@link GetInstanceRequest}
   * @returns A Promise of Instance
   */
  getInstance = (request: Readonly<GetInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam('instanceId', request.instanceId)}`,
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
          Promise.resolve(!INSTANCE_TRANSIENT_STATUSES.includes(res.status))),
      this.getInstance,
      request,
      options,
    )

  /**
   * Create an instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances`,
      },
      unmarshalInstance,
    )

  /**
   * Update an instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam('instanceId', request.instanceId)}`,
      },
      unmarshalInstance,
    )

  /**
   * Delete an instance
   *
   * @param request - The request {@link DeleteInstanceRequest}
   * @returns A Promise of Instance
   */
  deleteInstance = (request: Readonly<DeleteInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam('instanceId', request.instanceId)}`,
      },
      unmarshalInstance,
    )

  /**
   * Clone an instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/clone`,
      },
      unmarshalInstance,
    )

  /**
   * Restart an instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/restart`,
      },
      unmarshalInstance,
    )

  /**
   * Get the TLS certificate of an instance
   *
   * @param request - The request {@link GetInstanceCertificateRequest}
   * @returns A Promise of ScwFile
   */
  getInstanceCertificate = (request: Readonly<GetInstanceCertificateRequest>) =>
    this.client.fetch<ScwFile>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/certificate`,
      },
      unmarshalScwFile,
    )

  /**
   * Renew the TLS certificate of an instance
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
      path: `/rdb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/instances/${validatePathParam(
        'instanceId',
        request.instanceId,
      )}/renew-certificate`,
    })

  /**
   * Get database instance metrics.
   *
   * @param request - The request {@link GetInstanceMetricsRequest}
   * @returns A Promise of InstanceMetrics
   */
  getInstanceMetrics = (request: Readonly<GetInstanceMetricsRequest>) =>
    this.client.fetch<InstanceMetrics>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/metrics`,
        urlParams: urlParams(
          ['end_date', request.endDate],
          ['metric_name', request.metricName],
          ['start_date', request.startDate],
        ),
      },
      unmarshalInstanceMetrics,
    )

  /**
   * You can only create a maximum of 3 read replicas for one instance.
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/read-replicas`,
      },
      unmarshalReadReplica,
    )

  /**
   * Get a read replica
   *
   * @param request - The request {@link GetReadReplicaRequest}
   * @returns A Promise of ReadReplica
   */
  getReadReplica = (request: Readonly<GetReadReplicaRequest>) =>
    this.client.fetch<ReadReplica>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/read-replicas/${validatePathParam(
          'readReplicaId',
          request.readReplicaId,
        )}`,
      },
      unmarshalReadReplica,
    )

  /**
   * Delete a read replica
   *
   * @param request - The request {@link DeleteReadReplicaRequest}
   * @returns A Promise of ReadReplica
   */
  deleteReadReplica = (request: Readonly<DeleteReadReplicaRequest>) =>
    this.client.fetch<ReadReplica>(
      {
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/read-replicas/${validatePathParam(
          'readReplicaId',
          request.readReplicaId,
        )}`,
      },
      unmarshalReadReplica,
    )

  /**
   * Resetting a read replica resyncs data from the leader node. This operation
   * can take some time, depending on the database's size. During this
   * operation, the read replica will not be available. Endpoints will not change.
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/read-replicas/${validatePathParam(
          'readReplicaId',
          request.readReplicaId,
        )}/reset`,
      },
      unmarshalReadReplica,
    )

  /**
   * A read replica can have at most one direct access and one private network endpoint.
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/read-replicas/${validatePathParam(
          'readReplicaId',
          request.readReplicaId,
        )}/endpoints`,
      },
      unmarshalReadReplica,
    )

  /**
   * Prepare your instance logs. Logs will be grouped on a minimum interval of a day.
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/prepare-logs`,
      },
      unmarshalPrepareInstanceLogsResponse,
    )

  /**
   * List available logs of a given instance
   *
   * @param request - The request {@link ListInstanceLogsRequest}
   * @returns A Promise of ListInstanceLogsResponse
   */
  listInstanceLogs = (request: Readonly<ListInstanceLogsRequest>) =>
    this.client.fetch<ListInstanceLogsResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/logs`,
        urlParams: urlParams(['order_by', request.orderBy]),
      },
      unmarshalListInstanceLogsResponse,
    )

  /**
   * Get specific logs of a given instance
   *
   * @param request - The request {@link GetInstanceLogRequest}
   * @returns A Promise of InstanceLog
   */
  getInstanceLog = (request: Readonly<GetInstanceLogRequest>) =>
    this.client.fetch<InstanceLog>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/logs/${validatePathParam('instanceLogId', request.instanceLogId)}`,
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
            !INSTANCE_LOG_TRANSIENT_STATUSES.includes(res.status),
          )),
      this.getInstanceLog,
      request,
      options,
    )

  /**
   * Purge remote instances logs
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
      path: `/rdb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/instances/${validatePathParam(
        'instanceId',
        request.instanceId,
      )}/purge-logs`,
    })

  /**
   * List remote instances logs details
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/logs-details`,
      },
      unmarshalListInstanceLogsDetailsResponse,
    )

  /**
   * Add an instance setting
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/settings`,
      },
      unmarshalAddInstanceSettingsResponse,
    )

  /**
   * Delete an instance setting
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/settings`,
      },
      unmarshalDeleteInstanceSettingsResponse,
    )

  /**
   * Set a given instance setting
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/settings`,
      },
      unmarshalSetInstanceSettingsResponse,
    )

  protected pageOfListInstanceACLRules = (
    request: Readonly<ListInstanceACLRulesRequest>,
  ) =>
    this.client.fetch<ListInstanceACLRulesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/acls`,
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
   * List ACL rules of a given instance
   *
   * @param request - The request {@link ListInstanceACLRulesRequest}
   * @returns A Promise of ListInstanceACLRulesResponse
   */
  listInstanceACLRules = (request: Readonly<ListInstanceACLRulesRequest>) =>
    enrichForPagination('rules', this.pageOfListInstanceACLRules, request)

  /**
   * Add an additional ACL rule to a database instance.
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/acls`,
      },
      unmarshalAddInstanceACLRulesResponse,
    )

  /**
   * Replace all the ACL rules of a database instance.
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/acls`,
      },
      unmarshalSetInstanceACLRulesResponse,
    )

  /**
   * Delete ACL rules of a given instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/acls`,
      },
      unmarshalDeleteInstanceACLRulesResponse,
    )

  protected pageOfListUsers = (request: Readonly<ListUsersRequest>) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/users`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'name_asc'],
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
   * List users of a given instance
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest>) =>
    enrichForPagination('users', this.pageOfListUsers, request)

  /**
   * Create a user on a given instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/users`,
      },
      unmarshalUser,
    )

  /**
   * Update a user on a given instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/users/${validatePathParam('name', request.name)}`,
      },
      unmarshalUser,
    )

  /**
   * Delete a user on a given instance
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/rdb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/instances/${validatePathParam(
        'instanceId',
        request.instanceId,
      )}/users/${validatePathParam('name', request.name)}`,
    })

  protected pageOfListDatabases = (request: Readonly<ListDatabasesRequest>) =>
    this.client.fetch<ListDatabasesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/databases`,
        urlParams: urlParams(
          ['managed', request.managed],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'name_asc'],
          ['owner', request.owner],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDatabasesResponse,
    )

  /**
   * List all database in a given instance
   *
   * @param request - The request {@link ListDatabasesRequest}
   * @returns A Promise of ListDatabasesResponse
   */
  listDatabases = (request: Readonly<ListDatabasesRequest>) =>
    enrichForPagination('databases', this.pageOfListDatabases, request)

  /**
   * Create a database in a given instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/databases`,
      },
      unmarshalDatabase,
    )

  /**
   * Delete a database in a given instance
   *
   * @param request - The request {@link DeleteDatabaseRequest}
   */
  deleteDatabase = (request: Readonly<DeleteDatabaseRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/rdb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/instances/${validatePathParam(
        'instanceId',
        request.instanceId,
      )}/databases/${validatePathParam('name', request.name)}`,
    })

  protected pageOfListPrivileges = (request: Readonly<ListPrivilegesRequest>) =>
    this.client.fetch<ListPrivilegesResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/privileges`,
        urlParams: urlParams(
          ['database_name', request.databaseName],
          ['order_by', request.orderBy ?? 'user_name_asc'],
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
   * List privileges of a given user for a given database on a given instance
   *
   * @param request - The request {@link ListPrivilegesRequest}
   * @returns A Promise of ListPrivilegesResponse
   */
  listPrivileges = (request: Readonly<ListPrivilegesRequest>) =>
    enrichForPagination('privileges', this.pageOfListPrivileges, request)

  /**
   * Set privileges of a given user for a given database on a given instance
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/privileges`,
      },
      unmarshalPrivilege,
    )

  protected pageOfListSnapshots = (
    request: Readonly<ListSnapshotsRequest> = {},
  ) =>
    this.client.fetch<ListSnapshotsResponse>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/snapshots`,
        urlParams: urlParams(
          ['instance_id', request.instanceId],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListSnapshotsResponse,
    )

  /**
   * List instance snapshots
   *
   * @param request - The request {@link ListSnapshotsRequest}
   * @returns A Promise of ListSnapshotsResponse
   */
  listSnapshots = (request: Readonly<ListSnapshotsRequest> = {}) =>
    enrichForPagination('snapshots', this.pageOfListSnapshots, request)

  /**
   * Get an instance snapshot
   *
   * @param request - The request {@link GetSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  getSnapshot = (request: Readonly<GetSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  /**
   * Create an instance snapshot
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/snapshots`,
      },
      unmarshalSnapshot,
    )

  /**
   * Update an instance snapshot
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  /**
   * Delete an instance snapshot
   *
   * @param request - The request {@link DeleteSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  deleteSnapshot = (request: Readonly<DeleteSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        method: 'DELETE',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  /**
   * Create a new instance from a given snapshot
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/snapshots/${validatePathParam(
          'snapshotId',
          request.snapshotId,
        )}/create-instance`,
      },
      unmarshalInstance,
    )

  /**
   * Create a new instance endpoint
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
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/instances/${validatePathParam(
          'instanceId',
          request.instanceId,
        )}/endpoints`,
      },
      unmarshalEndpoint,
    )

  /**
   * Delete an instance endpoint
   *
   * @param request - The request {@link DeleteEndpointRequest}
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/rdb/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
    })

  /**
   * Get an instance endpoint
   *
   * @param request - The request {@link GetEndpointRequest}
   * @returns A Promise of Endpoint
   */
  getEndpoint = (request: Readonly<GetEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        method: 'GET',
        path: `/rdb/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
      unmarshalEndpoint,
    )
}
