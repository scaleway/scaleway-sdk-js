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
  CreateEmailResponse,
  Domain,
  DomainStatistics,
  Email,
  EmailTry,
  ListDomainsResponse,
  ListEmailsResponse,
  Statistics,
} from './types.gen'

const unmarshalDomainStatistics = (data: unknown) => {
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

const unmarshalEmailTry = (data: unknown) => {
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

export const unmarshalDomain = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    dkimConfig: data.dkim_config,
    id: data.id,
    lastError: data.last_error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    name: data.name,
    nextCheckAt: unmarshalDate(data.next_check_at),
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    revokedAt: unmarshalDate(data.revoked_at),
    spfConfig: data.spf_config,
    statistics: data.statistics
      ? unmarshalDomainStatistics(data.statistics)
      : undefined,
    status: data.status,
  } as Domain
}

export const unmarshalEmail = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Email' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    lastTries: unmarshalArrayOfObject(data.last_tries, unmarshalEmailTry),
    mailFrom: data.mail_from,
    messageId: data.message_id,
    projectId: data.project_id,
    rcptTo: data.rcpt_to,
    rcptType: data.rcpt_type,
    status: data.status,
    statusDetails: data.status_details,
    tryCount: data.try_count,
    updatedAt: unmarshalDate(data.updated_at),
  } as Email
}

export const unmarshalCreateEmailResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateEmailResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    emails: unmarshalArrayOfObject(data.emails, unmarshalEmail),
  } as CreateEmailResponse
}

export const unmarshalListDomainsResponse = (data: unknown) => {
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

export const unmarshalListEmailsResponse = (data: unknown) => {
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

export const unmarshalStatistics = (data: unknown) => {
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

export const marshalCreateDomainRequest = (
  request: CreateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain_name: request.domainName,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalCreateEmailRequest = (
  request: CreateEmailRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  attachments: request.attachments
    ? request.attachments.map(elt =>
        marshalCreateEmailRequestAttachment(elt, defaults),
      )
    : undefined,
  bcc: request.bcc
    ? request.bcc.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
    : undefined,
  cc: request.cc
    ? request.cc.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
    : undefined,
  from: request.from
    ? marshalCreateEmailRequestAddress(request.from, defaults)
    : undefined,
  html: request.html,
  project_id: request.projectId ?? defaults.defaultProjectId,
  send_before: request.sendBefore,
  subject: request.subject,
  text: request.text,
  to: request.to
    ? request.to.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
    : undefined,
})
