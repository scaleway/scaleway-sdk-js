// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone } from '@scaleway/sdk-client'
import type {Arch,AttachServerVolumeRequestVolumeType,BootType,ImageState,IpState,IpType,ListServersRequestOrder,PlacementGroupPolicyMode,PlacementGroupPolicyType,PrivateNICState,SecurityGroupPolicy,SecurityGroupRuleAction,SecurityGroupRuleDirection,SecurityGroupRuleProtocol,SecurityGroupState,ServerAction,ServerFilesystemState,ServerIpIpFamily,ServerIpProvisioningMode,ServerIpState,ServerState,ServerTypesAvailability,SnapshotState,SnapshotVolumeType,TaskStatus,VolumeServerState,VolumeServerVolumeType,VolumeState,VolumeVolumeType,ServerSummary,Bootscript,Volume,VolumeSummary,ServerTypeNetworkInterface,ServerTypeVolumeConstraintSizes,Image,PlacementGroup,PrivateNIC,SecurityGroupSummary,ServerFilesystem,ServerIp,ServerIpv6,ServerLocation,ServerMaintenance,VolumeServer,SnapshotBaseVolume,ServerTypeCapabilities,ServerTypeGPUInfo,ServerTypeNetwork,ServerTypeVolumeConstraintsByType,VolumeTypeCapabilities,VolumeTypeConstraints,Server,VolumeTemplate,Ip,SecurityGroup,SecurityGroupRule,VolumeServerTemplate,Snapshot,Task,Dashboard,PlacementGroupServer,GetServerTypesAvailabilityResponseAvailability,ServerType,VolumeType,ServerActionRequestVolumeBackupTemplate,SetSecurityGroupRulesRequestRule,VolumeImageUpdateTemplate,SecurityGroupTemplate,ApplyBlockMigrationRequest,AttachServerFileSystemRequest,AttachServerFileSystemResponse,AttachServerVolumeRequest,AttachServerVolumeResponse,CheckBlockMigrationOrganizationQuotasRequest,CreateImageRequest,CreateImageResponse,CreateIpRequest,CreateIpResponse,CreatePlacementGroupRequest,CreatePlacementGroupResponse,CreatePrivateNICRequest,CreatePrivateNICResponse,CreateSecurityGroupRequest,CreateSecurityGroupResponse,CreateSecurityGroupRuleRequest,CreateSecurityGroupRuleResponse,CreateServerRequest,CreateServerResponse,CreateSnapshotRequest,CreateSnapshotResponse,CreateVolumeRequest,CreateVolumeResponse,DeleteImageRequest,DeleteIpRequest,DeletePlacementGroupRequest,DeletePrivateNICRequest,DeleteSecurityGroupRequest,DeleteSecurityGroupRuleRequest,DeleteServerRequest,DeleteServerUserDataRequest,DeleteSnapshotRequest,DeleteVolumeRequest,DetachServerFileSystemRequest,DetachServerFileSystemResponse,DetachServerVolumeRequest,DetachServerVolumeResponse,ExportSnapshotRequest,ExportSnapshotResponse,GetDashboardRequest,GetDashboardResponse,GetImageRequest,GetImageResponse,GetIpRequest,GetIpResponse,GetPlacementGroupRequest,GetPlacementGroupResponse,GetPlacementGroupServersRequest,GetPlacementGroupServersResponse,GetPrivateNICRequest,GetPrivateNICResponse,GetSecurityGroupRequest,GetSecurityGroupResponse,GetSecurityGroupRuleRequest,GetSecurityGroupRuleResponse,GetServerCompatibleTypesRequest,GetServerRequest,GetServerResponse,GetServerTypesAvailabilityRequest,GetServerTypesAvailabilityResponse,GetSnapshotRequest,GetSnapshotResponse,GetVolumeRequest,GetVolumeResponse,ListDefaultSecurityGroupRulesRequest,ListImagesRequest,ListImagesResponse,ListIpsRequest,ListIpsResponse,ListPlacementGroupsRequest,ListPlacementGroupsResponse,ListPrivateNICsRequest,ListPrivateNICsResponse,ListSecurityGroupRulesRequest,ListSecurityGroupRulesResponse,ListSecurityGroupsRequest,ListSecurityGroupsResponse,ListServerActionsRequest,ListServerActionsResponse,ListServerUserDataRequest,ListServerUserDataResponse,ListServersRequest,ListServersResponse,ListServersTypesRequest,ListServersTypesResponse,ListSnapshotsRequest,ListSnapshotsResponse,ListVolumesRequest,ListVolumesResponse,ListVolumesTypesRequest,ListVolumesTypesResponse,MigrationPlan,PlanBlockMigrationRequest,ReleaseIpToIpamRequest,ServerActionRequest,ServerActionResponse,ServerCompatibleTypes,SetImageRequest,SetPlacementGroupRequest,SetPlacementGroupResponse,SetPlacementGroupServersRequest,SetPlacementGroupServersResponse,SetSecurityGroupRulesRequest,SetSecurityGroupRulesResponse,UpdateImageRequest,UpdateImageResponse,UpdateIpRequest,UpdateIpResponse,UpdatePlacementGroupRequest,UpdatePlacementGroupResponse,UpdatePlacementGroupServersRequest,UpdatePlacementGroupServersResponse,UpdatePrivateNICRequest,UpdateSecurityGroupRequest,UpdateSecurityGroupResponse,UpdateSecurityGroupRuleRequest,UpdateSecurityGroupRuleResponse,UpdateServerRequest,UpdateServerResponse,UpdateSnapshotRequest,UpdateSnapshotResponse,UpdateVolumeRequest,UpdateVolumeResponse,} from './types.gen.js'


