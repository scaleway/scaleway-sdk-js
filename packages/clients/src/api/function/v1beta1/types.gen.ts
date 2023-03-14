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

export type FunctionHttpOption =
  | 'unknown_http_option'
  | 'enabled'
  | 'redirected'

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
  | 'rust165'
  | 'go119'
  | 'python311'
  | 'php82'
  | 'node19'
  | 'go120'

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

export type ListTriggersRequestOrderBy = 'created_at_asc' | 'created_at_desc'

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
  | 'end_of_support'
  | 'end_of_life'

export type TokenStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'

export type TriggerInputType =
  | 'unknown_input_type'
  | 'sqs'
  | 'scw_sqs'
  | 'nats'
  | 'scw_nats'

export type TriggerStatus =
  | 'unknown_status'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'
  | 'pending'

export interface CreateTriggerRequestMnqNatsClientConfig {
  mnqNamespaceId: string
  subject: string
  mnqProjectId: string
  mnqRegion: string
}

export interface CreateTriggerRequestMnqSqsClientConfig {
  mnqNamespaceId: string
  queue: string
  mnqProjectId: string
  mnqRegion: string
}

export interface CreateTriggerRequestSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}

/** Cron. */
export interface Cron {
  id: string
  functionId: string
  schedule: string
  args?: Record<string, unknown>
  status: CronStatus
  name: string
}

/** Domain. */
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
  headers: Record<string, string[]>
}

/** Function. */
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
  secretEnvironmentVariables: SecretHashedValue[]
  region: Region
  /**
   * Configure how HTTP and HTTPS requests are handled. Possible values:
   *
   * - Redirected: Responds to HTTP request with a 301 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption: FunctionHttpOption
  runtimeMessage: string
}

/** List crons response. */
export interface ListCronsResponse {
  crons: Cron[]
  totalCount: number
}

/** List domains response. */
export interface ListDomainsResponse {
  domains: Domain[]
  totalCount: number
}

/** List function runtimes response. */
export interface ListFunctionRuntimesResponse {
  runtimes: Runtime[]
  totalCount: number
}

/** List functions response. */
export interface ListFunctionsResponse {
  functions: Function[]
  totalCount: number
}

/** List logs response. */
export interface ListLogsResponse {
  logs: Log[]
  totalCount: number
}

/** List namespaces response. */
export interface ListNamespacesResponse {
  namespaces: Namespace[]
  totalCount: number
}

export interface ListTokensResponse {
  tokens: Token[]
  totalCount: number
}

export interface ListTriggersResponse {
  triggers: Trigger[]
  totalCount: number
}

/** Log. */
export interface Log {
  message: string
  timestamp?: Date
  id: string
  /** Contains the severity of the log (info, debug, error, ...). */
  level: string
  /** Source of the log (core runtime or user code). */
  source: string
  /** Can be stdout or stderr. */
  stream: LogStream
}

/** Namespace. */
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
  secretEnvironmentVariables: SecretHashedValue[]
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

/** Token. */
export interface Token {
  id: string
  token: string
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  functionId?: string
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  namespaceId?: string
  /** @deprecated */
  publicKey?: string
  status: TokenStatus
  description?: string
  expiresAt?: Date
}

export interface Trigger {
  id: string
  name: string
  description: string
  inputType: TriggerInputType
  status: TriggerStatus
  errorMessage?: string
  functionId: string
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwSqsConfig?: TriggerMnqSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  sqsConfig?: TriggerSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwNatsConfig?: TriggerMnqNatsClientConfig
}

export interface TriggerMnqNatsClientConfig {
  mnqNamespaceId: string
  subject: string
  mnqProjectId: string
  mnqRegion: string
}

export interface TriggerMnqSqsClientConfig {
  mnqNamespaceId: string
  queue: string
  mnqProjectId: string
  mnqRegion: string
}

export interface TriggerSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}

export interface UpdateTriggerRequestMnqNatsClientConfig {
  mnqNamespaceId: string
  subject: string
  mnqProjectId: string
  mnqRegion: string
}

export interface UpdateTriggerRequestMnqSqsClientConfig {
  mnqNamespaceId: string
  queue: string
  mnqProjectId: string
  mnqRegion: string
}

