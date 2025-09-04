// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type ListEventsRequestOrderBy = 'recorded_at_desc' | 'recorded_at_asc'

export type ResourceType =
  | 'unknown_type'
  | 'secm_secret'
  | 'secm_secret_version'
  | 'kube_cluster'
  | 'kube_pool'
  | 'kube_node'
  | 'kube_acl'
  | 'keym_key'
  | 'iam_user'
  | 'iam_application'
  | 'iam_group'
  | 'iam_policy'
  | 'iam_api_key'
  | 'iam_ssh_key'
  | 'iam_rule'
  | 'secret_manager_secret'
  | 'secret_manager_version'
  | 'key_manager_key'
  | 'account_user'
  | 'account_organization'
  | 'account_project'
  | 'instance_server'
  | 'instance_placement_group'
  | 'instance_security_group'
  | 'instance_volume'
  | 'instance_snapshot'
  | 'instance_image'
  | 'apple_silicon_server'
  | 'baremetal_server'
  | 'baremetal_setting'
  | 'ipam_ip'
  | 'sbs_volume'
  | 'sbs_snapshot'

export interface AccountOrganizationInfo {}

export interface AccountProjectInfo {
  description: string
}

export interface AccountUserInfo {
  email: string
  phoneNumber?: string
}

export interface AppleSiliconServerInfo {
  id: string
  name: string
}

export interface BaremetalServerInfo {
  description: string
  tags: string[]
}

export interface BaremetalSettingInfo {
  type: string
}

export interface InstanceServerInfo {
  name: string
}

export interface IpamIpInfo {
  address: string
}

export interface KeyManagerKeyInfo {}

export interface KubernetesACLInfo {}

export interface KubernetesClusterInfo {}

export interface KubernetesNodeInfo {
  id: string
  name: string
}

export interface KubernetesPoolInfo {
  id: string
  name: string
}

export interface SecretManagerSecretInfo {
  path: string
  keyId?: string
}

export interface SecretManagerSecretVersionInfo {
  revision: number
}

export interface EventPrincipal {
  id: string
}

export interface EventSystem {
  name: string
}

export interface Resource {
  id: string
  type: ResourceType
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  name?: string
  /**
   * @deprecated
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  secmSecretInfo?: SecretManagerSecretInfo
  /**
   * @deprecated
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  secmSecretVersionInfo?: SecretManagerSecretVersionInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  kubeClusterInfo?: KubernetesClusterInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  kubePoolInfo?: KubernetesPoolInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  kubeNodeInfo?: KubernetesNodeInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  kubeAclInfo?: KubernetesACLInfo
  /**
   * @deprecated
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  keymKeyInfo?: KeyManagerKeyInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  secretManagerSecretInfo?: SecretManagerSecretInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  secretManagerVersionInfo?: SecretManagerSecretVersionInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  keyManagerKeyInfo?: KeyManagerKeyInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  accountUserInfo?: AccountUserInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  accountOrganizationInfo?: AccountOrganizationInfo
  /**
   * @deprecated
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  instanceServerInfo?: InstanceServerInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  appleSiliconServerInfo?: AppleSiliconServerInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  accountProjectInfo?: AccountProjectInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  baremetalServerInfo?: BaremetalServerInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  baremetalSettingInfo?: BaremetalSettingInfo
  /**
   *
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo', 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo', 'keymKeyInfo', 'secretManagerSecretInfo', 'secretManagerVersionInfo', 'keyManagerKeyInfo', 'accountUserInfo', 'accountOrganizationInfo', 'instanceServerInfo', 'appleSiliconServerInfo', 'accountProjectInfo', 'baremetalServerInfo', 'baremetalSettingInfo', 'ipamIpInfo' could be set.
   */
  ipamIpInfo?: IpamIpInfo
}

export interface ProductService {
  name: string
  methods: string[]
}

export interface Event {
  /**
   * ID of the event.
   */
  id: string
  /**
   * Timestamp of the event.
   */
  recordedAt?: Date
  /**
   * Locality of the resource attached to the event.
   */
  locality: string
  /**
   * User or IAM application at the origin of the event.
   *
   * One-of ('source'): at most one of 'principal', 'system' could be set.
   */
  principal?: EventPrincipal
  /**
   * The Scaleway system that performed an action on behalf of the client.
   *
   * One-of ('source'): at most one of 'principal', 'system' could be set.
   */
  system?: EventSystem
  /**
   * Organization ID containing the event.
   */
  organizationId: string
  /**
   * (Optional) Project of the resource attached to the event.
   */
  projectId?: string
  /**
   * IP address at the origin of the event.
   */
  sourceIp: string
  /**
   * User Agent at the origin of the event.
   */
  userAgent?: string
  /**
   * Product name of the resource attached to the event.
   */
  productName: string
  /**
   * API name called to trigger the event.
   */
  serviceName: string
  /**
   * API method called to trigger the event.
   */
  methodName: string
  /**
   * Resources attached to the event.
   */
  resources: Resource[]
  /**
   * Unique identifier of the request at the origin of the event.
   */
  requestId: string
  /**
   * Request at the origin of the event.
   */
  requestBody?: Record<string, unknown>
  /**
   * HTTP status code resulting of the API call.
   */
  statusCode: number
}

export interface Product {
  /**
   * Product title.
   */
  title: string
  /**
   * Product name.
   */
  name: string
  /**
   * Specifies the API versions of the products integrated with Audit Trail. Each version defines the methods logged by Audit Trail.
   */
  services: ProductService[]
}

export type ListEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * (Optional) ID of the Project containing the Audit Trail events.
   */
  projectId?: string
  /**
   * ID of the Organization containing the Audit Trail events.
   */
  organizationId?: string
  /**
   * (Optional) Returns a paginated list of Scaleway resources' features.
   */
  resourceType?: ResourceType
  /**
   * (Optional) Name of the method of the API call performed.
   */
  methodName?: string
  /**
   * (Optional) HTTP status code of the request. Returns either `200` if the request was successful or `403` if the permission was denied.
   */
  status?: number
  /**
   * (Optional) The `recorded_after` parameter defines the earliest timestamp from which Audit Trail events are retrieved. Returns `one hour ago` by default.
   */
  recordedAfter?: Date
  /**
   * (Optional) The `recorded_before` parameter defines the latest timestamp up to which Audit Trail events are retrieved. Returns `now` by default.
   */
  recordedBefore?: Date
  orderBy?: ListEventsRequestOrderBy
  pageSize?: number
  pageToken?: string
  /**
   * (Optional) Name of the Scaleway resource in a hyphenated format.
   */
  productName?: string
  /**
   * (Optional) Name of the service of the API call performed.
   */
  serviceName?: string
}

export interface ListEventsResponse {
  /**
   * Single page of events matching the requested criteria.
   */
  events: Event[]
  /**
   * Page token to use in following calls to keep listing.
   */
  nextPageToken?: string
}

export type ListProductsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Organization containing the Audit Trail events.
   */
  organizationId?: string
}

export interface ListProductsResponse {
  /**
   * List of all products integrated with Audit Trail.
   */
  products: Product[]
  /**
   * Number of integrated products.
   */
  totalCount: number
}
