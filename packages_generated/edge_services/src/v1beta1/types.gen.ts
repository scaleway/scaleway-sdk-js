// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  Money,
  Region as ScwRegion,
  Zone as ScwZone,
} from '@scaleway/sdk-client'

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

export type ListRouteStagesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListTLSStagesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListWafStagesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

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
  | 'tls_caa_malfunction'
  | 'pipeline_invalid_workflow'
  | 'pipeline_missing_head_stage'

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
  | 'locked'

export type PlanName = 'unknown_name' | 'starter' | 'professional' | 'advanced'

export type PurgeRequestStatus = 'unknown_status' | 'done' | 'error' | 'pending'

export type RuleHttpMatchMethodFilter =
  | 'unknown_method_filter'
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'
  | 'head'
  | 'options'

export type RuleHttpMatchPathFilterPathFilterType =
  | 'unknown_path_filter'
  | 'regex'

export type SearchBackendStagesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type SearchRouteRulesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type SearchWafStagesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type WafStageMode = 'unknown_mode' | 'disable' | 'log_only' | 'enable'

export interface ScalewayLb {
  /**
   * ID of the Load Balancer.
   */
  id: string
  /**
   * Zone of the Load Balancer.
   */
  zone: ScwZone
  /**
   * ID of the frontend linked to the Load Balancer.
   */
  frontendId: string
  /**
   * Defines whether the Load Balancer's frontend handles SSL connections.
   */
  isSsl?: boolean
  /**
   * Fully Qualified Domain Name (in the format subdomain.example.com) to use in HTTP requests sent towards your Load Balancer.
   */
  domainName?: string
  /**
   * Defines whether to forward websocket requests to the load balancer.
   */
  hasWebsocket?: boolean
}

export interface RuleHttpMatchPathFilter {
  /**
   * Type of filter to match for the HTTP URL path. For now, all path filters must be written in regex and use the `regex` type.
   */
  pathFilterType: RuleHttpMatchPathFilterPathFilterType
  /**
   * Value to be matched for the HTTP URL path.
   */
  value: string
}

export interface ScalewayLbBackendConfig {
  /**
   * Load Balancer information.
   */
  lbs: ScalewayLb[]
}

export interface ScalewayS3BackendConfig {
  /**
   * Name of the Bucket.
   */
  bucketName?: string
  /**
   * Region of the Bucket.
   */
  bucketRegion?: string
  /**
   * Defines whether the bucket website feature is enabled.
   */
  isWebsite?: boolean
}

export interface ScalewayServerlessContainerBackendConfig {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
  containerId: string
}

export interface ScalewayServerlessFunctionBackendConfig {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
  functionId: string
}

export interface PipelineError {
  stage: PipelineErrorStage
  code: PipelineErrorCode
  severity: PipelineErrorSeverity
  message: string
  type: PipelineErrorType
}

export interface TLSSecret {
  /**
   * ID of the Secret.
   */
  secretId: string
  /**
   * Region of the Secret.
   */
  region: ScwRegion
}

export interface RuleHttpMatch {
  /**
   * HTTP methods to filter for. A request using any of these methods will be considered to match the rule. Possible values are `get`, `post`, `put`, `patch`, `delete`, `head`, `options`. All methods will match if none is provided.
   */
  methodFilters: RuleHttpMatchMethodFilter[]
  /**
   * HTTP URL path to filter for. A request whose path matches the given filter will be considered to match the rule. All paths will match if none is provided.
   */
  pathFilter?: RuleHttpMatchPathFilter
}

