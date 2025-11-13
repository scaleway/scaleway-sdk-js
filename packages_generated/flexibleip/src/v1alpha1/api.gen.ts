// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.

import type { ApiLocality, WaitForOptions } from '@scaleway/sdk-client'
import {
  enrichForPagination,
  API as ParentAPI,
  toApiLocality,
  urlParams,
  validatePathParam,
  waitForResource,
} from '@scaleway/sdk-client'
import { FLEXIBLE_IP_TRANSIENT_STATUSES as FLEXIBLE_IP_TRANSIENT_STATUSES_FLEXIBLEIP } from './content.gen.js'
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
} from './marshalling.gen.js'
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
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Elastic Metal - Flexible IP API.

This API allows you to manage your Elastic Metal servers' flexible public IP addresses.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality = toApiLocality({
    zones: [
      'fr-par-1',
      'fr-par-2',
      'nl-ams-1',
      'nl-ams-2',
      'pl-waw-2',
      'pl-waw-3',
    ],
  })

  /**
   * Create a new flexible IP. Generate a new flexible IP within a given zone, specifying its configuration including Project ID and description.
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
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Get an existing flexible IP. Retrieve information about an existing flexible IP, specified by its ID and zone. Its full details, including Project ID, description and status, are returned in the response object.
   *
   * @param request - The request {@link GetFlexibleIPRequest}
   * @returns A Promise of FlexibleIP
   */
  getFlexibleIP = (request: Readonly<GetFlexibleIPRequest>) =>
    this.client.fetch<FlexibleIP>(
      {
        method: 'GET',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/${validatePathParam('fipId', request.fipId)}`,
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
            !FLEXIBLE_IP_TRANSIENT_STATUSES_FLEXIBLEIP.includes(res.status),
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
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['server_ids', request.serverIds],
          ['status', request.status],
          ['tags', request.tags],
        ),
      },
      unmarshalListFlexibleIPsResponse,
    )

  /**
   * List flexible IPs. List all flexible IPs within a given zone.
   *
   * @param request - The request {@link ListFlexibleIPsRequest}
   * @returns A Promise of ListFlexibleIPsResponse
   */
  listFlexibleIPs = (request: Readonly<ListFlexibleIPsRequest> = {}) =>
    enrichForPagination('flexibleIps', this.pageOfListFlexibleIPs, request)

  /**
   * Update an existing flexible IP. Update the parameters of an existing flexible IP, specified by its ID and zone. These parameters include tags and description.
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
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/${validatePathParam('fipId', request.fipId)}`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Delete an existing flexible IP. Delete an existing flexible IP, specified by its ID and zone. Note that deleting a flexible IP is permanent and cannot be undone.
   *
   * @param request - The request {@link DeleteFlexibleIPRequest}
   */
  deleteFlexibleIP = (request: Readonly<DeleteFlexibleIPRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/${validatePathParam('fipId', request.fipId)}`,
    })

  /**
   * Attach an existing flexible IP to a server. Attach an existing flexible IP to a specified Elastic Metal server.
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
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/attach`,
      },
      unmarshalAttachFlexibleIPsResponse,
    )

  /**
   * Detach an existing flexible IP from a server. Detach an existing flexible IP from a specified Elastic Metal server.
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
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/detach`,
      },
      unmarshalDetachFlexibleIPsResponse,
    )

  /**
   * Generate a virtual MAC address on an existing flexible IP. Generate a virtual MAC (Media Access Control) address on an existing flexible IP.
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
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/${validatePathParam('fipId', request.fipId)}/mac`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Duplicate a virtual MAC address to another flexible IP. Duplicate a virtual MAC address from a given flexible IP to another flexible IP attached to the same server.
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
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/${validatePathParam('fipId', request.fipId)}/mac/duplicate`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Relocate an existing virtual MAC address to a different flexible IP. Relocate a virtual MAC (Media Access Control) address from an existing flexible IP to a different flexible IP.
   *
   * @param request - The request {@link MoveMACAddrRequest}
   * @returns A Promise of FlexibleIP
   */
  moveMACAddr = (request: Readonly<MoveMACAddrRequest>) =>
    this.client.fetch<FlexibleIP>(
      {
        body: JSON.stringify(
          marshalMoveMACAddrRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/${validatePathParam('fipId', request.fipId)}/mac/move`,
      },
      unmarshalFlexibleIP,
    )

  /**
   * Detach a given virtual MAC address from an existing flexible IP. Detach a given MAC (Media Access Control) address from an existing flexible IP.
   *
   * @param request - The request {@link DeleteMACAddrRequest}
   */
  deleteMACAddr = (request: Readonly<DeleteMACAddrRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/flexible-ip/v1alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/fips/${validatePathParam('fipId', request.fipId)}/mac`,
    })
}
