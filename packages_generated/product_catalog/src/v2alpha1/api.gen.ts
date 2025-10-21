// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  urlParams,
} from '@scaleway/sdk-client'
import type { Region as ScwRegion, Zone as ScwZone } from '@scaleway/sdk-client'
import { unmarshalListPublicCatalogProductsResponse } from './marshalling.gen.js'
import type {
  ListPublicCatalogProductsResponse,
  PublicCatalogApiListPublicCatalogProductsRequest,
} from './types.gen.js'

/**
 * Product Catalog API.
 */
export class PublicCatalogAPI extends ParentAPI {
  protected pageOfListPublicCatalogProducts = (
    request: Readonly<PublicCatalogApiListPublicCatalogProductsRequest> = {},
  ) =>
    this.client.fetch<ListPublicCatalogProductsResponse>(
      {
        method: 'GET',
        path: `/product-catalog/v2alpha1/public-catalog/products`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['product_types', request.productTypes],
          ...Object.entries(
            resolveOneOf<boolean | ScwRegion | ScwZone | string>([
              { param: 'global', value: request.global },
              {
                default: this.client.settings.defaultRegion,
                param: 'region',
                value: request.region,
              },
              {
                default: this.client.settings.defaultZone,
                param: 'zone',
                value: request.zone,
              },
              { param: 'datacenter', value: request.datacenter },
            ]),
          ),
        ),
      },
      unmarshalListPublicCatalogProductsResponse,
    )

  /**
   * List all available products. List all available products in the Scaleway catalog. Returns a complete list of products with their corresponding description, locations, prices and properties. You can define the `page` number and `page_size` for your query in the request.
   *
   * @param request - The request {@link PublicCatalogApiListPublicCatalogProductsRequest}
   * @returns A Promise of ListPublicCatalogProductsResponse
   */
  listPublicCatalogProducts = (
    request: Readonly<PublicCatalogApiListPublicCatalogProductsRequest> = {},
  ) =>
    enrichForPagination(
      'products',
      this.pageOfListPublicCatalogProducts,
      request,
    )
}
