// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateCredentialRequest,
  CreateNamespaceRequest,
  Credential,
  CredentialNATSCredsFile,
  CredentialSQSSNSCreds,
  CredentialSummary,
  CredentialSummarySQSSNSCreds,
  ListCredentialsResponse,
  ListNamespacesResponse,
  Namespace,
  Permissions,
  UpdateCredentialRequest,
  UpdateNamespaceRequest,
} from './types.gen'

export const unmarshalNamespace = (data: unknown): Namespace => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Namespace' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    endpoint: data.endpoint,
    id: data.id,
    name: data.name,
    projectId: data.project_id,
    protocol: data.protocol,
    region: data.region,
    updatedAt: unmarshalDate(data.updated_at),
  } as Namespace
}

const unmarshalPermissions = (data: unknown): Permissions => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Permissions' failed as data isn't a dictionary.`,
    )
  }

  return {
    canManage: data.can_manage,
    canPublish: data.can_publish,
    canReceive: data.can_receive,
  } as Permissions
}

const unmarshalCredentialNATSCredsFile = (
  data: unknown,
): CredentialNATSCredsFile => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CredentialNATSCredsFile' failed as data isn't a dictionary.`,
    )
  }

  return {
    content: data.content,
  } as CredentialNATSCredsFile
}

const unmarshalCredentialSQSSNSCreds = (
  data: unknown,
): CredentialSQSSNSCreds => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CredentialSQSSNSCreds' failed as data isn't a dictionary.`,
    )
  }

  return {
    accessKey: data.access_key,
    permissions: unmarshalPermissions(data.permissions),
    secretKey: data.secret_key,
  } as CredentialSQSSNSCreds
}

export const unmarshalCredential = (data: unknown): Credential => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Credential' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
    namespaceId: data.namespace_id,
    natsCredentials: data.nats_credentials
      ? unmarshalCredentialNATSCredsFile(data.nats_credentials)
      : undefined,
    protocol: data.protocol,
    sqsSnsCredentials: data.sqs_sns_credentials
      ? unmarshalCredentialSQSSNSCreds(data.sqs_sns_credentials)
      : undefined,
  } as Credential
}

const unmarshalCredentialSummarySQSSNSCreds = (
  data: unknown,
): CredentialSummarySQSSNSCreds => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CredentialSummarySQSSNSCreds' failed as data isn't a dictionary.`,
    )
  }

  return {
    accessKey: data.access_key,
    permissions: unmarshalPermissions(data.permissions),
  } as CredentialSummarySQSSNSCreds
}

const unmarshalCredentialSummary = (data: unknown): CredentialSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CredentialSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
    namespaceId: data.namespace_id,
    protocol: data.protocol,
    sqsSnsCredentials: data.sqs_sns_credentials
      ? unmarshalCredentialSummarySQSSNSCreds(data.sqs_sns_credentials)
      : undefined,
  } as CredentialSummary
}

export const unmarshalListCredentialsResponse = (
  data: unknown,
): ListCredentialsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListCredentialsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    credentials: unmarshalArrayOfObject(
      data.credentials,
      unmarshalCredentialSummary,
    ),
    totalCount: data.total_count,
  } as ListCredentialsResponse
}

export const unmarshalListNamespacesResponse = (
  data: unknown,
): ListNamespacesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNamespacesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    namespaces: unmarshalArrayOfObject(data.namespaces, unmarshalNamespace),
    totalCount: data.total_count,
  } as ListNamespacesResponse
}

const marshalPermissions = (
  request: Permissions,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  can_manage: request.canManage,
  can_publish: request.canPublish,
  can_receive: request.canReceive,
})

export const marshalCreateCredentialRequest = (
  request: CreateCredentialRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('mnq'),
  namespace_id: request.namespaceId,
  permissions:
    request.permissions !== undefined
      ? marshalPermissions(request.permissions, defaults)
      : undefined,
})

export const marshalCreateNamespaceRequest = (
  request: CreateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('mnq'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  protocol: request.protocol,
})

export const marshalUpdateCredentialRequest = (
  request: UpdateCredentialRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  permissions:
    request.permissions !== undefined
      ? marshalPermissions(request.permissions, defaults)
      : undefined,
})

export const marshalUpdateNamespaceRequest = (
  request: UpdateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  namespace_id: request.namespaceId,
})
