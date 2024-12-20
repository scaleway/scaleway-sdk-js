// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Region, Zone } from '../../../bridge'

export type DNSStageType = 'unknown_type' | 'auto' | 'managed' | 'custom'

export type LbOriginError =
  | 'unknown'
  | 'timeout'
  | 'connection_refused'
  | 'tls_error'

export type ListBackendStagesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListCacheStagesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListDNSStagesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListPipelinesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListPipelinesWithStagesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListPurgeRequestsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListTLSStagesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type PipelineErrorCode =
  | 'unknown_code'
  | 'dns_invalid_format'
  | 'dns_invalid_tld'
  | 'dns_forbidden_root_domain'
  | 'dns_forbidden_scw_cloud'
  | 'dns_domain_dont_exist'
  | 'dns_cname_dont_exist'
  | 'dns_cname_resolve'
  | 'dns_fqdn_already_exists'
  | 'dns_fqdn_already_in_use'
  | 'tls_cert_deleted'
  | 'tls_cert_disabled'
  | 'tls_cert_expired'
  | 'tls_cert_invalid_format'
  | 'tls_cert_missing'
  | 'tls_chain_order'
  | 'tls_key_invalid_format'
  | 'tls_key_missing'
  | 'tls_key_too_many'
  | 'tls_managed_domain_rate_limit'
  | 'tls_managed_internal'
  | 'tls_pair_mismatch'
  | 'tls_root_inconsistent'
  | 'tls_root_incorrect'
  | 'tls_root_missing'
  | 'tls_san_mismatch'
  | 'tls_self_signed'

export type PipelineErrorSeverity = 'unknown_severity' | 'warning' | 'critical'

export type PipelineErrorStage =
  | 'unknown_stage'
  | 'dns'
  | 'tls'
  | 'cache'
  | 'backend'

export type PipelineErrorType = 'unknown_type' | 'runtime' | 'config'

export type PipelineStatus =
  | 'unknown_status'
  | 'ready'
  | 'error'
  | 'pending'
  | 'warning'

export type PlanName = 'unknown_name' | 'starter' | 'professional' | 'advanced'

export type PurgeRequestStatus = 'unknown_status' | 'done' | 'error' | 'pending'

export interface ScalewayLb {
  /** ID of the Load Balancer. */
  id: string
  /** Zone of the Load Balancer. */
  zone: Zone
  /** ID of the frontend linked to the Load Balancer. */
  frontendId: string
  /** Defines whether the Load Balancer's frontend handles SSL connections. */
  isSsl?: boolean
  /**
   * Fully Qualified Domain Name (in the format subdomain.example.com) to use in
   * HTTP requests sent towards your Load Balancer.
   */
  domainName?: string
}

export interface ScalewayLbBackendConfig {
  /** Load Balancer information. */
  lbs: ScalewayLb[]
}

export interface ScalewayS3BackendConfig {
  /** Name of the Bucket. */
  bucketName?: string
  /** Region of the Bucket. */
  bucketRegion?: string
  /** Defines whether the bucket website feature is enabled. */
  isWebsite?: boolean
}

export interface PipelineError {
  stage: PipelineErrorStage
  code: PipelineErrorCode
  severity: PipelineErrorSeverity
  message: string
  type: PipelineErrorType
}

export interface TLSSecret {
  /** ID of the Secret. */
  secretId: string
  /** Region of the Secret. */
  region: Region
}

export interface BackendStage {
  /** ID of the backend stage. */
  id: string
  /** Pipeline ID the backend stage belongs to. */
  pipelineId?: string
  /** Project ID of the backend stage. */
  projectId: string
  /** Date the backend stage was created. */
  createdAt?: Date
  /** Date the backend stage was last updated. */
  updatedAt?: Date
  /**
   * Scaleway Object Storage origin bucket (S3) linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb' could
   * be set.
   */
  scalewayS3?: ScalewayS3BackendConfig
  /**
   * Scaleway Load Balancer origin linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb' could
   * be set.
   */
  scalewayLb?: ScalewayLbBackendConfig
}

