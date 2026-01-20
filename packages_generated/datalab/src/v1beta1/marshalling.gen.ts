
import type { DefaultValues, } from '@scaleway/sdk-client'
import { isJSONObject, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type {
  Cluster,
  ClusterVersion,
  CreateDatalabRequest,
  CreateDatalabRequestSparkMain,
  CreateDatalabRequestSparkWorker,
  Datalab,
  DatalabSparkMain,
  DatalabSparkWorker,
  ListClusterVersionsResponse,
  ListDatalabsResponse,
  ListNodeTypesResponse,
  ListNotebookVersionsResponse,
  NodeType,
  Notebook,
  NotebookVersion,
  UpdateDatalabRequest,
  Volume,
} from './types.gen.js'

const unmarshalVolume = (data: unknown): Volume => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Volume' failed as data isn't a dictionary.`,
    )
  }

  return {
    size: data.size,
    type: data.type,
  } as Volume
}

const unmarshalDatalabSparkMain = (data: unknown): DatalabSparkMain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DatalabSparkMain' failed as data isn't a dictionary.`,
    )
  }

  return {
    nodeType: data.node_type,
    rootVolume: data.root_volume ? unmarshalVolume(data.root_volume) : undefined,
    sparkMasterUrl: data.spark_master_url,
    sparkUiUrl: data.spark_ui_url,
  } as DatalabSparkMain
}

const unmarshalDatalabSparkWorker = (data: unknown): DatalabSparkWorker => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DatalabSparkWorker' failed as data isn't a dictionary.`,
    )
  }

  return {
    nodeCount: data.node_count,
    nodeType: data.node_type,
    rootVolume: data.root_volume ? unmarshalVolume(data.root_volume) : undefined,
  } as DatalabSparkWorker
}

export const unmarshalDatalab = (data: unknown): Datalab => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Datalab' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    hasNotebook: data.has_notebook,
    id: data.id,
    main: data.main ? unmarshalDatalabSparkMain(data.main) : undefined,
    name: data.name,
    notebookMasterUrl: data.notebook_master_url,
    notebookUrl: data.notebook_url,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    region: data.region,
    sparkVersion: data.spark_version,
    status: data.status,
    tags: data.tags,
    totalStorage: data.total_storage ? unmarshalVolume(data.total_storage) : undefined,
    updatedAt: unmarshalDate(data.updated_at),
    worker: data.worker ? unmarshalDatalabSparkWorker(data.worker) : undefined,
  } as Datalab
}

const unmarshalClusterVersion = (data: unknown): ClusterVersion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    beta: data.beta,
    createdAt: unmarshalDate(data.created_at),
    disabled: data.disabled,
    endOfLife: unmarshalDate(data.end_of_life),
    updatedAt: unmarshalDate(data.updated_at),
    version: data.version,
  } as ClusterVersion
}

const unmarshalCluster = (data: unknown): Cluster => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Cluster' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    name: data.name,
    versions: unmarshalArrayOfObject(data.versions, unmarshalClusterVersion),
  } as Cluster
}

export const unmarshalListClusterVersionsResponse = (data: unknown): ListClusterVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListClusterVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusters: unmarshalArrayOfObject(data.clusters, unmarshalCluster),
    totalCount: data.total_count,
  } as ListClusterVersionsResponse
}

export const unmarshalListDatalabsResponse = (data: unknown): ListDatalabsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatalabsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    datalabs: unmarshalArrayOfObject(data.datalabs, unmarshalDatalab),
    totalCount: data.total_count,
  } as ListDatalabsResponse
}

const unmarshalNodeType = (data: unknown): NodeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    beta: data.beta,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    disabled: data.disabled,
    gpus: data.gpus,
    memoryGigabytes: data.memory_gigabytes,
    name: data.name,
    stockStatus: data.stock_status,
    targets: data.targets,
    updatedAt: unmarshalDate(data.updated_at),
    vcpus: data.vcpus,
    vramGigabytes: data.vram_gigabytes,
  } as NodeType
}

export const unmarshalListNodeTypesResponse = (data: unknown): ListNodeTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNodeTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nodeTypes: unmarshalArrayOfObject(data.node_types, unmarshalNodeType),
    totalCount: data.total_count,
  } as ListNodeTypesResponse
}

const unmarshalNotebookVersion = (data: unknown): NotebookVersion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NotebookVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    beta: data.beta,
    createdAt: unmarshalDate(data.created_at),
    disabled: data.disabled,
    endOfLife: unmarshalDate(data.end_of_life),
    updatedAt: unmarshalDate(data.updated_at),
    version: data.version,
  } as NotebookVersion
}

const unmarshalNotebook = (data: unknown): Notebook => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Notebook' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    name: data.name,
    versions: unmarshalArrayOfObject(data.versions, unmarshalNotebookVersion),
  } as Notebook
}

export const unmarshalListNotebookVersionsResponse = (data: unknown): ListNotebookVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNotebookVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    notebooks: unmarshalArrayOfObject(data.notebooks, unmarshalNotebook),
    totalCount: data.total_count,
  } as ListNotebookVersionsResponse
}

const marshalCreateDatalabRequestSparkMain = (
  request: CreateDatalabRequestSparkMain,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  node_type: request.nodeType,
})

const marshalCreateDatalabRequestSparkWorker = (
  request: CreateDatalabRequestSparkWorker,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  node_count: request.nodeCount,
  node_type: request.nodeType,
})

const marshalVolume = (
  request: Volume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  size: request.size,
  type: request.type,
})

export const marshalCreateDatalabRequest = (
  request: CreateDatalabRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  has_notebook: request.hasNotebook,
  main: ((request.main !== undefined) ?  marshalCreateDatalabRequestSparkMain(request.main, defaults): undefined),
  name: request.name,
  private_network_id: request.privateNetworkId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  spark_version: request.sparkVersion,
  tags: request.tags,
  total_storage: ((request.totalStorage !== undefined) ?  marshalVolume(request.totalStorage, defaults): undefined),
  worker: ((request.worker !== undefined) ?  marshalCreateDatalabRequestSparkWorker(request.worker, defaults): undefined),
})

export const marshalUpdateDatalabRequest = (
  request: UpdateDatalabRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  node_count: request.nodeCount,
  tags: request.tags,
})
