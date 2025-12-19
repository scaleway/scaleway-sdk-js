// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Zone as ScwZone} from '@scaleway/sdk-client'


export type AttachFailoverIPToMacAddressRequestMacType =
  | 'mac_type_unknown'
  | 'vmware'
  | 'kvm'
  | 'xen'

export type BMCAccessStatus =
  | 'unknown'
  | 'creating'
  | 'created'
  | 'deleting'

export type BackupStatus =
  | 'unknown_backup_status'
  | 'uninitialized'
  | 'inactive'
  | 'ready'

export type FailoverBlockVersion =
  | 'unknown_version'
  | 'ipv4'
  | 'ipv6'

export type FailoverIPInterfaceType =
  | 'unknown'
  | 'normal'
  | 'ipmi'
  | 'virtual'

export type FailoverIPStatus =
  | 'unknown_status'
  | 'ready'
  | 'busy'
  | 'locked'

export type FailoverIPVersion =
  | 'unknown_version'
  | 'ipv4'
  | 'ipv6'

export type GetRpnStatusResponseStatus =
  | 'unknown_status'
  | 'busy'
  | 'operational'

export type IPSemantic =
  | 'unknown'
  | 'proxad'
  | 'ext'
  | 'public'
  | 'private'
  | 'ipmi'
  | 'adm'
  | 'redirect'
  | 'migration'

export type IPStatus =
  | 'unknown_status'
  | 'ready'
  | 'busy'
  | 'locked'

export type IPVersion =
  | 'ipv4'
  | 'ipv6'

export type IPv6BlockDelegationStatus =
  | 'unknown_status'
  | 'updating'
  | 'done'

export type InvoicePaymentMethod =
  | 'unknown_payment_method'
  | 'credit_card'
  | 'amex'
  | 'paypal'
  | 'transfer'
  | 'direct_debit'

export type InvoiceStatus =
  | 'unknown_invoice_status'
  | 'unpaid'
  | 'paid'
  | 'errored'

export type ListFailoverIPsRequestOrderBy =
  | 'ip_asc'
  | 'ip_desc'

export type ListInvoicesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListOSRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'released_at_asc'
  | 'released_at_desc'

export type ListOffersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'price_asc'
  | 'price_desc'

export type ListRefundsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnCapableSanServersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnCapableServersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnGroupMembersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnGroupsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnInvitesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnSansRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnServerCapabilitiesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnV2CapableResourcesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnV2GroupLogsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnV2GroupsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnV2MembersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListRpnV2MembersRequestType =
  | 'unknown_type'
  | 'rpnv1_group'
  | 'server'

export type ListServerDisksRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListServerEventsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListServersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type ListServicesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type LogAction =
  | 'unknown_log_action'
  | 'group_created'
  | 'group_deleted'
  | 'members_added'
  | 'members_deleted'
  | 'description_updated'
  | 'rpnv1_members_added'
  | 'rpnv1_members_deleted'
  | 'vlan_updated'
  | 'vlan_updated_on_all_servers'

export type LogStatus =
  | 'unknown_log_status'
  | 'success'
  | 'in_progress'
  | 'error'

export type MemoryType =
  | 'ddr2'
  | 'ddr3'
  | 'ddr4'
  | 'ddr5'

export type NetworkInterfaceInterfaceType =
  | 'unknown'
  | 'normal'
  | 'ipmi'
  | 'virtual'

export type OSArch =
  | 'unknown_arch'
  | 'amd64'
  | 'x86'
  | 'arm'
  | 'arm64'

export type OSType =
  | 'unknown_type'
  | 'server'
  | 'virtu'
  | 'panel'
  | 'desktop'
  | 'custom'
  | 'rescue'

export type OfferAntiDosInfoType =
  | 'minimal'
  | 'preventive'
  | 'curative'

export type OfferCatalog =
  | 'all'
  | 'default'
  | 'beta'
  | 'reseller'
  | 'premium'
  | 'volume'
  | 'admin'
  | 'inactive'

export type OfferPaymentFrequency =
  | 'monthly'
  | 'oneshot'

export type OfferSANInfoType =
  | 'hdd'
  | 'ssd'

export type OfferServerInfoStock =
  | 'empty'
  | 'low'
  | 'available'

export type PartitionFileSystem =
  | 'unknown'
  | 'efi'
  | 'swap'
  | 'ext4'
  | 'ext3'
  | 'ext2'
  | 'xfs'
  | 'ntfs'
  | 'fat32'
  | 'ufs'

export type PartitionType =
  | 'primary'
  | 'extended'
  | 'logical'

export type RaidArrayRaidLevel =
  | 'no_raid'
  | 'raid0'
  | 'raid1'
  | 'raid5'
  | 'raid6'
  | 'raid10'

export type RefundMethod =
  | 'unknown_refund_method'
  | 'credit_card'
  | 'amex'
  | 'paypal'
  | 'transfer'

export type RefundStatus =
  | 'unknown_refund_status'
  | 'unpaid'
  | 'paid'
  | 'errored'

export type RescueProtocol =
  | 'vnc'
  | 'ssh'

export type RpnGroupMemberStatus =
  | 'unknown_rpn_member_status'
  | 'pending_invitation'
  | 'active'
  | 'creating'
  | 'deleting'
  | 'deleted'

export type RpnGroupType =
  | 'unknown'
  | 'local'
  | 'shared'

export type RpnSanIpType =
  | 'unknown'
  | 'server_ip'
  | 'rpnv2_subnet'

export type RpnSanStatus =
  | 'unknown_status'
  | 'creating'
  | 'active'
  | 'deleting'
  | 'maintenance'

export type RpnV2GroupStatus =
  | 'unknown_group_status'
  | 'creating'
  | 'active'
  | 'updating'
  | 'deleting'

export type RpnV2GroupType =
  | 'unknown_type'
  | 'standard'
  | 'qinq'

export type RpnV2MemberStatus =
  | 'unknown_member_status'
  | 'creating'
  | 'active'
  | 'updating'
  | 'deleting'

export type ServerDiskType =
  | 'sata'
  | 'ssd'
  | 'sas'
  | 'sshd'
  | 'usb'
  | 'nvme'

export type ServerInstallStatus =
  | 'unknown'
  | 'booting'
  | 'setting_up_raid'
  | 'partitioning'
  | 'formatting'
  | 'installing'
  | 'configuring'
  | 'configuring_bootloader'
  | 'rebooting'
  | 'installed'

export type ServerStatus =
  | 'unknown'
  | 'delivering'
  | 'installing'
  | 'ready'
  | 'stopped'
  | 'error'
  | 'locked'
  | 'rescue'
  | 'busy'

export type ServiceLevelLevel =
  | 'unknown'
  | 'basic'
  | 'business'

export type ServiceProvisioningStatus =
  | 'unknown'
  | 'delivering'
  | 'ready'
  | 'error'
  | 'expiring'
  | 'expired'

export type ServiceType =
  | 'unknown_type'
  | 'service'
  | 'order'

export interface OfferAntiDosInfo {
  type: OfferAntiDosInfoType
}


export interface OfferBackupInfo {
  size: number
}


export interface OfferBandwidthInfo {
  speed: number
}


export interface OfferLicenseInfo {
  boundToIp: boolean
}


export interface OfferRPNInfo {
  speed: number
}


