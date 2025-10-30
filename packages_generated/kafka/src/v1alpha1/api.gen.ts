// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import type { ApiLocality, WaitForOptions } from '@scaleway/sdk-client'
import { CLUSTER_TRANSIENT_STATUSES as CLUSTER_TRANSIENT_STATUSES_KAFKA } from './content.gen.js'
import {
  marshalCreateClusterRequest,
  marshalCreateEndpointRequest,
  marshalUpdateClusterRequest,
  marshalUpdateUserRequest,
  unmarshalCluster,
  unmarshalEndpoint,
  unmarshalListClustersResponse,
  unmarshalListNodeTypesResponse,
  unmarshalListUsersResponse,
  unmarshalListVersionsResponse,
  unmarshalUser,
} from './marshalling.gen.js'
import type {
  Cluster,
  CreateClusterRequest,
  CreateEndpointRequest,
  DeleteClusterRequest,
  DeleteEndpointRequest,
  Endpoint,
  GetClusterCertificateAuthorityRequest,
  GetClusterRequest,
  ListClustersRequest,
  ListClustersResponse,
  ListNodeTypesRequest,
  ListNodeTypesResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  RenewClusterCertificateAuthorityRequest,
  UpdateClusterRequest,
  UpdateUserRequest,
  User,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Clusters for Apache Kafka®.

This API allows you to manage your Clusters for Apache Kafka®. This product is currently in Private Beta.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par'],
  })

  protected pageOfListNodeTypes = (
    request: Readonly<ListNodeTypesRequest> = {},
  ) =>
    this.client.fetch<ListNodeTypesResponse>(
      {
        method: 'GET',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-types`,
        urlParams: urlParams(
          ['include_disabled_types', request.includeDisabledTypes],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListNodeTypesResponse,
    )

  /**
   * List available node types.
   *
   * @param request - The request {@link ListNodeTypesRequest}
   * @returns A Promise of ListNodeTypesResponse
   */
  listNodeTypes = (request: Readonly<ListNodeTypesRequest> = {}) =>
    enrichForPagination('nodeTypes', this.pageOfListNodeTypes, request)

  protected pageOfListVersions = (
    request: Readonly<ListVersionsRequest> = {},
  ) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['version', request.version],
        ),
      },
      unmarshalListVersionsResponse,
    )

  /**
   * List Kafka versions. List all available versions of Kafka at the current time.
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest> = {}) =>
    enrichForPagination('versions', this.pageOfListVersions, request)

  protected pageOfListClusters = (
    request: Readonly<ListClustersRequest> = {},
  ) =>
    this.client.fetch<ListClustersResponse>(
      {
        method: 'GET',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters`,
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
      unmarshalListClustersResponse,
    )

  /**
   * List Kafka clusters. List all Kafka clusters in the specified region. By default, the clusters returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field. You can define additional parameters for your query, such as `tags` and `name`. For the `name` parameter, the value you include will be checked against the whole name string to see if it includes the string you put in the parameter.
   *
   * @param request - The request {@link ListClustersRequest}
   * @returns A Promise of ListClustersResponse
   */
  listClusters = (request: Readonly<ListClustersRequest> = {}) =>
    enrichForPagination('clusters', this.pageOfListClusters, request)

  /**
   * Get a Kafka cluster. Retrieve information about a given Kafka cluster, specified by the `region` and `cluster_id` parameters. Its full details, including name, status, IP address and port, are returned in the response object.
   *
   * @param request - The request {@link GetClusterRequest}
   * @returns A Promise of Cluster
   */
  getCluster = (request: Readonly<GetClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'GET',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Waits for {@link Cluster} to be in a final state.
   *
   * @param request - The request {@link GetClusterRequest}
   * @param options - The waiting options
   * @returns A Promise of Cluster
   */
  waitForCluster = (
    request: Readonly<GetClusterRequest>,
    options?: Readonly<WaitForOptions<Cluster>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !CLUSTER_TRANSIENT_STATUSES_KAFKA.includes(res.status),
          )),
      this.getCluster,
      request,
      options,
    )

  /**
   * Create a Kafka cluster. Create a new Kafka cluster.
   *
   * @param request - The request {@link CreateClusterRequest}
   * @returns A Promise of Cluster
   */
  createCluster = (request: Readonly<CreateClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalCreateClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters`,
      },
      unmarshalCluster,
    )

  /**
   * Update a Kafka cluster. Update the parameters of a Kafka cluster.
   *
   * @param request - The request {@link UpdateClusterRequest}
   * @returns A Promise of Cluster
   */
  updateCluster = (request: Readonly<UpdateClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        body: JSON.stringify(
          marshalUpdateClusterRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Delete a Kafka cluster. Delete a given Kafka cluster, specified by the `region` and `cluster_id` parameters. Deleting a Kafka cluster is permanent, and cannot be undone. Note that upon deletion all your data will be lost.
   *
   * @param request - The request {@link DeleteClusterRequest}
   * @returns A Promise of Cluster
   */
  deleteCluster = (request: Readonly<DeleteClusterRequest>) =>
    this.client.fetch<Cluster>(
      {
        method: 'DELETE',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}`,
      },
      unmarshalCluster,
    )

  /**
   * Get a Kafka cluster's certificate authority. Retrieve certificate authority for a given Kafka cluster, specified by the `region` and `cluster_id` parameters. The response object contains the certificate in PEM format. The certificate is required to validate the sever from the client side during TLS connection.
   *
   * @param request - The request {@link GetClusterCertificateAuthorityRequest}
   * @returns A Promise of Blob
   */
  getClusterCertificateAuthority = (
    request: Readonly<GetClusterCertificateAuthorityRequest>,
  ) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/certificate-authority`,
      urlParams: urlParams(['dl', 1]),
      responseType: 'blob',
    })

  /**
   * Renew the Kafka cluster's certificate authority. Request to renew the certificate authority for a given Kafka cluster, specified by the `region` and `cluster_id` parameters. The certificate authority will be renewed within a few minutes.
   *
   * @param request - The request {@link RenewClusterCertificateAuthorityRequest}
   */
  renewClusterCertificateAuthority = (
    request: Readonly<RenewClusterCertificateAuthorityRequest>,
  ) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/renew-certificate-authority`,
    })

  /**
   * Delete a Kafka cluster endpoint. Delete the endpoint of a Kafka cluster. You must specify the `endpoint_id` parameter of the endpoint you want to delete. Note that you might need to update any environment configurations that point to the deleted endpoint.
   *
   * @param request - The request {@link DeleteEndpointRequest}
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
    })

  /**
   * Create a new Kafka cluster endpoint. Create a new endpoint for a Kafka cluster. You can add `public_network` or `private_network` specifications to the body of the request. Note that currently only `private_network` is supported.
   *
   * @param request - The request {@link CreateEndpointRequest}
   * @returns A Promise of Endpoint
   */
  createEndpoint = (request: Readonly<CreateEndpointRequest>) =>
    this.client.fetch<Endpoint>(
      {
        body: JSON.stringify(
          marshalCreateEndpointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints`,
      },
      unmarshalEndpoint,
    )

  protected pageOfListUsers = (request: Readonly<ListUsersRequest>) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/users`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListUsersResponse,
    )

  /**
   * Retrieve a list of deployment users.
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest>) =>
    enrichForPagination('users', this.pageOfListUsers, request)

  /**
   * Update an existing user.
   *
   * @param request - The request {@link UpdateUserRequest}
   * @returns A Promise of User
   */
  updateUser = (request: Readonly<UpdateUserRequest>) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/kafka/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/clusters/${validatePathParam('clusterId', request.clusterId)}/users/${validatePathParam('username', request.username)}`,
      },
      unmarshalUser,
    )
}
