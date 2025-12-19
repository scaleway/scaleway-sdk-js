// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

export const BgpConfig = {
	asn: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 65534,
	},
}

export const CreateLinkRequest = {
	bandwidthMbps: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 100000000,
	},
	name: {
		maxLength: 255,
		minLength: 1,
	},
	peerAsn: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 65534,
	},
}

export const CreateRoutingPolicyRequest = {
	name: {
		maxLength: 255,
		minLength: 1,
	},
}

export const Link = {
	name: {
		minLength: 1,
	},
}

export const ListDedicatedConnectionsRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const ListLinksRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const ListPartnersRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const ListPopsRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const ListRoutingPoliciesRequest = {
	page: {
		greaterThanOrEqual: 1,
	},
	pageSize: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 1000,
	},
}

export const Partner = {
	name: {
		minLength: 1,
	},
}

export const Pop = {
	address: {
		minLength: 1,
	},
	city: {
		minLength: 1,
	},
	displayName: {
		minLength: 1,
	},
	hostingProviderName: {
		minLength: 1,
	},
	name: {
		minLength: 1,
	},
}

export const RoutingPolicy = {
	name: {
		minLength: 1,
	},
}

export const UpdateLinkRequest = {
	name: {
		maxLength: 255,
		minLength: 1,
	},
	peerAsn: {
		greaterThanOrEqual: 1,
		lessThanOrEqual: 65534,
	},
}

export const UpdateRoutingPolicyRequest = {
	name: {
		maxLength: 255,
		minLength: 1,
	},
}
