// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region, Zone } from '../../../bridge'

export type AutoscalerEstimator = 'unknown_estimator' | 'binpacking'

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
  | 'weave'
  | 'flannel'
  | 'kilo'

export type ClusterStatus =
  | 'unknown'
  | 'creating'
  | 'ready'
  | 'deleting'
  | 'deleted'
  | 'updating'
  | 'locked'
  | 'pool_required'

export type Ingress =
  | 'unknown_ingress'
  | 'none'
  | 'nginx'
  | 'traefik'
  | 'traefik2'

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

export type ListNodesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

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

export type PoolVolumeType = 'default_volume_type' | 'l_ssd' | 'b_ssd'

export type Runtime = 'unknown_runtime' | 'docker' | 'containerd' | 'crio'

/** Cluster. */
export interface Cluster {
  /** ID of the cluster. */
  id: string
  /** Type of the cluster. */
  type: string
  /** Name of the cluster. */
  name: string
  /** Status of the cluster. */
  status: ClusterStatus
  /** Kubernetes version of the cluster. */
  version: string
  /** Region in which the cluster is deployed. */
  region: Region
  /** ID of the organization owning the cluster. */
  organizationId: string
  /** ID of the project owning the cluster. */
  projectId: string
  /** Tags associated with the cluster. */
  tags: string[]
  /** Container Network Interface (CNI) plugin running in the cluster. */
  cni: CNI
  /** Description of the cluster. */
  description: string
  /** Kubernetes API server URL of the cluster. */
  clusterUrl: string
  /** DNS wildcard resovling all the ready nodes of the cluster. */
  dnsWildcard: string
  /** Date at which the cluster was created. */
  createdAt?: Date
  /** Date at which the cluster was last updated. */
  updatedAt?: Date
  /** Autoscaler config for the cluster. */
  autoscalerConfig?: ClusterAutoscalerConfig
  /**
   * @deprecated Defines whether the Kubernetes dashboard is enabled for the
   *   cluster.
   */
  dashboardEnabled?: boolean
  /** @deprecated Ingress controller used in the cluster. */
  ingress?: Ingress
  /** Auto upgrade configuration of the cluster. */
  autoUpgrade?: ClusterAutoUpgrade
  /** Defines whether a new Kubernetes version is available. */
  upgradeAvailable: boolean
  /** List of enabled feature gates. */
  featureGates: string[]
  /** List of enabled admission plugins. */
  admissionPlugins: string[]
  /**
   * OpenID Connect configuration of the cluster. This configuration enables to
   * update the OpenID Connect configuration of the Kubernetes API server.
   */
  openIdConnectConfig?: ClusterOpenIDConnectConfig
  /**
   * Additional Subject Alternative Names for the Kubernetes API server
   * certificate.
   */
  apiserverCertSans: string[]
  /** Private network ID for internal cluster communication. */
  privateNetworkId?: string
}

/** Cluster. auto upgrade. */
export interface ClusterAutoUpgrade {
  /** Whether or not auto upgrade is enabled for the cluster. */
  enabled: boolean
  /** Maintenance window of the cluster auto upgrades. */
  maintenanceWindow?: MaintenanceWindow
}

/** Cluster. autoscaler config. */
export interface ClusterAutoscalerConfig {
  /** Disable the cluster autoscaler. */
  scaleDownDisabled: boolean
  /** How long after scale up that scale down evaluation resumes. */
  scaleDownDelayAfterAdd: string
  /** Type of resource estimator to be used in scale up. */
  estimator: AutoscalerEstimator
  /** Type of node group expander to be used in scale up. */
  expander: AutoscalerExpander
  /**
   * Ignore DaemonSet pods when calculating resource utilization for scaling
   * down.
   */
  ignoreDaemonsetsUtilization: boolean
  /** Detect similar node groups and balance the number of nodes between them. */
  balanceSimilarNodeGroups: boolean
  /**
   * Pods with priority below cutoff will be expendable. Pods with priority
   * below cutoff will be expendable. They can be killed without any
   * consideration during scale down and they don't cause scale up. Pods with
   * null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff: number
  /** How long a node should be unneeded before it is eligible for scale down. */
  scaleDownUnneededTime: string
  /**
   * Node utilization level, defined as sum of requested resources divided by
   * capacity, below which a node can be considered for scale down.
   */
  scaleDownUtilizationThreshold: number
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination
   * when trying to scale down a node.
   */
  maxGracefulTerminationSec: number
}

