// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type BlocklistType =
  | 'unknown_type'
  | 'mailbox_full'
  | 'mailbox_not_found'

export type DomainLastStatusAutoconfigStateReason =
  | 'unknown_reason'
  | 'permission_denied'
  | 'domain_not_found'

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
  | 'autoconfiguring'

export type EmailFlag =
  | 'unknown_flag'
  | 'soft_bounce'
  | 'hard_bounce'
  | 'spam'
  | 'mailbox_full'
  | 'mailbox_not_found'
  | 'greylisted'
  | 'send_before_expiration'
  | 'blocklisted'

export type EmailRcptType =
  | 'unknown_rcpt_type'
  | 'to'
  | 'cc'
  | 'bcc'

export type EmailStatus =
  | 'unknown'
  | 'new'
  | 'sending'
  | 'sent'
  | 'failed'
  | 'canceled'

export type ListBlocklistsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'ends_at_desc'
  | 'ends_at_asc'

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

export type ListWebhookEventsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'

export type ListWebhooksRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'

export type OfferName =
  | 'unknown_name'
  | 'essential'
  | 'scale'

export type PoolStatus =
  | 'unknown_status'
  | 'disabled'
  | 'creating'
  | 'ready'
  | 'error'

export type ProjectSettingsPeriodicReportFrequency =
  | 'unknown_frequency'
  | 'monthly'
  | 'weekly'
  | 'daily'

export type WebhookEventStatus =
  | 'unknown_status'
  | 'sending'
  | 'sent'
  | 'failed'

export type WebhookEventType =
  | 'unknown_type'
  | 'email_queued'
  | 'email_dropped'
  | 'email_deferred'
  | 'email_delivered'
  | 'email_spam'
  | 'email_mailbox_not_found'
  | 'email_blocklisted'
  | 'blocklist_created'

export interface DomainRecordsDKIM {
  /**
   * Name of the DKIM TXT record.
   */
  name: string
  /**
   * Value of the DKIM TXT record.
   */
  value: string
}


export interface DomainRecordsDMARC {
  /**
   * Name of the DMARC TXT record.
   */
  name: string
  /**
   * Value of the DMARC TXT record.
   */
  value: string
}


export interface DomainRecordsMX {
  /**
   * Name of the MX record.
   */
  name: string
  /**
   * Value of the MX record.
   */
  value: string
}


export interface DomainRecordsSPF {
  /**
   * Name of the SPF TXT record.
   */
  name: string
  /**
   * Value of the SPF TXT record.
   */
  value: string
}


export interface EmailTry {
  /**
   * Rank number of this attempt to send the email.
   */
  rank: number
  /**
   * Date of the attempt to send the email.
   */
  triedAt?: Date | null
  /**
   * The SMTP status code received after the attempt. 0 if the attempt did not reach an SMTP server.
   */
  code: number
  /**
   * The SMTP message received. If the attempt did not reach an SMTP server, the message returned explains what happened.
   */
  message: string
}


export interface DomainRecords {
  /**
   * DMARC TXT record specification.
   */
  dmarc?: DomainRecordsDMARC | null
  /**
   * DKIM TXT record specification.
   */
  dkim?: DomainRecordsDKIM | null
  /**
   * SPF TXT record specification.
   */
  spf?: DomainRecordsSPF | null
  /**
   * MX record specification.
   */
  mx?: DomainRecordsMX | null
}


export interface DomainReputation {
  /**
   * Status of your domain's reputation.
   */
  status: DomainReputationStatus
  /**
   * A range from 0 to 100 that determines your domain's reputation score. A score of `0` means a bad domain reputation and a score of `100` means an excellent domain reputation.
   */
  score: number
  /**
   * Time and date the score was calculated.
   */
  scoredAt?: Date | null
  /**
   * The previously-calculated domain's reputation score.
   */
  previousScore?: number | null
  /**
   * Time and date the previous reputation score was calculated.
   */
  previousScoredAt?: Date | null
}


export interface DomainStatistics {
  totalCount: number
  sentCount: number
  failedCount: number
  canceledCount: number
}


