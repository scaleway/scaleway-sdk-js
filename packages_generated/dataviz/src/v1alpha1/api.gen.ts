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
import {DEPLOYMENT_TRANSIENT_STATUSES as DEPLOYMENT_TRANSIENT_STATUSES_DATAVIZ,} from './content.gen.js'
import {
  marshalCreateDeploymentRequest,
  marshalCreateEndpointRequest,
  marshalCreateUserRequest,
  unmarshalDeployment,
  unmarshalEndpoint,
  unmarshalListDeploymentsResponse,
  unmarshalListNodeTypesResponse,
  unmarshalListUsersResponse,
  unmarshalListVersionsResponse,
  marshalUpdateDeploymentRequest,
  marshalUpdateUserRequest,
  marshalUpgradeDeploymentRequest,
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
  DownloadDeploymentCertificateAuthorityRequest,
  Endpoint,
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
 * DataViz API.

The DataViz API allows you to manage your DataViz deployments.
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
   * Create a new DataViz deployment.
   *
   * @param request - The request {@link CreateDeploymentRequest}
   * @returns A Promise of Deployment
   */
  createDeployment = (request: Readonly<CreateDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        body: JSON.stringify(
          marshalCreateDeploymentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  /**
   * Update a DataViz deployment.
   *
   * @param request - The request {@link UpdateDeploymentRequest}
   * @returns A Promise of Deployment
   */
  updateDeployment = (request: Readonly<UpdateDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        body: JSON.stringify(
          marshalUpdateDeploymentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  /**
   * Upgrade a DataViz deployment.
   *
   * @param request - The request {@link UpgradeDeploymentRequest}
   * @returns A Promise of Deployment
   */
  upgradeDeployment = (request: Readonly<UpgradeDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        body: JSON.stringify(
          marshalUpgradeDeploymentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/upgrade`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  /**
   * Retrieve a specific DataViz deployment.
   *
   * @param request - The request {@link GetDeploymentRequest}
   * @returns A Promise of Deployment
   */
  getDeployment = (request: Readonly<GetDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        method: 'GET',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!DEPLOYMENT_TRANSIENT_STATUSES_DATAVIZ.includes(res.status))),
      this.getDeployment,
      request,
      options,
    )

  
  /**
   * Delete a DataViz deployment.
   *
   * @param request - The request {@link DeleteDeploymentRequest}
   * @returns A Promise of Deployment
   */
  deleteDeployment = (request: Readonly<DeleteDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        method: 'DELETE',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  protected pageOfListDeployments = (request: Readonly<ListDeploymentsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListDeploymentsResponse>(
      {
        method: 'GET',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListDeploymentsResponse,
    )
  
  /**
   * Retrieve a list of DataViz deployments.
   *
   * @param request - The request {@link ListDeploymentsRequest}
   * @returns A Promise of ListDeploymentsResponse
   */
  listDeployments = (request: Readonly<ListDeploymentsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('deployments', this.pageOfListDeployments, request, options)

  
  protected pageOfListVersions = (request: Readonly<ListVersionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['version', request.version],
        ),
        signal: options?.signal,
      },
      unmarshalListVersionsResponse,
    )
  
  /**
   * List available DataViz versions.
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('versions', this.pageOfListVersions, request, options)

  
  protected pageOfListNodeTypes = (request: Readonly<ListNodeTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListNodeTypesResponse>(
      {
        method: 'GET',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/node-types`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListNodeTypesResponse,
    )
  
  /**
   * Retrieve a list of available node types.
   *
   * @param request - The request {@link ListNodeTypesRequest}
   * @returns A Promise of ListNodeTypesResponse
   */
  listNodeTypes = (request: Readonly<ListNodeTypesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('nodeTypes', this.pageOfListNodeTypes, request, options)

  
  /**
   * Create a new endpoint for a deployment.
   *
   * @param request - The request {@link CreateEndpointRequest}
   * @returns A Promise of Endpoint
   */
  createEndpoint = (request: Readonly<CreateEndpointRequest>, options?: RequestOptions) =>
    this.client.fetch<Endpoint>(
      {
        body: JSON.stringify(
          marshalCreateEndpointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints`,
        signal: options?.signal,
      },
      unmarshalEndpoint,
    )

  
  /**
   * Delete an existing endpoint.
   *
   * @param request - The request {@link DeleteEndpointRequest}
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListUsers = (request: Readonly<ListUsersRequest>, options?: RequestOptions) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListUsersResponse,
    )
  
  /**
   * Retrieve a list of deployment users.
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest>, options?: RequestOptions) =>
    enrichForPagination('users', this.pageOfListUsers, request, options)

  
  /**
   * Create a new user.
   *
   * @param request - The request {@link CreateUserRequest}
   * @returns A Promise of User
   */
  createUser = (request: Readonly<CreateUserRequest>, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalCreateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Update an existing user.
   *
   * @param request - The request {@link UpdateUserRequest}
   * @returns A Promise of User
   */
  updateUser = (request: Readonly<UpdateUserRequest>, options?: RequestOptions) =>
    this.client.fetch<User>(
      {
        body: JSON.stringify(
          marshalUpdateUserRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users/${validatePathParam('username', request.username)}`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Delete an existing user.
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users/${validatePathParam('username', request.username)}`,
        signal: options?.signal,
      },
    )

  
  downloadDeploymentCertificateAuthority = (request: Readonly<DownloadDeploymentCertificateAuthorityRequest>, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/dataviz/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/certificate-authority`,
        urlParams: urlParams(
          ['dl', 1],
        ),
        responseType: 'blob',
        signal: options?.signal,
      },
    )

  
}

