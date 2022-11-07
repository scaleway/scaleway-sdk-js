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

/** List os response */
export interface ListOSResponse {
  /** Total number of os */
  totalCount: number
  /** List of OS */
  os: Array<OS>
}

/** List server types response */
export interface ListServerTypesResponse {
  /** The available server types */
  serverTypes: Array<ServerType>
}

/** List servers response */
export interface ListServersResponse {
  /** The total number of servers */
  totalCount: number
  /** The paginated returned servers */
  servers: Array<Server>
}

/** Os */
export interface OS {
  /** The OS unique ID */
  id: string
  /** The OS name */
  name: string
  /** The OS name as it should be displayed */
  label: string
  /** URL of the image */
  imageUrl: string
  /** List of compatible server types */
  compatibleServerTypes: Array<string>
}

/** Server */
export interface Server {
  /** UUID of the server */
  id: string
  /** Type of the server */
  type: string
  /** Name of the server */
  name: string
  /** Project this server is associated with */
  projectId: string
  /** Organization this server is associated with */
  organizationId: string
  /** IPv4 address of the server */
  ip: string
  /** URL of the VNC */
  vncUrl: string
  /** Current status of the server */
  status: ServerStatus
  /** The date at which the server was created */
  createdAt?: Date
  /** The date at which the server was last updated */
  updatedAt?: Date
  /** The date at which the server was last deleted */
  deletableAt?: Date
  /** The zone of the server */
  zone: Zone
}

/** Server type */
export interface ServerType {
  /** CPU description */
  cpu?: ServerTypeCPU
  /** Size of the local disk of the server */
  disk?: ServerTypeDisk
  /** Name of the type */
  name: string
  /** Size of memory available */
  memory?: ServerTypeMemory
  /** Current stock */
  stock: ServerTypeStock
  /** Minimum duration of the lease in seconds (example. 3.4s). */
  minimumLeaseDuration?: string
}

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

export type ListServerTypesRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
}

export type GetServerTypeRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Server type identifier */
  serverType: string
}

export type CreateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Create a server with this given name */
  name?: string
  /** Create a server in the given project ID */
  projectId?: string
  /** Create a server of the given type */
  type: string
}

export type ListServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The sort order of the returned servers */
  orderBy?: ListServersRequestOrderBy
  /** List only servers of this project ID */
  projectId?: string
  /** List only servers of this organization ID */
  organizationId?: string
  /** A positive integer to choose the page to return */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  pageSize?: number
}

export type ListOSRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** A positive integer to choose the page to return */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return
   */
  pageSize?: number
  /** List of compatible server type */
  serverType?: string
  /**
   * Filter os by name (for eg. "11.1" will return "11.1.2" and "11.1" but not
   * "12")
   */
  name?: string
}

export type GetOSRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the OS you want to get */
  osId: string
}

export type GetServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server you want to get */
  serverId: string
}

export type UpdateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server you want to update */
  serverId: string
  /** Updated name for your server */
  name: string
}

export type DeleteServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server you want to delete */
  serverId: string
}

export type RebootServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server you want to reboot */
  serverId: string
}

export type ReinstallServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** UUID of the server you want to reinstall */
  serverId: string
}
