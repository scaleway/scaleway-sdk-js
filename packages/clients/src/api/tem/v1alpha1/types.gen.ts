// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type DomainStatus =
  | 'unknown'
  | 'checked'
  | 'unchecked'
  | 'invalid'
  | 'locked'
  | 'revoked'
  | 'pending'

export type EmailRcptType = 'unknown_rcpt_type' | 'to' | 'cc' | 'bcc'

export type EmailStatus =
  | 'unknown'
  | 'new'
  | 'sending'
  | 'sent'
  | 'failed'
  | 'canceled'

/** Create email request. address */
export interface CreateEmailRequestAddress {
  /** Email address */
  email: string
  /** Optional display name */
  name?: string
}

/** Create email request. attachment */
export interface CreateEmailRequestAttachment {
  /** Filename of the attachment */
  name: string
  /**
   * MIME type of the attachment (Currently only allow, text files, pdf and html
   * files)
   */
  type: string
  /** Content of the attachment, encoded in base64 */
  content: string
}

/** Create email response */
export interface CreateEmailResponse {
  /** Single page of emails matching the requested criteria */
  emails: Array<Email>
}

/** Domain */
export interface Domain {
  /** ID of the domain */
  id: string
  /** ID of the organization to which the domain belongs */
  organizationId: string
  /** ID of the project */
  projectId: string
  /** Domain name (example.com) */
  name: string
  /** Status of the domain */
  status: DomainStatus
  /** Date and time of domain's creation */
  createdAt?: Date
  /** Date and time of the next scheduled check */
  nextCheckAt?: Date
  /** Date and time the domain was last found to be valid */
  lastValidAt?: Date
  /** Date and time of the revocation of the domain */
  revokedAt?: Date
  /** Error message if the last check failed */
  lastError?: string
  /** Snippet of the SPF record that should be registered in the DNS zone */
  spfConfig: string
  /** DKIM public key, as should be recorded in the DNS zone */
  dkimConfig: string
  /** Domain's statistics */
  statistics?: DomainStatistics
  region: Region
}

export interface DomainStatistics {
  totalCount: number
  sentCount: number
  failedCount: number
  canceledCount: number
}

/** Email */
export interface Email {
  /** Technical ID of the email */
  id: string
  /** MessageID of the email */
  messageId: string
  /** ID of the project to which the email belongs */
  projectId: string
  /** Email address of the sender */
  mailFrom: string
  /** Email address of the recipient */
  rcptTo: string
  /** Type of the recipient */
  rcptType: EmailRcptType
  /** Creation date of the email object */
  createdAt?: Date
  /** Last update time of the email object */
  updatedAt?: Date
  /** Status of the email */
  status: EmailStatus
  /** Additional information on the status */
  statusDetails?: string
  /** Total number of attempts to send the email */
  tryCount: number
  /** Informations about the latest three attempts to send the email */
  lastTries: Array<EmailTry>
}

/** Email. try */
export interface EmailTry {
  /** Rank number of this attempt to send the email */
  rank: number
  /** Date of the attempt */
  triedAt?: Date
  /**
   * The SMTP status code received after the attempt. 0 if the attempt did not
   * reach an SMTP server.
   */
  code: number
  /**
   * The SMTP message received, if any. If the attempt did not reach an SMTP
   * server, the message says why.
   */
  message: string
}

/** List domains response */
export interface ListDomainsResponse {
  /** Total number of domains matching the request (without pagination) */
  totalCount: number
  domains: Array<Domain>
}

/** List emails response */
export interface ListEmailsResponse {
  /** Count of all emails matching the requested criteria */
  totalCount: number
  /** Single page of emails matching the requested criteria */
  emails: Array<Email>
}

/** Statistics */
export interface Statistics {
  /** Total number of emails matching the request criteria */
  totalCount: number
  /**
   * Number of emails still in the `new` transient state (received from the API,
   * not yet processed)
   */
  newCount: number
  /**
   * Number of emails still in the `sending` transient state (received from the
   * API, not yet in their final status)
   */
  sendingCount: number
  /**
   * Number of emails in the final `sent` state (have been delivered to the
   * target mail system)
   */
  sentCount: number
  /**
   * Number of emails in the final `failed` state (refused by the target mail
   * system with a final error status)
   */
  failedCount: number
  /**
   * Number of emails in the final `canceled` state (canceled by customer's
   * request)
   */
  canceledCount: number
}

export type GetServiceInfoRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
}

export type CreateEmailRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Sender information (must be from a checked domain declared in the project) */
  from?: CreateEmailRequestAddress
  /** Array of recipient information (limited to 1 recipient) */
  to?: Array<CreateEmailRequestAddress>
  /** Array of recipient information (unimplemented) */
  cc?: Array<CreateEmailRequestAddress>
  /** Array of recipient information (unimplemented) */
  bcc?: Array<CreateEmailRequestAddress>
  /** Message subject */
  subject: string
  /** Text content */
  text: string
  /** HTML content */
  html: string
  /** ID of the project in which to create the email */
  projectId?: string
  /** Array of attachments */
  attachments?: Array<CreateEmailRequestAttachment>
  /** Maximum date to deliver mail */
  sendBefore?: Date
}

export type GetEmailRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the email to retrieve */
  emailId: string
}

export type ListEmailsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  page?: number
  pageSize?: number
  /** Optional ID of the project in which to list the emails */
  projectId?: string
  /** Optional ID of the domain for which to list the emails */
  domainId?: string
  /** Optional ID of the message for which to list the emails */
  messageId?: string
  /** Optional, list emails created after this date */
  since?: Date
  /** Optional, list emails created before this date */
  until?: Date
  /** Optional, list emails sent with this `mail_from` sender's address */
  mailFrom?: string
  /** Optional, list emails sent with this `mail_to` recipient's address */
  mailTo?: string
  /** Optional, list emails having any of this status */
  statuses?: Array<EmailStatus>
}

export type GetStatisticsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Optional, count emails for this project */
  projectId?: string
  /**
   * Optional, count emails send from this domain (must be coherent with the
   * `project_id` and the `organization_id`)
   */
  domainId?: string
  /** Optional, count emails created after this date */
  since?: Date
  /** Optional, count emails created before this date */
  until?: Date
  /** Optional, count emails sent with this `mail_from` sender's address */
  mailFrom?: string
}

export type CancelEmailRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the email to cancel */
  emailId: string
}

export type CreateDomainRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  projectId?: string
  domainName: string
}

export type GetDomainRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the domain */
  domainId: string
}

export type ListDomainsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Page number (1 for the first page) */
  page?: number
  /** Page size */
  pageSize?: number
  projectId?: string
  status?: Array<DomainStatus>
  organizationId?: string
  name?: string
}

export type RevokeDomainRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the domain to revoke */
  domainId: string
}

export type CheckDomainRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** ID of the domain to check */
  domainId: string
}