/** Cluster. open id connect config. */
export interface ClusterOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing
   * keys. URL of the provider which allows the API server to discover public
   * signing keys. Only URLs which use the `https://` scheme are accepted. This
   * is typically the provider's discovery URL without a path, for example
   * "https://accounts.google.com" or "https://login.salesforce.com". This URL
   * should point to the level below .well-known/openid-configuration.
   */
  issuerUrl: string
  /** A client id that all tokens must be issued for. */
  clientId: string
  /**
   * JWT claim to use as the user name. JWT claim to use as the user name. By
   * default `sub`, which is expected to be a unique identifier of the end user.
   * Admins can choose other claims, such as `email` or `name`, depending on
   * their provider. However, claims other than `email` will be prefixed with
   * the issuer URL to prevent naming clashes with other plugins.
   */
  usernameClaim: string
  /**
   * Prefix prepended to username. Prefix prepended to username claims to
   * prevent clashes with existing names (such as `system:` users). For example,
   * the value `oidc:` will create usernames like `oidc:jane.doe`. If this flag
   * isn't provided and `username_claim` is a value other than `email` the
   * prefix defaults to `( Issuer URL )#` where `( Issuer URL )` is the value of
   * `issuer_url`. The value `-` can be used to disable all prefixing.
   */
  usernamePrefix: string
  /** JWT claim to use as the user's group. */
  groupsClaim: string[]
  /**
   * Prefix prepended to group claims. Prefix prepended to group claims to
   * prevent clashes with existing names (such as `system:` groups). For
   * example, the value `oidc:` will create group names like `oidc:engineering`
   * and `oidc:infra`.
   */
  groupsPrefix: string
  /**
   * Multiple key=value pairs that describes a required claim in the ID token.
   * Multiple key=value pairs that describes a required claim in the ID token.
   * If set, the claims are verified to be present in the ID token with a
   * matching value.
   */
  requiredClaim: string[]
}

/** Create cluster request. auto upgrade. */
export interface CreateClusterRequestAutoUpgrade {
  /** Whether or not auto upgrade is enabled for the cluster. */
  enable: boolean
  /** Maintenance window of the cluster auto upgrades. */
  maintenanceWindow?: MaintenanceWindow
}

/** Create cluster request. autoscaler config. */
export interface CreateClusterRequestAutoscalerConfig {
  /** Disable the cluster autoscaler. */
  scaleDownDisabled?: boolean
  /** How long after scale up that scale down evaluation resumes. */
  scaleDownDelayAfterAdd?: string
  /** Type of resource estimator to be used in scale up. */
  estimator: AutoscalerEstimator
  /** Type of node group expander to be used in scale up. */
  expander: AutoscalerExpander
  /**
   * Ignore DaemonSet pods when calculating resource utilization for scaling
   * down.
   */
  ignoreDaemonsetsUtilization?: boolean
  /** Detect similar node groups and balance the number of nodes between them. */
  balanceSimilarNodeGroups?: boolean
  /**
   * Pods with priority below cutoff will be expendable. Pods with priority
   * below cutoff will be expendable. They can be killed without any
   * consideration during scale down and they don't cause scale up. Pods with
   * null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff?: number
  /** How long a node should be unneeded before it is eligible for scale down. */
  scaleDownUnneededTime?: string
  /**
   * Node utilization level, defined as sum of requested resources divided by
   * capacity, below which a node can be considered for scale down.
   */
  scaleDownUtilizationThreshold?: number
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination
   * when trying to scale down a node.
   */
  maxGracefulTerminationSec?: number
}

