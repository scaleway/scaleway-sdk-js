// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const ContractApiCheckContractSignatureRequest = {
	contractName: {
		minLength: 1,
	},
}

export const ContractApiCreateContractSignatureRequest = {
	contractName: {
		minLength: 1,
	},
}

export const ContractApiListContractSignaturesRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 100,
	},
}

export const ProjectApiCreateProjectRequest = {
	description: {
		maxLength: 200,
	},
	name: {
		maxLength: 64,
		minLength: 1,
		pattern: /^[a-zA-Z0-9\._\- ]+$/,
	},
}

export const ProjectApiListProjectsRequest = {
	name: {
		maxLength: 64,
		minLength: 1,
		pattern: /^[a-zA-Z0-9\._\- ]+$/,
	},
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 100,
	},
}

export const ProjectApiUpdateProjectRequest = {
	description: {
		maxLength: 200,
	},
	name: {
		maxLength: 64,
		minLength: 1,
		pattern: /^[a-zA-Z0-9\._\- ]+$/,
	},
}
