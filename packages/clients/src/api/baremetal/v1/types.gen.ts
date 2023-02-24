// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, TimeSeries, Zone } from '../../../bridge'

export type IPReverseStatus = 'unknown' | 'pending' | 'active' | 'error'

export type IPVersion = 'IPv4' | 'IPv6'

export type ListServerEventsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListServerPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListServersRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListSettingsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type OfferStock = 'empty' | 'low' | 'available'

export type OfferSubscriptionPeriod =
  | 'unknown_subscription_period'
  | 'hourly'
  | 'monthly'

export type ServerBootType = 'unknown_boot_type' | 'normal' | 'rescue'

export type ServerInstallStatus =
  | 'unknown'
  | 'to_install'
  | 'installing'
  | 'completed'
  | 'error'

export type ServerOptionOptionStatus =
  | 'option_status_unknown'
  | 'option_status_enable'
  | 'option_status_enabling'
  | 'option_status_disabling'
  | 'option_status_error'

export type ServerPingStatus =
  | 'ping_status_unknown'
  | 'ping_status_up'
  | 'ping_status_down'

export type ServerPrivateNetworkStatus =
  | 'unknown'
  | 'attaching'
  | 'attached'
  | 'error'
  | 'detaching'
  | 'locked'

export type ServerStatus =
  | 'unknown'
  | 'delivering'
  | 'ready'
  | 'stopping'
  | 'stopped'
  | 'starting'
  | 'error'
  | 'deleting'
  | 'locked'
  | 'out_of_stock'
  | 'ordered'
  | 'resetting'

export type SettingType = 'unknown' | 'smtp'

/** Bmc access */
export interface BMCAccess {
  /** URL to access to the server console */
  url: string
  /**
   * The login to use for the BMC (Baseboard Management Controller) access
   * authentification
   */
  login: string
  /**
   * The password to use for the BMC (Baseboard Management Controller) access
   * authentification
   */
  password: string
  /**
   * The date after which the BMC (Baseboard Management Controller) access will
   * be closed
   */
  expiresAt?: Date
}

/** Cpu */
export interface CPU {
  /** Name of the CPU */
  name: string
  /** Number of cores of the CPU */
  coreCount: number
  /** Number of threads of the CPU */
  threadCount: number
  /** Frequency of the CPU in MHz */
  frequency: number
  /** Benchmark of the CPU */
  benchmark: string
}

/** Create server request. install */
export interface CreateServerRequestInstall {
  /** ID of the OS to install on the server */
  osId: string
  /** Hostname of the server */
  hostname: string
  /** SSH key IDs authorized on the server */
  sshKeyIds: string[]
  /** User used for the installation */
  user?: string
  /** Password used for the installation */
  password?: string
  /** User used for the service to install */
  serviceUser?: string
  /** Password used for the service to install */
  servicePassword?: string
}

/** Disk */
export interface Disk {
  /** Capacity of the disk in bytes */
  capacity: number
  /** Type of the disk */
  type: string
}

/** Get server metrics response */
export interface GetServerMetricsResponse {
  /** Timeseries of ping on the server */
  pings?: TimeSeries
}

/** Ip */
export interface IP {
  /** ID of the IP */
  id: string
  /** Address of the IP */
  address: string
  /** Reverse IP value */
  reverse: string
  /** Version of IP (v4 or v6) */
  version: IPVersion
  /** Status of the reverse */
  reverseStatus: IPReverseStatus
  /** A message related to the reverse status, in case of an error for example */
  reverseStatusMessage: string
}

/** List os response */
export interface ListOSResponse {
  /** Total count of matching OS */
  totalCount: number
  /** OS that match filters */
  os: OS[]
}

/** List offers response */
export interface ListOffersResponse {
  /** Total count of matching offers */
  totalCount: number
  /** Offers that match filters */
  offers: Offer[]
}

/** List options response */
export interface ListOptionsResponse {
  /** Total count of matching options */
  totalCount: number
  /** Options that match filters */
  options: Option[]
}

/** List server events response */
export interface ListServerEventsResponse {
  /** Total count of matching events */
  totalCount: number
  /** Server events that match filters */
  events: ServerEvent[]
}

