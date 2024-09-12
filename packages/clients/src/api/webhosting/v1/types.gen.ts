// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Region } from '../../../bridge'
import type { LanguageCode as StdLanguageCode } from '../../std/types.gen'

export type HostingDnsStatus = 'unknown_dns_status' | 'valid' | 'invalid'

export type HostingStatus =
  | 'unknown_status'
  | 'delivering'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'migrating'

export type HostingSummaryStatus =
  | 'unknown_status'
  | 'delivering'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'migrating'

export type ListDatabaseUsersRequestOrderBy = 'username_asc' | 'username_desc'

export type ListDatabasesRequestOrderBy =
  | 'database_name_asc'
  | 'database_name_desc'

export type ListFtpAccountsRequestOrderBy = 'username_asc' | 'username_desc'

export type ListHostingsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListMailAccountsRequestOrderBy =
  | 'username_asc'
  | 'username_desc'
  | 'domain_asc'
  | 'domain_desc'

export type ListOffersRequestOrderBy = 'price_asc'

export type ListWebsitesRequestOrderBy = 'domain_asc' | 'domain_desc'

export type OfferOptionName =
  | 'unknown_name'
  | 'domain_count'
  | 'email_count'
  | 'storage_gb'
  | 'vcpu_count'
  | 'ram_gb'
  | 'backup'
  | 'dedicated_ip'

export type OfferOptionWarning = 'unknown_warning' | 'quota_exceeded_warning'

export interface OfferOption {
  /** Option ID. */
  id: string
  /** Name of the option. */
  name: OfferOptionName
  /** Unique identifier used for billing. */
  billingOperationPath: string
  /** Minimum value for the option in the offer. */
  minValue: number
  /**
   * If a hosting_id was specified in the call, defines the current value of the
   * option in the hosting.
   */
  currentValue: number
  /** Maximum value for the option in the offer. */
  maxValue: number
  /** Defines a warning if the maximum value for the option has been reached. */
  quotaWarning: OfferOptionWarning
}

export interface CreateHostingRequestDomainConfiguration {
  updateNameservers: boolean
  updateWebRecord: boolean
  updateMailRecord: boolean
  updateAllRecords: boolean
}

export interface OfferOptionRequest {
  /** Offer option ID. */
  id: string
  /** The option requested quantity to set for the Web Hosting plan. */
  quantity: number
}

export interface HostingCpanelUrls {
  dashboard: string
  webmail: string
}

export interface HostingOption {
  /** Option ID. */
  id: string
  /** Option name. */
  name: OfferOptionName
  /** Option quantity. */
  quantity: number
}

export interface ControlPanel {
  /** Control panel name. */
  name: string
  /** Define if the control panel type is available to order. */
  available: boolean
  /** URL of the control panel's logo. */
  logoUrl: string
  /** List of available languages for the control panel. */
  availableLanguages: StdLanguageCode[]
}

export interface DatabaseUser {
  /** Name of the database user. */
  username: string
  /** List of databases accessible by the user. */
  databases: string[]
}

export interface Database {
  /** Name of the database. */
  databaseName: string
  /** List of users who have access to the database. */
  users: string[]
}

export interface FtpAccount {
  /** The username of the FTP account. */
  username: string
  /** The path associated with the FTP account. */
  path: string
}

export interface HostingSummary {
  /** ID of the Web Hosting plan. */
  id: string
  /** ID of the Scaleway Project the Web Hosting plan belongs to. */
  projectId: string
  /** Date on which the Web Hosting plan was last updated. */
  updatedAt?: Date
  /** Status of the Web Hosting plan. */
  status: HostingSummaryStatus
  /** Main domain associated with the Web Hosting plan. */
  domain: string
  /** Whether the hosting is protected or not. */
  protected: boolean
  /** Region where the Web Hosting plan is hosted. */
  region: Region
}

export interface MailAccount {
  /** Domain part of the mail account address. */
  domain: string
  /** Username part address of the mail account address. */
  username: string
}

