// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone as ScwZone} from '@scaleway/sdk-client'


export type InstanceGroupEventLevel =
  | 'info'
  | 'success'
  | 'error'

export type InstanceGroupEventSource =
  | 'unknown_source'
  | 'watcher'
  | 'scaler'
  | 'instance_manager'
  | 'supervisor'

export type InstancePolicyAction =
  | 'unknown_action'
  | 'scale_up'
  | 'scale_down'

export type InstancePolicyType =
  | 'unknown_type'
  | 'flat_count'
  | 'percent_of_total_group'
  | 'set_total_group'

export type InstanceTemplateStatus =
  | 'unknown_status'
  | 'ready'
  | 'error'

export type ListInstanceGroupEventsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'

export type ListInstanceGroupsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'

export type ListInstancePoliciesRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'

export type ListInstanceTemplatesRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'

export type MetricAggregate =
  | 'aggregate_unknown'
  | 'aggregate_average'
  | 'aggregate_max'
  | 'aggregate_min'
  | 'aggregate_sum'

export type MetricManagedMetric =
  | 'managed_metric_unknown'
  | 'managed_metric_instance_cpu'
  | 'managed_metric_instance_network_in'
  | 'managed_metric_instance_network_out'
  | 'managed_loadbalancer_backend_connections_rate'
  | 'managed_loadbalancer_backend_throughput'

export type MetricOperator =
  | 'operator_unknown'
  | 'operator_greater_than'
  | 'operator_less_than'

export type UpdateInstancePolicyRequestMetricAggregate =
  | 'aggregate_unknown'
  | 'aggregate_average'
  | 'aggregate_max'
  | 'aggregate_min'
  | 'aggregate_sum'

export type UpdateInstancePolicyRequestMetricManagedMetric =
  | 'managed_metric_unknown'
  | 'managed_metric_instance_cpu'
  | 'managed_metric_instance_network_in'
  | 'managed_metric_instance_network_out'
  | 'managed_loadbalancer_backend_connections_rate'
  | 'managed_loadbalancer_backend_throughput'

export type UpdateInstancePolicyRequestMetricOperator =
  | 'operator_unknown'
  | 'operator_greater_than'
  | 'operator_less_than'

export type VolumeInstanceTemplateVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'sbs'

export interface VolumeInstanceTemplateFromEmpty {
  size: number
}


export interface VolumeInstanceTemplateFromSnapshot {
  size?: number
  snapshotId: string
}


export interface Capacity {
  /**
   * Maximum count of Instances for the Instance group.
   */
  maxReplicas: number
  /**
   * Minimum count of Instances for the Instance group.
   */
  minReplicas: number
  /**
   * Time (in seconds) after a scaling action during which requests to carry out a new scaling action will be denied.
   */
  cooldownDelay?: string
}


export interface Loadbalancer {
  /**
   * Load Balancer ID.
   */
  id: string
  /**
   * Load Balancer backend IDs.
   */
  backendIds: string[]
  /**
   * ID of the Private Network attached to the Load Balancer.
   */
  privateNetworkId: string
}


export interface Metric {
  /**
   * Name or description of the metric policy.
   */
  name: string
  /**
   * Managed metric to use for this policy. These are available by default in Cockpit without any configuration or `node_exporter`. The chosen metric forms the basis of the condition that will be checked to determine whether a scaling action should be triggered.
   *
   * One-of ('metricType'): at most one of 'managedMetric', 'cockpitMetricName' could be set.
   */
  managedMetric?: MetricManagedMetric
  /**
   * Custom metric to use for this policy. This must be stored in Scaleway Cockpit. The metric forms the basis of the condition that will be checked to determine whether a scaling action should be triggered.
   *
   * One-of ('metricType'): at most one of 'managedMetric', 'cockpitMetricName' could be set.
   */
  cockpitMetricName?: string
  /**
   * Operator used when comparing the threshold value of the chosen `metric` to the actual sampled and aggregated value.
   */
  operator: MetricOperator
  /**
   * How the values sampled for the `metric` should be aggregated.
   */
  aggregate: MetricAggregate
  /**
   * Interval of time, in minutes, during which metric is sampled.
   */
  samplingRangeMin: number
  /**
   * Threshold value to measure the aggregated sampled `metric` value against. Combined with the `operator` field, determines whether a scaling action should be triggered.
   */
  threshold: number
}


