// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, TimeSeries } from '@scaleway/sdk-client'

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

export interface DeviceMessageFiltersRule {
  /**
   * If set to `accept`, all topics in the topics list will be allowed, with all other topics being denied.
If set to `reject`, all topics in the topics list will be denied, with all other topics being allowed.
   */
  policy: DeviceMessageFiltersRulePolicy
  /**
   * List of topics to accept or reject. It must be valid MQTT topics and up to 65535 characters.
   */
  topics?: string[]
}

export interface DeviceMessageFilters {
  /**
   * Filtering rule to restrict topics the device can publish to.
   */
  publish?: DeviceMessageFiltersRule
  /**
   * Filtering rule to restrict topics the device can subscribe to.
   */
  subscribe?: DeviceMessageFiltersRule
}

export interface HubTwinsGraphiteConfig {
  pushUri: string
}

export interface Certificate {
  crt: string
  key: string
}

export interface Device {
  /**
   * Device ID, also used as MQTT Client ID or username.
   */
  id: string
  /**
   * Device name.
   */
  name: string
  /**
   * Device description.
   */
  description: string
  /**
   * Device status.
   */
  status: DeviceStatus
  /**
   * Hub ID.
   */
  hubId: string
  /**
   * Last connection/activity date of a device.
   */
  lastActivityAt?: Date
  /**
   * Defines whether the device is connected to the Hub.
   */
  isConnected: boolean
  /**
   * Defines whether to allow the device to connect to the Hub without TLS mutual authentication.
   */
  allowInsecure: boolean
  /**
   * Defines whether to allow multiple physical devices to connect to the Hub with this device's credentials.
   */
  allowMultipleConnections: boolean
  /**
   * Filter-sets to restrict the topics the device can publish/subscribe to.
   */
  messageFilters?: DeviceMessageFilters
  /**
   * Assigning a custom certificate allows a device to authenticate using that specific certificate without checking the Hub's CA certificate.
   */
  hasCustomCertificate: boolean
  /**
   * Date at which the device was added.
   */
  createdAt?: Date
  /**
   * Date at which the device was last modified.
   */
  updatedAt?: Date
  /**
   * Region of the device.
   */
  region: ScwRegion
}

