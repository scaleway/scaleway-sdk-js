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
  CreateTriggerInputRequest,
  CreateTriggerInputRequestNatsClientConfigSpec,
  CreateTriggerInputRequestSqsClientConfigSpec,
  CreateTriggerRequest,
  CreateTriggerRequestNatsFailureHandlingPolicy,
  CreateTriggerRequestNatsFailureHandlingPolicyNatsDeadLetter,
  CreateTriggerRequestNatsFailureHandlingPolicyRetryPolicy,
  CreateTriggerRequestNatsFailureHandlingPolicySqsDeadLetter,
  CreateTriggerRequestSqsFailureHandlingPolicy,
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
  ListTriggerInputsResponse,
  ListTriggersResponse,
  Log,
  Namespace,
  Runtime,
  Secret,
  SecretHashedValue,
  SetTriggerInputsRequest,
  SetTriggerInputsRequestNatsConfigs,
  SetTriggerInputsRequestSqsConfigs,
  SetTriggerInputsResponse,
  Token,
  Trigger,
  TriggerInput,
  TriggerInputNatsClientConfig,
  TriggerInputSqsClientConfig,
  TriggerNatsDeadLetter,
  TriggerNatsFailureHandlingPolicy,
  TriggerRetryPolicy,
  TriggerSqsDeadLetter,
  TriggerSqsFailureHandlingPolicy,
  UpdateCronRequest,
  UpdateFunctionRequest,
  UpdateNamespaceRequest,
  UpdateTriggerInputRequest,
  UpdateTriggerInputRequestNatsClientConfigSpec,
  UpdateTriggerInputRequestSqsClientConfigSpec,
  UpdateTriggerRequest,
  UploadURL,
} from './types.gen'

const unmarshalTriggerNatsDeadLetter = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerNatsDeadLetter' failed as data isn't a dictionary.`,
    )
  }

  return {
    mnqNamespaceId: data.mnq_namespace_id,
    subject: data.subject,
  } as TriggerNatsDeadLetter
}

const unmarshalTriggerRetryPolicy = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerRetryPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    maxRetries: data.max_retries,
    retryPeriod: data.retry_period,
  } as TriggerRetryPolicy
}

const unmarshalTriggerSqsDeadLetter = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerSqsDeadLetter' failed as data isn't a dictionary.`,
    )
  }

  return {
    mnqNamespaceId: data.mnq_namespace_id,
    queue: data.queue,
  } as TriggerSqsDeadLetter
}

const unmarshalSecretHashedValue = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretHashedValue' failed as data isn't a dictionary.`,
    )
  }

  return { hashedValue: data.hashed_value, key: data.key } as SecretHashedValue
}

const unmarshalTriggerInputNatsClientConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerInputNatsClientConfig' failed as data isn't a dictionary.`,
    )
  }

  return { subject: data.subject } as TriggerInputNatsClientConfig
}

const unmarshalTriggerInputSqsClientConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerInputSqsClientConfig' failed as data isn't a dictionary.`,
    )
  }

  return { queue: data.queue } as TriggerInputSqsClientConfig
}

const unmarshalTriggerNatsFailureHandlingPolicy = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerNatsFailureHandlingPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {
    natsDeadLetter: data.nats_dead_letter
      ? unmarshalTriggerNatsDeadLetter(data.nats_dead_letter)
      : undefined,
    retryPolicy: data.retry_policy
      ? unmarshalTriggerRetryPolicy(data.retry_policy)
      : undefined,
    sqsDeadLetter: data.sqs_dead_letter
      ? unmarshalTriggerSqsDeadLetter(data.sqs_dead_letter)
      : undefined,
  } as TriggerNatsFailureHandlingPolicy
}

const unmarshalTriggerSqsFailureHandlingPolicy = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerSqsFailureHandlingPolicy' failed as data isn't a dictionary.`,
    )
  }

  return {} as TriggerSqsFailureHandlingPolicy
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
    name: data.name,
    natsFailureHandlingPolicy: data.nats_failure_handling_policy
      ? unmarshalTriggerNatsFailureHandlingPolicy(
          data.nats_failure_handling_policy,
        )
      : undefined,
    sqsFailureHandlingPolicy: data.sqs_failure_handling_policy
      ? unmarshalTriggerSqsFailureHandlingPolicy(
          data.sqs_failure_handling_policy,
        )
      : undefined,
    status: data.status,
    type: data.type,
  } as Trigger
}

