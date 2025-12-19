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
	EndpointPrivateNetworkDetails,
	EndpointPublicDetails,
	Endpoint,
	ClusterSetting,
	Volume,
	Cluster,
	User,
	ListClustersResponse,
	NodeTypeVolumeType,
	NodeType,
	ListNodeTypesResponse,
	ListUsersResponse,
	VersionAvailableSettingBooleanProperty,
	VersionAvailableSettingFloatProperty,
	VersionAvailableSettingIntegerProperty,
	VersionAvailableSettingStringProperty,
	VersionAvailableSetting,
	Version,
	ListVersionsResponse,
	EndpointSpecPrivateNetworkDetails,
	EndpointSpecPublicDetails,
	CreateClusterRequestVolumeSpec,
	EndpointSpec,
	CreateClusterRequest,
	CreateEndpointRequest,
	UpdateClusterRequest,
	UpdateUserRequest,
} from './types.gen.js'

const unmarshalEndpointPrivateNetworkDetails = (
	data: unknown,
): EndpointPrivateNetworkDetails => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'EndpointPrivateNetworkDetails' failed as data isn't a dictionary.`,
		)
	}

	return {
		privateNetworkId: data.private_network_id,
	} as EndpointPrivateNetworkDetails
}

const unmarshalEndpointPublicDetails = (
	data: unknown,
): EndpointPublicDetails => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'EndpointPublicDetails' failed as data isn't a dictionary.`,
		)
	}

	return {} as EndpointPublicDetails
}

export const unmarshalEndpoint = (data: unknown): Endpoint => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Endpoint' failed as data isn't a dictionary.`,
		)
	}

	return {
		dnsRecords: data.dns_records,
		id: data.id,
		port: data.port,
		privateNetwork: data.private_network
			? unmarshalEndpointPrivateNetworkDetails(data.private_network)
			: undefined,
		publicNetwork: data.public_network
			? unmarshalEndpointPublicDetails(data.public_network)
			: undefined,
	} as Endpoint
}

const unmarshalClusterSetting = (data: unknown): ClusterSetting => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ClusterSetting' failed as data isn't a dictionary.`,
		)
	}

	return {
		boolValue: data.bool_value,
		floatValue: data.float_value,
		intValue: data.int_value,
		name: data.name,
		stringValue: data.string_value,
	} as ClusterSetting
}

const unmarshalVolume = (data: unknown): Volume => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Volume' failed as data isn't a dictionary.`,
		)
	}

	return {
		sizeBytes: data.size_bytes,
		type: data.type,
	} as Volume
}

export const unmarshalCluster = (data: unknown): Cluster => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Cluster' failed as data isn't a dictionary.`,
		)
	}

	return {
		createdAt: unmarshalDate(data.created_at),
		endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
		id: data.id,
		name: data.name,
		nodeAmount: data.node_amount,
		nodeType: data.node_type,
		organizationId: data.organization_id,
		projectId: data.project_id,
		region: data.region,
		settings: unmarshalArrayOfObject(data.settings, unmarshalClusterSetting),
		status: data.status,
		tags: data.tags,
		updatedAt: unmarshalDate(data.updated_at),
		version: data.version,
		volume: data.volume ? unmarshalVolume(data.volume) : undefined,
	} as Cluster
}

export const unmarshalUser = (data: unknown): User => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'User' failed as data isn't a dictionary.`,
		)
	}

	return {
		username: data.username,
	} as User
}

export const unmarshalListClustersResponse = (
	data: unknown,
): ListClustersResponse => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ListClustersResponse' failed as data isn't a dictionary.`,
		)
	}

	return {
		clusters: unmarshalArrayOfObject(data.clusters, unmarshalCluster),
		totalCount: data.total_count,
	} as ListClustersResponse
}

const unmarshalNodeTypeVolumeType = (data: unknown): NodeTypeVolumeType => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'NodeTypeVolumeType' failed as data isn't a dictionary.`,
		)
	}

	return {
		chunkSizeBytes: data.chunk_size_bytes,
		description: data.description,
		maxSizeBytes: data.max_size_bytes,
		minSizeBytes: data.min_size_bytes,
		type: data.type,
	} as NodeTypeVolumeType
}

const unmarshalNodeType = (data: unknown): NodeType => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'NodeType' failed as data isn't a dictionary.`,
		)
	}

	return {
		availableVolumeTypes: unmarshalArrayOfObject(
			data.available_volume_types,
			unmarshalNodeTypeVolumeType,
		),
		beta: data.beta,
		clusterRange: data.cluster_range,
		description: data.description,
		disabled: data.disabled,
		memoryBytes: data.memory_bytes,
		name: data.name,
		stockStatus: data.stock_status,
		vcpus: data.vcpus,
	} as NodeType
}

export const unmarshalListNodeTypesResponse = (
	data: unknown,
): ListNodeTypesResponse => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ListNodeTypesResponse' failed as data isn't a dictionary.`,
		)
	}

	return {
		nodeTypes: unmarshalArrayOfObject(data.node_types, unmarshalNodeType),
		totalCount: data.total_count,
	} as ListNodeTypesResponse
}

export const unmarshalListUsersResponse = (
	data: unknown,
): ListUsersResponse => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ListUsersResponse' failed as data isn't a dictionary.`,
		)
	}

	return {
		totalCount: data.total_count,
		users: unmarshalArrayOfObject(data.users, unmarshalUser),
	} as ListUsersResponse
}

