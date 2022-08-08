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

/** Cluster */
export interface Cluster {
  /** The ID of the cluster */
  id: string
  /** The type of the cluster */
  type: string
  /** The name of the cluster */
  name: string
  /** The status of the cluster */
  status: ClusterStatus
  /** The Kubernetes version of the cluster */
  version: string
  /** The region in which the cluster is */
  region: Region
  /** The ID of the organization owning the cluster */
  organizationId: string
  /** The ID of the project owning the cluster */
  projectId: string
  /** The tags associated with the cluster */
  tags: Array<string>
  /** The Container Network Interface (CNI) plugin running in the cluster */
  cni: CNI
  /** The description of the cluster */
  description: string
  /** The Kubernetes API server URL of the cluster */
  clusterUrl: string
  /** The DNS wildcard resovling all the ready nodes of the cluster */
  dnsWildcard: string
  /** The date at which the cluster was created */
  createdAt?: Date
  /** The date at which the cluster was last updated */
  updatedAt?: Date
  /** The autoscaler config for the cluster */
  autoscalerConfig?: ClusterAutoscalerConfig
  /** @deprecated The enablement of the Kubernetes Dashboard in the cluster */
  dashboardEnabled?: boolean
  /** @deprecated The ingress controller used in the cluster */
  ingress?: Ingress
  /** The auo upgrade configuration of the cluster */
  autoUpgrade?: ClusterAutoUpgrade
  /** True if a new Kubernetes version is available */
  upgradeAvailable: boolean
  /** List of enabled feature gates */
  featureGates: Array<string>
  /** List of enabled admission plugins */
  admissionPlugins: Array<string>
  /**
   * This feature is in ALPHA state, it may be deleted or modified. This
   * configuration is the [OpenID Connect
   * configuration](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens)
   * of the Kubernetes API server.
   */
  openIdConnectConfig?: ClusterOpenIDConnectConfig
  /** Additional Subject Alternative Names for the Kubernetes API server certificate */
  apiserverCertSans: Array<string>
}

/** Cluster. auto upgrade */
export interface ClusterAutoUpgrade {
  /** Whether or not auto upgrade is enabled for the cluster */
  enabled: boolean
  /** The maintenance window of the cluster auto upgrades */
  maintenanceWindow?: MaintenanceWindow
}

/** Cluster. autoscaler config */
export interface ClusterAutoscalerConfig {
  /** Disable the cluster autoscaler */
  scaleDownDisabled: boolean
  /** How long after scale up that scale down evaluation resumes */
  scaleDownDelayAfterAdd: string
  /** Type of resource estimator to be used in scale up */
  estimator: AutoscalerEstimator
  /** Type of node group expander to be used in scale up */
  expander: AutoscalerExpander
  /** Ignore DaemonSet pods when calculating resource utilization for scaling down */
  ignoreDaemonsetsUtilization: boolean
  /** Detect similar node groups and balance the number of nodes between them */
  balanceSimilarNodeGroups: boolean
  /**
   * Pods with priority below cutoff will be expendable. They can be killed
   * without any consideration during scale down and they don't cause scale up.
   * Pods with null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff: number
  /** How long a node should be unneeded before it is eligible for scale down */
  scaleDownUnneededTime: string
  /**
   * Node utilization level, defined as sum of requested resources divided by
   * capacity, below which a node can be considered for scale down
   */
  scaleDownUtilizationThreshold: number
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination
   * when trying to scale down a node
   */
  maxGracefulTerminationSec: number
}

