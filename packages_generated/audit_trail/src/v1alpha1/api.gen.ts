// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality } from '@scaleway/sdk-client'
import {
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  unmarshalListAuthenticationEventsResponse,
  unmarshalListEventsResponse,
  unmarshalListProductsResponse,
} from './marshalling.gen'
import type {
  ListAuthenticationEventsRequest,
  ListAuthenticationEventsResponse,
  ListEventsRequest,
  ListEventsResponse,
  ListProductsRequest,
  ListProductsResponse,
} from './types.gen'

/**
 * Audit Trail API.

This API allows you to ensure accountability and security by recording events and changes performed within your Scaleway Organization.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams'],
  })

  /**
   * List events. Retrieve the list of Audit Trail events for a Scaleway Organization and/or Project. You must specify the `organization_id` and optionally, the `project_id`.
   *
   * @param request - The request {@link ListEventsRequest}
   * @returns A Promise of ListEventsResponse
   */
  listEvents = (request: Readonly<ListEventsRequest> = {}) =>
    this.client.fetch<ListEventsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/events`,
        urlParams: urlParams(
          ['method_name', request.methodName],
          ['order_by', request.orderBy],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['page_token', request.pageToken],
          ['principal_id', request.principalId],
          ['product_name', request.productName],
          ['project_id', request.projectId],
          ['recorded_after', request.recordedAfter],
          ['recorded_before', request.recordedBefore],
          ['resource_id', request.resourceId],
          ['resource_type', request.resourceType],
          ['service_name', request.serviceName],
          ['source_ip', request.sourceIp],
          ['status', request.status],
        ),
      },
      unmarshalListEventsResponse,
    )

  /**
   * List authentication events. Retrieve the list of Audit Trail authentication events for a Scaleway Organization. You must specify the `organization_id`.
   *
   * @param request - The request {@link ListAuthenticationEventsRequest}
   * @returns A Promise of ListAuthenticationEventsResponse
   */
  listAuthenticationEvents = (
    request: Readonly<ListAuthenticationEventsRequest> = {},
  ) =>
    this.client.fetch<ListAuthenticationEventsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/authentication-events`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['page_token', request.pageToken],
          ['recorded_after', request.recordedAfter],
          ['recorded_before', request.recordedBefore],
        ),
      },
      unmarshalListAuthenticationEventsResponse,
    )

  /**
   * Retrieve the list of Scaleway resources for which you have Audit Trail events.
   *
   * @param request - The request {@link ListProductsRequest}
   * @returns A Promise of ListProductsResponse
   */
  listProducts = (request: Readonly<ListProductsRequest> = {}) =>
    this.client.fetch<ListProductsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/products`,
        urlParams: urlParams([
          'organization_id',
          request.organizationId ?? this.client.settings.defaultOrganizationId,
        ]),
      },
      unmarshalListProductsResponse,
    )
}