export interface OfferSANInfo {
  /**
   * SAN size (in bytes).
   */
  size: number
  /**
   * High availability offer.
   */
  ha: boolean
  /**
   * Type of SAN device (hdd / ssd).
   */
  deviceType: OfferSANInfoType
}


export interface OfferStorageInfo {
  maxQuota: number
  size: number
}


export interface IP {
  /**
   * ID of the IP.
   */
  ipId: number
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
   * Classless InterDomain Routing notation of the IP.
   */
  cidr: number
  /**
   * Network mask of IP.
   */
  netmask: string
  /**
   * Semantic of IP.
   */
  semantic: IPSemantic
  /**
   * Gateway of IP.
   */
  gateway: string
  /**
   * Status of the IP.
   */
  status: IPStatus
}


export interface Offer {
  /**
   * ID of the offer.
   */
  id: number
  /**
   * Name of the offer.
   */
  name: string
  /**
   * Catalog of the offer.
   */
  catalog: OfferCatalog
  /**
   * Payment frequency of the offer.
   */
  paymentFrequency: OfferPaymentFrequency
  /**
   * Price of the offer.
   */
  pricing?: Money
  /**
   * Server info if it is a server offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  serverInfo?: OfferServerInfo
  /**
   * Service level info if it is a service level offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  serviceLevelInfo?: OfferServiceLevelInfo
  /**
   * RPN info if it is a RPN offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  rpnInfo?: OfferRPNInfo
  /**
   * SAN info if it is a SAN offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  sanInfo?: OfferSANInfo
  /**
   * AntiDOS info if it is a antiDOS offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  antidosInfo?: OfferAntiDosInfo
  /**
   * Backup info if it is a backup offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  backupInfo?: OfferBackupInfo
  /**
   * USB storage info if it is a USB storage offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  usbStorageInfo?: OfferStorageInfo
  /**
   * Storage info if it is a storage offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  storageInfo?: OfferStorageInfo
  /**
   * License info if it is a license offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  licenseInfo?: OfferLicenseInfo
  /**
   * Failover IP info if it is a failover IP offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  failoverIpInfo?: OfferFailoverIpInfo
  /**
   * Failover block info if it is a failover block offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  failoverBlockInfo?: OfferFailoverBlockInfo
  /**
   * Bandwidth info if it is a bandwidth offer.
   *
   * One-of ('offerInfo'): at most one of 'serverInfo', 'serviceLevelInfo', 'rpnInfo', 'sanInfo', 'antidosInfo', 'backupInfo', 'usbStorageInfo', 'storageInfo', 'licenseInfo', 'failoverIpInfo', 'failoverBlockInfo', 'bandwidthInfo' could be set.
   */
  bandwidthInfo?: OfferBandwidthInfo
}


export interface NetworkInterface {
  /**
   * Card ID of the network interface.
   */
  cardId: number
  /**
   * Device ID of the network interface.
   */
  deviceId: number
  /**
   * MAC address of the network interface.
   */
  mac: string
  /**
   * Network interface type.
   */
  type: NetworkInterfaceInterfaceType
  /**
   * IPs of the network interface.
   */
  ips: IP[]
}


export interface OS {
  /**
   * ID of the OS.
   */
  id: number
  /**
   * Name of the OS.
   */
  name: string
  /**
   * Type of the OS.
   */
  type: OSType
  /**
   * Version of the OS.
   */
  version: string
  /**
   * Architecture of the OS.
   */
  arch: OSArch
  /**
   * True if the OS allow custom partitioning.
   */
  allowCustomPartitioning: boolean
  /**
   * True if the OS allow SSH Keys.
   */
  allowSshKeys: boolean
  /**
   * True if the OS requires user.
   */
  requiresUser: boolean
  /**
   * True if the OS requires admin password.
   */
  requiresAdminPassword: boolean
  /**
   * True if the OS requires panel password.
   */
  requiresPanelPassword: boolean
  /**
   * True if the OS allow file systems.
   */
  allowedFilesystems: PartitionFileSystem[]
  /**
   * True if the OS requires license.
   */
  requiresLicense: boolean
  /**
   * License offers available with the OS.
   */
  licenseOffers: Offer[]
  /**
   * Maximum number of partitions which can be created.
   */
  maxPartitions?: number
  /**
   * Display name of the OS.
   */
  displayName: string
  /**
   * Regex used to validate the installation passwords.
   */
  passwordRegex: string
  /**
   * Regex used to validate the panel installation password.
   */
  panelPasswordRegex?: string
  /**
   * If both requires_valid_hostname & hostname_regex are set, it means that at least one of the criteria must be valid.
   */
  requiresValidHostname?: boolean
  /**
   * If both requires_valid_hostname & hostname_regex are set, it means that at least one of the criteria must be valid.
   */
  hostnameRegex?: string
  /**
   * Hostname max length.
   */
  hostnameMaxLength: number
  /**
   * OS release date.
   */
  releasedAt?: Date
}


export interface ServerLocation {
  rack: string
  room: string
  datacenterName: string
}


export interface ServerOption {
  offer?: Offer
  createdAt?: Date
  updatedAt?: Date
  expiredAt?: Date
  options: ServerOption[]
}


export interface ServiceLevel {
  /**
   * Offer ID of service level.
   */
  offerId: number
  /**
   * Level type of service level.
   */
  level: ServiceLevelLevel
}


export interface RpnSan {
  /**
   * RPN SAN  ID.
   */
  id: number
  /**
   * Datacenter location.
   */
  datacenterName: string
  /**
   * Organization ID.
   */
  organizationId: string
  /**
   * Project ID.
   */
  projectId: string
  /**
   * RPN SAN server hostname.
   */
  serverHostname: string
  /**
   * IQN suffix.
   */
  iqnSuffix: string
  /**
   * Date of creation of the RPN SAN.
   */
  createdAt?: Date
  /**
   * Offer ID.
   */
  offerId: number
  /**
   * Offer description.
   */
  offerName: string
  /**
   * Status.
   */
  status: RpnSanStatus
  /**
   * RPN SAN storage size.
   */
  storageSize: number
  iqn: string
  offer?: Offer
  /**
   * True if the SAN is compatible with the RPNv1 technology.
   */
  rpnv1Compatible: boolean
  /**
   * True if the offer supports the RPNv1 implicitly, false if it must to be added to a group to support RPNv1.
   */
  rpnv1Implicit: boolean
  /**
   * RPN SAN delivery date.
   */
  deliveredAt?: Date
  /**
   * RPN SAN termination date.
   */
  terminatedAt?: Date
  /**
   * RPN SAN expiration date.
   */
  expiresAt?: Date
}


export interface RpnGroup {
  /**
   * Rpn group member ID.
   */
  id: number
  /**
   * Rpn group name.
   */
  name: string
  /**
   * Rpn group type (local or shared).
   */
  type: RpnGroupType
  /**
   * Whether the group is active or not.
   */
  active: boolean
  /**
   * Rpn group creation date.
   */
  createdAt?: Date
  /**
   * RPN group owner.
   */
  owner: string
  /**
   * Total number of members.
   */
  membersCount: number
  /**
   * Rpn group organization ID.
   */
  organizationId: string
  /**
   * Rpn group project ID.
   */
  projectId: string
}


