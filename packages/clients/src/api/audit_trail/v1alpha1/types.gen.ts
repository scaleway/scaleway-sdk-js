// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListEventsRequestOrderBy = 'recorded_at_desc' | 'recorded_at_asc'

export type ResourceType =
  | 'unknown_type'
  | 'secm_secret'
  | 'secm_secret_version'
  | 'kube_cluster'
  | 'kube_pool'
  | 'kube_node'
  | 'kube_acl'

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
}

export interface SecretManagerSecretVersionInfo {
  revision: number
}

export interface EventPrincipal {
  id: string
}

export interface Resource {
  id: string
  type: ResourceType
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  name?: string
  /**
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo',
   * 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo' could be
   * set.
   */
  secmSecretInfo?: SecretManagerSecretInfo
  /**
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo',
   * 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo' could be
   * set.
   */
  secmSecretVersionInfo?: SecretManagerSecretVersionInfo
  /**
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo',
   * 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo' could be
   * set.
   */
  kubeClusterInfo?: KubernetesClusterInfo
  /**
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo',
   * 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo' could be
   * set.
   */
  kubePoolInfo?: KubernetesPoolInfo
  /**
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo',
   * 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo' could be
   * set.
   */
  kubeNodeInfo?: KubernetesNodeInfo
  /**
   * One-of ('info'): at most one of 'secmSecretInfo', 'secmSecretVersionInfo',
   * 'kubeClusterInfo', 'kubePoolInfo', 'kubeNodeInfo', 'kubeAclInfo' could be
   * set.
   */
  kubeAclInfo?: KubernetesACLInfo
}

export interface Event {
  id: string
  recordedAt?: Date
  locality: string
  principal?: EventPrincipal
  organizationId: string
  projectId?: string
  sourceIp: string
  userAgent?: string
  productName: string
  serviceName: string
  methodName: string
  resource?: Resource
  requestId: string
  requestBody?: Record<string, unknown>
  statusCode: number
}

export interface Product {
  title: string
  name: string
}

export type ListEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** (Optional) ID of the Project containing the Audit Trail events. */
  projectId?: string
  /** ID of the Organization containing the Audit Trail events. */
  organizationId?: string
  /** (Optional) Returns a paginated list of Scaleway resources' features. */
  resourceType?: ResourceType
  /** (Optional) Name of the method or the API call performed. */
  methodName?: string
  /**
   * (Optional) HTTP status code of the request. Returns either `200` if the
   * request was successful or `403` if the permission was denied.
   */
  status?: number
  /**
   * (Optional) The `recorded_after` parameter defines the earliest timestamp
   * from which Audit Trail events are retrieved. Returns `one hour ago` by
   * default.
   */
  recordedAfter?: Date
  /**
   * (Optional) The `recorded_before` parameter defines the latest timestamp up
   * to which Audit Trail events are retrieved. Returns `now` by default.
   */
  recordedBefore?: Date
  orderBy?: ListEventsRequestOrderBy
  pageSize?: number
  pageToken?: string
  /** (Optional) Name of the Scaleway resource in a hyphenated format. */
  productName?: string
}

export interface ListEventsResponse {
  /** Single page of events matching the requested criteria. */
  events: Event[]
  /** Page token to use in following calls to keep listing. */
  nextPageToken?: string
}

export type ListProductsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
}

export interface ListProductsResponse {
  products: Product[]
  totalCount: number
}
