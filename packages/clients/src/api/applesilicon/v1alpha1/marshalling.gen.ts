// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateServerRequest,
  ListOSResponse,
  ListServerTypesResponse,
  ListServersResponse,
  OS,
  ReinstallServerRequest,
  Server,
  ServerType,
  ServerTypeCPU,
  ServerTypeDisk,
  ServerTypeGPU,
  ServerTypeMemory,
  ServerTypeNetwork,
  UpdateServerRequest,
} from './types.gen'

export const unmarshalOS = (data: unknown): OS => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OS' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatibleServerTypes: data.compatible_server_types,
    family: data.family,
    id: data.id,
    imageUrl: data.image_url,
    isBeta: data.is_beta,
    label: data.label,
    name: data.name,
    version: data.version,
    xcodeVersion: data.xcode_version,
  } as OS
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

const unmarshalServerTypeNetwork = (data: unknown): ServerTypeNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    publicBandwidthBps: data.public_bandwidth_bps,
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
    stock: data.stock,
  } as ServerType
}

export const unmarshalServer = (data: unknown): Server => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    deletableAt: unmarshalDate(data.deletable_at),
    deletionScheduled: data.deletion_scheduled,
    id: data.id,
    ip: data.ip,
    name: data.name,
    organizationId: data.organization_id,
    os: data.os ? unmarshalOS(data.os) : undefined,
    projectId: data.project_id,
    sshUsername: data.ssh_username,
    status: data.status,
    sudoPassword: data.sudo_password,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    vncUrl: data.vnc_url,
    zone: data.zone,
  } as Server
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

export const marshalCreateServerRequest = (
  request: CreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('as'),
  os_id: request.osId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  type: request.type,
})

export const marshalReinstallServerRequest = (
  request: ReinstallServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  os_id: request.osId,
})

export const marshalUpdateServerRequest = (
  request: UpdateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  schedule_deletion: request.scheduleDeletion,
})
