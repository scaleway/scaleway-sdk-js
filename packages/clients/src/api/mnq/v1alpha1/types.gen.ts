// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListCredentialsRequestOrderBy =
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'

export type ListNamespacesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'
  | 'project_id_asc'
  | 'project_id_desc'

export type NamespaceProtocol = 'unknown' | 'nats' | 'sqs_sns' | 'amqp'

export interface Credential {
  id: string
  name: string
  namespaceId: string
  protocol: NamespaceProtocol
  /**
   * One-of ('credentialType'): at most one of 'natsCredentials',
   * 'sqsSnsCredentials', 'amqpCredentials' could be set.
   */
  natsCredentials?: CredentialNATSCredsFile
  /**
   * One-of ('credentialType'): at most one of 'natsCredentials',
   * 'sqsSnsCredentials', 'amqpCredentials' could be set.
   */
  sqsSnsCredentials?: CredentialSQSSNSCreds
  /**
   * One-of ('credentialType'): at most one of 'natsCredentials',
   * 'sqsSnsCredentials', 'amqpCredentials' could be set.
   */
  amqpCredentials?: CredentialAMQPCreds
}

export interface CredentialAMQPCreds {
  username: string
  password?: string
  permissions?: Permissions
}

export interface CredentialNATSCredsFile {
  content: string
}

export interface CredentialSQSSNSCreds {
  accessKey: string
  secretKey?: string
  permissions?: Permissions
}

export interface CredentialSummary {
  id: string
  name: string
  namespaceId: string
  protocol: NamespaceProtocol
  /**
   * One-of ('credentialType'): at most one of 'sqsSnsCredentials',
   * 'amqpCredentials' could be set.
   */
  sqsSnsCredentials?: CredentialSummarySQSSNSCreds
  /**
   * One-of ('credentialType'): at most one of 'sqsSnsCredentials',
   * 'amqpCredentials' could be set.
   */
  amqpCredentials?: CredentialSummaryAMQPCreds
}

export interface CredentialSummaryAMQPCreds {
  username: string
  permissions?: Permissions
}

export interface CredentialSummarySQSSNSCreds {
  accessKey: string
  permissions?: Permissions
}

export interface ListCredentialsResponse {
  totalCount: number
  credentials: Array<CredentialSummary>
}

export interface ListNamespacesResponse {
  totalCount: number
  namespaces: Array<Namespace>
}

export interface Namespace {
  id: string
  projectId: string
  name: string
  endpoint: string
  protocol: NamespaceProtocol
  createdAt?: Date
  updatedAt?: Date
  region: Region
}

export interface Permissions {
  canPublish?: boolean
  canReceive?: boolean
  canManage?: boolean
}

export type ListNamespacesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  projectId?: string
  page?: number
  pageSize?: number
  orderBy?: ListNamespacesRequestOrderBy
  organizationId?: string
}

export type CreateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  name: string
  projectId?: string
  protocol: NamespaceProtocol
}

export type UpdateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId: string
  name?: string
}

export type GetNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId: string
}

export type DeleteNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId: string
}

export type CreateCredentialRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  name: string
  namespaceId: string
  /** One-of ('optionalPermissions'): at most one of 'permissions' could be set. */
  permissions?: Permissions
}

export type DeleteCredentialRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  credentialId: string
}

export type ListCredentialsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId?: string
  page?: number
  pageSize?: number
  orderBy?: ListCredentialsRequestOrderBy
}

export type UpdateCredentialRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  credentialId: string
  name?: string
  /** One-of ('optionalPermissions'): at most one of 'permissions' could be set. */
  permissions?: Permissions
}

export type GetCredentialRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  credentialId: string
}
