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

const unmarshalMaintenanceWindow = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MaintenanceWindow' failed as data isn't a dictionary.`,
    )
  }

  return { day: data.day, startHour: data.start_hour } as MaintenanceWindow
}

const unmarshalClusterAutoUpgrade = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterAutoUpgrade' failed as data isn't a dictionary.`,
    )
  }

  return {
    enabled: data.enabled,
    maintenanceWindow: data.maintenance_window
      ? unmarshalMaintenanceWindow(data.maintenance_window)
      : undefined,
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

export const unmarshalCluster = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Cluster' failed as data isn't a dictionary.`,
    )
  }

  return {
    admissionPlugins: data.admission_plugins,
    apiserverCertSans: data.apiserver_cert_sans,
    autoscalerConfig: data.autoscaler_config
      ? unmarshalClusterAutoscalerConfig(data.autoscaler_config)
      : undefined,
    autoUpgrade: data.auto_upgrade
      ? unmarshalClusterAutoUpgrade(data.auto_upgrade)
      : undefined,
    clusterUrl: data.cluster_url,
    cni: data.cni,
    commitmentEndsAt: unmarshalDate(data.commitment_ends_at),
    createdAt: unmarshalDate(data.created_at),
    dashboardEnabled: data.dashboard_enabled,
    description: data.description,
    dnsWildcard: data.dns_wildcard,
    featureGates: data.feature_gates,
    id: data.id,
    ingress: data.ingress,
    name: data.name,
    openIdConnectConfig: data.open_id_connect_config
      ? unmarshalClusterOpenIDConnectConfig(data.open_id_connect_config)
      : undefined,
    organizationId: data.organization_id,
    privateNetworkId: data.private_network_id,
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

const unmarshalClusterType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterType' failed as data isn't a dictionary.`,
    )
  }

  return {
    availability: data.availability,
    commitmentDelay: data.commitment_delay,
    dedicated: data.dedicated,
    maxNodes: data.max_nodes,
    memory: data.memory,
    name: data.name,
    resiliency: data.resiliency,
    sla: data.sla,
  } as ClusterType
}

export const unmarshalNode = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Node' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterId: data.cluster_id,
    conditions: data.conditions,
    createdAt: unmarshalDate(data.created_at),
    errorMessage: data.error_message,
    id: data.id,
    name: data.name,
    poolId: data.pool_id,
    providerId: data.provider_id,
    publicIpV4: data.public_ip_v4,
    publicIpV6: data.public_ip_v6,
    region: data.region,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Node
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
    placementGroupId: data.placement_group_id,
    publicIpDisabled: data.public_ip_disabled,
    region: data.region,
    rootVolumeSize: data.root_volume_size,
    rootVolumeType: data.root_volume_type,
    size: data.size,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    upgradePolicy: data.upgrade_policy
      ? unmarshalPoolUpgradePolicy(data.upgrade_policy)
      : undefined,
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
    availableIngresses: data.available_ingresses,
    availableKubeletArgs: data.available_kubelet_args,
    label: data.label,
    name: data.name,
    region: data.region,
  } as Version
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
    kubeletConfig: data.kubelet_config,
    kubeToken: data.kube_token,
    name: data.name,
    poolVersion: data.pool_version,
  } as ExternalNode
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

const marshalCreateClusterRequestPoolConfigUpgradePolicy = (
  request: CreateClusterRequestPoolConfigUpgradePolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_surge: request.maxSurge,
  max_unavailable: request.maxUnavailable,
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
  maintenance_window: request.maintenanceWindow
    ? marshalMaintenanceWindow(request.maintenanceWindow, defaults)
    : undefined,
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
  public_ip_disabled: request.publicIpDisabled,
  root_volume_size: request.rootVolumeSize,
  root_volume_type: request.rootVolumeType,
  size: request.size,
  tags: request.tags,
  upgrade_policy: request.upgradePolicy
    ? marshalCreateClusterRequestPoolConfigUpgradePolicy(
        request.upgradePolicy,
        defaults,
      )
    : undefined,
  zone: request.zone,
})

