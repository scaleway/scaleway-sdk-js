import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMapOfObject,
} from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  Capacity,
  Loadbalancer,
  InstanceGroup,
  Metric,
  InstancePolicy,
  VolumeInstanceTemplateFromEmpty,
  VolumeInstanceTemplateFromSnapshot,
  VolumeInstanceTemplate,
  InstanceTemplate,
  InstanceGroupEvent,
  ListInstanceGroupEventsResponse,
  ListInstanceGroupsResponse,
  ListInstancePoliciesResponse,
  ListInstanceTemplatesResponse,
  CreateInstanceGroupRequest,
  CreateInstancePolicyRequest,
  CreateInstanceTemplateRequest,
  UpdateInstanceGroupRequestCapacity,
  UpdateInstanceGroupRequestLoadbalancer,
  UpdateInstanceGroupRequest,
  UpdateInstancePolicyRequestMetric,
  UpdateInstancePolicyRequest,
  UpdateInstanceTemplateRequest,
} from './types.gen.js'

const unmarshalCapacity = (data: unknown): Capacity => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Capacity' failed as data isn't a dictionary.`,
    )
  }

  return {
    cooldownDelay: data.cooldown_delay,
    maxReplicas: data.max_replicas,
    minReplicas: data.min_replicas,
  } as Capacity
}

const unmarshalLoadbalancer = (data: unknown): Loadbalancer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Loadbalancer' failed as data isn't a dictionary.`,
    )
  }

  return {
    backendIds: data.backend_ids,
    id: data.id,
    privateNetworkId: data.private_network_id,
  } as Loadbalancer
}

export const unmarshalInstanceGroup = (data: unknown): InstanceGroup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceGroup' failed as data isn't a dictionary.`,
    )
  }

  return {
    capacity: unmarshalCapacity(data.capacity),
    createdAt: unmarshalDate(data.created_at),
    errorMessages: data.error_messages,
    id: data.id,
    instanceTemplateId: data.instance_template_id,
    loadbalancer: unmarshalLoadbalancer(data.loadbalancer),
    name: data.name,
    projectId: data.project_id,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as InstanceGroup
}

const unmarshalMetric = (data: unknown): Metric => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Metric' failed as data isn't a dictionary.`,
    )
  }

  return {
    aggregate: data.aggregate,
    cockpitMetricName: data.cockpit_metric_name,
    managedMetric: data.managed_metric ? data.managed_metric : undefined,
    name: data.name,
    operator: data.operator,
    samplingRangeMin: data.sampling_range_min,
    threshold: data.threshold,
  } as Metric
}

export const unmarshalInstancePolicy = (data: unknown): InstancePolicy => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstancePolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    id: data.id,
    instanceGroupId: data.instance_group_id,
    metric: data.metric ? unmarshalMetric(data.metric) : undefined,
    name: data.name,
    priority: data.priority,
    type: data.type,
    value: data.value,
    zone: data.zone,
  } as InstancePolicy
}

const unmarshalVolumeInstanceTemplateFromEmpty = (
  data: unknown,
): VolumeInstanceTemplateFromEmpty => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeInstanceTemplateFromEmpty' failed as data isn't a dictionary.`,
    )
  }

  return {
    size: data.size,
  } as VolumeInstanceTemplateFromEmpty
}

const unmarshalVolumeInstanceTemplateFromSnapshot = (
  data: unknown,
): VolumeInstanceTemplateFromSnapshot => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeInstanceTemplateFromSnapshot' failed as data isn't a dictionary.`,
    )
  }

  return {
    size: data.size,
    snapshotId: data.snapshot_id,
  } as VolumeInstanceTemplateFromSnapshot
}

