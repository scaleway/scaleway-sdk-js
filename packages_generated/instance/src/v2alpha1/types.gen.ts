// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone as ScwZone} from '@scaleway/sdk-client'


export type CreateServerRequestBookIPIPType =
  | 'unknown_ip_type'
  | 'zonal_ipv4'
  | 'zonal_ipv6'

export type CreateServerRequestServerVolumeVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'sbs'
  | 'scratch'

export type ListPlacementGroupsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListPrivateNetworkInterfacesRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListSecurityGroupsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListServersRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type ListTemplatesRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'

export type PlacementGroupPolicyType =
  | 'unknown_policy_type'
  | 'low_latency'
  | 'max_availability'

export type PrivateNetworkInterfaceStatus =
  | 'unknown_status'
  | 'available'
  | 'attaching'
  | 'detaching'
  | 'syncing'

export type SecurityGroupAction =
  | 'unknown_action'
  | 'accept'
  | 'drop'

export type SecurityGroupRuleAction =
  | 'unknown_action'
  | 'accept'
  | 'drop'

export type SecurityGroupRuleDirection =
  | 'unknown_direction'
  | 'inbound'
  | 'outbound'
  | 'both'

export type SecurityGroupRuleProtocol =
  | 'unknown_protocol'
  | 'tcp'
  | 'udp'
  | 'icmp'
  | 'any'

export type ServerArchitecture =
  | 'unknown_architecture'
  | 'x86_64'
  | 'aarch64'

export type ServerFilesystemStatus =
  | 'unknown_status'
  | 'attaching'
  | 'available'
  | 'detaching'

export type ServerIPStatus =
  | 'unknown_status'
  | 'detached'
  | 'attached'
  | 'pending'
  | 'error'

export type ServerPrivateNetworkInterfaceStatus =
  | 'unknown_status'
  | 'available'
  | 'attaching'
  | 'detaching'
  | 'syncing'

export type ServerPublicNetworkInterfaceStatus =
  | 'unknown_status'
  | 'available'
  | 'syncing'

export type ServerStatus =
  | 'unknown_status'
  | 'started'
  | 'stopped'
  | 'paused'
  | 'starting'
  | 'stopping'
  | 'pausing'
  | 'locked'
  | 'rebooting'

export type ServerTypeArchitecture =
  | 'unknown_architecture'
  | 'x86_64'
  | 'aarch64'

export type ServerTypeAvailability =
  | 'unknown_availability'
  | 'available'
  | 'low_stock'
  | 'out_of_stock'

export type ServerVolumeVolumeType =
  | 'unknown_volume_type'
  | 'l_ssd'
  | 'sbs'
  | 'scratch'

export interface SecurityGroupRulePortRange {
  start: number
  end: number
}


export interface CreateServerRequestBookIP {
  type: CreateServerRequestBookIPIPType
  tags: string[]
}


export interface SecurityGroupRule {
  id: string
  protocol: SecurityGroupRuleProtocol
  direction: SecurityGroupRuleDirection
  action: SecurityGroupRuleAction
  sourceIpRange: string
  destinationIpRange: string
  sourcePorts?: SecurityGroupRulePortRange
  destinationPorts?: SecurityGroupRulePortRange
  position: number
}


export interface CreateServerRequestServerIP {
  /**
   *
   * One-of ('serverIp'): at most one of 'ipamIpId', 'newIp' could be set.
   */
  ipamIpId?: string
  /**
   *
   * One-of ('serverIp'): at most one of 'ipamIpId', 'newIp' could be set.
   */
  newIp?: CreateServerRequestBookIP
}