export interface RpnV2GroupSubnet {
  address: string
  cidr: number
}


export interface Server {
  /**
   * ID of the server.
   */
  id: number
  /**
   * Organization ID the server is attached to.
   */
  organizationId: string
  /**
   * Project ID the server is attached to.
   */
  projectId: string
  /**
   * Hostname of the server.
   */
  hostname: string
  /**
   * Date of last reboot of the server.
   */
  rebootedAt?: Date
  /**
   * Date of creation of the server.
   */
  createdAt?: Date
  /**
   * Date of last modification of the server.
   */
  updatedAt?: Date
  /**
   * Date of release of the server.
   */
  expiredAt?: Date
  /**
   * Offer of the server.
   */
  offer?: Offer
  /**
   * Status of the server.
   */
  status: ServerStatus
  /**
   * Location of the server.
   */
  location?: ServerLocation
  /**
   * Abuse contact of the server.
   */
  abuseContact: string
  /**
   * OS installed on the server.
   */
  os?: OS
  /**
   * Network interfaces of the server.
   */
  interfaces: NetworkInterface[]
  /**
   * The zone in which is the server.
   */
  zone: ScwZone
  /**
   * Options subscribe on the server.
   */
  options: ServerOption[]
  /**
   * Service level of the server.
   */
  level?: ServiceLevel
  /**
   * Boolean if the server has a BMC.
   */
  hasBmc: boolean
  /**
   * Rescue OS of the server.
   */
  rescueOs?: OS
  /**
   * Array of customs tags attached to the server.
   */
  tags: string[]
  /**
   * Whether the server is outsourced or not.
   */
  isOutsourced: boolean
  /**
   * Whether or not you can enable/disable the IPv6.
   */
  ipv6Slaac: boolean
  /**
   * Whether the server is compatible with QinQ.
   */
  qinq: boolean
  /**
   * Whether or not the server is already part of an rpnv2 group.
   */
  isRpnv2Member: boolean
  /**
   * Whether or not the server is HDS.
   */
  isHds: boolean
}


export interface FailoverBlock {
  /**
   * ID of the failover block.
   */
  id: number
  /**
   * IP of the failover block.
   */
  address: string
  /**
   * Name servers.
   */
  nameservers: string[]
  /**
   * IP version of the failover block.
   */
  ipVersion: FailoverBlockVersion
  /**
   * Classless InterDomain Routing notation of the failover block.
   */
  cidr: number
  /**
   * Netmask of the failover block.
   */
  netmask: string
  /**
   * Gateway IP of the failover block.
   */
  gatewayIp: string
}


export interface RpnSanIpRpnV2Group {
  id: number
  name: string
}


export interface RpnSanIpServer {
  id: number
  hostname: string
  datacenterName: string
}


export interface RpnSanServer {
  /**
   * The RPN SAN server ID.
   */
  id: number
  /**
   * The RPN SAN server datacenter name.
   */
  datacenterName: string
  /**
   * The RPN SAN server hostname.
   */
  hostname: string
  /**
   * RPN SANs linked to the RPN SAN server.
   */
  sans: RpnSan[]
  /**
   * The RPN SAN server zone.
   */
  zone: ScwZone
}


export interface RpnV2Group {
  /**
   * RPN V2 group ID.
   */
  id: number
  /**
   * RPN V2 group name.
   */
  name: string
  /**
   * Whether or not the RPN V1 compatibility was enabled.
   */
  compatibleRpnv1: boolean
  /**
   * Organization ID of the RPN V2 group.
   */
  organizationId: string
  /**
   * Project ID of the RPN V2 group.
   */
  projectId: string
  /**
   * RPN V2 group type (qing / standard).
   */
  type: RpnV2GroupType
  /**
   * RPN V2 group status.
   */
  status: RpnV2GroupStatus
  /**
   * RPN V2 group owner.
   */
  owner: string
  /**
   * Total number of members.
   */
  membersCount: number
  /**
   * RPN V2 subnet.
   */
  subnet?: RpnV2GroupSubnet
  /**
   * RPN V2 gateway.
   */
  gateway: string
  /**
   * The RPNv1 group (if the compatibility was enabled).
   */
  rpnv1Group?: RpnGroup
}


export interface RpnV2Member {
  /**
   * RPN V2 member ID.
   */
  id: number
  /**
   * RPN V2 member status.
   */
  status: RpnV2MemberStatus
  /**
   * RPN V2 member VLAN.
   */
  vlan: string
  /**
   * Server behind the member (may be empty).
   *
   * One-of ('resource'): at most one of 'server', 'rpnv1Group' could be set.
   */
  server?: Server
  /**
   * RPN V1 group member.
   *
   * One-of ('resource'): at most one of 'server', 'rpnv1Group' could be set.
   */
  rpnv1Group?: RpnGroup
  /**
   * RPN speed.
   */
  speed?: number
}


export interface ServerDisk {
  id: number
  connector: string
  type: ServerDiskType
  capacity: number
  isAddon: boolean
}


export interface Service {
  /**
   * ID of the service.
   */
  id: number
  /**
   * Resource ID of the service.
   */
  resourceId?: number
  /**
   * Provisioning status of the service.
   */
  provisioningStatus: ServiceProvisioningStatus
  /**
   * Offer of the service.
   */
  offer?: Offer
  /**
   * Creation date of the service.
   */
  createdAt?: Date
  /**
   * Delivery date of the service.
   */
  deliveredAt?: Date
  /**
   * Terminatation date of the service.
   */
  terminatedAt?: Date
  /**
   * Expiration date of the service.
   */
  expiresAt?: Date
  /**
   * Service type, either order or service.
   */
  type: ServiceType
}


export interface GetIPv6BlockQuotasResponseQuota {
  quota: number
  cidr: number
}


export interface InstallPartition {
  /**
   * File system of the installation partition.
   */
  fileSystem: PartitionFileSystem
  /**
   * Mount point of the installation partition.
   */
  mountPoint?: string
  /**
   * RAID level of the installation partition.
   */
  raidLevel: RaidArrayRaidLevel
  /**
   * Capacity of the installation partition.
   */
  capacity: number
  /**
   * Connectors of the installation partition.
   */
  connectors: string[]
}


export interface FailoverIP {
  /**
   * ID of the failover IP.
   */
  id: number
  /**
   * IP of the failover IP.
   */
  address: string
  /**
   * Reverse IP value.
   */
  reverse: string
  /**
   * IP version of the failover IP.
   */
  ipVersion: FailoverIPVersion
  /**
   * Classless InterDomain Routing notation of the failover IP.
   */
  cidr: number
  /**
   * Netmask of the failover IP.
   */
  netmask: string
  /**
   * Gateway IP of the failover IP.
   */
  gatewayIp: string
  /**
   * MAC address of the IP failover.
   */
  mac?: string
  /**
   * Server ID linked to the IP failover.
   */
  serverId?: number
  /**
   * Status of the IP failover.
   */
  status: FailoverIPStatus
  /**
   * Block of the IP failover.
   */
  block?: FailoverBlock
  /**
   * The interface type.
   */
  type: FailoverIPInterfaceType
  /**
   * The server zone (if assigned).
   */
  serverZone?: string
}


export interface ListIPv6BlockSubnetsAvailableResponseSubnet {
  address: string
  cidr: number
}


