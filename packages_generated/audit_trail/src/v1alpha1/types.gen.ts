// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'
import type {CountryCode as StdCountryCode,} from '@scaleway/sdk-std'


export type Action =
  | 'unknown_action'
  | 'create'
  | 'update'
  | 'delete'

export type AlertRuleStatus =
  | 'unknown_status'
  | 'enabled'
  | 'disabled'
  | 'enabling'
  | 'disabling'

export type AuthenticationEventFailureReason =
  | 'unknown_failure_reason'
  | 'invalid_mfa'
  | 'invalid_password'
  | 'invalid_captcha'
  | 'invalid_authentication_code'
  | 'invalid_passkey'
  | 'passkey_uv_not_met'
  | 'passkey_uv_not_verified'
  | 'expired_session'
  | 'authentication_code_required'
  | 'mfa_required'

export type AuthenticationEventMFAType =
  | 'unknown_mfa_type'
  | 'totp'
  | 'webauthn'

export type AuthenticationEventMethod =
  | 'unknown_method'
  | 'password'
  | 'authentication_code'
  | 'oauth2'
  | 'saml'
  | 'passkey'

export type AuthenticationEventOrigin =
  | 'unknown_origin'
  | 'public_api'
  | 'admin_api'

export type AuthenticationEventResult =
  | 'unknown_result'
  | 'success'
  | 'failure'

export type CustomAlertRuleFieldFieldType =
  | 'unknown_field_type'
  | 'field_type_string'
  | 'field_type_int'

export type CustomAlertRuleFieldIntOperator =
  | 'unknown_int_operator'
  | 'int_equal'
  | 'int_not_equal'
  | 'int_less_than_or_equal'
  | 'int_less_than'
  | 'int_greater_than_or_equal'
  | 'int_greater_than'

export type CustomAlertRuleFieldStringOperator =
  | 'unknown_string_operator'
  | 'string_contains'
  | 'string_matches'
  | 'string_starts_with'
  | 'string_ends_with'
  | 'string_equal'
  | 'string_not_equal'

export type CustomAlertRuleSeverity =
  | 'unknown_severity'
  | 'info'
  | 'error'
  | 'warning'
  | 'critical'

export type CustomAlertRuleStatus =
  | 'unknown_status'
  | 'enabled'
  | 'disabled'
  | 'enabling'
  | 'disabling'

export type ExportJobStatusCode =
  | 'unknown_code'
  | 'success'
  | 'failure'

export type ListAuthenticationEventsRequestOrderBy =
  | 'recorded_at_desc'
  | 'recorded_at_asc'

export type ListCombinedEventsRequestOrderBy =
  | 'recorded_at_desc'
  | 'recorded_at_asc'

export type ListEventsRequestOrderBy =
  | 'recorded_at_desc'
  | 'recorded_at_asc'

export type ListExportJobsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'

export type ListSystemEventsRequestOrderBy =
  | 'recorded_at_desc'
  | 'recorded_at_asc'