export const unmarshalTriggerInput = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TriggerInput' failed as data isn't a dictionary.`,
    )
  }

  return {
    errorMessage: data.error_message,
    id: data.id,
    mnqNamespaceId: data.mnq_namespace_id,
    natsConfig: data.nats_config
      ? unmarshalTriggerInputNatsClientConfig(data.nats_config)
      : undefined,
    sqsConfig: data.sqs_config
      ? unmarshalTriggerInputSqsClientConfig(data.sqs_config)
      : undefined,
    status: data.status,
  } as TriggerInput
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

export const unmarshalListTriggerInputsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTriggerInputsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    inputs: unmarshalArrayOfObject(data.inputs, unmarshalTriggerInput),
    totalCount: data.total_count,
  } as ListTriggerInputsResponse
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

export const unmarshalSetTriggerInputsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetTriggerInputsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    triggerInputs: unmarshalArrayOfObject(
      data.trigger_inputs,
      unmarshalTriggerInput,
    ),
  } as SetTriggerInputsResponse
}

export const unmarshalUploadURL = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UploadURL' failed as data isn't a dictionary.`,
    )
  }

  return { headers: data.headers, url: data.url } as UploadURL
}

const marshalCreateTriggerInputRequestNatsClientConfigSpec = (
  request: CreateTriggerInputRequestNatsClientConfigSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  subject: request.subject,
})

const marshalCreateTriggerInputRequestSqsClientConfigSpec = (
  request: CreateTriggerInputRequestSqsClientConfigSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  queue: request.queue,
})

const marshalCreateTriggerRequestNatsFailureHandlingPolicyNatsDeadLetter = (
  request: CreateTriggerRequestNatsFailureHandlingPolicyNatsDeadLetter,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mnq_namespace_id: request.mnqNamespaceId,
  subject: request.subject,
})

const marshalCreateTriggerRequestNatsFailureHandlingPolicyRetryPolicy = (
  request: CreateTriggerRequestNatsFailureHandlingPolicyRetryPolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  max_retries: request.maxRetries,
  retry_period: request.retryPeriod,
})

const marshalCreateTriggerRequestNatsFailureHandlingPolicySqsDeadLetter = (
  request: CreateTriggerRequestNatsFailureHandlingPolicySqsDeadLetter,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mnq_namespace_id: request.mnqNamespaceId,
  queue: request.queue,
})

const marshalCreateTriggerRequestNatsFailureHandlingPolicy = (
  request: CreateTriggerRequestNatsFailureHandlingPolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  retry_policy: request.retryPolicy
    ? marshalCreateTriggerRequestNatsFailureHandlingPolicyRetryPolicy(
        request.retryPolicy,
        defaults,
      )
    : undefined,
  ...resolveOneOf<unknown>([
    {
      param: 'nats_dead_letter',
      value: request.natsDeadLetter
        ? marshalCreateTriggerRequestNatsFailureHandlingPolicyNatsDeadLetter(
            request.natsDeadLetter,
            defaults,
          )
        : undefined,
    },
    {
      param: 'sqs_dead_letter',
      value: request.sqsDeadLetter
        ? marshalCreateTriggerRequestNatsFailureHandlingPolicySqsDeadLetter(
            request.sqsDeadLetter,
            defaults,
          )
        : undefined,
    },
  ]),
})

const marshalCreateTriggerRequestSqsFailureHandlingPolicy = (
  request: CreateTriggerRequestSqsFailureHandlingPolicy,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalSecret = (
  request: Secret,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  key: request.key,
  value: request.value,
})

const marshalSetTriggerInputsRequestNatsConfigs = (
  request: SetTriggerInputsRequestNatsConfigs,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  configs: request.configs.map(elt =>
    marshalCreateTriggerInputRequestNatsClientConfigSpec(elt, defaults),
  ),
})

