// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, } from '@scaleway/sdk-client'


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

export type FunctionPrivacy =
  | 'unknown_privacy'
  | 'public'
  | 'private'

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
  | 'node22'
  | 'python312'
  | 'php83'
  | 'go122'
  | 'rust179'
  | 'go123'
  | 'go124'
  | 'python313'
  | 'rust185'
  | 'php84'

export type FunctionSandbox =
  | 'unknown_sandbox'
  | 'v1'
  | 'v2'

export type FunctionStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'
  | 'created'

export type ListCronsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

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

export type ListNamespacesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListTokensRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListTriggersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type NamespaceStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'

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

export interface SecretHashedValue {
  key: string
  hashedValue: string
}


export interface TriggerMnqNatsClientConfig {
  /**
   * Name of the NATS subject the trigger listens to.
   */
  subject: string
  /**
   * ID of the Messaging and Queuing NATS account.
   */
  mnqNatsAccountId: string
  /**
   * ID of the Messaging and Queuing project.
   */
  mnqProjectId: string
  /**
   * Currently, only the `fr-par` and `nl-ams` regions are available.
   */
  mnqRegion: string
  /**
   * ID of the Messaging and Queuing credentials used to subscribe to the NATS subject.
   */
  mnqCredentialId?: string
}


export interface TriggerMnqSqsClientConfig {
  /**
   * Name of the SQS queue the trigger listens to.
   */
  queue: string
  /**
   * ID of the Messaging and Queuing project.
   */
  mnqProjectId: string
  /**
   * Currently, only the `fr-par` and `nl-ams` regions are available.
   */
  mnqRegion: string
  /**
   * ID of the Messaging and Queuing credentials used to read from the SQS queue.
   */
  mnqCredentialId?: string
}


export interface TriggerSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}


export interface Secret {
  key: string
  value?: string
}


export interface CreateTriggerRequestMnqNatsClientConfig {
  /**
   * Name of the NATS subject the trigger should listen to.
   */
  subject: string
  /**
   * ID of the Messaging and Queuing NATS account.
   */
  mnqNatsAccountId: string
  /**
   * ID of the Messaging and Queuing project.
   */
  mnqProjectId: string
  /**
   * Currently, only the `fr-par` and `nl-ams` regions are available.
   */
  mnqRegion: string
}


export interface CreateTriggerRequestMnqSqsClientConfig {
  /**
   * Name of the SQS queue the trigger should listen to.
   */
  queue: string
  /**
   * You must have activated SQS on this project.
   */
  mnqProjectId: string
  /**
   * Currently, only the `fr-par` and `nl-ams` regions are available.
   */
  mnqRegion: string
}


export interface CreateTriggerRequestSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}


export interface Cron {
  /**
   * UUID of the cron.
   */
  id: string
  /**
   * UUID of the function the cron applies to.
   */
  functionId: string
  /**
   * Schedule of the cron.
   */
  schedule: string
  /**
   * Arguments to pass with the cron.
   */
  args?: Record<string, unknown>
  /**
   * Status of the cron.
   */
  status: CronStatus
  /**
   * Name of the cron.
   */
  name: string
}


