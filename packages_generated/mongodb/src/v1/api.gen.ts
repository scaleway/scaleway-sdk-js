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
  INSTANCE_TRANSIENT_STATUSES as INSTANCE_TRANSIENT_STATUSES_MONGODB,
  MAINTENANCE_TRANSIENT_STATUSES as MAINTENANCE_TRANSIENT_STATUSES_MONGODB,
  SNAPSHOT_TRANSIENT_STATUSES as SNAPSHOT_TRANSIENT_STATUSES_MONGODB,
} from './content.gen.js'
import {
  marshalCreateEndpointRequest,
  marshalCreateInstanceRequest,
  marshalCreateSnapshotRequest,
  marshalCreateUserRequest,
  marshalRestoreSnapshotRequest,
  marshalSetUserRoleRequest,
  marshalUpdateInstanceRequest,
  marshalUpdateSnapshotRequest,
  marshalUpdateUserRequest,
  marshalUpgradeInstanceRequest,
  unmarshalEndpoint,
  unmarshalInstance,
  unmarshalListDatabasesResponse,
  unmarshalListInstancesResponse,
  unmarshalListMaintenancesResponse,
  unmarshalListNodeTypesResponse,
  unmarshalListSnapshotsResponse,
  unmarshalListUsersResponse,
  unmarshalListVersionsResponse,
  unmarshalMaintenance,
  unmarshalSnapshot,
  unmarshalUser,
} from './marshalling.gen.js'
import type {
  ApplyMaintenanceRequest,
  CreateEndpointRequest,
  CreateInstanceRequest,
  CreateSnapshotRequest,
  CreateUserRequest,
  DeleteEndpointRequest,
  DeleteInstanceRequest,
  DeleteSnapshotRequest,
  DeleteUserRequest,
  Endpoint,
  GetInstanceCertificateRequest,
  GetInstanceRequest,
  GetMaintenanceRequest,
  GetSnapshotRequest,
  Instance,
  ListDatabasesRequest,
  ListDatabasesResponse,
  ListInstancesRequest,
  ListInstancesResponse,
  ListMaintenancesRequest,
  ListMaintenancesResponse,
  ListNodeTypesRequest,
  ListNodeTypesResponse,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  Maintenance,
  RestoreSnapshotRequest,
  SetUserRoleRequest,
  Snapshot,
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
 * Managed MongoDB®.

This API allows you to manage your Managed Databases for MongoDB®.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par'],
  })

  protected pageOfListNodeTypes = (
    request: Readonly<ListNodeTypesRequest> = {},
  ) =>
    this.client.fetch<ListNodeTypesResponse>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-types`,
        urlParams: urlParams(
          ['include_disabled', request.includeDisabled],
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
   * List available node types.
   *
   * @param request - The request {@link ListNodeTypesRequest}
   * @returns A Promise of ListNodeTypesResponse
   */
  listNodeTypes = (request: Readonly<ListNodeTypesRequest> = {}) =>
    enrichForPagination('nodeTypes', this.pageOfListNodeTypes, request)

  protected pageOfListVersions = (
    request: Readonly<ListVersionsRequest> = {},
  ) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['version', request.version],
        ),
      },
      unmarshalListVersionsResponse,
    )

  /**
   * List available MongoDB® major versions.
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest> = {}) =>
    enrichForPagination('versions', this.pageOfListVersions, request)

  protected pageOfListInstances = (
    request: Readonly<ListInstancesRequest> = {},
  ) =>
    this.client.fetch<ListInstancesResponse>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances`,
        urlParams: urlParams(
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
   * List MongoDB® Database Instances. List all MongoDB® Database Instances in the specified region. By default, the MongoDB® Database Instances returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field. You can define additional parameters for your query, such as `tags` and `name`. For the `name` parameter, the value you include will be checked against the whole name string to see if it includes the string you put in the parameter.
   *
   * @param request - The request {@link ListInstancesRequest}
   * @returns A Promise of ListInstancesResponse
   */
  listInstances = (request: Readonly<ListInstancesRequest> = {}) =>
    enrichForPagination('instances', this.pageOfListInstances, request)

  /**
   * Get a MongoDB® Database Instance. Retrieve information about a given MongoDB® Database Instance, specified by the `region` and `instance_id` parameters. Its full details, including name, status, IP address and port, are returned in the response object.
   *
   * @param request - The request {@link GetInstanceRequest}
   * @returns A Promise of Instance
   */
  getInstance = (request: Readonly<GetInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}`,
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
            !INSTANCE_TRANSIENT_STATUSES_MONGODB.includes(res.status),
          )),
      this.getInstance,
      request,
      options,
    )

  /**
   * Create a MongoDB® Database Instance. Create a new MongoDB® Database Instance.
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
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances`,
      },
      unmarshalInstance,
    )

  /**
   * Update a MongoDB® Database Instance. Update the parameters of a MongoDB® Database Instance.
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
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}`,
      },
      unmarshalInstance,
    )

  /**
   * Delete a MongoDB® Database Instance. Delete a given MongoDB® Database Instance, specified by the `region` and `instance_id` parameters. Deleting a MongoDB® Database Instance is permanent, and cannot be undone. Note that upon deletion all your data will be lost.
   *
   * @param request - The request {@link DeleteInstanceRequest}
   * @returns A Promise of Instance
   */
  deleteInstance = (request: Readonly<DeleteInstanceRequest>) =>
    this.client.fetch<Instance>(
      {
        method: 'DELETE',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}`,
      },
      unmarshalInstance,
    )

  /**
   * Upgrade a Database Instance. Upgrade your current Database Instance specifications like volume size.
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
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/upgrade`,
      },
      unmarshalInstance,
    )

  /**
   * Get the certificate of a Database Instance. Retrieve the certificate of a given Database Instance, specified by the `instance_id` parameter.
   *
   * @param request - The request {@link GetInstanceCertificateRequest}
   * @returns A Promise of Blob
   */
  getInstanceCertificate = (request: Readonly<GetInstanceCertificateRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/certificate`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  /**
   * Create a Database Instance snapshot. Create a new snapshot of a Database Instance. You must define the `name` and `instance_id` parameters in the request.
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
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots`,
      },
      unmarshalSnapshot,
    )

  /**
   * Get a Database Instance snapshot. Retrieve information about a given snapshot of a Database Instance. You must specify, in the endpoint, the `snapshot_id` parameter of the snapshot you want to retrieve.
   *
   * @param request - The request {@link GetSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  getSnapshot = (request: Readonly<GetSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
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
            !SNAPSHOT_TRANSIENT_STATUSES_MONGODB.includes(res.status),
          )),
      this.getSnapshot,
      request,
      options,
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
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  /**
   * Restore a Database Instance snapshot. Restore a given snapshot of a Database Instance. You must specify, in the endpoint, the `snapshot_id` parameter of the snapshot you want to restore, the `instance_name` of the new Database Instance, `node_type` of the new Database Instance and `node_amount` of the new Database Instance.
   *
   * @param request - The request {@link RestoreSnapshotRequest}
   * @returns A Promise of Instance
   */
  restoreSnapshot = (request: Readonly<RestoreSnapshotRequest>) =>
    this.client.fetch<Instance>(
      {
        body: JSON.stringify(
          marshalRestoreSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}/restore`,
      },
      unmarshalInstance,
    )

  protected pageOfListSnapshots = (
    request: Readonly<ListSnapshotsRequest> = {},
  ) =>
    this.client.fetch<ListSnapshotsResponse>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots`,
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
   * Delete a Database Instance snapshot. Delete a given snapshot of a Database Instance. You must specify, in the endpoint, the `snapshot_id` parameter of the snapshot you want to delete.
   *
   * @param request - The request {@link DeleteSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  deleteSnapshot = (request: Readonly<DeleteSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        method: 'DELETE',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  protected pageOfListUsers = (request: Readonly<ListUsersRequest>) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/users`,
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
   * List users of a Database Instance. List all users of a given Database Instance.
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest>) =>
    enrichForPagination('users', this.pageOfListUsers, request)

  /**
   * Create an user on a Database Instance. Create an user on a Database Instance. You must define the `name`, `password` of the user and `instance_id` parameters in the request.
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
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/users`,
      },
      unmarshalUser,
    )

  /**
   * Update a user on a Database Instance. Update the parameters of a user on a Database Instance. You can update the `password` parameter, but you cannot change the name of the user.
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
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/users/${validatePathParam('name', request.name)}`,
      },
      unmarshalUser,
    )

  /**
   * Delete a user on a Database Instance. Delete an existing user on a Database Instance.
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/users/${validatePathParam('name', request.name)}`,
    })

  /**
   * Apply user roles. Apply preset roles for a user in a Database Instance.
   *
   * @param request - The request {@link SetUserRoleRequest}
   * @returns A Promise of User
   */
  setUserRole = (request: Readonly<SetUserRoleRequest>) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalSetUserRoleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/set-user-roles`,
      },
      unmarshalUser,
    )

  protected pageOfListDatabases = (request: Readonly<ListDatabasesRequest>) =>
    this.client.fetch<ListDatabasesResponse>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/instances/${validatePathParam('instanceId', request.instanceId)}/databases`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
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
   * List databases in a Database Instance. List all databases of a given Database Instance.
   *
   * @param request - The request {@link ListDatabasesRequest}
   * @returns A Promise of ListDatabasesResponse
   */
  listDatabases = (request: Readonly<ListDatabasesRequest>) =>
    enrichForPagination('databases', this.pageOfListDatabases, request)

  /**
   * Delete a Database Instance endpoint. Delete the endpoint of a Database Instance. You must specify the `endpoint_id` parameter of the endpoint you want to delete. Note that you might need to update any environment configurations that point to the deleted endpoint.
   *
   * @param request - The request {@link DeleteEndpointRequest}
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
    })

  /**
   * Create a new Instance endpoint. Create a new endpoint for a MongoDB® Database Instance. You can add `public_network` or `private_network` specifications to the body of the request.
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
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints`,
      },
      unmarshalEndpoint,
    )

  protected pageOfListMaintenances = (
    request: Readonly<ListMaintenancesRequest>,
  ) =>
    this.client.fetch<ListMaintenancesResponse>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/maintenances`,
        urlParams: urlParams(
          ['instance_id', request.instanceId],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListMaintenancesResponse,
    )

  /**
   * List all the maintenances of a MongoDB® Database Instance.. List all the maintenances of a MongoDB® Database Instance.
   *
   * @param request - The request {@link ListMaintenancesRequest}
   * @returns A Promise of ListMaintenancesResponse
   */
  listMaintenances = (request: Readonly<ListMaintenancesRequest>) =>
    enrichForPagination('maintenances', this.pageOfListMaintenances, request)

  /**
   * Get a maintenance of a MongoDB® Database Instance.. Get a maintenance of a MongoDB® Database Instance.
   *
   * @param request - The request {@link GetMaintenanceRequest}
   * @returns A Promise of Maintenance
   */
  getMaintenance = (request: Readonly<GetMaintenanceRequest>) =>
    this.client.fetch<Maintenance>(
      {
        method: 'GET',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/maintenances/${validatePathParam('maintenanceId', request.maintenanceId)}`,
      },
      unmarshalMaintenance,
    )

  /**
   * Waits for {@link Maintenance} to be in a final state.
   *
   * @param request - The request {@link GetMaintenanceRequest}
   * @param options - The waiting options
   * @returns A Promise of Maintenance
   */
  waitForMaintenance = (
    request: Readonly<GetMaintenanceRequest>,
    options?: Readonly<WaitForOptions<Maintenance>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !MAINTENANCE_TRANSIENT_STATUSES_MONGODB.includes(res.status),
          )),
      this.getMaintenance,
      request,
      options,
    )

  /**
   * Apply a maintenance of a MongoDB® Database Instance.. Apply a maintenance of a MongoDB® Database Instance.
   *
   * @param request - The request {@link ApplyMaintenanceRequest}
   * @returns A Promise of Maintenance
   */
  applyMaintenance = (request: Readonly<ApplyMaintenanceRequest>) =>
    this.client.fetch<Maintenance>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/mongodb/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/maintenances/${validatePathParam('maintenanceId', request.maintenanceId)}/apply`,
      },
      unmarshalMaintenance,
    )
}
