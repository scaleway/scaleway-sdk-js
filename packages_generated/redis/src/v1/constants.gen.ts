// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  AvailableClusterSettingPropertyType,
  ClusterStatus,
  ListClustersRequestOrderBy,
  NodeTypeStock,
  PrivateNetworkProvisioningMode,
} from './types.gen.js'


/** Lists all values of the enum {@link AvailableClusterSettingPropertyType}. */
export const AVAILABLE_CLUSTER_SETTING_PROPERTY_TYPES: AvailableClusterSettingPropertyType[] = [
  'UNKNOWN',
  'BOOLEAN',
  'INT',
  'STRING',
]

/** Lists all values of the enum {@link ClusterStatus}. */
export const CLUSTER_STATUSES: ClusterStatus[] = [
  'unknown',
  'ready',
  'provisioning',
  'configuring',
  'deleting',
  'error',
  'autohealing',
  'locked',
  'suspended',
  'initializing',
]

/** Lists all values of the enum {@link ListClustersRequestOrderBy}. */
export const LIST_CLUSTERS_REQUEST_ORDER_BIES: ListClustersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link NodeTypeStock}. */
export const NODE_TYPE_STOCKS: NodeTypeStock[] = [
  'unknown',
  'low_stock',
  'out_of_stock',
  'available',
]

/** Lists all values of the enum {@link PrivateNetworkProvisioningMode}. */
export const PRIVATE_NETWORK_PROVISIONING_MODES: PrivateNetworkProvisioningMode[] = [
  'static',
  'ipam',
]