export interface Domain {
  /**
   * UUID of the domain.
   */
  id: string
  /**
   * Hostname associated with the function.
   */
  hostname: string
  /**
   * UUID of the function the domain is associated with.
   */
  functionId: string
  /**
   * URL of the function.
   */
  url: string
  /**
   * State of the domain.
   */
  status: DomainStatus
  /**
   * Error message if the domain is in "error" state.
   */
  errorMessage?: string
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


export interface Function {
  /**
   * UUID of the function.
   */
  id: string
  /**
   * Name of the function.
   */
  name: string
  /**
   * UUID of the namespace the function belongs to.
   */
  namespaceId: string
  /**
   * Status of the function.
   */
  status: FunctionStatus
  /**
   * Environment variables of the function.
   */
  environmentVariables: Record<string, string>
  /**
   * Minimum number of instances to scale the function to.
   */
  minScale: number
  /**
   * Maximum number of instances to scale the function to.
   */
  maxScale: number
  /**
   * Runtime of the function.
   */
  runtime: FunctionRuntime
  /**
   * Memory limit of the function in MB.
   */
  memoryLimit: number
  /**
   * CPU limit of the function.
   */
  cpuLimit: number
  /**
   * Request processing time limit for the function.
   */
  timeout?: string
  /**
   * Handler to use for the function.
   */
  handler: string
  /**
   * Error message if the function is in "error" state.
   */
  errorMessage?: string
  /**
   * Description of the current build step.
   */
  buildMessage?: string
  /**
   * Privacy setting of the function.
   */
  privacy: FunctionPrivacy
  /**
   * Description of the function.
   */
  description?: string
  /**
   * Domain name associated with the function.
   */
  domainName: string
  /**
   * Secret environment variables of the function.
   */
  secretEnvironmentVariables: SecretHashedValue[]
  /**
   * Region in which the function is deployed.
   */
  region: ScwRegion
  /**
   * Possible values:
 - redirected: Responds to HTTP request with a 301 redirect to ask the clients to use HTTPS.
 - enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption: FunctionHttpOption
  runtimeMessage: string
  /**
   * Execution environment of the function.
   */
  sandbox: FunctionSandbox
  /**
   * Creation date of the function.
   */
  createdAt?: Date
  /**
   * Last update date of the function.
   */
  updatedAt?: Date
  /**
   * Last date when the function was successfully deployed and set to ready.
   */
  readyAt?: Date
  /**
   * List of tags applied to the Serverless Function.
   */
  tags: string[]
  /**
   * When connected to a Private Network, the function can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
}


export interface Namespace {
  /**
   * UUID of the namespace.
   */
  id: string
  /**
   * Name of the namespace.
   */
  name: string
  /**
   * Environment variables of the namespace.
   */
  environmentVariables: Record<string, string>
  /**
   * UUID of the Organization the namespace belongs to.
   */
  organizationId: string
  /**
   * UUID of the Project the namespace belongs to.
   */
  projectId: string
  /**
   * Status of the namespace.
   */
  status: NamespaceStatus
  /**
   * UUID of the registry namespace.
   */
  registryNamespaceId: string
  /**
   * Error message if the namespace is in "error" state.
   */
  errorMessage?: string
  /**
   * Registry endpoint of the namespace.
   */
  registryEndpoint: string
  /**
   * Description of the namespace.
   */
  description?: string
  /**
   * Secret environment variables of the namespace.
   */
  secretEnvironmentVariables: SecretHashedValue[]
  /**
   * Region in which the namespace is located.
   */
  region: ScwRegion
  /**
   * List of tags applied to the Serverless Function Namespace.
   */
  tags: string[]
  /**
   * Creation date of the namespace.
   */
  createdAt?: Date
  /**
   * Last update date of the namespace.
   */
  updatedAt?: Date
  /**
   * @deprecated The value of this field doesn't matter anymore, and will be removed in a near future.
   */
  vpcIntegrationActivated: boolean
}


export interface Token {
  /**
   * UUID of the token.
   */
  id: string
  /**
   * String of the token.
   */
  token: string
  /**
   * UUID of the function the token is associated with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  functionId?: string
  /**
   * UUID of the namespace the token is associated with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  namespaceId?: string
  /**
   * @deprecated Public key of the token.
   */
  publicKey: string
  /**
   * Status of the token.
   */
  status: TokenStatus
  /**
   * Description of the token.
   */
  description?: string
  /**
   * Date on which the token expires.
   */
  expiresAt?: Date
}


export interface Trigger {
  /**
   * ID of the trigger.
   */
  id: string
  /**
   * Name of the trigger.
   */
  name: string
  /**
   * Description of the trigger.
   */
  description: string
  /**
   * ID of the function to trigger.
   */
  functionId: string
  /**
   * Type of the input.
   */
  inputType: TriggerInputType
  /**
   * Status of the trigger.
   */
  status: TriggerStatus
  /**
   * Error message of the trigger.
   */
  errorMessage?: string
  /**
   * Configuration for a Scaleway Messaging and Queuing SQS queue.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  scwSqsConfig?: TriggerMnqSqsClientConfig
  /**
   * Configuration for a Scaleway Messaging and Queuing NATS subject.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  scwNatsConfig?: TriggerMnqNatsClientConfig
  /**
   * Configuration for an AWS SQS queue.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  sqsConfig?: TriggerSqsClientConfig
}


export interface UpdateTriggerRequestSqsClientConfig {
  accessKey?: string
  secretKey?: string
}


export type CreateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the function to use the cron with.
   */
  functionId: string
  /**
   * Schedule of the cron in UNIX cron format.
   */
  schedule: string
  /**
   * Arguments to use with the cron.
   */
  args?: Record<string, unknown>
  /**
   * Name of the cron.
   */
  name?: string
}


export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hostname to create.
   */
  hostname: string
  /**
   * UUID of the function to associate the domain with.
   */
  functionId: string
}


