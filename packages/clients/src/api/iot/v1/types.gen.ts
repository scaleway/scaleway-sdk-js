// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region, TimeSeries } from '../../../bridge'

export type DeviceMessageFiltersRulePolicy = 'unknown' | 'accept' | 'reject'

export type DeviceStatus = 'unknown' | 'error' | 'enabled' | 'disabled'

export type HubProductPlan =
  | 'plan_unknown'
  | 'plan_shared'
  | 'plan_dedicated'
  | 'plan_ha'

export type HubStatus =
  | 'unknown'
  | 'error'
  | 'enabling'
  | 'ready'
  | 'disabling'
  | 'disabled'

export type ListDevicesRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'
  | 'hub_id_asc'
  | 'hub_id_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'allow_insecure_asc'
  | 'allow_insecure_desc'

export type ListHubsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'status_asc'
  | 'status_desc'
  | 'product_plan_asc'
  | 'product_plan_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListNetworksRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'type_asc'
  | 'type_desc'
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRoutesRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'hub_id_asc'
  | 'hub_id_desc'
  | 'type_asc'
  | 'type_desc'
  | 'created_at_asc'
  | 'created_at_desc'

export type NetworkNetworkType = 'unknown' | 'sigfox' | 'rest'

export type NullValue = 'NULL_VALUE'

export type RouteDatabaseConfigEngine = 'unknown' | 'postgresql' | 'mysql'

export type RouteRestConfigHttpVerb =
  | 'unknown'
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'

export type RouteRouteType = 'unknown' | 's3' | 'database' | 'rest'

export type RouteS3ConfigS3Strategy = 'unknown' | 'per_topic' | 'per_message'

export interface Certificate {
  crt: string
  key: string
}

/** Create device response. */
export interface CreateDeviceResponse {
  /** Information related to the created device. */
  device?: Device
  /** Device certificate. */
  certificate?: Certificate
}

/** Create network response. */
export interface CreateNetworkResponse {
  /** Information related to the created network. */
  network?: Network
  /** Endpoint Key to keep secret. This cannot be retrieved later. */
  secret: string
}

export interface CreateRouteRequestDatabaseConfig {
  host: string
  port: number
  dbname: string
  username: string
  password: string
  query: string
  engine: RouteDatabaseConfigEngine
}

export interface CreateRouteRequestRestConfig {
  verb: RouteRestConfigHttpVerb
  uri: string
  headers: Record<string, string>
}

export interface CreateRouteRequestS3Config {
  bucketRegion: string
  bucketName: string
  objectPrefix: string
  strategy: RouteS3ConfigS3Strategy
}

/** Device. */
export interface Device {
  /** Device ID, also used as MQTT Client ID or username. */
  id: string
  /** Device name. */
  name: string
  /** Device description. */
  description: string
  /** Device status. */
  status: DeviceStatus
  /** Hub ID. */
  hubId: string
  /** Last connection/activity date of a device. */
  lastActivityAt?: Date
  /** Defines whether the device is connected to the Hub. */
  isConnected: boolean
  /**
   * Defines whether to allow the device to connect to the Hub without TLS
   * mutual authentication.
   */
  allowInsecure: boolean
  /**
   * Defines whether to allow multiple physical devices to connect to the Hub
   * with this device's credentials.
   */
  allowMultipleConnections: boolean
  /** Filter-sets to restrict the topics the device can publish/subscribe to. */
  messageFilters?: DeviceMessageFilters
  /**
   * Defines whether the device was assigned a custom certificate. Assigning a
   * custom certificate allows a device to authenticate using that specific
   * certificate without checking the Hub's CA certificate.
   */
  hasCustomCertificate: boolean
  /** Date at which the device was added. */
  createdAt?: Date
  /** Date at which the device was last modified. */
  updatedAt?: Date
}

/** Device. message filters. */
export interface DeviceMessageFilters {
  /** Filtering rule to restrict topics the device can publish to. */
  publish?: DeviceMessageFiltersRule
  /** Filtering rule to restrict topics the device can subscribe to. */
  subscribe?: DeviceMessageFiltersRule
}

