// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  ACLRule,
  ACLRuleRequest,
  AddClusterACLRulesRequest,
  AddClusterACLRulesResponse,
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
  ExternalNodeAuth,
  ExternalNodeCoreV1Taint,
  ListClusterACLRulesResponse,
  ListClusterAvailableTypesResponse,
  ListClusterAvailableVersionsResponse,
  ListClusterTypesResponse,
  ListClustersResponse,
  ListNodesResponse,
  ListPoolsResponse,
  ListVersionsResponse,
  MaintenanceWindow,
  MigratePoolsToNewImagesRequest,
  Node,
  NodeMetadata,
  NodeMetadataCoreV1Taint,
  Pool,
  PoolUpgradePolicy,
  SetClusterACLRulesRequest,
  SetClusterACLRulesResponse,
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

const unmarshalPoolUpgradePolicy = (data: unknown): PoolUpgradePolicy => {
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

export const unmarshalPool = (data: unknown): Pool => {
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
    newImagesEnabled: data.new_images_enabled,
    nodeType: data.node_type,
    placementGroupId: data.placement_group_id,
    publicIpDisabled: data.public_ip_disabled,
    region: data.region,
    rootVolumeSize: data.root_volume_size,
    rootVolumeType: data.root_volume_type,
    securityGroupId: data.security_group_id,
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

export const unmarshalVersion = (data: unknown): Version => {
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
    availableKubeletArgs: data.available_kubelet_args,
    label: data.label,
    name: data.name,
    region: data.region,
  } as Version
}

const unmarshalMaintenanceWindow = (data: unknown): MaintenanceWindow => {
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

const unmarshalClusterAutoUpgrade = (data: unknown): ClusterAutoUpgrade => {
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

const unmarshalClusterAutoscalerConfig = (
  data: unknown,
): ClusterAutoscalerConfig => {
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

const unmarshalClusterOpenIDConnectConfig = (
  data: unknown,
): ClusterOpenIDConnectConfig => {
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

export const unmarshalCluster = (data: unknown): Cluster => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Cluster' failed as data isn't a dictionary.`,
    )
  }

  return {
    aclAvailable: data.acl_available,
    admissionPlugins: data.admission_plugins,
    apiserverCertSans: data.apiserver_cert_sans,
    autoUpgrade: data.auto_upgrade
      ? unmarshalClusterAutoUpgrade(data.auto_upgrade)
      : undefined,
    autoscalerConfig: data.autoscaler_config
      ? unmarshalClusterAutoscalerConfig(data.autoscaler_config)
      : undefined,
    clusterUrl: data.cluster_url,
    cni: data.cni,
    commitmentEndsAt: unmarshalDate(data.commitment_ends_at),
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    dnsWildcard: data.dns_wildcard,
    featureGates: data.feature_gates,
    iamNodesGroupId: data.iam_nodes_group_id,
    id: data.id,
    name: data.name,
    newImagesEnabled: data.new_images_enabled,
    openIdConnectConfig: data.open_id_connect_config
      ? unmarshalClusterOpenIDConnectConfig(data.open_id_connect_config)
      : undefined,
    organizationId: data.organization_id,
    podCidr: data.pod_cidr,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    region: data.region,
    serviceCidr: data.service_cidr,
    serviceDnsIp: data.service_dns_ip,
    status: data.status,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    upgradeAvailable: data.upgrade_available,
    version: data.version,
  } as Cluster
}

export const unmarshalNode = (data: unknown): Node => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Node' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterId: data.cluster_id,
    conditions: data.conditions ? data.conditions : undefined,
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

const unmarshalACLRule = (data: unknown): ACLRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ACLRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    ip: data.ip,
    scalewayRanges: data.scaleway_ranges,
  } as ACLRule
}

export const unmarshalAddClusterACLRulesResponse = (
  data: unknown,
): AddClusterACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddClusterACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
  } as AddClusterACLRulesResponse
}

const unmarshalExternalNodeCoreV1Taint = (
  data: unknown,
): ExternalNodeCoreV1Taint => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExternalNodeCoreV1Taint' failed as data isn't a dictionary.`,
    )
  }

  return {
    effect: data.effect,
    key: data.key,
    value: data.value,
  } as ExternalNodeCoreV1Taint
}

export const unmarshalExternalNode = (data: unknown): ExternalNode => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExternalNode' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterCa: data.cluster_ca,
    clusterUrl: data.cluster_url,
    cniPluginsVersion: data.cni_plugins_version,
    containerdVersion: data.containerd_version,
    externalIp: data.external_ip,
    iamToken: data.iam_token,
    id: data.id,
    kubeToken: data.kube_token,
    kubeletConfig: data.kubelet_config,
    name: data.name,
    nodeLabels: data.node_labels,
    nodeTaints: unmarshalArrayOfObject(
      data.node_taints,
      unmarshalExternalNodeCoreV1Taint,
    ),
    poolVersion: data.pool_version,
    runcVersion: data.runc_version,
  } as ExternalNode
}

