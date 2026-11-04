// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  AttachFailoverIPToMacAddressRequestMacType,
  BMCAccessStatus,
  BackupStatus,
  FailoverBlockVersion,
  FailoverIPInterfaceType,
  FailoverIPStatus,
  FailoverIPVersion,
  GetRpnStatusResponseStatus,
  IPSemantic,
  IPStatus,
  IPVersion,
  IPv6BlockDelegationStatus,
  InvoicePaymentMethod,
  InvoiceStatus,
  ListFailoverIPsRequestOrderBy,
  ListInvoicesRequestOrderBy,
  ListOSRequestOrderBy,
  ListOffersRequestOrderBy,
  ListRefundsRequestOrderBy,
  ListRpnCapableSanServersRequestOrderBy,
  ListRpnCapableServersRequestOrderBy,
  ListRpnGroupMembersRequestOrderBy,
  ListRpnGroupsRequestOrderBy,
  ListRpnInvitesRequestOrderBy,
  ListRpnSansRequestOrderBy,
  ListRpnServerCapabilitiesRequestOrderBy,
  ListRpnV2CapableResourcesRequestOrderBy,
  ListRpnV2GroupLogsRequestOrderBy,
  ListRpnV2GroupsRequestOrderBy,
  ListRpnV2MembersRequestOrderBy,
  ListRpnV2MembersRequestType,
  ListServerDisksRequestOrderBy,
  ListServerEventsRequestOrderBy,
  ListServersRequestOrderBy,
  ListServicesRequestOrderBy,
  LogAction,
  LogStatus,
  MemoryType,
  NetworkInterfaceInterfaceType,
  OSArch,
  OSType,
  OfferAntiDosInfoType,
  OfferCatalog,
  OfferPaymentFrequency,
  OfferSANInfoType,
  OfferServerInfoStock,
  PartitionFileSystem,
  PartitionType,
  RaidArrayRaidLevel,
  RefundMethod,
  RefundStatus,
  RescueProtocol,
  RpnGroupMemberStatus,
  RpnGroupType,
  RpnSanIpType,
  RpnSanStatus,
  RpnV2GroupStatus,
  RpnV2GroupType,
  RpnV2MemberStatus,
  ServerDiskType,
  ServerInstallStatus,
  ServerStatus,
  ServiceLevelLevel,
  ServiceProvisioningStatus,
  ServiceType,
} from './types.gen.js'


/** Lists all values of the enum {@link AttachFailoverIPToMacAddressRequestMacType}. */
export const ATTACH_FAILOVER_IP_TO_MAC_ADDRESS_REQUEST_MAC_TYPES: AttachFailoverIPToMacAddressRequestMacType[] = [
  'mac_type_unknown',
  'vmware',
  'kvm',
  'xen',
]

/** Lists all values of the enum {@link BMCAccessStatus}. */
export const BMC_ACCESS_STATUSES: BMCAccessStatus[] = [
  'unknown',
  'creating',
  'created',
  'deleting',
]

/** Lists all values of the enum {@link BackupStatus}. */
export const BACKUP_STATUSES: BackupStatus[] = [
  'unknown_backup_status',
  'uninitialized',
  'inactive',
  'ready',
]

/** Lists all values of the enum {@link FailoverBlockVersion}. */
export const FAILOVER_BLOCK_VERSIONS: FailoverBlockVersion[] = [
  'unknown_version',
  'ipv4',
  'ipv6',
]

/** Lists all values of the enum {@link FailoverIPInterfaceType}. */
export const FAILOVER_IP_INTERFACE_TYPES: FailoverIPInterfaceType[] = [
  'unknown',
  'normal',
  'ipmi',
  'virtual',
]

/** Lists all values of the enum {@link FailoverIPStatus}. */
export const FAILOVER_IP_STATUSES: FailoverIPStatus[] = [
  'unknown_status',
  'ready',
  'busy',
  'locked',
]

/** Lists all values of the enum {@link FailoverIPVersion}. */
export const FAILOVER_IP_VERSIONS: FailoverIPVersion[] = [
  'unknown_version',
  'ipv4',
  'ipv6',
]