export type ResourceType =
  | 'unknown_type'
  | 'secm_secret'
  | 'secm_secret_version'
  | 'kube_cluster'
  | 'kube_pool'
  | 'kube_node'
  | 'kube_acl'
  | 'keym_key'
  | 'iam_user'
  | 'iam_application'
  | 'iam_group'
  | 'iam_policy'
  | 'iam_api_key'
  | 'iam_ssh_key'
  | 'iam_rule'
  | 'iam_saml'
  | 'iam_saml_certificate'
  | 'iam_scim'
  | 'iam_scim_token'
  | 'secret_manager_secret'
  | 'secret_manager_version'
  | 'key_manager_key'
  | 'account_user'
  | 'account_organization'
  | 'account_project'
  | 'account_contract_signature'
  | 'instance_dedicated_pool'
  | 'instance_server'
  | 'instance_placement_group'
  | 'instance_security_group'
  | 'instance_volume'
  | 'instance_snapshot'
  | 'instance_image'
  | 'instance_template'
  | 'instance_private_network_interface'
  | 'apple_silicon_server'
  | 'baremetal_server'
  | 'baremetal_setting'
  | 'ipam_ip'
  | 'sbs_volume'
  | 'sbs_snapshot'
  | 'load_balancer_lb'
  | 'load_balancer_ip'
  | 'load_balancer_frontend'
  | 'load_balancer_backend'
  | 'load_balancer_route'
  | 'load_balancer_acl'
  | 'load_balancer_certificate'
  | 'sfs_filesystem'
  | 'vpc_private_network'
  | 'vpc_vpc'
  | 'vpc_subnet'
  | 'vpc_route'
  | 'vpc_acl'
  | 'vpc_connector'
  | 'vpc_ingress_rule'
  | 'edge_services_plan'
  | 'edge_services_pipeline'
  | 'edge_services_vpc_endpoint'
  | 'edge_services_dns_stage'
  | 'edge_services_tls_stage'
  | 'edge_services_cache_stage'
  | 'edge_services_route_stage'
  | 'edge_services_route_rules'
  | 'edge_services_waf_stage'
  | 'edge_services_backend_stage'
  | 's2s_vpn_gateway'
  | 's2s_customer_gateway'
  | 's2s_routing_policy'
  | 's2s_connection'
  | 'vpc_gw_gateway'
  | 'vpc_gw_gateway_network'
  | 'vpc_gw_dhcp'
  | 'vpc_gw_dhcp_entry'
  | 'vpc_gw_pat_rule'
  | 'vpc_gw_ip'
  | 'audit_trail_export_job'
  | 'rdb_instance'
  | 'rdb_instance_backup'
  | 'rdb_instance_endpoint'
  | 'rdb_instance_logs'
  | 'rdb_instance_read_replica'
  | 'rdb_instance_snapshot'
  | 'mongodb_instance'
  | 'mongodb_instance_snapshot'
  | 'mongodb_instance_endpoint'
  | 'mongodb_instance_maintenance'
  | 'apple_silicon_runner'
  | 'audit_trail_alert_rule'
  | 'audit_trail_custom_alert_rule'
  | 'dtwh_deployment'
  | 'dtwh_deployment_endpoint'
  | 'dtwh_deployment_database'
  | 'dtwh_deployment_user'
  | 'ssdb_database'
  | 'ssdb_database_backup'
  | 'observability_datasource'
  | 'observability_token'
  | 'observability_exporter'
  | 'ili_partner'
  | 'ili_connection'
  | 'ili_link'
  | 'ili_routing_policy'
  | 'autoscaling_group'
  | 'gapi_dedicated_deployment'
  | 'gapi_dedicated_model'
  | 'serverless_containers_namespace'
  | 'serverless_containers_container'
  | 'serverless_containers_domain'
  | 'serverless_containers_trigger'
  | 'serverless_functions_namespace'
  | 'serverless_functions_function'
  | 'serverless_functions_domain'
  | 'serverless_functions_cron'
  | 'serverless_functions_trigger'
  | 'wofl_workflow_definition'
  | 'wofl_workflow_run'
  | 'wofl_workflow_version'
  | 'kafk_cluster'
  | 'annotations_key'
  | 'annotations_value'
  | 'annotations_binding'

export type RunStatus =
  | 'unknown_run_status'
  | 'initialized'
  | 'validated'
  | 'queued'
  | 'running'
  | 'succeeded'
  | 'failed'
  | 'interrupting'
  | 'interrupted'
  | 'pausing'
  | 'paused'

export type ServerlessContainersTriggerInfoSourceType =
  | 'unknown_source_type'
  | 'cron'
  | 'sqs'
  | 'nats'

export type ServerlessFunctionsTriggerInfoInputType =
  | 'unknown_input_type'
  | 'scw_sqs'
  | 'scw_nats'

export type SystemEventKind =
  | 'unknown_kind'
  | 'cron'
  | 'notification'

export interface AccountContractSignatureInfoAccountContractInfo {
  id: string
  type: string
  name: string
  version: number
  createdAt?: Date | null
  updatedAt?: Date | null
}


export interface AccountContractSignatureInfo {
  signedAt?: Date | null
  signedByAccountRootUserId: string
  expiresAt?: Date | null
  contract?: AccountContractSignatureInfoAccountContractInfo | null
}


export interface AccountOrganizationInfo {
}


export interface AccountProjectInfo {
  description: string
}


export interface AccountUserInfo {
  email: string
  phoneNumber?: string | null
}


export interface AnnotationsBindingInfo {
  targetSrn: string
  valueId: string
  valueName: string
  keyId: string
  keyName: string
}


export interface AnnotationsValueInfo {
  keyId: string
  keyName: string
}


export interface AppleSiliconRunnerInfo {
  id: string
  name: string
}


export interface AppleSiliconServerInfo {
  id: string
  name: string
}


export interface AuditTrailAlertRuleInfo {
}


export interface AuditTrailCustomAlertRuleInfo {
}


export interface AuditTrailExportJobInfo {
}


export interface BaremetalServerInfo {
  description: string
  tags: string[]
}


