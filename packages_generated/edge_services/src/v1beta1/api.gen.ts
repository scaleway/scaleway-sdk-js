// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { WaitForOptions, } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import {PIPELINE_TRANSIENT_STATUSES as PIPELINE_TRANSIENT_STATUSES_EDGE_SERVICES,PURGE_REQUEST_TRANSIENT_STATUSES as PURGE_REQUEST_TRANSIENT_STATUSES_EDGE_SERVICES,} from './content.gen.js'
import {
  marshalAddRouteRulesRequest,
  marshalCheckDomainRequest,
  marshalCheckLbOriginRequest,
  marshalCheckPEMChainRequest,
  marshalCreateBackendStageRequest,
  marshalCreateCacheStageRequest,
  marshalCreateDNSStageRequest,
  marshalCreatePipelineRequest,
  marshalCreatePurgeRequestRequest,
  marshalCreateRouteStageRequest,
  marshalCreateTLSStageRequest,
  marshalCreateWafStageRequest,
  marshalSelectPlanRequest,
  marshalSetHeadStageRequest,
  marshalSetRouteRulesRequest,
  marshalUpdateBackendStageRequest,
  marshalUpdateCacheStageRequest,
  marshalUpdateDNSStageRequest,
  marshalUpdatePipelineRequest,
  marshalUpdateRouteStageRequest,
  marshalUpdateTLSStageRequest,
  marshalUpdateWafStageRequest,
  unmarshalAddRouteRulesResponse,
  unmarshalBackendStage,
  unmarshalCacheStage,
  unmarshalCheckDomainResponse,
  unmarshalCheckLbOriginResponse,
  unmarshalCheckPEMChainResponse,
  unmarshalDNSStage,
  unmarshalGetBillingResponse,
  unmarshalHeadStageResponse,
  unmarshalListBackendStagesResponse,
  unmarshalListCacheStagesResponse,
  unmarshalListDNSStagesResponse,
  unmarshalListHeadStagesResponse,
  unmarshalListPipelinesResponse,
  unmarshalListPipelinesWithStagesResponse,
  unmarshalListPlansResponse,
  unmarshalListPurgeRequestsResponse,
  unmarshalListRouteRulesResponse,
  unmarshalListRouteStagesResponse,
  unmarshalListTLSStagesResponse,
  unmarshalListWafStagesResponse,
  unmarshalPipeline,
  unmarshalPlan,
  unmarshalPurgeRequest,
  unmarshalRouteStage,
  unmarshalSetRouteRulesResponse,
  unmarshalTLSStage,
  unmarshalWafStage,
} from './marshalling.gen.js'
import type {
  AddRouteRulesRequest,
  AddRouteRulesResponse,
  BackendStage,
  CacheStage,
  CheckDomainRequest,
  CheckDomainResponse,
  CheckLbOriginRequest,
  CheckLbOriginResponse,
  CheckPEMChainRequest,
  CheckPEMChainResponse,
  CreateBackendStageRequest,
  CreateCacheStageRequest,
  CreateDNSStageRequest,
  CreatePipelineRequest,
  CreatePurgeRequestRequest,
  CreateRouteStageRequest,
  CreateTLSStageRequest,
  CreateWafStageRequest,
  DeleteBackendStageRequest,
  DeleteCacheStageRequest,
  DeleteCurrentPlanRequest,
  DeleteDNSStageRequest,
  DeletePipelineRequest,
  DeleteRouteStageRequest,
  DeleteTLSStageRequest,
  DeleteWafStageRequest,
  DNSStage,
  GetBackendStageRequest,
  GetBillingRequest,
  GetBillingResponse,
  GetCacheStageRequest,
  GetCurrentPlanRequest,
  GetDNSStageRequest,
  GetPipelineRequest,
  GetPurgeRequestRequest,
  GetRouteStageRequest,
  GetTLSStageRequest,
  GetWafStageRequest,
  HeadStageResponse,
  ListBackendStagesRequest,
  ListBackendStagesResponse,
  ListCacheStagesRequest,
  ListCacheStagesResponse,
  ListDNSStagesRequest,
  ListDNSStagesResponse,
  ListHeadStagesRequest,
  ListHeadStagesResponse,
  ListPipelinesRequest,
  ListPipelinesResponse,
  ListPipelinesWithStagesRequest,
  ListPipelinesWithStagesResponse,
  ListPlansResponse,
  ListPurgeRequestsRequest,
  ListPurgeRequestsResponse,
  ListRouteRulesRequest,
  ListRouteRulesResponse,
  ListRouteStagesRequest,
  ListRouteStagesResponse,
  ListTLSStagesRequest,
  ListTLSStagesResponse,
  ListWafStagesRequest,
  ListWafStagesResponse,
  Pipeline,
  Plan,
  PurgeRequest,
  RouteStage,
  SearchBackendStagesRequest,
  SearchRouteRulesRequest,
  SearchWafStagesRequest,
  SelectPlanRequest,
  SetHeadStageRequest,
  SetRouteRulesRequest,
  SetRouteRulesResponse,
  TLSStage,
  UpdateBackendStageRequest,
  UpdateCacheStageRequest,
  UpdateDNSStageRequest,
  UpdatePipelineRequest,
  UpdateRouteStageRequest,
  UpdateTLSStageRequest,
  UpdateWafStageRequest,
  WafStage,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Edge Services API.
 */
export class API extends ParentAPI {
  protected pageOfListPipelines = (request: Readonly<ListPipelinesRequest> = {}) =>
    this.client.fetch<ListPipelinesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines`,
        urlParams: urlParams(
          ['has_backend_stage_lb', request.hasBackendStageLb],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListPipelinesResponse,
    )
  
  /**
   * List pipelines. List all pipelines, for a Scaleway Organization or Scaleway Project. By default, the pipelines returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListPipelinesRequest}
   * @returns A Promise of ListPipelinesResponse
   */
  listPipelines = (request: Readonly<ListPipelinesRequest> = {}) =>
    enrichForPagination('pipelines', this.pageOfListPipelines, request)

  
  /**
   * Create pipeline. Create a new pipeline. You must specify a `dns_stage_id` to form a stage-chain that goes all the way to the backend stage (origin), so the HTTP request will be processed according to the stages you created.
   *
   * @param request - The request {@link CreatePipelineRequest}
   * @returns A Promise of Pipeline
   */
  createPipeline = (request: Readonly<CreatePipelineRequest>) =>
    this.client.fetch<Pipeline>(
      {
        body: JSON.stringify(
          marshalCreatePipelineRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines`,
      },
      unmarshalPipeline,
    )

  
  /**
   * Get pipeline. Retrieve information about an existing pipeline, specified by its `pipeline_id`. Its full details, including errors, are returned in the response object.
   *
   * @param request - The request {@link GetPipelineRequest}
   * @returns A Promise of Pipeline
   */
  getPipeline = (request: Readonly<GetPipelineRequest>) =>
    this.client.fetch<Pipeline>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}`,
      },
      unmarshalPipeline,
    )
  
  /**
   * Waits for {@link Pipeline} to be in a final state.
   *
   * @param request - The request {@link GetPipelineRequest}
   * @param options - The waiting options
   * @returns A Promise of Pipeline
   */
  waitForPipeline = (
    request: Readonly<GetPipelineRequest>,
    options?: Readonly<WaitForOptions<Pipeline>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!PIPELINE_TRANSIENT_STATUSES_EDGE_SERVICES.includes(res.status))),
      this.getPipeline,
      request,
      options,
    )

  
  protected pageOfListPipelinesWithStages = (request: Readonly<ListPipelinesWithStagesRequest> = {}) =>
    this.client.fetch<ListPipelinesWithStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines-stages`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListPipelinesWithStagesResponse,
    )
  
  listPipelinesWithStages = (request: Readonly<ListPipelinesWithStagesRequest> = {}) =>
    enrichForPagination('pipelines', this.pageOfListPipelinesWithStages, request)

  
  /**
   * Update pipeline. Update the parameters of an existing pipeline, specified by its `pipeline_id`. Parameters which can be updated include the `name`, `description` and `dns_stage_id`.
   *
   * @param request - The request {@link UpdatePipelineRequest}
   * @returns A Promise of Pipeline
   */
  updatePipeline = (request: Readonly<UpdatePipelineRequest>) =>
    this.client.fetch<Pipeline>(
      {
        body: JSON.stringify(
          marshalUpdatePipelineRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}`,
      },
      unmarshalPipeline,
    )

  
  /**
   * Delete pipeline. Delete an existing pipeline, specified by its `pipeline_id`. Deleting a pipeline is permanent, and cannot be undone. Note that all stages linked to the pipeline are also deleted.
   *
   * @param request - The request {@link DeletePipelineRequest}
   */
  deletePipeline = (request: Readonly<DeletePipelineRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}`,
      },
    )

  
  protected pageOfListHeadStages = (request: Readonly<ListHeadStagesRequest>) =>
    this.client.fetch<ListHeadStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/head-stages`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListHeadStagesResponse,
    )
  
  /**
   * List Head stage for your pipeline.. List Head stage for your pipeline.
   *
   * @param request - The request {@link ListHeadStagesRequest}
   * @returns A Promise of ListHeadStagesResponse
   */
  listHeadStages = (request: Readonly<ListHeadStagesRequest>) =>
    enrichForPagination('headStages', this.pageOfListHeadStages, request)

  
  /**
   * Configure a entry point to your pipeline. You must specify a `head stage` to form a stage-chain that goes all the way to the backend stage (origin), so the HTTP request will be processed according to the stages you created.. You must specify either a `add_new_head_stage` (to add a new head stage), `remove_head_stage` (to remove a head stage) or `swap_head_stage` (to replace a head stage).
   *
   * @param request - The request {@link SetHeadStageRequest}
   * @returns A Promise of HeadStageResponse
   */
  setHeadStage = (request: Readonly<SetHeadStageRequest>) =>
    this.client.fetch<HeadStageResponse>(
      {
        body: JSON.stringify(
          marshalSetHeadStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/set-head-stage`,
      },
      unmarshalHeadStageResponse,
    )

  
  protected pageOfListDNSStages = (request: Readonly<ListDNSStagesRequest>) =>
    this.client.fetch<ListDNSStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/dns-stages`,
        urlParams: urlParams(
          ['fqdn', request.fqdn],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListDNSStagesResponse,
    )
  
  /**
   * List DNS stages. List all DNS stages, for a Scaleway Organization or Scaleway Project. By default, the DNS stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListDNSStagesRequest}
   * @returns A Promise of ListDNSStagesResponse
   */
  listDNSStages = (request: Readonly<ListDNSStagesRequest>) =>
    enrichForPagination('stages', this.pageOfListDNSStages, request)

  
  /**
   * Create DNS stage. Create a new DNS stage. You must specify the `fqdns` field to customize the domain endpoint, using a domain you already own.
   *
   * @param request - The request {@link CreateDNSStageRequest}
   * @returns A Promise of DNSStage
   */
  createDNSStage = (request: Readonly<CreateDNSStageRequest>) =>
    this.client.fetch<DNSStage>(
      {
        body: JSON.stringify(
          marshalCreateDNSStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/dns-stages`,
      },
      unmarshalDNSStage,
    )

  
  /**
   * Get DNS stage. Retrieve information about an existing DNS stage, specified by its `dns_stage_id`. Its full details, including FQDNs, are returned in the response object.
   *
   * @param request - The request {@link GetDNSStageRequest}
   * @returns A Promise of DNSStage
   */
  getDNSStage = (request: Readonly<GetDNSStageRequest>) =>
    this.client.fetch<DNSStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/dns-stages/${validatePathParam('dnsStageId', request.dnsStageId)}`,
      },
      unmarshalDNSStage,
    )

  
  /**
   * Update DNS stage. Update the parameters of an existing DNS stage, specified by its `dns_stage_id`.
   *
   * @param request - The request {@link UpdateDNSStageRequest}
   * @returns A Promise of DNSStage
   */
  updateDNSStage = (request: Readonly<UpdateDNSStageRequest>) =>
    this.client.fetch<DNSStage>(
      {
        body: JSON.stringify(
          marshalUpdateDNSStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/dns-stages/${validatePathParam('dnsStageId', request.dnsStageId)}`,
      },
      unmarshalDNSStage,
    )

  
  /**
   * Delete DNS stage. Delete an existing DNS stage, specified by its `dns_stage_id`. Deleting a DNS stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteDNSStageRequest}
   */
  deleteDNSStage = (request: Readonly<DeleteDNSStageRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/dns-stages/${validatePathParam('dnsStageId', request.dnsStageId)}`,
      },
    )

  
  protected pageOfListTLSStages = (request: Readonly<ListTLSStagesRequest>) =>
    this.client.fetch<ListTLSStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/tls-stages`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['secret_id', request.secretId],
          ['secret_region', request.secretRegion],
        ),
      },
      unmarshalListTLSStagesResponse,
    )
  
  /**
   * List TLS stages. List all TLS stages, for a Scaleway Organization or Scaleway Project. By default, the TLS stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListTLSStagesRequest}
   * @returns A Promise of ListTLSStagesResponse
   */
  listTLSStages = (request: Readonly<ListTLSStagesRequest>) =>
    enrichForPagination('stages', this.pageOfListTLSStages, request)

  
  /**
   * Create TLS stage. Create a new TLS stage. You must specify either the `secrets` or `managed_certificate` fields to customize the SSL/TLS certificate of your endpoint. Choose `secrets` if you are using a pre-existing certificate held in Scaleway Secret Manager, or `managed_certificate` to let Scaleway generate and manage a Let's Encrypt certificate for your customized endpoint.
   *
   * @param request - The request {@link CreateTLSStageRequest}
   * @returns A Promise of TLSStage
   */
  createTLSStage = (request: Readonly<CreateTLSStageRequest>) =>
    this.client.fetch<TLSStage>(
      {
        body: JSON.stringify(
          marshalCreateTLSStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/tls-stages`,
      },
      unmarshalTLSStage,
    )

  
  /**
   * Get TLS stage. Retrieve information about an existing TLS stage, specified by its `tls_stage_id`. Its full details, including secrets and certificate expiration date are returned in the response object.
   *
   * @param request - The request {@link GetTLSStageRequest}
   * @returns A Promise of TLSStage
   */
  getTLSStage = (request: Readonly<GetTLSStageRequest>) =>
    this.client.fetch<TLSStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/tls-stages/${validatePathParam('tlsStageId', request.tlsStageId)}`,
      },
      unmarshalTLSStage,
    )

  
  /**
   * Update TLS stage. Update the parameters of an existing TLS stage, specified by its `tls_stage_id`. Both `tls_secrets_config` and `managed_certificate` parameters can be updated.
   *
   * @param request - The request {@link UpdateTLSStageRequest}
   * @returns A Promise of TLSStage
   */
  updateTLSStage = (request: Readonly<UpdateTLSStageRequest>) =>
    this.client.fetch<TLSStage>(
      {
        body: JSON.stringify(
          marshalUpdateTLSStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/tls-stages/${validatePathParam('tlsStageId', request.tlsStageId)}`,
      },
      unmarshalTLSStage,
    )

  
  /**
   * Delete TLS stage. Delete an existing TLS stage, specified by its `tls_stage_id`. Deleting a TLS stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteTLSStageRequest}
   */
  deleteTLSStage = (request: Readonly<DeleteTLSStageRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/tls-stages/${validatePathParam('tlsStageId', request.tlsStageId)}`,
      },
    )

  
  protected pageOfListCacheStages = (request: Readonly<ListCacheStagesRequest>) =>
    this.client.fetch<ListCacheStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/cache-stages`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListCacheStagesResponse,
    )
  
  /**
   * List cache stages. List all cache stages, for a Scaleway Organization or Scaleway Project. By default, the cache stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListCacheStagesRequest}
   * @returns A Promise of ListCacheStagesResponse
   */
  listCacheStages = (request: Readonly<ListCacheStagesRequest>) =>
    enrichForPagination('stages', this.pageOfListCacheStages, request)

  
  /**
   * Create cache stage. Create a new cache stage. You must specify the `fallback_ttl` field to customize the TTL of the cache.
   *
   * @param request - The request {@link CreateCacheStageRequest}
   * @returns A Promise of CacheStage
   */
  createCacheStage = (request: Readonly<CreateCacheStageRequest>) =>
    this.client.fetch<CacheStage>(
      {
        body: JSON.stringify(
          marshalCreateCacheStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/cache-stages`,
      },
      unmarshalCacheStage,
    )

  
  /**
   * Get cache stage. Retrieve information about an existing cache stage, specified by its `cache_stage_id`. Its full details, including Time To Live (TTL), are returned in the response object.
   *
   * @param request - The request {@link GetCacheStageRequest}
   * @returns A Promise of CacheStage
   */
  getCacheStage = (request: Readonly<GetCacheStageRequest>) =>
    this.client.fetch<CacheStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/cache-stages/${validatePathParam('cacheStageId', request.cacheStageId)}`,
      },
      unmarshalCacheStage,
    )

  
  /**
   * Update cache stage. Update the parameters of an existing cache stage, specified by its `cache_stage_id`. Parameters which can be updated include the `fallback_ttl`, `include_cookies` and `backend_stage_id`.
   *
   * @param request - The request {@link UpdateCacheStageRequest}
   * @returns A Promise of CacheStage
   */
  updateCacheStage = (request: Readonly<UpdateCacheStageRequest>) =>
    this.client.fetch<CacheStage>(
      {
        body: JSON.stringify(
          marshalUpdateCacheStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/cache-stages/${validatePathParam('cacheStageId', request.cacheStageId)}`,
      },
      unmarshalCacheStage,
    )

  
  /**
   * Delete cache stage. Delete an existing cache stage, specified by its `cache_stage_id`. Deleting a cache stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteCacheStageRequest}
   */
  deleteCacheStage = (request: Readonly<DeleteCacheStageRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/cache-stages/${validatePathParam('cacheStageId', request.cacheStageId)}`,
      },
    )

  
  protected pageOfListBackendStages = (request: Readonly<ListBackendStagesRequest>) =>
    this.client.fetch<ListBackendStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/backend-stages`,
        urlParams: urlParams(
          ['bucket_name', request.bucketName],
          ['bucket_region', request.bucketRegion],
          ['lb_id', request.lbId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListBackendStagesResponse,
    )
  
  /**
   * List backend stages. List all backend stages, for a Scaleway Organization or Scaleway Project. By default, the backend stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListBackendStagesRequest}
   * @returns A Promise of ListBackendStagesResponse
   */
  listBackendStages = (request: Readonly<ListBackendStagesRequest>) =>
    enrichForPagination('stages', this.pageOfListBackendStages, request)

  
  /**
   * Create backend stage. Create a new backend stage. You must specify either a `scaleway_s3` (for a Scaleway Object Storage bucket) or `scaleway_lb` (for a Scaleway Load Balancer) field to configure the origin.
   *
   * @param request - The request {@link CreateBackendStageRequest}
   * @returns A Promise of BackendStage
   */
  createBackendStage = (request: Readonly<CreateBackendStageRequest>) =>
    this.client.fetch<BackendStage>(
      {
        body: JSON.stringify(
          marshalCreateBackendStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/backend-stages`,
      },
      unmarshalBackendStage,
    )

  
  /**
   * Get backend stage. Retrieve information about an existing backend stage, specified by its `backend_stage_id`. Its full details, including `scaleway_s3` or `scaleway_lb`, are returned in the response object.
   *
   * @param request - The request {@link GetBackendStageRequest}
   * @returns A Promise of BackendStage
   */
  getBackendStage = (request: Readonly<GetBackendStageRequest>) =>
    this.client.fetch<BackendStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/backend-stages/${validatePathParam('backendStageId', request.backendStageId)}`,
      },
      unmarshalBackendStage,
    )

  
  /**
   * Update backend stage. Update the parameters of an existing backend stage, specified by its `backend_stage_id`.
   *
   * @param request - The request {@link UpdateBackendStageRequest}
   * @returns A Promise of BackendStage
   */
  updateBackendStage = (request: Readonly<UpdateBackendStageRequest>) =>
    this.client.fetch<BackendStage>(
      {
        body: JSON.stringify(
          marshalUpdateBackendStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/backend-stages/${validatePathParam('backendStageId', request.backendStageId)}`,
      },
      unmarshalBackendStage,
    )

  
  /**
   * Delete backend stage. Delete an existing backend stage, specified by its `backend_stage_id`. Deleting a backend stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteBackendStageRequest}
   */
  deleteBackendStage = (request: Readonly<DeleteBackendStageRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/backend-stages/${validatePathParam('backendStageId', request.backendStageId)}`,
      },
    )

  
  searchBackendStages = (request: Readonly<SearchBackendStagesRequest> = {}) =>
    this.client.fetch<ListBackendStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/search-backend-stages`,
        urlParams: urlParams(
          ['bucket_name', request.bucketName],
          ['bucket_region', request.bucketRegion],
          ['lb_id', request.lbId],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
        ),
      },
      unmarshalListBackendStagesResponse,
    )

  
  protected pageOfListWafStages = (request: Readonly<ListWafStagesRequest>) =>
    this.client.fetch<ListWafStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/waf-stages`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListWafStagesResponse,
    )
  
  /**
   * List WAF stages. List all WAF stages, for a Scaleway Organization or Scaleway Project. By default, the WAF stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListWafStagesRequest}
   * @returns A Promise of ListWafStagesResponse
   */
  listWafStages = (request: Readonly<ListWafStagesRequest>) =>
    enrichForPagination('stages', this.pageOfListWafStages, request)

  
  /**
   * Create WAF stage. Create a new WAF stage. You must specify the `mode` and `paranoia_level` fields to customize the WAF.
   *
   * @param request - The request {@link CreateWafStageRequest}
   * @returns A Promise of WafStage
   */
  createWafStage = (request: Readonly<CreateWafStageRequest>) =>
    this.client.fetch<WafStage>(
      {
        body: JSON.stringify(
          marshalCreateWafStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/waf-stages`,
      },
      unmarshalWafStage,
    )

  
  /**
   * Get WAF stage. Retrieve information about an existing WAF stage, specified by its `waf_stage_id`. Its full details are returned in the response object.
   *
   * @param request - The request {@link GetWafStageRequest}
   * @returns A Promise of WafStage
   */
  getWafStage = (request: Readonly<GetWafStageRequest>) =>
    this.client.fetch<WafStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/waf-stages/${validatePathParam('wafStageId', request.wafStageId)}`,
      },
      unmarshalWafStage,
    )

  
  /**
   * Update WAF stage. Update the parameters of an existing WAF stage, specified by its `waf_stage_id`. Both `mode` and `paranoia_level` parameters can be updated.
   *
   * @param request - The request {@link UpdateWafStageRequest}
   * @returns A Promise of WafStage
   */
  updateWafStage = (request: Readonly<UpdateWafStageRequest>) =>
    this.client.fetch<WafStage>(
      {
        body: JSON.stringify(
          marshalUpdateWafStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/waf-stages/${validatePathParam('wafStageId', request.wafStageId)}`,
      },
      unmarshalWafStage,
    )

  
  /**
   * Delete WAF stage. Delete an existing WAF stage, specified by its `waf_stage_id`. Deleting a WAF stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteWafStageRequest}
   */
  deleteWafStage = (request: Readonly<DeleteWafStageRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/waf-stages/${validatePathParam('wafStageId', request.wafStageId)}`,
      },
    )

  
  searchWafStages = (request: Readonly<SearchWafStagesRequest> = {}) =>
    this.client.fetch<ListWafStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/search-waf-stages`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
        ),
      },
      unmarshalListWafStagesResponse,
    )

  
  protected pageOfListRouteStages = (request: Readonly<ListRouteStagesRequest>) =>
    this.client.fetch<ListRouteStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/route-stages`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListRouteStagesResponse,
    )
  
  /**
   * List route stages. List all route stages, for a given pipeline. By default, the route stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListRouteStagesRequest}
   * @returns A Promise of ListRouteStagesResponse
   */
  listRouteStages = (request: Readonly<ListRouteStagesRequest>) =>
    enrichForPagination('stages', this.pageOfListRouteStages, request)

  
  /**
   * Create route stage. Create a new route stage. You must specify the `waf_stage_id` field to customize the route.
   *
   * @param request - The request {@link CreateRouteStageRequest}
   * @returns A Promise of RouteStage
   */
  createRouteStage = (request: Readonly<CreateRouteStageRequest>) =>
    this.client.fetch<RouteStage>(
      {
        body: JSON.stringify(
          marshalCreateRouteStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/route-stages`,
      },
      unmarshalRouteStage,
    )

  
  /**
   * Get route stage. Retrieve information about an existing route stage, specified by its `route_stage_id`. The summary of the route stage (without route rules) is returned in the response object.
   *
   * @param request - The request {@link GetRouteStageRequest}
   * @returns A Promise of RouteStage
   */
  getRouteStage = (request: Readonly<GetRouteStageRequest>) =>
    this.client.fetch<RouteStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}`,
      },
      unmarshalRouteStage,
    )

  
  /**
   * Update route stage. Update the parameters of an existing route stage, specified by its `route_stage_id`.
   *
   * @param request - The request {@link UpdateRouteStageRequest}
   * @returns A Promise of RouteStage
   */
  updateRouteStage = (request: Readonly<UpdateRouteStageRequest>) =>
    this.client.fetch<RouteStage>(
      {
        body: JSON.stringify(
          marshalUpdateRouteStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}`,
      },
      unmarshalRouteStage,
    )

  
  /**
   * Delete route stage. Delete an existing route stage, specified by its `route_stage_id`. Deleting a route stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteRouteStageRequest}
   */
  deleteRouteStage = (request: Readonly<DeleteRouteStageRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}`,
      },
    )

  
  /**
   * List route rules. List all route rules of an existing route stage, specified by its `route_stage_id`.
   *
   * @param request - The request {@link ListRouteRulesRequest}
   * @returns A Promise of ListRouteRulesResponse
   */
  listRouteRules = (request: Readonly<ListRouteRulesRequest>) =>
    this.client.fetch<ListRouteRulesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}/route-rules`,
      },
      unmarshalListRouteRulesResponse,
    )

  
  /**
   * Set route rules. Set the rules of an existing route stage, specified by its `route_stage_id`.
   *
   * @param request - The request {@link SetRouteRulesRequest}
   * @returns A Promise of SetRouteRulesResponse
   */
  setRouteRules = (request: Readonly<SetRouteRulesRequest>) =>
    this.client.fetch<SetRouteRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetRouteRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}/route-rules`,
      },
      unmarshalSetRouteRulesResponse,
    )

  
  /**
   * Add route rules. Add route rules to an existing route stage, specified by its `route_stage_id`.
   *
   * @param request - The request {@link AddRouteRulesRequest}
   * @returns A Promise of AddRouteRulesResponse
   */
  addRouteRules = (request: Readonly<AddRouteRulesRequest>) =>
    this.client.fetch<AddRouteRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddRouteRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}/route-rules`,
      },
      unmarshalAddRouteRulesResponse,
    )

  
  /**
   * List route rules. List all route rules of an organization or project.
   *
   * @param request - The request {@link SearchRouteRulesRequest}
   * @returns A Promise of ListRouteRulesResponse
   */
  searchRouteRules = (request: Readonly<SearchRouteRulesRequest> = {}) =>
    this.client.fetch<ListRouteRulesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/search-route-rules`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListRouteRulesResponse,
    )

  
  checkDomain = (request: Readonly<CheckDomainRequest>) =>
    this.client.fetch<CheckDomainResponse>(
      {
        body: JSON.stringify(
          marshalCheckDomainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/check-domain`,
      },
      unmarshalCheckDomainResponse,
    )

  
  checkPEMChain = (request: Readonly<CheckPEMChainRequest>) =>
    this.client.fetch<CheckPEMChainResponse>(
      {
        body: JSON.stringify(
          marshalCheckPEMChainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/check-pem-chain`,
      },
      unmarshalCheckPEMChainResponse,
    )

  
  protected pageOfListPurgeRequests = (request: Readonly<ListPurgeRequestsRequest> = {}) =>
    this.client.fetch<ListPurgeRequestsResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/purge-requests`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['pipeline_id', request.pipelineId],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListPurgeRequestsResponse,
    )
  
  /**
   * List purge requests. List all purge requests, for a Scaleway Organization or Scaleway Project. This enables you to retrieve a history of all previously-made purge requests. By default, the purge requests returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListPurgeRequestsRequest}
   * @returns A Promise of ListPurgeRequestsResponse
   */
  listPurgeRequests = (request: Readonly<ListPurgeRequestsRequest> = {}) =>
    enrichForPagination('purgeRequests', this.pageOfListPurgeRequests, request)

  
  /**
   * Create purge request. Create a new purge request. You must specify either the `all` field (to purge all content) or a list of `assets` (to define the precise assets to purge).
   *
   * @param request - The request {@link CreatePurgeRequestRequest}
   * @returns A Promise of PurgeRequest
   */
  createPurgeRequest = (request: Readonly<CreatePurgeRequestRequest>) =>
    this.client.fetch<PurgeRequest>(
      {
        body: JSON.stringify(
          marshalCreatePurgeRequestRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/purge-requests`,
      },
      unmarshalPurgeRequest,
    )

  
  /**
   * Get purge request. Retrieve information about a purge request, specified by its `purge_request_id`. Its full details, including `status` and `target`, are returned in the response object.
   *
   * @param request - The request {@link GetPurgeRequestRequest}
   * @returns A Promise of PurgeRequest
   */
  getPurgeRequest = (request: Readonly<GetPurgeRequestRequest>) =>
    this.client.fetch<PurgeRequest>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/purge-requests/${validatePathParam('purgeRequestId', request.purgeRequestId)}`,
      },
      unmarshalPurgeRequest,
    )
  
  /**
   * Waits for {@link PurgeRequest} to be in a final state.
   *
   * @param request - The request {@link GetPurgeRequestRequest}
   * @param options - The waiting options
   * @returns A Promise of PurgeRequest
   */
  waitForPurgeRequest = (
    request: Readonly<GetPurgeRequestRequest>,
    options?: Readonly<WaitForOptions<PurgeRequest>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!PURGE_REQUEST_TRANSIENT_STATUSES_EDGE_SERVICES.includes(res.status))),
      this.getPurgeRequest,
      request,
      options,
    )

  
  checkLbOrigin = (request: Readonly<CheckLbOriginRequest> = {}) =>
    this.client.fetch<CheckLbOriginResponse>(
      {
        body: JSON.stringify(
          marshalCheckLbOriginRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/check-lb-origin`,
      },
      unmarshalCheckLbOriginResponse,
    )

  
  listPlans = () =>
    this.client.fetch<ListPlansResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/plans`,
      },
      unmarshalListPlansResponse,
    )

  
  selectPlan = (request: Readonly<SelectPlanRequest> = {}) =>
    this.client.fetch<Plan>(
      {
        body: JSON.stringify(
          marshalSelectPlanRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/current-plan`,
      },
      unmarshalPlan,
    )

  
  getCurrentPlan = (request: Readonly<GetCurrentPlanRequest> = {}) =>
    this.client.fetch<Plan>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/current-plan/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
      },
      unmarshalPlan,
    )

  
  deleteCurrentPlan = (request: Readonly<DeleteCurrentPlanRequest> = {}) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/current-plan/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
      },
    )

  
  /**
   * Gives information on the currently selected Edge Services subscription plan, resource usage and associated billing information for this calendar month (including whether consumption falls within or exceeds the currently selected subscription plan.).
   *
   * @param request - The request {@link GetBillingRequest}
   * @returns A Promise of GetBillingResponse
   */
  getBilling = (request: Readonly<GetBillingRequest> = {}) =>
    this.client.fetch<GetBillingResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/billing/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
      },
      unmarshalGetBillingResponse,
    )

  
}

