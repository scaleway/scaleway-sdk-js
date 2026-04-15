
import type { DefaultValues, } from '@scaleway/sdk-client'
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type {
  Container,
  ContainerProbe,
  ContainerProbeHTTPProbe,
  ContainerProbeTCPProbe,
  ContainerScalingOption,
  CreateContainerRequest,
  CreateDomainRequest,
  CreateNamespaceRequest,
  CreateTriggerRequest,
  CreateTriggerRequestCronConfig,
  CreateTriggerRequestDestinationConfig,
  CreateTriggerRequestNATSConfig,
  CreateTriggerRequestSQSConfig,
  Domain,
  ListContainersResponse,
  ListDomainsResponse,
  ListNamespacesResponse,
  ListTriggersResponse,
  Namespace,
  Trigger,
  TriggerCronConfig,
  TriggerDestinationConfig,
  TriggerNATSConfig,
  TriggerSQSConfig,
  UpdateContainerRequest,
  UpdateContainerRequestProbe,
  UpdateContainerRequestProbeHTTPProbe,
  UpdateContainerRequestProbeTCPProbe,
  UpdateDomainRequest,
  UpdateNamespaceRequest,
  UpdateTriggerRequest,
  UpdateTriggerRequestCronConfig,
  UpdateTriggerRequestDestinationConfig,
  UpdateTriggerRequestNATSConfig,
  UpdateTriggerRequestSQSConfig,
} from './types.gen.js'

const unmarshalContainerProbeHTTPProbe = (data: unknown): ContainerProbeHTTPProbe => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContainerProbeHTTPProbe' failed as data isn't a dictionary.`,
    )
  }

  return {
    path: data.path,
  } as ContainerProbeHTTPProbe
}

const unmarshalContainerProbeTCPProbe = (data: unknown): ContainerProbeTCPProbe => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContainerProbeTCPProbe' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as ContainerProbeTCPProbe
}

const unmarshalContainerProbe = (data: unknown): ContainerProbe => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContainerProbe' failed as data isn't a dictionary.`,
    )
  }

  return {
    failureThreshold: data.failure_threshold,
    http: data.http ? unmarshalContainerProbeHTTPProbe(data.http) : undefined,
    interval: data.interval,
    tcp: data.tcp ? unmarshalContainerProbeTCPProbe(data.tcp) : undefined,
    timeout: data.timeout,
  } as ContainerProbe
}

const unmarshalContainerScalingOption = (data: unknown): ContainerScalingOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContainerScalingOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    concurrentRequestsThreshold: data.concurrent_requests_threshold,
    cpuUsageThreshold: data.cpu_usage_threshold,
    memoryUsageThreshold: data.memory_usage_threshold,
  } as ContainerScalingOption
}