export const unmarshalExternalNodeAuth = (data: unknown): ExternalNodeAuth => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExternalNodeAuth' failed as data isn't a dictionary.`,
    )
  }

  return {
    metadataUrl: data.metadata_url,
    nodeSecretKey: data.node_secret_key,
  } as ExternalNodeAuth
}

export const unmarshalListClusterACLRulesResponse = (
  data: unknown,
): ListClusterACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListClusterACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
    totalCount: data.total_count,
  } as ListClusterACLRulesResponse
}

const unmarshalClusterType = (data: unknown): ClusterType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterType' failed as data isn't a dictionary.`,
    )
  }

  return {
    auditLogsSupported: data.audit_logs_supported,
    availability: data.availability,
    commitmentDelay: data.commitment_delay,
    dedicated: data.dedicated,
    maxEtcdSize: data.max_etcd_size,
    maxNodes: data.max_nodes,
    memory: data.memory,
    name: data.name,
    resiliency: data.resiliency,
    sla: data.sla,
  } as ClusterType
}

export const unmarshalListClusterAvailableTypesResponse = (
  data: unknown,
): ListClusterAvailableTypesResponse => {
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
): ListClusterAvailableVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListClusterAvailableVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    versions: unmarshalArrayOfObject(data.versions, unmarshalVersion),
  } as ListClusterAvailableVersionsResponse
}