/** Create cluster request. open id connect config. */
export interface CreateClusterRequestOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing
   * keys. URL of the provider which allows the API server to discover public
   * signing keys. Only URLs which use the `https://` scheme are accepted. This
   * is typically the provider's discovery URL without a path, for example
   * "https://accounts.google.com" or "https://login.salesforce.com". This URL
   * should point to the level below .well-known/openid-configuration.
   */
  issuerUrl: string
  /** A client id that all tokens must be issued for. */
  clientId: string
  /**
   * JWT claim to use as the user name. JWT claim to use as the user name. By
   * default `sub`, which is expected to be a unique identifier of the end user.
   * Admins can choose other claims, such as `email` or `name`, depending on
   * their provider. However, claims other than `email` will be prefixed with
   * the issuer URL to prevent naming clashes with other plugins.
   */
  usernameClaim?: string
  /**
   * Prefix prepended to username. Prefix prepended to username claims to
   * prevent clashes with existing names (such as `system:` users). For example,
   * the value `oidc:` will create usernames like `oidc:jane.doe`. If this flag
   * isn't provided and `username_claim` is a value other than `email` the
   * prefix defaults to `( Issuer URL )#` where `( Issuer URL )` is the value of
   * `issuer_url`. The value `-` can be used to disable all prefixing.
   */
  usernamePrefix?: string
  /** JWT claim to use as the user's group. */
  groupsClaim?: string[]
  /**
   * Prefix prepended to group claims. Prefix prepended to group claims to
   * prevent clashes with existing names (such as `system:` groups). For
   * example, the value `oidc:` will create group names like `oidc:engineering`
   * and `oidc:infra`.
   */
  groupsPrefix?: string
  /**
   * Multiple key=value pairs that describes a required claim in the ID token.
   * Multiple key=value pairs that describes a required claim in the ID token.
   * If set, the claims are verified to be present in the ID token with a
   * matching value.
   */
  requiredClaim?: string[]
}

/** Create cluster request. pool config. */
export interface CreateClusterRequestPoolConfig {
  /** Name of the pool. */
  name: string
  /**
   * Node type is the type of Scaleway Instance wanted for the pool. Node type
   * is the type of Scaleway Instance wanted for the pool. Nodes with
   * insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST).
   * 'external' is a special node type used to provision instances from other
   * cloud providers.
   */
  nodeType: string
  /** Placement group ID in which all the nodes of the pool will be created. */
  placementGroupId?: string
  /** Defines whether the autoscaling feature is enabled for the pool. */
  autoscaling: boolean
  /** Size (number of nodes) of the pool. */
  size: number
  /**
   * Minimum size of the pool. Defines the minimum size of the pool. Note that
   * this field will be used only when autoscaling is enabled.
   */
  minSize?: number
  /**
   * Maximum size of the pool. Defines the maximum size of the pool. Note that
   * this field will be used only when autoscaling is enabled.
   */
  maxSize?: number
  /**
   * Container runtime for the nodes of the pool. Customization of the container
   * runtime is available for each pool. Note that `docker` is deprecated since
   * 1.20 and will be removed in 1.24.
   */
  containerRuntime: Runtime
  /** Defines whether the autohealing feature is enabled for the pool. */
  autohealing: boolean
  /** Tags associated with the pool. */
  tags: string[]
  /**
   * Kubelet arguments to be used by this pool. Note that this feature is to be
   * considered as experimental.
   */
  kubeletArgs: Record<string, string>
  /** Pool upgrade policy. */
  upgradePolicy?: CreateClusterRequestPoolConfigUpgradePolicy
  /** Zone in which the pool's nodes will be spawned. */
  zone: Zone
  /**
   * System volume disk type. Defines the system volume disk type, we provide
   * two different types of volume (`volume_type`): `l_ssd` is a local block
   * storage: your system is stored locally on the hypervisor of your node.
   * `b_ssd` is a remote block storage: your system is stored on a centralised
   * and resilient cluster.
   */
  rootVolumeType: PoolVolumeType
  /** System volume disk size. */
  rootVolumeSize?: number
}

