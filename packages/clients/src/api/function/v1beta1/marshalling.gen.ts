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
  CreateCronRequest,
  CreateDomainRequest,
  CreateFunctionRequest,
  CreateNamespaceRequest,
  CreateTokenRequest,
  CreateTriggerRequest,
  CreateTriggerRequestMnqNatsClientConfig,
  CreateTriggerRequestMnqSqsClientConfig,
  CreateTriggerRequestSqsClientConfig,
  Cron,
  Domain,
  DownloadURL,
  Function,
  ListCronsResponse,
  ListDomainsResponse,
  ListFunctionRuntimesResponse,
  ListFunctionsResponse,
  ListLogsResponse,
  ListNamespacesResponse,
  ListTokensResponse,
  ListTriggersResponse,
  Log,
  Namespace,
  Runtime,
  Secret,
  SecretHashedValue,
  Token,
  Trigger,
  TriggerMnqNatsClientConfig,
  TriggerMnqSqsClientConfig,
  TriggerSqsClientConfig,
  UpdateCronRequest,
  UpdateFunctionRequest,
  UpdateNamespaceRequest,
  UpdateTriggerRequest,
  UpdateTriggerRequestSqsClientConfig,
  UploadURL,
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

export const unmarshalCron = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Cron' failed as data isn't a dictionary.`,
    )
  }

  return {
    args: data.args,
    functionId: data.function_id,
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
    errorMessage: data.error_message,
    functionId: data.function_id,
    hostname: data.hostname,
    id: data.id,
    status: data.status,
    url: data.url,
  } as Domain
}

export const unmarshalFunction = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Function' failed as data isn't a dictionary.`,
    )
  }

  return {
    buildMessage: data.build_message,
    cpuLimit: data.cpu_limit,
    description: data.description,
    domainName: data.domain_name,
    environmentVariables: data.environment_variables,
    errorMessage: data.error_message,
    handler: data.handler,
    httpOption: data.http_option,
    id: data.id,
    maxScale: data.max_scale,
    memoryLimit: data.memory_limit,
    minScale: data.min_scale,
    name: data.name,
    namespaceId: data.namespace_id,
    privacy: data.privacy,
    region: data.region,
    runtime: data.runtime,
    runtimeMessage: data.runtime_message,
    secretEnvironmentVariables: unmarshalArrayOfObject(
      data.secret_environment_variables,
      unmarshalSecretHashedValue,
    ),
    status: data.status,
    timeout: data.timeout,
  } as Function
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

const unmarshalRuntime = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Runtime' failed as data isn't a dictionary.`,
    )
  }

  return {
    codeSample: data.code_sample,
    defaultHandler: data.default_handler,
    extension: data.extension,
    implementation: data.implementation,
    language: data.language,
    logoUrl: data.logo_url,
    name: data.name,
    status: data.status,
    statusMessage: data.status_message,
    version: data.version,
  } as Runtime
}

export const unmarshalToken = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Token' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    expiresAt: unmarshalDate(data.expires_at),
    functionId: data.function_id,
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
    description: data.description,
    errorMessage: data.error_message,
    functionId: data.function_id,
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

export const unmarshalDownloadURL = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DownloadURL' failed as data isn't a dictionary.`,
    )
  }

  return { headers: data.headers, url: data.url } as DownloadURL
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

export const unmarshalListFunctionRuntimesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFunctionRuntimesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    runtimes: unmarshalArrayOfObject(data.runtimes, unmarshalRuntime),
    totalCount: data.total_count,
  } as ListFunctionRuntimesResponse
}

export const unmarshalListFunctionsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFunctionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    functions: unmarshalArrayOfObject(data.functions, unmarshalFunction),
    totalCount: data.total_count,
  } as ListFunctionsResponse
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

export const unmarshalUploadURL = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UploadURL' failed as data isn't a dictionary.`,
    )
  }

  return { headers: data.headers, url: data.url } as UploadURL
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

export const marshalCreateCronRequest = (
  request: CreateCronRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  args: request.args,
  function_id: request.functionId,
  name: request.name,
  schedule: request.schedule,
})

export const marshalCreateDomainRequest = (
  request: CreateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  function_id: request.functionId,
  hostname: request.hostname,
})

export const marshalCreateFunctionRequest = (
  request: CreateFunctionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  environment_variables: request.environmentVariables,
  handler: request.handler,
  http_option: request.httpOption ?? 'unknown_http_option',
  max_scale: request.maxScale,
  memory_limit: request.memoryLimit,
  min_scale: request.minScale,
  name: request.name || randomName('fn'),
  namespace_id: request.namespaceId,
  privacy: request.privacy ?? 'unknown_privacy',
  runtime: request.runtime ?? 'unknown_runtime',
  secret_environment_variables: request.secretEnvironmentVariables
    ? request.secretEnvironmentVariables.map(elt =>
        marshalSecret(elt, defaults),
      )
    : undefined,
  timeout: request.timeout,
})

export const marshalCreateNamespaceRequest = (
  request: CreateNamespaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  environment_variables: request.environmentVariables,
  name: request.name || randomName('ns'),
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
      param: 'function_id',
      value: request.functionId,
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
  description: request.description,
  function_id: request.functionId,
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
      param: 'sqs_config',
      value: request.sqsConfig
        ? marshalCreateTriggerRequestSqsClientConfig(
            request.sqsConfig,
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
  ]),
})

export const marshalUpdateCronRequest = (
  request: UpdateCronRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  args: request.args,
  function_id: request.functionId,
  name: request.name,
  schedule: request.schedule,
})

export const marshalUpdateFunctionRequest = (
  request: UpdateFunctionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  environment_variables: request.environmentVariables,
  handler: request.handler,
  http_option: request.httpOption ?? 'unknown_http_option',
  max_scale: request.maxScale,
  memory_limit: request.memoryLimit,
  min_scale: request.minScale,
  privacy: request.privacy ?? 'unknown_privacy',
  redeploy: request.redeploy,
  runtime: request.runtime ?? 'unknown_runtime',
  secret_environment_variables: request.secretEnvironmentVariables
    ? request.secretEnvironmentVariables.map(elt =>
        marshalSecret(elt, defaults),
      )
    : undefined,
  timeout: request.timeout,
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
