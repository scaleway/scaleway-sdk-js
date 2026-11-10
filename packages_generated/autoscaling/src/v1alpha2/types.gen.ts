// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type AlertAlertType =
  | 'unknown_alert_type'
  | 'quotas_exceeded'
  | 'out_of_stock'
  | 'invalid_template'
  | 'template_not_found'
  | 'invalid_instance'
  | 'template_permissions_denied'
  | 'load_balancer_not_found'
  | 'load_balancer_permissions_denied'
  | 'backend_not_found'
  | 'backend_permissions_denied'

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

export type GroupSummaryScalingPolicyTargetType =
  | 'unknown_scaling_policy_target_type'
  | 'fixed_size'
  | 'cpu_target'
  | 'memory_target'

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
  enabled?: boolean | null
  /**
   * Grace period for health checks.
   */
  gracePeriod?: string | null
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
  privateNetworkId?: string | null
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
  gracePeriod?: string | null
}


export interface GroupLoadBalancerConfigurationBackend {
  backendId: string
  addressFamily: GroupLoadBalancerConfigurationBackendAddressFamily
  privateNetworkId?: string | null
}


export interface Alert {
  /**
   * Type of alert.
   */
  type: AlertAlertType
  /**
   * Timestamp when the alert was opened.
   */
  openedAt?: Date | null
  /**
   * Optional timestamp when the alert was closed.
   */
  closedAt?: Date | null
  /**
   * ID of the group.
   */
  groupId: string
  /**
   * List of quota names that are exceeded (for quotas_exceeded alerts).
   */
  failingQuotas: string[]
}


export interface LoadBalancerConfigurationSpec {
  /**
   * ID of the load balancer (set to empty to disable).
   */
  loadBalancerId?: string | null
  /**
   * List of load balancer backend configurations.
   */
  backends: LoadBalancerConfigurationSpecBackend[]
  /**
   * Auto-healing configuration.
   */
  autoHealing?: LoadBalancerConfigurationSpecAutoHealing | null
}


export interface ScalingPolicySpec {
  /**
   * Minimum number of instances in the group.
   */
  minimumSize?: number | null
  /**
   * Maximum number of instances in the group.
   */
  maximumSize?: number | null
  /**
   * Cooldown period after a scale out event.
   */
  scaleOutCooldown?: string | null
  /**
   * Cooldown period after a scale in event.
   */
  scaleInCooldown?: string | null
  /**
   * Number of instances to remove in a single scale in event.
   */
  scaleInStep?: number | null
  /**
   * Number of instances to add in a single scale out event.
   */
  scaleOutStep?: number | null
  /**
   * Fixed size scaling policy configuration.
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  fixedSize?: GroupScalingPolicyScalingPolicyFixedSize | null
  /**
   * CPU target scaling policy configuration.
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  cpuTarget?: GroupScalingPolicyScalingPolicyCpuTarget | null
  /**
   * Memory target scaling policy configuration.
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  memoryTarget?: GroupScalingPolicyScalingPolicyMemoryTarget | null
}


export interface GroupLoadBalancerConfiguration {
  loadBalancerId: string
  backends: GroupLoadBalancerConfigurationBackend[]
  autoHealing?: GroupLoadBalancerConfigurationAutoHealing | null
}


export interface GroupScalingPolicy {
  minimumSize: number
  maximumSize: number
  scaleOutCooldown?: string | null
  scaleInCooldown?: string | null
  scaleInStep: number
  scaleOutStep: number
  /**
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  fixedSize?: GroupScalingPolicyScalingPolicyFixedSize | null
  /**
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  cpuTarget?: GroupScalingPolicyScalingPolicyCpuTarget | null
  /**
   *
   * One-of ('target'): at most one of 'fixedSize', 'cpuTarget', 'memoryTarget' could be set.
   */
  memoryTarget?: GroupScalingPolicyScalingPolicyMemoryTarget | null
}


export interface GroupSummary {
  /**
   * SRN of the Autoscaling Group.
   */
  srn: string
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
  createdAt?: Date | null
  /**
   * Last update timestamp of the group.
   */
  updatedAt?: Date | null
  /**
   * The Instance template ID used to create instances in this group.
   */
  templateId: string
  /**
   * Optional load balancer ID.
   */
  loadBalancerId?: string | null
  /**
   * Current number of instances in the group.
   */
  currentSize: number
  /**
   * Most recent active alert if any.
   */
  latestOpenAlert?: Alert | null
  /**
   * The minimum number of instances in the group.
   */
  minimumSize: number
  /**
   * The maximum number of instances in the group.
   */
  maximumSize: number
  /**
   * Defines which metric the group uses for scaling (cpu, memory, or fixed size).
   */
  scalingPolicyTargetType: GroupSummaryScalingPolicyTargetType
  /**
   * Availability zone of the group.
   */
  zone: ScwZone
}


