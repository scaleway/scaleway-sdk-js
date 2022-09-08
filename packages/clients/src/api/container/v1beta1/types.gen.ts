// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ContainerPrivacy = 'unknown_privacy' | 'public' | 'private'

export type ContainerProtocol = 'unknown_protocol' | 'http1' | 'h2c'

export type ContainerStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'
  | 'created'

export type CronStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'

export type DomainStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'
  | 'pending'

export type ListContainersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListCronsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListDomainsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'hostname_asc'
  | 'hostname_desc'

export type ListLogsRequestOrderBy = 'timestamp_desc' | 'timestamp_asc'

export type ListNamespacesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListTokensRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type LogStream = 'unknown' | 'stdout' | 'stderr'

export type NamespaceStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'

export type NullValue = 'NULL_VALUE'

export type TokenStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'

/** Container */
export interface Container {
  id: string
  name: string
  namespaceId: string
  status: ContainerStatus
  environmentVariables: Record<string, string>
  minScale: number
  maxScale: number
  memoryLimit: number
  cpuLimit: number
  timeout?: string
  errorMessage?: string
  privacy: ContainerPrivacy
  description?: string
  registryImage: string
  maxConcurrency: number
  domainName: string
  protocol: ContainerProtocol
  port: number
  secretEnvironmentVariables: Array<SecretHashedValue>
  /**
   * @deprecated Possible values:
   *
   *   - Redirected: Responds to HTTP request with a 302 redirect to ask the clients
   *       to use HTTPS.
   *   - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: string
  region: Region
}

/** Cron */
export interface Cron {
  id: string
  containerId: string
  schedule: string
  args?: Record<string, unknown>
  status: CronStatus
}

/** Domain */
export interface Domain {
  id: string
  hostname: string
  containerId: string
  url: string
  status: DomainStatus
  errorMessage?: string
}

/** List containers response */
export interface ListContainersResponse {
  containers: Array<Container>
  totalCount: number
}

/** List crons response */
export interface ListCronsResponse {
  crons: Array<Cron>
  totalCount: number
}

/** List domains response */
export interface ListDomainsResponse {
  domains: Array<Domain>
  totalCount: number
}

/** List logs response */
export interface ListLogsResponse {
  logs: Array<Log>
  totalCount: number
}

/** List namespaces response */
export interface ListNamespacesResponse {
  namespaces: Array<Namespace>
  totalCount: number
}

export interface ListTokensResponse {
  tokens: Array<Token>
  totalCount: number
}

/** Log */
export interface Log {
  message: string
  timestamp?: Date
  id: string
  /** Contains the severity of the log (info, debug, error, ...) */
  level: string
  /** Source of the log (core runtime or user code) */
  source: string
  /** Can be stdout or stderr */
  stream: LogStream
}

/** Namespace */
export interface Namespace {
  id: string
  name: string
  environmentVariables: Record<string, string>
  organizationId: string
  projectId: string
  status: NamespaceStatus
  registryNamespaceId: string
  errorMessage?: string
  registryEndpoint: string
  description?: string
  secretEnvironmentVariables: Array<SecretHashedValue>
  region: Region
}

export interface Secret {
  key: string
  value?: string
}

export interface SecretHashedValue {
  key: string
  hashedValue: string
}

/** Token */
export interface Token {
  id: string
  token: string
  /** One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set. */
  containerId?: string
  /** One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set. */
  namespaceId?: string
  /** @deprecated */
  publicKey?: string
  status: TokenStatus
  description?: string
  expiresAt?: Date
}

export type ListNamespacesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListNamespacesRequestOrderBy
  name?: string
  organizationId?: string
  projectId?: string
}

export type GetNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId: string
}

export type CreateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  name?: string
  environmentVariables?: Record<string, string>
  projectId?: string
  description?: string
  secretEnvironmentVariables?: Array<Secret>
}

export type UpdateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId: string
  environmentVariables?: Record<string, string>
  description?: string
  secretEnvironmentVariables?: Array<Secret>
}

export type DeleteNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId: string
}

export type ListContainersRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListContainersRequestOrderBy
  namespaceId: string
  name?: string
  organizationId?: string
  projectId?: string
}

export type GetContainerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  containerId: string
}

export type CreateContainerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId: string
  name?: string
  environmentVariables?: Record<string, string>
  minScale?: number
  maxScale?: number
  memoryLimit?: number
  timeout?: string
  privacy: ContainerPrivacy
  description?: string
  registryImage?: string
  maxConcurrency?: number
  protocol: ContainerProtocol
  port?: number
  secretEnvironmentVariables?: Array<Secret>
  /**
   * @deprecated Possible values:
   *
   *   - Redirected: Responds to HTTP request with a 302 redirect to ask the clients
   *       to use HTTPS.
   *   - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: string
}

export type UpdateContainerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  containerId: string
  environmentVariables?: Record<string, string>
  minScale?: number
  maxScale?: number
  memoryLimit?: number
  timeout?: string
  redeploy?: boolean
  privacy: ContainerPrivacy
  description?: string
  registryImage?: string
  maxConcurrency?: number
  protocol: ContainerProtocol
  port?: number
  secretEnvironmentVariables?: Array<Secret>
  /**
   * @deprecated Possible values:
   *
   *   - Redirected: Responds to HTTP request with a 302 redirect to ask the clients
   *       to use HTTPS.
   *   - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: string
}

export type DeleteContainerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  containerId: string
}

export type DeployContainerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  containerId: string
}

export type ListCronsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListCronsRequestOrderBy
  containerId: string
}

export type GetCronRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  cronId: string
}

export type CreateCronRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  containerId: string
  schedule: string
  args?: Record<string, unknown>
}

export type UpdateCronRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  cronId: string
  containerId?: string
  schedule?: string
  args?: Record<string, unknown>
}

export type DeleteCronRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  cronId: string
}

export type ListLogsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  containerId: string
  page?: number
  pageSize?: number
  orderBy?: ListLogsRequestOrderBy
}

export type ListDomainsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListDomainsRequestOrderBy
  containerId: string
}

export type GetDomainRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  domainId: string
}

export type CreateDomainRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  hostname: string
  containerId: string
}

export type DeleteDomainRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  domainId: string
}

export type IssueJWTRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set. */
  containerId?: string
  /** One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set. */
  namespaceId?: string
  expiresAt?: Date
}

export type CreateTokenRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set. */
  containerId?: string
  /** One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set. */
  namespaceId?: string
  description?: string
  expiresAt?: Date
}

export type GetTokenRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  tokenId: string
}

export type ListTokensRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListTokensRequestOrderBy
  containerId?: string
  namespaceId?: string
}

export type DeleteTokenRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  tokenId: string
}
