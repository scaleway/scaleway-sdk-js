// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type DatalabStatus =
  | 'unknown_status'
  | 'creating'
  | 'updating'
  | 'ready'
  | 'error'
  | 'deleting'
  | 'locked'
  | 'deleted'

export type ListClusterVersionsRequestOrderBy = 'name_asc' | 'name_desc'

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

export type ListNodeTypesRequestResourceType = 'all' | 'gpu' | 'cpu'

export type ListNotebookVersionsRequestOrderBy = 'name_asc' | 'name_desc'

export type NodeTypeStock =
  | 'unknown_stock'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type NodeTypeTarget = 'unknown_target' | 'notebook' | 'worker'

export type VolumeType = 'unknown_type' | 'sbs_5k'

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
 * A Data Lab resource.
 */
export interface Datalab {
  /**
   * The unique identifier of the Data Lab.
   */
  id: string
  /**
   * The identifier of the project where the Data Lab has been created.
   */
  projectId: string
  /**
   * The name of the Data Lab.
   */
  name: string
  /**
   * The description of the Data Lab.
   */
  description: string
  /**
   * The tags of the Data Lab.
   */
  tags: string[]
  /**
   * The Spark Main node specification of Data lab. It holds the parameters `node_type` the compute node type of the main node, `spark_ui_url` where the Spark UI is available, `spark_master_url` with which one can connect to the cluster from within one's VPC, `root_volume` the size of the volume assigned to the main node.
   */
  main?: DatalabSparkMain
  /**
   * The worker node specification of the Data Lab. It presents the parameters `node_type` the compute node type of each worker node, `node_count` the number of worker nodes currently in the cluster, `root_volume` the root volume size of each executor.
   */
  worker?: DatalabSparkWorker
  /**
   * The status of the Data Lab. For a working Data Lab this should be `ready`.
   */
  status: DatalabStatus
  /**
   * The creation timestamp of the Data Lab.
   */
  createdAt?: Date
  /**
   * The last update date of the Data Lab.
   */
  updatedAt?: Date
  /**
   * The region of the Data Lab.
   */
  region: ScwRegion
  /**
   * Whether a JupyterLab notebook is associated with the Data Lab or not.
   */
  hasNotebook: boolean
  /**
   * The URL of said notebook if exists.
   */
  notebookUrl?: string
  /**
   * The version of Spark running inside the Data Lab.
   */
  sparkVersion: string
  /**
   * The total storage selected by the user for Spark.
   */
  totalStorage?: Volume
  /**
   * The private newtwork to which the data lab is connected. This is important for accessing the Spark Master URL.
   */
  privateNetworkId: string
  /**
   * The URL to the Spark Master endpoint from, and only from the perspective of the JupyterLab Notebook. This is NOT the URL to use for accessing the clutser from a private server.
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
 * A request to create a Data Lab.
 */
export type CreateDatalabRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the project where the Data Lab will be created.
   */
  projectId?: string
  /**
   * The name of the Data Lab.
   */
  name: string
  /**
   * The description of the Data Lab.
   */
  description: string
  /**
   * The tags of the Data Lab.
   */
  tags?: string[]
  /**
   * The Spark main node configuration of the Data Lab, has one parameter `node_type` which specifies the compute node type of the main node. See ListNodeTypes for available options.
   */
  main?: CreateDatalabRequestSparkMain
  /**
   * The Spark worker node configuration of the Data Lab, has two parameters `node_type` for selecting the type of the worker node, and `node_count` for specifying the ammount of nodes.
   */
  worker?: CreateDatalabRequestSparkWorker
  /**
   * Whether a JupyterLab notebook shall be created with the Data Lab or not.
   */
  hasNotebook: boolean
  /**
   * The version of Spark running inside the Data Lab, available options can be viewed at ListClusterVersions.
   */
  sparkVersion: string
  /**
   * The total storage selected by the user for Spark workers. This means the workers will not use more then this amount for their workload.
   */
  totalStorage?: Volume
  /**
   * The private newtwork to which the Data Lab is connected. Important for accessing the Spark Master URL from a private cluster.
   */
  privateNetworkId: string
}

/**
 * A request to delete a Data Lab.
 */
export type DeleteDatalabRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the Data Lab.
   */
  datalabId: string
}

/**
 * A request to get information about a Data Lab.
 */
export type GetDatalabRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the Data Lab.
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
 * A request to list Datalabs.
 */
export type ListDatalabsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the organization whose Data Labs you want to list.
   */
  organizationId?: string
  /**
   * The unique identifier of the project whose Data Labs you want to list.
   */
  projectId?: string
  /**
   * The name of the Data Lab you want to list.
   */
  name?: string
  /**
   * The tags associated with the Data Lab you want to list.
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
 * A response to list Data Labs.
 */
export interface ListDatalabsResponse {
  /**
   * The list of Data Labs. This is a list composed of messages of type `DataLab`.
   */
  datalabs: Datalab[]
  /**
   * The total count of Datalabs.
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
   * Filter on the wanted targets, whether it's for main node or worker.
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
 * A request to update a Data Lab.
 */
export type UpdateDatalabRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The unique identifier of the Data Lab.
   */
  datalabId: string
  /**
   * The updated name of the Data Lab.
   */
  name?: string
  /**
   * The updated description of the Data Lab.
   */
  description?: string
  /**
   * The updated tags of the Data Lab.
   */
  tags?: string[]
  /**
   * The updated node count of the Data Lab. Scale up or down the number of worker nodes.
   */
  nodeCount?: number
}
