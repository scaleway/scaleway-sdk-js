// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { WaitForOptions, ApiLocality } from '@scaleway/sdk-client'
import {
  DOMAIN_TRANSIENT_STATUSES as DOMAIN_TRANSIENT_STATUSES_TEM,
  EMAIL_TRANSIENT_STATUSES as EMAIL_TRANSIENT_STATUSES_TEM,
} from './content.gen.js'
import {
  marshalBulkCreateBlocklistsRequest,
  unmarshalBulkCreateBlocklistsResponse,
  marshalCreateDomainRequest,
  marshalCreateEmailRequest,
  unmarshalCreateEmailResponse,
  marshalCreateWebhookRequest,
  unmarshalDomain,
  unmarshalDomainLastStatus,
  unmarshalEmail,
  unmarshalListBlocklistsResponse,
  unmarshalListDomainsResponse,
  unmarshalListEmailsResponse,
  unmarshalListOfferSubscriptionsResponse,
  unmarshalListOffersResponse,
  unmarshalListPoolsResponse,
  unmarshalListWebhookEventsResponse,
  unmarshalListWebhooksResponse,
  unmarshalOfferSubscription,
  unmarshalProjectConsumption,
  unmarshalProjectSettings,
  unmarshalStatistics,
  marshalUpdateDomainRequest,
  marshalUpdateOfferSubscriptionRequest,
  marshalUpdateProjectSettingsRequest,
  marshalUpdateWebhookRequest,
  unmarshalWebhook,
} from './marshalling.gen.js'
import type {
  BulkCreateBlocklistsRequest,
  BulkCreateBlocklistsResponse,
  CancelEmailRequest,
  CheckDomainRequest,
  CreateDomainRequest,
  CreateEmailRequest,
  CreateEmailResponse,
  CreateWebhookRequest,
  DeleteBlocklistRequest,
  DeleteWebhookRequest,
  Domain,
  DomainLastStatus,
  Email,
  GetDomainLastStatusRequest,
  GetDomainRequest,
  GetEmailRequest,
  GetProjectConsumptionRequest,
  GetProjectSettingsRequest,
  GetStatisticsRequest,
  GetWebhookRequest,
  ListBlocklistsRequest,
  ListBlocklistsResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListEmailsRequest,
  ListEmailsResponse,
  ListOfferSubscriptionsRequest,
  ListOfferSubscriptionsResponse,
  ListOffersRequest,
  ListOffersResponse,
  ListPoolsRequest,
  ListPoolsResponse,
  ListWebhookEventsRequest,
  ListWebhookEventsResponse,
  ListWebhooksRequest,
  ListWebhooksResponse,
  OfferSubscription,
  ProjectConsumption,
  ProjectSettings,
  RevokeDomainRequest,
  Statistics,
  UpdateDomainRequest,
  UpdateOfferSubscriptionRequest,
  UpdateProjectSettingsRequest,
  UpdateWebhookRequest,
  Webhook,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Transactional Email API.

This API allows you to manage your Transactional Email services.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    regions: ['fr-par'],
  })

  /**
   * Send an email. You must specify the `region`, the sender and the recipient's information and the `project_id` to send an email from a checked domain.
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
   * Get an email. Retrieve information about a specific email using the `email_id` and `region` parameters.
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
          Promise.resolve(!EMAIL_TRANSIENT_STATUSES_TEM.includes(res.status))),
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
   * List emails. Retrieve the list of emails sent from a specific domain or for a specific Project or Organization. You must specify the `region`.
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
   * Cancel an email. You can cancel the sending of an email if it has not been sent yet. You must specify the `region` and the `email_id` of the email you want to cancel.
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
   * Register a domain in a project. You must specify the `region`, `project_id` and `domain_name` to register a domain in a specific Project.
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
   * Get information about a domain. Retrieve information about a specific domain using the `region` and `domain_id` parameters. Monitor your domain's reputation and improve **average** and **bad** reputation statuses, using your domain's **Email activity** tab on the [Scaleway console](https://console.scaleway.com/transactional-email/domains) to get a more detailed report. Check out our [dedicated documentation](https://www.scaleway.com/en/docs/managed-services/transactional-email/reference-content/understanding-tem-reputation-score/) to improve your domain's reputation.
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
          Promise.resolve(!DOMAIN_TRANSIENT_STATUSES_TEM.includes(res.status))),
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
   * List domains. Retrieve domains in a specific Project or in a specific Organization using the `region` parameter.
   *
   * @param request - The request {@link ListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<ListDomainsRequest> = {}) =>
    enrichForPagination('domains', this.pageOfListDomains, request)

  /**
   * Delete a domain. You must specify the domain you want to delete by the `region` and `domain_id`. Deleting a domain is permanent and cannot be undone.
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
   * Domain DNS check. Perform an immediate DNS check of a domain using the `region` and `domain_id` parameters.
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
   * Display SPF, DKIM, DMARC and MX records status and potential errors. Display SPF, DKIM, DMARC and MX records status and potential errors, including the found records to make debugging easier.
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

  /**
   * Update a domain. Update a domain auto-configuration.
   *
   * @param request - The request {@link UpdateDomainRequest}
   * @returns A Promise of Domain
   */
  updateDomain = (request: Readonly<UpdateDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        body: JSON.stringify(
          marshalUpdateDomainRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domainId', request.domainId)}`,
      },
      unmarshalDomain,
    )

  /**
   * Create a Webhook. Create a new Webhook triggered by a list of event types and pushed to a Scaleway SNS ARN.
   *
   * @param request - The request {@link CreateWebhookRequest}
   * @returns A Promise of Webhook
   */
  createWebhook = (request: Readonly<CreateWebhookRequest>) =>
    this.client.fetch<Webhook>(
      {
        body: JSON.stringify(
          marshalCreateWebhookRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/webhooks`,
      },
      unmarshalWebhook,
    )

  protected pageOfListWebhooks = (
    request: Readonly<ListWebhooksRequest> = {},
  ) =>
    this.client.fetch<ListWebhooksResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/webhooks`,
        urlParams: urlParams(
          ['domain_id', request.domainId],
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

  /**
   * List Webhooks. Retrieve Webhooks in a specific Project or in a specific Organization using the `region` parameter.
   *
   * @param request - The request {@link ListWebhooksRequest}
   * @returns A Promise of ListWebhooksResponse
   */
  listWebhooks = (request: Readonly<ListWebhooksRequest> = {}) =>
    enrichForPagination('webhooks', this.pageOfListWebhooks, request)

  /**
   * Get information about a Webhook. Retrieve information about a specific Webhook using the `webhook_id` and `region` parameters.
   *
   * @param request - The request {@link GetWebhookRequest}
   * @returns A Promise of Webhook
   */
  getWebhook = (request: Readonly<GetWebhookRequest>) =>
    this.client.fetch<Webhook>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/webhooks/${validatePathParam('webhookId', request.webhookId)}`,
      },
      unmarshalWebhook,
    )

  /**
   * Update a Webhook. Update a Webhook events type, SNS ARN or name.
   *
   * @param request - The request {@link UpdateWebhookRequest}
   * @returns A Promise of Webhook
   */
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

  /**
   * Delete a Webhook. You must specify the Webhook you want to delete by the `region` and `webhook_id`. Deleting a Webhook is permanent and cannot be undone.
   *
   * @param request - The request {@link DeleteWebhookRequest}
   */
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
          ['domain_id', request.domainId],
          ['email_id', request.emailId],
          ['event_types', request.eventTypes],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['statuses', request.statuses],
        ),
      },
      unmarshalListWebhookEventsResponse,
    )

  /**
   * List Webhook triggered events. Retrieve the list of Webhook events triggered from a specific Webhook or for a specific Project or Organization. You must specify the `region`.
   *
   * @param request - The request {@link ListWebhookEventsRequest}
   * @returns A Promise of ListWebhookEventsResponse
   */
  listWebhookEvents = (request: Readonly<ListWebhookEventsRequest>) =>
    enrichForPagination('webhookEvents', this.pageOfListWebhookEvents, request)

  /**
   * List project settings. Retrieve the project settings including periodic reports.
   *
   * @param request - The request {@link GetProjectSettingsRequest}
   * @returns A Promise of ProjectSettings
   */
  getProjectSettings = (request: Readonly<GetProjectSettingsRequest> = {}) =>
    this.client.fetch<ProjectSettings>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/project/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}/settings`,
      },
      unmarshalProjectSettings,
    )

  /**
   * Update project settings. Update the project settings including periodic reports.
   *
   * @param request - The request {@link UpdateProjectSettingsRequest}
   * @returns A Promise of ProjectSettings
   */
  updateProjectSettings = (
    request: Readonly<UpdateProjectSettingsRequest> = {},
  ) =>
    this.client.fetch<ProjectSettings>(
      {
        body: JSON.stringify(
          marshalUpdateProjectSettingsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/project/${validatePathParam('projectId', request.projectId ?? this.client.settings.defaultProjectId)}/settings`,
      },
      unmarshalProjectSettings,
    )

  protected pageOfListBlocklists = (request: Readonly<ListBlocklistsRequest>) =>
    this.client.fetch<ListBlocklistsResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/blocklists`,
        urlParams: urlParams(
          ['custom', request.custom],
          ['domain_id', request.domainId],
          ['email', request.email],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['type', request.type],
        ),
      },
      unmarshalListBlocklistsResponse,
    )

  /**
   * List blocklists. Retrieve the list of blocklists.
   *
   * @param request - The request {@link ListBlocklistsRequest}
   * @returns A Promise of ListBlocklistsResponse
   */
  listBlocklists = (request: Readonly<ListBlocklistsRequest>) =>
    enrichForPagination('blocklists', this.pageOfListBlocklists, request)

  /**
   * Bulk create blocklists. Create multiple blocklists in a specific Project or Organization using the `region` parameter.
   *
   * @param request - The request {@link BulkCreateBlocklistsRequest}
   * @returns A Promise of BulkCreateBlocklistsResponse
   */
  bulkCreateBlocklists = (request: Readonly<BulkCreateBlocklistsRequest>) =>
    this.client.fetch<BulkCreateBlocklistsResponse>(
      {
        body: JSON.stringify(
          marshalBulkCreateBlocklistsRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/blocklists`,
      },
      unmarshalBulkCreateBlocklistsResponse,
    )

  /**
   * Delete a blocklist. You must specify the blocklist you want to delete by the `region` and `blocklist_id`.
   *
   * @param request - The request {@link DeleteBlocklistRequest}
   */
  deleteBlocklist = (request: Readonly<DeleteBlocklistRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/blocklists/${validatePathParam('blocklistId', request.blocklistId)}`,
    })

  /**
   * Get information about subscribed offers. Retrieve information about the offers you are subscribed to using the `project_id` and `region` parameters.
   *
   * @param request - The request {@link ListOfferSubscriptionsRequest}
   * @returns A Promise of ListOfferSubscriptionsResponse
   */
  listOfferSubscriptions = (
    request: Readonly<ListOfferSubscriptionsRequest> = {},
  ) =>
    this.client.fetch<ListOfferSubscriptionsResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/offer-subscriptions`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalListOfferSubscriptionsResponse,
    )

  /**
   * Update a subscribed offer.
   *
   * @param request - The request {@link UpdateOfferSubscriptionRequest}
   * @returns A Promise of OfferSubscription
   */
  updateOfferSubscription = (
    request: Readonly<UpdateOfferSubscriptionRequest> = {},
  ) =>
    this.client.fetch<OfferSubscription>(
      {
        body: JSON.stringify(
          marshalUpdateOfferSubscriptionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/offer-subscriptions`,
      },
      unmarshalOfferSubscription,
    )

  /**
   * List the available offers.. Retrieve the list of the available and free-of-charge offers you can subscribe to.
   *
   * @param request - The request {@link ListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<ListOffersRequest> = {}) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/offers`,
      },
      unmarshalListOffersResponse,
    )

  protected pageOfListPools = (request: Readonly<ListPoolsRequest> = {}) =>
    this.client.fetch<ListPoolsResponse>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/pools`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListPoolsResponse,
    )

  /**
   * Get information about a sending pool.. Retrieve information about a sending pool, including its creation status and configuration parameters.
   *
   * @param request - The request {@link ListPoolsRequest}
   * @returns A Promise of ListPoolsResponse
   */
  listPools = (request: Readonly<ListPoolsRequest> = {}) =>
    enrichForPagination('pools', this.pageOfListPools, request)

  /**
   * Get project resource consumption.. Get project resource consumption.
   *
   * @param request - The request {@link GetProjectConsumptionRequest}
   * @returns A Promise of ProjectConsumption
   */
  getProjectConsumption = (
    request: Readonly<GetProjectConsumptionRequest> = {},
  ) =>
    this.client.fetch<ProjectConsumption>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/project-consumption`,
        urlParams: urlParams([
          'project_id',
          request.projectId ?? this.client.settings.defaultProjectId,
        ]),
      },
      unmarshalProjectConsumption,
    )
}
