// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const ContainerHealthCheckSpec = {
	failureThreshold: {
		greaterThanOrEqual: 3,
		lessThanOrEqual: 50,
	},
}

export const ContainerHealthCheckSpecHTTPProbe = {
	path: {
		maxLength: 100,
		minLength: 1,
	},
}

export const ContainerScalingOption = {}

export const CreateContainerRequest = {
	privateNetworkId: {
		ignoreEmpty: true,
	},
}

export const CreateTriggerRequest = {
	description: {
		maxLength: 255,
	},
	name: {
		maxLength: 50,
		minLength: 1,
	},
}

export const CreateTriggerRequestMnqNatsClientConfig = {
	mnqRegion: {
		maxLength: 20,
		minLength: 1,
	},
	subject: {
		maxLength: 100,
		minLength: 1,
		pattern: /^[^\s]+$/,
	},
}

export const CreateTriggerRequestMnqSqsClientConfig = {
	mnqRegion: {
		maxLength: 20,
		minLength: 1,
	},
	queue: {
		maxLength: 100,
		minLength: 1,
	},
}

export const UpdateContainerRequest = {
	privateNetworkId: {
		ignoreEmpty: true,
	},
}

export const UpdateTriggerRequest = {
	description: {
		maxLength: 255,
	},
	name: {
		maxLength: 50,
		minLength: 1,
	},
}