export interface CacheStage {
  /** ID of the cache stage. */
  id: string
  /** Pipeline ID the cache stage belongs to. */
  pipelineId?: string
  /** Project ID of the cache stage. */
  projectId: string
  /** Time To Live (TTL) in seconds. Defines how long content is cached. */
  fallbackTtl?: string
  /** Date the cache stage was created. */
  createdAt?: Date
  /** Date the cache stage was last updated. */
  updatedAt?: Date
  /**
   * Backend stage ID the cache stage is linked to.
   *
   * One-of ('next'): at most one of 'backendStageId' could be set.
   */
  backendStageId?: string
}

export interface DNSStage {
  /** ID of the DNS stage. */
  id: string
  /** List of Fully Qualified Domain Names attached to the stage. */
  fqdns: string[]
  /** Type of the stage. */
  type: DNSStageType
  /** Pipeline ID the DNS stage belongs to. */
  pipelineId?: string
  /** Project ID of the DNS stage. */
  projectId: string
  /** Date the DNS stage was created. */
  createdAt?: Date
  /** Date the DNS stage was last updated. */
  updatedAt?: Date
  /**
   * TLS stage ID the DNS stage is linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  tlsStageId?: string
  /**
   * Cache stage ID the DNS stage is linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the DNS stage is linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  backendStageId?: string
}

export interface Pipeline {
  /** ID of the pipeline. */
  id: string
  /** Name of the pipeline. */
  name: string
  /** Description of the pipeline. */
  description: string
  /** Status of the pipeline. */
  status: PipelineStatus
  /** Errors of the pipeline. */
  errors: PipelineError[]
  /** Project ID of the pipeline. */
  projectId: string
  /** Organization ID of the pipeline. */
  organizationId: string
  /** Date the pipeline was created. */
  createdAt?: Date
  /** Date the pipeline was last updated. */
  updatedAt?: Date
  /**
   * DNS stage ID the pipeline is attached to.
   *
   * One-of ('head'): at most one of 'dnsStageId' could be set.
   */
  dnsStageId?: string
}

export interface TLSStage {
  /** ID of the TLS stage. */
  id: string
  /** Secret (from Scaleway Secret Manager) containing your custom certificate. */
  secrets: TLSSecret[]
  /**
   * True when Scaleway generates and manages a Let's Encrypt certificate for
   * the TLS stage/custom endpoint.
   */
  managedCertificate: boolean
  /** Pipeline ID the TLS stage belongs to. */
  pipelineId?: string
  /** Project ID of the TLS stage. */
  projectId: string
  /** Expiration date of the certificate. */
  certificateExpiresAt?: Date
  /** Date the TLS stage was created. */
  createdAt?: Date
  /** Date the TLS stage was last updated. */
  updatedAt?: Date
  /**
   * Cache stage ID the TLS stage is linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId' could be
   * set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the TLS stage is linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId' could be
   * set.
   */
  backendStageId?: string
}

export interface CheckPEMChainRequestSecretChain {
  secretId: string
  secretRegion: string
}

export interface PlanDetails {
  /** Subscription plan name. */
  planName: PlanName
  /** Amount of egress data from cache included in subscription plan. */
  packageGb: number
  /** Number of pipelines included in subscription plan. */
  pipelineLimit: number
}

export interface PipelineStages {
  pipeline?: Pipeline
  dnsStages: DNSStage[]
  tlsStages: TLSStage[]
  cacheStages: CacheStage[]
  backendStages: BackendStage[]
}

export interface PurgeRequest {
  /** ID of the purge request. */
  id: string
  /** Pipeline ID the purge request belongs to. */
  pipelineId: string
  /** Status of the purge request. */
  status: PurgeRequestStatus
  /**
   * List of asserts to purge.
   *
   * One-of ('target'): at most one of 'assets', 'all' could be set.
   */
  assets?: string[]
  /**
   * Defines whether to purge all content.
   *
   * One-of ('target'): at most one of 'assets', 'all' could be set.
   */
  all?: boolean
  /** Date the purge request was created. */
  createdAt?: Date
  /** Date the purge request was last updated. */
  updatedAt?: Date
}

export interface TLSSecretsConfig {
  /** Secret information (from Secret Manager). */
  tlsSecrets: TLSSecret[]
}

export type CheckDomainRequest = {
  projectId?: string
  fqdn: string
  cname: string
}

export interface CheckDomainResponse {
  isValid: boolean
}

export type CheckLbOriginRequest = {
  lb?: ScalewayLb
}

