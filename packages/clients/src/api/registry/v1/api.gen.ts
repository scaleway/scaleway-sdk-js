// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, WaitForOptions } from '../../../bridge'
import {
  IMAGE_TRANSIENT_STATUSES,
  NAMESPACE_TRANSIENT_STATUSES,
  TAG_TRANSIENT_STATUSES,
} from './content.gen'
import {
  marshalCreateNamespaceRequest,
  marshalUpdateImageRequest,
  marshalUpdateNamespaceRequest,
  unmarshalImage,
  unmarshalListImagesResponse,
  unmarshalListNamespacesResponse,
  unmarshalListTagsResponse,
  unmarshalNamespace,
  unmarshalTag,
} from './marshalling.gen'
import type {
  CreateNamespaceRequest,
  DeleteImageRequest,
  DeleteNamespaceRequest,
  DeleteTagRequest,
  GetImageRequest,
  GetNamespaceRequest,
  GetTagRequest,
  Image,
  ListImagesRequest,
  ListImagesResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListTagsRequest,
  ListTagsResponse,
  Namespace,
  Tag,
  UpdateImageRequest,
  UpdateNamespaceRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Registry API.
 *
 * Container registry API.
 */
export class RegistryV1GenAPI extends API {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  protected pageOfListNamespaces = (
    request: Readonly<ListNamespacesRequest> = {},
  ) =>
    this.client.fetch<ListNamespacesResponse>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces`,
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
        ),
      },
      unmarshalListNamespacesResponse,
    )

  /**
   * List all your namespaces
   *
   * @param request - The request {@link ListNamespacesRequest}
   * @returns A Promise of ListNamespacesResponse
   */
  listNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    enrichForPagination('namespaces', this.pageOfListNamespaces, request)

  /**
   * Get the namespace associated with the given id.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @returns A Promise of Namespace
   */
  getNamespace = (request: Readonly<GetNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Waits for {@link Namespace} to be in a final state.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @param options - The waiting options
   * @returns A Promise of Namespace
   */
  waitForNamespace = (
    request: Readonly<GetNamespaceRequest>,
    options?: Readonly<WaitForOptions<Namespace>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!NAMESPACE_TRANSIENT_STATUSES.includes(res.status))),
      this.getNamespace,
      request,
      options,
    )

  /**
   * Create a new namespace
   *
   * @param request - The request {@link CreateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  createNamespace = (request: Readonly<CreateNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(
          marshalCreateNamespaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces`,
      },
      unmarshalNamespace,
    )

  /**
   * Update the namespace associated with the given id.
   *
   * @param request - The request {@link UpdateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  updateNamespace = (request: Readonly<UpdateNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(
          marshalUpdateNamespaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Delete the namespace associated with the given id.
   *
   * @param request - The request {@link DeleteNamespaceRequest}
   * @returns A Promise of Namespace
   */
  deleteNamespace = (request: Readonly<DeleteNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'DELETE',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  protected pageOfListImages = (request: Readonly<ListImagesRequest> = {}) =>
    this.client.fetch<ListImagesResponse>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/images`,
        urlParams: urlParams(
          ['name', request.name],
          ['namespace_id', request.namespaceId],
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
      unmarshalListImagesResponse,
    )

  /**
   * List all your images
   *
   * @param request - The request {@link ListImagesRequest}
   * @returns A Promise of ListImagesResponse
   */
  listImages = (request: Readonly<ListImagesRequest> = {}) =>
    enrichForPagination('images', this.pageOfListImages, request)

  /**
   * Get the image associated with the given id.
   *
   * @param request - The request {@link GetImageRequest}
   * @returns A Promise of Image
   */
  getImage = (request: Readonly<GetImageRequest>) =>
    this.client.fetch<Image>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/images/${validatePathParam('imageId', request.imageId)}`,
      },
      unmarshalImage,
    )

  /**
   * Waits for {@link Image} to be in a final state.
   *
   * @param request - The request {@link GetImageRequest}
   * @param options - The waiting options
   * @returns A Promise of Image
   */
  waitForImage = (
    request: Readonly<GetImageRequest>,
    options?: Readonly<WaitForOptions<Image>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!IMAGE_TRANSIENT_STATUSES.includes(res.status))),
      this.getImage,
      request,
      options,
    )

  /**
   * Update the image associated with the given id.
   *
   * @param request - The request {@link UpdateImageRequest}
   * @returns A Promise of Image
   */
  updateImage = (request: Readonly<UpdateImageRequest>) =>
    this.client.fetch<Image>(
      {
        body: JSON.stringify(
          marshalUpdateImageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/images/${validatePathParam('imageId', request.imageId)}`,
      },
      unmarshalImage,
    )

  /**
   * Delete the image associated with the given id.
   *
   * @param request - The request {@link DeleteImageRequest}
   * @returns A Promise of Image
   */
  deleteImage = (request: Readonly<DeleteImageRequest>) =>
    this.client.fetch<Image>(
      {
        method: 'DELETE',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/images/${validatePathParam('imageId', request.imageId)}`,
      },
      unmarshalImage,
    )

  protected pageOfListTags = (request: Readonly<ListTagsRequest>) =>
    this.client.fetch<ListTagsResponse>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/images/${validatePathParam('imageId', request.imageId)}/tags`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListTagsResponse,
    )

  /**
   * List all your tags
   *
   * @param request - The request {@link ListTagsRequest}
   * @returns A Promise of ListTagsResponse
   */
  listTags = (request: Readonly<ListTagsRequest>) =>
    enrichForPagination('tags', this.pageOfListTags, request)

  /**
   * Get the tag associated with the given id.
   *
   * @param request - The request {@link GetTagRequest}
   * @returns A Promise of Tag
   */
  getTag = (request: Readonly<GetTagRequest>) =>
    this.client.fetch<Tag>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tags/${validatePathParam('tagId', request.tagId)}`,
      },
      unmarshalTag,
    )

  /**
   * Waits for {@link Tag} to be in a final state.
   *
   * @param request - The request {@link GetTagRequest}
   * @param options - The waiting options
   * @returns A Promise of Tag
   */
  waitForTag = (
    request: Readonly<GetTagRequest>,
    options?: Readonly<WaitForOptions<Tag>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res => Promise.resolve(!TAG_TRANSIENT_STATUSES.includes(res.status))),
      this.getTag,
      request,
      options,
    )

  /**
   * Delete the tag associated with the given id.
   *
   * @param request - The request {@link DeleteTagRequest}
   * @returns A Promise of Tag
   */
  deleteTag = (request: Readonly<DeleteTagRequest>) =>
    this.client.fetch<Tag>(
      {
        method: 'DELETE',
        path: `/registry/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tags/${validatePathParam('tagId', request.tagId)}`,
        urlParams: urlParams(['force', request.force]),
      },
      unmarshalTag,
    )
}