export interface BaremetalSettingInfo {
  type: string
}


export interface EdgeServicesBackendStageInfo {
  pipelineId?: string | null
}


export interface EdgeServicesCacheStageInfo {
  pipelineId?: string | null
}


export interface EdgeServicesDNSStageInfo {
  pipelineId?: string | null
}


export interface EdgeServicesPipelineInfo {
  name: string
}


export interface EdgeServicesPlanInfo {
}


export interface EdgeServicesRouteRulesInfo {
  routeStageId: string
}


export interface EdgeServicesRouteStageInfo {
  pipelineId?: string | null
}


export interface EdgeServicesTLSStageInfo {
  pipelineId?: string | null
}


export interface EdgeServicesVPCEndpointInfo {
  privateNetworkId: string
}


export interface EdgeServicesWAFStageInfo {
  pipelineId?: string | null
}


export interface InstancePrivateNetworkInterfaceInfo {
  privateNetworkId: string
  serverId?: string | null
  securityGroupId?: string | null
}


export interface InstanceServerInfo {
  name: string
}


export interface IpamIpInfo {
  address: string
}


export interface KafkClusterInfo {
  version: string
  tags: string[]
  endpoint: string
  pnId: string
}


export interface KeyManagerKeyInfo {
}


export interface KubernetesACLInfo {
}


export interface KubernetesClusterInfo {
}


export interface KubernetesNodeInfo {
  id: string
  name: string
}


export interface KubernetesPoolInfo {
  id: string
  name: string
}


export interface LoadBalancerAclInfo {
  frontendId: string
}


export interface LoadBalancerBackendInfo {
  lbId: string
  name: string
}


export interface LoadBalancerCertificateInfo {
  lbId: string
  name: string
}


export interface LoadBalancerFrontendInfo {
  lbId: string
  name: string
}


export interface LoadBalancerIpInfo {
  ipAddress: string
  lbId?: string | null
}


export interface LoadBalancerLbInfo {
  name: string
}


export interface LoadBalancerRouteInfo {
  frontendId: string
  backendId: string
}


export interface ObservabilityAlertRuleInfo {
  ruleIds: string[]
}


export interface ObservabilityContactPointInfo {
  email: string
}


export interface SecretManagerSecretInfo {
  path: string
  keyId?: string | null
}


export interface SecretManagerSecretVersionInfo {
  revision: number
}


export interface ServerlessContainersContainerInfo {
  namespaceId: string
}


export interface ServerlessContainersDomainInfo {
  containerId: string
}


export interface ServerlessContainersNamespaceInfo {
}


export interface ServerlessContainersTriggerInfo {
  containerId: string
  sourceType: ServerlessContainersTriggerInfoSourceType
}


export interface ServerlessFunctionsCronInfo {
  functionId: string
}


export interface ServerlessFunctionsDomainInfo {
  functionId: string
}


export interface ServerlessFunctionsFunctionInfo {
  namespaceId: string
}


export interface ServerlessFunctionsNamespaceInfo {
}


export interface ServerlessFunctionsTriggerInfo {
  functionId: string
  inputType: ServerlessFunctionsTriggerInfoInputType
}


export interface VpcConnectorInfo {
  vpcId: string
  targetVpcId: string
}


export interface VpcGwGatewayInfo {
  vpcId?: string | null
  gatewayTypeId: string
  publicIpId?: string | null
}


export interface VpcGwGatewayNetworkInfo {
  gatewayId: string
  pnId: string
  address?: string | null
}


export interface VpcIngressRuleInfo {
  vpcId: string
  source: string
  nexthopPrivateNetworkId: string
  nexthopResourceIp: string
}


export interface VpcPrivateNetworkInfo {
  vpcId: string
  pushDefaultRoute: boolean
}


export interface VpcRouteInfo {
  vpcId: string
  destination: string
  nexthopResourceKey?: string | null
  nexthopPrivateNetworkKey?: string | null
}


export interface VpcSubnetInfo {
  subnetCidr: string
  vpcId: string
}


export interface WoflWorkflowDefinitionInfo {
  name: string
  description?: string | null
}


export interface WoflWorkflowRunInfo {
  workflowDefinitionId: string
  workflowDefinitionName?: string | null
  status: RunStatus
}


export interface WoflWorkflowVersionInfo {
  workflowDefinitionId: string
  workflowDefinitionName?: string | null
  name: string
}


