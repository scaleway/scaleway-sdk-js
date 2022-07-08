// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateSSHKeyRequest,
  ListSSHKeysResponse,
  SSHKey,
  SSHKeyCreationInfo,
  UpdateSSHKeyRequest,
} from './types.gen'

const unmarshalSSHKeyCreationInfo = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SSHKeyCreationInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    countryCode: data.country_code,
    userAgent: data.user_agent,
  } as SSHKeyCreationInfo
}

export const unmarshalSSHKey = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SSHKey' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    creationInfo: data.creation_info
      ? unmarshalSSHKeyCreationInfo(data.creation_info)
      : undefined,
    fingerprint: data.fingerprint,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    publicKey: data.public_key,
    updatedAt: unmarshalDate(data.updated_at),
  } as SSHKey
}

export const unmarshalListSSHKeysResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSSHKeysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    sshKeys: unmarshalArrayOfObject(data.ssh_keys, unmarshalSSHKey),
    totalCount: data.total_count,
  } as ListSSHKeysResponse
}

export const marshalCreateSSHKeyRequest = (
  request: CreateSSHKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  public_key: request.publicKey,
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

export const marshalUpdateSSHKeyRequest = (
  request: UpdateSSHKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})
