// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  marshalBlobToScwFile,
  marshalDecimal,
  marshalMoney,
  marshalScwFile,
  marshalTimeSeries,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalDecimal,
  unmarshalMapOfObject,
  unmarshalMoney,
  unmarshalScwFile,
  unmarshalServiceInfo,
  unmarshalTimeSeries,
  unmarshalTimeSeriesPoint,
} from '@scaleway/sdk-client'
import type {
  Zone as ScwZone,
  Region as ScwRegion,
  DefaultValues,
} from '@scaleway/sdk-client'
import type {
  EndpointDirectAccessDetails,
  EndpointLoadBalancerDetails,
  EndpointPrivateNetworkDetails,
  Endpoint,
  Maintenance,
  ReadReplica,
  DatabaseBackup,
  Database,
  InstanceLog,
  BackupSchedule,
  EncryptionAtRest,
  InstanceSetting,
  LogsPolicy,
  UpgradableVersion,
  Volume,
  Instance,
  Privilege,
  SnapshotVolumeType,
  Snapshot,
  User,
  ACLRule,
  AddInstanceACLRulesResponse,
  AddInstanceSettingsResponse,
  DeleteInstanceACLRulesResponse,
  DeleteInstanceSettingsResponse,
  InstanceMetrics,
  ListDatabaseBackupsResponse,
  EngineSetting,
  EngineVersion,
  DatabaseEngine,
  ListDatabaseEnginesResponse,
  ListDatabasesResponse,
  ListInstanceACLRulesResponse,
  ListInstanceLogsDetailsResponseInstanceLogDetail,
  ListInstanceLogsDetailsResponse,
  ListInstanceLogsResponse,
  ListInstancesResponse,
  NodeTypeVolumeConstraintSizes,
  NodeTypeVolumeType,
  NodeType,
  ListNodeTypesResponse,
  ListPrivilegesResponse,
  ListSnapshotsResponse,
  ListUsersResponse,
  PrepareInstanceLogsResponse,
  SetInstanceACLRulesResponse,
  SetInstanceSettingsResponse,
  ACLRuleRequest,
  AddInstanceACLRulesRequest,
  AddInstanceSettingsRequest,
  CloneInstanceRequest,
  CreateDatabaseBackupRequest,
  CreateDatabaseRequest,
  EndpointSpecPrivateNetworkIpamConfig,
  EndpointSpecLoadBalancer,
  EndpointSpecPrivateNetwork,
  EndpointSpec,
  CreateEndpointRequest,
  CreateInstanceFromSnapshotRequest,
  CreateInstanceRequest,
  ReadReplicaEndpointSpecPrivateNetworkIpamConfig,
  ReadReplicaEndpointSpecDirectAccess,
  ReadReplicaEndpointSpecPrivateNetwork,
  ReadReplicaEndpointSpec,
  CreateReadReplicaEndpointRequest,
  CreateReadReplicaRequest,
  CreateSnapshotRequest,
  CreateUserRequest,
  DeleteInstanceACLRulesRequest,
  DeleteInstanceSettingsRequest,
  MigrateEndpointRequest,
  PrepareInstanceLogsRequest,
  PurgeInstanceLogsRequest,
  RestoreDatabaseBackupRequest,
  SetInstanceACLRulesRequest,
  SetInstanceSettingsRequest,
  SetPrivilegeRequest,
  UpdateDatabaseBackupRequest,
  UpdateInstanceRequest,
  UpdateSnapshotRequest,
  UpdateUserRequest,
  UpgradeInstanceRequestMajorUpgradeWorkflow,
  UpgradeInstanceRequest,
} from './types.gen.js'

const unmarshalEndpointDirectAccessDetails = (
  data: unknown,
): EndpointDirectAccessDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointDirectAccessDetails' failed as data isn't a dictionary.`,
    )
  }

  return {} as EndpointDirectAccessDetails
}

const unmarshalEndpointLoadBalancerDetails = (
  data: unknown,
): EndpointLoadBalancerDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointLoadBalancerDetails' failed as data isn't a dictionary.`,
    )
  }

  return {} as EndpointLoadBalancerDetails
}

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
    provisioningMode: data.provisioning_mode,
    serviceIp: data.service_ip,
    zone: data.zone,
  } as EndpointPrivateNetworkDetails
}