export interface IPv6Block {
  /**
   * ID of the IPv6.
   */
  id: number
  /**
   * Address of the IPv6.
   */
  address: string
  /**
   * DUID of the IPv6.
   */
  duid: string
  /**
   * DNS linked to the IPv6.
   */
  nameservers: string[]
  /**
   * Classless InterDomain Routing notation of the IPv6.
   */
  cidr: number
  /**
   * All IPv6 subnets.
   */
  subnets: IPv6Block[]
  /**
   * The nameservers delegation status.
   */
  delegationStatus: IPv6BlockDelegationStatus
}


export interface InvoiceSummary {
  id: number
  totalWithTaxes?: Money
  totalWithoutTaxes?: Money
  createdAt?: Date
  paidAt?: Date
  status: InvoiceStatus
  paymentMethod: InvoicePaymentMethod
  transactionId: number
}


export interface RpnSanIp {
  /**
   * Basic server information behind the IP.
   *
   * One-of ('rpnSanIp'): at most one of 'server', 'rpnv2Group' could be set.
   */
  server?: RpnSanIpServer
  /**
   * Basic RPNv2 group information behind the IP.
   *
   * One-of ('rpnSanIp'): at most one of 'server', 'rpnv2Group' could be set.
   */
  rpnv2Group?: RpnSanIpRpnV2Group
  /**
   * An IP object.
   */
  ip?: IP
  /**
   * IP type (server | rpnv2_subnet).
   */
  type: RpnSanIpType
}


export interface RefundSummary {
  id: number
  totalWithTaxes?: Money
  totalWithoutTaxes?: Money
  createdAt?: Date
  refundedAt?: Date
  status: RefundStatus
  method: RefundMethod
}


export interface RpnGroupMember {
  /**
   * Rpn group member ID.
   */
  id: number
  /**
   * RPN group member status.
   */
  status: RpnGroupMemberStatus
  /**
   * Authorized RPN SAN server.
   */
  sanServer?: RpnSanServer
  /**
   * Authorized rpn v1 capable server.
   */
  server?: Server
  /**
   * RPN group ID.
   */
  groupId: number
  /**
   * RPN group name.
   */
  groupName: string
  /**
   * RPN group owner.
   */
  groupOwner: string
  /**
   * RPN speed.
   */
  speed?: number
  /**
   * RPN member owner.
   */
  owner: string
}


export interface RpnSanSummary {
  /**
   * RPN SAN  ID.
   */
  id: number
  /**
   * Datacenter location.
   */
  datacenterName: string
  /**
   * Organization ID.
   */
  organizationId: string
  /**
   * Project ID.
   */
  projectId: string
  /**
   * RPN SAN server hostname.
   */
  serverHostname: string
  /**
   * IQN suffix.
   */
  iqnSuffix: string
  /**
   * Date of creation of the RPN SAN.
   */
  createdAt?: Date
  /**
   * Offer ID.
   */
  offerId: number
  /**
   * Offer description.
   */
  offerName: string
  /**
   * Status.
   */
  status: RpnSanStatus
  /**
   * RPN SAN storage size.
   */
  storageSize: number
  /**
   * True if the SAN is compatible with the RPNv1 technology.
   */
  rpnv1Compatible: boolean
  /**
   * True if the offer supports the RPNv1 implicitly, false if it must to be added to a group to support RPNv1.
   */
  rpnv1Implicit: boolean
  /**
   * RPN SAN delivery date.
   */
  deliveredAt?: Date
  /**
   * RPN SAN termination date.
   */
  terminatedAt?: Date
  /**
   * RPN SAN expiration date.
   */
  expiresAt?: Date
}


export interface RpnServerCapability {
  /**
   * Server ID.
   */
  id: number
  /**
   * Server hostname.
   */
  hostname: string
  /**
   * Server datacenter name.
   */
  datacenterName: string
  /**
   * Server zone.
   */
  zone: ScwZone
  /**
   * Private IP address (if rpn compatiblle).
   */
  ipAddress?: string
  /**
   * Supported rpn version.
   */
  rpnVersion?: number
  /**
   * True if server is compatible with QinQ protocol (rpn v2).
   */
  compatibleQinq: boolean
  /**
   * True if server can join a QinQ group.
   */
  canJoinQinqGroup: boolean
  /**
   * Times server is linked in a rpnv1 group.
   */
  rpnv1GroupCount: number
  /**
   * Times server is linked in a rpnv2 group.
   */
  rpnv2GroupCount: number
  /**
   * True if server can join an rpnv2 group.
   */
  canJoinRpnv2Group: boolean
}


export interface Log {
  /**
   * RPN V2 log ID.
   */
  id: number
  /**
   * RPN V2 group.
   */
  group?: RpnV2Group
  /**
   * RPN V2 member (if applicable).
   */
  member?: RpnV2Member
  /**
   * Which action was performed.
   */
  action: LogAction
  /**
   * Action status.
   */
  status: LogStatus
  /**
   * Creation date.
   */
  createdAt?: Date
  /**
   * Completion date.
   */
  finishedAt?: Date
}


export interface ServerEvent {
  /**
   * ID of the event.
   */
  eventId: number
  /**
   * Description of the event.
   */
  description: string
  /**
   * Date of the event.
   */
  date?: Date
}


export interface ServerSummary {
  /**
   * ID of the server.
   */
  id: number
  /**
   * Datacenter of the server.
   */
  datacenterName: string
  /**
   * Organization ID the server is attached to.
   */
  organizationId: string
  /**
   * Project ID the server is attached to.
   */
  projectId: string
  /**
   * Hostname of the server.
   */
  hostname: string
  /**
   * Date of creation of the server.
   */
  createdAt?: Date
  /**
   * Date of last modification of the server.
   */
  updatedAt?: Date
  /**
   * Date of release of the server.
   */
  expiredAt?: Date
  /**
   * Offer ID of the server.
   */
  offerId: number
  /**
   * Offer name of the server.
   */
  offerName: string
  /**
   * Status of the server.
   */
  status: ServerStatus
  /**
   * OS ID installed on server.
   */
  osId?: number
  /**
   * Network interfaces of the server.
   */
  interfaces: NetworkInterface[]
  /**
   * The zone in which is the server.
   */
  zone: ScwZone
  /**
   * Service level of the server.
   */
  level?: ServiceLevel
  /**
   * Whether the server is outsourced or not.
   */
  isOutsourced: boolean
  /**
   * Whether the server is compatible with QinQ.
   */
  qinq: boolean
  /**
   * Supported RPN version.
   */
  rpnVersion?: number
  /**
   * Whether or not the server is HDS.
   */
  isHds: boolean
}


export interface CPU {
  /**
   * Name of CPU.
   */
  name: string
  /**
   * Number of cores of the CPU.
   */
  coreCount: number
  /**
   * Number of threads of the CPU.
   */
  threadCount: number
  /**
   * Frequency of the CPU.
   */
  frequency: number
}


export interface Disk {
  /**
   * Capacity of the disk.
   */
  capacity: number
  /**
   * Type of the disk.
   */
  type: ServerDiskType
}


export interface Memory {
  /**
   * Capacity of the memory.
   */
  capacity: number
  /**
   * Type of the memory.
   */
  type: MemoryType
  /**
   * Frequency of the memory.
   */
  frequency: number
  /**
   * True if the memory is an error-correcting code memory.
   */
  isEcc: boolean
}


