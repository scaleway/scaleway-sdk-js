// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  Cluster,
  ClusterAutoUpgrade,
  ClusterAutoscalerConfig,
  ClusterOpenIDConnectConfig,
  ClusterType,
  CreateClusterRequest,
  CreateClusterRequestAutoUpgrade,
  CreateClusterRequestAutoscalerConfig,
  CreateClusterRequestOpenIDConnectConfig,
  CreateClusterRequestPoolConfig,
  CreateClusterRequestPoolConfigUpgradePolicy,
  CreatePoolRequest,
  CreatePoolRequestUpgradePolicy,
  ExternalNode,
  ListClusterAvailableTypesResponse,
  ListClusterAvailableVersionsResponse,
  ListClusterTypesResponse,
  ListClustersResponse,
  ListNodesResponse,
  ListPoolsResponse,
  ListVersionsResponse,
  MaintenanceWindow,
  MigrateToPrivateNetworkClusterRequest,
  Node,
  Pool,
  PoolUpgradePolicy,
  SetClusterTypeRequest,
  UpdateClusterRequest,
  UpdateClusterRequestAutoUpgrade,
  UpdateClusterRequestAutoscalerConfig,
  UpdateClusterRequestOpenIDConnectConfig,
  UpdatePoolRequest,
  UpdatePoolRequestUpgradePolicy,
  UpgradeClusterRequest,
  UpgradePoolRequest,
  Version,
} from './types.gen'
import type {} from './types.private.gen'

const unmarshalPoolUpgradePolicy = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PoolUpgradePolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    maxSurge: data.max_surge,
    maxUnavailable: data.max_unavailable,
  } as PoolUpgradePolicy
}

export const unmarshalPool = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Pool' failed as data isn't a dictionary.`,
    )
  }

  return {
    autohealing: data.autohealing,
    autoscaling: data.autoscaling,
    clusterId: data.cluster_id,
    containerRuntime: data.container_runtime,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    kubeletArgs: data.kubelet_args,
    maxSize: data.max_size,
    minSize: data.min_size,
    name: data.name,
    nodeType: data.node_type,
    placementGroupId: data.placement_group_id
      ? data.placement_group_id
      : undefined,
    region: data.region,
    rootVolumeSize: data.root_volume_size ? data.root_volume_size : undefined,
    rootVolumeType: data.root_volume_type,
    size: data.size,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    upgradePolicy: unmarshalPoolUpgradePolicy(data.upgrade_policy),
    version: data.version,
    zone: data.zone,
  } as Pool
}

export const unmarshalVersion = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Version' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableAdmissionPlugins: data.available_admission_plugins,
    availableCnis: data.available_cnis,
    availableContainerRuntimes: data.available_container_runtimes,
    availableFeatureGates: data.available_feature_gates,
    availableIngresses: data.available_ingresses
      ? data.available_ingresses
      : undefined,
    availableKubeletArgs: data.available_kubelet_args,
    label: data.label,
    name: data.name,
    region: data.region,
  } as Version
}

const unmarshalClusterOpenIDConnectConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterOpenIDConnectConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    clientId: data.client_id,
    groupsClaim: data.groups_claim,
    groupsPrefix: data.groups_prefix,
    issuerUrl: data.issuer_url,
    requiredClaim: data.required_claim,
    usernameClaim: data.username_claim,
    usernamePrefix: data.username_prefix,
  } as ClusterOpenIDConnectConfig
}

const unmarshalMaintenanceWindow = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MaintenanceWindow' failed as data isn't a dictionary.`,
    )
  }

  return {
    day: data.day,
    startHour: data.start_hour,
  } as MaintenanceWindow
}