export const unmarshalEndpoint = (data: unknown): Endpoint => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Endpoint' failed as data isn't a dictionary.`,
    )
  }

  return {
    directAccess: data.direct_access
      ? unmarshalEndpointDirectAccessDetails(data.direct_access)
      : undefined,
    hostname: data.hostname,
    id: data.id,
    ip: data.ip,
    loadBalancer: data.load_balancer
      ? unmarshalEndpointLoadBalancerDetails(data.load_balancer)
      : undefined,
    name: data.name,
    port: data.port,
    privateNetwork: data.private_network
      ? unmarshalEndpointPrivateNetworkDetails(data.private_network)
      : undefined,
  } as Endpoint
}

export const unmarshalMaintenance = (data: unknown): Maintenance => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Maintenance' failed as data isn't a dictionary.`,
    )
  }

  return {
    closedAt: unmarshalDate(data.closed_at),
    forcedAt: unmarshalDate(data.forced_at),
    isApplicable: data.is_applicable,
    reason: data.reason,
    startsAt: unmarshalDate(data.starts_at),
    status: data.status,
    stopsAt: unmarshalDate(data.stops_at),
  } as Maintenance
}

export const unmarshalReadReplica = (data: unknown): ReadReplica => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ReadReplica' failed as data isn't a dictionary.`,
    )
  }

  return {
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
    id: data.id,
    instanceId: data.instance_id,
    region: data.region,
    sameZone: data.same_zone,
    status: data.status,
  } as ReadReplica
}

export const unmarshalDatabaseBackup = (data: unknown): DatabaseBackup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DatabaseBackup' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    databaseName: data.database_name,
    downloadUrl: data.download_url,
    downloadUrlExpiresAt: unmarshalDate(data.download_url_expires_at),
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    instanceId: data.instance_id,
    instanceName: data.instance_name,
    name: data.name,
    region: data.region,
    sameRegion: data.same_region,
    size: data.size,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as DatabaseBackup
}

export const unmarshalDatabase = (data: unknown): Database => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Database' failed as data isn't a dictionary.`,
    )
  }

  return {
    managed: data.managed,
    name: data.name,
    owner: data.owner,
    size: data.size,
  } as Database
}

export const unmarshalInstanceLog = (data: unknown): InstanceLog => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceLog' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    downloadUrl: data.download_url,
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    nodeName: data.node_name,
    region: data.region,
    status: data.status,
  } as InstanceLog
}

export const unmarshalBackupSchedule = (data: unknown): BackupSchedule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BackupSchedule' failed as data isn't a dictionary.`,
    )
  }

  return {
    disabled: data.disabled,
    frequency: data.frequency,
    nextRunAt: unmarshalDate(data.next_run_at),
    retention: data.retention,
  } as BackupSchedule
}

const unmarshalEncryptionAtRest = (data: unknown): EncryptionAtRest => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EncryptionAtRest' failed as data isn't a dictionary.`,
    )
  }

  return {
    enabled: data.enabled,
  } as EncryptionAtRest
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

const unmarshalLogsPolicy = (data: unknown): LogsPolicy => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LogsPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    maxAgeRetention: data.max_age_retention,
    totalDiskRetention: data.total_disk_retention,
  } as LogsPolicy
}

const unmarshalUpgradableVersion = (data: unknown): UpgradableVersion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpgradableVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    minorVersion: data.minor_version,
    name: data.name,
    version: data.version,
  } as UpgradableVersion
}

