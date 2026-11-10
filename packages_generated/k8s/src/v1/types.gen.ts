// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type AutoscalerEstimator =
  | 'unknown_estimator'
  | 'binpacking'

export type AutoscalerExpander =
  | 'unknown_expander'
  | 'random'
  | 'most_pods'
  | 'least_waste'
  | 'priority'
  | 'price'

export type CNI =
  | 'unknown_cni'
  | 'cilium'
  | 'calico'
  | 'kilo'
  | 'none'
  | 'cilium_native'

export type ClusterStatus =
  | 'unknown'
  | 'creating'
  | 'ready'
  | 'deleting'
  | 'deleted'
  | 'updating'
  | 'locked'
  | 'pool_required'

export type ClusterTypeAvailability =
  | 'available'
  | 'scarce'
  | 'shortage'

export type ClusterTypeResiliency =
  | 'unknown_resiliency'
  | 'standard'
  | 'high_availability'

export type CoreV1TaintEffect =
  | 'NoSchedule'
  | 'PreferNoSchedule'
  | 'NoExecute'

export type GetClusterKubeConfigRequestEndpoint =
  | 'unknown_endpoint'
  | 'public'
  | 'vpc'

export type ListClustersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'
  | 'version_asc'
  | 'version_desc'

export type ListNodesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'
  | 'version_asc'
  | 'version_desc'

export type ListPoolsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'
  | 'version_asc'
  | 'version_desc'

export type MaintenanceWindowDayOfTheWeek =
  | 'any'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type NodeStatus =
  | 'unknown'
  | 'creating'
  | 'not_ready'
  | 'ready'
  | 'deleting'
  | 'deleted'
  | 'locked'
  | 'rebooting'
  | 'creation_error'
  | 'upgrading'
  | 'starting'
  | 'registering'

export type PoolStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'deleted'
  | 'scaling'
  | 'warning'
  | 'locked'
  | 'upgrading'

export type PoolVolumeType =
  | 'default_volume_type'
  | 'l_ssd'
  | 'b_ssd'
  | 'sbs_5k'
  | 'sbs_15k'

export type Runtime =
  | 'unknown_runtime'
  | 'containerd'

export interface MaintenanceWindow {
  /**
   * Start time of the two-hour maintenance window.
   */
  startHour: number
  /**
   * Day of the week for the maintenance window.
   */
  day: MaintenanceWindowDayOfTheWeek
}


/**
 * See https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/.
 */
export interface CoreV1Taint {
  /**
   * The taint key to be applied to a node.
   */
  key: string
  /**
   * The taint value corresponding to the taint key.
   */
  value: string
  /**
   * Effect defines the effects of Taint.
   */
  effect: CoreV1TaintEffect
}


export interface CreateClusterRequestPoolConfigUpgradePolicy {
  /**
   * The maximum number of nodes that can be `upgrading` at the same time.
   */
  maxUnavailable?: number | null
  /**
   * The maximum number of nodes to be created during the upgrade, e.g. the pool will scale up to reach `size`+`max_surge` before downscaling to `size` after node upgrades.
   */
  maxSurge?: number | null
}


export interface ComponentInfo {
  version: string
}


export interface ClusterAutoUpgrade {
  /**
   * Defines whether auto upgrade is enabled for the cluster.
   */
  enabled: boolean
  /**
   * Maintenance window of the cluster auto upgrades.
   */
  maintenanceWindow?: MaintenanceWindow | null
}


export interface ClusterAutoscalerConfig {
  /**
   * Forbid cluster autoscaler to scale down the cluster, defaults to false.
   */
  scaleDownDisabled: boolean
  /**
   * How long after scale up the scale down evaluation resumes.
   */
  scaleDownDelayAfterAdd: string
  /**
   * Type of resource estimator to be used in scale up.
   */
  estimator: AutoscalerEstimator
  /**
   * Kubernetes autoscaler strategy to fit pods into nodes, see https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders for details.
   */
  expander: AutoscalerExpander
  /**
   * Ignore DaemonSet pods when calculating resource utilization for scaling down, defaults to false.
   */
  ignoreDaemonsetsUtilization: boolean
  /**
   * Detect similar node groups and balance the number of nodes between them, defaults to false.
   */
  balanceSimilarNodeGroups: boolean
  /**
   * Pods with priority below cutoff will be expendable. They can be killed without any consideration during scale down and they won't cause scale up. Pods with null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff: number
  /**
   * How long a node should be unneeded before it is eligible for scale down, defaults to 10 minutes.
   */
  scaleDownUnneededTime: string
  /**
   * Node utilization level, defined as a sum of requested resources divided by allocatable capacity, below which a node can be considered for scale down.
   */
  scaleDownUtilizationThreshold: number
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination when trying to scale down a node, defaults to 600 (10 minutes).
   */
  maxGracefulTerminationSec: number
  /**
   * Cluster autoscaler will never delete nodes with pods with local storage, e.g. EmptyDir or HostPath, defaults to true.
   */
  skipNodesWithLocalStorage: boolean
  /**
   * Cluster autoscaler logging level expressed from 0 to 4 (4 being the more verbose), defaults to 2. see https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-can-i-increase-the-information-that-the-ca-is-logging for details.
   */
  logLevel: number
}


