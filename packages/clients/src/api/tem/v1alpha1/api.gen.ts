// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, ServiceInfo, WaitForOptions } from '../../../bridge'
import {
  DOMAIN_TRANSIENT_STATUSES,
  EMAIL_TRANSIENT_STATUSES,
} from './content.gen'
import {
  marshalCreateDomainRequest,
  marshalCreateEmailRequest,
  unmarshalCreateEmailResponse,
  unmarshalDomain,
  unmarshalEmail,
  unmarshalListDomainsResponse,
  unmarshalListEmailsResponse,
  unmarshalStatistics,
} from './marshalling.gen'
import type {
  CancelEmailRequest,
  CheckDomainRequest,
  CreateDomainRequest,
  CreateEmailRequest,
  CreateEmailResponse,
  Domain,
  Email,
  GetDomainRequest,
  GetEmailRequest,
  GetServiceInfoRequest,
  GetStatisticsRequest,
  ListDomainsRequest,
  ListDomainsResponse,
  ListEmailsRequest,
  ListEmailsResponse,
  RevokeDomainRequest,
  Statistics,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Transactional Email API.
 *
 * Tem.
 */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par']

  getServiceInfo = (request: Readonly<GetServiceInfoRequest> = {}) =>
    this.client.fetch<ServiceInfo>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}`,
      },
      unmarshalServiceInfo,
    )

  /**
   * Send an email
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
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/emails`,
      },
      unmarshalCreateEmailResponse,
    )

  /**
   * Get information about an email
   *
   * @param request - The request {@link GetEmailRequest}
   * @returns A Promise of Email
   */
  getEmail = (request: Readonly<GetEmailRequest>) =>
    this.client.fetch<Email>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/emails/${validatePathParam('emailId', request.emailId)}`,
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
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/emails`,
        urlParams: urlParams(
          ['domain_id', request.domainId],
          ['mail_from', request.mailFrom],
          ['mail_to', request.mailTo],
          ['message_id', request.messageId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['since', request.since],
          ['statuses', request.statuses],
          ['until', request.until],
        ),
      },
      unmarshalListEmailsResponse,
    )

  /**
   * List emails sent from a domain and/or for a project and/or for an
   * organization
   *
   * @param request - The request {@link ListEmailsRequest}
   * @returns A Promise of ListEmailsResponse
   */
  listEmails = (request: Readonly<ListEmailsRequest> = {}) =>
    enrichForPagination('emails', this.pageOfListEmails, request)

  /**
   * Get statistics on the email statuses
   *
   * @param request - The request {@link GetStatisticsRequest}
   * @returns A Promise of Statistics
   */
  getStatistics = (request: Readonly<GetStatisticsRequest> = {}) =>
    this.client.fetch<Statistics>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/statistics`,
        urlParams: urlParams(
          ['domain_id', request.domainId],
          ['mail_from', request.mailFrom],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['since', request.since],
          ['until', request.until],
        ),
      },
      unmarshalStatistics,
    )

  /**
   * Try to cancel an email if it has not yet been sent
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
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/emails/${validatePathParam('emailId', request.emailId)}/cancel`,
      },
      unmarshalEmail,
    )

  /**
   * Register a domain in a project
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
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains`,
      },
      unmarshalDomain,
    )

  /**
   * Get information about a domain
   *
   * @param request - The request {@link GetDomainRequest}
   * @returns A Promise of Domain
   */
  getDomain = (request: Readonly<GetDomainRequest>) =>
    this.client.fetch<Domain>(
      {
        method: 'GET',
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains/${validatePathParam('domainId', request.domainId)}`,
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
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains`,
        urlParams: urlParams(
          ['name', request.name],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
          ['status', request.status],
        ),
      },
      unmarshalListDomainsResponse,
    )

  /**
   * List domains in a project and/or in an organization
   *
   * @param request - The request {@link ListDomainsRequest}
   * @returns A Promise of ListDomainsResponse
   */
  listDomains = (request: Readonly<ListDomainsRequest> = {}) =>
    enrichForPagination('domains', this.pageOfListDomains, request)

  /**
   * Revoke a domain
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
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains/${validatePathParam('domainId', request.domainId)}/revoke`,
      },
      unmarshalDomain,
    )

  /**
   * Ask for an immediate check of a domain (DNS check)
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
        path: `/transactional-email/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains/${validatePathParam('domainId', request.domainId)}/check`,
      },
      unmarshalDomain,
    )
}