const marshalSetTriggerInputsRequestSqsConfigs = (
  request: SetTriggerInputsRequestSqsConfigs,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  configs: request.configs.map(elt =>
    marshalCreateTriggerInputRequestSqsClientConfigSpec(elt, defaults),
  ),
})

const marshalUpdateTriggerInputRequestNatsClientConfigSpec = (
  request: UpdateTriggerInputRequestNatsClientConfigSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  subject: request.subject,
})

const marshalUpdateTriggerInputRequestSqsClientConfigSpec = (
  request: UpdateTriggerInputRequestSqsClientConfigSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  queue: request.queue,
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
  http_option: request.httpOption,
  max_scale: request.maxScale,
  memory_limit: request.memoryLimit,
  min_scale: request.minScale,
  name: request.name || randomName('fn'),
  namespace_id: request.namespaceId,
  privacy: request.privacy,
  runtime: request.runtime,
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

export const marshalCreateTriggerInputRequest = (
  request: CreateTriggerInputRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mnq_namespace_id: request.mnqNamespaceId,
  trigger_id: request.triggerId,
  ...resolveOneOf<unknown>([
    {
      param: 'nats_config',
      value: request.natsConfig
        ? marshalCreateTriggerInputRequestNatsClientConfigSpec(
            request.natsConfig,
            defaults,
          )
        : undefined,
    },
    {
      param: 'sqs_config',
      value: request.sqsConfig
        ? marshalCreateTriggerInputRequestSqsClientConfigSpec(
            request.sqsConfig,
            defaults,
          )
        : undefined,
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
  type: request.type,
  ...resolveOneOf<unknown>([
    {
      param: 'nats_failure_handling_policy',
      value: request.natsFailureHandlingPolicy
        ? marshalCreateTriggerRequestNatsFailureHandlingPolicy(
            request.natsFailureHandlingPolicy,
            defaults,
          )
        : undefined,
    },
    {
      param: 'sqs_failure_handling_policy',
      value: request.sqsFailureHandlingPolicy
        ? marshalCreateTriggerRequestSqsFailureHandlingPolicy(
            request.sqsFailureHandlingPolicy,
            defaults,
          )
        : undefined,
    },
  ]),
})

export const marshalSetTriggerInputsRequest = (
  request: SetTriggerInputsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  trigger_input_id: request.triggerInputId,
  ...resolveOneOf<unknown>([
    {
      param: 'sqs',
      value: request.sqs
        ? marshalSetTriggerInputsRequestSqsConfigs(request.sqs, defaults)
        : undefined,
    },
    {
      param: 'nats',
      value: request.nats
        ? marshalSetTriggerInputsRequestNatsConfigs(request.nats, defaults)
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
  http_option: request.httpOption,
  max_scale: request.maxScale,
  memory_limit: request.memoryLimit,
  min_scale: request.minScale,
  privacy: request.privacy,
  redeploy: request.redeploy,
  runtime: request.runtime,
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

export const marshalUpdateTriggerInputRequest = (
  request: UpdateTriggerInputRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf<unknown>([
    {
      param: 'nats_config',
      value: request.natsConfig
        ? marshalUpdateTriggerInputRequestNatsClientConfigSpec(
            request.natsConfig,
            defaults,
          )
        : undefined,
    },
    {
      param: 'sqs_config',
      value: request.sqsConfig
        ? marshalUpdateTriggerInputRequestSqsClientConfigSpec(
            request.sqsConfig,
            defaults,
          )
        : undefined,
    },
  ]),
})

export const marshalUpdateTriggerRequest = (
  request: UpdateTriggerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  ...resolveOneOf<unknown>([
    {
      param: 'nats_config',
      value: request.natsConfig
        ? marshalCreateTriggerRequestNatsFailureHandlingPolicy(
            request.natsConfig,
            defaults,
          )
        : undefined,
    },
    {
      param: 'sqs_config',
      value: request.sqsConfig
        ? marshalCreateTriggerRequestSqsFailureHandlingPolicy(
            request.sqsConfig,
            defaults,
          )
        : undefined,
    },
  ]),
})
