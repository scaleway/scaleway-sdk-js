// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '@scaleway/sdk-client'
import type {
  AutoConfigDomainDns,
  Backup,
  BackupApiRestoreBackupItemsRequest,
  BackupItem,
  BackupItemGroup,
  CheckFreeDomainAvailabilityResponse,
  CheckUserOwnsDomainResponse,
  ControlPanel,
  CreateDatabaseRequestUser,
  CreateHostingRequestDomainConfiguration,
  Database,
  DatabaseApiAssignDatabaseUserRequest,
  DatabaseApiChangeDatabaseUserPasswordRequest,
  DatabaseApiCreateDatabaseRequest,
  DatabaseApiCreateDatabaseUserRequest,
  DatabaseApiUnassignDatabaseUserRequest,
  DatabaseUser,
  DnsApiCheckUserOwnsDomainRequest,
  DnsApiSyncDomainDnsRecordsRequest,
  DnsRecord,
  DnsRecords,
  Domain,
  DomainAvailability,
  FreeDomain,
  FreeDomainApiCheckFreeDomainAvailabilityRequest,
  FtpAccount,
  FtpAccountApiChangeFtpAccountPasswordRequest,
  FtpAccountApiCreateFtpAccountRequest,
  Hosting,
  HostingApiAddCustomDomainRequest,
  HostingApiCreateHostingRequest,
  HostingApiRemoveCustomDomainRequest,
  HostingApiUpdateHostingRequest,
  HostingDomain,
  HostingDomainCustomDomain,
  HostingSummary,
  HostingUser,
  ListBackupItemsResponse,
  ListBackupsResponse,
  ListControlPanelsResponse,
  ListDatabasesResponse,
  ListDatabaseUsersResponse,
  ListFreeRootDomainsResponse,
  ListFtpAccountsResponse,
  ListHostingsResponse,
  ListMailAccountsResponse,
  ListOffersResponse,
  ListWebsitesResponse,
  MailAccount,
  MailAccountApiChangeMailAccountPasswordRequest,
  MailAccountApiCreateMailAccountRequest,
  MailAccountApiRemoveMailAccountRequest,
  Nameserver,
  Offer,
  OfferOption,
  OfferOptionRequest,
  Platform,
  PlatformControlPanel,
  PlatformControlPanelUrls,
  ResetHostingPasswordResponse,
  ResourceSummary,
  RestoreBackupItemsResponse,
  RestoreBackupResponse,
  SearchDomainsResponse,
  Session,
  SyncDomainDnsRecordsRequestRecord,
  Website,
} from './types.gen.js'

export const unmarshalBackup = (data: unknown): Backup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Backup' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    size: data.size,
    status: data.status,
    totalItems: data.total_items,
  } as Backup
}

export const unmarshalDatabaseUser = (data: unknown): DatabaseUser => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DatabaseUser' failed as data isn't a dictionary.`,
    )
  }

  return {
    databases: data.databases,
    username: data.username,
  } as DatabaseUser
}

export const unmarshalDatabase = (data: unknown): Database => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Database' failed as data isn't a dictionary.`,
    )
  }

  return {
    databaseName: data.database_name,
    users: data.users,
  } as Database
}

export const unmarshalFtpAccount = (data: unknown): FtpAccount => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FtpAccount' failed as data isn't a dictionary.`,
    )
  }

  return {
    path: data.path,
    username: data.username,
  } as FtpAccount
}

const unmarshalAutoConfigDomainDns = (data: unknown): AutoConfigDomainDns => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AutoConfigDomainDns' failed as data isn't a dictionary.`,
    )
  }

  return {
    allRecords: data.all_records,
    mailRecords: data.mail_records,
    nameservers: data.nameservers,
    none: data.none,
    webRecords: data.web_records,
  } as AutoConfigDomainDns
}

const unmarshalHostingDomainCustomDomain = (
  data: unknown,
): HostingDomainCustomDomain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingDomainCustomDomain' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoConfigDomainDns: data.auto_config_domain_dns
      ? unmarshalAutoConfigDomainDns(data.auto_config_domain_dns)
      : undefined,
    dnsStatus: data.dns_status,
    domain: data.domain,
    domainStatus: data.domain_status,
  } as HostingDomainCustomDomain
}