export interface BackendStage {
  /**
   * ID of the backend stage.
   */
  id: string
  /**
   * Pipeline ID the backend stage belongs to.
   */
  pipelineId: string
  /**
   * Date the backend stage was created.
   */
  createdAt?: Date
  /**
   * Date the backend stage was last updated.
   */
  updatedAt?: Date
  /**
   * Scaleway Object Storage origin bucket (S3) linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayS3?: ScalewayS3BackendConfig
  /**
   * Scaleway Load Balancer origin linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayLb?: ScalewayLbBackendConfig
  /**
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayServerlessContainer?: ScalewayServerlessContainerBackendConfig
  /**
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayServerlessFunction?: ScalewayServerlessFunctionBackendConfig
}

export interface CacheStage {
  /**
   * ID of the cache stage.
   */
  id: string
  /**
   * Pipeline ID the cache stage belongs to.
   */
  pipelineId: string
  /**
   * Time To Live (TTL) in seconds. Defines how long content is cached.
   */
  fallbackTtl?: string
  /**
   * Defines whether responses to requests with cookies must be stored in the cache.
   */
  includeCookies: boolean
  /**
   * Date the cache stage was created.
   */
  createdAt?: Date
  /**
   * Date the cache stage was last updated.
   */
  updatedAt?: Date
  /**
   * Backend stage ID the cache stage is linked to.
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  backendStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  wafStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  routeStageId?: string
}

export interface DNSStage {
  /**
   * ID of the DNS stage.
   */
  id: string
  /**
   * Default Fully Qualified Domain Name attached to the stage.
   */
  defaultFqdn: string
  /**
   * List of additional (custom) Fully Qualified Domain Names attached to the stage.
   */
  fqdns: string[]
  /**
   * Type of the stage.
   */
  type: DNSStageType
  /**
   * Pipeline ID the DNS stage belongs to.
   */
  pipelineId: string
  /**
   * Date the DNS stage was created.
   */
  createdAt?: Date
  /**
   * Date the DNS stage was last updated.
   */
  updatedAt?: Date
  /**
   * TLS stage ID the DNS stage is linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  tlsStageId?: string
  /**
   * Cache stage ID the DNS stage is linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the DNS stage is linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  backendStageId?: string
}

export interface Pipeline {
  /**
   * ID of the pipeline.
   */
  id: string
  /**
   * Name of the pipeline.
   */
  name: string
  /**
   * Description of the pipeline.
   */
  description: string
  /**
   * Status of the pipeline.
   */
  status: PipelineStatus
  /**
   * Errors of the pipeline.
   */
  errors: PipelineError[]
  /**
   * Project ID of the pipeline.
   */
  projectId: string
  /**
   * Organization ID of the pipeline.
   */
  organizationId: string
  /**
   * Date the pipeline was created.
   */
  createdAt?: Date
  /**
   * Date the pipeline was last updated.
   */
  updatedAt?: Date
}

export interface RouteStage {
  /**
   * ID of the route stage.
   */
  id: string
  /**
   * Pipeline ID the route stage belongs to.
   */
  pipelineId: string
  /**
   * ID of the WAF stage HTTP requests should be forwarded to when no rules are matched.
   *
   * One-of ('next'): at most one of 'wafStageId' could be set.
   */
  wafStageId?: string
  /**
   * Date the route stage was created.
   */
  createdAt?: Date
  /**
   * Date the route stage was last updated.
   */
  updatedAt?: Date
}

export interface TLSStage {
  /**
   * ID of the TLS stage.
   */
  id: string
  /**
   * Secret (from Scaleway Secret Manager) containing your custom certificate.
   */
  secrets: TLSSecret[]
  /**
   * True when Scaleway generates and manages a Let's Encrypt certificate for the TLS stage/custom endpoint.
   */
  managedCertificate: boolean
  /**
   * Pipeline ID the TLS stage belongs to.
   */
  pipelineId: string
  /**
   * Expiration date of the certificate.
   */
  certificateExpiresAt?: Date
  /**
   * Date the TLS stage was created.
   */
  createdAt?: Date
  /**
   * Date the TLS stage was last updated.
   */
  updatedAt?: Date
  /**
   * Cache stage ID the TLS stage is linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the TLS stage is linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  backendStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  wafStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  routeStageId?: string
}

export interface WafStage {
  /**
   * ID of the WAF stage.
   */
  id: string
  /**
   * Pipeline ID the WAF stage belongs to.
   */
  pipelineId: string
  /**
   * Mode defining WAF behavior (`disable`/`log_only`/`enable`).
   */
  mode: WafStageMode
  /**
   * Sensitivity level (`1`,`2`,`3`,`4`) to use when classifying requests as malicious. With a high level, requests are more likely to be classed as malicious, and false positives are expected. With a lower level, requests are more likely to be classed as benign.
   */
  paranoiaLevel: number
  /**
   * Date the WAF stage was created.
   */
  createdAt?: Date
  /**
   * Date the WAF stage was last updated.
   */
  updatedAt?: Date
  /**
   * ID of the backend stage to forward requests to after the WAF stage.
   *
   * One-of ('next'): at most one of 'backendStageId' could be set.
   */
  backendStageId?: string
}

