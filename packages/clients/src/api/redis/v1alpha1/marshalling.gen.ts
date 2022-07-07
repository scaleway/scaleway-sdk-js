// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalTimeSeries,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  ACLRule,
  ACLRuleSpec,
  AclRulesResponse,
  AddAclRulesRequest,
  AddClusterSettingsRequest,
  AddEndpointsRequest,
  AddEndpointsResponse,
  AvailableClusterSetting,
  Cluster,
  ClusterMetricsResponse,
  ClusterSetting,
  ClusterSettingsResponse,
  ClusterVersion,
  CreateClusterRequest,
  DeleteClusterSettingRequest,
  Endpoint,
  EndpointPublicNetwork,
  EndpointSpec,
  EndpointSpecPrivateNetworkSpec,
  EndpointSpecPublicNetworkSpec,
  ListClustersResponse,
  ListNodeTypesResponse,
  ListVersionsResponse,
  MigrateClusterRequest,
  NodeType,
  PrivateNetwork,
  SetAclRulesRequest,
  SetClusterSettingsRequest,
  SetEndpointsRequest,
  SetEndpointsResponse,
  UpdateClusterRequest,
  UpdateEndpointRequest,
} from './types.gen'

const unmarshalEndpointPublicNetwork = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EndpointPublicNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {} as EndpointPublicNetwork
}

const unmarshalPrivateNetwork = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    serviceIps: data.service_ips,
    zone: data.zone,
  } as PrivateNetwork
}

export const unmarshalACLRule = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ACLRule' failed as data isn't a dictionary.`,
    )
  }

  return { description: data.description, id: data.id, ip: data.ip } as ACLRule
}

const unmarshalAvailableClusterSetting = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AvailableClusterSetting' failed as data isn't a dictionary.`,
    )
  }

  return {
    defaultValue: data.default_value,
    deprecated: data.deprecated,
    description: data.description,
    maxValue: data.max_value,
    minValue: data.min_value,
    name: data.name,
    regex: data.regex,
    type: data.type,
  } as AvailableClusterSetting
}

const unmarshalClusterSetting = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterSetting' failed as data isn't a dictionary.`,
    )
  }

  return { name: data.name, value: data.value } as ClusterSetting
}

export const unmarshalEndpoint = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Endpoint' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    ips: data.ips,
    port: data.port,
    privateNetwork: data.private_network
      ? unmarshalPrivateNetwork(data.private_network)
      : undefined,
    publicNetwork: data.public_network
      ? unmarshalEndpointPublicNetwork(data.public_network)
      : undefined,
  } as Endpoint
}

export const unmarshalCluster = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Cluster' failed as data isn't a dictionary.`,
    )
  }

  return {
    aclRules: unmarshalArrayOfObject(data.acl_rules, unmarshalACLRule),
    clusterSettings: unmarshalArrayOfObject(
      data.cluster_settings,
      unmarshalClusterSetting,
    ),
    clusterSize: data.cluster_size,
    createdAt: unmarshalDate(data.created_at),
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
    id: data.id,
    name: data.name,
    nodeType: data.node_type,
    projectId: data.project_id,
    status: data.status,
    tags: data.tags,
    tlsEnabled: data.tls_enabled,
    updatedAt: unmarshalDate(data.updated_at),
    version: data.version,
    zone: data.zone,
  } as Cluster
}

const unmarshalClusterVersion = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableSettings: unmarshalArrayOfObject(
      data.available_settings,
      unmarshalAvailableClusterSetting,
    ),
    eolDate: unmarshalDate(data.eol_date),
    logoUrl: data.logo_url,
    version: data.version,
    zone: data.zone,
  } as ClusterVersion
}

const unmarshalNodeType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NodeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    beta: data.beta,
    description: data.description,
    disabled: data.disabled,
    memory: data.memory,
    name: data.name,
    stockStatus: data.stock_status,
    vcpus: data.vcpus,
    zone: data.zone,
  } as NodeType
}

export const unmarshalAclRulesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AclRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    aclRules: unmarshalArrayOfObject(data.acl_rules, unmarshalACLRule),
  } as AclRulesResponse
}

export const unmarshalAddEndpointsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddEndpointsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
    totalCount: data.total_count,
  } as AddEndpointsResponse
}

