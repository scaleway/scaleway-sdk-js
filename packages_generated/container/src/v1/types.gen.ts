// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type ContainerPrivacy = 'unknown_privacy' | 'public' | 'private'

export type ContainerProtocol = 'unknown_protocol' | 'http1' | 'h2c'

export type ContainerSandbox = 'unknown_sandbox' | 'v1' | 'v2'

export type ContainerStatus =
  | 'unknown_status'
  | 'updating'
  | 'deleting'
  | 'locking'
  | 'ready'
  | 'error'
  | 'locked'
  | 'creating'
  | 'upgrading'

export type CreateTriggerRequestDestinationConfigHttpMethod =
  | 'unknown_http_method'
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'

export type DomainStatus =
  | 'unknown_status'
  | 'creating'
  | 'updating'
  | 'deleting'
  | 'ready'
  | 'error'
  | 'locked'
  | 'locking'
  | 'upgrading'

export type ListContainersRequestOrderBy = 'created_at_asc' | 'created_at_desc' | 'name_asc' | 'name_desc'

export type ListDomainsRequestOrderBy = 'created_at_asc' | 'created_at_desc' | 'hostname_asc' | 'hostname_desc'

export type ListNamespacesRequestOrderBy = 'created_at_asc' | 'created_at_desc' | 'name_asc' | 'name_desc'

export type ListTriggersRequestOrderBy = 'created_at_asc' | 'created_at_desc' | 'name_asc' | 'name_desc'

export type NamespaceStatus =
  | 'unknown_status'
  | 'updating'
  | 'deleting'
  | 'locking'
  | 'ready'
  | 'error'
  | 'locked'
  | 'creating'
  | 'upgrading'

export type TriggerDestinationConfigHttpMethod = 'unknown_http_method' | 'get' | 'post' | 'put' | 'patch' | 'delete'

export type TriggerSourceType = 'unknown_source_type' | 'cron' | 'sqs' | 'nats'

export type TriggerStatus =
  | 'unknown_status'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'updating'
  | 'creating'
  | 'locking'
  | 'locked'
  | 'upgrading'

export type UpdateTriggerRequestDestinationConfigHttpMethod =
  | 'unknown_http_method'
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'

export interface ContainerProbeHTTPProbe {
  /**
   * HTTP path to perform the check on.
   */
  path: string
}

export interface ContainerProbeTCPProbe {}

export interface ContainerProbe {
  /**
   * Unhealthy containers do not receive traffic from incoming requests.
   */
  failureThreshold: number
  /**
   * Time interval between checks.
   */
  interval?: string
  /**
   * Duration before the check times out.
   */
  timeout?: string
  /**
   * The check is successful if a TCP connection can be established with the container within the specified timeout.
   *
   * One-of ('probe'): at most one of 'tcp', 'http' could be set.
   */
  tcp?: ContainerProbeTCPProbe
  /**
   * The check is successful if an HTTP request to the specified path returns a successful status code (e.g. 2XX or 3XX) within the specified timeout.
   *
   * One-of ('probe'): at most one of 'tcp', 'http' could be set.
   */
  http?: ContainerProbeHTTPProbe
}

export interface ContainerScalingOption {
  /**
   * Scale depending on the number of concurrent requests being processed per container instance. The threshold value is the number of concurrent requests above which the container will be scaled up.
   *
   * One-of ('scalingRule'): at most one of 'concurrentRequestsThreshold', 'cpuUsageThreshold', 'memoryUsageThreshold' could be set.
   */
  concurrentRequestsThreshold?: number
  /**
   * Scale depending on the CPU usage of a container instance. The threshold value is the percentage of CPU usage above which the container will be scaled up.
   *
   * One-of ('scalingRule'): at most one of 'concurrentRequestsThreshold', 'cpuUsageThreshold', 'memoryUsageThreshold' could be set.
   */
  cpuUsageThreshold?: number
  /**
   * Scale depending on the memory usage of a container instance. The threshold value is the percentage of memory usage above which the container will be scaled up.
   *
   * One-of ('scalingRule'): at most one of 'concurrentRequestsThreshold', 'cpuUsageThreshold', 'memoryUsageThreshold' could be set.
   */
  memoryUsageThreshold?: number
}

