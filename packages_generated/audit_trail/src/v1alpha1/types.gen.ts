// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, } from '@scaleway/sdk-client'
import type {CountryCode as StdCountryCode,} from '@scaleway/sdk-std'


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

export type AuthenticationEventMFAType =
  | 'unknown_mfa_type'
  | 'totp'

export type AuthenticationEventMethod =
  | 'unknown_method'
  | 'password'
  | 'authentication_code'
  | 'oauth2'
  | 'saml'

export type AuthenticationEventOrigin =
  | 'unknown_origin'
  | 'public_api'
  | 'admin_api'

export type AuthenticationEventResult =
  | 'unknown_result'
  | 'success'
  | 'failure'

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
  | 'instance_server'
  | 'instance_placement_group'
  | 'instance_security_group'
  | 'instance_volume'
  | 'instance_snapshot'
  | 'instance_image'
  | 'instance_template'
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
  | 'edge_services_plan'
  | 'edge_services_pipeline'
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

export type SystemEventKind =
  | 'unknown_kind'
  | 'cron'
  | 'notification'

export interface AccountContractSignatureInfoAccountContractInfo {
  id: string
  type: string
  name: string
  version: number
  createdAt?: Date
  updatedAt?: Date
}


export interface AccountContractSignatureInfo {
  signedAt?: Date
  signedByAccountRootUserId: string
  expiresAt?: Date
  contract?: AccountContractSignatureInfoAccountContractInfo
}


export interface AccountOrganizationInfo {
}


export interface AccountProjectInfo {
  description: string
}


export interface AccountUserInfo {
  email: string
  phoneNumber?: string
}


export interface AppleSiliconServerInfo {
  id: string
  name: string
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
  pipelineId?: string
}


export interface EdgeServicesCacheStageInfo {
  pipelineId?: string
}


export interface EdgeServicesDNSStageInfo {
  pipelineId?: string
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
  pipelineId?: string
}


export interface EdgeServicesTLSStageInfo {
  pipelineId?: string
}


export interface EdgeServicesWAFStageInfo {
  pipelineId?: string
}


export interface InstanceServerInfo {
  name: string
}


export interface IpamIpInfo {
  address: string
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
  lbId?: string
}


export interface LoadBalancerLbInfo {
  name: string
}


export interface LoadBalancerRouteInfo {
  frontendId: string
  backendId: string
}


export interface SecretManagerSecretInfo {
  path: string
  keyId?: string
}


export interface SecretManagerSecretVersionInfo {
  revision: number
}


export interface VpcGwGatewayInfo {
  vpcId?: string
  gatewayTypeId: string
  publicIpId?: string
}


export interface VpcGwGatewayNetworkInfo {
  gatewayId: string
  pnId: string
  address?: string
}


export interface VpcPrivateNetworkInfo {
  vpcId: string
  pushDefaultRoute: boolean
}


export interface VpcRouteInfo {
  vpcId: string
  destination: string
  nexthopResourceKey?: string
  nexthopPrivateNetworkKey?: string
}


export interface VpcSubnetInfo {
  subnetCidr: string
  vpcId: string
}


