// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone as ScwZone} from '@scaleway/sdk-client'


export type AlertAlertType =
  | 'unknown_alert_type'
  | 'quotas_exceeded'
  | 'out_of_stock'
  | 'invalid_template'
  | 'load_balancer_misconfigured'
  | 'template_not_found'
  | 'invalid_instance'
  | 'template_permissions_denied'
  | 'load_balancer_not_found'
  | 'load_balancer_permissions_denied'
  | 'backend_not_found'

export type GroupGroupStatus =
  | 'unknown_group_status'
  | 'active'
  | 'scaling_out'
  | 'scaling_in'
  | 'refreshing'
  | 'healing'
  | 'scaling_failure'
  | 'deleting'

export type GroupLoadBalancerConfigurationBackendAddressFamily =
  | 'unknown_address_family'
  | 'ipv4'
  | 'ipv6'

export type ListGroupsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'

export type LogLogLevel =
  | 'unknown_log_level'
  | 'info'
  | 'warning'
  | 'error'

export interface LoadBalancerConfigurationSpecAutoHealing {
  /**
   * Whether auto-healing is enabled.
   */
  enabled?: boolean
  /**
   * Grace period for health checks.
   */
  gracePeriod?: string
}


export interface LoadBalancerConfigurationSpecBackend {
  /**
   * ID of the load balancer backend.
   */
  backendId: string
  /**
   * IP address family (IPv4 or IPv6).
   */
  addressFamily: GroupLoadBalancerConfigurationBackendAddressFamily
  /**
   * Optional private network ID.
   */
  privateNetworkId?: string
}


export interface GroupScalingPolicyScalingPolicyCpuTarget {
  targetAvgPercent: number
}


export interface GroupScalingPolicyScalingPolicyFixedSize {
  size: number
}


export interface GroupScalingPolicyScalingPolicyMemoryTarget {
  targetAvgPercent: number
}


export interface GroupLoadBalancerConfigurationAutoHealing {
  enabled: boolean
  gracePeriod?: string
}


export interface GroupLoadBalancerConfigurationBackend {
  backendId: string
  addressFamily: GroupLoadBalancerConfigurationBackendAddressFamily
  privateNetworkId?: string
}


export interface Alert {
  /**
   * Type of alert.
   */
  type: AlertAlertType
  /**
   * Timestamp when the alert was opened.
   */
  openedAt?: Date
  /**
   * Optional timestamp when the alert was closed.
   */
  closedAt?: Date
  /**
   * List of quota names that are exceeded (for quotas_exceeded alerts).
   */
  failingQuotas: string[]
}


export interface LoadBalancerConfigurationSpec {
  /**
   * ID of the load balancer (set to empty to disable).
   */
  loadBalancerId?: string
  /**
   * List of load balancer backend configurations.
   */
  backends: LoadBalancerConfigurationSpecBackend[]
  /**
   * Auto-healing configuration.
   */
  autoHealing?: LoadBalancerConfigurationSpecAutoHealing
}


export interface ScalingPolicySpec {
  /**
   * Minimum number of instances in the group.
   */
  minimumSize?: number
  /**
   * Maximum number of instances in the group.
   */
  maximumSize?: number
  /**
   * Cooldown period after a scale out event.
   */
  scaleOutCooldown?: string
  /**
   * Cooldown period after a scale in event.
   */
  scaleInCooldown?: string
  /**
   * Number of instances to remove in a single scale in event.
   */
  scaleInStep?: number
  /**
   * Number of instances to add in a single scale out event.
   */
  scaleOutStep?: number
  /**
   * Fixed size scaling policy configuration.
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  fixedSize?: GroupScalingPolicyScalingPolicyFixedSize
  /**
   * CPU target scaling policy configuration.
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  cpuTarget?: GroupScalingPolicyScalingPolicyCpuTarget
  /**
   * Memory target scaling policy configuration.
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  memoryTarget?: GroupScalingPolicyScalingPolicyMemoryTarget
}


export interface GroupLoadBalancerConfiguration {
  loadBalancerId: string
  backends: GroupLoadBalancerConfigurationBackend[]
  autoHealing?: GroupLoadBalancerConfigurationAutoHealing
}


export interface GroupScalingPolicy {
  minimumSize: number
  maximumSize: number
  scaleOutCooldown?: string
  scaleInCooldown?: string
  scaleInStep: number
  scaleOutStep: number
  /**
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  fixedSize?: GroupScalingPolicyScalingPolicyFixedSize
  /**
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  cpuTarget?: GroupScalingPolicyScalingPolicyCpuTarget
  /**
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  memoryTarget?: GroupScalingPolicyScalingPolicyMemoryTarget
}


export interface GroupSummary {
  /**
   * Project ID owning this group.
   */
  projectId: string
  /**
   * Unique identifier of the autoscaling group.
   */
  id: string
  /**
   * Name of the autoscaling group.
   */
  name: string
  /**
   * Tags associated with the group.
   */
  tags: string[]
  /**
   * Current status of the autoscaling group.
   */
  status: GroupGroupStatus
  /**
   * Creation timestamp of the group.
   */
  createdAt?: Date
  /**
   * Last update timestamp of the group.
   */
  updatedAt?: Date
  /**
   * The Instance template ID used to create instances in this group.
   */
  templateId: string
  /**
   * Optional load balancer ID.
   */
  loadBalancerId?: string
  /**
   * Current number of instances in the group.
   */
  currentSize: number
  /**
   * Most recent active alert if any.
   */
  latestOpenAlert?: Alert
}


