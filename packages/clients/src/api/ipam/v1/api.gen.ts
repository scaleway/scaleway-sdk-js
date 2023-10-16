// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Region } from '../../../bridge'
import {
  marshalBookIPRequest,
  marshalUpdateIPRequest,
  unmarshalIP,
  unmarshalListIPsResponse,
} from './marshalling.gen'
import type {
  BookIPRequest,
  GetIPRequest,
  IP,
  ListIPsRequest,
  ListIPsResponse,
  ReleaseIPRequest,
  UpdateIPRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * IPAM API.
 *
 * This API allows you to manage IP addresses with Scaleway's IP Address
 * Management tool.
 */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  /**
   * Book a new IP. Book a new IP from the specified source. Currently IPs can
   * only be booked from a Private Network.
   *
   * @param request - The request {@link BookIPRequest}
   * @returns A Promise of IP
   */
  bookIP = (request: Readonly<BookIPRequest>) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalBookIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipam/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/ips`,
      },
      unmarshalIP,
    )

  /**
   * Release an IP. Release an IP not currently attached to a resource, and
   * returns it to the available IP pool.
   *
   * @param request - The request {@link ReleaseIPRequest}
   */
  releaseIP = (request: Readonly<ReleaseIPRequest>) =>
    this.client.fetch<void>({
      body: '{}',
      headers: jsonContentHeaders,
      method: 'DELETE',
      path: `/ipam/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/ips/${validatePathParam('ipId', request.ipId)}`,
    })

  /**
   * Get an IP. Retrieve details of an existing IP, specified by its IP ID.
   *
   * @param request - The request {@link GetIPRequest}
   * @returns A Promise of IP
   */
  getIP = (request: Readonly<GetIPRequest>) =>
    this.client.fetch<IP>(
      {
        method: 'GET',
        path: `/ipam/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  /**
   * Update an IP. Update parameters including tags of the specified IP.
   *
   * @param request - The request {@link UpdateIPRequest}
   * @returns A Promise of IP
   */
  updateIP = (request: Readonly<UpdateIPRequest>) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalUpdateIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/ipam/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  protected pageOfListIPs = (request: Readonly<ListIPsRequest> = {}) =>
    this.client.fetch<ListIPsResponse>(
      {
        method: 'GET',
        path: `/ipam/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/ips`,
        urlParams: urlParams(
          ['attached', request.attached],
          ['is_ipv6', request.isIpv6],
          ['mac_address', request.macAddress],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['resource_id', request.resourceId],
          ['resource_name', request.resourceName],
          ['resource_type', request.resourceType],
          ['tags', request.tags],
          ...Object.entries(
            resolveOneOf([
              { param: 'zonal', value: request.zonal },
              { param: 'private_network_id', value: request.privateNetworkId },
            ]),
          ),
        ),
      },
      unmarshalListIPsResponse,
    )

  /**
   * List existing IPs. List existing IPs in the specified region using various
   * filters. For example, you can filter for IPs within a specified Private
   * Network, or for public IPs within a specified Project. By default, the IPs
   * returned in the list are ordered by creation date in ascending order,
   * though this can be modified via the order_by field.
   *
   * @param request - The request {@link ListIPsRequest}
   * @returns A Promise of ListIPsResponse
   */
  listIPs = (request: Readonly<ListIPsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIPs, request)
}
