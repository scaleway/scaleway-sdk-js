// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type CommitmentPeriod =
  | 'unknown_period'
  | 'one_month'
  | 'six_months'
  | 'one_year'
  | 'two_years'
  | 'three_years'

export type IPReverseStatus =
  | 'unknown'
  | 'pending'
  | 'active'
  | 'error'

export type IPVersion =
  | 'IPv4'
  | 'IPv6'

export type ListServerEventsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListServerPrivateNetworksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListServersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListSettingsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type MemoryEccType =
  | 'unknown_ecc_type'
  | 'none'
  | 'standard'
  | 'on_die'

export type OfferStock =
  | 'empty'
  | 'low'
  | 'available'

export type OfferSubscriptionPeriod =
  | 'unknown_subscription_period'
  | 'hourly'
  | 'monthly'

export type SchemaFilesystemFormat =
  | 'unknown_format'
  | 'fat32'
  | 'ext4'
  | 'swap'
  | 'zfs'
  | 'xfs'

export type SchemaPartitionLabel =
  | 'unknown_partition_label'
  | 'uefi'
  | 'legacy'
  | 'root'
  | 'boot'
  | 'swap'
  | 'data'
  | 'home'
  | 'raid'
  | 'zfs'

export type SchemaPoolType =
  | 'unknown_type'
  | 'no_raid'
  | 'mirror'
  | 'raidz1'
  | 'raidz2'

export type SchemaRAIDLevel =
  | 'unknown_raid_level'
  | 'raid_level_0'
  | 'raid_level_1'
  | 'raid_level_5'
  | 'raid_level_6'
  | 'raid_level_10'

export type ServerBootType =
  | 'unknown_boot_type'
  | 'normal'
  | 'rescue'

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
  | 'migrating'

export type SettingType =
  | 'unknown'
  | 'smtp'

export interface SchemaPartition {
  label: SchemaPartitionLabel
  number: number
  size: number
  useAllAvailableSpace: boolean
}


export interface SchemaPool {
  name: string
  type: SchemaPoolType
  devices: string[]
  options: string[]
  filesystemOptions: string[]
}


export interface SchemaDisk {
  device: string
  partitions: SchemaPartition[]
}


export interface SchemaFilesystem {
  device: string
  format: SchemaFilesystemFormat
  mountpoint: string
}


export interface SchemaRAID {
  name: string
  level: SchemaRAIDLevel
  devices: string[]
}


export interface SchemaZFS {
  pools: SchemaPool[]
}


export interface Schema {
  disks: SchemaDisk[]
  raids: SchemaRAID[]
  filesystems: SchemaFilesystem[]
  zfs?: SchemaZFS | null
}


export interface CertificationOption {
}


export interface LicenseOption {
  osId: string
}


export interface PrivateNetworkOption {
  bandwidthInBps: number
}


export interface PublicBandwidthOption {
  bandwidthInBps: number
}


export interface RemoteAccessOption {
}


export interface CreateServerRequestInstall {
  /**
   * ID of the OS to installation on the server.
   */
  osId: string
  /**
   * Hostname of the server.
   */
  hostname: string
  /**
   * SSH key IDs authorized on the server.
   */
  sshKeyIds: string[]
  /**
   * User for the installation.
   */
  user?: string | null
  /**
   * Password for the installation.
   */
  password?: string | null
  /**
   * Regular user that runs the service to be installed on the server.
   */
  serviceUser?: string | null
  /**
   * Password used for the service to install.
   */
  servicePassword?: string | null
  /**
   * Partitioning schema.
   */
  partitioningSchema?: Schema | null
  /**
   * URL of the network service to which the server should forward its boot request.
   */
  networkBootUrl?: string | null
  /**
   * Defines whether the network boot forwarding should be applied at every reboot or only once.
   */
  networkBootPersistent?: boolean | null
}


export interface IP {
  /**
   * ID of the IP.
   */
  id: string
  /**
   * Address of the IP.
   */
  address: string
  /**
   * Reverse IP value.
   */
  reverse: string
  /**
   * Version of IP (v4 or v6).
   */
  version: IPVersion
  /**
   * Status of the reverse.
   */
  reverseStatus: IPReverseStatus
  /**
   * A message related to the reverse status, e.g. in case of an error.
   */
  reverseStatusMessage: string
}