/** Lists all values of the enum {@link GetRpnStatusResponseStatus}. */
export const GET_RPN_STATUS_RESPONSE_STATUSES: GetRpnStatusResponseStatus[] = [
  'unknown_status',
  'busy',
  'operational',
]

/** Lists all values of the enum {@link IPSemantic}. */
export const IP_SEMANTICS: IPSemantic[] = [
  'unknown',
  'proxad',
  'ext',
  'public',
  'private',
  'ipmi',
  'adm',
  'redirect',
  'migration',
]

/** Lists all values of the enum {@link IPStatus}. */
export const IP_STATUSES: IPStatus[] = [
  'unknown_status',
  'ready',
  'busy',
  'locked',
]

/** Lists all values of the enum {@link IPVersion}. */
export const IP_VERSIONS: IPVersion[] = [
  'ipv4',
  'ipv6',
]

/** Lists all values of the enum {@link IPv6BlockDelegationStatus}. */
export const I_PV6_BLOCK_DELEGATION_STATUSES: IPv6BlockDelegationStatus[] = [
  'unknown_status',
  'updating',
  'done',
]

/** Lists all values of the enum {@link InvoicePaymentMethod}. */
export const INVOICE_PAYMENT_METHODS: InvoicePaymentMethod[] = [
  'unknown_payment_method',
  'credit_card',
  'amex',
  'paypal',
  'transfer',
  'direct_debit',
]

/** Lists all values of the enum {@link InvoiceStatus}. */
export const INVOICE_STATUSES: InvoiceStatus[] = [
  'unknown_invoice_status',
  'unpaid',
  'paid',
  'errored',
]

/** Lists all values of the enum {@link ListFailoverIPsRequestOrderBy}. */
export const LIST_FAILOVER_I_PS_REQUEST_ORDER_BIES: ListFailoverIPsRequestOrderBy[] = [
  'ip_asc',
  'ip_desc',
]

/** Lists all values of the enum {@link ListInvoicesRequestOrderBy}. */
export const LIST_INVOICES_REQUEST_ORDER_BIES: ListInvoicesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListOSRequestOrderBy}. */
export const LIST_OS_REQUEST_ORDER_BIES: ListOSRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'released_at_asc',
  'released_at_desc',
]

/** Lists all values of the enum {@link ListOffersRequestOrderBy}. */
export const LIST_OFFERS_REQUEST_ORDER_BIES: ListOffersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
  'price_asc',
  'price_desc',
]

/** Lists all values of the enum {@link ListRefundsRequestOrderBy}. */
export const LIST_REFUNDS_REQUEST_ORDER_BIES: ListRefundsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnCapableSanServersRequestOrderBy}. */
export const LIST_RPN_CAPABLE_SAN_SERVERS_REQUEST_ORDER_BIES: ListRpnCapableSanServersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnCapableServersRequestOrderBy}. */
export const LIST_RPN_CAPABLE_SERVERS_REQUEST_ORDER_BIES: ListRpnCapableServersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnGroupMembersRequestOrderBy}. */
export const LIST_RPN_GROUP_MEMBERS_REQUEST_ORDER_BIES: ListRpnGroupMembersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnGroupsRequestOrderBy}. */
export const LIST_RPN_GROUPS_REQUEST_ORDER_BIES: ListRpnGroupsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnInvitesRequestOrderBy}. */
export const LIST_RPN_INVITES_REQUEST_ORDER_BIES: ListRpnInvitesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnSansRequestOrderBy}. */
export const LIST_RPN_SANS_REQUEST_ORDER_BIES: ListRpnSansRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnServerCapabilitiesRequestOrderBy}. */
export const LIST_RPN_SERVER_CAPABILITIES_REQUEST_ORDER_BIES: ListRpnServerCapabilitiesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnV2CapableResourcesRequestOrderBy}. */
export const LIST_RPN_V2_CAPABLE_RESOURCES_REQUEST_ORDER_BIES: ListRpnV2CapableResourcesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnV2GroupLogsRequestOrderBy}. */
export const LIST_RPN_V2_GROUP_LOGS_REQUEST_ORDER_BIES: ListRpnV2GroupLogsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnV2GroupsRequestOrderBy}. */
export const LIST_RPN_V2_GROUPS_REQUEST_ORDER_BIES: ListRpnV2GroupsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnV2MembersRequestOrderBy}. */
export const LIST_RPN_V2_MEMBERS_REQUEST_ORDER_BIES: ListRpnV2MembersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListRpnV2MembersRequestType}. */
export const LIST_RPN_V2_MEMBERS_REQUEST_TYPES: ListRpnV2MembersRequestType[] = [
  'unknown_type',
  'rpnv1_group',
  'server',
]

