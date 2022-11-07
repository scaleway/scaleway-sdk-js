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

/** Create device response */
export interface CreateDeviceResponse {
  /** Created device information */
  device?: Device
  /** Device certificate */
  certificate?: Certificate
}

/** Create network response */
export interface CreateNetworkResponse {
  /** Created network */
  network?: Network
  /** Endpoint Key to keep secret. This cannot be retrieved later */
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

/** Device */
export interface Device {
  /** Device ID, also used as MQTT Client ID or Username */
  id: string
  /** Device name */
  name: string
  /** Device description */
  description: string
  /** Device status */
  status: DeviceStatus
  /** Hub ID */
  hubId: string
  /** Device last connection/activity date */
  lastActivityAt?: Date
  /** Whether the device is connected to the Hub or not */
  isConnected: boolean
  /** Whether to allow device to connect without TLS mutual authentication */
  allowInsecure: boolean
  /**
   * Whether to allow multiple physical devices to connect with this device's
   * credentials
   */
  allowMultipleConnections: boolean
  /** Filter-sets to restrict the topics the device can publish/subscribe to */
  messageFilters?: DeviceMessageFilters
  /**
   * Assigning a custom certificate allows a device to authenticate using that
   * specific certificate without checking the hub's CA certificate.
   */
  hasCustomCertificate: boolean
  /** Device add date */
  createdAt?: Date
  /** Device last modification date */
  updatedAt?: Date
}

/** Device. message filters */
export interface DeviceMessageFilters {
  /** Filtering rule to restrict topics the device can publish to */
  publish?: DeviceMessageFiltersRule
  /** Filtering rule to restrict topics the device can subscribe to */
  subscribe?: DeviceMessageFiltersRule
}

/** Device. message filters. rule */
export interface DeviceMessageFiltersRule {
  /**
   * If accept, the set will accept all topics in the topics list, but no other.
   * If reject, the set will deny all topics in the topics list, but all others
   * will be allowed.
   */
  policy: DeviceMessageFiltersRulePolicy
  /**
   * List of topics to accept or reject. It must be valid MQTT topics and up to
   * 65535 characters
   */
  topics?: Array<string>
}

/** Get device certificate response */
export interface GetDeviceCertificateResponse {
  /** Created device information */
  device?: Device
  /** Device certificate */
  certificatePem: string
}

/** Get device metrics response */
export interface GetDeviceMetricsResponse {
  /** Metrics for a device over the requested period */
  metrics: Array<TimeSeries>
}

export interface GetHubCAResponse {
  caCertPem: string
}

/** Get hub metrics response */
export interface GetHubMetricsResponse {
  /** Metrics for a hub over the requested period */
  metrics: Array<TimeSeries>
}

/** Hub */
export interface Hub {
  /** Hub ID */
  id: string
  /** Hub name */
  name: string
  /** Current status of the Hub */
  status: HubStatus
  /** Hub feature set */
  productPlan: HubProductPlan
  /** Whether the hub has been enabled */
  enabled: boolean
  /** Number of registered devices */
  deviceCount: number
  /** Number of currently connected devices */
  connectedDeviceCount: number
  /**
   * Devices should be connected to this host, port may be 1883 (MQTT), 8883
   * (MQTT over TLS), 80 (MQTT over Websocket) or 443 (MQTT over Websocket over
   * TLS).
   */
  endpoint: string
  /** Disable Hub events */
  disableEvents: boolean
  /** Hub events topic prefix */
  eventsTopicPrefix: string
  /** Region of the Hub */
  region: Region
  /** Hub creation date */
  createdAt?: Date
  /** Hub last modification date */
  updatedAt?: Date
  /** Project owning the resource */
  projectId: string
  /** Organization owning the resource */
  organizationId: string
  /**
   * When an unknown device connects to your hub using a valid certificate
   * chain, it will be automatically provisioned inside your hub. The hub uses
   * the common name of the device certifcate to find out if a device with the
   * same name already exists. This setting can only be enabled on a hub with a
   * custom certificate authority.
   */
  enableDeviceAutoProvisioning: boolean
  /**
   * After creating a hub, this flag is set to False as the hub certificates are
   * managed by Scaleway. Once a custom certificate authority is installed, this
   * flag will be set to true.
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

/** List devices response */
export interface ListDevicesResponse {
  /** Total number of devices */
  totalCount: number
  /** A page of devices */
  devices: Array<Device>
}

/** List hubs response */
export interface ListHubsResponse {
  /** Total number of hubs */
  totalCount: number
  /** A page of hubs */
  hubs: Array<Hub>
}

/** List networks response */
export interface ListNetworksResponse {
  /** Total number of Networks */
  totalCount: number
  /** A page of networks */
  networks: Array<Network>
}

/** List routes response */
export interface ListRoutesResponse {
  /** Total number of routes */
  totalCount: number
  /** A page of routes */
  routes: Array<RouteSummary>
}

/** List twin documents response */
export interface ListTwinDocumentsResponse {
  /** Twin's document list */
  documents: Array<ListTwinDocumentsResponseDocumentSummary>
}

/** List twin documents response. document summary */
export interface ListTwinDocumentsResponseDocumentSummary {
  /** Document's name */
  documentName: string
}

/** Network */
export interface Network {
  /** Network ID */
  id: string
  /** Network name */
  name: string
  /** Type of network to connect with */
  type: NetworkNetworkType
  /** Endpoint to use for interacting with the network */
  endpoint: string
  /** Hub ID to connect the Network to */
  hubId: string
  /** Network creation date */
  createdAt?: Date
  /** This prefix will be prepended to all topics for this Network. */
  topicPrefix: string
}

/** Renew device certificate response */
export interface RenewDeviceCertificateResponse {
  /** Created device information */
  device?: Device
  /** Device certificate */
  certificate?: Certificate
}

/** Route */
export interface Route {
  /** Route ID */
  id: string
  /** Route name */
  name: string
  /** ID of the route's hub */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to
   * 65535 characters
   */
  topic: string
  /** Route type */
  type: RouteRouteType
  /** Route creation date */
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
  /** Route last update date */
  updatedAt?: Date
}

/** Route. database config */
export interface RouteDatabaseConfig {
  /**
   * Database engine the route will connect to. If not specified, will default
   * to 'PostgreSQL'
   */
  engine: RouteDatabaseConfigEngine
  /** Database host */
  host: string
  /** Database port */
  port: number
  /** Database name */
  dbname: string
  /** Database username. Make sure this account can execute the provided query */
  username: string
  /** Database password */
  password: string
  /**
   * SQL query to be executed ($TOPIC and $PAYLOAD variables are available, see
   * documentation)
   */
  query: string
}

/** Route. rest config */
export interface RouteRestConfig {
  /** HTTP Verb used to call REST URI */
  verb: RouteRestConfigHttpVerb
  /** URI of the REST endpoint */
  uri: string
  /** HTTP call extra headers */
  headers: Record<string, string>
}

/** Route.s3 config */
export interface RouteS3Config {
  /** Region of the S3 route's destination bucket (eg 'fr-par') */
  bucketRegion: string
  /** Name of the S3 route's destination bucket */
  bucketName: string
  /** Optional string to prefix object names with */
  objectPrefix: string
  /**
   * How the S3 route's objects will be created: one per topic or one per
   * message
   */
  strategy: RouteS3ConfigS3Strategy
}

/** Route summary */
export interface RouteSummary {
  /** Route ID */
  id: string
  /** Route name */
  name: string
  /** ID of the route's hub */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to
   * 65535 characters
   */
  topic: string
  /** Route type */
  type: RouteRouteType
  /** Route creation date */
  createdAt?: Date
  /** Route last update date */
  updatedAt?: Date
}

export interface SetDeviceCertificateResponse {
  device?: Device
  certificatePem: string
}

/** Twin document */
export interface TwinDocument {
  /** Document's parent twin ID */
  twinId: string
  /** Document's name */
  documentName: string
  /** Document's new version */
  version: number
  /** Document's new data */
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
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Page number */
  page?: number
  /** Page size. The maximum value is 100 */
  pageSize?: number
  /** Ordering of requested hub */
  orderBy?: ListHubsRequestOrderBy
  /** Filter on project */
  projectId?: string
  /** Filter on the organization */
  organizationId?: string
  /** Filter on the name */
  name?: string
}

export type CreateHubRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Hub name (up to 255 characters) */
  name?: string
  /** Organization/project owning the resource */
  projectId?: string
  /** Hub feature set */
  productPlan: HubProductPlan
  /** Disable Hub events */
  disableEvents?: boolean
  /** Hub events topic prefix (default '$SCW/events') */
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
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Hub ID */
  hubId: string
}

export type UpdateHubRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Hub ID */
  hubId: string
  /** Hub name (up to 255 characters) */
  name?: string
  /** Hub feature set */
  productPlan: HubProductPlan
  /** Disable Hub events */
  disableEvents?: boolean
  /** Hub events topic prefix */
  eventsTopicPrefix?: string
  /** Enable device auto provisioning */
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
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Hub ID */
  hubId: string
}

