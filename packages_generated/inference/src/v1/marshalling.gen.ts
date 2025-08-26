// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  CreateDeploymentRequest,
  CreateEndpointRequest,
  CreateModelRequest,
  Deployment,
  DeploymentQuantization,
  Endpoint,
  EndpointPrivateNetworkDetails,
  EndpointPublicNetworkDetails,
  EndpointSpec,
  ListDeploymentsResponse,
  ListModelsResponse,
  ListNodeTypesResponse,
  Model,
  ModelSource,
  ModelSupportedNode,
  ModelSupportedQuantization,
  ModelSupportInfo,
  NodeType,
  UpdateDeploymentRequest,
  UpdateEndpointRequest,
} from './types.gen'

const unmarshalEndpointPrivateNetworkDetails = (
  data: unknown,
): EndpointPrivateNetworkDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointPrivateNetworkDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNetworkId: data.private_network_id,
  } as EndpointPrivateNetworkDetails
}

const unmarshalEndpointPublicNetworkDetails = (
  data: unknown,
): EndpointPublicNetworkDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointPublicNetworkDetails' failed as data isn't a dictionary.`,
    )
  }

  return {} as EndpointPublicNetworkDetails
}

export const unmarshalEndpoint = (data: unknown): Endpoint => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Endpoint' failed as data isn't a dictionary.`,
    )
  }

  return {
    disableAuth: data.disable_auth,
    id: data.id,
    privateNetwork: data.private_network
      ? unmarshalEndpointPrivateNetworkDetails(data.private_network)
      : undefined,
    publicNetwork: data.public_network
      ? unmarshalEndpointPublicNetworkDetails(data.public_network)
      : undefined,
    url: data.url,
  } as Endpoint
}

const unmarshalDeploymentQuantization = (
  data: unknown,
): DeploymentQuantization => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeploymentQuantization' failed as data isn't a dictionary.`,
    )
  }

  return {
    bits: data.bits,
  } as DeploymentQuantization
}

export const unmarshalDeployment = (data: unknown): Deployment => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Deployment' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
    errorMessage: data.error_message,
    id: data.id,
    maxSize: data.max_size,
    minSize: data.min_size,
    modelId: data.model_id,
    modelName: data.model_name,
    name: data.name,
    nodeTypeName: data.node_type_name,
    projectId: data.project_id,
    quantization: data.quantization
      ? unmarshalDeploymentQuantization(data.quantization)
      : undefined,
    region: data.region,
    size: data.size,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Deployment
}

const unmarshalModelSupportedQuantization = (
  data: unknown,
): ModelSupportedQuantization => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ModelSupportedQuantization' failed as data isn't a dictionary.`,
    )
  }

  return {
    allowed: data.allowed,
    maxContextSize: data.max_context_size,
    quantizationBits: data.quantization_bits,
  } as ModelSupportedQuantization
}

const unmarshalModelSupportedNode = (data: unknown): ModelSupportedNode => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ModelSupportedNode' failed as data isn't a dictionary.`,
    )
  }

  return {
    nodeTypeName: data.node_type_name,
    quantizations: unmarshalArrayOfObject(
      data.quantizations,
      unmarshalModelSupportedQuantization,
    ),
  } as ModelSupportedNode
}

const unmarshalModelSupportInfo = (data: unknown): ModelSupportInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ModelSupportInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    nodes: unmarshalArrayOfObject(data.nodes, unmarshalModelSupportedNode),
  } as ModelSupportInfo
}

export const unmarshalModel = (data: unknown): Model => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Model' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    errorMessage: data.error_message,
    hasEula: data.has_eula,
    id: data.id,
    name: data.name,
    nodesSupport: unmarshalArrayOfObject(
      data.nodes_support,
      unmarshalModelSupportInfo,
    ),
    parameterSizeBits: data.parameter_size_bits,
    projectId: data.project_id,
    region: data.region,
    sizeBytes: data.size_bytes,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Model
}

export const unmarshalListDeploymentsResponse = (
  data: unknown,
): ListDeploymentsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDeploymentsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    deployments: unmarshalArrayOfObject(data.deployments, unmarshalDeployment),
    totalCount: data.total_count,
  } as ListDeploymentsResponse
}

export const unmarshalListModelsResponse = (
  data: unknown,
): ListModelsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListModelsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    models: unmarshalArrayOfObject(data.models, unmarshalModel),
    totalCount: data.total_count,
  } as ListModelsResponse
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
    memory: data.memory,
    name: data.name,
    region: data.region,
    stockStatus: data.stock_status,
    updatedAt: unmarshalDate(data.updated_at),
    vcpus: data.vcpus,
    vram: data.vram,
  } as NodeType
}

export const unmarshalListNodeTypesResponse = (
  data: unknown,
): ListNodeTypesResponse => {
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

const marshalEndpointPrivateNetworkDetails = (
  request: EndpointPrivateNetworkDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

const marshalEndpointPublicNetworkDetails = (
  request: EndpointPublicNetworkDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalDeploymentQuantization = (
  request: DeploymentQuantization,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bits: request.bits,
})

const marshalEndpointSpec = (
  request: EndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disable_auth: request.disableAuth,
  ...resolveOneOf([
    {
      param: 'public_network',
      value:
        request.publicNetwork !== undefined
          ? marshalEndpointPublicNetworkDetails(request.publicNetwork, defaults)
          : undefined,
    },
    {
      param: 'private_network',
      value:
        request.privateNetwork !== undefined
          ? marshalEndpointPrivateNetworkDetails(
              request.privateNetwork,
              defaults,
            )
          : undefined,
    },
  ]),
})

export const marshalCreateDeploymentRequest = (
  request: CreateDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  accept_eula: request.acceptEula,
  endpoints: request.endpoints.map(elt => marshalEndpointSpec(elt, defaults)),
  max_size: request.maxSize,
  min_size: request.minSize,
  model_id: request.modelId,
  name: request.name || randomName('inference'),
  node_type_name: request.nodeTypeName,
  project_id: request.projectId ?? defaults.defaultProjectId,
  quantization:
    request.quantization !== undefined
      ? marshalDeploymentQuantization(request.quantization, defaults)
      : undefined,
  tags: request.tags,
})

export const marshalCreateEndpointRequest = (
  request: CreateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  deployment_id: request.deploymentId,
  endpoint: marshalEndpointSpec(request.endpoint, defaults),
})

const marshalModelSource = (
  request: ModelSource,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  url: request.url,
  ...resolveOneOf([{ param: 'secret', value: request.secret }]),
})

export const marshalCreateModelRequest = (
  request: CreateModelRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('model'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  source: marshalModelSource(request.source, defaults),
})

export const marshalUpdateDeploymentRequest = (
  request: UpdateDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_size: request.maxSize,
  min_size: request.minSize,
  model_id: request.modelId,
  name: request.name,
  quantization:
    request.quantization !== undefined
      ? marshalDeploymentQuantization(request.quantization, defaults)
      : undefined,
  tags: request.tags,
})

export const marshalUpdateEndpointRequest = (
  request: UpdateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disable_auth: request.disableAuth,
})
