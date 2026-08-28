// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ClusterStatus,
  ListClustersRequestOrderBy,
  ListUsersRequestOrderBy,
  NodeTypeStock,
  VolumeType,
} from './types.gen.js'


/** Lists all values of the enum {@link ClusterStatus}. */
export const CLUSTER_STATUSES: ClusterStatus[] = [
  'unknown_status',
  'ready',
  'creating',
  'configuring',
  'deleting',
  'error',
  'locked',
  'stopped',
  'upgrading',
]

/** Lists all values of the enum {@link ListClustersRequestOrderBy}. */
export const LIST_CLUSTERS_REQUEST_ORDER_BIES: ListClustersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'status_asc',
  'status_desc',
]

/** Lists all values of the enum {@link ListUsersRequestOrderBy}. */
export const LIST_USERS_REQUEST_ORDER_BIES: ListUsersRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link NodeTypeStock}. */
export const NODE_TYPE_STOCKS: NodeTypeStock[] = [
  'unknown_stock',
  'low_stock',
  'out_of_stock',
  'available',
]

/** Lists all values of the enum {@link VolumeType}. */
export const VOLUME_TYPES: VolumeType[] = [
  'unknown_type',
  'sbs_5k',
  'sbs_15k',
]

