// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type DomainLastStatusRecordStatus =
  | 'unknown_record_status'
  | 'valid'
  | 'invalid'
  | 'not_found'

export type DomainReputationStatus =
  | 'unknown_status'
  | 'excellent'
  | 'good'
  | 'average'
  | 'bad'

export type DomainStatus =
  | 'unknown'
  | 'checked'
  | 'unchecked'
  | 'invalid'
  | 'locked'
  | 'revoked'
  | 'pending'

export type EmailFlag =
  | 'unknown_flag'
  | 'soft_bounce'
  | 'hard_bounce'
  | 'spam'
  | 'mailbox_full'
  | 'mailbox_not_found'
  | 'greylisted'
  | 'send_before_expiration'

export type EmailRcptType = 'unknown_rcpt_type' | 'to' | 'cc' | 'bcc'

export type EmailStatus =
  | 'unknown'
  | 'new'
  | 'sending'
  | 'sent'
  | 'failed'
  | 'canceled'

export type ListEmailsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'
  | 'status_desc'
  | 'status_asc'
  | 'mail_from_desc'
  | 'mail_from_asc'
  | 'mail_rcpt_desc'
  | 'mail_rcpt_asc'
  | 'subject_desc'
  | 'subject_asc'

export interface EmailTry {
  /** Rank number of this attempt to send the email. */
  rank: number
  /** Date of the attempt to send the email. */
  triedAt?: Date
  /**
   * The SMTP status code received after the attempt. 0 if the attempt did not
   * reach an SMTP server.
   */
  code: number
  /**
   * The SMTP message received. If the attempt did not reach an SMTP server, the
   * message returned explains what happened.
   */
  message: string
}

export interface DomainReputation {
  /** Status of your domain's reputation. */
  status: DomainReputationStatus
  /**
   * A range from 0 to 100 that determines your domain's reputation score. A
   * score of `0` means a bad domain reputation and a score of `100` means an
   * excellent domain reputation.
   */
  score: number
  /** Time and date the score was calculated. */
  scoredAt?: Date
  /** The previously-calculated domain's reputation score. */
  previousScore?: number
  /** Time and date the previous reputation score was calculated. */
  previousScoredAt?: Date
}

export interface DomainStatistics {
  totalCount: number
  sentCount: number
  failedCount: number
  canceledCount: number
}

export interface CreateEmailRequestAddress {
  /** Email address. */
  email: string
  /** (Optional) Name displayed. */
  name?: string
}

export interface CreateEmailRequestAttachment {
  /** Filename of the attachment. */
  name: string
  /** MIME type of the attachment. */
  type: string
  /** Content of the attachment encoded in base64. */
  content: string
}

export interface CreateEmailRequestHeader {
  /** Email header key. */
  key: string
  /** Email header value. */
  value: string
}

export interface Email {
  /** Technical ID of the email. */
  id: string
  /** Message ID of the email. */
  messageId: string
  /** ID of the Project to which the email belongs. */
  projectId: string
  /** Email address of the sender. */
  mailFrom: string
  /** @deprecated Email address of the recipient. */
  rcptTo?: string
  /** Email address of the recipient. */
  mailRcpt: string
  /** Type of recipient. */
  rcptType: EmailRcptType
  /** Subject of the email. */
  subject: string
  /** Creation date of the email object. */
  createdAt?: Date
  /** Last update of the email object. */
  updatedAt?: Date
  /** Status of the email. */
  status: EmailStatus
  /** Additional status information. */
  statusDetails?: string
  /** Number of attempts to send the email. */
  tryCount: number
  /** Information about the last three attempts to send the email. */
  lastTries: EmailTry[]
  /**
   * Flags categorize emails. They allow you to obtain more information about
   * recurring errors, for example.
   */
  flags: EmailFlag[]
}

export interface DomainLastStatusDkimRecord {
  /** Status of the DKIM record's configuration. */
  status: DomainLastStatusRecordStatus
  /** Time and date the DKIM record was last valid. */
  lastValidAt?: Date
  /** An error text displays in case the record is not valid. */
  error?: string
}

export interface DomainLastStatusDmarcRecord {
  /** Status of the DMARC record's configuration. */
  status: DomainLastStatusRecordStatus
  /** Time and date the DMARC record was last valid. */
  lastValidAt?: Date
  /** An error text displays in case the record is not valid. */
  error?: string
}

export interface DomainLastStatusSpfRecord {
  /** Status of the SPF record's configuration. */
  status: DomainLastStatusRecordStatus
  /** Time and date the SPF record was last valid. */
  lastValidAt?: Date
  /** An error text displays in case the record is not valid. */
  error?: string
}

export interface Domain {
  /** ID of the domain. */
  id: string
  /** ID of the domain's Organization. */
  organizationId: string
  /** ID of the domain's Project. */
  projectId: string
  /** Domain name (example.com). */
  name: string
  /** Status of the domain. */
  status: DomainStatus
  /** Date and time of domain creation. */
  createdAt?: Date
  /** Date and time of the next scheduled check. */
  nextCheckAt?: Date
  /** Date and time the domain was last valid. */
  lastValidAt?: Date
  /** Date and time of the domain's deletion. */
  revokedAt?: Date
  /** @deprecated Error message returned if the last check failed. */
  lastError?: string
  /** Snippet of the SPF record to register in the DNS zone. */
  spfConfig: string
  /** DKIM public key to record in the DNS zone. */
  dkimConfig: string
  /** Domain's statistics. */
  statistics?: DomainStatistics
  /**
   * The domain's reputation is available when your domain is checked and has
   * sent enough emails.
   */
  reputation?: DomainReputation
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region: Region
}

