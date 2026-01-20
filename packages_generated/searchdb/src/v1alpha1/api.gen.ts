// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality,WaitForOptions, } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import {DEPLOYMENT_TRANSIENT_STATUSES as DEPLOYMENT_TRANSIENT_STATUSES_SEARCHDB,} from './content.gen.js'
import {
  marshalCreateDeploymentRequest,
  marshalCreateEndpointRequest,
  marshalCreateUserRequest,
  marshalUpdateDeploymentRequest,
  marshalUpdateUserRequest,
  marshalUpgradeDeploymentRequest,
  unmarshalDeployment,
  unmarshalEndpoint,
  unmarshalListDeploymentsResponse,
  unmarshalListNodeTypesResponse,
  unmarshalListUsersResponse,
  unmarshalListVersionsResponse,
  unmarshalUser,
} from './marshalling.gen.js'
import type {
  CreateDeploymentRequest,
  CreateEndpointRequest,
  CreateUserRequest,
  DeleteDeploymentRequest,
  DeleteEndpointRequest,
  DeleteUserRequest,
  Deployment,
  Endpoint,
  GetDeploymentCertificateAuthorityRequest,
  GetDeploymentRequest,
  ListDeploymentsRequest,
  ListDeploymentsResponse,
  ListNodeTypesRequest,
  ListNodeTypesResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  UpdateDeploymentRequest,
  UpdateUserRequest,
  UpgradeDeploymentRequest,
  User,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Cloud Essentials for Opensearch API.

The Cloud Essentials for Opensearch API allows you to manage your Opensearch resources.
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
      ],
    })
  
  /**
   * Create a new Cloud Essentials for OpenSearch deployment.
   *
   * @param request - The request {@link CreateDeploymentRequest}
   * @returns A Promise of Deployment
   */
  createDeployment = (request: Readonly<CreateDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        body: JSON.stringify(
          marshalCreateDeploymentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments`,
      },
      unmarshalDeployment,
    )

  
  /**
   * Update a Cloud Essentials for OpenSearch deployment.
   *
   * @param request - The request {@link UpdateDeploymentRequest}
   * @returns A Promise of Deployment
   */
  updateDeployment = (request: Readonly<UpdateDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        body: JSON.stringify(
          marshalUpdateDeploymentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
      },
      unmarshalDeployment,
    )

  
  /**
   * Upgrade a Cloud Essentials for OpenSearch deployment.
   *
   * @param request - The request {@link UpgradeDeploymentRequest}
   * @returns A Promise of Deployment
   */
  upgradeDeployment = (request: Readonly<UpgradeDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        body: JSON.stringify(
          marshalUpgradeDeploymentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/upgrade`,
      },
      unmarshalDeployment,
    )

  
  /**
   * Retrieve a specific Cloud Essentials for OpenSearch deployment.
   *
   * @param request - The request {@link GetDeploymentRequest}
   * @returns A Promise of Deployment
   */
  getDeployment = (request: Readonly<GetDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        method: 'GET',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
      },
      unmarshalDeployment,
    )
  
  /**
   * Waits for {@link Deployment} to be in a final state.
   *
   * @param request - The request {@link GetDeploymentRequest}
   * @param options - The waiting options
   * @returns A Promise of Deployment
   */
  waitForDeployment = (
    request: Readonly<GetDeploymentRequest>,
    options?: Readonly<WaitForOptions<Deployment>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!DEPLOYMENT_TRANSIENT_STATUSES_SEARCHDB.includes(res.status))),
      this.getDeployment,
      request,
      options,
    )

  
  /**
   * Delete a Cloud Essentials for OpenSearch deployment.
   *
   * @param request - The request {@link DeleteDeploymentRequest}
   * @returns A Promise of Deployment
   */
  deleteDeployment = (request: Readonly<DeleteDeploymentRequest>) =>
    this.client.fetch<Deployment>(
      {
        method: 'DELETE',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
      },
      unmarshalDeployment,
    )

  
  protected pageOfListDeployments = (request: Readonly<ListDeploymentsRequest> = {}) =>
    this.client.fetch<ListDeploymentsResponse>(
      {
        method: 'GET',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
          ['version', request.version],
        ),
      },
      unmarshalListDeploymentsResponse,
    )
  
  /**
   * Retrieve a list of Cloud Essentials for OpenSearch deployments.
   *
   * @param request - The request {@link ListDeploymentsRequest}
   * @returns A Promise of ListDeploymentsResponse
   */
  listDeployments = (request: Readonly<ListDeploymentsRequest> = {}) =>
    enrichForPagination('deployments', this.pageOfListDeployments, request)

  
  protected pageOfListVersions = (request: Readonly<ListVersionsRequest> = {}) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['version', request.version],
        ),
      },
      unmarshalListVersionsResponse,
    )
  
  /**
   * List available Cloud Essentials for OpenSearch versions.
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest> = {}) =>
    enrichForPagination('versions', this.pageOfListVersions, request)

  
  protected pageOfListNodeTypes = (request: Readonly<ListNodeTypesRequest> = {}) =>
    this.client.fetch<ListNodeTypesResponse>(
      {
        method: 'GET',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-types`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListNodeTypesResponse,
    )
  
  /**
   * Retrieve a list of available node types.
   *
   * @param request - The request {@link ListNodeTypesRequest}
   * @returns A Promise of ListNodeTypesResponse
   */
  listNodeTypes = (request: Readonly<ListNodeTypesRequest> = {}) =>
    enrichForPagination('nodeTypes', this.pageOfListNodeTypes, request)

  
  /**
   * Create a new endpoint on a deployment.
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
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints`,
      },
      unmarshalEndpoint,
    )

  
  /**
   * Delete an existing endpoint.
   *
   * @param request - The request {@link DeleteEndpointRequest}
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
      },
    )

  
  protected pageOfListUsers = (request: Readonly<ListUsersRequest>) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
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
   * Create a new user.
   *
   * @param request - The request {@link CreateUserRequest}
   * @returns A Promise of User
   */
  createUser = (request: Readonly<CreateUserRequest>) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalCreateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users`,
      },
      unmarshalUser,
    )

  
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
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users/${validatePathParam('username', request.username)}`,
      },
      unmarshalUser,
    )

  
  /**
   * Delete an existing user.
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users/${validatePathParam('username', request.username)}`,
      },
    )

  
  getDeploymentCertificateAuthority = (request: Readonly<GetDeploymentCertificateAuthorityRequest>) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/searchdb/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/certificate-authority`,
        urlParams: urlParams(
          ['dl', 1],
        ),
        responseType: 'blob',
      },
    )

  
}

