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
  | 'node20'
  | 'go121'

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
  /** UUID of the cron. */
  id: string
  /** UUID of the function the cron applies to. */
  functionId: string
  /** Schedule of the cron. */
  schedule: string
  /** Arguments to pass with the cron. */
  args?: Record<string, unknown>
  /** Status of the cron. */
  status: CronStatus
  /** Name of the cron. */
  name: string
}

/** Domain. */
export interface Domain {
  /** UUID of the domain. */
  id: string
  /** Hostname associated with the function. */
  hostname: string
  /** UUID of the function the domain is associated with. */
  functionId: string
  /** URL of the function. */
  url: string
  /** State of the doamin. */
  status: DomainStatus
  /** Error message if the domain is in "error" state. */
  errorMessage?: string
}

export interface DownloadURL {
  url: string
  headers: Record<string, string[]>
}

/** Function. */
export interface Function {
  /** UUID of the function. */
  id: string
  /** Name of the function. */
  name: string
  /** UUID of the namespace the function belongs to. */
  namespaceId: string
  /** Status of the function. */
  status: FunctionStatus
  /** Environment variables of the function. */
  environmentVariables: Record<string, string>
  /** Minimum number of instances to scale the function to. */
  minScale: number
  /** Maximum number of instances to scale the function to. */
  maxScale: number
  /** Runtime of the function. */
  runtime: FunctionRuntime
  /** Memory limit of the function in MB. */
  memoryLimit: number
  /** CPU limit of the function. */
  cpuLimit: number
  /** Request processing time limit for the function. */
  timeout?: string
  /** Handler to use for the function. */
  handler: string
  /** Error message if the function is in "error" state. */
  errorMessage?: string
  /** Description of the current build step. */
  buildMessage?: string
  /** Privacy setting of the function. */
  privacy: FunctionPrivacy
  /** Description of the function. */
  description?: string
  /** Domain name associated with the function. */
  domainName: string
  /** Secret environment variables of the function. */
  secretEnvironmentVariables: SecretHashedValue[]
  /** Region in which the function is deployed. */
  region: Region
  /**
   * Configuration for handling of HTTP and HTTPS requests. Possible values:
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
  /** Array of crons. */
  crons: Cron[]
  /** Total number of crons. */
  totalCount: number
}

/** List domains response. */
export interface ListDomainsResponse {
  /** Array of domains. */
  domains: Domain[]
  /** Total number of domains. */
  totalCount: number
}

/** List function runtimes response. */
export interface ListFunctionRuntimesResponse {
  /** Array of runtimes available. */
  runtimes: Runtime[]
  /** Total number of runtimes. */
  totalCount: number
}

/** List functions response. */
export interface ListFunctionsResponse {
  /** Array of functions. */
  functions: Function[]
  /** Total number of functions. */
  totalCount: number
}

/** List logs response. */
export interface ListLogsResponse {
  /** Array of logs. */
  logs: Log[]
  /** Total number of logs. */
  totalCount: number
}

/** List namespaces response. */
export interface ListNamespacesResponse {
  namespaces: Namespace[]
  /** Total number of namespaces. */
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
  /** Message of the log. */
  message: string
  /** Timestamp of the log. */
  timestamp?: Date
  /** UUID of the log. */
  id: string
  /** Severity of the log (info, debug, error etc.). */
  level: string
  /** Source of the log (core runtime or user code). */
  source: string
  /** Can be stdout or stderr. */
  stream: LogStream
}

/** Namespace. */
export interface Namespace {
  /** UUID of the namespace. */
  id: string
  /** Name of the namespace. */
  name: string
  /** Environment variables of the namespace. */
  environmentVariables: Record<string, string>
  /** UUID of the Organization the namespace belongs to. */
  organizationId: string
  /** UUID of the Project the namespace belongs to. */
  projectId: string
  /** Status of the namespace. */
  status: NamespaceStatus
  /** UUID of the registry namespace. */
  registryNamespaceId: string
  /** Error message if the namespace is in "error" state. */
  errorMessage?: string
  /** Registry endpoint of the namespace. */
  registryEndpoint: string
  /** Description of the namespace. */
  description?: string
  /** Secret environment variables of the namespace. */
  secretEnvironmentVariables: SecretHashedValue[]
  /** Region in which the namespace is located. */
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
  logoUrl: string
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
  /** UUID of the token. */
  id: string
  /** String of the token. */
  token: string
  /**
   * UUID of the function the token is associated with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  functionId?: string
  /**
   * UUID of the namespace the token is assoicated with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  namespaceId?: string
  /** @deprecated Public key of the token. */
  publicKey?: string
  /** Status of the token. */
  status: TokenStatus
  /** Description of the token. */
  description?: string
  /** Date on which the token expires. */
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
  mnqCredentialId?: string
}

export interface TriggerMnqSqsClientConfig {
  mnqNamespaceId: string
  queue: string
  mnqProjectId: string
  mnqRegion: string
  mnqCredentialId?: string
}

export interface TriggerSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}

export interface UpdateTriggerRequestSqsClientConfig {
  accessKey?: string
  secretKey?: string
}

/** Upload url. */
export interface UploadURL {
  /** Upload URL to upload the function to. */
  url: string
  /** HTTP headers. */
  headers: Record<string, string[]>
}

export type ListNamespacesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of namespaces per page. */
  pageSize?: number
  /** Order of the namespaces. */
  orderBy?: ListNamespacesRequestOrderBy
  /** Name of the namespace. */
  name?: string
  /** UUID of the Organization the namespace belongs to. */
  organizationId?: string
  /** UUID of the Project the namespace belongs to. */
  projectId?: string
}

