// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalTimeSeries,
} from '@scaleway/sdk-client'
import type {
  Certificate,
  CreateDeviceRequest,
  CreateDeviceResponse,
  CreateHubRequest,
  CreateNetworkRequest,
  CreateNetworkResponse,
  CreateRouteRequest,
  CreateRouteRequestDatabaseConfig,
  CreateRouteRequestRestConfig,
  CreateRouteRequestS3Config,
  Device,
  DeviceMessageFilters,
  DeviceMessageFiltersRule,
  GetDeviceCertificateResponse,
  GetDeviceMetricsResponse,
  GetHubCAResponse,
  GetHubMetricsResponse,
  Hub,
  HubTwinsGraphiteConfig,
  ListDevicesResponse,
  ListHubsResponse,
  ListNetworksResponse,
  ListRoutesResponse,
  ListTwinDocumentsResponse,
  ListTwinDocumentsResponseDocumentSummary,
  Network,
  PatchTwinDocumentRequest,
  PutTwinDocumentRequest,
  RenewDeviceCertificateResponse,
  Route,
  RouteDatabaseConfig,
  RouteRestConfig,
  RouteS3Config,
  RouteSummary,
  SetDeviceCertificateRequest,
  SetDeviceCertificateResponse,
  SetHubCARequest,
  TwinDocument,
  UpdateDeviceRequest,
  UpdateHubRequest,
  UpdateRouteRequest,
  UpdateRouteRequestDatabaseConfig,
  UpdateRouteRequestRestConfig,
  UpdateRouteRequestS3Config,
} from './types.gen'

const unmarshalDeviceMessageFiltersRule = (
  data: unknown,
): DeviceMessageFiltersRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeviceMessageFiltersRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    policy: data.policy,
    topics: data.topics,
  } as DeviceMessageFiltersRule
}

const unmarshalDeviceMessageFilters = (data: unknown): DeviceMessageFilters => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeviceMessageFilters' failed as data isn't a dictionary.`,
    )
  }

  return {
    publish: data.publish
      ? unmarshalDeviceMessageFiltersRule(data.publish)
      : undefined,
    subscribe: data.subscribe
      ? unmarshalDeviceMessageFiltersRule(data.subscribe)
      : undefined,
  } as DeviceMessageFilters
}

export const unmarshalDevice = (data: unknown): Device => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Device' failed as data isn't a dictionary.`,
    )
  }

  return {
    allowInsecure: data.allow_insecure,
    allowMultipleConnections: data.allow_multiple_connections,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    hasCustomCertificate: data.has_custom_certificate,
    hubId: data.hub_id,
    id: data.id,
    isConnected: data.is_connected,
    lastActivityAt: unmarshalDate(data.last_activity_at),
    messageFilters: data.message_filters
      ? unmarshalDeviceMessageFilters(data.message_filters)
      : undefined,
    name: data.name,
    region: data.region,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Device
}

export const unmarshalNetwork = (data: unknown): Network => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Network' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    endpoint: data.endpoint,
    hubId: data.hub_id,
    id: data.id,
    name: data.name,
    region: data.region,
    topicPrefix: data.topic_prefix,
    type: data.type,
  } as Network
}

const unmarshalHubTwinsGraphiteConfig = (
  data: unknown,
): HubTwinsGraphiteConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HubTwinsGraphiteConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    pushUri: data.push_uri,
  } as HubTwinsGraphiteConfig
}

export const unmarshalHub = (data: unknown): Hub => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Hub' failed as data isn't a dictionary.`,
    )
  }

  return {
    connectedDeviceCount: data.connected_device_count,
    createdAt: unmarshalDate(data.created_at),
    deviceCount: data.device_count,
    disableEvents: data.disable_events,
    enableDeviceAutoProvisioning: data.enable_device_auto_provisioning,
    enabled: data.enabled,
    endpoint: data.endpoint,
    eventsTopicPrefix: data.events_topic_prefix,
    hasCustomCa: data.has_custom_ca,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    productPlan: data.product_plan,
    projectId: data.project_id,
    region: data.region,
    status: data.status,
    twinsGraphiteConfig: data.twins_graphite_config
      ? unmarshalHubTwinsGraphiteConfig(data.twins_graphite_config)
      : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as Hub
}

const unmarshalCertificate = (data: unknown): Certificate => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Certificate' failed as data isn't a dictionary.`,
    )
  }

  return {
    crt: data.crt,
    key: data.key,
  } as Certificate
}

