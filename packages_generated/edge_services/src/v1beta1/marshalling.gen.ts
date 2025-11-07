// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMapOfObject,
  unmarshalMoney,
} from '@scaleway/sdk-client'
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
  CheckPEMChainRequestSecretChain,
  CheckPEMChainResponse,
  CreateBackendStageRequest,
  CreateCacheStageRequest,
  CreateDNSStageRequest,
  CreatePipelineRequest,
  CreatePurgeRequestRequest,
  CreateRouteStageRequest,
  CreateTLSStageRequest,
  CreateWafStageRequest,
  DNSStage,
  GetBillingResponse,
  HeadStageResponse,
  HeadStageResponseHeadStage,
  ListBackendStagesResponse,
  ListCacheStagesResponse,
  ListDNSStagesResponse,
  ListHeadStagesResponse,
  ListHeadStagesResponseHeadStage,
  ListPipelinesResponse,
  ListPipelinesWithStagesResponse,
  ListPlansResponse,
  ListPurgeRequestsResponse,
  ListRouteRulesResponse,
  ListRouteStagesResponse,
  ListTLSStagesResponse,
  ListWafStagesResponse,
  Pipeline,
  PipelineError,
  PipelineStages,
  Plan,
  PlanDetails,
  PlanUsageDetails,
  PurgeRequest,
  RouteRule,
  RouteStage,
  RuleHttpMatch,
  RuleHttpMatchPathFilter,
  ScalewayLb,
  ScalewayLbBackendConfig,
  ScalewayS3BackendConfig,
  SelectPlanRequest,
  SetHeadStageRequest,
  SetHeadStageRequestAddNewHeadStage,
  SetHeadStageRequestRemoveHeadStage,
  SetHeadStageRequestSwapHeadStage,
  SetRouteRulesRequest,
  SetRouteRulesRequestRouteRule,
  SetRouteRulesResponse,
  TLSSecret,
  TLSSecretsConfig,
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

const unmarshalScalewayLb = (data: unknown): ScalewayLb => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ScalewayLb' failed as data isn't a dictionary.`,
    )
  }

  return {
    domainName: data.domain_name,
    frontendId: data.frontend_id,
    id: data.id,
    isSsl: data.is_ssl,
    zone: data.zone,
  } as ScalewayLb
}

const unmarshalScalewayLbBackendConfig = (
  data: unknown,
): ScalewayLbBackendConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ScalewayLbBackendConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    lbs: unmarshalArrayOfObject(data.lbs, unmarshalScalewayLb),
  } as ScalewayLbBackendConfig
}

const unmarshalScalewayS3BackendConfig = (
  data: unknown,
): ScalewayS3BackendConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ScalewayS3BackendConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    bucketName: data.bucket_name,
    bucketRegion: data.bucket_region,
    isWebsite: data.is_website,
  } as ScalewayS3BackendConfig
}

export const unmarshalBackendStage = (data: unknown): BackendStage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BackendStage' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    pipelineId: data.pipeline_id,
    scalewayLb: data.scaleway_lb
      ? unmarshalScalewayLbBackendConfig(data.scaleway_lb)
      : undefined,
    scalewayS3: data.scaleway_s3
      ? unmarshalScalewayS3BackendConfig(data.scaleway_s3)
      : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as BackendStage
}

export const unmarshalCacheStage = (data: unknown): CacheStage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CacheStage' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendStageId: data.backend_stage_id,
    createdAt: unmarshalDate(data.created_at),
    fallbackTtl: data.fallback_ttl,
    id: data.id,
    includeCookies: data.include_cookies,
    pipelineId: data.pipeline_id,
    routeStageId: data.route_stage_id,
    updatedAt: unmarshalDate(data.updated_at),
    wafStageId: data.waf_stage_id,
  } as CacheStage
}

export const unmarshalDNSStage = (data: unknown): DNSStage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DNSStage' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendStageId: data.backend_stage_id,
    cacheStageId: data.cache_stage_id,
    createdAt: unmarshalDate(data.created_at),
    fqdns: data.fqdns,
    id: data.id,
    pipelineId: data.pipeline_id,
    tlsStageId: data.tls_stage_id,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as DNSStage
}

const unmarshalPipelineError = (data: unknown): PipelineError => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PipelineError' failed as data isn't a dictionary.`,
    )
  }

  return {
    code: data.code,
    message: data.message,
    severity: data.severity,
    stage: data.stage,
    type: data.type,
  } as PipelineError
}