export const unmarshalClusterMetricsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterMetricsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    timeseries: unmarshalArrayOfObject(data.timeseries, unmarshalTimeSeries),
  } as ClusterMetricsResponse
}

export const unmarshalClusterSettingsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterSettingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    settings: unmarshalArrayOfObject(data.settings, unmarshalClusterSetting),
  } as ClusterSettingsResponse
}

export const unmarshalListClustersResponse = (data: unknown) => {
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

export const unmarshalListNodeTypesResponse = (data: unknown) => {
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

export const unmarshalListVersionsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    versions: unmarshalArrayOfObject(data.versions, unmarshalClusterVersion),
  } as ListVersionsResponse
}

export const unmarshalSetEndpointsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetEndpointsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
    totalCount: data.total_count,
  } as SetEndpointsResponse
}

const marshalEndpointSpecPrivateNetworkSpec = (
  request: EndpointSpecPrivateNetworkSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  service_ips: request.serviceIps,
})

const marshalEndpointSpecPublicNetworkSpec = (
  request: EndpointSpecPublicNetworkSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalACLRuleSpec = (
  request: ACLRuleSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ip: request.ip,
})

const marshalClusterSetting = (
  request: ClusterSetting,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  value: request.value,
})

const marshalEndpointSpec = (
  request: EndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf<unknown>([
    {
      param: 'private_network',
      value: request.privateNetwork
        ? marshalEndpointSpecPrivateNetworkSpec(
            request.privateNetwork,
            defaults,
          )
        : undefined,
    },
    {
      param: 'public_network',
      value: request.publicNetwork
        ? marshalEndpointSpecPublicNetworkSpec(request.publicNetwork, defaults)
        : undefined,
    },
  ]),
})

export const marshalAddAclRulesRequest = (
  request: AddAclRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acl_rules: request.aclRules.map(elt => marshalACLRuleSpec(elt, defaults)),
})

export const marshalAddClusterSettingsRequest = (
  request: AddClusterSettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  settings: request.settings.map(elt => marshalClusterSetting(elt, defaults)),
})

export const marshalAddEndpointsRequest = (
  request: AddEndpointsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoints: request.endpoints.map(elt => marshalEndpointSpec(elt, defaults)),
})

export const marshalCreateClusterRequest = (
  request: CreateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acl_rules: request.aclRules
    ? request.aclRules.map(elt => marshalACLRuleSpec(elt, defaults))
    : undefined,
  cluster_settings: request.clusterSettings
    ? request.clusterSettings.map(elt => marshalClusterSetting(elt, defaults))
    : undefined,
  cluster_size: request.clusterSize,
  endpoints: request.endpoints
    ? request.endpoints.map(elt => marshalEndpointSpec(elt, defaults))
    : undefined,
  name: request.name || randomName('ins'),
  node_type: request.nodeType,
  password: request.password,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
  tls_enabled: request.tlsEnabled,
  user_name: request.userName,
  version: request.version,
})

export const marshalDeleteClusterSettingRequest = (
  request: DeleteClusterSettingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  settings_name: request.settingsName,
})

export const marshalMigrateClusterRequest = (
  request: MigrateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf<unknown>([
    {
      param: 'version',
      value: request.version,
    },
    {
      param: 'node_type',
      value: request.nodeType,
    },
    {
      param: 'cluster_size',
      value: request.clusterSize,
    },
  ]),
})

export const marshalSetAclRulesRequest = (
  request: SetAclRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acl_rules: request.aclRules.map(elt => marshalACLRuleSpec(elt, defaults)),
})

export const marshalSetClusterSettingsRequest = (
  request: SetClusterSettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  settings: request.settings.map(elt => marshalClusterSetting(elt, defaults)),
})

export const marshalSetEndpointsRequest = (
  request: SetEndpointsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoints: request.endpoints.map(elt => marshalEndpointSpec(elt, defaults)),
})

export const marshalUpdateClusterRequest = (
  request: UpdateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  password: request.password,
  tags: request.tags,
  user_name: request.userName,
})

export const marshalUpdateEndpointRequest = (
  request: UpdateEndpointRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  endpoint: request.endpoint
    ? marshalEndpointSpec(request.endpoint, defaults)
    : undefined,
})
