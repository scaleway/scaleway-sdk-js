// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  CreateHumanRequest,
  Human,
  ListHumansResponse,
  RegisterRequest,
  RegisterResponse,
  UpdateHumanRequest,
} from './types.gen'

export const unmarshalHuman = (data: unknown): Human => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Human' failed as data isn't a dictionary.`,
    )
  }

  return {
    altitudeInMeter: data.altitude_in_meter,
    altitudeInMillimeter: data.altitude_in_millimeter,
    createdAt: unmarshalDate(data.created_at),
    eyesColor: data.eyes_color,
    fingersCount: data.fingers_count,
    hairCount: data.hair_count,
    height: data.height,
    id: data.id,
    isHappy: data.is_happy,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    shoeSize: data.shoe_size,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Human
}

export const unmarshalListHumansResponse = (
  data: unknown,
): ListHumansResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListHumansResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    humans: unmarshalArrayOfObject(data.humans, unmarshalHuman),
    totalCount: data.total_count,
  } as ListHumansResponse
}

export const unmarshalRegisterResponse = (data: unknown): RegisterResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RegisterResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    accessKey: data.access_key,
    secretKey: data.secret_key,
  } as RegisterResponse
}

export const marshalCreateHumanRequest = (
  request: CreateHumanRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  altitude_in_meter: request.altitudeInMeter,
  altitude_in_millimeter: request.altitudeInMillimeter,
  eyes_color: request.eyesColor,
  fingers_count: request.fingersCount,
  hair_count: request.hairCount,
  height: request.height,
  is_happy: request.isHappy,
  name: request.name,
  shoe_size: request.shoeSize,
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

export const marshalRegisterRequest = (
  request: RegisterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  username: request.username,
})

export const marshalUpdateHumanRequest = (
  request: UpdateHumanRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  altitude_in_meter: request.altitudeInMeter,
  altitude_in_millimeter: request.altitudeInMillimeter,
  eyes_color: request.eyesColor,
  fingers_count: request.fingersCount,
  hair_count: request.hairCount,
  height: request.height,
  is_happy: request.isHappy,
  name: request.name,
  shoe_size: request.shoeSize,
})