export interface Network {
  /**
   * Network ID.
   */
  id: string
  /**
   * Network name.
   */
  name: string
  /**
   * Type of network to connect with.
   */
  type: NetworkNetworkType
  /**
   * Endpoint to use for interacting with the network.
   */
  endpoint: string
  /**
   * Hub ID to connect the Network to.
   */
  hubId: string
  /**
   * Date at which the network was created.
   */
  createdAt?: Date
  /**
   * This prefix will be prepended to all topics for this Network.
   */
  topicPrefix: string
  /**
   * Region of the network.
   */
  region: ScwRegion
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

export interface Hub {
  /**
   * Hub ID.
   */
  id: string
  /**
   * Hub name.
   */
  name: string
  /**
   * Current status of the Hub.
   */
  status: HubStatus
  /**
   * Hub feature set.
   */
  productPlan: HubProductPlan
  /**
   * Defines whether the hub has been enabled.
   */
  enabled: boolean
  /**
   * Number of registered devices.
   */
  deviceCount: number
  /**
   * Number of currently connected devices.
   */
  connectedDeviceCount: number
  /**
   * Devices should be connected to this host. Port may be 1883 (MQTT), 8883 (MQTT over TLS), 80 (MQTT over Websocket) or 443 (MQTT over Websocket over TLS).
   */
  endpoint: string
  /**
   * Defines whether to disable Hub events.
   */
  disableEvents: boolean
  /**
   * Hub events topic prefix.
   */
  eventsTopicPrefix: string
  /**
   * Region of the Hub.
   */
  region: ScwRegion
  /**
   * Hub creation date.
   */
  createdAt?: Date
  /**
   * Hub last modification date.
   */
  updatedAt?: Date
  /**
   * Project owning the resource.
   */
  projectId: string
  /**
   * Organization owning the resource.
   */
  organizationId: string
  /**
   * When an unknown device connects to your hub using a valid certificate chain, it will be automatically provisioned inside your Hub. The Hub uses the common name of the device certificate to find out if a device with the same name already exists. This setting can only be enabled on a hub with a custom certificate authority.
   */
  enableDeviceAutoProvisioning: boolean
  /**
   * Flag is automatically set to `false` after Hub creation, as Hub certificates are managed by Scaleway. Once a custom certificate authority is set, the flag will be set to `true`.
   */
  hasCustomCa: boolean
  /**
   * BETA - not implemented yet.
   *
   * One-of ('twinsDbConfig'): at most one of 'twinsGraphiteConfig' could be set.
   */
  twinsGraphiteConfig?: HubTwinsGraphiteConfig
}

export interface RouteSummary {
  /**
   * Route ID.
   */
  id: string
  /**
   * Route name.
   */
  name: string
  /**
   * Hub ID of the route.
   */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to 65535 characters.
   */
  topic: string
  /**
   * Route type.
   */
  type: RouteRouteType
  /**
   * Date at which the route was created.
   */
  createdAt?: Date
  /**
   * Date at which the route was last updated.
   */
  updatedAt?: Date
  /**
   * Region of the route.
   */
  region: ScwRegion
}

export interface ListTwinDocumentsResponseDocumentSummary {
  /**
   * Name of the document.
   */
  documentName: string
}

export interface RouteDatabaseConfig {
  /**
   * Database engine the route will connect to. If not specified, the default database will be 'PostgreSQL'.
   */
  engine: RouteDatabaseConfigEngine
  /**
   * Database host.
   */
  host: string
  /**
   * Database port.
   */
  port: number
  /**
   * Database name.
   */
  dbname: string
  /**
   * Database username. Make sure this account can execute the provided query.
   */
  username: string
  /**
   * Database password.
   */
  password: string
  /**
   * SQL query to be executed ($TOPIC and $PAYLOAD variables are available, see documentation).
   */
  query: string
}

export interface RouteRestConfig {
  /**
   * HTTP verb used to call REST URI.
   */
  verb: RouteRestConfigHttpVerb
  /**
   * URI of the REST endpoint.
   */
  uri: string
  /**
   * HTTP call extra headers.
   */
  headers: Record<string, string>
}

export interface RouteS3Config {
  /**
   * Region of the Amazon S3 route's destination bucket (e.g., 'fr-par').
   */
  bucketRegion: string
  /**
   * Destination bucket name of the Amazon S3 route.
   */
  bucketName: string
  /**
   * Optional string to prefix object names with.
   */
  objectPrefix: string
  /**
   * How the Amazon S3 route's objects will be created: one per topic or one per message.
   */
  strategy: RouteS3ConfigS3Strategy
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

export type CreateDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device name.
   */
  name?: string
  /**
   * Hub ID of the device.
   */
  hubId: string
  /**
   * Defines whether to allow plain and server-authenticated SSL connections in addition to mutually-authenticated ones.
   */
  allowInsecure: boolean
  /**
   * Defines whether to allow multiple physical devices to connect with this device's credentials.
   */
  allowMultipleConnections: boolean
  /**
   * Filter-sets to authorize or deny the device to publish/subscribe to specific topics.
   */
  messageFilters?: DeviceMessageFilters
  /**
   * Device description.
   */
  description?: string
}

export interface CreateDeviceResponse {
  /**
   * Information related to the created device.
   */
  device?: Device
  /**
   * Device certificate.
   */
  certificate?: Certificate
}

export type CreateHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hub name (up to 255 characters).
   */
  name?: string
  /**
   * Project/Organization ID to filter for, only Hubs from this Project/Organization will be returned.
   */
  projectId?: string
  /**
   * Hub product plan.
   */
  productPlan: HubProductPlan
  /**
   * Disable Hub events.
   */
  disableEvents?: boolean
  /**
   * Topic prefix (default '$SCW/events') of Hub events.
   */
  eventsTopicPrefix?: string
  /**
   * BETA - not implemented yet.
   *
   * One-of ('twinsDbConfig'): at most one of 'twinsGraphiteConfig' could be set.
   */
  twinsGraphiteConfig?: HubTwinsGraphiteConfig
}

export type CreateNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Network name.
   */
  name?: string
  /**
   * Type of network to connect with.
   */
  type: NetworkNetworkType
  /**
   * Hub ID to connect the Network to.
   */
  hubId: string
  /**
   * Topic prefix for the Network.
   */
  topicPrefix: string
}

export interface CreateNetworkResponse {
  /**
   * Information related to the created network.
   */
  network?: Network
  /**
   * Endpoint Key to keep secret. This cannot be retrieved later.
   */
  secret: string
}

export type CreateRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route name.
   */
  name?: string
  /**
   * Hub ID of the route.
   */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to 65535 characters.
   */
  topic: string
  /**
   * If creating Amazon S3 Routes, Amazon S3-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  s3Config?: CreateRouteRequestS3Config
  /**
   * If creating Database Route, DB-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  dbConfig?: CreateRouteRequestDatabaseConfig
  /**
   * If creating Rest Route, Rest-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  restConfig?: CreateRouteRequestRestConfig
}

export type DeleteDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
}

export type DeleteHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hub ID.
   */
  hubId: string
  /**
   * Defines whether to force the deletion of devices added to this Hub or reject the operation.
   */
  deleteDevices?: boolean
}

