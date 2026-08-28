// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  BlocklistType,
  DomainLastStatusAutoconfigStateReason,
  DomainLastStatusRecordStatus,
  DomainReputationStatus,
  DomainStatus,
  EmailFlag,
  EmailRcptType,
  EmailStatus,
  ListBlocklistsRequestOrderBy,
  ListEmailsRequestOrderBy,
  ListWebhookEventsRequestOrderBy,
  ListWebhooksRequestOrderBy,
  OfferName,
  PoolStatus,
  ProjectSettingsPeriodicReportFrequency,
  WebhookEventStatus,
  WebhookEventType,
} from './types.gen.js'


/** Lists all values of the enum {@link BlocklistType}. */
export const BLOCKLIST_TYPES: BlocklistType[] = [
  'unknown_type',
  'mailbox_full',
  'mailbox_not_found',
]

/** Lists all values of the enum {@link DomainLastStatusAutoconfigStateReason}. */
export const DOMAIN_LAST_STATUS_AUTOCONFIG_STATE_REASONS: DomainLastStatusAutoconfigStateReason[] = [
  'unknown_reason',
  'permission_denied',
  'domain_not_found',
]

/** Lists all values of the enum {@link DomainLastStatusRecordStatus}. */
export const DOMAIN_LAST_STATUS_RECORD_STATUSES: DomainLastStatusRecordStatus[] = [
  'unknown_record_status',
  'valid',
  'invalid',
  'not_found',
]

/** Lists all values of the enum {@link DomainReputationStatus}. */
export const DOMAIN_REPUTATION_STATUSES: DomainReputationStatus[] = [
  'unknown_status',
  'excellent',
  'good',
  'average',
  'bad',
]

/** Lists all values of the enum {@link DomainStatus}. */
export const DOMAIN_STATUSES: DomainStatus[] = [
  'unknown',
  'checked',
  'unchecked',
  'invalid',
  'locked',
  'revoked',
  'pending',
  'autoconfiguring',
]

/** Lists all values of the enum {@link EmailFlag}. */
export const EMAIL_FLAGS: EmailFlag[] = [
  'unknown_flag',
  'soft_bounce',
  'hard_bounce',
  'spam',
  'mailbox_full',
  'mailbox_not_found',
  'greylisted',
  'send_before_expiration',
  'blocklisted',
]

/** Lists all values of the enum {@link EmailRcptType}. */
export const EMAIL_RCPT_TYPES: EmailRcptType[] = [
  'unknown_rcpt_type',
  'to',
  'cc',
  'bcc',
]

/** Lists all values of the enum {@link EmailStatus}. */
export const EMAIL_STATUSES: EmailStatus[] = [
  'unknown',
  'new',
  'sending',
  'sent',
  'failed',
  'canceled',
]

/** Lists all values of the enum {@link ListBlocklistsRequestOrderBy}. */
export const LIST_BLOCKLISTS_REQUEST_ORDER_BIES: ListBlocklistsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'ends_at_desc',
  'ends_at_asc',
]

/** Lists all values of the enum {@link ListEmailsRequestOrderBy}. */
export const LIST_EMAILS_REQUEST_ORDER_BIES: ListEmailsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
  'updated_at_desc',
  'updated_at_asc',
  'status_desc',
  'status_asc',
  'mail_from_desc',
  'mail_from_asc',
  'mail_rcpt_desc',
  'mail_rcpt_asc',
  'subject_desc',
  'subject_asc',
]

/** Lists all values of the enum {@link ListWebhookEventsRequestOrderBy}. */
export const LIST_WEBHOOK_EVENTS_REQUEST_ORDER_BIES: ListWebhookEventsRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link ListWebhooksRequestOrderBy}. */
export const LIST_WEBHOOKS_REQUEST_ORDER_BIES: ListWebhooksRequestOrderBy[] = [
  'created_at_desc',
  'created_at_asc',
]

/** Lists all values of the enum {@link OfferName}. */
export const OFFER_NAMES: OfferName[] = [
  'unknown_name',
  'essential',
  'scale',
]

/** Lists all values of the enum {@link PoolStatus}. */
export const POOL_STATUSES: PoolStatus[] = [
  'unknown_status',
  'disabled',
  'creating',
  'ready',
  'error',
]

/** Lists all values of the enum {@link ProjectSettingsPeriodicReportFrequency}. */
export const PROJECT_SETTINGS_PERIODIC_REPORT_FREQUENCIES: ProjectSettingsPeriodicReportFrequency[] = [
  'unknown_frequency',
  'monthly',
  'weekly',
  'daily',
]

/** Lists all values of the enum {@link WebhookEventStatus}. */
export const WEBHOOK_EVENT_STATUSES: WebhookEventStatus[] = [
  'unknown_status',
  'sending',
  'sent',
  'failed',
]

/** Lists all values of the enum {@link WebhookEventType}. */
export const WEBHOOK_EVENT_TYPES: WebhookEventType[] = [
  'unknown_type',
  'email_queued',
  'email_dropped',
  'email_deferred',
  'email_delivered',
  'email_spam',
  'email_mailbox_not_found',
  'email_blocklisted',
  'blocklist_created',
]

