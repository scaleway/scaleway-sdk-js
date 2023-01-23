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

export type ListTriggerInputsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

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

export type TriggerInputStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'
  | 'pending'

export type TriggerStatus =
  | 'unknown_status'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'
  | 'pending'

export type TriggerType = 'unknown_trigger_type' | 'nats' | 'sqs'

export interface CreateTriggerInputRequestNatsClientConfigSpec {
  subject: string
}

export interface CreateTriggerInputRequestSqsClientConfigSpec {
  queue: string
}

export interface CreateTriggerRequestNatsFailureHandlingPolicy {
  retryPolicy?: CreateTriggerRequestNatsFailureHandlingPolicyRetryPolicy
  /**
   * One-of ('deadLetter'): at most one of 'natsDeadLetter', 'sqsDeadLetter'
   * could be set.
   */
  natsDeadLetter?: CreateTriggerRequestNatsFailureHandlingPolicyNatsDeadLetter
  /**
   * One-of ('deadLetter'): at most one of 'natsDeadLetter', 'sqsDeadLetter'
   * could be set.
   */
  sqsDeadLetter?: CreateTriggerRequestNatsFailureHandlingPolicySqsDeadLetter
}

export interface CreateTriggerRequestNatsFailureHandlingPolicyNatsDeadLetter {
  mnqNamespaceId?: string
  subject?: string
}

export interface CreateTriggerRequestNatsFailureHandlingPolicyRetryPolicy {
  maxRetries?: number
  retryPeriod?: string
}

export interface CreateTriggerRequestNatsFailureHandlingPolicySqsDeadLetter {
  mnqNamespaceId?: string
  queue?: string
}

export interface CreateTriggerRequestSqsFailureHandlingPolicy {}

/** Cron */
export interface Cron {
  id: string
  functionId: string
  schedule: string
  args?: Record<string, unknown>
  status: CronStatus
  name: string
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
  headers: Record<string, string[]>
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
  secretEnvironmentVariables: SecretHashedValue[]
  region: Region
  /**
   * Possible values:
   *
   * - Redirected: Responds to HTTP request with a 302 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption: FunctionHttpOption
  runtimeMessage: string
}

/** List crons response */
export interface ListCronsResponse {
  crons: Cron[]
  totalCount: number
}

/** List domains response */
export interface ListDomainsResponse {
  domains: Domain[]
  totalCount: number
}

/** List function runtimes response */
export interface ListFunctionRuntimesResponse {
  runtimes: Runtime[]
  totalCount: number
}

/** List functions response */
export interface ListFunctionsResponse {
  functions: Function[]
  totalCount: number
}

/** List logs response */
export interface ListLogsResponse {
  logs: Log[]
  totalCount: number
}

/** List namespaces response */
export interface ListNamespacesResponse {
  namespaces: Namespace[]
  totalCount: number
}

export interface ListTokensResponse {
  tokens: Token[]
  totalCount: number
}

export interface ListTriggerInputsResponse {
  inputs: TriggerInput[]
  totalCount: number
}

export interface ListTriggersResponse {
  triggers: Trigger[]
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

export interface SetTriggerInputsRequestNatsConfigs {
  configs: CreateTriggerInputRequestNatsClientConfigSpec[]
}

export interface SetTriggerInputsRequestSqsConfigs {
  configs: CreateTriggerInputRequestSqsClientConfigSpec[]
}

export interface SetTriggerInputsResponse {
  triggerInputs: TriggerInput[]
}

/** Token */
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
  type: TriggerType
  status: TriggerStatus
  errorMessage?: string
  functionId: string
  /**
   * One-of ('failureHandlingPolicy'): at most one of
   * 'natsFailureHandlingPolicy', 'sqsFailureHandlingPolicy' could be set.
   */
  natsFailureHandlingPolicy?: TriggerNatsFailureHandlingPolicy
  /**
   * One-of ('failureHandlingPolicy'): at most one of
   * 'natsFailureHandlingPolicy', 'sqsFailureHandlingPolicy' could be set.
   */
  sqsFailureHandlingPolicy?: TriggerSqsFailureHandlingPolicy
}

export interface TriggerInput {
  id: string
  mnqNamespaceId?: string
  status: TriggerInputStatus
  errorMessage?: string
  /** One-of ('config'): at most one of 'natsConfig', 'sqsConfig' could be set. */
  natsConfig?: TriggerInputNatsClientConfig
  /** One-of ('config'): at most one of 'natsConfig', 'sqsConfig' could be set. */
  sqsConfig?: TriggerInputSqsClientConfig
}

export interface TriggerInputNatsClientConfig {
  subject: string
}

export interface TriggerInputSqsClientConfig {
  queue: string
}

export interface TriggerNatsDeadLetter {
  mnqNamespaceId: string
  subject: string
}

export interface TriggerNatsFailureHandlingPolicy {
  retryPolicy?: TriggerRetryPolicy
  /**
   * One-of ('deadLetter'): at most one of 'natsDeadLetter', 'sqsDeadLetter'
   * could be set.
   */
  natsDeadLetter?: TriggerNatsDeadLetter
  /**
   * One-of ('deadLetter'): at most one of 'natsDeadLetter', 'sqsDeadLetter'
   * could be set.
   */
  sqsDeadLetter?: TriggerSqsDeadLetter
}

export interface TriggerRetryPolicy {
  maxRetries: number
  retryPeriod?: string
}

export interface TriggerSqsDeadLetter {
  mnqNamespaceId: string
  queue: string
}

export interface TriggerSqsFailureHandlingPolicy {}

export interface UpdateTriggerInputRequestNatsClientConfigSpec {
  subject?: string
}

export interface UpdateTriggerInputRequestSqsClientConfigSpec {
  queue?: string
}

/** Upload url */
export interface UploadURL {
  url: string
  headers: Record<string, string[]>
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
  secretEnvironmentVariables?: Secret[]
}

export type UpdateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  namespaceId: string
  environmentVariables?: Record<string, string>
  description?: string
  secretEnvironmentVariables?: Secret[]
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
  runtime?: FunctionRuntime
  memoryLimit?: number
  timeout?: string
  handler?: string
  privacy?: FunctionPrivacy
  description?: string
  secretEnvironmentVariables?: Secret[]
  /**
   * Possible values:
   *
   * - Redirected: Responds to HTTP request with a 302 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: FunctionHttpOption
}

export type UpdateFunctionRequest = {
  /** Region to target. If none is passed will use default region from the config */
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
   * Possible values:
   *
   * - Redirected: Responds to HTTP request with a 302 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: FunctionHttpOption
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
  name?: string
}