/** Cluster. open id connect config */
export interface ClusterOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing
   * keys. Only URLs which use the `https://` scheme are accepted. This is
   * typically the provider's discovery URL without a path, for example
   * "https://accounts.google.com" or "https://login.salesforce.com". This URL
   * should point to the level below .well-known/openid-configuration.
   */
  issuerUrl: string
  /** A client id that all tokens must be issued for */
  clientId: string
  /**
   * JWT claim to use as the user name. By default `sub`, which is expected to
   * be a unique identifier of the end user. Admins can choose other claims,
   * such as `email` or `name`, depending on their provider. However, claims
   * other than `email` will be prefixed with the issuer URL to prevent naming
   * clashes with other plugins.
   */
  usernameClaim: string
  /**
   * Prefix prepended to username claims to prevent clashes with existing names
   * (such as `system:` users). For example, the value `oidc:` will create
   * usernames like `oidc:jane.doe`. If this flag isn't provided and
   * `username_claim` is a value other than `email` the prefix defaults to `(
   * Issuer URL )#` where `( Issuer URL )` is the value of `issuer_url`. The
   * value `-` can be used to disable all prefixing.
   */
  usernamePrefix: string
  /** JWT claim to use as the user's group */
  groupsClaim: Array<string>
  /**
   * Prefix prepended to group claims to prevent clashes with existing names
   * (such as `system:` groups). For example, the value `oidc:` will create
   * group names like `oidc:engineering` and `oidc:infra`.
   */
  groupsPrefix: string
  /**
   * Multiple key=value pairs that describes a required claim in the ID Token.
   * If set, the claims are verified to be present in the ID Token with a matching value.
   */
  requiredClaim: Array<string>
}

/** Create cluster request. auto upgrade */
export interface CreateClusterRequestAutoUpgrade {
  /** Whether or not auto upgrade is enabled for the cluster */
  enable: boolean
  /** The maintenance window of the cluster auto upgrades */
  maintenanceWindow?: MaintenanceWindow
}

/** Create cluster request. autoscaler config */
export interface CreateClusterRequestAutoscalerConfig {
  /** Disable the cluster autoscaler */
  scaleDownDisabled?: boolean
  /** How long after scale up that scale down evaluation resumes */
  scaleDownDelayAfterAdd?: string
  /** Type of resource estimator to be used in scale up */
  estimator: AutoscalerEstimator
  /** Type of node group expander to be used in scale up */
  expander: AutoscalerExpander
  /** Ignore DaemonSet pods when calculating resource utilization for scaling down */
  ignoreDaemonsetsUtilization?: boolean
  /** Detect similar node groups and balance the number of nodes between them */
  balanceSimilarNodeGroups?: boolean
  /**
   * Pods with priority below cutoff will be expendable. They can be killed
   * without any consideration during scale down and they don't cause scale up.
   * Pods with null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff?: number
  /** How long a node should be unneeded before it is eligible for scale down */
  scaleDownUnneededTime?: string
  /**
   * Node utilization level, defined as sum of requested resources divided by
   * capacity, below which a node can be considered for scale down
   */
  scaleDownUtilizationThreshold?: number
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination
   * when trying to scale down a node
   */
  maxGracefulTerminationSec?: number
}

/** Create cluster request. open id connect config */
export interface CreateClusterRequestOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing
   * keys. Only URLs which use the `https://` scheme are accepted. This is
   * typically the provider's discovery URL without a path, for example
   * "https://accounts.google.com" or "https://login.salesforce.com". This URL
   * should point to the level below .well-known/openid-configuration.
   */
  issuerUrl: string
  /** A client id that all tokens must be issued for */
  clientId: string
  /**
   * JWT claim to use as the user name. By default `sub`, which is expected to
   * be a unique identifier of the end user. Admins can choose other claims,
   * such as `email` or `name`, depending on their provider. However, claims
   * other than `email` will be prefixed with the issuer URL to prevent naming
   * clashes with other plugins.
   */
  usernameClaim?: string
  /**
   * Prefix prepended to username claims to prevent clashes with existing names
   * (such as `system:` users). For example, the value `oidc:` will create
   * usernames like `oidc:jane.doe`. If this flag isn't provided and
   * `username_claim` is a value other than `email` the prefix defaults to `(
   * Issuer URL )#` where `( Issuer URL )` is the value of `issuer_url`. The
   * value `-` can be used to disable all prefixing.
   */
  usernamePrefix?: string
  /** JWT claim to use as the user's group */
  groupsClaim?: Array<string>
  /**
   * Prefix prepended to group claims to prevent clashes with existing names
   * (such as `system:` groups). For example, the value `oidc:` will create
   * group names like `oidc:engineering` and `oidc:infra`.
   */
  groupsPrefix?: string
  /**
   * Multiple key=value pairs that describes a required claim in the ID Token.
   * If set, the claims are verified to be present in the ID Token with a matching value.
   */
  requiredClaim?: Array<string>
}