export interface ClusterOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing keys. Only URLs using the `https://` scheme are accepted. This is typically the provider's discovery URL without a path, for example "https://accounts.google.com" or "https://login.salesforce.com".
   */
  issuerUrl: string
  /**
   * A client ID that all tokens must be issued for.
   */
  clientId: string
  /**
   * JWT claim to use as the user name. The default is `sub`, which is expected to be the end user's unique identifier. Admins can choose other claims, such as `email` or `name`, depending on their provider. However, claims other than `email` will be prefixed with the issuer URL to prevent name collision.
   */
  usernameClaim: string
  /**
   * Prefix prepended to username claims to prevent name collision (such as `system:` users). For example, the value `oidc:` will create usernames like `oidc:jane.doe`. If this flag is not provided and `username_claim` is a value other than `email`, the prefix defaults to `( Issuer URL )#` where `( Issuer URL )` is the value of `issuer_url`. The value `-` can be used to disable all prefixing.
   */
  usernamePrefix: string
  /**
   * JWT claim to use as the user's group.
   */
  groupsClaim: string[]
  /**
   * Prefix prepended to group claims to prevent name collision (such as `system:` groups). For example, the value `oidc:` will create group names like `oidc:engineering` and `oidc:infra`.
   */
  groupsPrefix: string
  /**
   * Multiple key=value pairs describing a required claim in the ID token. If set, the claims are verified to be present in the ID token with a matching value.
   */
  requiredClaim: string[]
}


export interface PoolUpgradePolicy {
  /**
   * The maximum number of nodes that can be `upgrading` at the same time.
   */
  maxUnavailable: number
  /**
   * The maximum number of nodes to be created during the upgrade, e.g. the pool will scale up to reach `size`+`max_surge` before downscaling to `size` after node upgrades.
   */
  maxSurge: number
}


export interface ACLRuleRequest {
  /**
   * IP subnet to allow.
   *
   * One-of ('allowed'): at most one of 'ip', 'scalewayRanges' could be set.
   */
  ip?: string | null
  /**
   * Only one rule with this field set to true can be added.
   *
   * One-of ('allowed'): at most one of 'ip', 'scalewayRanges' could be set.
   */
  scalewayRanges?: boolean | null
  /**
   * Description of the ACL.
   */
  description: string
}


export interface ACLRule {
  /**
   * ID of the ACL rule.
   */
  id: string
  /**
   * The SRN of the ACL rule.
   */
  srn: string
  /**
   * IP subnet to allow.
   *
   * One-of ('allowed'): at most one of 'ip', 'scalewayRanges' could be set.
   */
  ip?: string | null
  /**
   * Only one rule with this field set to true can be added.
   *
   * One-of ('allowed'): at most one of 'ip', 'scalewayRanges' could be set.
   */
  scalewayRanges?: boolean | null
  /**
   * Description of the ACL.
   */
  description: string
  /**
   * Region of the ACL rule.
   */
  region: ScwRegion
}


export interface CreateClusterRequestAutoUpgrade {
  /**
   * Defines whether auto upgrade is enabled for the cluster.
   */
  enable: boolean
  /**
   * Maintenance window of the cluster auto upgrades.
   */
  maintenanceWindow?: MaintenanceWindow | null
}


export interface CreateClusterRequestAutoscalerConfig {
  /**
   * Forbid cluster autoscaler to scale down the cluster, defaults to false.
   */
  scaleDownDisabled?: boolean | null
  /**
   * How long after scale up the scale down evaluation resumes.
   */
  scaleDownDelayAfterAdd?: string | null
  /**
   * Type of resource estimator to be used in scale up.
   */
  estimator: AutoscalerEstimator
  /**
   * Kubernetes autoscaler strategy to fit pods into nodes, see https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders for details.
   */
  expander: AutoscalerExpander
  /**
   * Ignore DaemonSet pods when calculating resource utilization for scaling down, defaults to false.
   */
  ignoreDaemonsetsUtilization?: boolean | null
  /**
   * Detect similar node groups and balance the number of nodes between them, defaults to false.
   */
  balanceSimilarNodeGroups?: boolean | null
  /**
   * Pods with priority below cutoff will be expendable. They can be killed without any consideration during scale down and they won't cause scale up. Pods with null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff?: number | null
  /**
   * How long a node should be unneeded before it is eligible for scale down, defaults to 10 minutes.
   */
  scaleDownUnneededTime?: string | null
  /**
   * Node utilization level, defined as a sum of requested resources divided by allocatable capacity, below which a node can be considered for scale down.
   */
  scaleDownUtilizationThreshold?: number | null
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination when trying to scale down a node, defaults to 600 (10 minutes).
   */
  maxGracefulTerminationSec?: number | null
  /**
   * Cluster autoscaler will never delete nodes with pods with local storage, e.g. EmptyDir or HostPath, defaults to true.
   */
  skipNodesWithLocalStorage?: boolean | null
  /**
   * Cluster autoscaler logging level expressed from 0 to 4 (4 being the more verbose), defaults to 2. see https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-can-i-increase-the-information-that-the-ca-is-logging for details.
   */
  logLevel?: number | null
}


export interface CreateClusterRequestOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing keys. Only URLs using the `https://` scheme are accepted. This is typically the provider's discovery URL without a path, for example "https://accounts.google.com" or "https://login.salesforce.com".
   */
  issuerUrl: string
  /**
   * A client ID that all tokens must be issued for.
   */
  clientId: string
  /**
   * JWT claim to use as the user name. The default is `sub`, which is expected to be the end user's unique identifier. Admins can choose other claims, such as `email` or `name`, depending on their provider. However, claims other than `email` will be prefixed with the issuer URL to prevent name collision.
   */
  usernameClaim?: string | null
  /**
   * Prefix prepended to username claims to prevent name collision (such as `system:` users). For example, the value `oidc:` will create usernames like `oidc:jane.doe`. If this flag is not provided and `username_claim` is a value other than `email`, the prefix defaults to `( Issuer URL )#` where `( Issuer URL )` is the value of `issuer_url`. The value `-` can be used to disable all prefixing.
   */
  usernamePrefix?: string | null
  /**
   * JWT claim to use as the user's group.
   */
  groupsClaim?: string[] | null
  /**
   * Prefix prepended to group claims to prevent name collision (such as `system:` groups). For example, the value `oidc:` will create group names like `oidc:engineering` and `oidc:infra`.
   */
  groupsPrefix?: string | null
  /**
   * Multiple key=value pairs describing a required claim in the ID token. If set, the claims are verified to be present in the ID token with a matching value.
   */
  requiredClaim?: string[] | null
}