export interface Resource {
  id: string
  type: ResourceType
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
  name?: string | null
  action?: Action | null
  /**
   * @deprecated 
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  secmSecretInfo?: SecretManagerSecretInfo | null
  /**
   * @deprecated 
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  secmSecretVersionInfo?: SecretManagerSecretVersionInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  kubeClusterInfo?: KubernetesClusterInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  kubePoolInfo?: KubernetesPoolInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  kubeNodeInfo?: KubernetesNodeInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  kubeAclInfo?: KubernetesACLInfo | null
  /**
   * @deprecated 
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  keymKeyInfo?: KeyManagerKeyInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  secretManagerSecretInfo?: SecretManagerSecretInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  secretManagerVersionInfo?: SecretManagerSecretVersionInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  keyManagerKeyInfo?: KeyManagerKeyInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  accountUserInfo?: AccountUserInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  accountOrganizationInfo?: AccountOrganizationInfo | null
  /**
   * @deprecated 
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  instanceServerInfo?: InstanceServerInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  appleSiliconServerInfo?: AppleSiliconServerInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  accountProjectInfo?: AccountProjectInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  baremetalServerInfo?: BaremetalServerInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  baremetalSettingInfo?: BaremetalSettingInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  ipamIpInfo?: IpamIpInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  loadBalancerLbInfo?: LoadBalancerLbInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  loadBalancerIpInfo?: LoadBalancerIpInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  loadBalancerFrontendInfo?: LoadBalancerFrontendInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  loadBalancerBackendInfo?: LoadBalancerBackendInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  loadBalancerRouteInfo?: LoadBalancerRouteInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  loadBalancerAclInfo?: LoadBalancerAclInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  loadBalancerCertificateInfo?: LoadBalancerCertificateInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesPlanInfo?: EdgeServicesPlanInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesPipelineInfo?: EdgeServicesPipelineInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesDnsStageInfo?: EdgeServicesDNSStageInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesTlsStageInfo?: EdgeServicesTLSStageInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesCacheStageInfo?: EdgeServicesCacheStageInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesRouteStageInfo?: EdgeServicesRouteStageInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesRouteRulesInfo?: EdgeServicesRouteRulesInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesWafStageInfo?: EdgeServicesWAFStageInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesBackendStageInfo?: EdgeServicesBackendStageInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  accountContractSignatureInfo?: AccountContractSignatureInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  vpcSubnetInfo?: VpcSubnetInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  vpcRouteInfo?: VpcRouteInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  vpcPrivateNetworkInfo?: VpcPrivateNetworkInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  auditTrailExportJobInfo?: AuditTrailExportJobInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  vpcGwGatewayInfo?: VpcGwGatewayInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  vpcGwGatewayNetworkInfo?: VpcGwGatewayNetworkInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  appleSiliconRunnerInfo?: AppleSiliconRunnerInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  auditTrailAlertRuleInfo?: AuditTrailAlertRuleInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  vpcConnectorInfo?: VpcConnectorInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  instancePrivateNetworkInterfaceInfo?: InstancePrivateNetworkInterfaceInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  vpcIngressRuleInfo?: VpcIngressRuleInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  observabilityContactPointInfo?: ObservabilityContactPointInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  observabilityAlertRuleInfo?: ObservabilityAlertRuleInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  edgeServicesVpcEndpointInfo?: EdgeServicesVPCEndpointInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  auditTrailCustomAlertRuleInfo?: AuditTrailCustomAlertRuleInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessContainersNamespaceInfo?: ServerlessContainersNamespaceInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessContainersContainerInfo?: ServerlessContainersContainerInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessContainersDomainInfo?: ServerlessContainersDomainInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessContainersTriggerInfo?: ServerlessContainersTriggerInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessFunctionsNamespaceInfo?: ServerlessFunctionsNamespaceInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessFunctionsFunctionInfo?: ServerlessFunctionsFunctionInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessFunctionsDomainInfo?: ServerlessFunctionsDomainInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessFunctionsCronInfo?: ServerlessFunctionsCronInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  serverlessFunctionsTriggerInfo?: ServerlessFunctionsTriggerInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  annotationsValueInfo?: AnnotationsValueInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  annotationsBindingInfo?: AnnotationsBindingInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  woflWorkflowDefinitionInfo?: WoflWorkflowDefinitionInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  woflWorkflowRunInfo?: WoflWorkflowRunInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  woflWorkflowVersionInfo?: WoflWorkflowVersionInfo | null
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo', 'appleSiliconRunnerInfo', 'auditTrailAlertRuleInfo', 'vpcConnectorInfo', 'instancePrivateNetworkInterfaceInfo', 'vpcIngressRuleInfo', 'observabilityContactPointInfo', 'observabilityAlertRuleInfo', 'edgeServicesVpcEndpointInfo', 'auditTrailCustomAlertRuleInfo', 'serverlessContainersNamespaceInfo', 'serverlessContainersContainerInfo', 'serverlessContainersDomainInfo', 'serverlessContainersTriggerInfo', 'serverlessFunctionsNamespaceInfo', 'serverlessFunctionsFunctionInfo', 'serverlessFunctionsDomainInfo', 'serverlessFunctionsCronInfo', 'serverlessFunctionsTriggerInfo', 'annotationsValueInfo', 'annotationsBindingInfo', 'woflWorkflowDefinitionInfo', 'woflWorkflowRunInfo', 'woflWorkflowVersionInfo', 'kafkClusterInfo' could be set.
   */
  kafkClusterInfo?: KafkClusterInfo | null
}