/** Create cluster request. pool config */
export interface CreateClusterRequestPoolConfig {
  /** The name of the pool */
  name: string
  /**
   * The node type is the type of Scaleway Instance wanted for the pool, nodes
   * with insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST)
   */
  nodeType: string
  /** The placement group ID in which all the nodes of the pool will be created */
  placementGroupId?: string
  /** The enablement of the autoscaling feature for the pool */
  autoscaling: boolean
  /** The size (number of nodes) of the pool */
  size: number
  /**
   * The minimun size of the pool. Note that this fields will be used only when
   * autoscaling is enabled.
   */
  minSize?: number
  /**
   * The maximum size of the pool. Note that this fields will be used only when
   * autoscaling is enabled.
   */
  maxSize?: number
  /**
   * The customization of the container runtime is available for each pool. Note
   * that `docker` is deprecated since 1.20 and will be removed in 1.24.
   */
  containerRuntime: Runtime
  /** The enablement of the autohealing feature for the pool */
  autohealing: boolean
  /** The tags associated with the pool */
  tags: Array<string>
  /**
   * The Kubelet arguments to be used by this pool. Note that this feature is to
   * be considered as experimental
   */
  kubeletArgs: Record<string, string>
  /** The Pool upgrade policy */
  upgradePolicy?: CreateClusterRequestPoolConfigUpgradePolicy
  /** The Zone in which the Pool's node will be spawn in */
  zone: Zone
  /**
   * The system volume disk type, we provide two different types of volume
   * (`volume_type`):
   *
   * - `l_ssd` is a local block storage: your system is stored locally on the
   *   hypervisor of your node.
   * - `b_ssd` is a remote block storage: your system is stored on a centralised
   *   and resilient cluster.
   */
  rootVolumeType: PoolVolumeType
  /** The system volume disk size */
  rootVolumeSize?: number
}

/** Create cluster request. pool config. upgrade policy */
export interface CreateClusterRequestPoolConfigUpgradePolicy {
  /** The maximum number of nodes that can be not ready at the same time */
  maxUnavailable?: number
  /** The maximum number of nodes to be created during the upgrade */
  maxSurge?: number
}

export interface CreatePoolRequestUpgradePolicy {
  maxUnavailable?: number
  maxSurge?: number
}

/** List cluster available versions response */
export interface ListClusterAvailableVersionsResponse {
  /** The available Kubernetes version for the cluster */
  versions: Array<Version>
}

/** List clusters response */
export interface ListClustersResponse {
  /** The total number of clusters */
  totalCount: number
  /** The paginated returned clusters */
  clusters: Array<Cluster>
}

/** List nodes response */
export interface ListNodesResponse {
  /** The total number of nodes */
  totalCount: number
  /** The paginated returned nodes */
  nodes: Array<Node>
}

/** List pools response */
export interface ListPoolsResponse {
  /** The total number of pools that exists for the cluster */
  totalCount: number
  /** The paginated returned pools */
  pools: Array<Pool>
}

/** List versions response */
export interface ListVersionsResponse {
  /** The available Kubernetes versions */
  versions: Array<Version>
}

/** Maintenance window */
export interface MaintenanceWindow {
  /** The start hour of the 2-hour maintenance window */
  startHour: number
  /** The day of the week for the maintenance window */
  day: MaintenanceWindowDayOfTheWeek
}

