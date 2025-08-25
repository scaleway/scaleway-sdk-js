// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type ContainerHttpOption =
  | 'unknown_http_option'
  | 'enabled'
  | 'redirected'

export type ContainerPrivacy = 'unknown_privacy' | 'public' | 'private'

export type ContainerProtocol = 'unknown_protocol' | 'http1' | 'h2c'

export type ContainerSandbox = 'unknown_sandbox' | 'v1' | 'v2'

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

export type ListNamespacesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListTokensRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListTriggersRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type NamespaceStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'

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

export interface ContainerHealthCheckSpecHTTPProbe {
  /**
   * Path to use for the HTTP health check.
   */
  path: string
}

export interface ContainerHealthCheckSpecTCPProbe {}

export interface ContainerHealthCheckSpec {
  /**
   * HTTP health check configuration.
   *
   * One-of ('probe'): at most one of 'http', 'tcp' could be set.
   */
  http?: ContainerHealthCheckSpecHTTPProbe
  /**
   * TCP health check configuration.
   *
   * One-of ('probe'): at most one of 'http', 'tcp' could be set.
   */
  tcp?: ContainerHealthCheckSpecTCPProbe
  /**
   * During a deployment, if a newly created container fails to pass the health check, the deployment is aborted. 
As a result, lowering this value can help to reduce the time it takes to detect a failed deployment.
   */
  failureThreshold: number
  /**
   * Period between health checks.
   */
  interval?: string
}

export interface ContainerScalingOption {
  /**
   *
   * One-of ('scalingRule'): at most one of 'concurrentRequestsThreshold', 'cpuUsageThreshold', 'memoryUsageThreshold' could be set.
   */
  concurrentRequestsThreshold?: number
  /**
   *
   * One-of ('scalingRule'): at most one of 'concurrentRequestsThreshold', 'cpuUsageThreshold', 'memoryUsageThreshold' could be set.
   */
  cpuUsageThreshold?: number
  /**
   *
   * One-of ('scalingRule'): at most one of 'concurrentRequestsThreshold', 'cpuUsageThreshold', 'memoryUsageThreshold' could be set.
   */
  memoryUsageThreshold?: number
}

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

export interface Container {
  /**
   * UUID of the container.
   */
  id: string
  /**
   * Name of the container.
   */
  name: string
  /**
   * UUID of the namespace the container belongs to.
   */
  namespaceId: string
  /**
   * Status of the container.
   */
  status: ContainerStatus
  /**
   * Environment variables of the container.
   */
  environmentVariables: Record<string, string>
  /**
   * Minimum number of instances to scale the container to.
   */
  minScale: number
  /**
   * Maximum number of instances to scale the container to.
   */
  maxScale: number
  /**
   * Memory limit of the container in MB.
   */
  memoryLimit: number
  /**
   * CPU limit of the container in mvCPU.
   */
  cpuLimit: number
  /**
   * Processing time limit for the container.
   */
  timeout?: string
  /**
   * Last error message of the container.
   */
  errorMessage?: string
  /**
   * Privacy setting of the container.
   */
  privacy: ContainerPrivacy
  /**
   * Description of the container.
   */
  description?: string
  /**
   * Name of the registry image (e.g. "rg.fr-par.scw.cloud/something/image:tag").
   */
  registryImage: string
  /**
   * Number of maximum concurrent executions of the container.
   */
  maxConcurrency: number
  /**
   * Domain name attributed to the contaioner.
   */
  domainName: string
  /**
   * Protocol the container uses.
   */
  protocol: ContainerProtocol
  /**
   * Port the container listens on.
   */
  port: number
  /**
   * Secret environment variables of the container.
   */
  secretEnvironmentVariables: SecretHashedValue[]
  /**
   * Possible values:
 - redirected: Responds to HTTP request with a 301 redirect to ask the clients to use HTTPS.
 - enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption: ContainerHttpOption
  /**
   * Execution environment of the container.
   */
  sandbox: ContainerSandbox
  /**
   * Local storage limit of the container (in MB).
   */
  localStorageLimit: number
  /**
   * Possible values:
- concurrent_requests_threshold: Scale depending on the number of concurrent requests being processed per container instance.
- cpu_usage_threshold: Scale depending on the CPU usage of a container instance.
- memory_usage_threshold: Scale depending on the memory usage of a container instance.
   */
  scalingOption?: ContainerScalingOption
  /**
   * Health check configuration of the container.
   */
  healthCheck?: ContainerHealthCheckSpec
  /**
   * Creation date of the container.
   */
  createdAt?: Date
  /**
   * Last update date of the container.
   */
  updatedAt?: Date
  /**
   * Last date when the container was successfully deployed and set to ready.
   */
  readyAt?: Date
  /**
   * Region in which the container will be deployed.
   */
  region: ScwRegion
  /**
   * List of tags applied to the Serverless Container.
   */
  tags: string[]
  /**
   * When connected to a Private Network, the container can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
  /**
   * Command executed when the container starts. This overrides the default command defined in the container image. This is usually the main executable, or entry point script to run.
   */
  command: string[]
  /**
   * Arguments passed to the command specified in the "command" field. These override the default arguments from the container image, and behave like command-line parameters.
   */
  args: string[]
}