export interface TriggerCronConfig {
  /**
   * UNIX cron schedule to run job (e.g., "* * * * *").
   */
  schedule: string
  /**
   * Timezone for the cron schedule, in tz database format (e.g., "Europe/Paris").
   */
  timezone: string
  /**
   * Body to send to the container when the trigger is invoked.
   */
  body: string
  /**
   * Additional headers to send to the container when the trigger is invoked.
   */
  headers: Record<string, string>
}

export interface TriggerDestinationConfig {
  /**
   * The HTTP path to send the request to (e.g., "/my-webhook-endpoint").
   */
  httpPath: string
  /**
   * The HTTP method to use when sending the request (e.g., get, post, put, patch, delete). Must be specified as lowercase.
   */
  httpMethod: TriggerDestinationConfigHttpMethod
}

export interface TriggerNATSConfig {
  /**
   * The URLs of the NATS servers (e.g., "nats://nats.mnq.fr-par.scaleway.com:4222").
   */
  serverUrls: string[]
  /**
   * NATS subject to subscribe to (e.g., "my-subject").
   */
  subject: string
}

export interface TriggerSQSConfig {
  /**
   * The region where the SQS queue is hosted (e.g., "fr-par", "nl-ams").
   */
  region: ScwRegion
  /**
   * Endpoint URL to use to access SQS (e.g., "https://sqs.mnq.fr-par.scaleway.com").
   */
  endpoint: string
  /**
   * The access key for accessing the SQS queue.
   */
  accessKeyId: string
  /**
   * The URL of the SQS queue to monitor for messages.
   */
  queueUrl: string
}

export interface UpdateContainerRequestProbeHTTPProbe {
  path?: string
}

export interface UpdateContainerRequestProbeTCPProbe {}

export interface CreateTriggerRequestCronConfig {
  /**
   * UNIX cron schedule to run job (e.g., "* * * * *").
   */
  schedule: string
  /**
   * Timezone for the cron schedule, in tz database format (e.g., "Europe/Paris").
   */
  timezone: string
  /**
   * Body to send to the container when the trigger is invoked.
   */
  body: string
  /**
   * Additional headers to send to the container when the trigger is invoked.
   */
  headers: Record<string, string>
}

export interface CreateTriggerRequestDestinationConfig {
  /**
   * The HTTP path to send the request to (e.g., "/my-webhook-endpoint").
   */
  httpPath: string
  /**
   * The HTTP method to use when sending the request (e.g., get, post, put, patch, delete). Must be specified as lowercase.
   */
  httpMethod: CreateTriggerRequestDestinationConfigHttpMethod
}

export interface CreateTriggerRequestNATSConfig {
  /**
   * The URLs of the NATS server (e.g., "nats://nats.mnq.fr-par.scaleway.com:4222").
   */
  serverUrls: string[]
  /**
   * NATS subject to subscribe to (e.g., "my-subject").
   */
  subject: string
  /**
   * The credentials from this file will be used to authenticate with the NATS server and subscribe to the specified subject.
   */
  credentialsFileContent: string
}

export interface CreateTriggerRequestSQSConfig {
  /**
   * The region where the SQS queue is hosted (e.g., "fr-par", "nl-ams").
   */
  region: ScwRegion
  /**
   * Endpoint URL to use to access SQS (e.g., "https://sqs.mnq.fr-par.scaleway.com").
   */
  endpoint: string
  /**
   * The access key for accessing the SQS queue.
   */
  accessKeyId: string
  /**
   * The secret key for accessing the SQS queue.
   */
  secretAccessKey: string
  /**
   * The URL of the SQS queue to monitor for messages.
   */
  queueUrl: string
}