/** Lists all values of the enum {@link ListServerDisksRequestOrderBy}. */
export const LIST_SERVER_DISKS_REQUEST_ORDER_BIES: ListServerDisksRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListServerEventsRequestOrderBy}. */
export const LIST_SERVER_EVENTS_REQUEST_ORDER_BIES: ListServerEventsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListServersRequestOrderBy}. */
export const LIST_SERVERS_REQUEST_ORDER_BIES: ListServersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListServicesRequestOrderBy}. */
export const LIST_SERVICES_REQUEST_ORDER_BIES: ListServicesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link LogAction}. */
export const LOG_ACTIONS: LogAction[] = [
  'unknown_log_action',
  'group_created',
  'group_deleted',
  'members_added',
  'members_deleted',
  'description_updated',
  'rpnv1_members_added',
  'rpnv1_members_deleted',
  'vlan_updated',
  'vlan_updated_on_all_servers',
]

/** Lists all values of the enum {@link LogStatus}. */
export const LOG_STATUSES: LogStatus[] = [
  'unknown_log_status',
  'success',
  'in_progress',
  'error',
]

/** Lists all values of the enum {@link MemoryType}. */
export const MEMORY_TYPES: MemoryType[] = [
  'ddr2',
  'ddr3',
  'ddr4',
  'ddr5',
]

/** Lists all values of the enum {@link NetworkInterfaceInterfaceType}. */
export const NETWORK_INTERFACE_INTERFACE_TYPES: NetworkInterfaceInterfaceType[] = [
  'unknown',
  'normal',
  'ipmi',
  'virtual',
]

/** Lists all values of the enum {@link OSArch}. */
export const OS_ARCHES: OSArch[] = [
  'unknown_arch',
  'amd64',
  'x86',
  'arm',
  'arm64',
]

/** Lists all values of the enum {@link OSType}. */
export const OS_TYPES: OSType[] = [
  'unknown_type',
  'server',
  'virtu',
  'panel',
  'desktop',
  'custom',
  'rescue',
]

/** Lists all values of the enum {@link OfferAntiDosInfoType}. */
export const OFFER_ANTI_DOS_INFO_TYPES: OfferAntiDosInfoType[] = [
  'minimal',
  'preventive',
  'curative',
]

/** Lists all values of the enum {@link OfferCatalog}. */
export const OFFER_CATALOGS: OfferCatalog[] = [
  'all',
  'default',
  'beta',
  'reseller',
  'premium',
  'volume',
  'admin',
  'inactive',
]

/** Lists all values of the enum {@link OfferPaymentFrequency}. */
export const OFFER_PAYMENT_FREQUENCIES: OfferPaymentFrequency[] = [
  'monthly',
  'oneshot',
]

/** Lists all values of the enum {@link OfferSANInfoType}. */
export const OFFER_SAN_INFO_TYPES: OfferSANInfoType[] = [
  'hdd',
  'ssd',
]

/** Lists all values of the enum {@link OfferServerInfoStock}. */
export const OFFER_SERVER_INFO_STOCKS: OfferServerInfoStock[] = [
  'empty',
  'low',
  'available',
]

/** Lists all values of the enum {@link PartitionFileSystem}. */
export const PARTITION_FILE_SYSTEMS: PartitionFileSystem[] = [
  'unknown',
  'efi',
  'swap',
  'ext4',
  'ext3',
  'ext2',
  'xfs',
  'ntfs',
  'fat32',
  'ufs',
]

/** Lists all values of the enum {@link PartitionType}. */
export const PARTITION_TYPES: PartitionType[] = [
  'primary',
  'extended',
  'logical',
]