export interface Blocklist {
  /**
   * ID of the blocklist.
   */
  id: string
  /**
   * Domain ID linked to the blocklist.
   */
  domainId: string
  /**
   * Date and time of the blocklist creation.
   */
  createdAt?: Date | null
  /**
   * Date and time of the blocklist's last update.
   */
  updatedAt?: Date | null
  /**
   * Date and time when the blocklist ends. Empty if the blocklist has no end.
   */
  endsAt?: Date | null
  /**
   * Email blocked by the blocklist.
   */
  email: string
  /**
   * Type of block for this email.
   */
  type: BlocklistType
  /**
   * Reason to block this email.
   */
  reason: string
  /**
   * True if this blocklist was created manually. False for an automatic Transactional Email blocklist.
   */
  custom: boolean
}


export interface CreateEmailRequestAddress {
  /**
   * Email address.
   */
  email: string
  /**
   * (Optional) Name displayed.
   */
  name?: string | null
}


export interface CreateEmailRequestAttachment {
  /**
   * Filename of the attachment.
   */
  name: string
  /**
   * MIME type of the attachment.
   */
  type: string
  /**
   * Content of the attachment encoded in base64.
   */
  content: string
}


export interface CreateEmailRequestHeader {
  /**
   * Email header key.
   */
  key: string
  /**
   * Email header value.
   */
  value: string
}


export interface Email {
  /**
   * Technical ID of the email.
   */
  id: string
  /**
   * Message ID of the email.
   */
  messageId: string
  /**
   * ID of the Project to which the email belongs.
   */
  projectId: string
  /**
   * Email address of the sender.
   */
  mailFrom: string
  /**
   * @deprecated Deprecated. Email address of the recipient.
   */
  rcptTo?: string | null
  /**
   * Email address of the recipient.
   */
  mailRcpt: string
  /**
   * Type of recipient.
   */
  rcptType: EmailRcptType
  /**
   * Subject of the email.
   */
  subject: string
  /**
   * Creation date of the email object.
   */
  createdAt?: Date | null
  /**
   * Last update of the email object.
   */
  updatedAt?: Date | null
  /**
   * Status of the email.
   */
  status: EmailStatus
  /**
   * Additional status information.
   */
  statusDetails?: string | null
  /**
   * Number of attempts to send the email.
   */
  tryCount: number
  /**
   * Information about the last three attempts to send the email.
   */
  lastTries: EmailTry[]
  /**
   * Flags categorize emails. They allow you to obtain more information about recurring errors, for example.
   */
  flags: EmailFlag[]
}


export interface DomainLastStatusAutoconfigState {
  /**
   * Enable or disable the auto-configuration of domain DNS records.
   */
  enabled: boolean
  /**
   * Whether the domain can be auto-configured or not.
   */
  autoconfigurable: boolean
  /**
   * The reason that the domain cannot be auto-configurable.
   */
  reason?: DomainLastStatusAutoconfigStateReason | null
}


export interface DomainLastStatusDkimRecord {
  /**
   * Status of the DKIM record's configuration.
   */
  status: DomainLastStatusRecordStatus
  /**
   * Time and date the DKIM record was last valid.
   */
  lastValidAt?: Date | null
  /**
   * An error text displays in case the record is not valid.
   */
  error?: string | null
}


export interface DomainLastStatusDmarcRecord {
  /**
   * Status of the DMARC record's configuration.
   */
  status: DomainLastStatusRecordStatus
  /**
   * Time and date the DMARC record was last valid.
   */
  lastValidAt?: Date | null
  /**
   * An error text displays in case the record is not valid.
   */
  error?: string | null
}


export interface DomainLastStatusMXRecord {
  /**
   * Status of the MX record's configuration. This record is optional to validate a domain, but highly recommended.
   */
  status: DomainLastStatusRecordStatus
  /**
   * Time and date the MX record was last valid.
   */
  lastValidAt?: Date | null
  /**
   * An error text displays in case the record is not valid.
   */
  error?: string | null
}


export interface DomainLastStatusSpfRecord {
  /**
   * Status of the SPF record's configuration.
   */
  status: DomainLastStatusRecordStatus
  /**
   * Time and date the SPF record was last valid.
   */
  lastValidAt?: Date | null
  /**
   * An error text displays in case the record is not valid.
   */
  error?: string | null
}