export interface ServerCommitment {
  /**
   * Commitment period subscribed.
   */
  period: CommitmentPeriod
  /**
   * Start of commitment subscribed.
   */
  startedAt?: Date | null
  /**
   * Next renew of commitment subscribed.
   */
  renewAt?: Date | null
  /**
   * End of commitment subscribed.
   */
  endAt?: Date | null
  /**
   * Discount rate for the commitment period.
   */
  discountRatePercent: number
  /**
   * Flag for automatic renewal commitment.
   */
  autoRenewal: boolean
}


export interface ServerInstall {
  /**
   * ID of the OS.
   */
  osId: string
  /**
   * Host defined during the server installation.
   */
  hostname: string
  /**
   * SSH public key IDs defined during server installation.
   */
  sshKeyIds: string[]
  /**
   * Status of the server installation.
   */
  status: ServerInstallStatus
  /**
   * User defined in the server installation, or the default user if none were specified.
   */
  user: string
  /**
   * Service user defined in the server installation, or the default user if none were specified.
   */
  serviceUser: string
  /**
   * Address of the installed service.
   */
  serviceUrl: string
  /**
   * Partitioning schema.
   */
  partitioningSchema?: Schema | null
  /**
   * URL of the network service to which the server should forward its boot request.
   */
  networkBootUrl: string
  /**
   * Defines whether the network boot forwarding should be applied at every reboot or only once.
   */
  networkBootPersistent: boolean
}


export interface ServerOption {
  /**
   * ID of the option.
   */
  id: string
  /**
   * Name of the option.
   */
  name: string
  /**
   * Status of the option on this server.
   */
  status: ServerOptionOptionStatus
  /**
   * Defines whether the option can be managed (added or removed).
   */
  manageable: boolean
  /**
   * Auto expiration date for compatible options.
   */
  expiresAt?: Date | null
  /**
   * License option, contains the ID of the OS linked to the option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  license?: LicenseOption | null
  /**
   * Public_bandwidth option, contains the bandwidth_in_bps.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  publicBandwidth?: PublicBandwidthOption | null
  /**
   * Private_network option, contains the bandwidth_in_bps.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  privateNetwork?: PrivateNetworkOption | null
  /**
   * Remote_access option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  remoteAccess?: RemoteAccessOption | null
  /**
   * Certification option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  certification?: CertificationOption | null
}


export interface ServerRescueServer {
  /**
   * Rescue user name.
   */
  user: string
  /**
   * Rescue password.
   */
  password: string
}


export interface OSOSField {
  editable: boolean
  required: boolean
  defaultValue?: string | null
}


export interface CPU {
  /**
   * Name of the CPU.
   */
  name: string
  /**
   * Number of CPU cores.
   */
  coreCount: number
  /**
   * Number CPU threads.
   */
  threadCount: number
  /**
   * Frequency of the CPU in MHz.
   */
  frequency: number
  /**
   * Benchmark of the CPU.
   */
  benchmark: string
}


export interface Disk {
  /**
   * Capacity of the disk in bytes.
   */
  capacity: number
  /**
   * Type of the disk.
   */
  type: string
}


export interface GPU {
  /**
   * Name of the GPU.
   */
  name: string
  /**
   * Capacity of the vram in bytes.
   */
  vram: number
}


export interface Memory {
  /**
   * Capacity of the memory in bytes.
   */
  capacity: number
  /**
   * Type of the memory.
   */
  type: string
  /**
   * Frequency of the memory in MHz.
   */
  frequency: number
  /**
   * True if the memory is an error-correcting code memory.
   */
  isEcc: boolean
  /**
   * Type of ECC memory.
   */
  eccType: MemoryEccType
}


export interface OfferCommitment {
  /**
   * Commitment period.
   */
  period: CommitmentPeriod
  /**
   * Discount rate for the commitment period.
   */
  discountRatePercent: number
  /**
   * Fee not mandatory.
   */
  noFee: boolean
}