const unmarshalVolumeInstanceTemplate = (
  data: unknown,
): VolumeInstanceTemplate => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeInstanceTemplate' failed as data isn't a dictionary.`,
    )
  }

  return {
    boot: data.boot,
    fromEmpty: data.from_empty
      ? unmarshalVolumeInstanceTemplateFromEmpty(data.from_empty)
      : undefined,
    fromSnapshot: data.from_snapshot
      ? unmarshalVolumeInstanceTemplateFromSnapshot(data.from_snapshot)
      : undefined,
    name: data.name,
    perfIops: data.perf_iops,
    tags: data.tags,
    volumeType: data.volume_type,
  } as VolumeInstanceTemplate
}

export const unmarshalInstanceTemplate = (data: unknown): InstanceTemplate => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceTemplate' failed as data isn't a dictionary.`,
    )
  }

  return {
    cloudInit: data.cloud_init,
    commercialType: data.commercial_type,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    imageId: data.image_id,
    name: data.name,
    placementGroupId: data.placement_group_id,
    privateNetworkIds: data.private_network_ids,
    projectId: data.project_id,
    publicIpsV4Count: data.public_ips_v4_count,
    publicIpsV6Count: data.public_ips_v6_count,
    securityGroupId: data.security_group_id,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    volumes: unmarshalMapOfObject(
      data.volumes,
      unmarshalVolumeInstanceTemplate,
    ),
    zone: data.zone,
  } as InstanceTemplate
}

const unmarshalInstanceGroupEvent = (data: unknown): InstanceGroupEvent => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceGroupEvent' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    details: data.details,
    id: data.id,
    level: data.level,
    name: data.name,
    source: data.source,
  } as InstanceGroupEvent
}

export const unmarshalListInstanceGroupEventsResponse = (
  data: unknown,
): ListInstanceGroupEventsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstanceGroupEventsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    instanceEvents: unmarshalArrayOfObject(
      data.instance_events,
      unmarshalInstanceGroupEvent,
    ),
    totalCount: data.total_count,
  } as ListInstanceGroupEventsResponse
}

export const unmarshalListInstanceGroupsResponse = (
  data: unknown,
): ListInstanceGroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstanceGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    instanceGroups: unmarshalArrayOfObject(
      data.instance_groups,
      unmarshalInstanceGroup,
    ),
    totalCount: data.total_count,
  } as ListInstanceGroupsResponse
}

export const unmarshalListInstancePoliciesResponse = (
  data: unknown,
): ListInstancePoliciesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstancePoliciesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    policies: unmarshalArrayOfObject(data.policies, unmarshalInstancePolicy),
    totalCount: data.total_count,
  } as ListInstancePoliciesResponse
}

export const unmarshalListInstanceTemplatesResponse = (
  data: unknown,
): ListInstanceTemplatesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstanceTemplatesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    instanceTemplates: unmarshalArrayOfObject(
      data.instance_templates,
      unmarshalInstanceTemplate,
    ),
    totalCount: data.total_count,
  } as ListInstanceTemplatesResponse
}

const marshalCapacity = (
  request: Capacity,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cooldown_delay: request.cooldownDelay,
  max_replicas: request.maxReplicas,
  min_replicas: request.minReplicas,
})

const marshalLoadbalancer = (
  request: Loadbalancer,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_ids: request.backendIds,
  id: request.id,
  private_network_id: request.privateNetworkId,
})

export const marshalCreateInstanceGroupRequest = (
  request: CreateInstanceGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  capacity: marshalCapacity(request.capacity, defaults),
  loadbalancer: marshalLoadbalancer(request.loadbalancer, defaults),
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  template_id: request.templateId,
})

const marshalMetric = (
  request: Metric,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  aggregate: request.aggregate,
  name: request.name,
  operator: request.operator,
  sampling_range_min: request.samplingRangeMin,
  threshold: request.threshold,
  ...resolveOneOf([
    { param: 'managed_metric', value: request.managedMetric },
    { param: 'cockpit_metric_name', value: request.cockpitMetricName },
  ]),
})

export const marshalCreateInstancePolicyRequest = (
  request: CreateInstancePolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  instance_group_id: request.instanceGroupId,
  name: request.name,
  priority: request.priority,
  type: request.type,
  value: request.value,
  ...resolveOneOf([
    {
      param: 'metric',
      value:
        request.metric !== undefined
          ? marshalMetric(request.metric, defaults)
          : undefined,
    },
  ]),
})

const marshalVolumeInstanceTemplateFromEmpty = (
  request: VolumeInstanceTemplateFromEmpty,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  size: request.size,
})

