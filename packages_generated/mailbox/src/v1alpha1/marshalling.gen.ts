// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, marshalBlobToScwFile, marshalDecimal, marshalMoney, marshalScwFile, marshalTimeSeries, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalDecimal, unmarshalMapOfObject, unmarshalMoney, unmarshalScwFile, unmarshalServiceInfo, unmarshalTimeSeries, unmarshalTimeSeriesPoint } from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, DefaultValues } from '@scaleway/sdk-client'
import type {
  Mailbox,
  Alias,
  Domain,
  Forwarding,
  BatchCreateMailboxesResponse,
  DomainRecord,
  GetDomainRecordsResponse,
  ListAliasesResponse,
  ListDomainsResponse,
  ListForwardingsResponse,
  ListMailboxesResponse,
  MailboxForwarding,
  BatchCreateMailboxesRequestMailboxParameters,
  BatchCreateMailboxesRequest,
  CreateAliasRequest,
  CreateDomainRequest,
  CreateForwardingRequest,
  UpdateAliasRequest,
  UpdateForwardingRequest,
  UpdateMailboxForwardingRequest,
  UpdateMailboxRequest,
} from './types.gen.js'

export const unmarshalMailbox = (data: unknown): Mailbox => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Mailbox' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    deletionScheduledAt: unmarshalDate(data.deletion_scheduled_at),
    domainId: data.domain_id,
    email: data.email,
    id: data.id,
    nextSubscriptionPeriod: data.next_subscription_period,
    nextSubscriptionPeriodStartsAt: unmarshalDate(data.next_subscription_period_starts_at),
    organizationId: data.organization_id,
    projectId: data.project_id,
    status: data.status,
    subscriptionPeriod: data.subscription_period,
    subscriptionPeriodStartedAt: unmarshalDate(data.subscription_period_started_at),
    updatedAt: unmarshalDate(data.updated_at),
  } as Mailbox
}

export const unmarshalAlias = (data: unknown): Alias => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Alias' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    email: data.email,
    id: data.id,
    mailboxId: data.mailbox_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Alias
}

export const unmarshalDomain = (data: unknown): Domain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    imapUrl: data.imap_url,
    mailboxTotalCount: data.mailbox_total_count,
    name: data.name,
    organizationId: data.organization_id,
    pop3Url: data.pop3_url,
    projectId: data.project_id,
    smtpUrl: data.smtp_url,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    webmailUrl: data.webmail_url,
  } as Domain
}

export const unmarshalForwarding = (data: unknown): Forwarding => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Forwarding' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    email: data.email,
    id: data.id,
    mailboxId: data.mailbox_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as Forwarding
}

export const unmarshalBatchCreateMailboxesResponse = (data: unknown): BatchCreateMailboxesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BatchCreateMailboxesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    mailboxes: unmarshalArrayOfObject(data.mailboxes, unmarshalMailbox),
  } as BatchCreateMailboxesResponse
}

const unmarshalDomainRecord = (data: unknown): DomainRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    dnsName: data.dns_name,
    dnsType: data.dns_type,
    dnsValue: data.dns_value,
    domainId: data.domain_id,
    error: data.error,
    id: data.id,
    level: data.level,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as DomainRecord
}

export const unmarshalGetDomainRecordsResponse = (data: unknown): GetDomainRecordsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDomainRecordsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoconfig: data.autoconfig ? unmarshalDomainRecord(data.autoconfig) : undefined,
    autodiscover: data.autodiscover ? unmarshalDomainRecord(data.autodiscover) : undefined,
    caldav: data.caldav ? unmarshalDomainRecord(data.caldav) : undefined,
    carddav: data.carddav ? unmarshalDomainRecord(data.carddav) : undefined,
    dkim: data.dkim ? unmarshalDomainRecord(data.dkim) : undefined,
    dmarc: data.dmarc ? unmarshalDomainRecord(data.dmarc) : undefined,
    domainValidation: data.domain_validation ? unmarshalDomainRecord(data.domain_validation) : undefined,
    imap: data.imap ? unmarshalDomainRecord(data.imap) : undefined,
    mx: data.mx ? unmarshalDomainRecord(data.mx) : undefined,
    pop3: data.pop3 ? unmarshalDomainRecord(data.pop3) : undefined,
    spf: data.spf ? unmarshalDomainRecord(data.spf) : undefined,
    submission: data.submission ? unmarshalDomainRecord(data.submission) : undefined,
  } as GetDomainRecordsResponse
}

export const unmarshalListAliasesResponse = (data: unknown): ListAliasesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAliasesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    aliases: unmarshalArrayOfObject(data.aliases, unmarshalAlias),
    totalCount: data.total_count,
  } as ListAliasesResponse
}

export const unmarshalListDomainsResponse = (data: unknown): ListDomainsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    domains: unmarshalArrayOfObject(data.domains, unmarshalDomain),
    totalCount: data.total_count,
  } as ListDomainsResponse
}

export const unmarshalListForwardingsResponse = (data: unknown): ListForwardingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListForwardingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    forwardings: unmarshalArrayOfObject(data.forwardings, unmarshalForwarding),
    totalCount: data.total_count,
  } as ListForwardingsResponse
}

export const unmarshalListMailboxesResponse = (data: unknown): ListMailboxesResponse => {
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

export const unmarshalMailboxForwarding = (data: unknown): MailboxForwarding => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MailboxForwarding' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    enabled: data.enabled,
    keepCopy: data.keep_copy,
    mailboxId: data.mailbox_id,
    updatedAt: unmarshalDate(data.updated_at),
  } as MailboxForwarding
}

const marshalBatchCreateMailboxesRequestMailboxParameters = (
  request: BatchCreateMailboxesRequestMailboxParameters,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  local_part: request.localPart,
  password: request.password,
})

export const marshalBatchCreateMailboxesRequest = (
  request: BatchCreateMailboxesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain_id: request.domainId,
  mailboxes: ((request.mailboxes !== undefined) ?  request.mailboxes.map(elt => marshalBatchCreateMailboxesRequestMailboxParameters(elt, defaults)): undefined),
  subscription_period: request.subscriptionPeriod,
})

export const marshalCreateAliasRequest = (
  request: CreateAliasRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  local_part: request.localPart,
  mailbox_id: request.mailboxId,
})

export const marshalCreateDomainRequest = (
  request: CreateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalCreateForwardingRequest = (
  request: CreateForwardingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  mailbox_id: request.mailboxId,
})

export const marshalUpdateAliasRequest = (
  request: UpdateAliasRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
})

export const marshalUpdateForwardingRequest = (
  request: UpdateForwardingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
})

export const marshalUpdateMailboxForwardingRequest = (
  request: UpdateMailboxForwardingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enabled: request.enabled,
  keep_copy: request.keepCopy,
})

export const marshalUpdateMailboxRequest = (
  request: UpdateMailboxRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  new_password: request.newPassword,
  subscription_period: request.subscriptionPeriod,
})