export interface SetRouteRulesRequestRouteRule {
  /**
   * Rule condition to be matched. Requests matching the condition defined here will be directly forwarded to the backend specified by the `backend_stage_id` field. Requests that do not match will be checked by the next rule's condition.
   *
   * One-of ('match'): at most one of 'ruleHttpMatch' could be set.
   */
  ruleHttpMatch?: RuleHttpMatch
  /**
   * ID of the backend stage that requests matching the rule should be forwarded to.
   *
   * One-of ('next'): at most one of 'backendStageId' could be set.
   */
  backendStageId?: string
}

export interface RouteRule {
  /**
   * Rule condition to be matched. Requests matching the condition defined here will be directly forwarded to the backend specified by the `backend_stage_id` field. Requests that do not match will be checked by the next rule's condition.
   *
   * One-of ('match'): at most one of 'ruleHttpMatch' could be set.
   */
  ruleHttpMatch?: RuleHttpMatch
  /**
   * ID of the backend stage that requests matching the rule should be forwarded to.
   *
   * One-of ('next'): at most one of 'backendStageId' could be set.
   */
  backendStageId?: string
  /**
   * Position of the rule which determines the order of processing within the route stage.
   */
  position: number
  /**
   * Route stage ID the route rule belongs to.
   */
  routeStageId: string
}

export interface CheckPEMChainRequestSecretChain {
  secretId: string
  secretRegion: string
}

export interface PlanDetails {
  /**
   * Subscription plan name.
   */
  planName: PlanName
  /**
   * Amount of egress data from cache included in subscription plan.
   */
  packageGb: number
  /**
   * Number of pipelines included in subscription plan.
   */
  pipelineLimit: number
  /**
   * Number of WAF requests included in subscription plan.
   */
  wafRequests: number
}

export interface PlanUsageDetails {
  /**
   * Cost to date (this month) for the corresponding Edge Services subscription plan.
   */
  planCost?: Money
}

export interface HeadStageResponseHeadStage {
  /**
   *
   * One-of ('head'): at most one of 'dnsStageId' could be set.
   */
  dnsStageId?: string
}

export interface ListHeadStagesResponseHeadStage {
  /**
   *
   * One-of ('head'): at most one of 'dnsStageId' could be set.
   */
  dnsStageId?: string
}

export interface PipelineStages {
  pipeline?: Pipeline
  dnsStages: DNSStage[]
  tlsStages: TLSStage[]
  cacheStages: CacheStage[]
  backendStages: BackendStage[]
  wafStages: WafStage[]
  routeStages: RouteStage[]
}

export interface PurgeRequest {
  /**
   * ID of the purge request.
   */
  id: string
  /**
   * Pipeline ID the purge request belongs to.
   */
  pipelineId: string
  /**
   * Status of the purge request.
   */
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
  /**
   * Date the purge request was created.
   */
  createdAt?: Date
  /**
   * Date the purge request was last updated.
   */
  updatedAt?: Date
}

export interface SetHeadStageRequestAddNewHeadStage {
  newStageId: string
}

export interface SetHeadStageRequestRemoveHeadStage {
  removeStageId: string
}

export interface SetHeadStageRequestSwapHeadStage {
  newStageId: string
  currentStageId: string
}

export interface TLSSecretsConfig {
  /**
   * Secret information (from Secret Manager).
   */
  tlsSecrets: TLSSecret[]
}

export type AddRouteRulesRequest = {
  /**
   * ID of the route stage to update.
   */
  routeStageId: string
  /**
   * List of rules to be checked against every HTTP request. The first matching rule will forward the request to its specified backend stage. If no rules are matched, the request is forwarded to the WAF stage defined by `waf_stage_id`.
   */
  routeRules?: SetRouteRulesRequestRouteRule[]
  /**
   * Add rules after the given position.
   *
   * One-of ('position'): at most one of 'afterPosition', 'beforePosition' could be set.
   */
  afterPosition?: number
  /**
   * Add rules before the given position.
   *
   * One-of ('position'): at most one of 'afterPosition', 'beforePosition' could be set.
   */
  beforePosition?: number
}

