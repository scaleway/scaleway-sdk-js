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
  AccessSecretVersionResponse,
  AddSecretOwnerRequest,
  CreateFolderRequest,
  CreateSecretRequest,
  CreateSecretVersionRequest,
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

export const unmarshalFolder = (data: unknown) => {
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

export const unmarshalSecret = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Secret' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    ephemeralAction: data.ephemeral_action,
    expiresAt: unmarshalDate(data.expires_at),
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

export const unmarshalSecretVersion = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    isLatest: data.is_latest,
    revision: data.revision,
    secretId: data.secret_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as SecretVersion
}

export const unmarshalAccessSecretVersionResponse = (data: unknown) => {
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

export const unmarshalListFoldersResponse = (data: unknown) => {
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

export const unmarshalListSecretVersionsResponse = (data: unknown) => {
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

export const unmarshalListSecretsResponse = (data: unknown) => {
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

export const unmarshalListTagsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTagsResponse' failed as data isn't a dictionary.`,
    )
  }

  return { tags: data.tags, totalCount: data.total_count } as ListTagsResponse
}

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

export const marshalAddSecretOwnerRequest = (
  request: AddSecretOwnerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  product: request.product ?? 'unknown',
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

export const marshalCreateSecretRequest = (
  request: CreateSecretRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ephemeral_action: request.ephemeralAction ?? 'unknown_ephemeral_action',
  expires_at: request.expiresAt,
  name: request.name,
  path: request.path,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  type: request.type ?? 'unknown_secret_type',
})

export const marshalCreateSecretVersionRequest = (
  request: CreateSecretVersionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  data_crc32: request.dataCrc32,
  description: request.description,
  disable_previous: request.disablePrevious,
  ...resolveOneOf([
    {
      param: 'password_generation',
      value: request.passwordGeneration
        ? marshalPasswordGenerationParams(request.passwordGeneration, defaults)
        : undefined,
    },
  ]),
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
  name: request.name,
  path: request.path,
  tags: request.tags,
})

export const marshalUpdateSecretVersionRequest = (
  request: UpdateSecretVersionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
})
