// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  AccessSecretVersionResponse,
  AddSecretOwnerRequest,
  CreateFolderRequest,
  CreateSecretRequest,
  CreateSecretVersionRequest,
  EphemeralPolicy,
  EphemeralProperties,
  Folder,
  GeneratePasswordRequest,
  ListFoldersResponse,
  ListSecretVersionsResponse,
  ListSecretsResponse,
  ListTagsResponse,
  PasswordGenerationParams,
  Secret,
  SecretVersion,
  UpdateSecretRequest,
  UpdateSecretVersionRequest,
} from './types.gen'

export const unmarshalFolder = (data: unknown): Folder => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Folder' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    path: data.path,
    projectId: data.project_id,
    region: data.region,
  } as Folder
}

const unmarshalEphemeralProperties = (data: unknown): EphemeralProperties => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EphemeralProperties' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    expiresAt: unmarshalDate(data.expires_at),
    expiresOnceAccessed: data.expires_once_accessed,
  } as EphemeralProperties
}

export const unmarshalSecretVersion = (data: unknown): SecretVersion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    ephemeralProperties: data.ephemeral_properties
      ? unmarshalEphemeralProperties(data.ephemeral_properties)
      : undefined,
    isLatest: data.is_latest,
    revision: data.revision,
    secretId: data.secret_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as SecretVersion
}

export const unmarshalEphemeralPolicy = (data: unknown): EphemeralPolicy => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EphemeralPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    expiresOnceAccessed: data.expires_once_accessed,
    timeToLive: data.time_to_live,
  } as EphemeralPolicy
}

export const unmarshalSecret = (data: unknown): Secret => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Secret' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    ephemeralPolicy: data.ephemeral_policy
      ? unmarshalEphemeralPolicy(data.ephemeral_policy)
      : undefined,
    id: data.id,
    isManaged: data.is_managed,
    isProtected: data.is_protected,
    name: data.name,
    path: data.path,
    projectId: data.project_id,
    region: data.region,
    status: data.status,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    versionCount: data.version_count,
  } as Secret
}

export const unmarshalAccessSecretVersionResponse = (
  data: unknown,
): AccessSecretVersionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccessSecretVersionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    data: data.data,
    dataCrc32: data.data_crc32,
    revision: data.revision,
    secretId: data.secret_id,
  } as AccessSecretVersionResponse
}

export const unmarshalListFoldersResponse = (
  data: unknown,
): ListFoldersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFoldersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    folders: unmarshalArrayOfObject(data.folders, unmarshalFolder),
    totalCount: data.total_count,
  } as ListFoldersResponse
}

export const unmarshalListSecretVersionsResponse = (
  data: unknown,
): ListSecretVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecretVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    versions: unmarshalArrayOfObject(data.versions, unmarshalSecretVersion),
  } as ListSecretVersionsResponse
}

export const unmarshalListSecretsResponse = (
  data: unknown,
): ListSecretsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecretsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    secrets: unmarshalArrayOfObject(data.secrets, unmarshalSecret),
    totalCount: data.total_count,
  } as ListSecretsResponse
}

export const unmarshalListTagsResponse = (data: unknown): ListTagsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTagsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    tags: data.tags,
    totalCount: data.total_count,
  } as ListTagsResponse
}

export const marshalAddSecretOwnerRequest = (
  request: AddSecretOwnerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  product: request.product,
  product_name: request.productName,
})

export const marshalCreateFolderRequest = (
  request: CreateFolderRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  path: request.path,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalEphemeralPolicy = (
  request: EphemeralPolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  expires_once_accessed: request.expiresOnceAccessed,
  time_to_live: request.timeToLive,
})

export const marshalCreateSecretRequest = (
  request: CreateSecretRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ephemeral_policy:
    request.ephemeralPolicy !== undefined
      ? marshalEphemeralPolicy(request.ephemeralPolicy, defaults)
      : undefined,
  is_protected: request.isProtected,
  name: request.name,
  path: request.path,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  type: request.type,
})

const marshalPasswordGenerationParams = (
  request: PasswordGenerationParams,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  additional_chars: request.additionalChars,
  length: request.length,
  no_digits: request.noDigits,
  no_lowercase_letters: request.noLowercaseLetters,
  no_uppercase_letters: request.noUppercaseLetters,
})

export const marshalCreateSecretVersionRequest = (
  request: CreateSecretVersionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  data_crc32: request.dataCrc32,
  description: request.description,
  disable_previous: request.disablePrevious,
  password_generation:
    request.passwordGeneration !== undefined
      ? marshalPasswordGenerationParams(request.passwordGeneration, defaults)
      : undefined,
})

export const marshalGeneratePasswordRequest = (
  request: GeneratePasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  additional_chars: request.additionalChars,
  description: request.description,
  disable_previous: request.disablePrevious,
  length: request.length,
  no_digits: request.noDigits,
  no_lowercase_letters: request.noLowercaseLetters,
  no_uppercase_letters: request.noUppercaseLetters,
})

export const marshalUpdateSecretRequest = (
  request: UpdateSecretRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ephemeral_policy:
    request.ephemeralPolicy !== undefined
      ? marshalEphemeralPolicy(request.ephemeralPolicy, defaults)
      : undefined,
  name: request.name,
  path: request.path,
  tags: request.tags,
})

const marshalEphemeralProperties = (
  request: EphemeralProperties,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  expires_at: request.expiresAt,
  expires_once_accessed: request.expiresOnceAccessed,
})

export const marshalUpdateSecretVersionRequest = (
  request: UpdateSecretVersionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ephemeral_properties:
    request.ephemeralProperties !== undefined
      ? marshalEphemeralProperties(request.ephemeralProperties, defaults)
      : undefined,
})
