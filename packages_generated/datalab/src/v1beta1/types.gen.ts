// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, } from '@scaleway/sdk-client'


export type DatalabStatus =
  | 'unknown_status'
  | 'creating'
  | 'updating'
  | 'ready'
  | 'error'
  | 'deleting'
  | 'locked'
  | 'deleted'

export type ListClusterVersionsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'

export type ListDatalabsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListNodeTypesRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'vcpus_asc'
  | 'vcpus_desc'
  | 'memory_gigabytes_asc'
  | 'memory_gigabytes_desc'
  | 'vram_bytes_asc'
  | 'vram_bytes_desc'
  | 'gpus_asc'
  | 'gpus_desc'

export type ListNodeTypesRequestResourceType =
  | 'all'
  | 'gpu'
  | 'cpu'

export type ListNotebookVersionsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'

export type NodeTypeStock =
  | 'unknown_stock'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type NodeTypeTarget =
  | 'unknown_target'
  | 'notebook'
  | 'worker'

export type VolumeType =
  | 'unknown_type'
  | 'sbs_5k'

export interface Volume {
  type: VolumeType
  size: number
}


/**
 * A cluster version.
 */
export interface ClusterVersion {
  /**
   * The version of the cluster.
   */
  version: string
  /**
   * The end of life date of the cluster version.
   */
  endOfLife?: Date
  /**
   * The creation date of the cluster version.
   */
  createdAt?: Date
  /**
   * The last update date of the cluster version.
   */
  updatedAt?: Date
  /**
   * Whether the cluster version is disabled.
   */
  disabled: boolean
  /**
   * Whether the cluster version is in beta.
   */
  beta: boolean
}


export interface DatalabSparkMain {
  nodeType: string
  sparkUiUrl: string
  sparkMasterUrl: string
  rootVolume?: Volume
}


export interface DatalabSparkWorker {
  nodeType: string
  nodeCount: number
  rootVolume?: Volume
}


/**
 * A notebook version.
 */
export interface NotebookVersion {
  /**
   * The version of the notebook.
   */
  version: string
  /**
   * The end of life date of the notebook version.
   */
  endOfLife?: Date
  /**
   * The creation date of the notebook version.
   */
  createdAt?: Date
  /**
   * The last update date of the notebook version.
   */
  updatedAt?: Date
  /**
   * Whether the notebook version is disabled.
   */
  disabled: boolean
  /**
   * Whether the notebook version is in beta.
   */
  beta: boolean
}


export interface CreateDatalabRequestSparkMain {
  nodeType: string
}


export interface CreateDatalabRequestSparkWorker {
  nodeType: string
  nodeCount: number
}


/**
 * A cluster.
 */
export interface Cluster {
  /**
   * The name of the cluster.
   */
  name: string
  /**
   * The description of the cluster.
   */
  description: string
  /**
   * The versions of the cluster.
   */
  versions: ClusterVersion[]
}


/**
 * A Clusters for Apache Spark™ resource.
 */
export interface Datalab {
  /**
   * The unique identifier of the cluster.
   */
  id: string
  /**
   * The unique identifier of the project where the cluster has been created.
   */
  projectId: string
  /**
   * The name of the cluster.
   */
  name: string
  /**
   * The description of the cluster.
   */
  description: string
  /**
   * The tags of the cluster.
   */
  tags: string[]
  /**
   * The Apache Spark™ Main node specification of cluster. It holds the parameters `node_type`, `spark_ui_url` (available to reach Apache Spark™ UI), `spark_master_url` (used to reach the cluster within a VPC), `root_volume` (size of the volume assigned to the cluster).
   */
  main?: DatalabSparkMain
  /**
   * The cluster worker nodes specification. It holds the parameters `node_type`, `node_count`, `root_volume` (size of the volume assigned to the cluster).
   */
  worker?: DatalabSparkWorker
  /**
   * The status of the cluster. For a working cluster the status is marked as `ready`.
   */
  status: DatalabStatus
  /**
   * The creation timestamp of the cluster.
   */
  createdAt?: Date
  /**
   * The last update date of the cluster.
   */
  updatedAt?: Date
  /**
   * The region of the cluster.
   */
  region: ScwRegion
  /**
   * Whether a JupyterLab notebook is associated with the cluster or not.
   */
  hasNotebook: boolean
  /**
   * The URL of the notebook if available.
   */
  notebookUrl?: string
  /**
   * The version of Apache Spark™ running inside the cluster.
   */
  sparkVersion: string
  /**
   * The total persistent volume storage selected to run Apache Spark™.
   */
  totalStorage?: Volume
  /**
   * The unique identifier of the private network to which the cluster is attached to.
   */
  privateNetworkId: string
  /**
   * The URL that is used to reach the cluster from the notebook when available. This URL cannot be used to reach the cluster from a server.
   */
  notebookMasterUrl?: string
}


/**
 * A node type.
 */
export interface NodeType {
  /**
   * The stock status of the node type.
   */
  stockStatus: NodeTypeStock
  /**
   * The name of the node type.
   */
  name: string
  /**
   * The description of the node type.
   */
  description: string
  /**
   * The number of vCPUs.
   */
  vcpus: number
  /**
   * The amount of memory.
   */
  memoryGigabytes: number
  /**
   * The amount of VRAM.
   */
  vramGigabytes: number
  /**
   * The number of GPUs.
   */
  gpus: number
  /**
   * Whether the node type is disabled.
   */
  disabled: boolean
  /**
   * Whether the node type is in beta.
   */
  beta: boolean
  /**
   * The creation date of the node type.
   */
  createdAt?: Date
  /**
   * The last update date of the node type.
   */
  updatedAt?: Date
  /**
   * The targets of the node type.
   */
  targets: NodeTypeTarget[]
}


