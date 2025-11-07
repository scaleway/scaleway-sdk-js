// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  Blocklist,
  BulkCreateBlocklistsRequest,
  BulkCreateBlocklistsResponse,
  CreateDomainRequest,
  CreateEmailRequest,
  CreateEmailRequestAddress,
  CreateEmailRequestAttachment,
  CreateEmailRequestHeader,
  CreateEmailResponse,
  CreateWebhookRequest,
  Domain,
  DomainLastStatus,
  DomainLastStatusAutoconfigState,
  DomainLastStatusDkimRecord,
  DomainLastStatusDmarcRecord,
  DomainLastStatusMXRecord,
  DomainLastStatusSpfRecord,
  DomainRecords,
  DomainRecordsDKIM,
  DomainRecordsDMARC,
  DomainRecordsMX,
  DomainRecordsSPF,
  DomainReputation,
  DomainStatistics,
  Email,
  EmailTry,
  ListBlocklistsResponse,
  ListDomainsResponse,
  ListEmailsResponse,
  ListOfferSubscriptionsResponse,
  ListOffersResponse,
  ListPoolsResponse,
  ListWebhookEventsResponse,
  ListWebhooksResponse,
  Offer,
  OfferSubscription,
  Pool,
  ProjectConsumption,
  ProjectSettings,
  ProjectSettingsPeriodicReport,
  Statistics,
  UpdateDomainRequest,
  UpdateOfferSubscriptionRequest,
  UpdateProjectSettingsRequest,
  UpdateProjectSettingsRequestUpdatePeriodicReport,
  UpdateWebhookRequest,
  Webhook,
  WebhookEvent,
} from './types.gen.js'

const unmarshalEmailTry = (data: unknown): EmailTry => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EmailTry' failed as data isn't a dictionary.`,
    )
  }

  return {
    code: data.code,
    message: data.message,
    rank: data.rank,
    triedAt: unmarshalDate(data.tried_at),
  } as EmailTry
}

export const unmarshalEmail = (data: unknown): Email => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Email' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    flags: data.flags,
    id: data.id,
    lastTries: unmarshalArrayOfObject(data.last_tries, unmarshalEmailTry),
    mailFrom: data.mail_from,
    mailRcpt: data.mail_rcpt,
    messageId: data.message_id,
    projectId: data.project_id,
    rcptTo: data.rcpt_to,
    rcptType: data.rcpt_type,
    status: data.status,
    statusDetails: data.status_details,
    subject: data.subject,
    tryCount: data.try_count,
    updatedAt: unmarshalDate(data.updated_at),
  } as Email
}

const unmarshalDomainRecordsDKIM = (data: unknown): DomainRecordsDKIM => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordsDKIM' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    value: data.value,
  } as DomainRecordsDKIM
}

const unmarshalDomainRecordsDMARC = (data: unknown): DomainRecordsDMARC => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordsDMARC' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    value: data.value,
  } as DomainRecordsDMARC
}

const unmarshalDomainRecordsMX = (data: unknown): DomainRecordsMX => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordsMX' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    value: data.value,
  } as DomainRecordsMX
}

const unmarshalDomainRecordsSPF = (data: unknown): DomainRecordsSPF => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordsSPF' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    value: data.value,
  } as DomainRecordsSPF
}

const unmarshalDomainRecords = (data: unknown): DomainRecords => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecords' failed as data isn't a dictionary.`,
    )
  }

  return {
    dkim: data.dkim ? unmarshalDomainRecordsDKIM(data.dkim) : undefined,
    dmarc: data.dmarc ? unmarshalDomainRecordsDMARC(data.dmarc) : undefined,
    mx: data.mx ? unmarshalDomainRecordsMX(data.mx) : undefined,
    spf: data.spf ? unmarshalDomainRecordsSPF(data.spf) : undefined,
  } as DomainRecords
}

const unmarshalDomainReputation = (data: unknown): DomainReputation => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainReputation' failed as data isn't a dictionary.`,
    )
  }

  return {
    previousScore: data.previous_score,
    previousScoredAt: unmarshalDate(data.previous_scored_at),
    score: data.score,
    scoredAt: unmarshalDate(data.scored_at),
    status: data.status,
  } as DomainReputation
}

const unmarshalDomainStatistics = (data: unknown): DomainStatistics => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainStatistics' failed as data isn't a dictionary.`,
    )
  }

  return {
    canceledCount: data.canceled_count,
    failedCount: data.failed_count,
    sentCount: data.sent_count,
    totalCount: data.total_count,
  } as DomainStatistics
}

