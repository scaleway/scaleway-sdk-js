// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  resolveOneOf,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, WaitForOptions } from '../../../bridge'
import {
  CONTAINER_TRANSIENT_STATUSES,
  CRON_TRANSIENT_STATUSES,
  DOMAIN_TRANSIENT_STATUSES,
  NAMESPACE_TRANSIENT_STATUSES,
  TOKEN_TRANSIENT_STATUSES,
} from './content.gen'
import {
  marshalCreateContainerRequest,
  marshalCreateCronRequest,
  marshalCreateDomainRequest,
  marshalCreateNamespaceRequest,
  marshalCreateTokenRequest,
  marshalUpdateContainerRequest,
  marshalUpdateCronRequest,
  marshalUpdateNamespaceRequest,
  unmarshalContainer,
  unmarshalCron,
  unmarshalDomain,
  unmarshalListContainersResponse,
  unmarshalListCronsResponse,
  unmarshalListDomainsResponse,
  unmarshalListLogsResponse,
  unmarshalListNamespacesResponse,
  unmarshalListTokensResponse,
  unmarshalNamespace,
  unmarshalToken,
} from './marshalling.gen'
import type {
  Container,
  CreateContainerRequest,
  CreateCronRequest,
  CreateDomainRequest,
  CreateNamespaceRequest,
  CreateTokenRequest,
  Cron,
  DeleteContainerRequest,
  DeleteCronRequest,
  DeleteDomainRequest,
  DeleteNamespaceRequest,
  DeleteTokenRequest,
  DeployContainerRequest,
  Domain,
  GetContainerRequest,
  GetCronRequest,
  GetDomainRequest,
  GetNamespaceRequest,
  GetTokenRequest,
  IssueJWTRequest,
  ListContainersRequest,
  ListContainersResponse,
  ListCronsRequest,
  ListCronsResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListLogsRequest,
  ListLogsResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListTokensRequest,
  ListTokensResponse,
  Namespace,
  Token,
  UpdateContainerRequest,
  UpdateCronRequest,
  UpdateNamespaceRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Containers API.
 *
 * Serverless Containers API.
 */
export class ContainerV1Beta1GenAPI extends API {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par']

  protected pageOfListNamespaces = (
    request: Readonly<ListNamespacesRequest> = {},
  ) =>
    this.client.fetch<ListNamespacesResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListNamespacesResponse,
    )

  /**
   * List all your namespaces
   *
   * @param request - The request {@link ListNamespacesRequest}
   * @returns A Promise of ListNamespacesResponse
   */
  listNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    enrichForPagination('namespaces', this.pageOfListNamespaces, request)

  /**
   * Get the namespace associated with the given id.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @returns A Promise of Namespace
   */
  getNamespace = (request: Readonly<GetNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Waits for {@link Namespace} to be in a final state.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @param options - The waiting options
   * @returns A Promise of Namespace
   */
  waitForNamespace = (
    request: Readonly<GetNamespaceRequest>,
    options?: Readonly<WaitForOptions<Namespace>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!NAMESPACE_TRANSIENT_STATUSES.includes(res.status))),
      this.getNamespace,
      request,
      options,
    )

  /**
   * Create a new namespace
   *
   * @param request - The request {@link CreateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  createNamespace = (request: Readonly<CreateNamespaceRequest> = {}) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(
          marshalCreateNamespaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces`,
      },
      unmarshalNamespace,
    )

  /**
   * Update the space associated with the given id.
   *
   * @param request - The request {@link UpdateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  updateNamespace = (request: Readonly<UpdateNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(
          marshalUpdateNamespaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Delete the namespace associated with the given id.
   *
   * @param request - The request {@link DeleteNamespaceRequest}
   * @returns A Promise of Namespace
   */
  deleteNamespace = (request: Readonly<DeleteNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  protected pageOfListContainers = (request: Readonly<ListContainersRequest>) =>
    this.client.fetch<ListContainersResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/containers`,
        urlParams: urlParams(
          ['name', request.name],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListContainersResponse,
    )

  /**
   * List all your containers
   *
   * @param request - The request {@link ListContainersRequest}
   * @returns A Promise of ListContainersResponse
   */
  listContainers = (request: Readonly<ListContainersRequest>) =>
    enrichForPagination('containers', this.pageOfListContainers, request)

  /**
   * Get the container associated with the given id.
   *
   * @param request - The request {@link GetContainerRequest}
   * @returns A Promise of Container
   */
  getContainer = (request: Readonly<GetContainerRequest>) =>
    this.client.fetch<Container>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/containers/${validatePathParam('containerId', request.containerId)}`,
      },
      unmarshalContainer,
    )

  /**
   * Waits for {@link Container} to be in a final state.
   *
   * @param request - The request {@link GetContainerRequest}
   * @param options - The waiting options
   * @returns A Promise of Container
   */
  waitForContainer = (
    request: Readonly<GetContainerRequest>,
    options?: Readonly<WaitForOptions<Container>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!CONTAINER_TRANSIENT_STATUSES.includes(res.status))),
      this.getContainer,
      request,
      options,
    )

  /**
   * Create a new container
   *
   * @param request - The request {@link CreateContainerRequest}
   * @returns A Promise of Container
   */
  createContainer = (request: Readonly<CreateContainerRequest>) =>
    this.client.fetch<Container>(
      {
        body: JSON.stringify(
          marshalCreateContainerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/containers`,
      },
      unmarshalContainer,
    )

  /**
   * Update the container associated with the given id.
   *
   * @param request - The request {@link UpdateContainerRequest}
   * @returns A Promise of Container
   */
  updateContainer = (request: Readonly<UpdateContainerRequest>) =>
    this.client.fetch<Container>(
      {
        body: JSON.stringify(
          marshalUpdateContainerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/containers/${validatePathParam('containerId', request.containerId)}`,
      },
      unmarshalContainer,
    )

  /**
   * Delete the container associated with the given id.
   *
   * @param request - The request {@link DeleteContainerRequest}
   * @returns A Promise of Container
   */
  deleteContainer = (request: Readonly<DeleteContainerRequest>) =>
    this.client.fetch<Container>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/containers/${validatePathParam('containerId', request.containerId)}`,
      },
      unmarshalContainer,
    )

  /**
   * Deploy a container associated with the given id.
   *
   * @param request - The request {@link DeployContainerRequest}
   * @returns A Promise of Container
   */
  deployContainer = (request: Readonly<DeployContainerRequest>) =>
    this.client.fetch<Container>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/containers/${validatePathParam(
          'containerId',
          request.containerId,
        )}/deploy`,
      },
      unmarshalContainer,
    )

  protected pageOfListCrons = (request: Readonly<ListCronsRequest>) =>
    this.client.fetch<ListCronsResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/crons`,
        urlParams: urlParams(
          ['container_id', request.containerId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListCronsResponse,
    )

  /**
   * List all your crons
   *
   * @param request - The request {@link ListCronsRequest}
   * @returns A Promise of ListCronsResponse
   */
  listCrons = (request: Readonly<ListCronsRequest>) =>
    enrichForPagination('crons', this.pageOfListCrons, request)

  /**
   * Get the cron associated with the given id.
   *
   * @param request - The request {@link GetCronRequest}
   * @returns A Promise of Cron
   */
  getCron = (request: Readonly<GetCronRequest>) =>
    this.client.fetch<Cron>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/crons/${validatePathParam('cronId', request.cronId)}`,
      },
      unmarshalCron,
    )

  /**
   * Waits for {@link Cron} to be in a final state.
   *
   * @param request - The request {@link GetCronRequest}
   * @param options - The waiting options
   * @returns A Promise of Cron
   */
  waitForCron = (
    request: Readonly<GetCronRequest>,
    options?: Readonly<WaitForOptions<Cron>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res => Promise.resolve(!CRON_TRANSIENT_STATUSES.includes(res.status))),
      this.getCron,
      request,
      options,
    )

  /**
   * Create a new cron
   *
   * @param request - The request {@link CreateCronRequest}
   * @returns A Promise of Cron
   */
  createCron = (request: Readonly<CreateCronRequest>) =>
    this.client.fetch<Cron>(
      {
        body: JSON.stringify(
          marshalCreateCronRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/crons`,
      },
      unmarshalCron,
    )

  /**
   * Update the cron associated with the given id.
   *
   * @param request - The request {@link UpdateCronRequest}
   * @returns A Promise of Cron
   */
  updateCron = (request: Readonly<UpdateCronRequest>) =>
    this.client.fetch<Cron>(
      {
        body: JSON.stringify(
          marshalUpdateCronRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/crons/${validatePathParam('cronId', request.cronId)}`,
      },
      unmarshalCron,
    )

  /**
   * Delete the cron associated with the given id.
   *
   * @param request - The request {@link DeleteCronRequest}
   * @returns A Promise of Cron
   */
  deleteCron = (request: Readonly<DeleteCronRequest>) =>
    this.client.fetch<Cron>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/crons/${validatePathParam('cronId', request.cronId)}`,
      },
      unmarshalCron,
    )

  protected pageOfListLogs = (request: Readonly<ListLogsRequest>) =>
    this.client.fetch<ListLogsResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/containers/${validatePathParam(
          'containerId',
          request.containerId,
        )}/logs`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'timestamp_desc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListLogsResponse,
    )

  /**
   * List your container logs
   *
   * @param request - The request {@link ListLogsRequest}
   * @returns A Promise of ListLogsResponse
   */
  listLogs = (request: Readonly<ListLogsRequest>) =>
    enrichForPagination('logs', this.pageOfListLogs, request)

  protected pageOfListDomains = (request: Readonly<ListDomainsRequest>) =>
    this.client.fetch<ListDomainsResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains`,
        urlParams: urlParams(
          ['container_id', request.containerId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDomainsResponse,
    )

  /**
   * List all domain name bindings
   *
   * @param request - The request {@link ListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<ListDomainsRequest>) =>
    enrichForPagination('domains', this.pageOfListDomains, request)

  /**
   * Get a domain name binding
   *
   * @param request - The request {@link GetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<GetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /**
   * Waits for {@link Domain} to be in a final state.
   *
   * @param request - The request {@link GetDomainRequest}
   * @param options - The waiting options
   * @returns A Promise of Domain
   */
  waitForDomain = (
    request: Readonly<GetDomainRequest>,
    options?: Readonly<WaitForOptions<Domain>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!DOMAIN_TRANSIENT_STATUSES.includes(res.status))),
      this.getDomain,
      request,
      options,
    )

  /**
   * Create a domain name binding
   *
   * @param request - The request {@link CreateDomainRequest}
   * @returns A Promise of Domain
   */
  createDomain = (request: Readonly<CreateDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(
          marshalCreateDomainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains`,
      },
      unmarshalDomain,
    )

  /**
   * Delete a domain name binding
   *
   * @param request - The request {@link DeleteDomainRequest}
   * @returns A Promise of Domain
   */
  deleteDomain = (request: Readonly<DeleteDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /** @deprecated */
  issueJWT = (request: Readonly<IssueJWTRequest> = {}) =>
    this.client.fetch<Token>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/issue-jwt`,
        urlParams: urlParams(
          ['expires_at', request.expiresAt],
          ...Object.entries(
            resolveOneOf([
              {
                param: 'container_id',
                value: request.containerId,
              },
              {
                param: 'namespace_id',
                value: request.namespaceId,
              },
            ]),
          ),
        ),
      },
      unmarshalToken,
    )

  createToken = (request: Readonly<CreateTokenRequest> = {}) =>
    this.client.fetch<Token>(
      {
        body: JSON.stringify(
          marshalCreateTokenRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tokens`,
      },
      unmarshalToken,
    )

  getToken = (request: Readonly<GetTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
      },
      unmarshalToken,
    )

  /**
   * Waits for {@link Token} to be in a final state.
   *
   * @param request - The request {@link GetTokenRequest}
   * @param options - The waiting options
   * @returns A Promise of Token
   */
  waitForToken = (
    request: Readonly<GetTokenRequest>,
    options?: Readonly<WaitForOptions<Token>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!TOKEN_TRANSIENT_STATUSES.includes(res.status))),
      this.getToken,
      request,
      options,
    )

  protected pageOfListTokens = (request: Readonly<ListTokensRequest> = {}) =>
    this.client.fetch<ListTokensResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tokens`,
        urlParams: urlParams(
          ['container_id', request.containerId],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListTokensResponse,
    )

  listTokens = (request: Readonly<ListTokensRequest> = {}) =>
    enrichForPagination('tokens', this.pageOfListTokens, request)

  deleteToken = (request: Readonly<DeleteTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
      },
      unmarshalToken,
    )
}
