// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Region } from '../../../bridge'
import type { LanguageCode as StdLanguageCode } from '../../std/types.gen'

export type DnsRecordStatus = 'unknown_status' | 'valid' | 'invalid'

export type DnsRecordType =
  | 'unknown_type'
  | 'a'
  | 'cname'
  | 'mx'
  | 'txt'
  | 'ns'
  | 'aaaa'

export type DnsRecordsStatus = 'unknown' | 'valid' | 'invalid'

export type HostingDnsStatus = 'unknown_dns_status' | 'valid' | 'invalid'

export type HostingStatus =
  | 'unknown_status'
  | 'delivering'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'migrating'

export type ListHostingsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListOffersRequestOrderBy = 'price_asc'

export type NameserverStatus = 'unknown_status' | 'valid' | 'invalid'

export type OfferQuotaWarning =
  | 'unknown_quota_warning'
  | 'email_count_exceeded'
  | 'database_count_exceeded'
  | 'disk_usage_exceeded'
  | 'addon_domain_count_exceeded'

export interface HostingCpanelUrls {
  dashboard: string
  webmail: string
}

export interface HostingOption {
  /** Option ID. */
  id: string
  /** Option name. */
  name: string
}

export interface EmailAddress {
  /** Domain part of the mailbox address. */
  domain: string
  /** Username part address of the mailbox address. */
  login: string
}

export interface OfferProduct {
  /** Product name. */
  name: string
  /** Product option. */
  option: boolean
  /** Limit number of email accounts. */
  emailAccountsQuota: number
  /** Limit quantity of email storage in gigabytes. */
  emailStorageQuota: number
  /** Limit number of databases. */
  databasesQuota: number
  /** Limit quantity of hosting storage in gigabytes. */
  hostingStorageQuota: number
  /** Whether or not support is included. */
  supportIncluded: boolean
  /** Limit number of virtual CPU. */
  vCpu: number
  /** Limit quantity of memory in gigabytes. */
  ram: number
  /** Limit number of add-on domains. */
  maxAddonDomains: number
}

export interface CreateHostingRequestDomainConfiguration {
  updateNameservers: boolean
  updateWebRecord: boolean
  updateMailRecord: boolean
  updateAllRecords: boolean
}

export interface DnsRecord {
  /** Record name. */
  name: string
  /** Record type. */
  type: DnsRecordType
  /** Record time-to-live. */
  ttl: number
  /** Record value. */
  value: string
  /** Record priority level. */
  priority?: number
  /** Record status. */
  status: DnsRecordStatus
}

export interface Nameserver {
  /** Hostname of the nameserver. */
  hostname: string
  /** Status of the nameserver. */
  status: NameserverStatus
  /** Defines whether the nameserver is the default one. */
  isDefault: boolean
}

export interface ControlPanel {
  /** Control panel name. */
  name: string
  /** Define if the control panel type is available to order. */
  available: boolean
  /** URL of this control panel's logo. */
  logoUrl: string
  /** List of available languages for the control panel. */
  availableLanguages: StdLanguageCode[]
}

export interface Hosting {
  /** ID of the Web Hosting plan. */
  id: string
  /** ID of the Scaleway Organization the Web Hosting plan belongs to. */
  organizationId: string
  /** ID of the Scaleway Project the Web Hosting plan belongs to. */
  projectId: string
  /** Date on which the Web Hosting plan was last updated. */
  updatedAt?: Date
  /** Date on which the Web Hosting plan was created. */
  createdAt?: Date
  /** Status of the Web Hosting plan. */
  status: HostingStatus
  /** Hostname of the host platform. */
  platformHostname: string
  /** Number of the host platform. */
  platformNumber?: number
  /** ID of the active offer for the Web Hosting plan. */
  offerId: string
  /** Name of the active offer for the Web Hosting plan. */
  offerName: string
  /** Main domain associated with the Web Hosting plan. */
  domain: string
  /** List of tags associated with the Web Hosting plan. */
  tags: string[]
  /** Array of any options activated for the Web Hosting plan. */
  options: HostingOption[]
  /** DNS status of the Web Hosting plan. */
  dnsStatus: HostingDnsStatus
  /** URL to connect to cPanel dashboard and to Webmail interface. */
  cpanelUrls?: HostingCpanelUrls
  /** Main Web Hosting cPanel username. */
  username: string
  /** Indicates if the hosting offer has reached its end of life. */
  offerEndOfLife: boolean
  /** Name of the control panel. */
  controlPanelName: string
  /** Group of the hosting's host server/platform. */
  platformGroup: string
  /** IPv4 address of the hosting's host server. */
  ipv4: string
  /** IPv6 address of the hosting's host server. */
  ipv6: string
  /** Whether the hosting is protected or not. */
  protected: boolean
  /**
   * One-time-password used for the first login or reset password, empty after
   * first use.
   */
  oneTimePassword: string
  /** Region where the Web Hosting plan is hosted. */
  region: Region
}

export interface Mailbox {
  /** The ID of the mailbox. */
  mailboxId: number
  /** The email address of the mailbox. */
  email?: EmailAddress
}

export interface Offer {
  /** Offer ID. */
  id: string
  /** Unique identifier used for billing. */
  billingOperationPath: string
  /** Product constituting this offer. */
  product?: OfferProduct
  /** Price of this offer. */
  price?: Money
  /**
   * If a hosting_id was specified in the call, defines whether this offer is
   * available for that Web Hosting plan to migrate (update) to.
   */
  available: boolean
  /** Quota warnings, if the offer is not available for the specified hosting_id. */
  quotaWarnings: OfferQuotaWarning[]
  /** Indicates if the offer has reached its end of life. */
  endOfLife: boolean
  /** Name of the control panel. */
  controlPanelName: string
}

