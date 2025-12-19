// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
	isJSONObject,
	resolveOneOf,
	unmarshalArrayOfObject,
	unmarshalDate,
} from '@scaleway/sdk-client'
import type {
	DefaultValues,
} from '@scaleway/sdk-client'
import type {
	Cron,
	Domain,
	SecretHashedValue,
	Function,
	Namespace,
	Token,
	TriggerMnqNatsClientConfig,
	TriggerMnqSqsClientConfig,
	TriggerSqsClientConfig,
	Trigger,
	DownloadURL,
	ListCronsResponse,
	ListDomainsResponse,
	Runtime,
	ListFunctionRuntimesResponse,
	ListFunctionsResponse,
	ListNamespacesResponse,
	ListTokensResponse,
	ListTriggersResponse,
	UploadURL,
	CreateCronRequest,
	CreateDomainRequest,
	Secret,
	CreateFunctionRequest,
	CreateNamespaceRequest,
	CreateTokenRequest,
	CreateTriggerRequestMnqNatsClientConfig,
	CreateTriggerRequestMnqSqsClientConfig,
	CreateTriggerRequestSqsClientConfig,
	CreateTriggerRequest,
	UpdateCronRequest,
	UpdateFunctionRequest,
	UpdateNamespaceRequest,
	UpdateTriggerRequestSqsClientConfig,
	UpdateTriggerRequest,
} from './types.gen.js'

export const unmarshalCron = (data: unknown): Cron => {
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

export const unmarshalDomain = (data: unknown): Domain => {
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

const unmarshalSecretHashedValue = (data: unknown): SecretHashedValue => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'SecretHashedValue' failed as data isn't a dictionary.`,
		)
	}

	return {
		hashedValue: data.hashed_value,
		key: data.key,
	} as SecretHashedValue
}

export const unmarshalFunction = (data: unknown): Function => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Function' failed as data isn't a dictionary.`,
		)
	}

	return {
		buildMessage: data.build_message,
		cpuLimit: data.cpu_limit,
		createdAt: unmarshalDate(data.created_at),
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
		privateNetworkId: data.private_network_id,
		readyAt: unmarshalDate(data.ready_at),
		region: data.region,
		runtime: data.runtime,
		runtimeMessage: data.runtime_message,
		sandbox: data.sandbox,
		secretEnvironmentVariables: unmarshalArrayOfObject(
			data.secret_environment_variables,
			unmarshalSecretHashedValue,
		),
		status: data.status,
		tags: data.tags,
		timeout: data.timeout,
		updatedAt: unmarshalDate(data.updated_at),
	} as Function
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
		registryEndpoint: data.registry_endpoint,
		registryNamespaceId: data.registry_namespace_id,
		secretEnvironmentVariables: unmarshalArrayOfObject(
			data.secret_environment_variables,
			unmarshalSecretHashedValue,
		),
		status: data.status,
		tags: data.tags,
		updatedAt: unmarshalDate(data.updated_at),
		vpcIntegrationActivated: data.vpc_integration_activated,
	} as Namespace
}

export const unmarshalToken = (data: unknown): Token => {
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

const unmarshalTriggerMnqNatsClientConfig = (
	data: unknown,
): TriggerMnqNatsClientConfig => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'TriggerMnqNatsClientConfig' failed as data isn't a dictionary.`,
		)
	}

	return {
		mnqCredentialId: data.mnq_credential_id,
		mnqNatsAccountId: data.mnq_nats_account_id,
		mnqProjectId: data.mnq_project_id,
		mnqRegion: data.mnq_region,
		subject: data.subject,
	} as TriggerMnqNatsClientConfig
}

const unmarshalTriggerMnqSqsClientConfig = (
	data: unknown,
): TriggerMnqSqsClientConfig => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'TriggerMnqSqsClientConfig' failed as data isn't a dictionary.`,
		)
	}

	return {
		mnqCredentialId: data.mnq_credential_id,
		mnqProjectId: data.mnq_project_id,
		mnqRegion: data.mnq_region,
		queue: data.queue,
	} as TriggerMnqSqsClientConfig
}

const unmarshalTriggerSqsClientConfig = (
	data: unknown,
): TriggerSqsClientConfig => {
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

export const unmarshalTrigger = (data: unknown): Trigger => {
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

export const unmarshalDownloadURL = (data: unknown): DownloadURL => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'DownloadURL' failed as data isn't a dictionary.`,
		)
	}

	return {
		headers: data.headers,
		url: data.url,
	} as DownloadURL
}