export const unmarshalPipeline = (data: unknown): Pipeline => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Pipeline' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    errors: unmarshalArrayOfObject(data.errors, unmarshalPipelineError),
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Pipeline
}

export const unmarshalRouteStage = (data: unknown): RouteStage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RouteStage' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    pipelineId: data.pipeline_id,
    updatedAt: unmarshalDate(data.updated_at),
    wafStageId: data.waf_stage_id,
  } as RouteStage
}

const unmarshalTLSSecret = (data: unknown): TLSSecret => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TLSSecret' failed as data isn't a dictionary.`,
    )
  }

  return {
    region: data.region,
    secretId: data.secret_id,
  } as TLSSecret
}

export const unmarshalTLSStage = (data: unknown): TLSStage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TLSStage' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendStageId: data.backend_stage_id,
    cacheStageId: data.cache_stage_id,
    certificateExpiresAt: unmarshalDate(data.certificate_expires_at),
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    managedCertificate: data.managed_certificate,
    pipelineId: data.pipeline_id,
    routeStageId: data.route_stage_id,
    secrets: unmarshalArrayOfObject(data.secrets, unmarshalTLSSecret),
    updatedAt: unmarshalDate(data.updated_at),
    wafStageId: data.waf_stage_id,
  } as TLSStage
}

export const unmarshalWafStage = (data: unknown): WafStage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'WafStage' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendStageId: data.backend_stage_id,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    mode: data.mode,
    paranoiaLevel: data.paranoia_level,
    pipelineId: data.pipeline_id,
    updatedAt: unmarshalDate(data.updated_at),
  } as WafStage
}

export const unmarshalPipelineStages = (data: unknown): PipelineStages => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PipelineStages' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendStages: unmarshalArrayOfObject(
      data.backend_stages,
      unmarshalBackendStage,
    ),
    cacheStages: unmarshalArrayOfObject(data.cache_stages, unmarshalCacheStage),
    dnsStages: unmarshalArrayOfObject(data.dns_stages, unmarshalDNSStage),
    pipeline: data.pipeline ? unmarshalPipeline(data.pipeline) : undefined,
    routeStages: unmarshalArrayOfObject(data.route_stages, unmarshalRouteStage),
    tlsStages: unmarshalArrayOfObject(data.tls_stages, unmarshalTLSStage),
    wafStages: unmarshalArrayOfObject(data.waf_stages, unmarshalWafStage),
  } as PipelineStages
}

export const unmarshalPurgeRequest = (data: unknown): PurgeRequest => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PurgeRequest' failed as data isn't a dictionary.`,
    )
  }

  return {
    all: data.all,
    assets: data.assets,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    pipelineId: data.pipeline_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as PurgeRequest
}

const unmarshalRuleHttpMatchPathFilter = (
  data: unknown,
): RuleHttpMatchPathFilter => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RuleHttpMatchPathFilter' failed as data isn't a dictionary.`,
    )
  }

  return {
    pathFilterType: data.path_filter_type,
    value: data.value,
  } as RuleHttpMatchPathFilter
}

const unmarshalRuleHttpMatch = (data: unknown): RuleHttpMatch => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RuleHttpMatch' failed as data isn't a dictionary.`,
    )
  }

  return {
    methodFilters: data.method_filters,
    pathFilter: data.path_filter
      ? unmarshalRuleHttpMatchPathFilter(data.path_filter)
      : undefined,
  } as RuleHttpMatch
}

const unmarshalRouteRule = (data: unknown): RouteRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RouteRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendStageId: data.backend_stage_id,
    position: data.position,
    routeStageId: data.route_stage_id,
    ruleHttpMatch: data.rule_http_match
      ? unmarshalRuleHttpMatch(data.rule_http_match)
      : undefined,
  } as RouteRule
}

export const unmarshalAddRouteRulesResponse = (
  data: unknown,
): AddRouteRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddRouteRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    routeRules: unmarshalArrayOfObject(data.route_rules, unmarshalRouteRule),
  } as AddRouteRulesResponse
}