export interface Container {
  /**
   * Container unique ID.
   */
  id: string
  /**
   * Container name.
   */
  name: string
  /**
   * Unique ID of the namespace the container belongs to.
   */
  namespaceId: string
  /**
   * Container description.
   */
  description: string
  /**
   * Container status.
   */
  status: ContainerStatus
  /**
   * Container last error message.
   */
  errorMessage?: string
  /**
   * Container creation date.
   */
  createdAt?: Date
  /**
   * Container last update date.
   */
  updatedAt?: Date
  /**
   * Environment variables of the container.
   */
  environmentVariables: Record<string, string>
  /**
   * Secret environment variables of the container.
   */
  secretEnvironmentVariables: Record<string, string>
  /**
   * Minimum number of instances to scale the container to.
   */
  minScale: number
  /**
   * Maximum number of instances to scale the container to.
   */
  maxScale: number
  /**
   * Memory limit of the container in bytes.
   */
  memoryLimitBytes: number
  /**
   * CPU limit of the container in mvCPU.
   */
  mvcpuLimit: number
  /**
   * Local storage limit of the container (in bytes).
   */
  localStorageLimitBytes: number
  /**
   * Processing time limit for the container.
   */
  timeout?: string
  /**
   * Privacy policy of the container.
   */
  privacy: ContainerPrivacy
  /**
   * Image reference (e.g. "rg.fr-par.scw.cloud/my-registry-namespace/image:tag").
   */
  image: string
  /**
   * Protocol the container uses.
   */
  protocol: ContainerProtocol
  /**
   * Port the container listens on.
   */
  port: number
  /**
   * If true, it will allow only HTTPS connections to access your container to prevent it from being triggered by insecure connections (HTTP).
   */
  httpsConnectionsOnly: boolean
  /**
   * Execution environment of the container.
   */
  sandbox: ContainerSandbox
  /**
   * Parameter used to decide when to scale up or down.
   */
  scalingOption?: ContainerScalingOption
  /**
   * If the liveness probe fails, the container will be restarted.
It is performed periodically during the container's lifetime. The liveness probe is not executed until the startup probe (if defined) is successful.

Possible check types:
- http: Perform HTTP check on the container with the specified path.
- tcp: Perform TCP check on the container.
   */
  livenessProbe?: ContainerProbe
  /**
   * If the startup probe fails, the container will be restarted.
This check is useful for applications that might take a long time to start. It is only performed when the container is starting.

Possible check types:
- http: Perform HTTP check on the container with the specified path.
- tcp: Perform TCP check on the container.
   */
  startupProbe?: ContainerProbe
  /**
   * Tags of the Serverless Container.
   */
  tags: string[]
  /**
   * When connected to a Private Network, the container can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
  /**
   * Command executed when the container starts. This overrides the default command defined in the container image. This is usually the main executable, or ENTRYPOINT script to run.
   */
  command: string[]
  /**
   * Arguments passed to the command specified in the "command" field. These override the default arguments from the container image, and behave like command-line parameters.
   */
  args: string[]
  /**
   * This is the default endpoint generated by Scaleway to access the container from the Internet.
   */
  publicEndpoint: string
  /**
   * Region in which the container exists.
   */
  region: ScwRegion
}

export interface Domain {
  /**
   * Domain unique ID.
   */
  id: string
  /**
   * Unique ID of the container the domain is assigned to.
   */
  containerId: string
  /**
   * Domain assigned to the container.
   */
  hostname: string
  /**
   * Domain status.
   */
  status: DomainStatus
  /**
   * Domain last error message.
   */
  errorMessage?: string
  /**
   * Domain creation date.
   */
  createdAt?: Date
  /**
   * Domain last update date.
   */
  updatedAt?: Date
  /**
   * A list of arbitrary tags associated with the domain.
   */
  tags: string[]
}

export interface Namespace {
  /**
   * Namespace unique ID.
   */
  id: string
  /**
   * Namespace name.
   */
  name: string
  /**
   * Unique ID of the Organization the namespace belongs to.
   */
  organizationId: string
  /**
   * Unique ID of the Project the namespace belongs to.
   */
  projectId: string
  /**
   * Namespace description.
   */
  description: string
  /**
   * Namespace status.
   */
  status: NamespaceStatus
  /**
   * Namespace last error message.
   */
  errorMessage?: string
  /**
   * Namespace environment variables.
   */
  environmentVariables: Record<string, string>
  /**
   * Namespace secret environment variables.
   */
  secretEnvironmentVariables: Record<string, string>
  /**
   * A list of arbitrary tags associated with the namespace.
   */
  tags: string[]
  /**
   * Namespace creation date.
   */
  createdAt?: Date
  /**
   * Namespace last update date.
   */
  updatedAt?: Date
  /**
   * Region in which the namespace will be created.
   */
  region: ScwRegion
}

