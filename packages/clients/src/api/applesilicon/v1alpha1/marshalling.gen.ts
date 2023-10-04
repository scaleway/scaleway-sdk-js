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
  Server,
  ServerType,
  ServerTypeCPU,
  ServerTypeDisk,
  ServerTypeMemory,
  UpdateServerRequest,
} from './types.gen'

export const unmarshalOS = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OS' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatibleServerTypes: data.compatible_server_types,
    id: data.id,
    imageUrl: data.image_url,
    label: data.label,
    name: data.name,
  } as OS
}

const unmarshalServerTypeMemory = (data: unknown) => {
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

const unmarshalServerTypeDisk = (data: unknown) => {
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

const unmarshalServerTypeCPU = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeCPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    coreCount: data.core_count,
    name: data.name,
  } as ServerTypeCPU
}

export const unmarshalServerType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerType' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpu: unmarshalServerTypeCPU(data.cpu),
    disk: unmarshalServerTypeDisk(data.disk),
    memory: unmarshalServerTypeMemory(data.memory),
    minimumLeaseDuration: data.minimum_lease_duration
      ? data.minimum_lease_duration
      : undefined,
    name: data.name,
    stock: data.stock,
  } as ServerType
}

export const unmarshalServer = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    deletableAt: unmarshalDate(data.deletable_at),
    id: data.id,
    ip: data.ip,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    status: data.status,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    vncUrl: data.vnc_url,
    zone: data.zone,
  } as Server
}

export const unmarshalListOSResponse = (data: unknown) => {
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

export const unmarshalListServerTypesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverTypes: unmarshalArrayOfObject(data.server_types, unmarshalServerType),
  } as ListServerTypesResponse
}

export const unmarshalListServersResponse = (data: unknown) => {
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
  project_id: request.projectId ?? defaults.defaultProjectId,
  type: request.type,
})

export const marshalUpdateServerRequest = (
  request: UpdateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})
