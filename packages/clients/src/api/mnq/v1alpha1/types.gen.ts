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

/** Credential */
export interface Credential {
  /** Credential ID */
  id: string
  /** Credential name */
  name: string
  /** Namespace containing the Credential */
  namespaceId: string
  /** Protocol associated to the Credential */
  protocol: NamespaceProtocol
  /**
   * Credentials file used to connect to the NATS service.
   *
   * One-of ('credentialType'): at most one of 'natsCredentials',
   * 'sqsSnsCredentials', 'amqpCredentials' could be set.
   */
  natsCredentials?: CredentialNATSCredsFile
  /**
   * Credential used to connect to the SQS/SNS service.
   *
   * One-of ('credentialType'): at most one of 'natsCredentials',
   * 'sqsSnsCredentials', 'amqpCredentials' could be set.
   */
  sqsSnsCredentials?: CredentialSQSSNSCreds
  /**
   * Credential used to connect to the AMQP service.
   *
   * One-of ('credentialType'): at most one of 'natsCredentials',
   * 'sqsSnsCredentials', 'amqpCredentials' could be set.
   */
  amqpCredentials?: CredentialAMQPCreds
}

/** Credential.amqp creds */
export interface CredentialAMQPCreds {
  /** Username used to connect to the AMQP service */
  username: string
  /** Password used to connect to the AMQP service */
  password?: string
  /** List of permissions associated to this Credential */
  permissions?: Permissions
}

/** Credential.nats creds file */
export interface CredentialNATSCredsFile {
  /** Raw content of the NATS credentials file */
  content: string
}

/** Credential.sqssns creds */
export interface CredentialSQSSNSCreds {
  /** ID of the key */
  accessKey: string
  /** Secret value of the key */
  secretKey?: string
  /** List of permissions associated to this Credential */
  permissions?: Permissions
}

/** Credential summary */
export interface CredentialSummary {
  /** Credential ID */
  id: string
  /** Credential name */
  name: string
  /** Namespace containing the Credential */
  namespaceId: string
  /** Protocol associated to the Credential */
  protocol: NamespaceProtocol
  /**
   * Credential used to connect to the SQS/SNS service.
   *
   * One-of ('credentialType'): at most one of 'sqsSnsCredentials',
   * 'amqpCredentials' could be set.
   */
  sqsSnsCredentials?: CredentialSummarySQSSNSCreds
  /**
   * Credential used to connect to the AMQP service.
   *
   * One-of ('credentialType'): at most one of 'sqsSnsCredentials',
   * 'amqpCredentials' could be set.
   */
  amqpCredentials?: CredentialSummaryAMQPCreds
}

/** Credential summary.amqp creds */
export interface CredentialSummaryAMQPCreds {
  /** Username used to connect to the AMQP service */
  username: string
  /** List of permissions associated to this Credential */
  permissions?: Permissions
}

/** Credential summary.sqssns creds */
export interface CredentialSummarySQSSNSCreds {
  /** ID of the key */
  accessKey: string
  /** List of permissions associated to this Credential */
  permissions?: Permissions
}

/** List credentials response */
export interface ListCredentialsResponse {
  /** Total number of existing Credentials */
  totalCount: number
  /** A page of Credentials */
  credentials: Array<CredentialSummary>
}

/** List namespaces response */
export interface ListNamespacesResponse {
  /** Total number of existing Namespaces */
  totalCount: number
  /** A page of Namespaces */
  namespaces: Array<Namespace>
}

/** Namespace */
export interface Namespace {
  /** Namespace ID */
  id: string
  /** Namespace name */
  name: string
  /** Endpoint of the service matching the Namespace protocol */
  endpoint: string
  /** Namespace protocol */
  protocol: NamespaceProtocol
  /** Project containing the Namespace */
  projectId: string
  /** Region where the Namespace is deployed */
  region: Region
  /** Namespace creation date */
  createdAt?: Date
  /** Namespace last modification date */
  updatedAt?: Date
}

/** Permissions */
export interface Permissions {
  /** Defines if user can publish messages to the service */
  canPublish?: boolean
  /** Defines if user can receive messages from the service */
  canReceive?: boolean
  /** Defines if user can manage the associated resource(s) */
  canManage?: boolean
}

export type ListNamespacesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Will list only the Namespaces owned by the specified organization */
  organizationId?: string
  /** Will list only the Namespaces contained into the specified project */
  projectId?: string
  /** Indicate the page number of results to be returned */
  page?: number
  /** Maximum number of results returned by page */
  pageSize?: number
  /** Field used for sorting results */
  orderBy?: ListNamespacesRequestOrderBy
}

export type CreateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Namespace name */
  name?: string
  /** Namespace protocol */
  protocol: NamespaceProtocol
  /** Project containing the Namespace */
  projectId?: string
}

export type UpdateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Namespace to update */
  namespaceId: string
  /** Namespace name */
  name?: string
}

export type GetNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Namespace to get */
  namespaceId: string
}

export type DeleteNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Namespace to delete */
  namespaceId: string
}

export type CreateCredentialRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Namespace containing the Credential */
  namespaceId: string
  /** Credential name */
  name?: string
  /**
   * List of permissions associated to this Credential.
   *
   * One-of ('optionalPermissions'): at most one of 'permissions' could be set.
   */
  permissions?: Permissions
}

export type DeleteCredentialRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Credential to delete */
  credentialId: string
}

export type ListCredentialsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Namespace containing the Credential */
  namespaceId?: string
  /** Indicate the page number of results to be returned */
  page?: number
  /** Maximum number of results returned by page */
  pageSize?: number
  /** Field used for sorting results */
  orderBy?: ListCredentialsRequestOrderBy
}

export type UpdateCredentialRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Credential to update */
  credentialId: string
  /** Credential name */
  name?: string
  /**
   * List of permissions associated to this Credential.
   *
   * One-of ('optionalPermissions'): at most one of 'permissions' could be set.
   */
  permissions?: Permissions
}

export type GetCredentialRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the Credential to get */
  credentialId: string
}