export interface CreateServerRequestCreateVolume {
  name: string
  tags: string[]
  size?: number
  /**
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  baseSnapshotId?: string
  /**
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  imageLabel?: string
  perfIops?: number
}


export interface ServerTypeGpuInfo {
  manufacturer: string
  name: string
  memory: number
}


export interface ServerTypeLimits {
  privateNetworkCount: number
  fileSystemCount: number
  privateNetworkBandwidth: number
  blockBandwidth: number
  internetBandwidth: number
  lSsdSize: number
  scratchSize: number
  ipCount: number
  volumeCount: number
  scratchVolumesCount: number
}


export interface ServerIP {
  id: string
  dynamic: boolean
  status: ServerIPStatus
  default: boolean
}


export interface CreateTemplateRequestPrivateNetworkTemplate {
  privateNetworkId: string
}


export interface CreateTemplateRequestVolumeTemplate {
  volumeType: CreateServerRequestServerVolumeVolumeType
  name: string
  tags: string[]
  size?: number
  /**
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  baseSnapshotId?: string
  /**
   *
   * One-of ('from'): at most one of 'baseSnapshotId', 'imageLabel' could be set.
   */
  imageLabel?: string
  perfIops?: number
}


export interface SecurityGroupRuleConfig {
  protocol: SecurityGroupRuleProtocol
  direction: SecurityGroupRuleDirection
  action: SecurityGroupRuleAction
  sourceIpRange: string
  destinationIpRange: string
  sourcePorts?: SecurityGroupRulePortRange
  destinationPorts?: SecurityGroupRulePortRange
  position: number
}


export interface SecurityGroup {
  id: string
  name: string
  description: string
  projectId: string
  tags: string[]
  disableDefaultRules: boolean
  projectDefault: boolean
  inboundDefaultAction: SecurityGroupAction
  outboundDefaultAction: SecurityGroupAction
  stateless: boolean
  createdAt?: Date
  updatedAt?: Date
  defaultRules: SecurityGroupRule[]
  rules: SecurityGroupRule[]
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export interface CreateServerRequestPublicNetworkInterface {
  securityGroupId?: string
  ips: CreateServerRequestServerIP[]
}


export interface CreateServerRequestServerVolume {
  volumeType: CreateServerRequestServerVolumeVolumeType
  /**
   *
   * One-of ('serverVolume'): at most one of 'volumeId', 'newVolume' could be set.
   */
  volumeId?: string
  /**
   *
   * One-of ('serverVolume'): at most one of 'volumeId', 'newVolume' could be set.
   */
  newVolume?: CreateServerRequestCreateVolume
}


export interface PlacementGroup {
  projectId: string
  name: string
  id: string
  policyType: PlacementGroupPolicyType
  tags: string[]
  createdAt?: Date
  updatedAt?: Date
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export interface PrivateNetworkInterface {
  id: string
  privateNetworkId: string
  projectId: string
  serverId: string
  securityGroupId: string
  macAddress: string
  status: PrivateNetworkInterfaceStatus
  ipIds: string[]
  tags: string[]
  createdAt?: Date
  updatedAt?: Date
}


export interface SecurityGroupSummary {
  id: string
  name: string
  description: string
  projectId: string
  tags: string[]
  disableDefaultRules: boolean
  projectDefault: boolean
  inboundDefaultAction: SecurityGroupAction
  outboundDefaultAction: SecurityGroupAction
  stateless: boolean
  createdAt?: Date
  updatedAt?: Date
}


export interface ServerType {
  name: string
  vcpuCount: number
  gpuCount: number
  memory: number
  architecture: ServerTypeArchitecture
  availability: ServerTypeAvailability
  limits?: ServerTypeLimits
  gpuInfo?: ServerTypeGpuInfo
  endOfService: boolean
}


export interface ServerSummary {
  projectId: string
  id: string
  name: string
  tags: string[]
  serverType: string
  placementGroupId?: string
  status: ServerStatus
  architecture: ServerArchitecture
  createdAt?: Date
  updatedAt?: Date
  rescueMode: boolean
}


export interface TemplateSummary {
  projectId: string
  id: string
  name: string
  tags: string[]
  serverTags: string[]
  serverType: string
  securityGroupId?: string
  placementGroupId?: string
  publicIpV4Count: number
  publicIpV6Count: number
  createdAt?: Date
  updatedAt?: Date
  filesystemIds: string[]
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export interface ServerFilesystem {
  id: string
  status: ServerFilesystemStatus
}


export interface ServerPrivateNetworkInterface {
  id: string
  privateNetworkId: string
  macAddress: string
  status: ServerPrivateNetworkInterfaceStatus
  ipIds: string[]
  securityGroupId: string
}


export interface ServerPublicNetworkInterface {
  status: ServerPublicNetworkInterfaceStatus
  macAddress: string
  securityGroupId: string
  ips: ServerIP[]
  dns: string
}


export interface ServerRDPPassword {
  encryptedPassword: string
  rdpSshKeyId: string
}


export interface ServerVolume {
  id: string
  volumeType: ServerVolumeVolumeType
}


export interface UpdateServerRequestPublicNetworkInterface {
  securityGroupId?: string
}


export interface UpdateTemplateRequestUpdatePrivateNetworks {
  privateNetworks: CreateTemplateRequestPrivateNetworkTemplate[]
}


export interface UpdateTemplateRequestUpdateVolumes {
  volumes: CreateTemplateRequestVolumeTemplate[]
}


export type AddSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupId: string
  securityGroupRules?: SecurityGroupRuleConfig[]
}


export interface AddSecurityGroupRulesResponse {
  securityGroup?: SecurityGroup
  addedRules: SecurityGroupRule[]
}


export type AttachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  filesystemId: string
}


export type AttachServerIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  ipId: string
  default: boolean
  moveAllowed: boolean
}