export interface AddRouteRulesResponse {
  /**
   * List of rules to be checked against every HTTP request. The first matching rule will forward the request to its specified backend stage. If no rules are matched, the request is forwarded to the WAF stage defined by `waf_stage_id`.
   */
  routeRules: RouteRule[]
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
  /**
   *
   * One-of ('chain'): at most one of 'secret', 'raw' could be set.
   */
  secret?: CheckPEMChainRequestSecretChain
  /**
   *
   * One-of ('chain'): at most one of 'secret', 'raw' could be set.
   */
  raw?: string
}

export interface CheckPEMChainResponse {
  isValid: boolean
}

export type CreateBackendStageRequest = {
  /**
   * Pipeline ID the Backend stage belongs to.
   */
  pipelineId: string
  /**
   * Scaleway Object Storage origin bucket (S3) linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayS3?: ScalewayS3BackendConfig
  /**
   * Scaleway Load Balancer origin linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayLb?: ScalewayLbBackendConfig
  /**
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayServerlessContainer?: ScalewayServerlessContainerBackendConfig
  /**
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayServerlessFunction?: ScalewayServerlessFunctionBackendConfig
}

export type CreateCacheStageRequest = {
  /**
   * Pipeline ID the Cache stage belongs to.
   */
  pipelineId: string
  /**
   * Time To Live (TTL) in seconds. Defines how long content is cached.
   */
  fallbackTtl?: string
  /**
   * Defines whether responses to requests with cookies must be stored in the cache.
   */
  includeCookies?: boolean
  /**
   * Backend stage ID the cache stage will be linked to.
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  backendStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  wafStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  routeStageId?: string
}

export type CreateDNSStageRequest = {
  /**
   * Pipeline ID the DNS stage belongs to.
   */
  pipelineId: string
  /**
   * Fully Qualified Domain Name (in the format subdomain.example.com) to attach to the stage.
   */
  fqdns?: string[]
  /**
   * TLS stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  tlsStageId?: string
  /**
   * Cache stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  backendStageId?: string
}

export type CreatePipelineRequest = {
  /**
   * Project ID in which the pipeline will be created.
   */
  projectId?: string
  /**
   * Name of the pipeline.
   */
  name: string
  /**
   * Description of the pipeline.
   */
  description: string
}

