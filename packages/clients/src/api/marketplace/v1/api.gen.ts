// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import {
  unmarshalGetImageResponse,
  unmarshalGetVersionResponse,
  unmarshalListImagesResponse,
  unmarshalListVersionsResponse,
} from './marshalling.gen'
import type {
  GetImageRequest,
  GetImageResponse,
  GetVersionRequest,
  GetVersionResponse,
  ListImagesRequest,
  ListImagesResponse,
  ListVersionsRequest,
  ListVersionsResponse,
} from './types.gen'

/** Marketplace API. */
export class MarketplaceV1GenAPI extends API {
  protected pageOfListImages = (request: Readonly<ListImagesRequest> = {}) =>
    this.client.fetch<ListImagesResponse>(
      {
        method: 'GET',
        path: `/marketplace/v1/images`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
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
  listImages = (request: Readonly<ListImagesRequest> = {}) =>
    enrichForPagination('images', this.pageOfListImages, request)

  /**
   * Get a specific marketplace image
   *
   * @param request - The request {@link GetImageRequest}
   * @returns A Promise of GetImageResponse
   */
  getImage = (request: Readonly<GetImageRequest>) =>
    this.client.fetch<GetImageResponse>(
      {
        method: 'GET',
        path: `/marketplace/v1/images/${validatePathParam(
          'imageId',
          request.imageId,
        )}`,
      },
      unmarshalGetImageResponse,
    )

  listVersions = (request: Readonly<ListVersionsRequest>) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/marketplace/v1/images/${validatePathParam(
          'imageId',
          request.imageId,
        )}/versions`,
      },
      unmarshalListVersionsResponse,
    )

  getVersion = (request: Readonly<GetVersionRequest>) =>
    this.client.fetch<GetVersionResponse>(
      {
        method: 'GET',
        path: `/marketplace/v1/images/${validatePathParam(
          'imageId',
          request.imageId,
        )}/versions/${validatePathParam('versionId', request.versionId)}`,
      },
      unmarshalGetVersionResponse,
    )
}
