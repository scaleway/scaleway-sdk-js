// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type {
  Event,
  EventPrincipal,
  KubernetesACLInfo,
  KubernetesClusterInfo,
  KubernetesNodeInfo,
  KubernetesPoolInfo,
  ListEventsResponse,
  ListProductsResponse,
  Product,
  Resource,
  SecretManagerSecretInfo,
  SecretManagerSecretVersionInfo,
} from './types.gen'

const unmarshalKubernetesACLInfo = (data: unknown): KubernetesACLInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KubernetesACLInfo' failed as data isn't a dictionary.`,
    )
  }

  return {} as KubernetesACLInfo
}

const unmarshalKubernetesClusterInfo = (
  data: unknown,
): KubernetesClusterInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KubernetesClusterInfo' failed as data isn't a dictionary.`,
    )
  }

  return {} as KubernetesClusterInfo
}

const unmarshalKubernetesNodeInfo = (data: unknown): KubernetesNodeInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KubernetesNodeInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as KubernetesNodeInfo
}

const unmarshalKubernetesPoolInfo = (data: unknown): KubernetesPoolInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KubernetesPoolInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as KubernetesPoolInfo
}

const unmarshalSecretManagerSecretInfo = (
  data: unknown,
): SecretManagerSecretInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretManagerSecretInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    path: data.path,
  } as SecretManagerSecretInfo
}

const unmarshalSecretManagerSecretVersionInfo = (
  data: unknown,
): SecretManagerSecretVersionInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretManagerSecretVersionInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    revision: data.revision,
  } as SecretManagerSecretVersionInfo
}

const unmarshalEventPrincipal = (data: unknown): EventPrincipal => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EventPrincipal' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
  } as EventPrincipal
}

export const unmarshalResource = (data: unknown): Resource => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Resource' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    deletedAt: unmarshalDate(data.deleted_at),
    id: data.id,
    kubeAclInfo: data.kube_acl_info
      ? unmarshalKubernetesACLInfo(data.kube_acl_info)
      : undefined,
    kubeClusterInfo: data.kube_cluster_info
      ? unmarshalKubernetesClusterInfo(data.kube_cluster_info)
      : undefined,
    kubeNodeInfo: data.kube_node_info
      ? unmarshalKubernetesNodeInfo(data.kube_node_info)
      : undefined,
    kubePoolInfo: data.kube_pool_info
      ? unmarshalKubernetesPoolInfo(data.kube_pool_info)
      : undefined,
    name: data.name,
    secmSecretInfo: data.secm_secret_info
      ? unmarshalSecretManagerSecretInfo(data.secm_secret_info)
      : undefined,
    secmSecretVersionInfo: data.secm_secret_version_info
      ? unmarshalSecretManagerSecretVersionInfo(data.secm_secret_version_info)
      : undefined,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as Resource
}

export const unmarshalEvent = (data: unknown): Event => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Event' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    locality: data.locality,
    methodName: data.method_name,
    organizationId: data.organization_id,
    principal: data.principal
      ? unmarshalEventPrincipal(data.principal)
      : undefined,
    productName: data.product_name,
    projectId: data.project_id,
    recordedAt: unmarshalDate(data.recorded_at),
    requestBody: data.request_body,
    requestId: data.request_id,
    resource: data.resource ? unmarshalResource(data.resource) : undefined,
    serviceName: data.service_name,
    sourceIp: data.source_ip,
    statusCode: data.status_code,
    userAgent: data.user_agent,
  } as Event
}

export const unmarshalListEventsResponse = (
  data: unknown,
): ListEventsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListEventsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    events: unmarshalArrayOfObject(data.events, unmarshalEvent),
    nextPageToken: data.next_page_token,
  } as ListEventsResponse
}

const unmarshalProduct = (data: unknown): Product => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Product' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    title: data.title,
  } as Product
}

export const unmarshalListProductsResponse = (
  data: unknown,
): ListProductsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListProductsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    products: unmarshalArrayOfObject(data.products, unmarshalProduct),
    totalCount: data.total_count,
  } as ListProductsResponse
}