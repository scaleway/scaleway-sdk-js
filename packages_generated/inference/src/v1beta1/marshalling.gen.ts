// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues, } from '@scaleway/sdk-client'
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type {
  ACLRule,
  ACLRuleRequest,
  AddDeploymentACLRulesRequest,
  AddDeploymentACLRulesResponse,
  CreateDeploymentRequest,
  CreateEndpointRequest,
  Deployment,
  Endpoint,
  EndpointPrivateNetworkDetails,
  EndpointPublicAccessDetails,
  EndpointSpec,
  EndpointSpecPrivateNetwork,
  EndpointSpecPublic,
  Eula,
  ListDeploymentACLRulesResponse,
  ListDeploymentsResponse,
  ListModelsResponse,
  ListNodeTypesResponse,
  Model,
  ModelS3Model,
  NodeType,
  SetDeploymentACLRulesRequest,
  SetDeploymentACLRulesResponse,
  UpdateDeploymentRequest,
  UpdateEndpointRequest,
} from './types.gen.js'

const unmarshalEndpointPrivateNetworkDetails = (data: unknown): EndpointPrivateNetworkDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointPrivateNetworkDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNetworkId: data.private_network_id,
  } as EndpointPrivateNetworkDetails
}

const unmarshalEndpointPublicAccessDetails = (data: unknown): EndpointPublicAccessDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointPublicAccessDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as EndpointPublicAccessDetails
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
    privateNetwork: data.private_network ? unmarshalEndpointPrivateNetworkDetails(data.private_network) : undefined,
    publicAccess: data.public_access ? unmarshalEndpointPublicAccessDetails(data.public_access) : undefined,
    url: data.url,
  } as Endpoint
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
    nodeType: data.node_type,
    projectId: data.project_id,
    region: data.region,
    size: data.size,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Deployment
}

const unmarshalModelS3Model = (data: unknown): ModelS3Model => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ModelS3Model' failed as data isn't a dictionary.`,
    )
  }

  return {
    nodeType: data.node_type,
    pythonDependencies: data.python_dependencies,
    s3Url: data.s3_url,
    tritonServerVersion: data.triton_server_version,
  } as ModelS3Model
}

export const unmarshalModel = (data: unknown): Model => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Model' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatibleNodeTypes: data.compatible_node_types,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    hasEula: data.has_eula,
    id: data.id,
    isPublic: data.is_public,
    name: data.name,
    projectId: data.project_id,
    provider: data.provider,
    quantizationLevel: data.quantization_level,
    region: data.region,
    s3Model: data.s3_model ? unmarshalModelS3Model(data.s3_model) : undefined,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Model
}

const unmarshalACLRule = (data: unknown): ACLRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ACLRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    ip: data.ip,
  } as ACLRule
}

export const unmarshalAddDeploymentACLRulesResponse = (data: unknown): AddDeploymentACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddDeploymentACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
  } as AddDeploymentACLRulesResponse
}

export const unmarshalEula = (data: unknown): Eula => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Eula' failed as data isn't a dictionary.`,
    )
  }

  return {
    content: data.content,
  } as Eula
}

export const unmarshalListDeploymentACLRulesResponse = (data: unknown): ListDeploymentACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDeploymentACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
    totalCount: data.total_count,
  } as ListDeploymentACLRulesResponse
}

export const unmarshalListDeploymentsResponse = (data: unknown): ListDeploymentsResponse => {
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

export const unmarshalListModelsResponse = (data: unknown): ListModelsResponse => {
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

export const unmarshalSetDeploymentACLRulesResponse = (data: unknown): SetDeploymentACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetDeploymentACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
  } as SetDeploymentACLRulesResponse
}

const marshalACLRuleRequest = (
  request: ACLRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ip: request.ip,
})

export const marshalAddDeploymentACLRulesRequest = (
  request: AddDeploymentACLRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acls: ((request.acls !== undefined) ?  request.acls.map(elt => marshalACLRuleRequest(elt, defaults)): undefined),
})

const marshalEndpointSpecPrivateNetwork = (
  request: EndpointSpecPrivateNetwork,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

const marshalEndpointSpecPublic = (
  request: EndpointSpecPublic,
  defaults: DefaultValues,
): Record<string, unknown> => ({
})

const marshalEndpointSpec = (
  request: EndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disable_auth: request.disableAuth,  
  ...resolveOneOf([
    {param: 'public',
      value: (request.public !== undefined) ? marshalEndpointSpecPublic(request.public, defaults)
      : undefined,
    },
    {param: 'private_network',
      value: (request.privateNetwork !== undefined) ? marshalEndpointSpecPrivateNetwork(request.privateNetwork, defaults)
      : undefined,
    },
  ]),
})

export const marshalCreateDeploymentRequest = (
  request: CreateDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  accept_eula: request.acceptEula,
  endpoints:  request.endpoints.map(elt => marshalEndpointSpec(elt, defaults)),
  max_size: request.maxSize,
  min_size: request.minSize,
  model_name: request.modelName,
  name: request.name || randomName('inference'),
  node_type: request.nodeType,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalCreateEndpointRequest = (
  request: CreateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  deployment_id: request.deploymentId,
  endpoint:  marshalEndpointSpec(request.endpoint, defaults),
})

export const marshalSetDeploymentACLRulesRequest = (
  request: SetDeploymentACLRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acls: ((request.acls !== undefined) ?  request.acls.map(elt => marshalACLRuleRequest(elt, defaults)): undefined),
})

export const marshalUpdateDeploymentRequest = (
  request: UpdateDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_size: request.maxSize,
  min_size: request.minSize,
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateEndpointRequest = (
  request: UpdateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disable_auth: request.disableAuth,
})