export interface Domain {
  /**
   * ID of the domain.
   */
  id: string
  /**
   * ID of the domain's Organization.
   */
  organizationId: string
  /**
   * ID of the domain's Project.
   */
  projectId: string
  /**
   * Domain name (example.com).
   */
  name: string
  /**
   * Status of the domain.
   */
  status: DomainStatus
  /**
   * Date and time of domain creation.
   */
  createdAt?: Date | null
  /**
   * Date and time of the next scheduled check.
   */
  nextCheckAt?: Date | null
  /**
   * Date and time the domain was last valid.
   */
  lastValidAt?: Date | null
  /**
   * Date and time of the domain's deletion.
   */
  revokedAt?: Date | null
  /**
   * @deprecated Deprecated. Error message returned if the last check failed.
   */
  lastError?: string | null
  /**
   * Snippet of the SPF record to register in the DNS zone.
   */
  spfConfig: string
  /**
   * DKIM public key to record in the DNS zone.
   */
  dkimConfig: string
  /**
   * Domain's statistics.
   */
  statistics?: DomainStatistics | null
  /**
   * The domain's reputation is available when your domain is checked and has sent enough emails.
   */
  reputation?: DomainReputation | null
  /**
   * List of records to configure to validate a domain.
   */
  records?: DomainRecords | null
  /**
   * Status of auto-configuration for the domain's DNS zone.
   */
  autoconfig: boolean
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region: ScwRegion
}


export interface OfferSubscription {
  /**
   * ID of the offer-subscription Organization.
   */
  organizationId: string
  /**
   * ID of the offer-subscription Project.
   */
  projectId: string
  /**
   * Name of the offer associated with the Project.
   */
  offerName: OfferName
  /**
   * Date and time of the subscription.
   */
  subscribedAt?: Date | null
  /**
   * Date and time of the end of the offer-subscription commitment.
   */
  cancellationAvailableAt?: Date | null
  /**
   * Service Level Agreement percentage of the offer-subscription.
   */
  sla: number
  /**
   * Max number of domains that can be associated with the offer-subscription for a particular Project.
   */
  maxDomains: number
  /**
   * Max number of dedicated IPs that can be associated with the offer-subscription for a particular Project.
   */
  maxDedicatedIps: number
  /**
   * Max number of webhooks that can be associated with the offer-subscription for a particular Project.
   */
  maxWebhooksPerDomain: number
  /**
   * Max number of custom blocklists that can be associated with the offer-subscription for a particular Project.
   */
  maxCustomBlocklistsPerDomain: number
  /**
   * Number of emails included in the offer-subscription per month.
   */
  includedMonthlyEmails: number
}


export interface Offer {
  /**
   * Name of the offer.
   */
  name: OfferName
  /**
   * Date and time of the offer creation.
   */
  createdAt?: Date | null
  /**
   * Period of commitment.
   */
  commitmentPeriod?: string | null
  /**
   * Service Level Agreement percentage of the offer.
   */
  sla: number
  /**
   * Max number of checked domains that can be associated with the offer.
   */
  maxDomains: number
  /**
   * Max number of dedicated IPs that can be associated with the offer.
   */
  maxDedicatedIps: number
  /**
   * Number of emails included in the offer per month.
   */
  includedMonthlyEmails: number
  /**
   * Max number of webhooks that can be associated with the offer.
   */
  maxWebhooksPerDomain: number
  /**
   * Max number of active custom blocklists that can be associated with the offer.
   */
  maxCustomBlocklistsPerDomain: number
}


export interface Pool {
  /**
   * ID of the Project.
   */
  projectId: string
  /**
   * Status of the pool.
   */
  status: PoolStatus
  /**
   * Details of the pool.
   */
  details?: string | null
  /**
   * Zone of the pool.
   */
  zone?: ScwZone | null
  /**
   * IPs of the pool.
   */
  ips: string[]
  /**
   * Reverse hostname of all IPs of the pool.
   */
  reverse?: string | null
}


