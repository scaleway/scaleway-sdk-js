// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  resolveOneOf,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { WaitForOptions, ApiLocality,} from '@scaleway/sdk-client'
import {PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES as PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES_INSTANCE,SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_INSTANCE,} from './content.gen.js'
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
  marshalDeleteSecurityGroupRulesRequest,
  marshalDetachServerFileSystemRequest,
  marshalDetachServerIPRequest,
  marshalDetachServerPrivateNetworkInterfaceRequest,
  marshalDetachServerVolumeRequest,
  unmarshalListPlacementGroupsResponse,
  unmarshalListPrivateNetworkInterfacesResponse,
  unmarshalListSecurityGroupsResponse,
  unmarshalListServerTypesResponse,
  unmarshalListServersResponse,
  unmarshalListTemplateUserDataKeysResponse,
  unmarshalListTemplatesResponse,
  unmarshalListUserDataKeysResponse,
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
  marshalStopAndDeleteServerRequest,
  unmarshalTemplate,
  marshalUpdatePlacementGroupRequest,
  marshalUpdatePrivateNetworkInterfaceRequest,
  marshalUpdateSecurityGroupRequest,
  marshalUpdateSecurityGroupRuleRequest,
  marshalUpdateServerRequest,
  marshalUpdateTemplateRequest,
  unmarshalUserData,
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
  DeletePlacementGroupRequest,
  DeletePrivateNetworkInterfaceRequest,
  DeleteSecurityGroupRequest,
  DeleteSecurityGroupRulesRequest,
  DeleteServerRequest,
  DeleteTemplateRequest,
  DeleteTemplateUserDataRequest,
  DeleteUserDataRequest,
  DetachServerFileSystemRequest,
  DetachServerIPRequest,
  DetachServerPrivateNetworkInterfaceRequest,
  DetachServerVolumeRequest,
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
  ListPlacementGroupsRequest,
  ListPlacementGroupsResponse,
  ListPrivateNetworkInterfacesRequest,
  ListPrivateNetworkInterfacesResponse,
  ListSecurityGroupsRequest,
  ListSecurityGroupsResponse,
  ListServerTypesRequest,
  ListServerTypesResponse,
  ListServersRequest,
  ListServersResponse,
  ListTemplateUserDataKeysRequest,
  ListTemplateUserDataKeysResponse,
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListUserDataKeysRequest,
  ListUserDataKeysResponse,
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
  StartServerRequest,
  StopAndDeleteServerRequest,
  StopServerRequest,
  Template,
  UpdatePlacementGroupRequest,
  UpdatePrivateNetworkInterfaceRequest,
  UpdateSecurityGroupRequest,
  UpdateSecurityGroupRuleRequest,
  UpdateServerRequest,
  UpdateTemplateRequest,
  UserData,
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
      ],
    })
  
  /**
   * Get resource counts. Get counts of various resources (e.g. servers, volumes).
   *
   * @param request - The request {@link GetResourceCountsRequest}
   * @returns A Promise of ResourceCounts
   */
  getResourceCounts = (request: Readonly<GetResourceCountsRequest> = {}) =>
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
      },
      unmarshalResourceCounts,
    )

  
  /**
   * List all Instances.
   *
   * @param request - The request {@link ListServersRequest}
   * @returns A Promise of ListServersResponse
   */
  listServers = (request: Readonly<ListServersRequest> = {}) =>
    this.client.fetch<ListServersResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
        urlParams: urlParams(
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
      },
      unmarshalListServersResponse,
    )

  
  /**
   * Create an Instance. Create a new Instance of a specified server_type.
   *
   * @param request - The request {@link CreateServerRequest}
   * @returns A Promise of Server
   */
  createServer = (request: Readonly<CreateServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalCreateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers`,
      },
      unmarshalServer,
    )

  
  /**
   * Get an Instance. Get the details of a specified Instance.
   *
   * @param request - The request {@link GetServerRequest}
   * @returns A Promise of Server
   */
  getServer = (request: Readonly<GetServerRequest>) =>
    this.client.fetch<Server>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
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
  updateServer = (request: Readonly<UpdateServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalUpdateServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}`,
      },
      unmarshalServer,
    )

  
  /**
   * Delete an Instance. Delete a specified Instance.
   *
   * @param request - The request {@link DeleteServerRequest}
   */
  deleteServer = (request: Readonly<DeleteServerRequest>) =>
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
      },
    )

  
  /**
   * List Instance types. List available Instance types and their technical details.
   *
   * @param request - The request {@link ListServerTypesRequest}
   * @returns A Promise of ListServerTypesResponse
   */
  listServerTypes = (request: Readonly<ListServerTypesRequest> = {}) =>
    this.client.fetch<ListServerTypesResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/server-types`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
      },
      unmarshalListServerTypesResponse,
    )

  
  /**
   * Start an Instance. Start a stopped or paused Instance.
   *
   * @param request - The request {@link StartServerRequest}
   * @returns A Promise of Server
   */
  startServer = (request: Readonly<StartServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/start`,
      },
      unmarshalServer,
    )

  
  /**
   * Reboot an Instance. Reboot a running or paused Instance.
   *
   * @param request - The request {@link RebootServerRequest}
   * @returns A Promise of Server
   */
  rebootServer = (request: Readonly<RebootServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/reboot`,
      },
      unmarshalServer,
    )

  
  /**
   * Pause an Instance. Pause a running Instance.
   *
   * @param request - The request {@link PauseServerRequest}
   * @returns A Promise of Server
   */
  pauseServer = (request: Readonly<PauseServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/pause`,
      },
      unmarshalServer,
    )

  
  /**
   * Stop an Instance. Stop a running or paused Instance.
   *
   * @param request - The request {@link StopServerRequest}
   * @returns A Promise of Server
   */
  stopServer = (request: Readonly<StopServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/stop`,
      },
      unmarshalServer,
    )

  
  /**
   * Stop and delete an Instance. Stop and delete a running or paused Instance.
   *
   * @param request - The request {@link StopAndDeleteServerRequest}
   * @returns A Promise of Server
   */
  stopAndDeleteServer = (request: Readonly<StopAndDeleteServerRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalStopAndDeleteServerRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/stop-and-delete`,
      },
      unmarshalServer,
    )

  
  /**
   * Attach a volume to an Instance. Attach a l_ssd or SBS volume to an Instance.
   *
   * @param request - The request {@link AttachServerVolumeRequest}
   * @returns A Promise of Server
   */
  attachServerVolume = (request: Readonly<AttachServerVolumeRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAttachServerVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-volume`,
      },
      unmarshalServer,
    )

  
  /**
   * Detach a volume from an Instance.
   *
   * @param request - The request {@link DetachServerVolumeRequest}
   * @returns A Promise of Server
   */
  detachServerVolume = (request: Readonly<DetachServerVolumeRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalDetachServerVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-volume`,
      },
      unmarshalServer,
    )

  
  /**
   * Attach a filesystem volume to an Instance.
   *
   * @param request - The request {@link AttachServerFileSystemRequest}
   * @returns A Promise of Server
   */
  attachServerFileSystem = (request: Readonly<AttachServerFileSystemRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAttachServerFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-filesystem`,
      },
      unmarshalServer,
    )

  
  /**
   * Detach a filesystem volume from an Instance.
   *
   * @param request - The request {@link DetachServerFileSystemRequest}
   * @returns A Promise of Server
   */
  detachServerFileSystem = (request: Readonly<DetachServerFileSystemRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalDetachServerFileSystemRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-filesystem`,
      },
      unmarshalServer,
    )

  
  /**
   * Attach an IP to an Instance.
   *
   * @param request - The request {@link AttachServerIPRequest}
   * @returns A Promise of Server
   */
  attachServerIP = (request: Readonly<AttachServerIPRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAttachServerIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-ip`,
      },
      unmarshalServer,
    )

  
  /**
   * Detach an IP from an Instance.
   *
   * @param request - The request {@link DetachServerIPRequest}
   * @returns A Promise of Server
   */
  detachServerIP = (request: Readonly<DetachServerIPRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalDetachServerIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-ip`,
      },
      unmarshalServer,
    )

  
  /**
   * Set default IP for an Instance. Set the default IP for an Instance.
   *
   * @param request - The request {@link SetServerDefaultIPRequest}
   * @returns A Promise of Server
   */
  setServerDefaultIP = (request: Readonly<SetServerDefaultIPRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalSetServerDefaultIPRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/set-default-ip`,
      },
      unmarshalServer,
    )

  
  /**
   * Attach a private network interface to an Instance.
   *
   * @param request - The request {@link AttachServerPrivateNetworkInterfaceRequest}
   * @returns A Promise of Server
   */
  attachServerPrivateNetworkInterface = (request: Readonly<AttachServerPrivateNetworkInterfaceRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalAttachServerPrivateNetworkInterfaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/attach-private-network-interface`,
      },
      unmarshalServer,
    )

  
  /**
   * Detach a private network interface from an Instance.
   *
   * @param request - The request {@link DetachServerPrivateNetworkInterfaceRequest}
   * @returns A Promise of Server
   */
  detachServerPrivateNetworkInterface = (request: Readonly<DetachServerPrivateNetworkInterfaceRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalDetachServerPrivateNetworkInterfaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/detach-private-network-interface`,
      },
      unmarshalServer,
    )

  
  /**
   * List private network interfaces. List all private network interfaces.
   *
   * @param request - The request {@link ListPrivateNetworkInterfacesRequest}
   * @returns A Promise of ListPrivateNetworkInterfacesResponse
   */
  listPrivateNetworkInterfaces = (request: Readonly<ListPrivateNetworkInterfacesRequest> = {}) =>
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
          ['security_group_ids', request.securityGroupIds],
          ['server_ids', request.serverIds],
          ['tags', request.tags],
        ),
      },
      unmarshalListPrivateNetworkInterfacesResponse,
    )

  
  /**
   * Create a private network interface. Create a private network interface linked to a Private Network. It can be attached to an Instance.
   *
   * @param request - The request {@link CreatePrivateNetworkInterfaceRequest}
   * @returns A Promise of PrivateNetworkInterface
   */
  createPrivateNetworkInterface = (request: Readonly<CreatePrivateNetworkInterfaceRequest>) =>
    this.client.fetch<PrivateNetworkInterface>(
      {
        body: JSON.stringify(
          marshalCreatePrivateNetworkInterfaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces`,
      },
      unmarshalPrivateNetworkInterface,
    )

  
  /**
   * Get a private network interface. Get details of a specified private network interface.
   *
   * @param request - The request {@link GetPrivateNetworkInterfaceRequest}
   * @returns A Promise of PrivateNetworkInterface
   */
  getPrivateNetworkInterface = (request: Readonly<GetPrivateNetworkInterfaceRequest>) =>
    this.client.fetch<PrivateNetworkInterface>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces/${validatePathParam('privateNetworkInterfaceId', request.privateNetworkInterfaceId)}`,
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
  updatePrivateNetworkInterface = (request: Readonly<UpdatePrivateNetworkInterfaceRequest>) =>
    this.client.fetch<PrivateNetworkInterface>(
      {
        body: JSON.stringify(
          marshalUpdatePrivateNetworkInterfaceRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces/${validatePathParam('privateNetworkInterfaceId', request.privateNetworkInterfaceId)}`,
      },
      unmarshalPrivateNetworkInterface,
    )

  
  /**
   * Delete a private network interface. Delete a specified private network interface.
   *
   * @param request - The request {@link DeletePrivateNetworkInterfaceRequest}
   */
  deletePrivateNetworkInterface = (request: Readonly<DeletePrivateNetworkInterfaceRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces/${validatePathParam('privateNetworkInterfaceId', request.privateNetworkInterfaceId)}`,
      },
    )

  
  /**
   * List placement groups. List all placement groups.
   *
   * @param request - The request {@link ListPlacementGroupsRequest}
   * @returns A Promise of ListPlacementGroupsResponse
   */
  listPlacementGroups = (request: Readonly<ListPlacementGroupsRequest> = {}) =>
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
      },
      unmarshalListPlacementGroupsResponse,
    )

  
  /**
   * Create a placement group. Create a new placement group.
   *
   * @param request - The request {@link CreatePlacementGroupRequest}
   * @returns A Promise of PlacementGroup
   */
  createPlacementGroup = (request: Readonly<CreatePlacementGroupRequest>) =>
    this.client.fetch<PlacementGroup>(
      {
        body: JSON.stringify(
          marshalCreatePlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups`,
      },
      unmarshalPlacementGroup,
    )

  
  /**
   * Get a placement group. Get a specified placement group.
   *
   * @param request - The request {@link GetPlacementGroupRequest}
   * @returns A Promise of PlacementGroup
   */
  getPlacementGroup = (request: Readonly<GetPlacementGroupRequest>) =>
    this.client.fetch<PlacementGroup>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
      },
      unmarshalPlacementGroup,
    )

  
  /**
   * Update a placement group. Update the properties of a specified placement group.
   *
   * @param request - The request {@link UpdatePlacementGroupRequest}
   * @returns A Promise of PlacementGroup
   */
  updatePlacementGroup = (request: Readonly<UpdatePlacementGroupRequest>) =>
    this.client.fetch<PlacementGroup>(
      {
        body: JSON.stringify(
          marshalUpdatePlacementGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
      },
      unmarshalPlacementGroup,
    )

  
  /**
   * Delete a placement group. Delete a specified placement group.
   *
   * @param request - The request {@link DeletePlacementGroupRequest}
   */
  deletePlacementGroup = (request: Readonly<DeletePlacementGroupRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
      },
    )

  
  /**
   * List security groups. List all security groups.
   *
   * @param request - The request {@link ListSecurityGroupsRequest}
   * @returns A Promise of ListSecurityGroupsResponse
   */
  listSecurityGroups = (request: Readonly<ListSecurityGroupsRequest> = {}) =>
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
      },
      unmarshalListSecurityGroupsResponse,
    )

  
  /**
   * Create a security group. Create a security group with a specified name and description.
   *
   * @param request - The request {@link CreateSecurityGroupRequest}
   * @returns A Promise of SecurityGroup
   */
  createSecurityGroup = (request: Readonly<CreateSecurityGroupRequest>) =>
    this.client.fetch<SecurityGroup>(
      {
        body: JSON.stringify(
          marshalCreateSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups`,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Get a security group. Get the details of a specified security group.
   *
   * @param request - The request {@link GetSecurityGroupRequest}
   * @returns A Promise of SecurityGroup
   */
  getSecurityGroup = (request: Readonly<GetSecurityGroupRequest>) =>
    this.client.fetch<SecurityGroup>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Update a security group. Update the properties of a security group.
   *
   * @param request - The request {@link UpdateSecurityGroupRequest}
   * @returns A Promise of SecurityGroup
   */
  updateSecurityGroup = (request: Readonly<UpdateSecurityGroupRequest>) =>
    this.client.fetch<SecurityGroup>(
      {
        body: JSON.stringify(
          marshalUpdateSecurityGroupRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Delete a security group. Delete a specified security group.
   *
   * @param request - The request {@link DeleteSecurityGroupRequest}
   */
  deleteSecurityGroup = (request: Readonly<DeleteSecurityGroupRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
      },
    )

  
  /**
   * Add rules to a security group. Add one or more rules to a security group.
   *
   * @param request - The request {@link AddSecurityGroupRulesRequest}
   * @returns A Promise of AddSecurityGroupRulesResponse
   */
  addSecurityGroupRules = (request: Readonly<AddSecurityGroupRulesRequest>) =>
    this.client.fetch<AddSecurityGroupRulesResponse>(
      {
        body: JSON.stringify(
          marshalAddSecurityGroupRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-group-rules`,
      },
      unmarshalAddSecurityGroupRulesResponse,
    )

  
  /**
   * Set all rules of a security group. Replace all rules of a specified security group with the provided rules.
   *
   * @param request - The request {@link SetSecurityGroupRulesRequest}
   * @returns A Promise of SecurityGroup
   */
  setSecurityGroupRules = (request: Readonly<SetSecurityGroupRulesRequest>) =>
    this.client.fetch<SecurityGroup>(
      {
        body: JSON.stringify(
          marshalSetSecurityGroupRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-group-rules`,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Update a security group rule. Update the properties of a rule from a specified security group.
   *
   * @param request - The request {@link UpdateSecurityGroupRuleRequest}
   * @returns A Promise of SecurityGroup
   */
  updateSecurityGroupRule = (request: Readonly<UpdateSecurityGroupRuleRequest>) =>
    this.client.fetch<SecurityGroup>(
      {
        body: JSON.stringify(
          marshalUpdateSecurityGroupRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-group-rules/${validatePathParam('securityGroupRuleId', request.securityGroupRuleId)}`,
      },
      unmarshalSecurityGroup,
    )

  
  /**
   * Delete rules from a security group. Delete specified security groups.
   *
   * @param request - The request {@link DeleteSecurityGroupRulesRequest}
   */
  deleteSecurityGroupRules = (request: Readonly<DeleteSecurityGroupRulesRequest> = {}) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalDeleteSecurityGroupRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-group-rules`,
      },
    )

  
  /**
   * List user data keys. List all user data keys registered on a specified Instance.
   *
   * @param request - The request {@link ListUserDataKeysRequest}
   * @returns A Promise of ListUserDataKeysResponse
   */
  listUserDataKeys = (request: Readonly<ListUserDataKeysRequest>) =>
    this.client.fetch<ListUserDataKeysResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
      },
      unmarshalListUserDataKeysResponse,
    )

  
  /**
   * Get user data. Get the content of a user data with a specified key on an Instance.
   *
   * @param request - The request {@link GetUserDataRequest}
   * @returns A Promise of UserData
   */
  getUserData = (request: Readonly<GetUserDataRequest>) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/${validatePathParam('key', request.key)}`,
      },
      unmarshalUserData,
    )

  
  /**
   * Add/set user data. Add or update a user data with a specified key on an Instance.
   *
   * @param request - The request {@link SetUserDataRequest}
   */
  setUserData = (request: Readonly<SetUserDataRequest>) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalSetUserDataRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/${validatePathParam('key', request.key)}`,
      },
    )

  
  /**
   * Delete user data. Delete a specified key from an Instance's user data.
   *
   * @param request - The request {@link DeleteUserDataRequest}
   */
  deleteUserData = (request: Readonly<DeleteUserDataRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/${validatePathParam('key', request.key)}`,
      },
    )

  
  /**
   * Get cloud-init user data. Get the cloud-init configuration of a specified Instance.
   *
   * @param request - The request {@link GetServerCloudInitRequest}
   * @returns A Promise of UserData
   */
  getServerCloudInit = (request: Readonly<GetServerCloudInitRequest>) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/cloud-init`,
      },
      unmarshalUserData,
    )

  
  /**
   * Set cloud-init user data. Set the cloud-init configuration for a specified Instance.
   *
   * @param request - The request {@link SetServerCloudInitRequest}
   */
  setServerCloudInit = (request: Readonly<SetServerCloudInitRequest>) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalSetServerCloudInitRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/cloud-init`,
      },
    )

  
  /**
   * List templates. List all available templates.
   *
   * @param request - The request {@link ListTemplatesRequest}
   * @returns A Promise of ListTemplatesResponse
   */
  listTemplates = (request: Readonly<ListTemplatesRequest> = {}) =>
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
      },
      unmarshalListTemplatesResponse,
    )

  
  /**
   * Create a template. Create a new template from an Instance.
   *
   * @param request - The request {@link CreateTemplateRequest}
   * @returns A Promise of Template
   */
  createTemplate = (request: Readonly<CreateTemplateRequest>) =>
    this.client.fetch<Template>(
      {
        body: JSON.stringify(
          marshalCreateTemplateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates`,
      },
      unmarshalTemplate,
    )

  
  /**
   * Get a template. Get details of a specified template.
   *
   * @param request - The request {@link GetTemplateRequest}
   * @returns A Promise of Template
   */
  getTemplate = (request: Readonly<GetTemplateRequest>) =>
    this.client.fetch<Template>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}`,
      },
      unmarshalTemplate,
    )

  
  /**
   * Update a template. Update the properties of a template.
   *
   * @param request - The request {@link UpdateTemplateRequest}
   * @returns A Promise of Template
   */
  updateTemplate = (request: Readonly<UpdateTemplateRequest>) =>
    this.client.fetch<Template>(
      {
        body: JSON.stringify(
          marshalUpdateTemplateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}`,
      },
      unmarshalTemplate,
    )

  
  /**
   * Delete a template. Delete a specified template.
   *
   * @param request - The request {@link DeleteTemplateRequest}
   */
  deleteTemplate = (request: Readonly<DeleteTemplateRequest>) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}`,
      },
    )

  
  /**
   * List template user data keys. List all user data keys of a template.
   *
   * @param request - The request {@link ListTemplateUserDataKeysRequest}
   * @returns A Promise of ListTemplateUserDataKeysResponse
   */
  listTemplateUserDataKeys = (request: Readonly<ListTemplateUserDataKeysRequest>) =>
    this.client.fetch<ListTemplateUserDataKeysResponse>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data`,
        urlParams: urlParams(
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
        ),
      },
      unmarshalListTemplateUserDataKeysResponse,
    )

  
  /**
   * Get template user data. Get a specific user data key of a template.
   *
   * @param request - The request {@link GetTemplateUserDataRequest}
   * @returns A Promise of UserData
   */
  getTemplateUserData = (request: Readonly<GetTemplateUserDataRequest>) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/${validatePathParam('key', request.key)}`,
      },
      unmarshalUserData,
    )

  
  /**
   * Set template user data. Set a user data key of a template.
   *
   * @param request - The request {@link SetTemplateUserDataRequest}
   */
  setTemplateUserData = (request: Readonly<SetTemplateUserDataRequest>) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalSetTemplateUserDataRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/${validatePathParam('key', request.key)}`,
      },
    )

  
  /**
   * Delete template user data. Delete a specific user data key of a template.
   *
   * @param request - The request {@link DeleteTemplateUserDataRequest}
   */
  deleteTemplateUserData = (request: Readonly<DeleteTemplateUserDataRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/${validatePathParam('key', request.key)}`,
      },
    )

  
  /**
   * Get template cloud-init. Get the cloud-init configuration of a template.
   *
   * @param request - The request {@link GetTemplateCloudInitRequest}
   * @returns A Promise of UserData
   */
  getTemplateCloudInit = (request: Readonly<GetTemplateCloudInitRequest>) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/cloud-init`,
      },
      unmarshalUserData,
    )

  
  /**
   * Set template cloud-init. Set the cloud-init configuration of a template.
   *
   * @param request - The request {@link SetTemplateCloudInitRequest}
   */
  setTemplateCloudInit = (request: Readonly<SetTemplateCloudInitRequest>) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalSetTemplateCloudInitRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/cloud-init`,
      },
    )

  
  /**
   * Check a template. Validate that a template is usable.
   *
   * @param request - The request {@link CheckTemplateRequest}
   */
  checkTemplate = (request: Readonly<CheckTemplateRequest>) =>
    this.client.fetch<void>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/check`,
      },
    )

  
  /**
   * Create a server from a template. Create a new Instance using a specified template.
   *
   * @param request - The request {@link CreateServerFromTemplateRequest}
   * @returns A Promise of Server
   */
  createServerFromTemplate = (request: Readonly<CreateServerFromTemplateRequest>) =>
    this.client.fetch<Server>(
      {
        body: JSON.stringify(
          marshalCreateServerFromTemplateRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/create-server`,
      },
      unmarshalServer,
    )

  
}

