// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateDomainRequest,
  CreateEmailRequest,
  CreateEmailRequestAddress,
  CreateEmailRequestAttachment,
  CreateEmailRequestHeader,
  CreateEmailResponse,
  CreateWebhookRequest,
  Domain,
  DomainLastStatus,
  DomainLastStatusDkimRecord,
  DomainLastStatusDmarcRecord,
  DomainLastStatusSpfRecord,
  DomainRecords,
  DomainRecordsDMARC,
  DomainReputation,
  DomainStatistics,
  Email,
  EmailTry,
  ListDomainsResponse,
  ListEmailsResponse,
  ListWebhookEventsResponse,
  ListWebhooksResponse,
  Statistics,
  UpdateWebhookRequest,
  Webhook,
  WebhookEvent,
} from './types.gen'

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

const unmarshalDomainRecords = (data: unknown): DomainRecords => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecords' failed as data isn't a dictionary.`,
    )
  }

  return {
    dmarc: data.dmarc ? unmarshalDomainRecordsDMARC(data.dmarc) : undefined,
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
    dkimRecord: data.dkim_record
      ? unmarshalDomainLastStatusDkimRecord(data.dkim_record)
      : undefined,
    dmarcRecord: data.dmarc_record
      ? unmarshalDomainLastStatusDmarcRecord(data.dmarc_record)
      : undefined,
    domainId: data.domain_id,
    domainName: data.domain_name,
    spfRecord: data.spf_record
      ? unmarshalDomainLastStatusSpfRecord(data.spf_record)
      : undefined,
  } as DomainLastStatus
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
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  name: request.name,
})

const marshalCreateEmailRequestAttachment = (
  request: CreateEmailRequestAttachment,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
  name: request.name,
  type: request.type,
})

const marshalCreateEmailRequestHeader = (
  request: CreateEmailRequestHeader,
  defaults: DefaultValues,
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

export const marshalUpdateWebhookRequest = (
  request: UpdateWebhookRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  event_types:
    request.eventTypes !== undefined ? request.eventTypes : undefined,
  name: request.name,
  sns_arn: request.snsArn,
})