export type CreateFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the function to create.
   */
  name?: string
  /**
   * UUID of the namespace the function will be created in.
   */
  namespaceId: string
  /**
   * Environment variables of the function.
   */
  environmentVariables?: Record<string, string>
  /**
   * Minimum number of instances to scale the function to.
   */
  minScale?: number
  /**
   * Maximum number of instances to scale the function to.
   */
  maxScale?: number
  /**
   * Runtime to use with the function.
   */
  runtime?: FunctionRuntime
  /**
   * Memory limit of the function in MB.
   */
  memoryLimit?: number
  /**
   * Request processing time limit for the function.
   */
  timeout?: string
  /**
   * Handler to use with the function.
   */
  handler?: string
  /**
   * Privacy setting of the function.
   */
  privacy?: FunctionPrivacy
  /**
   * Description of the function.
   */
  description?: string
  secretEnvironmentVariables?: Secret[]
  /**
   * Possible values:
 - redirected: Responds to HTTP request with a 301 redirect to ask the clients to use HTTPS.
 - enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: FunctionHttpOption
  /**
   * Execution environment of the function.
   */
  sandbox?: FunctionSandbox
  /**
   * Tags of the Serverless Function.
   */
  tags?: string[]
  /**
   * When connected to a Private Network, the function can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
}


export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  name?: string
  /**
   * Environment variables of the namespace.
   */
  environmentVariables?: Record<string, string>
  /**
   * UUID of the project in which the namespace will be created.
   */
  projectId?: string
  /**
   * Description of the namespace.
   */
  description?: string
  /**
   * Secret environment variables of the namespace.
   */
  secretEnvironmentVariables?: Secret[]
  /**
   * Tags of the Serverless Function Namespace.
   */
  tags?: string[]
  /**
   * @deprecated Setting this field to true doesn't matter anymore. It will be removed in a near future.
   */
  activateVpcIntegration: boolean
}


export type CreateTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
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
  /**
   * Description of the token.
   */
  description?: string
  /**
   * Date on which the token expires.
   */
  expiresAt?: Date
}


export type CreateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the trigger.
   */
  name: string
  /**
   * ID of the function to trigger.
   */
  functionId: string
  /**
   * Description of the trigger.
   */
  description?: string
  /**
   * Configuration for a Scaleway Messaging and Queuing SQS queue.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  scwSqsConfig?: CreateTriggerRequestMnqSqsClientConfig
  /**
   * Configuration for a Scaleway Messaging and Queuing NATS subject.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  scwNatsConfig?: CreateTriggerRequestMnqNatsClientConfig
  /**
   * Configuration for an AWS SQS queue.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  sqsConfig?: CreateTriggerRequestSqsClientConfig
}


export type DeleteCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the cron to delete.
   */
  cronId: string
}


export type DeleteDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the domain to delete.
   */
  domainId: string
}


export type DeleteFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the function to delete.
   */
  functionId: string
}


export type DeleteNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespace.
   */
  namespaceId: string
}


export type DeleteTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the token to delete.
   */
  tokenId: string
}


export type DeleteTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the trigger to delete.
   */
  triggerId: string
}


export type DeployFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the function to deploy.
   */
  functionId: string
}


export interface DownloadURL {
  url: string
  headers: Record<string, string[]>
}


export type GetCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the cron to get.
   */
  cronId: string
}


export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the domain to get.
   */
  domainId: string
}


export type GetFunctionDownloadURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the function to get the download URL for.
   */
  functionId: string
}


export type GetFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the function.
   */
  functionId: string
}


export type GetFunctionUploadURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the function to get the upload URL for.
   */
  functionId: string
  /**
   * Size of the archive to upload in bytes.
   */
  contentLength: number
}


export type GetNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespace.
   */
  namespaceId: string
}


export type GetTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the token to get.
   */
  tokenId: string
}


export type GetTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the trigger to get.
   */
  triggerId: string
}


export type ListCronsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of crons per page.
   */
  pageSize?: number
  /**
   * Order of the crons.
   */
  orderBy?: ListCronsRequestOrderBy
  /**
   * UUID of the function.
   */
  functionId: string
}


export interface ListCronsResponse {
  /**
   * Array of crons.
   */
  crons: Cron[]
  /**
   * Total number of crons.
   */
  totalCount: number
}


export type ListDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of domains per page.
   */
  pageSize?: number
  /**
   * Order of the domains.
   */
  orderBy?: ListDomainsRequestOrderBy
  /**
   * UUID of the function the domain is associated with.
   */
  functionId: string
}


export interface ListDomainsResponse {
  /**
   * Array of domains.
   */
  domains: Domain[]
  /**
   * Total number of domains.
   */
  totalCount: number
}


export type ListFunctionRuntimesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
}


export interface ListFunctionRuntimesResponse {
  /**
   * Array of runtimes available.
   */
  runtimes: Runtime[]
  /**
   * Total number of runtimes.
   */
  totalCount: number
}


export type ListFunctionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of functions per page.
   */
  pageSize?: number
  /**
   * Order of the functions.
   */
  orderBy?: ListFunctionsRequestOrderBy
  /**
   * UUID of the namespace the function belongs to.
   */
  namespaceId: string
  /**
   * Name of the function.
   */
  name?: string
  /**
   * UUID of the Organization the function belongs to.
   */
  organizationId?: string
  /**
   * UUID of the Project the function belongs to.
   */
  projectId?: string
}