/** Node */
export interface Node {
  /** The ID of the node */
  id: string
  /** The pool ID of the node */
  poolId: string
  /** The cluster ID of the node */
  clusterId: string
  /**
   * It is prefixed by instance type and location information (see
   * https://pkg.go.dev/k8s.io/api/core/v1#NodeSpec.ProviderID).
   */
  providerId: string
  /** The cluster region of the node */
  region: Region
  /** The name of the node */
  name: string
  /** The public IPv4 address of the node */
  publicIpV4?: string
  /** The public IPv6 address of the node */
  publicIpV6?: string
  /**
   * @deprecated These conditions contains the Node Problem Detector conditions,
   *   as well as some in house conditions.
   */
  conditions?: Record<string, string>
  /** The status of the node */
  status: NodeStatus
  /** Details of the error, if any occured when managing the node */
  errorMessage?: string
  /** The date at which the node was created */
  createdAt?: Date
  /** The date at which the node was last updated */
  updatedAt?: Date
}

/** Pool */
export interface Pool {
  /** The ID of the pool */
  id: string
  /** The cluster ID of the pool */
  clusterId: string
  /** The date at which the pool was created */
  createdAt?: Date
  /** The date at which the pool was last updated */
  updatedAt?: Date
  /** The name of the pool */
  name: string
  /** The status of the pool */
  status: PoolStatus
  /** The version of the pool */
  version: string
  /**
   * The node type is the type of Scaleway Instance wanted for the pool, nodes
   * with insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST)
   */
  nodeType: string
  /** The enablement of the autoscaling feature for the pool */
  autoscaling: boolean
  /** The size (number of nodes) of the pool */
  size: number
  /**
   * The minimun size of the pool. Note that this fields will be used only when
   * autoscaling is enabled.
   */
  minSize: number
  /**
   * The maximum size of the pool. Note that this fields will be used only when
   * autoscaling is enabled.
   */
  maxSize: number
  /**
   * The customization of the container runtime is available for each pool. Note
   * that `docker` is deprecated since 1.20 and will be removed in 1.24.
   */
  containerRuntime: Runtime
  /** The enablement of the autohealing feature for the pool */
  autohealing: boolean
  /** The tags associated with the pool */
  tags: Array<string>
  /** The placement group ID in which all the nodes of the pool will be created */
  placementGroupId?: string
  /**
   * The Kubelet arguments to be used by this pool. Note that this feature is to
   * be considered as experimental
   */
  kubeletArgs: Record<string, string>
  /** The Pool upgrade policy */
  upgradePolicy?: PoolUpgradePolicy
  /** The Zone in which the Pool's node will be spawn in */
  zone: Zone
  /**
   * The system volume disk type, we provide two different types of volume
   * (`volume_type`):
   *
   * - `l_ssd` is a local block storage: your system is stored locally on the
   *   hypervisor of your node.
   * - `b_ssd` is a remote block storage: your system is stored on a centralised
   *   and resilient cluster.
   */
  rootVolumeType: PoolVolumeType
  /** The system volume disk size */
  rootVolumeSize?: number
  /** The cluster region of the pool */
  region: Region
}

export interface PoolUpgradePolicy {
  maxUnavailable: number
  maxSurge: number
}

/** Update cluster request. auto upgrade */
export interface UpdateClusterRequestAutoUpgrade {
  /** Whether or not auto upgrade is enabled for the cluster */
  enable?: boolean
  /** The maintenance window of the cluster auto upgrades */
  maintenanceWindow?: MaintenanceWindow
}

/** Update cluster request. autoscaler config */
export interface UpdateClusterRequestAutoscalerConfig {
  /** Disable the cluster autoscaler */
  scaleDownDisabled?: boolean
  /** How long after scale up that scale down evaluation resumes */
  scaleDownDelayAfterAdd?: string
  /** Type of resource estimator to be used in scale up */
  estimator: AutoscalerEstimator
  /** Type of node group expander to be used in scale up */
  expander: AutoscalerExpander
  /** Ignore DaemonSet pods when calculating resource utilization for scaling down */
  ignoreDaemonsetsUtilization?: boolean
  /** Detect similar node groups and balance the number of nodes between them */
  balanceSimilarNodeGroups?: boolean
  /**
   * Pods with priority below cutoff will be expendable. They can be killed
   * without any consideration during scale down and they don't cause scale up.
   * Pods with null priority (PodPriority disabled) are non expendable.
   */
  expendablePodsPriorityCutoff?: number
  /** How long a node should be unneeded before it is eligible for scale down */
  scaleDownUnneededTime?: string
  /**
   * Node utilization level, defined as sum of requested resources divided by
   * capacity, below which a node can be considered for scale down
   */
  scaleDownUtilizationThreshold?: number
  /**
   * Maximum number of seconds the cluster autoscaler waits for pod termination
   * when trying to scale down a node
   */
  maxGracefulTerminationSec?: number
}