export const unmarshalCheckDomainResponse = (
  data: unknown,
): CheckDomainResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckDomainResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    isValid: data.is_valid,
  } as CheckDomainResponse
}

export const unmarshalCheckLbOriginResponse = (
  data: unknown,
): CheckLbOriginResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckLbOriginResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    errorType: data.error_type,
    isValid: data.is_valid,
  } as CheckLbOriginResponse
}

export const unmarshalCheckPEMChainResponse = (
  data: unknown,
): CheckPEMChainResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckPEMChainResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    isValid: data.is_valid,
  } as CheckPEMChainResponse
}

const unmarshalPlanDetails = (data: unknown): PlanDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlanDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
    packageGb: data.package_gb,
    pipelineLimit: data.pipeline_limit,
    planName: data.plan_name,
    wafRequests: data.waf_requests,
  } as PlanDetails
}

const unmarshalPlanUsageDetails = (data: unknown): PlanUsageDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlanUsageDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
    planCost: data.plan_cost ? unmarshalMoney(data.plan_cost) : undefined,
  } as PlanUsageDetails
}

export const unmarshalGetBillingResponse = (
  data: unknown,
): GetBillingResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetBillingResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    currentPlan: data.current_plan
      ? unmarshalPlanDetails(data.current_plan)
      : undefined,
    currentPlanCacheUsage: data.current_plan_cache_usage,
    currentPlanWafUsage: data.current_plan_waf_usage,
    extraCacheCost: data.extra_cache_cost
      ? unmarshalMoney(data.extra_cache_cost)
      : undefined,
    extraCacheUsage: data.extra_cache_usage,
    extraPipelinesCost: data.extra_pipelines_cost
      ? unmarshalMoney(data.extra_pipelines_cost)
      : undefined,
    extraWafCost: data.extra_waf_cost
      ? unmarshalMoney(data.extra_waf_cost)
      : undefined,
    extraWafUsage: data.extra_waf_usage,
    pipelineNumber: data.pipeline_number,
    planCost: data.plan_cost ? unmarshalMoney(data.plan_cost) : undefined,
    plansUsageDetails: unmarshalMapOfObject(
      data.plans_usage_details,
      unmarshalPlanUsageDetails,
    ),
    totalCost: data.total_cost ? unmarshalMoney(data.total_cost) : undefined,
    wafAddOn: data.waf_add_on ? unmarshalMoney(data.waf_add_on) : undefined,
  } as GetBillingResponse
}

const unmarshalHeadStageResponseHeadStage = (
  data: unknown,
): HeadStageResponseHeadStage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HeadStageResponseHeadStage' failed as data isn't a dictionary.`,
    )
  }

  return {
    dnsStageId: data.dns_stage_id,
  } as HeadStageResponseHeadStage
}

export const unmarshalHeadStageResponse = (
  data: unknown,
): HeadStageResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HeadStageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    headStage: data.head_stage
      ? unmarshalHeadStageResponseHeadStage(data.head_stage)
      : undefined,
  } as HeadStageResponse
}

export const unmarshalListBackendStagesResponse = (
  data: unknown,
): ListBackendStagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBackendStagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    stages: unmarshalArrayOfObject(data.stages, unmarshalBackendStage),
    totalCount: data.total_count,
  } as ListBackendStagesResponse
}

export const unmarshalListCacheStagesResponse = (
  data: unknown,
): ListCacheStagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListCacheStagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    stages: unmarshalArrayOfObject(data.stages, unmarshalCacheStage),
    totalCount: data.total_count,
  } as ListCacheStagesResponse
}

export const unmarshalListDNSStagesResponse = (
  data: unknown,
): ListDNSStagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDNSStagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    stages: unmarshalArrayOfObject(data.stages, unmarshalDNSStage),
    totalCount: data.total_count,
  } as ListDNSStagesResponse
}

const unmarshalListHeadStagesResponseHeadStage = (
  data: unknown,
): ListHeadStagesResponseHeadStage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListHeadStagesResponseHeadStage' failed as data isn't a dictionary.`,
    )
  }

  return {
    dnsStageId: data.dns_stage_id,
  } as ListHeadStagesResponseHeadStage
}