export interface Resource {
  id: string
  type: ResourceType
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  name?: string
  /**
   * @deprecated 
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  secmSecretInfo?: SecretManagerSecretInfo
  /**
   * @deprecated 
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  secmSecretVersionInfo?: SecretManagerSecretVersionInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  kubeClusterInfo?: KubernetesClusterInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  kubePoolInfo?: KubernetesPoolInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  kubeNodeInfo?: KubernetesNodeInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  kubeAclInfo?: KubernetesACLInfo
  /**
   * @deprecated 
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  keymKeyInfo?: KeyManagerKeyInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  secretManagerSecretInfo?: SecretManagerSecretInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  secretManagerVersionInfo?: SecretManagerSecretVersionInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  keyManagerKeyInfo?: KeyManagerKeyInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  accountUserInfo?: AccountUserInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  accountOrganizationInfo?: AccountOrganizationInfo
  /**
   * @deprecated 
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  instanceServerInfo?: InstanceServerInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  appleSiliconServerInfo?: AppleSiliconServerInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  accountProjectInfo?: AccountProjectInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  baremetalServerInfo?: BaremetalServerInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  baremetalSettingInfo?: BaremetalSettingInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  ipamIpInfo?: IpamIpInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  loadBalancerLbInfo?: LoadBalancerLbInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  loadBalancerIpInfo?: LoadBalancerIpInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  loadBalancerFrontendInfo?: LoadBalancerFrontendInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  loadBalancerBackendInfo?: LoadBalancerBackendInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  loadBalancerRouteInfo?: LoadBalancerRouteInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  loadBalancerAclInfo?: LoadBalancerAclInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  loadBalancerCertificateInfo?: LoadBalancerCertificateInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesPlanInfo?: EdgeServicesPlanInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesPipelineInfo?: EdgeServicesPipelineInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesDnsStageInfo?: EdgeServicesDNSStageInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesTlsStageInfo?: EdgeServicesTLSStageInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesCacheStageInfo?: EdgeServicesCacheStageInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesRouteStageInfo?: EdgeServicesRouteStageInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesRouteRulesInfo?: EdgeServicesRouteRulesInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesWafStageInfo?: EdgeServicesWAFStageInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  edgeServicesBackendStageInfo?: EdgeServicesBackendStageInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  accountContractSignatureInfo?: AccountContractSignatureInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  vpcSubnetInfo?: VpcSubnetInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  vpcRouteInfo?: VpcRouteInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  vpcPrivateNetworkInfo?: VpcPrivateNetworkInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  auditTrailExportJobInfo?: AuditTrailExportJobInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  vpcGwGatewayInfo?: VpcGwGatewayInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo', 'loadBalancerLbInfo', 'loadBalancerIpInfo', 'loadBalancerFrontendInfo', 'loadBalancerBackendInfo', 'loadBalancerRouteInfo', 'loadBalancerAclInfo', 'loadBalancerCertificateInfo', 'edgeServicesPlanInfo', 'edgeServicesPipelineInfo', 'edgeServicesDnsStageInfo', 'edgeServicesTlsStageInfo', 'edgeServicesCacheStageInfo', 'edgeServicesRouteStageInfo', 'edgeServicesRouteRulesInfo', 'edgeServicesWafStageInfo', 'edgeServicesBackendStageInfo', 'accountContractSignatureInfo', 'vpcSubnetInfo', 'vpcRouteInfo', 'vpcPrivateNetworkInfo', 'auditTrailExportJobInfo', 'vpcGwGatewayInfo', 'vpcGwGatewayNetworkInfo' could be set.
   */
  vpcGwGatewayNetworkInfo?: VpcGwGatewayNetworkInfo
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
  recordedAt?: Date
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
  userAgent?: string
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
  failureReason?: AuthenticationEventFailureReason
  /**
   * (Optional) ISO 3166-1 alpha-2 country code of the source IP.
   */
  countryCode?: StdCountryCode
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
  mfaType?: AuthenticationEventMFAType
}


export interface Event {
  /**
   * ID of the event.
   */
  id: string
  /**
   * Timestamp of the event.
   */
  recordedAt?: Date
  /**
   * Locality of the resource attached to the event.
   */
  locality: string
  /**
   * User or IAM application at the origin of the event.
   *
   * One-of ('source'): at most one of 'principal' could be set.
   */
  principal?: EventPrincipal
  /**
   * Organization ID containing the event.
   */
  organizationId: string
  /**
   * (Optional) Project of the resource attached to the event.
   */
  projectId?: string
  /**
   * IP address at the origin of the event.
   */
  sourceIp: string
  /**
   * User Agent at the origin of the event.
   */
  userAgent?: string
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
  requestBody?: Record<string, unknown>
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
  recordedAt?: Date
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
  projectId?: string
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
  prefix?: string
  projectId?: string
}


export interface ExportJobStatus {
  code: ExportJobStatusCode
  message?: string
}


export interface ProductService {
  name: string
  methods: string[]
}


export interface AlertRule {
  /**
   * ID of the alert rule.
   */
  id: string
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
}


export interface ListCombinedEventsResponseCombinedEvent {
  /**
   *
   * One-of ('event'): at most one of 'api', 'auth', 'system' could be set.
   */
  api?: Event
  /**
   *
   * One-of ('event'): at most one of 'api', 'auth', 'system' could be set.
   */
  auth?: AuthenticationEvent
  /**
   *
   * One-of ('event'): at most one of 'api', 'auth', 'system' could be set.
   */
  system?: SystemEvent
}


export interface ExportJob {
  /**
   * ID of the export job.
   */
  id: string
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
  s3?: ExportJobS3
  /**
   * Export job creation date.
   */
  createdAt?: Date
  /**
   * Last run of export job.
   */
  lastRunAt?: Date
  /**
   * Tags of the export job.
   */
  tags: string[]
  /**
   * Status of last export job.
   */
  lastStatus?: ExportJobStatus
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


export type CreateExportJobRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Organization to target.
   */
  organizationId?: string
  /**
   * Name of the export.
   */
  name: string
  /**
   * The configuration specifying the bucket where the audit trail events will be exported.
   *
   * One-of ('destination'): at most one of 's3' could be set.
   */
  s3?: ExportJobS3
  /**
   * Tags of the export.
   */
  tags?: string[]
}


export type DeleteExportJobRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the export job.
   */
  exportJobId: string
}


export type DisableAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Organization to target.
   */
  organizationId?: string
  /**
   * List of IDs of the rules to disable.
   */
  alertRuleIds?: string[]
}