export const unmarshalCreateDeviceResponse = (
  data: unknown,
): CreateDeviceResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateDeviceResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    certificate: data.certificate
      ? unmarshalCertificate(data.certificate)
      : undefined,
    device: data.device ? unmarshalDevice(data.device) : undefined,
  } as CreateDeviceResponse
}

export const unmarshalCreateNetworkResponse = (
  data: unknown,
): CreateNetworkResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateNetworkResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    network: data.network ? unmarshalNetwork(data.network) : undefined,
    secret: data.secret,
  } as CreateNetworkResponse
}

export const unmarshalGetDeviceCertificateResponse = (
  data: unknown,
): GetDeviceCertificateResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDeviceCertificateResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    certificatePem: data.certificate_pem,
    device: data.device ? unmarshalDevice(data.device) : undefined,
  } as GetDeviceCertificateResponse
}

export const unmarshalGetDeviceMetricsResponse = (
  data: unknown,
): GetDeviceMetricsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDeviceMetricsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    metrics: unmarshalArrayOfObject(data.metrics, unmarshalTimeSeries),
  } as GetDeviceMetricsResponse
}

export const unmarshalGetHubCAResponse = (data: unknown): GetHubCAResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetHubCAResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    caCertPem: data.ca_cert_pem,
  } as GetHubCAResponse
}

export const unmarshalGetHubMetricsResponse = (
  data: unknown,
): GetHubMetricsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetHubMetricsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    metrics: unmarshalArrayOfObject(data.metrics, unmarshalTimeSeries),
  } as GetHubMetricsResponse
}

export const unmarshalListDevicesResponse = (
  data: unknown,
): ListDevicesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDevicesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    devices: unmarshalArrayOfObject(data.devices, unmarshalDevice),
    totalCount: data.total_count,
  } as ListDevicesResponse
}

export const unmarshalListHubsResponse = (data: unknown): ListHubsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListHubsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    hubs: unmarshalArrayOfObject(data.hubs, unmarshalHub),
    totalCount: data.total_count,
  } as ListHubsResponse
}

export const unmarshalListNetworksResponse = (
  data: unknown,
): ListNetworksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    networks: unmarshalArrayOfObject(data.networks, unmarshalNetwork),
    totalCount: data.total_count,
  } as ListNetworksResponse
}

const unmarshalRouteSummary = (data: unknown): RouteSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RouteSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    hubId: data.hub_id,
    id: data.id,
    name: data.name,
    region: data.region,
    topic: data.topic,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as RouteSummary
}

export const unmarshalListRoutesResponse = (
  data: unknown,
): ListRoutesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRoutesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    routes: unmarshalArrayOfObject(data.routes, unmarshalRouteSummary),
    totalCount: data.total_count,
  } as ListRoutesResponse
}

const unmarshalListTwinDocumentsResponseDocumentSummary = (
  data: unknown,
): ListTwinDocumentsResponseDocumentSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTwinDocumentsResponseDocumentSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    documentName: data.document_name,
  } as ListTwinDocumentsResponseDocumentSummary
}

export const unmarshalListTwinDocumentsResponse = (
  data: unknown,
): ListTwinDocumentsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTwinDocumentsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    documents: unmarshalArrayOfObject(
      data.documents,
      unmarshalListTwinDocumentsResponseDocumentSummary,
    ),
  } as ListTwinDocumentsResponse
}

export const unmarshalRenewDeviceCertificateResponse = (
  data: unknown,
): RenewDeviceCertificateResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RenewDeviceCertificateResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    certificate: data.certificate
      ? unmarshalCertificate(data.certificate)
      : undefined,
    device: data.device ? unmarshalDevice(data.device) : undefined,
  } as RenewDeviceCertificateResponse
}