export interface OfferOptionOffer {
  /**
   * ID of the option.
   */
  id: string
  /**
   * Name of the option.
   */
  name: string
  /**
   * If true the option is enabled and included by default in the offer
If false the option is available for the offer but not included by default.
   */
  enabled: boolean
  /**
   * Period of subscription for the offer.
   */
  subscriptionPeriod: OfferSubscriptionPeriod
  /**
   * Price of the option.
   */
  price?: Money | null
  /**
   * Boolean to know if option could be managed.
   */
  manageable: boolean
  /**
   * @deprecated Deprecated, use LicenseOptionVars.os_id instead.
   */
  osId?: string | null
  /**
   * License option, contains the ID of the OS linked to the option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  license?: LicenseOption | null
  /**
   * Public_bandwidth option, contains the bandwidth_in_bps.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  publicBandwidth?: PublicBandwidthOption | null
  /**
   * Private_network option, contains the bandwidth_in_bps.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  privateNetwork?: PrivateNetworkOption | null
  /**
   * Remote_access option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  remoteAccess?: RemoteAccessOption | null
  /**
   * Certification option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  certification?: CertificationOption | null
}


export interface PersistentMemory {
  /**
   * Capacity of the memory in bytes.
   */
  capacity: number
  /**
   * Type of the memory.
   */
  type: string
  /**
   * Frequency of the memory in MHz.
   */
  frequency: number
}


export interface RaidController {
  model: string
  raidLevel: string[]
}


export interface BatchCreateServersRequestServerConfig {
  hostname: string
  description: string
  tags: string[]
}


export type CreateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Offer ID of the new server.
   */
  offerId: string
  /**
   * @deprecated Organization ID with which the server will be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string | null
  /**
   * Project ID with which the server will be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string | null
  /**
   * Name of the server (≠hostname).
   */
  name: string
  /**
   * Description associated with the server, max 255 characters.
   */
  description: string
  /**
   * Tags to associate to the server.
   */
  tags?: string[] | null
  /**
   * Object describing the configuration details of the OS installation on the server.
   */
  install?: CreateServerRequestInstall | null
  /**
   * IDs of options to enable on server.
   */
  optionIds?: string[] | null
  /**
   * If enabled, the server can not be deleted.
   */
  protected: boolean
  /**
   * Configuration data to pass to cloud-init such as a YAML cloud config data or a user-data script.
   */
  userData?: string | null
  /**
   * Commitment period to subscribe.
   */
  commitmentPeriod?: CommitmentPeriod | null
}


export interface Server {
  /**
   * ID of the server.
   */
  id: string
  /**
   * Organization ID the server is attached to.
   */
  organizationId: string
  /**
   * Project ID the server is attached to.
   */
  projectId: string
  /**
   * Name of the server.
   */
  name: string
  /**
   * Description of the server.
   */
  description: string
  /**
   * Last modification date of the server.
   */
  updatedAt?: Date | null
  /**
   * Creation date of the server.
   */
  createdAt?: Date | null
  /**
   * Status of the server.
   */
  status: ServerStatus
  /**
   * Offer ID of the server.
   */
  offerId: string
  /**
   * Offer name of the server.
   */
  offerName: string
  /**
   * Array of custom tags attached to the server.
   */
  tags: string[]
  /**
   * Array of IPs attached to the server.
   */
  ips: IP[]
  /**
   * Domain of the server.
   */
  domain: string
  /**
   * Boot type of the server.
   */
  bootType: ServerBootType
  /**
   * Zone in which is the server located.
   */
  zone: ScwZone
  /**
   * Configuration of the installation.
   */
  install?: ServerInstall | null
  /**
   * Status of server ping.
   */
  pingStatus: ServerPingStatus
  /**
   * Options enabled on the server.
   */
  options: ServerOption[]
  /**
   * Configuration of rescue boot.
   */
  rescueServer?: ServerRescueServer | null
  /**
   * If enabled, the server can not be deleted.
   */
  protected: boolean
  /**
   * Optional configuration data passed to cloud-init.
   */
  userData?: string | null
  /**
   * Commitment subscribed for the server.
   */
  commitment?: ServerCommitment | null
  /**
   * Date on which the server will be deleted.
   */
  scheduledDeletionAt?: Date | null
  /**
   * True if a deletion is scheduled.
   */
  scheduledDeletion: boolean
  /**
   * The SRN of the server.
   */
  srn: string
}