export interface WebhookEvent {
  /**
   * ID of the Webhook Event.
   */
  id: string
  /**
   * ID of the Webhook that triggers the Event.
   */
  webhookId: string
  /**
   * ID of the Webhook Event Organization.
   */
  organizationId: string
  /**
   * ID of the Webhook Event Project.
   */
  projectId: string
  /**
   * ID of the webhook event domain.
   */
  domainId: string
  /**
   * Type of the Webhook Event.
   */
  type: WebhookEventType
  /**
   * Status of the Webhook Event.
   */
  status: WebhookEventStatus
  /**
   * Data sent to the Webhook destination.
   */
  data: string
  /**
   * Date and time of the Webhook Event creation.
   */
  createdAt?: Date | null
  /**
   * Date and time of last Webhook Event updates.
   */
  updatedAt?: Date | null
  /**
   * Optional Email ID if the event is triggered by an Email resource.
   */
  emailId?: string | null
}


export interface Webhook {
  /**
   * ID of the Webhook.
   */
  id: string
  /**
   * ID of the Domain to watch for triggering events.
   */
  domainId: string
  /**
   * ID of the Webhook Organization.
   */
  organizationId: string
  /**
   * ID of the Webhook Project.
   */
  projectId: string
  /**
   * Name of the Webhook.
   */
  name: string
  /**
   * List of event types that will trigger a Webhook Event.
   */
  eventTypes: WebhookEventType[]
  /**
   * Scaleway SNS ARN topic to push the events to.
   */
  snsArn: string
  /**
   * Date and time of the Webhook creation.
   */
  createdAt?: Date | null
  /**
   * Date and time of last Webhook updates.
   */
  updatedAt?: Date | null
}


export interface ProjectSettingsPeriodicReport {
  /**
   * Enable or disable periodic report notifications.
   */
  enabled: boolean
  /**
   * At which frequency you receive periodic report notifications.
   */
  frequency: ProjectSettingsPeriodicReportFrequency
  /**
   * At which hour you receive periodic report notifications.
   */
  sendingHour: number
  /**
   * On which day you receive periodic report notifications (1-7 weekly, 1-28 monthly).
   */
  sendingDay: number
}


export interface UpdateProjectSettingsRequestUpdatePeriodicReport {
  /**
   * (Optional) Enable or disable periodic report notifications.
   */
  enabled?: boolean | null
  /**
   * (Optional) Frequency at which you receive periodic report notifications.
   */
  frequency?: ProjectSettingsPeriodicReportFrequency | null
  /**
   * (Optional) Hour at which you receive periodic report notifications.
   */
  sendingHour?: number | null
  /**
   * (Optional) On which day you receive periodic report notifications (1-7 weekly, 1-28 monthly).
   */
  sendingDay?: number | null
}


export type BulkCreateBlocklistsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Domain ID linked to the blocklist.
   */
  domainId: string
  /**
   * Email blocked by the blocklist.
   */
  emails?: string[] | null
  /**
   * Type of blocklist.
   */
  type?: BlocklistType | null
  /**
   * Reason to block the email.
   */
  reason?: string | null
}


export interface BulkCreateBlocklistsResponse {
  /**
   * List of blocklist created.
   */
  blocklists: Blocklist[]
}


export type CancelEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the email to cancel.
   */
  emailId: string
}


export type CheckDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the domain to check.
   */
  domainId: string
}


export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the project to which the domain belongs.
   */
  projectId?: string | null
  /**
   * Fully qualified domain dame.
   */
  domainName: string
  /**
   * @deprecated Deprecated. Accept Scaleway's Terms of Service.
   */
  acceptTos?: boolean | null
  /**
   * Activate auto-configuration of the domain's DNS zone.
   */
  autoconfig: boolean
}


export type CreateEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Sender information. Must be from a checked domain declared in the Project.
   */
  from: CreateEmailRequestAddress
  /**
   * An array of the primary recipient's information.
   */
  to?: CreateEmailRequestAddress[] | null
  /**
   * An array of the carbon copy recipient's information.
   */
  cc?: CreateEmailRequestAddress[] | null
  /**
   * An array of the blind carbon copy recipient's information.
   */
  bcc?: CreateEmailRequestAddress[] | null
  /**
   * Subject of the email.
   */
  subject: string
  /**
   * Text content.
   */
  text: string
  /**
   * HTML content.
   */
  html: string
  /**
   * ID of the Project in which to create the email.
   */
  projectId?: string | null
  /**
   * Array of attachments.
   */
  attachments?: CreateEmailRequestAttachment[] | null
  /**
   * Maximum date to deliver the email.
   */
  sendBefore?: Date | null
  /**
   * Array of additional headers as key-value.
   */
  additionalHeaders?: CreateEmailRequestHeader[] | null
}


