// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


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
  | 'node24'
  | 'node26'
  | 'go125'
  | 'go126'
  | 'php85'
  | 'python314'
  | 'rust196'

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
  mnqCredentialId?: string | null
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
  mnqCredentialId?: string | null
}


export interface TriggerSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}


export interface Secret {
  key: string
  value?: string | null
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
  /**
   * @deprecated 
   */
  endpoint: string
  /**
   * @deprecated 
   */
  queueUrl: string
  /**
   * @deprecated 
   */
  accessKey: string
  /**
   * @deprecated 
   */
  secretKey: string
}


export interface Cron {
  /**
   * UUID of the cron.
   */
  id: string
  /**
   * SRN of the cron.
   */
  srn: string
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
  args?: Record<string, unknown> | null
  /**
   * Status of the cron.
   */
  status: CronStatus
  /**
   * Name of the cron.
   */
  name: string
  /**
   * Region in which the cron is located.
   */
  region: ScwRegion
}


export interface Domain {
  /**
   * UUID of the domain.
   */
  id: string
  /**
   * SRN of the domain.
   */
  srn: string
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
  errorMessage?: string | null
  /**
   * Region in which the domain is located.
   */
  region: ScwRegion
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
   * SRN of the function.
   */
  srn: string
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
  timeout?: string | null
  /**
   * Handler to use for the function.
   */
  handler: string
  /**
   * Error message if the function is in "error" state.
   */
  errorMessage?: string | null
  /**
   * Description of the current build step.
   */
  buildMessage?: string | null
  /**
   * Privacy setting of the function.
   */
  privacy: FunctionPrivacy
  /**
   * Description of the function.
   */
  description?: string | null
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
  createdAt?: Date | null
  /**
   * Last update date of the function.
   */
  updatedAt?: Date | null
  /**
   * Last date when the function was successfully deployed and set to ready.
   */
  readyAt?: Date | null
  /**
   * List of tags applied to the Serverless Function.
   */
  tags: string[]
  /**
   * When connected to a Private Network, the function can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string | null
}


export interface Namespace {
  /**
   * UUID of the namespace.
   */
  id: string
  /**
   * SRN of the namespace.
   */
  srn: string
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
  errorMessage?: string | null
  /**
   * Registry endpoint of the namespace.
   */
  registryEndpoint: string
  /**
   * Description of the namespace.
   */
  description?: string | null
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
  createdAt?: Date | null
  /**
   * Last update date of the namespace.
   */
  updatedAt?: Date | null
  /**
   * @deprecated The value of this field doesn't matter anymore, and will be removed in a near future.
   */
  vpcIntegrationActivated?: boolean | null
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
  functionId?: string | null
  /**
   * UUID of the namespace the token is associated with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  namespaceId?: string | null
  /**
   * @deprecated Public key of the token.
   */
  publicKey?: string | null
  /**
   * Status of the token.
   */
  status: TokenStatus
  /**
   * Description of the token.
   */
  description?: string | null
  /**
   * Date on which the token expires.
   */
  expiresAt?: Date | null
}


export interface Trigger {
  /**
   * ID of the trigger.
   */
  id: string
  /**
   * SRN of the trigger.
   */
  srn: string
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
  errorMessage?: string | null
  /**
   * Configuration for a Scaleway Messaging and Queuing SQS queue.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  scwSqsConfig?: TriggerMnqSqsClientConfig | null
  /**
   * Configuration for a Scaleway Messaging and Queuing NATS subject.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  scwNatsConfig?: TriggerMnqNatsClientConfig | null
  /**
   * Configuration for an AWS SQS queue.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  sqsConfig?: TriggerSqsClientConfig | null
  /**
   * Region in which the trigger is located.
   */
  region: ScwRegion
}


export interface UpdateTriggerRequestSqsClientConfig {
  /**
   * @deprecated 
   */
  accessKey?: string | null
  /**
   * @deprecated 
   */
  secretKey?: string | null
}


export type CreateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
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
  args?: Record<string, unknown> | null
  /**
   * Name of the cron.
   */
  name?: string | null
}


