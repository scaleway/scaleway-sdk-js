// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, WaitForOptions } from '../../../bridge'
import { HUB_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalCreateDeviceRequest,
  marshalCreateHubRequest,
  marshalCreateNetworkRequest,
  marshalCreateRouteRequest,
  marshalPatchTwinDocumentRequest,
  marshalPutTwinDocumentRequest,
  marshalSetDeviceCertificateRequest,
  marshalSetHubCARequest,
  marshalUpdateDeviceRequest,
  marshalUpdateHubRequest,
  marshalUpdateRouteRequest,
  unmarshalCreateDeviceResponse,
  unmarshalCreateNetworkResponse,
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
  unmarshalRenewDeviceCertificateResponse,
  unmarshalRoute,
  unmarshalSetDeviceCertificateResponse,
  unmarshalTwinDocument,
} from './marshalling.gen'
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
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * IoT API.
 *
 * This API allows you to manage IoT hubs and devices.
 */
export class IotV1GenAPI extends API {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par']

  protected pageOfListHubs = (request: Readonly<ListHubsRequest> = {}) =>
    this.client.fetch<ListHubsResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy ?? 'name_asc'],
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
        ),
      },
      unmarshalListHubsResponse,
    )

  /**
   * List hubs
   *
   * @param request - The request {@link ListHubsRequest}
   * @returns A Promise of ListHubsResponse
   */
  listHubs = (request: Readonly<ListHubsRequest> = {}) =>
    enrichForPagination('hubs', this.pageOfListHubs, request)

  /**
   * Create a hub
   *
   * @param request - The request {@link CreateHubRequest}
   * @returns A Promise of Hub
   */
  createHub = (request: Readonly<CreateHubRequest>) =>
    this.client.fetch<Hub>(
      {
        body: JSON.stringify(
          marshalCreateHubRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs`,
      },
      unmarshalHub,
    )

  /**
   * Get a hub
   *
   * @param request - The request {@link GetHubRequest}
   * @returns A Promise of Hub
   */
  getHub = (request: Readonly<GetHubRequest>) =>
    this.client.fetch<Hub>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs/${validatePathParam('hubId', request.hubId)}`,
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
      options?.stop ??
        (res => Promise.resolve(!HUB_TRANSIENT_STATUSES.includes(res.status))),
      this.getHub,
      request,
      options,
    )

  /**
   * Update a hub
   *
   * @param request - The request {@link UpdateHubRequest}
   * @returns A Promise of Hub
   */
  updateHub = (request: Readonly<UpdateHubRequest>) =>
    this.client.fetch<Hub>(
      {
        body: JSON.stringify(
          marshalUpdateHubRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs/${validatePathParam('hubId', request.hubId)}`,
      },
      unmarshalHub,
    )

  /**
   * Enable a hub
   *
   * @param request - The request {@link EnableHubRequest}
   * @returns A Promise of Hub
   */
  enableHub = (request: Readonly<EnableHubRequest>) =>
    this.client.fetch<Hub>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs/${validatePathParam('hubId', request.hubId)}/enable`,
      },
      unmarshalHub,
    )

  /**
   * Disable a hub
   *
   * @param request - The request {@link DisableHubRequest}
   * @returns A Promise of Hub
   */
  disableHub = (request: Readonly<DisableHubRequest>) =>
    this.client.fetch<Hub>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs/${validatePathParam('hubId', request.hubId)}/disable`,
      },
      unmarshalHub,
    )

  /**
   * Delete a hub
   *
   * @param request - The request {@link DeleteHubRequest}
   */
  deleteHub = (request: Readonly<DeleteHubRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iot/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/hubs/${validatePathParam('hubId', request.hubId)}`,
      urlParams: urlParams(['delete_devices', request.deleteDevices]),
    })

  /**
   * Get a hub's metrics
   *
   * @param request - The request {@link GetHubMetricsRequest}
   * @returns A Promise of GetHubMetricsResponse
   */
  getHubMetrics = (request: Readonly<GetHubMetricsRequest>) =>
    this.client.fetch<GetHubMetricsResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs/${validatePathParam('hubId', request.hubId)}/metrics`,
        urlParams: urlParams(['start_date', request.startDate]),
      },
      unmarshalGetHubMetricsResponse,
    )

  /**
   * Set the certificate authority of a hub
   *
   * @param request - The request {@link SetHubCARequest}
   * @returns A Promise of Hub
   */
  setHubCA = (request: Readonly<SetHubCARequest>) =>
    this.client.fetch<Hub>(
      {
        body: JSON.stringify(
          marshalSetHubCARequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs/${validatePathParam('hubId', request.hubId)}/ca`,
      },
      unmarshalHub,
    )

  /**
   * Get the certificate authority of a hub
   *
   * @param request - The request {@link GetHubCARequest}
   * @returns A Promise of GetHubCAResponse
   */
  getHubCA = (request: Readonly<GetHubCARequest>) =>
    this.client.fetch<GetHubCAResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/hubs/${validatePathParam('hubId', request.hubId)}/ca`,
      },
      unmarshalGetHubCAResponse,
    )

  protected pageOfListDevices = (request: Readonly<ListDevicesRequest> = {}) =>
    this.client.fetch<ListDevicesResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices`,
        urlParams: urlParams(
          ['allow_insecure', request.allowInsecure],
          ['hub_id', request.hubId],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'name_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['status', request.status ?? 'unknown'],
        ),
      },
      unmarshalListDevicesResponse,
    )

  /**
   * List devices
   *
   * @param request - The request {@link ListDevicesRequest}
   * @returns A Promise of ListDevicesResponse
   */
  listDevices = (request: Readonly<ListDevicesRequest> = {}) =>
    enrichForPagination('devices', this.pageOfListDevices, request)

  /**
   * Add a device
   *
   * @param request - The request {@link CreateDeviceRequest}
   * @returns A Promise of CreateDeviceResponse
   */
  createDevice = (request: Readonly<CreateDeviceRequest>) =>
    this.client.fetch<CreateDeviceResponse>(
      {
        body: JSON.stringify(
          marshalCreateDeviceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices`,
      },
      unmarshalCreateDeviceResponse,
    )

  /**
   * Get a device
   *
   * @param request - The request {@link GetDeviceRequest}
   * @returns A Promise of Device
   */
  getDevice = (request: Readonly<GetDeviceRequest>) =>
    this.client.fetch<Device>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices/${validatePathParam('deviceId', request.deviceId)}`,
      },
      unmarshalDevice,
    )

  /**
   * Update a device
   *
   * @param request - The request {@link UpdateDeviceRequest}
   * @returns A Promise of Device
   */
  updateDevice = (request: Readonly<UpdateDeviceRequest>) =>
    this.client.fetch<Device>(
      {
        body: JSON.stringify(
          marshalUpdateDeviceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices/${validatePathParam('deviceId', request.deviceId)}`,
      },
      unmarshalDevice,
    )

  /**
   * Enable a device
   *
   * @param request - The request {@link EnableDeviceRequest}
   * @returns A Promise of Device
   */
  enableDevice = (request: Readonly<EnableDeviceRequest>) =>
    this.client.fetch<Device>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices/${validatePathParam('deviceId', request.deviceId)}/enable`,
      },
      unmarshalDevice,
    )

  /**
   * Disable a device
   *
   * @param request - The request {@link DisableDeviceRequest}
   * @returns A Promise of Device
   */
  disableDevice = (request: Readonly<DisableDeviceRequest>) =>
    this.client.fetch<Device>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices/${validatePathParam('deviceId', request.deviceId)}/disable`,
      },
      unmarshalDevice,
    )

  /**
   * Renew a device certificate
   *
   * @param request - The request {@link RenewDeviceCertificateRequest}
   * @returns A Promise of RenewDeviceCertificateResponse
   */
  renewDeviceCertificate = (request: Readonly<RenewDeviceCertificateRequest>) =>
    this.client.fetch<RenewDeviceCertificateResponse>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices/${validatePathParam(
          'deviceId',
          request.deviceId,
        )}/renew-certificate`,
      },
      unmarshalRenewDeviceCertificateResponse,
    )

  /**
   * Set a custom certificate on a device
   *
   * @param request - The request {@link SetDeviceCertificateRequest}
   * @returns A Promise of SetDeviceCertificateResponse
   */
  setDeviceCertificate = (request: Readonly<SetDeviceCertificateRequest>) =>
    this.client.fetch<SetDeviceCertificateResponse>(
      {
        body: JSON.stringify(
          marshalSetDeviceCertificateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices/${validatePathParam(
          'deviceId',
          request.deviceId,
        )}/certificate`,
      },
      unmarshalSetDeviceCertificateResponse,
    )

  /**
   * Get a device's certificate
   *
   * @param request - The request {@link GetDeviceCertificateRequest}
   * @returns A Promise of GetDeviceCertificateResponse
   */
  getDeviceCertificate = (request: Readonly<GetDeviceCertificateRequest>) =>
    this.client.fetch<GetDeviceCertificateResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices/${validatePathParam(
          'deviceId',
          request.deviceId,
        )}/certificate`,
      },
      unmarshalGetDeviceCertificateResponse,
    )

  /**
   * Remove a device
   *
   * @param request - The request {@link DeleteDeviceRequest}
   */
  deleteDevice = (request: Readonly<DeleteDeviceRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iot/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/devices/${validatePathParam('deviceId', request.deviceId)}`,
    })

  /**
   * Get a device's metrics
   *
   * @param request - The request {@link GetDeviceMetricsRequest}
   * @returns A Promise of GetDeviceMetricsResponse
   */
  getDeviceMetrics = (request: Readonly<GetDeviceMetricsRequest>) =>
    this.client.fetch<GetDeviceMetricsResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/devices/${validatePathParam('deviceId', request.deviceId)}/metrics`,
        urlParams: urlParams(['start_date', request.startDate]),
      },
      unmarshalGetDeviceMetricsResponse,
    )

  protected pageOfListRoutes = (request: Readonly<ListRoutesRequest> = {}) =>
    this.client.fetch<ListRoutesResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/routes`,
        urlParams: urlParams(
          ['hub_id', request.hubId],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'name_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListRoutesResponse,
    )

  /**
   * List routes
   *
   * @param request - The request {@link ListRoutesRequest}
   * @returns A Promise of ListRoutesResponse
   */
  listRoutes = (request: Readonly<ListRoutesRequest> = {}) =>
    enrichForPagination('routes', this.pageOfListRoutes, request)

  /**
   * Multiple route kinds can be created:
   *
   * - Database Route. Create a route that will record subscribed MQTT messages
   *   into your database. <b>You need to manage the database by yourself</b>.
   * - REST Route. Create a route that will call a REST API on received subscribed
   *   MQTT messages.
   * - S3 Routes. Create a route that will put subscribed MQTT messages into an S3
   *   bucket. You need to create the bucket yourself and grant us write access.
   *   The grant can be done with s3cmd (`s3cmd setacl s3://&lt;my-bucket&gt;
   *   --acl-grant=write:555c69c3-87d0-4bf8-80f1-99a2f757d031:555c69c3-87d0-4bf8-80f1-99a2f757d031`).
   *
   * @param request - The request {@link CreateRouteRequest}
   * @returns A Promise of Route
   */
  createRoute = (request: Readonly<CreateRouteRequest>) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalCreateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/routes`,
      },
      unmarshalRoute,
    )

  /**
   * Update a route
   *
   * @param request - The request {@link UpdateRouteRequest}
   * @returns A Promise of Route
   */
  updateRoute = (request: Readonly<UpdateRouteRequest>) =>
    this.client.fetch<Route>(
      {
        body: JSON.stringify(
          marshalUpdateRouteRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Get a route
   *
   * @param request - The request {@link GetRouteRequest}
   * @returns A Promise of Route
   */
  getRoute = (request: Readonly<GetRouteRequest>) =>
    this.client.fetch<Route>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/routes/${validatePathParam('routeId', request.routeId)}`,
      },
      unmarshalRoute,
    )

  /**
   * Delete a route
   *
   * @param request - The request {@link DeleteRouteRequest}
   */
  deleteRoute = (request: Readonly<DeleteRouteRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iot/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/routes/${validatePathParam('routeId', request.routeId)}`,
    })

  protected pageOfListNetworks = (
    request: Readonly<ListNetworksRequest> = {},
  ) =>
    this.client.fetch<ListNetworksResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/networks`,
        urlParams: urlParams(
          ['hub_id', request.hubId],
          ['name', request.name],
          ['order_by', request.orderBy ?? 'name_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['topic_prefix', request.topicPrefix],
        ),
      },
      unmarshalListNetworksResponse,
    )

  /**
   * List the Networks
   *
   * @param request - The request {@link ListNetworksRequest}
   * @returns A Promise of ListNetworksResponse
   */
  listNetworks = (request: Readonly<ListNetworksRequest> = {}) =>
    enrichForPagination('networks', this.pageOfListNetworks, request)

  /**
   * Create a new Network
   *
   * @param request - The request {@link CreateNetworkRequest}
   * @returns A Promise of CreateNetworkResponse
   */
  createNetwork = (request: Readonly<CreateNetworkRequest>) =>
    this.client.fetch<CreateNetworkResponse>(
      {
        body: JSON.stringify(
          marshalCreateNetworkRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/networks`,
      },
      unmarshalCreateNetworkResponse,
    )

  /**
   * Retrieve a specific Network
   *
   * @param request - The request {@link GetNetworkRequest}
   * @returns A Promise of Network
   */
  getNetwork = (request: Readonly<GetNetworkRequest>) =>
    this.client.fetch<Network>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/networks/${validatePathParam('networkId', request.networkId)}`,
      },
      unmarshalNetwork,
    )

  /**
   * Delete a Network
   *
   * @param request - The request {@link DeleteNetworkRequest}
   */
  deleteNetwork = (request: Readonly<DeleteNetworkRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iot/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/networks/${validatePathParam('networkId', request.networkId)}`,
    })

  /**
   * BETA - Get a Cloud Twin Document
   *
   * @param request - The request {@link GetTwinDocumentRequest}
   * @returns A Promise of TwinDocument
   */
  getTwinDocument = (request: Readonly<GetTwinDocumentRequest>) =>
    this.client.fetch<TwinDocument>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/twins/${validatePathParam(
          'twinId',
          request.twinId,
        )}/documents/${validatePathParam(
          'documentName',
          request.documentName,
        )}`,
      },
      unmarshalTwinDocument,
    )

  /**
   * BETA - Update a Cloud Twin Document
   *
   * @param request - The request {@link PutTwinDocumentRequest}
   * @returns A Promise of TwinDocument
   */
  putTwinDocument = (request: Readonly<PutTwinDocumentRequest>) =>
    this.client.fetch<TwinDocument>(
      {
        body: JSON.stringify(
          marshalPutTwinDocumentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/twins/${validatePathParam(
          'twinId',
          request.twinId,
        )}/documents/${validatePathParam(
          'documentName',
          request.documentName,
        )}`,
      },
      unmarshalTwinDocument,
    )

  /**
   * BETA - Patch a Cloud Twin Document
   *
   * @param request - The request {@link PatchTwinDocumentRequest}
   * @returns A Promise of TwinDocument
   */
  patchTwinDocument = (request: Readonly<PatchTwinDocumentRequest>) =>
    this.client.fetch<TwinDocument>(
      {
        body: JSON.stringify(
          marshalPatchTwinDocumentRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/twins/${validatePathParam(
          'twinId',
          request.twinId,
        )}/documents/${validatePathParam(
          'documentName',
          request.documentName,
        )}`,
      },
      unmarshalTwinDocument,
    )

  /**
   * BETA - Delete a Cloud Twin Document
   *
   * @param request - The request {@link DeleteTwinDocumentRequest}
   */
  deleteTwinDocument = (request: Readonly<DeleteTwinDocumentRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iot/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/twins/${validatePathParam(
        'twinId',
        request.twinId,
      )}/documents/${validatePathParam('documentName', request.documentName)}`,
    })

  /**
   * BETA - List the documents of a Cloud Twin
   *
   * @param request - The request {@link ListTwinDocumentsRequest}
   * @returns A Promise of ListTwinDocumentsResponse
   */
  listTwinDocuments = (request: Readonly<ListTwinDocumentsRequest>) =>
    this.client.fetch<ListTwinDocumentsResponse>(
      {
        method: 'GET',
        path: `/iot/v1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/twins/${validatePathParam('twinId', request.twinId)}`,
      },
      unmarshalListTwinDocumentsResponse,
    )

  /**
   * BETA - Delete all the documents of a Cloud Twin
   *
   * @param request - The request {@link DeleteTwinDocumentsRequest}
   */
  deleteTwinDocuments = (request: Readonly<DeleteTwinDocumentsRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/iot/v1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/twins/${validatePathParam('twinId', request.twinId)}`,
    })
}
