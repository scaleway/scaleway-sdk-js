// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  Action,
  AlertRuleStatus,
  AuthenticationEventFailureReason,
  AuthenticationEventMFAType,
  AuthenticationEventMethod,
  AuthenticationEventOrigin,
  AuthenticationEventResult,
  CustomAlertRuleSeverity,
  CustomAlertRuleStatus,
  ExportJobStatusCode,
  ListAuthenticationEventsRequestOrderBy,
  ListCombinedEventsRequestOrderBy,
  ListEventsRequestOrderBy,
  ListExportJobsRequestOrderBy,
  ListSystemEventsRequestOrderBy,
  ResourceType,
  ServerlessContainersTriggerInfoSourceType,
  ServerlessFunctionsTriggerInfoInputType,
  SystemEventKind,
} from './types.gen.js'


/** Lists all values of the enum {@link Action}. */
export const ACTIONS: Action[] = [
  'unknown_action',
  'create',
  'update',
  'delete',
]

/** Lists all values of the enum {@link AlertRuleStatus}. */
export const ALERT_RULE_STATUSES: AlertRuleStatus[] = [
  'unknown_status',
  'enabled',
  'disabled',
  'enabling',
  'disabling',
]

/** Lists all values of the enum {@link AuthenticationEventFailureReason}. */
export const AUTHENTICATION_EVENT_FAILURE_REASONS: AuthenticationEventFailureReason[] = [
  'unknown_failure_reason',
  'invalid_mfa',
  'invalid_password',
]

/** Lists all values of the enum {@link AuthenticationEventMFAType}. */
export const AUTHENTICATION_EVENT_MFA_TYPES: AuthenticationEventMFAType[] = [
  'unknown_mfa_type',
  'totp',
]

/** Lists all values of the enum {@link AuthenticationEventMethod}. */
export const AUTHENTICATION_EVENT_METHODS: AuthenticationEventMethod[] = [
  'unknown_method',
  'password',
  'authentication_code',
  'oauth2',
  'saml',
]

/** Lists all values of the enum {@link AuthenticationEventOrigin}. */
export const AUTHENTICATION_EVENT_ORIGINS: AuthenticationEventOrigin[] = [
  'unknown_origin',
  'public_api',
  'admin_api',
]

/** Lists all values of the enum {@link AuthenticationEventResult}. */
export const AUTHENTICATION_EVENT_RESULTS: AuthenticationEventResult[] = [
  'unknown_result',
  'success',
  'failure',
]

/** Lists all values of the enum {@link CustomAlertRuleSeverity}. */
export const CUSTOM_ALERT_RULE_SEVERITIES: CustomAlertRuleSeverity[] = [
  'unknown_severity',
  'info',
  'error',
  'warning',
  'critical',
]

/** Lists all values of the enum {@link CustomAlertRuleStatus}. */
export const CUSTOM_ALERT_RULE_STATUSES: CustomAlertRuleStatus[] = [
  'unknown_status',
  'enabled',
  'disabled',
  'enabling',
  'disabling',
]

/** Lists all values of the enum {@link ExportJobStatusCode}. */
export const EXPORT_JOB_STATUS_CODES: ExportJobStatusCode[] = [
  'unknown_code',
  'success',
  'failure',
]

/** Lists all values of the enum {@link ListAuthenticationEventsRequestOrderBy}. */
export const LIST_AUTHENTICATION_EVENTS_REQUEST_ORDER_BIES: ListAuthenticationEventsRequestOrderBy[] = [
  'recorded_at_desc',
  'recorded_at_asc',
]

/** Lists all values of the enum {@link ListCombinedEventsRequestOrderBy}. */
export const LIST_COMBINED_EVENTS_REQUEST_ORDER_BIES: ListCombinedEventsRequestOrderBy[] = [
  'recorded_at_desc',
  'recorded_at_asc',
]

/** Lists all values of the enum {@link ListEventsRequestOrderBy}. */
export const LIST_EVENTS_REQUEST_ORDER_BIES: ListEventsRequestOrderBy[] = [
  'recorded_at_desc',
  'recorded_at_asc',
]

/** Lists all values of the enum {@link ListExportJobsRequestOrderBy}. */
export const LIST_EXPORT_JOBS_REQUEST_ORDER_BIES: ListExportJobsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListSystemEventsRequestOrderBy}. */
export const LIST_SYSTEM_EVENTS_REQUEST_ORDER_BIES: ListSystemEventsRequestOrderBy[] = [
  'recorded_at_desc',
  'recorded_at_asc',
]

