// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues, } from '@scaleway/sdk-client'
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type {
  CreateEndpointRequest,
  CreateInstanceRequest,
  CreateSnapshotRequest,
  CreateUserRequest,
  Database,
  Endpoint,
  EndpointPrivateNetworkDetails,
  EndpointPublicNetworkDetails,
  EndpointSpec,
  EndpointSpecPrivateNetworkDetails,
  EndpointSpecPublicNetworkDetails,
  EngineUpgrade,
  Instance,
  InstanceSnapshotSchedule,
  ListDatabasesResponse,
  ListInstancesResponse,
  ListMaintenancesResponse,
  ListNodeTypesResponse,
  ListSnapshotsResponse,
  ListUsersResponse,
  ListVersionsResponse,
  Maintenance,
  NodeType,
  NodeTypeVolumeType,
  RestoreSnapshotRequest,
  ServiceUpdate,
  SetUserRoleRequest,
  Snapshot,
  UpdateInstanceRequest,
  UpdateSnapshotRequest,
  UpdateUserRequest,
  UpgradeInstanceRequest,
  User,
  UserRole,
  Version,
  Volume,
  Workflow,
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

const unmarshalEndpointPublicNetworkDetails = (data: unknown): EndpointPublicNetworkDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointPublicNetworkDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as EndpointPublicNetworkDetails
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
    port: data.port,
    privateNetwork: data.private_network ? unmarshalEndpointPrivateNetworkDetails(data.private_network) : undefined,
    publicNetwork: data.public_network ? unmarshalEndpointPublicNetworkDetails(data.public_network) : undefined,
  } as Endpoint
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
    sizeBytes: data.size_bytes,
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
    nodeAmount: data.node_amount,
    nodeType: data.node_type,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    snapshotSchedule: data.snapshot_schedule ? unmarshalInstanceSnapshotSchedule(data.snapshot_schedule) : undefined,
    status: data.status,
    tags: data.tags,
    version: data.version,
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as Instance
}

const unmarshalEngineUpgrade = (data: unknown): EngineUpgrade => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EngineUpgrade' failed as data isn't a dictionary.`,
    )
  }

  return {
    newVersionId: data.new_version_id,
  } as EngineUpgrade
}

const unmarshalServiceUpdate = (data: unknown): ServiceUpdate => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServiceUpdate' failed as data isn't a dictionary.`,
    )
  }

  return {
    serviceName: data.service_name,
  } as ServiceUpdate
}

const unmarshalWorkflow = (data: unknown): Workflow => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Workflow' failed as data isn't a dictionary.`,
    )
  }

  return {
    engineUpgrade: data.engine_upgrade ? unmarshalEngineUpgrade(data.engine_upgrade) : undefined,
    serviceUpdate: data.service_update ? unmarshalServiceUpdate(data.service_update) : undefined,
  } as Workflow
}

export const unmarshalMaintenance = (data: unknown): Maintenance => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Maintenance' failed as data isn't a dictionary.`,
    )
  }

  return {
    appliedAt: unmarshalDate(data.applied_at),
    appliedBy: data.applied_by,
    createdAt: unmarshalDate(data.created_at),
    forcedAt: unmarshalDate(data.forced_at),
    id: data.id,
    instanceId: data.instance_id,
    reason: data.reason,
    startsAt: unmarshalDate(data.starts_at),
    status: data.status,
    stopsAt: unmarshalDate(data.stops_at),
    workflow: data.workflow ? unmarshalWorkflow(data.workflow) : undefined,
  } as Maintenance
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
    sizeBytes: data.size_bytes,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    volumeType: data.volume_type,
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
    databaseName: data.database_name,
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

const unmarshalDatabase = (data: unknown): Database => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Database' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
  } as Database
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

export const unmarshalListMaintenancesResponse = (data: unknown): ListMaintenancesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListMaintenancesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    maintenances: unmarshalArrayOfObject(data.maintenances, unmarshalMaintenance),
    totalCount: data.total_count,
  } as ListMaintenancesResponse
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
    availableVolumeTypes: unmarshalArrayOfObject(data.available_volume_types, unmarshalNodeTypeVolumeType),
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

const marshalEndpointSpecPrivateNetworkDetails = (
  request: EndpointSpecPrivateNetworkDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

const marshalEndpointSpecPublicNetworkDetails = (
  request: EndpointSpecPublicNetworkDetails,
  defaults: DefaultValues,
): Record<string, unknown> => ({
})

const marshalEndpointSpec = (
  request: EndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'public_network',
      value: (request.publicNetwork !== undefined) ? marshalEndpointSpecPublicNetworkDetails(request.publicNetwork, defaults)
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

const marshalVolume = (
  request: Volume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  size_bytes: request.sizeBytes,
  type: request.type,
})

export const marshalCreateInstanceRequest = (
  request: CreateInstanceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoints: ((request.endpoints !== undefined) ?  request.endpoints.map(elt => marshalEndpointSpec(elt, defaults)): undefined),
  name: request.name || randomName('mgdb'),
  node_amount: request.nodeAmount,
  node_type: request.nodeType,
  password: request.password,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  user_name: request.userName,
  version: request.version,
  volume: ((request.volume !== undefined) ?  marshalVolume(request.volume, defaults): undefined),
})

export const marshalCreateSnapshotRequest = (
  request: CreateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  expires_at: request.expiresAt,
  instance_id: request.instanceId,
  name: request.name,
})

export const marshalCreateUserRequest = (
  request: CreateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  password: request.password,
})

export const marshalRestoreSnapshotRequest = (
  request: RestoreSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  instance_name: request.instanceName,
  node_amount: request.nodeAmount,
  node_type: request.nodeType,
  volume_type: request.volumeType,
})

const marshalUserRole = (
  request: UserRole,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  role: request.role,  
  ...resolveOneOf<string | boolean>([
    {param: 'database_name',
      value: request.databaseName,
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
  is_snapshot_schedule_enabled: request.isSnapshotScheduleEnabled,
  name: request.name,
  snapshot_schedule_frequency_hours: request.snapshotScheduleFrequencyHours,
  snapshot_schedule_retention_days: request.snapshotScheduleRetentionDays,
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
  ...resolveOneOf<number | string>([
    {param: 'volume_size_bytes',
      value: request.volumeSizeBytes,
    },
    {param: 'version_id',
      value: request.versionId,
    },
  ]),
})