const unmarshalHostingDomain = (data: unknown): HostingDomain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingDomain' failed as data isn't a dictionary.`,
    )
  }

  return {
    customDomain: data.custom_domain
      ? unmarshalHostingDomainCustomDomain(data.custom_domain)
      : undefined,
    subdomain: data.subdomain,
  } as HostingDomain
}

export const unmarshalHostingSummary = (data: unknown): HostingSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    dnsStatus: data.dns_status ? data.dns_status : undefined,
    domain: data.domain,
    domainInfo: data.domain_info
      ? unmarshalHostingDomain(data.domain_info)
      : undefined,
    domainStatus: data.domain_status ? data.domain_status : undefined,
    id: data.id,
    offerName: data.offer_name,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as HostingSummary
}

export const unmarshalMailAccount = (data: unknown): MailAccount => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MailAccount' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    username: data.username,
  } as MailAccount
}

const unmarshalFreeDomain = (data: unknown): FreeDomain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FreeDomain' failed as data isn't a dictionary.`,
    )
  }

  return {
    rootDomain: data.root_domain,
    slug: data.slug,
  } as FreeDomain
}

export const unmarshalCheckFreeDomainAvailabilityResponse = (
  data: unknown,
): CheckFreeDomainAvailabilityResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckFreeDomainAvailabilityResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    freeDomain: data.free_domain
      ? unmarshalFreeDomain(data.free_domain)
      : undefined,
    isAvailable: data.is_available,
    reason: data.reason ? data.reason : undefined,
  } as CheckFreeDomainAvailabilityResponse
}

export const unmarshalCheckUserOwnsDomainResponse = (
  data: unknown,
): CheckUserOwnsDomainResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckUserOwnsDomainResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ownsDomain: data.owns_domain,
  } as CheckUserOwnsDomainResponse
}

const unmarshalDnsRecord = (data: unknown): DnsRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DnsRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    priority: data.priority,
    rawData: data.raw_data,
    status: data.status,
    ttl: data.ttl,
    type: data.type,
    value: data.value,
  } as DnsRecord
}

const unmarshalNameserver = (data: unknown): Nameserver => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Nameserver' failed as data isn't a dictionary.`,
    )
  }

  return {
    hostname: data.hostname,
    isDefault: data.is_default,
    status: data.status,
  } as Nameserver
}

export const unmarshalDnsRecords = (data: unknown): DnsRecords => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DnsRecords' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoConfigDomainDns: data.auto_config_domain_dns
      ? unmarshalAutoConfigDomainDns(data.auto_config_domain_dns)
      : undefined,
    dnsConfig: data.dns_config ? data.dns_config : undefined,
    nameServers: unmarshalArrayOfObject(data.name_servers, unmarshalNameserver),
    records: unmarshalArrayOfObject(data.records, unmarshalDnsRecord),
    status: data.status,
  } as DnsRecords
}

export const unmarshalDomain = (data: unknown): Domain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoConfigDomainDns: data.auto_config_domain_dns
      ? unmarshalAutoConfigDomainDns(data.auto_config_domain_dns)
      : undefined,
    availableActions: data.available_actions,
    availableDnsActions: data.available_dns_actions
      ? data.available_dns_actions
      : undefined,
    name: data.name,
    owner: data.owner,
    status: data.status,
    zoneDomainName: data.zone_domain_name,
  } as Domain
}

const unmarshalPlatformControlPanelUrls = (
  data: unknown,
): PlatformControlPanelUrls => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlatformControlPanelUrls' failed as data isn't a dictionary.`,
    )
  }

  return {
    dashboard: data.dashboard,
    webmail: data.webmail,
  } as PlatformControlPanelUrls
}

const unmarshalOfferOption = (data: unknown): OfferOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    billingOperationPath: data.billing_operation_path,
    currentValue: data.current_value,
    id: data.id,
    maxValue: data.max_value,
    minValue: data.min_value,
    name: data.name,
    price: data.price ? unmarshalMoney(data.price) : undefined,
    quotaWarning: data.quota_warning,
  } as OfferOption
}

const unmarshalPlatformControlPanel = (data: unknown): PlatformControlPanel => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlatformControlPanel' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    urls: data.urls ? unmarshalPlatformControlPanelUrls(data.urls) : undefined,
  } as PlatformControlPanel
}