export const unmarshalDomain = (data: unknown): Domain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoconfig: data.autoconfig,
    createdAt: unmarshalDate(data.created_at),
    dkimConfig: data.dkim_config,
    id: data.id,
    lastError: data.last_error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    name: data.name,
    nextCheckAt: unmarshalDate(data.next_check_at),
    organizationId: data.organization_id,
    projectId: data.project_id,
    records: data.records ? unmarshalDomainRecords(data.records) : undefined,
    region: data.region,
    reputation: data.reputation
      ? unmarshalDomainReputation(data.reputation)
      : undefined,
    revokedAt: unmarshalDate(data.revoked_at),
    spfConfig: data.spf_config,
    statistics: data.statistics
      ? unmarshalDomainStatistics(data.statistics)
      : undefined,
    status: data.status,
  } as Domain
}

export const unmarshalOfferSubscription = (
  data: unknown,
): OfferSubscription => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferSubscription' failed as data isn't a dictionary.`,
    )
  }

  return {
    cancellationAvailableAt: unmarshalDate(data.cancellation_available_at),
    includedMonthlyEmails: data.included_monthly_emails,
    maxCustomBlocklistsPerDomain: data.max_custom_blocklists_per_domain,
    maxDedicatedIps: data.max_dedicated_ips,
    maxDomains: data.max_domains,
    maxWebhooksPerDomain: data.max_webhooks_per_domain,
    offerName: data.offer_name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    sla: data.sla,
    subscribedAt: unmarshalDate(data.subscribed_at),
  } as OfferSubscription
}

export const unmarshalWebhook = (data: unknown): Webhook => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Webhook' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    domainId: data.domain_id,
    eventTypes: data.event_types,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    snsArn: data.sns_arn,
    updatedAt: unmarshalDate(data.updated_at),
  } as Webhook
}

const unmarshalBlocklist = (data: unknown): Blocklist => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Blocklist' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    custom: data.custom,
    domainId: data.domain_id,
    email: data.email,
    endsAt: unmarshalDate(data.ends_at),
    id: data.id,
    reason: data.reason,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as Blocklist
}

export const unmarshalBulkCreateBlocklistsResponse = (
  data: unknown,
): BulkCreateBlocklistsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BulkCreateBlocklistsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    blocklists: unmarshalArrayOfObject(data.blocklists, unmarshalBlocklist),
  } as BulkCreateBlocklistsResponse
}

export const unmarshalCreateEmailResponse = (
  data: unknown,
): CreateEmailResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateEmailResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    emails: unmarshalArrayOfObject(data.emails, unmarshalEmail),
  } as CreateEmailResponse
}

const unmarshalDomainLastStatusAutoconfigState = (
  data: unknown,
): DomainLastStatusAutoconfigState => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatusAutoconfigState' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoconfigurable: data.autoconfigurable,
    enabled: data.enabled,
    reason: data.reason ? data.reason : undefined,
  } as DomainLastStatusAutoconfigState
}

const unmarshalDomainLastStatusDkimRecord = (
  data: unknown,
): DomainLastStatusDkimRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatusDkimRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    error: data.error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    status: data.status,
  } as DomainLastStatusDkimRecord
}

const unmarshalDomainLastStatusDmarcRecord = (
  data: unknown,
): DomainLastStatusDmarcRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatusDmarcRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    error: data.error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    status: data.status,
  } as DomainLastStatusDmarcRecord
}

const unmarshalDomainLastStatusMXRecord = (
  data: unknown,
): DomainLastStatusMXRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatusMXRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    error: data.error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    status: data.status,
  } as DomainLastStatusMXRecord
}

const unmarshalDomainLastStatusSpfRecord = (
  data: unknown,
): DomainLastStatusSpfRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatusSpfRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    error: data.error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    status: data.status,
  } as DomainLastStatusSpfRecord
}

export const unmarshalDomainLastStatus = (data: unknown): DomainLastStatus => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatus' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoconfigState: data.autoconfig_state
      ? unmarshalDomainLastStatusAutoconfigState(data.autoconfig_state)
      : undefined,
    dkimRecord: data.dkim_record
      ? unmarshalDomainLastStatusDkimRecord(data.dkim_record)
      : undefined,
    dmarcRecord: data.dmarc_record
      ? unmarshalDomainLastStatusDmarcRecord(data.dmarc_record)
      : undefined,
    domainId: data.domain_id,
    domainName: data.domain_name,
    mxRecord: data.mx_record
      ? unmarshalDomainLastStatusMXRecord(data.mx_record)
      : undefined,
    spfRecord: data.spf_record
      ? unmarshalDomainLastStatusSpfRecord(data.spf_record)
      : undefined,
  } as DomainLastStatus
}

export const unmarshalListBlocklistsResponse = (
  data: unknown,
): ListBlocklistsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBlocklistsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    blocklists: unmarshalArrayOfObject(data.blocklists, unmarshalBlocklist),
    totalCount: data.total_count,
  } as ListBlocklistsResponse
}

export const unmarshalListDomainsResponse = (
  data: unknown,
): ListDomainsResponse => {
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

export const unmarshalListEmailsResponse = (
  data: unknown,
): ListEmailsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListEmailsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    emails: unmarshalArrayOfObject(data.emails, unmarshalEmail),
    totalCount: data.total_count,
  } as ListEmailsResponse
}

export const unmarshalListOfferSubscriptionsResponse = (
  data: unknown,
): ListOfferSubscriptionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListOfferSubscriptionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    offerSubscriptions: unmarshalArrayOfObject(
      data.offer_subscriptions,
      unmarshalOfferSubscription,
    ),
    totalCount: data.total_count,
  } as ListOfferSubscriptionsResponse
}

const unmarshalOffer = (data: unknown): Offer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Offer' failed as data isn't a dictionary.`,
    )
  }

  return {
    commitmentPeriod: data.commitment_period,
    createdAt: unmarshalDate(data.created_at),
    includedMonthlyEmails: data.included_monthly_emails,
    maxCustomBlocklistsPerDomain: data.max_custom_blocklists_per_domain,
    maxDedicatedIps: data.max_dedicated_ips,
    maxDomains: data.max_domains,
    maxWebhooksPerDomain: data.max_webhooks_per_domain,
    name: data.name,
    sla: data.sla,
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
    totalCount: data.total_count,
  } as ListOffersResponse
}

