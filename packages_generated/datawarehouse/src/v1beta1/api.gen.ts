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
import {DEPLOYMENT_TRANSIENT_STATUSES as DEPLOYMENT_TRANSIENT_STATUSES_DATAWAREHOUSE,} from './content.gen.js'
import {
  marshalCreateDatabaseRequest,
  marshalCreateDeploymentRequest,
  marshalCreateEndpointRequest,
  marshalCreateUserRequest,
  unmarshalDatabase,
  unmarshalDeployment,
  unmarshalEndpoint,
  unmarshalListDatabasesResponse,
  unmarshalListDeploymentsResponse,
  unmarshalListPresetsResponse,
  unmarshalListUsersResponse,
  unmarshalListVersionsResponse,
  marshalUpdateDeploymentRequest,
  marshalUpdateUserRequest,
  unmarshalUser,
} from './marshalling.gen.js'
import type {
  CreateDatabaseRequest,
  CreateDeploymentRequest,
  CreateEndpointRequest,
  CreateUserRequest,
  Database,
  DeleteDatabaseRequest,
  DeleteDeploymentRequest,
  DeleteEndpointRequest,
  DeleteUserRequest,
  Deployment,
  Endpoint,
  GetDeploymentCertificateRequest,
  GetDeploymentRequest,
  ListDatabasesRequest,
  ListDatabasesResponse,
  ListDeploymentsRequest,
  ListDeploymentsResponse,
  ListPresetsRequest,
  ListPresetsResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  StartDeploymentRequest,
  StopDeploymentRequest,
  UpdateDeploymentRequest,
  UpdateUserRequest,
  User,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Data Warehouse API.

This API allows you to manage your Data Warehouse.
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
  
  protected pageOfListPresets = (request: Readonly<ListPresetsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListPresetsResponse>(
      {
        method: 'GET',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/presets`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListPresetsResponse,
    )
  
  /**
   * List available presets.
   *
   * @param request - The request {@link ListPresetsRequest}
   * @returns A Promise of ListPresetsResponse
   */
  listPresets = (request: Readonly<ListPresetsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('presets', this.pageOfListPresets, request, options)

  
  protected pageOfListVersions = (request: Readonly<ListVersionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVersionsResponse>(
      {
        method: 'GET',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/versions`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['version', request.version],
        ),
        signal: options?.signal,
      },
      unmarshalListVersionsResponse,
    )
  
  /**
   * List available ClickHouse® versions.
   *
   * @param request - The request {@link ListVersionsRequest}
   * @returns A Promise of ListVersionsResponse
   */
  listVersions = (request: Readonly<ListVersionsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('versions', this.pageOfListVersions, request, options)

  
  protected pageOfListDeployments = (request: Readonly<ListDeploymentsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListDeploymentsResponse>(
      {
        method: 'GET',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments`,
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
   * List deployments. List all deployments in the specified region, for a given Scaleway Project. By default, the deployments returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field. You can define additional parameters for your query, such as `tags` and `name`. For the `name` parameter, the value you provide will be checked against the whole name string to see if it includes the string you put in the parameter.
   *
   * @param request - The request {@link ListDeploymentsRequest}
   * @returns A Promise of ListDeploymentsResponse
   */
  listDeployments = (request: Readonly<ListDeploymentsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('deployments', this.pageOfListDeployments, request, options)

  
  /**
   * Get a deployment. Retrieve information about a given deployment, specified by the `region` and `deployment_id` parameters. Its full details, including name, status are returned in the response object.
   *
   * @param request - The request {@link GetDeploymentRequest}
   * @returns A Promise of Deployment
   */
  getDeployment = (request: Readonly<GetDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        method: 'GET',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
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
      options?.stop ?? (res => Promise.resolve(!DEPLOYMENT_TRANSIENT_STATUSES_DATAWAREHOUSE.includes(res.status))),
      this.getDeployment,
      request,
      options,
    )

  
  /**
   * Create a deployment. Create a new deployment.
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
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  /**
   * Update a deployment. Update the parameters of a deployment.
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
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  /**
   * Delete a deployment. Delete a given deployment, specified by the `region` and `deployment_id` parameters. Deleting a deployment is permanent, and cannot be undone. Upon deletion, all your data will be lost.
   *
   * @param request - The request {@link DeleteDeploymentRequest}
   * @returns A Promise of Deployment
   */
  deleteDeployment = (request: Readonly<DeleteDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        method: 'DELETE',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  /**
   * Get deployment TLS certificate. Retrieve the TLS certificate associated with a deployment.
   *
   * @param request - The request {@link GetDeploymentCertificateRequest}
   * @returns A Promise of Blob
   */
  getDeploymentCertificate = (request: Readonly<GetDeploymentCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/certificate`,
        urlParams: urlParams(
          ['dl', 1],
        ),
        responseType: 'blob',
        signal: options?.signal,
      },
    )

  
  /**
   * Start a deployment. Start a stopped deployment.
   *
   * @param request - The request {@link StartDeploymentRequest}
   * @returns A Promise of Deployment
   */
  startDeployment = (request: Readonly<StartDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/start`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  /**
   * Stop a deployment. Stop a running deployment.
   *
   * @param request - The request {@link StopDeploymentRequest}
   * @returns A Promise of Deployment
   */
  stopDeployment = (request: Readonly<StopDeploymentRequest>, options?: RequestOptions) =>
    this.client.fetch<Deployment>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/stop`,
        signal: options?.signal,
      },
      unmarshalDeployment,
    )

  
  protected pageOfListUsers = (request: Readonly<ListUsersRequest>, options?: RequestOptions) =>
    this.client.fetch<ListUsersResponse>(
      {
        method: 'GET',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users`,
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
   * List users associated with a deployment.
   *
   * @param request - The request {@link ListUsersRequest}
   * @returns A Promise of ListUsersResponse
   */
  listUsers = (request: Readonly<ListUsersRequest>, options?: RequestOptions) =>
    enrichForPagination('users', this.pageOfListUsers, request, options)

  
  /**
   * Create a new user for a deployment.
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
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Update an existing user for a deployment.
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
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users/${validatePathParam('name', request.name)}`,
        signal: options?.signal,
      },
      unmarshalUser,
    )

  
  /**
   * Delete a user from a deployment.
   *
   * @param request - The request {@link DeleteUserRequest}
   */
  deleteUser = (request: Readonly<DeleteUserRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/users/${validatePathParam('name', request.name)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Delete an endpoint from a deployment.
   *
   * @param request - The request {@link DeleteEndpointRequest}
   */
  deleteEndpoint = (request: Readonly<DeleteEndpointRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints/${validatePathParam('endpointId', request.endpointId)}`,
        signal: options?.signal,
      },
    )

  
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
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/endpoints`,
        signal: options?.signal,
      },
      unmarshalEndpoint,
    )

  
  protected pageOfListDatabases = (request: Readonly<ListDatabasesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListDatabasesResponse>(
      {
        method: 'GET',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/databases`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListDatabasesResponse,
    )
  
  /**
   * List databases within a deployment.
   *
   * @param request - The request {@link ListDatabasesRequest}
   * @returns A Promise of ListDatabasesResponse
   */
  listDatabases = (request: Readonly<ListDatabasesRequest>, options?: RequestOptions) =>
    enrichForPagination('databases', this.pageOfListDatabases, request, options)

  
  /**
   * Create a new database within a deployment.
   *
   * @param request - The request {@link CreateDatabaseRequest}
   * @returns A Promise of Database
   */
  createDatabase = (request: Readonly<CreateDatabaseRequest>, options?: RequestOptions) =>
    this.client.fetch<Database>(
      {
        body: JSON.stringify(
          marshalCreateDatabaseRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/databases`,
        signal: options?.signal,
      },
      unmarshalDatabase,
    )

  
  /**
   * Delete a database from a deployment.
   *
   * @param request - The request {@link DeleteDatabaseRequest}
   */
  deleteDatabase = (request: Readonly<DeleteDatabaseRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/datawarehouse/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/deployments/${validatePathParam('deploymentId', request.deploymentId)}/databases/${validatePathParam('name', request.name)}`,
        signal: options?.signal,
      },
    )

  
}

