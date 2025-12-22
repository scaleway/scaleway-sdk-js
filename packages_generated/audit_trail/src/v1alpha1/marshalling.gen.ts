
import type { DefaultValues, } from '@scaleway/sdk-client'
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type {
  AccountContractSignatureInfo,
  AccountContractSignatureInfoAccountContractInfo,
  AccountOrganizationInfo,
  AccountProjectInfo,
  AccountUserInfo,
  AppleSiliconServerInfo,
  AuthenticationEvent,
  BaremetalServerInfo,
  BaremetalSettingInfo,
  CreateExportJobRequest,
  EdgeServicesBackendStageInfo,
  EdgeServicesCacheStageInfo,
  EdgeServicesDNSStageInfo,
  EdgeServicesPipelineInfo,
  EdgeServicesPlanInfo,
  EdgeServicesRouteRulesInfo,
  EdgeServicesRouteStageInfo,
  EdgeServicesTLSStageInfo,
  EdgeServicesWAFStageInfo,
  Event,
  EventPrincipal,
  ExportJob,
  ExportJobS3,
  ExportJobStatus,
  InstanceServerInfo,
  IpamIpInfo,
  KeyManagerKeyInfo,
  KubernetesACLInfo,
  KubernetesClusterInfo,
  KubernetesNodeInfo,
  KubernetesPoolInfo,
  ListAuthenticationEventsResponse,
  ListCombinedEventsResponse,
  ListCombinedEventsResponseCombinedEvent,
  ListEventsResponse,
  ListExportJobsResponse,
  ListProductsResponse,
  LoadBalancerAclInfo,
  LoadBalancerBackendInfo,
  LoadBalancerCertificateInfo,
  LoadBalancerFrontendInfo,
  LoadBalancerIpInfo,
  LoadBalancerLbInfo,
  LoadBalancerRouteInfo,
  Product,
  ProductService,
  Resource,
  SecretManagerSecretInfo,
  SecretManagerSecretVersionInfo,
  SystemEvent,
} from './types.gen.js'

const unmarshalExportJobS3 = (data: unknown): ExportJobS3 => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExportJobS3' failed as data isn't a dictionary.`,
    )
  }

  return {
    bucket: data.bucket,
    prefix: data.prefix,
    projectId: data.project_id,
    region: data.region,
  } as ExportJobS3
}

const unmarshalExportJobStatus = (data: unknown): ExportJobStatus => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExportJobStatus' failed as data isn't a dictionary.`,
    )
  }

  return {
    code: data.code,
    message: data.message,
  } as ExportJobStatus
}

export const unmarshalExportJob = (data: unknown): ExportJob => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExportJob' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    lastRunAt: unmarshalDate(data.last_run_at),
    lastStatus: data.last_status ? unmarshalExportJobStatus(data.last_status) : undefined,
    name: data.name,
    organizationId: data.organization_id,
    s3: data.s3 ? unmarshalExportJobS3(data.s3) : undefined,
    tags: data.tags,
  } as ExportJob
}

const unmarshalAccountContractSignatureInfoAccountContractInfo = (data: unknown): AccountContractSignatureInfoAccountContractInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccountContractSignatureInfoAccountContractInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    version: data.version,
  } as AccountContractSignatureInfoAccountContractInfo
}

const unmarshalAccountContractSignatureInfo = (data: unknown): AccountContractSignatureInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccountContractSignatureInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    contract: data.contract ? unmarshalAccountContractSignatureInfoAccountContractInfo(data.contract) : undefined,
    expiresAt: unmarshalDate(data.expires_at),
    signedAt: unmarshalDate(data.signed_at),
    signedByAccountRootUserId: data.signed_by_account_root_user_id,
  } as AccountContractSignatureInfo
}

const unmarshalAccountOrganizationInfo = (data: unknown): AccountOrganizationInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccountOrganizationInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as AccountOrganizationInfo
}

const unmarshalAccountProjectInfo = (data: unknown): AccountProjectInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccountProjectInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
  } as AccountProjectInfo
}