export type AttachServerPrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  privateNetworkInterfaceId: string
}


export type AttachServerVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  volumeId: string
  volumeType?: ServerVolumeVolumeType
  bootVolume: boolean
}


export type CheckTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
}


export type CreatePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  projectId?: string
  name: string
  policyType?: PlacementGroupPolicyType
  tags?: string[]
}


export type CreatePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  privateNetworkId: string
  projectId?: string
  serverId?: string
  securityGroupId?: string
  ipIds?: string[]
  tags?: string[]
}


export type CreateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  name: string
  description: string
  disableDefaultRules: boolean
  projectId?: string
  tags?: string[]
  projectDefault: boolean
  inboundDefaultAction?: SecurityGroupAction
  outboundDefaultAction?: SecurityGroupAction
  stateless: boolean
}


export type CreateServerFromTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
  name: string
}


export type CreateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  projectId?: string
  name: string
  tags?: string[]
  serverType: string
  placementGroupId?: string
  volumes?: CreateServerRequestServerVolume[]
  windowsRdpSshKeyId?: string
  publicNetworkInterface?: CreateServerRequestPublicNetworkInterface
}


export type CreateTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  projectId?: string
  name: string
  tags?: string[]
  serverTags?: string[]
  serverType: string
  securityGroupId?: string
  placementGroupId?: string
  volumes?: CreateTemplateRequestVolumeTemplate[]
  privateNetworks?: CreateTemplateRequestPrivateNetworkTemplate[]
  publicIpV4Count: number
  publicIpV6Count: number
  windowsRdpSshKeyId?: string
  filesystemIds?: string[]
}


export type DeletePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  placementGroupId: string
}


export type DeletePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  privateNetworkInterfaceId: string
}


export type DeleteSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupId: string
}


export type DeleteSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupRuleIds?: string[]
}


export type DeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  /**
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteAllIps?: boolean
  /**
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteIpIds?: string[]
  /**
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteAllVolumes?: boolean
  /**
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteVolumeIds?: string[]
  /**
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  keepAllPrivateNics?: boolean
  /**
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  deletePrivateNicIds?: string[]
}


export type DeleteTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
}


export type DeleteTemplateUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
  key: string
}


export type DeleteUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  key: string
}


export type DetachServerFileSystemRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  filesystemId: string
}


export type DetachServerIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  ipId: string
}


export type DetachServerPrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  privateNetworkInterfaceId: string
}


export type DetachServerVolumeRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  volumeId: string
}


export type GetPlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  placementGroupId: string
}


export type GetPrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  privateNetworkInterfaceId: string
}


export type GetResourceCountsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  /**
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId' could be set.
   */
  organizationId?: string
  /**
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId' could be set.
   */
  projectId?: string
}