export type DeleteNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Network ID.
   */
  networkId: string
}

export type DeleteRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route ID.
   */
  routeId: string
}

export type DeleteTwinDocumentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Twin ID.
   */
  twinId: string
  /**
   * Name of the document.
   */
  documentName: string
}

export type DeleteTwinDocumentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Twin ID.
   */
  twinId: string
}

export type DisableDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
}

export type DisableHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hub ID.
   */
  hubId: string
}

export type EnableDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
}

export type EnableHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hub ID.
   */
  hubId: string
}

export type GetDeviceCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
}

export interface GetDeviceCertificateResponse {
  /**
   * Information related to the created device.
   */
  device?: Device
  /**
   * Device certificate.
   */
  certificatePem: string
}

export type GetDeviceMetricsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
  /**
   * Start date used to compute the best scale for the returned metrics.
   */
  startDate?: Date
}

export interface GetDeviceMetricsResponse {
  /**
   * Metrics for a device over the requested period.
   */
  metrics: TimeSeries[]
}

export type GetDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
}

export type GetHubCARequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  hubId: string
}

export interface GetHubCAResponse {
  caCertPem: string
}

export type GetHubMetricsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hub ID.
   */
  hubId: string
  /**
   * Start date used to compute the best scale for returned metrics.
   */
  startDate?: Date
}

export interface GetHubMetricsResponse {
  /**
   * Metrics for a Hub over the requested period.
   */
  metrics: TimeSeries[]
}

export type GetHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hub ID.
   */
  hubId: string
}

export type GetNetworkRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Network ID.
   */
  networkId: string
}

export type GetRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route ID.
   */
  routeId: string
}

export type GetTwinDocumentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Twin ID.
   */
  twinId: string
  /**
   * Name of the document.
   */
  documentName: string
}

export type ListDevicesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of devices to return within a page. Maximum value is 100.
   */
  pageSize?: number
  /**
   * Ordering of requested devices.
   */
  orderBy?: ListDevicesRequestOrderBy
  /**
   * Name to filter for, only devices with this name will be returned.
   */
  name?: string
  /**
   * Hub ID to filter for, only devices attached to this Hub will be returned.
   */
  hubId?: string
  /**
   * Defines whether to filter the allow_insecure flag.
   */
  allowInsecure?: boolean
  /**
   * Device status (enabled, disabled, etc.).
   */
  status?: DeviceStatus
}

export interface ListDevicesResponse {
  /**
   * Total number of devices.
   */
  totalCount: number
  /**
   * Page of devices.
   */
  devices: Device[]
}

export type ListHubsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of Hubs to return within a page. Maximum value is 100.
   */
  pageSize?: number
  /**
   * Sort order of Hubs in the response.
   */
  orderBy?: ListHubsRequestOrderBy
  /**
   * Only list Hubs of this Project ID.
   */
  projectId?: string
  /**
   * Only list Hubs of this Organization ID.
   */
  organizationId?: string
  /**
   * Hub name.
   */
  name?: string
}

export interface ListHubsResponse {
  /**
   * Total number of Hubs.
   */
  totalCount: number
  /**
   * A page of hubs.
   */
  hubs: Hub[]
}

export type ListNetworksRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of networks to return. The maximum value is 100.
   */
  pageSize?: number
  /**
   * Ordering of requested routes.
   */
  orderBy?: ListNetworksRequestOrderBy
  /**
   * Network name to filter for.
   */
  name?: string
  /**
   * Hub ID to filter for.
   */
  hubId?: string
  /**
   * Topic prefix to filter for.
   */
  topicPrefix?: string
}

export interface ListNetworksResponse {
  /**
   * Total number of Networks.
   */
  totalCount: number
  /**
   * Page of networks.
   */
  networks: Network[]
}

export type ListRoutesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of routes to return within a page. Maximum value is 100.
   */
  pageSize?: number
  /**
   * Ordering of requested routes.
   */
  orderBy?: ListRoutesRequestOrderBy
  /**
   * Hub ID to filter for.
   */
  hubId?: string
  /**
   * Route name to filter for.
   */
  name?: string
}

export interface ListRoutesResponse {
  /**
   * Total number of routes.
   */
  totalCount: number
  /**
   * Page of routes.
   */
  routes: RouteSummary[]
}

export type ListTwinDocumentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Twin ID.
   */
  twinId: string
}

export interface ListTwinDocumentsResponse {
  /**
   * List of the twin document.
   */
  documents: ListTwinDocumentsResponseDocumentSummary[]
}

