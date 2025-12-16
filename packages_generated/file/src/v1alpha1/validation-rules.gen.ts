// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateFileSystemRequest = {
	name: {
		minLength: 1,
	},
	size: {
		greaterThan: 0,
	},
}

export const ListAttachmentsRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const ListFileSystemsRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const UpdateFileSystemRequest = {
	name: {
		minLength: 1,
	},
	size: {
		greaterThan: 0,
	},
}