export interface CheckLbOriginResponse {
  isValid: boolean
  errorType: LbOriginError
}

export type CheckPEMChainRequest = {
  projectId?: string
  fqdn: string
  /** One-of ('chain'): at most one of 'secret', 'raw' could be set. */
  secret?: CheckPEMChainRequestSecretChain
  /** One-of ('chain'): at most one of 'secret', 'raw' could be set. */
  raw?: string
}

export interface CheckPEMChainResponse {
  isValid: boolean
}

export type CreateBackendStageRequest = {
  /** Project ID in which the backend stage will be created. */
  projectId?: string
  /**
   * Scaleway Object Storage origin bucket (S3) linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb' could
   * be set.
   */
  scalewayS3?: ScalewayS3BackendConfig
  /**
   * Scaleway Load Balancer origin linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb' could
   * be set.
   */
  scalewayLb?: ScalewayLbBackendConfig
}

export type CreateCacheStageRequest = {
  /** Project ID in which the cache stage will be created. */
  projectId?: string
  /** Time To Live (TTL) in seconds. Defines how long content is cached. */
  fallbackTtl?: string
  /**
   * Backend stage ID the cache stage will be linked to.
   *
   * One-of ('next'): at most one of 'backendStageId' could be set.
   */
  backendStageId?: string
}

export type CreateDNSStageRequest = {
  /** Project ID in which the DNS stage will be created. */
  projectId?: string
  /**
   * Fully Qualified Domain Name (in the format subdomain.example.com) to attach
   * to the stage.
   */
  fqdns?: string[]
  /**
   * TLS stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  tlsStageId?: string
  /**
   * Cache stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  backendStageId?: string
}

export type CreatePipelineRequest = {
  /** Project ID in which the pipeline will be created. */
  projectId?: string
  /** Name of the pipeline. */
  name: string
  /** Description of the pipeline. */
  description: string
  /**
   * DNS stage ID the pipeline will be attached to.
   *
   * One-of ('head'): at most one of 'dnsStageId' could be set.
   */
  dnsStageId?: string
}

export type CreatePurgeRequestRequest = {
  /** Pipeline ID in which the purge request will be created. */
  pipelineId: string
  /**
   * List of asserts to purge.
   *
   * One-of ('target'): at most one of 'assets', 'all' could be set.
   */
  assets?: string[]
  /**
   * Defines whether to purge all content.
   *
   * One-of ('target'): at most one of 'assets', 'all' could be set.
   */
  all?: boolean
}

export type CreateTLSStageRequest = {
  /** Project ID in which the TLS stage will be created. */
  projectId?: string
  /** Secret (from Scaleway Secret Manager) containing your custom certificate. */
  secrets?: TLSSecret[]
  /**
   * True when Scaleway generates and manages a Let's Encrypt certificate for
   * the TLS stage/custom endpoint.
   */
  managedCertificate?: boolean
  /**
   * Cache stage ID the TLS stage will be linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId' could be
   * set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the TLS stage will be linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId' could be
   * set.
   */
  backendStageId?: string
}

export type DeleteBackendStageRequest = {
  /** ID of the backend stage to delete. */
  backendStageId: string
}

export type DeleteCacheStageRequest = {
  /** ID of the cache stage to delete. */
  cacheStageId: string
}

export type DeleteCurrentPlanRequest = {
  projectId?: string
}

export type DeleteDNSStageRequest = {
  /** ID of the DNS stage to delete. */
  dnsStageId: string
}

export type DeletePipelineRequest = {
  /** ID of the pipeline to delete. */
  pipelineId: string
}

export type DeleteTLSStageRequest = {
  /** ID of the TLS stage to delete. */
  tlsStageId: string
}

export type GetBackendStageRequest = {
  /** ID of the requested backend stage. */
  backendStageId: string
}

export type GetBillingRequest = {
  projectId?: string
}

