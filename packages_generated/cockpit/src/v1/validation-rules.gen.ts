// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const RegionalApiCreateDataSourceRequest = {
	name: {
		maxLength: 50,
		minLength: 3,
		pattern: /^[A-Za-z0-9-_. ]+$/,
	},
	retentionDays: {
		greaterThanOrEqual: 1,
		ignoreEmpty: true,
		lessThanOrEqual: 1825,
	},
}

export const RegionalApiCreateTokenRequest = {
	name: {
		maxLength: 50,
		minLength: 3,
		pattern: /^[A-Za-z0-9-_]+$/,
	},
}

export const RegionalApiListContactPointsRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const RegionalApiListDataSourcesRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const RegionalApiListProductsRequest = {
	page: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 10000,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 100,
	},
}

export const RegionalApiListTokensRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const RegionalApiUpdateDataSourceRequest = {
	name: {
		ignoreEmpty: true,
		maxLength: 50,
		minLength: 3,
		pattern: /^[A-Za-z0-9-_. ]+$/,
	},
	retentionDays: {
		greaterThanOrEqual: 1,
		ignoreEmpty: true,
		lessThanOrEqual: 1825,
	},
}