export interface PersistentMemory {
  /**
   * Capacity of the persistent memory.
   */
  capacity: number
  /**
   * Frequency of the persistent memory.
   */
  frequency: number
  /**
   * Model of the persistent memory.
   */
  model: string
}


export interface RaidController {
  /**
   * Model of the RAID controller.
   */
  model: string
  /**
   * RAID level of the RAID controller.
   */
  raidLevel: string[]
}


export interface RaidArray {
  /**
   * The RAID level.
   */
  raidLevel: RaidArrayRaidLevel
  /**
   * Disks on the RAID controller.
   */
  disks: ServerDisk[]
}


export interface Partition {
  /**
   * Type of the partition.
   */
  type: PartitionType
  /**
   * File system of the partition.
   */
  fileSystem: PartitionFileSystem
  /**
   * Mount point of the partition.
   */
  mountPoint?: string
  /**
   * Raid level of the partition.
   */
  raidLevel: RaidArrayRaidLevel
  /**
   * Capacity of the partition.
   */
  capacity: number
  /**
   * Connectors of the partition.
   */
  connectors: string[]
}


export interface UpdatableRaidArray {
  /**
   * The RAID level.
   */
  raidLevel: RaidArrayRaidLevel
  /**
   * The list of Disk ID of the updatable RAID.
   */
  diskIds: number[]
}


export type AttachFailoverIPToMacAddressRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the failover IP.
   */
  ipId: number
  /**
   * A mac type.
   */
  type?: AttachFailoverIPToMacAddressRequestMacType
  /**
   * A valid mac address (existing or not).
   */
  mac?: string
}


export type AttachFailoverIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server.
   */
  serverId: number
  /**
   * List of ID of failovers IP to attach.
   */
  fipsIds: number[]
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
  expiresAt?: Date
  /**
   * Status of the connection.
   */
  status: BMCAccessStatus
}


export interface Backup {
  /**
   * ID of the backup.
   */
  id: number
  /**
   * Login of the backup.
   */
  login: string
  /**
   * Server of the backup.
   */
  server: string
  /**
   * Status of the backup.
   */
  status: BackupStatus
  /**
   * ACL enable boolean of the backup.
   */
  aclEnabled: boolean
  /**
   * Autologin boolean of the backup.
   */
  autologin: boolean
  /**
   * Total quota space of the backup.
   */
  quotaSpace: number
  /**
   * Quota space used of the backup.
   */
  quotaSpaceUsed: number
  /**
   * Total quota files of the backup.
   */
  quotaFiles: number
  /**
   * Quota files used of the backup.
   */
  quotaFilesUsed: number
}


export type BillingApiCanOrderRequest = {
  projectId?: string
}


export type BillingApiDownloadInvoiceRequest = {
  invoiceId: number
}


export type BillingApiDownloadRefundRequest = {
  refundId: number
}


export type BillingApiGetInvoiceRequest = {
  invoiceId: number
}


export type BillingApiGetRefundRequest = {
  refundId: number
}


export type BillingApiListInvoicesRequest = {
  page?: number
  pageSize?: number
  orderBy?: ListInvoicesRequestOrderBy
  projectId?: string
}


export type BillingApiListRefundsRequest = {
  page?: number
  pageSize?: number
  orderBy?: ListRefundsRequestOrderBy
  projectId?: string
}


export interface CanOrderResponse {
  canOrder: boolean
  message?: string
  quotaOk: boolean
  phoneConfirmed: boolean
  emailConfirmed: boolean
  userConfirmed: boolean
  paymentMode: boolean
  billingOk: boolean
}


export type CancelServerInstallRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID of the server to cancel install.
   */
  serverId: number
}


export type CreateFailoverIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Failover IP offer ID.
   */
  offerId: number
  /**
   * Project ID.
   */
  projectId?: string
  /**
   * Quantity.
   */
  quantity: number
}


export interface CreateFailoverIPsResponse {
  totalCount: number
  services: Service[]
}


export type CreateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Offer ID of the new server.
   */
  offerId: number
  /**
   * Server option IDs of the new server.
   */
  serverOptionIds: number[]
  /**
   * Project ID of the new server.
   */
  projectId?: string
  /**
   * Datacenter name of the new server.
   */
  datacenterName?: string
}


export type DeleteFailoverIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the failover IP to delete.
   */
  ipId: number
}


export type DeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to delete.
   */
  serverId: number
}


export type DeleteServiceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the service.
   */
  serviceId: number
}


export type DetachFailoverIPFromMacAddressRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the failover IP.
   */
  ipId: number
}


export type DetachFailoverIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * List of IDs of failovers IP to detach.
   */
  fipsIds: number[]
}


export type GetBMCAccessRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to get BMC access.
   */
  serverId: number
}


export type GetFailoverIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the failover IP.
   */
  ipId: number
}


export interface GetIPv6BlockQuotasResponse {
  /**
   * Quota for each CIDR of IPv6 block.
   */
  quotas: GetIPv6BlockQuotasResponseQuota[]
  /**
   * Total count of quotas.
   */
  totalCount: number
}


export type GetOSRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the OS.
   */
  osId: number
  /**
   * ID of the server.
   */
  serverId: number
  /**
   * Project ID.
   */
  projectId?: string
}


export type GetOfferRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of offer.
   */
  offerId: number
  /**
   * Project ID.
   */
  projectId?: string
}


export type GetOrderedServiceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  orderedServiceId: number
}


export type GetRaidRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server.
   */
  serverId: number
}


export type GetRemainingQuotaRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Project ID.
   */
  projectId?: string
}


export interface GetRemainingQuotaResponse {
  /**
   * Current failover IP quota.
   */
  failoverIpQuota: number
  /**
   * Remaining failover IP quota.
   */
  failoverIpRemainingQuota: number
  /**
   * Current failover block quota.
   */
  failoverBlockQuota: number
  /**
   * Remaining failover block quota.
   */
  failoverBlockRemainingQuota: number
}


export type GetRescueRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to get rescue.
   */
  serverId: number
}


export interface GetRpnStatusResponse {
  /**
   * If status = 'operational', you can perform rpn actions in write.
   */
  status: GetRpnStatusResponseStatus
  /**
   * Number of operations left to perform before being operational.
   */
  operationsLeft?: number
}


export type GetServerBackupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID of the backup.
   */
  serverId: number
}


export type GetServerDefaultPartitioningRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server.
   */
  serverId: number
  /**
   * OS ID of the default partitioning.
   */
  osId: number
}


export type GetServerInstallRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID of the server to install.
   */
  serverId: number
}


export type GetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server.
   */
  serverId: number
}


export type GetServiceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the service.
   */
  serviceId: number
}


export type IPv6BlockApiCreateIPv6BlockRequest = {
  /**
   * ID of the project.
   */
  projectId?: string
}


export type IPv6BlockApiCreateIPv6BlockSubnetRequest = {
  /**
   * ID of the IPv6 block.
   */
  blockId: number
  /**
   * Address of the IPv6.
   */
  address: string
  /**
   * Classless InterDomain Routing notation of the IPv6.
   */
  cidr: number
}


