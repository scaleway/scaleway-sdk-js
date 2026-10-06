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
import {
  unmarshalCategory,
  unmarshalImage,
  unmarshalListCategoriesResponse,
  unmarshalListImagesResponse,
  unmarshalListLocalImagesResponse,
  unmarshalListVersionsResponse,
  unmarshalLocalImage,
  unmarshalVersion,
} from './marshalling.gen.js'
import type {
  Category,
  GetCategoryRequest,
  GetImageRequest,
  GetLocalImageRequest,
  GetVersionRequest,
  Image,
  ListCategoriesRequest,
  ListCategoriesResponse,
  ListImagesRequest,
  ListImagesResponse,
  ListLocalImagesRequest,
  ListLocalImagesResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  LocalImage,
  Version,
} from './types.gen.js'

/**
 * Marketplace API.

This API allows you to find available images for use when launching a Scaleway Instance.
 */
export class API extends ParentAPI {
  protected pageOfListImages = (request: Readonly<ListImagesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListImagesResponse>(
      {
        method: 'GET',
        path: `/marketplace/v2/images`,
        urlParams: urlParams(
          ['arch', request.arch],
          ['category', request.category],
          ['include_eol', request.includeEol],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListImagesResponse,
    )
  
  /**
   * List marketplace images. List all available images on the marketplace, their UUID, CPU architecture and description.
   *
   * @param request - The request {@link ListImagesRequest}
   * @returns A Promise of ListImagesResponse
   */
  listImages = (request: Readonly<ListImagesRequest>, options?: RequestOptions) =>
    enrichForPagination('images', this.pageOfListImages, request, options)

  
  /**
   * Get a specific marketplace image. Get detailed information about a marketplace image, specified by its `image_id` (UUID format).
   *
   * @param request - The request {@link GetImageRequest}
   * @returns A Promise of Image
   */
  getImage = (request: Readonly<GetImageRequest>, options?: RequestOptions) =>
    this.client.fetch<Image>(
      {
        method: 'GET',
        path: `/marketplace/v2/images/${validatePathParam('imageId', request.imageId)}`,
        signal: options?.signal,
      },
      unmarshalImage,
    )

  
  protected pageOfListVersions = (request: Readonly<ListVersionsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/marketplace/v2/versions`,
        urlParams: urlParams(
          ['image_id', request.imageId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListVersionsResponse,
    )
  
  /**
   * List versions of an Image. Get a list of all available version of an image, specified by its `image_id` (UUID format).
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest>, options?: RequestOptions) =>
    enrichForPagination('versions', this.pageOfListVersions, request, options)

  
  /**
   * Get a specific image version. Get information such as the name, creation date, last update and published date for an image version specified by its `version_id` (UUID format).
   *
   * @param request - The request {@link GetVersionRequest}
   * @returns A Promise of Version
   */
  getVersion = (request: Readonly<GetVersionRequest>, options?: RequestOptions) =>
    this.client.fetch<Version>(
      {
        method: 'GET',
        path: `/marketplace/v2/versions/${validatePathParam('versionId', request.versionId)}`,
        signal: options?.signal,
      },
      unmarshalVersion,
    )

  
  protected pageOfListLocalImages = (request: Readonly<ListLocalImagesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListLocalImagesResponse>(
      {
        method: 'GET',
        path: `/marketplace/v2/local-images`,
        urlParams: urlParams(
          ['arch', request.arch],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['type', request.type],
          ['zone', request.zone],  
          ...Object.entries(resolveOneOf([
            {param: 'image_id',
              value: request.imageId,
            },
            {param: 'version_id',
              value: request.versionId,
            },
            {param: 'image_label',
              value: request.imageLabel,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListLocalImagesResponse,
    )
  
  /**
   * List local images from a specific image or version. List information about local images in a specific Availability Zone, specified by its `image_id` (UUID format), `version_id` (UUID format) or `image_label`. Only one of these three parameters may be set.
   *
   * @param request - The request {@link ListLocalImagesRequest}
   * @returns A Promise of ListLocalImagesResponse
   */
  listLocalImages = (request: Readonly<ListLocalImagesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('localImages', this.pageOfListLocalImages, request, options)

  
  /**
   * Get a specific local image by ID. Get detailed information about a local image, including compatible commercial types, supported architecture, labels and the Availability Zone of the image, specified by its `local_image_id` (UUID format).
   *
   * @param request - The request {@link GetLocalImageRequest}
   * @returns A Promise of LocalImage
   */
  getLocalImage = (request: Readonly<GetLocalImageRequest>, options?: RequestOptions) =>
    this.client.fetch<LocalImage>(
      {
        method: 'GET',
        path: `/marketplace/v2/local-images/${validatePathParam('localImageId', request.localImageId)}`,
        signal: options?.signal,
      },
      unmarshalLocalImage,
    )

  
  protected pageOfListCategories = (request: Readonly<ListCategoriesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListCategoriesResponse>(
      {
        method: 'GET',
        path: `/marketplace/v2/categories`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListCategoriesResponse,
    )
  
  /**
   * List existing image categories. Get a list of all existing categories. The output can be paginated.
   *
   * @param request - The request {@link ListCategoriesRequest}
   * @returns A Promise of ListCategoriesResponse
   */
  listCategories = (request: Readonly<ListCategoriesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('categories', this.pageOfListCategories, request, options)

  
  /**
   * Get a specific category. Get information about a specific category of the marketplace catalog, specified by its `category_id` (UUID format).
   *
   * @param request - The request {@link GetCategoryRequest}
   * @returns A Promise of Category
   */
  getCategory = (request: Readonly<GetCategoryRequest>, options?: RequestOptions) =>
    this.client.fetch<Category>(
      {
        method: 'GET',
        path: `/marketplace/v2/categories/${validatePathParam('categoryId', request.categoryId)}`,
        signal: options?.signal,
      },
      unmarshalCategory,
    )

  
}