export interface Offer {
  /** Offer ID. */
  id: string
  /** Unique identifier used for billing. */
  billingOperationPath: string
  /** Options available for the offer. */
  options: OfferOption[]
  /** Price of the offer. */
  price?: Money
  /**
   * If a hosting_id was specified in the call, defines whether the offer is
   * available for a specified hosting plan to migrate (update) to.
   */
  available: boolean
  /** Name of the control panel. */
  controlPanelName: string
  /** Indicates if the offer has reached its end of life. */
  endOfLife: boolean
}

export interface Website {
  /** The domain of the website. */
  domain: string
  /** The directory path of the website. */
  path: string
  /** The SSL status of the website. */
  sslStatus: boolean
}

export type ControlPanelApiListControlPanelsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number (must be a positive integer). */
  page?: number
  /**
   * Number of control panels to return (must be a positive integer lower or
   * equal to 100).
   */
  pageSize?: number
}

export type DatabaseApiAssignDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Name of the database to be assigned. */
  databaseName: string
  /** Name of the user to assign. */
  username: string
}

export type DatabaseApiChangeDatabaseUserPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Name of the user to update. */
  username: string
  /** New password. */
  password: string
}

export type DatabaseApiCreateDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan where the database will be created. */
  hostingId: string
  /** Name of the database to be created. */
  databaseName: string
}

export type DatabaseApiCreateDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Name of the user to create. */
  username: string
  /** Password of the user to create. */
  password: string
}

export type DatabaseApiDeleteDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Name of the database to delete. */
  databaseName: string
}

export type DatabaseApiDeleteDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Name of the database user to delete. */
  username: string
}

export type DatabaseApiGetDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Name of the database. */
  databaseName: string
}

export type DatabaseApiGetDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Name of the database user to retrieve details. */
  username: string
}

export type DatabaseApiListDatabaseUsersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Page number (must be a positive integer). */
  page?: number
  /**
   * Number of database users to return (must be a positive integer lower or
   * equal to 100).
   */
  pageSize?: number
  /** Sort order of database users in the response. */
  orderBy?: ListDatabaseUsersRequestOrderBy
}

export type DatabaseApiListDatabasesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Page number (must be a positive integer). */
  page?: number
  /**
   * Number of databases to return (must be a positive integer lower or equal to
   * 100).
   */
  pageSize?: number
  /** Sort order of databases in the response. */
  orderBy?: ListDatabasesRequestOrderBy
}

export type DatabaseApiUnassignDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Name of the database to be unassigned. */
  databaseName: string
  /** Name of the user to unassign. */
  username: string
}

export type FtpAccountApiChangeFtpAccountPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Username of the FTP account. */
  username: string
  /** New password for the FTP account. */
  password: string
}

export type FtpAccountApiCreateFtpAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Username for the new FTP account. */
  username: string
  /** Path for the new FTP account. */
  path: string
  /** Password for the new FTP account. */
  password: string
}

export type FtpAccountApiListFtpAccountsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Page number (must be a positive integer). */
  page?: number
  /**
   * Number of FTP accounts to return (must be a positive integer lower or equal
   * to 100).
   */
  pageSize?: number
  /** Sort order of FTP accounts in the response. */
  orderBy?: ListFtpAccountsRequestOrderBy
  /** Domain to filter the FTP accounts. */
  domain?: string
}

export type FtpAccountApiRemoveFtpAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Username of the FTP account to be deleted. */
  username: string
}

export interface Hosting {
  /** ID of the Web Hosting plan. */
  id: string
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
  platformNumber: number
  /** ID of the active offer for the Web Hosting plan. */
  offerId: string
  /** Name of the active offer for the Web Hosting plan. */
  offerName: string
  /** Main domain associated with the Web Hosting plan. */
  domain: string
  /** List of tags associated with the Web Hosting plan. */
  tags: string[]
  /** List of the Web Hosting plan options. */
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
  /** Contact email used for the hosting. */
  contactEmail: string
  /** Region where the Web Hosting plan is hosted. */
  region: Region
}