/** Create cluster request. pool config. upgrade policy. */
export interface CreateClusterRequestPoolConfigUpgradePolicy {
  /** The maximum number of nodes that can be not ready at the same time. */
  maxUnavailable?: number
  /** The maximum number of nodes to be created during the upgrade. */
  maxSurge?: number
}

export interface CreatePoolRequestUpgradePolicy {
  maxUnavailable?: number
  maxSurge?: number
}

export interface ExternalNode {
  id: string
  name: string
  clusterUrl: string
  clusterVersion: string
  clusterCa: string
  kubeToken: string
  kubeletConfig: string
}

/** List cluster available versions response. */
export interface ListClusterAvailableVersionsResponse {
  /** Available Kubernetes version for the cluster. */
  versions: Version[]
}

/** List clusters response. */
export interface ListClustersResponse {
  /** Total number of clusters. */
  totalCount: number
  /** Paginated returned clusters. */
  clusters: Cluster[]
}

/** List nodes response. */
export interface ListNodesResponse {
  /** Total number of nodes. */
  totalCount: number
  /** Paginated returned nodes. */
  nodes: Node[]
}

/** List pools response. */
export interface ListPoolsResponse {
  /** Total number of pools that exists for the cluster. */
  totalCount: number
  /** Paginated returned pools. */
  pools: Pool[]
}

/** List versions response. */
export interface ListVersionsResponse {
  /** Available Kubernetes versions. */
  versions: Version[]
}

/** Maintenance window. */
export interface MaintenanceWindow {
  /** Start time of the two-hour maintenance window. */
  startHour: number
  /** Day of the week for the maintenance window. */
  day: MaintenanceWindowDayOfTheWeek
}

/** Node. */
export interface Node {
  /** ID of the node. */
  id: string
  /** Pool ID of the node. */
  poolId: string
  /** Cluster ID of the node. */
  clusterId: string
  /**
   * Underlying instance ID. It is prefixed by instance type and location
   * information (see
   * https://pkg.go.dev/k8s.io/api/core/v1#NodeSpec.ProviderID).
   */
  providerId: string
  /** Cluster region of the node. */
  region: Region
  /** Name of the node. */
  name: string
  /** @deprecated Public IPv4 address of the node. */
  publicIpV4?: string
  /** @deprecated Public IPv6 address of the node. */
  publicIpV6?: string
  /**
   * @deprecated Conditions of the node. These conditions contains the Node
   *   Problem Detector conditions, as well as some in house conditions.
   */
  conditions?: Record<string, string>
  /** Status of the node. */
  status: NodeStatus
  /** Details of the error, if any occured when managing the node. */
  errorMessage?: string
  /** Date on which the node was created. */
  createdAt?: Date
  /** Date at which the node was last updated. */
  updatedAt?: Date
}