const unmarshalAccountUserInfo = (data: unknown): AccountUserInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccountUserInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    email: data.email,
    phoneNumber: data.phone_number,
  } as AccountUserInfo
}

const unmarshalAppleSiliconServerInfo = (data: unknown): AppleSiliconServerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AppleSiliconServerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as AppleSiliconServerInfo
}

const unmarshalBaremetalServerInfo = (data: unknown): BaremetalServerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BaremetalServerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    tags: data.tags,
  } as BaremetalServerInfo
}

const unmarshalBaremetalSettingInfo = (data: unknown): BaremetalSettingInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BaremetalSettingInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    type: data.type,
  } as BaremetalSettingInfo
}

const unmarshalEdgeServicesBackendStageInfo = (data: unknown): EdgeServicesBackendStageInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesBackendStageInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    pipelineId: data.pipeline_id,
  } as EdgeServicesBackendStageInfo
}

const unmarshalEdgeServicesCacheStageInfo = (data: unknown): EdgeServicesCacheStageInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesCacheStageInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    pipelineId: data.pipeline_id,
  } as EdgeServicesCacheStageInfo
}

const unmarshalEdgeServicesDNSStageInfo = (data: unknown): EdgeServicesDNSStageInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesDNSStageInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    pipelineId: data.pipeline_id,
  } as EdgeServicesDNSStageInfo
}

const unmarshalEdgeServicesPipelineInfo = (data: unknown): EdgeServicesPipelineInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesPipelineInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
  } as EdgeServicesPipelineInfo
}

const unmarshalEdgeServicesPlanInfo = (data: unknown): EdgeServicesPlanInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesPlanInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as EdgeServicesPlanInfo
}

const unmarshalEdgeServicesRouteRulesInfo = (data: unknown): EdgeServicesRouteRulesInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesRouteRulesInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    routeStageId: data.route_stage_id,
  } as EdgeServicesRouteRulesInfo
}

const unmarshalEdgeServicesRouteStageInfo = (data: unknown): EdgeServicesRouteStageInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesRouteStageInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    pipelineId: data.pipeline_id,
  } as EdgeServicesRouteStageInfo
}

const unmarshalEdgeServicesTLSStageInfo = (data: unknown): EdgeServicesTLSStageInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesTLSStageInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    pipelineId: data.pipeline_id,
  } as EdgeServicesTLSStageInfo
}

const unmarshalEdgeServicesWAFStageInfo = (data: unknown): EdgeServicesWAFStageInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EdgeServicesWAFStageInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    pipelineId: data.pipeline_id,
  } as EdgeServicesWAFStageInfo
}

const unmarshalInstanceServerInfo = (data: unknown): InstanceServerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceServerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
  } as InstanceServerInfo
}

const unmarshalIpamIpInfo = (data: unknown): IpamIpInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'IpamIpInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
  } as IpamIpInfo
}

const unmarshalKeyManagerKeyInfo = (data: unknown): KeyManagerKeyInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KeyManagerKeyInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as KeyManagerKeyInfo
}

const unmarshalKubernetesACLInfo = (data: unknown): KubernetesACLInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KubernetesACLInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as KubernetesACLInfo
}

const unmarshalKubernetesClusterInfo = (data: unknown): KubernetesClusterInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KubernetesClusterInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as KubernetesClusterInfo
}

const unmarshalKubernetesNodeInfo = (data: unknown): KubernetesNodeInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KubernetesNodeInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as KubernetesNodeInfo
}

const unmarshalKubernetesPoolInfo = (data: unknown): KubernetesPoolInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KubernetesPoolInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as KubernetesPoolInfo
}

const unmarshalLoadBalancerAclInfo = (data: unknown): LoadBalancerAclInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LoadBalancerAclInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    frontendId: data.frontend_id,
  } as LoadBalancerAclInfo
}

const unmarshalLoadBalancerBackendInfo = (data: unknown): LoadBalancerBackendInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LoadBalancerBackendInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    lbId: data.lb_id,
    name: data.name,
  } as LoadBalancerBackendInfo
}