export interface EventPrincipal {
  id: string
}


export interface AuthenticationEvent {
  /**
   * ID of the event.
   */
  id: string
  /**
   * Timestamp of the event.
   */
  recordedAt?: Date | null
  /**
   * Organization ID containing the event.
   */
  organizationId: string
  /**
   * IP address at the origin of the event.
   */
  sourceIp: string
  /**
   * User Agent at the origin of the event.
   */
  userAgent?: string | null
  /**
   * Resources attached to the event.
   */
  resources: Resource[]
  /**
   * Result of the authentication attempt.
   */
  result: AuthenticationEventResult
  /**
   * (Optional) Reason for authentication failure.
   */
  failureReason?: AuthenticationEventFailureReason | null
  /**
   * (Optional) ISO 3166-1 alpha-2 country code of the source IP.
   */
  countryCode?: StdCountryCode | null
  /**
   * Authentication method used.
   */
  method: AuthenticationEventMethod
  /**
   * Origin of the authentication attempt.
   */
  origin: AuthenticationEventOrigin
  /**
   * (Optional) MFA type used for the authentication attempt.
   */
  mfaType?: AuthenticationEventMFAType | null
}


export interface Event {
  /**
   * ID of the event.
   */
  id: string
  /**
   * Timestamp of the event.
   */
  recordedAt?: Date | null
  /**
   * Locality of the resource attached to the event.
   */
  locality: string
  /**
   * User or IAM application at the origin of the event.
   *
   * One-of ('source'): at most one of 'principal' could be set.
   */
  principal?: EventPrincipal | null
  /**
   * Organization ID containing the event.
   */
  organizationId: string
  /**
   * (Optional) Project of the resource attached to the event.
   */
  projectId?: string | null
  /**
   * IP address at the origin of the event.
   */
  sourceIp: string
  /**
   * User Agent at the origin of the event.
   */
  userAgent?: string | null
  /**
   * Product name of the resource attached to the event.
   */
  productName: string
  /**
   * API name called to trigger the event.
   */
  serviceName: string
  /**
   * API method called to trigger the event.
   */
  methodName: string
  /**
   * Resources attached to the event.
   */
  resources: Resource[]
  /**
   * Unique identifier of the request at the origin of the event.
   */
  requestId: string
  /**
   * Request at the origin of the event.
   */
  requestBody?: Record<string, unknown> | null
  /**
   * HTTP status code resulting of the API call.
   */
  statusCode: number
}


export interface SystemEvent {
  /**
   * ID of the system event.
   */
  id: string
  /**
   * Timestamp of the system event.
   */
  recordedAt?: Date | null
  /**
   * Locality of the system event.
   */
  locality: string
  /**
   * Organization ID containing the system event.
   */
  organizationId: string
  /**
   * Project of the resource attached to the system event.
   */
  projectId?: string | null
  /**
   * Name of the Scaleway product in a hyphenated format.
   */
  productName: string
  /**
   * Source of the system event.
   */
  source: string
  /**
   * Name of the jobs, notification, etc.
   */
  systemName: string
  /**
   * Resources attached to the event.
   */
  resources: Resource[]
  /**
   * Source of the event (unknown, cron or notification).
   */
  kind: SystemEventKind
}


export interface ExportJobS3 {
  bucket: string
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
  prefix?: string | null
  projectId?: string | null
}


export interface ExportJobStatus {
  code: ExportJobStatusCode
  message?: string | null
}


export interface ProductService {
  name: string
  methods: string[]
}


export interface CustomAlertRuleFieldIntOperators {
  operators: CustomAlertRuleFieldIntOperator[]
}