const unmarshalClusterAutoUpgrade = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterAutoUpgrade' failed as data isn't a dictionary.`,
    )
  }

  return {
    enabled: data.enabled,
    maintenanceWindow: unmarshalMaintenanceWindow(data.maintenance_window),
  } as ClusterAutoUpgrade
}

const unmarshalClusterAutoscalerConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterAutoscalerConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    balanceSimilarNodeGroups: data.balance_similar_node_groups,
    estimator: data.estimator,
    expander: data.expander,
    expendablePodsPriorityCutoff: data.expendable_pods_priority_cutoff,
    ignoreDaemonsetsUtilization: data.ignore_daemonsets_utilization,
    maxGracefulTerminationSec: data.max_graceful_termination_sec,
    scaleDownDelayAfterAdd: data.scale_down_delay_after_add,
    scaleDownDisabled: data.scale_down_disabled,
    scaleDownUnneededTime: data.scale_down_unneeded_time,
    scaleDownUtilizationThreshold: data.scale_down_utilization_threshold,
  } as ClusterAutoscalerConfig
}

export const unmarshalCluster = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Cluster' failed as data isn't a dictionary.`,
    )
  }

  return {
    admissionPlugins: data.admission_plugins,
    apiserverCertSans: data.apiserver_cert_sans,
    autoUpgrade: unmarshalClusterAutoUpgrade(data.auto_upgrade),
    autoscalerConfig: unmarshalClusterAutoscalerConfig(data.autoscaler_config),
    clusterUrl: data.cluster_url,
    cni: data.cni,
    commitmentEndsAt: unmarshalDate(data.commitment_ends_at),
    createdAt: unmarshalDate(data.created_at),
    dashboardEnabled: data.dashboard_enabled
      ? data.dashboard_enabled
      : undefined,
    description: data.description,
    dnsWildcard: data.dns_wildcard,
    featureGates: data.feature_gates,
    id: data.id,
    ingress: data.ingress ? data.ingress : undefined,
    name: data.name,
    openIdConnectConfig: unmarshalClusterOpenIDConnectConfig(
      data.open_id_connect_config,
    ),
    organizationId: data.organization_id,
    privateNetworkId: data.private_network_id
      ? data.private_network_id
      : undefined,
    projectId: data.project_id,
    region: data.region,
    status: data.status,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    upgradeAvailable: data.upgrade_available,
    version: data.version,
  } as Cluster
}

export const unmarshalNode = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Node' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterId: data.cluster_id,
    conditions: data.conditions ? data.conditions : undefined,
    createdAt: unmarshalDate(data.created_at),
    errorMessage: data.error_message ? data.error_message : undefined,
    id: data.id,
    name: data.name,
    poolId: data.pool_id,
    providerId: data.provider_id,
    publicIpV4: data.public_ip_v4 ? data.public_ip_v4 : undefined,
    publicIpV6: data.public_ip_v6 ? data.public_ip_v6 : undefined,
    region: data.region,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Node
}

export const unmarshalExternalNode = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExternalNode' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterCa: data.cluster_ca,
    clusterUrl: data.cluster_url,
    externalIp: data.external_ip,
    id: data.id,
    kubeToken: data.kube_token,
    kubeletConfig: data.kubelet_config,
    name: data.name,
    poolVersion: data.pool_version,
  } as ExternalNode
}