/** Device. message filters. rule. */
export interface DeviceMessageFiltersRule {
  /**
   * How to use the topic list. If set to `accept`, all topics in the topics
   * list will be allowed, with all other topics being denied. If set to
   * `reject`, all topics in the topics list will be denied, with all other
   * topics being allowed.
   */
  policy: DeviceMessageFiltersRulePolicy
  /**
   * List of topics to accept or reject. It must be valid MQTT topics and up to
   * 65535 characters.
   */
  topics?: string[]
}

/** Get device certificate response. */
export interface GetDeviceCertificateResponse {
  /** Information related to the created device. */
  device?: Device
  /** Device certificate. */
  certificatePem: string
}

/** Get device metrics response. */
export interface GetDeviceMetricsResponse {
  /** Metrics for a device over the requested period. */
  metrics: TimeSeries[]
}

export interface GetHubCAResponse {
  caCertPem: string
}

/** Get hub metrics response. */
export interface GetHubMetricsResponse {
  /** Metrics for a Hub over the requested period. */
  metrics: TimeSeries[]
}

/** Hub. */
export interface Hub {
  /** Hub ID. */
  id: string
  /** Hub name. */
  name: string
  /** Current status of the Hub. */
  status: HubStatus
  /** Hub feature set. */
  productPlan: HubProductPlan
  /** Defines whether the hub has been enabled. */
  enabled: boolean
  /** Number of registered devices. */
  deviceCount: number
  /** Number of currently connected devices. */
  connectedDeviceCount: number
  /**
   * Host to connect your devices to. Devices should be connected to this host.
   * Port may be 1883 (MQTT), 8883 (MQTT over TLS), 80 (MQTT over Websocket) or
   * 443 (MQTT over Websocket over TLS).
   */
  endpoint: string
  /** Defines whether to disable Hub events. */
  disableEvents: boolean
  /** Hub events topic prefix. */
  eventsTopicPrefix: string
  /** Region of the Hub. */
  region: Region
  /** Hub creation date. */
  createdAt?: Date
  /** Hub last modification date. */
  updatedAt?: Date
  /** Project owning the resource. */
  projectId: string
  /** Organization owning the resource. */
  organizationId: string
  /**
   * Defines whether to enable device auto provisioning. When an unknown device
   * connects to your hub using a valid certificate chain, it will be
   * automatically provisioned inside your Hub. The Hub uses the common name of
   * the device certifcate to find out if a device with the same name already
   * exists. This setting can only be enabled on a hub with a custom certificate
   * authority.
   */
  enableDeviceAutoProvisioning: boolean
  /**
   * Defines whether the hub is using a custom certificate authority. Flag is
   * automatically set to `false` after Hub creation, as Hub certificates are
   * managed by Scaleway. Once a custom certificate authority is set, the flag
   * will be set to `true`.
   */
  hasCustomCa: boolean
  /**
   * BETA - not implemented yet.
   *
   * One-of ('twinsDbConfig'): at most one of 'twinsGraphiteConfig' could be
   * set.
   */
  twinsGraphiteConfig?: HubTwinsGraphiteConfig
}

export interface HubTwinsGraphiteConfig {
  pushUri: string
}

/** List devices response. */
export interface ListDevicesResponse {
  /** Total number of devices. */
  totalCount: number
  /** Page of devices. */
  devices: Device[]
}

/** List hubs response. */
export interface ListHubsResponse {
  /** Total number of Hubs. */
  totalCount: number
  /** A page of hubs. */
  hubs: Hub[]
}

/** List networks response. */
export interface ListNetworksResponse {
  /** Total number of Networks. */
  totalCount: number
  /** Page of networks. */
  networks: Network[]
}

/** List routes response. */
export interface ListRoutesResponse {
  /** Total number of routes. */
  totalCount: number
  /** Page of routes. */
  routes: RouteSummary[]
}

/** List twin documents response. */
export interface ListTwinDocumentsResponse {
  /** List of the twin document. */
  documents: ListTwinDocumentsResponseDocumentSummary[]
}

/** List twin documents response. document summary. */
export interface ListTwinDocumentsResponseDocumentSummary {
  /** Name of the document. */
  documentName: string
}

