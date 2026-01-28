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
import { DATALAB_TRANSIENT_STATUSES as DATALAB_TRANSIENT_STATUSES_DATALAB } from './content.gen.js'
import {
  marshalCreateDatalabRequest,
  marshalUpdateDatalabRequest,
  unmarshalDatalab,
  unmarshalListClusterVersionsResponse,
  unmarshalListDatalabsResponse,
  unmarshalListNodeTypesResponse,
  unmarshalListNotebookVersionsResponse,
} from './marshalling.gen.js'
import type {
  CreateDatalabRequest,
  Datalab,
  DeleteDatalabRequest,
  GetDatalabRequest,
  ListClusterVersionsRequest,
  ListClusterVersionsResponse,
  ListDatalabsRequest,
  ListDatalabsResponse,
  ListNodeTypesRequest,
  ListNodeTypesResponse,
  ListNotebookVersionsRequest,
  ListNotebookVersionsResponse,
  UpdateDatalabRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Data Lab API for Apache Spark™.

This API allows you to manage your Data Lab resources.
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
   * Create a new Data Lab. In this call, one can personalize the node counts, add a notebook, choose the private network, define the persistent volume storage capacity.
   *
   * @param request - The request {@link CreateDatalabRequest}
   * @returns A Promise of Datalab
   */
  createDatalab = (request: Readonly<CreateDatalabRequest>) =>
    this.client.fetch<Datalab>(
      {
        body: JSON.stringify(
          marshalCreateDatalabRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/datalab/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/datalabs`,
      },
      unmarshalDatalab,
    )

  /**
   * Retrieve information about a given Data Lab cluster, specified by the `region` and `datalab_id` parameters. Its full details, including name, status, node counts, are returned in the response object.
   *
   * @param request - The request {@link GetDatalabRequest}
   * @returns A Promise of Datalab
   */
  getDatalab = (request: Readonly<GetDatalabRequest>) =>
    this.client.fetch<Datalab>(
      {
        method: 'GET',
        path: `/datalab/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/datalabs/${validatePathParam('datalabId', request.datalabId)}`,
      },
      unmarshalDatalab,
    )

  /**
   * Waits for {@link Datalab} to be in a final state.
   *
   * @param request - The request {@link GetDatalabRequest}
   * @param options - The waiting options
   * @returns A Promise of Datalab
   */
  waitForDatalab = (
    request: Readonly<GetDatalabRequest>,
    options?: Readonly<WaitForOptions<Datalab>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !DATALAB_TRANSIENT_STATUSES_DATALAB.includes(res.status),
          )),
      this.getDatalab,
      request,
      options,
    )

  protected pageOfListDatalabs = (
    request: Readonly<ListDatalabsRequest> = {},
  ) =>
    this.client.fetch<ListDatalabsResponse>(
      {
        method: 'GET',
        path: `/datalab/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/datalabs`,
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
      unmarshalListDatalabsResponse,
    )

  /**
   * List information about Data Lab cluster within a project or an organization.
   *
   * @param request - The request {@link ListDatalabsRequest}
   * @returns A Promise of ListDatalabsResponse
   */
  listDatalabs = (request: Readonly<ListDatalabsRequest> = {}) =>
    enrichForPagination('datalabs', this.pageOfListDatalabs, request)

  /**
   * Update a Data Labs node counts. Allows for up- and downscaling on demand, depending on the expected workload.
   *
   * @param request - The request {@link UpdateDatalabRequest}
   * @returns A Promise of Datalab
   */
  updateDatalab = (request: Readonly<UpdateDatalabRequest>) =>
    this.client.fetch<Datalab>(
      {
        body: JSON.stringify(
          marshalUpdateDatalabRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/datalab/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/datalabs/${validatePathParam('datalabId', request.datalabId)}`,
      },
      unmarshalDatalab,
    )

  /**
   * Delete a Data Lab based on its region and id.
   *
   * @param request - The request {@link DeleteDatalabRequest}
   * @returns A Promise of Datalab
   */
  deleteDatalab = (request: Readonly<DeleteDatalabRequest>) =>
    this.client.fetch<Datalab>(
      {
        method: 'DELETE',
        path: `/datalab/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/datalabs/${validatePathParam('datalabId', request.datalabId)}`,
      },
      unmarshalDatalab,
    )

  protected pageOfListNodeTypes = (
    request: Readonly<ListNodeTypesRequest> = {},
  ) =>
    this.client.fetch<ListNodeTypesResponse>(
      {
        method: 'GET',
        path: `/datalab/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-types`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['resource_type', request.resourceType],
          ['targets', request.targets],
        ),
      },
      unmarshalListNodeTypesResponse,
    )

  /**
   * List the available compute node types upon which a Data Lab can be created.
   *
   * @param request - The request {@link ListNodeTypesRequest}
   * @returns A Promise of ListNodeTypesResponse
   */
  listNodeTypes = (request: Readonly<ListNodeTypesRequest> = {}) =>
    enrichForPagination('nodeTypes', this.pageOfListNodeTypes, request)

  protected pageOfListNotebookVersions = (
    request: Readonly<ListNotebookVersionsRequest> = {},
  ) =>
    this.client.fetch<ListNotebookVersionsResponse>(
      {
        method: 'GET',
        path: `/datalab/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/notebook-versions`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListNotebookVersionsResponse,
    )

  /**
   * List available notebook versions.
   *
   * @param request - The request {@link ListNotebookVersionsRequest}
   * @returns A Promise of ListNotebookVersionsResponse
   */
  listNotebookVersions = (
    request: Readonly<ListNotebookVersionsRequest> = {},
  ) =>
    enrichForPagination('notebooks', this.pageOfListNotebookVersions, request)

  protected pageOfListClusterVersions = (
    request: Readonly<ListClusterVersionsRequest> = {},
  ) =>
    this.client.fetch<ListClusterVersionsResponse>(
      {
        method: 'GET',
        path: `/datalab/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/cluster-versions`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListClusterVersionsResponse,
    )

  /**
   * List the Spark versions the product is compatible with.
   *
   * @param request - The request {@link ListClusterVersionsRequest}
   * @returns A Promise of ListClusterVersionsResponse
   */
  listClusterVersions = (request: Readonly<ListClusterVersionsRequest> = {}) =>
    enrichForPagination('clusters', this.pageOfListClusterVersions, request)
}