/** Lists all values of the enum {@link ResourceType}. */
export const RESOURCE_TYPES: ResourceType[] = [
  'unknown_type',
  'secm_secret',
  'secm_secret_version',
  'kube_cluster',
  'kube_pool',
  'kube_node',
  'kube_acl',
  'keym_key',
  'iam_user',
  'iam_application',
  'iam_group',
  'iam_policy',
  'iam_api_key',
  'iam_ssh_key',
  'iam_rule',
  'iam_saml',
  'iam_saml_certificate',
  'iam_scim',
  'iam_scim_token',
  'secret_manager_secret',
  'secret_manager_version',
  'key_manager_key',
  'account_user',
  'account_organization',
  'account_project',
  'account_contract_signature',
  'instance_server',
  'instance_placement_group',
  'instance_security_group',
  'instance_volume',
  'instance_snapshot',
  'instance_image',
  'instance_template',
  'instance_private_network_interface',
  'apple_silicon_server',
  'baremetal_server',
  'baremetal_setting',
  'ipam_ip',
  'sbs_volume',
  'sbs_snapshot',
  'load_balancer_lb',
  'load_balancer_ip',
  'load_balancer_frontend',
  'load_balancer_backend',
  'load_balancer_route',
  'load_balancer_acl',
  'load_balancer_certificate',
  'sfs_filesystem',
  'vpc_private_network',
  'vpc_vpc',
  'vpc_subnet',
  'vpc_route',
  'vpc_acl',
  'vpc_connector',
  'vpc_ingress_rule',
  'edge_services_plan',
  'edge_services_pipeline',
  'edge_services_vpc_endpoint',
  'edge_services_dns_stage',
  'edge_services_tls_stage',
  'edge_services_cache_stage',
  'edge_services_route_stage',
  'edge_services_route_rules',
  'edge_services_waf_stage',
  'edge_services_backend_stage',
  's2s_vpn_gateway',
  's2s_customer_gateway',
  's2s_routing_policy',
  's2s_connection',
  'vpc_gw_gateway',
  'vpc_gw_gateway_network',
  'vpc_gw_dhcp',
  'vpc_gw_dhcp_entry',
  'vpc_gw_pat_rule',
  'vpc_gw_ip',
  'audit_trail_export_job',
  'rdb_instance',
  'rdb_instance_backup',
  'rdb_instance_endpoint',
  'rdb_instance_logs',
  'rdb_instance_read_replica',
  'rdb_instance_snapshot',
  'mongodb_instance',
  'mongodb_instance_snapshot',
  'mongodb_instance_endpoint',
  'mongodb_instance_maintenance',
  'apple_silicon_runner',
  'audit_trail_alert_rule',
  'audit_trail_custom_alert_rule',
  'dtwh_deployment',
  'dtwh_deployment_endpoint',
  'dtwh_deployment_database',
  'dtwh_deployment_user',
  'ssdb_database',
  'ssdb_database_backup',
  'observability_datasource',
  'observability_token',
  'observability_exporter',
  'ili_partner',
  'ili_connection',
  'ili_link',
  'ili_routing_policy',
  'autoscaling_group',
  'gapi_dedicated_deployment',
  'gapi_dedicated_model',
  'serverless_containers_namespace',
  'serverless_containers_container',
  'serverless_containers_domain',
  'serverless_containers_trigger',
  'serverless_functions_namespace',
  'serverless_functions_function',
  'serverless_functions_domain',
  'serverless_functions_cron',
  'serverless_functions_trigger',
]

/** Lists all values of the enum {@link ServerlessContainersTriggerInfoSourceType}. */
export const SERVERLESS_CONTAINERS_TRIGGER_INFO_SOURCE_TYPES: ServerlessContainersTriggerInfoSourceType[] = [
  'unknown_source_type',
  'cron',
  'sqs',
  'nats',
]

/** Lists all values of the enum {@link ServerlessFunctionsTriggerInfoInputType}. */
export const SERVERLESS_FUNCTIONS_TRIGGER_INFO_INPUT_TYPES: ServerlessFunctionsTriggerInfoInputType[] = [
  'unknown_input_type',
  'scw_sqs',
  'scw_nats',
]

/** Lists all values of the enum {@link SystemEventKind}. */
export const SYSTEM_EVENT_KINDS: SystemEventKind[] = [
  'unknown_kind',
  'cron',
  'notification',
]