export type HostingApiCreateHostingRequest = {
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
  email: string
  /** List of tags for the Web Hosting plan. */
  tags?: string[]
  /**
   * Domain name to link to the Web Hosting plan. You must already own this
   * domain name, and have completed the DNS validation process beforehand.
   */
  domain: string
  /** List of the Web Hosting plan options IDs with their quantities. */
  offerOptions?: OfferOptionRequest[]
  /** Default language for the control panel interface. */
  language?: StdLanguageCode
  /**
   * Indicates whether to update hosting domain name servers and DNS records for
   * domains managed by Scaleway Elements.
   */
  domainConfiguration?: CreateHostingRequestDomainConfiguration
}

export type HostingApiCreateSessionRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export type HostingApiDeleteHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export type HostingApiGetHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Hosting ID. */
  hostingId: string
}

export type HostingApiListHostingsRequest = {
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

export type HostingApiResetHostingPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting. */
  hostingId: string
}

export type HostingApiUpdateHostingRequest = {
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
  /** List of the Web Hosting plan options IDs with their quantities. */
  offerOptions?: OfferOptionRequest[]
  /** ID of the new offer for the Web Hosting plan. */
  offerId?: string
  /** Whether the hosting is protected or not. */
  protected?: boolean
}

export interface ListControlPanelsResponse {
  /** Number of control panels returned. */
  totalCount: number
  /** List of control panels. */
  controlPanels: ControlPanel[]
}

export interface ListDatabaseUsersResponse {
  /** Total number of database users. */
  totalCount: number
  /** List of database users. */
  users: DatabaseUser[]
}

export interface ListDatabasesResponse {
  /** Total number of databases. */
  totalCount: number
  /** List of databases. */
  databases: Database[]
}

export interface ListFtpAccountsResponse {
  /** Total number of FTP accounts. */
  totalCount: number
  /** List of FTP accounts. */
  ftpAccounts: FtpAccount[]
}

export interface ListHostingsResponse {
  /** Number of Web Hosting plans returned. */
  totalCount: number
  /** List of Web Hosting plans. */
  hostings: HostingSummary[]
}

export interface ListMailAccountsResponse {
  /** Total number of mail accounts. */
  totalCount: number
  /** List of mail accounts. */
  mailAccounts: MailAccount[]
}

export interface ListOffersResponse {
  /** Total number of offers. */
  totalCount: number
  /** List of offers. */
  offers: Offer[]
}

export interface ListWebsitesResponse {
  /** Total number of websites. */
  totalCount: number
  /** List of websites. */
  websites: Website[]
}

export type MailAccountApiChangeMailAccountPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Domain part of the mail account address. */
  domain: string
  /** Username part of the mail account address. */
  username: string
  /** New password for the mail account. */
  password: string
}

export type MailAccountApiCreateMailAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Domain part of the mail account address. */
  domain: string
  /** Username part address of the mail account address. */
  username: string
  /** Password for the new mail account. */
  password: string
}

export type MailAccountApiListMailAccountsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Page number (must be a positive integer). */
  page?: number
  /**
   * Number of mail accounts to return (must be a positive integer lower or
   * equal to 100).
   */
  pageSize?: number
  /** Sort order of mail accounts in the response. */
  orderBy?: ListMailAccountsRequestOrderBy
  /** Domain to filter the mail accounts. */
  domain?: string
}

export type MailAccountApiRemoveMailAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Domain part of the mail account address. */
  domain: string
  /** Username part of the mail account address. */
  username: string
}

export type OfferApiListOffersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number (must be a positive integer). */
  page?: number
  /**
   * Number of websites to return (must be a positive integer lower or equal to
   * 100).
   */
  pageSize?: number
  /** Sort order for Web Hosting offers in the response. */
  orderBy?: ListOffersRequestOrderBy
  /** UUID of the hosting plan. */
  hostingId?: string
  /** Name of the control panel(s) to filter for. */
  controlPanels?: string[]
}

export interface ResetHostingPasswordResponse {
  /** New temporary password. */
  oneTimePassword: string
}

export interface Session {
  /** Logged user's session URL. */
  url: string
}

export type WebsiteApiListWebsitesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the hosting plan. */
  hostingId: string
  /** Page number (must be a positive integer). */
  page?: number
  /**
   * Number of websites to return (must be a positive integer lower or equal to
   * 100).
   */
  pageSize?: number
  /** Sort order for Web Hosting websites in the response. */
  orderBy?: ListWebsitesRequestOrderBy
}
