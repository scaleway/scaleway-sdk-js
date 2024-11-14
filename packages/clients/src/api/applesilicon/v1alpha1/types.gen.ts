// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export type ConnectivityDiagnosticActionType =
  | 'reboot_server'
  | 'reinstall_server'

export type ConnectivityDiagnosticDiagnosticStatus =
  | 'unknown_status'
  | 'processing'
  | 'error'
  | 'completed'

export type ListServersRequestOrderBy = 'created_at_asc' | 'created_at_desc'

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

export type ServerTypeStock =
  | 'unknown_stock'
  | 'no_stock'
  | 'low_stock'
  | 'high_stock'

export interface OS {
  /** Unique ID of the OS. */
  id: string
  /** OS name. */
  name: string
  /** OS name as it should be displayed. */
  label: string
  /** URL of the image. */
  imageUrl: string
  /** The OS family to which this OS belongs, eg. 13 or 14. */
  family: string
  /** Describes if the OS is in beta. */
  isBeta: boolean
  /** The OS version number, eg. Sonoma has version number 14.3. */
  version: string
  /** The current xcode version for this OS. */
  xcodeVersion: string
  /** List of compatible server types. */
  compatibleServerTypes: string[]
}

export interface ServerTypeCPU {
  name: string
  coreCount: number
  frequency: number
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

export interface ServerTypeNetwork {
  publicBandwidthBps: number
}

export interface ConnectivityDiagnosticServerHealth {
  lastCheckinDate?: Date
  isServerAlive: boolean
  isAgentAlive: boolean
  isMdmAlive: boolean
  isSshPortUp: boolean
  isVncPortUp: boolean
}

export interface ServerType {
  /** CPU description. */
  cpu?: ServerTypeCPU
  /** Size of the local disk of the server. */
  disk?: ServerTypeDisk
  /** Name of the type. */
  name: string
  /** Size of memory available. */
  memory?: ServerTypeMemory
  /** Current stock. */
  stock: ServerTypeStock
  /** Minimum duration of the lease in seconds (example. 3.4s). */
  minimumLeaseDuration?: string
  /** GPU description. */
  gpu?: ServerTypeGPU
  /** Network description. */
  network?: ServerTypeNetwork
  /** The default OS for this server type. */
  defaultOs?: OS
}

export interface Server {
  /** UUID of the server. */
  id: string
  /** Type of the server. */
  type: string
  /** Name of the server. */
  name: string
  /** Project this server is associated with. */
  projectId: string
  /** Organization this server is associated with. */
  organizationId: string
  /** IPv4 address of the server. */
  ip: string
  /** Vnc:// URL to access Apple Remote Desktop. */
  vncUrl: string
  /** SSH Username for remote shell. */
  sshUsername: string
  /** Admin password required to execute commands. */
  sudoPassword: string
  /** VNC port to use for remote desktop connection. */
  vncPort: number
  /**
   * Initially installed OS, this does not necessarily reflect the current OS
   * version.
   */
  os?: OS
  /** Current status of the server. */
  status: ServerStatus
  /** Date on which the server was created. */
  createdAt?: Date
  /** Date on which the server was last updated. */
  updatedAt?: Date
  /** Date from which the server can be deleted. */
  deletableAt?: Date
  /**
   * Set to true to mark the server for automatic deletion depending on
   * `deletable_at` date. Set to false to cancel an existing deletion schedule.
   * Leave unset otherwise.
   */
  deletionScheduled: boolean
  /** Zone of the server. */
  zone: Zone
  /**
   * Set to true once the server has completed its provisioning steps and is
   * ready to use. Some OS configurations might require a reinstallation of the
   * server before delivery depending on the available stock. A reinstallation
   * after the initial delivery will not change this flag and can be tracked
   * using the server status.
   */
  delivered: boolean
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
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Create a server with this given name. */
  name?: string
  /** Create a server in the given project ID. */
  projectId?: string
  /** Create a server of the given type. */
  type: string
  /**
   * Create a server & install the given os_id, when no os_id provided the
   * default OS for this server type is chosen. Requesting a non-default OS will
   * induce an extended delivery time.
   */
  osId?: string
}

export type DeleteServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the server you want to delete. */
  serverId: string
}

export type GetConnectivityDiagnosticRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  diagnosticId: string
}

export type GetOSRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the OS you want to get. */
  osId: string
}

export type GetServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the server you want to get. */
  serverId: string
}

export type GetServerTypeRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Server type identifier. */
  serverType: string
}

export type ListOSRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Positive integer to choose the page to return. */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to
   * return.
   */
  pageSize?: number
  /** List of compatible server types. */
  serverType?: string
  /**
   * Filter OS by name (note that "11.1" will return "11.1.2" and "11.1" but not
   * "12")).
   */
  name?: string
}

export interface ListOSResponse {
  /** Total number of OS. */
  totalCount: number
  /** List of OS. */
  os: OS[]
}

export type ListServerTypesRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
}

export interface ListServerTypesResponse {
  /** Available server types. */
  serverTypes: ServerType[]
}

export type ListServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Sort order of the returned servers. */
  orderBy?: ListServersRequestOrderBy
  /** Only list servers of this project ID. */
  projectId?: string
  /** Only list servers of this Organization ID. */
  organizationId?: string
  /** Positive integer to choose the page to return. */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to
   * return.
   */
  pageSize?: number
}

export interface ListServersResponse {
  /** Total number of servers. */
  totalCount: number
  /** Paginated returned servers. */
  servers: Server[]
}

export type RebootServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the server you want to reboot. */
  serverId: string
}

export type ReinstallServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the server you want to reinstall. */
  serverId: string
  /**
   * Reinstall the server with the target OS, when no os_id provided the default
   * OS for the server type is used.
   */
  osId?: string
}

export type StartConnectivityDiagnosticRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  serverId: string
}

export interface StartConnectivityDiagnosticResponse {
  diagnosticId: string
}

export type UpdateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** UUID of the server you want to update. */
  serverId: string
  /** Updated name for your server. */
  name?: string
  /** Specify whether the server should be flagged for automatic deletion. */
  scheduleDeletion?: boolean
}
