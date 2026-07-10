
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  GroupLoadBalancerConfigurationAutoHealing,
  GroupLoadBalancerConfigurationBackend,
  GroupScalingPolicyScalingPolicyCpuTarget,
  GroupScalingPolicyScalingPolicyFixedSize,
  GroupScalingPolicyScalingPolicyMemoryTarget,
  Alert,
  GroupLoadBalancerConfiguration,
  GroupScalingPolicy,
  Group,
  ListAlertsResponse,
  GroupSummary,
  ListGroupsResponse,
  Log,
  ListLogsResponse,
  Server,
  ListServersResponse,
  LoadBalancerConfigurationSpecAutoHealing,
  LoadBalancerConfigurationSpecBackend,
  LoadBalancerConfigurationSpec,
  ScalingPolicySpec,
  CreateGroupRequest,
  UpdateGroupRequest,
} from './types.gen.js'

const unmarshalGroupLoadBalancerConfigurationAutoHealing = (data: unknown): GroupLoadBalancerConfigurationAutoHealing => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GroupLoadBalancerConfigurationAutoHealing' failed as data isn't a dictionary.`,
    )
  }

  return {
    enabled: data.enabled,
    gracePeriod: data.grace_period,
  } as GroupLoadBalancerConfigurationAutoHealing
}

const unmarshalGroupLoadBalancerConfigurationBackend = (data: unknown): GroupLoadBalancerConfigurationBackend => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GroupLoadBalancerConfigurationBackend' failed as data isn't a dictionary.`,
    )
  }

  return {
    addressFamily: data.address_family,
    backendId: data.backend_id,
    privateNetworkId: data.private_network_id,
  } as GroupLoadBalancerConfigurationBackend
}

const unmarshalGroupScalingPolicyScalingPolicyCpuTarget = (data: unknown): GroupScalingPolicyScalingPolicyCpuTarget => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GroupScalingPolicyScalingPolicyCpuTarget' failed as data isn't a dictionary.`,
    )
  }

  return {
    targetAvgPercent: data.target_avg_percent,
  } as GroupScalingPolicyScalingPolicyCpuTarget
}

const unmarshalGroupScalingPolicyScalingPolicyFixedSize = (data: unknown): GroupScalingPolicyScalingPolicyFixedSize => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GroupScalingPolicyScalingPolicyFixedSize' failed as data isn't a dictionary.`,
    )
  }

  return {
    size: data.size,
  } as GroupScalingPolicyScalingPolicyFixedSize
}

const unmarshalGroupScalingPolicyScalingPolicyMemoryTarget = (data: unknown): GroupScalingPolicyScalingPolicyMemoryTarget => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GroupScalingPolicyScalingPolicyMemoryTarget' failed as data isn't a dictionary.`,
    )
  }

  return {
    targetAvgPercent: data.target_avg_percent,
  } as GroupScalingPolicyScalingPolicyMemoryTarget
}

const unmarshalAlert = (data: unknown): Alert => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Alert' failed as data isn't a dictionary.`,
    )
  }

  return {
    closedAt: unmarshalDate(data.closed_at),
    failingQuotas: data.failing_quotas,
    openedAt: unmarshalDate(data.opened_at),
    type: data.type,
  } as Alert
}

const unmarshalGroupLoadBalancerConfiguration = (data: unknown): GroupLoadBalancerConfiguration => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GroupLoadBalancerConfiguration' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoHealing: data.auto_healing ? unmarshalGroupLoadBalancerConfigurationAutoHealing(data.auto_healing) : undefined,
    backends: unmarshalArrayOfObject(data.backends, unmarshalGroupLoadBalancerConfigurationBackend),
    loadBalancerId: data.load_balancer_id,
  } as GroupLoadBalancerConfiguration
}

const unmarshalGroupScalingPolicy = (data: unknown): GroupScalingPolicy => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GroupScalingPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpuTarget: data.cpu_target ? unmarshalGroupScalingPolicyScalingPolicyCpuTarget(data.cpu_target) : undefined,
    fixedSize: data.fixed_size ? unmarshalGroupScalingPolicyScalingPolicyFixedSize(data.fixed_size) : undefined,
    maximumSize: data.maximum_size,
    memoryTarget: data.memory_target ? unmarshalGroupScalingPolicyScalingPolicyMemoryTarget(data.memory_target) : undefined,
    minimumSize: data.minimum_size,
    scaleInCooldown: data.scale_in_cooldown,
    scaleInStep: data.scale_in_step,
    scaleOutCooldown: data.scale_out_cooldown,
    scaleOutStep: data.scale_out_step,
  } as GroupScalingPolicy
}

export const unmarshalGroup = (data: unknown): Group => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Group' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    currentSize: data.current_size,
    id: data.id,
    lastScaleInAt: unmarshalDate(data.last_scale_in_at),
    lastScaleOutAt: unmarshalDate(data.last_scale_out_at),
    loadBalancerConfiguration: data.load_balancer_configuration ? unmarshalGroupLoadBalancerConfiguration(data.load_balancer_configuration) : undefined,
    name: data.name,
    openAlerts: unmarshalArrayOfObject(data.open_alerts, unmarshalAlert),
    projectId: data.project_id,
    scalingPolicy: data.scaling_policy ? unmarshalGroupScalingPolicy(data.scaling_policy) : undefined,
    status: data.status,
    tags: data.tags,
    targetSize: data.target_size,
    templateId: data.template_id,
    updatedAt: unmarshalDate(data.updated_at),
  } as Group
}