export interface SetImageResponse {
  image?: Image | null
}


export type SetSecurityGroupRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * UUID of the security group.
   */
  id: string
  /**
   * Name of the security group.
   */
  name: string
  /**
   * Tags of the security group.
   */
  tags?: string[] | null
  /**
   * Creation date of the security group (will be ignored).
   */
  creationDate?: Date | null
  /**
   * Modification date of the security group (will be ignored).
   */
  modificationDate?: Date | null
  /**
   * Description of the security group.
   */
  description: string
  /**
   * True to block SMTP on IPv4 and IPv6. This feature is read only, please open a support ticket if you need to make it configurable.
   */
  enableDefaultSecurity: boolean
  /**
   * Default inbound policy.
   */
  inboundDefaultPolicy?: SecurityGroupPolicy | null
  /**
   * Default outbound policy.
   */
  outboundDefaultPolicy?: SecurityGroupPolicy | null
  /**
   * Security groups Organization ID.
   */
  organization?: string | null
  /**
   * Security group Project ID.
   */
  project?: string | null
  /**
   * @deprecated Please use project_default instead.
   */
  organizationDefault?: boolean | null
  /**
   * True use this security group for future Instances created in this project.
   */
  projectDefault: boolean
  /**
   * Instances attached to this security group.
   */
  servers?: ServerSummary[] | null
  /**
   * True to set the security group as stateful.
   */
  stateful: boolean
}


export interface SetSecurityGroupResponse {
  securityGroup?: SecurityGroup | null
}


export type SetSecurityGroupRuleRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  securityGroupId: string
  securityGroupRuleId: string
  id: string
  protocol?: SecurityGroupRuleProtocol | null
  direction?: SecurityGroupRuleDirection | null
  action?: SecurityGroupRuleAction | null
  ipRange: string
  destPortFrom?: number | null
  destPortTo?: number | null
  position: number
  editable: boolean
}


export interface SetSecurityGroupRuleResponse {
  rule?: SecurityGroupRule | null
}


export type SetServerRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  /**
   * Instance unique ID.
   */
  id: string
  /**
   * Instance name.
   */
  name: string
  /**
   * Instance Organization ID.
   */
  organization?: string | null
  /**
   * Instance Project ID.
   */
  project?: string | null
  /**
   * Provide a list of allowed actions on the server.
   */
  allowedActions?: ServerAction[] | null
  /**
   * Tags associated with the Instance.
   */
  tags?: string[] | null
  /**
   * Instance commercial type (eg. GP1-M).
   */
  commercialType: string
  /**
   * Instance creation date.
   */
  creationDate?: Date | null
  /**
   * True if a dynamic IPv4 is required.
   */
  dynamicIpRequired: boolean
  /**
   * @deprecated True to configure the instance so it uses the new routed IP mode (once this is set to True you cannot set it back to False).
   */
  routedIpEnabled?: boolean | null
  /**
   * @deprecated True if IPv6 is enabled (deprecated and always `False` when `routed_ip_enabled` is `True`).
   */
  enableIpv6?: boolean | null
  /**
   * Instance host name.
   */
  hostname: string
  /**
   * Provide information on the Instance image.
   */
  image?: Image | null
  /**
   * Instance protection option is activated.
   */
  protected: boolean
  /**
   * @deprecated Instance private IP address (deprecated and always `null` when `routed_ip_enabled` is `True`).
   */
  privateIp?: string | null
  /**
   * @deprecated Information about the public IP (deprecated in favor of `public_ips`).
   */
  publicIp?: ServerIp | null
  /**
   * Information about all the public IPs attached to the server.
   */
  publicIps?: ServerIp[] | null
  /**
   * Instance modification date.
   */
  modificationDate?: Date | null
  /**
   * Instance state.
   */
  state?: ServerState | null
  /**
   * Instance location.
   */
  location?: ServerLocation | null
  /**
   * @deprecated Instance IPv6 address (deprecated when `routed_ip_enabled` is `True`).
   */
  ipv6?: ServerIpv6 | null
  /**
   * Instance boot type.
   */
  bootType?: BootType | null
  /**
   * Instance volumes.
   */
  volumes?: Record<string, Volume> | null
  /**
   * Instance security group.
   */
  securityGroup?: SecurityGroupSummary | null
  /**
   * Instance planned maintenances.
   */
  maintenances?: ServerMaintenance[] | null
  /**
   * Instance state_detail.
   */
  stateDetail: string
  /**
   * Instance architecture (refers to the CPU architecture used for the Instance, e.g. x86_64, arm64).
   */
  arch?: Arch | null
  /**
   * Instance placement group.
   */
  placementGroup?: PlacementGroup | null
  /**
   * Instance private NICs.
   */
  privateNics?: PrivateNIC[] | null
  /**
   * The public_key value of this key is used to encrypt the admin password. When set to an empty string, reset this value and admin_password_encrypted_value to an empty string so a new password may be generated.
   */
  adminPasswordEncryptionSshKeyId?: string | null
}


export interface SetServerResponse {
  server?: Server | null
}


export type SetSnapshotRequest = {
  /**
   * Zone to target. If none is passed will use default zone from the config.
   */
  zone?: ScwZone | null
  snapshotId: string
  id: string
  name: string
  organization?: string | null
  volumeType?: VolumeVolumeType | null
  size: number
  state?: SnapshotState | null
  baseVolume?: SnapshotBaseVolume | null
  creationDate?: Date | null
  modificationDate?: Date | null
  project?: string | null
  tags?: string[] | null
}


export interface SetSnapshotResponse {
  snapshot?: Snapshot | null
}


