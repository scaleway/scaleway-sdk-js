// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ClusterStatus,
  NodeStatus,
  PoolStatus,
} from './types.gen.js'


/** Lists transient statutes of the enum {@link ClusterStatus}. */
export const CLUSTER_TRANSIENT_STATUSES: ClusterStatus[] = [
  'creating',
  'deleting',
  'updating',
]

/** Lists transient statutes of the enum {@link NodeStatus}. */
export const NODE_TRANSIENT_STATUSES: NodeStatus[] = [
  'creating',
  'deleting',
  'rebooting',
  'upgrading',
  'starting',
  'registering',
]

/** Lists transient statutes of the enum {@link PoolStatus}. */
export const POOL_TRANSIENT_STATUSES: PoolStatus[] = [
  'deleting',
  'scaling',
  'upgrading',
]