/** Pool. */
export interface Pool {
  /** ID of the pool. */
  id: string
  /** Cluster ID of the pool. */
  clusterId: string
  /** Date at which the pool was created. */
  createdAt?: Date
  /** Date at which the pool was last updated. */
  updatedAt?: Date
  /** Name of the pool. */
  name: string
  /** Status of the pool. */
  status: PoolStatus
  /** Version of the pool. */
  version: string
  /**
   * Node type is the type of Scaleway Instance wanted for the pool. Node type
   * is the type of Scaleway Instance wanted for the pool. Nodes with
   * insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST).
   * 'external' is a special node type used to provision instances from other
   * cloud providers.
   */
  nodeType: string
  /** Defines whether the autoscaling feature is enabled for the pool. */
  autoscaling: boolean
  /** Size (number of nodes) of the pool. */
  size: number
  /**
   * Minimum size of the pool. Defines the minimum size of the pool. Note that
   * this field will be used only when autoscaling is enabled.
   */
  minSize: number
  /**
   * Maximum size of the pool. Defines the maximum size of the pool. Note that
   * this field will be used only when autoscaling is enabled.
   */
  maxSize: number
  /**
   * Container runtime for the nodes of the pool. Customization of the container
   * runtime is available for each pool. Note that `docker` is deprecated since
   * 1.20 and will be removed in 1.24.
   */
  containerRuntime: Runtime
  /** Defines whether the autohealing feature is enabled for the pool. */
  autohealing: boolean
  /** Tags associated with the pool. */
  tags: string[]
  /** Placement group ID in which all the nodes of the pool will be created. */
  placementGroupId?: string
  /**
   * Kubelet arguments to be used by this pool. Note that this feature is to be
   * considered as experimental.
   */
  kubeletArgs: Record<string, string>
  /** Pool upgrade policy. */
  upgradePolicy?: PoolUpgradePolicy
  /** Zone in which the pool's nodes will be spawned. */
  zone: Zone
  /**
   * System volume disk type. Defines the system volume disk type, we provide
   * two different types of volume (`volume_type`): `l_ssd` is a local block
   * storage: your system is stored locally on the hypervisor of your node.
   * `b_ssd` is a remote block storage: your system is stored on a centralised
   * and resilient cluster.
   */
  rootVolumeType: PoolVolumeType
  /** System volume disk size. */
  rootVolumeSize?: number
  /** Cluster region of the pool. */
  region: Region
}

export interface PoolUpgradePolicy {
  maxUnavailable: number
  maxSurge: number
}

/** Update cluster request. auto upgrade. */
export interface UpdateClusterRequestAutoUpgrade {
  /** Whether or not auto upgrade is enabled for the cluster. */
  enable?: boolean
  /** Maintenance window of the cluster auto upgrades. */
  maintenanceWindow?: MaintenanceWindow
}

/** Update cluster request. autoscaler config. */
export interface UpdateClusterRequestAutoscalerConfig {
  /** Disable the cluster autoscaler. */
  scaleDownDisabled?: boolean
  /** How long after scale up that scale down evaluation resumes. */
  scaleDownDelayAfterAdd?: string
  /** Type of resource estimator to be used in scale up. */
  estimator: AutoscalerEstimator
  /** Type of node group expander to be used in scale up. */
  expander: AutoscalerExpander
  /**
   * Ignore DaemonSet pods when calculating resource utilization for scaling
   * down.
   */
  ignoreDaemonsetsUtilization?: boolean
  /** Detect similar node groups and balance the number of nodes between them. */
  balanceSimilarNodeGroups?: boolean
  /**
   * Pods with priority below cutoff will be expendable. Pods with priority
   * below cutoff will be expendable. They can be killed without any
   * consideration during scale down and they don't cause scale up. Pods with
   * null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff?: number
  /** How long a node should be unneeded before it is eligible for scale down. */
  scaleDownUnneededTime?: string
  /**
   * Node utilization level, defined as sum of requested resources divided by
   * capacity, below which a node can be considered for scale down.
   */
  scaleDownUtilizationThreshold?: number
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination
   * when trying to scale down a node.
   */
  maxGracefulTerminationSec?: number
}