export interface VolumeInstanceTemplate {
  /**
   * Name of the volume.
   */
  name: string
  /**
   * The maximum IO/s expected, according to the different options available in stock (`5000 | 15000`).
   *
   * One-of ('requirements'): at most one of 'perfIops' could be set.
   */
  perfIops?: number
  /**
   * Specify the size of the new volume if creating a new one from scratch.
   *
   * One-of ('from'): at most one of 'fromEmpty', 'fromSnapshot' could be set.
   */
  fromEmpty?: VolumeInstanceTemplateFromEmpty
  /**
   * Specify the snapshot ID of the original snapshot.
   *
   * One-of ('from'): at most one of 'fromEmpty', 'fromSnapshot' could be set.
   */
  fromSnapshot?: VolumeInstanceTemplateFromSnapshot
  /**
   * List of tags assigned to the volume.
   */
  tags: string[]
  /**
   * Force the Instance to boot on this volume.
   */
  boot: boolean
  /**
   * Type of the volume.
   */
  volumeType: VolumeInstanceTemplateVolumeType
}


export interface InstanceGroupEvent {
  /**
   * Instance group event ID.
   */
  id: string
  /**
   * Log source.
   */
  source: InstanceGroupEventSource
  /**
   * The severity of the log.
   */
  level: InstanceGroupEventLevel
  /**
   * Log title.
   */
  name: string
  /**
   * Date and time of the log.
   */
  createdAt?: Date
  /**
   * Full text of the log.
   */
  details?: string
}


export interface InstanceGroup {
  /**
   * Instance group ID.
   */
  id: string
  /**
   * Project ID of the Instance group.
   */
  projectId: string
  /**
   * Name of the Instance group.
   */
  name: string
  /**
   * Instance group tags.
   */
  tags: string[]
  /**
   * Template ID (ID of the Instance template to attach to the Instance group).
   */
  instanceTemplateId: string
  /**
   * Specification of the minimum and maximum replicas for the Instance group, and the cooldown interval between two scaling events.
   */
  capacity: Capacity
  /**
   * Specification of the Load Balancer linked to the Instance group.
   */
  loadbalancer: Loadbalancer
  /**
   * Any configuration errors for dependencies (Load Balancer, Private Network, Instance template etc.).
   */
  errorMessages: string[]
  /**
   * Date on which the Instance group was created.
   */
  createdAt?: Date
  /**
   * Date on which the Instance group was last updated.
   */
  updatedAt?: Date
  /**
   * Zone for this resource.
   */
  zone: ScwZone
}


export interface InstancePolicy {
  /**
   * Scaling policy ID.
   */
  id: string
  /**
   * Name of scaling policy.
   */
  name: string
  /**
   * Managed metric to use for this policy. These are available by default in Cockpit without any configuration or `node_exporter`. The chosen metric forms the basis of the condition that will be checked to determine whether a scaling action should be triggered.
   *
   * One-of ('trigger'): at most one of 'metric' could be set.
   */
  metric?: Metric
  /**
   * Action to execute when the metric-based condition is met.
   */
  action: InstancePolicyAction
  /**
   * How to use the number defined in `value` when determining by how many Instances to scale up/down.
   */
  type: InstancePolicyType
  /**
   * Number representing the magnitude of the scaling action to take for the Instance group.
   */
  value: number
  /**
   * Priority of this policy compared to all other scaling policies. The lower the number, the higher the priority (higher priority will be processed sooner in the order).
   */
  priority: number
  /**
   * Instance group ID related to this policy.
   */
  instanceGroupId: string
  /**
   * Zone for this resource.
   */
  zone: ScwZone
}