const unmarshalVolume = (data: unknown): Volume => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Volume' failed as data isn't a dictionary.`,
    )
  }

  return {
    class: data.class,
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
    backupSameRegion: data.backup_same_region,
    backupSchedule: data.backup_schedule
      ? unmarshalBackupSchedule(data.backup_schedule)
      : undefined,
    createdAt: unmarshalDate(data.created_at),
    encryption: data.encryption
      ? unmarshalEncryptionAtRest(data.encryption)
      : undefined,
    endpoint: data.endpoint ? unmarshalEndpoint(data.endpoint) : undefined,
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
    engine: data.engine,
    id: data.id,
    initSettings: unmarshalArrayOfObject(
      data.init_settings,
      unmarshalInstanceSetting,
    ),
    isHaCluster: data.is_ha_cluster,
    logsPolicy: data.logs_policy
      ? unmarshalLogsPolicy(data.logs_policy)
      : undefined,
    maintenances: unmarshalArrayOfObject(
      data.maintenances,
      unmarshalMaintenance,
    ),
    name: data.name,
    nodeType: data.node_type,
    organizationId: data.organization_id,
    projectId: data.project_id,
    readReplicas: unmarshalArrayOfObject(
      data.read_replicas,
      unmarshalReadReplica,
    ),
    region: data.region,
    settings: unmarshalArrayOfObject(data.settings, unmarshalInstanceSetting),
    status: data.status,
    tags: data.tags,
    upgradableVersion: unmarshalArrayOfObject(
      data.upgradable_version,
      unmarshalUpgradableVersion,
    ),
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as Instance
}

export const unmarshalPrivilege = (data: unknown): Privilege => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Privilege' failed as data isn't a dictionary.`,
    )
  }

  return {
    databaseName: data.database_name,
    permission: data.permission,
    userName: data.user_name,
  } as Privilege
}

const unmarshalSnapshotVolumeType = (data: unknown): SnapshotVolumeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnapshotVolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    class: data.class,
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
    volumeType: data.volume_type
      ? unmarshalSnapshotVolumeType(data.volume_type)
      : undefined,
  } as Snapshot
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

export const unmarshalACLRule = (data: unknown): ACLRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ACLRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    description: data.description,
    direction: data.direction,
    ip: data.ip,
    port: data.port,
    protocol: data.protocol,
  } as ACLRule
}

export const unmarshalAddInstanceACLRulesResponse = (
  data: unknown,
): AddInstanceACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddInstanceACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
  } as AddInstanceACLRulesResponse
}

export const unmarshalAddInstanceSettingsResponse = (
  data: unknown,
): AddInstanceSettingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddInstanceSettingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    settings: unmarshalArrayOfObject(data.settings, unmarshalInstanceSetting),
  } as AddInstanceSettingsResponse
}

export const unmarshalDeleteInstanceACLRulesResponse = (
  data: unknown,
): DeleteInstanceACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteInstanceACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
  } as DeleteInstanceACLRulesResponse
}

export const unmarshalDeleteInstanceSettingsResponse = (
  data: unknown,
): DeleteInstanceSettingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteInstanceSettingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    settings: unmarshalArrayOfObject(data.settings, unmarshalInstanceSetting),
  } as DeleteInstanceSettingsResponse
}

export const unmarshalInstanceMetrics = (data: unknown): InstanceMetrics => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceMetrics' failed as data isn't a dictionary.`,
    )
  }

  return {
    timeseries: unmarshalArrayOfObject(data.timeseries, unmarshalTimeSeries),
  } as InstanceMetrics
}

export const unmarshalListDatabaseBackupsResponse = (
  data: unknown,
): ListDatabaseBackupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabaseBackupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    databaseBackups: unmarshalArrayOfObject(
      data.database_backups,
      unmarshalDatabaseBackup,
    ),
    totalCount: data.total_count,
  } as ListDatabaseBackupsResponse
}

const unmarshalEngineSetting = (data: unknown): EngineSetting => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EngineSetting' failed as data isn't a dictionary.`,
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
  } as EngineSetting
}

const unmarshalEngineVersion = (data: unknown): EngineVersion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EngineVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableInitSettings: unmarshalArrayOfObject(
      data.available_init_settings,
      unmarshalEngineSetting,
    ),
    availableSettings: unmarshalArrayOfObject(
      data.available_settings,
      unmarshalEngineSetting,
    ),
    beta: data.beta,
    disabled: data.disabled,
    endOfLife: unmarshalDate(data.end_of_life),
    name: data.name,
    version: data.version,
  } as EngineVersion
}