/** Update cluster request. open id connect config. */
export interface UpdateClusterRequestOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing
   * keys. URL of the provider which allows the API server to discover public
   * signing keys. Only URLs which use the `https://` scheme are accepted. This
   * is typically the provider's discovery URL without a path, for example
   * "https://accounts.google.com" or "https://login.salesforce.com". This URL
   * should point to the level below .well-known/openid-configuration.
   */
  issuerUrl?: string
  /** A client id that all tokens must be issued for. */
  clientId?: string
  /**
   * JWT claim to use as the user name. JWT claim to use as the user name. By
   * default `sub`, which is expected to be a unique identifier of the end user.
   * Admins can choose other claims, such as `email` or `name`, depending on
   * their provider. However, claims other than `email` will be prefixed with
   * the issuer URL to prevent naming clashes with other plugins.
   */
  usernameClaim?: string
  /**
   * Prefix prepended to username. Prefix prepended to username claims to
   * prevent clashes with existing names (such as `system:` users). For example,
   * the value `oidc:` will create usernames like `oidc:jane.doe`. If this flag
   * isn't provided and `username_claim` is a value other than `email` the
   * prefix defaults to `( Issuer URL )#` where `( Issuer URL )` is the value of
   * `issuer_url`. The value `-` can be used to disable all prefixing.
   */
  usernamePrefix?: string
  /** JWT claim to use as the user's group. */
  groupsClaim?: string[]
  /**
   * Prefix prepended to group claims. Prefix prepended to group claims to
   * prevent clashes with existing names (such as `system:` groups). For
   * example, the value `oidc:` will create group names like `oidc:engineering`
   * and `oidc:infra`.
   */
  groupsPrefix?: string
  /**
   * Multiple key=value pairs that describes a required claim in the ID token.
   * Multiple key=value pairs that describes a required claim in the ID token.
   * If set, the claims are verified to be present in the ID token with a
   * matching value.
   */
  requiredClaim?: string[]
}

export interface UpdatePoolRequestUpgradePolicy {
  maxUnavailable?: number
  maxSurge?: number
}

/** Version. */
export interface Version {
  /** Name of the Kubernetes version. */
  name: string
  /** Label of the Kubernetes version. */
  label: string
  /** Region in which this version is available. */
  region: Region
  /** Supported Container Network Interface (CNI) plugins for this version. */
  availableCnis: CNI[]
  /** @deprecated Supported Ingress Controllers for this version. */
  availableIngresses?: Ingress[]
  /** Supported container runtimes for this version. */
  availableContainerRuntimes: Runtime[]
  /** Supported feature gates for this version. */
  availableFeatureGates: string[]
  /** Supported admission plugins for this version. */
  availableAdmissionPlugins: string[]
  /** Supported kubelet arguments for this version. */
  availableKubeletArgs: Record<string, string>
}

export type ListClustersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Organization ID on which to filter the returned clusters. */
  organizationId?: string
  /** Project ID on which to filter the returned clusters. */
  projectId?: string
  /** Sort order of the returned clusters. */
  orderBy?: ListClustersRequestOrderBy
  /** Page number for the returned clusters. */
  page?: number
  /** Maximum number of clusters per page. */
  pageSize?: number
  /** Name on which to filter the returned clusters. */
  name?: string
  /** Status on which to filter the returned clusters. */
  status?: ClusterStatus
  /** Type on which to filter the returned clusters. */
  type?: string
}

export type CreateClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /**
   * @deprecated Organization ID in which the cluster will be created.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Project ID in which the cluster will be created.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** Type of the cluster (possible values are kapsule, multicloud). */
  type: string
  /** Name of the cluster. */
  name?: string
  /** Description of the cluster. */
  description: string
  /** Tags associated with the cluster. */
  tags?: string[]
  /** Kubernetes version of the cluster. */
  version: string
  /** Container Network Interface (CNI) plugin that will run in the cluster. */
  cni: CNI
  /** @deprecated Defines if the Kubernetes Dashboard is enabled in the cluster. */
  enableDashboard?: boolean
  /** @deprecated Ingress Controller that will run in the cluster. */
  ingress?: Ingress
  /** Pools to be created along with the cluster. */
  pools?: CreateClusterRequestPoolConfig[]
  /**
   * Autoscaler config for the cluster. This field allows to specify some
   * configuration for the autoscaler, which is an implementation of the
   * cluster-autoscaler
   * (https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/).
   */
  autoscalerConfig?: CreateClusterRequestAutoscalerConfig
  /**
   * Auto upgrade configuration of the cluster. This configuration enables to
   * set a specific 2-hour time window in which the cluster can be automatically
   * updated to the latest patch version in the current minor one.
   */
  autoUpgrade?: CreateClusterRequestAutoUpgrade
  /** List of feature gates to enable. */
  featureGates?: string[]
  /** List of admission plugins to enable. */
  admissionPlugins?: string[]
  /**
   * OpenID Connect configuration of the cluster. This configuration enables to
   * update the OpenID Connect configuration of the Kubernetes API server.
   */
  openIdConnectConfig?: CreateClusterRequestOpenIDConnectConfig
  /**
   * Additional Subject Alternative Names for the Kubernetes API server
   * certificate.
   */
  apiserverCertSans?: string[]
  /**
   * Private network ID for internal cluster communication (cannot be changed
   * later).
   */
  privateNetworkId?: string
}