/** Lists all values of the enum {@link RaidArrayRaidLevel}. */
export const RAID_ARRAY_RAID_LEVELS: RaidArrayRaidLevel[] = [
  'no_raid',
  'raid0',
  'raid1',
  'raid5',
  'raid6',
  'raid10',
]

/** Lists all values of the enum {@link RefundMethod}. */
export const REFUND_METHODS: RefundMethod[] = [
  'unknown_refund_method',
  'credit_card',
  'amex',
  'paypal',
  'transfer',
]

/** Lists all values of the enum {@link RefundStatus}. */
export const REFUND_STATUSES: RefundStatus[] = [
  'unknown_refund_status',
  'unpaid',
  'paid',
  'errored',
]

/** Lists all values of the enum {@link RescueProtocol}. */
export const RESCUE_PROTOCOLS: RescueProtocol[] = [
  'vnc',
  'ssh',
]

/** Lists all values of the enum {@link RpnGroupMemberStatus}. */
export const RPN_GROUP_MEMBER_STATUSES: RpnGroupMemberStatus[] = [
  'unknown_rpn_member_status',
  'pending_invitation',
  'active',
  'creating',
  'deleting',
  'deleted',
]

/** Lists all values of the enum {@link RpnGroupType}. */
export const RPN_GROUP_TYPES: RpnGroupType[] = [
  'unknown',
  'local',
  'shared',
]

/** Lists all values of the enum {@link RpnSanIpType}. */
export const RPN_SAN_IP_TYPES: RpnSanIpType[] = [
  'unknown',
  'server_ip',
  'rpnv2_subnet',
]

/** Lists all values of the enum {@link RpnSanStatus}. */
export const RPN_SAN_STATUSES: RpnSanStatus[] = [
  'unknown_status',
  'creating',
  'active',
  'deleting',
  'maintenance',
]

/** Lists all values of the enum {@link RpnV2GroupStatus}. */
export const RPN_V2_GROUP_STATUSES: RpnV2GroupStatus[] = [
  'unknown_group_status',
  'creating',
  'active',
  'updating',
  'deleting',
]

/** Lists all values of the enum {@link RpnV2GroupType}. */
export const RPN_V2_GROUP_TYPES: RpnV2GroupType[] = [
  'unknown_type',
  'standard',
  'qinq',
]

/** Lists all values of the enum {@link RpnV2MemberStatus}. */
export const RPN_V2_MEMBER_STATUSES: RpnV2MemberStatus[] = [
  'unknown_member_status',
  'creating',
  'active',
  'updating',
  'deleting',
]

/** Lists all values of the enum {@link ServerDiskType}. */
export const SERVER_DISK_TYPES: ServerDiskType[] = [
  'sata',
  'ssd',
  'sas',
  'sshd',
  'usb',
  'nvme',
]

/** Lists all values of the enum {@link ServerInstallStatus}. */
export const SERVER_INSTALL_STATUSES: ServerInstallStatus[] = [
  'unknown',
  'booting',
  'setting_up_raid',
  'partitioning',
  'formatting',
  'installing',
  'configuring',
  'configuring_bootloader',
  'rebooting',
  'installed',
]

/** Lists all values of the enum {@link ServerStatus}. */
export const SERVER_STATUSES: ServerStatus[] = [
  'unknown',
  'delivering',
  'installing',
  'ready',
  'stopped',
  'error',
  'locked',
  'rescue',
  'busy',
]

/** Lists all values of the enum {@link ServiceLevelLevel}. */
export const SERVICE_LEVEL_LEVELS: ServiceLevelLevel[] = [
  'unknown',
  'basic',
  'business',
]

/** Lists all values of the enum {@link ServiceProvisioningStatus}. */
export const SERVICE_PROVISIONING_STATUSES: ServiceProvisioningStatus[] = [
  'unknown',
  'delivering',
  'ready',
  'error',
  'expiring',
  'expired',
]

/** Lists all values of the enum {@link ServiceType}. */
export const SERVICE_TYPES: ServiceType[] = [
  'unknown_type',
  'service',
  'order',
]