export interface CreateClusterRequestPoolConfig {
  /**
   * Name of the pool.
   */
  name: string
  /**
   * Node type is the type of Scaleway Instance wanted for the pool. Nodes with insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST). 'external' is a special node type used to provision instances from other cloud providers in a Kosmos Cluster.
   */
  nodeType: string
  /**
   * Placement group ID in which all the nodes of the pool will be created, placement groups are limited to 20 instances.
   */
  placementGroupId?: string | null
  /**
   * Defines whether the autoscaling feature is enabled for the pool.
   */
  autoscaling: boolean
  /**
   * Size (number of nodes) of the pool.
   */
  size: number
  /**
   * Defines the minimum size of the pool. Note that this field is only used when autoscaling is enabled on the pool.
   */
  minSize?: number | null
  /**
   * Defines the maximum size of the pool. Note that this field is only used when autoscaling is enabled on the pool.
   */
  maxSize?: number | null
  /**
   * Customization of the container runtime is available for each pool.
   */
  containerRuntime: Runtime
  /**
   * Defines whether the autohealing feature is enabled for the pool.
   */
  autohealing: boolean
  /**
   * Tags associated with the pool, see [managing tags](https://www.scaleway.com/en/docs/kubernetes/api-cli/managing-tags).
   */
  tags: string[]
  /**
   * Kubelet arguments to be used by this pool. Note that this feature is experimental.
   */
  kubeletArgs: Record<string, string>
  /**
   * Defines how node provisioning should behave during pool version upgrade.
   */
  upgradePolicy?: CreateClusterRequestPoolConfigUpgradePolicy | null
  /**
   * Zone in which the pool's nodes will be spawned.
   */
  zone: ScwZone
  /**
   * * `l_ssd` is a local block storage which means your system is stored locally on your node's hypervisor. This type is not available for all node types
* `sbs_5k` is a remote block storage which means your system is stored on a centralized and resilient cluster with 5k IOPS limits
* `sbs_15k` is a faster remote block storage which means your system is stored on a centralized and resilient cluster with 15k IOPS limits
* `b_ssd` is the legacy remote block storage which means your system is stored on a centralized and resilient cluster. Not available for new pools, use `sbs_5k` or `sbs_15k` instead.
   */
  rootVolumeType: PoolVolumeType
  /**
   * System volume disk size.
   */
  rootVolumeSize?: number | null
  /**
   * Defines if the public IP should be removed from Nodes. To use this feature, your Cluster must have an attached Private Network set up with a Public Gateway.
   */
  publicIpDisabled: boolean
  /**
   * Security group ID in which all the nodes of the pool will be created. If unset, the pool will use default Kapsule security group in current zone.
   */
  securityGroupId?: string | null
  /**
   * Kubernetes labels applied and reconciled on the nodes.
   */
  labels: Record<string, string>
  /**
   * Kubernetes taints applied and reconciled on the nodes.
   */
  taints: CoreV1Taint[]
  /**
   * Kubernetes taints applied at node creation but not reconciled afterwards.
   */
  startupTaints: CoreV1Taint[]
  /**
   * Private network where the nodes are attached. Should be member of the same VPC as the API Server.
   */
  privateNetworkId?: string | null
  /**
   * Maximum amount of time in seconds before the API forces the drain and deletion of a `deleting` node. It overrides pods `PodDisruptionBudget` and `terminationGracePeriodSeconds`. Defaults to 15 minutes, up to 1 hour.
   */
  maxTerminationGracePeriod?: string | null
  /**
   * User data applied and reconciled with the pool.
   */
  userData: Record<string, string>
}


export interface CreatePoolRequestUpgradePolicy {
  /**
   * The maximum number of nodes that can be `upgrading` at the same time.
   */
  maxUnavailable?: number | null
  /**
   * The maximum number of nodes to be created during the upgrade, e.g. the pool will scale up to reach `size`+`max_surge` before downscaling to `size` after node upgrades.
   */
  maxSurge?: number | null
}


export interface ClusterType {
  /**
   * Cluster type name.
   */
  name: string
  /**
   * The SRN of the cluster type.
   */
  srn: string
  /**
   * Cluster type availability.
   */
  availability: ClusterTypeAvailability
  /**
   * Maximum number of nodes supported by the offer.
   */
  maxNodes: number
  /**
   * Time period during which you can no longer switch to a lower offer.
   */
  commitmentDelay?: string | null
  /**
   * Value of the Service Level Agreement of the offer.
   */
  sla: number
  /**
   * Resiliency offered by the offer.
   */
  resiliency: ClusterTypeResiliency
  /**
   * Max RAM allowed for the control plane.
   */
  memory: number
  /**
   * Returns information if this offer uses dedicated resources.
   */
  dedicated: boolean
  /**
   * True if the offer allows activation of the audit log functionality. Please note that audit logs are sent to Cockpit.
   */
  auditLogsSupported: boolean
  /**
   * Maximum amount of data that can be stored in etcd for the offer.
   */
  maxEtcdSize: number
  /**
   * The region of the cluster type.
   */
  region: ScwRegion
}


export interface Version {
  /**
   * Name of the Kubernetes version.
   */
  name: string
  /**
   * The SRN of the version.
   */
  srn: string
  /**
   * Label of the Kubernetes version.
   */
  label: string
  /**
   * Region in which this version is available.
   */
  region: ScwRegion
  /**
   * Supported Container Network Interface (CNI) plugins for this version.
   */
  availableCnis: CNI[]
  /**
   * Supported feature gates for this version.
   */
  availableFeatureGates: string[]
  /**
   * Supported admission plugins for this version.
   */
  availableAdmissionPlugins: string[]
  /**
   * Supported kubelet arguments for this version.
   */
  availableKubeletArgs: Record<string, string>
  /**
   * Date from which this version will no longer be available for provisioning.
   */
  deprecatedAt?: Date | null
  /**
   * Date from which any remaining clusters on this version will begin to be forcibly upgraded to the next minor version.
   */
  endOfLifeAt?: Date | null
  /**
   * Date at which this version was made available by Kapsule product.
   */
  releasedAt?: Date | null
  /**
   * Map containing every sub-component version shipped with this Kapsule version.
   */
  additionalComponents: Record<string, ComponentInfo>
}