/** Update cluster request. open id connect config */
export interface UpdateClusterRequestOpenIDConnectConfig {
  /**
   * URL of the provider which allows the API server to discover public signing
   * keys. Only URLs which use the `https://` scheme are accepted. This is
   * typically the provider's discovery URL without a path, for example
   * "https://accounts.google.com" or "https://login.salesforce.com". This URL
   * should point to the level below .well-known/openid-configuration.
   */
  issuerUrl?: string
  /** A client id that all tokens must be issued for */
  clientId?: string
  /**
   * JWT claim to use as the user name. By default `sub`, which is expected to
   * be a unique identifier of the end user. Admins can choose other claims,
   * such as `email` or `name`, depending on their provider. However, claims
   * other than `email` will be prefixed with the issuer URL to prevent naming
   * clashes with other plugins.
   */
  usernameClaim?: string
  /**
   * Prefix prepended to username claims to prevent clashes with existing names
   * (such as `system:` users). For example, the value `oidc:` will create
   * usernames like `oidc:jane.doe`. If this flag isn't provided and
   * `username_claim` is a value other than `email` the prefix defaults to `(
   * Issuer URL )#` where `( Issuer URL )` is the value of `issuer_url`. The
   * value `-` can be used to disable all prefixing.
   */
  usernamePrefix?: string
  /** JWT claim to use as the user's group */
  groupsClaim?: Array<string>
  /**
   * Prefix prepended to group claims to prevent clashes with existing names
   * (such as `system:` groups). For example, the value `oidc:` will create
   * group names like `oidc:engineering` and `oidc:infra`.
   */
  groupsPrefix?: string
  /**
   * Multiple key=value pairs that describes a required claim in the ID Token.
   * If set, the claims are verified to be present in the ID Token with a matching value.
   */
  requiredClaim?: Array<string>
}

export interface UpdatePoolRequestUpgradePolicy {
  maxUnavailable?: number
  maxSurge?: number
}

/** Version */
export interface Version {
  /** The name of the Kubernetes version */
  name: string
  /** The label of the Kubernetes version */
  label: string
  /** The region in which this version is available */
  region: Region
  /** The supported Container Network Interface (CNI) plugins for this version */
  availableCnis: Array<CNI>
  /** The supported Ingress Controllers for this version */
  availableIngresses: Array<Ingress>
  /** The supported container runtimes for this version */
  availableContainerRuntimes: Array<Runtime>
  /** The supported feature gates for this version */
  availableFeatureGates: Array<string>
  /** The supported admission plugins for this version */
  availableAdmissionPlugins: Array<string>
  /** The supported kubelet arguments for this version */
  availableKubeletArgs: Record<string, string>
}

export type ListClustersRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The organization ID on which to filter the returned clusters */
  organizationId?: string
  /** The project ID on which to filter the returned clusters */
  projectId?: string
  /** The sort order of the returned clusters */
  orderBy?: ListClustersRequestOrderBy
  /** The page number for the returned clusters */
  page?: number
  /** The maximum number of clusters per page */
  pageSize?: number
  /** The name on which to filter the returned clusters */
  name?: string
  /** The status on which to filter the returned clusters */
  status?: ClusterStatus
  /** The type on which to filter the returned clusters */
  type?: string
}

