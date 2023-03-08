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
  unmarshalListHostingsResponse,
  unmarshalListOffersResponse,
} from './marshalling.gen'
import type {
  CreateHostingRequest,
  DeleteHostingRequest,
  DnsRecords,
  GetDomainDnsRecordsRequest,
  GetHostingRequest,
  Hosting,
  ListHostingsRequest,
  ListHostingsResponse,
  ListOffersRequest,
  ListOffersResponse,
  RestoreHostingRequest,
  UpdateHostingRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Webhosting API. */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par']

  /**
   * Create a hosting
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
        path: `/webhosting/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hostings`,
      },
      unmarshalHosting,
    )

  protected pageOfListHostings = (
    request: Readonly<ListHostingsRequest> = {},
  ) =>
    this.client.fetch<ListHostingsResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hostings`,
        urlParams: urlParams(
          ['domain', request.domain],
          ['order_by', request.orderBy ?? 'created_at_asc'],
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
   * List all hostings
   *
   * @param request - The request {@link ListHostingsRequest}
   * @returns A Promise of ListHostingsResponse
   */
  listHostings = (request: Readonly<ListHostingsRequest> = {}) =>
    enrichForPagination('hostings', this.pageOfListHostings, request)

  /**
   * Get the details of a Hosting with the given ID.
   *
   * @param request - The request {@link GetHostingRequest}
   * @returns A Promise of Hosting
   */
  getHosting = (request: Readonly<GetHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
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
   * Update a hosting
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
        path: `/webhosting/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
      },
      unmarshalHosting,
    )

  /**
   * Delete a hosting with the given ID.
   *
   * @param request - The request {@link DeleteHostingRequest}
   * @returns A Promise of Hosting
   */
  deleteHosting = (request: Readonly<DeleteHostingRequest>) =>
    this.client.fetch<Hosting>(
      {
        method: 'DELETE',
        path: `/webhosting/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hostings/${validatePathParam('hostingId', request.hostingId)}`,
      },
      unmarshalHosting,
    )

  /**
   * Restore a hosting with the given ID.
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
        path: `/webhosting/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hostings/${validatePathParam(
          'hostingId',
          request.hostingId,
        )}/restore`,
      },
      unmarshalHosting,
    )

  /**
   * Get the DNS records of a specified domain.
   *
   * @param request - The request {@link GetDomainDnsRecordsRequest}
   * @returns A Promise of DnsRecords
   */
  getDomainDnsRecords = (request: Readonly<GetDomainDnsRecordsRequest>) =>
    this.client.fetch<DnsRecords>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/domains/${validatePathParam('domain', request.domain)}/dns-records`,
      },
      unmarshalDnsRecords,
    )

  /**
   * List all offers
   *
   * @param request - The request {@link ListOffersRequest}
   * @returns A Promise of ListOffersResponse
   */
  listOffers = (request: Readonly<ListOffersRequest>) =>
    this.client.fetch<ListOffersResponse>(
      {
        method: 'GET',
        path: `/webhosting/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/offers`,
        urlParams: urlParams(
          ['hosting_id', request.hostingId],
          ['only_options', request.onlyOptions],
          ['order_by', request.orderBy ?? 'price_asc'],
          ['without_options', request.withoutOptions],
        ),
      },
      unmarshalListOffersResponse,
    )
}
