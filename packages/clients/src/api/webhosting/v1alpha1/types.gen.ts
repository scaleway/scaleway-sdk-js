// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Region } from '../../../bridge'

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
  cpanelUrls: HostingCpanelUrls
  /** Main Web Hosting cPanel username. */
  username: string
  /** Indicates if the hosting offer has reached its end of life. */
  offerEndOfLife: boolean
  /** Region where the Web Hosting plan is hosted. */
  region: Region
}

export interface Offer {
  /** Offer ID. */
  id: string
  /** Unique identifier used for billing. */
  billingOperationPath: string
  /** Product constituting this offer. */
  product: OfferProduct
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
}

export type CreateHostingRequest = {
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
}

export type DeleteHostingRequest = {
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
  region?: Region
  /** Domain associated with the DNS records. */
  domain: string
}

export type GetHostingRequest = {
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export type ListHostingsRequest = {
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
}

export interface ListHostingsResponse {
  /** Number of Web Hosting plans returned. */
  totalCount: number
  /** List of Web Hosting plans. */
  hostings: Hosting[]
}

export type ListOffersRequest = {
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
}

export interface ListOffersResponse {
  /** List of offers. */
  offers: Offer[]
}

export type RestoreHostingRequest = {
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export type UpdateHostingRequest = {
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
}