const unmarshalVersionAvailableSettingBooleanProperty = (
	data: unknown,
): VersionAvailableSettingBooleanProperty => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'VersionAvailableSettingBooleanProperty' failed as data isn't a dictionary.`,
		)
	}

	return {
		defaultValue: data.default_value,
	} as VersionAvailableSettingBooleanProperty
}

const unmarshalVersionAvailableSettingFloatProperty = (
	data: unknown,
): VersionAvailableSettingFloatProperty => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'VersionAvailableSettingFloatProperty' failed as data isn't a dictionary.`,
		)
	}

	return {
		defaultValue: data.default_value,
		max: data.max,
		min: data.min,
		unit: data.unit,
	} as VersionAvailableSettingFloatProperty
}

const unmarshalVersionAvailableSettingIntegerProperty = (
	data: unknown,
): VersionAvailableSettingIntegerProperty => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'VersionAvailableSettingIntegerProperty' failed as data isn't a dictionary.`,
		)
	}

	return {
		defaultValue: data.default_value,
		max: data.max,
		min: data.min,
		unit: data.unit,
	} as VersionAvailableSettingIntegerProperty
}

const unmarshalVersionAvailableSettingStringProperty = (
	data: unknown,
): VersionAvailableSettingStringProperty => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'VersionAvailableSettingStringProperty' failed as data isn't a dictionary.`,
		)
	}

	return {
		defaultValue: data.default_value,
		stringConstraint: data.string_constraint,
	} as VersionAvailableSettingStringProperty
}

const unmarshalVersionAvailableSetting = (
	data: unknown,
): VersionAvailableSetting => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'VersionAvailableSetting' failed as data isn't a dictionary.`,
		)
	}

	return {
		boolProperty: data.bool_property
			? unmarshalVersionAvailableSettingBooleanProperty(data.bool_property)
			: undefined,
		description: data.description,
		floatProperty: data.float_property
			? unmarshalVersionAvailableSettingFloatProperty(data.float_property)
			: undefined,
		hotConfigurable: data.hot_configurable,
		intProperty: data.int_property
			? unmarshalVersionAvailableSettingIntegerProperty(data.int_property)
			: undefined,
		name: data.name,
		stringProperty: data.string_property
			? unmarshalVersionAvailableSettingStringProperty(data.string_property)
			: undefined,
	} as VersionAvailableSetting
}

const unmarshalVersion = (data: unknown): Version => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'Version' failed as data isn't a dictionary.`,
		)
	}

	return {
		availableSettings: unmarshalArrayOfObject(
			data.available_settings,
			unmarshalVersionAvailableSetting,
		),
		endOfLifeAt: unmarshalDate(data.end_of_life_at),
		version: data.version,
	} as Version
}

export const unmarshalListVersionsResponse = (
	data: unknown,
): ListVersionsResponse => {
	if (!isJSONObject(data)) {
		throw new TypeError(
			`Unmarshalling the type 'ListVersionsResponse' failed as data isn't a dictionary.`,
		)
	}

	return {
		totalCount: data.total_count,
		versions: unmarshalArrayOfObject(data.versions, unmarshalVersion),
	} as ListVersionsResponse
}

const marshalEndpointSpecPrivateNetworkDetails = (
	request: EndpointSpecPrivateNetworkDetails,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	private_network_id: request.privateNetworkId,
})

const marshalEndpointSpecPublicDetails = (
	request: EndpointSpecPublicDetails,
	defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalCreateClusterRequestVolumeSpec = (
	request: CreateClusterRequestVolumeSpec,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	size_bytes: request.sizeBytes,
	type: request.type,
})

const marshalEndpointSpec = (
	request: EndpointSpec,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	...resolveOneOf([
		{
			param: 'public_network',
			value:
				request.publicNetwork !== undefined
					? marshalEndpointSpecPublicDetails(request.publicNetwork, defaults)
					: undefined,
		},
		{
			param: 'private_network',
			value:
				request.privateNetwork !== undefined
					? marshalEndpointSpecPrivateNetworkDetails(
							request.privateNetwork,
							defaults,
						)
					: undefined,
		},
	]),
})

export const marshalCreateClusterRequest = (
	request: CreateClusterRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	endpoints:
		request.endpoints !== undefined
			? request.endpoints.map((elt) => marshalEndpointSpec(elt, defaults))
			: undefined,
	name: request.name || randomName('kafk'),
	node_amount: request.nodeAmount,
	node_type: request.nodeType,
	password: request.password,
	project_id: request.projectId ?? defaults.defaultProjectId,
	tags: request.tags,
	user_name: request.userName,
	version: request.version,
	volume:
		request.volume !== undefined
			? marshalCreateClusterRequestVolumeSpec(request.volume, defaults)
			: undefined,
})

export const marshalCreateEndpointRequest = (
	request: CreateEndpointRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	cluster_id: request.clusterId,
	endpoint: marshalEndpointSpec(request.endpoint, defaults),
})

export const marshalUpdateClusterRequest = (
	request: UpdateClusterRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	name: request.name,
	tags: request.tags,
})

export const marshalUpdateUserRequest = (
	request: UpdateUserRequest,
	defaults: DefaultValues,
): Record<string, unknown> => ({
	password: request.password,
})
