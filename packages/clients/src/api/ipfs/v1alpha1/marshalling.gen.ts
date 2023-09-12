// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateNameRequest,
  CreatePinByCIDRequest,
  CreatePinByURLRequest,
  CreateVolumeRequest,
  ExportKeyNameResponse,
  ImportKeyNameRequest,
  ListNamesResponse,
  ListPinsResponse,
  ListVolumesResponse,
  Name,
  Pin,
  PinCID,
  PinCIDMeta,
  PinInfo,
  PinOptions,
  ReplacePinRequest,
  ReplacePinResponse,
  UpdateNameRequest,
  UpdateVolumeRequest,
  Volume,
} from './types.gen'

const unmarshalPinCIDMeta = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PinCIDMeta' failed as data isn't a dictionary.`,
    )
  }

  return { id: data.id } as PinCIDMeta
}

const unmarshalPinCID = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PinCID' failed as data isn't a dictionary.`,
    )
  }

  return {
    cid: data.cid,
    meta: data.meta ? unmarshalPinCIDMeta(data.meta) : undefined,
    name: data.name,
    origins: data.origins,
  } as PinCID
}

const unmarshalPinInfo = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PinInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    progress: data.progress,
    size: data.size,
    statusDetails: data.status_details,
    url: data.url,
  } as PinInfo
}

export const unmarshalName = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Name' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    key: data.key,
    name: data.name,
    nameId: data.name_id,
    projectId: data.project_id,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    value: data.value,
  } as Name
}

export const unmarshalPin = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Pin' failed as data isn't a dictionary.`,
    )
  }

  return {
    cid: data.cid ? unmarshalPinCID(data.cid) : undefined,
    createdAt: unmarshalDate(data.created_at),
    delegates: data.delegates,
    info: data.info ? unmarshalPinInfo(data.info) : undefined,
    pinId: data.pin_id,
    status: data.status,
  } as Pin
}

export const unmarshalVolume = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Volume' failed as data isn't a dictionary.`,
    )
  }

  return {
    countPin: data.count_pin,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    projectId: data.project_id,
    region: data.region,
    size: data.size,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Volume
}

export const unmarshalExportKeyNameResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExportKeyNameResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    nameId: data.name_id,
    privateKey: data.private_key,
    projectId: data.project_id,
    publicKey: data.public_key,
    updatedAt: unmarshalDate(data.updated_at),
  } as ExportKeyNameResponse
}

export const unmarshalListNamesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNamesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    names: unmarshalArrayOfObject(data.names, unmarshalName),
    totalCount: data.total_count,
  } as ListNamesResponse
}

export const unmarshalListPinsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPinsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pins: unmarshalArrayOfObject(data.pins, unmarshalPin),
    totalCount: data.total_count,
  } as ListPinsResponse
}

export const unmarshalListVolumesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVolumesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    volumes: unmarshalArrayOfObject(data.volumes, unmarshalVolume),
  } as ListVolumesResponse
}

export const unmarshalReplacePinResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ReplacePinResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pin: data.pin ? unmarshalPin(data.pin) : undefined,
  } as ReplacePinResponse
}

const marshalPinOptions = (
  request: PinOptions,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  replication_count: request.replicationCount,
  required_zones: request.requiredZones,
})

export const marshalCreateNameRequest = (
  request: CreateNameRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  value: request.value,
})

export const marshalCreatePinByCIDRequest = (
  request: CreatePinByCIDRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cid: request.cid,
  name: request.name,
  origins: request.origins,
  pin_options: request.pinOptions
    ? marshalPinOptions(request.pinOptions, defaults)
    : undefined,
  volume_id: request.volumeId,
})

export const marshalCreatePinByURLRequest = (
  request: CreatePinByURLRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  pin_options: request.pinOptions
    ? marshalPinOptions(request.pinOptions, defaults)
    : undefined,
  url: request.url,
  volume_id: request.volumeId,
})

export const marshalCreateVolumeRequest = (
  request: CreateVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalImportKeyNameRequest = (
  request: ImportKeyNameRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  private_key: request.privateKey,
  project_id: request.projectId ?? defaults.defaultProjectId,
  value: request.value,
})

export const marshalReplacePinRequest = (
  request: ReplacePinRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cid: request.cid,
  name: request.name,
  origins: request.origins,
  pin_options: request.pinOptions
    ? marshalPinOptions(request.pinOptions, defaults)
    : undefined,
  volume_id: request.volumeId,
})

export const marshalUpdateNameRequest = (
  request: UpdateNameRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
  value: request.value,
})

export const marshalUpdateVolumeRequest = (
  request: UpdateVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})