export const unmarshalListAlertsResponse = (data: unknown): ListAlertsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAlertsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    alerts: unmarshalArrayOfObject(data.alerts, unmarshalAlert),
    nextPageToken: data.next_page_token,
    totalCount: data.total_count,
  } as ListAlertsResponse
}

const unmarshalGroupSummary = (data: unknown): GroupSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GroupSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    currentSize: data.current_size,
    id: data.id,
    latestOpenAlert: data.latest_open_alert ? unmarshalAlert(data.latest_open_alert) : undefined,
    loadBalancerId: data.load_balancer_id,
    name: data.name,
    projectId: data.project_id,
    status: data.status,
    tags: data.tags,
    templateId: data.template_id,
    updatedAt: unmarshalDate(data.updated_at),
  } as GroupSummary
}

export const unmarshalListGroupsResponse = (data: unknown): ListGroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    groupSummaries: unmarshalArrayOfObject(data.group_summaries, unmarshalGroupSummary),
    nextPageToken: data.next_page_token,
    totalCount: data.total_count,
  } as ListGroupsResponse
}

const unmarshalLog = (data: unknown): Log => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Log' failed as data isn't a dictionary.`,
    )
  }

  return {
    level: data.level,
    message: data.message,
    timestamp: unmarshalDate(data.timestamp),
  } as Log
}

export const unmarshalListLogsResponse = (data: unknown): ListLogsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLogsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    logs: unmarshalArrayOfObject(data.logs, unmarshalLog),
    nextPageToken: data.next_page_token,
    totalCount: data.total_count,
  } as ListLogsResponse
}

const unmarshalServer = (data: unknown): Server => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverId: data.server_id,
  } as Server
}

export const unmarshalListServersResponse = (data: unknown): ListServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextPageToken: data.next_page_token,
    servers: unmarshalArrayOfObject(data.servers, unmarshalServer),
    totalCount: data.total_count,
  } as ListServersResponse
}

const marshalLoadBalancerConfigurationSpecAutoHealing = (
  request: LoadBalancerConfigurationSpecAutoHealing,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enabled: request.enabled,
  grace_period: request.gracePeriod,
})

const marshalLoadBalancerConfigurationSpecBackend = (
  request: LoadBalancerConfigurationSpecBackend,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address_family: request.addressFamily,
  backend_id: request.backendId,
  private_network_id: request.privateNetworkId,
})

const marshalGroupScalingPolicyScalingPolicyCpuTarget = (
  request: GroupScalingPolicyScalingPolicyCpuTarget,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  target_avg_percent: request.targetAvgPercent,
})

const marshalGroupScalingPolicyScalingPolicyFixedSize = (
  request: GroupScalingPolicyScalingPolicyFixedSize,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  size: request.size,
})

const marshalGroupScalingPolicyScalingPolicyMemoryTarget = (
  request: GroupScalingPolicyScalingPolicyMemoryTarget,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  target_avg_percent: request.targetAvgPercent,
})

const marshalLoadBalancerConfigurationSpec = (
  request: LoadBalancerConfigurationSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  auto_healing: ((request.autoHealing !== undefined) ?  marshalLoadBalancerConfigurationSpecAutoHealing(request.autoHealing, defaults): undefined),
  backends:  request.backends.map(elt => marshalLoadBalancerConfigurationSpecBackend(elt, defaults)),
  load_balancer_id: request.loadBalancerId,
})

const marshalScalingPolicySpec = (
  request: ScalingPolicySpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  maximum_size: request.maximumSize,
  minimum_size: request.minimumSize,
  scale_in_cooldown: request.scaleInCooldown,
  scale_in_step: request.scaleInStep,
  scale_out_cooldown: request.scaleOutCooldown,
  scale_out_step: request.scaleOutStep,  
  ...resolveOneOf([
    {param: 'fixed_size',
      value: (request.fixedSize !== undefined) ? marshalGroupScalingPolicyScalingPolicyFixedSize(request.fixedSize, defaults)
      : undefined,
    },
    {param: 'cpu_target',
      value: (request.cpuTarget !== undefined) ? marshalGroupScalingPolicyScalingPolicyCpuTarget(request.cpuTarget, defaults)
      : undefined,
    },
    {param: 'memory_target',
      value: (request.memoryTarget !== undefined) ? marshalGroupScalingPolicyScalingPolicyMemoryTarget(request.memoryTarget, defaults)
      : undefined,
    },
  ]),
})

export const marshalCreateGroupRequest = (
  request: CreateGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  load_balancer_configuration_spec: ((request.loadBalancerConfigurationSpec !== undefined) ?  marshalLoadBalancerConfigurationSpec(request.loadBalancerConfigurationSpec, defaults): undefined),
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  scaling_policy_spec: ((request.scalingPolicySpec !== undefined) ?  marshalScalingPolicySpec(request.scalingPolicySpec, defaults): undefined),
  tags: request.tags,
  template_id: request.templateId,
})

export const marshalUpdateGroupRequest = (
  request: UpdateGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  load_balancer_configuration_spec: ((request.loadBalancerConfigurationSpec !== undefined) ?  marshalLoadBalancerConfigurationSpec(request.loadBalancerConfigurationSpec, defaults): undefined),
  name: request.name,
  scaling_policy_spec: ((request.scalingPolicySpec !== undefined) ?  marshalScalingPolicySpec(request.scalingPolicySpec, defaults): undefined),
  tags: request.tags,
  template_id: request.templateId,
})