const unmarshalLoadBalancerCertificateInfo = (data: unknown): LoadBalancerCertificateInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LoadBalancerCertificateInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    lbId: data.lb_id,
    name: data.name,
  } as LoadBalancerCertificateInfo
}

const unmarshalLoadBalancerFrontendInfo = (data: unknown): LoadBalancerFrontendInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LoadBalancerFrontendInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    lbId: data.lb_id,
    name: data.name,
  } as LoadBalancerFrontendInfo
}

const unmarshalLoadBalancerIpInfo = (data: unknown): LoadBalancerIpInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LoadBalancerIpInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    ipAddress: data.ip_address,
    lbId: data.lb_id,
  } as LoadBalancerIpInfo
}

const unmarshalLoadBalancerLbInfo = (data: unknown): LoadBalancerLbInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LoadBalancerLbInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
  } as LoadBalancerLbInfo
}

const unmarshalLoadBalancerRouteInfo = (data: unknown): LoadBalancerRouteInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LoadBalancerRouteInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendId: data.backend_id,
    frontendId: data.frontend_id,
  } as LoadBalancerRouteInfo
}

const unmarshalSecretManagerSecretInfo = (data: unknown): SecretManagerSecretInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretManagerSecretInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    keyId: data.key_id,
    path: data.path,
  } as SecretManagerSecretInfo
}

const unmarshalSecretManagerSecretVersionInfo = (data: unknown): SecretManagerSecretVersionInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretManagerSecretVersionInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    revision: data.revision,
  } as SecretManagerSecretVersionInfo
}

