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
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality, RequestOptions,} from '@scaleway/sdk-client'
import {HUB_TRANSIENT_STATUSES as HUB_TRANSIENT_STATUSES_IOT,} from './content.gen.js'
import {
  marshalCreateDeviceRequest,
  unmarshalCreateDeviceResponse,
  marshalCreateHubRequest,
  marshalCreateNetworkRequest,
  unmarshalCreateNetworkResponse,
  marshalCreateRouteRequest,
  unmarshalDevice,
  unmarshalGetDeviceCertificateResponse,
  unmarshalGetDeviceMetricsResponse,
  unmarshalGetHubCAResponse,
  unmarshalGetHubMetricsResponse,
  unmarshalHub,
  unmarshalListDevicesResponse,
  unmarshalListHubsResponse,
  unmarshalListNetworksResponse,
  unmarshalListRoutesResponse,
  unmarshalListTwinDocumentsResponse,
  unmarshalNetwork,
  marshalPatchTwinDocumentRequest,
  marshalPutTwinDocumentRequest,
  unmarshalRenewDeviceCertificateResponse,
  unmarshalRoute,
  marshalSetDeviceCertificateRequest,
  unmarshalSetDeviceCertificateResponse,
  marshalSetHubCARequest,
  unmarshalTwinDocument,
  marshalUpdateDeviceRequest,
  marshalUpdateHubRequest,
  marshalUpdateRouteRequest,
} from './marshalling.gen.js'
import type {
  CreateDeviceRequest,
  CreateDeviceResponse,
  CreateHubRequest,
  CreateNetworkRequest,
  CreateNetworkResponse,
  CreateRouteRequest,
  DeleteDeviceRequest,
  DeleteHubRequest,
  DeleteNetworkRequest,
  DeleteRouteRequest,
  DeleteTwinDocumentRequest,
  DeleteTwinDocumentsRequest,
  Device,
  DisableDeviceRequest,
  DisableHubRequest,
  EnableDeviceRequest,
  EnableHubRequest,
  GetDeviceCertificateRequest,
  GetDeviceCertificateResponse,
  GetDeviceMetricsRequest,
  GetDeviceMetricsResponse,
  GetDeviceRequest,
  GetHubCARequest,
  GetHubCAResponse,
  GetHubMetricsRequest,
  GetHubMetricsResponse,
  GetHubRequest,
  GetNetworkRequest,
  GetRouteRequest,
  GetTwinDocumentRequest,
  Hub,
  ListDevicesRequest,
  ListDevicesResponse,
  ListHubsRequest,
  ListHubsResponse,
  ListNetworksRequest,
  ListNetworksResponse,
  ListRoutesRequest,
  ListRoutesResponse,
  ListTwinDocumentsRequest,
  ListTwinDocumentsResponse,
  Network,
  PatchTwinDocumentRequest,
  PutTwinDocumentRequest,
  RenewDeviceCertificateRequest,
  RenewDeviceCertificateResponse,
  Route,
  SetDeviceCertificateRequest,
  SetDeviceCertificateResponse,
  SetHubCARequest,
  TwinDocument,
  UpdateDeviceRequest,
  UpdateHubRequest,
  UpdateRouteRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * IoT Hub API.

This API allows you to manage your IoT hubs and devices.
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
      ],
    })
  
  protected pageOfListHubs = (request: Readonly<ListHubsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListHubsResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalListHubsResponse,
    )
  
  /**
   * List hubs. List all Hubs in the specified zone. By default, returned Hubs are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListHubsRequest}
   * @returns A Promise of ListHubsResponse
   */
  listHubs = (request: Readonly<ListHubsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('hubs', this.pageOfListHubs, request, options)

  
  /**
   * Create a hub. Create a new Hub in the targeted region, specifying its configuration including name and product plan.
   *
   * @param request - The request {@link CreateHubRequest}
   * @returns A Promise of Hub
   */
  createHub = (request: Readonly<CreateHubRequest>, options?: RequestOptions) =>
    this.client.fetch<Hub>(
      {
        body: JSON.stringify(
          marshalCreateHubRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs`,
        signal: options?.signal,
      },
      unmarshalHub,
    )

  
  /**
   * Get a hub. Retrieve information about an existing IoT Hub, specified by its Hub ID. Its full details, including name, status and endpoint, are returned in the response object.
   *
   * @param request - The request {@link GetHubRequest}
   * @returns A Promise of Hub
   */
  getHub = (request: Readonly<GetHubRequest>, options?: RequestOptions) =>
    this.client.fetch<Hub>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs/${validatePathParam('hubId', request.hubId)}`,
        signal: options?.signal,
      },
      unmarshalHub,
    )
  
  /**
   * Waits for {@link Hub} to be in a final state.
   *
   * @param request - The request {@link GetHubRequest}
   * @param options - The waiting options
   * @returns A Promise of Hub
   */
  waitForHub = (
    request: Readonly<GetHubRequest>,
    options?: Readonly<WaitForOptions<Hub>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!HUB_TRANSIENT_STATUSES_IOT.includes(res.status))),
      this.getHub,
      request,
      options,
    )

  
  /**
   * Update a hub. Update the parameters of an existing IoT Hub, specified by its Hub ID.
   *
   * @param request - The request {@link UpdateHubRequest}
   * @returns A Promise of Hub
   */
  updateHub = (request: Readonly<UpdateHubRequest>, options?: RequestOptions) =>
    this.client.fetch<Hub>(
      {
        body: JSON.stringify(
          marshalUpdateHubRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs/${validatePathParam('hubId', request.hubId)}`,
        signal: options?.signal,
      },
      unmarshalHub,
    )

  
  /**
   * Enable a hub. Enable an existing IoT Hub, specified by its Hub ID.
   *
   * @param request - The request {@link EnableHubRequest}
   * @returns A Promise of Hub
   */
  enableHub = (request: Readonly<EnableHubRequest>, options?: RequestOptions) =>
    this.client.fetch<Hub>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs/${validatePathParam('hubId', request.hubId)}/enable`,
        signal: options?.signal,
      },
      unmarshalHub,
    )

  
  /**
   * Disable a hub. Disable an existing IoT Hub, specified by its Hub ID.
   *
   * @param request - The request {@link DisableHubRequest}
   * @returns A Promise of Hub
   */
  disableHub = (request: Readonly<DisableHubRequest>, options?: RequestOptions) =>
    this.client.fetch<Hub>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs/${validatePathParam('hubId', request.hubId)}/disable`,
        signal: options?.signal,
      },
      unmarshalHub,
    )

  
  /**
   * Delete a hub. Delete an existing IoT Hub, specified by its Hub ID. Deleting a Hub is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteHubRequest}
   */
  deleteHub = (request: Readonly<DeleteHubRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs/${validatePathParam('hubId', request.hubId)}`,
        urlParams: urlParams(
          ['delete_devices', request.deleteDevices],
        ),
        signal: options?.signal,
      },
    )

  
  /**
   * Get a hub's metrics. Get the metrics of an existing IoT Hub, specified by its Hub ID.
   *
   * @deprecated
   * @param request - The request {@link GetHubMetricsRequest}
   * @returns A Promise of GetHubMetricsResponse
   */
  getHubMetrics = (request: Readonly<GetHubMetricsRequest>, options?: RequestOptions) =>
    this.client.fetch<GetHubMetricsResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs/${validatePathParam('hubId', request.hubId)}/metrics`,
        urlParams: urlParams(
          ['start_date', request.startDate],
        ),
        signal: options?.signal,
      },
      unmarshalGetHubMetricsResponse,
    )

  
  /**
   * Set the certificate authority of a hub. Set a particular PEM-encoded certificate, specified by the Hub ID.
   *
   * @param request - The request {@link SetHubCARequest}
   * @returns A Promise of Hub
   */
  setHubCA = (request: Readonly<SetHubCARequest>, options?: RequestOptions) =>
    this.client.fetch<Hub>(
      {
        body: JSON.stringify(
          marshalSetHubCARequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs/${validatePathParam('hubId', request.hubId)}/ca`,
        signal: options?.signal,
      },
      unmarshalHub,
    )

  
  /**
   * Get the certificate authority of a hub. Get information for a particular PEM-encoded certificate, specified by the Hub ID.
   *
   * @param request - The request {@link GetHubCARequest}
   * @returns A Promise of GetHubCAResponse
   */
  getHubCA = (request: Readonly<GetHubCARequest>, options?: RequestOptions) =>
    this.client.fetch<GetHubCAResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/hubs/${validatePathParam('hubId', request.hubId)}/ca`,
        signal: options?.signal,
      },
      unmarshalGetHubCAResponse,
    )

  
  protected pageOfListDevices = (request: Readonly<ListDevicesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListDevicesResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices`,
        urlParams: urlParams(
          ['allow_insecure', request.allowInsecure],
          ['hub_id', request.hubId],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['status', request.status],
        ),
        signal: options?.signal,
      },
      unmarshalListDevicesResponse,
    )
  
  /**
   * List devices. List all devices in the specified region. By default, returned devices are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListDevicesRequest}
   * @returns A Promise of ListDevicesResponse
   */
  listDevices = (request: Readonly<ListDevicesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('devices', this.pageOfListDevices, request, options)

  
  /**
   * Add a device. Attach a device to a given Hub.
   *
   * @param request - The request {@link CreateDeviceRequest}
   * @returns A Promise of CreateDeviceResponse
   */
  createDevice = (request: Readonly<CreateDeviceRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateDeviceResponse>(
      {
        body: JSON.stringify(
          marshalCreateDeviceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices`,
        signal: options?.signal,
      },
      unmarshalCreateDeviceResponse,
    )

  
  /**
   * Get a device. Retrieve information about an existing device, specified by its device ID. Its full details, including name, status and ID, are returned in the response object.
   *
   * @param request - The request {@link GetDeviceRequest}
   * @returns A Promise of Device
   */
  getDevice = (request: Readonly<GetDeviceRequest>, options?: RequestOptions) =>
    this.client.fetch<Device>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}`,
        signal: options?.signal,
      },
      unmarshalDevice,
    )

  
  /**
   * Update a device. Update the parameters of an existing device, specified by its device ID.
   *
   * @param request - The request {@link UpdateDeviceRequest}
   * @returns A Promise of Device
   */
  updateDevice = (request: Readonly<UpdateDeviceRequest>, options?: RequestOptions) =>
    this.client.fetch<Device>(
      {
        body: JSON.stringify(
          marshalUpdateDeviceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}`,
        signal: options?.signal,
      },
      unmarshalDevice,
    )

  
  /**
   * Enable a device. Enable a specific device, specified by its device ID.
   *
   * @param request - The request {@link EnableDeviceRequest}
   * @returns A Promise of Device
   */
  enableDevice = (request: Readonly<EnableDeviceRequest>, options?: RequestOptions) =>
    this.client.fetch<Device>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}/enable`,
        signal: options?.signal,
      },
      unmarshalDevice,
    )

  
  /**
   * Disable a device. Disable an existing device, specified by its device ID.
   *
   * @param request - The request {@link DisableDeviceRequest}
   * @returns A Promise of Device
   */
  disableDevice = (request: Readonly<DisableDeviceRequest>, options?: RequestOptions) =>
    this.client.fetch<Device>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}/disable`,
        signal: options?.signal,
      },
      unmarshalDevice,
    )

  
  /**
   * Renew a device certificate. Renew the certificate of an existing device, specified by its device ID.
   *
   * @param request - The request {@link RenewDeviceCertificateRequest}
   * @returns A Promise of RenewDeviceCertificateResponse
   */
  renewDeviceCertificate = (request: Readonly<RenewDeviceCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<RenewDeviceCertificateResponse>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}/renew-certificate`,
        signal: options?.signal,
      },
      unmarshalRenewDeviceCertificateResponse,
    )

  
  /**
   * Set a custom certificate on a device. Switch the existing certificate of a given device with an EM-encoded custom certificate.
   *
   * @param request - The request {@link SetDeviceCertificateRequest}
   * @returns A Promise of SetDeviceCertificateResponse
   */
  setDeviceCertificate = (request: Readonly<SetDeviceCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<SetDeviceCertificateResponse>(
      {
        body: JSON.stringify(
          marshalSetDeviceCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}/certificate`,
        signal: options?.signal,
      },
      unmarshalSetDeviceCertificateResponse,
    )

  
  /**
   * Get a device's certificate. Get information for a particular PEM-encoded certificate, specified by the device ID. The response returns full details of the device, including its type of certificate.
   *
   * @param request - The request {@link GetDeviceCertificateRequest}
   * @returns A Promise of GetDeviceCertificateResponse
   */
  getDeviceCertificate = (request: Readonly<GetDeviceCertificateRequest>, options?: RequestOptions) =>
    this.client.fetch<GetDeviceCertificateResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}/certificate`,
        signal: options?.signal,
      },
      unmarshalGetDeviceCertificateResponse,
    )

  
  /**
   * Remove a device. Remove a specific device from the specific Hub it is attached to.
   *
   * @param request - The request {@link DeleteDeviceRequest}
   */
  deleteDevice = (request: Readonly<DeleteDeviceRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get a device's metrics. Get the metrics of an existing device, specified by its device ID.
   *
   * @deprecated
   * @param request - The request {@link GetDeviceMetricsRequest}
   * @returns A Promise of GetDeviceMetricsResponse
   */
  getDeviceMetrics = (request: Readonly<GetDeviceMetricsRequest>, options?: RequestOptions) =>
    this.client.fetch<GetDeviceMetricsResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/devices/${validatePathParam('deviceId', request.deviceId)}/metrics`,
        urlParams: urlParams(
          ['start_date', request.startDate],
        ),
        signal: options?.signal,
      },
      unmarshalGetDeviceMetricsResponse,
    )

  
  protected pageOfListRoutes = (request: Readonly<ListRoutesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListRoutesResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes`,
        urlParams: urlParams(
          ['hub_id', request.hubId],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListRoutesResponse,
    )
  
  /**
   * List routes. List all routes in the specified region. By default, returned routes are ordered by creation date in ascending order, though this can be modified via the `order_by` field.
   *
   * @param request - The request {@link ListRoutesRequest}
   * @returns A Promise of ListRoutesResponse
   */
  listRoutes = (request: Readonly<ListRoutesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('routes', this.pageOfListRoutes, request, options)

  
  /**
   * Create a route. Multiple kinds of routes can be created, such as:
- Database Route
  Create a route that will record subscribed MQTT messages into your database.
  <b>You need to manage the database by yourself</b>.
- REST Route.
  Create a route that will call a REST API on received subscribed MQTT messages.
- Amazon S3 Routes.
  Create a route that will put subscribed MQTT messages into an Object Storage bucket.
  You need to create the bucket yourself and grant write access.
  Granting can be done with s3cmd (`s3cmd setacl s3://<my-bucket> --acl-grant=write:555c69c3-87d0-4bf8-80f1-99a2f757d031:555c69c3-87d0-4bf8-80f1-99a2f757d031`).
   *
   * @param request - The request {@link CreateRouteRequest}
   * @returns A Promise of Route
   */
  createRoute = (request: Readonly<CreateRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalCreateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Update a route. Update the parameters of an existing route, specified by its route ID.
   *
   * @param request - The request {@link UpdateRouteRequest}
   * @returns A Promise of Route
   */
  updateRoute = (request: Readonly<UpdateRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalUpdateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Get a route. Get information for a particular route, specified by the route ID. The response returns full details of the route, including its type, the topic it subscribes to and its configuration.
   *
   * @param request - The request {@link GetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<GetRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
      unmarshalRoute,
    )

  
  /**
   * Delete a route. Delete an existing route, specified by its route ID. Deleting a route is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<DeleteRouteRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/routes/${validatePathParam('routeId', request.routeId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListNetworks = (request: Readonly<ListNetworksRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListNetworksResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/networks`,
        urlParams: urlParams(
          ['hub_id', request.hubId],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['topic_prefix', request.topicPrefix],
        ),
        signal: options?.signal,
      },
      unmarshalListNetworksResponse,
    )
  
  /**
   * List the networks.
   *
   * @param request - The request {@link ListNetworksRequest}
   * @returns A Promise of ListNetworksResponse
   */
  listNetworks = (request: Readonly<ListNetworksRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('networks', this.pageOfListNetworks, request, options)

  
  /**
   * Create a new network. Create a new network for an existing hub. Beside the default network, you can add networks for different data providers. Possible network types are Sigfox and REST.
   *
   * @param request - The request {@link CreateNetworkRequest}
   * @returns A Promise of CreateNetworkResponse
   */
  createNetwork = (request: Readonly<CreateNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateNetworkResponse>(
      {
        body: JSON.stringify(
          marshalCreateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/networks`,
        signal: options?.signal,
      },
      unmarshalCreateNetworkResponse,
    )

  
  /**
   * Retrieve a specific network. Retrieve an existing network, specified by its network ID. The response returns full details of the network, including its type, the topic prefix and its endpoint.
   *
   * @param request - The request {@link GetNetworkRequest}
   * @returns A Promise of Network
   */
  getNetwork = (request: Readonly<GetNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<Network>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/networks/${validatePathParam('networkId', request.networkId)}`,
        signal: options?.signal,
      },
      unmarshalNetwork,
    )

  
  /**
   * Delete a Network. Delete an existing network, specified by its network ID. Deleting a network is permanent, and cannot be undone.
   *
   * @param request - The request {@link DeleteNetworkRequest}
   */
  deleteNetwork = (request: Readonly<DeleteNetworkRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/networks/${validatePathParam('networkId', request.networkId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * BETA - Get a Cloud Twin Document.
   *
   * @param request - The request {@link GetTwinDocumentRequest}
   * @returns A Promise of TwinDocument
   */
  getTwinDocument = (request: Readonly<GetTwinDocumentRequest>, options?: RequestOptions) =>
    this.client.fetch<TwinDocument>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/twins/${validatePathParam('twinId', request.twinId)}/documents/${validatePathParam('documentName', request.documentName)}`,
        signal: options?.signal,
      },
      unmarshalTwinDocument,
    )

  
  /**
   * BETA - Update a Cloud Twin Document.
   *
   * @param request - The request {@link PutTwinDocumentRequest}
   * @returns A Promise of TwinDocument
   */
  putTwinDocument = (request: Readonly<PutTwinDocumentRequest>, options?: RequestOptions) =>
    this.client.fetch<TwinDocument>(
      {
        body: JSON.stringify(
          marshalPutTwinDocumentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/twins/${validatePathParam('twinId', request.twinId)}/documents/${validatePathParam('documentName', request.documentName)}`,
        signal: options?.signal,
      },
      unmarshalTwinDocument,
    )

  
  /**
   * BETA - Patch a Cloud Twin Document.
   *
   * @param request - The request {@link PatchTwinDocumentRequest}
   * @returns A Promise of TwinDocument
   */
  patchTwinDocument = (request: Readonly<PatchTwinDocumentRequest>, options?: RequestOptions) =>
    this.client.fetch<TwinDocument>(
      {
        body: JSON.stringify(
          marshalPatchTwinDocumentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/twins/${validatePathParam('twinId', request.twinId)}/documents/${validatePathParam('documentName', request.documentName)}`,
        signal: options?.signal,
      },
      unmarshalTwinDocument,
    )

  
  /**
   * BETA - Delete a Cloud Twin Document.
   *
   * @param request - The request {@link DeleteTwinDocumentRequest}
   */
  deleteTwinDocument = (request: Readonly<DeleteTwinDocumentRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/twins/${validatePathParam('twinId', request.twinId)}/documents/${validatePathParam('documentName', request.documentName)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * BETA - List the documents of a Cloud Twin.
   *
   * @param request - The request {@link ListTwinDocumentsRequest}
   * @returns A Promise of ListTwinDocumentsResponse
   */
  listTwinDocuments = (request: Readonly<ListTwinDocumentsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListTwinDocumentsResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/twins/${validatePathParam('twinId', request.twinId)}`,
        signal: options?.signal,
      },
      unmarshalListTwinDocumentsResponse,
    )

  
  /**
   * BETA - Delete all the documents of a Cloud Twin.
   *
   * @param request - The request {@link DeleteTwinDocumentsRequest}
   */
  deleteTwinDocuments = (request: Readonly<DeleteTwinDocumentsRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/iot/v1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/twins/${validatePathParam('twinId', request.twinId)}`,
        signal: options?.signal,
      },
    )

  
}

