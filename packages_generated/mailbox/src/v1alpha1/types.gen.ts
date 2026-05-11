


export type DomainRecordDNSType =
  | 'unknown_dns_type'
  | 'cname_dns_type'
  | 'mx_dns_type'
  | 'srv_dns_type'
  | 'txt_dns_type'

export type DomainRecordLevel =
  | 'unknown_level'
  | 'required'
  | 'recommended'
  | 'optional'

export type DomainRecordStatus =
  | 'unknown_status'
  | 'validating'
  | 'valid'
  | 'invalid'
  | 'not_found'

export type DomainStatus =
  | 'unknown_status'
  | 'creating'
  | 'waiting_validation'
  | 'validating'
  | 'validation_failed'
  | 'provisioning'
  | 'ready'
  | 'deleting'

export type ListDomainsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'
  | 'name_desc'
  | 'name_asc'
  | 'mailbox_total_count_desc'
  | 'mailbox_total_count_asc'

export type ListMailboxesRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'
  | 'email_desc'
  | 'email_asc'

export type MailboxStatus =
  | 'unknown_status'
  | 'creating'
  | 'waiting_payment'
  | 'waiting_domain'
  | 'ready'
  | 'deletion_scheduled'
  | 'locked'
  | 'renewing'
  | 'deleting'
  | 'restoring'
  | 'payment_failed'

export type MailboxSubscriptionPeriod =
  | 'unknown_subscription_period'
  | 'canceled'
  | 'monthly'
  | 'yearly'

export interface BatchCreateMailboxesRequestMailboxParameters {
  localPart: string
  password: string
}


export interface Mailbox {
  /**
   * Unique identifier of the mailbox.
   */
  id: string
  /**
   * ID of the domain to which the mailbox belongs.
   */
  domainId: string
  /**
   * Email address of the mailbox as local_part@domain.
   */
  email: string
  /**
   * Status of the mailbox.
   */
  status: MailboxStatus
  /**
   * Subscription renewal period, it can be monthly, yearly or canceled if the subscription has been canceled.
   */
  subscriptionPeriod: MailboxSubscriptionPeriod
  /**
   * Date and time of subscription period start.
   */
  subscriptionPeriodStartedAt?: Date
  /**
   * Next subscription renewal period, it can be monthly or yearly or canceled if the subscription has been canceled.
   */
  nextSubscriptionPeriod: MailboxSubscriptionPeriod
  /**
   * Date and time when the next subscription period starts.
   */
  nextSubscriptionPeriodStartsAt?: Date
  /**
   * Date and time of mailbox creation.
   */
  createdAt?: Date
  /**
   * Date and time when the mailbox was last updated.
   */
  updatedAt?: Date
  /**
   * Date and time of the unrecoverable mailbox deletion.
   */
  deletionScheduledAt?: Date
}


export interface DomainRecord {
  /**
   * Unique identifier of the DNS record.
   */
  id: string
  /**
   * ID of the domain to which the record belongs.
   */
  domainId: string
  /**
   * Status of the record.
   */
  status: DomainRecordStatus
  /**
   * Level of requirement of the record.
   */
  level: DomainRecordLevel
  /**
   * DNS type of the record.
   */
  dnsType: DomainRecordDNSType
  /**
   * DNS name of the record.
   */
  dnsName: string
  /**
   * DNS value of the record.
   */
  dnsValue: string
  /**
   * Error associated in case the record is not valid.
   */
  error?: string
  /**
   * Date and time of record creation.
   */
  createdAt?: Date
  /**
   * Date and time of record last updated.
   */
  updatedAt?: Date
}


export interface Domain {
  /**
   * Unique identifier of the domain.
   */
  id: string
  /**
   * ID of the Project to which the domain belongs.
   */
  projectId: string
  /**
   * Fully qualified domain name.
   */
  name: string
  /**
   * Status of the domain.
   */
  status: DomainStatus
  /**
   * Number of mailboxes of the domain.
   */
  mailboxTotalCount: number
  /**
   * Date and time of domain creation.
   */
  createdAt?: Date
  /**
   * Date and time of the domain's last update.
   */
  updatedAt?: Date
  /**
   * URL of the domain's webmail.
   */
  webmailUrl: string
  /**
   * URL of the domain's IMAP service.
   */
  imapUrl: string
  /**
   * URL of the domain's POP3 service.
   */
  pop3Url: string
  /**
   * URL of the domain's SMTP service.
   */
  smtpUrl: string
}


