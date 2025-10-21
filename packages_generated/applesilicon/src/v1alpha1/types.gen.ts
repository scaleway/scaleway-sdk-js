// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  Decimal,
  Money,
  ServiceInfo,
  Region as ScwRegion,
  ScwFile,
  TimeSeries,
  Zone as ScwZone,
} from '@scaleway/sdk-client'

export type CommitmentType = 'duration_24h' | 'renewed_monthly' | 'none'

export type ConnectivityDiagnosticActionType =
  | 'reboot_server'
  | 'reinstall_server'

export type ConnectivityDiagnosticDiagnosticStatus =
  | 'unknown_status'
  | 'processing'
  | 'error'
  | 'completed'

export type ListServerPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListServersRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type RunnerConfigurationProvider =
  | 'unknown_provider'
  | 'github'
  | 'gitlab'

export type ServerPrivateNetworkServerStatus =
  | 'unknown_status'
  | 'attaching'
  | 'attached'
  | 'error'
  | 'detaching'
  | 'locked'

export type ServerPrivateNetworkStatus =
  | 'vpc_unknown_status'
  | 'vpc_enabled'
  | 'vpc_updating'
  | 'vpc_disabled'

export type ServerStatus =
  | 'unknown_status'
  | 'starting'
  | 'ready'
  | 'error'
  | 'rebooting'
  | 'updating'
  | 'locking'
  | 'locked'
  | 'unlocking'
  | 'reinstalling'
  | 'busy'

export type ServerTypeStock =
  | 'unknown_stock'
  | 'no_stock'
  | 'low_stock'
  | 'high_stock'

export interface OSSupportedServerType {
  serverType: string
  fastDeliveryAvailable: boolean
}

export interface Commitment {
  type: CommitmentType
  cancelled: boolean
}

export interface OS {
  /**
   * Unique ID of the OS.
   */
  id: string
  /**
   * OS name.
   */
  name: string
  /**
   * OS name as it should be displayed.
   */
  label: string
  /**
   * URL of the image.
   */
  imageUrl: string
  /**
   * The OS family to which this OS belongs, eg. 13 or 14.
   */
  family: string
  /**
   * Describes if the OS is in beta.
   */
  isBeta: boolean
  /**
   * The OS version number, eg. Sonoma has version number 14.3.
   */
  version: string
  /**
   * The current xcode version for this OS.
   */
  xcodeVersion: string
  /**
   * @deprecated List of compatible server types. Deprecated.
   */
  compatibleServerTypes?: string[]
  /**
   * Url of the release notes for the OS image or softwares pre-installed.
   */
  releaseNotesUrl: string
  /**
   * A summary of the OS image content and configuration.
   */
  description: string
  /**
   * List of tags for the OS configuration.
   */
  tags: string[]
  /**
   * List of server types which supports the OS configuration. Also gives information about immediate stock availability.
   */
  supportedServerTypes: OSSupportedServerType[]
}

export interface RunnerConfiguration {
  name: string
  url: string
  token: string
  provider: RunnerConfigurationProvider
}

export interface ServerTypeCPU {
  name: string
  coreCount: number
  frequency: number
  sockets: number
  threadsPerCore: number
}

export interface ServerTypeDisk {
  capacity: number
  type: string
}

export interface ServerTypeGPU {
  count: number
}

export interface ServerTypeMemory {
  capacity: number
  type: string
}

export interface ServerTypeNPU {
  count: number
}

export interface ServerTypeNetwork {
  publicBandwidthBps: number
  supportedBandwidth: number[]
  defaultPublicBandwidth: number
}

export interface BatchCreateServersRequestBatchInnerCreateServerRequest {
  name: string
}

export interface Server {
  /**
   * UUID of the server.
   */
  id: string
  /**
   * Type of the server.
   */
  type: string
  /**
   * Name of the server.
   */
  name: string
  /**
   * Project this server is associated with.
   */
  projectId: string
  /**
   * Organization this server is associated with.
   */
  organizationId: string
  /**
   * IPv4 address of the server.
   */
  ip: string
  /**
   * Vnc:// URL to access Apple Remote Desktop.
   */
  vncUrl: string
  /**
   * SSH Username for remote shell.
   */
  sshUsername: string
  /**
   * Admin password required to execute commands.
   */
  sudoPassword: string
  /**
   * VNC port to use for remote desktop connection.
   */
  vncPort: number
  /**
   * Initially installed OS, this does not necessarily reflect the current OS version.
   */
  os?: OS
  /**
   * Current status of the server.
   */
  status: ServerStatus
  /**
   * Date on which the server was created.
   */
  createdAt?: Date
  /**
   * Date on which the server was last updated.
   */
  updatedAt?: Date
  /**
   * Date from which the server can be deleted.
   */
  deletableAt?: Date
  /**
   * Set to true to mark the server for automatic deletion depending on `deletable_at` date. Set to false to cancel an existing deletion schedule. Leave unset otherwise.
   */
  deletionScheduled: boolean
  /**
   * Zone of the server.
   */
  zone: ScwZone
  /**
   * Set to true once the server has completed its provisioning steps and is ready to use. Some OS configurations might require a reinstallation of the server before delivery depending on the available stock. A reinstallation after the initial delivery will not change this flag and can be tracked using the server status.
   */
  delivered: boolean
  /**
   * Activation status of optional Private Network feature support for this server.
   */
  vpcStatus: ServerPrivateNetworkStatus
  /**
   * Commitment scheme applied to this server.
   */
  commitment?: Commitment
  /**
   * Public bandwidth configured for this server. Expressed in bits per second.
   */
  publicBandwidthBps: number
  /**
   * Current runner configuration, empty if none is installed.
   */
  runnerConfiguration?: RunnerConfiguration
  /**
   * A list of tags attached to the server.
   */
  tags: string[]
}

