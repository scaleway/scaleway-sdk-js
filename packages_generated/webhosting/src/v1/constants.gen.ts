// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  BackupItemType,
  BackupStatus,
  BillingMode,
  CheckFreeDomainAvailabilityResponseUnavailableReason,
  CommitmentType,
  DnsRecordStatus,
  DnsRecordType,
  DnsRecordsStatus,
  DomainAction,
  DomainAvailabilityAction,
  DomainAvailabilityStatus,
  DomainDnsAction,
  DomainStatus,
  DomainZoneOwner,
  HostingProvider,
  HostingStatus,
  ListBackupsRequestOrderBy,
  ListDatabaseUsersRequestOrderBy,
  ListDatabasesRequestOrderBy,
  ListFtpAccountsRequestOrderBy,
  ListHostingsRequestOrderBy,
  ListMailAccountsRequestOrderBy,
  ListOffersRequestOrderBy,
  ListWebsitesRequestOrderBy,
  NameserverStatus,
  OfferOptionName,
  OfferOptionWarning,
  PlatformPlatformGroup,
  ProgressStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link BackupItemType}. */
export const BACKUP_ITEM_TYPES: BackupItemType[] = [
  'unknown_backup_item_type',
  'full',
  'web',
  'mail',
  'db',
  'db_user',
  'ftp_user',
  'dns_zone',
  'cron_job',
  'ssl_certificate',
]

/** Lists all values of the enum {@link BackupStatus}. */
export const BACKUP_STATUSES: BackupStatus[] = [
  'unknown_backup_status',
  'active',
  'locked',
  'disabled',
  'damaged',
  'restoring',
]

/** Lists all values of the enum {@link BillingMode}. */
export const BILLING_MODES: BillingMode[] = [
  'unknown_billing_mode',
  'sample',
  'purchase_order',
]

/** Lists all values of the enum {@link CheckFreeDomainAvailabilityResponseUnavailableReason}. */
export const CHECK_FREE_DOMAIN_AVAILABILITY_RESPONSE_UNAVAILABLE_REASONS: CheckFreeDomainAvailabilityResponseUnavailableReason[] = [
  'unavailable_reason_unknown',
  'unavailable_reason_already_used',
  'unavailable_reason_too_short',
  'unavailable_reason_too_long',
  'unavailable_reason_invalid_characters',
  'unavailable_reason_starts_or_ends_with_hyphen',
  'unavailable_reason_contains_dots',
  'unavailable_reason_contains_reserved_keyword',
]

/** Lists all values of the enum {@link CommitmentType}. */
export const COMMITMENT_TYPES: CommitmentType[] = [
  'unknown_commitment_type',
  'first_commitment',
  'next_commitment',
]

/** Lists all values of the enum {@link DnsRecordStatus}. */
export const DNS_RECORD_STATUSES: DnsRecordStatus[] = [
  'unknown_status',
  'valid',
  'invalid',
]

/** Lists all values of the enum {@link DnsRecordType}. */
export const DNS_RECORD_TYPES: DnsRecordType[] = [
  'unknown_type',
  'a',
  'cname',
  'mx',
  'txt',
  'ns',
  'aaaa',
]

/** Lists all values of the enum {@link DnsRecordsStatus}. */
export const DNS_RECORDS_STATUSES: DnsRecordsStatus[] = [
  'unknown_status',
  'valid',
  'invalid',
]

/** Lists all values of the enum {@link DomainAction}. */
export const DOMAIN_ACTIONS: DomainAction[] = [
  'unknown_action',
  'transfer',
  'manage_external',
  'renew',
]

/** Lists all values of the enum {@link DomainAvailabilityAction}. */
export const DOMAIN_AVAILABILITY_ACTIONS: DomainAvailabilityAction[] = [
  'unknown_action',
  'register',
  'transfer',
  'manage_external',
]

/** Lists all values of the enum {@link DomainAvailabilityStatus}. */
export const DOMAIN_AVAILABILITY_STATUSES: DomainAvailabilityStatus[] = [
  'unknown_status',
  'available',
  'not_available',
  'owned',
  'validating',
  'error',
]

/** Lists all values of the enum {@link DomainDnsAction}. */
export const DOMAIN_DNS_ACTIONS: DomainDnsAction[] = [
  'unknown_dns_action',
  'auto_config_all_records',
  'auto_config_web_records',
  'auto_config_mail_records',
  'auto_config_nameservers',
  'auto_config_none',
]

