// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, WaitForOptions } from '../../../bridge'
import {
  DOMAIN_TRANSIENT_STATUSES,
  EMAIL_TRANSIENT_STATUSES,
} from './content.gen'
import {
  marshalCreateDomainRequest,
  marshalCreateEmailRequest,
  marshalUpdateWebhookRequest,
  unmarshalCreateEmailResponse,
  unmarshalDomain,
  unmarshalDomainLastStatus,
  unmarshalEmail,
  unmarshalListDomainsResponse,
  unmarshalListEmailsResponse,
  unmarshalListWebhookEventsResponse,
  unmarshalListWebhooksResponse,
  unmarshalStatistics,
  unmarshalWebhook,
} from './marshalling.gen'
import type {
  CancelEmailRequest,
  CheckDomainRequest,
  CreateDomainRequest,
  CreateEmailRequest,
  CreateEmailResponse,
  DeleteWebhookRequest,
  Domain,
  DomainLastStatus,
  Email,
  GetDomainLastStatusRequest,
  GetDomainRequest,
  GetEmailRequest,
  GetStatisticsRequest,
  ListDomainsRequest,
  ListDomainsResponse,
  ListEmailsRequest,
  ListEmailsResponse,
  ListWebhookEventsRequest,
  ListWebhookEventsResponse,
  ListWebhooksRequest,
  ListWebhooksResponse,
  RevokeDomainRequest,
  Statistics,
  UpdateWebhookRequest,
  Webhook,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Transactional Email API.
 *
 * This API allows you to manage your Transactional Email services.
 */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par']

  /**
   * Send an email. You must specify the `region`, the sender and the
   * recipient's information and the `project_id` to send an email from a
   * checked domain. The subject of the email must contain at least 6
   * characters.
   *
   * @param request - The request {@link CreateEmailRequest}
   * @returns A Promise of CreateEmailResponse
   */
  createEmail = (request: Readonly<CreateEmailRequest>) =>
    this.client.fetch<CreateEmailResponse>(
      {
        body: JSON.stringify(
          marshalCreateEmailRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/emails`,
      },
      unmarshalCreateEmailResponse,
    )

  /**
   * Get an email. Retrieve information about a specific email using the
   * `email_id` and `region` parameters.
   *
   * @param request - The request {@link GetEmailRequest}
   * @returns A Promise of Email
   */
  getEmail = (request: Readonly<GetEmailRequest>) =>
    this.client.fetch<Email>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/emails/${validatePathParam('emailId', request.emailId)}`,
      },
      unmarshalEmail,
    )

  /**
   * Waits for {@link Email} to be in a final state.
   *
   * @param request - The request {@link GetEmailRequest}
   * @param options - The waiting options
   * @returns A Promise of Email
   */
  waitForEmail = (
    request: Readonly<GetEmailRequest>,
    options?: Readonly<WaitForOptions<Email>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!EMAIL_TRANSIENT_STATUSES.includes(res.status))),
      this.getEmail,
      request,
      options,
    )

  protected pageOfListEmails = (request: Readonly<ListEmailsRequest> = {}) =>
    this.client.fetch<ListEmailsResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/emails`,
        urlParams: urlParams(
          ['domain_id', request.domainId],
          ['flags', request.flags],
          ['mail_from', request.mailFrom],
          ['mail_rcpt', request.mailRcpt],
          ['mail_to', request.mailTo],
          ['message_id', request.messageId],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['search', request.search],
          ['since', request.since],
          ['statuses', request.statuses],
          ['subject', request.subject],
          ['until', request.until],
        ),
      },
      unmarshalListEmailsResponse,
    )

  /**
   * List emails. Retrieve the list of emails sent from a specific domain or for
   * a specific Project or Organization. You must specify the `region`.
   *
   * @param request - The request {@link ListEmailsRequest}
   * @returns A Promise of ListEmailsResponse
   */
  listEmails = (request: Readonly<ListEmailsRequest> = {}) =>
    enrichForPagination('emails', this.pageOfListEmails, request)

  /**
   * Email statuses. Get information on your emails' statuses.
   *
   * @param request - The request {@link GetStatisticsRequest}
   * @returns A Promise of Statistics
   */
  getStatistics = (request: Readonly<GetStatisticsRequest> = {}) =>
    this.client.fetch<Statistics>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/statistics`,
        urlParams: urlParams(
          ['domain_id', request.domainId],
          ['mail_from', request.mailFrom],
          ['project_id', request.projectId],
          ['since', request.since],
          ['until', request.until],
        ),
      },
      unmarshalStatistics,
    )

  /**
   * Cancel an email. You can cancel the sending of an email if it has not been
   * sent yet. You must specify the `region` and the `email_id` of the email you
   * want to cancel.
   *
   * @param request - The request {@link CancelEmailRequest}
   * @returns A Promise of Email
   */
  cancelEmail = (request: Readonly<CancelEmailRequest>) =>
    this.client.fetch<Email>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/emails/${validatePathParam('emailId', request.emailId)}/cancel`,
      },
      unmarshalEmail,
    )

  /**
   * Register a domain in a project. You must specify the `region`, `project_id`
   * and `domain_name` to register a domain in a specific Project.
   *
   * @param request - The request {@link CreateDomainRequest}
   * @returns A Promise of Domain
   */
  createDomain = (request: Readonly<CreateDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(
          marshalCreateDomainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains`,
      },
      unmarshalDomain,
    )

  /**
   * Get information about a domain. Retrieve information about a specific
   * domain using the `region` and `domain_id` parameters. Monitor your domain's
   * reputation and improve **average** and **bad** reputation statuses, using
   * your domain's **Email activity** tab on the [Scaleway
   * console](https://console.scaleway.com/transactional-email/domains) to get a
   * more detailed report. Check out our [dedicated
   * documentation](https://www.scaleway.com/en/docs/managed-services/transactional-email/reference-content/understanding-tem-reputation-score/)
   * to improve your domain's reputation.
   *
   * @param request - The request {@link GetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<GetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /**
   * Waits for {@link Domain} to be in a final state.
   *
   * @param request - The request {@link GetDomainRequest}
   * @param options - The waiting options
   * @returns A Promise of Domain
   */
  waitForDomain = (
    request: Readonly<GetDomainRequest>,
    options?: Readonly<WaitForOptions<Domain>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!DOMAIN_TRANSIENT_STATUSES.includes(res.status))),
      this.getDomain,
      request,
      options,
    )

  protected pageOfListDomains = (request: Readonly<ListDomainsRequest> = {}) =>
    this.client.fetch<ListDomainsResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains`,
        urlParams: urlParams(
          ['name', request.name],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['status', request.status],
        ),
      },
      unmarshalListDomainsResponse,
    )

  /**
   * List domains. Retrieve domains in a specific Project or in a specific
   * Organization using the `region` parameter.
   *
   * @param request - The request {@link ListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<ListDomainsRequest> = {}) =>
    enrichForPagination('domains', this.pageOfListDomains, request)

  /**
   * Delete a domain. You must specify the domain you want to delete by the
   * `region` and `domain_id`. Deleting a domain is permanent and cannot be
   * undone.
   *
   * @param request - The request {@link RevokeDomainRequest}
   * @returns A Promise of Domain
   */
  revokeDomain = (request: Readonly<RevokeDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}/revoke`,
      },
      unmarshalDomain,
    )

  /**
   * Domain DNS check. Perform an immediate DNS check of a domain using the
   * `region` and `domain_id` parameters.
   *
   * @param request - The request {@link CheckDomainRequest}
   * @returns A Promise of Domain
   */
  checkDomain = (request: Readonly<CheckDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}/check`,
      },
      unmarshalDomain,
    )

  /**
   * Display SPF and DKIM records status and potential errors. Display SPF and
   * DKIM records status and potential errors, including the found records to
   * make debugging easier.
   *
   * @param request - The request {@link GetDomainLastStatusRequest}
   * @returns A Promise of DomainLastStatus
   */
  getDomainLastStatus = (request: Readonly<GetDomainLastStatusRequest>) =>
    this.client.fetch<DomainLastStatus>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}/verification`,
      },
      unmarshalDomainLastStatus,
    )

  protected pageOfListWebhooks = (
    request: Readonly<ListWebhooksRequest> = {},
  ) =>
    this.client.fetch<ListWebhooksResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/webhooks`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListWebhooksResponse,
    )

  listWebhooks = (request: Readonly<ListWebhooksRequest> = {}) =>
    enrichForPagination('webhooks', this.pageOfListWebhooks, request)

  updateWebhook = (request: Readonly<UpdateWebhookRequest>) =>
    this.client.fetch<Webhook>(
      {
        body: JSON.stringify(
          marshalUpdateWebhookRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/webhooks/${validatePathParam('webhookId', request.webhookId)}`,
      },
      unmarshalWebhook,
    )

  deleteWebhook = (request: Readonly<DeleteWebhookRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/webhooks/${validatePathParam('webhookId', request.webhookId)}`,
    })

  protected pageOfListWebhookEvents = (
    request: Readonly<ListWebhookEventsRequest>,
  ) =>
    this.client.fetch<ListWebhookEventsResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/webhooks/${validatePathParam('webhookId', request.webhookId)}/events`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListWebhookEventsResponse,
    )

  listWebhookEvents = (request: Readonly<ListWebhookEventsRequest>) =>
    enrichForPagination('webhookEvents', this.pageOfListWebhookEvents, request)
}
