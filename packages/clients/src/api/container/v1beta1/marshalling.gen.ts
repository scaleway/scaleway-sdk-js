// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  Container,
  CreateContainerRequest,
  CreateCronRequest,
  CreateDomainRequest,
  CreateNamespaceRequest,
  CreateTokenRequest,
  CreateTriggerRequest,
  CreateTriggerRequestMnqNatsClientConfig,
  CreateTriggerRequestMnqSqsClientConfig,
  CreateTriggerRequestSqsClientConfig,
  Cron,
  Domain,
  ListContainersResponse,
  ListCronsResponse,
  ListDomainsResponse,
  ListLogsResponse,
  ListNamespacesResponse,
  ListTokensResponse,
  ListTriggersResponse,
  Log,
  Namespace,
  Secret,
  SecretHashedValue,
  Token,
  Trigger,
  TriggerMnqNatsClientConfig,
  TriggerMnqSqsClientConfig,
  TriggerSqsClientConfig,
  UpdateContainerRequest,
  UpdateCronRequest,
  UpdateNamespaceRequest,
  UpdateTriggerRequest,
  UpdateTriggerRequestSqsClientConfig,
} from './types.gen'

const unmarshalSecretHashedValue = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretHashedValue' failed as data isn't a dictionary.`,
    )
  }

  return { hashedValue: data.hashed_value, key: data.key } as SecretHashedValue
}

const unmarshalTriggerMnqNatsClientConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerMnqNatsClientConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    mnqCredentialId: data.mnq_credential_id,
    mnqNamespaceId: data.mnq_namespace_id,
    mnqNatsAccountId: data.mnq_nats_account_id,
    mnqProjectId: data.mnq_project_id,
    mnqRegion: data.mnq_region,
    subject: data.subject,
  } as TriggerMnqNatsClientConfig
}

const unmarshalTriggerMnqSqsClientConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerMnqSqsClientConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    mnqCredentialId: data.mnq_credential_id,
    mnqNamespaceId: data.mnq_namespace_id,
    mnqProjectId: data.mnq_project_id,
    mnqRegion: data.mnq_region,
    queue: data.queue,
  } as TriggerMnqSqsClientConfig
}

const unmarshalTriggerSqsClientConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerSqsClientConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    accessKey: data.access_key,
    endpoint: data.endpoint,
    queueUrl: data.queue_url,
    secretKey: data.secret_key,
  } as TriggerSqsClientConfig
}

export const unmarshalContainer = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Container' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpuLimit: data.cpu_limit,
    description: data.description,
    domainName: data.domain_name,
    environmentVariables: data.environment_variables,
    errorMessage: data.error_message,
    httpOption: data.http_option,
    id: data.id,
    maxConcurrency: data.max_concurrency,
    maxScale: data.max_scale,
    memoryLimit: data.memory_limit,
    minScale: data.min_scale,
    name: data.name,
    namespaceId: data.namespace_id,
    port: data.port,
    privacy: data.privacy,
    protocol: data.protocol,
    region: data.region,
    registryImage: data.registry_image,
    secretEnvironmentVariables: unmarshalArrayOfObject(
      data.secret_environment_variables,
      unmarshalSecretHashedValue,
    ),
    status: data.status,
    timeout: data.timeout,
  } as Container
}

export const unmarshalCron = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Cron' failed as data isn't a dictionary.`,
    )
  }

  return {
    args: data.args,
    containerId: data.container_id,
    id: data.id,
    name: data.name,
    schedule: data.schedule,
    status: data.status,
  } as Cron
}

export const unmarshalDomain = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    containerId: data.container_id,
    errorMessage: data.error_message,
    hostname: data.hostname,
    id: data.id,
    status: data.status,
    url: data.url,
  } as Domain
}

const unmarshalLog = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Log' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    level: data.level,
    message: data.message,
    source: data.source,
    stream: data.stream,
    timestamp: unmarshalDate(data.timestamp),
  } as Log
}