export type GetSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupId: string
}


export type GetServerCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}


export type GetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}


export type GetTemplateCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
}


export type GetTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
}


export type GetTemplateUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
  key: string
}


export type GetUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  key: string
}


export type ListPlacementGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  pageToken?: string
  pageSize?: number
  orderBy?: ListPlacementGroupsRequestOrderBy
  projectId?: string
  placementGroupIds?: string[]
  name?: string
  tags?: string[]
}


export interface ListPlacementGroupsResponse {
  placementGroups: PlacementGroup[]
  nextPageToken?: string
  totalCount: number
}


export type ListPrivateNetworkInterfacesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  pageToken?: string
  pageSize?: number
  orderBy?: ListPrivateNetworkInterfacesRequestOrderBy
  projectId?: string
  serverIds?: string[]
  securityGroupIds?: string[]
  privateNetworkIds?: string[]
  tags?: string[]
}


export interface ListPrivateNetworkInterfacesResponse {
  privateNetworkInterfaces: PrivateNetworkInterface[]
  nextPageToken?: string
  totalCount: number
}


export type ListSecurityGroupsRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  pageToken?: string
  pageSize?: number
  orderBy?: ListSecurityGroupsRequestOrderBy
  projectId?: string
  name?: string
  tags?: string[]
  securityGroupIds?: string[]
}


export interface ListSecurityGroupsResponse {
  securityGroups: SecurityGroupSummary[]
  nextPageToken?: string
  totalCount: number
}


export type ListServerTypesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  pageToken?: string
  pageSize?: number
}


export interface ListServerTypesResponse {
  serverTypes: ServerType[]
  nextPageToken?: string
  totalCount: number
}


export type ListServersRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  pageToken?: string
  pageSize?: number
  orderBy?: ListServersRequestOrderBy
  projectId?: string
  serverIds?: string[]
  name?: string
  serverType?: string
  tags?: string[]
  securityGroupIds?: string[]
  placementGroupIds?: string[]
  privateNetworkIds?: string[]
  macAddresses?: string[]
}


export interface ListServersResponse {
  servers: ServerSummary[]
  nextPageToken?: string
  totalCount: number
}


export type ListTemplateUserDataKeysRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
  pageToken?: string
  pageSize?: number
}


export interface ListTemplateUserDataKeysResponse {
  keys: string[]
  nextPageToken?: string
  totalCount: number
}


export type ListTemplatesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  pageToken?: string
  pageSize?: number
  orderBy?: ListTemplatesRequestOrderBy
  projectId?: string
  templateIds?: string[]
  name?: string
  tags?: string[]
  serverTags?: string[]
  securityGroupIds?: string[]
  placementGroupIds?: string[]
}


export interface ListTemplatesResponse {
  templates: TemplateSummary[]
  nextPageToken?: string
  totalCount: number
}


export type ListUserDataKeysRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  pageToken?: string
  pageSize?: number
}


export interface ListUserDataKeysResponse {
  keys: string[]
  nextPageToken?: string
  totalCount: number
}


export type PauseServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}


export type RebootServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}


export interface ResourceCounts {
  servers: number
  gpuServers: number
  serversByType: Record<string, number>
  securityGroups: number
  placementGroups: number
  snapshots: number
  volumes: number
  volumesLSsdTotalSize: number
  privateNetworkInterfaces: number
  volumesScratch: number
  volumesLSsd: number
}


