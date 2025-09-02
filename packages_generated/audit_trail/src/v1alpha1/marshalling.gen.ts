// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  AccountOrganizationInfo,
  AccountProjectInfo,
  AccountUserInfo,
  AppleSiliconServerInfo,
  BaremetalServerInfo,
  BaremetalSettingInfo,
  Event,
  EventPrincipal,
  EventSystem,
  InstanceServerInfo,
  IpamIpInfo,
  KeyManagerKeyInfo,
  KubernetesACLInfo,
  KubernetesClusterInfo,
  KubernetesNodeInfo,
  KubernetesPoolInfo,
  ListEventsResponse,
  ListProductsResponse,
  Product,
  ProductService,
  Resource,
  SecretManagerSecretInfo,
  SecretManagerSecretVersionInfo,
} from './types.gen'

const unmarshalAccountOrganizationInfo = (
  data: unknown,
): AccountOrganizationInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccountOrganizationInfo' failed as data isn't a dictionary.`,
    )
  }

  return {} as AccountOrganizationInfo
}

const unmarshalAccountProjectInfo = (data: unknown): AccountProjectInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccountProjectInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
  } as AccountProjectInfo
}

const unmarshalAccountUserInfo = (data: unknown): AccountUserInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccountUserInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    email: data.email,
    phoneNumber: data.phone_number,
  } as AccountUserInfo
}

const unmarshalAppleSiliconServerInfo = (
  data: unknown,
): AppleSiliconServerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AppleSiliconServerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as AppleSiliconServerInfo
}

const unmarshalBaremetalServerInfo = (data: unknown): BaremetalServerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BaremetalServerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    tags: data.tags,
  } as BaremetalServerInfo
}

const unmarshalBaremetalSettingInfo = (data: unknown): BaremetalSettingInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BaremetalSettingInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    type: data.type,
  } as BaremetalSettingInfo
}

const unmarshalInstanceServerInfo = (data: unknown): InstanceServerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InstanceServerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
  } as InstanceServerInfo
}

const unmarshalIpamIpInfo = (data: unknown): IpamIpInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'IpamIpInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
  } as IpamIpInfo
}

const unmarshalKeyManagerKeyInfo = (data: unknown): KeyManagerKeyInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'KeyManagerKeyInfo' failed as data isn't a dictionary.`,
    )
  }

  return {} as KeyManagerKeyInfo
}

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
    keyId: data.key_id,
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

const unmarshalEventSystem = (data: unknown): EventSystem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EventSystem' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
  } as EventSystem
}

export const unmarshalResource = (data: unknown): Resource => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Resource' failed as data isn't a dictionary.`,
    )
  }

  return {
    accountOrganizationInfo: data.account_organization_info
      ? unmarshalAccountOrganizationInfo(data.account_organization_info)
      : undefined,
    accountProjectInfo: data.account_project_info
      ? unmarshalAccountProjectInfo(data.account_project_info)
      : undefined,
    accountUserInfo: data.account_user_info
      ? unmarshalAccountUserInfo(data.account_user_info)
      : undefined,
    appleSiliconServerInfo: data.apple_silicon_server_info
      ? unmarshalAppleSiliconServerInfo(data.apple_silicon_server_info)
      : undefined,
    baremetalServerInfo: data.baremetal_server_info
      ? unmarshalBaremetalServerInfo(data.baremetal_server_info)
      : undefined,
    baremetalSettingInfo: data.baremetal_setting_info
      ? unmarshalBaremetalSettingInfo(data.baremetal_setting_info)
      : undefined,
    createdAt: unmarshalDate(data.created_at),
    deletedAt: unmarshalDate(data.deleted_at),
    id: data.id,
    instanceServerInfo: data.instance_server_info
      ? unmarshalInstanceServerInfo(data.instance_server_info)
      : undefined,
    ipamIpInfo: data.ipam_ip_info
      ? unmarshalIpamIpInfo(data.ipam_ip_info)
      : undefined,
    keyManagerKeyInfo: data.key_manager_key_info
      ? unmarshalKeyManagerKeyInfo(data.key_manager_key_info)
      : undefined,
    keymKeyInfo: data.keym_key_info
      ? unmarshalKeyManagerKeyInfo(data.keym_key_info)
      : undefined,
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
    secretManagerSecretInfo: data.secret_manager_secret_info
      ? unmarshalSecretManagerSecretInfo(data.secret_manager_secret_info)
      : undefined,
    secretManagerVersionInfo: data.secret_manager_version_info
      ? unmarshalSecretManagerSecretVersionInfo(
          data.secret_manager_version_info,
        )
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
    resources: unmarshalArrayOfObject(data.resources, unmarshalResource),
    serviceName: data.service_name,
    sourceIp: data.source_ip,
    statusCode: data.status_code,
    system: data.system ? unmarshalEventSystem(data.system) : undefined,
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

const unmarshalProductService = (data: unknown): ProductService => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ProductService' failed as data isn't a dictionary.`,
    )
  }

  return {
    methods: data.methods,
    name: data.name,
  } as ProductService
}

const unmarshalProduct = (data: unknown): Product => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Product' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    services: unmarshalArrayOfObject(data.services, unmarshalProductService),
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