export type BatchCreateMailboxesRequest = {
  /**
   * Parameters for the mailboxes to create.
   */
  mailboxes?: BatchCreateMailboxesRequestMailboxParameters[]
  /**
   * ID of the domain in which to create the mailboxes.
   */
  domainId: string
  /**
   * Subscription renewal period, it can be monthly or yearly.
   */
  subscriptionPeriod?: MailboxSubscriptionPeriod
}


export interface BatchCreateMailboxesResponse {
  /**
   * Mailboxes created.
   */
  mailboxes: Mailbox[]
}


export type CreateDomainRequest = {
  /**
   * ID of the project to which the domain belongs.
   */
  projectId?: string
  /**
   * Fully qualified domain name.
   */
  name: string
}


export type DeleteDomainRequest = {
  /**
   * ID of the domain to delete.
   */
  domainId: string
}


export type DeleteMailboxRequest = {
  /**
   * ID of the mailbox to delete.
   */
  mailboxId: string
}


export type GetDomainRecordsRequest = {
  /**
   * (Optional) ID of the domain in which to get the records.
   */
  domainId: string
}


export interface GetDomainRecordsResponse {
  /**
   * Record designed to automatically configure an email client with the appropriate mail server settings using a standardized XML file format.
   */
  autoconfig?: DomainRecord
  /**
   * Record designed to automate the discovery of server settings to configure email clients like Outlook.
   */
  autodiscover?: DomainRecord
  /**
   * Record that allows clients to interact with calendar data stored on a server.
   */
  caldav?: DomainRecord
  /**
   * Record that allows clients to interact with contact data stored on a server.
   */
  carddav?: DomainRecord
  /**
   * Record that allows the DKIM email authentication method to be employed to verify the authenticity of an email message.
   */
  dkim?: DomainRecord
  /**
   * Record that provides a mechanism for email receivers to determine if incoming messages are legitimate and were sent from authorized sources.
   */
  dmarc?: DomainRecord
  /**
   * Record that provides a unique token to validate a domain ownership.
   */
  domainValidation?: DomainRecord
  /**
   * Record that allows accessing the mailbox with the IMAP protocol.
   */
  imap?: DomainRecord
  /**
   * Record that directs emails to a mail server.
   */
  mx?: DomainRecord
  /**
   * Record that allows accessing the mailbox with the POP3 protocol.
   */
  pop3?: DomainRecord
  /**
   * Record that lists all the servers authorized to send emails from a particular domain.
   */
  spf?: DomainRecord
  /**
   * Record that allows the use of the SMTP submission mechanism.
   */
  submission?: DomainRecord
}


export type GetDomainRequest = {
  /**
   * ID of the domain to get.
   */
  domainId: string
}


export type GetMailboxRequest = {
  /**
   * ID of the mailbox to get.
   */
  mailboxId: string
}


export type ListDomainsRequest = {
  orderBy?: ListDomainsRequestOrderBy
  page?: number
  pageSize?: number
  projectId?: string
  statuses?: DomainStatus[]
  search?: string
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


export type ListMailboxesRequest = {
  /**
   * Order matching mailbox by different criteria.
   */
  orderBy?: ListMailboxesRequestOrderBy
  /**
   * Requested page number. Value must be greater or equal to 1.
   */
  page?: number
  /**
   * Requested page size. Value must be between 1 and 1000.
   */
  pageSize?: number
  /**
   * (Optional) ID of the domain in which to list the mailboxes.
   */
  domainId?: string
  /**
   * (Optional) Filter mailboxes by their statuses.
   */
  statuses?: MailboxStatus[]
  /**
   * (Optional) Search term to filter mailboxes on name and local_part.
   */
  search?: string
}


export interface ListMailboxesResponse {
  /**
   * Number of mailboxes that match the request (without pagination).
   */
  totalCount: number
  /**
   * Mailboxes matching the requested criteria.
   */
  mailboxes: Mailbox[]
}


export type RestoreMailboxRequest = {
  /**
   * ID of the mailbox to restore.
   */
  mailboxId: string
}


export type UpdateMailboxRequest = {
  /**
   * ID of the mailbox to update.
   */
  mailboxId: string
  /**
   * (Optional) New subscription period for the mailbox.
   */
  subscriptionPeriod?: MailboxSubscriptionPeriod
  /**
   * (Optional) New password of the mailbox.
   */
  newPassword?: string
}


export type ValidateDomainRecordsRequest = {
  domainId: string
}