export interface ListServerPrivateNetworksResponse {
  serverPrivateNetworks: ServerPrivateNetwork[]
  totalCount: number
}

/** List servers response */
export interface ListServersResponse {
  /** Total count of matching servers */
  totalCount: number
  /** Servers that match filters */
  servers: Server[]
}

/** List settings response */
export interface ListSettingsResponse {
  /** Total count of matching sttings */
  totalCount: number
  /** Settings that match filters */
  settings: Setting[]
}

/** Memory */
export interface Memory {
  /** Capacity of the memory in bytes */
  capacity: number
  /** Type of the memory */
  type: string
  /** Frequency of the memory in MHz */
  frequency: number
  /** True if the memory is an error-correcting code memory */
  isEcc: boolean
}

/** Os */
export interface OS {
  /** ID of the OS */
  id: string
  /** Name of the OS */
  name: string
  /** Version of the OS */
  version: string
  /** URL of this os's logo */
  logoUrl: string
  /** Define the SSH requirements to install the OS */
  ssh?: OSOSField
  /** Define the username requirements to install the OS */
  user?: OSOSField
  /** Define the password requirements to install the OS */
  password?: OSOSField
  /** Define the username requirements to install the service */
  serviceUser?: OSOSField
  /** Define the password requirements to install the service */
  servicePassword?: OSOSField
  /** State of OS */
  enabled: boolean
  /** License required (check server options for pricing details) */
  licenseRequired: boolean
}

export interface OSOSField {
  editable: boolean
  required: boolean
  defaultValue?: string
}

/** Offer */
export interface Offer {
  /** ID of the offer */
  id: string
  /** Name of the offer */
  name: string
  /** Stock level */
  stock: OfferStock
  /** Public Bandwidth available in bits/s with the offer */
  bandwidth: number
  /** Commercial range of the offer */
  commercialRange: string
  /**
   * Price of the offer for the next 60 minutes (a server order at 11h32 will be
   * payed until 12h32)
   */
  pricePerHour?: Money
  /** Price of the offer per months */
  pricePerMonth?: Money
  /** Disks specifications of the offer */
  disks: Disk[]
  /** True if the offer is currently available */
  enable: boolean
  /** CPU specifications of the offer */
  cpus: CPU[]
  /** Memory specifications of the offer */
  memories: Memory[]
  /** Name of the quota associated to the offer */
  quotaName: string
  /** Persistent memory specifications of the offer */
  persistentMemories: PersistentMemory[]
  /** Raid controller specifications of the offer */
  raidControllers: RaidController[]
  /** Array of incompatible OS ids */
  incompatibleOsIds: string[]
  /** Period of subscription for the offer */
  subscriptionPeriod: OfferSubscriptionPeriod
  /** Operation path of the service */
  operationPath: string
  /** Fee to pay on order */
  fee?: Money
  /** Options available on offer */
  options: OfferOptionOffer[]
  /** Private bandwidth available in bits/s with the offer */
  privateBandwidth: number
  /** The offer is shared or not */
  sharedBandwidth: boolean
  /** Array of tags attached to the offer */
  tags: string[]
}

/** Offer. option offer */
export interface OfferOptionOffer {
  /** ID of the option */
  id: string
  /** Name of the option */
  name: string
  /**
   * If true the option is enabled and included by default in the offer If false
   * the option is available for the offer but not included by default
   */
  enabled: boolean
  /** Period of subscription for the offer */
  subscriptionPeriod: OfferSubscriptionPeriod
  /** Price of the option */
  price?: Money
  /** Boolean to know if option could be managed */
  manageable: boolean
  /** ID of the OS linked to the option */
  osId?: string
}

/** Option */
export interface Option {
  /** ID of the option */
  id: string
  /** Name of the option */
  name: string
  /** Is false if the option could not be added or removed */
  manageable: boolean
}

/** Persistent memory */
export interface PersistentMemory {
  /** Capacity of the memory in bytes */
  capacity: number
  /** Type of the memory */
  type: string
  /** Frequency of the memory in MHz */
  frequency: number
}

export interface RaidController {
  model: string
  raidLevel: string[]
}