export interface CustomAlertRuleFieldStringOperators {
  operators: CustomAlertRuleFieldStringOperator[]
}


export interface AlertRule {
  /**
   * ID of the alert rule.
   */
  id: string
  /**
   * The SRN of the alert rule.
   */
  srn: string
  /**
   * Name of the alert rule.
   */
  name: string
  /**
   * Description of the alert rule.
   */
  description: string
  /**
   * Current status of the alert rule.
   */
  status: AlertRuleStatus
  /**
   * Region of the alert rule.
   */
  region: ScwRegion
}


export interface CustomAlertRule {
  /**
   * ID of the alert rule.
   */
  id: string
  /**
   * The SRN of the alert rule.
   */
  srn: string
  /**
   * Name of the alert rule.
   */
  name: string
  /**
   * (Optional) Description of the alert rule.
   */
  description?: string | null
  /**
   * Current status of the alert rule.
   */
  status: CustomAlertRuleStatus
  /**
   * The Common Expression Language (CEL) string defining the logic for the alert rule.
   */
  query: string
  /**
   * The duration of time over which to evaluate the rule (how far back to look for matching events).
   */
  evaluationWindow?: string | null
  /**
   * The minimum number of matched occurrences required within the evaluation window to trigger the alert.
   */
  occurrences: number
  /**
   * The severity level assigned to the custom alert rule.
   */
  severity: CustomAlertRuleSeverity
  /**
   * Custom alert rule creation date.
   */
  createdAt?: Date | null
  /**
   * Custom alert rule last modification date.
   */
  updatedAt?: Date | null
  /**
   * Region of the alert rule.
   */
  region: ScwRegion
}


export interface ListCombinedEventsResponseCombinedEvent {
  /**
   *
   * One-of ('event'): at most one of 'api', 'auth', 'system' could be set.
   */
  api?: Event | null
  /**
   *
   * One-of ('event'): at most one of 'api', 'auth', 'system' could be set.
   */
  auth?: AuthenticationEvent | null
  /**
   *
   * One-of ('event'): at most one of 'api', 'auth', 'system' could be set.
   */
  system?: SystemEvent | null
}


export interface ExportJob {
  /**
   * ID of the export job.
   */
  id: string
  /**
   * The SRN of the export job.
   */
  srn: string
  /**
   * ID of the targeted Organization.
   */
  organizationId: string
  /**
   * Name of the export job.
   */
  name: string
  /**
   * Destination in an S3 storage.
   *
   * One-of ('destination'): at most one of 's3' could be set.
   */
  s3?: ExportJobS3 | null
  /**
   * Export job creation date.
   */
  createdAt?: Date | null
  /**
   * Last run of export job.
   */
  lastRunAt?: Date | null
  /**
   * Tags of the export job.
   */
  tags: string[]
  /**
   * Status of last export job.
   */
  lastStatus?: ExportJobStatus | null
  /**
   * Region of the export job.
   */
  region: ScwRegion
}


export interface Product {
  /**
   * Product title.
   */
  title: string
  /**
   * Product name.
   */
  name: string
  /**
   * Specifies the API versions of the products integrated with Audit Trail. Each version defines the methods logged by Audit Trail.
   */
  services: ProductService[]
}


export interface CustomAlertRuleField {
  /**
   * The field name to be used in the CEL expression (e.g., `productName`, `status`).
   */
  name: string
  /**
   * The expected data type of the field within the CEL environment.
   */
  type: CustomAlertRuleFieldFieldType
  /**
   * A list of string CEL operators that are supported and valid for this field.
   *
   * One-of ('availableOperators'): at most one of 'stringOperators', 'intOperators' could be set.
   */
  stringOperators?: CustomAlertRuleFieldStringOperators | null
  /**
   * A list of int CEL operators that are supported and valid for this field.
   *
   * One-of ('availableOperators'): at most one of 'stringOperators', 'intOperators' could be set.
   */
  intOperators?: CustomAlertRuleFieldIntOperators | null
}


export type CreateCustomAlertRuleRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * Name of the custom alert rule.
   */
  name: string
  /**
   * (Optional) Description of the custom alert rule.
   */
  description?: string | null
  /**
   * The Common Expression Language (CEL) string defining the logic for the alert rule.
   */
  query: string
  /**
   * The duration of time over which to evaluate the rule (how far back to look for matching events).
   */
  evaluationWindow?: string | null
  /**
   * The minimum number of matched occurrences required within the evaluation window to trigger the alert.
   */
  occurrences: number
  /**
   * (Optional) The severity level assigned to the custom alert rule. By default, the severity will be set to info.
   */
  severity?: CustomAlertRuleSeverity | null
}