export type PatchTwinDocumentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Twin ID.
   */
  twinId: string
  /**
   * Name of the document.
   */
  documentName: string
  /**
   * If set, ensures that the current version of the document matches before persisting the update.
   */
  version?: number
  /**
   * A json data that will be applied on the document's current data.
Patching rules:
* The patch goes recursively through the patch objects.
* If the patch object property is null, it is removed from the final object.
* If the patch object property is a value (number, strings, bool, arrays), it is replaced.
* If the patch object property is an object, the previous rules will be applied recursively on it.
   */
  data?: Record<string, unknown>
}

export type PutTwinDocumentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Twin ID.
   */
  twinId: string
  /**
   * Name of the document.
   */
  documentName: string
  /**
   * If set, ensures that the current version of the document matches before persisting the update.
   */
  version?: number
  /**
   * New data that will replace the contents of the document.
   */
  data?: Record<string, unknown>
}

export type RenewDeviceCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
}

export interface RenewDeviceCertificateResponse {
  /**
   * Information related to the created device.
   */
  device?: Device
  /**
   * Device certificate.
   */
  certificate?: Certificate
}

export interface Route {
  /**
   * Route ID.
   */
  id: string
  /**
   * Route name.
   */
  name: string
  /**
   * Hub ID of the route.
   */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to 65535 characters.
   */
  topic: string
  /**
   * Route type.
   */
  type: RouteRouteType
  /**
   * Date at which the route was created.
   */
  createdAt?: Date
  /**
   * When using Amazon S3 Routes, Amazon S3-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  s3Config?: RouteS3Config
  /**
   * When using Database Route, DB-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  dbConfig?: RouteDatabaseConfig
  /**
   * When using Rest Route, Rest-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  restConfig?: RouteRestConfig
  /**
   * Date at which the route was last updated.
   */
  updatedAt?: Date
  /**
   * Region of the route.
   */
  region: ScwRegion
}

export type SetDeviceCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
  /**
   * PEM-encoded custom certificate.
   */
  certificatePem: string
}

export interface SetDeviceCertificateResponse {
  device?: Device
  certificatePem: string
}

export type SetHubCARequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hub ID.
   */
  hubId: string
  /**
   * CA's PEM-encoded certificate.
   */
  caCertPem: string
  /**
   * Challenge is a PEM-encoded certificate that acts as proof of possession of the CA. It must be signed by the CA, and have a Common Name equal to the Hub ID.
   */
  challengeCertPem: string
}

export interface TwinDocument {
  /**
   * Parent twin ID of the document.
   */
  twinId: string
  /**
   * Name of the document.
   */
  documentName: string
  /**
   * New version of the document.
   */
  version: number
  /**
   * New data related to the document.
   */
  data?: Record<string, unknown>
}

export type UpdateDeviceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Device ID.
   */
  deviceId: string
  /**
   * Description for the device.
   */
  description?: string
  /**
   * Defines whether to allow plain and server-authenticated SSL connections in addition to mutually-authenticated ones.
   */
  allowInsecure?: boolean
  /**
   * Defines whether to allow multiple physical devices to connect with this device's credentials.
   */
  allowMultipleConnections?: boolean
  /**
   * Filter-sets to restrict the topics the device can publish/subscribe to.
   */
  messageFilters?: DeviceMessageFilters
  /**
   * Change Hub for this device, additional fees may apply, see IoT Hub pricing.
   */
  hubId?: string
}

export type UpdateHubRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Hub you want to update.
   */
  hubId: string
  /**
   * Hub name (up to 255 characters).
   */
  name?: string
  /**
   * Hub product plan.
   */
  productPlan?: HubProductPlan
  /**
   * Disable Hub events.
   */
  disableEvents?: boolean
  /**
   * Topic prefix of Hub events.
   */
  eventsTopicPrefix?: string
  /**
   * Enable device auto provisioning.
   */
  enableDeviceAutoProvisioning?: boolean
  /**
   * BETA - not implemented yet.
   *
   * One-of ('twinsDbConfig'): at most one of 'twinsGraphiteConfig' could be set.
   */
  twinsGraphiteConfig?: HubTwinsGraphiteConfig
}

export type UpdateRouteRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Route id.
   */
  routeId: string
  /**
   * Route name.
   */
  name?: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to 65535 characters.
   */
  topic?: string
  /**
   * When updating Amazon S3 Route, Amazon S3-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  s3Config?: UpdateRouteRequestS3Config
  /**
   * When updating Database Route, DB-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  dbConfig?: UpdateRouteRequestDatabaseConfig
  /**
   * When updating Rest Route, Rest-specific configuration fields.
   *
   * One-of ('config'): at most one of 's3Config', 'dbConfig', 'restConfig' could be set.
   */
  restConfig?: UpdateRouteRequestRestConfig
}
