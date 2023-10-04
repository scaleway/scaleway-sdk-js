// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

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

export interface ServerTypeCPU {
  name: string
  coreCount: number
}

export interface ServerTypeDisk {
  capacity: number
  type: string
}

export interface ServerTypeMemory {
  capacity: number
  type: string
}

export interface OS {
  /** Unique ID of the OS. */
  id: string
  /** OS name. */
  name: string
  /** OS name as it should be displayed. */
  label: string
  /** URL of the image. */
  imageUrl: string
  /** List of compatible server types. */
  compatibleServerTypes: string[]
}

export interface ServerType {
  /** CPU description. */
  cpu: ServerTypeCPU
  /** Size of the local disk of the server. */
  disk: ServerTypeDisk
  /** Name of the type. */
  name: string
  /** Size of memory available. */
  memory: ServerTypeMemory
  /** Current stock. */
  stock: ServerTypeStock
  /** Minimum duration of the lease in seconds (example. 3.4s). */
  minimumLeaseDuration?: string
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
  /** URL of the VNC. */
  vncUrl: string
  /** Current status of the server. */
  status: ServerStatus
  /** Date on which the server was created. */
  createdAt?: Date
  /** Date on which the server was last updated. */
  updatedAt?: Date
  /** Date on which the server was last deleted. */
  deletableAt?: Date
  /** Zone of the server. */
  zone: Zone
}

export type CreateServerRequest = {
  zone?: Zone
  /** Create a server with this given name. */
  name?: string
  /** Create a server in the given project ID. */
  projectId?: string
  /** Create a server of the given type. */
  type: string
}

export type DeleteServerRequest = {
  zone?: Zone
  /** UUID of the server you want to delete. */
  serverId: string
}

export type GetOSRequest = {
  zone?: Zone
  /** UUID of the OS you want to get. */
  osId: string
}

export type GetServerRequest = {
  zone?: Zone
  /** UUID of the server you want to get. */
  serverId: string
}

export type GetServerTypeRequest = {
  zone?: Zone
  /** Server type identifier. */
  serverType: string
}

export type ListOSRequest = {
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
  zone?: Zone
}

export interface ListServerTypesResponse {
  /** Available server types. */
  serverTypes: ServerType[]
}

export type ListServersRequest = {
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
  zone?: Zone
  /** UUID of the server you want to reboot. */
  serverId: string
}

export type ReinstallServerRequest = {
  zone?: Zone
  /** UUID of the server you want to reinstall. */
  serverId: string
}

export type UpdateServerRequest = {
  zone?: Zone
  /** UUID of the server you want to update. */
  serverId: string
  /** Updated name for your server. */
  name?: string
}