export const unmarshalListHeadStagesResponse = (
  data: unknown,
): ListHeadStagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListHeadStagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    headStages: unmarshalArrayOfObject(
      data.head_stages,
      unmarshalListHeadStagesResponseHeadStage,
    ),
    totalCount: data.total_count,
  } as ListHeadStagesResponse
}

export const unmarshalListPipelinesResponse = (
  data: unknown,
): ListPipelinesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPipelinesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pipelines: unmarshalArrayOfObject(data.pipelines, unmarshalPipeline),
    totalCount: data.total_count,
  } as ListPipelinesResponse
}

export const unmarshalListPipelinesWithStagesResponse = (
  data: unknown,
): ListPipelinesWithStagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPipelinesWithStagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pipelines: unmarshalArrayOfObject(data.pipelines, unmarshalPipelineStages),
    totalCount: data.total_count,
  } as ListPipelinesWithStagesResponse
}

export const unmarshalListPlansResponse = (
  data: unknown,
): ListPlansResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPlansResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    plans: unmarshalArrayOfObject(data.plans, unmarshalPlanDetails),
    totalCount: data.total_count,
  } as ListPlansResponse
}

export const unmarshalListPurgeRequestsResponse = (
  data: unknown,
): ListPurgeRequestsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPurgeRequestsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    purgeRequests: unmarshalArrayOfObject(
      data.purge_requests,
      unmarshalPurgeRequest,
    ),
    totalCount: data.total_count,
  } as ListPurgeRequestsResponse
}

export const unmarshalListRouteRulesResponse = (
  data: unknown,
): ListRouteRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRouteRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    routeRules: unmarshalArrayOfObject(data.route_rules, unmarshalRouteRule),
    totalCount: data.total_count,
  } as ListRouteRulesResponse
}

export const unmarshalListRouteStagesResponse = (
  data: unknown,
): ListRouteStagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRouteStagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    stages: unmarshalArrayOfObject(data.stages, unmarshalRouteStage),
    totalCount: data.total_count,
  } as ListRouteStagesResponse
}

export const unmarshalListTLSStagesResponse = (
  data: unknown,
): ListTLSStagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTLSStagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    stages: unmarshalArrayOfObject(data.stages, unmarshalTLSStage),
    totalCount: data.total_count,
  } as ListTLSStagesResponse
}

export const unmarshalListWafStagesResponse = (
  data: unknown,
): ListWafStagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListWafStagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    stages: unmarshalArrayOfObject(data.stages, unmarshalWafStage),
    totalCount: data.total_count,
  } as ListWafStagesResponse
}

