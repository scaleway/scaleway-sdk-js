// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DeploymentStatus,
  ListDeploymentsRequestOrderBy,
  ListNodeTypesRequestOrderBy,
  ListUsersRequestOrderBy,
  ListVersionsRequestOrderBy,
  NodeTypeStockStatus,
  VolumeType,
} from './types.gen.js'


/** Lists all values of the enum {@link DeploymentStatus}. */
export const DEPLOYMENT_STATUSES: DeploymentStatus[] = [
  'unknown_status',
  'ready',
  'creating',
  'initializing',
  'upgrading',
  'deleting',
  'error',
  'locked',
  'locking',
  'unlocking',
]

/** Lists all values of the enum {@link ListDeploymentsRequestOrderBy}. */
export const LIST_DEPLOYMENTS_REQUEST_ORDER_BIES: ListDeploymentsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListNodeTypesRequestOrderBy}. */
export const LIST_NODE_TYPES_REQUEST_ORDER_BIES: ListNodeTypesRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'vcpus_asc',
  'vcpus_desc',
  'memory_asc',
  'memory_desc',
]

/** Lists all values of the enum {@link ListUsersRequestOrderBy}. */
export const LIST_USERS_REQUEST_ORDER_BIES: ListUsersRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListVersionsRequestOrderBy}. */
export const LIST_VERSIONS_REQUEST_ORDER_BIES: ListVersionsRequestOrderBy[] = [
  'version_asc',
  'version_desc',
]

/** Lists all values of the enum {@link NodeTypeStockStatus}. */
export const NODE_TYPE_STOCK_STATUSES: NodeTypeStockStatus[] = [
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

