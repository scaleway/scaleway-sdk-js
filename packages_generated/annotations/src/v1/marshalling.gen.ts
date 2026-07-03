
import { isJSONObject, unmarshalArrayOfObject, } from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  BindingKey,
  BindingValue,
  Binding,
  Key,
  Value,
  DeleteAllBindingsMatchingSRNResponse,
  DeleteAllBindingsMatchingValueResponse,
  DeleteAllValuesMatchingKeyResponse,
  ListAllKeysAndValuesResponseValue,
  ListAllKeysAndValuesResponseKey,
  ListAllKeysAndValuesResponse,
  ListBindingsResponse,
  ListKeysResponse,
  ListValuesResponse,
  CreateBindingRequest,
  CreateKeyRequest,
  CreateValueRequest,
  UpdateKeyRequest,
  UpdateValueRequest,
} from './types.gen.js'

const unmarshalBindingKey = (data: unknown): BindingKey => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BindingKey' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as BindingKey
}

const unmarshalBindingValue = (data: unknown): BindingValue => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BindingValue' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as BindingValue
}

export const unmarshalBinding = (data: unknown): Binding => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Binding' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    key: data.key ? unmarshalBindingKey(data.key) : undefined,
    srn: data.srn,
    value: data.value ? unmarshalBindingValue(data.value) : undefined,
  } as Binding
}

export const unmarshalKey = (data: unknown): Key => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Key' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    name: data.name,
  } as Key
}

export const unmarshalValue = (data: unknown): Value => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Value' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    keyId: data.key_id,
    name: data.name,
  } as Value
}

export const unmarshalDeleteAllBindingsMatchingSRNResponse = (data: unknown): DeleteAllBindingsMatchingSRNResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteAllBindingsMatchingSRNResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalDeleted: data.total_deleted,
  } as DeleteAllBindingsMatchingSRNResponse
}

export const unmarshalDeleteAllBindingsMatchingValueResponse = (data: unknown): DeleteAllBindingsMatchingValueResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteAllBindingsMatchingValueResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalDeleted: data.total_deleted,
  } as DeleteAllBindingsMatchingValueResponse
}

export const unmarshalDeleteAllValuesMatchingKeyResponse = (data: unknown): DeleteAllValuesMatchingKeyResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteAllValuesMatchingKeyResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalDeleted: data.total_deleted,
  } as DeleteAllValuesMatchingKeyResponse
}

const unmarshalListAllKeysAndValuesResponseValue = (data: unknown): ListAllKeysAndValuesResponseValue => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAllKeysAndValuesResponseValue' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    name: data.name,
  } as ListAllKeysAndValuesResponseValue
}

const unmarshalListAllKeysAndValuesResponseKey = (data: unknown): ListAllKeysAndValuesResponseKey => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAllKeysAndValuesResponseKey' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    name: data.name,
    values: unmarshalArrayOfObject(data.values, unmarshalListAllKeysAndValuesResponseValue),
  } as ListAllKeysAndValuesResponseKey
}

export const unmarshalListAllKeysAndValuesResponse = (data: unknown): ListAllKeysAndValuesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAllKeysAndValuesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    keys: unmarshalArrayOfObject(data.keys, unmarshalListAllKeysAndValuesResponseKey),
  } as ListAllKeysAndValuesResponse
}

export const unmarshalListBindingsResponse = (data: unknown): ListBindingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBindingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    bindings: unmarshalArrayOfObject(data.bindings, unmarshalBinding),
    totalCount: data.total_count,
  } as ListBindingsResponse
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

export const unmarshalListValuesResponse = (data: unknown): ListValuesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListValuesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    values: unmarshalArrayOfObject(data.values, unmarshalValue),
  } as ListValuesResponse
}

export const marshalCreateBindingRequest = (
  request: CreateBindingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  srn: request.srn,
  value_id: request.valueId,
})

export const marshalCreateKeyRequest = (
  request: CreateKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
})

export const marshalCreateValueRequest = (
  request: CreateValueRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  key_id: request.keyId,
  name: request.name,
})

export const marshalUpdateKeyRequest = (
  request: UpdateKeyRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
})

export const marshalUpdateValueRequest = (
  request: UpdateValueRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
})