export interface Cluster {
  /**
   * Cluster ID.
   */
  id: string
  /**
   * The SRN of the cluster.
   */
  srn: string
  /**
   * Cluster type.
   */
  type: string
  /**
   * Cluster name.
   */
  name: string
  /**
   * Status of the cluster.
   */
  status: ClusterStatus
  /**
   * Kubernetes version of the cluster.
   */
  version: string
  /**
   * Region in which the cluster is deployed.
   */
  region: ScwRegion
  /**
   * ID of the Organization owning the cluster.
   */
  organizationId: string
  /**
   * ID of the Project owning the cluster.
   */
  projectId: string
  /**
   * Tags associated with the cluster.
   */
  tags: string[]
  /**
   * Container Network Interface (CNI) plugin running in the cluster.
   */
  cni: CNI
  /**
   * Cluster description.
   */
  description: string
  /**
   * Kubernetes API server URL of the cluster.
   */
  clusterUrl: string
  /**
   * Wildcard DNS resolving all the ready cluster nodes.
   */
  dnsWildcard: string
  /**
   * Date on which the cluster was created.
   */
  createdAt?: Date | null
  /**
   * Date on which the cluster was last updated.
   */
  updatedAt?: Date | null
  /**
   * Autoscaler configuration for the cluster, see https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md for details.
   */
  autoscalerConfig?: ClusterAutoscalerConfig | null
  /**
   * Auto upgrade Kubernetes version of the cluster.
   */
  autoUpgrade?: ClusterAutoUpgrade | null
  /**
   * Defines whether a new Kubernetes version is available.
   */
  upgradeAvailable: boolean
  /**
   * List of enabled feature gates.
   */
  featureGates: string[]
  /**
   * List of enabled admission plugins.
   */
  admissionPlugins: string[]
  /**
   * This configuration enables to update the OpenID Connect configuration of the Kubernetes API server.
   */
  openIdConnectConfig?: ClusterOpenIDConnectConfig | null
  /**
   * Additional Subject Alternative Names for the Kubernetes API server certificate.
   */
  apiserverCertSans: string[]
  /**
   * Private network ID for internal cluster communication.
   */
  privateNetworkId?: string | null
  /**
   * Date on which it will be possible to switch to a smaller offer.
   */
  commitmentEndsAt?: Date | null
  /**
   * @deprecated Defines whether ACL is available on the cluster.
   */
  aclAvailable?: boolean | null
  /**
   * IAM group that nodes are members of (this field might be empty during early stage of cluster creation).
   */
  iamNodesGroupId: string
  /**
   * IAM application ID for the control plane (this field might be empty during early stage of cluster creation).
   */
  iamControlPlaneApplicationId: string
  /**
   * Subnet used for the Pod CIDR.
   */
  podCidr: string
  /**
   * Subnet used for the Service CIDR.
   */
  serviceCidr: string
  /**
   * IP used for the DNS Service.
   */
  serviceDnsIp: string
}


export interface Node {
  /**
   * Node ID.
   */
  id: string
  /**
   * The SRN of the node.
   */
  srn: string
  /**
   * Pool ID of the node.
   */
  poolId: string
  /**
   * Cluster ID of the node.
   */
  clusterId: string
  /**
   * Underlying instance ID. It is prefixed by instance type and location information (see https://pkg.go.dev/k8s.io/api/core/v1#NodeSpec.ProviderID).
   */
  providerId: string
  /**
   * Cluster region of the node.
   */
  region: ScwRegion
  /**
   * Name of the node.
   */
  name: string
  /**
   * @deprecated Public IPv4 address of the node.
   */
  publicIpV4?: string | null
  /**
   * @deprecated Public IPv6 address of the node.
   */
  publicIpV6?: string | null
  /**
   * @deprecated Conditions of the node. These conditions contain the Node Problem Detector conditions, as well as some in house conditions.
   */
  conditions: Record<string, string>
  /**
   * Status of the node.
   */
  status: NodeStatus
  /**
   * Details of the error, if any occurred when managing the node.
   */
  errorMessage?: string | null
  /**
   * Date on which the node was created.
   */
  createdAt?: Date | null
  /**
   * Date on which the node was last updated.
   */
  updatedAt?: Date | null
}