export interface Trigger {
  /**
   * Trigger unique ID.
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
   * Tags of the trigger.
   */
  tags: string[]
  /**
   * Trigger status.
   */
  status: TriggerStatus
  /**
   * Trigger last error message.
   */
  errorMessage?: string
  /**
   * ID of the container to trigger.
   */
  containerId: string
  /**
   * Configuration of the destination to trigger.
   */
  destinationConfig?: TriggerDestinationConfig
  /**
   * Type of source that will trigger the container.
   */
  sourceType: TriggerSourceType
  /**
   * Configuration for a cron source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  cronConfig?: TriggerCronConfig
  /**
   * Configuration for an SQS queue source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  sqsConfig?: TriggerSQSConfig
  /**
   * Configuration for a NATS source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  natsConfig?: TriggerNATSConfig
  /**
   * Trigger creation date.
   */
  createdAt?: Date
  /**
   * Trigger last update date.
   */
  updatedAt?: Date
}

export interface UpdateContainerRequestProbe {
  failureThreshold?: number
  interval?: string
  timeout?: string
  /**
   *
   * One-of ('probe'): at most one of 'http', 'tcp' could be set.
   */
  http?: UpdateContainerRequestProbeHTTPProbe
  /**
   *
   * One-of ('probe'): at most one of 'http', 'tcp' could be set.
   */
  tcp?: UpdateContainerRequestProbeTCPProbe
}

export interface UpdateTriggerRequestCronConfig {
  /**
   * UNIX cron schedule to run job (e.g., "* * * * *").
   */
  schedule?: string
  /**
   * Timezone for the cron schedule, in tz database format (e.g., "Europe/Paris").
   */
  timezone?: string
  /**
   * Body to send to the container when the trigger is invoked.
   */
  body?: string
  /**
   * Additional headers to send to the container when the trigger is invoked.
   */
  headers?: Record<string, string>
}

export interface UpdateTriggerRequestDestinationConfig {
  /**
   * The HTTP path to send the request to (e.g., "/my-webhook-endpoint").
   */
  httpPath?: string
  /**
   * The HTTP method to use when sending the request (e.g., get, post, put, patch, delete). Must be specified as lowercase.
   */
  httpMethod?: UpdateTriggerRequestDestinationConfigHttpMethod
}

export interface UpdateTriggerRequestNATSConfig {
  /**
   * The URLs of the NATS server (e.g., "nats://nats.mnq.fr-par.scaleway.com:4222").
   */
  serverUrls?: string[]
  /**
   * NATS subject to subscribe to (e.g., "my-subject").
   */
  subject?: string
  /**
   * The credentials from this file will be used to authenticate with the NATS server and subscribe to the specified subject.
   */
  credentialsFileContent?: string
}

export interface UpdateTriggerRequestSQSConfig {
  /**
   * The region where the SQS queue is hosted (e.g., "fr-par", "nl-ams").
   */
  region?: ScwRegion
  /**
   * Endpoint URL to use to access SQS (e.g., "https://sqs.mnq.fr-par.scaleway.com").
   */
  endpoint?: string
  /**
   * The access key for accessing the SQS queue.
   */
  accessKeyId?: string
  /**
   * The secret key for accessing the SQS queue.
   */
  secretAccessKey?: string
  /**
   * The URL of the SQS queue to monitor for messages.
   */
  queueUrl?: string
}

