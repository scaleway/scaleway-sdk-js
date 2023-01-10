// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { WaitForOptions, Zone } from '../../../bridge'
import { FLEXIBLE_IP_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalAttachFlexibleIPRequest,
  marshalCreateFlexibleIPRequest,
  marshalDetachFlexibleIPRequest,
  marshalDuplicateMACAddrRequest,
  marshalGenerateMACAddrRequest,
  marshalMoveMACAddrRequest,
  marshalUpdateFlexibleIPRequest,
  unmarshalAttachFlexibleIPsResponse,
  unmarshalDetachFlexibleIPsResponse,
  unmarshalFlexibleIP,
  unmarshalListFlexibleIPsResponse,
} from './marshalling.gen'
import type {
  AttachFlexibleIPRequest,
  AttachFlexibleIPsResponse,
  CreateFlexibleIPRequest,
  DeleteFlexibleIPRequest,
  DeleteMACAddrRequest,
  DetachFlexibleIPRequest,
  DetachFlexibleIPsResponse,
  DuplicateMACAddrRequest,
  FlexibleIP,
  GenerateMACAddrRequest,
  GetFlexibleIPRequest,
  ListFlexibleIPsRequest,
  ListFlexibleIPsResponse,
  MoveMACAddrRequest,
  UpdateFlexibleIPRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Flexible IP API. */
export class API extends ParentAPI {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = [
    'fr-par-1',
    'fr-par-2',
    'nl-ams-1',
  ]

  /**
   * Create a Flexible IP
   *
   * @param request - The request {@link CreateFlexibleIPRequest}
   * @returns A Promise of FlexibleIP
   */
  createFlexibleIP = (request: Readonly<CreateFlexibleIPRequest>) =>
    this.client.fetch<FlexibleIP>(
      {
        body: JSON.stringify(
          marshalCreateFlexibleIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Get a Flexible IP
   *
   * @param request - The request {@link GetFlexibleIPRequest}
   * @returns A Promise of FlexibleIP
   */
  getFlexibleIP = (request: Readonly<GetFlexibleIPRequest>) =>
    this.client.fetch<FlexibleIP>(
      {
        method: 'GET',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips/${validatePathParam('fipId', request.fipId)}`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Waits for {@link FlexibleIP} to be in a final state.
   *
   * @param request - The request {@link GetFlexibleIPRequest}
   * @param options - The waiting options
   * @returns A Promise of FlexibleIP
   */
  waitForFlexibleIP = (
    request: Readonly<GetFlexibleIPRequest>,
    options?: Readonly<WaitForOptions<FlexibleIP>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res =>
          Promise.resolve(
            !FLEXIBLE_IP_TRANSIENT_STATUSES.includes(res.status),
          )),
      this.getFlexibleIP,
      request,
      options,
    )

  protected pageOfListFlexibleIPs = (
    request: Readonly<ListFlexibleIPsRequest> = {},
  ) =>
    this.client.fetch<ListFlexibleIPsResponse>(
      {
        method: 'GET',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
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
          ['server_ids', request.serverIds],
          ['status', request.status],
          ['tags', request.tags],
        ),
      },
      unmarshalListFlexibleIPsResponse,
    )

  /**
   * List Flexible IPs
   *
   * @param request - The request {@link ListFlexibleIPsRequest}
   * @returns A Promise of ListFlexibleIPsResponse
   */
  listFlexibleIPs = (request: Readonly<ListFlexibleIPsRequest> = {}) =>
    enrichForPagination('flexibleIps', this.pageOfListFlexibleIPs, request)

  /**
   * Update a Flexible IP
   *
   * @param request - The request {@link UpdateFlexibleIPRequest}
   * @returns A Promise of FlexibleIP
   */
  updateFlexibleIP = (request: Readonly<UpdateFlexibleIPRequest>) =>
    this.client.fetch<FlexibleIP>(
      {
        body: JSON.stringify(
          marshalUpdateFlexibleIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips/${validatePathParam('fipId', request.fipId)}`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Delete a Flexible IP
   *
   * @param request - The request {@link DeleteFlexibleIPRequest}
   */
  deleteFlexibleIP = (request: Readonly<DeleteFlexibleIPRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/fips/${validatePathParam('fipId', request.fipId)}`,
    })

  /**
   * Attach a Flexible IP to a server
   *
   * @param request - The request {@link AttachFlexibleIPRequest}
   * @returns A Promise of AttachFlexibleIPsResponse
   */
  attachFlexibleIP = (request: Readonly<AttachFlexibleIPRequest>) =>
    this.client.fetch<AttachFlexibleIPsResponse>(
      {
        body: JSON.stringify(
          marshalAttachFlexibleIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips/attach`,
      },
      unmarshalAttachFlexibleIPsResponse,
    )

  /**
   * Detach a Flexible IP from a server
   *
   * @param request - The request {@link DetachFlexibleIPRequest}
   * @returns A Promise of DetachFlexibleIPsResponse
   */
  detachFlexibleIP = (request: Readonly<DetachFlexibleIPRequest>) =>
    this.client.fetch<DetachFlexibleIPsResponse>(
      {
        body: JSON.stringify(
          marshalDetachFlexibleIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips/detach`,
      },
      unmarshalDetachFlexibleIPsResponse,
    )

  /**
   * Generate a virtual MAC on a given Flexible IP
   *
   * @param request - The request {@link GenerateMACAddrRequest}
   * @returns A Promise of FlexibleIP
   */
  generateMACAddr = (request: Readonly<GenerateMACAddrRequest>) =>
    this.client.fetch<FlexibleIP>(
      {
        body: JSON.stringify(
          marshalGenerateMACAddrRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips/${validatePathParam('fipId', request.fipId)}/mac`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Duplicate a Virtual MAC from a given Flexible IP onto another attached on
   * the same server.
   *
   * @param request - The request {@link DuplicateMACAddrRequest}
   * @returns A Promise of FlexibleIP
   */
  duplicateMACAddr = (request: Readonly<DuplicateMACAddrRequest>) =>
    this.client.fetch<FlexibleIP>(
      {
        body: JSON.stringify(
          marshalDuplicateMACAddrRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips/${validatePathParam('fipId', request.fipId)}/mac/duplicate`,
      },
      unmarshalFlexibleIP,
    )

  moveMACAddr = (request: Readonly<MoveMACAddrRequest>) =>
    this.client.fetch<FlexibleIP>(
      {
        body: JSON.stringify(
          marshalMoveMACAddrRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/fips/${validatePathParam('fipId', request.fipId)}/mac/move`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Remove a virtual MAC from a Flexible IP
   *
   * @param request - The request {@link DeleteMACAddrRequest}
   */
  deleteMACAddr = (request: Readonly<DeleteMACAddrRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/flexible-ip/v1alpha1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/fips/${validatePathParam('fipId', request.fipId)}/mac`,
    })
}