export interface Pool {
  /**
   * Pool ID.
   */
  id: string
  /**
   * Cluster ID of the pool.
   */
  clusterId: string
  /**
   * Date on which the pool was created.
   */
  createdAt?: Date | null
  /**
   * Date on which the pool was last updated.
   */
  updatedAt?: Date | null
  /**
   * Pool name.
   */
  name: string
  /**
   * Pool status.
   */
  status: PoolStatus
  /**
   * Pool version.
   */
  version: string
  /**
   * Node type is the type of Scaleway Instance wanted for the pool. Nodes with insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST). 'external' is a special node type used to provision instances from other cloud providers in a Kosmos Cluster.
   */
  nodeType: string
  /**
   * Defines whether the autoscaling feature is enabled for the pool.
   */
  autoscaling: boolean
  /**
   * Size (number of nodes) of the pool.
   */
  size: number
  /**
   * Defines the minimum size of the pool. Note that this field is only used when autoscaling is enabled on the pool.
   */
  minSize: number
  /**
   * Defines the maximum size of the pool. Note that this field is only used when autoscaling is enabled on the pool.
   */
  maxSize: number
  /**
   * Customization of the container runtime is available for each pool.
   */
  containerRuntime: Runtime
  /**
   * Defines whether the autohealing feature is enabled for the pool.
   */
  autohealing: boolean
  /**
   * Tags associated with the pool, see [managing tags](https://www.scaleway.com/en/docs/kubernetes/api-cli/managing-tags).
   */
  tags: string[]
  /**
   * Placement group ID in which all the nodes of the pool will be created, placement groups are limited to 20 instances.
   */
  placementGroupId?: string | null
  /**
   * Kubelet arguments to be used by this pool. Note that this feature is experimental.
   */
  kubeletArgs: Record<string, string>
  /**
   * Defines how node provisioning should behave during pool version upgrade.
   */
  upgradePolicy?: PoolUpgradePolicy | null
  /**
   * Zone in which the pool's nodes will be spawned.
   */
  zone: ScwZone
  /**
   * * `l_ssd` is a local block storage which means your system is stored locally on your node's hypervisor. This type is not available for all node types
* `sbs_5k` is a remote block storage which means your system is stored on a centralized and resilient cluster with 5k IOPS limits
* `sbs_15k` is a faster remote block storage which means your system is stored on a centralized and resilient cluster with 15k IOPS limits
* `b_ssd` is the legacy remote block storage which means your system is stored on a centralized and resilient cluster. Not available for new pools, use `sbs_5k` or `sbs_15k` instead.
   */
  rootVolumeType: PoolVolumeType
  /**
   * System volume disk size.
   */
  rootVolumeSize?: number | null
  /**
   * Defines if the public IP should be removed from Nodes. To use this feature, your Cluster must have an attached Private Network set up with a Public Gateway.
   */
  publicIpDisabled: boolean
  /**
   * Security group ID in which all the nodes of the pool will be created. If unset, the pool will use default Kapsule security group in current zone.
   */
  securityGroupId: string
  /**
   * Kubernetes labels applied and reconciled on the nodes.
   */
  labels: Record<string, string>
  /**
   * Kubernetes taints applied and reconciled on the nodes.
   */
  taints: CoreV1Taint[]
  /**
   * Kubernetes taints applied at node creation but not reconciled afterwards.
   */
  startupTaints: CoreV1Taint[]
  /**
   * Private network where the nodes are attached. Should be member of the same VPC as the API Server.
   */
  privateNetworkId?: string | null
  /**
   * Details of the error, if any occurred when managing the pool.
   */
  errorMessage?: string | null
  /**
   * Maximum amount of time in seconds before the API forces the drain and deletion of a `deleting` node. It overrides pods `PodDisruptionBudget` and `terminationGracePeriodSeconds`. Defaults to 15 minutes, up to 1 hour.
   */
  maxTerminationGracePeriod?: string | null
  /**
   * The SRN of the pool.
   */
  srn: string
  /**
   * Cluster region of the pool.
   */
  region: ScwRegion
}


export interface UserDataSummary {
  /**
   * Key name of a given user data.
   */
  key: string
}


export interface NodeMetadataCoreV1Taint {
  key: string
  value: string
  effect: string
}


export interface UpdateClusterRequestAutoUpgrade {
  /**
   * Defines whether auto upgrade is enabled for the cluster.
   */
  enable?: boolean | null
  /**
   * Maintenance window of the cluster auto upgrades.
   */
  maintenanceWindow?: MaintenanceWindow | null
}


export interface UpdateClusterRequestAutoscalerConfig {
  /**
   * Forbid cluster autoscaler to scale down the cluster, defaults to false.
   */
  scaleDownDisabled?: boolean | null
  /**
   * How long after scale up the scale down evaluation resumes.
   */
  scaleDownDelayAfterAdd?: string | null
  /**
   * Type of resource estimator to be used in scale up.
   */
  estimator: AutoscalerEstimator
  /**
   * Kubernetes autoscaler strategy to fit pods into nodes, see https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders for details.
   */
  expander: AutoscalerExpander
  /**
   * Ignore DaemonSet pods when calculating resource utilization for scaling down, defaults to false.
   */
  ignoreDaemonsetsUtilization?: boolean | null
  /**
   * Detect similar node groups and balance the number of nodes between them, defaults to false.
   */
  balanceSimilarNodeGroups?: boolean | null
  /**
   * Pods with priority below cutoff will be expendable. They can be killed without any consideration during scale down and they won't cause scale up. Pods with null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff?: number | null
  /**
   * How long a node should be unneeded before it is eligible for scale down, defaults to 10 minutes.
   */
  scaleDownUnneededTime?: string | null
  /**
   * Node utilization level, defined as a sum of requested resources divided by allocatable capacity, below which a node can be considered for scale down.
   */
  scaleDownUtilizationThreshold?: number | null
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination when trying to scale down a node, defaults to 600 (10 minutes).
   */
  maxGracefulTerminationSec?: number | null
  /**
   * Cluster autoscaler will never delete nodes with pods with local storage, e.g. EmptyDir or HostPath, defaults to true.
   */
  skipNodesWithLocalStorage?: boolean | null
  /**
   * Cluster autoscaler logging level expressed from 0 to 4 (4 being the more verbose), defaults to 2. see https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-can-i-increase-the-information-that-the-ca-is-logging for details.
   */
  logLevel?: number | null
}


export interface UpdateClusterRequestOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing keys. Only URLs using the `https://` scheme are accepted. This is typically the provider's discovery URL without a path, for example "https://accounts.google.com" or "https://login.salesforce.com".
   */
  issuerUrl?: string | null
  /**
   * A client ID that all tokens must be issued for.
   */
  clientId?: string | null
  /**
   * JWT claim to use as the user name. The default is `sub`, which is expected to be the end user's unique identifier. Admins can choose other claims, such as `email` or `name`, depending on their provider. However, claims other than `email` will be prefixed with the issuer URL to prevent name collision.
   */
  usernameClaim?: string | null
  /**
   * Prefix prepended to username claims to prevent name collision (such as `system:` users). For example, the value `oidc:` will create usernames like `oidc:jane.doe`. If this flag is not provided and `username_claim` is a value other than `email`, the prefix defaults to `( Issuer URL )#` where `( Issuer URL )` is the value of `issuer_url`. The value `-` can be used to disable all prefixing.
   */
  usernamePrefix?: string | null
  /**
   * JWT claim to use as the user's group.
   */
  groupsClaim?: string[] | null
  /**
   * Prefix prepended to group claims to prevent name collision (such as `system:` groups). For example, the value `oidc:` will create group names like `oidc:engineering` and `oidc:infra`.
   */
  groupsPrefix?: string | null
  /**
   * Multiple key=value pairs describing a required claim in the ID token. If set, the claims are verified to be present in the ID token with a matching value.
   */
  requiredClaim?: string[] | null
}