export const unmarshalListClusterTypesResponse = (
  data: unknown,
): ListClusterTypesResponse => {
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

export const unmarshalListClustersResponse = (
  data: unknown,
): ListClustersResponse => {
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

export const unmarshalListNodesResponse = (
  data: unknown,
): ListNodesResponse => {
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

export const unmarshalListPoolsResponse = (
  data: unknown,
): ListPoolsResponse => {
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

export const unmarshalListVersionsResponse = (
  data: unknown,
): ListVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    versions: unmarshalArrayOfObject(data.versions, unmarshalVersion),
  } as ListVersionsResponse
}

const unmarshalNodeMetadataCoreV1Taint = (
  data: unknown,
): NodeMetadataCoreV1Taint => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeMetadataCoreV1Taint' failed as data isn't a dictionary.`,
    )
  }

  return {
    effect: data.effect,
    key: data.key,
    value: data.value,
  } as NodeMetadataCoreV1Taint
}

export const unmarshalNodeMetadata = (data: unknown): NodeMetadata => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeMetadata' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterCa: data.cluster_ca,
    clusterUrl: data.cluster_url,
    credentialProviderConfig: data.credential_provider_config,
    externalIp: data.external_ip,
    hasGpu: data.has_gpu,
    id: data.id,
    installerTags: data.installer_tags,
    kubeletConfig: data.kubelet_config,
    name: data.name,
    nodeLabels: data.node_labels,
    nodeTaints: unmarshalArrayOfObject(
      data.node_taints,
      unmarshalNodeMetadataCoreV1Taint,
    ),
    poolVersion: data.pool_version,
    providerId: data.provider_id,
    repoUri: data.repo_uri,
    resolvconfPath: data.resolvconf_path,
    updaterBinPath: data.updater_bin_path,
    updaterBinUrl: data.updater_bin_url,
    updaterBinVersion: data.updater_bin_version,
  } as NodeMetadata
}

export const unmarshalSetClusterACLRulesResponse = (
  data: unknown,
): SetClusterACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetClusterACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
  } as SetClusterACLRulesResponse
}

const marshalACLRuleRequest = (
  request: ACLRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ...resolveOneOf<string | boolean>([
    { param: 'ip', value: request.ip },
    { param: 'scaleway_ranges', value: request.scalewayRanges },
  ]),
})

export const marshalAddClusterACLRulesRequest = (
  request: AddClusterACLRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acls:
    request.acls !== undefined
      ? request.acls.map(elt => marshalACLRuleRequest(elt, defaults))
      : undefined,
})

const marshalMaintenanceWindow = (
  request: MaintenanceWindow,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  day: request.day,
  start_hour: request.startHour,
})

const marshalCreateClusterRequestPoolConfigUpgradePolicy = (
  request: CreateClusterRequestPoolConfigUpgradePolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_surge: request.maxSurge,
  max_unavailable: request.maxUnavailable,
})

const marshalCreateClusterRequestAutoUpgrade = (
  request: CreateClusterRequestAutoUpgrade,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable: request.enable,
  maintenance_window:
    request.maintenanceWindow !== undefined
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
  security_group_id: request.securityGroupId,
  size: request.size,
  tags: request.tags,
  upgrade_policy:
    request.upgradePolicy !== undefined
      ? marshalCreateClusterRequestPoolConfigUpgradePolicy(
          request.upgradePolicy,
          defaults,
        )
      : undefined,
  zone: request.zone,
})

export const marshalCreateClusterRequest = (
  request: CreateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admission_plugins: request.admissionPlugins,
  apiserver_cert_sans: request.apiserverCertSans,
  auto_upgrade:
    request.autoUpgrade !== undefined
      ? marshalCreateClusterRequestAutoUpgrade(request.autoUpgrade, defaults)
      : undefined,
  autoscaler_config:
    request.autoscalerConfig !== undefined
      ? marshalCreateClusterRequestAutoscalerConfig(
          request.autoscalerConfig,
          defaults,
        )
      : undefined,
  cni: request.cni,
  description: request.description,
  feature_gates: request.featureGates,
  name: request.name || randomName('k8s'),
  open_id_connect_config:
    request.openIdConnectConfig !== undefined
      ? marshalCreateClusterRequestOpenIDConnectConfig(
          request.openIdConnectConfig,
          defaults,
        )
      : undefined,
  pod_cidr: request.podCidr,
  pools:
    request.pools !== undefined
      ? request.pools.map(elt =>
          marshalCreateClusterRequestPoolConfig(elt, defaults),
        )
      : undefined,
  private_network_id: request.privateNetworkId,
  service_cidr: request.serviceCidr,
  service_dns_ip: request.serviceDnsIp,
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
  kubelet_args:
    request.kubeletArgs !== undefined ? request.kubeletArgs : undefined,
  max_size: request.maxSize,
  min_size: request.minSize,
  name: request.name || randomName('pool'),
  node_type: request.nodeType,
  placement_group_id: request.placementGroupId,
  public_ip_disabled: request.publicIpDisabled,
  root_volume_size: request.rootVolumeSize,
  root_volume_type: request.rootVolumeType,
  security_group_id: request.securityGroupId,
  size: request.size,
  tags: request.tags,
  upgrade_policy:
    request.upgradePolicy !== undefined
      ? marshalCreatePoolRequestUpgradePolicy(request.upgradePolicy, defaults)
      : undefined,
  zone: request.zone ?? defaults.defaultZone,
})

export const marshalMigratePoolsToNewImagesRequest = (
  request: MigratePoolsToNewImagesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  pool_ids: request.poolIds,
})

export const marshalSetClusterACLRulesRequest = (
  request: SetClusterACLRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acls:
    request.acls !== undefined
      ? request.acls.map(elt => marshalACLRuleRequest(elt, defaults))
      : undefined,
})

export const marshalSetClusterTypeRequest = (
  request: SetClusterTypeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  type: request.type,
})

const marshalUpdateClusterRequestAutoUpgrade = (
  request: UpdateClusterRequestAutoUpgrade,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable: request.enable,
  maintenance_window:
    request.maintenanceWindow !== undefined
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

export const marshalUpdateClusterRequest = (
  request: UpdateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admission_plugins: request.admissionPlugins,
  apiserver_cert_sans: request.apiserverCertSans,
  auto_upgrade:
    request.autoUpgrade !== undefined
      ? marshalUpdateClusterRequestAutoUpgrade(request.autoUpgrade, defaults)
      : undefined,
  autoscaler_config:
    request.autoscalerConfig !== undefined
      ? marshalUpdateClusterRequestAutoscalerConfig(
          request.autoscalerConfig,
          defaults,
        )
      : undefined,
  description: request.description,
  feature_gates: request.featureGates,
  name: request.name,
  open_id_connect_config:
    request.openIdConnectConfig !== undefined
      ? marshalUpdateClusterRequestOpenIDConnectConfig(
          request.openIdConnectConfig,
          defaults,
        )
      : undefined,
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
  upgrade_policy:
    request.upgradePolicy !== undefined
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