export const unmarshalContainer = (data: unknown): Container => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Container' failed as data isn't a dictionary.`,
    )
  }

  return {
    args: data.args,
    command: data.command,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    environmentVariables: data.environment_variables,
    errorMessage: data.error_message,
    httpsConnectionsOnly: data.https_connections_only,
    id: data.id,
    image: data.image,
    livenessProbe: data.liveness_probe ? unmarshalContainerProbe(data.liveness_probe) : undefined,
    localStorageLimitBytes: data.local_storage_limit_bytes,
    maxScale: data.max_scale,
    memoryLimitBytes: data.memory_limit_bytes,
    minScale: data.min_scale,
    mvcpuLimit: data.mvcpu_limit,
    name: data.name,
    namespaceId: data.namespace_id,
    port: data.port,
    privacy: data.privacy,
    privateNetworkId: data.private_network_id,
    protocol: data.protocol,
    publicEndpoint: data.public_endpoint,
    region: data.region,
    sandbox: data.sandbox,
    scalingOption: data.scaling_option ? unmarshalContainerScalingOption(data.scaling_option) : undefined,
    secretEnvironmentVariables: data.secret_environment_variables,
    startupProbe: data.startup_probe ? unmarshalContainerProbe(data.startup_probe) : undefined,
    status: data.status,
    tags: data.tags,
    timeout: data.timeout,
    updatedAt: unmarshalDate(data.updated_at),
  } as Container
}

export const unmarshalDomain = (data: unknown): Domain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    containerId: data.container_id,
    createdAt: unmarshalDate(data.created_at),
    errorMessage: data.error_message,
    hostname: data.hostname,
    id: data.id,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Domain
}

export const unmarshalNamespace = (data: unknown): Namespace => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Namespace' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    environmentVariables: data.environment_variables,
    errorMessage: data.error_message,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    secretEnvironmentVariables: data.secret_environment_variables,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Namespace
}

const unmarshalTriggerCronConfig = (data: unknown): TriggerCronConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerCronConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    body: data.body,
    headers: data.headers,
    schedule: data.schedule,
    timezone: data.timezone,
  } as TriggerCronConfig
}

const unmarshalTriggerDestinationConfig = (data: unknown): TriggerDestinationConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerDestinationConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    httpMethod: data.http_method,
    httpPath: data.http_path,
  } as TriggerDestinationConfig
}

const unmarshalTriggerNATSConfig = (data: unknown): TriggerNATSConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerNATSConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverUrls: data.server_urls,
    subject: data.subject,
  } as TriggerNATSConfig
}

const unmarshalTriggerSQSConfig = (data: unknown): TriggerSQSConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerSQSConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    accessKeyId: data.access_key_id,
    endpoint: data.endpoint,
    queueUrl: data.queue_url,
    region: data.region,
  } as TriggerSQSConfig
}

export const unmarshalTrigger = (data: unknown): Trigger => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Trigger' failed as data isn't a dictionary.`,
    )
  }

  return {
    containerId: data.container_id,
    createdAt: unmarshalDate(data.created_at),
    cronConfig: data.cron_config ? unmarshalTriggerCronConfig(data.cron_config) : undefined,
    description: data.description,
    destinationConfig: data.destination_config ? unmarshalTriggerDestinationConfig(data.destination_config) : undefined,
    errorMessage: data.error_message,
    id: data.id,
    name: data.name,
    natsConfig: data.nats_config ? unmarshalTriggerNATSConfig(data.nats_config) : undefined,
    sourceType: data.source_type,
    sqsConfig: data.sqs_config ? unmarshalTriggerSQSConfig(data.sqs_config) : undefined,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as Trigger
}

export const unmarshalListContainersResponse = (data: unknown): ListContainersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListContainersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    containers: unmarshalArrayOfObject(data.containers, unmarshalContainer),
    totalCount: data.total_count,
  } as ListContainersResponse
}

export const unmarshalListDomainsResponse = (data: unknown): ListDomainsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    domains: unmarshalArrayOfObject(data.domains, unmarshalDomain),
    totalCount: data.total_count,
  } as ListDomainsResponse
}

export const unmarshalListNamespacesResponse = (data: unknown): ListNamespacesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNamespacesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    namespaces: unmarshalArrayOfObject(data.namespaces, unmarshalNamespace),
    totalCount: data.total_count,
  } as ListNamespacesResponse
}

export const unmarshalListTriggersResponse = (data: unknown): ListTriggersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTriggersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    triggers: unmarshalArrayOfObject(data.triggers, unmarshalTrigger),
  } as ListTriggersResponse
}

const marshalContainerProbeHTTPProbe = (
  request: ContainerProbeHTTPProbe,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  path: request.path,
})

const marshalContainerProbeTCPProbe = (
  request: ContainerProbeTCPProbe,
  defaults: DefaultValues,
): Record<string, unknown> => ({
})

const marshalContainerProbe = (
  request: ContainerProbe,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  failure_threshold: request.failureThreshold,
  interval: request.interval,
  timeout: request.timeout,  
  ...resolveOneOf([
    {param: 'tcp',
      value: (request.tcp !== undefined) ? marshalContainerProbeTCPProbe(request.tcp, defaults)
      : undefined,
    },
    {param: 'http',
      value: (request.http !== undefined) ? marshalContainerProbeHTTPProbe(request.http, defaults)
      : undefined,
    },
  ]),
})

