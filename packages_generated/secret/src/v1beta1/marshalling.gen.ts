// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, marshalBlobToScwFile, marshalDecimal, marshalMoney, marshalScwFile, marshalTimeSeries, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalDecimal, unmarshalMapOfObject, unmarshalMoney, unmarshalScwFile, unmarshalServiceInfo, unmarshalTimeSeries, unmarshalTimeSeriesPoint } from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, DefaultValues } from '@scaleway/sdk-client'
import type {
  EphemeralProperties,
  SecretVersion,
  EphemeralPolicy,
  Secret,
  AccessSecretVersionResponse,
  BrowseSecretsResponseItemFolderDetails,
  BrowseSecretsResponseItemSecretDetails,
  BrowseSecretsResponseItem,
  BrowseSecretsResponse,
  ListSecretTypesResponse,
  ListSecretVersionsResponse,
  ListSecretsResponse,
  ListTagsResponse,
  AddSecretOwnerRequest,
  CreateSecretRequest,
  CreateSecretVersionRequest,
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
    expiresAt: unmarshalDate(data.expires_at) ?? null,
    expiresOnceAccessed: data.expires_once_accessed ?? null,
  } as EphemeralProperties
}

export const unmarshalSecretVersion = (data: unknown): SecretVersion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at) ?? null,
    deletedAt: unmarshalDate(data.deleted_at) ?? null,
    deletionRequestedAt: unmarshalDate(data.deletion_requested_at) ?? null,
    description: data.description ?? null,
    ephemeralProperties: data.ephemeral_properties ? unmarshalEphemeralProperties(data.ephemeral_properties) : null,
    latest: data.latest,
    region: data.region,
    revision: data.revision,
    secretId: data.secret_id,
    srn: data.srn,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
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
    expiresOnceAccessed: data.expires_once_accessed ?? null,
    timeToLive: data.time_to_live ?? null,
  } as EphemeralPolicy
}

export const unmarshalSecret = (data: unknown): Secret => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Secret' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at) ?? null,
    deletionRequestedAt: unmarshalDate(data.deletion_requested_at) ?? null,
    description: data.description ?? null,
    ephemeralPolicy: data.ephemeral_policy ? unmarshalEphemeralPolicy(data.ephemeral_policy) : null,
    id: data.id,
    keyId: data.key_id ?? null,
    managed: data.managed,
    name: data.name,
    path: data.path,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    srn: data.srn,
    status: data.status,
    tags: data.tags,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
    usedBy: data.used_by,
    versionCount: data.version_count,
  } as Secret
}

export const unmarshalAccessSecretVersionResponse = (data: unknown): AccessSecretVersionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccessSecretVersionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    data: data.data,
    dataCrc32: data.data_crc32 ?? null,
    revision: data.revision,
    secretId: data.secret_id,
    type: data.type,
  } as AccessSecretVersionResponse
}

const unmarshalBrowseSecretsResponseItemFolderDetails = (data: unknown): BrowseSecretsResponseItemFolderDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrowseSecretsResponseItemFolderDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as BrowseSecretsResponseItemFolderDetails
}

const unmarshalBrowseSecretsResponseItemSecretDetails = (data: unknown): BrowseSecretsResponseItemSecretDetails => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrowseSecretsResponseItemSecretDetails' failed as data isn't a dictionary.`,
    )
  }

  return {
    ephemeralPolicy: data.ephemeral_policy ? unmarshalEphemeralPolicy(data.ephemeral_policy) : null,
    id: data.id,
    protected: data.protected,
    tags: data.tags,
    type: data.type,
    versionCount: data.version_count,
  } as BrowseSecretsResponseItemSecretDetails
}

const unmarshalBrowseSecretsResponseItem = (data: unknown): BrowseSecretsResponseItem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrowseSecretsResponseItem' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at) ?? null,
    folder: data.folder ? unmarshalBrowseSecretsResponseItemFolderDetails(data.folder) : null,
    name: data.name,
    secret: data.secret ? unmarshalBrowseSecretsResponseItemSecretDetails(data.secret) : null,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
  } as BrowseSecretsResponseItem
}

export const unmarshalBrowseSecretsResponse = (data: unknown): BrowseSecretsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrowseSecretsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    currentPath: data.current_path,
    items: unmarshalArrayOfObject(data.items, unmarshalBrowseSecretsResponseItem),
    totalCount: data.total_count,
  } as BrowseSecretsResponse
}

export const unmarshalListSecretTypesResponse = (data: unknown): ListSecretTypesResponse => {
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

export const unmarshalListSecretVersionsResponse = (data: unknown): ListSecretVersionsResponse => {
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

export const unmarshalListSecretsResponse = (data: unknown): ListSecretsResponse => {
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
})

const marshalEphemeralPolicy = (
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
  ephemeral_policy: ((request.ephemeralPolicy != null) ?  marshalEphemeralPolicy(request.ephemeralPolicy, defaults): undefined),
  key_id: request.keyId,
  name: request.name || randomName('secret'),
  path: request.path,
  project_id: request.projectId ?? defaults.defaultProjectId,
  protected: request.protected,
  tags: request.tags,
  type: request.type,
})

export const marshalCreateSecretVersionRequest = (
  request: CreateSecretVersionRequest,
  defaults: DefaultValues,
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
  ephemeral_policy: ((request.ephemeralPolicy != null) ?  marshalEphemeralPolicy(request.ephemeralPolicy, defaults): undefined),
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
  ephemeral_properties: ((request.ephemeralProperties != null) ?  marshalEphemeralProperties(request.ephemeralProperties, defaults): undefined),
})