export interface UpdatePoolRequestUpgradePolicy {
  /**
   * New maximum number of nodes that can be `upgrading` at the same time.
   */
  maxUnavailable?: number | null
  /**
   * New maximum number of nodes to be created during the upgrade.
   */
  maxSurge?: number | null
}


export type AddClusterACLRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster whose ACLs will be added.
   */
  clusterId: string
  /**
   * ACLs to add.
   */
  acls?: ACLRuleRequest[] | null
}


export interface AddClusterACLRulesResponse {
  /**
   * ACLs that were added.
   */
  rules: ACLRule[]
}


export type AuthExternalNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Pool the node will be attached to.
   */
  poolId: string
}


export type CreateClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * @deprecated Organization ID in which the cluster will be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string | null
  /**
   * Project ID in which the cluster will be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string | null
  /**
   * Type of the cluster. See [list available cluster types](#list-available-cluster-types-for-a-cluster) for a list of valid types.
   */
  type: string
  /**
   * Cluster name.
   */
  name?: string | null
  /**
   * Cluster description.
   */
  description: string
  /**
   * Tags associated with the cluster.
   */
  tags?: string[] | null
  /**
   * Kubernetes version of the cluster.
   */
  version: string
  /**
   * Container Network Interface (CNI) plugin running in the cluster.
   */
  cni: CNI
  /**
   * Pools created along with the cluster.
   */
  pools?: CreateClusterRequestPoolConfig[] | null
  /**
   * Autoscaler configuration for the cluster. It allows you to set (to an extent) your preferred autoscaler configuration, which is an implementation of the cluster-autoscaler (https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/).
   */
  autoscalerConfig?: CreateClusterRequestAutoscalerConfig | null
  /**
   * Auto upgrade configuration of the cluster. This configuration enables to set a specific 2-hour time window in which the cluster can be automatically updated to the latest patch version.
   */
  autoUpgrade?: CreateClusterRequestAutoUpgrade | null
  /**
   * List of feature gates to enable.
   */
  featureGates?: string[] | null
  /**
   * List of admission plugins to enable.
   */
  admissionPlugins?: string[] | null
  /**
   * OpenID Connect configuration of the cluster. This configuration enables to update the OpenID Connect configuration of the Kubernetes API server.
   */
  openIdConnectConfig?: CreateClusterRequestOpenIDConnectConfig | null
  /**
   * Additional Subject Alternative Names for the Kubernetes API server certificate.
   */
  apiserverCertSans?: string[] | null
  /**
   * Private network ID for internal cluster communication (cannot be changed later).
   */
  privateNetworkId?: string | null
  /**
   * Subnet used for the Pod CIDR (cannot be changed later).
   */
  podCidr?: string | null
  /**
   * Subnet used for the Service CIDR (cannot be changed later).
   */
  serviceCidr?: string | null
  /**
   * IP used for the DNS Service (cannot be changes later). If unset, default to Service CIDR's network + 10.
   */
  serviceDnsIp?: string | null
}


export type CreatePoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Cluster ID to which the pool will be attached.
   */
  clusterId: string
  /**
   * Pool name.
   */
  name?: string | null
  /**
   * Node type is the type of Scaleway Instance wanted for the pool. Nodes with insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST). 'external' is a special node type used to provision instances from other cloud providers in a Kosmos Cluster.
   */
  nodeType: string
  /**
   * Placement group ID in which all the nodes of the pool will be created, placement groups are limited to 20 instances.
   */
  placementGroupId?: string | null
  /**
   * Defines whether the autoscaling feature is enabled for the pool.
   */
  autoscaling: boolean
  /**
   * Size (number of nodes) of the pool.
   */
  size: number
  /**
   * Defines the minimum size of the pool. Note that this field is only used when autoscaling is enabled on the pool.
   */
  minSize?: number | null
  /**
   * Defines the maximum size of the pool. Note that this field is only used when autoscaling is enabled on the pool.
   */
  maxSize?: number | null
  /**
   * Customization of the container runtime is available for each pool.
   */
  containerRuntime?: Runtime | null
  /**
   * Defines whether the autohealing feature is enabled for the pool.
   */
  autohealing: boolean
  /**
   * Tags associated with the pool, see [managing tags](https://www.scaleway.com/en/docs/kubernetes/api-cli/managing-tags).
   */
  tags?: string[] | null
  /**
   * Kubelet arguments to be used by this pool. Note that this feature is experimental.
   */
  kubeletArgs?: Record<string, string> | null
  /**
   * Defines how node provisioning should behave during pool version upgrade.
   */
  upgradePolicy?: CreatePoolRequestUpgradePolicy | null
  /**
   * Zone in which the pool's nodes will be spawned.
   */
  zone?: ScwZone | null
  /**
   * * `l_ssd` is a local block storage which means your system is stored locally on your node's hypervisor. This type is not available for all node types
* `sbs_5k` is a remote block storage which means your system is stored on a centralized and resilient cluster with 5k IOPS limits
* `sbs_15k` is a faster remote block storage which means your system is stored on a centralized and resilient cluster with 15k IOPS limits
* `b_ssd` is the legacy remote block storage which means your system is stored on a centralized and resilient cluster. Not available for new pools, use `sbs_5k` or `sbs_15k` instead.
   */
  rootVolumeType?: PoolVolumeType | null
  /**
   * System volume disk size.
   */
  rootVolumeSize?: number | null
  /**
   * Defines if the public IP should be removed from Nodes. To use this feature, your Cluster must have an attached Private Network set up with a Public Gateway.
   */
  publicIpDisabled: boolean
  /**
   * Security group ID in which all the nodes of the pool will be created. If unset, the pool will use default Kapsule security group in current zone.
   */
  securityGroupId?: string | null
  /**
   * Kubernetes labels applied and reconciled on the nodes.
   */
  labels?: Record<string, string> | null
  /**
   * Kubernetes taints applied and reconciled on the nodes.
   */
  taints?: CoreV1Taint[] | null
  /**
   * Kubernetes taints applied at node creation but not reconciled afterwards.
   */
  startupTaints?: CoreV1Taint[] | null
  /**
   * Private network where the nodes are attached. Should be member of the same VPC as the API Server.
   */
  privateNetworkId?: string | null
  /**
   * User data applied and reconciled with the pool.
   */
  userData?: Record<string, string> | null
  /**
   * Maximum amount of time in seconds before the API forces the drain and deletion of a `deleting` node. It overrides pods `PodDisruptionBudget` and `terminationGracePeriodSeconds`. Defaults to 15 minutes, up to 1 hour.
   */
  maxTerminationGracePeriod?: string | null
}