export interface Log {
  /**
   * Timestamp of the log entry.
   */
  timestamp?: Date | null
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
  zone?: ScwZone | null
  /**
   * Project ID to create the group in.
   */
  projectId?: string | null
  /**
   * Name of the autoscaling group.
   */
  name: string
  /**
   * Tags associated with the group.
   */
  tags?: string[] | null
  /**
   * Template ID for instances in this group.
   */
  templateId: string
  /**
   * Scaling policy configuration.
   */
  scalingPolicySpec?: ScalingPolicySpec | null
  /**
   * Optional load balancer configuration.
   */
  loadBalancerConfigurationSpec?: LoadBalancerConfigurationSpec | null
}


export type DeleteGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the group to delete.
   */
  groupId: string
}


export type GetGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the group to get.
   */
  groupId: string
}


export interface Group {
  /**
   * SRN of the Autoscaling Group.
   */
  srn: string
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
  createdAt?: Date | null
  /**
   * Last update timestamp of the group.
   */
  updatedAt?: Date | null
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
  lastScaleOutAt?: Date | null
  /**
   * Timestamp of the last scale in event.
   */
  lastScaleInAt?: Date | null
  /**
   * The Instance template ID used to create instances in this group.
   */
  templateId: string
  /**
   * Scaling policy configuration.
   */
  scalingPolicy?: GroupScalingPolicy | null
  /**
   * Optional load balancer configuration.
   */
  loadBalancerConfiguration?: GroupLoadBalancerConfiguration | null
  /**
   * Zone of the Autoscaling Group.
   */
  zone: ScwZone
}


export type ListAlertsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   *
   * One-of ('scope'): at most one of 'groupId', 'projectId' could be set.
   */
  groupId?: string | null
  pageToken?: string | null
  pageSize?: number | null
  /**
   *
   * One-of ('scope'): at most one of 'groupId', 'projectId' could be set.
   */
  projectId?: string | null
}


export interface ListAlertsResponse {
  /**
   * List of alerts.
   */
  alerts: Alert[]
  /**
   * Token for the next page of results.
   */
  nextPageToken?: string | null
  /**
   * Total number of alerts.
   */
  totalCount: number
}


export type ListGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Order criteria for listing groups.
   */
  orderBy?: ListGroupsRequestOrderBy | null
  /**
   * Page size for pagination.
   */
  pageSize?: number | null
  /**
   * Token for pagination.
   */
  pageToken?: string | null
  /**
   * Project ID to filter groups.
   */
  projectId?: string | null
  /**
   * Template ID to filter groups.
   */
  templateId?: string | null
  /**
   * Load balancer ID to filter groups.
   */
  loadBalancerId?: string | null
}


export interface ListGroupsResponse {
  /**
   * List of group summaries.
   */
  groupSummaries: GroupSummary[]
  /**
   * Token for the next page of results.
   */
  nextPageToken?: string | null
  /**
   * Total number of groups.
   */
  totalCount: number
}


export type ListLogsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  groupId: string
  pageToken?: string | null
  pageSize?: number | null
  startTime?: Date | null
  endTime?: Date | null
}


export interface ListLogsResponse {
  /**
   * List of log entries.
   */
  logs: Log[]
  /**
   * Token for the next page of results.
   */
  nextPageToken?: string | null
  /**
   * Total number of logs.
   */
  totalCount: number
}


export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  groupId: string
  pageToken?: string | null
  pageSize?: number | null
}


export interface ListServersResponse {
  /**
   * List of servers.
   */
  servers: Server[]
  /**
   * Token for the next page of results.
   */
  nextPageToken?: string | null
  /**
   * Total number of servers.
   */
  totalCount: number
}


export type RefreshGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  groupId: string
}


export type UpdateGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the group to update.
   */
  groupId: string
  /**
   * New name for the group.
   */
  name?: string | null
  /**
   * New tags for the group.
   */
  tags?: string[] | null
  /**
   * New template ID for instances.
   */
  templateId?: string | null
  /**
   * New scaling policy configuration.
   */
  scalingPolicySpec?: ScalingPolicySpec | null
  /**
   * New load balancer configuration.
   */
  loadBalancerConfigurationSpec?: LoadBalancerConfigurationSpec | null
}