export interface InstanceTemplate {
  /**
   * ID of Instance template resource.
   */
  id: string
  /**
   * Name of Instance commercial type.
   */
  commercialType: string
  /**
   * Instance image ID. Can be an ID of a marketplace or personal image. This image must be compatible with `volume` and `commercial_type` template.
   */
  imageId?: string
  /**
   * Template of Instance volume.
   */
  volumes: Record<string, VolumeInstanceTemplate>
  /**
   * List of tags for the Instance template.
   */
  tags: string[]
  /**
   * Instance security group ID (optional).
   */
  securityGroupId?: string
  /**
   * Instance placement group ID. This is optional, but it is highly recommended to set a preference for Instance location within Availability Zone.
   */
  placementGroupId?: string
  /**
   * Number of flexible IPv4 addresses to attach to the new Instance.
   */
  publicIpsV4Count?: number
  /**
   * Number of flexible IPv6 addresses to attach to the new Instance.
   */
  publicIpsV6Count?: number
  /**
   * ID of the Project containing the Instance template resource.
   */
  projectId: string
  /**
   * Name of Instance template.
   */
  name: string
  /**
   * Private Network IDs to attach to the new Instance.
   */
  privateNetworkIds: string[]
  /**
   * Status of Instance template.
   */
  status: InstanceTemplateStatus
  /**
   * Cloud-config file must be passed in Base64 format. Cloud-config files are special scripts designed to be run by the cloud-init process. These are generally used for initial configuration on the very first boot of a server.
   */
  cloudInit?: string
  /**
   * Date on which the Instance template was created.
   */
  createdAt?: Date
  /**
   * Date on which the Instance template was last updated.
   */
  updatedAt?: Date
  /**
   * Zone for this resource.
   */
  zone: ScwZone
}


export interface UpdateInstanceGroupRequestCapacity {
  /**
   * Maximum count of Instances for the Instance group.
   */
  maxReplicas?: number
  /**
   * Minimum count of Instances for the Instance group.
   */
  minReplicas?: number
  /**
   * Time (in seconds) after a scaling action during which requests to carry out a new scaling action will be denied.
   */
  cooldownDelay?: string
}


export interface UpdateInstanceGroupRequestLoadbalancer {
  /**
   * Load Balancer backend IDs.
   */
  backendIds?: string[]
}


export interface UpdateInstancePolicyRequestMetric {
  /**
   * Name or description of your metric policy.
   */
  name?: string
  /**
   * Managed metric to use for this policy. These are available by default in Cockpit without any configuration or `node_exporter`. The chosen metric forms the basis of the condition that will be checked to determine whether a scaling action should be triggered.
   *
   * One-of ('metricType'): at most one of 'managedMetric', 'cockpitMetricName' could be set.
   */
  managedMetric?: UpdateInstancePolicyRequestMetricManagedMetric
  /**
   * Custom metric to use for this policy. This must be stored in Scaleway Cockpit. The metric forms the basis of the condition that will be checked to determine whether a scaling action should be triggered.
   *
   * One-of ('metricType'): at most one of 'managedMetric', 'cockpitMetricName' could be set.
   */
  cockpitMetricName?: string
  /**
   * Operator used when comparing the threshold value of the chosen `metric` to the actual sampled and aggregated value.
   */
  operator: UpdateInstancePolicyRequestMetricOperator
  /**
   * How the values sampled for the `metric` should be aggregated.
   */
  aggregate: UpdateInstancePolicyRequestMetricAggregate
  /**
   * Interval of time, in minutes, during which metric is sampled.
   */
  samplingRangeMin?: number
  /**
   * Threshold value to measure the aggregated sampled `metric` value against. Combined with the `operator` field, determines whether a scaling action should be triggered.
   */
  threshold?: number
}