export type DisableHubRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Hub ID */
  hubId: string
}

export type DeleteHubRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Hub ID */
  hubId: string
  /** Force deletion of devices added to this hub instead of rejecting operation */
  deleteDevices?: boolean
}

export type GetHubMetricsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Hub ID */
  hubId: string
  /** Start date used to compute the best scale for the returned metrics */
  startDate: Date
}

export type SetHubCARequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Hub ID */
  hubId: string
  /** The CA's PEM-encoded certificate */
  caCertPem: string
  /**
   * The challenge is a PEM-encoded certificate to prove the possession of the
   * CA. It must be signed by the CA, and have a Common Name equal to the Hub
   * ID.
   */
  challengeCertPem: string
}

export type GetHubCARequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  hubId: string
}

export type ListDevicesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Page number */
  page?: number
  /** Page size. The maximum value is 100 */
  pageSize?: number
  /** Ordering of requested devices */
  orderBy?: ListDevicesRequestOrderBy
  /** Filter on the name */
  name?: string
  /** Filter on the hub */
  hubId?: string
  /** Filter on the allow_insecure flag */
  allowInsecure?: boolean
  /** Device status (enabled, disabled, etc.) */
  status?: DeviceStatus
}

export type CreateDeviceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device name */
  name?: string
  /** ID of the device's hub */
  hubId: string
  /**
   * Allow plain and server-authenticated SSL connections in addition to
   * mutually-authenticated ones
   */
  allowInsecure: boolean
  /** Allow multiple physical devices to connect with this device's credentials */
  allowMultipleConnections: boolean
  /**
   * Filter-sets to authorize or deny the device to publish/subscribe to
   * specific topics
   */
  messageFilters?: DeviceMessageFilters
  /** Device description */
  description?: string
}