export type IPv6BlockApiDeleteIPv6BlockRequest = {
  /**
   * ID of the IPv6 block to delete.
   */
  blockId: number
}


export type IPv6BlockApiGetIPv6BlockQuotasRequest = {
  /**
   * ID of the project.
   */
  projectId?: string
}


export type IPv6BlockApiGetIPv6BlockRequest = {
  /**
   * ID of the project.
   */
  projectId?: string
}


export type IPv6BlockApiListIPv6BlockSubnetsAvailableRequest = {
  /**
   * ID of the IPv6 block.
   */
  blockId: number
}


export type IPv6BlockApiListIPv6BlocksRequest = {
  projectId?: string
}


export type IPv6BlockApiUpdateIPv6BlockRequest = {
  /**
   * ID of the IPv6 block.
   */
  blockId: number
  /**
   * DNS to link to the IPv6.
   */
  nameservers?: string[]
}


export type InstallServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to install.
   */
  serverId: number
  /**
   * OS ID to install on the server.
   */
  osId: number
  /**
   * Hostname of the server.
   */
  hostname: string
  /**
   * User to install on the server.
   */
  userLogin?: string
  /**
   * User password to install on the server.
   */
  userPassword?: string
  /**
   * Panel password to install on the server.
   */
  panelPassword?: string
  /**
   * Root password to install on the server.
   */
  rootPassword?: string
  /**
   * Partitions to install on the server.
   */
  partitions?: InstallPartition[]
  /**
   * SSH key IDs authorized on the server.
   */
  sshKeyIds?: string[]
  /**
   * Offer ID of license to install on server.
   */
  licenseOfferId?: number
  /**
   * IP to link at the license to install on server.
   */
  ipId?: number
}


export interface Invoice {
  id: number
  totalWithTaxes?: Money
  totalWithoutTaxes?: Money
  createdAt?: Date
  paidAt?: Date
  status: InvoiceStatus
  paymentMethod: InvoicePaymentMethod
  content: string
  transactionId: number
}


export type ListFailoverIPsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of failovers IP per page.
   */
  pageSize?: number
  /**
   * Order of the failovers IP.
   */
  orderBy?: ListFailoverIPsRequestOrderBy
  /**
   * Filter failovers IP by project ID.
   */
  projectId?: string
  /**
   * Filter failovers IP which matching with this field.
   */
  search?: string
  /**
   * True: return all failovers IP not attached on server
false: return all failovers IP attached on server.
   */
  onlyAvailable?: boolean
}


export interface ListFailoverIPsResponse {
  /**
   * Total count of matching failovers IP.
   */
  totalCount: number
  /**
   * List of failover IPs that match filters.
   */
  failoverIps: FailoverIP[]
}


export interface ListIPv6BlockSubnetsAvailableResponse {
  /**
   * All available address and CIDR available in subnet.
   */
  subnetAvailables: ListIPv6BlockSubnetsAvailableResponseSubnet[]
  /**
   * Total count of available subnets.
   */
  totalCount: number
}


export interface ListIPv6BlocksResponse {
  totalCount: number
  ipv6Blocks: IPv6Block[]
}


export interface ListInvoicesResponse {
  totalCount: number
  invoices: InvoiceSummary[]
}


export interface ListIpsResponse {
  /**
   * Total count of authorized IPs.
   */
  totalCount: number
  /**
   * List of authorized IPs.
   */
  ips: RpnSanIp[]
}


export type ListOSRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of OS per page.
   */
  pageSize?: number
  /**
   * Order of the OS.
   */
  orderBy?: ListOSRequestOrderBy
  /**
   * Type of the OS.
   */
  type?: OSType
  /**
   * Filter OS by compatible server ID.
   */
  serverId: number
  /**
   * Project ID.
   */
  projectId?: string
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
  zone?: ScwZone
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of offer per page.
   */
  pageSize?: number
  /**
   * Order of the offers.
   */
  orderBy?: ListOffersRequestOrderBy
  /**
   * Filter on commercial range.
   */
  commercialRange?: string
  /**
   * Filter on catalog.
   */
  catalog?: OfferCatalog
  /**
   * Project ID.
   */
  projectId?: string
  /**
   * Get the current failover IP offer.
   */
  isFailoverIp?: boolean
  /**
   * Get the current failover IP block offer.
   */
  isFailoverBlock?: boolean
  /**
   * Filter offers depending on their datacenter.
   */
  soldIn?: string[]
  /**
   * Set this filter to true to only return available offers.
   */
  availableOnly?: boolean
  /**
   * Get the RPN SAN offers.
   */
  isRpnSan?: boolean
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


export interface ListRefundsResponse {
  totalCount: number
  refunds: RefundSummary[]
}


export interface ListRpnCapableSanServersResponse {
  /**
   * Total count of rpn capable san servers.
   */
  totalCount: number
  /**
   * List of san servers.
   */
  sanServers: RpnSanServer[]
}


export interface ListRpnCapableServersResponse {
  /**
   * Total count of rpn capable servers.
   */
  totalCount: number
  /**
   * List of servers.
   */
  servers: Server[]
}


export interface ListRpnGroupMembersResponse {
  /**
   * Total count of rpn v1 group members.
   */
  totalCount: number
  /**
   * List of rpn v1 group members.
   */
  members: RpnGroupMember[]
}


export interface ListRpnGroupsResponse {
  /**
   * Total count of rpn groups.
   */
  totalCount: number
  /**
   * List of rpn v1 groups.
   */
  rpnGroups: RpnGroup[]
}


export interface ListRpnInvitesResponse {
  /**
   * Total count of invites.
   */
  totalCount: number
  /**
   * List of invites.
   */
  members: RpnGroupMember[]
}


export interface ListRpnSansResponse {
  /**
   * Total count of matching RPN SANs.
   */
  totalCount: number
  /**
   * List of RPN SANs that match filters.
   */
  rpnSans: RpnSanSummary[]
}


export interface ListRpnServerCapabilitiesResponse {
  /**
   * Total count of servers.
   */
  totalCount: number
  /**
   * List of servers and their RPN capabilities.
   */
  servers: RpnServerCapability[]
}


export interface ListRpnV2CapableResourcesResponse {
  /**
   * Total count of matching rpn v2 capable resources.
   */
  totalCount: number
  /**
   * List of rpn v2 capable resources that match filters.
   */
  servers: Server[]
}


export interface ListRpnV2GroupLogsResponse {
  /**
   * Total count of matching rpn v2 logs.
   */
  totalCount: number
  /**
   * List of rpn v2 logs that match filters.
   */
  logs: Log[]
}


export interface ListRpnV2GroupsResponse {
  /**
   * Total count of matching rpn v2 groups.
   */
  totalCount: number
  /**
   * List of rpn v2 groups that match filters.
   */
  rpnGroups: RpnV2Group[]
}


export interface ListRpnV2MembersResponse {
  /**
   * Total count of matching rpn v2 group members.
   */
  totalCount: number
  /**
   * List of rpn v2 group members that match filters.
   */
  members: RpnV2Member[]
}


export type ListServerDisksRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID of the server disks.
   */
  serverId: number
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of server disk per page.
   */
  pageSize?: number
  /**
   * Order of the server disks.
   */
  orderBy?: ListServerDisksRequestOrderBy
}


