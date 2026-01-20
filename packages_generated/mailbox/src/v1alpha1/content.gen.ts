// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DomainRecordStatus,
  DomainStatus,
  MailboxStatus,
} from './types.gen.js'


/** Lists transient statutes of the enum {@link DomainRecordStatus}. */
export const DOMAIN_RECORD_TRANSIENT_STATUSES: DomainRecordStatus[] = [
  'validating',
]

/** Lists transient statutes of the enum {@link DomainStatus}. */
export const DOMAIN_TRANSIENT_STATUSES: DomainStatus[] = [
  'creating',
  'validating',
  'provisioning',
  'deleting',
]

/** Lists transient statutes of the enum {@link MailboxStatus}. */
export const MAILBOX_TRANSIENT_STATUSES: MailboxStatus[] = [
  'creating',
  'waiting_payment',
  'waiting_domain',
  'renewing',
  'deleting',
  'restoring',
]