const unmarshalHostingUser = (data: unknown): HostingUser => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingUser' failed as data isn't a dictionary.`,
    )
  }

  return {
    contactEmail: data.contact_email,
    oneTimePassword: data.one_time_password,
    oneTimePasswordB64: data.one_time_password_b64,
    username: data.username,
  } as HostingUser
}

const unmarshalOffer = (data: unknown): Offer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Offer' failed as data isn't a dictionary.`,
    )
  }

  return {
    available: data.available,
    billingOperationPath: data.billing_operation_path,
    controlPanelName: data.control_panel_name,
    endOfLife: data.end_of_life,
    id: data.id,
    name: data.name,
    options: unmarshalArrayOfObject(data.options, unmarshalOfferOption),
    price: data.price ? unmarshalMoney(data.price) : undefined,
    quotaWarning: data.quota_warning,
    region: data.region,
  } as Offer
}

const unmarshalPlatform = (data: unknown): Platform => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Platform' failed as data isn't a dictionary.`,
    )
  }

  return {
    controlPanel: data.control_panel
      ? unmarshalPlatformControlPanel(data.control_panel)
      : undefined,
    groupName: data.group_name,
    hostname: data.hostname,
    ipv4: data.ipv4,
    ipv6: data.ipv6,
    number: data.number,
  } as Platform
}

export const unmarshalHosting = (data: unknown): Hosting => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Hosting' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    dnsStatus: data.dns_status ? data.dns_status : undefined,
    domain: data.domain,
    domainInfo: data.domain_info
      ? unmarshalHostingDomain(data.domain_info)
      : undefined,
    domainStatus: data.domain_status ? data.domain_status : undefined,
    id: data.id,
    ipv4: data.ipv4,
    offer: data.offer ? unmarshalOffer(data.offer) : undefined,
    platform: data.platform ? unmarshalPlatform(data.platform) : undefined,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    user: data.user ? unmarshalHostingUser(data.user) : undefined,
  } as Hosting
}

const unmarshalBackupItem = (data: unknown): BackupItem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BackupItem' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    size: data.size,
    status: data.status,
    type: data.type,
  } as BackupItem
}

const unmarshalBackupItemGroup = (data: unknown): BackupItemGroup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BackupItemGroup' failed as data isn't a dictionary.`,
    )
  }

  return {
    items: unmarshalArrayOfObject(data.items, unmarshalBackupItem),
    type: data.type,
  } as BackupItemGroup
}

export const unmarshalListBackupItemsResponse = (
  data: unknown,
): ListBackupItemsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBackupItemsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    groups: unmarshalArrayOfObject(data.groups, unmarshalBackupItemGroup),
    totalCount: data.total_count,
  } as ListBackupItemsResponse
}

export const unmarshalListBackupsResponse = (
  data: unknown,
): ListBackupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBackupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    backups: unmarshalArrayOfObject(data.backups, unmarshalBackup),
    totalCount: data.total_count,
  } as ListBackupsResponse
}