export type CreatePurgeRequestRequest = {
  /**
   * Pipeline ID in which the purge request will be created.
   */
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

export type CreateRouteStageRequest = {
  /**
   * Pipeline ID the route stage belongs to.
   */
  pipelineId: string
  /**
   * ID of the WAF stage HTTP requests should be forwarded to when no rules are matched.
   *
   * One-of ('next'): at most one of 'wafStageId' could be set.
   */
  wafStageId?: string
}

export type CreateTLSStageRequest = {
  /**
   * Pipeline ID the TLS stage belongs to.
   */
  pipelineId: string
  /**
   * Secret (from Scaleway Secret Manager) containing your custom certificate.
   */
  secrets?: TLSSecret[]
  /**
   * True when Scaleway generates and manages a Let's Encrypt certificate for the TLS stage/custom endpoint.
   */
  managedCertificate?: boolean
  /**
   * Cache stage ID the TLS stage will be linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'routeStageId', 'wafStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the TLS stage will be linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'routeStageId', 'wafStageId' could be set.
   */
  backendStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'routeStageId', 'wafStageId' could be set.
   */
  routeStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'routeStageId', 'wafStageId' could be set.
   */
  wafStageId?: string
}

export type CreateWafStageRequest = {
  /**
   * Pipeline ID the WAF stage belongs to.
   */
  pipelineId: string
  /**
   * Mode defining WAF behavior (`disable`/`log_only`/`enable`).
   */
  mode?: WafStageMode
  /**
   * Sensitivity level (`1`,`2`,`3`,`4`) to use when classifying requests as malicious. With a high level, requests are more likely to be classed as malicious, and false positives are expected. With a lower level, requests are more likely to be classed as benign.
   */
  paranoiaLevel: number
  /**
   * ID of the backend stage to forward requests to after the WAF stage.
   *
   * One-of ('next'): at most one of 'backendStageId' could be set.
   */
  backendStageId?: string
}

export type DeleteBackendStageRequest = {
  /**
   * ID of the backend stage to delete.
   */
  backendStageId: string
}

export type DeleteCacheStageRequest = {
  /**
   * ID of the cache stage to delete.
   */
  cacheStageId: string
}

export type DeleteCurrentPlanRequest = {
  projectId?: string
}

export type DeleteDNSStageRequest = {
  /**
   * ID of the DNS stage to delete.
   */
  dnsStageId: string
}

export type DeletePipelineRequest = {
  /**
   * ID of the pipeline to delete.
   */
  pipelineId: string
}

export type DeleteRouteStageRequest = {
  /**
   * ID of the route stage to delete.
   */
  routeStageId: string
}

export type DeleteTLSStageRequest = {
  /**
   * ID of the TLS stage to delete.
   */
  tlsStageId: string
}

export type DeleteWafStageRequest = {
  /**
   * ID of the WAF stage to delete.
   */
  wafStageId: string
}

export type GetBackendStageRequest = {
  /**
   * ID of the requested backend stage.
   */
  backendStageId: string
}

export type GetBillingRequest = {
  projectId?: string
}

export interface GetBillingResponse {
  /**
   * Information on the currently-selected, active Edge Services subscription plan.
   */
  currentPlan?: PlanDetails
  /**
   * Cost to date (this month) for Edge Service subscription plans. This comprises the pro-rata cost of the current subscription plan, and any previous subscription plans that were active earlier in the month.
   */
  planCost?: Money
  /**
   * Total number of pipelines currently configured.
   */
  pipelineNumber: number
  /**
   * Cost to date (this month) of pipelines not included in the subscription plans.
   */
  extraPipelinesCost?: Money
  /**
   * Total amount of data egressed from the cache in gigabytes from the beginning of the month, for the active subscription plan.
   */
  currentPlanCacheUsage: number
  /**
   * Total amount of extra data egressed from cache in gigabytes from the beginning of the month, not included in the subscription plans.
   */
  extraCacheUsage: number
  /**
   * Cost to date (this month) of the data egressed from the cache that is not included in the subscription plans.
   */
  extraCacheCost?: Money
  /**
   * Total number of requests processed by the WAF since the beginning of the current month, for the active subscription plan.
   */
  currentPlanWafUsage: number
  /**
   * Total number of extra requests processed by the WAF from the beginning of the month, not included in the subscription plans.
   */
  extraWafUsage: number
  /**
   * Cost to date (this month) of the extra requests processed by the WAF that were not included in the subscription plans.
   */
  extraWafCost?: Money
  /**
   * Cost of activating WAF add-on (where subscription plan does not include WAF).
   */
  wafAddOn?: Money
  /**
   * Detailed costs and usage for all Edge Services subscription plans that were activated during the month.
   */
  plansUsageDetails: Record<string, PlanUsageDetails>
  /**
   * Total cost to date (this month) of all Edge Services resources including active subscription plan, previously active plans, extra pipelines and extra egress cache data.
   */
  totalCost?: Money
}

export type GetCacheStageRequest = {
  /**
   * ID of the requested cache stage.
   */
  cacheStageId: string
}

export type GetCurrentPlanRequest = {
  projectId?: string
}

export type GetDNSStageRequest = {
  /**
   * ID of the requested DNS stage.
   */
  dnsStageId: string
}

export type GetPipelineRequest = {
  /**
   * ID of the requested pipeline.
   */
  pipelineId: string
}

export type GetPurgeRequestRequest = {
  /**
   * ID of the requested purge request.
   */
  purgeRequestId: string
}

export type GetRouteStageRequest = {
  /**
   * ID of the requested route stage.
   */
  routeStageId: string
}

export type GetTLSStageRequest = {
  /**
   * ID of the requested TLS stage.
   */
  tlsStageId: string
}

export type GetWafStageRequest = {
  /**
   * ID of the requested WAF stage.
   */
  wafStageId: string
}

export interface HeadStageResponse {
  /**
   * Modified or created head stage.
   */
  headStage?: HeadStageResponseHeadStage
}

export type ListBackendStagesRequest = {
  /**
   * Pipeline ID to filter for. Only backend stages from this pipeline will be returned.
   */
  pipelineId: string
  /**
   * Sort order of backend stages in the response.
   */
  orderBy?: ListBackendStagesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of backend stages to return per page.
   */
  pageSize?: number
  /**
   * Bucket name to filter for. Only backend stages from this Bucket will be returned.
   */
  bucketName?: string
  /**
   * Bucket region to filter for. Only backend stages with buckets in this region will be returned.
   */
  bucketRegion?: string
  /**
   * Load Balancer ID to filter for. Only backend stages with this Load Balancer will be returned.
   */
  lbId?: string
}

export interface ListBackendStagesResponse {
  /**
   * Paginated list of backend stages.
   */
  stages: BackendStage[]
  /**
   * Count of all backend stages matching the requested criteria.
   */
  totalCount: number
}

export type ListCacheStagesRequest = {
  /**
   * Pipeline ID to filter for. Only cache stages from this pipeline will be returned.
   */
  pipelineId: string
  /**
   * Sort order of cache stages in the response.
   */
  orderBy?: ListCacheStagesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of cache stages to return per page.
   */
  pageSize?: number
}

export interface ListCacheStagesResponse {
  /**
   * Paginated list of cache stages.
   */
  stages: CacheStage[]
  /**
   * Count of all cache stages matching the requested criteria.
   */
  totalCount: number
}

export type ListDNSStagesRequest = {
  /**
   * Pipeline ID to filter for. Only DNS stages from this pipeline will be returned.
   */
  pipelineId: string
  /**
   * Sort order of DNS stages in the response.
   */
  orderBy?: ListDNSStagesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of DNS stages to return per page.
   */
  pageSize?: number
  /**
   * Fully Qualified Domain Name to filter for (in the format subdomain.example.com). Only DNS stages with this FQDN will be returned.
   */
  fqdn?: string
}

export interface ListDNSStagesResponse {
  /**
   * Paginated list of DNS stages.
   */
  stages: DNSStage[]
  /**
   * Count of all DNS stages matching the requested criteria.
   */
  totalCount: number
}

export type ListHeadStagesRequest = {
  /**
   * ID of the pipeline to update.
   */
  pipelineId: string
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of head stages to return per page.
   */
  pageSize?: number
}

export interface ListHeadStagesResponse {
  /**
   * Number of head stages to return per page.
   */
  headStages: ListHeadStagesResponseHeadStage[]
  /**
   * Count of all head stages matching the requested pipeline_id.
   */
  totalCount: number
}

export type ListPipelinesRequest = {
  /**
   * Sort order of pipelines in the response.
   */
  orderBy?: ListPipelinesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of pipelines to return per page.
   */
  pageSize?: number
  /**
   * Pipeline name to filter for. Only pipelines with this string within their name will be returned.
   */
  name?: string
  /**
   * Organization ID to filter for. Only pipelines from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only pipelines from this Project will be returned.
   */
  projectId?: string
  /**
   * Filter on backend stage. Only pipelines with a Load Balancer origin will be returned.
   */
  hasBackendStageLb?: boolean
}

export interface ListPipelinesResponse {
  /**
   * Paginated list of pipelines.
   */
  pipelines: Pipeline[]
  /**
   * Count of all pipelines matching the requested criteria.
   */
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
  /**
   * Sort order of purge requests in the response.
   */
  orderBy?: ListPurgeRequestsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of purge requests to return per page.
   */
  pageSize?: number
  /**
   * Organization ID to filter for. Only purge requests from this Project will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for. Only purge requests from this Project will be returned.
   */
  projectId?: string
  /**
   * Pipeline ID to filter for. Only purge requests from this pipeline will be returned.
   */
  pipelineId?: string
}

export interface ListPurgeRequestsResponse {
  /**
   * Paginated list of purge requests.
   */
  purgeRequests: PurgeRequest[]
  /**
   * Count of all purge requests matching the requested criteria.
   */
  totalCount: number
}

export type ListRouteRulesRequest = {
  /**
   * Route stage ID to filter for. Only route rules from this route stage will be returned.
   */
  routeStageId: string
}

export interface ListRouteRulesResponse {
  /**
   * List of rules to be checked against every HTTP request. The first matching rule will forward the request to its specified backend stage. If no rules are matched, the request is forwarded to the WAF stage defined by `waf_stage_id`.
   */
  routeRules: RouteRule[]
  /**
   * Count of all route rules matching the requested criteria.
   */
  totalCount: number
}

export type ListRouteStagesRequest = {
  /**
   * Pipeline ID to filter for. Only route stages from this pipeline will be returned.
   */
  pipelineId: string
  /**
   * Sort order of route stages in the response.
   */
  orderBy?: ListRouteStagesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of route stages to return per page.
   */
  pageSize?: number
}

export interface ListRouteStagesResponse {
  /**
   * Paginated list of summarized route stages.
   */
  stages: RouteStage[]
  /**
   * Count of all route stages matching the requested criteria.
   */
  totalCount: number
}

export type ListTLSStagesRequest = {
  /**
   * Pipeline ID to filter for. Only TLS stages from this pipeline will be returned.
   */
  pipelineId: string
  /**
   * Sort order of TLS stages in the response.
   */
  orderBy?: ListTLSStagesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of TLS stages to return per page.
   */
  pageSize?: number
  /**
   * Secret ID to filter for. Only TLS stages with this Secret ID will be returned.
   */
  secretId?: string
  /**
   * Secret region to filter for. Only TLS stages with a Secret in this region will be returned.
   */
  secretRegion?: string
}

export interface ListTLSStagesResponse {
  /**
   * Paginated list of TLS stages.
   */
  stages: TLSStage[]
  /**
   * Count of all TLS stages matching the requested criteria.
   */
  totalCount: number
}

export type ListWafStagesRequest = {
  /**
   * Pipeline ID to filter for. Only WAF stages from this pipeline will be returned.
   */
  pipelineId: string
  /**
   * Sort order of WAF stages in the response.
   */
  orderBy?: ListWafStagesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of WAF stages to return per page.
   */
  pageSize?: number
}

export interface ListWafStagesResponse {
  /**
   * Paginated list of WAF stages.
   */
  stages: WafStage[]
  /**
   * Count of all WAF stages matching the requested criteria.
   */
  totalCount: number
}

export interface Plan {
  planName: PlanName
}

export type SearchBackendStagesRequest = {
  orderBy?: SearchBackendStagesRequestOrderBy
  page?: number
  pageSize?: number
  projectId?: string
  bucketName?: string
  bucketRegion?: string
  lbId?: string
}

export type SearchRouteRulesRequest = {
  orderBy?: SearchRouteRulesRequestOrderBy
  page?: number
  pageSize?: number
  organizationId?: string
  projectId?: string
}

export type SearchWafStagesRequest = {
  orderBy?: SearchWafStagesRequestOrderBy
  page?: number
  pageSize?: number
  projectId?: string
}

export type SelectPlanRequest = {
  projectId?: string
  planName?: PlanName
}

export type SetHeadStageRequest = {
  /**
   * ID of the pipeline to update.
   */
  pipelineId: string
  /**
   * Add a new head stage.
   *
   * One-of ('action'): at most one of 'addNewHeadStage', 'removeHeadStage', 'swapHeadStage' could be set.
   */
  addNewHeadStage?: SetHeadStageRequestAddNewHeadStage
  /**
   * Remove a head stage.
   *
   * One-of ('action'): at most one of 'addNewHeadStage', 'removeHeadStage', 'swapHeadStage' could be set.
   */
  removeHeadStage?: SetHeadStageRequestRemoveHeadStage
  /**
   * Replace a head stage with a new one.
   *
   * One-of ('action'): at most one of 'addNewHeadStage', 'removeHeadStage', 'swapHeadStage' could be set.
   */
  swapHeadStage?: SetHeadStageRequestSwapHeadStage
}

export type SetRouteRulesRequest = {
  /**
   * ID of the route stage to update.
   */
  routeStageId: string
  /**
   * List of rules to be checked against every HTTP request. The first matching rule will forward the request to its specified backend stage. If no rules are matched, the request is forwarded to the WAF stage defined by `waf_stage_id`.
   */
  routeRules?: SetRouteRulesRequestRouteRule[]
}

export interface SetRouteRulesResponse {
  /**
   * List of rules to be checked against every HTTP request. The first matching rule will forward the request to its specified backend stage. If no rules are matched, the request is forwarded to the WAF stage defined by `waf_stage_id`.
   */
  routeRules: RouteRule[]
}

export type UpdateBackendStageRequest = {
  /**
   * ID of the backend stage to update.
   */
  backendStageId: string
  /**
   * Scaleway Object Storage origin bucket (S3) linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayS3?: ScalewayS3BackendConfig
  /**
   * Scaleway Load Balancer origin linked to the backend stage.
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayLb?: ScalewayLbBackendConfig
  /**
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayServerlessContainer?: ScalewayServerlessContainerBackendConfig
  /**
   *
   * One-of ('backendConfig'): at most one of 'scalewayS3', 'scalewayLb', 'scalewayServerlessContainer', 'scalewayServerlessFunction' could be set.
   */
  scalewayServerlessFunction?: ScalewayServerlessFunctionBackendConfig
  /**
   * Pipeline ID the Backend stage belongs to.
   */
  pipelineId: string
}

export type UpdateCacheStageRequest = {
  /**
   * ID of the cache stage to update.
   */
  cacheStageId: string
  /**
   * Time To Live (TTL) in seconds. Defines how long content is cached.
   */
  fallbackTtl?: string
  /**
   * Defines whether responses to requests with cookies must be stored in the cache.
   */
  includeCookies?: boolean
  /**
   * Backend stage ID the cache stage will be linked to.
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  backendStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  wafStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'backendStageId', 'wafStageId', 'routeStageId' could be set.
   */
  routeStageId?: string
}

export type UpdateDNSStageRequest = {
  /**
   * ID of the DNS stage to update.
   */
  dnsStageId: string
  /**
   * Fully Qualified Domain Name (in the format subdomain.example.com) attached to the stage.
   */
  fqdns?: string[]
  /**
   * TLS stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  tlsStageId?: string
  /**
   * Cache stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the DNS stage will be linked to.
   *
   * One-of ('next'): at most one of 'tlsStageId', 'cacheStageId', 'backendStageId' could be set.
   */
  backendStageId?: string
}

export type UpdatePipelineRequest = {
  /**
   * ID of the pipeline to update.
   */
  pipelineId: string
  /**
   * Name of the pipeline.
   */
  name?: string
  /**
   * Description of the pipeline.
   */
  description?: string
}

export type UpdateRouteStageRequest = {
  /**
   * ID of the route stage to update.
   */
  routeStageId: string
  /**
   * ID of the WAF stage HTTP requests should be forwarded to when no rules are matched.
   *
   * One-of ('next'): at most one of 'wafStageId' could be set.
   */
  wafStageId?: string
}

export type UpdateTLSStageRequest = {
  /**
   * ID of the TLS stage to update.
   */
  tlsStageId: string
  /**
   * Secret (from Scaleway Secret-Manager) containing your custom certificate.
   */
  tlsSecretsConfig?: TLSSecretsConfig
  /**
   * True when Scaleway generates and manages a Let's Encrypt certificate for the TLS stage/custom endpoint.
   */
  managedCertificate?: boolean
  /**
   * Cache stage ID the TLS stage will be linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'routeStageId', 'wafStageId' could be set.
   */
  cacheStageId?: string
  /**
   * Backend stage ID the TLS stage will be linked to.
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'routeStageId', 'wafStageId' could be set.
   */
  backendStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'routeStageId', 'wafStageId' could be set.
   */
  routeStageId?: string
  /**
   *
   * One-of ('next'): at most one of 'cacheStageId', 'backendStageId', 'routeStageId', 'wafStageId' could be set.
   */
  wafStageId?: string
}

export type UpdateWafStageRequest = {
  /**
   * ID of the WAF stage to update.
   */
  wafStageId: string
  /**
   * Mode defining WAF behavior (`disable`/`log_only`/`enable`).
   */
  mode?: WafStageMode
  /**
   * Sensitivity level (`1`,`2`,`3`,`4`) to use when classifying requests as malicious. With a high level, requests are more likely to be classed as malicious, and false positives are expected. With a lower level, requests are more likely to be classed as benign.
   */
  paranoiaLevel?: number
  /**
   * ID of the backend stage to forward requests to after the WAF stage.
   *
   * One-of ('next'): at most one of 'backendStageId' could be set.
   */
  backendStageId?: string
}
