// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateSnapshotRequest = {
	name: {
		minLength: 1,
	},
}

export const CreateVolumeRequest = {
	name: {
		minLength: 1,
	},
}

export const ImportSnapshotFromObjectStorageRequest = {
	name: {
		minLength: 1,
	},
}

export const ImportSnapshotFromS3Request = {
	name: {
		minLength: 1,
	},
}

export const ListSnapshotsRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const ListVolumeTypesRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const ListVolumesRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const Reference = {
	productResourceType: {
		minLength: 1,
	},
}