export type DeleteACLRuleRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the ACL rule to delete.
   */
  aclId: string
}


export type DeleteClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster to delete.
   */
  clusterId: string
  /**
   * Defines whether all volumes (including retain volume type), empty Private Networks and Load Balancers with a name starting with the cluster ID will also be deleted.
   */
  withAdditionalResources: boolean
}


export type DeleteNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the node to replace.
   */
  nodeId: string
  /**
   * Skip draining node from its workload (Note: this parameter is currently inactive).
   */
  skipDrain: boolean
}


export type DeletePoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the pool to delete.
   */
  poolId: string
}


export interface ExternalNodeAuth {
  nodeSecretKey: string
  metadataUrl: string
}


export type GetClusterKubeConfigRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Cluster ID for which to download the kubeconfig.
   */
  clusterId: string
  /**
   * Hide the legacy token from the kubeconfig.
   */
  redacted?: boolean | null
  /**
   * Which endpoint to use to reach the APIServer (default: public).
   */
  endpoint?: GetClusterKubeConfigRequestEndpoint | null
}


export type GetClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the requested cluster.
   */
  clusterId: string
}


export type GetNodeMetadataRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
}


export type GetNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the requested node.
   */
  nodeId: string
}


export type GetPoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the requested pool.
   */
  poolId: string
}


export type GetUserDataRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Pool the user data are associated to.
   */
  poolId: string
  /**
   * User data key to retrieved.
   */
  key: string
}


export type GetVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Requested version name.
   */
  versionName: string
}


export type ListClusterACLRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster whose ACLs will be listed.
   */
  clusterId: string
  /**
   * Page number for the returned ACLs.
   */
  page?: number | null
  /**
   * Maximum number of ACLs per page.
   */
  pageSize?: number | null
}


export interface ListClusterACLRulesResponse {
  /**
   * Total number of ACLs that exist for the cluster.
   */
  totalCount: number
  /**
   * Paginated returned ACLs.
   */
  rules: ACLRule[]
}


export type ListClusterAvailableTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Cluster ID for which the available Kubernetes types will be listed.
   */
  clusterId: string
}


export interface ListClusterAvailableTypesResponse {
  /**
   * Available cluster types for the cluster.
   */
  clusterTypes: ClusterType[]
  /**
   * Total number of types.
   */
  totalCount: number
}


export type ListClusterAvailableVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Cluster ID for which the available Kubernetes versions will be listed.
   */
  clusterId: string
}


export interface ListClusterAvailableVersionsResponse {
  /**
   * Available Kubernetes versions for the cluster.
   */
  versions: Version[]
}


export type ListClusterTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Page number, from the paginated results, to return for cluster-types.
   */
  page?: number | null
  /**
   * Maximum number of clusters per page.
   */
  pageSize?: number | null
}


export interface ListClusterTypesResponse {
  /**
   * Total number of cluster-types.
   */
  totalCount: number
  /**
   * Paginated returned cluster-types.
   */
  clusterTypes: ClusterType[]
}


export type ListClustersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Organization ID on which to filter the returned clusters.
   */
  organizationId?: string | null
  /**
   * Project ID on which to filter the returned clusters.
   */
  projectId?: string | null
  /**
   * Sort order of returned clusters.
   */
  orderBy?: ListClustersRequestOrderBy | null
  /**
   * Page number to return for clusters, from the paginated results.
   */
  page?: number | null
  /**
   * Maximum number of clusters per page.
   */
  pageSize?: number | null
  /**
   * Name to filter on, only clusters containing this substring in their name will be returned.
   */
  name?: string | null
  /**
   * Status to filter on, only clusters with this status will be returned.
   */
  status?: ClusterStatus | null
  /**
   * Type to filter on, only clusters with this type will be returned.
   */
  type?: string | null
  /**
   * Private Network ID to filter on, only clusters within this Private Network will be returned.
   */
  privateNetworkId?: string | null
  /**
   * Version to filter on, only cluster matching this prefix version will be returned.
   */
  version?: string | null
}


export interface ListClustersResponse {
  /**
   * Total number of clusters.
   */
  totalCount: number
  /**
   * Paginated returned clusters.
   */
  clusters: Cluster[]
}


export type ListNodesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Cluster ID from which the nodes will be listed from.
   */
  clusterId: string
  /**
   * Pool ID on which to filter the returned nodes.
   */
  poolId?: string | null
  /**
   * Sort order of the returned nodes.
   */
  orderBy?: ListNodesRequestOrderBy | null
  /**
   * Page number for the returned nodes.
   */
  page?: number | null
  /**
   * Maximum number of nodes per page.
   */
  pageSize?: number | null
  /**
   * Name to filter on, only nodes containing this substring in their name will be returned.
   */
  name?: string | null
  /**
   * Status to filter on, only nodes with this status will be returned.
   */
  status?: NodeStatus | null
}


