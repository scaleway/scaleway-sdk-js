// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  BatchCreateServersRequest,
  BatchCreateServersRequestBatchInnerCreateServerRequest,
  BatchCreateServersResponse,
  Commitment,
  CommitmentTypeValue,
  ConnectivityDiagnostic,
  ConnectivityDiagnosticServerHealth,
  CreateServerRequest,
  ListOSResponse,
  ListServerPrivateNetworksResponse,
  ListServersResponse,
  ListServerTypesResponse,
  OS,
  OSSupportedServerType,
  PrivateNetworkApiAddServerPrivateNetworkRequest,
  PrivateNetworkApiSetServerPrivateNetworksRequest,
  ReinstallServerRequest,
  RunnerConfiguration,
  Server,
  ServerPrivateNetwork,
  ServerType,
  ServerTypeCPU,
  ServerTypeDisk,
  ServerTypeGPU,
  ServerTypeMemory,
  ServerTypeNetwork,
  ServerTypeNPU,
  SetServerPrivateNetworksResponse,
  StartConnectivityDiagnosticRequest,
  StartConnectivityDiagnosticResponse,
  UpdateServerRequest,
} from './types.gen.js'

const unmarshalOSSupportedServerType = (
  data: unknown,
): OSSupportedServerType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OSSupportedServerType' failed as data isn't a dictionary.`,
    )
  }

  return {
    fastDeliveryAvailable: data.fast_delivery_available,
    serverType: data.server_type,
  } as OSSupportedServerType
}

export const unmarshalOS = (data: unknown): OS => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OS' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatibleServerTypes: data.compatible_server_types
      ? data.compatible_server_types
      : undefined,
    description: data.description,
    family: data.family,
    id: data.id,
    imageUrl: data.image_url,
    isBeta: data.is_beta,
    label: data.label,
    name: data.name,
    releaseNotesUrl: data.release_notes_url,
    supportedServerTypes: unmarshalArrayOfObject(
      data.supported_server_types,
      unmarshalOSSupportedServerType,
    ),
    tags: data.tags,
    version: data.version,
    xcodeVersion: data.xcode_version,
  } as OS
}

const unmarshalCommitment = (data: unknown): Commitment => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Commitment' failed as data isn't a dictionary.`,
    )
  }

  return {
    cancelled: data.cancelled,
    type: data.type,
  } as Commitment
}

const unmarshalRunnerConfiguration = (data: unknown): RunnerConfiguration => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RunnerConfiguration' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    provider: data.provider,
    token: data.token,
    url: data.url,
  } as RunnerConfiguration
}

export const unmarshalServer = (data: unknown): Server => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    commitment: data.commitment
      ? unmarshalCommitment(data.commitment)
      : undefined,
    createdAt: unmarshalDate(data.created_at),
    deletableAt: unmarshalDate(data.deletable_at),
    deletionScheduled: data.deletion_scheduled,
    delivered: data.delivered,
    id: data.id,
    ip: data.ip,
    name: data.name,
    organizationId: data.organization_id,
    os: data.os ? unmarshalOS(data.os) : undefined,
    projectId: data.project_id,
    publicBandwidthBps: data.public_bandwidth_bps,
    runnerConfiguration: data.runner_configuration
      ? unmarshalRunnerConfiguration(data.runner_configuration)
      : undefined,
    sshUsername: data.ssh_username,
    status: data.status,
    sudoPassword: data.sudo_password,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    vncPort: data.vnc_port,
    vncUrl: data.vnc_url,
    vpcStatus: data.vpc_status,
    zone: data.zone,
  } as Server
}

export const unmarshalServerPrivateNetwork = (
  data: unknown,
): ServerPrivateNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerPrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    ipamIpIds: data.ipam_ip_ids,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    serverId: data.server_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    vlan: data.vlan,
  } as ServerPrivateNetwork
}

const unmarshalServerTypeCPU = (data: unknown): ServerTypeCPU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeCPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    coreCount: data.core_count,
    frequency: data.frequency,
    name: data.name,
    sockets: data.sockets,
    threadsPerCore: data.threads_per_core,
  } as ServerTypeCPU
}

const unmarshalServerTypeDisk = (data: unknown): ServerTypeDisk => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeDisk' failed as data isn't a dictionary.`,
    )
  }

  return {
    capacity: data.capacity,
    type: data.type,
  } as ServerTypeDisk
}

const unmarshalServerTypeGPU = (data: unknown): ServerTypeGPU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeGPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    count: data.count,
  } as ServerTypeGPU
}

const unmarshalServerTypeMemory = (data: unknown): ServerTypeMemory => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeMemory' failed as data isn't a dictionary.`,
    )
  }

  return {
    capacity: data.capacity,
    type: data.type,
  } as ServerTypeMemory
}

const unmarshalServerTypeNPU = (data: unknown): ServerTypeNPU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeNPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    count: data.count,
  } as ServerTypeNPU
}

const unmarshalServerTypeNetwork = (data: unknown): ServerTypeNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    defaultPublicBandwidth: data.default_public_bandwidth,
    publicBandwidthBps: data.public_bandwidth_bps,
    supportedBandwidth: data.supported_bandwidth,
  } as ServerTypeNetwork
}

export const unmarshalServerType = (data: unknown): ServerType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerType' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpu: data.cpu ? unmarshalServerTypeCPU(data.cpu) : undefined,
    defaultOs: data.default_os ? unmarshalOS(data.default_os) : undefined,
    disk: data.disk ? unmarshalServerTypeDisk(data.disk) : undefined,
    gpu: data.gpu ? unmarshalServerTypeGPU(data.gpu) : undefined,
    memory: data.memory ? unmarshalServerTypeMemory(data.memory) : undefined,
    minimumLeaseDuration: data.minimum_lease_duration,
    name: data.name,
    network: data.network
      ? unmarshalServerTypeNetwork(data.network)
      : undefined,
    npu: data.npu ? unmarshalServerTypeNPU(data.npu) : undefined,
    stock: data.stock,
  } as ServerType
}