export type CheckUserOwnsDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Domain for which ownership is to be verified. */
  domain: string
  /** ID of the project currently in use. */
  projectId?: string
}

export interface CheckUserOwnsDomainResponse {
  /** Indicates whether the specified project owns the domain. */
  ownsDomain: boolean
}

export type ClassicMailApiCreateMailboxRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** The Online hosting ID. */
  onlineId: number
  /** The email address of the mailbox. */
  email?: EmailAddress
  /** Password for the new mailbox. */
  password: string
}

export type ClassicMailApiDeleteMailboxRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** The Online hosting ID. */
  onlineId: number
  /** The ID of the mailbox to delete. */
  mailboxId: number
}

export type ClassicMailApiGetMailboxRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** The Online hosting ID. */
  onlineId: number
  /** The ID of the mailbox to get. */
  mailboxId: number
}

export type ClassicMailApiListMailboxesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** The Online hosting ID. */
  onlineId: number
  /** Page number (must be a positive integer). */
  page?: number
  /**
   * Number of mailboxes to return (must be a positive integer lower or equal to
   * 100).
   */
  pageSize?: number
  /** Domain to filter the mailboxes. */
  domain?: string
}

export type ClassicMailApiUpdateMailboxRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** The Online hosting ID. */
  onlineId: number
  /** The ID of the mailbox to update. */
  mailboxId: number
  /** New password for the mailbox. */
  password?: string
}

export type CreateHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the selected offer for the Web Hosting plan. */
  offerId: string
  /** ID of the Scaleway Project in which to create the Web Hosting plan. */
  projectId?: string
  /** Contact email for the Web Hosting client. */
  email?: string
  /** List of tags for the Web Hosting plan. */
  tags?: string[]
  /**
   * Domain name to link to the Web Hosting plan. You must already own this
   * domain name, and have completed the DNS validation process beforehand.
   */
  domain: string
  /** IDs of any selected additional options for the Web Hosting plan. */
  optionIds?: string[]
  /** Default language for the control panel interface. */
  language?: StdLanguageCode
  /**
   * Indicates whether to update hosting domain name servers and DNS records for
   * domains managed by Scaleway Elements.
   */
  domainConfiguration?: CreateHostingRequestDomainConfiguration
}

export type CreateSessionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export type DeleteHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export interface DnsRecords {
  /** List of DNS records. */
  records: DnsRecord[]
  /** List of nameservers. */
  nameServers: Nameserver[]
  /** Status of the records. */
  status: DnsRecordsStatus
}

export type GetDomainDnsRecordsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Domain associated with the DNS records. */
  domain: string
}

export type GetHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export type ListControlPanelsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /**
   * Page number to return, from the paginated results (must be a positive
   * integer).
   */
  page?: number
  /**
   * Number of control panels to return (must be a positive integer lower or
   * equal to 100).
   */
  pageSize?: number
}

export interface ListControlPanelsResponse {
  /** Number of control panels returned. */
  totalCount: number
  /** List of control panels. */
  controlPanels: ControlPanel[]
}

export type ListHostingsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /**
   * Page number to return, from the paginated results (must be a positive
   * integer).
   */
  page?: number
  /**
   * Number of Web Hosting plans to return (must be a positive integer lower or
   * equal to 100).
   */
  pageSize?: number
  /** Sort order for Web Hosting plans in the response. */
  orderBy?: ListHostingsRequestOrderBy
  /**
   * Tags to filter for, only Web Hosting plans with matching tags will be
   * returned.
   */
  tags?: string[]
  /**
   * Statuses to filter for, only Web Hosting plans with matching statuses will
   * be returned.
   */
  statuses?: HostingStatus[]
  /**
   * Domain to filter for, only Web Hosting plans associated with this domain
   * will be returned.
   */
  domain?: string
  /**
   * Project ID to filter for, only Web Hosting plans from this Project will be
   * returned.
   */
  projectId?: string
  /**
   * Organization ID to filter for, only Web Hosting plans from this
   * Organization will be returned.
   */
  organizationId?: string
  /**
   * Name of the control panel to filter for, only Web Hosting plans from this
   * control panel will be returned.
   */
  controlPanels?: string[]
}

export interface ListHostingsResponse {
  /** Number of Web Hosting plans returned. */
  totalCount: number
  /** List of Web Hosting plans. */
  hostings: Hosting[]
}

export interface ListMailboxesResponse {
  /** Total number of mailboxes. */
  totalCount: number
  /** List of mailboxes. */
  mailboxes: Mailbox[]
}

export type ListOffersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Sort order of offers in the response. */
  orderBy?: ListOffersRequestOrderBy
  /**
   * Defines whether the response should consist of offers only, without
   * options.
   */
  withoutOptions: boolean
  /**
   * Defines whether the response should consist of options only, without
   * offers.
   */
  onlyOptions: boolean
  /**
   * ID of a Web Hosting plan, to check compatibility with returned offers (in
   * case of wanting to update the plan).
   */
  hostingId?: string
  /** Name of the control panel to filter for. */
  controlPanels?: string[]
}

export interface ListOffersResponse {
  /** List of offers. */
  offers: Offer[]
}

export type ResetHostingPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting. */
  hostingId: string
}

export interface ResetHostingPasswordResponse {
  /** New password. */
  password: string
}

export type RestoreHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export interface Session {
  /** Logged user's session URL. */
  url: string
}

export type UpdateHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
  /** New contact email for the Web Hosting plan. */
  email?: string
  /** New tags for the Web Hosting plan. */
  tags?: string[]
  /** IDs of the new options for the Web Hosting plan. */
  optionIds?: string[]
  /** ID of the new offer for the Web Hosting plan. */
  offerId?: string
  /** Whether the hosting is protected or not. */
  protected?: boolean
}