export type GetClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** The ID of the requested cluster. */
  clusterId: string
}

export type UpdateClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the cluster to update. */
  clusterId: string
  /** New external name of the cluster. */
  name?: string
  /** New description of the cluster. */
  description?: string
  /** New tags associated with the cluster. */
  tags?: string[]
  /**
   * New autoscaler config for the cluster. Object defining the configuration
   * for the autoscaler, which is an implementation of the
   * [cluster-autoscaler](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/).
   */
  autoscalerConfig?: UpdateClusterRequestAutoscalerConfig
  /** @deprecated New value of the Kubernetes Dashboard enablement. */
  enableDashboard?: boolean
  /** @deprecated New Ingress Controller for the cluster. */
  ingress?: Ingress
  /**
   * New auto upgrade configuration of the cluster. New auto upgrade
   * configuration of the cluster. Note that all fields need to be set.
   */
  autoUpgrade?: UpdateClusterRequestAutoUpgrade
  /** List of feature gates to enable. */
  featureGates?: string[]
  /** List of admission plugins to enable. */
  admissionPlugins?: string[]
  /**
   * OpenID Connect configuration of the cluster. This configuration enables to
   * update the OpenID Connect configuration of the Kubernetes API server.
   */
  openIdConnectConfig?: UpdateClusterRequestOpenIDConnectConfig
  /**
   * Additional Subject Alternative Names for the Kubernetes API server
   * certificate.
   */
  apiserverCertSans?: string[]
}

export type DeleteClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the cluster to delete. */
  clusterId: string
  /**
   * Set true if you want to delete all volumes (including retain volume type)
   * and loadbalancers whose name start with cluster ID.
   */
  withAdditionalResources: boolean
}

export type UpgradeClusterRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the cluster to upgrade. */
  clusterId: string
  /**
   * New Kubernetes version of the cluster. New Kubernetes version of the
   * cluster. Note that the version shoud either be a higher patch version of
   * the same minor version or the direct minor version after the current one.
   */
  version: string
  /**
   * Enablement of the pools upgrade. This field also trigger pools upgrade once
   * the control plane is upgraded.
   */
  upgradePools: boolean
}

export type SetClusterTypeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the cluster to migrate from one type to another. */
  clusterId: string
  /**
   * Type of the cluster. Note that some migrations are not possible (please
   * refer to product documentation).
   */
  type: string
}

export type ListClusterAvailableVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /**
   * ID of the cluster which the available Kuberentes versions will be listed
   * from.
   */
  clusterId: string
}

export type ResetClusterAdminTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the cluster on which the admin token will be renewed. */
  clusterId: string
}

export type ListPoolsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the cluster from which the pools will be listed from. */
  clusterId: string
  /** Sort order of the returned pools. */
  orderBy?: ListPoolsRequestOrderBy
  /** Page number for the returned pools. */
  page?: number
  /** Maximum number of pools per page. */
  pageSize?: number
  /** Name on which to filter the returned pools. */
  name?: string
  /** Status on which to filter the returned pools. */
  status?: PoolStatus
}