/** Lists all values of the enum {@link DomainStatus}. */
export const DOMAIN_STATUSES: DomainStatus[] = [
  'unknown_status',
  'valid',
  'invalid',
  'validating',
  'error',
]

/** Lists all values of the enum {@link DomainZoneOwner}. */
export const DOMAIN_ZONE_OWNERS: DomainZoneOwner[] = [
  'unknown_zone_owner',
  'external',
  'scaleway',
  'online',
  'webhosting',
]

/** Lists all values of the enum {@link HostingProvider}. */
export const HOSTING_PROVIDERS: HostingProvider[] = [
  'unknown_provider',
  'elements',
  'dedibox',
]

/** Lists all values of the enum {@link HostingStatus}. */
export const HOSTING_STATUSES: HostingStatus[] = [
  'unknown_status',
  'delivering',
  'ready',
  'deleting',
  'error',
  'locked',
  'migrating',
  'updating',
  'payment_pending',
  'payment_failed',
]

/** Lists all values of the enum {@link ListBackupsRequestOrderBy}. */
export const LIST_BACKUPS_REQUEST_ORDER_BIES: ListBackupsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link ListDatabaseUsersRequestOrderBy}. */
export const LIST_DATABASE_USERS_REQUEST_ORDER_BIES: ListDatabaseUsersRequestOrderBy[] = [
  'username_asc',
  'username_desc',
]

/** Lists all values of the enum {@link ListDatabasesRequestOrderBy}. */
export const LIST_DATABASES_REQUEST_ORDER_BIES: ListDatabasesRequestOrderBy[] = [
  'database_name_asc',
  'database_name_desc',
]

/** Lists all values of the enum {@link ListFtpAccountsRequestOrderBy}. */
export const LIST_FTP_ACCOUNTS_REQUEST_ORDER_BIES: ListFtpAccountsRequestOrderBy[] = [
  'username_asc',
  'username_desc',
]

/** Lists all values of the enum {@link ListHostingsRequestOrderBy}. */
export const LIST_HOSTINGS_REQUEST_ORDER_BIES: ListHostingsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListMailAccountsRequestOrderBy}. */
export const LIST_MAIL_ACCOUNTS_REQUEST_ORDER_BIES: ListMailAccountsRequestOrderBy[] = [
  'username_asc',
  'username_desc',
  'domain_asc',
  'domain_desc',
]

/** Lists all values of the enum {@link ListOffersRequestOrderBy}. */
export const LIST_OFFERS_REQUEST_ORDER_BIES: ListOffersRequestOrderBy[] = [
  'price_asc',
]

/** Lists all values of the enum {@link ListWebsitesRequestOrderBy}. */
export const LIST_WEBSITES_REQUEST_ORDER_BIES: ListWebsitesRequestOrderBy[] = [
  'domain_asc',
  'domain_desc',
]

/** Lists all values of the enum {@link NameserverStatus}. */
export const NAMESERVER_STATUSES: NameserverStatus[] = [
  'unknown_status',
  'valid',
  'invalid',
]

/** Lists all values of the enum {@link OfferOptionName}. */
export const OFFER_OPTION_NAMES: OfferOptionName[] = [
  'unknown_name',
  'domain_count',
  'email_count',
  'storage_gb',
  'vcpu_count',
  'ram_gb',
  'backup',
  'dedicated_ip',
  'email_storage_gb',
  'database_count',
  'support',
  'additional_email',
]

/** Lists all values of the enum {@link OfferOptionWarning}. */
export const OFFER_OPTION_WARNINGS: OfferOptionWarning[] = [
  'unknown_warning',
  'quota_exceeded_warning',
  'usage_low_warning',
]

/** Lists all values of the enum {@link PlatformPlatformGroup}. */
export const PLATFORM_PLATFORM_GROUPS: PlatformPlatformGroup[] = [
  'unknown_group',
  'default',
  'premium',
]

/** Lists all values of the enum {@link ProgressStatus}. */
export const PROGRESS_STATUSES: ProgressStatus[] = [
  'unknown_status',
  'pending',
  'processing',
  'completed',
  'partially_completed',
  'failed',
  'aborted',
  'never_finished',
]