export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
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
  region?: ScwRegion | null
  /**
   * Name of the function to create.
   */
  name?: string | null
  /**
   * UUID of the namespace the function will be created in.
   */
  namespaceId: string
  /**
   * Environment variables of the function.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * Minimum number of instances to scale the function to.
   */
  minScale?: number | null
  /**
   * Maximum number of instances to scale the function to.
   */
  maxScale?: number | null
  /**
   * Runtime to use with the function.
   */
  runtime?: FunctionRuntime | null
  /**
   * Memory limit of the function in MB.
   */
  memoryLimit?: number | null
  /**
   * Request processing time limit for the function.
   */
  timeout?: string | null
  /**
   * Handler to use with the function.
   */
  handler?: string | null
  /**
   * Privacy setting of the function.
   */
  privacy?: FunctionPrivacy | null
  /**
   * Description of the function.
   */
  description?: string | null
  secretEnvironmentVariables?: Secret[] | null
  /**
   * Possible values:
 - redirected: Responds to HTTP request with a 301 redirect to ask the clients to use HTTPS.
 - enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: FunctionHttpOption | null
  /**
   * Execution environment of the function.
   */
  sandbox?: FunctionSandbox | null
  /**
   * Tags of the Serverless Function.
   */
  tags?: string[] | null
  /**
   * When connected to a Private Network, the function can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string | null
}


export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  name?: string | null
  /**
   * Environment variables of the namespace.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * UUID of the project in which the namespace will be created.
   */
  projectId?: string | null
  /**
   * Description of the namespace.
   */
  description?: string | null
  /**
   * Secret environment variables of the namespace.
   */
  secretEnvironmentVariables?: Secret[] | null
  /**
   * Tags of the Serverless Function Namespace.
   */
  tags?: string[] | null
  /**
   * @deprecated Setting this field to true doesn't matter anymore. It will be removed in a near future.
   */
  activateVpcIntegration?: boolean | null
}


export type CreateTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the function to associate the token with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  functionId?: string | null
  /**
   * UUID of the namespace to associate the token with.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId' could be set.
   */
  namespaceId?: string | null
  /**
   * Description of the token.
   */
  description?: string | null
  /**
   * Date on which the token expires.
   */
  expiresAt?: Date | null
}


export type CreateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
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
  description?: string | null
  /**
   * Configuration for a Scaleway Messaging and Queuing SQS queue.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  scwSqsConfig?: CreateTriggerRequestMnqSqsClientConfig | null
  /**
   * Configuration for a Scaleway Messaging and Queuing NATS subject.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  scwNatsConfig?: CreateTriggerRequestMnqNatsClientConfig | null
  /**
   * @deprecated Configuration for an AWS SQS queue.
   *
   * One-of ('config'): at most one of 'scwSqsConfig', 'scwNatsConfig', 'sqsConfig' could be set.
   */
  sqsConfig?: CreateTriggerRequestSqsClientConfig | null
}


export type DeleteCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the cron to delete.
   */
  cronId: string
}


export type DeleteDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the domain to delete.
   */
  domainId: string
}


export type DeleteFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the function to delete.
   */
  functionId: string
}


export type DeleteNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the namespace.
   */
  namespaceId: string
}


export type DeleteTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the token to delete.
   */
  tokenId: string
}


export type DeleteTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the trigger to delete.
   */
  triggerId: string
}


export type DeployFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
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
  region?: ScwRegion | null
  /**
   * UUID of the cron to get.
   */
  cronId: string
}


export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the domain to get.
   */
  domainId: string
}


export type GetFunctionDownloadURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the function to get the download URL for.
   */
  functionId: string
}


export type GetFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the function.
   */
  functionId: string
}


export type GetFunctionUploadURLRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
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
  region?: ScwRegion | null
  /**
   * UUID of the namespace.
   */
  namespaceId: string
}


export type GetTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the token to get.
   */
  tokenId: string
}


export type GetTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the trigger to get.
   */
  triggerId: string
}