export interface CreateEmailResponse {
  /**
   * Single page of emails matching the requested criteria.
   */
  emails: Email[]
}


export type CreateWebhookRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Domain to watch for triggering events.
   */
  domainId: string
  /**
   * ID of the project to which the Webhook belongs.
   */
  projectId?: string | null
  /**
   * Name of the Webhook.
   */
  name: string
  /**
   * List of event types that will trigger an event.
   */
  eventTypes?: WebhookEventType[] | null
  /**
   * Scaleway SNS ARN topic to push the events to.
   */
  snsArn: string
}


export type DeleteBlocklistRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the blocklist to delete.
   */
  blocklistId: string
}


export type DeleteWebhookRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Webhook to delete.
   */
  webhookId: string
}


export interface DomainLastStatus {
  /**
   * The ID of the domain.
   */
  domainId: string
  /**
   * The domain name (example.com).
   */
  domainName: string
  /**
   * The SPF record verification data.
   */
  spfRecord?: DomainLastStatusSpfRecord | null
  /**
   * The DKIM record verification data.
   */
  dkimRecord?: DomainLastStatusDkimRecord | null
  /**
   * The DMARC record verification data.
   */
  dmarcRecord?: DomainLastStatusDmarcRecord | null
  /**
   * The MX record verification data.
   */
  mxRecord?: DomainLastStatusMXRecord | null
  /**
   * The verification state of domain auto-configuration.
   */
  autoconfigState?: DomainLastStatusAutoconfigState | null
}


export type GetDomainLastStatusRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the domain to get records status.
   */
  domainId: string
}


export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the domain.
   */
  domainId: string
}


export type GetEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the email to retrieve.
   */
  emailId: string
}


export type GetProjectConsumptionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the project.
   */
  projectId?: string | null
}


export type GetProjectSettingsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the project.
   */
  projectId?: string | null
}


export type GetStatisticsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * (Optional) Number of emails for this Project.
   */
  projectId?: string | null
  /**
   * (Optional) Number of emails sent from this domain (must be coherent with the `project_id` and the `organization_id`).
   */
  domainId?: string | null
  /**
   * (Optional) Number of emails created after this date.
   */
  since?: Date | null
  /**
   * (Optional) Number of emails created before this date.
   */
  until?: Date | null
  /**
   * (Optional) Number of emails sent with this sender's email address.
   */
  mailFrom?: string | null
}


export type GetWebhookRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Webhook to check.
   */
  webhookId: string
}


export type ListBlocklistsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * (Optional) List blocklist corresponding to specific criteria.
   */
  orderBy?: ListBlocklistsRequestOrderBy | null
  /**
   * (Optional) Requested page number. Value must be greater or equal to 1.
   */
  page?: number | null
  /**
   * (Optional) Requested page size. Value must be between 1 and 100.
   */
  pageSize?: number | null
  /**
   * (Optional) Filter by a domain ID.
   */
  domainId: string
  /**
   * (Optional) Filter by an email address.
   */
  email?: string | null
  /**
   * (Optional) Filter by a blocklist type.
   */
  type?: BlocklistType | null
  /**
   * (Optional) Filter by custom blocklist (true) or automatic Transactional Email blocklist (false).
   */
  custom?: boolean | null
}


export interface ListBlocklistsResponse {
  /**
   * Number of blocklists matching the requested criteria.
   */
  totalCount: number
  /**
   * Single page of blocklists matching the requested criteria.
   */
  blocklists: Blocklist[]
}