const marshalContainerScalingOption = (
  request: ContainerScalingOption,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'concurrent_requests_threshold',
      value: request.concurrentRequestsThreshold,
    },
    {param: 'cpu_usage_threshold',
      value: request.cpuUsageThreshold,
    },
    {param: 'memory_usage_threshold',
      value: request.memoryUsageThreshold,
    },
  ]),
})

export const marshalCreateContainerRequest = (
  request: CreateContainerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  args: request.args,
  command: request.command,
  description: request.description,
  environment_variables: ((request.environmentVariables !== undefined) ?  request.environmentVariables: undefined),
  https_connections_only: request.httpsConnectionsOnly,
  image: request.image,
  liveness_probe: ((request.livenessProbe !== undefined) ?  marshalContainerProbe(request.livenessProbe, defaults): undefined),
  local_storage_limit_bytes: request.localStorageLimitBytes,
  max_scale: request.maxScale,
  memory_limit_bytes: request.memoryLimitBytes,
  min_scale: request.minScale,
  mvcpu_limit: request.mvcpuLimit,
  name: request.name,
  namespace_id: request.namespaceId,
  port: request.port,
  privacy: request.privacy,
  private_network_id: request.privateNetworkId,
  protocol: request.protocol,
  sandbox: request.sandbox,
  scaling_option: ((request.scalingOption !== undefined) ?  marshalContainerScalingOption(request.scalingOption, defaults): undefined),
  secret_environment_variables: ((request.secretEnvironmentVariables !== undefined) ?  request.secretEnvironmentVariables: undefined),
  startup_probe: ((request.startupProbe !== undefined) ?  marshalContainerProbe(request.startupProbe, defaults): undefined),
  tags: request.tags,
  timeout: request.timeout,
})

export const marshalCreateDomainRequest = (
  request: CreateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  container_id: request.containerId,
  hostname: request.hostname,
  tags: request.tags,
})

export const marshalCreateNamespaceRequest = (
  request: CreateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  environment_variables: ((request.environmentVariables !== undefined) ?  request.environmentVariables: undefined),
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  secret_environment_variables: ((request.secretEnvironmentVariables !== undefined) ?  request.secretEnvironmentVariables: undefined),
  tags: request.tags,
})

const marshalCreateTriggerRequestCronConfig = (
  request: CreateTriggerRequestCronConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  body: request.body,
  headers:  request.headers,
  schedule: request.schedule,
  timezone: request.timezone,
})

const marshalCreateTriggerRequestDestinationConfig = (
  request: CreateTriggerRequestDestinationConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  http_method: request.httpMethod,
  http_path: request.httpPath,
})

const marshalCreateTriggerRequestNATSConfig = (
  request: CreateTriggerRequestNATSConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  credentials_file_content: request.credentialsFileContent,
  server_urls: request.serverUrls,
  subject: request.subject,
})

const marshalCreateTriggerRequestSQSConfig = (
  request: CreateTriggerRequestSQSConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  access_key_id: request.accessKeyId,
  endpoint: request.endpoint,
  queue_url: request.queueUrl,
  region: request.region,
  secret_access_key: request.secretAccessKey,
})

export const marshalCreateTriggerRequest = (
  request: CreateTriggerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  container_id: request.containerId,
  description: request.description,
  destination_config: ((request.destinationConfig !== undefined) ?  marshalCreateTriggerRequestDestinationConfig(request.destinationConfig, defaults): undefined),
  name: request.name,
  tags: request.tags,  
  ...resolveOneOf([
    {param: 'cron_config',
      value: (request.cronConfig !== undefined) ? marshalCreateTriggerRequestCronConfig(request.cronConfig, defaults)
      : undefined,
    },
    {param: 'sqs_config',
      value: (request.sqsConfig !== undefined) ? marshalCreateTriggerRequestSQSConfig(request.sqsConfig, defaults)
      : undefined,
    },
    {param: 'nats_config',
      value: (request.natsConfig !== undefined) ? marshalCreateTriggerRequestNATSConfig(request.natsConfig, defaults)
      : undefined,
    },
  ]),
})

const marshalUpdateContainerRequestProbeHTTPProbe = (
  request: UpdateContainerRequestProbeHTTPProbe,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  path: request.path,
})

