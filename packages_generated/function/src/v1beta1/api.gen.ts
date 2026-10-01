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
import {CRON_TRANSIENT_STATUSES as CRON_TRANSIENT_STATUSES_FUNCTION,DOMAIN_TRANSIENT_STATUSES as DOMAIN_TRANSIENT_STATUSES_FUNCTION,FUNCTION_TRANSIENT_STATUSES as FUNCTION_TRANSIENT_STATUSES_FUNCTION,NAMESPACE_TRANSIENT_STATUSES as NAMESPACE_TRANSIENT_STATUSES_FUNCTION,TOKEN_TRANSIENT_STATUSES as TOKEN_TRANSIENT_STATUSES_FUNCTION,TRIGGER_TRANSIENT_STATUSES as TRIGGER_TRANSIENT_STATUSES_FUNCTION,} from './content.gen.js'
import {
  marshalCreateCronRequest,
  marshalCreateDomainRequest,
  marshalCreateFunctionRequest,
  marshalCreateNamespaceRequest,
  marshalCreateTokenRequest,
  marshalCreateTriggerRequest,
  unmarshalCron,
  unmarshalDomain,
  unmarshalDownloadURL,
  unmarshalFunction,
  unmarshalListCronsResponse,
  unmarshalListDomainsResponse,
  unmarshalListFunctionRuntimesResponse,
  unmarshalListFunctionsResponse,
  unmarshalListNamespacesResponse,
  unmarshalListTokensResponse,
  unmarshalListTriggersResponse,
  unmarshalNamespace,
  unmarshalToken,
  unmarshalTrigger,
  marshalUpdateCronRequest,
  marshalUpdateFunctionRequest,
  marshalUpdateNamespaceRequest,
  marshalUpdateTriggerRequest,
  unmarshalUploadURL,
} from './marshalling.gen.js'
import type {
  CreateCronRequest,
  CreateDomainRequest,
  CreateFunctionRequest,
  CreateNamespaceRequest,
  CreateTokenRequest,
  CreateTriggerRequest,
  Cron,
  DeleteCronRequest,
  DeleteDomainRequest,
  DeleteFunctionRequest,
  DeleteNamespaceRequest,
  DeleteTokenRequest,
  DeleteTriggerRequest,
  DeployFunctionRequest,
  Domain,
  DownloadURL,
  Function,
  GetCronRequest,
  GetDomainRequest,
  GetFunctionDownloadURLRequest,
  GetFunctionRequest,
  GetFunctionUploadURLRequest,
  GetNamespaceRequest,
  GetTokenRequest,
  GetTriggerRequest,
  ListCronsRequest,
  ListCronsResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListFunctionRuntimesRequest,
  ListFunctionRuntimesResponse,
  ListFunctionsRequest,
  ListFunctionsResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListTokensRequest,
  ListTokensResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  Namespace,
  Token,
  Trigger,
  UpdateCronRequest,
  UpdateFunctionRequest,
  UpdateNamespaceRequest,
  UpdateTriggerRequest,
  UploadURL,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Serverless Functions API.

This API allows you to manage your Serverless Functions.
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
        'nl-ams',
        'pl-waw',
      ],
    })
  
  protected pageOfListNamespaces = (request: Readonly<ListNamespacesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListNamespacesResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListNamespacesResponse,
    )
  
  /**
   * List all your namespaces. List all existing namespaces in the specified region.
   *
   * @param request - The request {@link ListNamespacesRequest}
   * @returns A Promise of ListNamespacesResponse
   */
  listNamespaces = (request: Readonly<ListNamespacesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('namespaces', this.pageOfListNamespaces, request, options)

  
  /**
   * Get a namespace. Get the namespace associated with the specified ID.
   *
   * @param request - The request {@link GetNamespaceRequest}
   * @returns A Promise of Namespace
   */
  getNamespace = (request: Readonly<GetNamespaceRequest>, options?: RequestOptions) =>
    this.client.fetch<Namespace>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!NAMESPACE_TRANSIENT_STATUSES_FUNCTION.includes(res.status))),
      this.getNamespace,
      request,
      options,
    )

  
  /**
   * Create a new namespace. Create a new namespace in a specified Organization or Project.
   *
   * @param request - The request {@link CreateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  createNamespace = (request: Readonly<CreateNamespaceRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(
          marshalCreateNamespaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces`,
        signal: options?.signal,
      },
      unmarshalNamespace,
    )

  
  /**
   * Update an existing namespace. Update the namespace associated with the specified ID.
   *
   * @param request - The request {@link UpdateNamespaceRequest}
   * @returns A Promise of Namespace
   */
  updateNamespace = (request: Readonly<UpdateNamespaceRequest>, options?: RequestOptions) =>
    this.client.fetch<Namespace>(
      {
        body: JSON.stringify(
          marshalUpdateNamespaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
        signal: options?.signal,
      },
      unmarshalNamespace,
    )

  
  /**
   * Delete an existing namespace. Delete the namespace associated with the specified ID.
   *
   * @param request - The request {@link DeleteNamespaceRequest}
   * @returns A Promise of Namespace
   */
  deleteNamespace = (request: Readonly<DeleteNamespaceRequest>, options?: RequestOptions) =>
    this.client.fetch<Namespace>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
        signal: options?.signal,
      },
      unmarshalNamespace,
    )

  
  protected pageOfListFunctions = (request: Readonly<ListFunctionsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListFunctionsResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/functions`,
        urlParams: urlParams(
          ['name', request.name],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListFunctionsResponse,
    )
  
  /**
   * List all your functions.
   *
   * @param request - The request {@link ListFunctionsRequest}
   * @returns A Promise of ListFunctionsResponse
   */
  listFunctions = (request: Readonly<ListFunctionsRequest>, options?: RequestOptions) =>
    enrichForPagination('functions', this.pageOfListFunctions, request, options)

  
  /**
   * Get a function. Get the function associated with the specified ID.
   *
   * @param request - The request {@link GetFunctionRequest}
   * @returns A Promise of Function
   */
  getFunction = (request: Readonly<GetFunctionRequest>, options?: RequestOptions) =>
    this.client.fetch<Function>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/functions/${validatePathParam('functionId', request.functionId)}`,
        signal: options?.signal,
      },
      unmarshalFunction,
    )
  
  /**
   * Waits for {@link Function} to be in a final state.
   *
   * @param request - The request {@link GetFunctionRequest}
   * @param options - The waiting options
   * @returns A Promise of Function
   */
  waitForFunction = (
    request: Readonly<GetFunctionRequest>,
    options?: Readonly<WaitForOptions<Function>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!FUNCTION_TRANSIENT_STATUSES_FUNCTION.includes(res.status))),
      this.getFunction,
      request,
      options,
    )

  
  /**
   * Create a new function. Create a new function in the specified region for a specified Organization or Project.
   *
   * @param request - The request {@link CreateFunctionRequest}
   * @returns A Promise of Function
   */
  createFunction = (request: Readonly<CreateFunctionRequest>, options?: RequestOptions) =>
    this.client.fetch<Function>(
      {
        body: JSON.stringify(
          marshalCreateFunctionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/functions`,
        signal: options?.signal,
      },
      unmarshalFunction,
    )

  
  /**
   * Update an existing function. Update the function associated with the specified ID.

When updating a function, the function is automatically redeployed to apply the changes.
This behavior can be changed by setting the `redeploy` field to `false` in the request.
   *
   * @param request - The request {@link UpdateFunctionRequest}
   * @returns A Promise of Function
   */
  updateFunction = (request: Readonly<UpdateFunctionRequest>, options?: RequestOptions) =>
    this.client.fetch<Function>(
      {
        body: JSON.stringify(
          marshalUpdateFunctionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/functions/${validatePathParam('functionId', request.functionId)}`,
        signal: options?.signal,
      },
      unmarshalFunction,
    )

  
  /**
   * Delete a function. Delete the function associated with the specified ID.
   *
   * @param request - The request {@link DeleteFunctionRequest}
   * @returns A Promise of Function
   */
  deleteFunction = (request: Readonly<DeleteFunctionRequest>, options?: RequestOptions) =>
    this.client.fetch<Function>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/functions/${validatePathParam('functionId', request.functionId)}`,
        signal: options?.signal,
      },
      unmarshalFunction,
    )

  
  /**
   * Deploy a function. Deploy a function associated with the specified ID.
   *
   * @param request - The request {@link DeployFunctionRequest}
   * @returns A Promise of Function
   */
  deployFunction = (request: Readonly<DeployFunctionRequest>, options?: RequestOptions) =>
    this.client.fetch<Function>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/functions/${validatePathParam('functionId', request.functionId)}/deploy`,
        signal: options?.signal,
      },
      unmarshalFunction,
    )

  
  /**
   * List function runtimes. List available function runtimes.
   *
   * @param request - The request {@link ListFunctionRuntimesRequest}
   * @returns A Promise of ListFunctionRuntimesResponse
   */
  listFunctionRuntimes = (request: Readonly<ListFunctionRuntimesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListFunctionRuntimesResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/runtimes`,
        signal: options?.signal,
      },
      unmarshalListFunctionRuntimesResponse,
    )

  
  /**
   * Get an upload URL of a function. Get an upload URL of a function associated with the specified ID.
   *
   * @param request - The request {@link GetFunctionUploadURLRequest}
   * @returns A Promise of UploadURL
   */
  getFunctionUploadURL = (request: Readonly<GetFunctionUploadURLRequest>, options?: RequestOptions) =>
    this.client.fetch<UploadURL>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/functions/${validatePathParam('functionId', request.functionId)}/upload-url`,
        urlParams: urlParams(
          ['content_length', request.contentLength],
        ),
        signal: options?.signal,
      },
      unmarshalUploadURL,
    )

  
  /**
   * Get a download URL of a function. Get a download URL for a function associated with the specified ID.
   *
   * @param request - The request {@link GetFunctionDownloadURLRequest}
   * @returns A Promise of DownloadURL
   */
  getFunctionDownloadURL = (request: Readonly<GetFunctionDownloadURLRequest>, options?: RequestOptions) =>
    this.client.fetch<DownloadURL>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/functions/${validatePathParam('functionId', request.functionId)}/download-url`,
        signal: options?.signal,
      },
      unmarshalDownloadURL,
    )

  
  protected pageOfListCrons = (request: Readonly<ListCronsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListCronsResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons`,
        urlParams: urlParams(
          ['function_id', request.functionId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListCronsResponse,
    )
  
  /**
   * List all crons. List all the cronjobs in a specified region.
   *
   * @param request - The request {@link ListCronsRequest}
   * @returns A Promise of ListCronsResponse
   */
  listCrons = (request: Readonly<ListCronsRequest>, options?: RequestOptions) =>
    enrichForPagination('crons', this.pageOfListCrons, request, options)

  
  /**
   * Get a cron. Get the cron associated with the specified ID.
   *
   * @param request - The request {@link GetCronRequest}
   * @returns A Promise of Cron
   */
  getCron = (request: Readonly<GetCronRequest>, options?: RequestOptions) =>
    this.client.fetch<Cron>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons/${validatePathParam('cronId', request.cronId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!CRON_TRANSIENT_STATUSES_FUNCTION.includes(res.status))),
      this.getCron,
      request,
      options,
    )

  
  /**
   * Create a new cron. Create a new cronjob for a function with the specified ID.
   *
   * @param request - The request {@link CreateCronRequest}
   * @returns A Promise of Cron
   */
  createCron = (request: Readonly<CreateCronRequest>, options?: RequestOptions) =>
    this.client.fetch<Cron>(
      {
        body: JSON.stringify(
          marshalCreateCronRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons`,
        signal: options?.signal,
      },
      unmarshalCron,
    )

  
  /**
   * Update an existing cron. Update the cron associated with the specified ID.
   *
   * @param request - The request {@link UpdateCronRequest}
   * @returns A Promise of Cron
   */
  updateCron = (request: Readonly<UpdateCronRequest>, options?: RequestOptions) =>
    this.client.fetch<Cron>(
      {
        body: JSON.stringify(
          marshalUpdateCronRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons/${validatePathParam('cronId', request.cronId)}`,
        signal: options?.signal,
      },
      unmarshalCron,
    )

  
  /**
   * Delete an existing cron. Delete the cron associated with the specified ID.
   *
   * @param request - The request {@link DeleteCronRequest}
   * @returns A Promise of Cron
   */
  deleteCron = (request: Readonly<DeleteCronRequest>, options?: RequestOptions) =>
    this.client.fetch<Cron>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/crons/${validatePathParam('cronId', request.cronId)}`,
        signal: options?.signal,
      },
      unmarshalCron,
    )

  
  protected pageOfListDomains = (request: Readonly<ListDomainsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListDomainsResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains`,
        urlParams: urlParams(
          ['function_id', request.functionId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListDomainsResponse,
    )
  
  /**
   * List all domain name bindings. List all domain name bindings in a specified region.
   *
   * @param request - The request {@link ListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<ListDomainsRequest>, options?: RequestOptions) =>
    enrichForPagination('domains', this.pageOfListDomains, request, options)

  
  /**
   * Get a domain name binding. Get a domain name binding for the function with the specified ID.
   *
   * @param request - The request {@link GetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<GetDomainRequest>, options?: RequestOptions) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!DOMAIN_TRANSIENT_STATUSES_FUNCTION.includes(res.status))),
      this.getDomain,
      request,
      options,
    )

  
  /**
   * Create a domain name binding. Create a domain name binding for the function with the specified ID.
   *
   * @param request - The request {@link CreateDomainRequest}
   * @returns A Promise of Domain
   */
  createDomain = (request: Readonly<CreateDomainRequest>, options?: RequestOptions) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(
          marshalCreateDomainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains`,
        signal: options?.signal,
      },
      unmarshalDomain,
    )

  
  /**
   * Delete a domain name binding. Delete a domain name binding for the function with the specified ID.
   *
   * @param request - The request {@link DeleteDomainRequest}
   * @returns A Promise of Domain
   */
  deleteDomain = (request: Readonly<DeleteDomainRequest>, options?: RequestOptions) =>
    this.client.fetch<Domain>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
        signal: options?.signal,
      },
      unmarshalDomain,
    )

  
  /**
   * Create a new revocable token. Deprecated in favor of IAM authentication.
   *
   * @deprecated
   * @param request - The request {@link CreateTokenRequest}
   * @returns A Promise of Token
   */
  createToken = (request: Readonly<CreateTokenRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Token>(
      {
        body: JSON.stringify(
          marshalCreateTokenRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens`,
        signal: options?.signal,
      },
      unmarshalToken,
    )

  
  /**
   * Get a token.
   *
   * @param request - The request {@link GetTokenRequest}
   * @returns A Promise of Token
   */
  getToken = (request: Readonly<GetTokenRequest>, options?: RequestOptions) =>
    this.client.fetch<Token>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!TOKEN_TRANSIENT_STATUSES_FUNCTION.includes(res.status))),
      this.getToken,
      request,
      options,
    )

  
  protected pageOfListTokens = (request: Readonly<ListTokensRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListTokensResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens`,
        urlParams: urlParams(
          ['function_id', request.functionId],
          ['namespace_id', request.namespaceId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListTokensResponse,
    )
  
  /**
   * List all tokens.
   *
   * @param request - The request {@link ListTokensRequest}
   * @returns A Promise of ListTokensResponse
   */
  listTokens = (request: Readonly<ListTokensRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('tokens', this.pageOfListTokens, request, options)

  
  /**
   * Delete a token.
   *
   * @param request - The request {@link DeleteTokenRequest}
   * @returns A Promise of Token
   */
  deleteToken = (request: Readonly<DeleteTokenRequest>, options?: RequestOptions) =>
    this.client.fetch<Token>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
        signal: options?.signal,
      },
      unmarshalToken,
    )

  
  /**
   * Create a trigger. Create a new trigger for a specified function.
   *
   * @param request - The request {@link CreateTriggerRequest}
   * @returns A Promise of Trigger
   */
  createTrigger = (request: Readonly<CreateTriggerRequest>, options?: RequestOptions) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(
          marshalCreateTriggerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers`,
        signal: options?.signal,
      },
      unmarshalTrigger,
    )

  
  /**
   * Get a trigger. Get a trigger with a specified ID.
   *
   * @param request - The request {@link GetTriggerRequest}
   * @returns A Promise of Trigger
   */
  getTrigger = (request: Readonly<GetTriggerRequest>, options?: RequestOptions) =>
    this.client.fetch<Trigger>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
        signal: options?.signal,
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
      options?.stop ?? (res => Promise.resolve(!TRIGGER_TRANSIENT_STATUSES_FUNCTION.includes(res.status))),
      this.getTrigger,
      request,
      options,
    )

  
  protected pageOfListTriggers = (request: Readonly<ListTriggersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListTriggersResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],  
          ...Object.entries(resolveOneOf([
            {param: 'function_id',
              value: request.functionId,
            },
            {param: 'namespace_id',
              value: request.namespaceId,
            },
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListTriggersResponse,
    )
  
  /**
   * List all triggers. List all triggers belonging to a specified Organization or Project.
   *
   * @param request - The request {@link ListTriggersRequest}
   * @returns A Promise of ListTriggersResponse
   */
  listTriggers = (request: Readonly<ListTriggersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('triggers', this.pageOfListTriggers, request, options)

  
  /**
   * Update a trigger. Update a trigger with a specified ID.
   *
   * @param request - The request {@link UpdateTriggerRequest}
   * @returns A Promise of Trigger
   */
  updateTrigger = (request: Readonly<UpdateTriggerRequest>, options?: RequestOptions) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(
          marshalUpdateTriggerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
        signal: options?.signal,
      },
      unmarshalTrigger,
    )

  
  /**
   * Delete a trigger. Delete a trigger with a specified ID.
   *
   * @param request - The request {@link DeleteTriggerRequest}
   * @returns A Promise of Trigger
   */
  deleteTrigger = (request: Readonly<DeleteTriggerRequest>, options?: RequestOptions) =>
    this.client.fetch<Trigger>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
        signal: options?.signal,
      },
      unmarshalTrigger,
    )

  
}

