import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  AccessSecretVersionResponse,
  AddSecretOwnerRequest,
  BrowseSecretsResponse,
  BrowseSecretsResponseItem,
  BrowseSecretsResponseItemFolderDetails,
  BrowseSecretsResponseItemSecretDetails,
  CreateSecretRequest,
  CreateSecretVersionRequest,
  EphemeralPolicy,
  EphemeralProperties,
  ListSecretsResponse,
  ListSecretTypesResponse,
  ListSecretVersionsResponse,
  ListTagsResponse,
  Secret,
  SecretVersion,
  UpdateSecretRequest,
  UpdateSecretVersionRequest,
} from './types.gen.js'

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
    deletedAt: unmarshalDate(data.deleted_at),
    deletionRequestedAt: unmarshalDate(data.deletion_requested_at),
    description: data.description,
    ephemeralProperties: data.ephemeral_properties
      ? unmarshalEphemeralProperties(data.ephemeral_properties)
      : undefined,
    latest: data.latest,
    revision: data.revision,
    secretId: data.secret_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as SecretVersion
}

const unmarshalEphemeralPolicy = (data: unknown): EphemeralPolicy => {
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
    deletionRequestedAt: unmarshalDate(data.deletion_requested_at),
    description: data.description,
    ephemeralPolicy: data.ephemeral_policy
      ? unmarshalEphemeralPolicy(data.ephemeral_policy)
      : undefined,
    id: data.id,
    keyId: data.key_id,
    managed: data.managed,
    name: data.name,
    path: data.path,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    status: data.status,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    usedBy: data.used_by,
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
    type: data.type,
  } as AccessSecretVersionResponse
}

const unmarshalBrowseSecretsResponseItemFolderDetails = (
  data: unknown,
): BrowseSecretsResponseItemFolderDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrowseSecretsResponseItemFolderDetails' failed as data isn't a dictionary.`,
    )
  }

  return {} as BrowseSecretsResponseItemFolderDetails
}

const unmarshalBrowseSecretsResponseItemSecretDetails = (
  data: unknown,
): BrowseSecretsResponseItemSecretDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrowseSecretsResponseItemSecretDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
    ephemeralPolicy: data.ephemeral_policy
      ? unmarshalEphemeralPolicy(data.ephemeral_policy)
      : undefined,
    id: data.id,
    protected: data.protected,
    tags: data.tags,
    type: data.type,
    versionCount: data.version_count,
  } as BrowseSecretsResponseItemSecretDetails
}

const unmarshalBrowseSecretsResponseItem = (
  data: unknown,
): BrowseSecretsResponseItem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrowseSecretsResponseItem' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    folder: data.folder
      ? unmarshalBrowseSecretsResponseItemFolderDetails(data.folder)
      : undefined,
    name: data.name,
    secret: data.secret
      ? unmarshalBrowseSecretsResponseItemSecretDetails(data.secret)
      : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as BrowseSecretsResponseItem
}

export const unmarshalBrowseSecretsResponse = (
  data: unknown,
): BrowseSecretsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrowseSecretsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    currentPath: data.current_path,
    items: unmarshalArrayOfObject(
      data.items,
      unmarshalBrowseSecretsResponseItem,
    ),
    totalCount: data.total_count,
  } as BrowseSecretsResponse
}

export const unmarshalListSecretTypesResponse = (
  data: unknown,
): ListSecretTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecretTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    types: data.types,
  } as ListSecretTypesResponse
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
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  product: request.product,
})

const marshalEphemeralPolicy = (
  request: EphemeralPolicy,
  _defaults: DefaultValues,
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
  key_id: request.keyId,
  name: request.name,
  path: request.path,
  project_id: request.projectId ?? defaults.defaultProjectId,
  protected: request.protected,
  tags: request.tags,
  type: request.type,
})

export const marshalCreateSecretVersionRequest = (
  request: CreateSecretVersionRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  data_crc32: request.dataCrc32,
  description: request.description,
  disable_previous: request.disablePrevious,
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
  _defaults: DefaultValues,
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
