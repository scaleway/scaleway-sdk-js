// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues, } from '@scaleway/sdk-client'
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type {
  CreateEndpointRequest,
  CreateInstanceRequest,
  CreateInstanceRequestVolumeDetails,
  CreateSnapshotRequest,
  CreateUserRequest,
  Endpoint,
  EndpointPrivateNetworkDetails,
  EndpointPublicDetails,
  EndpointSpec,
  EndpointSpecPrivateNetworkDetails,
  EndpointSpecPublicDetails,
  Instance,
  InstanceSetting,
  InstanceSnapshotSchedule,
  ListInstancesResponse,
  ListNodeTypesResponse,
  ListSnapshotsResponse,
  ListUsersResponse,
  ListVersionsResponse,
  NodeType,
  NodeTypeVolumeType,
  RestoreSnapshotRequest,
  RestoreSnapshotRequestVolumeDetails,
  Setting,
  SetUserRoleRequest,
  Snapshot,
  SnapshotVolumeType,
  UpdateInstanceRequest,
  UpdateSnapshotRequest,
  UpdateUserRequest,
  UpgradeInstanceRequest,
  User,
  UserRole,
  Version,
  Volume,
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

export const unmarshalEndpoint = (data: unknown): Endpoint => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Endpoint' failed as data isn't a dictionary.`,
    )
  }

  return {
    dnsRecords: data.dns_records,
    id: data.id,
    ips: data.ips,
    port: data.port,
    privateNetwork: data.private_network ? unmarshalEndpointPrivateNetworkDetails(data.private_network) : undefined,
    public: data.public ? unmarshalEndpointPublicDetails(data.public) : undefined,
  } as Endpoint
}

const unmarshalInstanceSetting = (data: unknown): InstanceSetting => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceSetting' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    value: data.value,
  } as InstanceSetting
}

const unmarshalInstanceSnapshotSchedule = (data: unknown): InstanceSnapshotSchedule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceSnapshotSchedule' failed as data isn't a dictionary.`,
    )
  }

  return {
    enabled: data.enabled,
    frequencyHours: data.frequency_hours,
    lastRun: unmarshalDate(data.last_run),
    nextUpdate: unmarshalDate(data.next_update),
    retentionDays: data.retention_days,
  } as InstanceSnapshotSchedule
}

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

export const unmarshalInstance = (data: unknown): Instance => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Instance' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
    id: data.id,
    name: data.name,
    nodeNumber: data.node_number,
    nodeType: data.node_type,
    projectId: data.project_id,
    region: data.region,
    settings: unmarshalArrayOfObject(data.settings, unmarshalInstanceSetting),
    snapshotSchedule: data.snapshot_schedule ? unmarshalInstanceSnapshotSchedule(data.snapshot_schedule) : undefined,
    status: data.status,
    tags: data.tags,
    version: data.version,
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as Instance
}

const unmarshalSnapshotVolumeType = (data: unknown): SnapshotVolumeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnapshotVolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    type: data.type,
  } as SnapshotVolumeType
}

export const unmarshalSnapshot = (data: unknown): Snapshot => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Snapshot' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    instanceId: data.instance_id,
    instanceName: data.instance_name,
    name: data.name,
    nodeType: data.node_type,
    region: data.region,
    size: data.size,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    volumeType: data.volume_type ? unmarshalSnapshotVolumeType(data.volume_type) : undefined,
  } as Snapshot
}