export const unmarshalNamespace = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Namespace' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    environmentVariables: data.environment_variables,
    errorMessage: data.error_message,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    registryEndpoint: data.registry_endpoint,
    registryNamespaceId: data.registry_namespace_id,
    secretEnvironmentVariables: unmarshalArrayOfObject(
      data.secret_environment_variables,
      unmarshalSecretHashedValue,
    ),
    status: data.status,
  } as Namespace
}

export const unmarshalToken = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Token' failed as data isn't a dictionary.`,
    )
  }

  return {
    containerId: data.container_id,
    description: data.description,
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    namespaceId: data.namespace_id,
    publicKey: data.public_key,
    status: data.status,
    token: data.token,
  } as Token
}

export const unmarshalTrigger = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Trigger' failed as data isn't a dictionary.`,
    )
  }

  return {
    containerId: data.container_id,
    description: data.description,
    errorMessage: data.error_message,
    id: data.id,
    inputType: data.input_type,
    name: data.name,
    scwNatsConfig: data.scw_nats_config
      ? unmarshalTriggerMnqNatsClientConfig(data.scw_nats_config)
      : undefined,
    scwSqsConfig: data.scw_sqs_config
      ? unmarshalTriggerMnqSqsClientConfig(data.scw_sqs_config)
      : undefined,
    sqsConfig: data.sqs_config
      ? unmarshalTriggerSqsClientConfig(data.sqs_config)
      : undefined,
    status: data.status,
  } as Trigger
}

export const unmarshalListContainersResponse = (data: unknown) => {
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

export const unmarshalListCronsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListCronsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    crons: unmarshalArrayOfObject(data.crons, unmarshalCron),
    totalCount: data.total_count,
  } as ListCronsResponse
}

export const unmarshalListDomainsResponse = (data: unknown) => {
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

export const unmarshalListLogsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLogsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    logs: unmarshalArrayOfObject(data.logs, unmarshalLog),
    totalCount: data.total_count,
  } as ListLogsResponse
}

export const unmarshalListNamespacesResponse = (data: unknown) => {
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

export const unmarshalListTokensResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTokensResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    tokens: unmarshalArrayOfObject(data.tokens, unmarshalToken),
    totalCount: data.total_count,
  } as ListTokensResponse
}

export const unmarshalListTriggersResponse = (data: unknown) => {
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

const marshalCreateTriggerRequestMnqNatsClientConfig = (
  request: CreateTriggerRequestMnqNatsClientConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mnq_namespace_id: request.mnqNamespaceId,
  mnq_nats_account_id: request.mnqNatsAccountId,
  mnq_project_id: request.mnqProjectId,
  mnq_region: request.mnqRegion,
  subject: request.subject,
})

const marshalCreateTriggerRequestMnqSqsClientConfig = (
  request: CreateTriggerRequestMnqSqsClientConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mnq_namespace_id: request.mnqNamespaceId,
  mnq_project_id: request.mnqProjectId,
  mnq_region: request.mnqRegion,
  queue: request.queue,
})

const marshalCreateTriggerRequestSqsClientConfig = (
  request: CreateTriggerRequestSqsClientConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  access_key: request.accessKey,
  endpoint: request.endpoint,
  queue_url: request.queueUrl,
  secret_key: request.secretKey,
})

const marshalSecret = (
  request: Secret,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  key: request.key,
  value: request.value,
})

const marshalUpdateTriggerRequestSqsClientConfig = (
  request: UpdateTriggerRequestSqsClientConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  access_key: request.accessKey,
  secret_key: request.secretKey,
})