const unmarshalPool = (data: unknown): Pool => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Pool' failed as data isn't a dictionary.`,
    )
  }

  return {
    details: data.details,
    ips: data.ips,
    projectId: data.project_id,
    reverse: data.reverse,
    status: data.status,
    zone: data.zone,
  } as Pool
}

export const unmarshalListPoolsResponse = (
  data: unknown,
): ListPoolsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPoolsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pools: unmarshalArrayOfObject(data.pools, unmarshalPool),
    totalCount: data.total_count,
  } as ListPoolsResponse
}

const unmarshalWebhookEvent = (data: unknown): WebhookEvent => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'WebhookEvent' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    data: data.data,
    domainId: data.domain_id,
    emailId: data.email_id,
    id: data.id,
    organizationId: data.organization_id,
    projectId: data.project_id,
    status: data.status,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    webhookId: data.webhook_id,
  } as WebhookEvent
}

export const unmarshalListWebhookEventsResponse = (
  data: unknown,
): ListWebhookEventsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListWebhookEventsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    webhookEvents: unmarshalArrayOfObject(
      data.webhook_events,
      unmarshalWebhookEvent,
    ),
  } as ListWebhookEventsResponse
}

export const unmarshalListWebhooksResponse = (
  data: unknown,
): ListWebhooksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListWebhooksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    webhooks: unmarshalArrayOfObject(data.webhooks, unmarshalWebhook),
  } as ListWebhooksResponse
}

export const unmarshalProjectConsumption = (
  data: unknown,
): ProjectConsumption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ProjectConsumption' failed as data isn't a dictionary.`,
    )
  }

  return {
    customBlocklistsCount: data.custom_blocklists_count,
    dedicatedIpsCount: data.dedicated_ips_count,
    domainsCount: data.domains_count,
    monthlyEmailsCount: data.monthly_emails_count,
    projectId: data.project_id,
    webhooksCount: data.webhooks_count,
  } as ProjectConsumption
}

