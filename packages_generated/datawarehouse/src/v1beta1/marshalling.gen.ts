
import type { DefaultValues, } from '@scaleway/sdk-client'
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type {
  CreateDatabaseRequest,
  CreateDeploymentRequest,
  CreateEndpointRequest,
  CreateUserRequest,
  Database,
  Deployment,
  Endpoint,
  EndpointPrivateNetworkDetails,
  EndpointPublicDetails,
  EndpointService,
  EndpointSpec,
  EndpointSpecPrivateNetworkDetails,
  EndpointSpecPublicDetails,
  ListDatabasesResponse,
  ListDeploymentsResponse,
  ListPresetsResponse,
  ListUsersResponse,
  ListVersionsResponse,
  Preset,
  UpdateDeploymentRequest,
  UpdateUserRequest,
  User,
  Version,
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

const unmarshalEndpointPublicDetails = (data: unknown): EndpointPublicDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointPublicDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as EndpointPublicDetails
}

const unmarshalEndpointService = (data: unknown): EndpointService => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointService' failed as data isn't a dictionary.`,
    )
  }

  return {
    port: data.port,
    protocol: data.protocol,
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
    privateNetwork: data.private_network ? unmarshalEndpointPrivateNetworkDetails(data.private_network) : undefined,
    public: data.public ? unmarshalEndpointPublicDetails(data.public) : undefined,
    services: unmarshalArrayOfObject(data.services, unmarshalEndpointService),
  } as Endpoint
}

export const unmarshalDatabase = (data: unknown): Database => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Database' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    size: data.size,
  } as Database
}

export const unmarshalDeployment = (data: unknown): Deployment => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Deployment' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpuMax: data.cpu_max,
    cpuMin: data.cpu_min,
    createdAt: unmarshalDate(data.created_at),
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    ramPerCpu: data.ram_per_cpu,
    region: data.region,
    replicaCount: data.replica_count,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    version: data.version,
  } as Deployment
}

export const unmarshalUser = (data: unknown): User => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'User' failed as data isn't a dictionary.`,
    )
  }

  return {
    isAdmin: data.is_admin,
    name: data.name,
  } as User
}

export const unmarshalListDatabasesResponse = (data: unknown): ListDatabasesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabasesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    databases: unmarshalArrayOfObject(data.databases, unmarshalDatabase),
    totalCount: data.total_count,
  } as ListDatabasesResponse
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

const unmarshalPreset = (data: unknown): Preset => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Preset' failed as data isn't a dictionary.`,
    )
  }

  return {
    category: data.category,
    cpuMax: data.cpu_max,
    cpuMin: data.cpu_min,
    name: data.name,
    ramPerCpu: data.ram_per_cpu,
    replicaCount: data.replica_count,
  } as Preset
}

export const unmarshalListPresetsResponse = (data: unknown): ListPresetsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPresetsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    presets: unmarshalArrayOfObject(data.presets, unmarshalPreset),
    totalCount: data.total_count,
  } as ListPresetsResponse
}

export const unmarshalListUsersResponse = (data: unknown): ListUsersResponse => {
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
    endOfLifeAt: unmarshalDate(data.end_of_life_at),
    version: data.version,
  } as Version
}

export const unmarshalListVersionsResponse = (data: unknown): ListVersionsResponse => {
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

export const marshalCreateDatabaseRequest = (
  request: CreateDatabaseRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

const marshalEndpointSpecPrivateNetworkDetails = (
  request: EndpointSpecPrivateNetworkDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

const marshalEndpointSpecPublicDetails = (
  request: EndpointSpecPublicDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({
})

const marshalEndpointSpec = (
  request: EndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'public',
      value: (request.public !== undefined) ? marshalEndpointSpecPublicDetails(request.public, defaults)
      : undefined,
    },
    {param: 'private_network',
      value: (request.privateNetwork !== undefined) ? marshalEndpointSpecPrivateNetworkDetails(request.privateNetwork, defaults)
      : undefined,
    },
  ]),
})

export const marshalCreateDeploymentRequest = (
  request: CreateDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cpu_max: request.cpuMax,
  cpu_min: request.cpuMin,
  endpoints: ((request.endpoints !== undefined) ?  request.endpoints.map(elt => marshalEndpointSpec(elt, defaults)): undefined),
  name: request.name,
  password: request.password,
  project_id: request.projectId ?? defaults.defaultProjectId,
  ram_per_cpu: request.ramPerCpu,
  replica_count: request.replicaCount,
  tags: request.tags,
  version: request.version,
})

export const marshalCreateEndpointRequest = (
  request: CreateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  deployment_id: request.deploymentId,
  endpoint: ((request.endpoint !== undefined) ?  marshalEndpointSpec(request.endpoint, defaults): undefined),
})

export const marshalCreateUserRequest = (
  request: CreateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  is_admin: request.isAdmin,
  name: request.name,
  password: request.password,
})

export const marshalUpdateDeploymentRequest = (
  request: UpdateDeploymentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cpu_max: request.cpuMax,
  cpu_min: request.cpuMin,
  name: request.name,
  replica_count: request.replicaCount,
  tags: request.tags,
})

export const marshalUpdateUserRequest = (
  request: UpdateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  is_admin: request.isAdmin,
  password: request.password,
})