export interface ListFunctionsResponse {
  /**
   * Array of functions.
   */
  functions: Function[]
  /**
   * Total number of functions.
   */
  totalCount: number
}


export type ListNamespacesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of namespaces per page.
   */
  pageSize?: number
  /**
   * Order of the namespaces.
   */
  orderBy?: ListNamespacesRequestOrderBy
  /**
   * Name of the namespace.
   */
  name?: string
  /**
   * UUID of the Organization the namespace belongs to.
   */
  organizationId?: string
  /**
   * UUID of the Project the namespace belongs to.
   */
  projectId?: string
}


export interface ListNamespacesResponse {
  namespaces: Namespace[]
  /**
   * Total number of namespaces.
   */
  totalCount: number
}


export type ListTokensRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of tokens per page.
   */
  pageSize?: number
  /**
   * Sort order for the tokens.
   */
  orderBy?: ListTokensRequestOrderBy
  /**
   * UUID of the function the token is associated with.
   */
  functionId?: string
  /**
   * UUID of the namespace the token is associated with.
   */
  namespaceId?: string
}


export interface ListTokensResponse {
  tokens: Token[]
  totalCount: number
}


export type ListTriggersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of triggers to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListTriggersRequestOrderBy
  /**
   * ID of the function the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId' could be set.
   */
  functionId?: string
  /**
   * ID of the namespace the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId' could be set.
   */
  namespaceId?: string
  /**
   * ID of the project the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId' could be set.
   */
  projectId?: string
}


export interface ListTriggersResponse {
  /**
   * Total count of existing triggers (matching any filters specified).
   */
  totalCount: number
  /**
   * Triggers on this page.
   */
  triggers: Trigger[]
}


export type UpdateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the cron to update.
   */
  cronId: string
  /**
   * UUID of the function to use the cron with.
   */
  functionId?: string
  /**
   * Schedule of the cron in UNIX cron format.
   */
  schedule?: string
  /**
   * Arguments to use with the cron.
   */
  args?: Record<string, unknown>
  /**
   * Name of the cron.
   */
  name?: string
}


export type UpdateFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the function to update.
   */
  functionId: string
  /**
   * Environment variables of the function to update.
   */
  environmentVariables?: Record<string, string>
  /**
   * Minimum number of instances to scale the function to.
   */
  minScale?: number
  /**
   * Maximum number of instances to scale the function to.
   */
  maxScale?: number
  /**
   * Runtime to use with the function.
   */
  runtime?: FunctionRuntime
  /**
   * Memory limit of the function in MB.
   */
  memoryLimit?: number
  /**
   * Processing time limit for the function.
   */
  timeout?: string
  /**
   * Redeploy failed function.
   */
  redeploy?: boolean
  /**
   * Handler to use with the function.
   */
  handler?: string
  /**
   * Privacy setting of the function.
   */
  privacy?: FunctionPrivacy
  /**
   * Description of the function.
   */
  description?: string
  /**
   * During an update, secret environment variables that are not specified in this field will be kept unchanged.

In order to delete a specific secret environment variable, you must reference its key, but not provide any value for it.
For example, the following payload will delete the `TO_DELETE` secret environment variable:

```json
{
 "secret_environment_variables":[
   {"key":"TO_DELETE"}
 ]
}
```.
   */
  secretEnvironmentVariables?: Secret[]
  /**
   * Possible values:
 - redirected: Responds to HTTP request with a 301 redirect to ask the clients to use HTTPS.
 - enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: FunctionHttpOption
  /**
   * Execution environment of the function.
   */
  sandbox?: FunctionSandbox
  /**
   * Tags of the Serverless Function.
   */
  tags?: string[]
  /**
   * When connected to a Private Network, the function can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
}


export type UpdateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespapce.
   */
  namespaceId: string
  /**
   * Environment variables of the namespace.
   */
  environmentVariables?: Record<string, string>
  /**
   * Description of the namespace.
   */
  description?: string
  /**
   * Secret environment variables of the namespace.
   */
  secretEnvironmentVariables?: Secret[]
  /**
   * Tags of the Serverless Function Namespace.
   */
  tags?: string[]
}


export type UpdateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the trigger to update.
   */
  triggerId: string
  /**
   * Name of the trigger.
   */
  name?: string
  /**
   * Description of the trigger.
   */
  description?: string
  /**
   * Configuration for an AWS SQS queue.
   *
   * One-of ('config'): at most one of 'sqsConfig' could be set.
   */
  sqsConfig?: UpdateTriggerRequestSqsClientConfig
}


export interface UploadURL {
  /**
   * Upload URL to upload the function to.
   */
  url: string
  /**
   * HTTP headers.
   */
  headers: Record<string, string[]>
}