const unmarshalRouteDatabaseConfig = (data: unknown): RouteDatabaseConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RouteDatabaseConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    dbname: data.dbname,
    engine: data.engine,
    host: data.host,
    password: data.password,
    port: data.port,
    query: data.query,
    username: data.username,
  } as RouteDatabaseConfig
}

const unmarshalRouteRestConfig = (data: unknown): RouteRestConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RouteRestConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    headers: data.headers,
    uri: data.uri,
    verb: data.verb,
  } as RouteRestConfig
}

const unmarshalRouteS3Config = (data: unknown): RouteS3Config => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RouteS3Config' failed as data isn't a dictionary.`,
    )
  }

  return {
    bucketName: data.bucket_name,
    bucketRegion: data.bucket_region,
    objectPrefix: data.object_prefix,
    strategy: data.strategy,
  } as RouteS3Config
}

export const unmarshalRoute = (data: unknown): Route => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Route' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    dbConfig: data.db_config
      ? unmarshalRouteDatabaseConfig(data.db_config)
      : undefined,
    hubId: data.hub_id,
    id: data.id,
    name: data.name,
    region: data.region,
    restConfig: data.rest_config
      ? unmarshalRouteRestConfig(data.rest_config)
      : undefined,
    s3Config: data.s3_config
      ? unmarshalRouteS3Config(data.s3_config)
      : undefined,
    topic: data.topic,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as Route
}

export const unmarshalSetDeviceCertificateResponse = (
  data: unknown,
): SetDeviceCertificateResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetDeviceCertificateResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    certificatePem: data.certificate_pem,
    device: data.device ? unmarshalDevice(data.device) : undefined,
  } as SetDeviceCertificateResponse
}

export const unmarshalTwinDocument = (data: unknown): TwinDocument => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TwinDocument' failed as data isn't a dictionary.`,
    )
  }

  return {
    data: data.data,
    documentName: data.document_name,
    twinId: data.twin_id,
    version: data.version,
  } as TwinDocument
}

const marshalDeviceMessageFiltersRule = (
  request: DeviceMessageFiltersRule,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  policy: request.policy,
  topics: request.topics,
})

const marshalDeviceMessageFilters = (
  request: DeviceMessageFilters,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  publish:
    request.publish !== undefined
      ? marshalDeviceMessageFiltersRule(request.publish, defaults)
      : undefined,
  subscribe:
    request.subscribe !== undefined
      ? marshalDeviceMessageFiltersRule(request.subscribe, defaults)
      : undefined,
})

export const marshalCreateDeviceRequest = (
  request: CreateDeviceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  allow_insecure: request.allowInsecure,
  allow_multiple_connections: request.allowMultipleConnections,
  description: request.description,
  hub_id: request.hubId,
  message_filters:
    request.messageFilters !== undefined
      ? marshalDeviceMessageFilters(request.messageFilters, defaults)
      : undefined,
  name: request.name || randomName('device'),
})

const marshalHubTwinsGraphiteConfig = (
  request: HubTwinsGraphiteConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  push_uri: request.pushUri,
})

export const marshalCreateHubRequest = (
  request: CreateHubRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disable_events: request.disableEvents,
  events_topic_prefix: request.eventsTopicPrefix,
  name: request.name || randomName('hub'),
  product_plan: request.productPlan,
  project_id: request.projectId ?? defaults.defaultProjectId,
  ...resolveOneOf([
    {
      param: 'twins_graphite_config',
      value:
        request.twinsGraphiteConfig !== undefined
          ? marshalHubTwinsGraphiteConfig(request.twinsGraphiteConfig, defaults)
          : undefined,
    },
  ]),
})

export const marshalCreateNetworkRequest = (
  request: CreateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  hub_id: request.hubId,
  name: request.name || randomName('network'),
  topic_prefix: request.topicPrefix,
  type: request.type,
})

const marshalCreateRouteRequestDatabaseConfig = (
  request: CreateRouteRequestDatabaseConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  dbname: request.dbname,
  engine: request.engine,
  host: request.host,
  password: request.password,
  port: request.port,
  query: request.query,
  username: request.username,
})