const unmarshalControlPanel = (data: unknown): ControlPanel => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ControlPanel' failed as data isn't a dictionary.`,
    )
  }

  return {
    available: data.available,
    availableLanguages: data.available_languages,
    logoUrl: data.logo_url,
    name: data.name,
  } as ControlPanel
}

export const unmarshalListControlPanelsResponse = (
  data: unknown,
): ListControlPanelsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListControlPanelsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    controlPanels: unmarshalArrayOfObject(
      data.control_panels,
      unmarshalControlPanel,
    ),
    totalCount: data.total_count,
  } as ListControlPanelsResponse
}

export const unmarshalListDatabaseUsersResponse = (
  data: unknown,
): ListDatabaseUsersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabaseUsersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    users: unmarshalArrayOfObject(data.users, unmarshalDatabaseUser),
  } as ListDatabaseUsersResponse
}

export const unmarshalListDatabasesResponse = (
  data: unknown,
): ListDatabasesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabasesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    databases: unmarshalArrayOfObject(data.databases, unmarshalDatabase),
    totalCount: data.total_count,
  } as ListDatabasesResponse
}

export const unmarshalListFreeRootDomainsResponse = (
  data: unknown,
): ListFreeRootDomainsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFreeRootDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rootDomains: data.root_domains,
    totalCount: data.total_count,
  } as ListFreeRootDomainsResponse
}

export const unmarshalListFtpAccountsResponse = (
  data: unknown,
): ListFtpAccountsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFtpAccountsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ftpAccounts: unmarshalArrayOfObject(data.ftp_accounts, unmarshalFtpAccount),
    totalCount: data.total_count,
  } as ListFtpAccountsResponse
}

export const unmarshalListHostingsResponse = (
  data: unknown,
): ListHostingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListHostingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    hostings: unmarshalArrayOfObject(data.hostings, unmarshalHostingSummary),
    totalCount: data.total_count,
  } as ListHostingsResponse
}

export const unmarshalListMailAccountsResponse = (
  data: unknown,
): ListMailAccountsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListMailAccountsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    mailAccounts: unmarshalArrayOfObject(
      data.mail_accounts,
      unmarshalMailAccount,
    ),
    totalCount: data.total_count,
  } as ListMailAccountsResponse
}

export const unmarshalListOffersResponse = (
  data: unknown,
): ListOffersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListOffersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    offers: unmarshalArrayOfObject(data.offers, unmarshalOffer),
    totalCount: data.total_count,
  } as ListOffersResponse
}

const unmarshalWebsite = (data: unknown): Website => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Website' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    path: data.path,
    sslStatus: data.ssl_status,
  } as Website
}

export const unmarshalListWebsitesResponse = (
  data: unknown,
): ListWebsitesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListWebsitesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    websites: unmarshalArrayOfObject(data.websites, unmarshalWebsite),
  } as ListWebsitesResponse
}

export const unmarshalResetHostingPasswordResponse = (
  data: unknown,
): ResetHostingPasswordResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ResetHostingPasswordResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    oneTimePassword: data.one_time_password,
    oneTimePasswordB64: data.one_time_password_b64,
  } as ResetHostingPasswordResponse
}

export const unmarshalResourceSummary = (data: unknown): ResourceSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ResourceSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    databasesCount: data.databases_count,
    ftpAccountsCount: data.ftp_accounts_count,
    mailAccountsCount: data.mail_accounts_count,
    websitesCount: data.websites_count,
  } as ResourceSummary
}

export const unmarshalRestoreBackupItemsResponse = (
  data: unknown,
): RestoreBackupItemsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RestoreBackupItemsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {} as RestoreBackupItemsResponse
}

export const unmarshalRestoreBackupResponse = (
  data: unknown,
): RestoreBackupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RestoreBackupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {} as RestoreBackupResponse
}

const unmarshalDomainAvailability = (data: unknown): DomainAvailability => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainAvailability' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableActions: data.available_actions,
    canCreateHosting: data.can_create_hosting,
    name: data.name,
    price: data.price ? unmarshalMoney(data.price) : undefined,
    status: data.status,
    zoneName: data.zone_name,
  } as DomainAvailability
}

export const unmarshalSearchDomainsResponse = (
  data: unknown,
): SearchDomainsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SearchDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    domainsAvailable: unmarshalArrayOfObject(
      data.domains_available,
      unmarshalDomainAvailability,
    ),
  } as SearchDomainsResponse
}

export const unmarshalSession = (data: unknown): Session => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Session' failed as data isn't a dictionary.`,
    )
  }

  return {
    url: data.url,
  } as Session
}

export const marshalBackupApiRestoreBackupItemsRequest = (
  request: BackupApiRestoreBackupItemsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  item_ids: request.itemIds,
})

export const marshalDatabaseApiAssignDatabaseUserRequest = (
  request: DatabaseApiAssignDatabaseUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  username: request.username,
})

export const marshalDatabaseApiChangeDatabaseUserPasswordRequest = (
  request: DatabaseApiChangeDatabaseUserPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
})

const marshalCreateDatabaseRequestUser = (
  request: CreateDatabaseRequestUser,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
  username: request.username,
})

export const marshalDatabaseApiCreateDatabaseRequest = (
  request: DatabaseApiCreateDatabaseRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  database_name: request.databaseName,
  ...resolveOneOf<Record<string, unknown> | string>([
    {
      param: 'new_user',
      value:
        request.newUser !== undefined
          ? marshalCreateDatabaseRequestUser(request.newUser, defaults)
          : undefined,
    },
    { param: 'existing_username', value: request.existingUsername },
  ]),
})

export const marshalDatabaseApiCreateDatabaseUserRequest = (
  request: DatabaseApiCreateDatabaseUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
  username: request.username,
})