export interface Cron {
  /**
   * UUID of the cron.
   */
  id: string
  /**
   * UUID of the container invoked by this cron.
   */
  containerId: string
  /**
   * UNIX cron shedule.
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
   * Domain assigned to the container.
   */
  hostname: string
  /**
   * UUID of the container.
   */
  containerId: string
  /**
   * URL (TBD).
   */
  url: string
  /**
   * Status of the domain.
   */
  status: DomainStatus
  /**
   * Last error message of the domain.
   */
  errorMessage?: string
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
   * Last error message of the namesace.
   */
  errorMessage?: string
  /**
   * Registry endpoint of the namespace.
   */
  registryEndpoint: string
  /**
   * Description of the endpoint.
   */
  description?: string
  /**
   * Secret environment variables of the namespace.
   */
  secretEnvironmentVariables: SecretHashedValue[]
  /**
   * Region in which the namespace will be created.
   */
  region: ScwRegion
  /**
   * List of tags applied to the Serverless Container Namespace.
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
  vpcIntegrationActivated?: boolean
}

export interface Token {
  /**
   * UUID of the token.
   */
  id: string
  /**
   * Identifier of the token.
   */
  token: string
  /**
   * UUID of the container the token belongs to.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set.
   */
  containerId?: string
  /**
   * UUID of the namespace the token belongs to.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set.
   */
  namespaceId?: string
  /**
   * @deprecated Public key of the token.
   */
  publicKey?: string
  /**
   * Status of the token.
   */
  status: TokenStatus
  /**
   * Description of the token.
   */
  description?: string
  /**
   * Expiry date of the token.
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
   * ID of the container to trigger.
   */
  containerId: string
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

export type CreateContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespace the container belongs to.
   */
  namespaceId: string
  /**
   * Name of the container.
   */
  name: string
  /**
   * Environment variables of the container.
   */
  environmentVariables?: Record<string, string>
  /**
   * Minimum number of instances to scale the container to.
   */
  minScale?: number
  /**
   * Maximum number of instances to scale the container to.
   */
  maxScale?: number
  /**
   * Memory limit of the container in MB.
   */
  memoryLimit?: number
  /**
   * CPU limit of the container in mvCPU.
   */
  cpuLimit?: number
  /**
   * Processing time limit for the container.
   */
  timeout?: string
  /**
   * Privacy setting of the container.
   */
  privacy?: ContainerPrivacy
  /**
   * Description of the container.
   */
  description?: string
  /**
   * Name of the registry image (e.g. "rg.fr-par.scw.cloud/something/image:tag").
   */
  registryImage?: string
  /**
   * @deprecated Number of maximum concurrent executions of the container.
   */
  maxConcurrency?: number
  /**
   * Protocol the container uses.
   */
  protocol?: ContainerProtocol
  /**
   * Port the container listens on.
   */
  port?: number
  /**
   * Secret environment variables of the container.
   */
  secretEnvironmentVariables?: Secret[]
  /**
   * Possible values:
 - redirected: Responds to HTTP request with a 301 redirect to ask the clients to use HTTPS.
 - enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: ContainerHttpOption
  /**
   * Execution environment of the container.
   */
  sandbox?: ContainerSandbox
  /**
   * Local storage limit of the container (in MB).
   */
  localStorageLimit?: number
  /**
   * Possible values:
- concurrent_requests_threshold: Scale depending on the number of concurrent requests being processed per container instance.
- cpu_usage_threshold: Scale depending on the CPU usage of a container instance.
- memory_usage_threshold: Scale depending on the memory usage of a container instance.
   */
  scalingOption?: ContainerScalingOption
  /**
   * Health check configuration of the container.
   */
  healthCheck?: ContainerHealthCheckSpec
  /**
   * Tags of the Serverless Container.
   */
  tags?: string[]
  /**
   * When connected to a Private Network, the container can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
  /**
   * Command executed when the container starts. This overrides the default command defined in the container image. This is usually the main executable, or entry point script to run.
   */
  command?: string[]
  /**
   * Arguments passed to the command specified in the "command" field. These override the default arguments from the container image, and behave like command-line parameters.
   */
  args?: string[]
}

