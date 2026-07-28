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
import {PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES as PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES_INSTANCE,SERVER_FILESYSTEM_TRANSIENT_STATUSES as SERVER_FILESYSTEM_TRANSIENT_STATUSES_INSTANCE,SERVER_IP_TRANSIENT_STATUSES as SERVER_IP_TRANSIENT_STATUSES_INSTANCE,SERVER_PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES as SERVER_PRIVATE_NETWORK_INTERFACE_TRANSIENT_STATUSES_INSTANCE,SERVER_PUBLIC_NETWORK_INTERFACE_TRANSIENT_STATUSES as SERVER_PUBLIC_NETWORK_INTERFACE_TRANSIENT_STATUSES_INSTANCE,SERVER_TRANSIENT_STATUSES as SERVER_TRANSIENT_STATUSES_INSTANCE,} from './content.gen.js'
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
  GetServiceInfoRequest,
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
 * Instance Volume API.

This API allows you to manage Instance local and scratch volumes.
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
  
  getServiceInfo = (request: Readonly<GetServiceInfoRequest> = {}) =>
    this.client.fetch<ServiceInfo>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}`,
      },
      unmarshalServiceInfo,
    )

  
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
          ['server_ids', request.serverIds],
          ['tags', request.tags],
        ),
      },
      unmarshalListPrivateNetworkInterfacesResponse,
    )

  
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

  
  deletePrivateNetworkInterface = (request: Readonly<DeletePrivateNetworkInterfaceRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/private-network-interfaces/${validatePathParam('privateNetworkInterfaceId', request.privateNetworkInterfaceId)}`,
      },
    )

  
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

  
  getPlacementGroup = (request: Readonly<GetPlacementGroupRequest>) =>
    this.client.fetch<PlacementGroup>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
      },
      unmarshalPlacementGroup,
    )

  
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

  
  deletePlacementGroup = (request: Readonly<DeletePlacementGroupRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/placement-groups/${validatePathParam('placementGroupId', request.placementGroupId)}`,
      },
    )

  
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

  
  getSecurityGroup = (request: Readonly<GetSecurityGroupRequest>) =>
    this.client.fetch<SecurityGroup>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
      },
      unmarshalSecurityGroup,
    )

  
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

  
  deleteSecurityGroup = (request: Readonly<DeleteSecurityGroupRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/security-groups/${validatePathParam('securityGroupId', request.securityGroupId)}`,
      },
    )

  
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

  
  getUserData = (request: Readonly<GetUserDataRequest>) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/${validatePathParam('key', request.key)}`,
      },
      unmarshalUserData,
    )

  
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

  
  deleteUserData = (request: Readonly<DeleteUserDataRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/${validatePathParam('key', request.key)}`,
      },
    )

  
  getServerCloudInit = (request: Readonly<GetServerCloudInitRequest>) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/servers/${validatePathParam('serverId', request.serverId)}/user-data/cloud-init`,
      },
      unmarshalUserData,
    )

  
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

  
  getTemplate = (request: Readonly<GetTemplateRequest>) =>
    this.client.fetch<Template>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}`,
      },
      unmarshalTemplate,
    )

  
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

  
  deleteTemplate = (request: Readonly<DeleteTemplateRequest>) =>
    this.client.fetch<void>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}`,
      },
    )

  
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

  
  getTemplateUserData = (request: Readonly<GetTemplateUserDataRequest>) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/${validatePathParam('key', request.key)}`,
      },
      unmarshalUserData,
    )

  
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

  
  deleteTemplateUserData = (request: Readonly<DeleteTemplateUserDataRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/${validatePathParam('key', request.key)}`,
      },
    )

  
  getTemplateCloudInit = (request: Readonly<GetTemplateCloudInitRequest>) =>
    this.client.fetch<UserData>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/user-data/cloud-init`,
      },
      unmarshalUserData,
    )

  
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

  
  checkTemplate = (request: Readonly<CheckTemplateRequest>) =>
    this.client.fetch<void>(
      {
        method: 'GET',
        path: `/instance/v2alpha1/zones/${validatePathParam('zone', request.zone ?? this.client.settings.defaultZone)}/templates/${validatePathParam('templateId', request.templateId)}/check`,
      },
    )

  
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