export type GetDeviceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
}

export type UpdateDeviceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
  /** Device description */
  description?: string
  /**
   * Allow plain and server-authenticated SSL connections in addition to
   * mutually-authenticated ones
   */
  allowInsecure?: boolean
  /** Allow multiple physical devices to connect with this device's credentials */
  allowMultipleConnections?: boolean
  /** Filter-sets to restrict the topics the device can publish/subscribe to */
  messageFilters?: DeviceMessageFilters
  /** Change Hub for this device, additional fees may apply, see IoT Hub pricing */
  hubId?: string
}

export type EnableDeviceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
}

export type DisableDeviceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
}

export type RenewDeviceCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
}

export type SetDeviceCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
  /** The PEM-encoded custom certificate */
  certificatePem: string
}

export type GetDeviceCertificateRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
}

export type DeleteDeviceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
}

export type GetDeviceMetricsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Device ID */
  deviceId: string
  /** Start date used to compute the best scale for the returned metrics */
  startDate: Date
}

export type ListRoutesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Page number */
  page?: number
  /** Page size. The maximum value is 100 */
  pageSize?: number
  /** Ordering of requested routes */
  orderBy?: ListRoutesRequestOrderBy
  /** Filter on the hub */
  hubId?: string
  /** Filter on route's name */
  name?: string
}

export type CreateRouteRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Route name */
  name?: string
  /** ID of the route's hub */
  hubId: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to
   * 65535 characters
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
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Route id */
  routeId: string
  /** Route name */
  name?: string
  /**
   * Topic the route subscribes to. It must be a valid MQTT topic and up to
   * 65535 characters
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
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Route ID */
  routeId: string
}

export type DeleteRouteRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Route ID */
  routeId: string
}

export type ListNetworksRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Page number */
  page?: number
  /** Page size. The maximum value is 100 */
  pageSize?: number
  /** Ordering of requested routes */
  orderBy?: ListNetworksRequestOrderBy
  /** Filter on Network name */
  name?: string
  /** Filter on the hub */
  hubId?: string
  /** Filter on the topic prefix */
  topicPrefix?: string
}

export type CreateNetworkRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Network name */
  name?: string
  /** Type of network to connect with */
  type: NetworkNetworkType
  /** Hub ID to connect the Network to */
  hubId: string
  /** Topic prefix for the Network */
  topicPrefix: string
}

export type GetNetworkRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Network ID */
  networkId: string
}

export type DeleteNetworkRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Network ID */
  networkId: string
}

export type GetTwinDocumentRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Twin ID */
  twinId: string
  /** Document name */
  documentName: string
}

export type PutTwinDocumentRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Twin ID */
  twinId: string
  /** Document name */
  documentName: string
  /**
   * If set, ensures that the document's current version matches before
   * persisting the update.
   */
  version?: number
  /** The new data that will replace the contents of the document. */
  data?: Record<string, unknown>
}

export type PatchTwinDocumentRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Twin ID */
  twinId: string
  /** Document name */
  documentName: string
  /**
   * If set, ensures that the document's current version matches before
   * persisting the update.
   */
  version?: number
  /**
   * A json data that will be applied on the document's current data. Patching
   * rules: The patch goes recursively through the patch objects. If the patch
   * object property is null, then it is removed from the final object. If the
   * patch object property is a value (number, strings, bool, arrays), it is
   * replaced. If the patch object property is an object, the previous rules
   * will be applied recursively on it.
   */
  data?: Record<string, unknown>
}

export type DeleteTwinDocumentRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Twin ID */
  twinId: string
  /** Document name */
  documentName: string
}

export type ListTwinDocumentsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Twin ID */
  twinId: string
}

export type DeleteTwinDocumentsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Twin ID */
  twinId: string
}
