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
import {IMAGE_TRANSIENT_STATUSES as IMAGE_TRANSIENT_STATUSES_INSTANCE,IP_TRANSIENT_STATUSES as IP_TRANSIENT_STATUSES_INSTANCE,PRIVATE_NIC_TRANSIENT_STATUSES as PRIVATE_NIC_TRANSIENT_STATUSES_INSTANCE,SECURITY_GROUP_TRANSIENT_STATUSES as SECURITY_GROUP_TRANSIENT_STATUSES_INSTANCE,SERVER_FILESYSTEM_TRANSIENT_STATUSES as SERVER_FILESYSTEM_TRANSIENT_STATUSES_INSTANCE,SERVER_IP_TRANSIENT_STATUSES as SERVER_IP_TRANSIENT_STATUSES_INSTANCE,SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_INSTANCE,SNAPSHOT_TRANSIENT_STATUSES as SNAPSHOT_TRANSIENT_STATUSES_INSTANCE,TASK_TRANSIENT_STATUSES as TASK_TRANSIENT_STATUSES_INSTANCE,VOLUME_SERVER_TRANSIENT_STATUSES as VOLUME_SERVER_TRANSIENT_STATUSES_INSTANCE,VOLUME_TRANSIENT_STATUSES as VOLUME_TRANSIENT_STATUSES_INSTANCE,} from './content.gen.js'
import {
  marshalApplyBlockMigrationRequest,
  marshalAttachServerFileSystemRequest,
  unmarshalAttachServerFileSystemResponse,
  marshalAttachServerVolumeRequest,
  unmarshalAttachServerVolumeResponse,
  marshalCheckBlockMigrationOrganizationQuotasRequest,
  marshalCreateImageRequest,
  unmarshalCreateImageResponse,
  marshalCreateIpRequest,
  unmarshalCreateIpResponse,
  marshalCreatePlacementGroupRequest,
  unmarshalCreatePlacementGroupResponse,
  marshalCreatePrivateNICRequest,
  unmarshalCreatePrivateNICResponse,
  marshalCreateSecurityGroupRequest,
  unmarshalCreateSecurityGroupResponse,
  marshalCreateSecurityGroupRuleRequest,
  unmarshalCreateSecurityGroupRuleResponse,
  marshalCreateServerRequest,
  unmarshalCreateServerResponse,
  marshalCreateSnapshotRequest,
  unmarshalCreateSnapshotResponse,
  marshalCreateVolumeRequest,
  unmarshalCreateVolumeResponse,
  marshalDetachServerFileSystemRequest,
  unmarshalDetachServerFileSystemResponse,
  marshalDetachServerVolumeRequest,
  unmarshalDetachServerVolumeResponse,
  marshalExportSnapshotRequest,
  unmarshalExportSnapshotResponse,
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
  unmarshalMigrationPlan,
  marshalPlanBlockMigrationRequest,
  unmarshalPrivateNIC,
  marshalServerActionRequest,
  unmarshalServerActionResponse,
  unmarshalServerCompatibleTypes,
  marshalSetImageRequest,
  unmarshalSetImageResponse,
  marshalSetPlacementGroupRequest,
  unmarshalSetPlacementGroupResponse,
  marshalSetPlacementGroupServersRequest,
  unmarshalSetPlacementGroupServersResponse,
  marshalSetSecurityGroupRequest,
  unmarshalSetSecurityGroupResponse,
  marshalSetSecurityGroupRuleRequest,
  unmarshalSetSecurityGroupRuleResponse,
  marshalSetSecurityGroupRulesRequest,
  unmarshalSetSecurityGroupRulesResponse,
  marshalSetServerRequest,
  unmarshalSetServerResponse,
  marshalSetSnapshotRequest,
  unmarshalSetSnapshotResponse,
  marshalUpdateImageRequest,
  unmarshalUpdateImageResponse,
  marshalUpdateIpRequest,
  unmarshalUpdateIpResponse,
  marshalUpdatePlacementGroupRequest,
  unmarshalUpdatePlacementGroupResponse,
  marshalUpdatePlacementGroupServersRequest,
  unmarshalUpdatePlacementGroupServersResponse,
  marshalUpdatePrivateNICRequest,
  marshalUpdateSecurityGroupRequest,
  unmarshalUpdateSecurityGroupResponse,
  marshalUpdateSecurityGroupRuleRequest,
  unmarshalUpdateSecurityGroupRuleResponse,
  marshalUpdateServerRequest,
  unmarshalUpdateServerResponse,
  marshalUpdateSnapshotRequest,
  unmarshalUpdateSnapshotResponse,
  marshalUpdateVolumeRequest,
  unmarshalUpdateVolumeResponse,
} from './marshalling.gen.js'
import type {
  ApplyBlockMigrationRequest,
  AttachServerFileSystemRequest,
  AttachServerFileSystemResponse,
  AttachServerVolumeRequest,
  AttachServerVolumeResponse,
  CheckBlockMigrationOrganizationQuotasRequest,
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
  CreateServerRequest,
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
  DetachServerFileSystemRequest,
  DetachServerFileSystemResponse,
  DetachServerVolumeRequest,
  DetachServerVolumeResponse,
  ExportSnapshotRequest,
  ExportSnapshotResponse,
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
  GetServerCompatibleTypesRequest,
  GetServerRequest,
  GetServerResponse,
  GetServerTypesAvailabilityRequest,
  GetServerTypesAvailabilityResponse,
  GetSnapshotRequest,
  GetSnapshotResponse,
  GetVolumeRequest,
  GetVolumeResponse,
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
  MigrationPlan,
  PlanBlockMigrationRequest,
  PrivateNIC,
  ReleaseIpToIpamRequest,
  ServerActionRequest,
  ServerActionResponse,
  ServerCompatibleTypes,
  SetImageRequest,
  SetPlacementGroupRequest,
  SetPlacementGroupResponse,
  SetPlacementGroupServersRequest,
  SetPlacementGroupServersResponse,
  SetSecurityGroupRulesRequest,
  SetSecurityGroupRulesResponse,
  UpdateImageRequest,
  UpdateImageResponse,
  UpdateIpRequest,
  UpdateIpResponse,
  UpdatePlacementGroupRequest,
  UpdatePlacementGroupResponse,
  UpdatePlacementGroupServersRequest,
  UpdatePlacementGroupServersResponse,
  UpdatePrivateNICRequest,
  UpdateSecurityGroupRequest,
  UpdateSecurityGroupResponse,
  UpdateSecurityGroupRuleRequest,
  UpdateSecurityGroupRuleResponse,
  UpdateServerRequest,
  UpdateServerResponse,
  UpdateSnapshotRequest,
  UpdateSnapshotResponse,
  UpdateVolumeRequest,
  UpdateVolumeResponse,
} from './types.gen.js'
import type {
  SetImageResponse,
  SetSecurityGroupRequest,
  SetSecurityGroupResponse,
  SetSecurityGroupRuleRequest,
  SetSecurityGroupRuleResponse,
  SetServerRequest,
  SetServerResponse,
  SetSnapshotRequest,
  SetSnapshotResponse,
} from './types.private.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Instance API.