export interface ListNodesResponse {
  /**
   * Total number of nodes.
   */
  totalCount: number
  /**
   * Paginated returned nodes.
   */
  nodes: Node[]
}


export type ListPoolsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster whose pools will be listed.
   */
  clusterId: string
  /**
   * Sort order of returned pools.
   */
  orderBy?: ListPoolsRequestOrderBy | null
  /**
   * Page number for the returned pools.
   */
  page?: number | null
  /**
   * Maximum number of pools per page.
   */
  pageSize?: number | null
  /**
   * Name to filter on, only pools containing this substring in their name will be returned.
   */
  name?: string | null
  /**
   * Status to filter on, only pools with this status will be returned.
   */
  status?: PoolStatus | null
}


export interface ListPoolsResponse {
  /**
   * Total number of pools that exists for the cluster.
   */
  totalCount: number
  /**
   * Paginated returned pools.
   */
  pools: Pool[]
}


export type ListUserDataRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Pool the user data are associated to.
   */
  poolId: string
}


export interface ListUserDataResponse {
  /**
   * User data information.
   */
  userData: UserDataSummary[]
}


export type ListVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
}


export interface ListVersionsResponse {
  /**
   * Available Kubernetes versions.
   */
  versions: Version[]
}


export interface NodeMetadata {
  id: string
  name: string
  clusterUrl: string
  clusterCa: string
  credentialProviderConfig: string
  poolVersion: string
  kubeletConfig: string
  nodeLabels: Record<string, string>
  nodeTaints: NodeMetadataCoreV1Taint[]
  providerId: string
  resolvconfPath: string
  templateArgs: Record<string, string>
  hasGpu: boolean
  externalIp: string
  repoUri: string
  installerTags: string[]
  updaterBinUrl: string
  updaterBinVersion: string
  updaterBinPath: string
}


export type RebootNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the node to reboot.
   */
  nodeId: string
}


export type ReplaceNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the node to replace.
   */
  nodeId: string
}


export type ResetClusterAdminTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Cluster ID on which the admin token will be renewed.
   */
  clusterId: string
}


export type SetClusterACLRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster whose ACLs will be set.
   */
  clusterId: string
  /**
   * ACLs to set.
   */
  acls?: ACLRuleRequest[] | null
}


export interface SetClusterACLRulesResponse {
  /**
   * ACLs that were set.
   */
  rules: ACLRule[]
}


export type SetClusterTypeRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster to migrate from one type to another.
   */
  clusterId: string
  /**
   * Type of the cluster. Note that some migrations are not possible (please refer to product documentation).
   */
  type: string
}


export type SetPoolLabelsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  poolId: string
  labels?: Record<string, string> | null
}


export type SetPoolStartupTaintsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the pool to update.
   */
  poolId: string
  /**
   * List of startup taints to set.
   */
  startupTaints?: CoreV1Taint[] | null
}


export type SetPoolTaintsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the pool to update.
   */
  poolId: string
  /**
   * List of taints to set.
   */
  taints?: CoreV1Taint[] | null
}


export type UpdateClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster to update.
   */
  clusterId: string
  /**
   * New external name for the cluster.
   */
  name?: string | null
  /**
   * New description for the cluster.
   */
  description?: string | null
  /**
   * New tags associated with the cluster.
   */
  tags?: string[] | null
  /**
   * New autoscaler config for the cluster.
   */
  autoscalerConfig?: UpdateClusterRequestAutoscalerConfig | null
  /**
   * New auto upgrade configuration for the cluster. Note that all fields needs to be set.
   */
  autoUpgrade?: UpdateClusterRequestAutoUpgrade | null
  /**
   * List of feature gates to enable.
   */
  featureGates?: string[] | null
  /**
   * List of admission plugins to enable.
   */
  admissionPlugins?: string[] | null
  /**
   * OpenID Connect configuration of the cluster. This configuration enables to update the OpenID Connect configuration of the Kubernetes API server.
   */
  openIdConnectConfig?: UpdateClusterRequestOpenIDConnectConfig | null
  /**
   * Additional Subject Alternative Names for the Kubernetes API server certificate.
   */
  apiserverCertSans?: string[] | null
}


export type UpdatePoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the pool to update.
   */
  poolId: string
  /**
   * New value for the pool autoscaling enablement.
   */
  autoscaling?: boolean | null
  /**
   * New desired pool size.
   */
  size?: number | null
  /**
   * New minimum size for the pool.
   */
  minSize?: number | null
  /**
   * New maximum size for the pool.
   */
  maxSize?: number | null
  /**
   * New value for the pool autohealing enablement.
   */
  autohealing?: boolean | null
  /**
   * New tags associated with the pool.
   */
  tags?: string[] | null
  /**
   * New Kubelet arguments to be used by this pool. Note that this feature is experimental.
   */
  kubeletArgs?: Record<string, string> | null
  /**
   * New upgrade policy for the pool.
   */
  upgradePolicy?: UpdatePoolRequestUpgradePolicy | null
  /**
   * Security group ID in which all the nodes of the pool will be moved.
   */
  securityGroupId?: string | null
  /**
   * New maximum amount of time in seconds before the API forces the drain and deletion of a `deleting` node.
   */
  maxTerminationGracePeriod?: string | null
}


export type UpgradeClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the cluster to upgrade.
   */
  clusterId: string
  /**
   * New Kubernetes version of the cluster. Note that the version should either be a higher patch version of the same minor version or the direct minor version after the current one.
   */
  version: string
  /**
   * Defines whether pools will also be upgraded once the control plane is upgraded.
   */
  upgradePools: boolean
}


export type UpgradePoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the pool to upgrade.
   */
  poolId: string
  /**
   * New Kubernetes version for the pool.
   */
  version: string
}