export interface UpdateTriggerRequestSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}

/** Upload url. */
export interface UploadURL {
  url: string
  headers: Record<string, string[]>
}

export type ListNamespacesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListNamespacesRequestOrderBy
  name?: string
  organizationId?: string
  projectId?: string
}

export type GetNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  namespaceId: string
}

export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  name?: string
  environmentVariables?: Record<string, string>
  projectId?: string
  description?: string
  secretEnvironmentVariables?: Secret[]
}

export type UpdateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  namespaceId: string
  environmentVariables?: Record<string, string>
  description?: string
  secretEnvironmentVariables?: Secret[]
}

export type DeleteNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  namespaceId: string
}

export type ListFunctionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
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
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  functionId: string
}

export type CreateFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  name?: string
  namespaceId: string
  environmentVariables?: Record<string, string>
  minScale?: number
  maxScale?: number
  runtime?: FunctionRuntime
  memoryLimit?: number
  timeout?: string
  handler?: string
  privacy?: FunctionPrivacy
  description?: string
  secretEnvironmentVariables?: Secret[]
  /**
   * Configure how HTTP and HTTPS requests are handled. Possible values:
   *
   * - Redirected: Responds to HTTP request with a 301 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: FunctionHttpOption
}

export type UpdateFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  functionId: string
  environmentVariables?: Record<string, string>
  minScale?: number
  maxScale?: number
  runtime?: FunctionRuntime
  memoryLimit?: number
  timeout?: string
  redeploy?: boolean
  handler?: string
  privacy?: FunctionPrivacy
  description?: string
  secretEnvironmentVariables?: Secret[]
  /**
   * Configure how HTTP and HTTPS requests are handled. Possible values:
   *
   * - Redirected: Responds to HTTP request with a 301 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: FunctionHttpOption
}

export type DeleteFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  functionId: string
}

export type DeployFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  functionId: string
}

export type ListFunctionRuntimesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
}

export type GetFunctionUploadURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  functionId: string
  contentLength: number
}

export type GetFunctionDownloadURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  functionId: string
}

export type ListCronsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListCronsRequestOrderBy
  functionId: string
}

export type GetCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  cronId: string
}

export type CreateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  functionId: string
  schedule: string
  args?: Record<string, unknown>
  name?: string
}

export type UpdateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  cronId: string
  functionId?: string
  schedule?: string
  args?: Record<string, unknown>
  name?: string
}

export type DeleteCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  cronId: string
}

export type ListLogsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  functionId: string
  page?: number
  pageSize?: number
  orderBy?: ListLogsRequestOrderBy
}

export type ListDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListDomainsRequestOrderBy
  functionId: string
}

export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  domainId: string
}

export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  hostname: string
  functionId: string
}

export type DeleteDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  domainId: string
}

export type IssueJWTRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  functionId?: string
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  namespaceId?: string
  expiresAt?: Date
}

export type CreateTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  functionId?: string
  /** One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set. */
  namespaceId?: string
  description?: string
  expiresAt?: Date
}

export type GetTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  tokenId: string
}

export type ListTokensRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListTokensRequestOrderBy
  functionId?: string
  namespaceId?: string
}

export type DeleteTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  tokenId: string
}

export type CreateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  name: string
  description: string
  functionId: string
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwSqsConfig?: CreateTriggerRequestMnqSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  sqsConfig?: CreateTriggerRequestSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwNatsConfig?: CreateTriggerRequestMnqNatsClientConfig
}

export type GetTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  triggerId: string
}

export type ListTriggersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListTriggersRequestOrderBy
  /**
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId'
   * could be set.
   */
  functionId?: string
  /**
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId'
   * could be set.
   */
  namespaceId?: string
  /**
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId'
   * could be set.
   */
  projectId?: string
}

export type UpdateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  triggerId: string
  name?: string
  description?: string
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwSqsConfig?: UpdateTriggerRequestMnqSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  sqsConfig?: UpdateTriggerRequestSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwNatsConfig?: UpdateTriggerRequestMnqNatsClientConfig
}

export type DeleteTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  triggerId: string
}