const unmarshalUserRole = (data: unknown): UserRole => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UserRole' failed as data isn't a dictionary.`,
    )
  }

  return {
    anyDatabase: data.any_database,
    database: data.database,
    role: data.role,
  } as UserRole
}

export const unmarshalUser = (data: unknown): User => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'User' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    roles: unmarshalArrayOfObject(data.roles, unmarshalUserRole),
  } as User
}

export const unmarshalListInstancesResponse = (data: unknown): ListInstancesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstancesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    instances: unmarshalArrayOfObject(data.instances, unmarshalInstance),
    totalCount: data.total_count,
  } as ListInstancesResponse
}

const unmarshalNodeTypeVolumeType = (data: unknown): NodeTypeVolumeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeTypeVolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    chunkSize: data.chunk_size,
    description: data.description,
    maxSize: data.max_size,
    minSize: data.min_size,
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
    availableVolumeTypes: unmarshalArrayOfObject(data.available_volume_types, unmarshalNodeTypeVolumeType),
    beta: data.beta,
    description: data.description,
    disabled: data.disabled,
    instanceRange: data.instance_range,
    memory: data.memory,
    name: data.name,
    stockStatus: data.stock_status,
    vcpus: data.vcpus,
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

export const unmarshalListSnapshotsResponse = (data: unknown): ListSnapshotsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSnapshotsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshots: unmarshalArrayOfObject(data.snapshots, unmarshalSnapshot),
    totalCount: data.total_count,
  } as ListSnapshotsResponse
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

const unmarshalSetting = (data: unknown): Setting => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Setting' failed as data isn't a dictionary.`,
    )
  }

  return {
    defaultValue: data.default_value,
    description: data.description,
    floatMax: data.float_max,
    floatMin: data.float_min,
    hotConfigurable: data.hot_configurable,
    intMax: data.int_max,
    intMin: data.int_min,
    name: data.name,
    propertyType: data.property_type,
    stringConstraint: data.string_constraint,
    unit: data.unit,
  } as Setting
}

const unmarshalVersion = (data: unknown): Version => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Version' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableSettings: unmarshalArrayOfObject(data.available_settings, unmarshalSetting),
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

export const marshalCreateEndpointRequest = (
  request: CreateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoint:  marshalEndpointSpec(request.endpoint, defaults),
  instance_id: request.instanceId,
})

const marshalCreateInstanceRequestVolumeDetails = (
  request: CreateInstanceRequestVolumeDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  volume_size: request.volumeSize,
  volume_type: request.volumeType,
})

export const marshalCreateInstanceRequest = (
  request: CreateInstanceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoints: ((request.endpoints !== undefined) ?  request.endpoints.map(elt => marshalEndpointSpec(elt, defaults)): undefined),
  name: request.name || randomName('mgdb'),
  node_number: request.nodeNumber,
  node_type: request.nodeType,
  password: request.password,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  user_name: request.userName,
  version: request.version,
  volume: ((request.volume !== undefined) ?  marshalCreateInstanceRequestVolumeDetails(request.volume, defaults): undefined),
})

export const marshalCreateSnapshotRequest = (
  request: CreateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  expires_at: request.expiresAt,
  name: request.name,
})

export const marshalCreateUserRequest = (
  request: CreateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  password: request.password,
})

const marshalRestoreSnapshotRequestVolumeDetails = (
  request: RestoreSnapshotRequestVolumeDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  volume_type: request.volumeType,
})

export const marshalRestoreSnapshotRequest = (
  request: RestoreSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  instance_name: request.instanceName,
  node_number: request.nodeNumber,
  node_type: request.nodeType,
  volume:  marshalRestoreSnapshotRequestVolumeDetails(request.volume, defaults),
})

const marshalUserRole = (
  request: UserRole,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  role: request.role,  
  ...resolveOneOf<string | boolean>([
    {param: 'database',
      value: request.database,
    },
    {param: 'any_database',
      value: request.anyDatabase,
    },
  ]),
})

export const marshalSetUserRoleRequest = (
  request: SetUserRoleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  roles: ((request.roles !== undefined) ?  request.roles.map(elt => marshalUserRole(elt, defaults)): undefined),
  user_name: request.userName,
})

export const marshalUpdateInstanceRequest = (
  request: UpdateInstanceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateSnapshotRequest = (
  request: UpdateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  expires_at: request.expiresAt,
  name: request.name,
})

export const marshalUpdateUserRequest = (
  request: UpdateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
})

export const marshalUpgradeInstanceRequest = (
  request: UpgradeInstanceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'volume_size',
      value: request.volumeSize,
    },
  ]),
})
