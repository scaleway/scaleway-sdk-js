// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateJobDefinitionRequest = {
	cpuLimit: {
		greaterThan: 0,
	},
	description: {
		maxLength: 255,
	},
	imageUri: {
		pattern:
			/^((?:(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])(?:\.(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]))*|\[(?:[a-fA-F0-9:]+)\])(?::[0-9]+)?\/)?[a-z0-9]+(?:(?:[._]|__|[-]+)[a-z0-9]+)*(?:\/[a-z0-9]+(?:(?:[._]|__|[-]+)[a-z0-9]+)*)*)(?::(\w[A-Za-z0-9_.-]{0,127}))?(?:@([A-Za-z][A-Za-z0-9]*(?:[-_+.][A-Za-z][A-Za-z0-9]*)*[:][[:xdigit:]]{32,}))?$/,
	},
	localStorageCapacity: {
		greaterThan: 0,
	},
	memoryLimit: {
		greaterThan: 0,
	},
	name: {
		pattern: /^[A-Za-z0-9-_]{3,50}$/,
	},
}

export const CreateJobDefinitionRequestCronScheduleConfig = {
	schedule: {
		maxLength: 255,
		minLength: 1,
	},
	timezone: {
		maxLength: 255,
		minLength: 1,
	},
}

export const CreateJobDefinitionSecretsRequestSecretConfig = {
	secretManagerVersion: {
		minLength: 1,
	},
}

export const CronSchedule = {
	schedule: {
		maxLength: 255,
		minLength: 1,
	},
	timezone: {
		maxLength: 255,
		minLength: 1,
	},
}

export const ListJobDefinitionsRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const ListJobRunsRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const StartJobDefinitionRequest = {
	replicas: {
		greaterThan: 0,
	},
}

export const UpdateJobDefinitionRequest = {
	cpuLimit: {
		greaterThan: 0,
	},
	description: {
		maxLength: 255,
	},
	imageUri: {
		pattern:
			/^((?:(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])(?:\.(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]))*|\[(?:[a-fA-F0-9:]+)\])(?::[0-9]+)?\/)?[a-z0-9]+(?:(?:[._]|__|[-]+)[a-z0-9]+)*(?:\/[a-z0-9]+(?:(?:[._]|__|[-]+)[a-z0-9]+)*)*)(?::(\w[A-Za-z0-9_.-]{0,127}))?(?:@([A-Za-z][A-Za-z0-9]*(?:[-_+.][A-Za-z][A-Za-z0-9]*)*[:][[:xdigit:]]{32,}))?$/,
	},
	localStorageCapacity: {
		greaterThan: 0,
	},
	memoryLimit: {
		greaterThan: 0,
	},
	name: {
		pattern: /^[A-Za-z0-9-_]{3,50}$/,
	},
}

export const UpdateJobDefinitionRequestCronScheduleConfig = {
	schedule: {
		maxLength: 255,
		minLength: 1,
	},
	timezone: {
		maxLength: 255,
		minLength: 1,
	},
}

export const UpdateJobDefinitionSecretRequest = {
	secretManagerVersion: {
		minLength: 1,
	},
}
