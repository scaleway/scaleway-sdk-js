// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality, RequestOptions,} from '@scaleway/sdk-client'
import {FILE_SYSTEM_TRANSIENT_STATUSES as FILE_SYSTEM_TRANSIENT_STATUSES_FILE,SNAPSHOT_TRANSIENT_STATUSES as SNAPSHOT_TRANSIENT_STATUSES_FILE,} from './content.gen.js'
import {
  marshalCreateFileSystemRequest,
  marshalCreateSnapshotRequest,
  unmarshalFileSystem,
  unmarshalListAttachmentsResponse,
  unmarshalListFileSystemTypesResponse,
  unmarshalListFileSystemsResponse,
  unmarshalListSnapshotsResponse,
  unmarshalSnapshot,
  marshalUpdateFileSystemRequest,
  marshalUpdateSnapshotRequest,
} from './marshalling.gen.js'
import type {
  CreateFileSystemRequest,
  CreateSnapshotRequest,
  DeleteFileSystemRequest,
  DeleteSnapshotRequest,
  FileSystem,
  GetFileSystemRequest,
  GetSnapshotRequest,
  ListAttachmentsRequest,
  ListAttachmentsResponse,
  ListFileSystemTypesRequest,
  ListFileSystemTypesResponse,
  ListFileSystemsRequest,
  ListFileSystemsResponse,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  Snapshot,
  UpdateFileSystemRequest,
  UpdateSnapshotRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * File Storage API.

This API allows you to manage your File Storage resources.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      regions: [
        'fr-par',
      ],
    })
  
  protected pageOfListFileSystemTypes = (request: Readonly<ListFileSystemTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListFileSystemTypesResponse>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystem-types`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListFileSystemTypesResponse,
    )
  
  /**
   * List filesystems types.
   *
   * @param request - The request {@link ListFileSystemTypesRequest}
   * @returns A Promise of ListFileSystemTypesResponse
   */
  listFileSystemTypes = (request: Readonly<ListFileSystemTypesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('filesystemTypes', this.pageOfListFileSystemTypes, request, options)

  
  /**
   * Get filesystem details. Retrieve all properties and current status of a specific filesystem identified by its ID.
   *
   * @param request - The request {@link GetFileSystemRequest}
   * @returns A Promise of FileSystem
   */
  getFileSystem = (request: Readonly<GetFileSystemRequest>, options?: RequestOptions) =>
    this.client.fetch<FileSystem>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems/${validatePathParam('filesystemId', request.filesystemId)}`,
        signal: options?.signal,
      },
      unmarshalFileSystem,
    )
  
  /**
   * Waits for {@link FileSystem} to be in a final state.
   *
   * @param request - The request {@link GetFileSystemRequest}
   * @param options - The waiting options
   * @returns A Promise of FileSystem
   */
  waitForFileSystem = (
    request: Readonly<GetFileSystemRequest>,
    options?: Readonly<WaitForOptions<FileSystem>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!FILE_SYSTEM_TRANSIENT_STATUSES_FILE.includes(res.status))),
      this.getFileSystem,
      request,
      options,
    )

  
  protected pageOfListFileSystems = (request: Readonly<ListFileSystemsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListFileSystemsResponse>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems`,
        urlParams: urlParams(
          ['filesystem_ids', request.filesystemIds],
          ['filesystem_type', request.filesystemType],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListFileSystemsResponse,
    )
  
  /**
   * List all filesystems. Retrieve all filesystems in the specified region. By default, the filesystems listed are ordered by creation date in ascending order. This can be modified using the `order_by` field.
   *
   * @param request - The request {@link ListFileSystemsRequest}
   * @returns A Promise of ListFileSystemsResponse
   */
  listFileSystems = (request: Readonly<ListFileSystemsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('filesystems', this.pageOfListFileSystems, request, options)

  
  protected pageOfListAttachments = (request: Readonly<ListAttachmentsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListAttachmentsResponse>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/attachments`,
        urlParams: urlParams(
          ['filesystem_id', request.filesystemId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['resource_id', request.resourceId],
          ['resource_type', request.resourceType],
          ['zone', request.zone],
        ),
        signal: options?.signal,
      },
      unmarshalListAttachmentsResponse,
    )
  
  /**
   * List filesystems attachments. List all existing attachments in a specified region.
By default, the attachments listed are ordered by creation date in ascending order. This can be modified using the `order_by` field.
   *
   * @param request - The request {@link ListAttachmentsRequest}
   * @returns A Promise of ListAttachmentsResponse
   */
  listAttachments = (request: Readonly<ListAttachmentsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('attachments', this.pageOfListAttachments, request, options)

  
  /**
   * Create a new filesystem. To create a new filesystem, you must specify a name, a size, and a project ID.
   *
   * @param request - The request {@link CreateFileSystemRequest}
   * @returns A Promise of FileSystem
   */
  createFileSystem = (request: Readonly<CreateFileSystemRequest>, options?: RequestOptions) =>
    this.client.fetch<FileSystem>(
      {
        body: JSON.stringify(
          marshalCreateFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems`,
        signal: options?.signal,
      },
      unmarshalFileSystem,
    )

  
  /**
   * Delete a detached filesystem. You must specify the `filesystem_id` of the filesystem you want to delete.
   *
   * @param request - The request {@link DeleteFileSystemRequest}
   */
  deleteFileSystem = (request: Readonly<DeleteFileSystemRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems/${validatePathParam('filesystemId', request.filesystemId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Update filesystem properties. Update the technical details of a filesystem, such as its name, tags or its new size.
   *
   * @param request - The request {@link UpdateFileSystemRequest}
   * @returns A Promise of FileSystem
   */
  updateFileSystem = (request: Readonly<UpdateFileSystemRequest>, options?: RequestOptions) =>
    this.client.fetch<FileSystem>(
      {
        body: JSON.stringify(
          marshalUpdateFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems/${validatePathParam('filesystemId', request.filesystemId)}`,
        signal: options?.signal,
      },
      unmarshalFileSystem,
    )

  
  /**
   * Get snapshot details. Retrieve all properties and current status of a specific snapshot identified by its ID.
   *
   * @param request - The request {@link GetSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  getSnapshot = (request: Readonly<GetSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!SNAPSHOT_TRANSIENT_STATUSES_FILE.includes(res.status))),
      this.getSnapshot,
      request,
      options,
    )

  
  protected pageOfListSnapshots = (request: Readonly<ListSnapshotsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSnapshotsResponse>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots`,
        urlParams: urlParams(
          ['filesystem_id', request.filesystemId],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['snapshot_ids', request.snapshotIds],
          ['tags', request.tags],  
          ...Object.entries(resolveOneOf([
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
            {default: this.client.settings.defaultOrganizationId,param: 'organization_id',
              value: request.organizationId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListSnapshotsResponse,
    )
  
  /**
   * List all snapshots. Retrieve all snapshots in the specified region. By default, the snapshots listed are ordered by creation date in ascending order. This can be modified using the `order_by` field.
   *
   * @param request - The request {@link ListSnapshotsRequest}
   * @returns A Promise of ListSnapshotsResponse
   */
  listSnapshots = (request: Readonly<ListSnapshotsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('snapshots', this.pageOfListSnapshots, request, options)

  
  /**
   * Create a snapshot of a filesystem. To create a snapshot, the filesystem must be in the `available` status.
If your filesystem is in a transient state, you need to wait until the end of the current operation.
   *
   * @param request - The request {@link CreateSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  createSnapshot = (request: Readonly<CreateSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalCreateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots`,
        signal: options?.signal,
      },
      unmarshalSnapshot,
    )

  
  /**
   * Delete a snapshot. You must specify the `snapshot_id` of the snapshot you want to delete.
   *
   * @param request - The request {@link DeleteSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  deleteSnapshot = (request: Readonly<DeleteSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        method: 'DELETE',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
      unmarshalSnapshot,
    )

  
  /**
   * Update snapshot properties. Update the name or tags of a snapshot.
   *
   * @param request - The request {@link UpdateSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  updateSnapshot = (request: Readonly<UpdateSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalUpdateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
      unmarshalSnapshot,
    )

  
}

