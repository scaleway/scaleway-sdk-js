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

export type ListHostingsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListOffersRequestOrderBy = 'price_asc'

export type NameserverStatus = 'unknown_status' | 'valid' | 'invalid'

export type OfferQuotaWarning =
  | 'unknown_quota_warning'
  | 'email_count_exceeded'
  | 'database_count_exceeded'
  | 'disk_usage_exceeded'

/** Dns record. */
export interface DnsRecord {
  /** Record name. */
  name: string
  /** Record type. */
  type: DnsRecordType
  /** Record time to live. */
  ttl: number
  /** Record value. */
  value: string
  /** Record priority level. */
  priority?: number
  /** Record status. */
  status: DnsRecordStatus
}

/** Dns records. */
export interface DnsRecords {
  /** List of DNS records. */
  records: DnsRecord[]
  /** List of nameservers. */
  nameServers: Nameserver[]
  /** Status of the records. */
  status: DnsRecordsStatus
}

/** Hosting. */
export interface Hosting {
  /** ID of the hosting. */
  id: string
  /** Organization ID of the hosting. */
  organizationId: string
  /** Project ID of the hosting. */
  projectId: string
  /** Last update date. */
  updatedAt?: Date
  /** Creation date. */
  createdAt?: Date
  /** The hosting status. */
  status: HostingStatus
  /** Hostname of the host platform. */
  platformHostname: string
  /** Number of the host platform. */
  platformNumber?: number
  /** ID of the active offer. */
  offerId: string
  /** Name of the active offer. */
  offerName: string
  /** Main domain of the hosting. */
  domain: string
  /** Tags of the hosting. */
  tags: string[]
  /** Active options of the hosting. */
  options: HostingOption[]
  /** DNS status of the hosting. */
  dnsStatus: HostingDnsStatus
  /** URL to connect to cPanel Dashboard and to Webmail interface. */
  cpanelUrls?: HostingCpanelUrls
  /** Main hosting cPanel username. */
  username: string
  /** Region of the hosting. */
  region: Region
}

export interface HostingCpanelUrls {
  dashboard: string
  webmail: string
}

/** Hosting. option. */
export interface HostingOption {
  /** Option ID. */
  id: string
  /** Option name. */
  name: string
}

/** List hostings response. */
export interface ListHostingsResponse {
  /** Number of returned hostings. */
  totalCount: number
  /** List of hostings. */
  hostings: Hosting[]
}

/** List offers response. */
export interface ListOffersResponse {
  /** List of returned offers. */
  offers: Offer[]
}

/** Nameserver. */
export interface Nameserver {
  /** Hostname of the nameserver. */
  hostname: string
  /** Status of the nameserver. */
  status: NameserverStatus
  /** If the nameserver is the default. */
  isDefault: boolean
}

/** Offer. */
export interface Offer {
  /** Offer ID. */
  id: string
  /** Unique identifier used for billing. */
  billingOperationPath: string
  /** Offer product. */
  product?: OfferProduct
  /** Offer price. */
  price?: Money
  /** If offer is available for a specific hosting. */
  available: boolean
  /** If not available, return quota warnings. */
  quotaWarnings: OfferQuotaWarning[]
}

/** Offer. product. */
export interface OfferProduct {
  /** Product name. */
  name: string
  /** Product option. */
  option: boolean
  emailAccountsQuota: number
  emailStorageQuota: number
  databasesQuota: number
  hostingStorageQuota: number
  supportIncluded: boolean
  vCpu: number
  ram: number
}

export type CreateHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the selected offer for the hosting. */
  offerId: string
  /** Project ID of the hosting. */
  projectId?: string
  /** Contact email of the client for the hosting. */
  email?: string
  /** The tags of the hosting. */
  tags?: string[]
  /** The domain name of the hosting. */
  domain: string
  /** IDs of the selected options for the hosting. */
  optionIds?: string[]
}

export type ListHostingsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** A positive integer to choose the page to return. */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * return.
   */
  pageSize?: number
  /** Define the order of the returned hostings. */
  orderBy?: ListHostingsRequestOrderBy
  /** Return hostings with these tags. */
  tags?: string[]
  /** Return hostings with these statuses. */
  statuses?: HostingStatus[]
  /** Return hostings with this domain. */
  domain?: string
  /** Return hostings from this project ID. */
  projectId?: string
  /** Return hostings from this organization ID. */
  organizationId?: string
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

export type UpdateHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
  /** New contact email for the hosting. */
  email?: string
  /** New tags for the hosting. */
  tags?: string[]
  /** New options IDs for the hosting. */
  optionIds?: string[]
  /** New offer ID for the hosting. */
  offerId?: string
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

export type RestoreHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export type GetDomainDnsRecordsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Domain associated to the DNS records. */
  domain: string
}

export type ListOffersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Define the order of the returned hostings. */
  orderBy?: ListOffersRequestOrderBy
  /** Select only offers, no options. */
  withoutOptions: boolean
  /** Select only options. */
  onlyOptions: boolean
  /** Define a specific hosting id (optional). */
  hostingId?: string
}