export type CreateContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Unique ID of the namespace the container belongs to.
   */
  namespaceId: string
  /**
   * Container name.
   */
  name: string
  /**
   * Environment variables of the container.
   */
  environmentVariables?: Record<string, string>
  /**
   * Secret environment variables of the container.
   */
  secretEnvironmentVariables?: Record<string, string>
  /**
   * Minimum number of instances to scale the container to.
   */
  minScale?: number
  /**
   * Maximum number of instances to scale the container to.
   */
  maxScale?: number
  /**
   * Memory limit of the container in bytes.
   */
  memoryLimitBytes?: number
  /**
   * CPU limit of the container in mvCPU.
   */
  mvcpuLimit?: number
  /**
   * Processing time limit for the container.
   */
  timeout?: string
  /**
   * Privacy policy of the container.
   */
  privacy?: ContainerPrivacy
  /**
   * Container description.
   */
  description?: string
  /**
   * Image reference (e.g. "rg.fr-par.scw.cloud/my-registry-namespace/image:tag").
   */
  image: string
  /**
   * Protocol the container uses.
   */
  protocol?: ContainerProtocol
  /**
   * Port the container listens on.
   */
  port?: number
  /**
   * If true, it will allow only HTTPS connections to access your container to prevent it from being triggered by insecure connections (HTTP).
   */
  httpsConnectionsOnly?: boolean
  /**
   * Execution environment of the container.
   */
  sandbox?: ContainerSandbox
  /**
   * Local storage limit of the container (in bytes).
   */
  localStorageLimitBytes?: number
  /**
   * Parameter used to decide when to scale up or down.
   */
  scalingOption?: ContainerScalingOption
  /**
   * If the liveness probe fails, the container will be restarted.
It is performed periodically during the container's lifetime. The liveness probe is not executed until the startup probe (if defined) is successful.

Possible check types:
- http: Perform HTTP check on the container with the specified path.
- tcp: Perform TCP check on the container.
   */
  livenessProbe?: ContainerProbe
  /**
   * If the startup probe fails, the container will be restarted.
This check is useful for applications that might take a long time to start. It is only performed when the container is starting.

Possible check types:
- http: Perform HTTP check on the container with the specified path.
- tcp: Perform TCP check on the container.
   */
  startupProbe?: ContainerProbe
  /**
   * Tags of the Serverless Container.
   */
  tags?: string[]
  /**
   * When connected to a Private Network, the container can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
  /**
   * Command executed when the container starts. This overrides the default command defined in the container image. This is usually the main executable, or ENTRYPOINT script to run.
   */
  command?: string[]
  /**
   * Arguments passed to the command specified in the "command" field. These override the default arguments from the container image, and behave like command-line parameters.
   */
  args?: string[]
}

export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Unique ID of the container the domain will be assigned to.
   */
  containerId: string
  /**
   * Domain assigned to the container.
   */
  hostname: string
  /**
   * A list of arbitrary tags associated with the domain.
   */
  tags?: string[]
}

export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Unique ID of the Project the namespace belongs to.
   */
  projectId?: string
  /**
   * Namespace name.
   */
  name: string
  /**
   * Namespace description.
   */
  description?: string
  /**
   * Namespace environment variables.
   */
  environmentVariables?: Record<string, string>
  /**
   * Namespace secret environment variables.
   */
  secretEnvironmentVariables?: Record<string, string>
  /**
   * A list of arbitrary tags associated with the namespace.
   */
  tags?: string[]
}