export const unmarshalResource = (data: unknown): Resource => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Resource' failed as data isn't a dictionary.`,
    )
  }

  return {
    accountContractSignatureInfo: data.account_contract_signature_info ? unmarshalAccountContractSignatureInfo(data.account_contract_signature_info) : undefined,
    accountOrganizationInfo: data.account_organization_info ? unmarshalAccountOrganizationInfo(data.account_organization_info) : undefined,
    accountProjectInfo: data.account_project_info ? unmarshalAccountProjectInfo(data.account_project_info) : undefined,
    accountUserInfo: data.account_user_info ? unmarshalAccountUserInfo(data.account_user_info) : undefined,
    appleSiliconServerInfo: data.apple_silicon_server_info ? unmarshalAppleSiliconServerInfo(data.apple_silicon_server_info) : undefined,
    baremetalServerInfo: data.baremetal_server_info ? unmarshalBaremetalServerInfo(data.baremetal_server_info) : undefined,
    baremetalSettingInfo: data.baremetal_setting_info ? unmarshalBaremetalSettingInfo(data.baremetal_setting_info) : undefined,
    createdAt: unmarshalDate(data.created_at),
    deletedAt: unmarshalDate(data.deleted_at),
    edgeServicesBackendStageInfo: data.edge_services_backend_stage_info ? unmarshalEdgeServicesBackendStageInfo(data.edge_services_backend_stage_info) : undefined,
    edgeServicesCacheStageInfo: data.edge_services_cache_stage_info ? unmarshalEdgeServicesCacheStageInfo(data.edge_services_cache_stage_info) : undefined,
    edgeServicesDnsStageInfo: data.edge_services_dns_stage_info ? unmarshalEdgeServicesDNSStageInfo(data.edge_services_dns_stage_info) : undefined,
    edgeServicesPipelineInfo: data.edge_services_pipeline_info ? unmarshalEdgeServicesPipelineInfo(data.edge_services_pipeline_info) : undefined,
    edgeServicesPlanInfo: data.edge_services_plan_info ? unmarshalEdgeServicesPlanInfo(data.edge_services_plan_info) : undefined,
    edgeServicesRouteRulesInfo: data.edge_services_route_rules_info ? unmarshalEdgeServicesRouteRulesInfo(data.edge_services_route_rules_info) : undefined,
    edgeServicesRouteStageInfo: data.edge_services_route_stage_info ? unmarshalEdgeServicesRouteStageInfo(data.edge_services_route_stage_info) : undefined,
    edgeServicesTlsStageInfo: data.edge_services_tls_stage_info ? unmarshalEdgeServicesTLSStageInfo(data.edge_services_tls_stage_info) : undefined,
    edgeServicesWafStageInfo: data.edge_services_waf_stage_info ? unmarshalEdgeServicesWAFStageInfo(data.edge_services_waf_stage_info) : undefined,
    id: data.id,
    instanceServerInfo: data.instance_server_info ? unmarshalInstanceServerInfo(data.instance_server_info) : undefined,
    ipamIpInfo: data.ipam_ip_info ? unmarshalIpamIpInfo(data.ipam_ip_info) : undefined,
    keyManagerKeyInfo: data.key_manager_key_info ? unmarshalKeyManagerKeyInfo(data.key_manager_key_info) : undefined,
    keymKeyInfo: data.keym_key_info ? unmarshalKeyManagerKeyInfo(data.keym_key_info) : undefined,
    kubeAclInfo: data.kube_acl_info ? unmarshalKubernetesACLInfo(data.kube_acl_info) : undefined,
    kubeClusterInfo: data.kube_cluster_info ? unmarshalKubernetesClusterInfo(data.kube_cluster_info) : undefined,
    kubeNodeInfo: data.kube_node_info ? unmarshalKubernetesNodeInfo(data.kube_node_info) : undefined,
    kubePoolInfo: data.kube_pool_info ? unmarshalKubernetesPoolInfo(data.kube_pool_info) : undefined,
    loadBalancerAclInfo: data.load_balancer_acl_info ? unmarshalLoadBalancerAclInfo(data.load_balancer_acl_info) : undefined,
    loadBalancerBackendInfo: data.load_balancer_backend_info ? unmarshalLoadBalancerBackendInfo(data.load_balancer_backend_info) : undefined,
    loadBalancerCertificateInfo: data.load_balancer_certificate_info ? unmarshalLoadBalancerCertificateInfo(data.load_balancer_certificate_info) : undefined,
    loadBalancerFrontendInfo: data.load_balancer_frontend_info ? unmarshalLoadBalancerFrontendInfo(data.load_balancer_frontend_info) : undefined,
    loadBalancerIpInfo: data.load_balancer_ip_info ? unmarshalLoadBalancerIpInfo(data.load_balancer_ip_info) : undefined,
    loadBalancerLbInfo: data.load_balancer_lb_info ? unmarshalLoadBalancerLbInfo(data.load_balancer_lb_info) : undefined,
    loadBalancerRouteInfo: data.load_balancer_route_info ? unmarshalLoadBalancerRouteInfo(data.load_balancer_route_info) : undefined,
    name: data.name,
    secmSecretInfo: data.secm_secret_info ? unmarshalSecretManagerSecretInfo(data.secm_secret_info) : undefined,
    secmSecretVersionInfo: data.secm_secret_version_info ? unmarshalSecretManagerSecretVersionInfo(data.secm_secret_version_info) : undefined,
    secretManagerSecretInfo: data.secret_manager_secret_info ? unmarshalSecretManagerSecretInfo(data.secret_manager_secret_info) : undefined,
    secretManagerVersionInfo: data.secret_manager_version_info ? unmarshalSecretManagerSecretVersionInfo(data.secret_manager_version_info) : undefined,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as Resource
}

const unmarshalAuthenticationEvent = (data: unknown): AuthenticationEvent => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AuthenticationEvent' failed as data isn't a dictionary.`,
    )
  }

  return {
    countryCode: data.country_code ? data.country_code : undefined,
    failureReason: data.failure_reason ? data.failure_reason : undefined,
    id: data.id,
    method: data.method,
    mfaType: data.mfa_type ? data.mfa_type : undefined,
    organizationId: data.organization_id,
    origin: data.origin,
    recordedAt: unmarshalDate(data.recorded_at),
    resources: unmarshalArrayOfObject(data.resources, unmarshalResource),
    result: data.result,
    sourceIp: data.source_ip,
    userAgent: data.user_agent,
  } as AuthenticationEvent
}

