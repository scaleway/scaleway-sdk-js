// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
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
  FtpAccount,
  FtpAccountApiChangeFtpAccountPasswordRequest,
  FtpAccountApiCreateFtpAccountRequest,
  Hosting,
  HostingApiCreateHostingRequest,
  HostingApiUpdateHostingRequest,
  HostingSummary,
  HostingUser,
  ListControlPanelsResponse,
  ListDatabaseUsersResponse,
  ListDatabasesResponse,
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
  SearchDomainsResponse,
  Session,
  SyncDomainDnsRecordsRequestRecord,
  Website,
} from './types.gen'

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
    dnsConfig: data.dns_config,
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
    availableActions: data.available_actions,
    availableDnsActions: data.available_dns_actions,
    name: data.name,
    owner: data.owner,
    status: data.status,
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
    domainStatus: data.domain_status,
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

const unmarshalHostingSummary = (data: unknown): HostingSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    dnsStatus: data.dns_status ? data.dns_status : undefined,
    domain: data.domain,
    domainStatus: data.domain_status,
    id: data.id,
    offerName: data.offer_name,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as HostingSummary
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
  tags: request.tags,
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