export const unmarshalListCronsResponse = (
	data: unknown,
): ListCronsResponse => {
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

export const unmarshalListDomainsResponse = (
	data: unknown,
): ListDomainsResponse => {
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

const unmarshalRuntime = (data: unknown): Runtime => {
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

export const unmarshalListFunctionRuntimesResponse = (
	data: unknown,
): ListFunctionRuntimesResponse => {
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

export const unmarshalListFunctionsResponse = (
	data: unknown,
): ListFunctionsResponse => {
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

export const unmarshalListNamespacesResponse = (
	data: unknown,
): ListNamespacesResponse => {
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

export const unmarshalListTokensResponse = (
	data: unknown,
): ListTokensResponse => {
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

export const unmarshalListTriggersResponse = (
	data: unknown,
): ListTriggersResponse => {
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

export const unmarshalUploadURL = (data: unknown): UploadURL => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'UploadURL' failed as data isn't a dictionary.`,
		)
	}

	return {
		headers: data.headers,
		url: data.url,
	} as UploadURL
}

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

const marshalSecret = (
	request: Secret,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	key: request.key,
	value: request.value,
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
	private_network_id: request.privateNetworkId,
	runtime: request.runtime,
	sandbox: request.sandbox,
	secret_environment_variables:
		request.secretEnvironmentVariables !== undefined
			? request.secretEnvironmentVariables.map((elt) =>
					marshalSecret(elt, defaults),
				)
			: undefined,
	tags: request.tags,
	timeout: request.timeout,
})

export const marshalCreateNamespaceRequest = (
	request: CreateNamespaceRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	activate_vpc_integration: request.activateVpcIntegration,
	description: request.description,
	environment_variables: request.environmentVariables,
	name: request.name || randomName('ns'),
	project_id: request.projectId ?? defaults.defaultProjectId,
	secret_environment_variables:
		request.secretEnvironmentVariables !== undefined
			? request.secretEnvironmentVariables.map((elt) =>
					marshalSecret(elt, defaults),
				)
			: undefined,
	tags: request.tags,
})

export const marshalCreateTokenRequest = (
	request: CreateTokenRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	description: request.description,
	expires_at: request.expiresAt,
	...resolveOneOf([
		{ param: 'function_id', value: request.functionId },
		{ param: 'namespace_id', value: request.namespaceId },
	]),
})

const marshalCreateTriggerRequestMnqNatsClientConfig = (
	request: CreateTriggerRequestMnqNatsClientConfig,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	mnq_nats_account_id: request.mnqNatsAccountId,
	mnq_project_id: request.mnqProjectId,
	mnq_region: request.mnqRegion,
	subject: request.subject,
})

const marshalCreateTriggerRequestMnqSqsClientConfig = (
	request: CreateTriggerRequestMnqSqsClientConfig,
	defaults: DefaultValues,
): Record<string, unknown> => ({
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

export const marshalCreateTriggerRequest = (
	request: CreateTriggerRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	description: request.description,
	function_id: request.functionId,
	name: request.name,
	...resolveOneOf([
		{
			param: 'scw_sqs_config',
			value:
				request.scwSqsConfig !== undefined
					? marshalCreateTriggerRequestMnqSqsClientConfig(
							request.scwSqsConfig,
							defaults,
						)
					: undefined,
		},
		{
			param: 'scw_nats_config',
			value:
				request.scwNatsConfig !== undefined
					? marshalCreateTriggerRequestMnqNatsClientConfig(
							request.scwNatsConfig,
							defaults,
						)
					: undefined,
		},
		{
			param: 'sqs_config',
			value:
				request.sqsConfig !== undefined
					? marshalCreateTriggerRequestSqsClientConfig(
							request.sqsConfig,
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
	http_option: request.httpOption,
	max_scale: request.maxScale,
	memory_limit: request.memoryLimit,
	min_scale: request.minScale,
	privacy: request.privacy,
	private_network_id: request.privateNetworkId,
	redeploy: request.redeploy,
	runtime: request.runtime,
	sandbox: request.sandbox,
	secret_environment_variables:
		request.secretEnvironmentVariables !== undefined
			? request.secretEnvironmentVariables.map((elt) =>
					marshalSecret(elt, defaults),
				)
			: undefined,
	tags: request.tags,
	timeout: request.timeout,
})

export const marshalUpdateNamespaceRequest = (
	request: UpdateNamespaceRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	description: request.description,
	environment_variables: request.environmentVariables,
	secret_environment_variables:
		request.secretEnvironmentVariables !== undefined
			? request.secretEnvironmentVariables.map((elt) =>
					marshalSecret(elt, defaults),
				)
			: undefined,
	tags: request.tags,
})

const marshalUpdateTriggerRequestSqsClientConfig = (
	request: UpdateTriggerRequestSqsClientConfig,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	access_key: request.accessKey,
	secret_key: request.secretKey,
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
			value:
				request.sqsConfig !== undefined
					? marshalUpdateTriggerRequestSqsClientConfig(
							request.sqsConfig,
							defaults,
						)
					: undefined,
		},
	]),
})
