// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const CreateServerRequest = {
	description: {
		maxLength: 255,
	},
	name: {
		minLength: 1,
	},
}

export const CreateServerRequestInstall = {
	hostname: {
		maxLength: 255,
	},
	password: {
		maxLength: 255,
	},
	servicePassword: {
		maxLength: 255,
	},
	serviceUser: {
		maxLength: 255,
	},
	user: {
		maxLength: 255,
	},
}

export const InstallServerRequest = {
	hostname: {
		maxLength: 255,
	},
	password: {
		maxLength: 255,
	},
	servicePassword: {
		maxLength: 255,
	},
	serviceUser: {
		maxLength: 255,
	},
	user: {
		maxLength: 255,
	},
}

export const ListOSRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const ListOffersRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const ListOptionsRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const ListServerEventsRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const ListServersRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const ListSettingsRequest = {
	page: {
		greaterThan: 0,
	},
	pageSize: {
		greaterThan: 0,
		lessThanOrEqual: 100,
	},
}

export const UpdateServerRequest = {
	description: {
		maxLength: 255,
	},
	name: {
		maxLength: 255,
	},
}