const unmarshalClusterType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterType' failed as data isn't a dictionary.`,
    )
  }

  return {
    availability: data.availability,
    commitmentDelay: data.commitment_delay ? data.commitment_delay : undefined,
    dedicated: data.dedicated,
    maxNodes: data.max_nodes,
    memory: data.memory,
    name: data.name,
    resiliency: data.resiliency,
    sla: data.sla,
  } as ClusterType
}

export const unmarshalListClusterAvailableTypesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListClusterAvailableTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterTypes: unmarshalArrayOfObject(
      data.cluster_types,
      unmarshalClusterType,
    ),
    totalCount: data.total_count,
  } as ListClusterAvailableTypesResponse
}

export const unmarshalListClusterAvailableVersionsResponse = (
  data: unknown,
) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListClusterAvailableVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    versions: unmarshalArrayOfObject(data.versions, unmarshalVersion),
  } as ListClusterAvailableVersionsResponse
}

export const unmarshalListClusterTypesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListClusterTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterTypes: unmarshalArrayOfObject(
      data.cluster_types,
      unmarshalClusterType,
    ),
    totalCount: data.total_count,
  } as ListClusterTypesResponse
}

export const unmarshalListClustersResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListClustersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusters: unmarshalArrayOfObject(data.clusters, unmarshalCluster),
    totalCount: data.total_count,
  } as ListClustersResponse
}

export const unmarshalListNodesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNodesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nodes: unmarshalArrayOfObject(data.nodes, unmarshalNode),
    totalCount: data.total_count,
  } as ListNodesResponse
}

export const unmarshalListPoolsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPoolsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pools: unmarshalArrayOfObject(data.pools, unmarshalPool),
    totalCount: data.total_count,
  } as ListPoolsResponse
}

export const unmarshalListVersionsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    versions: unmarshalArrayOfObject(data.versions, unmarshalVersion),
  } as ListVersionsResponse
}

const marshalCreateClusterRequestOpenIDConnectConfig = (
  request: CreateClusterRequestOpenIDConnectConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  client_id: request.clientId,
  groups_claim: request.groupsClaim,
  groups_prefix: request.groupsPrefix,
  issuer_url: request.issuerUrl,
  required_claim: request.requiredClaim,
  username_claim: request.usernameClaim,
  username_prefix: request.usernamePrefix,
})

const marshalMaintenanceWindow = (
  request: MaintenanceWindow,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  day: request.day,
  start_hour: request.startHour,
})

const marshalCreateClusterRequestAutoUpgrade = (
  request: CreateClusterRequestAutoUpgrade,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable: request.enable,
  maintenance_window: request.maintenanceWindow,
})

const marshalCreateClusterRequestAutoscalerConfig = (
  request: CreateClusterRequestAutoscalerConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  balance_similar_node_groups: request.balanceSimilarNodeGroups,
  estimator: request.estimator,
  expander: request.expander,
  expendable_pods_priority_cutoff: request.expendablePodsPriorityCutoff,
  ignore_daemonsets_utilization: request.ignoreDaemonsetsUtilization,
  max_graceful_termination_sec: request.maxGracefulTerminationSec,
  scale_down_delay_after_add: request.scaleDownDelayAfterAdd,
  scale_down_disabled: request.scaleDownDisabled,
  scale_down_unneeded_time: request.scaleDownUnneededTime,
  scale_down_utilization_threshold: request.scaleDownUtilizationThreshold,
})

const marshalCreateClusterRequestPoolConfigUpgradePolicy = (
  request: CreateClusterRequestPoolConfigUpgradePolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_surge: request.maxSurge,
  max_unavailable: request.maxUnavailable,
})

const marshalCreateClusterRequestPoolConfig = (
  request: CreateClusterRequestPoolConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  autohealing: request.autohealing,
  autoscaling: request.autoscaling,
  container_runtime: request.containerRuntime,
  kubelet_args: request.kubeletArgs,
  max_size: request.maxSize,
  min_size: request.minSize,
  name: request.name,
  node_type: request.nodeType,
  placement_group_id: request.placementGroupId,
  root_volume_size: request.rootVolumeSize,
  root_volume_type: request.rootVolumeType,
  size: request.size,
  tags: request.tags,
  upgrade_policy: request.upgradePolicy,
  zone: request.zone ?? defaults.defaultZone,
})

export const marshalCreateClusterRequest = (
  request: CreateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admission_plugins: request.admissionPlugins,
  apiserver_cert_sans: request.apiserverCertSans,
  auto_upgrade: request.autoUpgrade,
  autoscaler_config: request.autoscalerConfig,
  cni: request.cni,
  description: request.description,
  enable_dashboard: request.enableDashboard,
  feature_gates: request.featureGates,
  ingress: request.ingress,
  name: request.name || randomName('k8s'),
  open_id_connect_config: request.openIdConnectConfig,
  pools: request.pools,
  private_network_id: request.privateNetworkId,
  tags: request.tags,
  type: request.type,
  version: request.version,
  ...resolveOneOf([
    { param: 'organization_id', value: request.organizationId },
    { param: 'project_id', value: request.projectId },
  ]),
})

const marshalCreatePoolRequestUpgradePolicy = (
  request: CreatePoolRequestUpgradePolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_surge: request.maxSurge,
  max_unavailable: request.maxUnavailable,
})

export const marshalCreatePoolRequest = (
  request: CreatePoolRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  autohealing: request.autohealing,
  autoscaling: request.autoscaling,
  container_runtime: request.containerRuntime,
  kubelet_args: request.kubeletArgs,
  max_size: request.maxSize,
  min_size: request.minSize,
  name: request.name || randomName('pool'),
  node_type: request.nodeType,
  placement_group_id: request.placementGroupId,
  root_volume_size: request.rootVolumeSize,
  root_volume_type: request.rootVolumeType,
  size: request.size,
  tags: request.tags,
  upgrade_policy: request.upgradePolicy,
  zone: request.zone ?? defaults.defaultZone,
})

export const marshalMigrateToPrivateNetworkClusterRequest = (
  request: MigrateToPrivateNetworkClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

export const marshalSetClusterTypeRequest = (
  request: SetClusterTypeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  type: request.type,
})

const marshalUpdateClusterRequestOpenIDConnectConfig = (
  request: UpdateClusterRequestOpenIDConnectConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  client_id: request.clientId,
  groups_claim: request.groupsClaim,
  groups_prefix: request.groupsPrefix,
  issuer_url: request.issuerUrl,
  required_claim: request.requiredClaim,
  username_claim: request.usernameClaim,
  username_prefix: request.usernamePrefix,
})

const marshalUpdateClusterRequestAutoUpgrade = (
  request: UpdateClusterRequestAutoUpgrade,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable: request.enable,
  maintenance_window: request.maintenanceWindow,
})

const marshalUpdateClusterRequestAutoscalerConfig = (
  request: UpdateClusterRequestAutoscalerConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  balance_similar_node_groups: request.balanceSimilarNodeGroups,
  estimator: request.estimator,
  expander: request.expander,
  expendable_pods_priority_cutoff: request.expendablePodsPriorityCutoff,
  ignore_daemonsets_utilization: request.ignoreDaemonsetsUtilization,
  max_graceful_termination_sec: request.maxGracefulTerminationSec,
  scale_down_delay_after_add: request.scaleDownDelayAfterAdd,
  scale_down_disabled: request.scaleDownDisabled,
  scale_down_unneeded_time: request.scaleDownUnneededTime,
  scale_down_utilization_threshold: request.scaleDownUtilizationThreshold,
})

export const marshalUpdateClusterRequest = (
  request: UpdateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admission_plugins: request.admissionPlugins,
  apiserver_cert_sans: request.apiserverCertSans,
  auto_upgrade: request.autoUpgrade,
  autoscaler_config: request.autoscalerConfig,
  description: request.description,
  enable_dashboard: request.enableDashboard,
  feature_gates: request.featureGates,
  ingress: request.ingress,
  name: request.name,
  open_id_connect_config: request.openIdConnectConfig,
  tags: request.tags,
})

const marshalUpdatePoolRequestUpgradePolicy = (
  request: UpdatePoolRequestUpgradePolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_surge: request.maxSurge,
  max_unavailable: request.maxUnavailable,
})

export const marshalUpdatePoolRequest = (
  request: UpdatePoolRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  autohealing: request.autohealing,
  autoscaling: request.autoscaling,
  kubelet_args: request.kubeletArgs,
  max_size: request.maxSize,
  min_size: request.minSize,
  size: request.size,
  tags: request.tags,
  upgrade_policy: request.upgradePolicy,
})

export const marshalUpgradeClusterRequest = (
  request: UpgradeClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  upgrade_pools: request.upgradePools,
  version: request.version,
})

export const marshalUpgradePoolRequest = (
  request: UpgradePoolRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  version: request.version,
})