export type CreateInstanceGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project ID to filter for, only Instance groups from this Project will be returned.
   */
  projectId?: string
  /**
   * Name of Instance group.
   */
  name: string
  /**
   * List of tags for the Instance group.
   */
  tags?: string[]
  /**
   * Template ID (ID of the Instance template to attach to the Instance group).
   */
  templateId: string
  /**
   * Specification of the minimum and maximum replicas for the Instance group, and the cooldown interval between two scaling events.
   */
  capacity: Capacity
  /**
   * Specification of the Load Balancer to link to the Instance group.
   */
  loadbalancer: Loadbalancer
}


export type CreateInstancePolicyRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Name of the policy.
   */
  name: string
  /**
   * Cockpit metric to use when determining whether to trigger a scale up/down action.
   *
   * One-of ('trigger'): at most one of 'metric' could be set.
   */
  metric?: Metric
  /**
   * Action to execute when the metric-based condition is met.
   */
  action: InstancePolicyAction
  /**
   * How to use the number defined in `value` when determining by how many Instances to scale up/down.
   */
  type: InstancePolicyType
  /**
   * Value representing the magnitude of the scaling action to take for the Instance group. Depending on the `type` parameter, this number could represent a total number of Instances in the group, a number of Instances to add, or a percentage to scale the group by.
   */
  value: number
  /**
   * Priority of this policy compared to all other scaling policies. This determines the processing order. The lower the number, the higher the priority.
   */
  priority: number
  /**
   * Instance group ID related to this policy.
   */
  instanceGroupId: string
}


export type CreateInstanceTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Name of Instance commercial type.
   */
  commercialType: string
  /**
   * Instance image ID. Can be an ID of a marketplace or personal image. This image must be compatible with `volume` and `commercial_type` template.
   */
  imageId?: string
  /**
   * Template of Instance volume.
   */
  volumes: Record<string, VolumeInstanceTemplate>
  /**
   * List of tags for the Instance template.
   */
  tags?: string[]
  /**
   * Instance security group ID (optional).
   */
  securityGroupId?: string
  /**
   * Instance placement group ID. This is optional, but it is highly recommended to set a preference for Instance location within Availability Zone.
   */
  placementGroupId?: string
  /**
   * Number of flexible IPv4 addresses to attach to the new Instance.
   */
  publicIpsV4Count?: number
  /**
   * Number of flexible IPv6 addresses to attach to the new Instance.
   */
  publicIpsV6Count?: number
  /**
   * ID of the Project containing the Instance template resource.
   */
  projectId?: string
  /**
   * Name of Instance template.
   */
  name: string
  /**
   * Private Network IDs to attach to the new Instance.
   */
  privateNetworkIds?: string[]
  /**
   * Cloud-config file must be passed in Base64 format. Cloud-config files are special scripts designed to be run by the cloud-init process. These are generally used for initial configuration on the very first boot of a server.
   */
  cloudInit?: string
}


export type DeleteInstanceGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the Instance group to delete.
   */
  instanceGroupId: string
}


export type DeleteInstancePolicyRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the policy to delete.
   */
  policyId: string
}


export type DeleteInstanceTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the template to delete.
   */
  templateId: string
}


export type GetInstanceGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the requested Instance group.
   */
  instanceGroupId: string
}


export type GetInstancePolicyRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Policy ID.
   */
  policyId: string
}


export type GetInstanceTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Template ID of the resource.
   */
  templateId: string
}


export type ListInstanceGroupEventsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * List all event logs for the Instance group ID.
   */
  instanceGroupId: string
  /**
   * Sort order of Instance groups in the response.
   */
  orderBy?: ListInstanceGroupEventsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of Instance groups to return per page.
   */
  pageSize?: number
}


export interface ListInstanceGroupEventsResponse {
  /**
   * Paginated list of Instance groups.
   */
  instanceEvents: InstanceGroupEvent[]
  /**
   * Count of all Instance groups matching the requested criteria.
   */
  totalCount: number
}


export type ListInstanceGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Sort order of Instance groups in the response.
   */
  orderBy?: ListInstanceGroupsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of Instance groups to return per page.
   */
  pageSize?: number
}