/** Network. */
export interface Network {
  /** Network ID. */
  id: string
  /** Network name. */
  name: string
  /** Type of network to connect with. */
  type: NetworkNetworkType
  /** Endpoint to use for interacting with the network. */
  endpoint: string
  /** Hub ID to connect the Network to. */
  hubId: string
  /** Date at which the network was created. */
  createdAt?: Date
  /**
   * Topic prefix for the Network. This prefix will be prepended to all topics
   * for this Network.
   */
  topicPrefix: string
}

/** Renew device certificate response. */
export interface RenewDeviceCertificateResponse {
  /** Information related to the created device. */
  device?: Device
  /** Device certificate. */
  certificate?: Certificate
}

/** Route. */
export interface Route {
  /** Route ID. */
  id: string
  /** Route name. */
  name: string
  /** Hub ID of the route. */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to
   * 65535 characters.
   */
  topic: string
  /** Route type. */
  type: RouteRouteType
  /** Date at which the route was created. */
  createdAt?: Date
  /**
   * When using S3 Route, S3-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  s3Config?: RouteS3Config
  /**
   * When using Database Route, DB-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  dbConfig?: RouteDatabaseConfig
  /**
   * When using Rest Route, Rest-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  restConfig?: RouteRestConfig
  /** Date at which the route was last updated. */
  updatedAt?: Date
}

/** Route. database config. */
export interface RouteDatabaseConfig {
  /**
   * Database engine the route will connect to. If not specified, the default
   * database will be 'PostgreSQL'.
   */
  engine: RouteDatabaseConfigEngine
  /** Database host. */
  host: string
  /** Database port. */
  port: number
  /** Database name. */
  dbname: string
  /** Database username. Make sure this account can execute the provided query. */
  username: string
  /** Database password. */
  password: string
  /**
   * SQL query to be executed ($TOPIC and $PAYLOAD variables are available, see
   * documentation).
   */
  query: string
}

/** Route. rest config. */
export interface RouteRestConfig {
  /** HTTP verb used to call REST URI. */
  verb: RouteRestConfigHttpVerb
  /** URI of the REST endpoint. */
  uri: string
  /** HTTP call extra headers. */
  headers: Record<string, string>
}

/** Route.s3 config. */
export interface RouteS3Config {
  /** Region of the S3 route's destination bucket (e.g., 'fr-par'). */
  bucketRegion: string
  /** Destination bucket name of the S3 route. */
  bucketName: string
  /** Optional string to prefix object names with. */
  objectPrefix: string
  /**
   * How the S3 route's objects will be created: one per topic or one per
   * message.
   */
  strategy: RouteS3ConfigS3Strategy
}

/** Route summary. */
export interface RouteSummary {
  /** Route ID. */
  id: string
  /** Route name. */
  name: string
  /** Hub ID of the route. */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to
   * 65535 characters.
   */
  topic: string
  /** Route type. */
  type: RouteRouteType
  /** Date at which the route was created. */
  createdAt?: Date
  /** Date at which the route was last updated. */
  updatedAt?: Date
}

export interface SetDeviceCertificateResponse {
  device?: Device
  certificatePem: string
}

/** Twin document. */
export interface TwinDocument {
  /** Parent twin ID of the document. */
  twinId: string
  /** Name of the document. */
  documentName: string
  /** New version of the document. */
  version: number
  /** New data related to the document. */
  data?: Record<string, unknown>
}

export interface UpdateRouteRequestDatabaseConfig {
  host?: string
  port?: number
  dbname?: string
  username?: string
  password?: string
  query?: string
  engine: RouteDatabaseConfigEngine
}

export interface UpdateRouteRequestRestConfig {
  verb: RouteRestConfigHttpVerb
  uri?: string
  headers?: Record<string, string>
}

export interface UpdateRouteRequestS3Config {
  bucketRegion?: string
  bucketName?: string
  objectPrefix?: string
  strategy: RouteS3ConfigS3Strategy
}