const unmarshalProjectSettingsPeriodicReport = (
  data: unknown,
): ProjectSettingsPeriodicReport => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ProjectSettingsPeriodicReport' failed as data isn't a dictionary.`,
    )
  }

  return {
    enabled: data.enabled,
    frequency: data.frequency,
    sendingDay: data.sending_day,
    sendingHour: data.sending_hour,
  } as ProjectSettingsPeriodicReport
}

export const unmarshalProjectSettings = (data: unknown): ProjectSettings => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ProjectSettings' failed as data isn't a dictionary.`,
    )
  }

  return {
    periodicReport: data.periodic_report
      ? unmarshalProjectSettingsPeriodicReport(data.periodic_report)
      : undefined,
  } as ProjectSettings
}

export const unmarshalStatistics = (data: unknown): Statistics => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Statistics' failed as data isn't a dictionary.`,
    )
  }

  return {
    canceledCount: data.canceled_count,
    failedCount: data.failed_count,
    newCount: data.new_count,
    sendingCount: data.sending_count,
    sentCount: data.sent_count,
    totalCount: data.total_count,
  } as Statistics
}

export const marshalBulkCreateBlocklistsRequest = (
  request: BulkCreateBlocklistsRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  domain_id: request.domainId,
  emails: request.emails,
  reason: request.reason,
  type: request.type,
})

export const marshalCreateDomainRequest = (
  request: CreateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  accept_tos: request.acceptTos,
  autoconfig: request.autoconfig,
  domain_name: request.domainName,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalCreateEmailRequestAddress = (
  request: CreateEmailRequestAddress,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  name: request.name,
})

const marshalCreateEmailRequestAttachment = (
  request: CreateEmailRequestAttachment,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
  name: request.name,
  type: request.type,
})

const marshalCreateEmailRequestHeader = (
  request: CreateEmailRequestHeader,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  key: request.key,
  value: request.value,
})

export const marshalCreateEmailRequest = (
  request: CreateEmailRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  additional_headers:
    request.additionalHeaders !== undefined
      ? request.additionalHeaders.map(elt =>
          marshalCreateEmailRequestHeader(elt, defaults),
        )
      : undefined,
  attachments:
    request.attachments !== undefined
      ? request.attachments.map(elt =>
          marshalCreateEmailRequestAttachment(elt, defaults),
        )
      : undefined,
  bcc:
    request.bcc !== undefined
      ? request.bcc.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
      : undefined,
  cc:
    request.cc !== undefined
      ? request.cc.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
      : undefined,
  from: marshalCreateEmailRequestAddress(request.from, defaults),
  html: request.html,
  project_id: request.projectId ?? defaults.defaultProjectId,
  send_before: request.sendBefore,
  subject: request.subject,
  text: request.text,
  to:
    request.to !== undefined
      ? request.to.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
      : undefined,
})

export const marshalCreateWebhookRequest = (
  request: CreateWebhookRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain_id: request.domainId,
  event_types:
    request.eventTypes !== undefined ? request.eventTypes : undefined,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  sns_arn: request.snsArn,
})

export const marshalUpdateDomainRequest = (
  request: UpdateDomainRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  autoconfig: request.autoconfig,
})

export const marshalUpdateOfferSubscriptionRequest = (
  request: UpdateOfferSubscriptionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalUpdateProjectSettingsRequestUpdatePeriodicReport = (
  request: UpdateProjectSettingsRequestUpdatePeriodicReport,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  enabled: request.enabled,
  frequency: request.frequency,
  sending_day: request.sendingDay,
  sending_hour: request.sendingHour,
})

export const marshalUpdateProjectSettingsRequest = (
  request: UpdateProjectSettingsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  periodic_report:
    request.periodicReport !== undefined
      ? marshalUpdateProjectSettingsRequestUpdatePeriodicReport(
          request.periodicReport,
          defaults,
        )
      : undefined,
})

export const marshalUpdateWebhookRequest = (
  request: UpdateWebhookRequest,
  _defaults: DefaultValues,
): Record<string, unknown> => ({
  event_types:
    request.eventTypes !== undefined ? request.eventTypes : undefined,
  name: request.name,
  sns_arn: request.snsArn,
})