export interface GetBillingResponse {
  /**
   * Information on the currently-selected, active Edge Services subscription
   * plan.
   */
  currentPlan?: PlanDetails
  /**
   * Cost to date (this month) for Edge Service subscription plans. This
   * comprises the pro-rata cost of the current subscription plan, and any
   * previous subscription plans that were active earlier in the month.
   */
  planCost?: Money
  /** Total number of pipelines currently configured. */
  pipelineNumber: number
  /**
   * Cost to date (this month) of pipelines not included in the subscription
   * plans.
   */
  extraPipelinesCost?: Money
  /**
   * Total amount of data egressed from the cache in gigabytes from the
   * beginning of the month, for the active subscription plan.
   */
  currentPlanCacheUsage: number
  /**
   * Total amount of extra data egressed from cache in gigabytes from the
   * beginning of the month, not included in the subscription plans.
   */
  extraCacheUsage: number
  /**
   * Cost to date (this month) of the data egressed from the cache that is not
   * included in the subscription plans.
   */
  extraCacheCost?: Money
  /**
   * Total cost to date (this month) of all Edge Services resources including
   * active subscription plan, previously active plans, extra pipelines and
   * extra egress cache data.
   */
  totalCost?: Money
}

export type GetCacheStageRequest = {
  /** ID of the requested cache stage. */
  cacheStageId: string
}

export type GetCurrentPlanRequest = {
  projectId?: string
}

export type GetDNSStageRequest = {
  /** ID of the requested DNS stage. */
  dnsStageId: string
}

export type GetPipelineRequest = {
  /** ID of the requested pipeline. */
  pipelineId: string
}

export type GetPurgeRequestRequest = {
  /** ID of the requested purge request. */
  purgeRequestId: string
}

export type GetTLSStageRequest = {
  /** ID of the requested TLS stage. */
  tlsStageId: string
}

export type ListBackendStagesRequest = {
  /** Sort order of backend stages in the response. */
  orderBy?: ListBackendStagesRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of backend stages to return per page. */
  pageSize?: number
  /**
   * Pipeline ID to filter for, only backend stages from this pipeline will be
   * returned.
   */
  pipelineId?: string
  /**
   * Project ID to filter for, only backend stages from this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Bucket name to filter for, only backend stages from this Bucket will be
   * returned.
   */
  bucketName?: string
  /**
   * Bucket region to filter for, only backend stages with buckets in this
   * region will be returned.
   */
  bucketRegion?: string
  /**
   * Load Balancer ID to filter for, only backend stages with this Load Balancer
   * will be returned.
   */
  lbId?: string
}

export interface ListBackendStagesResponse {
  /** Paginated list of backend stages. */
  stages: BackendStage[]
  /** Count of all backend stages matching the requested criteria. */
  totalCount: number
}

export type ListCacheStagesRequest = {
  /** Sort order of cache stages in the response. */
  orderBy?: ListCacheStagesRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of cache stages to return per page. */
  pageSize?: number
  /**
   * Pipeline ID to filter for, only cache stages from this pipeline will be
   * returned.
   */
  pipelineId?: string
  /**
   * Project ID to filter for, only cache stages from this Project will be
   * returned.
   */
  projectId?: string
}

export interface ListCacheStagesResponse {
  /** Paginated list of cache stages. */
  stages: CacheStage[]
  /** Count of all cache stages matching the requested criteria. */
  totalCount: number
}

export type ListDNSStagesRequest = {
  /** Sort order of DNS stages in the response. */
  orderBy?: ListDNSStagesRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of DNS stages to return per page. */
  pageSize?: number
  /**
   * Pipeline ID to filter for, only DNS stages from this pipeline will be
   * returned.
   */
  pipelineId?: string
  /**
   * Project ID to filter for, only DNS stages from this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Fully Qualified Domain Name to filter for (in the format
   * subdomain.example.com), only DNS stages with this FQDN will be returned.
   */
  fqdn?: string
}

export interface ListDNSStagesResponse {
  /** Paginated list of DNS stages. */
  stages: DNSStage[]
  /** Count of all DNS stages matching the requested criteria. */
  totalCount: number
}

export type ListPipelinesRequest = {
  /** Sort order of pipelines in the response. */
  orderBy?: ListPipelinesRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of pipelines to return per page. */
  pageSize?: number
  /**
   * Pipeline name to filter for, only pipelines with this string within their
   * name will be returned.
   */
  name?: string
  /**
   * Organization ID to filter for, only pipelines from this Organization will
   * be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for, only pipelines from this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Filter on backend stage, only pipelines with a Load Balancer origin will be
   * returned.
   */
  hasBackendStageLb?: boolean
}

export interface ListPipelinesResponse {
  /** Paginated list of pipelines. */
  pipelines: Pipeline[]
  /** Count of all pipelines matching the requested criteria. */
  totalCount: number
}