export type UpdateCronRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  cronId: string
  functionId?: string
  schedule?: string
  args?: Record<string, unknown>
  name?: string
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
  functionId?: string
  namespaceId?: string
}

export type DeleteTokenRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  tokenId: string
}

export type CreateTriggerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  name: string
  description: string
  functionId: string
  type?: TriggerType
  /**
   * One-of ('failureHandlingPolicy'): at most one of
   * 'natsFailureHandlingPolicy', 'sqsFailureHandlingPolicy' could be set.
   */
  natsFailureHandlingPolicy?: CreateTriggerRequestNatsFailureHandlingPolicy
  /**
   * One-of ('failureHandlingPolicy'): at most one of
   * 'natsFailureHandlingPolicy', 'sqsFailureHandlingPolicy' could be set.
   */
  sqsFailureHandlingPolicy?: CreateTriggerRequestSqsFailureHandlingPolicy
}

export type GetTriggerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  triggerId: string
}

export type ListTriggersRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListTriggersRequestOrderBy
  functionId: string
}

export type UpdateTriggerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  triggerId: string
  name?: string
  description?: string
  /**
   * One-of ('failureHandlingPolicy'): at most one of 'natsConfig', 'sqsConfig'
   * could be set.
   */
  natsConfig?: CreateTriggerRequestNatsFailureHandlingPolicy
  /**
   * One-of ('failureHandlingPolicy'): at most one of 'natsConfig', 'sqsConfig'
   * could be set.
   */
  sqsConfig?: CreateTriggerRequestSqsFailureHandlingPolicy
}

export type DeleteTriggerRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  triggerId: string
}

export type CreateTriggerInputRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  triggerId: string
  mnqNamespaceId?: string
  /** One-of ('config'): at most one of 'natsConfig', 'sqsConfig' could be set. */
  natsConfig?: CreateTriggerInputRequestNatsClientConfigSpec
  /** One-of ('config'): at most one of 'natsConfig', 'sqsConfig' could be set. */
  sqsConfig?: CreateTriggerInputRequestSqsClientConfigSpec
}

export type GetTriggerInputRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  triggerInputId: string
}

export type ListTriggerInputsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListTriggerInputsRequestOrderBy
  triggerId: string
}

export type SetTriggerInputsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  triggerInputId: string
  /** One-of ('configs'): at most one of 'sqs', 'nats' could be set. */
  sqs?: SetTriggerInputsRequestSqsConfigs
  /** One-of ('configs'): at most one of 'sqs', 'nats' could be set. */
  nats?: SetTriggerInputsRequestNatsConfigs
}

export type UpdateTriggerInputRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  triggerInputId: string
  /** One-of ('config'): at most one of 'natsConfig', 'sqsConfig' could be set. */
  natsConfig?: UpdateTriggerInputRequestNatsClientConfigSpec
  /** One-of ('config'): at most one of 'natsConfig', 'sqsConfig' could be set. */
  sqsConfig?: UpdateTriggerInputRequestSqsClientConfigSpec
}

export type DeleteTriggerInputRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  triggerInputId: string
}
