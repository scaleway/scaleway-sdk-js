// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Zone } from '../../../bridge'
import {
  marshalCreateImageRequest,
  marshalCreateIpRequest,
  marshalCreatePlacementGroupRequest,
  marshalCreatePrivateNICRequest,
  marshalCreateSecurityGroupRequest,
  marshalCreateSecurityGroupRuleRequest,
  marshalCreateServerRequest,
  marshalCreateSnapshotRequest,
  marshalCreateVolumeRequest,
  marshalExportSnapshotRequest,
  marshalServerActionRequest,
  marshalSetImageRequest,
  marshalSetPlacementGroupRequest,
  marshalSetPlacementGroupServersRequest,
  marshalSetSecurityGroupRequest,
  marshalSetSecurityGroupRuleRequest,
  marshalSetSecurityGroupRulesRequest,
  marshalSetServerRequest,
  marshalSetSnapshotRequest,
  marshalUpdateIpRequest,
  marshalUpdatePlacementGroupRequest,
  marshalUpdatePlacementGroupServersRequest,
  marshalUpdateServerRequest,
  marshalUpdateVolumeRequest,
  unmarshalCreateImageResponse,
  unmarshalCreateIpResponse,
  unmarshalCreatePlacementGroupResponse,
  unmarshalCreatePrivateNICResponse,
  unmarshalCreateSecurityGroupResponse,
  unmarshalCreateSecurityGroupRuleResponse,
  unmarshalCreateServerResponse,
  unmarshalCreateSnapshotResponse,
  unmarshalCreateVolumeResponse,
  unmarshalExportSnapshotResponse,
  unmarshalGetBootscriptResponse,
  unmarshalGetDashboardResponse,
  unmarshalGetImageResponse,
  unmarshalGetIpResponse,
  unmarshalGetPlacementGroupResponse,
  unmarshalGetPlacementGroupServersResponse,
  unmarshalGetPrivateNICResponse,
  unmarshalGetSecurityGroupResponse,
  unmarshalGetSecurityGroupRuleResponse,
  unmarshalGetServerResponse,
  unmarshalGetServerTypesAvailabilityResponse,
  unmarshalGetSnapshotResponse,
  unmarshalGetVolumeResponse,
  unmarshalListBootscriptsResponse,
  unmarshalListImagesResponse,
  unmarshalListIpsResponse,
  unmarshalListPlacementGroupsResponse,
  unmarshalListPrivateNICsResponse,
  unmarshalListSecurityGroupRulesResponse,
  unmarshalListSecurityGroupsResponse,
  unmarshalListServerActionsResponse,
  unmarshalListServerUserDataResponse,
  unmarshalListServersResponse,
  unmarshalListServersTypesResponse,
  unmarshalListSnapshotsResponse,
  unmarshalListVolumesResponse,
  unmarshalListVolumesTypesResponse,
  unmarshalServerActionResponse,
  unmarshalSetImageResponse,
  unmarshalSetPlacementGroupResponse,
  unmarshalSetPlacementGroupServersResponse,
  unmarshalSetSecurityGroupResponse,
  unmarshalSetSecurityGroupRuleResponse,
  unmarshalSetSecurityGroupRulesResponse,
  unmarshalSetServerResponse,
  unmarshalSetSnapshotResponse,
  unmarshalUpdateIpResponse,
  unmarshalUpdatePlacementGroupResponse,
  unmarshalUpdatePlacementGroupServersResponse,
  unmarshalUpdateServerResponse,
  unmarshalUpdateVolumeResponse,
} from './marshalling.gen'
import type {
  CreateImageRequest,
  CreateImageResponse,
  CreateIpRequest,
  CreateIpResponse,
  CreatePlacementGroupRequest,
  CreatePlacementGroupResponse,
  CreatePrivateNICRequest,
  CreatePrivateNICResponse,
  CreateSecurityGroupRequest,
  CreateSecurityGroupResponse,
  CreateSecurityGroupRuleRequest,
  CreateSecurityGroupRuleResponse,
  CreateServerResponse,
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateVolumeRequest,
  CreateVolumeResponse,
  DeleteImageRequest,
  DeleteIpRequest,
  DeletePlacementGroupRequest,
  DeletePrivateNICRequest,
  DeleteSecurityGroupRequest,
  DeleteSecurityGroupRuleRequest,
  DeleteServerRequest,
  DeleteServerUserDataRequest,
  DeleteSnapshotRequest,
  DeleteVolumeRequest,
  ExportSnapshotRequest,
  ExportSnapshotResponse,
  GetBootscriptRequest,
  GetBootscriptResponse,
  GetDashboardRequest,
  GetDashboardResponse,
  GetImageRequest,
  GetImageResponse,
  GetIpRequest,
  GetIpResponse,
  GetPlacementGroupRequest,
  GetPlacementGroupResponse,
  GetPlacementGroupServersRequest,
  GetPlacementGroupServersResponse,
  GetPrivateNICRequest,
  GetPrivateNICResponse,
  GetSecurityGroupRequest,
  GetSecurityGroupResponse,
  GetSecurityGroupRuleRequest,
  GetSecurityGroupRuleResponse,
  GetServerRequest,
  GetServerResponse,
  GetServerTypesAvailabilityRequest,
  GetServerTypesAvailabilityResponse,
  GetSnapshotRequest,
  GetSnapshotResponse,
  GetVolumeRequest,
  GetVolumeResponse,
  ListBootscriptsRequest,
  ListBootscriptsResponse,
  ListDefaultSecurityGroupRulesRequest,
  ListImagesRequest,
  ListImagesResponse,
  ListIpsRequest,
  ListIpsResponse,
  ListPlacementGroupsRequest,
  ListPlacementGroupsResponse,
  ListPrivateNICsRequest,
  ListPrivateNICsResponse,
  ListSecurityGroupRulesRequest,
  ListSecurityGroupRulesResponse,
  ListSecurityGroupsRequest,
  ListSecurityGroupsResponse,
  ListServerActionsRequest,
  ListServerActionsResponse,
  ListServerUserDataRequest,
  ListServerUserDataResponse,
  ListServersRequest,
  ListServersResponse,
  ListServersTypesRequest,
  ListServersTypesResponse,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListVolumesRequest,
  ListVolumesResponse,
  ListVolumesTypesRequest,
  ListVolumesTypesResponse,
  ServerActionRequest,
  ServerActionResponse,
  SetPlacementGroupRequest,
  SetPlacementGroupResponse,
  SetPlacementGroupServersRequest,
  SetPlacementGroupServersResponse,
  SetSecurityGroupRulesRequest,
  SetSecurityGroupRulesResponse,
  UpdateIpRequest,
  UpdateIpResponse,
  UpdatePlacementGroupRequest,
  UpdatePlacementGroupResponse,
  UpdatePlacementGroupServersRequest,
  UpdatePlacementGroupServersResponse,
  UpdateServerResponse,
  UpdateVolumeRequest,
  UpdateVolumeResponse,
} from './types.gen'
import type {
  CreateServerRequest,
  SetImageRequest,
  SetImageResponse,
  SetSecurityGroupRequest,
  SetSecurityGroupResponse,
  SetSecurityGroupRuleRequest,
  SetSecurityGroupRuleResponse,
  SetServerRequest,
  SetServerResponse,
  SetSnapshotRequest,
  SetSnapshotResponse,
  UpdateServerRequest,
} from './types.private.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** Instance API. */
export class API extends ParentAPI {
  /** Lists the available zones of the API. */
  public static readonly LOCALITIES: Zone[] = [
    'fr-par-1',
    'fr-par-2',
    'fr-par-3',
    'nl-ams-1',
    'nl-ams-2',
    'pl-waw-1',
    'pl-waw-2',
  ]