export interface ConnectivityDiagnosticServerHealth {
  lastCheckinDate?: Date
  isServerAlive: boolean
  isAgentAlive: boolean
  isMdmAlive: boolean
  isSshPortUp: boolean
  isVncPortUp: boolean
}

export interface ServerPrivateNetwork {
  /**
   * ID of the Server-to-Private Network mapping.
   */
  id: string
  /**
   * Private Network Project ID.
   */
  projectId: string
  /**
   * Apple silicon server ID.
   */
  serverId: string
  /**
   * Private Network ID.
   */
  privateNetworkId: string
  /**
   * ID of the VLAN associated with the Private Network.
   */
  vlan?: number
  /**
   * Configuration status of the Private Network.
   */
  status: ServerPrivateNetworkServerStatus
  /**
   * Private Network creation date.
   */
  createdAt?: Date
  /**
   * Date the Private Network was last modified.
   */
  updatedAt?: Date
  /**
   * IPAM IP IDs of the server, if it has any.
   */
  ipamIpIds: string[]
}

export interface ServerType {
  /**
   * CPU description.
   */
  cpu?: ServerTypeCPU
  /**
   * Size of the local disk of the server.
   */
  disk?: ServerTypeDisk
  /**
   * Name of the type.
   */
  name: string
  /**
   * Size of memory available.
   */
  memory?: ServerTypeMemory
  /**
   * Current stock.
   */
  stock: ServerTypeStock
  /**
   * Minimum duration of the lease in seconds (example. 3.4s).
   */
  minimumLeaseDuration?: string
  /**
   * GPU description.
   */
  gpu?: ServerTypeGPU
  /**
   * Network description.
   */
  network?: ServerTypeNetwork
  /**
   * The default OS for this server type.
   */
  defaultOs?: OS
  /**
   * NPU description.
   */
  npu?: ServerTypeNPU
}

export interface CommitmentTypeValue {
  commitmentType: CommitmentType
}

export type BatchCreateServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Create servers in the given project ID.
   */
  projectId?: string
  /**
   * Create servers of the given type.
   */
  type: string
  /**
   * Create servers & install the given os_id, when no os_id provided the default OS for this server type is chosen. Requesting a non-default OS will induce an extended delivery time.
   */
  osId?: string
  /**
   * Activate the Private Network feature for these servers. This feature is configured through the Apple Silicon - Private Networks API.
   */
  enableVpc: boolean
  /**
   * Activate commitment for these servers. If not specified, there is a 24h commitment due to Apple licensing (commitment_type `duration_24h`). It can be updated with the Update Server request. Available commitment depends on server type.
   */
  commitmentType?: CommitmentType
  /**
   * Public bandwidth to configure for these servers. This defaults to the minimum bandwidth for the corresponding server type. For compatible server types, the bandwidth can be increased which incurs additional costs.
   */
  publicBandwidthBps: number
  /**
   * List of servers to create.
   */
  requests?: BatchCreateServersRequestBatchInnerCreateServerRequest[]
}

export interface BatchCreateServersResponse {
  /**
   * List of created servers.
   */
  servers: Server[]
}

export interface ConnectivityDiagnostic {
  id: string
  status: ConnectivityDiagnosticDiagnosticStatus
  isHealthy: boolean
  healthDetails?: ConnectivityDiagnosticServerHealth
  supportedActions: ConnectivityDiagnosticActionType[]
  errorMessage: string
}

export type CreateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Create a server with this given name.
   */
  name?: string
  /**
   * Create a server in the given project ID.
   */
  projectId?: string
  /**
   * Create a server of the given type.
   */
  type: string
  /**
   * Create a server & install the given os_id, when no os_id provided the default OS for this server type is chosen. Requesting a non-default OS will induce an extended delivery time.
   */
  osId?: string
  /**
   * Activate the Private Network feature for this server. This feature is configured through the Apple Silicon - Private Networks API.
   */
  enableVpc: boolean
  /**
   * Activate commitment for this server. If not specified, there is a 24h commitment due to Apple licensing (commitment_type `duration_24h`). It can be updated with the Update Server request. Available commitment depends on server type.
   */
  commitmentType?: CommitmentType
  /**
   * Public bandwidth to configure for this server. This defaults to the minimum bandwidth for this server type. For compatible server types, the bandwidth can be increased which incurs additional costs.
   */
  publicBandwidthBps: number
  /**
   * Specify the configuration to install an optional CICD runner on the server during installation.
   */
  runnerConfiguration?: RunnerConfiguration
}