export interface Server {
  projectId: string
  id: string
  name: string
  tags: string[]
  serverType: string
  placementGroupId?: string
  status: ServerStatus
  volumes: ServerVolume[]
  architecture: ServerArchitecture
  createdAt?: Date
  updatedAt?: Date
  privateNetworkInterfaces: ServerPrivateNetworkInterface[]
  rescueMode: boolean
  bootVolumeId?: string
  statusDetail: string
  windowsRdpPassword?: ServerRDPPassword
  filesystems: ServerFilesystem[]
  publicNetworkInterface?: ServerPublicNetworkInterface
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export type SetSecurityGroupRulesRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupId: string
  securityGroupRules?: SecurityGroupRuleConfig[]
}


export type SetServerCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  content: string
}


export type SetServerDefaultIPRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  ipId: string
}


export type SetTemplateCloudInitRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
  content: string
}


export type SetTemplateUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
  key: string
  content: string
}


export type SetUserDataRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  key: string
  content: string
}


export type StartServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}


export type StopAndDeleteServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  /**
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteAllIps?: boolean
  /**
   *
   * One-of ('ips'): at most one of 'deleteAllIps', 'deleteIpIds' could be set.
   */
  deleteIpIds?: string[]
  /**
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteAllVolumes?: boolean
  /**
   *
   * One-of ('volumes'): at most one of 'deleteAllVolumes', 'deleteVolumeIds' could be set.
   */
  deleteVolumeIds?: string[]
  /**
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  keepAllPrivateNics?: boolean
  /**
   *
   * One-of ('privateNics'): at most one of 'keepAllPrivateNics', 'deletePrivateNicIds' could be set.
   */
  deletePrivateNicIds?: string[]
}


export type StopServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
}


export interface Template {
  projectId: string
  id: string
  name: string
  tags: string[]
  serverTags: string[]
  serverType: string
  securityGroupId?: string
  placementGroupId?: string
  publicIpV4Count: number
  publicIpV6Count: number
  volumes: CreateTemplateRequestVolumeTemplate[]
  privateNetworks: CreateTemplateRequestPrivateNetworkTemplate[]
  createdAt?: Date
  updatedAt?: Date
  windowsRdpSshKeyId?: string
  filesystemIds: string[]
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone: ScwZone
}


export type UpdatePlacementGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  placementGroupId: string
  name?: string
  policyType?: PlacementGroupPolicyType
  tags?: string[]
}


export type UpdatePrivateNetworkInterfaceRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  privateNetworkInterfaceId: string
  securityGroupId?: string
  tags?: string[]
}


export type UpdateSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupId: string
  name?: string
  description?: string
  disableDefaultRules?: boolean
  tags?: string[]
  projectDefault?: boolean
  inboundDefaultAction?: SecurityGroupAction
  outboundDefaultAction?: SecurityGroupAction
  stateless?: boolean
}


export type UpdateSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  securityGroupRuleId: string
  protocol?: SecurityGroupRuleProtocol
  direction?: SecurityGroupRuleDirection
  action?: SecurityGroupRuleAction
  sourceIpRange?: string
  destinationIpRange?: string
  sourcePorts?: SecurityGroupRulePortRange
  destinationPorts?: SecurityGroupRulePortRange
  position?: number
}


export type UpdateServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  serverId: string
  name?: string
  tags?: string[]
  serverType?: string
  placementGroupId?: string
  rescueMode?: boolean
  bootVolumeId?: string
  windowsRdpSshKeyId?: string
  protected?: boolean
  publicNetworkInterface?: UpdateServerRequestPublicNetworkInterface
}


export type UpdateTemplateRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone
  templateId: string
  name?: string
  tags?: string[]
  serverTags?: string[]
  serverType?: string
  securityGroupId?: string
  placementGroupId?: string
  updateVolumes?: UpdateTemplateRequestUpdateVolumes
  updatePrivateNetworks?: UpdateTemplateRequestUpdatePrivateNetworks
  publicIpV4Count?: number
  publicIpV6Count?: number
  windowsRdpSshKeyId?: string
  filesystemIds?: string[]
}


export interface UserData {
  key: string
  content: string
}


