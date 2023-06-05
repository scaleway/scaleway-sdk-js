// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreatePinByCIDRequest,
  CreatePinByURLRequest,
  CreateVolumeRequest,
  ListPinsResponse,
  ListVolumesResponse,
  Pin,
  PinCID,
  PinCIDMeta,
  PinInfo,
  PinOptions,
  ReplacePinRequest,
  ReplacePinResponse,
  UpdateVolumeRequest,
  Volume,
} from './types.gen'

const unmarshalPinCIDMeta = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PinCIDMeta' failed as data isn't a dictionary.`,
    )
  }

  return { appId: data.app_id, url: data.url } as PinCIDMeta
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

  return { statusDetails: data.status_details } as PinInfo
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
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Volume
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

const marshalPinCIDMeta = (
  request: PinCIDMeta,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  app_id: request.appId,
  url: request.url,
})

const marshalPinOptions = (
  request: PinOptions,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  replication_count: request.replicationCount,
  required_zones: request.requiredZones,
})

export const marshalCreatePinByCIDRequest = (
  request: CreatePinByCIDRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cid: request.cid,
  meta: request.meta ? marshalPinCIDMeta(request.meta, defaults) : undefined,
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

export const marshalReplacePinRequest = (
  request: ReplacePinRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cid: request.cid,
  meta: request.meta ? marshalPinCIDMeta(request.meta, defaults) : undefined,
  name: request.name,
  origins: request.origins,
  pin_options: request.pinOptions
    ? marshalPinOptions(request.pinOptions, defaults)
    : undefined,
  volume_id: request.volumeId,
})

export const marshalUpdateVolumeRequest = (
  request: UpdateVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})
