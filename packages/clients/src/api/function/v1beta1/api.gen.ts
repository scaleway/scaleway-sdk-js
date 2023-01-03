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
  CRON_TRANSIENT_STATUSES,
  DOMAIN_TRANSIENT_STATUSES,
  FUNCTION_TRANSIENT_STATUSES,
  NAMESPACE_TRANSIENT_STATUSES,
  TOKEN_TRANSIENT_STATUSES,
  TRIGGER_INPUT_TRANSIENT_STATUSES,
  TRIGGER_TRANSIENT_STATUSES,
} from './content.gen'
import {
  marshalCreateCronRequest,
  marshalCreateDomainRequest,
  marshalCreateFunctionRequest,
  marshalCreateNamespaceRequest,
  marshalCreateTokenRequest,
  marshalCreateTriggerInputRequest,
  marshalCreateTriggerRequest,
  marshalSetTriggerInputsRequest,
  marshalUpdateCronRequest,
  marshalUpdateFunctionRequest,
  marshalUpdateNamespaceRequest,
  marshalUpdateTriggerInputRequest,
  marshalUpdateTriggerRequest,
  unmarshalCron,
  unmarshalDomain,
  unmarshalDownloadURL,
  unmarshalFunction,
  unmarshalListCronsResponse,
  unmarshalListDomainsResponse,
  unmarshalListFunctionRuntimesResponse,
  unmarshalListFunctionsResponse,
  unmarshalListLogsResponse,
  unmarshalListNamespacesResponse,
  unmarshalListTokensResponse,
  unmarshalListTriggerInputsResponse,
  unmarshalListTriggersResponse,
  unmarshalNamespace,
  unmarshalSetTriggerInputsResponse,
  unmarshalToken,
  unmarshalTrigger,
  unmarshalTriggerInput,
  unmarshalUploadURL,
} from './marshalling.gen'
import type {
  CreateCronRequest,
  CreateDomainRequest,
  CreateFunctionRequest,
  CreateNamespaceRequest,
  CreateTokenRequest,
  CreateTriggerInputRequest,
  CreateTriggerRequest,
  Cron,
  DeleteCronRequest,
  DeleteDomainRequest,
  DeleteFunctionRequest,
  DeleteNamespaceRequest,
  DeleteTokenRequest,
  DeleteTriggerInputRequest,
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
  GetTriggerInputRequest,
  GetTriggerRequest,
  IssueJWTRequest,
  ListCronsRequest,
  ListCronsResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListFunctionRuntimesRequest,
  ListFunctionRuntimesResponse,
  ListFunctionsRequest,
  ListFunctionsResponse,
  ListLogsRequest,
  ListLogsResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListTokensRequest,
  ListTokensResponse,
  ListTriggerInputsRequest,
  ListTriggerInputsResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  Namespace,
  SetTriggerInputsRequest,
  SetTriggerInputsResponse,
  Token,
  Trigger,
  TriggerInput,
  UpdateCronRequest,
  UpdateFunctionRequest,
  UpdateNamespaceRequest,
  UpdateTriggerInputRequest,
  UpdateTriggerRequest,
  UploadURL,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Functions API.
 *
 * Serverless functions API.
 */
export class FunctionV1Beta1GenAPI extends API {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  protected pageOfListNamespaces = (
    request: Readonly<ListNamespacesRequest> = {},
  ) =>
    this.client.fetch<ListNamespacesResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/namespaces/${validatePathParam('namespaceId', request.namespaceId)}`,
      },
      unmarshalNamespace,
    )

  protected pageOfListFunctions = (request: Readonly<ListFunctionsRequest>) =>
    this.client.fetch<ListFunctionsResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions`,
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
      unmarshalListFunctionsResponse,
    )

  /**
   * List all your functions
   *
   * @param request - The request {@link ListFunctionsRequest}
   * @returns A Promise of ListFunctionsResponse
   */
  listFunctions = (request: Readonly<ListFunctionsRequest>) =>
    enrichForPagination('functions', this.pageOfListFunctions, request)

  /**
   * Get the function associated with the given id.
   *
   * @param request - The request {@link GetFunctionRequest}
   * @returns A Promise of Function
   */
  getFunction = (request: Readonly<GetFunctionRequest>) =>
    this.client.fetch<Function>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions/${validatePathParam('functionId', request.functionId)}`,
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
      options?.stop ??
        (res =>
          Promise.resolve(!FUNCTION_TRANSIENT_STATUSES.includes(res.status))),
      this.getFunction,
      request,
      options,
    )

  /**
   * Create a new function
   *
   * @param request - The request {@link CreateFunctionRequest}
   * @returns A Promise of Function
   */
  createFunction = (request: Readonly<CreateFunctionRequest>) =>
    this.client.fetch<Function>(
      {
        body: JSON.stringify(
          marshalCreateFunctionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions`,
      },
      unmarshalFunction,
    )

  /**
   * Update the function associated with the given id.
   *
   * @param request - The request {@link UpdateFunctionRequest}
   * @returns A Promise of Function
   */
  updateFunction = (request: Readonly<UpdateFunctionRequest>) =>
    this.client.fetch<Function>(
      {
        body: JSON.stringify(
          marshalUpdateFunctionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions/${validatePathParam('functionId', request.functionId)}`,
      },
      unmarshalFunction,
    )

  /**
   * Delete the function associated with the given id.
   *
   * @param request - The request {@link DeleteFunctionRequest}
   * @returns A Promise of Function
   */
  deleteFunction = (request: Readonly<DeleteFunctionRequest>) =>
    this.client.fetch<Function>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions/${validatePathParam('functionId', request.functionId)}`,
      },
      unmarshalFunction,
    )

  /**
   * Deploy a function associated with the given id.
   *
   * @param request - The request {@link DeployFunctionRequest}
   * @returns A Promise of Function
   */
  deployFunction = (request: Readonly<DeployFunctionRequest>) =>
    this.client.fetch<Function>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions/${validatePathParam(
          'functionId',
          request.functionId,
        )}/deploy`,
      },
      unmarshalFunction,
    )

  /**
   * List available function runtimes.
   *
   * @param request - The request {@link ListFunctionRuntimesRequest}
   * @returns A Promise of ListFunctionRuntimesResponse
   */
  listFunctionRuntimes = (
    request: Readonly<ListFunctionRuntimesRequest> = {},
  ) =>
    this.client.fetch<ListFunctionRuntimesResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/runtimes`,
      },
      unmarshalListFunctionRuntimesResponse,
    )

  /**
   * Get an upload URL of a function associated with the given id.
   *
   * @param request - The request {@link GetFunctionUploadURLRequest}
   * @returns A Promise of UploadURL
   */
  getFunctionUploadURL = (request: Readonly<GetFunctionUploadURLRequest>) =>
    this.client.fetch<UploadURL>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions/${validatePathParam(
          'functionId',
          request.functionId,
        )}/upload-url`,
        urlParams: urlParams(['content_length', request.contentLength]),
      },
      unmarshalUploadURL,
    )

  /**
   * Get a download URL for a function associated with the given id.
   *
   * @param request - The request {@link GetFunctionDownloadURLRequest}
   * @returns A Promise of DownloadURL
   */
  getFunctionDownloadURL = (request: Readonly<GetFunctionDownloadURLRequest>) =>
    this.client.fetch<DownloadURL>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions/${validatePathParam(
          'functionId',
          request.functionId,
        )}/download-url`,
      },
      unmarshalDownloadURL,
    )

  protected pageOfListCrons = (request: Readonly<ListCronsRequest>) =>
    this.client.fetch<ListCronsResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/crons`,
        urlParams: urlParams(
          ['function_id', request.functionId],
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/functions/${validatePathParam(
          'functionId',
          request.functionId,
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
   * List your application logs
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
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains`,
        urlParams: urlParams(
          ['function_id', request.functionId],
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/issue-jwt`,
        urlParams: urlParams(
          ['expires_at', request.expiresAt],
          ...Object.entries(
            resolveOneOf([
              {
                param: 'function_id',
                value: request.functionId,
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

  /**
   * Create a new revocable token
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
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tokens`,
      },
      unmarshalToken,
    )

  /**
   * Get a token
   *
   * @param request - The request {@link GetTokenRequest}
   * @returns A Promise of Token
   */
  getToken = (request: Readonly<GetTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
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
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tokens`,
        urlParams: urlParams(
          ['function_id', request.functionId],
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

  /**
   * List all tokens
   *
   * @param request - The request {@link ListTokensRequest}
   * @returns A Promise of ListTokensResponse
   */
  listTokens = (request: Readonly<ListTokensRequest> = {}) =>
    enrichForPagination('tokens', this.pageOfListTokens, request)

  /**
   * Delete a token
   *
   * @param request - The request {@link DeleteTokenRequest}
   * @returns A Promise of Token
   */
  deleteToken = (request: Readonly<DeleteTokenRequest>) =>
    this.client.fetch<Token>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/tokens/${validatePathParam('tokenId', request.tokenId)}`,
      },
      unmarshalToken,
    )

  createTrigger = (request: Readonly<CreateTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(
          marshalCreateTriggerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/triggers`,
      },
      unmarshalTrigger,
    )

  getTrigger = (request: Readonly<GetTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
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
          Promise.resolve(!TRIGGER_TRANSIENT_STATUSES.includes(res.status))),
      this.getTrigger,
      request,
      options,
    )

  protected pageOfListTriggers = (request: Readonly<ListTriggersRequest>) =>
    this.client.fetch<ListTriggersResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/triggers`,
        urlParams: urlParams(
          ['function_id', request.functionId],
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListTriggersResponse,
    )

  listTriggers = (request: Readonly<ListTriggersRequest>) =>
    enrichForPagination('triggers', this.pageOfListTriggers, request)

  updateTrigger = (request: Readonly<UpdateTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        body: JSON.stringify(
          marshalUpdateTriggerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
      },
      unmarshalTrigger,
    )

  deleteTrigger = (request: Readonly<DeleteTriggerRequest>) =>
    this.client.fetch<Trigger>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/triggers/${validatePathParam('triggerId', request.triggerId)}`,
      },
      unmarshalTrigger,
    )

  createTriggerInput = (request: Readonly<CreateTriggerInputRequest>) =>
    this.client.fetch<TriggerInput>(
      {
        body: JSON.stringify(
          marshalCreateTriggerInputRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/trigger-inputs`,
      },
      unmarshalTriggerInput,
    )

  getTriggerInput = (request: Readonly<GetTriggerInputRequest>) =>
    this.client.fetch<TriggerInput>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/trigger-inputs/${validatePathParam(
          'triggerInputId',
          request.triggerInputId,
        )}`,
      },
      unmarshalTriggerInput,
    )

  /**
   * Waits for {@link TriggerInput} to be in a final state.
   *
   * @param request - The request {@link GetTriggerInputRequest}
   * @param options - The waiting options
   * @returns A Promise of TriggerInput
   */
  waitForTriggerInput = (
    request: Readonly<GetTriggerInputRequest>,
    options?: Readonly<WaitForOptions<TriggerInput>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !TRIGGER_INPUT_TRANSIENT_STATUSES.includes(res.status),
          )),
      this.getTriggerInput,
      request,
      options,
    )

  protected pageOfListTriggerInputs = (
    request: Readonly<ListTriggerInputsRequest>,
  ) =>
    this.client.fetch<ListTriggerInputsResponse>(
      {
        method: 'GET',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/trigger-inputs`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['trigger_id', request.triggerId],
        ),
      },
      unmarshalListTriggerInputsResponse,
    )

  listTriggerInputs = (request: Readonly<ListTriggerInputsRequest>) =>
    enrichForPagination('inputs', this.pageOfListTriggerInputs, request)

  setTriggerInputs = (request: Readonly<SetTriggerInputsRequest>) =>
    this.client.fetch<SetTriggerInputsResponse>(
      {
        body: JSON.stringify(
          marshalSetTriggerInputsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/trigger-inputs`,
      },
      unmarshalSetTriggerInputsResponse,
    )

  updateTriggerInput = (request: Readonly<UpdateTriggerInputRequest>) =>
    this.client.fetch<TriggerInput>(
      {
        body: JSON.stringify(
          marshalUpdateTriggerInputRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/trigger-inputs/${validatePathParam(
          'triggerInputId',
          request.triggerInputId,
        )}`,
      },
      unmarshalTriggerInput,
    )

  deleteTriggerInput = (request: Readonly<DeleteTriggerInputRequest>) =>
    this.client.fetch<TriggerInput>(
      {
        method: 'DELETE',
        path: `/functions/v1beta1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/trigger-inputs/${validatePathParam(
          'triggerInputId',
          request.triggerInputId,
        )}`,
      },
      unmarshalTriggerInput,
    )
}