export type CreateClusterRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /**
   * @deprecated The organization ID where the cluster will be created.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * The project ID where the cluster will be created.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** The type of the cluster */
  type: string
  /** The name of the cluster */
  name?: string
  /** The description of the cluster */
  description: string
  /** The tags associated with the cluster */
  tags?: Array<string>
  /** The Kubernetes version of the cluster */
  version: string
  /** The Container Network Interface (CNI) plugin that will run in the cluster */
  cni: CNI
  /** @deprecated The enablement of the Kubernetes Dashboard in the cluster */
  enableDashboard?: boolean
  /** @deprecated The Ingress Controller that will run in the cluster */
  ingress?: Ingress
  /** The pools to be created along with the cluster */
  pools?: Array<CreateClusterRequestPoolConfig>
  /**
   * This field allows to specify some configuration for the autoscaler, which
   * is an implementation of the
   * [cluster-autoscaler](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/).
   */
  autoscalerConfig?: CreateClusterRequestAutoscalerConfig
  /**
   * This configuration enables to set a specific 2-hour time window in which
   * the cluster can be automatically updated to the latest patch version in the
   * current minor one.
   */
  autoUpgrade?: CreateClusterRequestAutoUpgrade
  /** List of feature gates to enable */
  featureGates?: Array<string>
  /** List of admission plugins to enable */
  admissionPlugins?: Array<string>
  /**
   * This feature is in ALPHA state, it may be deleted or modified. This
   * configuration enables to set the [OpenID Connect
   * configuration](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens)
   * of the Kubernetes API server.
   */
  openIdConnectConfig?: CreateClusterRequestOpenIDConnectConfig
  /** Additional Subject Alternative Names for the Kubernetes API server certificate */
  apiserverCertSans?: Array<string>
}

export type GetClusterRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the requested cluster */
  clusterId: string
}

export type UpdateClusterRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the cluster to update */
  clusterId: string
  /**
   * This field allows to update the external name of the cluster. The internal
   * name (used for instance in hostname) won't change.
   */
  name?: string
  /** The new description of the cluster */
  description?: string
  /** The new tags associated with the cluster */
  tags?: Array<string>
  /**
   * This field allows to update some configuration for the autoscaler, which is
   * an implementation of the
   * [cluster-autoscaler](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/).
   */
  autoscalerConfig?: UpdateClusterRequestAutoscalerConfig
  /** @deprecated The new value of the Kubernetes Dashboard enablement */
  enableDashboard?: boolean
  /** @deprecated The new Ingress Controller for the cluster */
  ingress?: Ingress
  /**
   * The new auto upgrade configuration of the cluster. Note that all fields
   * need to be set.
   */
  autoUpgrade?: UpdateClusterRequestAutoUpgrade
  /** List of feature gates to enable */
  featureGates?: Array<string>
  /** List of admission plugins to enable */
  admissionPlugins?: Array<string>
  /**
   * This feature is in ALPHA state, it may be deleted or modified. This
   * configuration enables to update the [OpenID Connect
   * configuration](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens)
   * of the Kubernetes API server.
   */
  openIdConnectConfig?: UpdateClusterRequestOpenIDConnectConfig
  /** Additional Subject Alternative Names for the Kubernetes API server certificate */
  apiserverCertSans?: Array<string>
}

export type DeleteClusterRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the cluster to delete */
  clusterId: string
  /**
   * Set true if you want to delete all volumes (including retain volume type)
   * and loadbalancers whose name start with cluster ID
   */
  withAdditionalResources: boolean
}

export type UpgradeClusterRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the cluster to upgrade */
  clusterId: string
  /**
   * The new Kubernetes version of the cluster. Note that the version shoud
   * either be a higher patch version of the same minor version or the direct
   * minor version after the current one.
   */
  version: string
  /** This field makes the upgrade upgrades the pool once the Kubernetes master in upgrade. */
  upgradePools: boolean
}

export type ListClusterAvailableVersionsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the cluster which the available Kuberentes versions will be listed from */
  clusterId: string
}

export type ResetClusterAdminTokenRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the cluster of which the admin token will be renewed */
  clusterId: string
}

export type ListPoolsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the cluster from which the pools will be listed from */
  clusterId: string
  /** The sort order of the returned pools */
  orderBy?: ListPoolsRequestOrderBy
  /** The page number for the returned pools */
  page?: number
  /** The maximum number of pools per page */
  pageSize?: number
  /** The name on which to filter the returned pools */
  name?: string
  /** The status on which to filter the returned pools */
  status?: PoolStatus
}

