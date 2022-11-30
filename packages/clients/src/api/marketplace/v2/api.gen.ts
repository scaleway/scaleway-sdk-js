// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  resolveOneOf,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import {
  unmarshalCategory,
  unmarshalImage,
  unmarshalListCategoriesResponse,
  unmarshalListImagesResponse,
  unmarshalListLocalImagesResponse,
  unmarshalListVersionsResponse,
  unmarshalLocalImage,
  unmarshalVersion,
} from './marshalling.gen'
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
} from './types.gen'

/** Marketplace API. */
export class MarketplaceV2GenAPI extends API {
  protected pageOfListImages = (request: Readonly<ListImagesRequest>) =>
    this.client.fetch<ListImagesResponse>(
      {
        method: 'GET',
        path: `/marketplace/v2/images`,
        urlParams: urlParams(
          ['arch', request.arch],
          ['category', request.category],
          ['include_eol', request.includeEol],
          ['order_by', request.orderBy ?? 'name_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListImagesResponse,
    )

  /**
   * List marketplace images
   *
   * @param request - The request {@link ListImagesRequest}
   * @returns A Promise of ListImagesResponse
   */
  listImages = (request: Readonly<ListImagesRequest>) =>
    enrichForPagination('images', this.pageOfListImages, request)

  /**
   * Get a specific marketplace image
   *
   * @param request - The request {@link GetImageRequest}
   * @returns A Promise of Image
   */
  getImage = (request: Readonly<GetImageRequest>) =>
    this.client.fetch<Image>(
      {
        method: 'GET',
        path: `/marketplace/v2/images/${validatePathParam(
          'imageId',
          request.imageId,
        )}`,
      },
      unmarshalImage,
    )

  protected pageOfListVersions = (request: Readonly<ListVersionsRequest>) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/marketplace/v2/versions`,
        urlParams: urlParams(
          ['image_id', request.imageId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListVersionsResponse,
    )

  listVersions = (request: Readonly<ListVersionsRequest>) =>
    enrichForPagination('versions', this.pageOfListVersions, request)

  getVersion = (request: Readonly<GetVersionRequest>) =>
    this.client.fetch<Version>(
      {
        method: 'GET',
        path: `/marketplace/v2/versions/${validatePathParam(
          'versionId',
          request.versionId,
        )}`,
      },
      unmarshalVersion,
    )

  protected pageOfListLocalImages = (
    request: Readonly<ListLocalImagesRequest> = {},
  ) =>
    this.client.fetch<ListLocalImagesResponse>(
      {
        method: 'GET',
        path: `/marketplace/v2/local-images`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ...Object.entries(
            resolveOneOf([
              {
                param: 'image_id',
                value: request.imageId,
              },
              {
                param: 'version_id',
                value: request.versionId,
              },
            ]),
          ),
        ),
      },
      unmarshalListLocalImagesResponse,
    )

  listLocalImages = (request: Readonly<ListLocalImagesRequest> = {}) =>
    enrichForPagination('localImages', this.pageOfListLocalImages, request)

  getLocalImage = (request: Readonly<GetLocalImageRequest>) =>
    this.client.fetch<LocalImage>(
      {
        method: 'GET',
        path: `/marketplace/v2/local-images/${validatePathParam(
          'localImageId',
          request.localImageId,
        )}`,
      },
      unmarshalLocalImage,
    )

  protected pageOfListCategories = (
    request: Readonly<ListCategoriesRequest> = {},
  ) =>
    this.client.fetch<ListCategoriesResponse>(
      {
        method: 'GET',
        path: `/marketplace/v2/categories`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListCategoriesResponse,
    )

  listCategories = (request: Readonly<ListCategoriesRequest> = {}) =>
    enrichForPagination('categories', this.pageOfListCategories, request)

  getCategory = (request: Readonly<GetCategoryRequest>) =>
    this.client.fetch<Category>(
      {
        method: 'GET',
        path: `/marketplace/v2/categories/${validatePathParam(
          'categoryId',
          request.categoryId,
        )}`,
      },
      unmarshalCategory,
    )
}
