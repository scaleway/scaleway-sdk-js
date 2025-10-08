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
import { FILE_SYSTEM_TRANSIENT_STATUSES as FILE_SYSTEM_TRANSIENT_STATUSES_FILE } from './content.gen'
import {
  marshalCreateFileSystemRequest,
  marshalUpdateFileSystemRequest,
  unmarshalFileSystem,
  unmarshalListAttachmentsResponse,
  unmarshalListFileSystemsResponse,
} from './marshalling.gen'
import type {
  CreateFileSystemRequest,
  DeleteFileSystemRequest,
  FileSystem,
  GetFileSystemRequest,
  ListAttachmentsRequest,
  ListAttachmentsResponse,
  ListFileSystemsRequest,
  ListFileSystemsResponse,
  UpdateFileSystemRequest,
} from './types.gen'

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
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par'],
  })

  /**
   * Get filesystem details. Retrieve all properties and current status of a specific filesystem identified by its ID.
   *
   * @param request - The request {@link GetFileSystemRequest}
   * @returns A Promise of FileSystem
   */
  getFileSystem = (request: Readonly<GetFileSystemRequest>) =>
    this.client.fetch<FileSystem>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems/${validatePathParam('filesystemId', request.filesystemId)}`,
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
      options?.stop ??
        (res =>
          Promise.resolve(
            !FILE_SYSTEM_TRANSIENT_STATUSES_FILE.includes(res.status),
          )),
      this.getFileSystem,
      request,
      options,
    )

  protected pageOfListFileSystems = (
    request: Readonly<ListFileSystemsRequest> = {},
  ) =>
    this.client.fetch<ListFileSystemsResponse>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems`,
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
      unmarshalListFileSystemsResponse,
    )

  /**
   * List all filesystems. Retrieve all filesystems in the specified region. By default, the filesystems listed are ordered by creation date in ascending order. This can be modified using the `order_by` field.
   *
   * @param request - The request {@link ListFileSystemsRequest}
   * @returns A Promise of ListFileSystemsResponse
   */
  listFileSystems = (request: Readonly<ListFileSystemsRequest> = {}) =>
    enrichForPagination('filesystems', this.pageOfListFileSystems, request)

  protected pageOfListAttachments = (
    request: Readonly<ListAttachmentsRequest> = {},
  ) =>
    this.client.fetch<ListAttachmentsResponse>(
      {
        method: 'GET',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/attachments`,
        urlParams: urlParams(
          ['filesystem_id', request.filesystemId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['resource_id', request.resourceId],
          ['resource_type', request.resourceType],
          ['zone', request.zone],
        ),
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
  listAttachments = (request: Readonly<ListAttachmentsRequest> = {}) =>
    enrichForPagination('attachments', this.pageOfListAttachments, request)

  /**
   * Create a new filesystem. To create a new filesystem, you must specify a name, a size, and a project ID.
   *
   * @param request - The request {@link CreateFileSystemRequest}
   * @returns A Promise of FileSystem
   */
  createFileSystem = (request: Readonly<CreateFileSystemRequest>) =>
    this.client.fetch<FileSystem>(
      {
        body: JSON.stringify(
          marshalCreateFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems`,
      },
      unmarshalFileSystem,
    )

  /**
   * Delete a detached filesystem. You must specify the `filesystem_id` of the filesystem you want to delete.
   *
   * @param request - The request {@link DeleteFileSystemRequest}
   */
  deleteFileSystem = (request: Readonly<DeleteFileSystemRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems/${validatePathParam('filesystemId', request.filesystemId)}`,
    })

  /**
   * Update filesystem properties. Update the technical details of a filesystem, such as its name, tags or its new size.
   *
   * @param request - The request {@link UpdateFileSystemRequest}
   * @returns A Promise of FileSystem
   */
  updateFileSystem = (request: Readonly<UpdateFileSystemRequest>) =>
    this.client.fetch<FileSystem>(
      {
        body: JSON.stringify(
          marshalUpdateFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/file/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/filesystems/${validatePathParam('filesystemId', request.filesystemId)}`,
      },
      unmarshalFileSystem,
    )
}
