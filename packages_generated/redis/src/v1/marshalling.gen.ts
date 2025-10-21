// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  marshalBlobToScwFile,
  marshalDecimal,
  marshalMoney,
  marshalScwFile,
  marshalTimeSeries,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalDecimal,
  unmarshalMapOfObject,
  unmarshalMoney,
  unmarshalScwFile,
  unmarshalServiceInfo,
  unmarshalTimeSeries,
  unmarshalTimeSeriesPoint,
} from '@scaleway/sdk-client'
import type {
  Zone as ScwZone,
  Region as ScwRegion,
  DefaultValues,
} from '@scaleway/sdk-client'
import type {
  ACLRule,
  PrivateNetwork,
  PublicNetwork,
  Endpoint,
  ClusterSetting,
  Cluster,
  AddAclRulesResponse,
  AddEndpointsResponse,
  ClusterMetricsResponse,
  ClusterSettingsResponse,
  AvailableClusterSetting,
  ClusterVersion,
  ListClusterVersionsResponse,
  ListClustersResponse,
  NodeType,
  ListNodeTypesResponse,
  SetAclRulesResponse,
  SetEndpointsResponse,
  ACLRuleSpec,
  AddAclRulesRequest,
  AddClusterSettingsRequest,
  EndpointSpecPrivateNetworkSpecIpamConfig,
  EndpointSpecPrivateNetworkSpec,
  EndpointSpecPublicNetworkSpec,
  EndpointSpec,
  AddEndpointsRequest,
  CreateClusterRequest,
  MigrateClusterRequest,
  SetAclRulesRequest,
  SetClusterSettingsRequest,
  SetEndpointsRequest,
  UpdateClusterRequest,
  UpdateEndpointRequest,
} from './types.gen.js'

export const unmarshalACLRule = (data: unknown): ACLRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ACLRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    ipCidr: data.ip_cidr,
  } as ACLRule
}

const unmarshalPrivateNetwork = (data: unknown): PrivateNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    provisioningMode: data.provisioning_mode,
    serviceIps: data.service_ips,
    zone: data.zone,
  } as PrivateNetwork
}

const unmarshalPublicNetwork = (data: unknown): PublicNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {} as PublicNetwork
}

export const unmarshalEndpoint = (data: unknown): Endpoint => {
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
      ? unmarshalPublicNetwork(data.public_network)
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
    name: data.name,
    value: data.value,
  } as ClusterSetting
}

export const unmarshalCluster = (data: unknown): Cluster => {
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
    upgradableVersions: data.upgradable_versions,
    userName: data.user_name,
    version: data.version,
    zone: data.zone,
  } as Cluster
}

export const unmarshalAddAclRulesResponse = (
  data: unknown,
): AddAclRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddAclRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    aclRules: unmarshalArrayOfObject(data.acl_rules, unmarshalACLRule),
    totalCount: data.total_count,
  } as AddAclRulesResponse
}

export const unmarshalAddEndpointsResponse = (
  data: unknown,
): AddEndpointsResponse => {
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

export const unmarshalClusterMetricsResponse = (
  data: unknown,
): ClusterMetricsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterMetricsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    timeseries: unmarshalArrayOfObject(data.timeseries, unmarshalTimeSeries),
  } as ClusterMetricsResponse
}

export const unmarshalClusterSettingsResponse = (
  data: unknown,
): ClusterSettingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClusterSettingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    settings: unmarshalArrayOfObject(data.settings, unmarshalClusterSetting),
  } as ClusterSettingsResponse
}

const unmarshalAvailableClusterSetting = (
  data: unknown,
): AvailableClusterSetting => {
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

const unmarshalClusterVersion = (data: unknown): ClusterVersion => {
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
    endOfLifeAt: unmarshalDate(data.end_of_life_at),
    logoUrl: data.logo_url,
    version: data.version,
    zone: data.zone,
  } as ClusterVersion
}

export const unmarshalListClusterVersionsResponse = (
  data: unknown,
): ListClusterVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListClusterVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    versions: unmarshalArrayOfObject(data.versions, unmarshalClusterVersion),
  } as ListClusterVersionsResponse
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

const unmarshalNodeType = (data: unknown): NodeType => {
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

export const unmarshalSetAclRulesResponse = (
  data: unknown,
): SetAclRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetAclRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    aclRules: unmarshalArrayOfObject(data.acl_rules, unmarshalACLRule),
  } as SetAclRulesResponse
}

export const unmarshalSetEndpointsResponse = (
  data: unknown,
): SetEndpointsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetEndpointsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    endpoints: unmarshalArrayOfObject(data.endpoints, unmarshalEndpoint),
  } as SetEndpointsResponse
}

const marshalACLRuleSpec = (
  request: ACLRuleSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  ip_cidr: request.ipCidr,
})

export const marshalAddAclRulesRequest = (
  request: AddAclRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acl_rules: request.aclRules.map(elt => marshalACLRuleSpec(elt, defaults)),
})

const marshalClusterSetting = (
  request: ClusterSetting,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  value: request.value,
})

export const marshalAddClusterSettingsRequest = (
  request: AddClusterSettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  settings: request.settings.map(elt => marshalClusterSetting(elt, defaults)),
})

const marshalEndpointSpecPrivateNetworkSpecIpamConfig = (
  request: EndpointSpecPrivateNetworkSpecIpamConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalEndpointSpecPrivateNetworkSpec = (
  request: EndpointSpecPrivateNetworkSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  ipam_config:
    request.ipamConfig !== undefined
      ? marshalEndpointSpecPrivateNetworkSpecIpamConfig(
          request.ipamConfig,
          defaults,
        )
      : undefined,
  service_ips: request.serviceIps,
})

const marshalEndpointSpecPublicNetworkSpec = (
  request: EndpointSpecPublicNetworkSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalEndpointSpec = (
  request: EndpointSpec,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    {
      param: 'private_network',
      value:
        request.privateNetwork !== undefined
          ? marshalEndpointSpecPrivateNetworkSpec(
              request.privateNetwork,
              defaults,
            )
          : undefined,
    },
    {
      param: 'public_network',
      value:
        request.publicNetwork !== undefined
          ? marshalEndpointSpecPublicNetworkSpec(
              request.publicNetwork,
              defaults,
            )
          : undefined,
    },
  ]),
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
  acl_rules:
    request.aclRules !== undefined
      ? request.aclRules.map(elt => marshalACLRuleSpec(elt, defaults))
      : undefined,
  cluster_settings:
    request.clusterSettings !== undefined
      ? request.clusterSettings.map(elt => marshalClusterSetting(elt, defaults))
      : undefined,
  cluster_size: request.clusterSize,
  endpoints:
    request.endpoints !== undefined
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

export const marshalMigrateClusterRequest = (
  request: MigrateClusterRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf<string | number>([
    { param: 'version', value: request.version },
    { param: 'node_type', value: request.nodeType },
    { param: 'cluster_size', value: request.clusterSize },
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
  ...resolveOneOf([
    {
      param: 'private_network',
      value:
        request.privateNetwork !== undefined
          ? marshalEndpointSpecPrivateNetworkSpec(
              request.privateNetwork,
              defaults,
            )
          : undefined,
    },
    {
      param: 'public_network',
      value:
        request.publicNetwork !== undefined
          ? marshalEndpointSpecPublicNetworkSpec(
              request.publicNetwork,
              defaults,
            )
          : undefined,
    },
  ]),
})