  /**
   * Get availability for all server types.
   *
   * @param request - The request {@link GetServerTypesAvailabilityRequest}
   * @returns A Promise of GetServerTypesAvailabilityResponse
   */
  getServerTypesAvailability = (
    request: Readonly<GetServerTypesAvailabilityRequest> = {},
  ) =>
    this.client.fetch<GetServerTypesAvailabilityResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/products/servers/availability`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalGetServerTypesAvailabilityResponse,
    )

  /**
   * Get server types technical details.
   *
   * @param request - The request {@link ListServersTypesRequest}
   * @returns A Promise of ListServersTypesResponse
   */
  listServersTypes = (request: Readonly<ListServersTypesRequest> = {}) =>
    this.client.fetch<ListServersTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/products/servers`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListServersTypesResponse,
    )

  /**
   * Get volumes technical details.
   *
   * @param request - The request {@link ListVolumesTypesRequest}
   * @returns A Promise of ListVolumesTypesResponse
   */
  listVolumesTypes = (request: Readonly<ListVolumesTypesRequest> = {}) =>
    this.client.fetch<ListVolumesTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/products/volumes`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListVolumesTypesResponse,
    )

  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers`,
        urlParams: urlParams(
          ['commercial_type', request.commercialType],
          ['name', request.name],
          ['order', request.order],
          [
            'organization',
            request.organization ?? this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['private_ip', request.privateIp],
          ['private_network', request.privateNetwork],
          ['project', request.project ?? this.client.settings.defaultProjectId],
          ['state', request.state],
          [
            'tags',
            request.tags && request.tags.length > 0
              ? request.tags.join(',')
              : undefined,
          ],
          ['without_ip', request.withoutIp],
        ),
      },
      unmarshalListServersResponse,
    )

  /**
   * List all servers
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}) =>
    enrichForPagination('servers', this.pageOfListServers, request)

  protected _createServer = (request: Readonly<CreateServerRequest>) =>
    this.client.fetch<CreateServerResponse>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers`,
      },
      unmarshalCreateServerResponse,
    )

  /**
   * Delete a server with the given ID.
   *
   * @param request - The request {@link DeleteServerRequest}
   */
  deleteServer = (request: Readonly<DeleteServerRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/servers/${validatePathParam('serverId', request.serverId)}`,
    })

  /**
   * Get the details of a specified Server.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of GetServerResponse
   */
  getServer = (request: Readonly<GetServerRequest>) =>
    this.client.fetch<GetServerResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalGetServerResponse,
    )

  protected _setServer = (request: Readonly<SetServerRequest>) =>
    this.client.fetch<SetServerResponse>(
      {
        body: JSON.stringify(
          marshalSetServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('id', request.id)}`,
      },
      unmarshalSetServerResponse,
    )

  protected _updateServer = (request: Readonly<UpdateServerRequest>) =>
    this.client.fetch<UpdateServerResponse>(
      {
        body: JSON.stringify(
          marshalUpdateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalUpdateServerResponse,
    )

  /**
   * List all actions that can currently be performed on a server.
   *
   * @param request - The request {@link ListServerActionsRequest}
   * @returns A Promise of ListServerActionsResponse
   */
  listServerActions = (request: Readonly<ListServerActionsRequest>) =>
    this.client.fetch<ListServerActionsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/action`,
      },
      unmarshalListServerActionsResponse,
    )

  /**
   * Perform power related actions on a server. Be wary that when terminating a
   * server, all the attached volumes (local _and_ block storage) are deleted.
   * So, if you want to keep your local volumes, you must use the `archive`
   * action instead of `terminate`. And if you want to keep block-storage
   * volumes, **you must** detach it beforehand you issue the `terminate` call.
   * For more information, read the [Volumes](#volumes-7e8a39) documentation.
   *
   * @param request - The request {@link ServerActionRequest}
   * @returns A Promise of ServerActionResponse
   */
  serverAction = (request: Readonly<ServerActionRequest>) =>
    this.client.fetch<ServerActionResponse>(
      {
        body: JSON.stringify(
          marshalServerActionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam('serverId', request.serverId)}/action`,
      },
      unmarshalServerActionResponse,
    )

  /**
   * List all user data keys registered on a given server.
   *
   * @param request - The request {@link ListServerUserDataRequest}
   * @returns A Promise of ListServerUserDataResponse
   */
  listServerUserData = (request: Readonly<ListServerUserDataRequest>) =>
    this.client.fetch<ListServerUserDataResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/user_data`,
      },
      unmarshalListServerUserDataResponse,
    )

  /**
   * Delete the given key from a server user data.
   *
   * @param request - The request {@link DeleteServerUserDataRequest}
   */
  deleteServerUserData = (request: Readonly<DeleteServerUserDataRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/servers/${validatePathParam(
        'serverId',
        request.serverId,
      )}/user_data/${validatePathParam('key', request.key)}`,
    })

  protected pageOfListImages = (request: Readonly<ListImagesRequest> = {}) =>
    this.client.fetch<ListImagesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/images`,
        urlParams: urlParams(
          ['arch', request.arch],
          ['name', request.name],
          [
            'organization',
            request.organization ?? this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project ?? this.client.settings.defaultProjectId],
          ['public', request.public],
          ['tags', request.tags],
        ),
      },
      unmarshalListImagesResponse,
    )

  /**
   * List all images available in an account.
   *
   * @param request - The request {@link ListImagesRequest}
   * @returns A Promise of ListImagesResponse
   */
  listImages = (request: Readonly<ListImagesRequest> = {}) =>
    enrichForPagination('images', this.pageOfListImages, request)

  /**
   * Get details of an image with the given ID.
   *
   * @param request - The request {@link GetImageRequest}
   * @returns A Promise of GetImageResponse
   */
  getImage = (request: Readonly<GetImageRequest>) =>
    this.client.fetch<GetImageResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/images/${validatePathParam('imageId', request.imageId)}`,
      },
      unmarshalGetImageResponse,
    )

  /**
   * Create an instance image
   *
   * @param request - The request {@link CreateImageRequest}
   * @returns A Promise of CreateImageResponse
   */
  createImage = (request: Readonly<CreateImageRequest>) =>
    this.client.fetch<CreateImageResponse>(
      {
        body: JSON.stringify(
          marshalCreateImageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/images`,
      },
      unmarshalCreateImageResponse,
    )

  protected _setImage = (request: Readonly<SetImageRequest>) =>
    this.client.fetch<SetImageResponse>(
      {
        body: JSON.stringify(
          marshalSetImageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/images/${validatePathParam('id', request.id)}`,
      },
      unmarshalSetImageResponse,
    )

  /**
   * Delete the image with the given ID.
   *
   * @param request - The request {@link DeleteImageRequest}
   */
  deleteImage = (request: Readonly<DeleteImageRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/images/${validatePathParam('imageId', request.imageId)}`,
    })

  protected pageOfListSnapshots = (
    request: Readonly<ListSnapshotsRequest> = {},
  ) =>
    this.client.fetch<ListSnapshotsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/snapshots`,
        urlParams: urlParams(
          ['name', request.name],
          [
            'organization',
            request.organization ?? this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project ?? this.client.settings.defaultProjectId],
          ['tags', request.tags],
        ),
      },
      unmarshalListSnapshotsResponse,
    )

  /**
   * List snapshots
   *
   * @param request - The request {@link ListSnapshotsRequest}
   * @returns A Promise of ListSnapshotsResponse
   */
  listSnapshots = (request: Readonly<ListSnapshotsRequest> = {}) =>
    enrichForPagination('snapshots', this.pageOfListSnapshots, request)

  /**
   * Create a snapshot from a given volume or from a QCOW2 file
   *
   * @param request - The request {@link CreateSnapshotRequest}
   * @returns A Promise of CreateSnapshotResponse
   */
  createSnapshot = (request: Readonly<CreateSnapshotRequest> = {}) =>
    this.client.fetch<CreateSnapshotResponse>(
      {
        body: JSON.stringify(
          marshalCreateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/snapshots`,
      },
      unmarshalCreateSnapshotResponse,
    )

  /**
   * Get details of a snapshot with the given ID.
   *
   * @param request - The request {@link GetSnapshotRequest}
   * @returns A Promise of GetSnapshotResponse
   */
  getSnapshot = (request: Readonly<GetSnapshotRequest>) =>
    this.client.fetch<GetSnapshotResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalGetSnapshotResponse,
    )

  protected _setSnapshot = (request: Readonly<SetSnapshotRequest>) =>
    this.client.fetch<SetSnapshotResponse>(
      {
        body: JSON.stringify(
          marshalSetSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
      },
      unmarshalSetSnapshotResponse,
    )

  /**
   * Delete the snapshot with the given ID.
   *
   * @param request - The request {@link DeleteSnapshotRequest}
   */
  deleteSnapshot = (request: Readonly<DeleteSnapshotRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
    })

  /**
   * Export a snapshot to a given S3 bucket in the same region.
   *
   * @param request - The request {@link ExportSnapshotRequest}
   * @returns A Promise of ExportSnapshotResponse
   */
  exportSnapshot = (request: Readonly<ExportSnapshotRequest>) =>
    this.client.fetch<ExportSnapshotResponse>(
      {
        body: JSON.stringify(
          marshalExportSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/snapshots/${validatePathParam(
          'snapshotId',
          request.snapshotId,
        )}/export`,
      },
      unmarshalExportSnapshotResponse,
    )

  protected pageOfListVolumes = (request: Readonly<ListVolumesRequest> = {}) =>
    this.client.fetch<ListVolumesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/volumes`,
        urlParams: urlParams(
          ['name', request.name],
          [
            'organization',
            request.organization ?? this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project ?? this.client.settings.defaultProjectId],
          [
            'tags',
            request.tags && request.tags.length > 0
              ? request.tags.join(',')
              : undefined,
          ],
          ['volume_type', request.volumeType],
        ),
      },
      unmarshalListVolumesResponse,
    )

  /**
   * List volumes
   *
   * @param request - The request {@link ListVolumesRequest}
   * @returns A Promise of ListVolumesResponse
   */
  listVolumes = (request: Readonly<ListVolumesRequest> = {}) =>
    enrichForPagination('volumes', this.pageOfListVolumes, request)

  /**
   * Create a volume
   *
   * @param request - The request {@link CreateVolumeRequest}
   * @returns A Promise of CreateVolumeResponse
   */
  createVolume = (request: Readonly<CreateVolumeRequest> = {}) =>
    this.client.fetch<CreateVolumeResponse>(
      {
        body: JSON.stringify(
          marshalCreateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/volumes`,
      },
      unmarshalCreateVolumeResponse,
    )

  /**
   * Get details of a volume with the given ID.
   *
   * @param request - The request {@link GetVolumeRequest}
   * @returns A Promise of GetVolumeResponse
   */
  getVolume = (request: Readonly<GetVolumeRequest>) =>
    this.client.fetch<GetVolumeResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
      unmarshalGetVolumeResponse,
    )

  /**
   * Replace name and/or size properties of given ID volume with the given
   * value(s). Any volume name can be changed while, for now, only `b_ssd`
   * volume growing is supported.
   *
   * @param request - The request {@link UpdateVolumeRequest}
   * @returns A Promise of UpdateVolumeResponse
   */
  updateVolume = (request: Readonly<UpdateVolumeRequest>) =>
    this.client.fetch<UpdateVolumeResponse>(
      {
        body: JSON.stringify(
          marshalUpdateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
      unmarshalUpdateVolumeResponse,
    )

  /**
   * Delete the volume with the given ID.
   *
   * @param request - The request {@link DeleteVolumeRequest}
   */
  deleteVolume = (request: Readonly<DeleteVolumeRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
    })

  protected pageOfListSecurityGroups = (
    request: Readonly<ListSecurityGroupsRequest> = {},
  ) =>
    this.client.fetch<ListSecurityGroupsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups`,
        urlParams: urlParams(
          ['name', request.name],
          [
            'organization',
            request.organization ?? this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project ?? this.client.settings.defaultProjectId],
          ['project_default', request.projectDefault],
          [
            'tags',
            request.tags && request.tags.length > 0
              ? request.tags.join(',')
              : undefined,
          ],
        ),
      },
      unmarshalListSecurityGroupsResponse,
    )

  /**
   * List all security groups available in an account.
   *
   * @param request - The request {@link ListSecurityGroupsRequest}
   * @returns A Promise of ListSecurityGroupsResponse
   */
  listSecurityGroups = (request: Readonly<ListSecurityGroupsRequest> = {}) =>
    enrichForPagination(
      'securityGroups',
      this.pageOfListSecurityGroups,
      request,
    )

  /**
   * Create a security group
   *
   * @param request - The request {@link CreateSecurityGroupRequest}
   * @returns A Promise of CreateSecurityGroupResponse
   */
  createSecurityGroup = (request: Readonly<CreateSecurityGroupRequest>) =>
    this.client.fetch<CreateSecurityGroupResponse>(
      {
        body: JSON.stringify(
          marshalCreateSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups`,
      },
      unmarshalCreateSecurityGroupResponse,
    )

  /**
   * Get the details of a Security Group with the given ID.
   *
   * @param request - The request {@link GetSecurityGroupRequest}
   * @returns A Promise of GetSecurityGroupResponse
   */
  getSecurityGroup = (request: Readonly<GetSecurityGroupRequest>) =>
    this.client.fetch<GetSecurityGroupResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups/${validatePathParam(
          'securityGroupId',
          request.securityGroupId,
        )}`,
      },
      unmarshalGetSecurityGroupResponse,
    )

  /**
   * Delete a security group
   *
   * @param request - The request {@link DeleteSecurityGroupRequest}
   */
  deleteSecurityGroup = (request: Readonly<DeleteSecurityGroupRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/security_groups/${validatePathParam(
        'securityGroupId',
        request.securityGroupId,
      )}`,
    })

  protected _setSecurityGroup = (request: Readonly<SetSecurityGroupRequest>) =>
    this.client.fetch<SetSecurityGroupResponse>(
      {
        body: JSON.stringify(
          marshalSetSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups/${validatePathParam('id', request.id)}`,
      },
      unmarshalSetSecurityGroupResponse,
    )

  /**
   * Lists the default rules applied to all the security groups.
   *
   * @param request - The request {@link ListDefaultSecurityGroupRulesRequest}
   * @returns A Promise of ListSecurityGroupRulesResponse
   */
  listDefaultSecurityGroupRules = (
    request: Readonly<ListDefaultSecurityGroupRulesRequest> = {},
  ) =>
    this.client.fetch<ListSecurityGroupRulesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups/default/rules`,
      },
      unmarshalListSecurityGroupRulesResponse,
    )

  protected pageOfListSecurityGroupRules = (
    request: Readonly<ListSecurityGroupRulesRequest>,
  ) =>
    this.client.fetch<ListSecurityGroupRulesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups/${validatePathParam(
          'securityGroupId',
          request.securityGroupId,
        )}/rules`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListSecurityGroupRulesResponse,
    )

  /**
   * List rules
   *
   * @param request - The request {@link ListSecurityGroupRulesRequest}
   * @returns A Promise of ListSecurityGroupRulesResponse
   */
  listSecurityGroupRules = (request: Readonly<ListSecurityGroupRulesRequest>) =>
    enrichForPagination('rules', this.pageOfListSecurityGroupRules, request)

  /**
   * Create rule
   *
   * @param request - The request {@link CreateSecurityGroupRuleRequest}
   * @returns A Promise of CreateSecurityGroupRuleResponse
   */
  createSecurityGroupRule = (
    request: Readonly<CreateSecurityGroupRuleRequest>,
  ) =>
    this.client.fetch<CreateSecurityGroupRuleResponse>(
      {
        body: JSON.stringify(
          marshalCreateSecurityGroupRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups/${validatePathParam(
          'securityGroupId',
          request.securityGroupId,
        )}/rules`,
      },
      unmarshalCreateSecurityGroupRuleResponse,
    )

  /**
   * Replaces the rules of the security group with the rules provided. This
   * endpoint supports the update of existing rules, creation of new rules and
   * deletion of existing rules when they are not passed in the request.
   *
   * @param request - The request {@link SetSecurityGroupRulesRequest}
   * @returns A Promise of SetSecurityGroupRulesResponse
   */
  setSecurityGroupRules = (request: Readonly<SetSecurityGroupRulesRequest>) =>
    this.client.fetch<SetSecurityGroupRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetSecurityGroupRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups/${validatePathParam(
          'securityGroupId',
          request.securityGroupId,
        )}/rules`,
      },
      unmarshalSetSecurityGroupRulesResponse,
    )

  /**
   * Delete a security group rule with the given ID.
   *
   * @param request - The request {@link DeleteSecurityGroupRuleRequest}
   */
  deleteSecurityGroupRule = (
    request: Readonly<DeleteSecurityGroupRuleRequest>,
  ) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/security_groups/${validatePathParam(
        'securityGroupId',
        request.securityGroupId,
      )}/rules/${validatePathParam(
        'securityGroupRuleId',
        request.securityGroupRuleId,
      )}`,
    })

  /**
   * Get details of a security group rule with the given ID.
   *
   * @param request - The request {@link GetSecurityGroupRuleRequest}
   * @returns A Promise of GetSecurityGroupRuleResponse
   */
  getSecurityGroupRule = (request: Readonly<GetSecurityGroupRuleRequest>) =>
    this.client.fetch<GetSecurityGroupRuleResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups/${validatePathParam(
          'securityGroupId',
          request.securityGroupId,
        )}/rules/${validatePathParam(
          'securityGroupRuleId',
          request.securityGroupRuleId,
        )}`,
      },
      unmarshalGetSecurityGroupRuleResponse,
    )

  protected _setSecurityGroupRule = (
    request: Readonly<SetSecurityGroupRuleRequest>,
  ) =>
    this.client.fetch<SetSecurityGroupRuleResponse>(
      {
        body: JSON.stringify(
          marshalSetSecurityGroupRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/security_groups/${validatePathParam(
          'securityGroupId',
          request.securityGroupId,
        )}/rules/${validatePathParam(
          'securityGroupRuleId',
          request.securityGroupRuleId,
        )}`,
      },
      unmarshalSetSecurityGroupRuleResponse,
    )

  protected pageOfListPlacementGroups = (
    request: Readonly<ListPlacementGroupsRequest> = {},
  ) =>
    this.client.fetch<ListPlacementGroupsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/placement_groups`,
        urlParams: urlParams(
          ['name', request.name],
          [
            'organization',
            request.organization ?? this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project ?? this.client.settings.defaultProjectId],
          [
            'tags',
            request.tags && request.tags.length > 0
              ? request.tags.join(',')
              : undefined,
          ],
        ),
      },
      unmarshalListPlacementGroupsResponse,
    )

  /**
   * List all placement groups.
   *
   * @param request - The request {@link ListPlacementGroupsRequest}
   * @returns A Promise of ListPlacementGroupsResponse
   */
  listPlacementGroups = (request: Readonly<ListPlacementGroupsRequest> = {}) =>
    enrichForPagination(
      'placementGroups',
      this.pageOfListPlacementGroups,
      request,
    )

  /**
   * Create a new placement group.
   *
   * @param request - The request {@link CreatePlacementGroupRequest}
   * @returns A Promise of CreatePlacementGroupResponse
   */
  createPlacementGroup = (
    request: Readonly<CreatePlacementGroupRequest> = {},
  ) =>
    this.client.fetch<CreatePlacementGroupResponse>(
      {
        body: JSON.stringify(
          marshalCreatePlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/placement_groups`,
      },
      unmarshalCreatePlacementGroupResponse,
    )

  /**
   * Get the given placement group.
   *
   * @param request - The request {@link GetPlacementGroupRequest}
   * @returns A Promise of GetPlacementGroupResponse
   */
  getPlacementGroup = (request: Readonly<GetPlacementGroupRequest>) =>
    this.client.fetch<GetPlacementGroupResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/placement_groups/${validatePathParam(
          'placementGroupId',
          request.placementGroupId,
        )}`,
      },
      unmarshalGetPlacementGroupResponse,
    )

  /**
   * Set all parameters of the given placement group.
   *
   * @param request - The request {@link SetPlacementGroupRequest}
   * @returns A Promise of SetPlacementGroupResponse
   */
  setPlacementGroup = (request: Readonly<SetPlacementGroupRequest>) =>
    this.client.fetch<SetPlacementGroupResponse>(
      {
        body: JSON.stringify(
          marshalSetPlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/placement_groups/${validatePathParam(
          'placementGroupId',
          request.placementGroupId,
        )}`,
      },
      unmarshalSetPlacementGroupResponse,
    )

  /**
   * Update one or more parameter of the given placement group.
   *
   * @param request - The request {@link UpdatePlacementGroupRequest}
   * @returns A Promise of UpdatePlacementGroupResponse
   */
  updatePlacementGroup = (request: Readonly<UpdatePlacementGroupRequest>) =>
    this.client.fetch<UpdatePlacementGroupResponse>(
      {
        body: JSON.stringify(
          marshalUpdatePlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/placement_groups/${validatePathParam(
          'placementGroupId',
          request.placementGroupId,
        )}`,
      },
      unmarshalUpdatePlacementGroupResponse,
    )

  /**
   * Delete the given placement group.
   *
   * @param request - The request {@link DeletePlacementGroupRequest}
   */
  deletePlacementGroup = (request: Readonly<DeletePlacementGroupRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/placement_groups/${validatePathParam(
        'placementGroupId',
        request.placementGroupId,
      )}`,
    })

  /**
   * Get all servers belonging to the given placement group.
   *
   * @param request - The request {@link GetPlacementGroupServersRequest}
   * @returns A Promise of GetPlacementGroupServersResponse
   */
  getPlacementGroupServers = (
    request: Readonly<GetPlacementGroupServersRequest>,
  ) =>
    this.client.fetch<GetPlacementGroupServersResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/placement_groups/${validatePathParam(
          'placementGroupId',
          request.placementGroupId,
        )}/servers`,
      },
      unmarshalGetPlacementGroupServersResponse,
    )

  /**
   * Set all servers belonging to the given placement group.
   *
   * @param request - The request {@link SetPlacementGroupServersRequest}
   * @returns A Promise of SetPlacementGroupServersResponse
   */
  setPlacementGroupServers = (
    request: Readonly<SetPlacementGroupServersRequest>,
  ) =>
    this.client.fetch<SetPlacementGroupServersResponse>(
      {
        body: JSON.stringify(
          marshalSetPlacementGroupServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/placement_groups/${validatePathParam(
          'placementGroupId',
          request.placementGroupId,
        )}/servers`,
      },
      unmarshalSetPlacementGroupServersResponse,
    )

  /**
   * Update all servers belonging to the given placement group.
   *
   * @param request - The request {@link UpdatePlacementGroupServersRequest}
   * @returns A Promise of UpdatePlacementGroupServersResponse
   */
  updatePlacementGroupServers = (
    request: Readonly<UpdatePlacementGroupServersRequest>,
  ) =>
    this.client.fetch<UpdatePlacementGroupServersResponse>(
      {
        body: JSON.stringify(
          marshalUpdatePlacementGroupServersRequest(
            request,
            this.client.settings,
          ),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/placement_groups/${validatePathParam(
          'placementGroupId',
          request.placementGroupId,
        )}/servers`,
      },
      unmarshalUpdatePlacementGroupServersResponse,
    )

  protected pageOfListIps = (request: Readonly<ListIpsRequest> = {}) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips`,
        urlParams: urlParams(
          ['name', request.name],
          [
            'organization',
            request.organization ?? this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project ?? this.client.settings.defaultProjectId],
          [
            'tags',
            request.tags && request.tags.length > 0
              ? request.tags.join(',')
              : undefined,
          ],
        ),
      },
      unmarshalListIpsResponse,
    )

  /**
   * List all flexible IPs
   *
   * @param request - The request {@link ListIpsRequest}
   * @returns A Promise of ListIpsResponse
   */
  listIps = (request: Readonly<ListIpsRequest> = {}) =>
    enrichForPagination('ips', this.pageOfListIps, request)

  /**
   * Reserve a flexible IP
   *
   * @param request - The request {@link CreateIpRequest}
   * @returns A Promise of CreateIpResponse
   */
  createIp = (request: Readonly<CreateIpRequest> = {}) =>
    this.client.fetch<CreateIpResponse>(
      {
        body: JSON.stringify(
          marshalCreateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips`,
      },
      unmarshalCreateIpResponse,
    )

  /**
   * Get details of an IP with the given ID or address.
   *
   * @param request - The request {@link GetIpRequest}
   * @returns A Promise of GetIpResponse
   */
  getIp = (request: Readonly<GetIpRequest>) =>
    this.client.fetch<GetIpResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips/${validatePathParam('ip', request.ip)}`,
      },
      unmarshalGetIpResponse,
    )

  /**
   * Update a flexible IP
   *
   * @param request - The request {@link UpdateIpRequest}
   * @returns A Promise of UpdateIpResponse
   */
  updateIp = (request: Readonly<UpdateIpRequest>) =>
    this.client.fetch<UpdateIpResponse>(
      {
        body: JSON.stringify(
          marshalUpdateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/ips/${validatePathParam('ip', request.ip)}`,
      },
      unmarshalUpdateIpResponse,
    )

  /**
   * Delete the IP with the given ID.
   *
   * @param request - The request {@link DeleteIpRequest}
   */
  deleteIp = (request: Readonly<DeleteIpRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/ips/${validatePathParam('ip', request.ip)}`,
    })

  /**
   * List all private NICs of a given server.
   *
   * @param request - The request {@link ListPrivateNICsRequest}
   * @returns A Promise of ListPrivateNICsResponse
   */
  listPrivateNICs = (request: Readonly<ListPrivateNICsRequest>) =>
    this.client.fetch<ListPrivateNICsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/private_nics`,
      },
      unmarshalListPrivateNICsResponse,
    )

  /**
   * Create a private NIC connecting a server to a private network.
   *
   * @param request - The request {@link CreatePrivateNICRequest}
   * @returns A Promise of CreatePrivateNICResponse
   */
  createPrivateNIC = (request: Readonly<CreatePrivateNICRequest>) =>
    this.client.fetch<CreatePrivateNICResponse>(
      {
        body: JSON.stringify(
          marshalCreatePrivateNICRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/private_nics`,
      },
      unmarshalCreatePrivateNICResponse,
    )

  /**
   * Get private NIC properties.
   *
   * @param request - The request {@link GetPrivateNICRequest}
   * @returns A Promise of GetPrivateNICResponse
   */
  getPrivateNIC = (request: Readonly<GetPrivateNICRequest>) =>
    this.client.fetch<GetPrivateNICResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/servers/${validatePathParam(
          'serverId',
          request.serverId,
        )}/private_nics/${validatePathParam(
          'privateNicId',
          request.privateNicId,
        )}`,
      },
      unmarshalGetPrivateNICResponse,
    )

  /**
   * Delete a private NIC.
   *
   * @param request - The request {@link DeletePrivateNICRequest}
   */
  deletePrivateNIC = (request: Readonly<DeletePrivateNICRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/instance/v1/zones/${validatePathParam(
        'zone',
        request.zone ?? this.client.settings.defaultZone,
      )}/servers/${validatePathParam(
        'serverId',
        request.serverId,
      )}/private_nics/${validatePathParam(
        'privateNicId',
        request.privateNicId,
      )}`,
    })

  protected pageOfListBootscripts = (
    request: Readonly<ListBootscriptsRequest> = {},
  ) =>
    this.client.fetch<ListBootscriptsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/bootscripts`,
        urlParams: urlParams(
          ['arch', request.arch],
          ['default', request.default],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['public', request.public],
          ['title', request.title],
        ),
      },
      unmarshalListBootscriptsResponse,
    )

  /**
   * List bootscripts
   *
   * @param request - The request {@link ListBootscriptsRequest}
   * @returns A Promise of ListBootscriptsResponse
   */
  listBootscripts = (request: Readonly<ListBootscriptsRequest> = {}) =>
    enrichForPagination('bootscripts', this.pageOfListBootscripts, request)

  /**
   * Get details of a bootscript with the given ID.
   *
   * @param request - The request {@link GetBootscriptRequest}
   * @returns A Promise of GetBootscriptResponse
   */
  getBootscript = (request: Readonly<GetBootscriptRequest>) =>
    this.client.fetch<GetBootscriptResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/bootscripts/${validatePathParam(
          'bootscriptId',
          request.bootscriptId,
        )}`,
      },
      unmarshalGetBootscriptResponse,
    )

  getDashboard = (request: Readonly<GetDashboardRequest> = {}) =>
    this.client.fetch<GetDashboardResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam(
          'zone',
          request.zone ?? this.client.settings.defaultZone,
        )}/dashboard`,
        urlParams: urlParams(
          [
            'organization',
            request.organization ?? this.client.settings.defaultOrganizationId,
          ],
          ['project', request.project ?? this.client.settings.defaultProjectId],
        ),
      },
      unmarshalGetDashboardResponse,
    )
}