const marshalVolumeInstanceTemplateFromSnapshot = (
  request: VolumeInstanceTemplateFromSnapshot,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  size: request.size,
  snapshot_id: request.snapshotId,
})

const marshalVolumeInstanceTemplate = (
  request: VolumeInstanceTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  boot: request.boot,
  name: request.name,
  tags: request.tags,
  volume_type: request.volumeType,
  ...resolveOneOf([
    {
      param: 'from_empty',
      value:
        request.fromEmpty !== undefined
          ? marshalVolumeInstanceTemplateFromEmpty(request.fromEmpty, defaults)
          : undefined,
    },
    {
      param: 'from_snapshot',
      value:
        request.fromSnapshot !== undefined
          ? marshalVolumeInstanceTemplateFromSnapshot(
              request.fromSnapshot,
              defaults,
            )
          : undefined,
    },
  ]),
  ...resolveOneOf([{ param: 'perf_iops', value: request.perfIops }]),
})

export const marshalCreateInstanceTemplateRequest = (
  request: CreateInstanceTemplateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cloud_init: request.cloudInit,
  commercial_type: request.commercialType,
  image_id: request.imageId,
  name: request.name,
  placement_group_id: request.placementGroupId,
  private_network_ids: request.privateNetworkIds,
  project_id: request.projectId ?? defaults.defaultProjectId,
  public_ips_v4_count: request.publicIpsV4Count,
  public_ips_v6_count: request.publicIpsV6Count,
  security_group_id: request.securityGroupId,
  tags: request.tags,
  volumes: Object.entries(request.volumes).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: marshalVolumeInstanceTemplate(value, defaults),
    }),
    {},
  ),
})

const marshalUpdateInstanceGroupRequestCapacity = (
  request: UpdateInstanceGroupRequestCapacity,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cooldown_delay: request.cooldownDelay,
  max_replicas: request.maxReplicas,
  min_replicas: request.minReplicas,
})

const marshalUpdateInstanceGroupRequestLoadbalancer = (
  request: UpdateInstanceGroupRequestLoadbalancer,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backend_ids: request.backendIds,
})

export const marshalUpdateInstanceGroupRequest = (
  request: UpdateInstanceGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  capacity:
    request.capacity !== undefined
      ? marshalUpdateInstanceGroupRequestCapacity(request.capacity, defaults)
      : undefined,
  loadbalancer:
    request.loadbalancer !== undefined
      ? marshalUpdateInstanceGroupRequestLoadbalancer(
          request.loadbalancer,
          defaults,
        )
      : undefined,
  name: request.name,
  tags: request.tags,
})

const marshalUpdateInstancePolicyRequestMetric = (
  request: UpdateInstancePolicyRequestMetric,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  aggregate: request.aggregate,
  name: request.name,
  operator: request.operator,
  sampling_range_min: request.samplingRangeMin,
  threshold: request.threshold,
  ...resolveOneOf([
    { param: 'managed_metric', value: request.managedMetric },
    { param: 'cockpit_metric_name', value: request.cockpitMetricName },
  ]),
})

export const marshalUpdateInstancePolicyRequest = (
  request: UpdateInstancePolicyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  name: request.name,
  priority: request.priority,
  type: request.type,
  value: request.value,
  ...resolveOneOf([
    {
      param: 'metric',
      value:
        request.metric !== undefined
          ? marshalUpdateInstancePolicyRequestMetric(request.metric, defaults)
          : undefined,
    },
  ]),
})

export const marshalUpdateInstanceTemplateRequest = (
  request: UpdateInstanceTemplateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cloud_init: request.cloudInit,
  commercial_type: request.commercialType,
  image_id: request.imageId,
  name: request.name,
  placement_group_id: request.placementGroupId,
  private_network_ids: request.privateNetworkIds,
  public_ips_v4_count: request.publicIpsV4Count,
  public_ips_v6_count: request.publicIpsV6Count,
  security_group_id: request.securityGroupId,
  tags: request.tags,
  volumes:
    request.volumes !== undefined
      ? Object.entries(request.volumes).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: marshalVolumeInstanceTemplate(value, defaults),
          }),
          {},
        )
      : undefined,
})