export type ListDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Requested page number. Value must be greater or equal to 1.
   */
  page?: number | null
  /**
   * Requested page size. Value must be between 1 and 1000.
   */
  pageSize?: number | null
  /**
   * (Optional) ID of the Project in which to list the domains.
   */
  projectId?: string | null
  /**
   * (Optional) List domains under specific statuses.
   */
  status?: DomainStatus[] | null
  /**
   * (Optional) ID of the Organization in which to list the domains.
   */
  organizationId?: string | null
  /**
   * (Optional) Names of the domains to list.
   */
  name?: string | null
}


export interface ListDomainsResponse {
  /**
   * Number of domains that match the request (without pagination).
   */
  totalCount: number
  /**
   * Single page of domains matching the requested criteria.
   */
  domains: Domain[]
}


export type ListEmailsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  page?: number | null
  pageSize?: number | null
  /**
   * (Optional) ID of the Project in which to list the emails.
   */
  projectId?: string | null
  /**
   * (Optional) ID of the domain for which to list the emails.
   */
  domainId?: string | null
  /**
   * (Optional) ID of the message for which to list the emails.
   */
  messageId?: string | null
  /**
   * (Optional) List emails created after this date.
   */
  since?: Date | null
  /**
   * (Optional) List emails created before this date.
   */
  until?: Date | null
  /**
   * (Optional) List emails sent with this sender's email address.
   */
  mailFrom?: string | null
  /**
   * @deprecated Deprecated. List emails sent to this recipient's email address.
   */
  mailTo?: string | null
  /**
   * (Optional) List emails sent to this recipient's email address.
   */
  mailRcpt?: string | null
  /**
   * (Optional) List emails with any of these statuses.
   */
  statuses?: EmailStatus[] | null
  /**
   * (Optional) List emails with this subject.
   */
  subject?: string | null
  /**
   * (Optional) List emails by searching to all fields.
   */
  search?: string | null
  /**
   * (Optional) List emails corresponding to specific criteria.
   */
  orderBy?: ListEmailsRequestOrderBy | null
  /**
   * (Optional) List emails containing only specific flags.
   */
  flags?: EmailFlag[] | null
}


export interface ListEmailsResponse {
  /**
   * Number of emails matching the requested criteria.
   */
  totalCount: number
  /**
   * Single page of emails matching the requested criteria.
   */
  emails: Email[]
}


export type ListOfferSubscriptionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * (Optional) Requested page number. Value must be greater or equal to 1.
   */
  page?: number | null
  /**
   * (Optional) Requested page size. Value must be between 1 and 100.
   */
  pageSize?: number | null
  /**
   * (Optional) ID of the Organization.
   *
   * One-of ('scope'): at most one of 'organizationId', 'projectId' could be set.
   */
  organizationId?: string | null
  /**
   * (Optional) ID of the Project.
   *
   * One-of ('scope'): at most one of 'organizationId', 'projectId' could be set.
   */
  projectId?: string | null
  /**
   * (Optional) Name of the offer associated with the Project.
   */
  offerName?: OfferName | null
}


export interface ListOfferSubscriptionsResponse {
  /**
   * Number of offer-subscriptions matching the requested criteria.
   */
  totalCount: number
  /**
   * Single page of offer-subscriptions matching the requested criteria.
   */
  offerSubscriptions: OfferSubscription[]
}


export type ListOffersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
}


export interface ListOffersResponse {
  /**
   * Number of offers matching the requested criteria.
   */
  totalCount: number
  /**
   * Single page of offers matching the requested criteria.
   */
  offers: Offer[]
}


export type ListPoolsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Requested page number. Value must be greater or equal to 1.
   */
  page?: number | null
  /**
   * Requested page size. Value must be between 1 and 1000.
   */
  pageSize?: number | null
  /**
   * ID of the Project.
   */
  projectId?: string | null
}


export interface ListPoolsResponse {
  /**
   * Number of pools matching the requested criteria.
   */
  totalCount: number
  /**
   * Single page of pools matching the requested criteria.
   */
  pools: Pool[]
}


