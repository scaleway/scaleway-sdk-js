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
  CreateKeyRequest,
  DataKey,
  DecryptRequest,
  DecryptResponse,
  EncryptRequest,
  EncryptResponse,
  GenerateDataKeyRequest,
  Key,
  KeyRotationPolicy,
  KeyUsage,
  ListKeysResponse,
  UpdateKeyRequest,
} from './types.gen'

const unmarshalKeyRotationPolicy = (data: unknown): KeyRotationPolicy => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KeyRotationPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextRotationAt: unmarshalDate(data.next_rotation_at),
    rotationPeriod: data.rotation_period,
  } as KeyRotationPolicy
}

const unmarshalKeyUsage = (data: unknown): KeyUsage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KeyUsage' failed as data isn't a dictionary.`,
    )
  }

  return {
    symmetricEncryption: data.symmetric_encryption
      ? data.symmetric_encryption
      : undefined,
  } as KeyUsage
}

export const unmarshalKey = (data: unknown): Key => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Key' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    id: data.id,
    locked: data.locked,
    name: data.name,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    rotatedAt: unmarshalDate(data.rotated_at),
    rotationCount: data.rotation_count,
    rotationPolicy: data.rotation_policy
      ? unmarshalKeyRotationPolicy(data.rotation_policy)
      : undefined,
    state: data.state,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    usage: data.usage ? unmarshalKeyUsage(data.usage) : undefined,
  } as Key
}

export const unmarshalDataKey = (data: unknown): DataKey => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DataKey' failed as data isn't a dictionary.`,
    )
  }

  return {
    algorithm: data.algorithm,
    ciphertext: data.ciphertext,
    createdAt: unmarshalDate(data.created_at),
    keyId: data.key_id,
    plaintext: data.plaintext,
  } as DataKey
}

export const unmarshalDecryptResponse = (data: unknown): DecryptResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DecryptResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ciphertext: data.ciphertext,
    keyId: data.key_id,
    plaintext: data.plaintext,
  } as DecryptResponse
}

export const unmarshalEncryptResponse = (data: unknown): EncryptResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EncryptResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ciphertext: data.ciphertext,
    keyId: data.key_id,
  } as EncryptResponse
}

export const unmarshalListKeysResponse = (data: unknown): ListKeysResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListKeysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    keys: unmarshalArrayOfObject(data.keys, unmarshalKey),
    totalCount: data.total_count,
  } as ListKeysResponse
}

const marshalKeyRotationPolicy = (
  request: KeyRotationPolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  next_rotation_at: request.nextRotationAt,
  rotation_period: request.rotationPeriod,
})

const marshalKeyUsage = (
  request: KeyUsage,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'symmetric_encryption', value: request.symmetricEncryption },
  ]),
})

export const marshalCreateKeyRequest = (
  request: CreateKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  rotation_policy:
    request.rotationPolicy !== undefined
      ? marshalKeyRotationPolicy(request.rotationPolicy, defaults)
      : undefined,
  tags: request.tags,
  unprotected: request.unprotected,
  usage:
    request.usage !== undefined
      ? marshalKeyUsage(request.usage, defaults)
      : undefined,
})

export const marshalDecryptRequest = (
  request: DecryptRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  associated_data: request.associatedData,
  ciphertext: request.ciphertext,
})

export const marshalEncryptRequest = (
  request: EncryptRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  associated_data: request.associatedData,
  plaintext: request.plaintext,
})

export const marshalGenerateDataKeyRequest = (
  request: GenerateDataKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  algorithm: request.algorithm,
  without_plaintext: request.withoutPlaintext,
})

export const marshalUpdateKeyRequest = (
  request: UpdateKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  rotation_policy:
    request.rotationPolicy !== undefined
      ? marshalKeyRotationPolicy(request.rotationPolicy, defaults)
      : undefined,
  tags: request.tags,
})