export type CreatePoolRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the cluster in which the pool will be created */
  clusterId: string
  /** The name of the pool */
  name?: string
  /**
   * The node type is the type of Scaleway Instance wanted for the pool, nodes
   * with insufficient memory are not eligible (DEV1-S, PLAY2-PICO, STARDUST)
   */
  nodeType: string
  /** The placement group ID in which all the nodes of the pool will be created */
  placementGroupId?: string
  /** The enablement of the autoscaling feature for the pool */
  autoscaling: boolean
  /** The size (number of nodes) of the pool */
  size: number
  /**
   * The minimun size of the pool. Note that this fields will be used only when
   * autoscaling is enabled.
   */
  minSize?: number
  /**
   * The maximum size of the pool. Note that this fields will be used only when
   * autoscaling is enabled.
   */
  maxSize?: number
  /**
   * The customization of the container runtime is available for each pool. Note
   * that `docker` is deprecated since 1.20 and will be removed in 1.24.
   */
  containerRuntime: Runtime
  /** The enablement of the autohealing feature for the pool */
  autohealing: boolean
  /** The tags associated with the pool */
  tags?: Array<string>
  /**
   * The Kubelet arguments to be used by this pool. Note that this feature is to
   * be considered as experimental
   */
  kubeletArgs?: Record<string, string>
  /** The Pool upgrade policy */
  upgradePolicy?: CreatePoolRequestUpgradePolicy
  /** The Zone in which the Pool's node will be spawn in */
  zone?: Zone
  /**
   * The system volume disk type, we provide two different types of volume
   * (`volume_type`):
   *
   * - `l_ssd` is a local block storage: your system is stored locally on the
   *   hypervisor of your node.
   * - `b_ssd` is a remote block storage: your system is stored on a centralised
   *   and resilient cluster.
   */
  rootVolumeType: PoolVolumeType
  /** The system volume disk size */
  rootVolumeSize?: number
}

export type GetPoolRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the requested pool */
  poolId: string
}

export type UpgradePoolRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the pool to upgrade */
  poolId: string
  /** The new Kubernetes version for the pool */
  version: string
}

export type UpdatePoolRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the pool to update */
  poolId: string
  /** The new value for the enablement of autoscaling for the pool */
  autoscaling?: boolean
  /** The new size for the pool */
  size?: number
  /** The new minimun size for the pool */
  minSize?: number
  /** The new maximum size for the pool */
  maxSize?: number
  /** The new value for the enablement of autohealing for the pool */
  autohealing?: boolean
  /** The new tags associated with the pool */
  tags?: Array<string>
  /**
   * The new Kubelet arguments to be used by this pool. Note that this feature
   * is to be considered as experimental
   */
  kubeletArgs?: Record<string, string>
  /** The Pool upgrade policy */
  upgradePolicy?: UpdatePoolRequestUpgradePolicy
}

export type DeletePoolRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the pool to delete */
  poolId: string
}

export type ListNodesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The cluster ID from which the nodes will be listed from */
  clusterId: string
  /** The pool ID on which to filter the returned nodes */
  poolId?: string
  /** The sort order of the returned nodes */
  orderBy?: ListNodesRequestOrderBy
  /** The page number for the returned nodes */
  page?: number
  /** The maximum number of nodes per page */
  pageSize?: number
  /** The name on which to filter the returned nodes */
  name?: string
  /** The status on which to filter the returned nodes */
  status?: NodeStatus
}

export type GetNodeRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the requested node */
  nodeId: string
}

export type ReplaceNodeRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the node to replace */
  nodeId: string
}

export type RebootNodeRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the node to reboot */
  nodeId: string
}

export type DeleteNodeRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The ID of the node to replace */
  nodeId: string
  /** Skip draining node from its workload */
  skipDrain: boolean
  /** Add a new node after the deletion of this node */
  replace: boolean
}

export type ListVersionsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
}

export type GetVersionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The requested version name */
  versionName: string
}