export const unmarshalPlan = (data: unknown): Plan => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Plan' failed as data isn't a dictionary.`,
    )
  }

  return {
    planName: data.plan_name,
  } as Plan
}

export const unmarshalSetRouteRulesResponse = (
  data: unknown,
): SetRouteRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetRouteRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    routeRules: unmarshalArrayOfObject(data.route_rules, unmarshalRouteRule),
  } as SetRouteRulesResponse
}

const marshalRuleHttpMatchPathFilter = (
  request: RuleHttpMatchPathFilter,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  path_filter_type: request.pathFilterType,
  value: request.value,
})

const marshalRuleHttpMatch = (
  request: RuleHttpMatch,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  method_filters: request.methodFilters,
  path_filter:
    request.pathFilter !== undefined
      ? marshalRuleHttpMatchPathFilter(request.pathFilter, defaults)
      : undefined,
})

export const marshalSetRouteRulesRequestRouteRule = (
  request: SetRouteRulesRequestRouteRule,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'rule_http_match',
      value:
        request.ruleHttpMatch !== undefined
          ? marshalRuleHttpMatch(request.ruleHttpMatch, defaults)
          : undefined,
    },
  ]),
  ...resolveOneOf([
    { param: 'backend_stage_id', value: request.backendStageId },
  ]),
})

export const marshalAddRouteRulesRequest = (
  request: AddRouteRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  route_rules:
    request.routeRules !== undefined
      ? request.routeRules.map(elt =>
          marshalSetRouteRulesRequestRouteRule(elt, defaults),
        )
      : undefined,
  ...resolveOneOf([
    { param: 'after_position', value: request.afterPosition },
    { param: 'before_position', value: request.beforePosition },
  ]),
})

export const marshalCheckDomainRequest = (
  request: CheckDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cname: request.cname,
  fqdn: request.fqdn,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalScalewayLb = (
  request: ScalewayLb,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  domain_name: request.domainName,
  frontend_id: request.frontendId,
  id: request.id,
  is_ssl: request.isSsl,
  zone: request.zone,
})

export const marshalCheckLbOriginRequest = (
  request: CheckLbOriginRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  lb:
    request.lb !== undefined
      ? marshalScalewayLb(request.lb, defaults)
      : undefined,
})

const marshalCheckPEMChainRequestSecretChain = (
  request: CheckPEMChainRequestSecretChain,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  secret_id: request.secretId,
  secret_region: request.secretRegion,
})

export const marshalCheckPEMChainRequest = (
  request: CheckPEMChainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  fqdn: request.fqdn,
  project_id: request.projectId ?? defaults.defaultProjectId,
  ...resolveOneOf<Record<string, unknown> | string>([
    {
      param: 'secret',
      value:
        request.secret !== undefined
          ? marshalCheckPEMChainRequestSecretChain(request.secret, defaults)
          : undefined,
    },
    { param: 'raw', value: request.raw },
  ]),
})

const marshalScalewayLbBackendConfig = (
  request: ScalewayLbBackendConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  lbs: request.lbs.map(elt => marshalScalewayLb(elt, defaults)),
})

const marshalScalewayS3BackendConfig = (
  request: ScalewayS3BackendConfig,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket_name: request.bucketName,
  bucket_region: request.bucketRegion,
  is_website: request.isWebsite,
})

export const marshalCreateBackendStageRequest = (
  request: CreateBackendStageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'scaleway_s3',
      value:
        request.scalewayS3 !== undefined
          ? marshalScalewayS3BackendConfig(request.scalewayS3, defaults)
          : undefined,
    },
    {
      param: 'scaleway_lb',
      value:
        request.scalewayLb !== undefined
          ? marshalScalewayLbBackendConfig(request.scalewayLb, defaults)
          : undefined,
    },
  ]),
})

export const marshalCreateCacheStageRequest = (
  request: CreateCacheStageRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  fallback_ttl: request.fallbackTtl,
  include_cookies: request.includeCookies,
  ...resolveOneOf([
    { param: 'backend_stage_id', value: request.backendStageId },
    { param: 'waf_stage_id', value: request.wafStageId },
    { param: 'route_stage_id', value: request.routeStageId },
  ]),
})

export const marshalCreateDNSStageRequest = (
  request: CreateDNSStageRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  fqdns: request.fqdns,
  ...resolveOneOf([
    { param: 'tls_stage_id', value: request.tlsStageId },
    { param: 'cache_stage_id', value: request.cacheStageId },
    { param: 'backend_stage_id', value: request.backendStageId },
  ]),
})

export const marshalCreatePipelineRequest = (
  request: CreatePipelineRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalCreatePurgeRequestRequest = (
  request: CreatePurgeRequestRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  pipeline_id: request.pipelineId,
  ...resolveOneOf<unknown[] | boolean>([
    { param: 'assets', value: request.assets },
    { param: 'all', value: request.all },
  ]),
})

export const marshalCreateRouteStageRequest = (
  request: CreateRouteStageRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([{ param: 'waf_stage_id', value: request.wafStageId }]),
})

const marshalTLSSecret = (
  request: TLSSecret,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  region: request.region,
  secret_id: request.secretId,
})

export const marshalCreateTLSStageRequest = (
  request: CreateTLSStageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  managed_certificate: request.managedCertificate,
  secrets:
    request.secrets !== undefined
      ? request.secrets.map(elt => marshalTLSSecret(elt, defaults))
      : undefined,
  ...resolveOneOf([
    { param: 'cache_stage_id', value: request.cacheStageId },
    { param: 'backend_stage_id', value: request.backendStageId },
    { param: 'route_stage_id', value: request.routeStageId },
    { param: 'waf_stage_id', value: request.wafStageId },
  ]),
})

export const marshalCreateWafStageRequest = (
  request: CreateWafStageRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  mode: request.mode,
  paranoia_level: request.paranoiaLevel,
  ...resolveOneOf([
    { param: 'backend_stage_id', value: request.backendStageId },
  ]),
})

export const marshalSelectPlanRequest = (
  request: SelectPlanRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  plan_name: request.planName,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalSetHeadStageRequestAddNewHeadStage = (
  request: SetHeadStageRequestAddNewHeadStage,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  new_stage_id: request.newStageId,
})

const marshalSetHeadStageRequestRemoveHeadStage = (
  request: SetHeadStageRequestRemoveHeadStage,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  remove_stage_id: request.removeStageId,
})

const marshalSetHeadStageRequestSwapHeadStage = (
  request: SetHeadStageRequestSwapHeadStage,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  current_stage_id: request.currentStageId,
  new_stage_id: request.newStageId,
})

export const marshalSetHeadStageRequest = (
  request: SetHeadStageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'add_new_head_stage',
      value:
        request.addNewHeadStage !== undefined
          ? marshalSetHeadStageRequestAddNewHeadStage(
              request.addNewHeadStage,
              defaults,
            )
          : undefined,
    },
    {
      param: 'remove_head_stage',
      value:
        request.removeHeadStage !== undefined
          ? marshalSetHeadStageRequestRemoveHeadStage(
              request.removeHeadStage,
              defaults,
            )
          : undefined,
    },
    {
      param: 'swap_head_stage',
      value:
        request.swapHeadStage !== undefined
          ? marshalSetHeadStageRequestSwapHeadStage(
              request.swapHeadStage,
              defaults,
            )
          : undefined,
    },
  ]),
})

export const marshalSetRouteRulesRequest = (
  request: SetRouteRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  route_rules:
    request.routeRules !== undefined
      ? request.routeRules.map(elt =>
          marshalSetRouteRulesRequestRouteRule(elt, defaults),
        )
      : undefined,
})

export const marshalUpdateBackendStageRequest = (
  request: UpdateBackendStageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  pipeline_id: request.pipelineId,
  ...resolveOneOf([
    {
      param: 'scaleway_s3',
      value:
        request.scalewayS3 !== undefined
          ? marshalScalewayS3BackendConfig(request.scalewayS3, defaults)
          : undefined,
    },
    {
      param: 'scaleway_lb',
      value:
        request.scalewayLb !== undefined
          ? marshalScalewayLbBackendConfig(request.scalewayLb, defaults)
          : undefined,
    },
  ]),
})

export const marshalUpdateCacheStageRequest = (
  request: UpdateCacheStageRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  fallback_ttl: request.fallbackTtl,
  include_cookies: request.includeCookies,
  ...resolveOneOf([
    { param: 'backend_stage_id', value: request.backendStageId },
    { param: 'waf_stage_id', value: request.wafStageId },
    { param: 'route_stage_id', value: request.routeStageId },
  ]),
})

export const marshalUpdateDNSStageRequest = (
  request: UpdateDNSStageRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  fqdns: request.fqdns,
  ...resolveOneOf([
    { param: 'tls_stage_id', value: request.tlsStageId },
    { param: 'cache_stage_id', value: request.cacheStageId },
    { param: 'backend_stage_id', value: request.backendStageId },
  ]),
})

export const marshalUpdatePipelineRequest = (
  request: UpdatePipelineRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
})

export const marshalUpdateRouteStageRequest = (
  request: UpdateRouteStageRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([{ param: 'waf_stage_id', value: request.wafStageId }]),
})

const marshalTLSSecretsConfig = (
  request: TLSSecretsConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  tls_secrets: request.tlsSecrets.map(elt => marshalTLSSecret(elt, defaults)),
})

export const marshalUpdateTLSStageRequest = (
  request: UpdateTLSStageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  managed_certificate: request.managedCertificate,
  tls_secrets_config:
    request.tlsSecretsConfig !== undefined
      ? marshalTLSSecretsConfig(request.tlsSecretsConfig, defaults)
      : undefined,
  ...resolveOneOf([
    { param: 'cache_stage_id', value: request.cacheStageId },
    { param: 'backend_stage_id', value: request.backendStageId },
    { param: 'route_stage_id', value: request.routeStageId },
    { param: 'waf_stage_id', value: request.wafStageId },
  ]),
})

export const marshalUpdateWafStageRequest = (
  request: UpdateWafStageRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  mode: request.mode,
  paranoia_level: request.paranoiaLevel,
  ...resolveOneOf([
    { param: 'backend_stage_id', value: request.backendStageId },
  ]),
})