export interface Log {
  /**
   * Timestamp of the log entry.
   */
  timestamp?: Date
  /**
   * Log level (info, warning, error).
   */
  level: LogLogLevel
  /**
   * Log message content.
   */
  message: string
}


export interface Server {
  /**
   * ID of the instance server.
   */
  serverId: string
}


export type CreateGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project ID to create the group in.
   */
  projectId?: string
  /**
   * Name of the autoscaling group.
   */
  name: string
  /**
   * Tags associated with the group.
   */
  tags?: string[]
  /**
   * Template ID for instances in this group.
   */
  templateId: string
  /**
   * Scaling policy configuration.
   */
  scalingPolicySpec?: ScalingPolicySpec
  /**
   * Optional load balancer configuration.
   */
  loadBalancerConfigurationSpec?: LoadBalancerConfigurationSpec
}


export type DeleteGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the group to delete.
   */
  groupId: string
}


export type GetGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the group to get.
   */
  groupId: string
}


export interface Group {
  /**
   * Unique identifier of the autoscaling group.
   */
  id: string
  /**
   * Project ID owning this group.
   */
  projectId: string
  /**
   * Name of the autoscaling group.
   */
  name: string
  /**
   * Tags associated with the group.
   */
  tags: string[]
  /**
   * Creation timestamp of the group.
   */
  createdAt?: Date
  /**
   * Last update timestamp of the group.
   */
  updatedAt?: Date
  /**
   * Current status of the autoscaling group.
   */
  status: GroupGroupStatus
  /**
   * List of active alerts on the group.
   */
  openAlerts: Alert[]
  /**
   * Current number of instances in the group.
   */
  currentSize: number
  /**
   * Target number of instances the group is scaling to.
   */
  targetSize: number
  /**
   * Timestamp of the last scale out event.
   */
  lastScaleOutAt?: Date
  /**
   * Timestamp of the last scale in event.
   */
  lastScaleInAt?: Date
  /**
   * The Instance template ID used to create instances in this group.
   */
  templateId: string
  /**
   * Scaling policy configuration.
   */
  scalingPolicy?: GroupScalingPolicy
  /**
   * Optional load balancer configuration.
   */
  loadBalancerConfiguration?: GroupLoadBalancerConfiguration
}


export type ListAlertsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  groupId: string
  pageToken?: string
  pageSize?: number
}


export interface ListAlertsResponse {
  /**
   * List of alerts.
   */
  alerts: Alert[]
  /**
   * Token for the next page of results.
   */
  nextPageToken?: string
  /**
   * Total number of alerts.
   */
  totalCount: number
}


export type ListGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Order criteria for listing groups.
   */
  orderBy?: ListGroupsRequestOrderBy
  /**
   * Page size for pagination.
   */
  pageSize?: number
  /**
   * Token for pagination.
   */
  pageToken?: string
  /**
   * Project ID to filter groups.
   */
  projectId?: string
  /**
   * Template ID to filter groups.
   */
  templateId?: string
  /**
   * Load balancer ID to filter groups.
   */
  loadBalancerId?: string
}


export interface ListGroupsResponse {
  /**
   * List of group summaries.
   */
  groupSummaries: GroupSummary[]
  /**
   * Token for the next page of results.
   */
  nextPageToken?: string
  /**
   * Total number of groups.
   */
  totalCount: number
}


export type ListLogsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  groupId: string
  pageToken?: string
  pageSize?: number
  startTime?: Date
  endTime?: Date
}


export interface ListLogsResponse {
  /**
   * List of log entries.
   */
  logs: Log[]
  /**
   * Token for the next page of results.
   */
  nextPageToken?: string
  /**
   * Total number of logs.
   */
  totalCount: number
}


export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  groupId: string
  pageToken?: string
  pageSize?: number
}


export interface ListServersResponse {
  /**
   * List of servers.
   */
  servers: Server[]
  /**
   * Token for the next page of results.
   */
  nextPageToken?: string
  /**
   * Total number of servers.
   */
  totalCount: number
}


export type UpdateGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the group to update.
   */
  groupId: string
  /**
   * New name for the group.
   */
  name?: string
  /**
   * New tags for the group.
   */
  tags?: string[]
  /**
   * New template ID for instances.
   */
  templateId?: string
  /**
   * New scaling policy configuration.
   */
  scalingPolicySpec?: ScalingPolicySpec
  /**
   * New load balancer configuration.
   */
  loadBalancerConfigurationSpec?: LoadBalancerConfigurationSpec
}