export interface ListInstanceGroupsResponse {
  /**
   * Paginated list of Instance groups.
   */
  instanceGroups: InstanceGroup[]
  /**
   * Count of all Instance groups matching the requested criteria.
   */
  totalCount: number
}


export type ListInstancePoliciesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Sort order of Instance groups in the response.
   */
  orderBy?: ListInstancePoliciesRequestOrderBy
  /**
   * Instance group ID.
   */
  instanceGroupId: string
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of scaling policies to return per page.
   */
  pageSize?: number
}


export interface ListInstancePoliciesResponse {
  /**
   * Paginated list of policies.
   */
  policies: InstancePolicy[]
  /**
   * Count of all policies matching the requested criteria.
   */
  totalCount: number
}


export type ListInstanceTemplatesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Sort order of Instance groups in the response.
   */
  orderBy?: ListInstanceTemplatesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of Instance groups to return per page.
   */
  pageSize?: number
}


export interface ListInstanceTemplatesResponse {
  /**
   * Count of all templates matching the requested criteria.
   */
  totalCount: number
  /**
   * Paginated list of Instance templates.
   */
  instanceTemplates: InstanceTemplate[]
}


export type UpdateInstanceGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Instance group ID to update.
   */
  instanceGroupId: string
  /**
   * Name of Instance group.
   */
  name?: string
  /**
   * List of tags for the Load Balancer.
   */
  tags?: string[]
  /**
   * Specification of the minimum and maximum replicas for the Instance group, and the cooldown interval between two scaling events.
   */
  capacity?: UpdateInstanceGroupRequestCapacity
  /**
   * Specification of the Load Balancer to link to the Instance group.
   */
  loadbalancer?: UpdateInstanceGroupRequestLoadbalancer
}


export type UpdateInstancePolicyRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Policy ID to update.
   */
  policyId: string
  /**
   * Policy name to update.
   */
  name?: string
  /**
   * Metric specification to update (Cockpit metric to use when determining whether to trigger a scale up/down action).
   *
   * One-of ('trigger'): at most one of 'metric' could be set.
   */
  metric?: UpdateInstancePolicyRequestMetric
  /**
   * Action to update (action to execute when the metric-based condition is met).
   */
  action?: InstancePolicyAction
  /**
   * Type to update (how to use the number defined in `value` when determining by how many Instances to scale up/down).
   */
  type?: InstancePolicyType
  /**
   * Value to update (number representing the magnitude of the scaling action to take for the Instance group).
   */
  value?: number
  /**
   * Priority to update (priority of this policy compared to all other scaling policies. The lower the number, the higher the priority).
   */
  priority?: number
}


export type UpdateInstanceTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Template ID of the resource.
   */
  templateId: string
  /**
   * Name of Instance commercial type.
   */
  commercialType?: string
  /**
   * Instance image ID. Can be an ID of a marketplace or personal image. This image must be compatible with `volume` and `commercial_type` template.
   */
  imageId?: string
  /**
   * Template of Instance volume.
   */
  volumes?: Record<string, VolumeInstanceTemplate>
  /**
   * List of tags for the Instance template.
   */
  tags?: string[]
  /**
   * Instance security group ID (optional).
   */
  securityGroupId?: string
  /**
   * Instance placement group ID. This is optional, but it is highly recommended to set a preference for Instance location within Availability Zone.
   */
  placementGroupId?: string
  /**
   * Number of flexible IPv4 addresses to attach to the new Instance.
   */
  publicIpsV4Count?: number
  /**
   * Number of flexible IPv6 addresses to attach to the new Instance.
   */
  publicIpsV6Count?: number
  /**
   * Name of Instance template.
   */
  name?: string
  /**
   * Private Network IDs to attach to the new Instance.
   */
  privateNetworkIds?: string[]
  /**
   * Cloud-config file must be passed in Base64 format. Cloud-config files are special scripts designed to be run by the cloud-init process. These are generally used for initial configuration on the very first boot of a server.
   */
  cloudInit?: string
}


