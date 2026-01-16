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
  CreateUserRequest,
  Deployment,
  Endpoint,
  EndpointPrivateNetworkDetails,
  EndpointPublicDetails,
  EndpointService,
  EndpointSpec,
  EndpointSpecPrivateNetworkDetails,
  EndpointSpecPublicDetails,
  ListDeploymentsResponse,
  ListNodeTypesResponse,
  ListUsersResponse,
  ListVersionsResponse,
  NodeType,
  NodeTypeVolumeType,
  UpdateDeploymentRequest,
  UpdateUserRequest,
  UpgradeDeploymentRequest,
  User,
  Version,
  Volume,
} from './types.gen.js'

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

const unmarshalEndpointPublicDetails = (
  data: unknown,
): EndpointPublicDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointPublicDetails' failed as data isn't a dictionary.`,
    )
  }

  return {} as EndpointPublicDetails
}

const unmarshalEndpointService = (data: unknown): EndpointService => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointService' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    port: data.port,
    url: data.url,
  } as EndpointService
}

export const unmarshalEndpoint = (data: unknown): Endpoint => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Endpoint' failed as data isn't a dictionary.`,
    )
  }

  return {
    dnsRecord: data.dns_record,
    id: data.id,
    privateNetwork: data.private_network
      ? unmarshalEndpointPrivateNetworkDetails(data.private_network)
      : undefined,
    public: data.public
      ? unmarshalEndpointPublicDetails(data.public)
      : undefined,
    services: unmarshalArrayOfObject(data.services, unmarshalEndpointService),
  } as Endpoint
}

const unmarshalVolume = (data: unknown): Volume => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Volume' failed as data isn't a dictionary.`,
    )
  }

  return {
    sizeBytes: data.size_bytes,
    type: data.type,
  } as Volume
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
    id: data.id,
    name: data.name,
    nodeAmount: data.node_amount,
    nodeType: data.node_type,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    version: data.version,
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as Deployment
}

export const unmarshalUser = (data: unknown): User => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'User' failed as data isn't a dictionary.`,
    )
  }

  return {
    username: data.username,
  } as User
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

const unmarshalNodeTypeVolumeType = (data: unknown): NodeTypeVolumeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeTypeVolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    chunkSizeBytes: data.chunk_size_bytes,
    description: data.description,
    maxSizeBytes: data.max_size_bytes,
    minSizeBytes: data.min_size_bytes,
    type: data.type,
  } as NodeTypeVolumeType
}

const unmarshalNodeType = (data: unknown): NodeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableVolumeTypes: unmarshalArrayOfObject(
      data.available_volume_types,
      unmarshalNodeTypeVolumeType,
    ),
    beta: data.beta,
    description: data.description,
    disabled: data.disabled,
    instanceRange: data.instance_range,
    memoryBytes: data.memory_bytes,
    name: data.name,
    stockStatus: data.stock_status,
    vcpus: data.vcpus,
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

export const unmarshalListUsersResponse = (
  data: unknown,
): ListUsersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListUsersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    users: unmarshalArrayOfObject(data.users, unmarshalUser),
  } as ListUsersResponse
}

const unmarshalVersion = (data: unknown): Version => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Version' failed as data isn't a dictionary.`,
    )
  }

  return {
    beta: data.beta,
    disabled: data.disabled,
    endOfLife: unmarshalDate(data.end_of_life),
    version: data.version,
  } as Version
}

export const unmarshalListVersionsResponse = (
  data: unknown,
): ListVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    versions: unmarshalArrayOfObject(data.versions, unmarshalVersion),
  } as ListVersionsResponse
}

const marshalEndpointSpecPrivateNetworkDetails = (
  request: EndpointSpecPrivateNetworkDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

const marshalEndpointSpecPublicDetails = (
  request: EndpointSpecPublicDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalEndpointSpec = (
  request: EndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'public',
      value:
        request.public !== undefined
          ? marshalEndpointSpecPublicDetails(request.public, defaults)
          : undefined,
    },
    {
      param: 'private_network',
      value:
        request.privateNetwork !== undefined
          ? marshalEndpointSpecPrivateNetworkDetails(
              request.privateNetwork,
              defaults,
            )
          : undefined,
    },
  ]),
})

const marshalVolume = (
  request: Volume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  size_bytes: request.sizeBytes,
  type: request.type,
})

export const marshalCreateDeploymentRequest = (
  request: CreateDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoints:
    request.endpoints !== undefined
      ? request.endpoints.map(elt => marshalEndpointSpec(elt, defaults))
      : undefined,
  name: request.name,
  node_amount: request.nodeAmount,
  node_type: request.nodeType,
  password: request.password,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  user_name: request.userName,
  version: request.version,
  volume:
    request.volume !== undefined
      ? marshalVolume(request.volume, defaults)
      : undefined,
})

export const marshalCreateEndpointRequest = (
  request: CreateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  deployment_id: request.deploymentId,
  endpoint_spec:
    request.endpointSpec !== undefined
      ? marshalEndpointSpec(request.endpointSpec, defaults)
      : undefined,
})

export const marshalCreateUserRequest = (
  request: CreateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
  username: request.username,
})

export const marshalUpdateDeploymentRequest = (
  request: UpdateDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateUserRequest = (
  request: UpdateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
})

export const marshalUpgradeDeploymentRequest = (
  request: UpgradeDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'node_amount', value: request.nodeAmount },
    { param: 'volume_size_bytes', value: request.volumeSizeBytes },
  ]),
})