export type CreateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the container to invoke by the cron.
   */
  containerId: string
  /**
   * UNIX cron shedule.
   */
  schedule: string
  /**
   * Arguments to pass with the cron.
   */
  args?: Record<string, unknown>
  /**
   * Name of the cron to create.
   */
  name?: string
}

export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Domain to assign.
   */
  hostname: string
  /**
   * UUID of the container to assign the domain to.
   */
  containerId: string
}

export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the namespace to create.
   */
  name?: string
  /**
   * Environment variables of the namespace to create.
   */
  environmentVariables?: Record<string, string>
  /**
   * UUID of the Project in which the namespace will be created.
   */
  projectId?: string
  /**
   * Description of the namespace to create.
   */
  description?: string
  /**
   * Secret environment variables of the namespace to create.
   */
  secretEnvironmentVariables?: Secret[]
  /**
   * Tags of the Serverless Container Namespace.
   */
  tags?: string[]
  /**
   * @deprecated Setting this field to true doesn't matter anymore. It will be removed in a near future.
   */
  activateVpcIntegration?: boolean
}

export type CreateTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the container to create the token for.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set.
   */
  containerId?: string
  /**
   * UUID of the namespace to create the token for.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set.
   */
  namespaceId?: string
  /**
   * Description of the token.
   */
  description?: string
  /**
   * Expiry date of the token.
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
   * ID of the container to trigger.
   */
  containerId: string
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

export type DeleteContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the container to delete.
   */
  containerId: string
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

export type DeleteNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespace to delete.
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

export type DeployContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the container to deploy.
   */
  containerId: string
}

export type GetContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the container to get.
   */
  containerId: string
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

export type GetNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespace to get.
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

export type ListContainersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of containers per page.
   */
  pageSize?: number
  /**
   * Order of the containers.
   */
  orderBy?: ListContainersRequestOrderBy
  /**
   * UUID of the namespace the container belongs to.
   */
  namespaceId: string
  /**
   * Name of the container.
   */
  name?: string
  /**
   * UUID of the Organization the container belongs to.
   */
  organizationId?: string
  /**
   * UUID of the Project the container belongs to.
   */
  projectId?: string
}