export type CreateExportJobRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * Name of the export.
   */
  name: string
  /**
   * The configuration specifying the bucket where the audit trail events will be exported.
   *
   * One-of ('destination'): at most one of 's3' could be set.
   */
  s3?: ExportJobS3 | null
  /**
   * Tags of the export.
   */
  tags?: string[] | null
}


export type DeleteCustomAlertRuleRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the custom alert rule to delete.
   */
  customAlertRuleId: string
}


export type DeleteExportJobRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the export job.
   */
  exportJobId: string
}


export type DisableAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * List of IDs of the rules to disable.
   */
  alertRuleIds?: string[] | null
}


export interface DisableAlertRulesResponse {
  /**
   * List of the preconfigured rules that were disabled.
   */
  alertRules: AlertRule[]
}


export type DisableCustomAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * List of IDs of the custom rules to disable.
   */
  customAlertRuleIds?: string[] | null
}


export interface DisableCustomAlertRulesResponse {
  /**
   * List of the custom rules that were disabled.
   */
  customAlertRules: CustomAlertRule[]
}


export type EnableAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * List of IDs of the rules to enable.
   */
  alertRuleIds?: string[] | null
}


export interface EnableAlertRulesResponse {
  /**
   * List of the preconfigured rules that were enabled.
   */
  alertRules: AlertRule[]
}


export type EnableCustomAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * List of IDs of the custom rules to enable.
   */
  customAlertRuleIds?: string[] | null
}


export interface EnableCustomAlertRulesResponse {
  /**
   * List of the custom rules that were enabled.
   */
  customAlertRules: CustomAlertRule[]
}


export interface EventsOverview {
  lastEvents: Event[]
}


export type GetCustomAlertRuleRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the custom alert rule to retrieve.
   */
  customAlertRuleId: string
}


export type GetLastEventsOverviewRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  organizationId?: string | null
  projectId?: string | null
}


export type ListAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * (Optional) Status of the alert rule.
   */
  status?: AlertRuleStatus | null
  page?: number | null
  pageSize?: number | null
}


export interface ListAlertRulesResponse {
  /**
   * Single page of preconfigured alert rules matching the requested criteria.
   */
  alertRules: AlertRule[]
  /**
   * Total count of alert rules matching the requested criteria.
   */
  totalCount: number
}


export type ListAuthenticationEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  organizationId?: string | null
  recordedAfter?: Date | null
  recordedBefore?: Date | null
  orderBy?: ListAuthenticationEventsRequestOrderBy | null
  pageSize?: number | null
  pageToken?: string | null
}


export interface ListAuthenticationEventsResponse {
  events: AuthenticationEvent[]
  nextPageToken?: string | null
}


export type ListCombinedEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  organizationId?: string | null
  projectId?: string | null
  resourceType?: ResourceType | null
  recordedAfter?: Date | null
  recordedBefore?: Date | null
  orderBy?: ListCombinedEventsRequestOrderBy | null
  pageSize?: number | null
  pageToken?: string | null
}


export interface ListCombinedEventsResponse {
  events: ListCombinedEventsResponseCombinedEvent[]
  nextPageToken?: string | null
}


export type ListCustomAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * (Optional) Status of the custom alert rule.
   */
  status?: CustomAlertRuleStatus | null
  page?: number | null
  pageSize?: number | null
}


export interface ListCustomAlertRulesResponse {
  /**
   * Single page of custom alert rules matching the requested criteria.
   */
  customAlertRules: CustomAlertRule[]
  /**
   * Total count of custom alert rules matching the requested criteria.
   */
  totalCount: number
}


export type ListEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * (Optional) ID of the Project containing the Audit Trail events.
   */
  projectId?: string | null
  /**
   * ID of the Organization containing the Audit Trail events.
   */
  organizationId?: string | null
  /**
   * (Optional) Type of the Scaleway resource.
   */
  resourceType?: ResourceType | null
  /**
   * (Optional) Name of the method of the API call performed.
   */
  methodName?: string | null
  /**
   * (Optional) HTTP status code of the request. Returns either `200` if the request was successful or `403` if the permission was denied.
   */
  status?: number | null
  /**
   * (Optional) The `recorded_after` parameter defines the earliest timestamp from which Audit Trail events are retrieved. Returns `one hour ago` by default.
   */
  recordedAfter?: Date | null
  /**
   * (Optional) The `recorded_before` parameter defines the latest timestamp up to which Audit Trail events are retrieved. Returns `now` by default.
   */
  recordedBefore?: Date | null
  orderBy?: ListEventsRequestOrderBy | null
  pageSize?: number | null
  pageToken?: string | null
  /**
   * (Optional) Name of the Scaleway product in a hyphenated format.
   */
  productName?: string | null
  /**
   * (Optional) Name of the service of the API call performed.
   */
  serviceName?: string | null
  /**
   * (Optional) ID of the Scaleway resource.
   */
  resourceId?: string | null
  /**
   * (Optional) ID of the User or IAM application at the origin of the event.
   */
  principalId?: string | null
  /**
   * (Optional) IP address at the origin of the event.
   */
  sourceIp?: string | null
}