export type DeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the server you want to delete.
   */
  serverId: string
}

export type GetConnectivityDiagnosticRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  diagnosticId: string
}

export type GetOSRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the OS you want to get.
   */
  osId: string
}

export type GetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the server you want to get.
   */
  serverId: string
}

export type GetServerTypeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server type identifier.
   */
  serverType: string
}

export type ListOSRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Positive integer to choose the page to return.
   */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to return.
   */
  pageSize?: number
  /**
   * List of compatible server types.
   */
  serverType?: string
  /**
   * Filter OS by name (note that "11.1" will return "11.1.2" and "11.1" but not "12")).
   */
  name?: string
}

export interface ListOSResponse {
  /**
   * Total number of OS.
   */
  totalCount: number
  /**
   * List of OS.
   */
  os: OS[]
}

export interface ListServerPrivateNetworksResponse {
  serverPrivateNetworks: ServerPrivateNetwork[]
  totalCount: number
}

export type ListServerTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
}

export interface ListServerTypesResponse {
  /**
   * Available server types.
   */
  serverTypes: ServerType[]
}

export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Sort order of the returned servers.
   */
  orderBy?: ListServersRequestOrderBy
  /**
   * Only list servers of this project ID.
   */
  projectId?: string
  /**
   * Only list servers of this Organization ID.
   */
  organizationId?: string
  /**
   * Positive integer to choose the page to return.
   */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to return.
   */
  pageSize?: number
}

export interface ListServersResponse {
  /**
   * Total number of servers.
   */
  totalCount: number
  /**
   * Paginated returned servers.
   */
  servers: Server[]
}

export type PrivateNetworkApiAddServerPrivateNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * ID of the Private Network.
   */
  privateNetworkId: string
  /**
   * IPAM IDs of IPs to attach to the server.
   */
  ipamIpIds?: string[]
}

export type PrivateNetworkApiDeleteServerPrivateNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * ID of the Private Network.
   */
  privateNetworkId: string
}

export type PrivateNetworkApiGetServerPrivateNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  privateNetworkId: string
}

export type PrivateNetworkApiListServerPrivateNetworksRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Sort order for the returned Private Networks.
   */
  orderBy?: ListServerPrivateNetworksRequestOrderBy
  /**
   * Page number for the returned Private Networks.
   */
  page?: number
  /**
   * Maximum number of Private Networks per page.
   */
  pageSize?: number
  /**
   * Filter Private Networks by server ID.
   */
  serverId?: string
  /**
   * Filter Private Networks by Private Network ID.
   */
  privateNetworkId?: string
  /**
   * Filter Private Networks by Organization ID.
   */
  organizationId?: string
  /**
   * Filter Private Networks by Project ID.
   */
  projectId?: string
  /**
   * Filter Private Networks by IPAM IP IDs.
   */
  ipamIpIds?: string[]
}

export type PrivateNetworkApiSetServerPrivateNetworksRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * Object where the keys are the IDs of Private Networks and the values are arrays of IPAM IDs representing the IPs to assign to this Apple silicon server on the Private Network. If the array supplied for a Private Network is empty, the next available IP from the Private Network's CIDR block will automatically be used for attachment.
   */
  perPrivateNetworkIpamIpIds: Record<string, string[]>
}

export type RebootServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the server you want to reboot.
   */
  serverId: string
}

export type ReinstallServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the server you want to reinstall.
   */
  serverId: string
  /**
   * Reinstall the server with the target OS, when no os_id provided the default OS for the server type is used.
   */
  osId?: string
}

export interface SetServerPrivateNetworksResponse {
  serverPrivateNetworks: ServerPrivateNetwork[]
}

export type StartConnectivityDiagnosticRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}

export interface StartConnectivityDiagnosticResponse {
  diagnosticId: string
}

export type UpdateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * UUID of the server you want to update.
   */
  serverId: string
  /**
   * Updated name for your server.
   */
  name?: string
  /**
   * Specify whether the server should be flagged for automatic deletion.
   */
  scheduleDeletion?: boolean
  /**
   * Activate or deactivate Private Network support for this server.
   */
  enableVpc?: boolean
  /**
   * Change commitment. Use 'none' to automatically cancel a renewing commitment.
   */
  commitmentType?: CommitmentTypeValue
  /**
   * Public bandwidth to configure for this server. Setting an higher bandwidth incurs additional costs. Supported bandwidth levels depends on server type and can be queried using the `/server-types` endpoint.
   */
  publicBandwidthBps?: number
}
