// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

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

export type FunctionPrivacy = 'unknown_privacy' | 'public' | 'private'

export type FunctionRuntime =
  | 'unknown_runtime'
  | 'golang'
  | 'python'
  | 'python3'
  | 'node8'
  | 'node10'
  | 'node14'
  | 'node16'
  | 'node17'
  | 'python37'
  | 'python38'
  | 'python39'
  | 'python310'
  | 'go113'
  | 'go117'
  | 'go118'
  | 'node18'

export type FunctionStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'
  | 'created'

export type ListCronsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListDomainsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'hostname_asc'
  | 'hostname_desc'

export type ListFunctionsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

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

export type RuntimeStatus =
  | 'unknown_status'
  | 'beta'
  | 'available'
  | 'deprecated'

export type TokenStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'

/** Cron */
export interface Cron {
  id: string
  functionId: string
  schedule: string
  args?: Record<string, unknown>
  status: CronStatus
}

/** Domain */
export interface Domain {
  id: string
  hostname: string
  functionId: string
  url: string
  status: DomainStatus
  errorMessage?: string
}

export interface DownloadURL {
  url: string
  headers: Record<string, Array<string>>
}

/** Function */
export interface Function {
  id: string
  name: string
  namespaceId: string
  status: FunctionStatus
  environmentVariables: Record<string, string>
  minScale: number
  maxScale: number
  runtime: FunctionRuntime
  memoryLimit: number
  cpuLimit: number
  timeout?: string
  handler: string
  errorMessage?: string
  privacy: FunctionPrivacy
  description?: string
  domainName: string
  secretEnvironmentVariables: Array<SecretHashedValue>
  region: Region
  /**
   * @deprecated Possible values:
   *
   *   - Redirected: Responds to HTTP request with a 302 redirect to ask the clients
   *       to use HTTPS.
   *   - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: string
  runtimeMessage: string
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

/** List function runtimes response */
export interface ListFunctionRuntimesResponse {
  runtimes: Array<Runtime>
  totalCount: number
}

/** List functions response */
export interface ListFunctionsResponse {
  functions: Array<Function>
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

export interface Runtime {
  name: string
  language: string
  version: string
  defaultHandler: string
  codeSample: string
  status: RuntimeStatus
  statusMessage: string
  extension: string
  implementation: string
}

export interface Secret {
  key: string
  value?: string
}

export interface SecretHashedValue {
  key: string
  hashedValue: string
}

export interface Token {
  token: string
  /** @deprecated */
  publicKey?: string
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  functionId?: string
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  namespaceId?: string
  id: string
  status: TokenStatus
  expiresAt?: Date
}

/** Upload url */
export interface UploadURL {
  url: string
  headers: Record<string, Array<string>>
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

export type ListFunctionsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListFunctionsRequestOrderBy
  namespaceId: string
  name?: string
  organizationId?: string
  projectId?: string
}

export type GetFunctionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  functionId: string
}

export type CreateFunctionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  name?: string
  namespaceId: string
  environmentVariables?: Record<string, string>
  minScale?: number
  maxScale?: number
  runtime: FunctionRuntime
  memoryLimit?: number
  timeout?: string
  handler?: string
  privacy: FunctionPrivacy
  description?: string
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

export type UpdateFunctionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  functionId: string
  environmentVariables?: Record<string, string>
  minScale?: number
  maxScale?: number
  runtime: FunctionRuntime
  memoryLimit?: number
  timeout?: string
  redeploy?: boolean
  handler?: string
  privacy: FunctionPrivacy
  description?: string
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

export type DeleteFunctionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  functionId: string
}

export type DeployFunctionRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  functionId: string
}

export type ListFunctionRuntimesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
}

export type GetFunctionUploadURLRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  functionId: string
  contentLength: number
}

export type GetFunctionDownloadURLRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  functionId: string
}

export type ListCronsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListCronsRequestOrderBy
  functionId: string
}

export type GetCronRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  cronId: string
}

export type CreateCronRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  functionId: string
  schedule: string
  args?: Record<string, unknown>
}

export type UpdateCronRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  cronId: string
  functionId?: string
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
  functionId: string
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
  functionId: string
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
  functionId: string
}

export type DeleteDomainRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  domainId: string
}

export type IssueJWTRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  functionId?: string
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  namespaceId?: string
  expiresAt?: Date
}

export type CreateTokenRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  functionId?: string
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  namespaceId?: string
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
  functionId?: string
  namespaceId?: string
}

export type DeleteTokenRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  tokenId: string
}