export const unmarshalBatchCreateServersResponse = (
  data: unknown,
): BatchCreateServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BatchCreateServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalServer),
  } as BatchCreateServersResponse
}

const unmarshalConnectivityDiagnosticServerHealth = (
  data: unknown,
): ConnectivityDiagnosticServerHealth => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ConnectivityDiagnosticServerHealth' failed as data isn't a dictionary.`,
    )
  }

  return {
    isAgentAlive: data.is_agent_alive,
    isMdmAlive: data.is_mdm_alive,
    isServerAlive: data.is_server_alive,
    isSshPortUp: data.is_ssh_port_up,
    isVncPortUp: data.is_vnc_port_up,
    lastCheckinDate: unmarshalDate(data.last_checkin_date),
  } as ConnectivityDiagnosticServerHealth
}

export const unmarshalConnectivityDiagnostic = (
  data: unknown,
): ConnectivityDiagnostic => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ConnectivityDiagnostic' failed as data isn't a dictionary.`,
    )
  }

  return {
    errorMessage: data.error_message,
    healthDetails: data.health_details
      ? unmarshalConnectivityDiagnosticServerHealth(data.health_details)
      : undefined,
    id: data.id,
    isHealthy: data.is_healthy,
    status: data.status,
    supportedActions: data.supported_actions,
  } as ConnectivityDiagnostic
}

export const unmarshalListOSResponse = (data: unknown): ListOSResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListOSResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    os: unmarshalArrayOfObject(data.os, unmarshalOS),
    totalCount: data.total_count,
  } as ListOSResponse
}

export const unmarshalListServerPrivateNetworksResponse = (
  data: unknown,
): ListServerPrivateNetworksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverPrivateNetworks: unmarshalArrayOfObject(
      data.server_private_networks,
      unmarshalServerPrivateNetwork,
    ),
    totalCount: data.total_count,
  } as ListServerPrivateNetworksResponse
}

export const unmarshalListServerTypesResponse = (
  data: unknown,
): ListServerTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverTypes: unmarshalArrayOfObject(data.server_types, unmarshalServerType),
  } as ListServerTypesResponse
}

export const unmarshalListServersResponse = (
  data: unknown,
): ListServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalServer),
    totalCount: data.total_count,
  } as ListServersResponse
}

export const unmarshalSetServerPrivateNetworksResponse = (
  data: unknown,
): SetServerPrivateNetworksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetServerPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverPrivateNetworks: unmarshalArrayOfObject(
      data.server_private_networks,
      unmarshalServerPrivateNetwork,
    ),
  } as SetServerPrivateNetworksResponse
}

export const unmarshalStartConnectivityDiagnosticResponse = (
  data: unknown,
): StartConnectivityDiagnosticResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'StartConnectivityDiagnosticResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    diagnosticId: data.diagnostic_id,
  } as StartConnectivityDiagnosticResponse
}

const marshalBatchCreateServersRequestBatchInnerCreateServerRequest = (
  request: BatchCreateServersRequestBatchInnerCreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

export const marshalBatchCreateServersRequest = (
  request: BatchCreateServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  commitment_type: request.commitmentType,
  enable_vpc: request.enableVpc,
  os_id: request.osId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  public_bandwidth_bps: request.publicBandwidthBps,
  requests:
    request.requests !== undefined
      ? request.requests.map(elt =>
          marshalBatchCreateServersRequestBatchInnerCreateServerRequest(
            elt,
            defaults,
          ),
        )
      : undefined,
  type: request.type,
})

const marshalRunnerConfiguration = (
  request: RunnerConfiguration,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  provider: request.provider,
  token: request.token,
  url: request.url,
})

export const marshalCreateServerRequest = (
  request: CreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  commitment_type: request.commitmentType,
  enable_vpc: request.enableVpc,
  name: request.name || randomName('as'),
  os_id: request.osId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  public_bandwidth_bps: request.publicBandwidthBps,
  runner_configuration:
    request.runnerConfiguration !== undefined
      ? marshalRunnerConfiguration(request.runnerConfiguration, defaults)
      : undefined,
  type: request.type,
})

export const marshalPrivateNetworkApiAddServerPrivateNetworkRequest = (
  request: PrivateNetworkApiAddServerPrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ipam_ip_ids: request.ipamIpIds,
  private_network_id: request.privateNetworkId,
})

export const marshalPrivateNetworkApiSetServerPrivateNetworksRequest = (
  request: PrivateNetworkApiSetServerPrivateNetworksRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  per_private_network_ipam_ip_ids: request.perPrivateNetworkIpamIpIds,
})

export const marshalReinstallServerRequest = (
  request: ReinstallServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  os_id: request.osId,
  runner_configuration:
    request.runnerConfiguration !== undefined
      ? marshalRunnerConfiguration(request.runnerConfiguration, defaults)
      : undefined,
})

export const marshalStartConnectivityDiagnosticRequest = (
  request: StartConnectivityDiagnosticRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  server_id: request.serverId,
})

const marshalCommitmentTypeValue = (
  request: CommitmentTypeValue,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  commitment_type: request.commitmentType,
})

export const marshalUpdateServerRequest = (
  request: UpdateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  commitment_type:
    request.commitmentType !== undefined
      ? marshalCommitmentTypeValue(request.commitmentType, defaults)
      : undefined,
  enable_vpc: request.enableVpc,
  name: request.name,
  public_bandwidth_bps: request.publicBandwidthBps,
  schedule_deletion: request.scheduleDeletion,
})