export const unmarshalListAuthenticationEventsResponse = (data: unknown): ListAuthenticationEventsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAuthenticationEventsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    events: unmarshalArrayOfObject(data.events, unmarshalAuthenticationEvent),
    nextPageToken: data.next_page_token,
  } as ListAuthenticationEventsResponse
}

const unmarshalEventPrincipal = (data: unknown): EventPrincipal => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EventPrincipal' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
  } as EventPrincipal
}

export const unmarshalEvent = (data: unknown): Event => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Event' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    locality: data.locality,
    methodName: data.method_name,
    organizationId: data.organization_id,
    principal: data.principal ? unmarshalEventPrincipal(data.principal) : undefined,
    productName: data.product_name,
    projectId: data.project_id,
    recordedAt: unmarshalDate(data.recorded_at),
    requestBody: data.request_body,
    requestId: data.request_id,
    resources: unmarshalArrayOfObject(data.resources, unmarshalResource),
    serviceName: data.service_name,
    sourceIp: data.source_ip,
    statusCode: data.status_code,
    userAgent: data.user_agent,
  } as Event
}

const unmarshalSystemEvent = (data: unknown): SystemEvent => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SystemEvent' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    kind: data.kind,
    locality: data.locality,
    organizationId: data.organization_id,
    productName: data.product_name,
    projectId: data.project_id,
    recordedAt: unmarshalDate(data.recorded_at),
    resources: unmarshalArrayOfObject(data.resources, unmarshalResource),
    source: data.source,
    systemName: data.system_name,
  } as SystemEvent
}

const unmarshalListCombinedEventsResponseCombinedEvent = (data: unknown): ListCombinedEventsResponseCombinedEvent => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListCombinedEventsResponseCombinedEvent' failed as data isn't a dictionary.`,
    )
  }

  return {
    api: data.api ? unmarshalEvent(data.api) : undefined,
    auth: data.auth ? unmarshalAuthenticationEvent(data.auth) : undefined,
    system: data.system ? unmarshalSystemEvent(data.system) : undefined,
  } as ListCombinedEventsResponseCombinedEvent
}

export const unmarshalListCombinedEventsResponse = (data: unknown): ListCombinedEventsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListCombinedEventsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    events: unmarshalArrayOfObject(data.events, unmarshalListCombinedEventsResponseCombinedEvent),
    nextPageToken: data.next_page_token,
  } as ListCombinedEventsResponse
}

export const unmarshalListEventsResponse = (data: unknown): ListEventsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListEventsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    events: unmarshalArrayOfObject(data.events, unmarshalEvent),
    nextPageToken: data.next_page_token,
  } as ListEventsResponse
}

export const unmarshalListExportJobsResponse = (data: unknown): ListExportJobsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListExportJobsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    exportJobs: unmarshalArrayOfObject(data.export_jobs, unmarshalExportJob),
    totalCount: data.total_count,
  } as ListExportJobsResponse
}

const unmarshalProductService = (data: unknown): ProductService => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ProductService' failed as data isn't a dictionary.`,
    )
  }

  return {
    methods: data.methods,
    name: data.name,
  } as ProductService
}

const unmarshalProduct = (data: unknown): Product => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Product' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    services: unmarshalArrayOfObject(data.services, unmarshalProductService),
    title: data.title,
  } as Product
}

export const unmarshalListProductsResponse = (data: unknown): ListProductsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListProductsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    products: unmarshalArrayOfObject(data.products, unmarshalProduct),
    totalCount: data.total_count,
  } as ListProductsResponse
}

const marshalExportJobS3 = (
  request: ExportJobS3,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket: request.bucket,
  prefix: request.prefix,
  project_id: request.projectId,
  region: request.region,
})

export const marshalCreateExportJobRequest = (
  request: CreateExportJobRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
  tags: request.tags,  
  ...resolveOneOf([
    {param: 's3',
      value: (request.s3 !== undefined) ? marshalExportJobS3(request.s3, defaults)
      : undefined,
    },
  ]),
})
