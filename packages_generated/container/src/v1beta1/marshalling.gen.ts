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
	ContainerHealthCheckSpecHTTPProbe,
	ContainerHealthCheckSpecTCPProbe,
	ContainerHealthCheckSpec,
	ContainerScalingOption,
	SecretHashedValue,
	Container,
	Cron,
	Domain,
	Namespace,
	Token,
	TriggerMnqNatsClientConfig,
	TriggerMnqSqsClientConfig,
	TriggerSqsClientConfig,
	Trigger,
	ListContainersResponse,
	ListCronsResponse,
	ListDomainsResponse,
	ListNamespacesResponse,
	ListTokensResponse,
	ListTriggersResponse,
	Secret,
	CreateContainerRequest,
	CreateCronRequest,
	CreateDomainRequest,
	CreateNamespaceRequest,
	CreateTokenRequest,
	CreateTriggerRequestMnqNatsClientConfig,
	CreateTriggerRequestMnqSqsClientConfig,
	CreateTriggerRequestSqsClientConfig,
	CreateTriggerRequest,
	UpdateContainerRequest,
	UpdateCronRequest,
	UpdateNamespaceRequest,
	UpdateTriggerRequestSqsClientConfig,
	UpdateTriggerRequest,
} from './types.gen.js'

const unmarshalContainerHealthCheckSpecHTTPProbe = (
	data: unknown,
): ContainerHealthCheckSpecHTTPProbe => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ContainerHealthCheckSpecHTTPProbe' failed as data isn't a dictionary.`,
		)
	}

	return {
		path: data.path,
	} as ContainerHealthCheckSpecHTTPProbe
}

const unmarshalContainerHealthCheckSpecTCPProbe = (
	data: unknown,
): ContainerHealthCheckSpecTCPProbe => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ContainerHealthCheckSpecTCPProbe' failed as data isn't a dictionary.`,
		)
	}

	return {} as ContainerHealthCheckSpecTCPProbe
}

const unmarshalContainerHealthCheckSpec = (
	data: unknown,
): ContainerHealthCheckSpec => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ContainerHealthCheckSpec' failed as data isn't a dictionary.`,
		)
	}

	return {
		failureThreshold: data.failure_threshold,
		http: data.http
			? unmarshalContainerHealthCheckSpecHTTPProbe(data.http)
			: undefined,
		interval: data.interval,
		tcp: data.tcp
			? unmarshalContainerHealthCheckSpecTCPProbe(data.tcp)
			: undefined,
	} as ContainerHealthCheckSpec
}

const unmarshalContainerScalingOption = (
	data: unknown,
): ContainerScalingOption => {
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

export const unmarshalContainer = (data: unknown): Container => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Container' failed as data isn't a dictionary.`,
		)
	}

	return {
		args: data.args,
		command: data.command,
		cpuLimit: data.cpu_limit,
		createdAt: unmarshalDate(data.created_at),
		description: data.description,
		domainName: data.domain_name,
		environmentVariables: data.environment_variables,
		errorMessage: data.error_message,
		healthCheck: data.health_check
			? unmarshalContainerHealthCheckSpec(data.health_check)
			: undefined,
		httpOption: data.http_option,
		id: data.id,
		localStorageLimit: data.local_storage_limit,
		maxConcurrency: data.max_concurrency,
		maxScale: data.max_scale,
		memoryLimit: data.memory_limit,
		minScale: data.min_scale,
		name: data.name,
		namespaceId: data.namespace_id,
		port: data.port,
		privacy: data.privacy,
		privateNetworkId: data.private_network_id,
		protocol: data.protocol,
		readyAt: unmarshalDate(data.ready_at),
		region: data.region,
		registryImage: data.registry_image,
		sandbox: data.sandbox,
		scalingOption: data.scaling_option
			? unmarshalContainerScalingOption(data.scaling_option)
			: undefined,
		secretEnvironmentVariables: unmarshalArrayOfObject(
			data.secret_environment_variables,
			unmarshalSecretHashedValue,
		),
		status: data.status,
		tags: data.tags,
		timeout: data.timeout,
		updatedAt: unmarshalDate(data.updated_at),
	} as Container
}