export type ListCronsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of crons per page.
   */
  pageSize?: number | null
  /**
   * Order of the crons.
   */
  orderBy?: ListCronsRequestOrderBy | null
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
  region?: ScwRegion | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of domains per page.
   */
  pageSize?: number | null
  /**
   * Order of the domains.
   */
  orderBy?: ListDomainsRequestOrderBy | null
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
  region?: ScwRegion | null
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
  region?: ScwRegion | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of functions per page.
   */
  pageSize?: number | null
  /**
   * Order of the functions.
   */
  orderBy?: ListFunctionsRequestOrderBy | null
  /**
   * UUID of the namespace the function belongs to.
   */
  namespaceId: string
  /**
   * Name of the function.
   */
  name?: string | null
  /**
   * UUID of the Organization the function belongs to.
   */
  organizationId?: string | null
  /**
   * UUID of the Project the function belongs to.
   */
  projectId?: string | null
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
  region?: ScwRegion | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of namespaces per page.
   */
  pageSize?: number | null
  /**
   * Order of the namespaces.
   */
  orderBy?: ListNamespacesRequestOrderBy | null
  /**
   * Name of the namespace.
   */
  name?: string | null
  /**
   * UUID of the Organization the namespace belongs to.
   */
  organizationId?: string | null
  /**
   * UUID of the Project the namespace belongs to.
   */
  projectId?: string | null
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
  region?: ScwRegion | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of tokens per page.
   */
  pageSize?: number | null
  /**
   * Sort order for the tokens.
   */
  orderBy?: ListTokensRequestOrderBy | null
  /**
   * UUID of the function the token is associated with.
   */
  functionId?: string | null
  /**
   * UUID of the namespace the token is associated with.
   */
  namespaceId?: string | null
}


export interface ListTokensResponse {
  tokens: Token[]
  totalCount: number
}


export type ListTriggersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Page number to return.
   */
  page?: number | null
  /**
   * Maximum number of triggers to return per page.
   */
  pageSize?: number | null
  /**
   * Order in which to return results.
   */
  orderBy?: ListTriggersRequestOrderBy | null
  /**
   * ID of the function the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId' could be set.
   */
  functionId?: string | null
  /**
   * ID of the namespace the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId' could be set.
   */
  namespaceId?: string | null
  /**
   * ID of the project the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'functionId', 'namespaceId', 'projectId' could be set.
   */
  projectId?: string | null
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
  region?: ScwRegion | null
  /**
   * UUID of the cron to update.
   */
  cronId: string
  /**
   * UUID of the function to use the cron with.
   */
  functionId?: string | null
  /**
   * Schedule of the cron in UNIX cron format.
   */
  schedule?: string | null
  /**
   * Arguments to use with the cron.
   */
  args?: Record<string, unknown> | null
  /**
   * Name of the cron.
   */
  name?: string | null
}


export type UpdateFunctionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the function to update.
   */
  functionId: string
  /**
   * Environment variables of the function to update.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * Minimum number of instances to scale the function to.
   */
  minScale?: number | null
  /**
   * Maximum number of instances to scale the function to.
   */
  maxScale?: number | null
  /**
   * Runtime to use with the function.
   */
  runtime?: FunctionRuntime | null
  /**
   * Memory limit of the function in MB.
   */
  memoryLimit?: number | null
  /**
   * Processing time limit for the function.
   */
  timeout?: string | null
  /**
   * Redeploy failed function.
   */
  redeploy?: boolean | null
  /**
   * Handler to use with the function.
   */
  handler?: string | null
  /**
   * Privacy setting of the function.
   */
  privacy?: FunctionPrivacy | null
  /**
   * Description of the function.
   */
  description?: string | null
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
  secretEnvironmentVariables?: Secret[] | null
  /**
   * Possible values:
 - redirected: Responds to HTTP request with a 301 redirect to ask the clients to use HTTPS.
 - enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: FunctionHttpOption | null
  /**
   * Execution environment of the function.
   */
  sandbox?: FunctionSandbox | null
  /**
   * Tags of the Serverless Function.
   */
  tags?: string[] | null
  /**
   * When connected to a Private Network, the function can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string | null
}


export type UpdateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the namespapce.
   */
  namespaceId: string
  /**
   * Environment variables of the namespace.
   */
  environmentVariables?: Record<string, string> | null
  /**
   * Description of the namespace.
   */
  description?: string | null
  /**
   * Secret environment variables of the namespace.
   */
  secretEnvironmentVariables?: Secret[] | null
  /**
   * Tags of the Serverless Function Namespace.
   */
  tags?: string[] | null
}


export type UpdateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the trigger to update.
   */
  triggerId: string
  /**
   * Name of the trigger.
   */
  name?: string | null
  /**
   * Description of the trigger.
   */
  description?: string | null
  /**
   * @deprecated Configuration for an AWS SQS queue.
   *
   * One-of ('config'): at most one of 'sqsConfig' could be set.
   */
  sqsConfig?: UpdateTriggerRequestSqsClientConfig | null
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


