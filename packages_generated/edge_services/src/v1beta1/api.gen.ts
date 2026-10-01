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
import {PIPELINE_TRANSIENT_STATUSES as PIPELINE_TRANSIENT_STATUSES_EDGE_SERVICES,PURGE_REQUEST_TRANSIENT_STATUSES as PURGE_REQUEST_TRANSIENT_STATUSES_EDGE_SERVICES,} from './content.gen.js'
import {
  marshalAddRouteRulesRequest,
  unmarshalAddRouteRulesResponse,
  unmarshalBackendStage,
  unmarshalCacheStage,
  marshalCheckDomainRequest,
  unmarshalCheckDomainResponse,
  marshalCheckLbOriginRequest,
  unmarshalCheckLbOriginResponse,
  marshalCheckPEMChainRequest,
  unmarshalCheckPEMChainResponse,
  marshalCreateBackendStageRequest,
  marshalCreateCacheStageRequest,
  marshalCreateDNSStageRequest,
  marshalCreatePipelineRequest,
  marshalCreatePurgeRequestRequest,
  marshalCreateRouteStageRequest,
  marshalCreateTLSStageRequest,
  marshalCreateVPCEndpointRequest,
  marshalCreateWafStageRequest,
  unmarshalDNSStage,
  unmarshalGetBillingResponse,
  unmarshalHeadStageResponse,
  unmarshalListBackendStagesResponse,
  unmarshalListCacheStagesResponse,
  unmarshalListDNSStagesResponse,
  unmarshalListHeadStagesResponse,
  unmarshalListNodesResponse,
  unmarshalListPipelinesResponse,
  unmarshalListPipelinesWithStagesResponse,
  unmarshalListPlansResponse,
  unmarshalListPurgeRequestsResponse,
  unmarshalListRouteRulesResponse,
  unmarshalListRouteStagesResponse,
  unmarshalListTLSStagesResponse,
  unmarshalListVPCEndpointsResponse,
  unmarshalListWafStagesResponse,
  unmarshalPipeline,
  unmarshalPipelineStages,
  unmarshalPlan,
  unmarshalPurgeRequest,
  unmarshalRouteStage,
  marshalSelectPlanRequest,
  marshalSetHeadStageRequest,
  marshalSetPipelineVPCEndpointsRequest,
  unmarshalSetPipelineVPCEndpointsResponse,
  marshalSetRouteRulesRequest,
  unmarshalSetRouteRulesResponse,
  unmarshalTLSStage,
  marshalUpdateBackendStageRequest,
  marshalUpdateCacheStageRequest,
  marshalUpdateDNSStageRequest,
  marshalUpdatePipelineRequest,
  marshalUpdateRouteStageRequest,
  marshalUpdateTLSStageRequest,
  marshalUpdateWafStageRequest,
  unmarshalVPCEndpoint,
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
  CreateVPCEndpointRequest,
  CreateWafStageRequest,
  DNSStage,
  DeleteBackendStageRequest,
  DeleteCacheStageRequest,
  DeleteCurrentPlanRequest,
  DeleteDNSStageRequest,
  DeletePipelineRequest,
  DeleteRouteStageRequest,
  DeleteTLSStageRequest,
  DeleteVPCEndpointRequest,
  DeleteWafStageRequest,
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
  GetVPCEndpointRequest,
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
  ListNodesResponse,
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
  ListVPCEndpointsRequest,
  ListVPCEndpointsResponse,
  ListWafStagesRequest,
  ListWafStagesResponse,
  Pipeline,
  PipelineStages,
  Plan,
  PurgeRequest,
  RouteStage,
  SearchBackendStagesRequest,
  SearchRouteRulesRequest,
  SearchWafStagesRequest,
  SelectPlanRequest,
  SetHeadStageRequest,
  SetPipelineVPCEndpointsRequest,
  SetPipelineVPCEndpointsResponse,
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
  VPCEndpoint,
  WafStage,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Edge Services API.
 */
export class API extends ParentAPI {
  listNodes = (options?: RequestOptions) =>
    this.client.fetch<ListNodesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/nodes`,
        signal: options?.signal,
      },
      unmarshalListNodesResponse,
    )

  
  protected pageOfListPipelines = (request: Readonly<ListPipelinesRequest> = {}, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListPipelinesResponse,
    )
  
  /**
   * List pipelines. List all pipelines, for a Scaleway Organization or Scaleway Project. By default, the pipelines returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListPipelinesRequest}
   * @returns A Promise of ListPipelinesResponse
   */
  listPipelines = (request: Readonly<ListPipelinesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('pipelines', this.pageOfListPipelines, request, options)

  
  /**
   * Create pipeline. Create a new pipeline. You must specify a `dns_stage_id` to form a stage-chain that goes all the way to the backend stage (origin), so the HTTP request will be processed according to the stages you created.
   *
   * @param request - The request {@link CreatePipelineRequest}
   * @returns A Promise of Pipeline
   */
  createPipeline = (request: Readonly<CreatePipelineRequest>, options?: RequestOptions) =>
    this.client.fetch<Pipeline>(
      {
        body: JSON.stringify(
          marshalCreatePipelineRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines`,
        signal: options?.signal,
      },
      unmarshalPipeline,
    )

  
  /**
   * Get pipeline. Retrieve information about an existing pipeline, specified by its `pipeline_id`. Its full details, including errors, are returned in the response object.
   *
   * @param request - The request {@link GetPipelineRequest}
   * @returns A Promise of Pipeline
   */
  getPipeline = (request: Readonly<GetPipelineRequest>, options?: RequestOptions) =>
    this.client.fetch<Pipeline>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}`,
        signal: options?.signal,
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

  
  protected pageOfListPipelinesWithStages = (request: Readonly<ListPipelinesWithStagesRequest> = {}, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListPipelinesWithStagesResponse,
    )
  
  listPipelinesWithStages = (request: Readonly<ListPipelinesWithStagesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('pipelines', this.pageOfListPipelinesWithStages, request, options)

  
  /**
   * Update pipeline. Update the parameters of an existing pipeline, specified by its `pipeline_id`. Parameters which can be updated include the `name`, `description` and `dns_stage_id`.
   *
   * @param request - The request {@link UpdatePipelineRequest}
   * @returns A Promise of Pipeline
   */
  updatePipeline = (request: Readonly<UpdatePipelineRequest>, options?: RequestOptions) =>
    this.client.fetch<Pipeline>(
      {
        body: JSON.stringify(
          marshalUpdatePipelineRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}`,
        signal: options?.signal,
      },
      unmarshalPipeline,
    )

  
  /**
   * Delete pipeline. Delete an existing pipeline, specified by its `pipeline_id`. Deleting a pipeline is permanent, and cannot be undone. Note that all stages linked to the pipeline are also deleted.
   *
   * @param request - The request {@link DeletePipelineRequest}
   */
  deletePipeline = (request: Readonly<DeletePipelineRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get VPC Endpoint. Retrieve information about an existing VPC Endpoint, specified by its `vpc_endpoint_id`.
   *
   * @param request - The request {@link GetVPCEndpointRequest}
   * @returns A Promise of VPCEndpoint
   */
  getVPCEndpoint = (request: Readonly<GetVPCEndpointRequest>, options?: RequestOptions) =>
    this.client.fetch<VPCEndpoint>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/vpc-endpoints/${validatePathParam('vpcEndpointId', request.vpcEndpointId)}`,
        signal: options?.signal,
      },
      unmarshalVPCEndpoint,
    )

  
  protected pageOfListVPCEndpoints = (request: Readonly<ListVPCEndpointsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVPCEndpointsResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/vpc-endpoints`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListVPCEndpointsResponse,
    )
  
  /**
   * List VPC Endpoints. List all VPC Endpoints, for a Scaleway Organization or Scaleway Project. By default, the VPC Endpoints returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListVPCEndpointsRequest}
   * @returns A Promise of ListVPCEndpointsResponse
   */
  listVPCEndpoints = (request: Readonly<ListVPCEndpointsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('vpcEndpoints', this.pageOfListVPCEndpoints, request, options)

  
  /**
   * Create VPC Endpoint. Create a new VPC Endpoint. You must specify a `private_network_id` to define to which Private Network the VPC endpoint will be attached to.
   *
   * @param request - The request {@link CreateVPCEndpointRequest}
   * @returns A Promise of VPCEndpoint
   */
  createVPCEndpoint = (request: Readonly<CreateVPCEndpointRequest>, options?: RequestOptions) =>
    this.client.fetch<VPCEndpoint>(
      {
        body: JSON.stringify(
          marshalCreateVPCEndpointRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/vpc-endpoints`,
        signal: options?.signal,
      },
      unmarshalVPCEndpoint,
    )

  
  /**
   * Delete VPC Endpoint. Delete an existing VPC Endpoint, specified by its `vpc_endpoint_id`.
   *
   * @param request - The request {@link DeleteVPCEndpointRequest}
   */
  deleteVPCEndpoint = (request: Readonly<DeleteVPCEndpointRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/vpc-endpoints/${validatePathParam('vpcEndpointId', request.vpcEndpointId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Attach VPC Endpoints. Attach VPC Endpoint to the given Pipeline. You must specify a `pipeline_id` and `vpc_endpoint_ids` which contains the list of VPC Endpoints.
   *
   * @param request - The request {@link SetPipelineVPCEndpointsRequest}
   * @returns A Promise of SetPipelineVPCEndpointsResponse
   */
  setPipelineVPCEndpoints = (request: Readonly<SetPipelineVPCEndpointsRequest>, options?: RequestOptions) =>
    this.client.fetch<SetPipelineVPCEndpointsResponse>(
      {
        body: JSON.stringify(
          marshalSetPipelineVPCEndpointsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/vpc-endpoints`,
        signal: options?.signal,
      },
      unmarshalSetPipelineVPCEndpointsResponse,
    )

  
  protected pageOfListHeadStages = (request: Readonly<ListHeadStagesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListHeadStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/head-stages`,
        urlParams: urlParams(
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListHeadStagesResponse,
    )
  
  /**
   * List Head stage for your pipeline.. List Head stage for your pipeline.
   *
   * @param request - The request {@link ListHeadStagesRequest}
   * @returns A Promise of ListHeadStagesResponse
   */
  listHeadStages = (request: Readonly<ListHeadStagesRequest>, options?: RequestOptions) =>
    enrichForPagination('headStages', this.pageOfListHeadStages, request, options)

  
  /**
   * Configure a entry point to your pipeline. You must specify a `head stage` to form a stage-chain that goes all the way to the backend stage (origin), so the HTTP request will be processed according to the stages you created.. You must specify either a `add_new_head_stage` (to add a new head stage), `remove_head_stage` (to remove a head stage) or `swap_head_stage` (to replace a head stage).
   *
   * @param request - The request {@link SetHeadStageRequest}
   * @returns A Promise of HeadStageResponse
   */
  setHeadStage = (request: Readonly<SetHeadStageRequest>, options?: RequestOptions) =>
    this.client.fetch<HeadStageResponse>(
      {
        body: JSON.stringify(
          marshalSetHeadStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/set-head-stage`,
        signal: options?.signal,
      },
      unmarshalHeadStageResponse,
    )

  
  protected pageOfListDNSStages = (request: Readonly<ListDNSStagesRequest>, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListDNSStagesResponse,
    )
  
  /**
   * List DNS stages. List all DNS stages, for a Scaleway Organization or Scaleway Project. By default, the DNS stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListDNSStagesRequest}
   * @returns A Promise of ListDNSStagesResponse
   */
  listDNSStages = (request: Readonly<ListDNSStagesRequest>, options?: RequestOptions) =>
    enrichForPagination('stages', this.pageOfListDNSStages, request, options)

  
  /**
   * Create DNS stage. Create a new DNS stage. You must specify the `fqdns` field to customize the domain endpoint, using a domain you already own.
   *
   * @param request - The request {@link CreateDNSStageRequest}
   * @returns A Promise of DNSStage
   */
  createDNSStage = (request: Readonly<CreateDNSStageRequest>, options?: RequestOptions) =>
    this.client.fetch<DNSStage>(
      {
        body: JSON.stringify(
          marshalCreateDNSStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/dns-stages`,
        signal: options?.signal,
      },
      unmarshalDNSStage,
    )

  
  /**
   * Get DNS stage. Retrieve information about an existing DNS stage, specified by its `dns_stage_id`. Its full details, including FQDNs, are returned in the response object.
   *
   * @param request - The request {@link GetDNSStageRequest}
   * @returns A Promise of DNSStage
   */
  getDNSStage = (request: Readonly<GetDNSStageRequest>, options?: RequestOptions) =>
    this.client.fetch<DNSStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/dns-stages/${validatePathParam('dnsStageId', request.dnsStageId)}`,
        signal: options?.signal,
      },
      unmarshalDNSStage,
    )

  
  /**
   * Update DNS stage. Update the parameters of an existing DNS stage, specified by its `dns_stage_id`.
   *
   * @param request - The request {@link UpdateDNSStageRequest}
   * @returns A Promise of DNSStage
   */
  updateDNSStage = (request: Readonly<UpdateDNSStageRequest>, options?: RequestOptions) =>
    this.client.fetch<DNSStage>(
      {
        body: JSON.stringify(
          marshalUpdateDNSStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/dns-stages/${validatePathParam('dnsStageId', request.dnsStageId)}`,
        signal: options?.signal,
      },
      unmarshalDNSStage,
    )

  
  /**
   * Delete DNS stage. Delete an existing DNS stage, specified by its `dns_stage_id`. Deleting a DNS stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteDNSStageRequest}
   */
  deleteDNSStage = (request: Readonly<DeleteDNSStageRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/dns-stages/${validatePathParam('dnsStageId', request.dnsStageId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListTLSStages = (request: Readonly<ListTLSStagesRequest>, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListTLSStagesResponse,
    )
  
  /**
   * List TLS stages. List all TLS stages, for a Scaleway Organization or Scaleway Project. By default, the TLS stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListTLSStagesRequest}
   * @returns A Promise of ListTLSStagesResponse
   */
  listTLSStages = (request: Readonly<ListTLSStagesRequest>, options?: RequestOptions) =>
    enrichForPagination('stages', this.pageOfListTLSStages, request, options)

  
  /**
   * Create TLS stage. Create a new TLS stage. You must specify either the `secrets` or `managed_certificate` fields to customize the SSL/TLS certificate of your endpoint. Choose `secrets` if you are using a pre-existing certificate held in Scaleway Secret Manager, or `managed_certificate` to let Scaleway generate and manage a Let's Encrypt certificate for your customized endpoint.
   *
   * @param request - The request {@link CreateTLSStageRequest}
   * @returns A Promise of TLSStage
   */
  createTLSStage = (request: Readonly<CreateTLSStageRequest>, options?: RequestOptions) =>
    this.client.fetch<TLSStage>(
      {
        body: JSON.stringify(
          marshalCreateTLSStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/tls-stages`,
        signal: options?.signal,
      },
      unmarshalTLSStage,
    )

  
  /**
   * Get TLS stage. Retrieve information about an existing TLS stage, specified by its `tls_stage_id`. Its full details, including secrets and certificate expiration date are returned in the response object.
   *
   * @param request - The request {@link GetTLSStageRequest}
   * @returns A Promise of TLSStage
   */
  getTLSStage = (request: Readonly<GetTLSStageRequest>, options?: RequestOptions) =>
    this.client.fetch<TLSStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/tls-stages/${validatePathParam('tlsStageId', request.tlsStageId)}`,
        signal: options?.signal,
      },
      unmarshalTLSStage,
    )

  
  /**
   * Update TLS stage. Update the parameters of an existing TLS stage, specified by its `tls_stage_id`. Both `tls_secrets_config` and `managed_certificate` parameters can be updated.
   *
   * @param request - The request {@link UpdateTLSStageRequest}
   * @returns A Promise of TLSStage
   */
  updateTLSStage = (request: Readonly<UpdateTLSStageRequest>, options?: RequestOptions) =>
    this.client.fetch<TLSStage>(
      {
        body: JSON.stringify(
          marshalUpdateTLSStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/tls-stages/${validatePathParam('tlsStageId', request.tlsStageId)}`,
        signal: options?.signal,
      },
      unmarshalTLSStage,
    )

  
  /**
   * Delete TLS stage. Delete an existing TLS stage, specified by its `tls_stage_id`. Deleting a TLS stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteTLSStageRequest}
   */
  deleteTLSStage = (request: Readonly<DeleteTLSStageRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/tls-stages/${validatePathParam('tlsStageId', request.tlsStageId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListCacheStages = (request: Readonly<ListCacheStagesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListCacheStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/cache-stages`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListCacheStagesResponse,
    )
  
  /**
   * List cache stages. List all cache stages, for a Scaleway Organization or Scaleway Project. By default, the cache stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListCacheStagesRequest}
   * @returns A Promise of ListCacheStagesResponse
   */
  listCacheStages = (request: Readonly<ListCacheStagesRequest>, options?: RequestOptions) =>
    enrichForPagination('stages', this.pageOfListCacheStages, request, options)

  
  /**
   * Create cache stage. Create a new cache stage. You must specify the `fallback_ttl` field to customize the TTL of the cache.
   *
   * @param request - The request {@link CreateCacheStageRequest}
   * @returns A Promise of CacheStage
   */
  createCacheStage = (request: Readonly<CreateCacheStageRequest>, options?: RequestOptions) =>
    this.client.fetch<CacheStage>(
      {
        body: JSON.stringify(
          marshalCreateCacheStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/cache-stages`,
        signal: options?.signal,
      },
      unmarshalCacheStage,
    )

  
  /**
   * Get cache stage. Retrieve information about an existing cache stage, specified by its `cache_stage_id`. Its full details, including Time To Live (TTL), are returned in the response object.
   *
   * @param request - The request {@link GetCacheStageRequest}
   * @returns A Promise of CacheStage
   */
  getCacheStage = (request: Readonly<GetCacheStageRequest>, options?: RequestOptions) =>
    this.client.fetch<CacheStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/cache-stages/${validatePathParam('cacheStageId', request.cacheStageId)}`,
        signal: options?.signal,
      },
      unmarshalCacheStage,
    )

  
  /**
   * Update cache stage. Update the parameters of an existing cache stage, specified by its `cache_stage_id`. Parameters which can be updated include the `fallback_ttl`, `include_cookies` and `backend_stage_id`.
   *
   * @param request - The request {@link UpdateCacheStageRequest}
   * @returns A Promise of CacheStage
   */
  updateCacheStage = (request: Readonly<UpdateCacheStageRequest>, options?: RequestOptions) =>
    this.client.fetch<CacheStage>(
      {
        body: JSON.stringify(
          marshalUpdateCacheStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/cache-stages/${validatePathParam('cacheStageId', request.cacheStageId)}`,
        signal: options?.signal,
      },
      unmarshalCacheStage,
    )

  
  /**
   * Delete cache stage. Delete an existing cache stage, specified by its `cache_stage_id`. Deleting a cache stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteCacheStageRequest}
   */
  deleteCacheStage = (request: Readonly<DeleteCacheStageRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/cache-stages/${validatePathParam('cacheStageId', request.cacheStageId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListBackendStages = (request: Readonly<ListBackendStagesRequest>, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListBackendStagesResponse,
    )
  
  /**
   * List backend stages. List all backend stages, for a Scaleway Organization or Scaleway Project. By default, the backend stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListBackendStagesRequest}
   * @returns A Promise of ListBackendStagesResponse
   */
  listBackendStages = (request: Readonly<ListBackendStagesRequest>, options?: RequestOptions) =>
    enrichForPagination('stages', this.pageOfListBackendStages, request, options)

  
  /**
   * Create backend stage. Create a new backend stage. You must specify a type of backend (`scaleway_s3`, `scaleway_lb`, etc.) to configure the origin.
   *
   * @param request - The request {@link CreateBackendStageRequest}
   * @returns A Promise of BackendStage
   */
  createBackendStage = (request: Readonly<CreateBackendStageRequest>, options?: RequestOptions) =>
    this.client.fetch<BackendStage>(
      {
        body: JSON.stringify(
          marshalCreateBackendStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/backend-stages`,
        signal: options?.signal,
      },
      unmarshalBackendStage,
    )

  
  /**
   * Get backend stage. Retrieve information about an existing backend stage, specified by its `backend_stage_id`. Its full details are returned in the response object.
   *
   * @param request - The request {@link GetBackendStageRequest}
   * @returns A Promise of BackendStage
   */
  getBackendStage = (request: Readonly<GetBackendStageRequest>, options?: RequestOptions) =>
    this.client.fetch<BackendStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/backend-stages/${validatePathParam('backendStageId', request.backendStageId)}`,
        signal: options?.signal,
      },
      unmarshalBackendStage,
    )

  
  /**
   * Update backend stage. Update the parameters of an existing backend stage, specified by its `backend_stage_id`.
   *
   * @param request - The request {@link UpdateBackendStageRequest}
   * @returns A Promise of BackendStage
   */
  updateBackendStage = (request: Readonly<UpdateBackendStageRequest>, options?: RequestOptions) =>
    this.client.fetch<BackendStage>(
      {
        body: JSON.stringify(
          marshalUpdateBackendStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/backend-stages/${validatePathParam('backendStageId', request.backendStageId)}`,
        signal: options?.signal,
      },
      unmarshalBackendStage,
    )

  
  /**
   * Delete backend stage. Delete an existing backend stage, specified by its `backend_stage_id`. Deleting a backend stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteBackendStageRequest}
   */
  deleteBackendStage = (request: Readonly<DeleteBackendStageRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/backend-stages/${validatePathParam('backendStageId', request.backendStageId)}`,
        signal: options?.signal,
      },
    )

  
  searchBackendStages = (request: Readonly<SearchBackendStagesRequest> = {}, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListBackendStagesResponse,
    )

  
  protected pageOfListWafStages = (request: Readonly<ListWafStagesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListWafStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/waf-stages`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListWafStagesResponse,
    )
  
  /**
   * List WAF stages. List all WAF stages, for a Scaleway Organization or Scaleway Project. By default, the WAF stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListWafStagesRequest}
   * @returns A Promise of ListWafStagesResponse
   */
  listWafStages = (request: Readonly<ListWafStagesRequest>, options?: RequestOptions) =>
    enrichForPagination('stages', this.pageOfListWafStages, request, options)

  
  /**
   * Create WAF stage. Create a new WAF stage. You must specify the `mode` and `paranoia_level` fields to customize the WAF.
   *
   * @param request - The request {@link CreateWafStageRequest}
   * @returns A Promise of WafStage
   */
  createWafStage = (request: Readonly<CreateWafStageRequest>, options?: RequestOptions) =>
    this.client.fetch<WafStage>(
      {
        body: JSON.stringify(
          marshalCreateWafStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/waf-stages`,
        signal: options?.signal,
      },
      unmarshalWafStage,
    )

  
  /**
   * Get WAF stage. Retrieve information about an existing WAF stage, specified by its `waf_stage_id`. Its full details are returned in the response object.
   *
   * @param request - The request {@link GetWafStageRequest}
   * @returns A Promise of WafStage
   */
  getWafStage = (request: Readonly<GetWafStageRequest>, options?: RequestOptions) =>
    this.client.fetch<WafStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/waf-stages/${validatePathParam('wafStageId', request.wafStageId)}`,
        signal: options?.signal,
      },
      unmarshalWafStage,
    )

  
  /**
   * Update WAF stage. Update the parameters of an existing WAF stage, specified by its `waf_stage_id`. Both `mode` and `paranoia_level` parameters can be updated.
   *
   * @param request - The request {@link UpdateWafStageRequest}
   * @returns A Promise of WafStage
   */
  updateWafStage = (request: Readonly<UpdateWafStageRequest>, options?: RequestOptions) =>
    this.client.fetch<WafStage>(
      {
        body: JSON.stringify(
          marshalUpdateWafStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/waf-stages/${validatePathParam('wafStageId', request.wafStageId)}`,
        signal: options?.signal,
      },
      unmarshalWafStage,
    )

  
  /**
   * Delete WAF stage. Delete an existing WAF stage, specified by its `waf_stage_id`. Deleting a WAF stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteWafStageRequest}
   */
  deleteWafStage = (request: Readonly<DeleteWafStageRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/waf-stages/${validatePathParam('wafStageId', request.wafStageId)}`,
        signal: options?.signal,
      },
    )

  
  searchWafStages = (request: Readonly<SearchWafStagesRequest> = {}, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListWafStagesResponse,
    )

  
  protected pageOfListRouteStages = (request: Readonly<ListRouteStagesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListRouteStagesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/route-stages`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListRouteStagesResponse,
    )
  
  /**
   * List route stages. List all route stages, for a given pipeline. By default, the route stages returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListRouteStagesRequest}
   * @returns A Promise of ListRouteStagesResponse
   */
  listRouteStages = (request: Readonly<ListRouteStagesRequest>, options?: RequestOptions) =>
    enrichForPagination('stages', this.pageOfListRouteStages, request, options)

  
  /**
   * Create route stage. Create a new route stage. You must specify the `waf_stage_id` or `backend_stage_id` fields to customize the route.
   *
   * @param request - The request {@link CreateRouteStageRequest}
   * @returns A Promise of RouteStage
   */
  createRouteStage = (request: Readonly<CreateRouteStageRequest>, options?: RequestOptions) =>
    this.client.fetch<RouteStage>(
      {
        body: JSON.stringify(
          marshalCreateRouteStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/pipelines/${validatePathParam('pipelineId', request.pipelineId)}/route-stages`,
        signal: options?.signal,
      },
      unmarshalRouteStage,
    )

  
  /**
   * Get route stage. Retrieve information about an existing route stage, specified by its `route_stage_id`. The summary of the route stage (without route rules) is returned in the response object.
   *
   * @param request - The request {@link GetRouteStageRequest}
   * @returns A Promise of RouteStage
   */
  getRouteStage = (request: Readonly<GetRouteStageRequest>, options?: RequestOptions) =>
    this.client.fetch<RouteStage>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}`,
        signal: options?.signal,
      },
      unmarshalRouteStage,
    )

  
  /**
   * Update route stage. Update the parameters of an existing route stage, specified by its `route_stage_id`.
   *
   * @param request - The request {@link UpdateRouteStageRequest}
   * @returns A Promise of RouteStage
   */
  updateRouteStage = (request: Readonly<UpdateRouteStageRequest>, options?: RequestOptions) =>
    this.client.fetch<RouteStage>(
      {
        body: JSON.stringify(
          marshalUpdateRouteStageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}`,
        signal: options?.signal,
      },
      unmarshalRouteStage,
    )

  
  /**
   * Delete route stage. Delete an existing route stage, specified by its `route_stage_id`. Deleting a route stage is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteRouteStageRequest}
   */
  deleteRouteStage = (request: Readonly<DeleteRouteStageRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * List route rules. List all route rules of an existing route stage, specified by its `route_stage_id`.
   *
   * @param request - The request {@link ListRouteRulesRequest}
   * @returns A Promise of ListRouteRulesResponse
   */
  listRouteRules = (request: Readonly<ListRouteRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListRouteRulesResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}/route-rules`,
        signal: options?.signal,
      },
      unmarshalListRouteRulesResponse,
    )

  
  /**
   * Set route rules. Set the rules of an existing route stage, specified by its `route_stage_id`.
   *
   * @param request - The request {@link SetRouteRulesRequest}
   * @returns A Promise of SetRouteRulesResponse
   */
  setRouteRules = (request: Readonly<SetRouteRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<SetRouteRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetRouteRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}/route-rules`,
        signal: options?.signal,
      },
      unmarshalSetRouteRulesResponse,
    )

  
  /**
   * Add route rules. Add route rules to an existing route stage, specified by its `route_stage_id`.
   *
   * @param request - The request {@link AddRouteRulesRequest}
   * @returns A Promise of AddRouteRulesResponse
   */
  addRouteRules = (request: Readonly<AddRouteRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<AddRouteRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddRouteRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/route-stages/${validatePathParam('routeStageId', request.routeStageId)}/route-rules`,
        signal: options?.signal,
      },
      unmarshalAddRouteRulesResponse,
    )

  
  /**
   * Search route rules. List all route rules of an organization or project.
   *
   * @param request - The request {@link SearchRouteRulesRequest}
   * @returns A Promise of ListRouteRulesResponse
   */
  searchRouteRules = (request: Readonly<SearchRouteRulesRequest> = {}, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListRouteRulesResponse,
    )

  
  checkDomain = (request: Readonly<CheckDomainRequest>, options?: RequestOptions) =>
    this.client.fetch<CheckDomainResponse>(
      {
        body: JSON.stringify(
          marshalCheckDomainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/check-domain`,
        signal: options?.signal,
      },
      unmarshalCheckDomainResponse,
    )

  
  checkPEMChain = (request: Readonly<CheckPEMChainRequest>, options?: RequestOptions) =>
    this.client.fetch<CheckPEMChainResponse>(
      {
        body: JSON.stringify(
          marshalCheckPEMChainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/check-pem-chain`,
        signal: options?.signal,
      },
      unmarshalCheckPEMChainResponse,
    )

  
  protected pageOfListPurgeRequests = (request: Readonly<ListPurgeRequestsRequest> = {}, options?: RequestOptions) =>
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
        signal: options?.signal,
      },
      unmarshalListPurgeRequestsResponse,
    )
  
  /**
   * List purge requests. List all purge requests, for a Scaleway Organization or Scaleway Project. This enables you to retrieve a history of all previously-made purge requests. By default, the purge requests returned in the list are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListPurgeRequestsRequest}
   * @returns A Promise of ListPurgeRequestsResponse
   */
  listPurgeRequests = (request: Readonly<ListPurgeRequestsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('purgeRequests', this.pageOfListPurgeRequests, request, options)

  
  /**
   * Create purge request. Create a new purge request. You must specify either the `all` field (to purge all content) or a list of `assets` (to define the precise assets to purge).
   *
   * @param request - The request {@link CreatePurgeRequestRequest}
   * @returns A Promise of PurgeRequest
   */
  createPurgeRequest = (request: Readonly<CreatePurgeRequestRequest>, options?: RequestOptions) =>
    this.client.fetch<PurgeRequest>(
      {
        body: JSON.stringify(
          marshalCreatePurgeRequestRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/purge-requests`,
        signal: options?.signal,
      },
      unmarshalPurgeRequest,
    )

  
  /**
   * Get purge request. Retrieve information about a purge request, specified by its `purge_request_id`. Its full details, including `status` and `target`, are returned in the response object.
   *
   * @param request - The request {@link GetPurgeRequestRequest}
   * @returns A Promise of PurgeRequest
   */
  getPurgeRequest = (request: Readonly<GetPurgeRequestRequest>, options?: RequestOptions) =>
    this.client.fetch<PurgeRequest>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/purge-requests/${validatePathParam('purgeRequestId', request.purgeRequestId)}`,
        signal: options?.signal,
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

  
  checkLbOrigin = (request: Readonly<CheckLbOriginRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<CheckLbOriginResponse>(
      {
        body: JSON.stringify(
          marshalCheckLbOriginRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/edge-services/v1beta1/check-lb-origin`,
        signal: options?.signal,
      },
      unmarshalCheckLbOriginResponse,
    )

  
  /**
   * List plans. List all available Edge Services subscription plans.
   *
   * @returns A Promise of ListPlansResponse
   */
  listPlans = (options?: RequestOptions) =>
    this.client.fetch<ListPlansResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/plans`,
        signal: options?.signal,
      },
      unmarshalListPlansResponse,
    )

  
  /**
   * Select plan. Subscribe to the Edge Services subscription plan of your choice, for the given Scaleway Project.
   *
   * @param request - The request {@link SelectPlanRequest}
   * @returns A Promise of Plan
   */
  selectPlan = (request: Readonly<SelectPlanRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Plan>(
      {
        body: JSON.stringify(
          marshalSelectPlanRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/edge-services/v1beta1/current-plan`,
        signal: options?.signal,
      },
      unmarshalPlan,
    )

  
  /**
   * Get plan. Get the current Edge Services subscription plan for your Scaleway Project.
   *
   * @param request - The request {@link GetCurrentPlanRequest}
   * @returns A Promise of Plan
   */
  getCurrentPlan = (request: Readonly<GetCurrentPlanRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Plan>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/current-plan/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
        signal: options?.signal,
      },
      unmarshalPlan,
    )

  
  /**
   * Delete plan. Unsubscribe from the current Edge Services subscription plan for your Scaleway Project.
   *
   * @param request - The request {@link DeleteCurrentPlanRequest}
   */
  deleteCurrentPlan = (request: Readonly<DeleteCurrentPlanRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/edge-services/v1beta1/current-plan/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Billing information. Gives information on the currently selected Edge Services subscription plan, resource usage and associated billing information for this calendar month (including whether consumption falls within or exceeds the currently selected subscription plan.).
   *
   * @param request - The request {@link GetBillingRequest}
   * @returns A Promise of GetBillingResponse
   */
  getBilling = (request: Readonly<GetBillingRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<GetBillingResponse>(
      {
        method: 'GET',
        path: `/edge-services/v1beta1/billing/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}`,
        signal: options?.signal,
      },
      unmarshalGetBillingResponse,
    )

  
}