export interface OS {
  /**
   * ID of the OS.
   */
  id: string
  /**
   * Name of the OS.
   */
  name: string
  /**
   * Version of the OS.
   */
  version: string
  /**
   * URL of this OS's logo.
   */
  logoUrl: string
  /**
   * Object defining the SSH requirements to install the OS.
   */
  ssh?: OSOSField | null
  /**
   * Object defining the username requirements to install the OS.
   */
  user?: OSOSField | null
  /**
   * Object defining the password requirements to install the OS.
   */
  password?: OSOSField | null
  /**
   * Object defining the username requirements to install the service.
   */
  serviceUser?: OSOSField | null
  /**
   * Object defining the password requirements to install the service.
   */
  servicePassword?: OSOSField | null
  /**
   * Defines if the operating system is enabled or not.
   */
  enabled: boolean
  /**
   * License required (check server options for pricing details).
   */
  licenseRequired: boolean
  /**
   * Defines if a specific Organization is allowed to install this OS type.
   */
  allowed: boolean
  /**
   * Defines if custom partitioning is supported by this OS.
   */
  customPartitioningSupported: boolean
  /**
   * Defines if cloud-init is supported by this OS.
   */
  cloudInitSupported: boolean
  /**
   * Defines the cloud-init API version used by this OS.
   */
  cloudInitVersion?: string | null
  /**
   * Object defining the network boot requirements for booting server.
   */
  networkBoot?: OSOSField | null
  /**
   * Defines if the network boot can be persisted or not.
   */
  networkBootPersistentEditable: boolean
  /**
   * Zone in which is the OS is available.
   */
  zone: ScwZone
  /**
   * The SRN of the OS.
   */
  srn: string
}


export interface Offer {
  /**
   * ID of the offer.
   */
  id: string
  /**
   * Name of the offer.
   */
  name: string
  /**
   * Stock level.
   */
  stock: OfferStock
  /**
   * Public bandwidth available (in bits/s) with the offer.
   */
  bandwidth: number
  /**
   * Maximum public bandwidth available (in bits/s) depending on available options.
   */
  maxBandwidth: number
  /**
   * Commercial range of the offer.
   */
  commercialRange: string
  /**
   * Price of the offer for the next 60 minutes (a server order at 11h32 will be paid until 12h32).
   */
  pricePerHour?: Money | null
  /**
   * Monthly price of the offer, if subscribing on a monthly basis.
   */
  pricePerMonth?: Money | null
  /**
   * Disks specifications of the offer.
   */
  disks: Disk[]
  /**
   * Defines whether the offer is currently available.
   */
  enable: boolean
  /**
   * CPU specifications of the offer.
   */
  cpus: CPU[]
  /**
   * Memory specifications of the offer.
   */
  memories: Memory[]
  /**
   * Name of the quota associated to the offer.
   */
  quotaName: string
  /**
   * Persistent memory specifications of the offer.
   */
  persistentMemories: PersistentMemory[]
  /**
   * Raid controller specifications of the offer.
   */
  raidControllers: RaidController[]
  /**
   * Array of OS images IDs incompatible with the server.
   */
  incompatibleOsIds: string[]
  /**
   * Period of subscription for the offer.
   */
  subscriptionPeriod: OfferSubscriptionPeriod
  /**
   * Operation path of the service.
   */
  operationPath: string
  /**
   * One time fee invoiced by Scaleway for the setup and activation of the server.
   */
  fee?: Money | null
  /**
   * Available options for customization of the server.
   */
  options: OfferOptionOffer[]
  /**
   * Private bandwidth available in bits/s with the offer.
   */
  privateBandwidth: number
  /**
   * Defines whether the offer's bandwidth is shared or not.
   */
  sharedBandwidth: boolean
  /**
   * Array of tags attached to the offer.
   */
  tags: string[]
  /**
   * GPU specifications of the offer.
   */
  gpus: GPU[]
  /**
   * Exist only for hourly offers, to migrate to the monthly offer.
   */
  monthlyOfferId?: string | null
  /**
   * List all available commitments on the offer.
   */
  commitmentsAvailable: OfferCommitment[]
  /**
   * Zone in which is the offer is available.
   */
  zone: ScwZone
  /**
   * Describe the network topology of the offer.
   */
  dualAttach?: boolean | null
  /**
   * The SRN of the offer.
   */
  srn: string
}