const marshalUpdateContainerRequestProbeTCPProbe = (
  request: UpdateContainerRequestProbeTCPProbe,
  defaults: DefaultValues,
): Record<string, unknown> => ({
})

const marshalUpdateContainerRequestProbe = (
  request: UpdateContainerRequestProbe,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  failure_threshold: request.failureThreshold,
  interval: request.interval,
  timeout: request.timeout,  
  ...resolveOneOf([
    {param: 'http',
      value: (request.http !== undefined) ? marshalUpdateContainerRequestProbeHTTPProbe(request.http, defaults)
      : undefined,
    },
    {param: 'tcp',
      value: (request.tcp !== undefined) ? marshalUpdateContainerRequestProbeTCPProbe(request.tcp, defaults)
      : undefined,
    },
  ]),
})

export const marshalUpdateContainerRequest = (
  request: UpdateContainerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  args: request.args,
  command: request.command,
  description: request.description,
  environment_variables: request.environmentVariables,
  https_connection_only: request.httpsConnectionOnly,
  image: request.image,
  liveness_probe: ((request.livenessProbe !== undefined) ?  marshalContainerProbe(request.livenessProbe, defaults): undefined),
  local_storage_limit_bytes: request.localStorageLimitBytes,
  max_scale: request.maxScale,
  memory_limit_bytes: request.memoryLimitBytes,
  min_scale: request.minScale,
  mvcpu_limit: request.mvcpuLimit,
  port: request.port,
  privacy: request.privacy,
  private_network_id: request.privateNetworkId,
  protocol: request.protocol,
  sandbox: request.sandbox,
  scaling_option: ((request.scalingOption !== undefined) ?  marshalContainerScalingOption(request.scalingOption, defaults): undefined),
  secret_environment_variables: request.secretEnvironmentVariables,
  startup_probe: ((request.startupProbe !== undefined) ?  marshalUpdateContainerRequestProbe(request.startupProbe, defaults): undefined),
  tags: request.tags,
  timeout: request.timeout,
})

export const marshalUpdateDomainRequest = (
  request: UpdateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  tags: request.tags,
})

export const marshalUpdateNamespaceRequest = (
  request: UpdateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  environment_variables: request.environmentVariables,
  secret_environment_variables: request.secretEnvironmentVariables,
  tags: request.tags,
})

const marshalUpdateTriggerRequestCronConfig = (
  request: UpdateTriggerRequestCronConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  body: request.body,
  headers: request.headers,
  schedule: request.schedule,
  timezone: request.timezone,
})

const marshalUpdateTriggerRequestDestinationConfig = (
  request: UpdateTriggerRequestDestinationConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  http_method: request.httpMethod,
  http_path: request.httpPath,
})

const marshalUpdateTriggerRequestNATSConfig = (
  request: UpdateTriggerRequestNATSConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  credentials_file_content: request.credentialsFileContent,
  server_urls: request.serverUrls,
  subject: request.subject,
})

const marshalUpdateTriggerRequestSQSConfig = (
  request: UpdateTriggerRequestSQSConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  access_key_id: request.accessKeyId,
  endpoint: request.endpoint,
  queue_url: request.queueUrl,
  region: request.region,
  secret_access_key: request.secretAccessKey,
})

export const marshalUpdateTriggerRequest = (
  request: UpdateTriggerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  destination_config: ((request.destinationConfig !== undefined) ?  marshalUpdateTriggerRequestDestinationConfig(request.destinationConfig, defaults): undefined),
  name: request.name,
  tags: request.tags,  
  ...resolveOneOf([
    {param: 'cron_config',
      value: (request.cronConfig !== undefined) ? marshalUpdateTriggerRequestCronConfig(request.cronConfig, defaults)
      : undefined,
    },
    {param: 'sqs_config',
      value: (request.sqsConfig !== undefined) ? marshalUpdateTriggerRequestSQSConfig(request.sqsConfig, defaults)
      : undefined,
    },
    {param: 'nats_config',
      value: (request.natsConfig !== undefined) ? marshalUpdateTriggerRequestNATSConfig(request.natsConfig, defaults)
      : undefined,
    },
  ]),
})
