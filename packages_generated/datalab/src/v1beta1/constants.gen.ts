// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DatalabStatus,
  ListClusterVersionsRequestOrderBy,
  ListDatalabsRequestOrderBy,
  ListNodeTypesRequestOrderBy,
  ListNodeTypesRequestResourceType,
  ListNotebookVersionsRequestOrderBy,
  NodeTypeStock,
  NodeTypeTarget,
  VolumeType,
} from './types.gen.js'


/** Lists all values of the enum {@link DatalabStatus}. */
export const DATALAB_STATUSES: DatalabStatus[] = [
  'unknown_status',
  'creating',
  'updating',
  'ready',
  'error',
  'deleting',
  'locked',
  'deleted',
]

/** Lists all values of the enum {@link ListClusterVersionsRequestOrderBy}. */
export const LIST_CLUSTER_VERSIONS_REQUEST_ORDER_BIES: ListClusterVersionsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListDatalabsRequestOrderBy}. */
export const LIST_DATALABS_REQUEST_ORDER_BIES: ListDatalabsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListNodeTypesRequestOrderBy}. */
export const LIST_NODE_TYPES_REQUEST_ORDER_BIES: ListNodeTypesRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'vcpus_asc',
  'vcpus_desc',
  'memory_gigabytes_asc',
  'memory_gigabytes_desc',
  'vram_bytes_asc',
  'vram_bytes_desc',
  'gpus_asc',
  'gpus_desc',
]

/** Lists all values of the enum {@link ListNodeTypesRequestResourceType}. */
export const LIST_NODE_TYPES_REQUEST_RESOURCE_TYPES: ListNodeTypesRequestResourceType[] = [
  'all',
  'gpu',
  'cpu',
]

/** Lists all values of the enum {@link ListNotebookVersionsRequestOrderBy}. */
export const LIST_NOTEBOOK_VERSIONS_REQUEST_ORDER_BIES: ListNotebookVersionsRequestOrderBy[] = [
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

/** Lists all values of the enum {@link NodeTypeTarget}. */
export const NODE_TYPE_TARGETS: NodeTypeTarget[] = [
  'unknown_target',
  'notebook',
  'worker',
]

/** Lists all values of the enum {@link VolumeType}. */
export const VOLUME_TYPES: VolumeType[] = [
  'unknown_type',
  'sbs_5k',
]