export const unmarshalCron = (data: unknown): Cron => {
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

export const unmarshalDomain = (data: unknown): Domain => {
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

export const unmarshalListContainersResponse = (
	data: unknown,
): ListContainersResponse => {
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

const marshalContainerHealthCheckSpecHTTPProbe = (
	request: ContainerHealthCheckSpecHTTPProbe,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	path: request.path,
})

const marshalContainerHealthCheckSpecTCPProbe = (
	request: ContainerHealthCheckSpecTCPProbe,
	defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalContainerHealthCheckSpec = (
	request: ContainerHealthCheckSpec,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	failure_threshold: request.failureThreshold,
	interval: request.interval,
	...resolveOneOf([
		{
			param: 'http',
			value:
				request.http !== undefined
					? marshalContainerHealthCheckSpecHTTPProbe(request.http, defaults)
					: undefined,
		},
		{
			param: 'tcp',
			value:
				request.tcp !== undefined
					? marshalContainerHealthCheckSpecTCPProbe(request.tcp, defaults)
					: undefined,
		},
	]),
})

const marshalContainerScalingOption = (
	request: ContainerScalingOption,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	...resolveOneOf([
		{
			param: 'concurrent_requests_threshold',
			value: request.concurrentRequestsThreshold,
		},
		{ param: 'cpu_usage_threshold', value: request.cpuUsageThreshold },
		{ param: 'memory_usage_threshold', value: request.memoryUsageThreshold },
	]),
})

const marshalSecret = (
	request: Secret,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	key: request.key,
	value: request.value,
})

export const marshalCreateContainerRequest = (
	request: CreateContainerRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	args: request.args,
	command: request.command,
	cpu_limit: request.cpuLimit,
	description: request.description,
	environment_variables: request.environmentVariables,
	health_check:
		request.healthCheck !== undefined
			? marshalContainerHealthCheckSpec(request.healthCheck, defaults)
			: undefined,
	http_option: request.httpOption,
	local_storage_limit: request.localStorageLimit,
	max_concurrency: request.maxConcurrency,
	max_scale: request.maxScale,
	memory_limit: request.memoryLimit,
	min_scale: request.minScale,
	name: request.name,
	namespace_id: request.namespaceId,
	port: request.port,
	privacy: request.privacy,
	private_network_id: request.privateNetworkId,
	protocol: request.protocol,
	registry_image: request.registryImage,
	sandbox: request.sandbox,
	scaling_option:
		request.scalingOption !== undefined
			? marshalContainerScalingOption(request.scalingOption, defaults)
			: undefined,
	secret_environment_variables:
		request.secretEnvironmentVariables !== undefined
			? request.secretEnvironmentVariables.map((elt) =>
					marshalSecret(elt, defaults),
				)
			: undefined,
	tags: request.tags,
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
	activate_vpc_integration: request.activateVpcIntegration,
	description: request.description,
	environment_variables: request.environmentVariables,
	name: request.name || randomName('cns'),
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
		{ param: 'container_id', value: request.containerId },
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
	container_id: request.containerId,
	description: request.description,
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

export const marshalUpdateContainerRequest = (
	request: UpdateContainerRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	args: request.args,
	command: request.command,
	cpu_limit: request.cpuLimit,
	description: request.description,
	environment_variables: request.environmentVariables,
	health_check:
		request.healthCheck !== undefined
			? marshalContainerHealthCheckSpec(request.healthCheck, defaults)
			: undefined,
	http_option: request.httpOption,
	local_storage_limit: request.localStorageLimit,
	max_concurrency: request.maxConcurrency,
	max_scale: request.maxScale,
	memory_limit: request.memoryLimit,
	min_scale: request.minScale,
	port: request.port,
	privacy: request.privacy,
	private_network_id: request.privateNetworkId,
	protocol: request.protocol,
	redeploy: request.redeploy,
	registry_image: request.registryImage,
	sandbox: request.sandbox,
	scaling_option:
		request.scalingOption !== undefined
			? marshalContainerScalingOption(request.scalingOption, defaults)
			: undefined,
	secret_environment_variables:
		request.secretEnvironmentVariables !== undefined
			? request.secretEnvironmentVariables.map((elt) =>
					marshalSecret(elt, defaults),
				)
			: undefined,
	tags: request.tags,
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