export type CreatePoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the cluster in which the pool will be created. */
  clusterId: string
  /** Name of the pool. */
  name?: string
  /**
   * Node type is the type of Scaleway Instance wanted for the pool. Node type
   * is the type of Scaleway Instance wanted for the pool. Nodes with
   * insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST).
   * 'external' is a special node type used to provision instances from other
   * cloud providers.
   */
  nodeType: string
  /** Placement group ID in which all the nodes of the pool will be created. */
  placementGroupId?: string
  /** Defines whether the autoscaling feature is enabled for the pool. */
  autoscaling: boolean
  /** Size (number of nodes) of the pool. */
  size: number
  /**
   * Minimum size of the pool. Defines the minimum size of the pool. Note that
   * this field will be used only when autoscaling is enabled.
   */
  minSize?: number
  /**
   * Maximum size of the pool. Defines the maximum size of the pool. Note that
   * this field will be used only when autoscaling is enabled.
   */
  maxSize?: number
  /**
   * Container runtime for the nodes of the pool. Customization of the container
   * runtime is available for each pool. Note that `docker` is deprecated since
   * 1.20 and will be removed in 1.24.
   */
  containerRuntime?: Runtime
  /** Defines whether the autohealing feature is enabled for the pool. */
  autohealing: boolean
  /** Tags associated with the pool. */
  tags?: string[]
  /**
   * Kubelet arguments to be used by this pool. Note that this feature is to be
   * considered as experimental.
   */
  kubeletArgs?: Record<string, string>
  /** Pool upgrade policy. */
  upgradePolicy?: CreatePoolRequestUpgradePolicy
  /** Zone in which the pool's nodes will be spawned. */
  zone?: Zone
  /**
   * System volume disk type. Defines the system volume disk type, we provide
   * two different types of volume (`volume_type`): `l_ssd` is a local block
   * storage: your system is stored locally on the hypervisor of your node.
   * `b_ssd` is a remote block storage: your system is stored on a centralised
   * and resilient cluster.
   */
  rootVolumeType?: PoolVolumeType
  /** System volume disk size. */
  rootVolumeSize?: number
}

export type GetPoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the requested pool. */
  poolId: string
}

export type UpgradePoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the pool to upgrade. */
  poolId: string
  /** New Kubernetes version for the pool. */
  version: string
}

export type UpdatePoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the pool to update. */
  poolId: string
  /** New value for the enablement of autoscaling for the pool. */
  autoscaling?: boolean
  /** New size for the pool. */
  size?: number
  /** New minimun size for the pool. */
  minSize?: number
  /** New maximum size for the pool. */
  maxSize?: number
  /** New value for the enablement of autohealing for the pool. */
  autohealing?: boolean
  /** New tags associated with the pool. */
  tags?: string[]
  /**
   * New Kubelet arguments to be used by this pool. Note that this feature is to
   * be considered as experimental.
   */
  kubeletArgs?: Record<string, string>
  /** Upgrade policy for the pool. */
  upgradePolicy?: UpdatePoolRequestUpgradePolicy
}

export type DeletePoolRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the pool to delete. */
  poolId: string
}

export type CreateExternalNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  poolId: string
}

export type ListNodesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Cluster ID from which the nodes will be listed from. */
  clusterId: string
  /** Pool ID on which to filter the returned nodes. */
  poolId?: string
  /** Sort order of the returned nodes. */
  orderBy?: ListNodesRequestOrderBy
  /** Page number for the returned nodes. */
  page?: number
  /** Maximum number of nodes per page. */
  pageSize?: number
  /** Name on which to filter the returned nodes. */
  name?: string
  /** Status on which to filter the returned nodes. */
  status?: NodeStatus
}

export type GetNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the requested node. */
  nodeId: string
}

export type ReplaceNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the node to replace. */
  nodeId: string
}

export type RebootNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the node to reboot. */
  nodeId: string
}

export type DeleteNodeRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the node to replace. */
  nodeId: string
  /** Skip draining node from its workload. */
  skipDrain: boolean
  /** Add a new node after the deletion of this node. */
  replace: boolean
}

export type ListVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
}

export type GetVersionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Requested version name. */
  versionName: string
}
