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
import { HOSTING_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalCreateHostingRequest,
  marshalUpdateHostingRequest,
  unmarshalDnsRecords,
  unmarshalHosting,
  unmarshalListControlPanelsResponse,
  unmarshalListHostingsResponse,
  unmarshalListOffersResponse,
  unmarshalResetHostingPasswordResponse,
  unmarshalSession,
} from './marshalling.gen'
import type {
  CreateHostingRequest,
  CreateSessionRequest,
  DeleteHostingRequest,
  DnsRecords,
  GetDomainDnsRecordsRequest,
  GetHostingRequest,
  Hosting,
  ListControlPanelsRequest,
  ListControlPanelsResponse,
  ListHostingsRequest,
  ListHostingsResponse,
  ListOffersRequest,
  ListOffersResponse,
  ResetHostingPasswordRequest,
  ResetHostingPasswordResponse,
  RestoreHostingRequest,
  Session,
  UpdateHostingRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Web Hosting API. */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams']

  /**
   * Order a Web Hosting plan. Order a Web Hosting plan, specifying the offer
   * type required via the `offer_id` parameter.
   *
   * @param request - The request {@link CreateHostingRequest}
   * @returns A Promise of Hosting
   */
  createHosting = (request: Readonly<CreateHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        body: JSON.stringify(
          marshalCreateHostingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings`,
      },
      unmarshalHosting,
    )

  protected pageOfListHostings = (
    request: Readonly<ListHostingsRequest> = {},
  ) =>
    this.client.fetch<ListHostingsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings`,
        urlParams: urlParams(
          ['control_panels', request.controlPanels],
          ['domain', request.domain],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['statuses', request.statuses],
          ['tags', request.tags],
        ),
      },
      unmarshalListHostingsResponse,
    )

  /**
   * List all Web Hosting plans. List all of your existing Web Hosting plans.
   * Various filters are available to limit the results, including filtering by
   * domain, status, tag and Project ID.
   *
   * @param request - The request {@link ListHostingsRequest}
   * @returns A Promise of ListHostingsResponse
   */
  listHostings = (request: Readonly<ListHostingsRequest> = {}) =>
    enrichForPagination('hostings', this.pageOfListHostings, request)

  /**
   * Get a Web Hosting plan. Get the details of one of your existing Web Hosting
   * plans, specified by its `hosting_id`.
   *
   * @param request - The request {@link GetHostingRequest}
   * @returns A Promise of Hosting
   */
  getHosting = (request: Readonly<GetHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
      },
      unmarshalHosting,
    )

  /**
   * Waits for {@link Hosting} to be in a final state.
   *
   * @param request - The request {@link GetHostingRequest}
   * @param options - The waiting options
   * @returns A Promise of Hosting
   */
  waitForHosting = (
    request: Readonly<GetHostingRequest>,
    options?: Readonly<WaitForOptions<Hosting>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(!HOSTING_TRANSIENT_STATUSES.includes(res.status))),
      this.getHosting,
      request,
      options,
    )

  /**
   * Update a Web Hosting plan. Update the details of one of your existing Web
   * Hosting plans, specified by its `hosting_id`. You can update parameters
   * including the contact email address, tags, options and offer.
   *
   * @param request - The request {@link UpdateHostingRequest}
   * @returns A Promise of Hosting
   */
  updateHosting = (request: Readonly<UpdateHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        body: JSON.stringify(
          marshalUpdateHostingRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
      },
      unmarshalHosting,
    )

  /**
   * Delete a Web Hosting plan. Delete a Web Hosting plan, specified by its
   * `hosting_id`. Note that deletion is not immediate: it will take place at
   * the end of the calendar month, after which time your Web Hosting plan and
   * all its data (files and emails) will be irreversibly lost.
   *
   * @param request - The request {@link DeleteHostingRequest}
   * @returns A Promise of Hosting
   */
  deleteHosting = (request: Readonly<DeleteHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        method: 'DELETE',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
      },
      unmarshalHosting,
    )

  /**
   * Restore a Web Hosting plan. When you [delete a Web Hosting
   * plan](#path-hostings-delete-a-hosting), definitive deletion does not take
   * place until the end of the calendar month. In the time between initiating
   * the deletion, and definitive deletion at the end of the month, you can
   * choose to **restore** the Web Hosting plan, using this endpoint and
   * specifying its `hosting_id`.
   *
   * @param request - The request {@link RestoreHostingRequest}
   * @returns A Promise of Hosting
   */
  restoreHosting = (request: Readonly<RestoreHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/restore`,
      },
      unmarshalHosting,
    )

  /**
   * Get DNS records. Get the set of DNS records of a specified domain
   * associated with a Web Hosting plan.
   *
   * @param request - The request {@link GetDomainDnsRecordsRequest}
   * @returns A Promise of DnsRecords
   */
  getDomainDnsRecords = (request: Readonly<GetDomainDnsRecordsRequest>) =>
    this.client.fetch<DnsRecords>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/domains/${validatePathParam('domain', request.domain)}/dns-records`,
      },
      unmarshalDnsRecords,
    )

  /**
   * List all offers. List the different Web Hosting offers, and their options,
   * available to order from Scaleway.
   *
   * @param request - The request {@link ListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<ListOffersRequest>) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/offers`,
        urlParams: urlParams(
          ['control_panels', request.controlPanels],
          ['hosting_id', request.hostingId],
          ['only_options', request.onlyOptions],
          ['order_by', request.orderBy],
          ['without_options', request.withoutOptions],
        ),
      },
      unmarshalListOffersResponse,
    )

  protected pageOfListControlPanels = (
    request: Readonly<ListControlPanelsRequest> = {},
  ) =>
    this.client.fetch<ListControlPanelsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/control-panels`,
        urlParams: urlParams(
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListControlPanelsResponse,
    )

  /**
   * "List the control panels type: cpanel or plesk.".
   *
   * @param request - The request {@link ListControlPanelsRequest}
   * @returns A Promise of ListControlPanelsResponse
   */
  listControlPanels = (request: Readonly<ListControlPanelsRequest> = {}) =>
    enrichForPagination('controlPanels', this.pageOfListControlPanels, request)

  /**
   * Create a user session.
   *
   * @param request - The request {@link CreateSessionRequest}
   * @returns A Promise of Session
   */
  createSession = (request: Readonly<CreateSessionRequest>) =>
    this.client.fetch<Session>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/sessions`,
      },
      unmarshalSession,
    )

  resetHostingPassword = (request: Readonly<ResetHostingPasswordRequest>) =>
    this.client.fetch<ResetHostingPasswordResponse>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/webhosting/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hostings/${validatePathParam('hostingId', request.hostingId)}/reset-password`,
      },
      unmarshalResetHostingPasswordResponse,
    )
}
