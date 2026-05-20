// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  urlParams,
} from '@scaleway/sdk-client'
import {
  unmarshalSearchResourcesResponse,
} from './marshalling.gen.js'
import type {
  SearchResourcesRequest,
  SearchResourcesResponse,
} from './types.gen.js'

/**
 * Search API.
 */
export class API extends ParentAPI {
  /**
   * Search API.
   *
   * @param request - The request {@link SearchResourcesRequest}
   * @returns A Promise of SearchResourcesResponse
   */
  searchResources = (request: Readonly<SearchResourcesRequest>) =>
    this.client.fetch<SearchResourcesResponse>(
      {
        method: 'GET',
        path: `/search/v1alpha1/resources`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['query', request.query],
        ),
      },
      unmarshalSearchResourcesResponse,
    )

  
}

