// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CheckUserOwnsDomainRequest,
  CheckUserOwnsDomainResponse,
  ClassicMailApiCreateMailboxRequest,
  ClassicMailApiUpdateMailboxRequest,
  ControlPanel,
  CreateHostingRequest,
  CreateHostingRequestDomainConfiguration,
  DnsRecord,
  DnsRecords,
  EmailAddress,
  Hosting,
  HostingCpanelUrls,
  HostingOption,
  ListControlPanelsResponse,
  ListHostingsResponse,
  ListMailboxesResponse,
  ListOffersResponse,
  Mailbox,
  Nameserver,
  Offer,
  OfferProduct,
  ResetHostingPasswordResponse,
  Session,
  UpdateHostingRequest,
} from './types.gen'

const unmarshalHostingCpanelUrls = (data: unknown): HostingCpanelUrls => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingCpanelUrls' failed as data isn't a dictionary.`,
    )
  }

  return {
    dashboard: data.dashboard,
    webmail: data.webmail,
  } as HostingCpanelUrls
}

const unmarshalHostingOption = (data: unknown): HostingOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as HostingOption
}

export const unmarshalHosting = (data: unknown): Hosting => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Hosting' failed as data isn't a dictionary.`,
    )
  }

  return {
    controlPanelName: data.control_panel_name,
    cpanelUrls: data.cpanel_urls
      ? unmarshalHostingCpanelUrls(data.cpanel_urls)
      : undefined,
    createdAt: unmarshalDate(data.created_at),
    dnsStatus: data.dns_status,
    domain: data.domain,
    id: data.id,
    ipv4: data.ipv4,
    ipv6: data.ipv6,
    offerEndOfLife: data.offer_end_of_life,
    offerId: data.offer_id,
    offerName: data.offer_name,
    oneTimePassword: data.one_time_password,
    options: unmarshalArrayOfObject(data.options, unmarshalHostingOption),
    organizationId: data.organization_id,
    platformGroup: data.platform_group,
    platformHostname: data.platform_hostname,
    platformNumber: data.platform_number,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    username: data.username,
  } as Hosting
}

const unmarshalEmailAddress = (data: unknown): EmailAddress => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EmailAddress' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    login: data.login,
  } as EmailAddress
}

export const unmarshalMailbox = (data: unknown): Mailbox => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Mailbox' failed as data isn't a dictionary.`,
    )
  }

  return {
    email: data.email ? unmarshalEmailAddress(data.email) : undefined,
    mailboxId: data.mailbox_id,
  } as Mailbox
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
    nameServers: unmarshalArrayOfObject(data.name_servers, unmarshalNameserver),
    records: unmarshalArrayOfObject(data.records, unmarshalDnsRecord),
    status: data.status,
  } as DnsRecords
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

export const unmarshalListHostingsResponse = (
  data: unknown,
): ListHostingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListHostingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    hostings: unmarshalArrayOfObject(data.hostings, unmarshalHosting),
    totalCount: data.total_count,
  } as ListHostingsResponse
}

export const unmarshalListMailboxesResponse = (
  data: unknown,
): ListMailboxesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListMailboxesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    mailboxes: unmarshalArrayOfObject(data.mailboxes, unmarshalMailbox),
    totalCount: data.total_count,
  } as ListMailboxesResponse
}

const unmarshalOfferProduct = (data: unknown): OfferProduct => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferProduct' failed as data isn't a dictionary.`,
    )
  }

  return {
    databasesQuota: data.databases_quota,
    emailAccountsQuota: data.email_accounts_quota,
    emailStorageQuota: data.email_storage_quota,
    hostingStorageQuota: data.hosting_storage_quota,
    maxAddonDomains: data.max_addon_domains,
    name: data.name,
    option: data.option,
    ram: data.ram,
    supportIncluded: data.support_included,
    vCpu: data.v_cpu,
  } as OfferProduct
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
    price: data.price ? unmarshalMoney(data.price) : undefined,
    product: data.product ? unmarshalOfferProduct(data.product) : undefined,
    quotaWarnings: data.quota_warnings,
  } as Offer
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
  } as ListOffersResponse
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
    password: data.password,
  } as ResetHostingPasswordResponse
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

export const marshalCheckUserOwnsDomainRequest = (
  request: CheckUserOwnsDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalEmailAddress = (
  request: EmailAddress,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  login: request.login,
})

export const marshalClassicMailApiCreateMailboxRequest = (
  request: ClassicMailApiCreateMailboxRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email:
    request.email !== undefined
      ? marshalEmailAddress(request.email, defaults)
      : undefined,
  password: request.password,
})

export const marshalClassicMailApiUpdateMailboxRequest = (
  request: ClassicMailApiUpdateMailboxRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
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

export const marshalCreateHostingRequest = (
  request: CreateHostingRequest,
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
  option_ids: request.optionIds,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalUpdateHostingRequest = (
  request: UpdateHostingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  offer_id: request.offerId,
  option_ids: request.optionIds,
  protected: request.protected,
  tags: request.tags,
})