/** Server */
export interface Server {
  /** ID of the server */
  id: string
  /** Organization ID the server is attached to */
  organizationId: string
  /** Project ID the server is attached to */
  projectId: string
  /** Name of the server */
  name: string
  /** Description of the server */
  description: string
  /** Date of last modification of the server */
  updatedAt?: Date
  /** Date of creation of the server */
  createdAt?: Date
  /** Status of the server */
  status: ServerStatus
  /** Offer ID of the server */
  offerId: string
  /** Offer name of the server */
  offerName: string
  /** Array of customs tags attached to the server */
  tags: string[]
  /** Array of IPs attached to the server */
  ips: IP[]
  /** Domain of the server */
  domain: string
  /** Boot type of the server */
  bootType: ServerBootType
  /** The zone in which is the server */
  zone: Zone
  /** Configuration of installation */
  install?: ServerInstall
  /** Server status of ping */
  pingStatus: ServerPingStatus
  /** Options enabled on server */
  options: ServerOption[]
  /** Configuration of rescue boot */
  rescueServer?: ServerRescueServer
}

/** Server event */
export interface ServerEvent {
  /** ID of the server for whom the action will be applied */
  id: string
  /** The action that will be applied to the server */
  action: string
  /** Date of last modification of the action */
  updatedAt?: Date
  /** Date of creation of the action */
  createdAt?: Date
}

/** Server. install */
export interface ServerInstall {
  /** ID of the OS */
  osId: string
  /** Host defined in the server install */
  hostname: string
  /** SSH public key IDs defined in the server install */
  sshKeyIds: string[]
  /** Status of the server install */
  status: ServerInstallStatus
  /**
   * User defined in the server install or the default one if none were
   * specified
   */
  user: string
  /**
   * Service user defined in the server install or the default one if none were
   * specified
   */
  serviceUser: string
  /** The address of the installed service */
  serviceUrl: string
}

/** Server. option */
export interface ServerOption {
  /** ID of the option */
  id: string
  /** Name of the option */
  name: string
  /** Status of the option */
  status: ServerOptionOptionStatus
  /** Is false if the option could not be added or removed */
  manageable: boolean
  /** Auto expiration date for compatible options */
  expiresAt?: Date
}

/** Server private network */
export interface ServerPrivateNetwork {
  /** The private network ID */
  id: string
  /** The private network project ID */
  projectId: string
  /** The server ID */
  serverId: string
  /** The private network ID */
  privateNetworkId: string
  /** The VLAN ID associated to the private network */
  vlan?: number
  /** The configuration status of the private network */
  status: ServerPrivateNetworkStatus
  /** The private network creation date */
  createdAt?: Date
  /** The date the private network was last modified */
  updatedAt?: Date
}

/** Server. rescue server */
export interface ServerRescueServer {
  /** Rescue user name */
  user: string
  /** Rescue password */
  password: string
}

export interface SetServerPrivateNetworksResponse {
  serverPrivateNetworks: ServerPrivateNetwork[]
}

/** Setting */
export interface Setting {
  /** ID of the setting */
  id: string
  /** Type of the setting */
  type: SettingType
  /** ID of the project ID */
  projectId: string
  /** The setting is enable or disable */
  enabled: boolean
}

export type ListServersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Page number */
  page?: number
  /** Number of server per page */
  pageSize?: number
  /** Order of the servers */
  orderBy?: ListServersRequestOrderBy
  /** Filter by tags */
  tags?: string[]
  /** Filter by status */
  status?: string[]
  /** Filter by name */
  name?: string
  /** Filter by organization ID */
  organizationId?: string
  /** Filter by project ID */
  projectId?: string
  /** Filter by option ID */
  optionId?: string
}

export type GetServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server */
  serverId: string
}

export type CreateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Offer ID of the new server */
  offerId: string
  /**
   * @deprecated Organization ID with which the server will be created.
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Project ID with which the server will be created.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** Name of the server (≠hostname) */
  name: string
  /** Description associated to the server, max 255 characters */
  description: string
  /** Tags to associate to the server */
  tags?: string[]
  /** Configuration of installation */
  install?: CreateServerRequestInstall
  /** IDs of options to enable on server */
  optionIds?: string[]
}