export interface DisableAlertRulesResponse {
  /**
   * List of the rules that were disabled.
   */
  alertRules: AlertRule[]
}


export type EnableAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Organization to target.
   */
  organizationId?: string
  /**
   * List of IDs of the rules to enable.
   */
  alertRuleIds?: string[]
}


export interface EnableAlertRulesResponse {
  /**
   * List of the rules that were enabled.
   */
  alertRules: AlertRule[]
}


export type ListAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Organization to target.
   */
  organizationId?: string
  /**
   * (Optional) Status of the alert rule.
   */
  status?: AlertRuleStatus
  page?: number
  pageSize?: number
}


export interface ListAlertRulesResponse {
  /**
   * Single page of alert rules matching the requested criteria.
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
  region?: ScwRegion
  organizationId?: string
  recordedAfter?: Date
  recordedBefore?: Date
  orderBy?: ListAuthenticationEventsRequestOrderBy
  pageSize?: number
  pageToken?: string
}


export interface ListAuthenticationEventsResponse {
  events: AuthenticationEvent[]
  nextPageToken?: string
}


export type ListCombinedEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  organizationId?: string
  projectId?: string
  resourceType?: ResourceType
  recordedAfter?: Date
  recordedBefore?: Date
  orderBy?: ListCombinedEventsRequestOrderBy
  pageSize?: number
  pageToken?: string
}


export interface ListCombinedEventsResponse {
  events: ListCombinedEventsResponseCombinedEvent[]
  nextPageToken?: string
}


export type ListEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * (Optional) ID of the Project containing the Audit Trail events.
   */
  projectId?: string
  /**
   * ID of the Organization containing the Audit Trail events.
   */
  organizationId?: string
  /**
   * (Optional) Type of the Scaleway resource.
   */
  resourceType?: ResourceType
  /**
   * (Optional) Name of the method of the API call performed.
   */
  methodName?: string
  /**
   * (Optional) HTTP status code of the request. Returns either `200` if the request was successful or `403` if the permission was denied.
   */
  status?: number
  /**
   * (Optional) The `recorded_after` parameter defines the earliest timestamp from which Audit Trail events are retrieved. Returns `one hour ago` by default.
   */
  recordedAfter?: Date
  /**
   * (Optional) The `recorded_before` parameter defines the latest timestamp up to which Audit Trail events are retrieved. Returns `now` by default.
   */
  recordedBefore?: Date
  orderBy?: ListEventsRequestOrderBy
  pageSize?: number
  pageToken?: string
  /**
   * (Optional) Name of the Scaleway product in a hyphenated format.
   */
  productName?: string
  /**
   * (Optional) Name of the service of the API call performed.
   */
  serviceName?: string
  /**
   * (Optional) ID of the Scaleway resource.
   */
  resourceId?: string
  /**
   * (Optional) ID of the User or IAM application at the origin of the event.
   */
  principalId?: string
  /**
   * (Optional) IP address at the origin of the event.
   */
  sourceIp?: string
}


export interface ListEventsResponse {
  /**
   * Single page of events matching the requested criteria.
   */
  events: Event[]
  /**
   * Page token to use in following calls to keep listing.
   */
  nextPageToken?: string
}


export type ListExportJobsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * (Optional) Filter by export name.
   */
  name?: string
  /**
   * (Optional) List of tags to filter on.
   */
  tags?: string[]
  page?: number
  pageSize?: number
  orderBy?: ListExportJobsRequestOrderBy
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
  region?: ScwRegion
  /**
   * ID of the Organization containing the Audit Trail events.
   */
  organizationId?: string
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
  region?: ScwRegion
  /**
   * ID of the Organization containing the Audit Trail system events.
   */
  organizationId?: string
  /**
   * (Optional) The `recorded_after` parameter defines the earliest timestamp from which Audit Trail system events are retrieved. Returns `one hour ago` by default.
   */
  recordedAfter?: Date
  /**
   * (Optional) The `recorded_before` parameter defines the latest timestamp up to which Audit Trail system events are retrieved. Returns `now` by default.
   */
  recordedBefore?: Date
  orderBy?: ListSystemEventsRequestOrderBy
  pageSize?: number
  pageToken?: string
}


export interface ListSystemEventsResponse {
  /**
   * Single page of system events matching the requested criteria.
   */
  events: SystemEvent[]
  /**
   * Page token to use in following calls to keep listing.
   */
  nextPageToken?: string
}


export type SetEnabledAlertRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Organization to target.
   */
  organizationId?: string
  /**
   * List of IDs of the rules that must be enabled after the update.
   */
  enabledAlertRuleIds?: string[]
}


export interface SetEnabledAlertRulesResponse {
  /**
   * List of the rules that were enabled.
   */
  alertRules: AlertRule[]
}