const unmarshalDatabaseEngine = (data: unknown): DatabaseEngine => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DatabaseEngine' failed as data isn't a dictionary.`,
    )
  }

  return {
    logoUrl: data.logo_url,
    name: data.name,
    region: data.region,
    versions: unmarshalArrayOfObject(data.versions, unmarshalEngineVersion),
  } as DatabaseEngine
}

export const unmarshalListDatabaseEnginesResponse = (
  data: unknown,
): ListDatabaseEnginesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabaseEnginesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    engines: unmarshalArrayOfObject(data.engines, unmarshalDatabaseEngine),
    totalCount: data.total_count,
  } as ListDatabaseEnginesResponse
}

export const unmarshalListDatabasesResponse = (
  data: unknown,
): ListDatabasesResponse => {
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

export const unmarshalListInstanceACLRulesResponse = (
  data: unknown,
): ListInstanceACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstanceACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
    totalCount: data.total_count,
  } as ListInstanceACLRulesResponse
}

const unmarshalListInstanceLogsDetailsResponseInstanceLogDetail = (
  data: unknown,
): ListInstanceLogsDetailsResponseInstanceLogDetail => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstanceLogsDetailsResponseInstanceLogDetail' failed as data isn't a dictionary.`,
    )
  }

  return {
    logName: data.log_name,
    size: data.size,
  } as ListInstanceLogsDetailsResponseInstanceLogDetail
}

export const unmarshalListInstanceLogsDetailsResponse = (
  data: unknown,
): ListInstanceLogsDetailsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstanceLogsDetailsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    details: unmarshalArrayOfObject(
      data.details,
      unmarshalListInstanceLogsDetailsResponseInstanceLogDetail,
    ),
  } as ListInstanceLogsDetailsResponse
}

export const unmarshalListInstanceLogsResponse = (
  data: unknown,
): ListInstanceLogsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInstanceLogsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    instanceLogs: unmarshalArrayOfObject(
      data.instance_logs,
      unmarshalInstanceLog,
    ),
  } as ListInstanceLogsResponse
}

