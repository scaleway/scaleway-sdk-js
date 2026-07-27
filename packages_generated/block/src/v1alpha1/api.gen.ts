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
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality,} from '@scaleway/sdk-client'
import {REFERENCE_TRANSIENT_STATUSES as REFERENCE_TRANSIENT_STATUSES_BLOCK,SNAPSHOT_TRANSIENT_STATUSES as SNAPSHOT_TRANSIENT_STATUSES_BLOCK,VOLUME_TRANSIENT_STATUSES as VOLUME_TRANSIENT_STATUSES_BLOCK,} from './content.gen.js'
import {
  marshalCreateSnapshotRequest,
  marshalCreateVolumeRequest,
  marshalExportSnapshotToObjectStorageRequest,
  marshalImportSnapshotFromObjectStorageRequest,
  marshalImportSnapshotFromS3Request,
  unmarshalListSnapshotsResponse,
  unmarshalListVolumeTypesResponse,
  unmarshalListVolumesResponse,
  unmarshalSnapshot,
  marshalUpdateSnapshotRequest,
  marshalUpdateVolumeRequest,
  unmarshalVolume,
} from './marshalling.gen.js'
import type {
  CreateSnapshotRequest,
  CreateVolumeRequest,
  DeleteSnapshotRequest,
  DeleteVolumeRequest,
  ExportSnapshotToObjectStorageRequest,
  GetSnapshotRequest,
  GetVolumeRequest,
  ImportSnapshotFromObjectStorageRequest,
  ImportSnapshotFromS3Request,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListVolumeTypesRequest,
  ListVolumeTypesResponse,
  ListVolumesRequest,
  ListVolumesResponse,
  Snapshot,
  UpdateSnapshotRequest,
  UpdateVolumeRequest,
  Volume,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Block Storage API.

This API allows you to manage your Block Storage volumes.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      zones: [
        'fr-par-1',
        'fr-par-2',
        'fr-par-3',
        'nl-ams-1',
        'nl-ams-2',
        'nl-ams-3',
        'pl-waw-1',
        'pl-waw-2',
        'pl-waw-3',
      ],
    })
  
  protected pageOfListVolumeTypes = (request: Readonly<ListVolumeTypesRequest> = {}) =>
    this.client.fetch<ListVolumeTypesResponse>(
      {
        method: 'GET',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volume-types`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListVolumeTypesResponse,
    )
  
  /**
   * List volume types. List all available volume types in a specified zone. The volume types listed are ordered by name in ascending order.
   *
   * @param request - The request {@link ListVolumeTypesRequest}
   * @returns A Promise of ListVolumeTypesResponse
   */
  listVolumeTypes = (request: Readonly<ListVolumeTypesRequest> = {}) =>
    enrichForPagination('volumeTypes', this.pageOfListVolumeTypes, request)

  
  protected pageOfListVolumes = (request: Readonly<ListVolumesRequest> = {}) =>
    this.client.fetch<ListVolumesResponse>(
      {
        method: 'GET',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['product_resource_id', request.productResourceId],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
      },
      unmarshalListVolumesResponse,
    )
  
  /**
   * List volumes. List all existing volumes in a specified zone. By default, the volumes listed are ordered by creation date in ascending order. This can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListVolumesRequest}
   * @returns A Promise of ListVolumesResponse
   */
  listVolumes = (request: Readonly<ListVolumesRequest> = {}) =>
    enrichForPagination('volumes', this.pageOfListVolumes, request)

  
  /**
   * Create a volume. To create a new volume from scratch, you must specify `from_empty` and the `size`.
To create a volume from an existing snapshot, specify `from_snapshot` and the `snapshot_id` in the request payload instead, size is optional and can be specified if you need to extend the original size. The volume will take on the same volume class and underlying IOPS limitations as the original snapshot.
   *
   * @param request - The request {@link CreateVolumeRequest}
   * @returns A Promise of Volume
   */
  createVolume = (request: Readonly<CreateVolumeRequest> = {}) =>
    this.client.fetch<Volume>(
      {
        body: JSON.stringify(
          marshalCreateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes`,
      },
      unmarshalVolume,
    )

  
  /**
   * Get a volume. Retrieve technical information about a specific volume. Details such as size, type, and status are returned in the response.
   *
   * @param request - The request {@link GetVolumeRequest}
   * @returns A Promise of Volume
   */
  getVolume = (request: Readonly<GetVolumeRequest>) =>
    this.client.fetch<Volume>(
      {
        method: 'GET',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
      unmarshalVolume,
    )
  
  /**
   * Waits for {@link Volume} to be in a final state.
   *
   * @param request - The request {@link GetVolumeRequest}
   * @param options - The waiting options
   * @returns A Promise of Volume
   */
  waitForVolume = (
    request: Readonly<GetVolumeRequest>,
    options?: Readonly<WaitForOptions<Volume>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!VOLUME_TRANSIENT_STATUSES_BLOCK.includes(res.status))),
      this.getVolume,
      request,
      options,
    )

  
  /**
   * Delete a detached volume. You must specify the `volume_id` of the volume you want to delete. The volume must not be in the `in_use` status.
   *
   * @param request - The request {@link DeleteVolumeRequest}
   */
  deleteVolume = (request: Readonly<DeleteVolumeRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
    )

  
  /**
   * Update a volume. Update the technical details of a volume, such as its name, tags, or its new size and `volume_type` (within the same Block Storage class).
You can only resize a volume to a larger size. It is currently not possible to change your Block Storage Class.
   *
   * @param request - The request {@link UpdateVolumeRequest}
   * @returns A Promise of Volume
   */
  updateVolume = (request: Readonly<UpdateVolumeRequest>) =>
    this.client.fetch<Volume>(
      {
        body: JSON.stringify(
          marshalUpdateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
      unmarshalVolume,
    )

  
  protected pageOfListSnapshots = (request: Readonly<ListSnapshotsRequest> = {}) =>
    this.client.fetch<ListSnapshotsResponse>(
      {
        method: 'GET',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
          ['volume_id', request.volumeId],
        ),
      },
      unmarshalListSnapshotsResponse,
    )
  
  /**
   * List all snapshots. List all available snapshots in a specified zone. By default, the snapshots listed are ordered by creation date in ascending order. This can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListSnapshotsRequest}
   * @returns A Promise of ListSnapshotsResponse
   */
  listSnapshots = (request: Readonly<ListSnapshotsRequest> = {}) =>
    enrichForPagination('snapshots', this.pageOfListSnapshots, request)

  
  /**
   * Get a snapshot. Retrieve technical information about a specific snapshot. Details such as size, volume type, and status are returned in the response.
   *
   * @param request - The request {@link GetSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  getSnapshot = (request: Readonly<GetSnapshotRequest>) =>
    this.client.fetch<Snapshot>(
      {
        method: 'GET',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
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
      options?.stop ?? (res => Promise.resolve(!SNAPSHOT_TRANSIENT_STATUSES_BLOCK.includes(res.status))),
      this.getSnapshot,
      request,
      options,
    )

  
  /**
   * Create a snapshot of a volume. To create a snapshot, the volume must be in the `in_use` or the `available` status.
If your volume is in a transient state, you need to wait until the end of the current operation.
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
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots`,
      },
      unmarshalSnapshot,
    )

  
  /**
   * (Deprecated in favor of `ImportSnapshotFromObjectStorage`). Import a snapshot from a Scaleway Object Storage bucket
The bucket must contain a QCOW2 image.
The bucket can be imported into any Availability Zone as long as it is in the same region as the bucket.
   *
   * @deprecated
   * @param request - The request {@link ImportSnapshotFromS3Request}
   * @returns A Promise of Snapshot
   */
  importSnapshotFromS3 = (request: Readonly<ImportSnapshotFromS3Request>) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalImportSnapshotFromS3Request(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/import-from-s3`,
      },
      unmarshalSnapshot,
    )

  
  /**
   * Import a snapshot from a Scaleway Object Storage bucket. The bucket must contain a QCOW2 image.
The bucket can be imported into any Availability Zone as long as it is in the same region as the bucket.
   *
   * @param request - The request {@link ImportSnapshotFromObjectStorageRequest}
   * @returns A Promise of Snapshot
   */
  importSnapshotFromObjectStorage = (request: Readonly<ImportSnapshotFromObjectStorageRequest>) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalImportSnapshotFromObjectStorageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/import-from-object-storage`,
      },
      unmarshalSnapshot,
    )

  
  /**
   * Export a snapshot to a Scaleway Object Storage bucket. The snapshot is exported in QCOW2 format.
The snapshot must not be in transient state.
   *
   * @param request - The request {@link ExportSnapshotToObjectStorageRequest}
   * @returns A Promise of Snapshot
   */
  exportSnapshotToObjectStorage = (request: Readonly<ExportSnapshotToObjectStorageRequest>) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalExportSnapshotToObjectStorageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}/export-to-object-storage`,
      },
      unmarshalSnapshot,
    )

  
  /**
   * Delete a snapshot. You must specify the `snapshot_id` of the snapshot you want to delete. The snapshot must not be in use.
   *
   * @param request - The request {@link DeleteSnapshotRequest}
   */
  deleteSnapshot = (request: Readonly<DeleteSnapshotRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
    )

  
  /**
   * Update a snapshot. Update the name or tags of the snapshot.
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
        path: `/block/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSnapshot,
    )

  
}