export interface Option {
  /**
   * ID of the option.
   */
  id: string
  /**
   * Name of the option.
   */
  name: string
  /**
   * Defines whether the option is manageable (could be added or removed).
   */
  manageable: boolean
  /**
   * License option, contains the ID of the OS linked to the option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  license?: LicenseOption | null
  /**
   * Public_bandwidth option, contains the bandwidth_in_bps.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  publicBandwidth?: PublicBandwidthOption | null
  /**
   * Private_network option, contains the bandwidth_in_bps.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  privateNetwork?: PrivateNetworkOption | null
  /**
   * Remote_access option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  remoteAccess?: RemoteAccessOption | null
  /**
   * Certification option.
   *
   * One-of ('option'): at most one of 'license', 'publicBandwidth', 'privateNetwork', 'remoteAccess', 'certification' could be set.
   */
  certification?: CertificationOption | null
  /**
   * Zone in which is the option is available.
   */
  zone: ScwZone
  /**
   * The SRN of the option.
   */
  srn: string
}


export interface ServerEvent {
  /**
   * ID of the server to which the action will be applied.
   */
  id: string
  /**
   * The action that will be applied to the server.
   */
  action: string
  /**
   * Date of last modification of the action.
   */
  updatedAt?: Date | null
  /**
   * Date of creation of the action.
   */
  createdAt?: Date | null
}


export interface ServerPrivateNetwork {
  /**
   * The Private Network ID.
   */
  id: string
  /**
   * The Private Network Project ID.
   */
  projectId: string
  /**
   * The server ID.
   */
  serverId: string
  /**
   * The Private Network ID.
   */
  privateNetworkId: string
  /**
   * The VLAN ID associated to the Private Network.
   */
  vlan?: number | null
  /**
   * The configuration status of the Private Network.
   */
  status: ServerPrivateNetworkStatus
  /**
   * The Private Network creation date.
   */
  createdAt?: Date | null
  /**
   * The date the Private Network was last modified.
   */
  updatedAt?: Date | null
}


export interface Setting {
  /**
   * ID of the setting.
   */
  id: string
  /**
   * Type of the setting.
   */
  type: SettingType
  /**
   * ID of the Project ID.
   */
  projectId: string
  /**
   * Defines whether the setting is enabled.
   */
  enabled: boolean
  /**
   * Zone in which is the setting is located.
   */
  zone: ScwZone
  /**
   * The SRN of the setting.
   */
  srn: string
}


export type AddOptionServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * ID of the option to add.
   */
  optionId: string
  /**
   * Auto expire the option after this date.
   */
  expiresAt?: Date | null
}


export interface BMCAccess {
  /**
   * URL to access to the server console.
   */
  url: string
  /**
   * The login to use for the BMC (Baseboard Management Controller) access authentication.
   */
  login: string
  /**
   * The password to use for the BMC (Baseboard Management Controller) access authentication.
   */
  password: string
  /**
   * The date after which the BMC (Baseboard Management Controller) access will be closed.
   */
  expiresAt?: Date | null
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * Zone in which the server is located.
   */
  zone: ScwZone
  /**
   * The SRN of the BMC access.
   */
  srn: string
}


export type BatchCreateServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Configuration wanted for the servers to create.
   */
  commonConfiguration?: CreateServerRequest | null
  /**
   * List of servers to create.
   */
  servers?: BatchCreateServersRequestServerConfig[] | null
}


export interface BatchCreateServersResponse {
  servers: Server[]
}


export type DeleteOptionServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * ID of the option to delete.
   */
  optionId: string
}


export type DeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to delete.
   */
  serverId: string
}


export type GetBMCAccessRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server.
   */
  serverId: string
}


export type GetDefaultPartitioningSchemaRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the offer.
   */
  offerId: string
  /**
   * ID of the OS.
   */
  osId: string
}


export type GetOSRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the OS.
   */
  osId: string
}


export type GetOfferRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the researched Offer.
   */
  offerId: string
}


export type GetOptionRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the option.
   */
  optionId: string
}


export type GetServerMetricsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Server ID to get the metrics.
   */
  serverId: string
}


export interface GetServerMetricsResponse {
  /**
   * Timeseries object representing pings on the server.
   */
  pings?: TimeSeries | null
}


export type GetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server.
   */
  serverId: string
}


export type InstallServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Server ID to install.
   */
  serverId: string
  /**
   * ID of the OS to installation on the server.
   */
  osId: string
  /**
   * Hostname of the server.
   */
  hostname: string
  /**
   * SSH key IDs authorized on the server.
   */
  sshKeyIds: string[]
  /**
   * User used for the installation.
   */
  user?: string | null
  /**
   * Password used for the installation.
   */
  password?: string | null
  /**
   * User used for the service to install.
   */
  serviceUser?: string | null
  /**
   * Password used for the service to install.
   */
  servicePassword?: string | null
  /**
   * Partitioning schema.
   */
  partitioningSchema?: Schema | null
  /**
   * @deprecated Configuration data to pass to cloud-init such as a YAML cloud config data or a user-data script.
   */
  userData?: Blob | null
  /**
   * URL of the network service to which the server should forward its boot request.
   */
  networkBootUrl?: string | null
  /**
   * Defines whether the network boot forwarding should be applied at every reboot or only once.
   */
  networkBootPersistent?: boolean | null
}


export type ListOSRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of OS per page.
   */
  pageSize?: number | null
  /**
   * Offer IDs to filter OSes for.
   */
  offerId?: string | null
}


export interface ListOSResponse {
  /**
   * Total count of matching OS.
   */
  totalCount: number
  /**
   * OS that match filters.
   */
  os: OS[]
}


export type ListOffersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of offers per page.
   */
  pageSize?: number | null
  /**
   * Subscription period type to filter offers by.
   */
  subscriptionPeriod?: OfferSubscriptionPeriod | null
  /**
   * Offer name to filter offers by.
   */
  name?: string | null
}


export interface ListOffersResponse {
  /**
   * Total count of matching offers.
   */
  totalCount: number
  /**
   * Offers that match filters.
   */
  offers: Offer[]
}


export type ListOptionsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of options per page.
   */
  pageSize?: number | null
  /**
   * Offer ID to filter options for.
   */
  offerId?: string | null
  /**
   * Name to filter options for.
   */
  name?: string | null
}


export interface ListOptionsResponse {
  /**
   * Total count of matching options.
   */
  totalCount: number
  /**
   * Options that match filters.
   */
  options: Option[]
}


export type ListServerEventsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server events searched.
   */
  serverId: string
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of server events per page.
   */
  pageSize?: number | null
  /**
   * Order of the server events.
   */
  orderBy?: ListServerEventsRequestOrderBy | null
}


export interface ListServerEventsResponse {
  /**
   * Total count of matching events.
   */
  totalCount: number
  /**
   * Server events that match filters.
   */
  events: ServerEvent[]
}


export interface ListServerPrivateNetworksResponse {
  serverPrivateNetworks: ServerPrivateNetwork[]
  totalCount: number
}


export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Number of servers per page.
   */
  pageSize?: number | null
  /**
   * Order of the servers.
   */
  orderBy?: ListServersRequestOrderBy | null
  /**
   * Tags to filter for.
   */
  tags?: string[] | null
  /**
   * Status to filter for.
   */
  status?: string[] | null
  /**
   * Names to filter for.
   */
  name?: string | null
  /**
   * Organization ID to filter for.
   */
  organizationId?: string | null
  /**
   * Project ID to filter for.
   */
  projectId?: string | null
  /**
   * Option ID to filter for.
   */
  optionId?: string | null
}


export interface ListServersResponse {
  /**
   * Total count of matching servers.
   */
  totalCount: number
  /**
   * Array of Elastic Metal server objects matching the filters in the request.
   */
  servers: Server[]
}


