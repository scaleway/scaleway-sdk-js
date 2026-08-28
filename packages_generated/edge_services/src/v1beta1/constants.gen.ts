// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DNSStageType,
  LbOriginError,
  ListBackendStagesRequestOrderBy,
  ListCacheStagesRequestOrderBy,
  ListDNSStagesRequestOrderBy,
  ListPipelinesRequestOrderBy,
  ListPipelinesWithStagesRequestOrderBy,
  ListPurgeRequestsRequestOrderBy,
  ListRouteStagesRequestOrderBy,
  ListTLSStagesRequestOrderBy,
  ListVPCEndpointsRequestOrderBy,
  ListWafStagesRequestOrderBy,
  PipelineErrorCode,
  PipelineErrorSeverity,
  PipelineErrorStage,
  PipelineErrorType,
  PipelineStatus,
  PlanName,
  PurgeRequestStatus,
  RuleHttpMatchHostFilterHostFilterType,
  RuleHttpMatchMethodFilter,
  RuleHttpMatchPathFilterPathFilterType,
  SearchBackendStagesRequestOrderBy,
  SearchRouteRulesRequestOrderBy,
  SearchWafStagesRequestOrderBy,
  StageStatus,
  WafStageMode,
} from './types.gen.js'


/** Lists all values of the enum {@link DNSStageType}. */
export const DNS_STAGE_TYPES: DNSStageType[] = [
  'unknown_type',
  'auto',
  'managed',
  'custom',
]

/** Lists all values of the enum {@link LbOriginError}. */
export const LB_ORIGIN_ERRORS: LbOriginError[] = [
  'unknown',
  'timeout',
  'connection_refused',
  'tls_error',
]

/** Lists all values of the enum {@link ListBackendStagesRequestOrderBy}. */
export const LIST_BACKEND_STAGES_REQUEST_ORDER_BIES: ListBackendStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListCacheStagesRequestOrderBy}. */
export const LIST_CACHE_STAGES_REQUEST_ORDER_BIES: ListCacheStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListDNSStagesRequestOrderBy}. */
export const LIST_DNS_STAGES_REQUEST_ORDER_BIES: ListDNSStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListPipelinesRequestOrderBy}. */
export const LIST_PIPELINES_REQUEST_ORDER_BIES: ListPipelinesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListPipelinesWithStagesRequestOrderBy}. */
export const LIST_PIPELINES_WITH_STAGES_REQUEST_ORDER_BIES: ListPipelinesWithStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListPurgeRequestsRequestOrderBy}. */
export const LIST_PURGE_REQUESTS_REQUEST_ORDER_BIES: ListPurgeRequestsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRouteStagesRequestOrderBy}. */
export const LIST_ROUTE_STAGES_REQUEST_ORDER_BIES: ListRouteStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListTLSStagesRequestOrderBy}. */
export const LIST_TLS_STAGES_REQUEST_ORDER_BIES: ListTLSStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListVPCEndpointsRequestOrderBy}. */
export const LIST_VPC_ENDPOINTS_REQUEST_ORDER_BIES: ListVPCEndpointsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListWafStagesRequestOrderBy}. */
export const LIST_WAF_STAGES_REQUEST_ORDER_BIES: ListWafStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link PipelineErrorCode}. */
export const PIPELINE_ERROR_CODES: PipelineErrorCode[] = [
  'unknown_code',
  'dns_invalid_format',
  'dns_invalid_tld',
  'dns_forbidden_root_domain',
  'dns_forbidden_scw_cloud',
  'dns_domain_dont_exist',
  'dns_cname_dont_exist',
  'dns_cname_resolve',
  'dns_fqdn_already_exists',
  'dns_fqdn_already_in_use',
  'tls_cert_deleted',
  'tls_cert_disabled',
  'tls_cert_expired',
  'tls_cert_invalid_format',
  'tls_cert_missing',
  'tls_chain_order',
  'tls_key_invalid_format',
  'tls_key_missing',
  'tls_key_too_many',
  'tls_managed_domain_rate_limit',
  'tls_managed_internal',
  'tls_managed_unsupported',
  'tls_not_wildcard',
  'tls_pair_mismatch',
  'tls_root_inconsistent',
  'tls_root_incorrect',
  'tls_root_missing',
  'tls_san_mismatch',
  'tls_self_signed',
  'tls_caa_malfunction',
  'pipeline_invalid_workflow',
  'pipeline_missing_head_stage',
  'pipeline_websocket_limit',
  'pipeline_configuration_failed',
]

/** Lists all values of the enum {@link PipelineErrorSeverity}. */
export const PIPELINE_ERROR_SEVERITIES: PipelineErrorSeverity[] = [
  'unknown_severity',
  'warning',
  'critical',
]

/** Lists all values of the enum {@link PipelineErrorStage}. */
export const PIPELINE_ERROR_STAGES: PipelineErrorStage[] = [
  'unknown_stage',
  'dns',
  'tls',
  'cache',
  'backend',
]

/** Lists all values of the enum {@link PipelineErrorType}. */
export const PIPELINE_ERROR_TYPES: PipelineErrorType[] = [
  'unknown_type',
  'runtime',
  'config',
]

/** Lists all values of the enum {@link PipelineStatus}. */
export const PIPELINE_STATUSES: PipelineStatus[] = [
  'unknown_status',
  'ready',
  'error',
  'pending',
  'warning',
  'locked',
]

/** Lists all values of the enum {@link PlanName}. */
export const PLAN_NAMES: PlanName[] = [
  'unknown_name',
  'starter',
  'professional',
  'advanced',
]

/** Lists all values of the enum {@link PurgeRequestStatus}. */
export const PURGE_REQUEST_STATUSES: PurgeRequestStatus[] = [
  'unknown_status',
  'done',
  'error',
  'pending',
]

/** Lists all values of the enum {@link RuleHttpMatchHostFilterHostFilterType}. */
export const RULE_HTTP_MATCH_HOST_FILTER_HOST_FILTER_TYPES: RuleHttpMatchHostFilterHostFilterType[] = [
  'unknown_host_filter',
  'regex',
]

/** Lists all values of the enum {@link RuleHttpMatchMethodFilter}. */
export const RULE_HTTP_MATCH_METHOD_FILTERS: RuleHttpMatchMethodFilter[] = [
  'unknown_method_filter',
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'head',
  'options',
]

/** Lists all values of the enum {@link RuleHttpMatchPathFilterPathFilterType}. */
export const RULE_HTTP_MATCH_PATH_FILTER_PATH_FILTER_TYPES: RuleHttpMatchPathFilterPathFilterType[] = [
  'unknown_path_filter',
  'regex',
]

/** Lists all values of the enum {@link SearchBackendStagesRequestOrderBy}. */
export const SEARCH_BACKEND_STAGES_REQUEST_ORDER_BIES: SearchBackendStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link SearchRouteRulesRequestOrderBy}. */
export const SEARCH_ROUTE_RULES_REQUEST_ORDER_BIES: SearchRouteRulesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link SearchWafStagesRequestOrderBy}. */
export const SEARCH_WAF_STAGES_REQUEST_ORDER_BIES: SearchWafStagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link StageStatus}. */
export const STAGE_STATUSES: StageStatus[] = [
  'unknown_status',
  'inactive',
  'active',
]

/** Lists all values of the enum {@link WafStageMode}. */
export const WAF_STAGE_MODES: WafStageMode[] = [
  'unknown_mode',
  'disable',
  'log_only',
  'enable',
]

