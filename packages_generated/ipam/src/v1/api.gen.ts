// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality,} from '@scaleway/sdk-client'
import {
  marshalAttachIPRequest,
  marshalBookIPRequest,
  marshalDetachIPRequest,
  unmarshalIP,
  unmarshalListIPsResponse,
  marshalMoveIPRequest,
  marshalReleaseIPSetRequest,
  marshalUpdateIPRequest,
} from './marshalling.gen.js'
import type {
  AttachIPRequest,
  BookIPRequest,
  DetachIPRequest,
  GetIPRequest,
  IP,
  ListIPsRequest,
  ListIPsResponse,
  MoveIPRequest,
  ReleaseIPRequest,
  ReleaseIPSetRequest,
  UpdateIPRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * IPAM API.

This API allows you to manage your Scaleway IP addresses with our IP Address Management tool.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      regions: [
        'fr-par',
        'nl-ams',
        'pl-waw',
      ],
    })
  
  /**
   * Reserve a new IP. Reserve a new IP from the specified source. Currently IPs can only be reserved from a Private Network.
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
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips`,
      },
      unmarshalIP,
    )

  
  /**
   * Release an IP. Release an IP not currently attached to a resource, and returns it to the available IP pool.
   *
   * @param request - The request {@link ReleaseIPRequest}
   */
  releaseIP = (request: Readonly<ReleaseIPRequest>) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
    )

  
  releaseIPSet = (request: Readonly<ReleaseIPSetRequest> = {}) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalReleaseIPSetRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ip-sets/release`,
      },
    )

  
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
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
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
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}`,
      },
      unmarshalIP,
    )

  
  protected pageOfListIPs = (request: Readonly<ListIPsRequest> = {}) =>
    this.client.fetch<ListIPsResponse>(
      {
        method: 'GET',
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips`,
        urlParams: urlParams(
          ['attached', request.attached],
          ['ip_ids', request.ipIds],
          ['is_ipv6', request.isIpv6],
          ['mac_address', request.macAddress],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
          ['resource_id', request.resourceId],
          ['resource_ids', request.resourceIds],
          ['resource_name', request.resourceName],
          ['resource_type', request.resourceType],
          ['resource_types', request.resourceTypes],
          ['tags', request.tags],
          ['vpc_id', request.vpcId],  
          ...Object.entries(resolveOneOf([
            {param: 'zonal',
              value: request.zonal,
            },
            {param: 'private_network_id',
              value: request.privateNetworkId,
            },
            {param: 'subnet_id',
              value: request.subnetId,
            },
            {param: 'source_vpc_id',
              value: request.sourceVpcId,
            },
          ])),
        ),
      },
      unmarshalListIPsResponse,
    )
  
  /**
   * List existing IPs. List existing IPs in the specified region using various filters. For example, you can filter for IPs within a specified Private Network, or for public IPs within a specified Project. By default, the IPs returned in the list are ordered by creation date in ascending order, though this can be modified via the order_by field.
   *
   * @param request - The request {@link ListIPsRequest}
   * @returns A Promise of ListIPsResponse
   */
  listIPs = (request: Readonly<ListIPsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIPs, request)

  
  /**
   * Attach IP to custom resource. Attach an existing reserved IP from a Private Network subnet to a custom, named resource via its MAC address. An example of a custom resource is a virtual machine hosted on an Elastic Metal server. Do not use this method for attaching IP addresses to standard Scaleway resources as it will fail - see the relevant product API for an equivalent method.
   *
   * @param request - The request {@link AttachIPRequest}
   * @returns A Promise of IP
   */
  attachIP = (request: Readonly<AttachIPRequest>) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalAttachIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}/attach`,
      },
      unmarshalIP,
    )

  
  /**
   * Detach IP from a custom resource. Detach a private IP from a custom resource. An example of a custom resource is a virtual machine hosted on an Elastic Metal server. Do not use this method for detaching IP addresses from standard Scaleway resources (e.g. Instances, Load Balancers) as it will fail - see the relevant product API for an equivalent method.
   *
   * @param request - The request {@link DetachIPRequest}
   * @returns A Promise of IP
   */
  detachIP = (request: Readonly<DetachIPRequest>) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalDetachIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}/detach`,
      },
      unmarshalIP,
    )

  
  /**
   * Move IP to a custom resource. Move an existing reserved private IP from one custom resource (e.g. a virtual machine hosted on an Elastic Metal server) to another custom resource. This will detach it from the first resource, and attach it to the second. Do not use this method for moving IP addresses between standard Scaleway resources (e.g. Instances, Load Balancers) as it will fail - see the relevant product API for an equivalent method.
   *
   * @param request - The request {@link MoveIPRequest}
   * @returns A Promise of IP
   */
  moveIP = (request: Readonly<MoveIPRequest>) =>
    this.client.fetch<IP>(
      {
        body: JSON.stringify(
          marshalMoveIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipam/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/ips/${validatePathParam('ipId', request.ipId)}/move`,
      },
      unmarshalIP,
    )

  
}

