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
  CreateHostingRequest,
  DnsRecord,
  DnsRecords,
  Hosting,
  HostingCpanelUrls,
  HostingOption,
  ListHostingsResponse,
  ListOffersResponse,
  Nameserver,
  Offer,
  OfferProduct,
  UpdateHostingRequest,
} from './types.gen'

const unmarshalHostingCpanelUrls = (data: unknown) => {
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

const unmarshalHostingOption = (data: unknown) => {
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

export const unmarshalHosting = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Hosting' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpanelUrls: unmarshalHostingCpanelUrls(data.cpanel_urls),
    createdAt: unmarshalDate(data.created_at),
    dnsStatus: data.dns_status,
    domain: data.domain,
    id: data.id,
    offerEndOfLife: data.offer_end_of_life,
    offerId: data.offer_id,
    offerName: data.offer_name,
    options: unmarshalArrayOfObject(data.options, unmarshalHostingOption),
    organizationId: data.organization_id,
    platformHostname: data.platform_hostname,
    platformNumber: data.platform_number,
    projectId: data.project_id,
    region: data.region,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    username: data.username,
  } as Hosting
}

const unmarshalDnsRecord = (data: unknown) => {
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

const unmarshalNameserver = (data: unknown) => {
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

export const unmarshalDnsRecords = (data: unknown) => {
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

export const unmarshalListHostingsResponse = (data: unknown) => {
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

const unmarshalOfferProduct = (data: unknown) => {
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

const unmarshalOffer = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Offer' failed as data isn't a dictionary.`,
    )
  }

  return {
    available: data.available,
    billingOperationPath: data.billing_operation_path,
    endOfLife: data.end_of_life,
    id: data.id,
    price: data.price ? unmarshalMoney(data.price) : undefined,
    product: unmarshalOfferProduct(data.product),
    quotaWarnings: data.quota_warnings,
  } as Offer
}

export const unmarshalListOffersResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListOffersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    offers: unmarshalArrayOfObject(data.offers, unmarshalOffer),
  } as ListOffersResponse
}

export const marshalCreateHostingRequest = (
  request: CreateHostingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  email: request.email,
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
  tags: request.tags,
})