export type ListWebhookEventsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Webhook linked to the events.
   */
  webhookId: string
  /**
   * (Optional) List Webhook events corresponding to specific criteria.
   */
  orderBy?: ListWebhookEventsRequestOrderBy | null
  /**
   * Requested page number. Value must be greater or equal to 1.
   */
  page?: number | null
  /**
   * Requested page size. Value must be between 1 and 100.
   */
  pageSize?: number | null
  /**
   * ID of the email linked to the events.
   */
  emailId?: string | null
  /**
   * List of event types linked to the events.
   */
  eventTypes?: WebhookEventType[] | null
  /**
   * List of event statuses.
   */
  statuses?: WebhookEventStatus[] | null
  /**
   * ID of the webhook Project.
   */
  projectId?: string | null
  /**
   * ID of the webhook Organization.
   */
  organizationId?: string | null
  /**
   * ID of the domain to watch for triggering events.
   */
  domainId?: string | null
}


export interface ListWebhookEventsResponse {
  /**
   * Number of Webhook events matching the requested criteria.
   */
  totalCount: number
  /**
   * Single page of Webhook events matching the requested criteria.
   */
  webhookEvents: WebhookEvent[]
}


export type ListWebhooksRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * (Optional) List Webhooks corresponding to specific criteria.
   */
  orderBy?: ListWebhooksRequestOrderBy | null
  /**
   * (Optional) Requested page number. Value must be greater or equal to 1.
   */
  page?: number | null
  /**
   * (Optional) Requested page size. Value must be between 1 and 100.
   */
  pageSize?: number | null
  /**
   * (Optional) ID of the Project for which to list the Webhooks.
   */
  projectId?: string | null
  /**
   * (Optional) ID of the Organization for which to list the Webhooks.
   */
  organizationId?: string | null
  /**
   * (Optional) ID of the Domain for which to list the Webhooks.
   */
  domainId?: string | null
}


export interface ListWebhooksResponse {
  /**
   * Number of Webhooks matching the requested criteria.
   */
  totalCount: number
  /**
   * Single page of Webhooks matching the requested criteria.
   */
  webhooks: Webhook[]
}


export interface ProjectConsumption {
  /**
   * ID of the project.
   */
  projectId: string
  /**
   * Number of domains in the project.
   */
  domainsCount: number
  /**
   * Number of dedicated IP in the project.
   */
  dedicatedIpsCount: number
  /**
   * Number of emails sent during the current month in the project.
   */
  monthlyEmailsCount: number
  /**
   * Number of webhooks in the project.
   */
  webhooksCount: number
  /**
   * Number of custom blocklists in the project.
   */
  customBlocklistsCount: number
}


export interface ProjectSettings {
  /**
   * Information about your periodic report.
   */
  periodicReport?: ProjectSettingsPeriodicReport | null
}


export type RevokeDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the domain to delete.
   */
  domainId: string
}


export interface Statistics {
  /**
   * Total number of emails matching the requested criteria.
   */
  totalCount: number
  /**
   * Number of emails still in the `new` transient state. This means emails received from the API but not yet processed.
   */
  newCount: number
  /**
   * Number of emails still in the `sending` transient state. This means emails received from the API but not yet in their final status.
   */
  sendingCount: number
  /**
   * Number of emails in the final `sent` state. This means emails that have been delivered to the target mail system.
   */
  sentCount: number
  /**
   * Number of emails in the final `failed` state. This means emails that have been refused by the target mail system with a final error status.
   */
  failedCount: number
  /**
   * Number of emails in the final `canceled` state. This means emails that have been canceled upon request.
   */
  canceledCount: number
}


export type UpdateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the domain to update.
   */
  domainId: string
  /**
   * (Optional) If set to true, activate auto-configuration of the domain's DNS zone.
   */
  autoconfig?: boolean | null
}


export type UpdateOfferSubscriptionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Project.
   */
  projectId?: string | null
  /**
   * Name of the offer-subscription.
   */
  name?: OfferName | null
}


export type UpdateProjectSettingsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the project.
   */
  projectId?: string | null
  /**
   * Periodic report update details - all fields are optional.
   */
  periodicReport?: UpdateProjectSettingsRequestUpdatePeriodicReport | null
}


export type UpdateWebhookRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * ID of the Webhook to update.
   */
  webhookId: string
  /**
   * Name of the Webhook to update.
   */
  name?: string | null
  /**
   * List of event types to update.
   */
  eventTypes?: WebhookEventType[] | null
  /**
   * Scaleway SNS ARN topic to update.
   */
  snsArn?: string | null
}