export interface ListServerDisksResponse {
  /**
   * Total count of matching server disks.
   */
  totalCount: number
  /**
   * Server disks that match filters.
   */
  disks: ServerDisk[]
}


export type ListServerEventsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID of the server events.
   */
  serverId: number
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of server event per page.
   */
  pageSize?: number
  /**
   * Order of the server events.
   */
  orderBy?: ListServerEventsRequestOrderBy
}


export interface ListServerEventsResponse {
  /**
   * Total count of matching server events.
   */
  totalCount: number
  /**
   * Server events that match filters.
   */
  events: ServerEvent[]
}


export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of server per page.
   */
  pageSize?: number
  /**
   * Order of the servers.
   */
  orderBy?: ListServersRequestOrderBy
  /**
   * Filter servers by project ID.
   */
  projectId?: string
  /**
   * Filter servers by hostname.
   */
  search?: string
}


export interface ListServersResponse {
  /**
   * Total count of matching servers.
   */
  totalCount: number
  /**
   * Servers that match filters.
   */
  servers: ServerSummary[]
}


export type ListServicesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of service per page.
   */
  pageSize?: number
  /**
   * Order of the services.
   */
  orderBy?: ListServicesRequestOrderBy
  /**
   * Project ID.
   */
  projectId?: string
}


export interface ListServicesResponse {
  /**
   * Total count of matching services.
   */
  totalCount: number
  /**
   * Services that match filters.
   */
  services: Service[]
}


export type ListSubscribableServerOptionsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID of the subscribable server options.
   */
  serverId: number
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of subscribable server option per page.
   */
  pageSize?: number
}


export interface ListSubscribableServerOptionsResponse {
  /**
   * Total count of matching subscribable server options.
   */
  totalCount: number
  /**
   * Server options that match filters.
   */
  serverOptions: Offer[]
}


export interface OfferFailoverBlockInfo {
  onetimeFees?: Offer
}


export interface OfferFailoverIpInfo {
  onetimeFees?: Offer
}


export interface OfferServerInfo {
  bandwidth: number
  stock: OfferServerInfoStock
  commercialRange: string
  disks: Disk[]
  cpus: CPU[]
  memories: Memory[]
  persistentMemories: PersistentMemory[]
  raidControllers: RaidController[]
  availableOptions: Offer[]
  rpnVersion?: number
  connectivity: number
  onetimeFees?: Offer
  stockByDatacenter: Record<string, OfferServerInfoStock>
}


export interface OfferServiceLevelInfo {
  supportTicket: boolean
  supportPhone: boolean
  salesSupport: boolean
  git: string
  sla: number
  prioritySupport: boolean
  highRpnBandwidth: boolean
  customization: boolean
  antidos: boolean
  extraFailoverQuota: number
  availableOptions: Offer[]
}


export interface Raid {
  /**
   * Details about the RAID controller.
   */
  raidArrays: RaidArray[]
}


export type RebootServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to reboot.
   */
  serverId: number
}


export interface Refund {
  id: number
  totalWithTaxes?: Money
  totalWithoutTaxes?: Money
  createdAt?: Date
  refundedAt?: Date
  status: RefundStatus
  method: RefundMethod
  content: string
}


export interface Rescue {
  /**
   * OS ID of the rescue.
   */
  osId: number
  /**
   * Login of the rescue.
   */
  login: string
  /**
   * Password of the rescue.
   */
  password: string
  /**
   * Protocol of the rescue.
   */
  protocol: RescueProtocol
}


export type RpnApiGetRpnStatusRequest = {
  /**
   * A project ID.
   */
  projectId?: string
  /**
   * An RPN v1 group ID.
   */
  rpnv1GroupId?: number
  /**
   * An RPN v2 group ID.
   */
  rpnv2GroupId?: number
}


export type RpnApiListRpnServerCapabilitiesRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of servers per page.
   */
  pageSize?: number
  /**
   * Order of the servers.
   */
  orderBy?: ListRpnServerCapabilitiesRequestOrderBy
  /**
   * Filter servers by project ID.
   */
  projectId?: string
}


export type RpnSanApiAddIpRequest = {
  /**
   * RPN SAN ID.
   */
  rpnSanId: number
  /**
   * An array of IP ID.
   */
  ipIds: number[]
}


export type RpnSanApiCreateRpnSanRequest = {
  /**
   * Offer ID.
   */
  offerId: number
  /**
   * Your project ID.
   */
  projectId?: string
}


export type RpnSanApiDeleteRpnSanRequest = {
  /**
   * RPN SAN ID.
   */
  rpnSanId: number
}


export type RpnSanApiGetRpnSanRequest = {
  /**
   * RPN SAN ID.
   */
  rpnSanId: number
}


export type RpnSanApiListAvailableIpsRequest = {
  /**
   * RPN SAN ID.
   */
  rpnSanId: number
  /**
   * Filter by IP type (server | rpnv2_subnet).
   */
  type?: RpnSanIpType
}


export type RpnSanApiListIpsRequest = {
  /**
   * RPN SAN ID.
   */
  rpnSanId: number
  /**
   * Filter by IP type (server | rpnv2_subnet).
   */
  type?: RpnSanIpType
}


export type RpnSanApiListRpnSansRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of RPN SANs per page.
   */
  pageSize?: number
  /**
   * Order of the RPN SANs.
   */
  orderBy?: ListRpnSansRequestOrderBy
  /**
   * Filter RPN SANs by project ID.
   */
  projectId?: string
}


export type RpnSanApiRemoveIpRequest = {
  /**
   * RPN SAN ID.
   */
  rpnSanId: number
  /**
   * An array of IP ID.
   */
  ipIds: number[]
}


export type RpnV1ApiAcceptRpnInviteRequest = {
  /**
   * The member ID.
   */
  memberId: number
}


export type RpnV1ApiAddRpnGroupMembersRequest = {
  /**
   * The rpn v1 group ID.
   */
  groupId: number
  /**
   * A collection of rpn v1 capable server IDs.
   */
  serverIds?: number[]
  /**
   * A collection of rpn v1 capable RPN SAN server IDs.
   */
  sanServerIds?: number[]
}


export type RpnV1ApiCreateRpnGroupRequest = {
  /**
   * Rpn v1 group name.
   */
  name: string
  /**
   * A collection of rpn v1 capable servers.
   */
  serverIds?: number[]
  /**
   * A collection of rpn v1 capable rpn sans servers.
   */
  sanServerIds?: number[]
  /**
   * A project ID.
   */
  projectId?: string
}


export type RpnV1ApiDeleteRpnGroupMembersRequest = {
  /**
   * The rpn v1 group ID.
   */
  groupId: number
  /**
   * A collection of rpn v1 group members IDs.
   */
  memberIds: number[]
}


export type RpnV1ApiDeleteRpnGroupRequest = {
  /**
   * Rpn v1 group ID.
   */
  groupId: number
}


export type RpnV1ApiGetRpnGroupRequest = {
  /**
   * Rpn v1 group ID.
   */
  groupId: number
}


export type RpnV1ApiLeaveRpnGroupRequest = {
  /**
   * The RPN V1 group ID.
   */
  groupId: number
  /**
   * A collection of rpn v1 group members IDs.
   */
  memberIds: number[]
}


export type RpnV1ApiListRpnCapableSanServersRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn capable resources per page.
   */
  pageSize?: number
  /**
   * Order of the rpn capable resources.
   */
  orderBy?: ListRpnCapableSanServersRequestOrderBy
  /**
   * Filter rpn capable resources by project ID.
   */
  projectId?: string
}


export type RpnV1ApiListRpnCapableServersRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn capable resources per page.
   */
  pageSize?: number
  /**
   * Order of the rpn capable resources.
   */
  orderBy?: ListRpnCapableServersRequestOrderBy
  /**
   * Filter rpn capable resources by project ID.
   */
  projectId?: string
}


export type RpnV1ApiListRpnGroupMembersRequest = {
  /**
   * Filter rpn v1 group members by group ID.
   */
  groupId: number
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn v1 group members per page.
   */
  pageSize?: number
  /**
   * Order of the rpn v1 group members.
   */
  orderBy?: ListRpnGroupMembersRequestOrderBy
  /**
   * A project ID.
   */
  projectId?: string
}


export type RpnV1ApiListRpnGroupsRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn v1 groups per page.
   */
  pageSize?: number
  /**
   * Order of the rpn v1 groups.
   */
  orderBy?: ListRpnGroupsRequestOrderBy
  /**
   * Filter rpn v1 groups by project ID.
   */
  projectId?: string
}


export type RpnV1ApiListRpnInvitesRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn capable resources per page.
   */
  pageSize?: number
  /**
   * Order of the rpn capable resources.
   */
  orderBy?: ListRpnInvitesRequestOrderBy
  /**
   * Filter rpn capable resources by project ID.
   */
  projectId?: string
}


export type RpnV1ApiRefuseRpnInviteRequest = {
  /**
   * The member ID.
   */
  memberId: number
}


export type RpnV1ApiRpnGroupInviteRequest = {
  /**
   * The RPN V1 group ID.
   */
  groupId: number
  /**
   * A collection of external server IDs.
   */
  serverIds: number[]
  /**
   * A project ID.
   */
  projectId?: string
}


export type RpnV1ApiUpdateRpnGroupNameRequest = {
  /**
   * Rpn v1 group ID.
   */
  groupId: number
  /**
   * New rpn v1 group name.
   */
  name?: string
}


export type RpnV2ApiAddRpnV2MembersRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
  /**
   * A collection of server IDs.
   */
  servers: number[]
}


export type RpnV2ApiCreateRpnV2GroupRequest = {
  /**
   * Project ID of the RPN V2 group.
   */
  projectId?: string
  /**
   * RPN V2 group type (qing / standard).
   */
  type?: RpnV2GroupType
  /**
   * RPN V2 group name.
   */
  name: string
  /**
   * A collection of server IDs.
   */
  servers: number[]
}


export type RpnV2ApiDeleteRpnV2GroupRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
}


export type RpnV2ApiDeleteRpnV2MembersRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
  /**
   * A collection of member IDs.
   */
  memberIds: number[]
}


export type RpnV2ApiDisableRpnV2GroupCompatibilityRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
}


export type RpnV2ApiEnableRpnV2GroupCompatibilityRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
  /**
   * RPN V1 group ID.
   */
  rpnv1GroupId: number
}


export type RpnV2ApiGetRpnV2GroupRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
}


export type RpnV2ApiListRpnV2CapableResourcesRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn v2 capable resources per page.
   */
  pageSize?: number
  /**
   * Order of the rpn v2 capable resources.
   */
  orderBy?: ListRpnV2CapableResourcesRequestOrderBy
  /**
   * Filter rpn v2 capable resources by project ID.
   */
  projectId?: string
}


export type RpnV2ApiListRpnV2GroupLogsRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn v2 group logs per page.
   */
  pageSize?: number
  /**
   * Order of the rpn v2 group logs.
   */
  orderBy?: ListRpnV2GroupLogsRequestOrderBy
}


export type RpnV2ApiListRpnV2GroupsRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn v2 groups per page.
   */
  pageSize?: number
  /**
   * Order of the rpn v2 groups.
   */
  orderBy?: ListRpnV2GroupsRequestOrderBy
  /**
   * Filter rpn v2 groups by project ID.
   */
  projectId?: string
}


export type RpnV2ApiListRpnV2MembersRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of rpn v2 group members per page.
   */
  pageSize?: number
  /**
   * Order of the rpn v2 group members.
   */
  orderBy?: ListRpnV2MembersRequestOrderBy
  /**
   * Filter members by type.
   */
  type?: ListRpnV2MembersRequestType
}


export type RpnV2ApiUpdateRpnV2GroupNameRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
  /**
   * RPN V2 group name.
   */
  name?: string
}


export type RpnV2ApiUpdateRpnV2VlanForMembersRequest = {
  /**
   * RPN V2 group ID.
   */
  groupId: number
  /**
   * RPN V2 member IDs.
   */
  memberIds: number[]
  /**
   * Min: 0.
Max: 3967.
   */
  vlan?: number
}


export interface ServerDefaultPartitioning {
  /**
   * Default partitions.
   */
  partitions: Partition[]
}


export interface ServerInstall {
  osId: number
  hostname: string
  userLogin?: string
  partitions: Partition[]
  sshKeyIds: string[]
  status: ServerInstallStatus
  panelUrl?: string
}


export type StartBMCAccessRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to start the BMC access.
   */
  serverId: number
  /**
   * The IP authorized to connect to the given server.
   */
  ip: string
}


export type StartRescueRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to start rescue.
   */
  serverId: number
  /**
   * OS ID to use to start rescue.
   */
  osId: number
}


export type StartServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to start.
   */
  serverId: number
}


export type StopBMCAccessRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to stop BMC access.
   */
  serverId: number
}


export type StopRescueRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server to stop rescue.
   */
  serverId: number
}


export type StopServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to stop.
   */
  serverId: number
}


export type SubscribeServerOptionRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to subscribe server option.
   */
  serverId: number
  /**
   * Option ID to subscribe.
   */
  optionId: number
}


export type SubscribeStorageOptionsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID of the storage options to subscribe.
   */
  serverId: number
  /**
   * Option IDs of the storage options to subscribe.
   */
  optionsIds: number[]
}


export interface SubscribeStorageOptionsResponse {
  /**
   * Services subscribe storage options.
   */
  services: Service[]
}


export type UpdateRaidRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the server.
   */
  serverId: number
  /**
   * RAIDs to update.
   */
  raidArrays: UpdatableRaidArray[]
}


export type UpdateReverseRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * ID of the IP.
   */
  ipId: number
  /**
   * Reverse to apply on the IP.
   */
  reverse: string
}


export type UpdateServerBackupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to update backup.
   */
  serverId: number
  /**
   * Password of the server backup.
   */
  password?: string
  /**
   * Autologin of the server backup.
   */
  autologin?: boolean
  /**
   * Boolean to enable or disable ACL.
   */
  aclEnabled?: boolean
}


export type UpdateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to update.
   */
  serverId: number
  /**
   * Hostname of the server to update.
   */
  hostname?: string
  /**
   * Flag to enable or not the IPv6 of server.
   */
  enableIpv6?: boolean
}


export type UpdateServerTagsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   * Server ID to update the tags.
   */
  serverId: number
  /**
   * Tags of server to update.
   */
  tags?: string[]
}