export type ListPipelinesWithStagesRequest = {
  orderBy?: ListPipelinesWithStagesRequestOrderBy
  page?: number
  pageSize?: number
  name?: string
  organizationId?: string
  projectId?: string
}

export interface ListPipelinesWithStagesResponse {
  pipelines: PipelineStages[]
  totalCount: number
}

export interface ListPlansResponse {
  totalCount: number
  plans: PlanDetails[]
}

export type ListPurgeRequestsRequest = {
  /** Sort order of purge requests in the response. */
  orderBy?: ListPurgeRequestsRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of purge requests to return per page. */
  pageSize?: number
  /**
   * Organization ID to filter for, only purge requests from this Project will
   * be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for, only purge requests from this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Pipeline ID to filter for, only purge requests from this pipeline will be
   * returned.
   */
  pipelineId?: string
}

export interface ListPurgeRequestsResponse {
  /** Paginated list of purge requests. */
  purgeRequests: PurgeRequest[]
  /** Count of all purge requests matching the requested criteria. */
  totalCount: number
}

export type ListTLSStagesRequest = {
  /** Sort order of TLS stages in the response. */
  orderBy?: ListTLSStagesRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of TLS stages to return per page. */
  pageSize?: number
  /**
   * Pipeline ID to filter for, only TLS stages from this pipeline will be
   * returned.
   */
  pipelineId?: string
  /**
   * Project ID to filter for, only TLS stages from this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Secret ID to filter for, only TLS stages with this Secret ID will be
   * returned.
   */
  secretId?: string
  /**
   * Secret region to filter for, only TLS stages with a Secret in this region
   * will be returned.
   */
  secretRegion?: string
}

export interface ListTLSStagesResponse {
  /** Paginated list of TLS stages. */
  stages: TLSStage[]
  /** Count of all TLS stages matching the requested criteria. */
  totalCount: number
}

export interface Plan {
  planName: PlanName
}

export type SelectPlanRequest = {
  projectId?: string
  planName?: PlanName
}

export type UpdateBackendStageRequest = {
  /** ID of the backend stage to update. */
  backendStageId: string
  /**
   * Scaleway Object Storage origin bucket (S3) linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb' could
   * be set.
   */
  scalewayS3?: ScalewayS3BackendConfig
  /**
   * Scaleway Load Balancer origin linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb' could
   * be set.
   */
  scalewayLb?: ScalewayLbBackendConfig
}

export type UpdateCacheStageRequest = {
  /** ID of the cache stage to update. */
  cacheStageId: string
  /** Time To Live (TTL) in seconds. Defines how long content is cached. */
  fallbackTtl?: string
  /**
   * Backend stage ID the cache stage will be linked to.
   *
   * One-of ('next'): at most one of 'backendStageId' could be set.
   */
  backendStageId?: string
}

export type UpdateDNSStageRequest = {
  /** ID of the DNS stage to update. */
  dnsStageId: string
  /**
   * Fully Qualified Domain Name (in the format subdomain.example.com) attached
   * to the stage.
   */
  fqdns?: string[]
  /**
   * TLS stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  tlsStageId?: string
  /**
   * Cache stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId',
   * 'backendStageId' could be set.
   */
  backendStageId?: string
}

export type UpdatePipelineRequest = {
  /** ID of the pipeline to update. */
  pipelineId: string
  /** Name of the pipeline. */
  name?: string
  /** Description of the pipeline. */
  description?: string
  /**
   * DNS stage ID the pipeline will be attached to.
   *
   * One-of ('head'): at most one of 'dnsStageId' could be set.
   */
  dnsStageId?: string
}

export type UpdateTLSStageRequest = {
  /** ID of the TLS stage to update. */
  tlsStageId: string
  /** Secret (from Scaleway Secret-Manager) containing your custom certificate. */
  tlsSecretsConfig?: TLSSecretsConfig
  /**
   * True when Scaleway generates and manages a Let's Encrypt certificate for
   * the TLS stage/custom endpoint.
   */
  managedCertificate?: boolean
  /**
   * Cache stage ID the TLS stage will be linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId' could be
   * set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the TLS stage will be linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId' could be
   * set.
   */
  backendStageId?: string
}
