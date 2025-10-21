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
import type {
  Zone as ScwZone,
  Region as ScwRegion,
  ServiceInfo,
  WaitForOptions,
  ApiLocality,
} from '@scaleway/sdk-client'
import {
  CONTAINER_TRANSIENT_STATUSES as CONTAINER_TRANSIENT_STATUSES_CONTAINER,
  CRON_TRANSIENT_STATUSES as CRON_TRANSIENT_STATUSES_CONTAINER,
  DOMAIN_TRANSIENT_STATUSES as DOMAIN_TRANSIENT_STATUSES_CONTAINER,
  NAMESPACE_TRANSIENT_STATUSES as NAMESPACE_TRANSIENT_STATUSES_CONTAINER,
  TOKEN_TRANSIENT_STATUSES as TOKEN_TRANSIENT_STATUSES_CONTAINER,
  TRIGGER_TRANSIENT_STATUSES as TRIGGER_TRANSIENT_STATUSES_CONTAINER,
} from './content.gen.js'
import {
  unmarshalContainer,
  marshalCreateContainerRequest,
  marshalCreateCronRequest,
  marshalCreateDomainRequest,
  marshalCreateNamespaceRequest,
  marshalCreateTokenRequest,
  marshalCreateTriggerRequest,
  unmarshalCron,
  unmarshalDomain,
  unmarshalListContainersResponse,
  unmarshalListCronsResponse,
  unmarshalListDomainsResponse,
  unmarshalListNamespacesResponse,
  unmarshalListTokensResponse,
  unmarshalListTriggersResponse,
  unmarshalNamespace,
  unmarshalToken,
  unmarshalTrigger,
  marshalUpdateContainerRequest,
  marshalUpdateCronRequest,
  marshalUpdateNamespaceRequest,
  marshalUpdateTriggerRequest,
} from './marshalling.gen.js'
import type {
  Container,
  CreateContainerRequest,
  CreateCronRequest,
  CreateDomainRequest,
  CreateNamespaceRequest,
  CreateTokenRequest,
  CreateTriggerRequest,
  Cron,
  DeleteContainerRequest,
  DeleteCronRequest,
  DeleteDomainRequest,
  DeleteNamespaceRequest,
  DeleteTokenRequest,
  DeleteTriggerRequest,
  DeployContainerRequest,
  Domain,
  GetContainerRequest,
  GetCronRequest,
  GetDomainRequest,
  GetNamespaceRequest,
  GetTokenRequest,
  GetTriggerRequest,
  ListContainersRequest,
  ListContainersResponse,
  ListCronsRequest,
  ListCronsResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListTokensRequest,
  ListTokensResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  Namespace,
  Token,
  Trigger,
  UpdateContainerRequest,
  UpdateCronRequest,
  UpdateNamespaceRequest,
  UpdateTriggerRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Serverless Containers API.

This API allows you to manage your Serverless Containers.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par', 'nl-ams', 'pl-waw'],
  })

  protected pageOfListNamespaces = (
    request: Readonly<ListNamespacesRequest> = {},
  ) =>
    this.client.fetch<ListNamespacesResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces`,
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
        ),
      },
      unmarshalListNamespacesResponse,
    )

  /**
   * List all your namespaces. List all namespaces in a specified region.
   *
   * @param request - The request {@link ListNamespacesRequest}
   * @returns A Promise of ListNamespacesResponse
   */
  listNamespaces = (request: Readonly<ListNamespacesRequest> = {}) =>
    enrichForPagination('namespaces', this.pageOfListNamespaces, request)

  /**
   * Get a namespace. Get the namespace associated with the specified ID.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @returns A Promise of Namespace
   */
  getNamespace = (request: Readonly<GetNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
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
          Promise.resolve(
            !NAMESPACE_TRANSIENT_STATUSES_CONTAINER.includes(res.status),
          )),
      this.getNamespace,
      request,
      options,
    )

  /**
   * Create a new namespace. Create a new namespace in a specified region.
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
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces`,
      },
      unmarshalNamespace,
    )

  /**
   * Update an existing namespace. Update the space associated with the specified ID.
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
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  /**
   * Delete an existing namespace. Delete the namespace associated with the specified ID.
   *
   * @param request - The request {@link DeleteNamespaceRequest}
   * @returns A Promise of Namespace
   */
  deleteNamespace = (request: Readonly<DeleteNamespaceRequest>) =>
    this.client.fetch<Namespace>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  protected pageOfListContainers = (request: Readonly<ListContainersRequest>) =>
    this.client.fetch<ListContainersResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers`,
        urlParams: urlParams(
          ['name', request.name],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListContainersResponse,
    )

  /**
   * List all your containers. List all containers for a specified region.
   *
   * @param request - The request {@link ListContainersRequest}
   * @returns A Promise of ListContainersResponse
   */
  listContainers = (request: Readonly<ListContainersRequest>) =>
    enrichForPagination('containers', this.pageOfListContainers, request)

  /**
   * Get a container. Get the container associated with the specified ID.
   *
   * @param request - The request {@link GetContainerRequest}
   * @returns A Promise of Container
   */
  getContainer = (request: Readonly<GetContainerRequest>) =>
    this.client.fetch<Container>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers/${validatePathParam('containerId', request.containerId)}`,
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
          Promise.resolve(
            !CONTAINER_TRANSIENT_STATUSES_CONTAINER.includes(res.status),
          )),
      this.getContainer,
      request,
      options,
    )

  /**
   * Create a new container. Create a new container in the specified region.
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
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers`,
      },
      unmarshalContainer,
    )

  /**
   * Update an existing container. Update the container associated with the specified ID.

When updating a container, the container is automatically redeployed to apply the changes.
This behavior can be changed by setting the `redeploy` field to `false` in the request.
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
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers/${validatePathParam('containerId', request.containerId)}`,
      },
      unmarshalContainer,
    )

  /**
   * Delete a container. Delete the container associated with the specified ID.
   *
   * @param request - The request {@link DeleteContainerRequest}
   * @returns A Promise of Container
   */
  deleteContainer = (request: Readonly<DeleteContainerRequest>) =>
    this.client.fetch<Container>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers/${validatePathParam('containerId', request.containerId)}`,
      },
      unmarshalContainer,
    )

  /**
   * Deploy a container. Deploy a container associated with the specified ID.
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
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/containers/${validatePathParam('containerId', request.containerId)}/deploy`,
      },
      unmarshalContainer,
    )

  protected pageOfListCrons = (request: Readonly<ListCronsRequest>) =>
    this.client.fetch<ListCronsResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons`,
        urlParams: urlParams(
          ['container_id', request.containerId],
          ['order_by', request.orderBy],
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
   * List all your crons.
   *
   * @param request - The request {@link ListCronsRequest}
   * @returns A Promise of ListCronsResponse
   */
  listCrons = (request: Readonly<ListCronsRequest>) =>
    enrichForPagination('crons', this.pageOfListCrons, request)

  /**
   * Get a cron. Get the cron associated with the specified ID.
   *
   * @param request - The request {@link GetCronRequest}
   * @returns A Promise of Cron
   */
  getCron = (request: Readonly<GetCronRequest>) =>
    this.client.fetch<Cron>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons/${validatePathParam('cronId', request.cronId)}`,
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
        (res =>
          Promise.resolve(
            !CRON_TRANSIENT_STATUSES_CONTAINER.includes(res.status),
          )),
      this.getCron,
      request,
      options,
    )

  /**
   * Create a new cron.
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
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons`,
      },
      unmarshalCron,
    )

  /**
   * Update an existing cron. Update the cron associated with the specified ID.
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
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons/${validatePathParam('cronId', request.cronId)}`,
      },
      unmarshalCron,
    )

  /**
   * Delete an existing cron. Delete the cron associated with the specified ID.
   *
   * @param request - The request {@link DeleteCronRequest}
   * @returns A Promise of Cron
   */
  deleteCron = (request: Readonly<DeleteCronRequest>) =>
    this.client.fetch<Cron>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons/${validatePathParam('cronId', request.cronId)}`,
      },
      unmarshalCron,
    )

  protected pageOfListDomains = (request: Readonly<ListDomainsRequest>) =>
    this.client.fetch<ListDomainsResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains`,
        urlParams: urlParams(
          ['container_id', request.containerId],
          ['order_by', request.orderBy],
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
   * List all custom domains. List all custom domains in a specified region.
   *
   * @param request - The request {@link ListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<ListDomainsRequest>) =>
    enrichForPagination('domains', this.pageOfListDomains, request)

  /**
   * Get a custom domain. Get a custom domain for the container with the specified ID.
   *
   * @param request - The request {@link GetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<GetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
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
          Promise.resolve(
            !DOMAIN_TRANSIENT_STATUSES_CONTAINER.includes(res.status),
          )),
      this.getDomain,
      request,
      options,
    )

  /**
   * Create a custom domain. Create a custom domain for the container with the specified ID.
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
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains`,
      },
      unmarshalDomain,
    )

  /**
   * Delete a custom domain. Delete the custom domain with the specific ID.
   *
   * @param request - The request {@link DeleteDomainRequest}
   * @returns A Promise of Domain
   */
  deleteDomain = (request: Readonly<DeleteDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /**
   * Create a new revocable token.
   *
   * @param request - The request {@link CreateTokenRequest}
   * @returns A Promise of Token
   */
  createToken = (request: Readonly<CreateTokenRequest> = {}) =>
    this.client.fetch<Token>(
      {
        body: JSON.stringify(
          marshalCreateTokenRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens`,
      },
      unmarshalToken,
    )

  /**
   * Get a token. Get a token with a specified ID.
   *
   * @param request - The request {@link GetTokenRequest}
   * @returns A Promise of Token
   */
  getToken = (request: Readonly<GetTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
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
          Promise.resolve(
            !TOKEN_TRANSIENT_STATUSES_CONTAINER.includes(res.status),
          )),
      this.getToken,
      request,
      options,
    )

  protected pageOfListTokens = (request: Readonly<ListTokensRequest> = {}) =>
    this.client.fetch<ListTokensResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens`,
        urlParams: urlParams(
          ['container_id', request.containerId],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListTokensResponse,
    )

  /**
   * List all tokens. List all tokens belonging to a specified Organization or Project.
   *
   * @param request - The request {@link ListTokensRequest}
   * @returns A Promise of ListTokensResponse
   */
  listTokens = (request: Readonly<ListTokensRequest> = {}) =>
    enrichForPagination('tokens', this.pageOfListTokens, request)

  /**
   * Delete a token. Delete a token with a specified ID.
   *
   * @param request - The request {@link DeleteTokenRequest}
   * @returns A Promise of Token
   */
  deleteToken = (request: Readonly<DeleteTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
      },
      unmarshalToken,
    )

  /**
   * Create a trigger. Create a new trigger for a specified container.
   *
   * @param request - The request {@link CreateTriggerRequest}
   * @returns A Promise of Trigger
   */
  createTrigger = (request: Readonly<CreateTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(
          marshalCreateTriggerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers`,
      },
      unmarshalTrigger,
    )

  /**
   * Get a trigger. Get a trigger with a specified ID.
   *
   * @param request - The request {@link GetTriggerRequest}
   * @returns A Promise of Trigger
   */
  getTrigger = (request: Readonly<GetTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
      },
      unmarshalTrigger,
    )

  /**
   * Waits for {@link Trigger} to be in a final state.
   *
   * @param request - The request {@link GetTriggerRequest}
   * @param options - The waiting options
   * @returns A Promise of Trigger
   */
  waitForTrigger = (
    request: Readonly<GetTriggerRequest>,
    options?: Readonly<WaitForOptions<Trigger>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !TRIGGER_TRANSIENT_STATUSES_CONTAINER.includes(res.status),
          )),
      this.getTrigger,
      request,
      options,
    )

  protected pageOfListTriggers = (
    request: Readonly<ListTriggersRequest> = {},
  ) =>
    this.client.fetch<ListTriggersResponse>(
      {
        method: 'GET',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ...Object.entries(
            resolveOneOf([
              { param: 'container_id', value: request.containerId },
              { param: 'namespace_id', value: request.namespaceId },
              {
                default: this.client.settings.defaultProjectId,
                param: 'project_id',
                value: request.projectId,
              },
            ]),
          ),
        ),
      },
      unmarshalListTriggersResponse,
    )

  /**
   * List all triggers. List all triggers belonging to a specified Organization or Project.
   *
   * @param request - The request {@link ListTriggersRequest}
   * @returns A Promise of ListTriggersResponse
   */
  listTriggers = (request: Readonly<ListTriggersRequest> = {}) =>
    enrichForPagination('triggers', this.pageOfListTriggers, request)

  /**
   * Update a trigger. Update a trigger with a specified ID.
   *
   * @param request - The request {@link UpdateTriggerRequest}
   * @returns A Promise of Trigger
   */
  updateTrigger = (request: Readonly<UpdateTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(
          marshalUpdateTriggerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
      },
      unmarshalTrigger,
    )

  /**
   * Delete a trigger. Delete a trigger with a specified ID.
   *
   * @param request - The request {@link DeleteTriggerRequest}
   * @returns A Promise of Trigger
   */
  deleteTrigger = (request: Readonly<DeleteTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        method: 'DELETE',
        path: `/containers/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
      },
      unmarshalTrigger,
    )
}