export type CancelEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the email to cancel. */
  emailId: string
}

export type CheckDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the domain to check. */
  domainId: string
}

export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the project to which the domain belongs. */
  projectId?: string
  /** Fully qualified domain dame. */
  domainName: string
  /** Accept Scaleway's Terms of Service. */
  acceptTos: boolean
}

export type CreateEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Sender information. Must be from a checked domain declared in the Project. */
  from?: CreateEmailRequestAddress
  /** An array of the primary recipient's information. */
  to?: CreateEmailRequestAddress[]
  /** An array of the carbon copy recipient's information. */
  cc?: CreateEmailRequestAddress[]
  /** An array of the blind carbon copy recipient's information. */
  bcc?: CreateEmailRequestAddress[]
  /** Subject of the email. */
  subject: string
  /** Text content. */
  text: string
  /** HTML content. */
  html: string
  /** ID of the Project in which to create the email. */
  projectId?: string
  /** Array of attachments. */
  attachments?: CreateEmailRequestAttachment[]
  /** Maximum date to deliver the email. */
  sendBefore?: Date
  /** Array of additional headers as key-value. */
  additionalHeaders?: CreateEmailRequestHeader[]
}

export interface CreateEmailResponse {
  /** Single page of emails matching the requested criteria. */
  emails: Email[]
}

export interface DomainLastStatus {
  /** The ID of the domain. */
  domainId: string
  /** The domain name (example.com). */
  domainName: string
  /** The SPF record verification data. */
  spfRecord?: DomainLastStatusSpfRecord
  /** The DKIM record verification data. */
  dkimRecord?: DomainLastStatusDkimRecord
  /** The DMARC record verification data. */
  dmarcRecord?: DomainLastStatusDmarcRecord
}

export type GetDomainLastStatusRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the domain to delete. */
  domainId: string
}

export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the domain. */
  domainId: string
}

export type GetEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the email to retrieve. */
  emailId: string
}

export type GetStatisticsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** (Optional) Number of emails for this Project. */
  projectId?: string
  /**
   * (Optional) Number of emails sent from this domain (must be coherent with
   * the `project_id` and the `organization_id`).
   */
  domainId?: string
  /** (Optional) Number of emails created after this date. */
  since?: Date
  /** (Optional) Number of emails created before this date. */
  until?: Date
  /** (Optional) Number of emails sent with this sender's email address. */
  mailFrom?: string
}

export type ListDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Requested page number. Value must be greater or equal to 1. */
  page?: number
  /** Page size. */
  pageSize?: number
  projectId?: string
  status?: DomainStatus[]
  organizationId?: string
  name?: string
}

export interface ListDomainsResponse {
  /** Number of domains that match the request (without pagination). */
  totalCount: number
  domains: Domain[]
}

export type ListEmailsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  /** (Optional) ID of the Project in which to list the emails. */
  projectId?: string
  /** (Optional) ID of the domain for which to list the emails. */
  domainId?: string
  /** (Optional) ID of the message for which to list the emails. */
  messageId?: string
  /** (Optional) List emails created after this date. */
  since?: Date
  /** (Optional) List emails created before this date. */
  until?: Date
  /** (Optional) List emails sent with this sender's email address. */
  mailFrom?: string
  /** @deprecated List emails sent to this recipient's email address. */
  mailTo?: string
  /** (Optional) List emails sent to this recipient's email address. */
  mailRcpt?: string
  /** (Optional) List emails with any of these statuses. */
  statuses?: EmailStatus[]
  /** (Optional) List emails with this subject. */
  subject?: string
  /** (Optional) List emails by searching to all fields. */
  search?: string
  /** (Optional) List emails corresponding to specific criteria. */
  orderBy?: ListEmailsRequestOrderBy
  /** (Optional) List emails containing only specific flags. */
  flags?: EmailFlag[]
}

export interface ListEmailsResponse {
  /** Number of emails matching the requested criteria. */
  totalCount: number
  /** Single page of emails matching the requested criteria. */
  emails: Email[]
}

export type RevokeDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the domain to delete. */
  domainId: string
}

export interface Statistics {
  /** Total number of emails matching the requested criteria. */
  totalCount: number
  /**
   * Number of emails still in the `new` transient state. This means emails
   * received from the API but not yet processed.
   */
  newCount: number
  /**
   * Number of emails still in the `sending` transient state. This means emails
   * received from the API but not yet in their final status.
   */
  sendingCount: number
  /**
   * Number of emails in the final `sent` state. This means emails that have
   * been delivered to the target mail system.
   */
  sentCount: number
  /**
   * Number of emails in the final `failed` state. This means emails that have
   * been refused by the target mail system with a final error status.
   */
  failedCount: number
  /**
   * Number of emails in the final `canceled` state. This means emails that have
   * been canceled upon request.
   */
  canceledCount: number
}