export type ListHubsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of Hubs to return within a page. Maximum value is 100. */
  pageSize?: number
  /** Sort order of Hubs in the response. */
  orderBy?: ListHubsRequestOrderBy
  /** Only list Hubs of this Project ID. */
  projectId?: string
  /** Only list Hubs of this Organization ID. */
  organizationId?: string
  /** Hub name. */
  name?: string
}

export type CreateHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hub name (up to 255 characters). */
  name?: string
  /**
   * Project/Organization ID to filter for, only Hubs from this
   * Project/Organization will be returned.
   */
  projectId?: string
  /** Hub product plan. */
  productPlan: HubProductPlan
  /** Disable Hub events. */
  disableEvents?: boolean
  /** Topic prefix (default '$SCW/events') of Hub events. */
  eventsTopicPrefix?: string
  /**
   * BETA - not implemented yet.
   *
   * One-of ('twinsDbConfig'): at most one of 'twinsGraphiteConfig' could be
   * set.
   */
  twinsGraphiteConfig?: HubTwinsGraphiteConfig
}

export type GetHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hub ID. */
  hubId: string
}

export type UpdateHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Hub you want to update. */
  hubId: string
  /** Hub name (up to 255 characters). */
  name?: string
  /** Hub product plan. */
  productPlan?: HubProductPlan
  /** Disable Hub events. */
  disableEvents?: boolean
  /** Topic prefix of Hub events. */
  eventsTopicPrefix?: string
  /** Enable device auto provisioning. */
  enableDeviceAutoProvisioning?: boolean
  /**
   * BETA - not implemented yet.
   *
   * One-of ('twinsDbConfig'): at most one of 'twinsGraphiteConfig' could be
   * set.
   */
  twinsGraphiteConfig?: HubTwinsGraphiteConfig
}

export type EnableHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hub ID. */
  hubId: string
}

export type DisableHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hub ID. */
  hubId: string
}

export type DeleteHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hub ID. */
  hubId: string
  /**
   * Defines whether to force the deletion of devices added to this Hub or
   * reject the operation.
   */
  deleteDevices?: boolean
}

export type GetHubMetricsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hub ID. */
  hubId: string
  /** Start date used to compute the best scale for returned metrics. */
  startDate: Date
}

export type SetHubCARequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hub ID. */
  hubId: string
  /** CA's PEM-encoded certificate. */
  caCertPem: string
  /**
   * Proof of possession of PEM-encoded certificate. Challenge is a PEM-encoded
   * certificate that acts as proof of possession of the CA. It must be signed
   * by the CA, and have a Common Name equal to the Hub ID.
   */
  challengeCertPem: string
}

export type GetHubCARequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  hubId: string
}

export type ListDevicesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of devices to return within a page. Maximum value is 100. */
  pageSize?: number
  /** Ordering of requested devices. */
  orderBy?: ListDevicesRequestOrderBy
  /** Name to filter for, only devices with this name will be returned. */
  name?: string
  /** Hub ID to filter for, only devices attached to this Hub will be returned. */
  hubId?: string
  /** Defines wheter to filter the allow_insecure flag. */
  allowInsecure?: boolean
  /** Device status (enabled, disabled, etc.). */
  status?: DeviceStatus
}

export type CreateDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device name. */
  name?: string
  /** Hub ID of the device. */
  hubId: string
  /**
   * Defines whether to allow plain and server-authenticated SSL connections in
   * addition to mutually-authenticated ones.
   */
  allowInsecure: boolean
  /**
   * Defines whether to allow multiple physical devices to connect with this
   * device's credentials.
   */
  allowMultipleConnections: boolean
  /**
   * Filter-sets to authorize or deny the device to publish/subscribe to
   * specific topics.
   */
  messageFilters?: DeviceMessageFilters
  /** Device description. */
  description?: string
}

export type GetDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
}

export type UpdateDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
  /** Description for the device. */
  description?: string
  /**
   * Defines whether to allow plain and server-authenticated SSL connections in
   * addition to mutually-authenticated ones.
   */
  allowInsecure?: boolean
  /**
   * Defines whether to allow multiple physical devices to connect with this
   * device's credentials.
   */
  allowMultipleConnections?: boolean
  /** Filter-sets to restrict the topics the device can publish/subscribe to. */
  messageFilters?: DeviceMessageFilters
  /** Change Hub for this device, additional fees may apply, see IoT Hub pricing. */
  hubId?: string
}