export const unmarshalListInstancesResponse = (
  data: unknown,
): ListInstancesResponse => {
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

const unmarshalNodeTypeVolumeConstraintSizes = (
  data: unknown,
): NodeTypeVolumeConstraintSizes => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeTypeVolumeConstraintSizes' failed as data isn't a dictionary.`,
    )
  }

  return {
    maxSize: data.max_size,
    minSize: data.min_size,
  } as NodeTypeVolumeConstraintSizes
}

const unmarshalNodeTypeVolumeType = (data: unknown): NodeTypeVolumeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeTypeVolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    chunkSize: data.chunk_size,
    class: data.class,
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
    availableVolumeTypes: unmarshalArrayOfObject(
      data.available_volume_types,
      unmarshalNodeTypeVolumeType,
    ),
    beta: data.beta,
    description: data.description,
    disabled: data.disabled,
    generation: data.generation,
    instanceRange: data.instance_range,
    isBssdCompatible: data.is_bssd_compatible,
    isHaRequired: data.is_ha_required,
    memory: data.memory,
    name: data.name,
    region: data.region,
    stockStatus: data.stock_status,
    vcpus: data.vcpus,
    volumeConstraint: data.volume_constraint
      ? unmarshalNodeTypeVolumeConstraintSizes(data.volume_constraint)
      : undefined,
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

export const unmarshalListPrivilegesResponse = (
  data: unknown,
): ListPrivilegesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPrivilegesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privileges: unmarshalArrayOfObject(data.privileges, unmarshalPrivilege),
    totalCount: data.total_count,
  } as ListPrivilegesResponse
}

export const unmarshalListSnapshotsResponse = (
  data: unknown,
): ListSnapshotsResponse => {
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

export const unmarshalPrepareInstanceLogsResponse = (
  data: unknown,
): PrepareInstanceLogsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrepareInstanceLogsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    instanceLogs: unmarshalArrayOfObject(
      data.instance_logs,
      unmarshalInstanceLog,
    ),
  } as PrepareInstanceLogsResponse
}

export const unmarshalSetInstanceACLRulesResponse = (
  data: unknown,
): SetInstanceACLRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetInstanceACLRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalACLRule),
  } as SetInstanceACLRulesResponse
}

export const unmarshalSetInstanceSettingsResponse = (
  data: unknown,
): SetInstanceSettingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetInstanceSettingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    settings: unmarshalArrayOfObject(data.settings, unmarshalInstanceSetting),
  } as SetInstanceSettingsResponse
}

const marshalACLRuleRequest = (
  request: ACLRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ip: request.ip,
})

export const marshalAddInstanceACLRulesRequest = (
  request: AddInstanceACLRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  rules: request.rules.map(elt => marshalACLRuleRequest(elt, defaults)),
})

const marshalInstanceSetting = (
  request: InstanceSetting,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  value: request.value,
})

export const marshalAddInstanceSettingsRequest = (
  request: AddInstanceSettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  settings: request.settings.map(elt => marshalInstanceSetting(elt, defaults)),
})

export const marshalCloneInstanceRequest = (
  request: CloneInstanceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  node_type: request.nodeType,
})

export const marshalCreateDatabaseBackupRequest = (
  request: CreateDatabaseBackupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  database_name: request.databaseName,
  expires_at: request.expiresAt,
  instance_id: request.instanceId,
  name: request.name || randomName('bkp'),
})

export const marshalCreateDatabaseRequest = (
  request: CreateDatabaseRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

const marshalEndpointSpecPrivateNetworkIpamConfig = (
  request: EndpointSpecPrivateNetworkIpamConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalEndpointSpecLoadBalancer = (
  request: EndpointSpecLoadBalancer,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalEndpointSpecPrivateNetwork = (
  request: EndpointSpecPrivateNetwork,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
  ...resolveOneOf<string | Record<string, unknown>>([
    { param: 'service_ip', value: request.serviceIp },
    {
      param: 'ipam_config',
      value:
        request.ipamConfig !== undefined
          ? marshalEndpointSpecPrivateNetworkIpamConfig(
              request.ipamConfig,
              defaults,
            )
          : undefined,
    },
  ]),
})

const marshalEndpointSpec = (
  request: EndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'load_balancer',
      value:
        request.loadBalancer !== undefined
          ? marshalEndpointSpecLoadBalancer(request.loadBalancer, defaults)
          : undefined,
    },
    {
      param: 'private_network',
      value:
        request.privateNetwork !== undefined
          ? marshalEndpointSpecPrivateNetwork(request.privateNetwork, defaults)
          : undefined,
    },
  ]),
})

export const marshalCreateEndpointRequest = (
  request: CreateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoint_spec:
    request.endpointSpec !== undefined
      ? marshalEndpointSpec(request.endpointSpec, defaults)
      : undefined,
})

export const marshalCreateInstanceFromSnapshotRequest = (
  request: CreateInstanceFromSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  instance_name: request.instanceName,
  is_ha_cluster: request.isHaCluster,
  node_type: request.nodeType,
})

const marshalEncryptionAtRest = (
  request: EncryptionAtRest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enabled: request.enabled,
})

export const marshalCreateInstanceRequest = (
  request: CreateInstanceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backup_same_region: request.backupSameRegion,
  disable_backup: request.disableBackup,
  encryption:
    request.encryption !== undefined
      ? marshalEncryptionAtRest(request.encryption, defaults)
      : undefined,
  engine: request.engine,
  init_endpoints:
    request.initEndpoints !== undefined
      ? request.initEndpoints.map(elt => marshalEndpointSpec(elt, defaults))
      : undefined,
  init_settings:
    request.initSettings !== undefined
      ? request.initSettings.map(elt => marshalInstanceSetting(elt, defaults))
      : undefined,
  is_ha_cluster: request.isHaCluster,
  name: request.name || randomName('ins'),
  node_type: request.nodeType,
  password: request.password,
  tags: request.tags,
  user_name: request.userName,
  volume_size: request.volumeSize,
  volume_type: request.volumeType,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

const marshalReadReplicaEndpointSpecPrivateNetworkIpamConfig = (
  request: ReadReplicaEndpointSpecPrivateNetworkIpamConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalReadReplicaEndpointSpecDirectAccess = (
  request: ReadReplicaEndpointSpecDirectAccess,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalReadReplicaEndpointSpecPrivateNetwork = (
  request: ReadReplicaEndpointSpecPrivateNetwork,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
  ...resolveOneOf<string | Record<string, unknown>>([
    { param: 'service_ip', value: request.serviceIp },
    {
      param: 'ipam_config',
      value:
        request.ipamConfig !== undefined
          ? marshalReadReplicaEndpointSpecPrivateNetworkIpamConfig(
              request.ipamConfig,
              defaults,
            )
          : undefined,
    },
  ]),
})

const marshalReadReplicaEndpointSpec = (
  request: ReadReplicaEndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'direct_access',
      value:
        request.directAccess !== undefined
          ? marshalReadReplicaEndpointSpecDirectAccess(
              request.directAccess,
              defaults,
            )
          : undefined,
    },
    {
      param: 'private_network',
      value:
        request.privateNetwork !== undefined
          ? marshalReadReplicaEndpointSpecPrivateNetwork(
              request.privateNetwork,
              defaults,
            )
          : undefined,
    },
  ]),
})

export const marshalCreateReadReplicaEndpointRequest = (
  request: CreateReadReplicaEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoint_spec: request.endpointSpec.map(elt =>
    marshalReadReplicaEndpointSpec(elt, defaults),
  ),
})

export const marshalCreateReadReplicaRequest = (
  request: CreateReadReplicaRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoint_spec:
    request.endpointSpec !== undefined
      ? request.endpointSpec.map(elt =>
          marshalReadReplicaEndpointSpec(elt, defaults),
        )
      : undefined,
  instance_id: request.instanceId,
  same_zone: request.sameZone,
})

export const marshalCreateSnapshotRequest = (
  request: CreateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  expires_at: request.expiresAt,
  name: request.name || randomName('snp'),
})

export const marshalCreateUserRequest = (
  request: CreateUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  is_admin: request.isAdmin,
  name: request.name,
  password: request.password,
})

export const marshalDeleteInstanceACLRulesRequest = (
  request: DeleteInstanceACLRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acl_rule_ips: request.aclRuleIps,
})

export const marshalDeleteInstanceSettingsRequest = (
  request: DeleteInstanceSettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  setting_names: request.settingNames,
})

export const marshalMigrateEndpointRequest = (
  request: MigrateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  instance_id: request.instanceId,
})

export const marshalPrepareInstanceLogsRequest = (
  request: PrepareInstanceLogsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  end_date: request.endDate,
  start_date: request.startDate,
})

export const marshalPurgeInstanceLogsRequest = (
  request: PurgeInstanceLogsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  log_name: request.logName,
})

export const marshalRestoreDatabaseBackupRequest = (
  request: RestoreDatabaseBackupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  database_name: request.databaseName,
  instance_id: request.instanceId,
})

export const marshalSetInstanceACLRulesRequest = (
  request: SetInstanceACLRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  rules: request.rules.map(elt => marshalACLRuleRequest(elt, defaults)),
})

export const marshalSetInstanceSettingsRequest = (
  request: SetInstanceSettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  settings: request.settings.map(elt => marshalInstanceSetting(elt, defaults)),
})

export const marshalSetPrivilegeRequest = (
  request: SetPrivilegeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  database_name: request.databaseName,
  permission: request.permission,
  user_name: request.userName,
})

export const marshalUpdateDatabaseBackupRequest = (
  request: UpdateDatabaseBackupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  expires_at: request.expiresAt,
  name: request.name,
})

const marshalLogsPolicy = (
  request: LogsPolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_age_retention: request.maxAgeRetention,
  total_disk_retention: request.totalDiskRetention,
})

export const marshalUpdateInstanceRequest = (
  request: UpdateInstanceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  backup_same_region: request.backupSameRegion,
  backup_schedule_frequency: request.backupScheduleFrequency,
  backup_schedule_retention: request.backupScheduleRetention,
  backup_schedule_start_hour: request.backupScheduleStartHour,
  is_backup_schedule_disabled: request.isBackupScheduleDisabled,
  logs_policy:
    request.logsPolicy !== undefined
      ? marshalLogsPolicy(request.logsPolicy, defaults)
      : undefined,
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
  is_admin: request.isAdmin,
  password: request.password,
})

const marshalUpgradeInstanceRequestMajorUpgradeWorkflow = (
  request: UpgradeInstanceRequestMajorUpgradeWorkflow,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  upgradable_version_id: request.upgradableVersionId,
  with_endpoints: request.withEndpoints,
})

export const marshalUpgradeInstanceRequest = (
  request: UpgradeInstanceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf<string | boolean | number | Record<string, unknown>>([
    { param: 'node_type', value: request.nodeType },
    { param: 'enable_ha', value: request.enableHa },
    { param: 'volume_size', value: request.volumeSize },
    { param: 'volume_type', value: request.volumeType },
    { param: 'upgradable_version_id', value: request.upgradableVersionId },
    {
      param: 'major_upgrade_workflow',
      value:
        request.majorUpgradeWorkflow !== undefined
          ? marshalUpgradeInstanceRequestMajorUpgradeWorkflow(
              request.majorUpgradeWorkflow,
              defaults,
            )
          : undefined,
    },
    { param: 'enable_encryption', value: request.enableEncryption },
  ]),
})
