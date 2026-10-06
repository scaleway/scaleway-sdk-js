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
import {PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES as PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES_INSTANCE,SERVER_FILESYSTEM_TRANSIENT_STATUSES as SERVER_FILESYSTEM_TRANSIENT_STATUSES_INSTANCE,SERVER_IP_TRANSIENT_STATUSES as SERVER_IP_TRANSIENT_STATUSES_INSTANCE,SERVER_PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES as SERVER_PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES_INSTANCE,SERVER_PUBLIC_NETWORK_INTERFACE_TRANSIENT_STATUSES as SERVER_PUBLIC_NETWORK_INTERFACE_TRANSIENT_STATUSES_INSTANCE,SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_INSTANCE,SNAPSHOT_TRANSIENT_STATUSES as SNAPSHOT_TRANSIENT_STATUSES_INSTANCE,VOLUME_TRANSIENT_STATUSES as VOLUME_TRANSIENT_STATUSES_INSTANCE,} from './content.gen.js'
import {
  marshalAddSecurityGroupRulesRequest,
  unmarshalAddSecurityGroupRulesResponse,
  marshalAttachServerFileSystemRequest,
  marshalAttachServerIPRequest,
  marshalAttachServerPrivateNetworkInterfaceRequest,
  marshalAttachServerVolumeRequest,
  marshalCreatePlacementGroupRequest,
  marshalCreatePrivateNetworkInterfaceRequest,
  marshalCreateSecurityGroupRequest,
  marshalCreateServerFromTemplateRequest,
  marshalCreateServerRequest,
  marshalCreateTemplateRequest,
  unmarshalDedicatedPool,
  marshalDeleteSecurityGroupRulesRequest,
  marshalDetachServerFileSystemRequest,
  marshalDetachServerIPRequest,
  marshalDetachServerPrivateNetworkInterfaceRequest,
  marshalDetachServerVolumeRequest,
  unmarshalListDedicatedPoolServerTypesResponse,
  unmarshalListDedicatedPoolsResponse,
  unmarshalListPlacementGroupsResponse,
  unmarshalListPrivateNetworkInterfacesResponse,
  unmarshalListSecurityGroupsResponse,
  unmarshalListServerCompatibleTypesResponse,
  unmarshalListServerTypesResponse,
  unmarshalListServersResponse,
  unmarshalListSnapshotsResponse,
  unmarshalListTemplateUserDataKeysResponse,
  unmarshalListTemplatesResponse,
  unmarshalListUserDataKeysResponse,
  unmarshalListVolumeTypesResponse,
  unmarshalListVolumesResponse,
  unmarshalPlacementGroup,
  unmarshalPrivateNetworkInterface,
  unmarshalResourceCounts,
  unmarshalSecurityGroup,
  unmarshalServer,
  marshalSetSecurityGroupRulesRequest,
  marshalSetServerCloudInitRequest,
  marshalSetServerDefaultIPRequest,
  marshalSetTemplateCloudInitRequest,
  marshalSetTemplateUserDataRequest,
  marshalSetUserDataRequest,
  unmarshalSnapshot,
  marshalStopAndDeleteServerRequest,
  unmarshalTemplate,
  marshalUpdateDedicatedPoolRequest,
  marshalUpdatePlacementGroupRequest,
  marshalUpdatePrivateNetworkInterfaceRequest,
  marshalUpdateSecurityGroupRequest,
  marshalUpdateSecurityGroupRuleRequest,
  marshalUpdateServerRequest,
  marshalUpdateTemplateRequest,
  unmarshalUserData,
  unmarshalVolume,
  marshalVolumeApiCreateSnapshotRequest,
  marshalVolumeApiCreateVolumeRequest,
  marshalVolumeApiExportSnapshotToObjectStorageRequest,
  marshalVolumeApiImportSnapshotFromObjectStorageRequest,
  marshalVolumeApiUpdateSnapshotRequest,
  marshalVolumeApiUpdateVolumeRequest,
} from './marshalling.gen.js'
import type {
  AddSecurityGroupRulesRequest,
  AddSecurityGroupRulesResponse,
  AttachServerFileSystemRequest,
  AttachServerIPRequest,
  AttachServerPrivateNetworkInterfaceRequest,
  AttachServerVolumeRequest,
  CheckTemplateRequest,
  CreatePlacementGroupRequest,
  CreatePrivateNetworkInterfaceRequest,
  CreateSecurityGroupRequest,
  CreateServerFromTemplateRequest,
  CreateServerRequest,
  CreateTemplateRequest,
  DedicatedPool,
  DeletePlacementGroupRequest,
  DeletePrivateNetworkInterfaceRequest,
  DeleteSecurityGroupRequest,
  DeleteSecurityGroupRulesRequest,
  DeleteServerRequest,
  DeleteTemplateRequest,
  DeleteTemplateUserDataRequest,
  DeleteUserDataRequest,
  DetachAndDeletePrivateNetworkInterfaceRequest,
  DetachServerFileSystemRequest,
  DetachServerIPRequest,
  DetachServerPrivateNetworkInterfaceRequest,
  DetachServerVolumeRequest,
  GetDedicatedPoolRequest,
  GetPlacementGroupRequest,
  GetPrivateNetworkInterfaceRequest,
  GetResourceCountsRequest,
  GetSecurityGroupRequest,
  GetServerCloudInitRequest,
  GetServerRequest,
  GetTemplateCloudInitRequest,
  GetTemplateRequest,
  GetTemplateUserDataRequest,
  GetUserDataRequest,
  ListDedicatedPoolServerTypesRequest,
  ListDedicatedPoolServerTypesResponse,
  ListDedicatedPoolsRequest,
  ListDedicatedPoolsResponse,
  ListPlacementGroupsRequest,
  ListPlacementGroupsResponse,
  ListPrivateNetworkInterfacesRequest,
  ListPrivateNetworkInterfacesResponse,
  ListSecurityGroupsRequest,
  ListSecurityGroupsResponse,
  ListServerCompatibleTypesRequest,
  ListServerCompatibleTypesResponse,
  ListServerTypesRequest,
  ListServerTypesResponse,
  ListServersRequest,
  ListServersResponse,
  ListSnapshotsResponse,
  ListTemplateUserDataKeysRequest,
  ListTemplateUserDataKeysResponse,
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListUserDataKeysRequest,
  ListUserDataKeysResponse,
  ListVolumeTypesResponse,
  ListVolumesResponse,
  PauseServerRequest,
  PlacementGroup,
  PrivateNetworkInterface,
  RebootServerRequest,
  ResourceCounts,
  SecurityGroup,
  Server,
  SetSecurityGroupRulesRequest,
  SetServerCloudInitRequest,
  SetServerDefaultIPRequest,
  SetTemplateCloudInitRequest,
  SetTemplateUserDataRequest,
  SetUserDataRequest,
  Snapshot,
  StartServerRequest,
  StartSpotServerRequest,
  StopAndDeleteServerRequest,
  StopServerRequest,
  Template,
  UpdateDedicatedPoolRequest,
  UpdatePlacementGroupRequest,
  UpdatePrivateNetworkInterfaceRequest,
  UpdateSecurityGroupRequest,
  UpdateSecurityGroupRuleRequest,
  UpdateServerRequest,
  UpdateTemplateRequest,
  UserData,
  Volume,
  VolumeApiCreateSnapshotRequest,
  VolumeApiCreateVolumeRequest,
  VolumeApiDeleteSnapshotRequest,
  VolumeApiDeleteVolumeRequest,
  VolumeApiExportSnapshotToObjectStorageRequest,
  VolumeApiGetSnapshotRequest,
  VolumeApiGetVolumeRequest,
  VolumeApiImportSnapshotFromObjectStorageRequest,
  VolumeApiListSnapshotsRequest,
  VolumeApiListVolumeTypesRequest,
  VolumeApiListVolumesRequest,
  VolumeApiUpdateSnapshotRequest,
  VolumeApiUpdateVolumeRequest,
} from './types.gen.js'

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
   * Get resource counts. Get counts of various resources (e.g. servers, volumes).
   *
   * @param request - The request {@link GetResourceCountsRequest}
   * @returns A Promise of ResourceCounts
   */
  getResourceCounts = (request: Readonly<GetResourceCountsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ResourceCounts>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/resource-counts`,
        urlParams: urlParams(  
          ...Object.entries(resolveOneOf([
            {default: this.client.settings.defaultOrganizationId,param: 'organization_id',
              value: request.organizationId,
            },
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalResourceCounts,
    )

  
  /**
   * List all Instances.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        urlParams: urlParams(
          ['dedicated_pool_ids', request.dedicatedPoolIds],
          ['mac_addresses', request.macAddresses],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['placement_group_ids', request.placementGroupIds],
          ['private_network_ids', request.privateNetworkIds],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['security_group_ids', request.securityGroupIds],
          ['server_ids', request.serverIds],
          ['server_type', request.serverType],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListServersResponse,
    )

  
  /**
   * Create an Instance. Create a new Instance of a specified server_type.
   *
   * @param request - The request {@link CreateServerRequest}
   * @returns A Promise of Server
   */
  createServer = (request: Readonly<CreateServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Get an Instance. Get the details of a specified Instance.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )
  
  /**
   * Waits for {@link Server} to be in a final state.
   *
   * @param request - The request {@link GetServerRequest}
   * @param options - The waiting options
   * @returns A Promise of Server
   */
  waitForServer = (
    request: Readonly<GetServerRequest>,
    options?: Readonly<WaitForOptions<Server>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!SERVER_TRANSIENT_STATUSES_INSTANCE.includes(res.status))),
      this.getServer,
      request,
      options,
    )

  
  /**
   * Update an Instance. Update the properties of a specified Instance information, such as name, rescue_mode, or tags.
   *
   * @param request - The request {@link UpdateServerRequest}
   * @returns A Promise of Server
   */
  updateServer = (request: Readonly<UpdateServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalUpdateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Delete an Instance. Delete a specified Instance.
   *
   * @param request - The request {@link DeleteServerRequest}
   */
  deleteServer = (request: Readonly<DeleteServerRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
        urlParams: urlParams(  
          ...Object.entries(resolveOneOf<boolean | string[]>([
            {param: 'delete_all_ips',
              value: request.deleteAllIps,
            },
            {param: 'delete_ip_ids',
              value: request.deleteIpIds,
            },
          ])),  
          ...Object.entries(resolveOneOf<boolean | string[]>([
            {param: 'delete_all_volumes',
              value: request.deleteAllVolumes,
            },
            {param: 'delete_volume_ids',
              value: request.deleteVolumeIds,
            },
          ])),  
          ...Object.entries(resolveOneOf<boolean | string[]>([
            {param: 'keep_all_private_nics',
              value: request.keepAllPrivateNics,
            },
            {param: 'delete_private_nic_ids',
              value: request.deletePrivateNicIds,
            },
          ])),
        ),
        signal: options?.signal,
      },
    )

  
  /**
   * List compatible Instance types. List the Instance types that a given instance could be converted to.
   *
   * @param request - The request {@link ListServerCompatibleTypesRequest}
   * @returns A Promise of ListServerCompatibleTypesResponse
   */
  listServerCompatibleTypes = (request: Readonly<ListServerCompatibleTypesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListServerCompatibleTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/compatible-types`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
        signal: options?.signal,
      },
      unmarshalListServerCompatibleTypesResponse,
    )

  
  /**
   * List Instance types. List available Instance types and their technical details.
   *
   * @param request - The request {@link ListServerTypesRequest}
   * @returns A Promise of ListServerTypesResponse
   */
  listServerTypes = (request: Readonly<ListServerTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListServerTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/server-types`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
        signal: options?.signal,
      },
      unmarshalListServerTypesResponse,
    )

  
  /**
   * Start an Instance. Start a stopped or paused Instance.
   *
   * @param request - The request {@link StartServerRequest}
   * @returns A Promise of Server
   */
  startServer = (request: Readonly<StartServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/start`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Start an Instance as Spot. Spot instances are billed at a discount compared to regular instances. However, they can be interrupted
at any time.
   *
   * @param request - The request {@link StartSpotServerRequest}
   * @returns A Promise of Server
   */
  startSpotServer = (request: Readonly<StartSpotServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/start-spot`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Reboot an Instance. Reboot a running or paused Instance.
   *
   * @param request - The request {@link RebootServerRequest}
   * @returns A Promise of Server
   */
  rebootServer = (request: Readonly<RebootServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Pause an Instance. Pause a running Instance.
   *
   * @param request - The request {@link PauseServerRequest}
   * @returns A Promise of Server
   */
  pauseServer = (request: Readonly<PauseServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/pause`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Stop an Instance. Stop a running or paused Instance.
   *
   * @param request - The request {@link StopServerRequest}
   * @returns A Promise of Server
   */
  stopServer = (request: Readonly<StopServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/stop`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Stop and delete an Instance. Stop and delete a running or paused Instance.
   *
   * @param request - The request {@link StopAndDeleteServerRequest}
   * @returns A Promise of Server
   */
  stopAndDeleteServer = (request: Readonly<StopAndDeleteServerRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalStopAndDeleteServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/stop-and-delete`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Attach a volume to an Instance. Attach a l_ssd or SBS volume to an Instance.
   *
   * @param request - The request {@link AttachServerVolumeRequest}
   * @returns A Promise of Server
   */
  attachServerVolume = (request: Readonly<AttachServerVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAttachServerVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-volume`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Detach a volume from an Instance.
   *
   * @param request - The request {@link DetachServerVolumeRequest}
   * @returns A Promise of Server
   */
  detachServerVolume = (request: Readonly<DetachServerVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalDetachServerVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-volume`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Attach a filesystem volume to an Instance.
   *
   * @param request - The request {@link AttachServerFileSystemRequest}
   * @returns A Promise of Server
   */
  attachServerFileSystem = (request: Readonly<AttachServerFileSystemRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAttachServerFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-filesystem`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Detach a filesystem volume from an Instance.
   *
   * @param request - The request {@link DetachServerFileSystemRequest}
   * @returns A Promise of Server
   */
  detachServerFileSystem = (request: Readonly<DetachServerFileSystemRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalDetachServerFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-filesystem`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Attach an IP to an Instance.
   *
   * @param request - The request {@link AttachServerIPRequest}
   * @returns A Promise of Server
   */
  attachServerIP = (request: Readonly<AttachServerIPRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAttachServerIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-ip`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Detach an IP from an Instance.
   *
   * @param request - The request {@link DetachServerIPRequest}
   * @returns A Promise of Server
   */
  detachServerIP = (request: Readonly<DetachServerIPRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalDetachServerIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-ip`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Set default IP for an Instance. Set the default IP for an Instance.
   *
   * @param request - The request {@link SetServerDefaultIPRequest}
   * @returns A Promise of Server
   */
  setServerDefaultIP = (request: Readonly<SetServerDefaultIPRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalSetServerDefaultIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/set-default-ip`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Attach a private network interface to an Instance.
   *
   * @param request - The request {@link AttachServerPrivateNetworkInterfaceRequest}
   * @returns A Promise of Server
   */
  attachServerPrivateNetworkInterface = (request: Readonly<AttachServerPrivateNetworkInterfaceRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAttachServerPrivateNetworkInterfaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-private-network-interface`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * Detach a private network interface from an Instance.
   *
   * @param request - The request {@link DetachServerPrivateNetworkInterfaceRequest}
   * @returns A Promise of Server
   */
  detachServerPrivateNetworkInterface = (request: Readonly<DetachServerPrivateNetworkInterfaceRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalDetachServerPrivateNetworkInterfaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-private-network-interface`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * List private network interfaces. List all private network interfaces.
   *
   * @param request - The request {@link ListPrivateNetworkInterfacesRequest}
   * @returns A Promise of ListPrivateNetworkInterfacesResponse
   */
  listPrivateNetworkInterfaces = (request: Readonly<ListPrivateNetworkInterfacesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListPrivateNetworkInterfacesResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['private_network_ids', request.privateNetworkIds],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['server_ids', request.serverIds],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListPrivateNetworkInterfacesResponse,
    )

  
  /**
   * Create a private network interface. Create a private network interface linked to a Private Network. It can be attached to an Instance.
   *
   * @param request - The request {@link CreatePrivateNetworkInterfaceRequest}
   * @returns A Promise of PrivateNetworkInterface
   */
  createPrivateNetworkInterface = (request: Readonly<CreatePrivateNetworkInterfaceRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetworkInterface>(
      {
        body: JSON.stringify(
          marshalCreatePrivateNetworkInterfaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces`,
        signal: options?.signal,
      },
      unmarshalPrivateNetworkInterface,
    )

  
  /**
   * Get a private network interface. Get details of a specified private network interface.
   *
   * @param request - The request {@link GetPrivateNetworkInterfaceRequest}
   * @returns A Promise of PrivateNetworkInterface
   */
  getPrivateNetworkInterface = (request: Readonly<GetPrivateNetworkInterfaceRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetworkInterface>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces/${validatePathParam('privateNetworkInterfaceId', request.privateNetworkInterfaceId)}`,
        signal: options?.signal,
      },
      unmarshalPrivateNetworkInterface,
    )
  
  /**
   * Waits for {@link PrivateNetworkInterface} to be in a final state.
   *
   * @param request - The request {@link GetPrivateNetworkInterfaceRequest}
   * @param options - The waiting options
   * @returns A Promise of PrivateNetworkInterface
   */
  waitForPrivateNetworkInterface = (
    request: Readonly<GetPrivateNetworkInterfaceRequest>,
    options?: Readonly<WaitForOptions<PrivateNetworkInterface>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES_INSTANCE.includes(res.status))),
      this.getPrivateNetworkInterface,
      request,
      options,
    )

  
  /**
   * Update a private network interface. Update the properties of a specified private network interface.
   *
   * @param request - The request {@link UpdatePrivateNetworkInterfaceRequest}
   * @returns A Promise of PrivateNetworkInterface
   */
  updatePrivateNetworkInterface = (request: Readonly<UpdatePrivateNetworkInterfaceRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetworkInterface>(
      {
        body: JSON.stringify(
          marshalUpdatePrivateNetworkInterfaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces/${validatePathParam('privateNetworkInterfaceId', request.privateNetworkInterfaceId)}`,
        signal: options?.signal,
      },
      unmarshalPrivateNetworkInterface,
    )

  
  /**
   * Delete a private network interface. Delete a specified private network interface.
   *
   * @param request - The request {@link DeletePrivateNetworkInterfaceRequest}
   */
  deletePrivateNetworkInterface = (request: Readonly<DeletePrivateNetworkInterfaceRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces/${validatePathParam('privateNetworkInterfaceId', request.privateNetworkInterfaceId)}`,
        signal: options?.signal,
      },
    )

  
  detachAndDeletePrivateNetworkInterface = (request: Readonly<DetachAndDeletePrivateNetworkInterfaceRequest>, options?: RequestOptions) =>
    this.client.fetch<PrivateNetworkInterface>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces/${validatePathParam('privateNetworkInterfaceId', request.privateNetworkInterfaceId)}/detach-and-delete`,
        signal: options?.signal,
      },
      unmarshalPrivateNetworkInterface,
    )

  
  /**
   * List placement groups. List all placement groups.
   *
   * @param request - The request {@link ListPlacementGroupsRequest}
   * @returns A Promise of ListPlacementGroupsResponse
   */
  listPlacementGroups = (request: Readonly<ListPlacementGroupsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListPlacementGroupsResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['placement_group_ids', request.placementGroupIds],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListPlacementGroupsResponse,
    )

  
  /**
   * Create a placement group. Create a new placement group.
   *
   * @param request - The request {@link CreatePlacementGroupRequest}
   * @returns A Promise of PlacementGroup
   */
  createPlacementGroup = (request: Readonly<CreatePlacementGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<PlacementGroup>(
      {
        body: JSON.stringify(
          marshalCreatePlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups`,
        signal: options?.signal,
      },
      unmarshalPlacementGroup,
    )

  
  /**
   * Get a placement group. Get a specified placement group.
   *
   * @param request - The request {@link GetPlacementGroupRequest}
   * @returns A Promise of PlacementGroup
   */
  getPlacementGroup = (request: Readonly<GetPlacementGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<PlacementGroup>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
        signal: options?.signal,
      },
      unmarshalPlacementGroup,
    )

  
  /**
   * Update a placement group. Update the properties of a specified placement group.
   *
   * @param request - The request {@link UpdatePlacementGroupRequest}
   * @returns A Promise of PlacementGroup
   */
  updatePlacementGroup = (request: Readonly<UpdatePlacementGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<PlacementGroup>(
      {
        body: JSON.stringify(
          marshalUpdatePlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
        signal: options?.signal,
      },
      unmarshalPlacementGroup,
    )

  
  /**
   * Delete a placement group. Delete a specified placement group.
   *
   * @param request - The request {@link DeletePlacementGroupRequest}
   */
  deletePlacementGroup = (request: Readonly<DeletePlacementGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * List security groups. List all security groups.
   *
   * @param request - The request {@link ListSecurityGroupsRequest}
   * @returns A Promise of ListSecurityGroupsResponse
   */
  listSecurityGroups = (request: Readonly<ListSecurityGroupsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSecurityGroupsResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['security_group_ids', request.securityGroupIds],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListSecurityGroupsResponse,
    )

  
  /**
   * Create a security group. Create a security group with a specified name and description.
   *
   * @param request - The request {@link CreateSecurityGroupRequest}
   * @returns A Promise of SecurityGroup
   */
  createSecurityGroup = (request: Readonly<CreateSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<SecurityGroup>(
      {
        body: JSON.stringify(
          marshalCreateSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups`,
        signal: options?.signal,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Get a security group. Get the details of a specified security group.
   *
   * @param request - The request {@link GetSecurityGroupRequest}
   * @returns A Promise of SecurityGroup
   */
  getSecurityGroup = (request: Readonly<GetSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<SecurityGroup>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
        signal: options?.signal,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Update a security group. Update the properties of a security group.
   *
   * @param request - The request {@link UpdateSecurityGroupRequest}
   * @returns A Promise of SecurityGroup
   */
  updateSecurityGroup = (request: Readonly<UpdateSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<SecurityGroup>(
      {
        body: JSON.stringify(
          marshalUpdateSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
        signal: options?.signal,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Delete a security group. Delete a specified security group.
   *
   * @param request - The request {@link DeleteSecurityGroupRequest}
   */
  deleteSecurityGroup = (request: Readonly<DeleteSecurityGroupRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Add rules to a security group. Add one or more rules to a security group.
   *
   * @param request - The request {@link AddSecurityGroupRulesRequest}
   * @returns A Promise of AddSecurityGroupRulesResponse
   */
  addSecurityGroupRules = (request: Readonly<AddSecurityGroupRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<AddSecurityGroupRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddSecurityGroupRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-group-rules`,
        signal: options?.signal,
      },
      unmarshalAddSecurityGroupRulesResponse,
    )

  
  /**
   * Set all rules of a security group. Replace all rules of a specified security group with the provided rules.
   *
   * @param request - The request {@link SetSecurityGroupRulesRequest}
   * @returns A Promise of SecurityGroup
   */
  setSecurityGroupRules = (request: Readonly<SetSecurityGroupRulesRequest>, options?: RequestOptions) =>
    this.client.fetch<SecurityGroup>(
      {
        body: JSON.stringify(
          marshalSetSecurityGroupRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-group-rules`,
        signal: options?.signal,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Update a security group rule. Update the properties of a rule from a specified security group.
   *
   * @param request - The request {@link UpdateSecurityGroupRuleRequest}
   * @returns A Promise of SecurityGroup
   */
  updateSecurityGroupRule = (request: Readonly<UpdateSecurityGroupRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<SecurityGroup>(
      {
        body: JSON.stringify(
          marshalUpdateSecurityGroupRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-group-rules/${validatePathParam('securityGroupRuleId', request.securityGroupRuleId)}`,
        signal: options?.signal,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Delete rules from a security group. Delete specified security groups.
   *
   * @param request - The request {@link DeleteSecurityGroupRulesRequest}
   */
  deleteSecurityGroupRules = (request: Readonly<DeleteSecurityGroupRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalDeleteSecurityGroupRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-group-rules`,
        signal: options?.signal,
      },
    )

  
  /**
   * List user data keys. List all user data keys registered on a specified Instance.
   *
   * @param request - The request {@link ListUserDataKeysRequest}
   * @returns A Promise of ListUserDataKeysResponse
   */
  listUserDataKeys = (request: Readonly<ListUserDataKeysRequest>, options?: RequestOptions) =>
    this.client.fetch<ListUserDataKeysResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
        signal: options?.signal,
      },
      unmarshalListUserDataKeysResponse,
    )

  
  /**
   * Get user data. Get the content of a user data with a specified key on an Instance.
   *
   * @param request - The request {@link GetUserDataRequest}
   * @returns A Promise of UserData
   */
  getUserData = (request: Readonly<GetUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/${validatePathParam('key', request.key)}`,
        signal: options?.signal,
      },
      unmarshalUserData,
    )

  
  /**
   * Add/set user data. Add or update a user data with a specified key on an Instance.
   *
   * @param request - The request {@link SetUserDataRequest}
   */
  setUserData = (request: Readonly<SetUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalSetUserDataRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/${validatePathParam('key', request.key)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Delete user data. Delete a specified key from an Instance's user data.
   *
   * @param request - The request {@link DeleteUserDataRequest}
   */
  deleteUserData = (request: Readonly<DeleteUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/${validatePathParam('key', request.key)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get cloud-init user data. Get the cloud-init configuration of a specified Instance.
   *
   * @param request - The request {@link GetServerCloudInitRequest}
   * @returns A Promise of UserData
   */
  getServerCloudInit = (request: Readonly<GetServerCloudInitRequest>, options?: RequestOptions) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/cloud-init`,
        signal: options?.signal,
      },
      unmarshalUserData,
    )

  
  /**
   * Set cloud-init user data. Set the cloud-init configuration for a specified Instance.
   *
   * @param request - The request {@link SetServerCloudInitRequest}
   */
  setServerCloudInit = (request: Readonly<SetServerCloudInitRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalSetServerCloudInitRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/cloud-init`,
        signal: options?.signal,
      },
    )

  
  /**
   * List templates. List all available templates.
   *
   * @param request - The request {@link ListTemplatesRequest}
   * @returns A Promise of ListTemplatesResponse
   */
  listTemplates = (request: Readonly<ListTemplatesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListTemplatesResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['placement_group_ids', request.placementGroupIds],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['security_group_ids', request.securityGroupIds],
          ['server_tags', request.serverTags],
          ['tags', request.tags],
          ['template_ids', request.templateIds],
        ),
        signal: options?.signal,
      },
      unmarshalListTemplatesResponse,
    )

  
  /**
   * Create a template. Create a new template from an Instance.
   *
   * @param request - The request {@link CreateTemplateRequest}
   * @returns A Promise of Template
   */
  createTemplate = (request: Readonly<CreateTemplateRequest>, options?: RequestOptions) =>
    this.client.fetch<Template>(
      {
        body: JSON.stringify(
          marshalCreateTemplateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates`,
        signal: options?.signal,
      },
      unmarshalTemplate,
    )

  
  /**
   * Get a template. Get details of a specified template.
   *
   * @param request - The request {@link GetTemplateRequest}
   * @returns A Promise of Template
   */
  getTemplate = (request: Readonly<GetTemplateRequest>, options?: RequestOptions) =>
    this.client.fetch<Template>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}`,
        signal: options?.signal,
      },
      unmarshalTemplate,
    )

  
  /**
   * Update a template. Update the properties of a template.
   *
   * @param request - The request {@link UpdateTemplateRequest}
   * @returns A Promise of Template
   */
  updateTemplate = (request: Readonly<UpdateTemplateRequest>, options?: RequestOptions) =>
    this.client.fetch<Template>(
      {
        body: JSON.stringify(
          marshalUpdateTemplateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}`,
        signal: options?.signal,
      },
      unmarshalTemplate,
    )

  
  /**
   * Delete a template. Delete a specified template.
   *
   * @param request - The request {@link DeleteTemplateRequest}
   */
  deleteTemplate = (request: Readonly<DeleteTemplateRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * List template user data keys. List all user data keys of a template.
   *
   * @param request - The request {@link ListTemplateUserDataKeysRequest}
   * @returns A Promise of ListTemplateUserDataKeysResponse
   */
  listTemplateUserDataKeys = (request: Readonly<ListTemplateUserDataKeysRequest>, options?: RequestOptions) =>
    this.client.fetch<ListTemplateUserDataKeysResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
        signal: options?.signal,
      },
      unmarshalListTemplateUserDataKeysResponse,
    )

  
  /**
   * Get template user data. Get a specific user data key of a template.
   *
   * @param request - The request {@link GetTemplateUserDataRequest}
   * @returns A Promise of UserData
   */
  getTemplateUserData = (request: Readonly<GetTemplateUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/${validatePathParam('key', request.key)}`,
        signal: options?.signal,
      },
      unmarshalUserData,
    )

  
  /**
   * Set template user data. Set a user data key of a template.
   *
   * @param request - The request {@link SetTemplateUserDataRequest}
   */
  setTemplateUserData = (request: Readonly<SetTemplateUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalSetTemplateUserDataRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/${validatePathParam('key', request.key)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Delete template user data. Delete a specific user data key of a template.
   *
   * @param request - The request {@link DeleteTemplateUserDataRequest}
   */
  deleteTemplateUserData = (request: Readonly<DeleteTemplateUserDataRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/${validatePathParam('key', request.key)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Get template cloud-init. Get the cloud-init configuration of a template.
   *
   * @param request - The request {@link GetTemplateCloudInitRequest}
   * @returns A Promise of UserData
   */
  getTemplateCloudInit = (request: Readonly<GetTemplateCloudInitRequest>, options?: RequestOptions) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/cloud-init`,
        signal: options?.signal,
      },
      unmarshalUserData,
    )

  
  /**
   * Set template cloud-init. Set the cloud-init configuration of a template.
   *
   * @param request - The request {@link SetTemplateCloudInitRequest}
   */
  setTemplateCloudInit = (request: Readonly<SetTemplateCloudInitRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalSetTemplateCloudInitRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/cloud-init`,
        signal: options?.signal,
      },
    )

  
  /**
   * Check a template. Validate that a template is usable.
   *
   * @param request - The request {@link CheckTemplateRequest}
   */
  checkTemplate = (request: Readonly<CheckTemplateRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/check`,
        signal: options?.signal,
      },
    )

  
  /**
   * Create a server from a template. Create a new Instance using a specified template.
   *
   * @param request - The request {@link CreateServerFromTemplateRequest}
   * @returns A Promise of Server
   */
  createServerFromTemplate = (request: Readonly<CreateServerFromTemplateRequest>, options?: RequestOptions) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalCreateServerFromTemplateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/create-server`,
        signal: options?.signal,
      },
      unmarshalServer,
    )

  
  /**
   * List Dedicated Pools. List Dedicated Pools for an organization.
   *
   * @param request - The request {@link ListDedicatedPoolsRequest}
   * @returns A Promise of ListDedicatedPoolsResponse
   */
  listDedicatedPools = (request: Readonly<ListDedicatedPoolsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListDedicatedPoolsResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dedicated-pools`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
        signal: options?.signal,
      },
      unmarshalListDedicatedPoolsResponse,
    )

  
  /**
   * Get a Dedicated Pool. Get detailed information about a Dedicated Pool.
   *
   * @param request - The request {@link GetDedicatedPoolRequest}
   * @returns A Promise of DedicatedPool
   */
  getDedicatedPool = (request: Readonly<GetDedicatedPoolRequest>, options?: RequestOptions) =>
    this.client.fetch<DedicatedPool>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dedicated-pools/${validatePathParam('dedicatedPoolId', request.dedicatedPoolId)}`,
        signal: options?.signal,
      },
      unmarshalDedicatedPool,
    )

  
  /**
   * Update a Dedicated Pool. Update the name and tags of a Dedicated Pool.
   *
   * @param request - The request {@link UpdateDedicatedPoolRequest}
   * @returns A Promise of DedicatedPool
   */
  updateDedicatedPool = (request: Readonly<UpdateDedicatedPoolRequest>, options?: RequestOptions) =>
    this.client.fetch<DedicatedPool>(
      {
        body: JSON.stringify(
          marshalUpdateDedicatedPoolRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dedicated-pools/${validatePathParam('dedicatedPoolId', request.dedicatedPoolId)}`,
        signal: options?.signal,
      },
      unmarshalDedicatedPool,
    )

  
  /**
   * List Instance types for a Dedicated Pool. List Instance types available in a Dedicated Pool and their technical details.
   *
   * @param request - The request {@link ListDedicatedPoolServerTypesRequest}
   * @returns A Promise of ListDedicatedPoolServerTypesResponse
   */
  listDedicatedPoolServerTypes = (request: Readonly<ListDedicatedPoolServerTypesRequest>, options?: RequestOptions) =>
    this.client.fetch<ListDedicatedPoolServerTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/dedicated-pools/${validatePathParam('dedicatedPoolId', request.dedicatedPoolId)}/server-types`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
        signal: options?.signal,
      },
      unmarshalListDedicatedPoolServerTypesResponse,
    )

  
}

/**
 * Instance Volume API.

This API allows you to manage Instance local and scratch volumes.
 */
export class VolumeAPI extends ParentAPI {
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
   * List volume types. List all volume types and their technical details.
   *
   * @param request - The request {@link VolumeApiListVolumeTypesRequest}
   * @returns A Promise of ListVolumeTypesResponse
   */
  listVolumeTypes = (request: Readonly<VolumeApiListVolumeTypesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVolumeTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volume-types`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
        signal: options?.signal,
      },
      unmarshalListVolumeTypesResponse,
    )

  
  /**
   * List volumes.
   *
   * @param request - The request {@link VolumeApiListVolumesRequest}
   * @returns A Promise of ListVolumesResponse
   */
  listVolumes = (request: Readonly<VolumeApiListVolumesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListVolumesResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['tags', request.tags],
          ['volume_ids', request.volumeIds],
          ['volume_type', request.volumeType],
        ),
        signal: options?.signal,
      },
      unmarshalListVolumesResponse,
    )

  
  /**
   * Create a volume. Create a volume of a specified type.
   *
   * @param request - The request {@link VolumeApiCreateVolumeRequest}
   * @returns A Promise of Volume
   */
  createVolume = (request: Readonly<VolumeApiCreateVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<Volume>(
      {
        body: JSON.stringify(
          marshalVolumeApiCreateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes`,
        signal: options?.signal,
      },
      unmarshalVolume,
    )

  
  /**
   * Get a volume. Get a specified volume.
   *
   * @param request - The request {@link VolumeApiGetVolumeRequest}
   * @returns A Promise of Volume
   */
  getVolume = (request: Readonly<VolumeApiGetVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<Volume>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
        signal: options?.signal,
      },
      unmarshalVolume,
    )
  
  /**
   * Waits for {@link Volume} to be in a final state.
   *
   * @param request - The request {@link VolumeApiGetVolumeRequest}
   * @param options - The waiting options
   * @returns A Promise of Volume
   */
  waitForVolume = (
    request: Readonly<VolumeApiGetVolumeRequest>,
    options?: Readonly<WaitForOptions<Volume>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!VOLUME_TRANSIENT_STATUSES_INSTANCE.includes(res.status))),
      this.getVolume,
      request,
      options,
    )

  
  /**
   * Update a volume. Update the properties of a specified volume.
   *
   * @param request - The request {@link VolumeApiUpdateVolumeRequest}
   * @returns A Promise of Volume
   */
  updateVolume = (request: Readonly<VolumeApiUpdateVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<Volume>(
      {
        body: JSON.stringify(
          marshalVolumeApiUpdateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
        signal: options?.signal,
      },
      unmarshalVolume,
    )

  
  /**
   * Delete a volume. Delete a specified volume.
   *
   * @param request - The request {@link VolumeApiDeleteVolumeRequest}
   */
  deleteVolume = (request: Readonly<VolumeApiDeleteVolumeRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * List snapshots. List all snapshots of an Organization.
   *
   * @param request - The request {@link VolumeApiListSnapshotsRequest}
   * @returns A Promise of ListSnapshotsResponse
   */
  listSnapshots = (request: Readonly<VolumeApiListSnapshotsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSnapshotsResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots`,
        urlParams: urlParams(
          ['base_volume_id', request.baseVolumeId],
          ['name', request.name],
          ['order_by', request.orderBy],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['project_id', request.projectId ?? this.client.settings.defaultProjectId],
          ['snapshot_ids', request.snapshotIds],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListSnapshotsResponse,
    )

  
  /**
   * Create a snapshot from a specified volume. Create a snapshot from a specified l_ssd volume.
   *
   * @param request - The request {@link VolumeApiCreateSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  createSnapshot = (request: Readonly<VolumeApiCreateSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalVolumeApiCreateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots`,
        signal: options?.signal,
      },
      unmarshalSnapshot,
    )

  
  /**
   * Get a snapshot. Get details of a specified snapshot.
   *
   * @param request - The request {@link VolumeApiGetSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  getSnapshot = (request: Readonly<VolumeApiGetSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
      unmarshalSnapshot,
    )
  
  /**
   * Waits for {@link Snapshot} to be in a final state.
   *
   * @param request - The request {@link VolumeApiGetSnapshotRequest}
   * @param options - The waiting options
   * @returns A Promise of Snapshot
   */
  waitForSnapshot = (
    request: Readonly<VolumeApiGetSnapshotRequest>,
    options?: Readonly<WaitForOptions<Snapshot>>,
  ) =>
    waitForResource(
      options?.stop ?? (res => Promise.resolve(!SNAPSHOT_TRANSIENT_STATUSES_INSTANCE.includes(res.status))),
      this.getSnapshot,
      request,
      options,
    )

  
  /**
   * Update a snapshot. Update the properties of a snapshot.
   *
   * @param request - The request {@link VolumeApiUpdateSnapshotRequest}
   * @returns A Promise of Snapshot
   */
  updateSnapshot = (request: Readonly<VolumeApiUpdateSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalVolumeApiUpdateSnapshotRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
      unmarshalSnapshot,
    )

  
  /**
   * Delete a snapshot. Delete a specified snapshot.
   *
   * @param request - The request {@link VolumeApiDeleteSnapshotRequest}
   */
  deleteSnapshot = (request: Readonly<VolumeApiDeleteSnapshotRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Import a snapshot from Object Storage. Import a snapshot from a QCOW2 file stored in Object Storage.
   *
   * @param request - The request {@link VolumeApiImportSnapshotFromObjectStorageRequest}
   * @returns A Promise of Snapshot
   */
  importSnapshotFromObjectStorage = (request: Readonly<VolumeApiImportSnapshotFromObjectStorageRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalVolumeApiImportSnapshotFromObjectStorageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/import-from-object-storage`,
        signal: options?.signal,
      },
      unmarshalSnapshot,
    )

  
  /**
   * Export a snapshot to Object Storage. Export a snapshot to a specified Object Storage bucket in the same region.
   *
   * @param request - The request {@link VolumeApiExportSnapshotToObjectStorageRequest}
   * @returns A Promise of Snapshot
   */
  exportSnapshotToObjectStorage = (request: Readonly<VolumeApiExportSnapshotToObjectStorageRequest>, options?: RequestOptions) =>
    this.client.fetch<Snapshot>(
      {
        body: JSON.stringify(
          marshalVolumeApiExportSnapshotToObjectStorageRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/snapshots/${validatePathParam('snapshotId', request.snapshotId)}/export-to-object-storage`,
        signal: options?.signal,
      },
      unmarshalSnapshot,
    )

  
}