export type GetNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the namespace. */
  namespaceId: string
}

export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  name?: string
  /** Environment variables of the namespace. */
  environmentVariables?: Record<string, string>
  /** UUID of the project in which the namespace will be created. */
  projectId?: string
  /** Description of the namespace. */
  description?: string
  /** Secret environment variables of the namespace. */
  secretEnvironmentVariables?: Secret[]
}

export type UpdateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the namespapce. */
  namespaceId: string
  /** Environment variables of the namespace. */
  environmentVariables?: Record<string, string>
  /** Description of the namespace. */
  description?: string
  /** Secret environment variables of the namespace. */
  secretEnvironmentVariables?: Secret[]
}

export type DeleteNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the namespace. */
  namespaceId: string
}

export type ListFunctionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of functions per page. */
  pageSize?: number
  /** Order of the functions. */
  orderBy?: ListFunctionsRequestOrderBy
  /** UUID of the namespace the function belongs to. */
  namespaceId: string
  /** Name of the function. */
  name?: string
  /** UUID of the Organziation the function belongs to. */
  organizationId?: string
  /** UUID of the Project the function belongs to. */
  projectId?: string
}

export type GetFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the function. */
  functionId: string
}

export type CreateFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name of the function to create. */
  name?: string
  /** UUID of the namespace the function will be created in. */
  namespaceId: string
  /** Environment variables of the function. */
  environmentVariables?: Record<string, string>
  /** Minumum number of instances to scale the function to. */
  minScale?: number
  /** Maximum number of instances to scale the function to. */
  maxScale?: number
  /** Runtime to use with the function. */
  runtime?: FunctionRuntime
  /** Memory limit of the function in MB. */
  memoryLimit?: number
  /** Request processing time limit for the function. */
  timeout?: string
  /** Handler to use with the function. */
  handler?: string
  /** Privacy setting of the function. */
  privacy?: FunctionPrivacy
  /** Description of the function. */
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
  /** UUID of the function to update. */
  functionId: string
  /** Environment variables of the function to update. */
  environmentVariables?: Record<string, string>
  /** Minumum number of instances to scale the function to. */
  minScale?: number
  /** Maximum number of instances to scale the function to. */
  maxScale?: number
  /** Runtime to use with the function. */
  runtime?: FunctionRuntime
  /** Memory limit of the function in MB. */
  memoryLimit?: number
  /** Processing time limit for the function. */
  timeout?: string
  /** Redeploy failed function. */
  redeploy?: boolean
  /** Handler to use with the function. */
  handler?: string
  /** Privacy setting of the function. */
  privacy?: FunctionPrivacy
  /** Description of the function. */
  description?: string
  /** Secret environment variables of the function. */
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
  /** UUID of the function to delete. */
  functionId: string
}

export type DeployFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the function to deploy. */
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
  /** UUID of the function to get the upload URL for. */
  functionId: string
  /** Size of the archive to upload in bytes. */
  contentLength: number
}

export type GetFunctionDownloadURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the function to get the the download URL for. */
  functionId: string
}

export type ListCronsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of crons per page. */
  pageSize?: number
  /** Order of the crons. */
  orderBy?: ListCronsRequestOrderBy
  /** UUID of the function. */
  functionId: string
}

export type GetCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the cron to get. */
  cronId: string
}

export type CreateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the function to use the cron with. */
  functionId: string
  /** Schedule of the cron in UNIX cron format. */
  schedule: string
  /** Arguments to use with the cron. */
  args?: Record<string, unknown>
  /** Name of the cron. */
  name?: string
}

export type UpdateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the cron to update. */
  cronId: string
  /** UUID of the function to use the cron with. */
  functionId?: string
  /** Schedule of the cron in UNIX cron format. */
  schedule?: string
  /** Arguments to use with the cron. */
  args?: Record<string, unknown>
  /** Name of the cron. */
  name?: string
}

export type DeleteCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the cron to delete. */
  cronId: string
}

export type ListLogsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the function to get the logs for. */
  functionId: string
  /** Page number. */
  page?: number
  /** Number of logs per page. */
  pageSize?: number
  /** Order of the logs. */
  orderBy?: ListLogsRequestOrderBy
}

export type ListDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of domains per page. */
  pageSize?: number
  /** Order of the domains. */
  orderBy?: ListDomainsRequestOrderBy
  /** UUID of the function the domain is assoicated with. */
  functionId: string
}

export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the domain to get. */
  domainId: string
}

export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hostame to create. */
  hostname: string
  /** UUID of the function to associate the domain with. */
  functionId: string
}

export type DeleteDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the domain to delete. */
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
  /**
   * UUID of the function to associate the token with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  functionId?: string
  /**
   * UUID of the namespace to associate the token with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  namespaceId?: string
  /** Description of the token. */
  description?: string
  /** Date on which the token expires. */
  expiresAt?: Date
}

export type GetTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the token to get. */
  tokenId: string
}

export type ListTokensRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of tokens per page. */
  pageSize?: number
  /** Sort order for the tokens. */
  orderBy?: ListTokensRequestOrderBy
  /** UUID of the function the token is assoicated with. */
  functionId?: string
  /** UUID of the namespace the token is associated with. */
  namespaceId?: string
}

export type DeleteTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the token to delete. */
  tokenId: string
}

export type CreateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  name: string
  description?: string
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
  /** One-of ('config'): at most one of 'sqsConfig' could be set. */
  sqsConfig?: UpdateTriggerRequestSqsClientConfig
}

export type DeleteTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  triggerId: string
}