export interface ListEventsResponse {
  /**
   * Single page of events matching the requested criteria.
   */
  events: Event[]
  /**
   * Page token to use in following calls to keep listing.
   */
  nextPageToken?: string | null
}


export type ListExportJobsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Filter by Organization ID.
   */
  organizationId?: string | null
  /**
   * (Optional) Filter by export name.
   */
  name?: string | null
  /**
   * (Optional) List of tags to filter on.
   */
  tags?: string[] | null
  page?: number | null
  pageSize?: number | null
  orderBy?: ListExportJobsRequestOrderBy | null
}


export interface ListExportJobsResponse {
  /**
   * Single page of export jobs matching the requested criteria.
   */
  exportJobs: ExportJob[]
  /**
   * Total count of export jobs matching the requested criteria.
   */
  totalCount: number
}


export type ListProductsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization containing the Audit Trail events.
   */
  organizationId?: string | null
}


export interface ListProductsResponse {
  /**
   * List of all products integrated with Audit Trail.
   */
  products: Product[]
  /**
   * Number of integrated products.
   */
  totalCount: number
}


export type ListSystemEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization containing the Audit Trail system events.
   */
  organizationId?: string | null
  /**
   * (Optional) The `recorded_after` parameter defines the earliest timestamp from which Audit Trail system events are retrieved. Returns `one hour ago` by default.
   */
  recordedAfter?: Date | null
  /**
   * (Optional) The `recorded_before` parameter defines the latest timestamp up to which Audit Trail system events are retrieved. Returns `now` by default.
   */
  recordedBefore?: Date | null
  orderBy?: ListSystemEventsRequestOrderBy | null
  pageSize?: number | null
  pageToken?: string | null
}


export interface ListSystemEventsResponse {
  /**
   * Single page of system events matching the requested criteria.
   */
  events: SystemEvent[]
  /**
   * Page token to use in following calls to keep listing.
   */
  nextPageToken?: string | null
}


export type RetrieveAvailableFieldsForCustomAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  organizationId?: string | null
}


export interface RetrieveAvailableFieldsForCustomAlertRulesResponse {
  /**
   * A list of fields that are authorized to be used in a CEL expression.
   */
  fields: CustomAlertRuleField[]
  /**
   * Number of fields.
   */
  totalCount: number
}


export type SetEnabledAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * List of IDs of the rules that must be enabled after the update.
   */
  enabledAlertRuleIds?: string[] | null
}


export interface SetEnabledAlertRulesResponse {
  /**
   * List of the preconfigured rules that were enabled.
   */
  alertRules: AlertRule[]
}


export type SetEnabledCustomAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * List of IDs of the custom rules that must be enabled after the update.
   */
  enabledCustomAlertRuleIds?: string[] | null
}


export interface SetEnabledCustomAlertRulesResponse {
  /**
   * List of the custom rules that were enabled.
   */
  customAlertRules: CustomAlertRule[]
}


export type TestCustomAlertRuleRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Organization to target.
   */
  organizationId?: string | null
  /**
   * The Common Expression Language (CEL) string defining the logic for the alert rule.
   */
  query: string
  /**
   * The duration of time over which to evaluate the rule (how far back to look for matching events).
   */
  evaluationWindow?: string | null
  /**
   * The minimum number of matched occurrences required within the evaluation window to trigger the alert.
   */
  occurrences: number
}


export interface TestCustomAlertRuleResponse {
  /**
   * A false return value does not mean the alert rule is incorrect, only that it is not currently firing.
   */
  firing: boolean
}


export type UpdateCustomAlertRuleRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the custom alert rule to update.
   */
  customAlertRuleId: string
  /**
   * (Optional) New name for the custom alert rule.
   */
  name?: string | null
  /**
   * (Optional) New description for the custom alert rule.
   */
  description?: string | null
}


