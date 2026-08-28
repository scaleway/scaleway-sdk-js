// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  AliasStatus,
  DomainRecordDNSType,
  DomainRecordLevel,
  DomainRecordStatus,
  DomainStatus,
  ListAliasesRequestOrderBy,
  ListDomainsRequestOrderBy,
  ListMailboxesRequestOrderBy,
  MailboxStatus,
  MailboxSubscriptionPeriod,
} from './types.gen.js'


/** Lists all values of the enum {@link AliasStatus}. */
export const ALIAS_STATUSES: AliasStatus[] = [
  'unknown_status',
  'provisioning',
  'deleting',
  'ready',
]

/** Lists all values of the enum {@link DomainRecordDNSType}. */
export const DOMAIN_RECORD_DNS_TYPES: DomainRecordDNSType[] = [
  'unknown_dns_type',
  'cname_dns_type',
  'mx_dns_type',
  'srv_dns_type',
  'txt_dns_type',
]

/** Lists all values of the enum {@link DomainRecordLevel}. */
export const DOMAIN_RECORD_LEVELS: DomainRecordLevel[] = [
  'unknown_level',
  'required',
  'recommended',
  'optional',
]

/** Lists all values of the enum {@link DomainRecordStatus}. */
export const DOMAIN_RECORD_STATUSES: DomainRecordStatus[] = [
  'unknown_status',
  'validating',
  'valid',
  'invalid',
  'not_found',
]

/** Lists all values of the enum {@link DomainStatus}. */
export const DOMAIN_STATUSES: DomainStatus[] = [
  'unknown_status',
  'creating',
  'waiting_validation',
  'validating',
  'validation_failed',
  'provisioning',
  'ready',
  'deleting',
]

/** Lists all values of the enum {@link ListAliasesRequestOrderBy}. */
export const LIST_ALIASES_REQUEST_ORDER_BIES: ListAliasesRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
  'name_desc',
  'name_asc',
]

/** Lists all values of the enum {@link ListDomainsRequestOrderBy}. */
export const LIST_DOMAINS_REQUEST_ORDER_BIES: ListDomainsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
  'name_desc',
  'name_asc',
  'mailbox_total_count_desc',
  'mailbox_total_count_asc',
]

/** Lists all values of the enum {@link ListMailboxesRequestOrderBy}. */
export const LIST_MAILBOXES_REQUEST_ORDER_BIES: ListMailboxesRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
  'email_desc',
  'email_asc',
]

/** Lists all values of the enum {@link MailboxStatus}. */
export const MAILBOX_STATUSES: MailboxStatus[] = [
  'unknown_status',
  'creating',
  'waiting_payment',
  'waiting_domain',
  'ready',
  'deletion_scheduled',
  'locked',
  'renewing',
  'deleting',
  'restoring',
  'payment_failed',
]

/** Lists all values of the enum {@link MailboxSubscriptionPeriod}. */
export const MAILBOX_SUBSCRIPTION_PERIODS: MailboxSubscriptionPeriod[] = [
  'unknown_subscription_period',
  'canceled',
  'monthly',
  'yearly',
]

