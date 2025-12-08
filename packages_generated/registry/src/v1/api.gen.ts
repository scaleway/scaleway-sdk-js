// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { WaitForOptions, ApiLocality,} from '@scaleway/sdk-client'
import {IMAGE_TRANSIENT_STATUSES as IMAGE_TRANSIENT_STATUSES_REGISTRY,NAMESPACE_TRANSIENT_STATUSES as NAMESPACE_TRANSIENT_STATUSES_REGISTRY,TAG_TRANSIENT_STATUSES as TAG_TRANSIENT_STATUSES_REGISTRY,} from './content.gen.js'
import {
  marshalCreateNamespaceRequest,
  unmarshalImage,
  unmarshalListImagesResponse,
  unmarshalListNamespacesResponse,
  unmarshalListTagsResponse,
  unmarshalNamespace,
  unmarshalTag,
  marshalUpdateImageRequest,
  marshalUpdateNamespaceRequest,
} from './marshalling.gen.js'
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
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Container Registry API.

This API allows you to manage your Container Registry resources.
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
        'nl-ams',
        'pl-waw',
      ],
    })
  
  protected pageOfListNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    this.client.fetch<ListNamespacesResponse>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListNamespacesResponse,
    )
  
  /**
   * List namespaces. List all namespaces in a specified region. By default, the namespaces listed are ordered by creation date in ascending order. This can be modified via the order_by field. You can also define additional parameters for your query, such as the `instance_id` and `project_id` parameters.
   *
   * @param request - The request {@link ListNamespacesRequest}
   * @returns A Promise of ListNamespacesResponse
   */
  listNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    enrichForPagination('namespaces', this.pageOfListNamespaces, request)

  
  /**
   * Get a namespace. Retrieve information about a given namespace, specified by its `namespace_id` and region. Full details about the namespace, such as `description`, `project_id`, `status`, `endpoint`, `is_public`, `size`, and `image_count` are returned in the response.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @returns A Promise of Namespace
   */
  getNamespace = (request: Readonly<GetNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
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
      options?.stop ?? (res => Promise.resolve(!NAMESPACE_TRANSIENT_STATUSES_REGISTRY.includes(res.status))),
      this.getNamespace,
      request,
      options,
    )

  
  /**
   * Create a namespace. Create a new Container Registry namespace. You must specify the namespace name and region in which you want it to be created. Optionally, you can specify the `project_id` and `is_public` in the request payload.
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
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces`,
      },
      unmarshalNamespace,
    )

  
  /**
   * Update a namespace. Update the parameters of a given namespace, specified by its `namespace_id` and `region`. You can update the `description` and `is_public` parameters.
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
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  
  /**
   * Delete a namespace. Delete a given namespace. You must specify, in the endpoint, the `region` and `namespace_id` parameters of the namespace you want to delete.
   *
   * @param request - The request {@link DeleteNamespaceRequest}
   * @returns A Promise of Namespace
   */
  deleteNamespace = (request: Readonly<DeleteNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'DELETE',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  
  protected pageOfListImages = (request: Readonly<ListImagesRequest> = {}) =>
    this.client.fetch<ListImagesResponse>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/images`,
        urlParams: urlParams(
          ['name', request.name],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListImagesResponse,
    )
  
  /**
   * List images. List all images in a specified region. By default, the images listed are ordered by creation date in ascending order. This can be modified via the order_by field. You can also define additional parameters for your query, such as the `namespace_id` and `project_id` parameters.
   *
   * @param request - The request {@link ListImagesRequest}
   * @returns A Promise of ListImagesResponse
   */
  listImages = (request: Readonly<ListImagesRequest> = {}) =>
    enrichForPagination('images', this.pageOfListImages, request)

  
  /**
   * Get an image. Retrieve information about a given container image, specified by its `image_id` and region. Full details about the image, such as `name`, `namespace_id`, `status`, `visibility`, and `size` are returned in the response.
   *
   * @param request - The request {@link GetImageRequest}
   * @returns A Promise of Image
   */
  getImage = (request: Readonly<GetImageRequest>) =>
    this.client.fetch<Image>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/images/${validatePathParam('imageId', request.imageId)}`,
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
      options?.stop ?? (res => Promise.resolve(!IMAGE_TRANSIENT_STATUSES_REGISTRY.includes(res.status))),
      this.getImage,
      request,
      options,
    )

  
  /**
   * Update an image. Update the parameters of a given image, specified by its `image_id` and `region`. You can update the `visibility` parameter.
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
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/images/${validatePathParam('imageId', request.imageId)}`,
      },
      unmarshalImage,
    )

  
  /**
   * Delete an image. Delete a given image. You must specify, in the endpoint, the `region` and `image_id` parameters of the image you want to delete.
   *
   * @param request - The request {@link DeleteImageRequest}
   * @returns A Promise of Image
   */
  deleteImage = (request: Readonly<DeleteImageRequest>) =>
    this.client.fetch<Image>(
      {
        method: 'DELETE',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/images/${validatePathParam('imageId', request.imageId)}`,
      },
      unmarshalImage,
    )

  
  protected pageOfListTags = (request: Readonly<ListTagsRequest>) =>
    this.client.fetch<ListTagsResponse>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/images/${validatePathParam('imageId', request.imageId)}/tags`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListTagsResponse,
    )
  
  /**
   * List tags. List all tags for a given image, specified by region. By default, the tags listed are ordered by creation date in ascending order. This can be modified via the order_by field. You can also define additional parameters for your query, such as the `name`.
   *
   * @param request - The request {@link ListTagsRequest}
   * @returns A Promise of ListTagsResponse
   */
  listTags = (request: Readonly<ListTagsRequest>) =>
    enrichForPagination('tags', this.pageOfListTags, request)

  
  /**
   * Get a tag. Retrieve information about a given image tag, specified by its `tag_id` and region. Full details about the tag, such as `name`, `image_id`, `status`, and `digest` are returned in the response.
   *
   * @param request - The request {@link GetTagRequest}
   * @returns A Promise of Tag
   */
  getTag = (request: Readonly<GetTagRequest>) =>
    this.client.fetch<Tag>(
      {
        method: 'GET',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tags/${validatePathParam('tagId', request.tagId)}`,
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
      options?.stop ?? (res => Promise.resolve(!TAG_TRANSIENT_STATUSES_REGISTRY.includes(res.status))),
      this.getTag,
      request,
      options,
    )

  
  /**
   * Delete a tag. Delete a given image tag. You must specify, in the endpoint, the `region` and `tag_id` parameters of the tag you want to delete.
   *
   * @param request - The request {@link DeleteTagRequest}
   * @returns A Promise of Tag
   */
  deleteTag = (request: Readonly<DeleteTagRequest>) =>
    this.client.fetch<Tag>(
      {
        method: 'DELETE',
        path: `/registry/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tags/${validatePathParam('tagId', request.tagId)}`,
        urlParams: urlParams(
          ['force', request.force],
        ),
      },
      unmarshalTag,
    )

  
}

