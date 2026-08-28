// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  AutoscalerEstimator,
  AutoscalerExpander,
  CNI,
  ClusterStatus,
  ClusterTypeAvailability,
  ClusterTypeResiliency,
  CoreV1TaintEffect,
  ListClustersRequestOrderBy,
  ListNodesRequestOrderBy,
  ListPoolsRequestOrderBy,
  MaintenanceWindowDayOfTheWeek,
  NodeStatus,
  PoolStatus,
  PoolVolumeType,
  Runtime,
} from './types.gen.js'


/** Lists all values of the enum {@link AutoscalerEstimator}. */
export const AUTOSCALER_ESTIMATORS: AutoscalerEstimator[] = [
  'unknown_estimator',
  'binpacking',
]

/** Lists all values of the enum {@link AutoscalerExpander}. */
export const AUTOSCALER_EXPANDERS: AutoscalerExpander[] = [
  'unknown_expander',
  'random',
  'most_pods',
  'least_waste',
  'priority',
  'price',
]

/** Lists all values of the enum {@link CNI}. */
export const CNIS: CNI[] = [
  'unknown_cni',
  'cilium',
  'calico',
  'kilo',
  'none',
  'cilium_native',
]

/** Lists all values of the enum {@link ClusterStatus}. */
export const CLUSTER_STATUSES: ClusterStatus[] = [
  'unknown',
  'creating',
  'ready',
  'deleting',
  'deleted',
  'updating',
  'locked',
  'pool_required',
]

/** Lists all values of the enum {@link ClusterTypeAvailability}. */
export const CLUSTER_TYPE_AVAILABILITIES: ClusterTypeAvailability[] = [
  'available',
  'scarce',
  'shortage',
]

/** Lists all values of the enum {@link ClusterTypeResiliency}. */
export const CLUSTER_TYPE_RESILIENCIES: ClusterTypeResiliency[] = [
  'unknown_resiliency',
  'standard',
  'high_availability',
]

/** Lists all values of the enum {@link CoreV1TaintEffect}. */
export const CORE_V1_TAINT_EFFECTS: CoreV1TaintEffect[] = [
  'NoSchedule',
  'PreferNoSchedule',
  'NoExecute',
]

/** Lists all values of the enum {@link ListClustersRequestOrderBy}. */
export const LIST_CLUSTERS_REQUEST_ORDER_BIES: ListClustersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
  'version_asc',
  'version_desc',
]

/** Lists all values of the enum {@link ListNodesRequestOrderBy}. */
export const LIST_NODES_REQUEST_ORDER_BIES: ListNodesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
  'version_asc',
  'version_desc',
]

/** Lists all values of the enum {@link ListPoolsRequestOrderBy}. */
export const LIST_POOLS_REQUEST_ORDER_BIES: ListPoolsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
  'version_asc',
  'version_desc',
]

/** Lists all values of the enum {@link MaintenanceWindowDayOfTheWeek}. */
export const MAINTENANCE_WINDOW_DAY_OF_THE_WEEKS: MaintenanceWindowDayOfTheWeek[] = [
  'any',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

/** Lists all values of the enum {@link NodeStatus}. */
export const NODE_STATUSES: NodeStatus[] = [
  'unknown',
  'creating',
  'not_ready',
  'ready',
  'deleting',
  'deleted',
  'locked',
  'rebooting',
  'creation_error',
  'upgrading',
  'starting',
  'registering',
]

/** Lists all values of the enum {@link PoolStatus}. */
export const POOL_STATUSES: PoolStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'deleted',
  'scaling',
  'warning',
  'locked',
  'upgrading',
]

/** Lists all values of the enum {@link PoolVolumeType}. */
export const POOL_VOLUME_TYPES: PoolVolumeType[] = [
  'default_volume_type',
  'l_ssd',
  'b_ssd',
  'sbs_5k',
  'sbs_15k',
]

/** Lists all values of the enum {@link Runtime}. */
export const RUNTIMES: Runtime[] = [
  'unknown_runtime',
  'containerd',
]