export type CreateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the container to trigger.
   */
  containerId: string
  /**
   * Name of the trigger.
   */
  name: string
  /**
   * Description of the trigger.
   */
  description?: string
  /**
   * Tags of the trigger.
   */
  tags?: string[]
  /**
   * Configuration of the destination to trigger.
   */
  destinationConfig?: CreateTriggerRequestDestinationConfig
  /**
   * Configuration for a cron source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  cronConfig?: CreateTriggerRequestCronConfig
  /**
   * Configuration for an SQS queue source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  sqsConfig?: CreateTriggerRequestSQSConfig
  /**
   * Configuration for a NATS source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  natsConfig?: CreateTriggerRequestNATSConfig
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

export type GetContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  containerId: string
}

export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  domainId: string
}

export type GetNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  namespaceId: string
}

export type GetServiceInfoRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
}

export type GetTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  triggerId: string
}

export type ListContainersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  page?: number
  pageSize?: number
  orderBy?: ListContainersRequestOrderBy
  organizationId?: string
  projectId?: string
  namespaceId?: string
  name?: string
}

export interface ListContainersResponse {
  containers: Container[]
  totalCount: number
}

export type ListDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  page?: number
  pageSize?: number
  orderBy?: ListDomainsRequestOrderBy
  organizationId?: string
  projectId?: string
  namespaceId?: string
  containerId?: string
}

export interface ListDomainsResponse {
  domains: Domain[]
  totalCount: number
}

export type ListNamespacesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  page?: number
  pageSize?: number
  orderBy?: ListNamespacesRequestOrderBy
  organizationId?: string
  projectId?: string
  name?: string
}

export interface ListNamespacesResponse {
  namespaces: Namespace[]
  totalCount: number
}

export type ListTriggersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  page?: number
  pageSize?: number
  orderBy?: ListTriggersRequestOrderBy
  organizationId?: string
  projectId?: string
  namespaceId?: string
  containerId?: string
}

export interface ListTriggersResponse {
  triggers: Trigger[]
  totalCount: number
}

export type RedeployContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the container to redeploy.
   */
  containerId: string
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
   * Secret environment variables of the container.
   */
  secretEnvironmentVariables?: Record<string, string>
  /**
   * Minimum number of instances to scale the container to.
   */
  minScale?: number
  /**
   * Maximum number of instances to scale the container to.
   */
  maxScale?: number
  /**
   * Memory limit of the container in bytes.
   */
  memoryLimitBytes?: number
  /**
   * CPU limit of the container in mvCPU.
   */
  mvcpuLimit?: number
  /**
   * Processing time limit for the container.
   */
  timeout?: string
  /**
   * Privacy policy of the container.
   */
  privacy?: ContainerPrivacy
  /**
   * Container description.
   */
  description?: string
  /**
   * Image reference (e.g. "rg.fr-par.scw.cloud/my-registry-namespace/image:tag").
   */
  image?: string
  /**
   * Protocol the container uses.
   */
  protocol?: ContainerProtocol
  /**
   * Port the container listens on.
   */
  port?: number
  /**
   * If true, it will allow only HTTPS connections to access your container to prevent it from being triggered by insecure connections (HTTP).
   */
  httpsConnectionOnly?: boolean
  /**
   * Execution environment of the container.
   */
  sandbox?: ContainerSandbox
  /**
   * Local storage limit of the container (in bytes).
   */
  localStorageLimitBytes?: number
  /**
   * Parameter used to decide when to scale up or down.
   */
  scalingOption?: ContainerScalingOption
  /**
   * If the liveness probe fails, the container will be restarted.
It is performed periodically during the container's lifetime. The liveness probe is not executed until the startup probe (if defined) is successful.

Possible check types:
- http: Perform HTTP check on the container with the specified path.
- tcp: Perform TCP check on the container.
   */
  livenessProbe?: ContainerProbe
  /**
   * If the startup probe fails, the container will be restarted.
This check is useful for applications that might take a long time to start. It is only performed when the container is starting.

Possible check types:
- http: Perform HTTP check on the container with the specified path.
- tcp: Perform TCP check on the container.
   */
  startupProbe?: UpdateContainerRequestProbe
  /**
   * Tags of the Serverless Container.
   */
  tags?: string[]
  /**
   * When connected to a Private Network, the container can access other Scaleway resources in this Private Network.
   */
  privateNetworkId?: string
  /**
   * Command executed when the container starts. This overrides the default command defined in the container image. This is usually the main executable, or ENTRYPOINT script to run.
   */
  command?: string[]
  /**
   * Arguments passed to the command specified in the "command" field. These override the default arguments from the container image, and behave like command-line parameters.
   */
  args?: string[]
}

export type UpdateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the domain to update.
   */
  domainId: string
  /**
   * A list of arbitrary tags associated with the domain.
   */
  tags?: string[]
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
   * Namespace description.
   */
  description?: string
  /**
   * Namespace environment variables.
   */
  environmentVariables?: Record<string, string>
  /**
   * Namespace secret environment variables.
   */
  secretEnvironmentVariables?: Record<string, string>
  /**
   * A list of arbitrary tags associated with the namespace.
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
   * Tags of the trigger.
   */
  tags?: string[]
  /**
   * Configuration of the destination to trigger.
   */
  destinationConfig?: UpdateTriggerRequestDestinationConfig
  /**
   * Configuration for a cron source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  cronConfig?: UpdateTriggerRequestCronConfig
  /**
   * Configuration for an SQS queue source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  sqsConfig?: UpdateTriggerRequestSQSConfig
  /**
   * Configuration for a NATS source.
   *
   * One-of ('sourceConfig'): at most one of 'cronConfig', 'sqsConfig', 'natsConfig' could be set.
   */
  natsConfig?: UpdateTriggerRequestNATSConfig
}