const marshalCreateRouteRequestRestConfig = (
  request: CreateRouteRequestRestConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  headers: request.headers,
  uri: request.uri,
  verb: request.verb,
})

const marshalCreateRouteRequestS3Config = (
  request: CreateRouteRequestS3Config,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket_name: request.bucketName,
  bucket_region: request.bucketRegion,
  object_prefix: request.objectPrefix,
  strategy: request.strategy,
})

export const marshalCreateRouteRequest = (
  request: CreateRouteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  hub_id: request.hubId,
  name: request.name || randomName('route'),
  topic: request.topic,
  ...resolveOneOf([
    {
      param: 's3_config',
      value:
        request.s3Config !== undefined
          ? marshalCreateRouteRequestS3Config(request.s3Config, defaults)
          : undefined,
    },
    {
      param: 'db_config',
      value:
        request.dbConfig !== undefined
          ? marshalCreateRouteRequestDatabaseConfig(request.dbConfig, defaults)
          : undefined,
    },
    {
      param: 'rest_config',
      value:
        request.restConfig !== undefined
          ? marshalCreateRouteRequestRestConfig(request.restConfig, defaults)
          : undefined,
    },
  ]),
})

export const marshalPatchTwinDocumentRequest = (
  request: PatchTwinDocumentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  version: request.version,
})

export const marshalPutTwinDocumentRequest = (
  request: PutTwinDocumentRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  version: request.version,
})

export const marshalSetDeviceCertificateRequest = (
  request: SetDeviceCertificateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  certificate_pem: request.certificatePem,
})

export const marshalSetHubCARequest = (
  request: SetHubCARequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ca_cert_pem: request.caCertPem,
  challenge_cert_pem: request.challengeCertPem,
})

export const marshalUpdateDeviceRequest = (
  request: UpdateDeviceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  allow_insecure: request.allowInsecure,
  allow_multiple_connections: request.allowMultipleConnections,
  description: request.description,
  hub_id: request.hubId,
  message_filters:
    request.messageFilters !== undefined
      ? marshalDeviceMessageFilters(request.messageFilters, defaults)
      : undefined,
})

export const marshalUpdateHubRequest = (
  request: UpdateHubRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disable_events: request.disableEvents,
  enable_device_auto_provisioning: request.enableDeviceAutoProvisioning,
  events_topic_prefix: request.eventsTopicPrefix,
  name: request.name,
  product_plan: request.productPlan,
  ...resolveOneOf([
    {
      param: 'twins_graphite_config',
      value:
        request.twinsGraphiteConfig !== undefined
          ? marshalHubTwinsGraphiteConfig(request.twinsGraphiteConfig, defaults)
          : undefined,
    },
  ]),
})

const marshalUpdateRouteRequestDatabaseConfig = (
  request: UpdateRouteRequestDatabaseConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  dbname: request.dbname,
  engine: request.engine,
  host: request.host,
  password: request.password,
  port: request.port,
  query: request.query,
  username: request.username,
})

const marshalUpdateRouteRequestRestConfig = (
  request: UpdateRouteRequestRestConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  headers: request.headers,
  uri: request.uri,
  verb: request.verb,
})

const marshalUpdateRouteRequestS3Config = (
  request: UpdateRouteRequestS3Config,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket_name: request.bucketName,
  bucket_region: request.bucketRegion,
  object_prefix: request.objectPrefix,
  strategy: request.strategy,
})

export const marshalUpdateRouteRequest = (
  request: UpdateRouteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  topic: request.topic,
  ...resolveOneOf([
    {
      param: 's3_config',
      value:
        request.s3Config !== undefined
          ? marshalUpdateRouteRequestS3Config(request.s3Config, defaults)
          : undefined,
    },
    {
      param: 'db_config',
      value:
        request.dbConfig !== undefined
          ? marshalUpdateRouteRequestDatabaseConfig(request.dbConfig, defaults)
          : undefined,
    },
    {
      param: 'rest_config',
      value:
        request.restConfig !== undefined
          ? marshalUpdateRouteRequestRestConfig(request.restConfig, defaults)
          : undefined,
    },
  ]),
})