const marshalCreatePoolRequestUpgradePolicy = (
  request: CreatePoolRequestUpgradePolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_surge: request.maxSurge,
  max_unavailable: request.maxUnavailable,
})

const marshalUpdateClusterRequestAutoUpgrade = (
  request: UpdateClusterRequestAutoUpgrade,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable: request.enable,
  maintenance_window: request.maintenanceWindow
    ? marshalMaintenanceWindow(request.maintenanceWindow, defaults)
    : undefined,
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

const marshalUpdatePoolRequestUpgradePolicy = (
  request: UpdatePoolRequestUpgradePolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_surge: request.maxSurge,
  max_unavailable: request.maxUnavailable,
})

export const marshalCreateClusterRequest = (
  request: CreateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admission_plugins: request.admissionPlugins,
  apiserver_cert_sans: request.apiserverCertSans,
  auto_upgrade: request.autoUpgrade
    ? marshalCreateClusterRequestAutoUpgrade(request.autoUpgrade, defaults)
    : undefined,
  autoscaler_config: request.autoscalerConfig
    ? marshalCreateClusterRequestAutoscalerConfig(
        request.autoscalerConfig,
        defaults,
      )
    : undefined,
  cni: request.cni,
  description: request.description,
  enable_dashboard: request.enableDashboard,
  feature_gates: request.featureGates,
  ingress: request.ingress,
  name: request.name || randomName('k8s'),
  open_id_connect_config: request.openIdConnectConfig
    ? marshalCreateClusterRequestOpenIDConnectConfig(
        request.openIdConnectConfig,
        defaults,
      )
    : undefined,
  pools: request.pools
    ? request.pools.map(elt =>
        marshalCreateClusterRequestPoolConfig(elt, defaults),
      )
    : undefined,
  private_network_id: request.privateNetworkId,
  tags: request.tags,
  type: request.type,
  version: request.version,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

export const marshalCreatePoolRequest = (
  request: CreatePoolRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  autohealing: request.autohealing,
  autoscaling: request.autoscaling,
  container_runtime: request.containerRuntime ?? 'unknown_runtime',
  kubelet_args: request.kubeletArgs,
  max_size: request.maxSize,
  min_size: request.minSize,
  name: request.name || randomName('pool'),
  node_type: request.nodeType,
  placement_group_id: request.placementGroupId,
  public_ip_disabled: request.publicIpDisabled,
  root_volume_size: request.rootVolumeSize,
  root_volume_type: request.rootVolumeType ?? 'default_volume_type',
  size: request.size,
  tags: request.tags,
  upgrade_policy: request.upgradePolicy
    ? marshalCreatePoolRequestUpgradePolicy(request.upgradePolicy, defaults)
    : undefined,
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

export const marshalUpdateClusterRequest = (
  request: UpdateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admission_plugins: request.admissionPlugins,
  apiserver_cert_sans: request.apiserverCertSans,
  auto_upgrade: request.autoUpgrade
    ? marshalUpdateClusterRequestAutoUpgrade(request.autoUpgrade, defaults)
    : undefined,
  autoscaler_config: request.autoscalerConfig
    ? marshalUpdateClusterRequestAutoscalerConfig(
        request.autoscalerConfig,
        defaults,
      )
    : undefined,
  description: request.description,
  enable_dashboard: request.enableDashboard,
  feature_gates: request.featureGates,
  ingress: request.ingress,
  name: request.name,
  open_id_connect_config: request.openIdConnectConfig
    ? marshalUpdateClusterRequestOpenIDConnectConfig(
        request.openIdConnectConfig,
        defaults,
      )
    : undefined,
  tags: request.tags,
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
  upgrade_policy: request.upgradePolicy
    ? marshalUpdatePoolRequestUpgradePolicy(request.upgradePolicy, defaults)
    : undefined,
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
