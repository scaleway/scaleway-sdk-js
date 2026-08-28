// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  AlertAlertType,
  GroupGroupStatus,
  GroupLoadBalancerConfigurationBackendAddressFamily,
  GroupSummaryScalingPolicyTargetType,
  ListGroupsRequestOrderBy,
  LogLogLevel,
} from './types.gen.js'


/** Lists all values of the enum {@link AlertAlertType}. */
export const ALERT_ALERT_TYPES: AlertAlertType[] = [
  'unknown_alert_type',
  'quotas_exceeded',
  'out_of_stock',
  'invalid_template',
  'template_not_found',
  'invalid_instance',
  'template_permissions_denied',
  'load_balancer_not_found',
  'load_balancer_permissions_denied',
  'backend_not_found',
  'backend_permissions_denied',
]

/** Lists all values of the enum {@link GroupGroupStatus}. */
export const GROUP_GROUP_STATUSES: GroupGroupStatus[] = [
  'unknown_group_status',
  'active',
  'scaling_out',
  'scaling_in',
  'refreshing',
  'healing',
  'scaling_failure',
  'deleting',
]

/** Lists all values of the enum {@link GroupLoadBalancerConfigurationBackendAddressFamily}. */
export const GROUP_LOAD_BALANCER_CONFIGURATION_BACKEND_ADDRESS_FAMILIES: GroupLoadBalancerConfigurationBackendAddressFamily[] = [
  'unknown_address_family',
  'ipv4',
  'ipv6',
]

/** Lists all values of the enum {@link GroupSummaryScalingPolicyTargetType}. */
export const GROUP_SUMMARY_SCALING_POLICY_TARGET_TYPES: GroupSummaryScalingPolicyTargetType[] = [
  'unknown_scaling_policy_target_type',
  'fixed_size',
  'cpu_target',
  'memory_target',
]

/** Lists all values of the enum {@link ListGroupsRequestOrderBy}. */
export const LIST_GROUPS_REQUEST_ORDER_BIES: ListGroupsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link LogLogLevel}. */
export const LOG_LOG_LEVELS: LogLogLevel[] = [
  'unknown_log_level',
  'info',
  'warning',
  'error',
]