export type ListSettingsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Page number.
   */
  page?: number | null
  /**
   * Set the maximum list size.
   */
  pageSize?: number | null
  /**
   * Sort order for items in the response.
   */
  orderBy?: ListSettingsRequestOrderBy | null
  /**
   * ID of the Project.
   */
  projectId?: string | null
}


export interface ListSettingsResponse {
  /**
   * Total count of matching settings.
   */
  totalCount: number
  /**
   * Settings that match filters.
   */
  settings: Setting[]
}


export type MigrateServerToMonthlyOfferRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server.
   */
  serverId: string
}


export type PrivateNetworkApiAddServerPrivateNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The ID of the Private Network.
   */
  privateNetworkId: string
}


export type PrivateNetworkApiDeleteServerPrivateNetworkRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The ID of the Private Network.
   */
  privateNetworkId: string
}


export type PrivateNetworkApiListServerPrivateNetworksRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The sort order for the returned Private Networks.
   */
  orderBy?: ListServerPrivateNetworksRequestOrderBy | null
  /**
   * The page number for the returned Private Networks.
   */
  page?: number | null
  /**
   * The maximum number of Private Networks per page.
   */
  pageSize?: number | null
  /**
   * Filter Private Networks by server ID.
   */
  serverId?: string | null
  /**
   * Filter Private Networks by Private Network ID.
   */
  privateNetworkId?: string | null
  /**
   * Filter Private Networks by Organization ID.
   */
  organizationId?: string | null
  /**
   * Filter Private Networks by Project ID.
   */
  projectId?: string | null
}


export type PrivateNetworkApiSetServerPrivateNetworksRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * The ID of the server.
   */
  serverId: string
  /**
   * The IDs of the Private Networks.
   */
  privateNetworkIds: string[]
}


export type RebootServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to reboot.
   */
  serverId: string
  /**
   * The type of boot.
   */
  bootType?: ServerBootType | null
  /**
   * Additional SSH public key IDs to configure on rescue image.
   */
  sshKeyIds?: string[] | null
}


export interface SetServerPrivateNetworksResponse {
  serverPrivateNetworks: ServerPrivateNetwork[]
}


export type StartBMCAccessRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * The IP authorized to connect to the server.
   */
  ip: string
}


export type StartServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to start.
   */
  serverId: string
  /**
   * The type of boot.
   */
  bootType?: ServerBootType | null
  /**
   * Additional SSH public key IDs to configure on rescue image.
   */
  sshKeyIds?: string[] | null
}


export type StopBMCAccessRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server.
   */
  serverId: string
}


export type StopServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to stop.
   */
  serverId: string
}


export type UpdateIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * ID of the IP to update.
   */
  ipId: string
  /**
   * New reverse IP to update, not updated if null.
   */
  reverse?: string | null
}


export type UpdateServerCommitmentRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  serverId: string
  autoRenewal: boolean
}


export type UpdateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the server to update.
   */
  serverId: string
  /**
   * Name of the server (≠hostname), not updated if null.
   */
  name?: string | null
  /**
   * Description associated with the server, max 255 characters, not updated if null.
   */
  description?: string | null
  /**
   * Tags associated with the server, not updated if null.
   */
  tags?: string[] | null
  /**
   * If enabled, the server can not be deleted.
   */
  protected?: boolean | null
  /**
   * Configuration data to pass to cloud-init such as a YAML cloud config data or a user-data script.
   */
  userData?: string | null
  /**
   * Set false to cancel the scheduled deletion of the server.
   */
  scheduledDeletion?: boolean | null
}


export type UpdateSettingRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * ID of the setting.
   */
  settingId: string
  /**
   * Defines whether the setting is enabled.
   */
  enabled?: boolean | null
}


export type UpgradeServerCommitmentRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  serverId: string
  period?: CommitmentPeriod | null
}


export type ValidatePartitioningSchemaRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Partitioning schema.
   */
  partitioningSchema?: Schema | null
  /**
   * Offer ID of the server.
   */
  offerId: string
  /**
   * OS ID.
   */
  osId: string
}


