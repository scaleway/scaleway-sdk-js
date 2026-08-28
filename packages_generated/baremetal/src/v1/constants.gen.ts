// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  IPReverseStatus,
  IPVersion,
  ListServerEventsRequestOrderBy,
  ListServerPrivateNetworksRequestOrderBy,
  ListServersRequestOrderBy,
  ListSettingsRequestOrderBy,
  MemoryEccType,
  OfferStock,
  OfferSubscriptionPeriod,
  SchemaFilesystemFormat,
  SchemaPartitionLabel,
  SchemaPoolType,
  SchemaRAIDLevel,
  ServerBootType,
  ServerInstallStatus,
  ServerOptionOptionStatus,
  ServerPingStatus,
  ServerPrivateNetworkStatus,
  ServerStatus,
  SettingType,
} from './types.gen.js'


/** Lists all values of the enum {@link IPReverseStatus}. */
export const IP_REVERSE_STATUSES: IPReverseStatus[] = [
  'unknown',
  'pending',
  'active',
  'error',
]

/** Lists all values of the enum {@link IPVersion}. */
export const IP_VERSIONS: IPVersion[] = [
  'IPv4',
  'IPv6',
]

/** Lists all values of the enum {@link ListServerEventsRequestOrderBy}. */
export const LIST_SERVER_EVENTS_REQUEST_ORDER_BIES: ListServerEventsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListServerPrivateNetworksRequestOrderBy}. */
export const LIST_SERVER_PRIVATE_NETWORKS_REQUEST_ORDER_BIES: ListServerPrivateNetworksRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListServersRequestOrderBy}. */
export const LIST_SERVERS_REQUEST_ORDER_BIES: ListServersRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListSettingsRequestOrderBy}. */
export const LIST_SETTINGS_REQUEST_ORDER_BIES: ListSettingsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link MemoryEccType}. */
export const MEMORY_ECC_TYPES: MemoryEccType[] = [
  'unknown_ecc_type',
  'none',
  'standard',
  'on_die',
]

/** Lists all values of the enum {@link OfferStock}. */
export const OFFER_STOCKS: OfferStock[] = [
  'empty',
  'low',
  'available',
]

/** Lists all values of the enum {@link OfferSubscriptionPeriod}. */
export const OFFER_SUBSCRIPTION_PERIODS: OfferSubscriptionPeriod[] = [
  'unknown_subscription_period',
  'hourly',
  'monthly',
]

/** Lists all values of the enum {@link SchemaFilesystemFormat}. */
export const SCHEMA_FILESYSTEM_FORMATS: SchemaFilesystemFormat[] = [
  'unknown_format',
  'fat32',
  'ext4',
  'swap',
  'zfs',
  'xfs',
]

/** Lists all values of the enum {@link SchemaPartitionLabel}. */
export const SCHEMA_PARTITION_LABELS: SchemaPartitionLabel[] = [
  'unknown_partition_label',
  'uefi',
  'legacy',
  'root',
  'boot',
  'swap',
  'data',
  'home',
  'raid',
  'zfs',
]

/** Lists all values of the enum {@link SchemaPoolType}. */
export const SCHEMA_POOL_TYPES: SchemaPoolType[] = [
  'unknown_type',
  'no_raid',
  'mirror',
  'raidz1',
  'raidz2',
]

/** Lists all values of the enum {@link SchemaRAIDLevel}. */
export const SCHEMA_RAID_LEVELS: SchemaRAIDLevel[] = [
  'unknown_raid_level',
  'raid_level_0',
  'raid_level_1',
  'raid_level_5',
  'raid_level_6',
  'raid_level_10',
]

/** Lists all values of the enum {@link ServerBootType}. */
export const SERVER_BOOT_TYPES: ServerBootType[] = [
  'unknown_boot_type',
  'normal',
  'rescue',
]

/** Lists all values of the enum {@link ServerInstallStatus}. */
export const SERVER_INSTALL_STATUSES: ServerInstallStatus[] = [
  'unknown',
  'to_install',
  'installing',
  'completed',
  'error',
]

/** Lists all values of the enum {@link ServerOptionOptionStatus}. */
export const SERVER_OPTION_OPTION_STATUSES: ServerOptionOptionStatus[] = [
  'option_status_unknown',
  'option_status_enable',
  'option_status_enabling',
  'option_status_disabling',
  'option_status_error',
]

/** Lists all values of the enum {@link ServerPingStatus}. */
export const SERVER_PING_STATUSES: ServerPingStatus[] = [
  'ping_status_unknown',
  'ping_status_up',
  'ping_status_down',
]

/** Lists all values of the enum {@link ServerPrivateNetworkStatus}. */
export const SERVER_PRIVATE_NETWORK_STATUSES: ServerPrivateNetworkStatus[] = [
  'unknown',
  'attaching',
  'attached',
  'error',
  'detaching',
  'locked',
]

/** Lists all values of the enum {@link ServerStatus}. */
export const SERVER_STATUSES: ServerStatus[] = [
  'unknown',
  'delivering',
  'ready',
  'stopping',
  'stopped',
  'starting',
  'error',
  'deleting',
  'locked',
  'out_of_stock',
  'ordered',
  'resetting',
  'migrating',
]

/** Lists all values of the enum {@link SettingType}. */
export const SETTING_TYPES: SettingType[] = [
  'unknown',
  'smtp',
]