/**
 * A notebook.
 */
export interface Notebook {
  /**
   * The name of the notebook.
   */
  name: string
  /**
   * The description of the notebook.
   */
  description: string
  /**
   * The versions of the notebook.
   */
  versions: NotebookVersion[]
}


/**
 * A request to create a cluster.
 */
export type CreateDatalabRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the project where the cluster will be created.
   */
  projectId?: string
  /**
   * The name of the cluster.
   */
  name: string
  /**
   * The description of the cluster.
   */
  description: string
  /**
   * The tags of the cluster.
   */
  tags?: string[]
  /**
   * The cluster main node specification. It holds the parameters `node_type` which specifies the node type of the main node. See ListNodeTypes for available options. See ListNodeTypes for available options.
   */
  main?: CreateDatalabRequestSparkMain
  /**
   * The cluster worker node specification. It holds the parameters `node_type` which specifies the node type of the worker node and `node_count` for specifying the amount of nodes.
   */
  worker?: CreateDatalabRequestSparkWorker
  /**
   * Select this option to include a notebook as part of the cluster.
   */
  hasNotebook: boolean
  /**
   * The version of Apache Spark™ running inside the cluster, available options can be viewed at ListClusterVersions.
   */
  sparkVersion: string
  /**
   * The maximum persistent volume storage that will be available during workload.
   */
  totalStorage?: Volume
  /**
   * The unique identifier of the private network the cluster will be attached to.
   */
  privateNetworkId: string
}


/**
 * A request to delete a cluster.
 */
export type DeleteDatalabRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the cluster.
   */
  datalabId: string
}


/**
 * A request to get information about a cluster.
 */
export type GetDatalabRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the cluster.
   */
  datalabId: string
}


/**
 * A request to list cluster versions.
 */
export type ListClusterVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The page number.
   */
  page?: number
  /**
   * The page size.
   */
  pageSize?: number
  /**
   * The order by field.
   */
  orderBy?: ListClusterVersionsRequestOrderBy
}


/**
 * A response to list cluster versions.
 */
export interface ListClusterVersionsResponse {
  /**
   * The list of cluster versions.
   */
  clusters: Cluster[]
  /**
   * The total count of cluster versions.
   */
  totalCount: number
}


/**
 * A request to list clusters.
 */
export type ListDatalabsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the organization whose clusters you want to list.
   */
  organizationId?: string
  /**
   * The unique identifier of the project whose clusters you want to list.
   */
  projectId?: string
  /**
   * The name of the cluster you want to list.
   */
  name?: string
  /**
   * The tags associated with the cluster you want to list.
   */
  tags?: string[]
  /**
   * The page number for pagination.
   */
  page?: number
  /**
   * The page size for pagination.
   */
  pageSize?: number
  /**
   * The order by field, available options are `name_asc`, `name_desc`, `created_at_asc`, `created_at_desc`, `updated_at_asc`, `updated_at_desc`.
   */
  orderBy?: ListDatalabsRequestOrderBy
}


/**
 * A response to list clusters.
 */
export interface ListDatalabsResponse {
  /**
   * The list of clusters. This is a list composed of messages of type `DataLab`.
   */
  datalabs: Datalab[]
  /**
   * The total count of clusters.
   */
  totalCount: number
}


/**
 * A request to list node types.
 */
export type ListNodeTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The page number.
   */
  page?: number
  /**
   * The page size.
   */
  pageSize?: number
  /**
   * The order by field. Available fields are `name_asc`, `name_desc`, `vcpus_asc`, `vcpus_desc`, `memory_gigabytes_asc`, `memory_gigabytes_desc`, `vram_bytes_asc`, `vram_bytes_desc`, `gpus_asc`, `gpus_desc`.
   */
  orderBy?: ListNodeTypesRequestOrderBy
  /**
   * Filter based on the target of the nodes. Allows to filter the nodes based on their purpose which can be main or worker node.
   */
  targets?: NodeTypeTarget[]
  /**
   * Filter based on node type ( `cpu`/`gpu`/`all` ).
   */
  resourceType?: ListNodeTypesRequestResourceType
}


/**
 * A response to list node types.
 */
export interface ListNodeTypesResponse {
  /**
   * The list of node types.
   */
  nodeTypes: NodeType[]
  /**
   * The total count of node types.
   */
  totalCount: number
}


/**
 * A request to list notebook versions.
 */
export type ListNotebookVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The page number.
   */
  page?: number
  /**
   * The page size.
   */
  pageSize?: number
  /**
   * The order by field. Available options are `name_asc` and `name_desc`.
   */
  orderBy?: ListNotebookVersionsRequestOrderBy
}


/**
 * A response to list notebook versions.
 */
export interface ListNotebookVersionsResponse {
  /**
   * The list of notebook versions.
   */
  notebooks: Notebook[]
  /**
   * The total count of notebook versions.
   */
  totalCount: number
}


/**
 * A request to update a cluster.
 */
export type UpdateDatalabRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the cluster.
   */
  datalabId: string
  /**
   * The updated name of the cluster.
   */
  name?: string
  /**
   * The updated description of the cluster.
   */
  description?: string
  /**
   * The updated tags of the cluster.
   */
  tags?: string[]
  /**
   * The updated node count of the cluster. Scale up or down the number of worker nodes.
   */
  nodeCount?: number
}