export type EnableDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
}

export type DisableDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
}

export type RenewDeviceCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
}

export type SetDeviceCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
  /** PEM-encoded custom certificate. */
  certificatePem: string
}

export type GetDeviceCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
}

export type DeleteDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
}

export type GetDeviceMetricsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Device ID. */
  deviceId: string
  /** Start date used to compute the best scale for the returned metrics. */
  startDate: Date
}

export type ListRoutesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of routes to return within a page. Maximum value is 100. */
  pageSize?: number
  /** Ordering of requested routes. */
  orderBy?: ListRoutesRequestOrderBy
  /** Hub ID to filter for. */
  hubId?: string
  /** Route name to filter for. */
  name?: string
}

export type CreateRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Route name. */
  name?: string
  /** Hub ID of the route. */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to
   * 65535 characters.
   */
  topic: string
  /**
   * If creating S3 Route, S3-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  s3Config?: CreateRouteRequestS3Config
  /**
   * If creating Database Route, DB-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  dbConfig?: CreateRouteRequestDatabaseConfig
  /**
   * If creating Rest Route, Rest-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  restConfig?: CreateRouteRequestRestConfig
}

export type UpdateRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Route id. */
  routeId: string
  /** Route name. */
  name?: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to
   * 65535 characters.
   */
  topic?: string
  /**
   * When updating S3 Route, S3-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  s3Config?: UpdateRouteRequestS3Config
  /**
   * When updating Database Route, DB-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  dbConfig?: UpdateRouteRequestDatabaseConfig
  /**
   * When updating Rest Route, Rest-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig'
   * could be set.
   */
  restConfig?: UpdateRouteRequestRestConfig
}

export type GetRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Route ID. */
  routeId: string
}

export type DeleteRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Route ID. */
  routeId: string
}

export type ListNetworksRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number to return, from the paginated results. */
  page?: number
  /** Number of networks to return. The maximum value is 100. */
  pageSize?: number
  /** Ordering of requested routes. */
  orderBy?: ListNetworksRequestOrderBy
  /** Network name to filter for. */
  name?: string
  /** Hub ID to filter for. */
  hubId?: string
  /** Topic prefix to filter for. */
  topicPrefix?: string
}

export type CreateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Network name. */
  name?: string
  /** Type of network to connect with. */
  type: NetworkNetworkType
  /** Hub ID to connect the Network to. */
  hubId: string
  /** Topic prefix for the Network. */
  topicPrefix: string
}

export type GetNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Network ID. */
  networkId: string
}

export type DeleteNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Network ID. */
  networkId: string
}

export type GetTwinDocumentRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Twin ID. */
  twinId: string
  /** Name of the document. */
  documentName: string
}

export type PutTwinDocumentRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Twin ID. */
  twinId: string
  /** Name of the document. */
  documentName: string
  /**
   * Version of the document to update. If set, ensures that the current version
   * of the document matches before persisting the update.
   */
  version?: number
  /**
   * Data of the new document. New data that will replace the contents of the
   * document.
   */
  data?: Record<string, unknown>
}

export type PatchTwinDocumentRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Twin ID. */
  twinId: string
  /** Name of the document. */
  documentName: string
  /**
   * The version of the document to update. If set, ensures that the current
   * version of the document matches before persisting the update.
   */
  version?: number
  /**
   * Patch data. A json data that will be applied on the document's current
   * data. Patching rules: The patch goes recursively through the patch objects.
   * If the patch object property is null, it is removed from the final object.
   * If the patch object property is a value (number, strings, bool, arrays), it
   * is replaced. If the patch object property is an object, the previous rules
   * will be applied recursively on it.
   */
  data?: Record<string, unknown>
}

export type DeleteTwinDocumentRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Twin ID. */
  twinId: string
  /** Name of the document. */
  documentName: string
}

export type ListTwinDocumentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Twin ID. */
  twinId: string
}

export type DeleteTwinDocumentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Twin ID. */
  twinId: string
}
