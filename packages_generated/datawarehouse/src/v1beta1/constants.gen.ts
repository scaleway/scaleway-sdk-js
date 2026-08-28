// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DeploymentStatus,
  EndpointServiceProtocol,
  ListDatabasesRequestOrderBy,
  ListDeploymentsRequestOrderBy,
  ListUsersRequestOrderBy,
} from './types.gen.js'


/** Lists all values of the enum {@link DeploymentStatus}. */
export const DEPLOYMENT_STATUSES: DeploymentStatus[] = [
  'unknown_status',
  'ready',
  'creating',
  'configuring',
  'deleting',
  'error',
  'locked',
  'locking',
  'unlocking',
  'deploying',
  'stopping',
  'starting',
  'stopped',
]

/** Lists all values of the enum {@link EndpointServiceProtocol}. */
export const ENDPOINT_SERVICE_PROTOCOLS: EndpointServiceProtocol[] = [
  'unknown_protocol',
  'tcp',
  'https',
  'mysql',
]

/** Lists all values of the enum {@link ListDatabasesRequestOrderBy}. */
export const LIST_DATABASES_REQUEST_ORDER_BIES: ListDatabasesRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'size_asc',
  'size_desc',
]

/** Lists all values of the enum {@link ListDeploymentsRequestOrderBy}. */
export const LIST_DEPLOYMENTS_REQUEST_ORDER_BIES: ListDeploymentsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListUsersRequestOrderBy}. */
export const LIST_USERS_REQUEST_ORDER_BIES: ListUsersRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