export interface ListContainersResponse {
  /**
   * Array of containers.
   */
  containers: Container[]
  /**
   * Total number of containers.
   */
  totalCount: number
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
   * UUID of the container invoked by the cron.
   */
  containerId: string
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
   * UUID of the container the domain belongs to.
   */
  containerId: string
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
   * Name of the namespaces.
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
  /**
   * Array of the namespaces.
   */
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
   * Order of the tokens.
   */
  orderBy?: ListTokensRequestOrderBy
  /**
   * UUID of the container the token belongs to.
   */
  containerId?: string
  /**
   * UUID of the namespace the token belongs to.
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
   * ID of the container the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId', 'projectId' could be set.
   */
  containerId?: string
  /**
   * ID of the namespace the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId', 'projectId' could be set.
   */
  namespaceId?: string
  /**
   * ID of the project the triggers belongs to.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId', 'projectId' could be set.
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

export type UpdateContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the container to update.
   */
  containerId: string
  /**
   * Environment variables of the container.
   */
  environmentVariables?: Record<string, string>
  /**
   * Minimum number of instances to scale the container to.
   */
  minScale?: number
  /**
   * Maximum number of instances to scale the container to.
   */
  maxScale?: number
  /**
   * Memory limit of the container in MB.
   */
  memoryLimit?: number
  /**
   * CPU limit of the container in mvCPU.
   */
  cpuLimit?: number
  /**
   * Processing time limit for the container.
   */
  timeout?: string
  /**
   * Defines whether to redeploy failed containers.
   */
  redeploy?: boolean
  /**
   * Privacy settings of the container.
   */
  privacy?: ContainerPrivacy
  /**
   * Description of the container.
   */
  description?: string
  /**
   * Name of the registry image (e.g. "rg.fr-par.scw.cloud/something/image:tag").
   */
  registryImage?: string
  /**
   * @deprecated Number of maximum concurrent executions of the container.
   */
  maxConcurrency?: number
  /**
   * Protocol the container uses.
   */
  protocol?: ContainerProtocol
  /**
   * Port the container listens on.
   */
  port?: number
  /**
   * Secret environment variables of the container.
   */
  secretEnvironmentVariables?: Secret[]
  /**
   * Possible values:
 - redirected: Responds to HTTP request with a 301 redirect to ask the clients to use HTTPS.
 - enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: ContainerHttpOption
  /**
   * Execution environment of the container.
   */
  sandbox?: ContainerSandbox
  /**
   * Local storage limit of the container (in MB).
   */
  localStorageLimit?: number
  /**
   * Possible values:
- concurrent_requests_threshold: Scale depending on the number of concurrent requests being processed per container instance.
- cpu_usage_threshold: Scale depending on the CPU usage of a container instance.
- memory_usage_threshold: Scale depending on the memory usage of a container instance.
   */
  scalingOption?: ContainerScalingOption
  /**
   * Health check configuration of the container.
   */
  healthCheck?: ContainerHealthCheckSpec
  /**
   * Tags of the Serverless Container.
   */
  tags?: string[]
  /**
   * When connected to a Private Network, the container can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
  /**
   * Command executed when the container starts. This overrides the default command defined in the container image. This is usually the main executable, or entry point script to run.
   */
  command?: string[]
  /**
   * Arguments passed to the command specified in the "command" field. These override the default arguments from the container image, and behave like command-line parameters.
   */
  args?: string[]
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
   * UUID of the container invoked by the cron.
   */
  containerId?: string
  /**
   * UNIX cron schedule.
   */
  schedule?: string
  /**
   * Arguments to pass with the cron.
   */
  args?: Record<string, unknown>
  /**
   * Name of the cron.
   */
  name?: string
}

export type UpdateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespace to update.
   */
  namespaceId: string
  /**
   * Environment variables of the namespace to update.
   */
  environmentVariables?: Record<string, string>
  /**
   * Description of the namespace to update.
   */
  description?: string
  /**
   * Secret environment variables of the namespace to update.
   */
  secretEnvironmentVariables?: Secret[]
  /**
   * Tags of the Serverless Container Namespace.
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