export type UpdateServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server to update */
  serverId: string
  /** Name of the server (≠hostname), not updated if null */
  name?: string
  /**
   * Description associated to the server, max 255 characters, not updated if
   * null
   */
  description?: string
  /** Tags associated to the server, not updated if null */
  tags?: string[]
}

export type InstallServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Server ID to install */
  serverId: string
  /** ID of the OS to install on the server */
  osId: string
  /** Hostname of the server */
  hostname: string
  /** SSH key IDs authorized on the server */
  sshKeyIds: string[]
  /** User used for the installation */
  user?: string
  /** Password used for the installation */
  password?: string
  /** User used for the service to install */
  serviceUser?: string
  /** Password used for the service to install */
  servicePassword?: string
}

export type GetServerMetricsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Server ID to get the metrics */
  serverId: string
}

export type DeleteServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server to delete */
  serverId: string
}

export type RebootServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server to reboot */
  serverId: string
  /** The type of boot */
  bootType?: ServerBootType
}

export type StartServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server to start */
  serverId: string
  /** The type of boot */
  bootType?: ServerBootType
}

export type StopServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server to stop */
  serverId: string
}

export type ListServerEventsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server events searched */
  serverId: string
  /** Page number */
  page?: number
  /** Number of server events per page */
  pageSize?: number
  /** Order of the server events */
  orderBy?: ListServerEventsRequestOrderBy
}

export type StartBMCAccessRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server */
  serverId: string
  /** The IP authorized to connect to the given server */
  ip: string
}

export type GetBMCAccessRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server */
  serverId: string
}

export type StopBMCAccessRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server */
  serverId: string
}

export type UpdateIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server */
  serverId: string
  /** ID of the IP to update */
  ipId: string
  /** New reverse IP to update, not updated if null */
  reverse?: string
}

export type AddOptionServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server */
  serverId: string
  /** ID of the option to add */
  optionId: string
  /** Auto expire the option after this date */
  expiresAt?: Date
}

export type DeleteOptionServerRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the server */
  serverId: string
  /** ID of the option to delete */
  optionId: string
}

export type ListOffersRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Page number */
  page?: number
  /** Number of offers per page */
  pageSize?: number
  /** Period of subscription to filter offers */
  subscriptionPeriod?: OfferSubscriptionPeriod
}

export type GetOfferRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the researched Offer */
  offerId: string
}

export type GetOptionRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the option */
  optionId: string
}

export type ListOptionsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Page number */
  page?: number
  /** Number of options per page */
  pageSize?: number
  /** Filter options by offer_id */
  offerId?: string
  /** Filter options by name */
  name?: string
}

export type ListSettingsRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Page number */
  page?: number
  /** Set the maximum list size */
  pageSize?: number
  /** Order the response */
  orderBy?: ListSettingsRequestOrderBy
  /** ID of the project */
  projectId?: string
}

export type UpdateSettingRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the setting */
  settingId: string
  /** Enable/Disable the setting */
  enabled?: boolean
}

export type ListOSRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** Page number */
  page?: number
  /** Number of OS per page */
  pageSize?: number
  /** Filter OS by offer ID */
  offerId?: string
}

export type GetOSRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** ID of the OS */
  osId: string
}

export type PrivateNetworkApiAddServerPrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The ID of the server */
  serverId: string
  /** The ID of the private network */
  privateNetworkId: string
}

export type PrivateNetworkApiSetServerPrivateNetworksRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The ID of the server */
  serverId: string
  /** The IDs of the private networks */
  privateNetworkIds: string[]
}

export type PrivateNetworkApiListServerPrivateNetworksRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The sort order for the returned private networks */
  orderBy?: ListServerPrivateNetworksRequestOrderBy
  /** The page number for the returned private networks */
  page?: number
  /** The maximum number of private networks per page */
  pageSize?: number
  /** Filter private networks by server ID */
  serverId?: string
  /** Filter private networks by private network ID */
  privateNetworkId?: string
  /** Filter private networks by organization ID */
  organizationId?: string
  /** Filter private networks by project ID */
  projectId?: string
}

export type PrivateNetworkApiDeleteServerPrivateNetworkRequest = {
  /** Zone to target. If none is passed will use default zone from the config */
  zone?: Zone
  /** The ID of the server */
  serverId: string
  /** The ID of the private network */
  privateNetworkId: string
}