export const marshalCreateContainerRequest = (
  request: CreateContainerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cpu_limit: request.cpuLimit,
  description: request.description,
  environment_variables: request.environmentVariables,
  http_option: request.httpOption ?? 'unknown_http_option',
  max_concurrency: request.maxConcurrency,
  max_scale: request.maxScale,
  memory_limit: request.memoryLimit,
  min_scale: request.minScale,
  name: request.name,
  namespace_id: request.namespaceId,
  port: request.port,
  privacy: request.privacy ?? 'unknown_privacy',
  protocol: request.protocol ?? 'unknown_protocol',
  registry_image: request.registryImage,
  secret_environment_variables: request.secretEnvironmentVariables
    ? request.secretEnvironmentVariables.map(elt =>
        marshalSecret(elt, defaults),
      )
    : undefined,
  timeout: request.timeout,
})

export const marshalCreateCronRequest = (
  request: CreateCronRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  args: request.args,
  container_id: request.containerId,
  name: request.name,
  schedule: request.schedule,
})

export const marshalCreateDomainRequest = (
  request: CreateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  container_id: request.containerId,
  hostname: request.hostname,
})

export const marshalCreateNamespaceRequest = (
  request: CreateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  environment_variables: request.environmentVariables,
  name: request.name || randomName('cns'),
  project_id: request.projectId ?? defaults.defaultProjectId,
  secret_environment_variables: request.secretEnvironmentVariables
    ? request.secretEnvironmentVariables.map(elt =>
        marshalSecret(elt, defaults),
      )
    : undefined,
})

export const marshalCreateTokenRequest = (
  request: CreateTokenRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  expires_at: request.expiresAt,
  ...resolveOneOf([
    {
      param: 'container_id',
      value: request.containerId,
    },
    {
      param: 'namespace_id',
      value: request.namespaceId,
    },
  ]),
})

export const marshalCreateTriggerRequest = (
  request: CreateTriggerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  container_id: request.containerId,
  description: request.description,
  name: request.name,
  ...resolveOneOf<unknown>([
    {
      param: 'scw_sqs_config',
      value: request.scwSqsConfig
        ? marshalCreateTriggerRequestMnqSqsClientConfig(
            request.scwSqsConfig,
            defaults,
          )
        : undefined,
    },
    {
      param: 'scw_nats_config',
      value: request.scwNatsConfig
        ? marshalCreateTriggerRequestMnqNatsClientConfig(
            request.scwNatsConfig,
            defaults,
          )
        : undefined,
    },
    {
      param: 'sqs_config',
      value: request.sqsConfig
        ? marshalCreateTriggerRequestSqsClientConfig(
            request.sqsConfig,
            defaults,
          )
        : undefined,
    },
  ]),
})

export const marshalUpdateContainerRequest = (
  request: UpdateContainerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cpu_limit: request.cpuLimit,
  description: request.description,
  environment_variables: request.environmentVariables,
  http_option: request.httpOption ?? 'unknown_http_option',
  max_concurrency: request.maxConcurrency,
  max_scale: request.maxScale,
  memory_limit: request.memoryLimit,
  min_scale: request.minScale,
  port: request.port,
  privacy: request.privacy ?? 'unknown_privacy',
  protocol: request.protocol ?? 'unknown_protocol',
  redeploy: request.redeploy,
  registry_image: request.registryImage,
  secret_environment_variables: request.secretEnvironmentVariables
    ? request.secretEnvironmentVariables.map(elt =>
        marshalSecret(elt, defaults),
      )
    : undefined,
  timeout: request.timeout,
})

export const marshalUpdateCronRequest = (
  request: UpdateCronRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  args: request.args,
  container_id: request.containerId,
  name: request.name,
  schedule: request.schedule,
})

export const marshalUpdateNamespaceRequest = (
  request: UpdateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  environment_variables: request.environmentVariables,
  secret_environment_variables: request.secretEnvironmentVariables
    ? request.secretEnvironmentVariables.map(elt =>
        marshalSecret(elt, defaults),
      )
    : undefined,
})

export const marshalUpdateTriggerRequest = (
  request: UpdateTriggerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  ...resolveOneOf([
    {
      param: 'sqs_config',
      value: request.sqsConfig
        ? marshalUpdateTriggerRequestSqsClientConfig(
            request.sqsConfig,
            defaults,
          )
        : undefined,
    },
  ]),
})