This API allows you to manage your CPU and GPU Instances.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      zones: [
        'fr-par-1',
        'fr-par-2',
        'fr-par-3',
        'nl-ams-1',
        'nl-ams-2',
        'nl-ams-3',
        'pl-waw-1',
        'pl-waw-2',
        'pl-waw-3',
        'it-mil-1',
      ],
    })
  
  /**
   * Get availability. Get availability for all Instance types.
   *
   * @param request - The request {@link GetServerTypesAvailabilityRequest}
   * @returns A Promise of GetServerTypesAvailabilityResponse
   */
  getServerTypesAvailability = (request: Readonly<GetServerTypesAvailabilityRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<GetServerTypesAvailabilityResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/products/servers/availability`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalGetServerTypesAvailabilityResponse,
    )

  
  /**
   * List Instance types. List available Instance types and their technical details.
   *
   * @param request - The request {@link ListServersTypesRequest}
   * @returns A Promise of ListServersTypesResponse
   */
  listServersTypes = (request: Readonly<ListServersTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServersTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/products/servers`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListServersTypesResponse,
    )

  
  /**
   * List volume types. List all volume types and their technical details.
   *
   * @param request - The request {@link ListVolumesTypesRequest}
   * @returns A Promise of ListVolumesTypesResponse
   */
  listVolumesTypes = (request: Readonly<ListVolumesTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVolumesTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/products/volumes`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListVolumesTypesResponse,
    )

  
  protected pageOfListServers = (request: Readonly<ListServersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        urlParams: urlParams(
          ['commercial_type', request.commercialType],
          ['name', request.name],
          ['order', request.order],
          ['organization', request.organization],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['private_ip', request.privateIp],
          ['private_network', request.privateNetwork],
          ['private_networks', request.privateNetworks
          && request.privateNetworks.length > 0 ? request.privateNetworks.join(',') : undefined],
          ['private_nic_mac_address', request.privateNicMacAddress],
          ['project', request.project],
          ['servers', request.servers
          && request.servers.length > 0 ? request.servers.join(',') : undefined],
          ['state', request.state],
          ['tags', request.tags
          && request.tags.length > 0 ? request.tags.join(',') : undefined],
          ['with_ip', request.withIp],
          ['without_ip', request.withoutIp],
        ),
        signal: options?.signal,
      },
      unmarshalListServersResponse,
    )
  
  /**
   * List all Instances. List all Instances in a specified Availability Zone, e.g. `fr-par-1`.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('servers', this.pageOfListServers, request, options)

  
  protected _createServer = (request: Readonly<CreateServerRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateServerResponse>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        signal: options?.signal,
      },
      unmarshalCreateServerResponse,
    )

  
  /**
   * Delete an Instance. Delete the Instance with the specified ID.
   *
   * @param request - The request {@link DeleteServerRequest}
   */
  deleteServer = (request: Readonly<DeleteServerRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get an Instance. Get the details of a specified Instance.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of GetServerResponse
   */
  getServer = (request: Readonly<GetServerRequest>, options?: RequestOptions) =>
    this.client.fetch<GetServerResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalGetServerResponse,
    )

  
  protected _setServer = (request: Readonly<SetServerRequest>, options?: RequestOptions) =>
    this.client.fetch<SetServerResponse>(
      {
        body: JSON.stringify(
          marshalSetServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('id', request.id)}`,
        signal: options?.signal,
      },
      unmarshalSetServerResponse,
    )

  
  protected _updateServer = (request: Readonly<UpdateServerRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdateServerResponse>(
      {
        body: JSON.stringify(
          marshalUpdateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalUpdateServerResponse,
    )

  
  /**
   * List Instance actions. List all actions (e.g. power on, power off, reboot) that can currently be performed on an Instance.
   *
   * @param request - The request {@link ListServerActionsRequest}
   * @returns A Promise of ListServerActionsResponse
   */
  listServerActions = (request: Readonly<ListServerActionsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListServerActionsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/action`,
        signal: options?.signal,
      },
      unmarshalListServerActionsResponse,
    )

  
  /**
   * Perform action. Perform an action on an Instance.
Available actions are:
* `poweron`: Start a stopped Instance.
* `poweroff`: Fully stop the Instance and release the hypervisor slot.
* `stop_in_place`: Stop the Instance, but keep the slot on the hypervisor.
* `reboot`: Stop the instance and restart it.
* `backup`: Create an image with all the volumes of an Instance.
* `terminate`: Delete the Instance along with its attached local volumes.
* `enable_routed_ip`: Migrate the Instance to the new network stack.

The `terminate` action will result in the deletion of `l_ssd` and `scratch` volumes types, `sbs_volume` volumes will only be detached.
If you want to preserve your `l_ssd` volumes, you should stop your Instance, detach the volumes to be preserved, then delete your Instance.

The `backup` action can be done with:
* No `volumes` key in the body: an image is created with snapshots of all the server volumes, except for the `scratch` volumes types.
* `volumes` key in the body with a dictionary as value, in this dictionary volumes UUID as keys and empty dictionaries as values : an image is created with the snapshots of the volumes in `volumes` key. `scratch` volumes types can't be shapshotted.
   *
   * @param request - The request {@link ServerActionRequest}
   * @returns A Promise of ServerActionResponse
   */
  serverAction = (request: Readonly<ServerActionRequest>, options?: RequestOptions) =>
    this.client.fetch<ServerActionResponse>(
      {
        body: JSON.stringify(
          marshalServerActionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/action`,
        signal: options?.signal,
      },
      unmarshalServerActionResponse,
    )

  
  /**
   * List user data. List all user data keys registered on a specified Instance.
   *
   * @param request - The request {@link ListServerUserDataRequest}
   * @returns A Promise of ListServerUserDataResponse
   */
  listServerUserData = (request: Readonly<ListServerUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<ListServerUserDataResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user_data`,
        signal: options?.signal,
      },
      unmarshalListServerUserDataResponse,
    )

  
  /**
   * Delete user data. Delete the specified key from an Instance's user data.
   *
   * @param request - The request {@link DeleteServerUserDataRequest}
   */
  deleteServerUserData = (request: Readonly<DeleteServerUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user_data/${validatePathParam('key', request.key)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get Instance compatible types. Get compatible commercial types that can be used to update the Instance. The compatibility of an Instance offer is based on:
* the CPU architecture
* the OS type
* the required l_ssd storage size
* the required scratch storage size
If the specified Instance offer is flagged as end of service, the best compatible offer is the first returned.
   *
   * @param request - The request {@link GetServerCompatibleTypesRequest}
   * @returns A Promise of ServerCompatibleTypes
   */
  getServerCompatibleTypes = (request: Readonly<GetServerCompatibleTypesRequest>, options?: RequestOptions) =>
    this.client.fetch<ServerCompatibleTypes>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/compatible-types`,
        signal: options?.signal,
      },
      unmarshalServerCompatibleTypes,
    )

  
  /**
   * Attach a volume to an Instance.
   *
   * @param request - The request {@link AttachServerVolumeRequest}
   * @returns A Promise of AttachServerVolumeResponse
   */
  attachServerVolume = (request: Readonly<AttachServerVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<AttachServerVolumeResponse>(
      {
        body: JSON.stringify(
          marshalAttachServerVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-volume`,
        signal: options?.signal,
      },
      unmarshalAttachServerVolumeResponse,
    )

  
  /**
   * Detach a volume from an Instance.
   *
   * @param request - The request {@link DetachServerVolumeRequest}
   * @returns A Promise of DetachServerVolumeResponse
   */
  detachServerVolume = (request: Readonly<DetachServerVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<DetachServerVolumeResponse>(
      {
        body: JSON.stringify(
          marshalDetachServerVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-volume`,
        signal: options?.signal,
      },
      unmarshalDetachServerVolumeResponse,
    )

  
  /**
   * Attach a filesystem volume to an Instance.
   *
   * @param request - The request {@link AttachServerFileSystemRequest}
   * @returns A Promise of AttachServerFileSystemResponse
   */
  attachServerFileSystem = (request: Readonly<AttachServerFileSystemRequest>, options?: RequestOptions) =>
    this.client.fetch<AttachServerFileSystemResponse>(
      {
        body: JSON.stringify(
          marshalAttachServerFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-filesystem`,
        signal: options?.signal,
      },
      unmarshalAttachServerFileSystemResponse,
    )

  
  /**
   * Detach a filesystem volume from an Instance.
   *
   * @param request - The request {@link DetachServerFileSystemRequest}
   * @returns A Promise of DetachServerFileSystemResponse
   */
  detachServerFileSystem = (request: Readonly<DetachServerFileSystemRequest>, options?: RequestOptions) =>
    this.client.fetch<DetachServerFileSystemResponse>(
      {
        body: JSON.stringify(
          marshalDetachServerFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-filesystem`,
        signal: options?.signal,
      },
      unmarshalDetachServerFileSystemResponse,
    )

  
  protected pageOfListImages = (request: Readonly<ListImagesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListImagesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/images`,
        urlParams: urlParams(
          ['arch', request.arch],
          ['name', request.name],
          ['organization', request.organization],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project],
          ['public', request.public],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListImagesResponse,
    )
  
  /**
   * List Instance images. List all existing Instance images.
   *
   * @param request - The request {@link ListImagesRequest}
   * @returns A Promise of ListImagesResponse
   */
  listImages = (request: Readonly<ListImagesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('images', this.pageOfListImages, request, options)

  
  /**
   * Get an Instance image. Get details of an image with the specified ID.
   *
   * @param request - The request {@link GetImageRequest}
   * @returns A Promise of GetImageResponse
   */
  getImage = (request: Readonly<GetImageRequest>, options?: RequestOptions) =>
    this.client.fetch<GetImageResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/images/${validatePathParam('imageId', request.imageId)}`,
        signal: options?.signal,
      },
      unmarshalGetImageResponse,
    )

  
  /**
   * Create an Instance image. Create an Instance image from the specified snapshot ID.
   *
   * @param request - The request {@link CreateImageRequest}
   * @returns A Promise of CreateImageResponse
   */
  createImage = (request: Readonly<CreateImageRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateImageResponse>(
      {
        body: JSON.stringify(
          marshalCreateImageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/images`,
        signal: options?.signal,
      },
      unmarshalCreateImageResponse,
    )

  
  protected _setImage = (request: Readonly<SetImageRequest>, options?: RequestOptions) =>
    this.client.fetch<SetImageResponse>(
      {
        body: JSON.stringify(
          marshalSetImageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/images/${validatePathParam('id', request.id)}`,
        signal: options?.signal,
      },
      unmarshalSetImageResponse,
    )

  
  /**
   * Update image. Update the properties of an image.
   *
   * @param request - The request {@link UpdateImageRequest}
   * @returns A Promise of UpdateImageResponse
   */
  updateImage = (request: Readonly<UpdateImageRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdateImageResponse>(
      {
        body: JSON.stringify(
          marshalUpdateImageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/images/${validatePathParam('imageId', request.imageId)}`,
        signal: options?.signal,
      },
      unmarshalUpdateImageResponse,
    )

  
  /**
   * Delete an Instance image. Delete the image with the specified ID.
   *
   * @param request - The request {@link DeleteImageRequest}
   */
  deleteImage = (request: Readonly<DeleteImageRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/images/${validatePathParam('imageId', request.imageId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListSnapshots = (request: Readonly<ListSnapshotsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSnapshotsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots`,
        urlParams: urlParams(
          ['base_volume_id', request.baseVolumeId],
          ['name', request.name],
          ['organization', request.organization],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListSnapshotsResponse,
    )
  
  /**
   * List snapshots. List all snapshots of an Organization in a specified Availability Zone.
   *
   * @param request - The request {@link ListSnapshotsRequest}
   * @returns A Promise of ListSnapshotsResponse
   */
  listSnapshots = (request: Readonly<ListSnapshotsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('snapshots', this.pageOfListSnapshots, request, options)

  
  /**
   * Create a snapshot from a specified volume or from a QCOW2 file. Create a snapshot from a specified volume or from a QCOW2 file in a specified Availability Zone.
   *
   * @param request - The request {@link CreateSnapshotRequest}
   * @returns A Promise of CreateSnapshotResponse
   */
  createSnapshot = (request: Readonly<CreateSnapshotRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<CreateSnapshotResponse>(
      {
        body: JSON.stringify(
          marshalCreateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots`,
        signal: options?.signal,
      },
      unmarshalCreateSnapshotResponse,
    )

  
  /**
   * Get a snapshot. Get details of a snapshot with the specified ID.
   *
   * @param request - The request {@link GetSnapshotRequest}
   * @returns A Promise of GetSnapshotResponse
   */
  getSnapshot = (request: Readonly<GetSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<GetSnapshotResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
      unmarshalGetSnapshotResponse,
    )

  
  protected _setSnapshot = (request: Readonly<SetSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<SetSnapshotResponse>(
      {
        body: JSON.stringify(
          marshalSetSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
      unmarshalSetSnapshotResponse,
    )

  
  /**
   * Update a snapshot. Update the properties of a snapshot.
   *
   * @param request - The request {@link UpdateSnapshotRequest}
   * @returns A Promise of UpdateSnapshotResponse
   */
  updateSnapshot = (request: Readonly<UpdateSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdateSnapshotResponse>(
      {
        body: JSON.stringify(
          marshalUpdateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
      unmarshalUpdateSnapshotResponse,
    )

  
  /**
   * Delete a snapshot. Delete the snapshot with the specified ID.
   *
   * @param request - The request {@link DeleteSnapshotRequest}
   */
  deleteSnapshot = (request: Readonly<DeleteSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Export a snapshot. Export a snapshot to a specified Object Storage bucket in the same region.
   *
   * @param request - The request {@link ExportSnapshotRequest}
   * @returns A Promise of ExportSnapshotResponse
   */
  exportSnapshot = (request: Readonly<ExportSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<ExportSnapshotResponse>(
      {
        body: JSON.stringify(
          marshalExportSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}/export`,
        signal: options?.signal,
      },
      unmarshalExportSnapshotResponse,
    )

  
  protected pageOfListVolumes = (request: Readonly<ListVolumesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVolumesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes`,
        urlParams: urlParams(
          ['name', request.name],
          ['organization', request.organization],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project],
          ['tags', request.tags
          && request.tags.length > 0 ? request.tags.join(',') : undefined],
          ['volume_type', request.volumeType],
        ),
        signal: options?.signal,
      },
      unmarshalListVolumesResponse,
    )
  
  /**
   * List volumes. List volumes in the specified Availability Zone. You can filter the output by volume type.
   *
   * @param request - The request {@link ListVolumesRequest}
   * @returns A Promise of ListVolumesResponse
   */
  listVolumes = (request: Readonly<ListVolumesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('volumes', this.pageOfListVolumes, request, options)

  
  /**
   * Create a volume. Create a volume of a specified type in an Availability Zone.
   *
   * @param request - The request {@link CreateVolumeRequest}
   * @returns A Promise of CreateVolumeResponse
   */
  createVolume = (request: Readonly<CreateVolumeRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<CreateVolumeResponse>(
      {
        body: JSON.stringify(
          marshalCreateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes`,
        signal: options?.signal,
      },
      unmarshalCreateVolumeResponse,
    )

  
  /**
   * Get a volume. Get details of a volume with the specified ID.
   *
   * @param request - The request {@link GetVolumeRequest}
   * @returns A Promise of GetVolumeResponse
   */
  getVolume = (request: Readonly<GetVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<GetVolumeResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
        signal: options?.signal,
      },
      unmarshalGetVolumeResponse,
    )

  
  /**
   * Update a volume. Replace the name and/or size properties of a volume specified by its ID, with the specified value(s).
   *
   * @param request - The request {@link UpdateVolumeRequest}
   * @returns A Promise of UpdateVolumeResponse
   */
  updateVolume = (request: Readonly<UpdateVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdateVolumeResponse>(
      {
        body: JSON.stringify(
          marshalUpdateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
        signal: options?.signal,
      },
      unmarshalUpdateVolumeResponse,
    )

  
  /**
   * Delete a volume. Delete the volume with the specified ID.
   *
   * @param request - The request {@link DeleteVolumeRequest}
   */
  deleteVolume = (request: Readonly<DeleteVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListSecurityGroups = (request: Readonly<ListSecurityGroupsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSecurityGroupsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups`,
        urlParams: urlParams(
          ['name', request.name],
          ['organization', request.organization],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project],
          ['project_default', request.projectDefault],
          ['tags', request.tags
          && request.tags.length > 0 ? request.tags.join(',') : undefined],
        ),
        signal: options?.signal,
      },
      unmarshalListSecurityGroupsResponse,
    )
  
  /**
   * List security groups. List all existing security groups.
   *
   * @param request - The request {@link ListSecurityGroupsRequest}
   * @returns A Promise of ListSecurityGroupsResponse
   */
  listSecurityGroups = (request: Readonly<ListSecurityGroupsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('securityGroups', this.pageOfListSecurityGroups, request, options)

  
  /**
   * Create a security group. Create a security group with a specified name and description.
   *
   * @param request - The request {@link CreateSecurityGroupRequest}
   * @returns A Promise of CreateSecurityGroupResponse
   */
  createSecurityGroup = (request: Readonly<CreateSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateSecurityGroupResponse>(
      {
        body: JSON.stringify(
          marshalCreateSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups`,
        signal: options?.signal,
      },
      unmarshalCreateSecurityGroupResponse,
    )

  
  /**
   * Get a security group. Get the details of a security group with the specified ID.
   *
   * @param request - The request {@link GetSecurityGroupRequest}
   * @returns A Promise of GetSecurityGroupResponse
   */
  getSecurityGroup = (request: Readonly<GetSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<GetSecurityGroupResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
        signal: options?.signal,
      },
      unmarshalGetSecurityGroupResponse,
    )

  
  /**
   * Delete a security group. Delete a security group with the specified ID.
   *
   * @param request - The request {@link DeleteSecurityGroupRequest}
   */
  deleteSecurityGroup = (request: Readonly<DeleteSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
        signal: options?.signal,
      },
    )

  
  protected _setSecurityGroup = (request: Readonly<SetSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<SetSecurityGroupResponse>(
      {
        body: JSON.stringify(
          marshalSetSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('id', request.id)}`,
        signal: options?.signal,
      },
      unmarshalSetSecurityGroupResponse,
    )

  
  /**
   * Update a security group. Update the properties of security group.
   *
   * @param request - The request {@link UpdateSecurityGroupRequest}
   * @returns A Promise of UpdateSecurityGroupResponse
   */
  updateSecurityGroup = (request: Readonly<UpdateSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdateSecurityGroupResponse>(
      {
        body: JSON.stringify(
          marshalUpdateSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
        signal: options?.signal,
      },
      unmarshalUpdateSecurityGroupResponse,
    )

  
  /**
   * Get default rules. Lists the default rules applied to all the security groups.
   *
   * @param request - The request {@link ListDefaultSecurityGroupRulesRequest}
   * @returns A Promise of ListSecurityGroupRulesResponse
   */
  listDefaultSecurityGroupRules = (request: Readonly<ListDefaultSecurityGroupRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSecurityGroupRulesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/default/rules`,
        signal: options?.signal,
      },
      unmarshalListSecurityGroupRulesResponse,
    )

  
  protected pageOfListSecurityGroupRules = (request: Readonly<ListSecurityGroupRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListSecurityGroupRulesResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}/rules`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListSecurityGroupRulesResponse,
    )
  
  /**
   * List rules. List the rules of the a specified security group ID.
   *
   * @param request - The request {@link ListSecurityGroupRulesRequest}
   * @returns A Promise of ListSecurityGroupRulesResponse
   */
  listSecurityGroupRules = (request: Readonly<ListSecurityGroupRulesRequest>, options?: RequestOptions) =>
    enrichForPagination('rules', this.pageOfListSecurityGroupRules, request, options)

  
  /**
   * Create rule. Create a rule in the specified security group ID.
   *
   * @param request - The request {@link CreateSecurityGroupRuleRequest}
   * @returns A Promise of CreateSecurityGroupRuleResponse
   */
  createSecurityGroupRule = (request: Readonly<CreateSecurityGroupRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<CreateSecurityGroupRuleResponse>(
      {
        body: JSON.stringify(
          marshalCreateSecurityGroupRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}/rules`,
        signal: options?.signal,
      },
      unmarshalCreateSecurityGroupRuleResponse,
    )

  
  /**
   * Update all the rules of a security group. Replaces the existing rules of the security group with the rules provided. This endpoint supports the update of existing rules, creation of new rules and deletion of existing rules when they are not passed in the request.
   *
   * @param request - The request {@link SetSecurityGroupRulesRequest}
   * @returns A Promise of SetSecurityGroupRulesResponse
   */
  setSecurityGroupRules = (request: Readonly<SetSecurityGroupRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<SetSecurityGroupRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetSecurityGroupRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}/rules`,
        signal: options?.signal,
      },
      unmarshalSetSecurityGroupRulesResponse,
    )

  
  /**
   * Delete rule. Delete a security group rule with the specified ID.
   *
   * @param request - The request {@link DeleteSecurityGroupRuleRequest}
   */
  deleteSecurityGroupRule = (request: Readonly<DeleteSecurityGroupRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}/rules/${validatePathParam('securityGroupRuleId', request.securityGroupRuleId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get rule. Get details of a security group rule with the specified ID.
   *
   * @param request - The request {@link GetSecurityGroupRuleRequest}
   * @returns A Promise of GetSecurityGroupRuleResponse
   */
  getSecurityGroupRule = (request: Readonly<GetSecurityGroupRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<GetSecurityGroupRuleResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}/rules/${validatePathParam('securityGroupRuleId', request.securityGroupRuleId)}`,
        signal: options?.signal,
      },
      unmarshalGetSecurityGroupRuleResponse,
    )

  
  protected _setSecurityGroupRule = (request: Readonly<SetSecurityGroupRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<SetSecurityGroupRuleResponse>(
      {
        body: JSON.stringify(
          marshalSetSecurityGroupRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}/rules/${validatePathParam('securityGroupRuleId', request.securityGroupRuleId)}`,
        signal: options?.signal,
      },
      unmarshalSetSecurityGroupRuleResponse,
    )

  
  /**
   * Update security group rule. Update the properties of a rule from a specified security group.
   *
   * @param request - The request {@link UpdateSecurityGroupRuleRequest}
   * @returns A Promise of UpdateSecurityGroupRuleResponse
   */
  updateSecurityGroupRule = (request: Readonly<UpdateSecurityGroupRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdateSecurityGroupRuleResponse>(
      {
        body: JSON.stringify(
          marshalUpdateSecurityGroupRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security_groups/${validatePathParam('securityGroupId', request.securityGroupId)}/rules/${validatePathParam('securityGroupRuleId', request.securityGroupRuleId)}`,
        signal: options?.signal,
      },
      unmarshalUpdateSecurityGroupRuleResponse,
    )

  
  protected pageOfListPlacementGroups = (request: Readonly<ListPlacementGroupsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListPlacementGroupsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups`,
        urlParams: urlParams(
          ['name', request.name],
          ['organization', request.organization],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project],
          ['tags', request.tags
          && request.tags.length > 0 ? request.tags.join(',') : undefined],
        ),
        signal: options?.signal,
      },
      unmarshalListPlacementGroupsResponse,
    )
  
  /**
   * List placement groups. List all placement groups in a specified Availability Zone.
   *
   * @param request - The request {@link ListPlacementGroupsRequest}
   * @returns A Promise of ListPlacementGroupsResponse
   */
  listPlacementGroups = (request: Readonly<ListPlacementGroupsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('placementGroups', this.pageOfListPlacementGroups, request, options)

  
  /**
   * Create a placement group. Create a new placement group in a specified Availability Zone.
   *
   * @param request - The request {@link CreatePlacementGroupRequest}
   * @returns A Promise of CreatePlacementGroupResponse
   */
  createPlacementGroup = (request: Readonly<CreatePlacementGroupRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<CreatePlacementGroupResponse>(
      {
        body: JSON.stringify(
          marshalCreatePlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups`,
        signal: options?.signal,
      },
      unmarshalCreatePlacementGroupResponse,
    )

  
  /**
   * Get a placement group. Get the specified placement group.
   *
   * @param request - The request {@link GetPlacementGroupRequest}
   * @returns A Promise of GetPlacementGroupResponse
   */
  getPlacementGroup = (request: Readonly<GetPlacementGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<GetPlacementGroupResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
        signal: options?.signal,
      },
      unmarshalGetPlacementGroupResponse,
    )

  
  /**
   * Set placement group. Set all parameters of the specified placement group.
   *
   * @param request - The request {@link SetPlacementGroupRequest}
   * @returns A Promise of SetPlacementGroupResponse
   */
  setPlacementGroup = (request: Readonly<SetPlacementGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<SetPlacementGroupResponse>(
      {
        body: JSON.stringify(
          marshalSetPlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
        signal: options?.signal,
      },
      unmarshalSetPlacementGroupResponse,
    )

  
  /**
   * Update a placement group. Update one or more parameter of the specified placement group.
   *
   * @param request - The request {@link UpdatePlacementGroupRequest}
   * @returns A Promise of UpdatePlacementGroupResponse
   */
  updatePlacementGroup = (request: Readonly<UpdatePlacementGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdatePlacementGroupResponse>(
      {
        body: JSON.stringify(
          marshalUpdatePlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
        signal: options?.signal,
      },
      unmarshalUpdatePlacementGroupResponse,
    )

  
  /**
   * Delete the specified placement group.
   *
   * @param request - The request {@link DeletePlacementGroupRequest}
   */
  deletePlacementGroup = (request: Readonly<DeletePlacementGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get placement group servers. Get all Instances belonging to the specified placement group.
   *
   * @param request - The request {@link GetPlacementGroupServersRequest}
   * @returns A Promise of GetPlacementGroupServersResponse
   */
  getPlacementGroupServers = (request: Readonly<GetPlacementGroupServersRequest>, options?: RequestOptions) =>
    this.client.fetch<GetPlacementGroupServersResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups/${validatePathParam('placementGroupId', request.placementGroupId)}/servers`,
        signal: options?.signal,
      },
      unmarshalGetPlacementGroupServersResponse,
    )

  
  /**
   * Set placement group servers. Set all Instances belonging to the specified placement group.
   *
   * @param request - The request {@link SetPlacementGroupServersRequest}
   * @returns A Promise of SetPlacementGroupServersResponse
   */
  setPlacementGroupServers = (request: Readonly<SetPlacementGroupServersRequest>, options?: RequestOptions) =>
    this.client.fetch<SetPlacementGroupServersResponse>(
      {
        body: JSON.stringify(
          marshalSetPlacementGroupServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups/${validatePathParam('placementGroupId', request.placementGroupId)}/servers`,
        signal: options?.signal,
      },
      unmarshalSetPlacementGroupServersResponse,
    )

  
  /**
   * Update placement group servers. Update all Instances belonging to the specified placement group.
   *
   * @param request - The request {@link UpdatePlacementGroupServersRequest}
   * @returns A Promise of UpdatePlacementGroupServersResponse
   */
  updatePlacementGroupServers = (request: Readonly<UpdatePlacementGroupServersRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdatePlacementGroupServersResponse>(
      {
        body: JSON.stringify(
          marshalUpdatePlacementGroupServersRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement_groups/${validatePathParam('placementGroupId', request.placementGroupId)}/servers`,
        signal: options?.signal,
      },
      unmarshalUpdatePlacementGroupServersResponse,
    )

  
  protected pageOfListIps = (request: Readonly<ListIpsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListIpsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
        urlParams: urlParams(
          ['name', request.name],
          ['organization', request.organization],
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['project', request.project],
          ['tags', request.tags
          && request.tags.length > 0 ? request.tags.join(',') : undefined],
          ['type', request.type],
        ),
        signal: options?.signal,
      },
      unmarshalListIpsResponse,
    )
  
  /**
   * List all flexible IPs. List all flexible IPs in a specified zone.
   *
   * @param request - The request {@link ListIpsRequest}
   * @returns A Promise of ListIpsResponse
   */
  listIps = (request: Readonly<ListIpsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('ips', this.pageOfListIps, request, options)

  
  /**
   * Reserve a flexible IP. Reserve a flexible IP and attach it to the specified Instance.
   *
   * @param request - The request {@link CreateIpRequest}
   * @returns A Promise of CreateIpResponse
   */
  createIp = (request: Readonly<CreateIpRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<CreateIpResponse>(
      {
        body: JSON.stringify(
          marshalCreateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips`,
        signal: options?.signal,
      },
      unmarshalCreateIpResponse,
    )

  
  /**
   * Get a flexible IP. Get details of an IP with the specified ID or address.
   *
   * @param request - The request {@link GetIpRequest}
   * @returns A Promise of GetIpResponse
   */
  getIp = (request: Readonly<GetIpRequest>, options?: RequestOptions) =>
    this.client.fetch<GetIpResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ip', request.ip)}`,
        signal: options?.signal,
      },
      unmarshalGetIpResponse,
    )

  
  /**
   * Update a flexible IP. Update a flexible IP in the specified zone with the specified ID.
   *
   * @param request - The request {@link UpdateIpRequest}
   * @returns A Promise of UpdateIpResponse
   */
  updateIp = (request: Readonly<UpdateIpRequest>, options?: RequestOptions) =>
    this.client.fetch<UpdateIpResponse>(
      {
        body: JSON.stringify(
          marshalUpdateIpRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ip', request.ip)}`,
        signal: options?.signal,
      },
      unmarshalUpdateIpResponse,
    )

  
  /**
   * Delete a flexible IP. Delete the IP with the specified ID.
   *
   * @param request - The request {@link DeleteIpRequest}
   */
  deleteIp = (request: Readonly<DeleteIpRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ip', request.ip)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListPrivateNICs = (request: Readonly<ListPrivateNICsRequest>, options?: RequestOptions) =>
    this.client.fetch<ListPrivateNICsResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private_nics`,
        urlParams: urlParams(
          ['page', request.page],
          ['per_page', request.perPage ?? this.client.settings.defaultPageSize],
          ['tags', request.tags
          && request.tags.length > 0 ? request.tags.join(',') : undefined],
        ),
        signal: options?.signal,
      },
      unmarshalListPrivateNICsResponse,
    )
  
  /**
   * List all private NICs. List all private NICs of a specified Instance.
Some private NICs, such as those in deleting, detaching, or in error state are
not listed. We strongly recommend migrating to v2alpha1 to retrieve all private NICs.
   *
   * @param request - The request {@link ListPrivateNICsRequest}
   * @returns A Promise of ListPrivateNICsResponse
   */
  listPrivateNICs = (request: Readonly<ListPrivateNICsRequest>, options?: RequestOptions) =>
    enrichForPagination('privateNics', this.pageOfListPrivateNICs, request, options)

  
  /**
   * Create a private NIC connecting an Instance to a Private Network. Create a private NIC connecting an Instance to a Private Network.
Some private NICs, such as those in deleting, detaching, or in error state are
not listed in v1.
Therefore, you may encounter quota limits errors when creating a new private NIC, even if your visible
count is below the threshold.
We strongly recommend migrating to v2alpha1 to see all private NICs.
   *
   * @param request - The request {@link CreatePrivateNICRequest}
   * @returns A Promise of CreatePrivateNICResponse
   */
  createPrivateNIC = (request: Readonly<CreatePrivateNICRequest>, options?: RequestOptions) =>
    this.client.fetch<CreatePrivateNICResponse>(
      {
        body: JSON.stringify(
          marshalCreatePrivateNICRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private_nics`,
        signal: options?.signal,
      },
      unmarshalCreatePrivateNICResponse,
    )

  
  /**
   * Get a private NIC. Get private NIC properties.
   *
   * @param request - The request {@link GetPrivateNICRequest}
   * @returns A Promise of GetPrivateNICResponse
   */
  getPrivateNIC = (request: Readonly<GetPrivateNICRequest>, options?: RequestOptions) =>
    this.client.fetch<GetPrivateNICResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private_nics/${validatePathParam('privateNicId', request.privateNicId)}`,
        signal: options?.signal,
      },
      unmarshalGetPrivateNICResponse,
    )

  
  /**
   * Update a private NIC. Update one or more parameter(s) of a specified private NIC.
   *
   * @param request - The request {@link UpdatePrivateNICRequest}
   * @returns A Promise of PrivateNIC
   */
  updatePrivateNIC = (request: Readonly<UpdatePrivateNICRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNIC>(
      {
        body: JSON.stringify(
          marshalUpdatePrivateNICRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private_nics/${validatePathParam('privateNicId', request.privateNicId)}`,
        signal: options?.signal,
      },
      unmarshalPrivateNIC,
    )

  
  /**
   * Delete a private NIC.
   *
   * @param request - The request {@link DeletePrivateNICRequest}
   */
  deletePrivateNIC = (request: Readonly<DeletePrivateNICRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/private_nics/${validatePathParam('privateNicId', request.privateNicId)}`,
        signal: options?.signal,
      },
    )

  
  getDashboard = (request: Readonly<GetDashboardRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<GetDashboardResponse>(
      {
        method: 'GET',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dashboard`,
        urlParams: urlParams(
          ['organization', request.organization],
          ['project', request.project],
        ),
        signal: options?.signal,
      },
      unmarshalGetDashboardResponse,
    )

  
  /**
   * Get a volume or snapshot's migration plan. Given a volume or snapshot, returns the migration plan but does not perform the actual migration. To perform the migration, you have to call the [Migrate a volume and/or snapshots to SBS](#path-volumes-migrate-a-volume-andor-snapshots-to-sbs-scaleway-block-storage) endpoint afterward.
The endpoint returns the resources that should be migrated together:
- the volume and any snapshots created from the volume, if the call was made to plan a volume migration.
- the base volume of the snapshot (if the volume is not deleted) and its related snapshots, if the call was made to plan a snapshot migration.
The endpoint also returns the validation_key, which must be provided to the [Migrate a volume and/or snapshots to SBS](#path-volumes-migrate-a-volume-andor-snapshots-to-sbs-scaleway-block-storage) endpoint to confirm that all resources listed in the plan should be migrated.
   *
   * @param request - The request {@link PlanBlockMigrationRequest}
   * @returns A Promise of MigrationPlan
   */
  planBlockMigration = (request: Readonly<PlanBlockMigrationRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<MigrationPlan>(
      {
        body: JSON.stringify(
          marshalPlanBlockMigrationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/block-migration/plan`,
        signal: options?.signal,
      },
      unmarshalMigrationPlan,
    )

  
  /**
   * Migrate a volume and/or snapshots to SBS (Scaleway Block Storage). To be used, the call to this endpoint must be preceded by a call to the [Get a volume or snapshot's migration plan](#path-volumes-get-a-volume-or-snapshots-migration-plan) endpoint. To migrate all resources mentioned in the migration plan, the validation_key returned in the plan must be provided.
   *
   * @param request - The request {@link ApplyBlockMigrationRequest}
   */
  applyBlockMigration = (request: Readonly<ApplyBlockMigrationRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalApplyBlockMigrationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/block-migration/apply`,
        signal: options?.signal,
      },
    )

  
  checkBlockMigrationOrganizationQuotas = (request: Readonly<CheckBlockMigrationOrganizationQuotasRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalCheckBlockMigrationOrganizationQuotasRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/block-migration/check-organization-quotas`,
        signal: options?.signal,
      },
    )

  
  /**
   * Releases the reserved IP without deleting the reservation.. **The IP remains available in IPAM**, which means that it is still reserved by the Organization, and can be reattached to another resource (Instance or other product).
   *
   * @param request - The request {@link ReleaseIpToIpamRequest}
   */
  releaseIpToIpam = (request: Readonly<ReleaseIpToIpamRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/ips/${validatePathParam('ipId', request.ipId)}/release-to-ipam`,
        signal: options?.signal,
      },
    )

  
}