export const marshalDatabaseApiUnassignDatabaseUserRequest = (
  request: DatabaseApiUnassignDatabaseUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  username: request.username,
})

export const marshalDnsApiCheckUserOwnsDomainRequest = (
  request: DnsApiCheckUserOwnsDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalAutoConfigDomainDns = (
  request: AutoConfigDomainDns,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  all_records: request.allRecords,
  mail_records: request.mailRecords,
  nameservers: request.nameservers,
  none: request.none,
  web_records: request.webRecords,
})

const marshalSyncDomainDnsRecordsRequestRecord = (
  request: SyncDomainDnsRecordsRequestRecord,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  type: request.type,
})

export const marshalDnsApiSyncDomainDnsRecordsRequest = (
  request: DnsApiSyncDomainDnsRecordsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  auto_config_domain_dns:
    request.autoConfigDomainDns !== undefined
      ? marshalAutoConfigDomainDns(request.autoConfigDomainDns, defaults)
      : undefined,
  custom_records:
    request.customRecords !== undefined
      ? request.customRecords.map(elt =>
          marshalSyncDomainDnsRecordsRequestRecord(elt, defaults),
        )
      : undefined,
  update_all_records: request.updateAllRecords,
  update_mail_records: request.updateMailRecords,
  update_nameservers: request.updateNameservers,
  update_web_records: request.updateWebRecords,
})

export const marshalFreeDomainApiCheckFreeDomainAvailabilityRequest = (
  request: FreeDomainApiCheckFreeDomainAvailabilityRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  root_domain: request.rootDomain,
  slug: request.slug,
})

export const marshalFtpAccountApiChangeFtpAccountPasswordRequest = (
  request: FtpAccountApiChangeFtpAccountPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
})

export const marshalFtpAccountApiCreateFtpAccountRequest = (
  request: FtpAccountApiCreateFtpAccountRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
  path: request.path,
  username: request.username,
})

export const marshalHostingApiAddCustomDomainRequest = (
  request: HostingApiAddCustomDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain_name: request.domainName,
})

const marshalCreateHostingRequestDomainConfiguration = (
  request: CreateHostingRequestDomainConfiguration,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  update_all_records: request.updateAllRecords,
  update_mail_record: request.updateMailRecord,
  update_nameservers: request.updateNameservers,
  update_web_record: request.updateWebRecord,
})

const marshalOfferOptionRequest = (
  request: OfferOptionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  quantity: request.quantity,
})

export const marshalHostingApiCreateHostingRequest = (
  request: HostingApiCreateHostingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  auto_config_domain_dns:
    request.autoConfigDomainDns !== undefined
      ? marshalAutoConfigDomainDns(request.autoConfigDomainDns, defaults)
      : undefined,
  domain: request.domain,
  domain_configuration:
    request.domainConfiguration !== undefined
      ? marshalCreateHostingRequestDomainConfiguration(
          request.domainConfiguration,
          defaults,
        )
      : undefined,
  email: request.email,
  language: request.language,
  offer_id: request.offerId,
  offer_options:
    request.offerOptions !== undefined
      ? request.offerOptions.map(elt =>
          marshalOfferOptionRequest(elt, defaults),
        )
      : undefined,
  project_id: request.projectId ?? defaults.defaultProjectId,
  skip_welcome_email: request.skipWelcomeEmail,
  subdomain: request.subdomain,
  tags: request.tags,
})

export const marshalHostingApiRemoveCustomDomainRequest = (
  request: HostingApiRemoveCustomDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain_name: request.domainName,
})

export const marshalHostingApiUpdateHostingRequest = (
  request: HostingApiUpdateHostingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  offer_id: request.offerId,
  offer_options:
    request.offerOptions !== undefined
      ? request.offerOptions.map(elt =>
          marshalOfferOptionRequest(elt, defaults),
        )
      : undefined,
  protected: request.protected,
  tags: request.tags,
})

export const marshalMailAccountApiChangeMailAccountPasswordRequest = (
  request: MailAccountApiChangeMailAccountPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  password: request.password,
  username: request.username,
})

export const marshalMailAccountApiCreateMailAccountRequest = (
  request: MailAccountApiCreateMailAccountRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  password: request.password,
  username: request.username,
})

export const marshalMailAccountApiRemoveMailAccountRequest = (
  request: MailAccountApiRemoveMailAccountRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  username: request.username,
})
