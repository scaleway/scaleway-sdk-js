// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DeploymentStatus,
  ListDeploymentsRequestOrderBy,
  ListModelsRequestOrderBy,
  ModelStatus,
  NodeTypeStock,
} from './types.gen.js'


/** Lists all values of the enum {@link DeploymentStatus}. */
export const DEPLOYMENT_STATUSES: DeploymentStatus[] = [
  'unknown_status',
  'creating',
  'deploying',
  'ready',
  'error',
  'deleting',
  'locked',
  'scaling',
  'deleted',
]

/** Lists all values of the enum {@link ListDeploymentsRequestOrderBy}. */
export const LIST_DEPLOYMENTS_REQUEST_ORDER_BIES: ListDeploymentsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListModelsRequestOrderBy}. */
export const LIST_MODELS_REQUEST_ORDER_BIES: ListModelsRequestOrderBy[] = [
  'display_rank_asc',
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ModelStatus}. */
export const MODEL_STATUSES: ModelStatus[] = [
  'unknown_status',
  'preparing',
  'downloading',
  'ready',
  'error',
]

/** Lists all values of the enum {@link NodeTypeStock}. */
export const NODE_TYPE_STOCKS: NodeTypeStock[] = [
  'unknown_stock',
  'low_stock',
  'out_of_stock',
  'available',
]

