// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalMapOfObject, } from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  PrivateNIC,
  ServerSummary,
  Bootscript,
  Volume,
  VolumeSummary,
  Image,
  PlacementGroup,
  SecurityGroupSummary,
  ServerFilesystem,
  ServerIp,
  ServerIpv6,
  ServerLocation,
  ServerMaintenance,
  VolumeServer,
  Server,
  AttachServerFileSystemResponse,
  AttachServerVolumeResponse,
  CreateImageResponse,
  Ip,
  CreateIpResponse,
  CreatePlacementGroupResponse,
  CreatePrivateNICResponse,
  SecurityGroup,
  CreateSecurityGroupResponse,
  SecurityGroupRule,
  CreateSecurityGroupRuleResponse,
  CreateServerResponse,
  SnapshotBaseVolume,
  Snapshot,
  Task,
  CreateSnapshotResponse,
  CreateVolumeResponse,
  DetachServerFileSystemResponse,
  DetachServerVolumeResponse,
  ExportSnapshotResponse,
  Dashboard,
  GetDashboardResponse,
  GetImageResponse,
  GetIpResponse,
  GetPlacementGroupResponse,
  PlacementGroupServer,
  GetPlacementGroupServersResponse,
  GetPrivateNICResponse,
  GetSecurityGroupResponse,
  GetSecurityGroupRuleResponse,
  GetServerResponse,
  GetServerTypesAvailabilityResponseAvailability,
  GetServerTypesAvailabilityResponse,
  GetSnapshotResponse,
  GetVolumeResponse,
  ListImagesResponse,
  ListIpsResponse,
  ListPlacementGroupsResponse,
  ListPrivateNICsResponse,
  ListSecurityGroupRulesResponse,
  ListSecurityGroupsResponse,
  ListServerActionsResponse,
  ListServerUserDataResponse,
  ListServersResponse,
  ServerTypeNetworkInterface,
  ServerTypeVolumeConstraintSizes,
  ServerTypeCapabilities,
  ServerTypeGPUInfo,
  ServerTypeNetwork,
  ServerTypeVolumeConstraintsByType,
  ServerType,
  ListServersTypesResponse,
  ListSnapshotsResponse,
  ListVolumesResponse,
  VolumeTypeCapabilities,
  VolumeTypeConstraints,
  VolumeType,
  ListVolumesTypesResponse,
  MigrationPlan,
  ServerActionResponse,
  ServerCompatibleTypes,
  SetPlacementGroupResponse,
  SetPlacementGroupServersResponse,
  SetSecurityGroupRulesResponse,
  UpdateImageResponse,
  UpdateIpResponse,
  UpdatePlacementGroupResponse,
  UpdatePlacementGroupServersResponse,
  UpdateSecurityGroupResponse,
  UpdateSecurityGroupRuleResponse,
  UpdateServerResponse,
  UpdateSnapshotResponse,
  UpdateVolumeResponse,
  ApplyBlockMigrationRequest,
  AttachServerFileSystemRequest,
  AttachServerVolumeRequest,
  CheckBlockMigrationOrganizationQuotasRequest,
  VolumeTemplate,
  CreateImageRequest,
  CreateIpRequest,
  CreatePlacementGroupRequest,
  CreatePrivateNICRequest,
  CreateSecurityGroupRequest,
  CreateSecurityGroupRuleRequest,
  VolumeServerTemplate,
  CreateServerRequest,
  CreateSnapshotRequest,
  CreateVolumeRequest,
  DetachServerFileSystemRequest,
  DetachServerVolumeRequest,
  ExportSnapshotRequest,
  PlanBlockMigrationRequest,
  ServerActionRequestVolumeBackupTemplate,
  ServerActionRequest,
  SetImageRequest,
  SetPlacementGroupRequest,
  SetPlacementGroupServersRequest,
  SetSecurityGroupRulesRequestRule,
  SetSecurityGroupRulesRequest,
  VolumeImageUpdateTemplate,
  UpdateImageRequest,
  UpdateIpRequest,
  UpdatePlacementGroupRequest,
  UpdatePlacementGroupServersRequest,
  UpdatePrivateNICRequest,
  UpdateSecurityGroupRequest,
  UpdateSecurityGroupRuleRequest,
  SecurityGroupTemplate,
  UpdateServerRequest,
  UpdateSnapshotRequest,
  UpdateVolumeRequest,
} from './types.gen.js'
import type {
  SetImageResponse,
  SetSecurityGroupResponse,
  SetSecurityGroupRuleResponse,
  SetServerResponse,
  SetSnapshotResponse,
  SetSecurityGroupRequest,
  SetSecurityGroupRuleRequest,
  SetServerRequest,
  SetSnapshotRequest,
} from './types.private.gen.js'

export const unmarshalPrivateNIC = (data: unknown): PrivateNIC => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNIC' failed as data isn't a dictionary.`,
    )
  }

  return {
    creationDate: unmarshalDate(data.creation_date),
    id: data.id,
    macAddress: data.mac_address,
    privateNetworkId: data.private_network_id,
    serverId: data.server_id,
    state: data.state,
    tags: data.tags,
    zone: data.zone,
  } as PrivateNIC
}

const unmarshalServerSummary = (data: unknown): ServerSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as ServerSummary
}

const unmarshalBootscript = (data: unknown): Bootscript => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Bootscript' failed as data isn't a dictionary.`,
    )
  }

  return {
    architecture: data.architecture,
    bootcmdargs: data.bootcmdargs,
    default: data.default,
    dtb: data.dtb,
    id: data.id,
    initrd: data.initrd,
    kernel: data.kernel,
    organization: data.organization,
    project: data.project,
    public: data.public,
    title: data.title,
    zone: data.zone,
  } as Bootscript
}

const unmarshalVolume = (data: unknown): Volume => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Volume' failed as data isn't a dictionary.`,
    )
  }

  return {
    creationDate: unmarshalDate(data.creation_date),
    id: data.id,
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    project: data.project,
    server: data.server ? unmarshalServerSummary(data.server) : undefined,
    size: data.size,
    state: data.state,
    tags: data.tags,
    volumeType: data.volume_type,
    zone: data.zone,
  } as Volume
}

const unmarshalVolumeSummary = (data: unknown): VolumeSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
    size: data.size,
    volumeType: data.volume_type,
  } as VolumeSummary
}

const unmarshalImage = (data: unknown): Image => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Image' failed as data isn't a dictionary.`,
    )
  }

  return {
    arch: data.arch,
    creationDate: unmarshalDate(data.creation_date),
    defaultBootscript: data.default_bootscript ? unmarshalBootscript(data.default_bootscript) : undefined,
    extraVolumes: unmarshalMapOfObject(data.extra_volumes, unmarshalVolume),
    fromServer: data.from_server,
    id: data.id,
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    project: data.project,
    public: data.public,
    rootVolume: data.root_volume ? unmarshalVolumeSummary(data.root_volume) : undefined,
    state: data.state,
    tags: data.tags,
    zone: data.zone,
  } as Image
}

const unmarshalPlacementGroup = (data: unknown): PlacementGroup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlacementGroup' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
    organization: data.organization,
    policyMode: data.policy_mode,
    policyRespected: data.policy_respected,
    policyType: data.policy_type,
    project: data.project,
    tags: data.tags,
    zone: data.zone,
  } as PlacementGroup
}

const unmarshalSecurityGroupSummary = (data: unknown): SecurityGroupSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecurityGroupSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as SecurityGroupSummary
}

const unmarshalServerFilesystem = (data: unknown): ServerFilesystem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerFilesystem' failed as data isn't a dictionary.`,
    )
  }

  return {
    filesystemId: data.filesystem_id,
    state: data.state,
  } as ServerFilesystem
}

const unmarshalServerIp = (data: unknown): ServerIp => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerIp' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    dynamic: data.dynamic,
    family: data.family,
    gateway: data.gateway,
    id: data.id,
    ipamId: data.ipam_id,
    netmask: data.netmask,
    provisioningMode: data.provisioning_mode,
    state: data.state,
    tags: data.tags,
  } as ServerIp
}

const unmarshalServerIpv6 = (data: unknown): ServerIpv6 => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerIpv6' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    gateway: data.gateway,
    netmask: data.netmask,
  } as ServerIpv6
}

const unmarshalServerLocation = (data: unknown): ServerLocation => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerLocation' failed as data isn't a dictionary.`,
    )
  }

  return {
    clusterId: data.cluster_id,
    hypervisorId: data.hypervisor_id,
    nodeId: data.node_id,
    platformId: data.platform_id,
    zoneId: data.zone_id,
  } as ServerLocation
}

const unmarshalServerMaintenance = (data: unknown): ServerMaintenance => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerMaintenance' failed as data isn't a dictionary.`,
    )
  }

  return {
    reason: data.reason,
    startDate: unmarshalDate(data.start_date),
  } as ServerMaintenance
}

const unmarshalVolumeServer = (data: unknown): VolumeServer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeServer' failed as data isn't a dictionary.`,
    )
  }

  return {
    boot: data.boot,
    creationDate: unmarshalDate(data.creation_date),
    exportUri: data.export_uri,
    id: data.id,
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    project: data.project,
    server: data.server ? unmarshalServerSummary(data.server) : undefined,
    size: data.size,
    state: data.state ? data.state : undefined,
    volumeType: data.volume_type,
    zone: data.zone,
  } as VolumeServer
}

const unmarshalServer = (data: unknown): Server => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    adminPasswordEncryptedValue: data.admin_password_encrypted_value,
    adminPasswordEncryptionSshKeyId: data.admin_password_encryption_ssh_key_id,
    allowedActions: data.allowed_actions,
    arch: data.arch,
    bootType: data.boot_type,
    commercialType: data.commercial_type,
    creationDate: unmarshalDate(data.creation_date),
    dynamicIpRequired: data.dynamic_ip_required,
    enableIpv6: data.enable_ipv6,
    endOfService: data.end_of_service,
    filesystems: unmarshalArrayOfObject(data.filesystems, unmarshalServerFilesystem),
    hostname: data.hostname,
    id: data.id,
    image: data.image ? unmarshalImage(data.image) : undefined,
    ipv6: data.ipv6 ? unmarshalServerIpv6(data.ipv6) : undefined,
    location: data.location ? unmarshalServerLocation(data.location) : undefined,
    macAddress: data.mac_address,
    maintenances: unmarshalArrayOfObject(data.maintenances, unmarshalServerMaintenance),
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    placementGroup: data.placement_group ? unmarshalPlacementGroup(data.placement_group) : undefined,
    privateIp: data.private_ip,
    privateNics: unmarshalArrayOfObject(data.private_nics, unmarshalPrivateNIC),
    project: data.project,
    protected: data.protected,
    publicIp: data.public_ip ? unmarshalServerIp(data.public_ip) : undefined,
    publicIps: unmarshalArrayOfObject(data.public_ips, unmarshalServerIp),
    routedIpEnabled: data.routed_ip_enabled,
    securityGroup: data.security_group ? unmarshalSecurityGroupSummary(data.security_group) : undefined,
    state: data.state,
    stateDetail: data.state_detail,
    tags: data.tags,
    volumes: unmarshalMapOfObject(data.volumes, unmarshalVolumeServer),
    zone: data.zone,
  } as Server
}

export const unmarshalAttachServerFileSystemResponse = (data: unknown): AttachServerFileSystemResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AttachServerFileSystemResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as AttachServerFileSystemResponse
}

export const unmarshalAttachServerVolumeResponse = (data: unknown): AttachServerVolumeResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AttachServerVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as AttachServerVolumeResponse
}

export const unmarshalCreateImageResponse = (data: unknown): CreateImageResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: data.image ? unmarshalImage(data.image) : undefined,
  } as CreateImageResponse
}

const unmarshalIp = (data: unknown): Ip => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Ip' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    id: data.id,
    ipamId: data.ipam_id,
    organization: data.organization,
    prefix: data.prefix,
    project: data.project,
    reverse: data.reverse,
    server: data.server ? unmarshalServerSummary(data.server) : undefined,
    state: data.state,
    tags: data.tags,
    type: data.type,
    zone: data.zone,
  } as Ip
}

export const unmarshalCreateIpResponse = (data: unknown): CreateIpResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: data.ip ? unmarshalIp(data.ip) : undefined,
  } as CreateIpResponse
}

export const unmarshalCreatePlacementGroupResponse = (data: unknown): CreatePlacementGroupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreatePlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: data.placement_group ? unmarshalPlacementGroup(data.placement_group) : undefined,
  } as CreatePlacementGroupResponse
}

export const unmarshalCreatePrivateNICResponse = (data: unknown): CreatePrivateNICResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreatePrivateNICResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNic: data.private_nic ? unmarshalPrivateNIC(data.private_nic) : undefined,
  } as CreatePrivateNICResponse
}

const unmarshalSecurityGroup = (data: unknown): SecurityGroup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecurityGroup' failed as data isn't a dictionary.`,
    )
  }

  return {
    creationDate: unmarshalDate(data.creation_date),
    description: data.description,
    enableDefaultSecurity: data.enable_default_security,
    id: data.id,
    inboundDefaultPolicy: data.inbound_default_policy,
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    organizationDefault: data.organization_default,
    outboundDefaultPolicy: data.outbound_default_policy,
    project: data.project,
    projectDefault: data.project_default,
    servers: unmarshalArrayOfObject(data.servers, unmarshalServerSummary),
    state: data.state,
    stateful: data.stateful,
    tags: data.tags,
    zone: data.zone,
  } as SecurityGroup
}

export const unmarshalCreateSecurityGroupResponse = (data: unknown): CreateSecurityGroupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: data.security_group ? unmarshalSecurityGroup(data.security_group) : undefined,
  } as CreateSecurityGroupResponse
}

const unmarshalSecurityGroupRule = (data: unknown): SecurityGroupRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecurityGroupRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    destPortFrom: data.dest_port_from,
    destPortTo: data.dest_port_to,
    direction: data.direction,
    editable: data.editable,
    id: data.id,
    ipRange: data.ip_range,
    position: data.position,
    protocol: data.protocol,
    zone: data.zone,
  } as SecurityGroupRule
}

export const unmarshalCreateSecurityGroupRuleResponse = (data: unknown): CreateSecurityGroupRuleResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: data.rule ? unmarshalSecurityGroupRule(data.rule) : undefined,
  } as CreateSecurityGroupRuleResponse
}

export const unmarshalCreateServerResponse = (data: unknown): CreateServerResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as CreateServerResponse
}

const unmarshalSnapshotBaseVolume = (data: unknown): SnapshotBaseVolume => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnapshotBaseVolume' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as SnapshotBaseVolume
}

const unmarshalSnapshot = (data: unknown): Snapshot => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Snapshot' failed as data isn't a dictionary.`,
    )
  }

  return {
    baseVolume: data.base_volume ? unmarshalSnapshotBaseVolume(data.base_volume) : undefined,
    creationDate: unmarshalDate(data.creation_date),
    errorReason: data.error_reason,
    id: data.id,
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    project: data.project,
    size: data.size,
    state: data.state,
    tags: data.tags,
    volumeType: data.volume_type,
    zone: data.zone,
  } as Snapshot
}

const unmarshalTask = (data: unknown): Task => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Task' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    hrefFrom: data.href_from,
    hrefResult: data.href_result,
    id: data.id,
    progress: data.progress,
    startedAt: unmarshalDate(data.started_at),
    status: data.status,
    terminatedAt: unmarshalDate(data.terminated_at),
    zone: data.zone,
  } as Task
}

export const unmarshalCreateSnapshotResponse = (data: unknown): CreateSnapshotResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: data.snapshot ? unmarshalSnapshot(data.snapshot) : undefined,
    task: data.task ? unmarshalTask(data.task) : undefined,
  } as CreateSnapshotResponse
}

export const unmarshalCreateVolumeResponse = (data: unknown): CreateVolumeResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as CreateVolumeResponse
}

export const unmarshalDetachServerFileSystemResponse = (data: unknown): DetachServerFileSystemResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DetachServerFileSystemResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as DetachServerFileSystemResponse
}

export const unmarshalDetachServerVolumeResponse = (data: unknown): DetachServerVolumeResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DetachServerVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as DetachServerVolumeResponse
}

export const unmarshalExportSnapshotResponse = (data: unknown): ExportSnapshotResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExportSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    task: data.task ? unmarshalTask(data.task) : undefined,
  } as ExportSnapshotResponse
}

const unmarshalDashboard = (data: unknown): Dashboard => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Dashboard' failed as data isn't a dictionary.`,
    )
  }

  return {
    imagesCount: data.images_count,
    ipsCount: data.ips_count,
    ipsUnused: data.ips_unused,
    placementGroupsCount: data.placement_groups_count,
    privateNicsCount: data.private_nics_count,
    runningServersCount: data.running_servers_count,
    securityGroupsCount: data.security_groups_count,
    serversByTypes: data.servers_by_types,
    serversCount: data.servers_count,
    snapshotsCount: data.snapshots_count,
    volumesBSsdCount: data.volumes_b_ssd_count,
    volumesBSsdTotalSize: data.volumes_b_ssd_total_size,
    volumesCount: data.volumes_count,
    volumesLSsdCount: data.volumes_l_ssd_count,
    volumesLSsdTotalSize: data.volumes_l_ssd_total_size,
  } as Dashboard
}

export const unmarshalGetDashboardResponse = (data: unknown): GetDashboardResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDashboardResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dashboard: data.dashboard ? unmarshalDashboard(data.dashboard) : undefined,
  } as GetDashboardResponse
}

export const unmarshalGetImageResponse = (data: unknown): GetImageResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: data.image ? unmarshalImage(data.image) : undefined,
  } as GetImageResponse
}

export const unmarshalGetIpResponse = (data: unknown): GetIpResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: data.ip ? unmarshalIp(data.ip) : undefined,
  } as GetIpResponse
}

export const unmarshalGetPlacementGroupResponse = (data: unknown): GetPlacementGroupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetPlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: data.placement_group ? unmarshalPlacementGroup(data.placement_group) : undefined,
  } as GetPlacementGroupResponse
}

const unmarshalPlacementGroupServer = (data: unknown): PlacementGroupServer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlacementGroupServer' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
    policyRespected: data.policy_respected,
  } as PlacementGroupServer
}

export const unmarshalGetPlacementGroupServersResponse = (data: unknown): GetPlacementGroupServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetPlacementGroupServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalPlacementGroupServer),
  } as GetPlacementGroupServersResponse
}

export const unmarshalGetPrivateNICResponse = (data: unknown): GetPrivateNICResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetPrivateNICResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNic: data.private_nic ? unmarshalPrivateNIC(data.private_nic) : undefined,
  } as GetPrivateNICResponse
}

export const unmarshalGetSecurityGroupResponse = (data: unknown): GetSecurityGroupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: data.security_group ? unmarshalSecurityGroup(data.security_group) : undefined,
  } as GetSecurityGroupResponse
}

export const unmarshalGetSecurityGroupRuleResponse = (data: unknown): GetSecurityGroupRuleResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: data.rule ? unmarshalSecurityGroupRule(data.rule) : undefined,
  } as GetSecurityGroupRuleResponse
}

export const unmarshalGetServerResponse = (data: unknown): GetServerResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as GetServerResponse
}

const unmarshalGetServerTypesAvailabilityResponseAvailability = (data: unknown): GetServerTypesAvailabilityResponseAvailability => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerTypesAvailabilityResponseAvailability' failed as data isn't a dictionary.`,
    )
  }

  return {
    availability: data.availability,
  } as GetServerTypesAvailabilityResponseAvailability
}

export const unmarshalGetServerTypesAvailabilityResponse = (data: unknown): GetServerTypesAvailabilityResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerTypesAvailabilityResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalMapOfObject(data.servers, unmarshalGetServerTypesAvailabilityResponseAvailability),
    totalCount: data.total_count,
  } as GetServerTypesAvailabilityResponse
}

export const unmarshalGetSnapshotResponse = (data: unknown): GetSnapshotResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: data.snapshot ? unmarshalSnapshot(data.snapshot) : undefined,
  } as GetSnapshotResponse
}

export const unmarshalGetVolumeResponse = (data: unknown): GetVolumeResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as GetVolumeResponse
}

export const unmarshalListImagesResponse = (data: unknown): ListImagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListImagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    images: unmarshalArrayOfObject(data.images, unmarshalImage),
    totalCount: data.total_count,
  } as ListImagesResponse
}

export const unmarshalListIpsResponse = (data: unknown): ListIpsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListIpsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ips: unmarshalArrayOfObject(data.ips, unmarshalIp),
    totalCount: data.total_count,
  } as ListIpsResponse
}

export const unmarshalListPlacementGroupsResponse = (data: unknown): ListPlacementGroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPlacementGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroups: unmarshalArrayOfObject(data.placement_groups, unmarshalPlacementGroup),
    totalCount: data.total_count,
  } as ListPlacementGroupsResponse
}

export const unmarshalListPrivateNICsResponse = (data: unknown): ListPrivateNICsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPrivateNICsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNics: unmarshalArrayOfObject(data.private_nics, unmarshalPrivateNIC),
    totalCount: data.total_count,
  } as ListPrivateNICsResponse
}

export const unmarshalListSecurityGroupRulesResponse = (data: unknown): ListSecurityGroupRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecurityGroupRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalSecurityGroupRule),
    totalCount: data.total_count,
  } as ListSecurityGroupRulesResponse
}

export const unmarshalListSecurityGroupsResponse = (data: unknown): ListSecurityGroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecurityGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroups: unmarshalArrayOfObject(data.security_groups, unmarshalSecurityGroup),
    totalCount: data.total_count,
  } as ListSecurityGroupsResponse
}

export const unmarshalListServerActionsResponse = (data: unknown): ListServerActionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerActionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    actions: data.actions,
  } as ListServerActionsResponse
}

export const unmarshalListServerUserDataResponse = (data: unknown): ListServerUserDataResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerUserDataResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    userData: data.user_data,
  } as ListServerUserDataResponse
}

export const unmarshalListServersResponse = (data: unknown): ListServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalServer),
    totalCount: data.total_count,
  } as ListServersResponse
}

const unmarshalServerTypeNetworkInterface = (data: unknown): ServerTypeNetworkInterface => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeNetworkInterface' failed as data isn't a dictionary.`,
    )
  }

  return {
    internalBandwidth: data.internal_bandwidth,
    internetBandwidth: data.internet_bandwidth,
  } as ServerTypeNetworkInterface
}

const unmarshalServerTypeVolumeConstraintSizes = (data: unknown): ServerTypeVolumeConstraintSizes => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeVolumeConstraintSizes' failed as data isn't a dictionary.`,
    )
  }

  return {
    maxSize: data.max_size,
    minSize: data.min_size,
  } as ServerTypeVolumeConstraintSizes
}

const unmarshalServerTypeCapabilities = (data: unknown): ServerTypeCapabilities => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeCapabilities' failed as data isn't a dictionary.`,
    )
  }

  return {
    blockStorage: data.block_storage,
    bootTypes: data.boot_types,
    maxFileSystems: data.max_file_systems,
  } as ServerTypeCapabilities
}

const unmarshalServerTypeGPUInfo = (data: unknown): ServerTypeGPUInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeGPUInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    gpuManufacturer: data.gpu_manufacturer,
    gpuMemory: data.gpu_memory,
    gpuName: data.gpu_name,
  } as ServerTypeGPUInfo
}

const unmarshalServerTypeNetwork = (data: unknown): ServerTypeNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    interfaces: unmarshalArrayOfObject(data.interfaces, unmarshalServerTypeNetworkInterface),
    ipv6Support: data.ipv6_support,
    sumInternalBandwidth: data.sum_internal_bandwidth,
    sumInternetBandwidth: data.sum_internet_bandwidth,
  } as ServerTypeNetwork
}

const unmarshalServerTypeVolumeConstraintsByType = (data: unknown): ServerTypeVolumeConstraintsByType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeVolumeConstraintsByType' failed as data isn't a dictionary.`,
    )
  }

  return {
    lSsd: data.l_ssd ? unmarshalServerTypeVolumeConstraintSizes(data.l_ssd) : undefined,
  } as ServerTypeVolumeConstraintsByType
}

const unmarshalServerType = (data: unknown): ServerType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerType' failed as data isn't a dictionary.`,
    )
  }

  return {
    altNames: data.alt_names,
    arch: data.arch,
    blockBandwidth: data.block_bandwidth,
    capabilities: data.capabilities ? unmarshalServerTypeCapabilities(data.capabilities) : undefined,
    endOfService: data.end_of_service,
    gpu: data.gpu,
    gpuInfo: data.gpu_info ? unmarshalServerTypeGPUInfo(data.gpu_info) : undefined,
    hourlyPrice: data.hourly_price,
    monthlyPrice: data.monthly_price,
    ncpus: data.ncpus,
    network: data.network ? unmarshalServerTypeNetwork(data.network) : undefined,
    perVolumeConstraint: data.per_volume_constraint ? unmarshalServerTypeVolumeConstraintsByType(data.per_volume_constraint) : undefined,
    ram: data.ram,
    scratchStorageMaxSize: data.scratch_storage_max_size,
    volumesConstraint: data.volumes_constraint ? unmarshalServerTypeVolumeConstraintSizes(data.volumes_constraint) : undefined,
  } as ServerType
}

export const unmarshalListServersTypesResponse = (data: unknown): ListServersTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServersTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalMapOfObject(data.servers, unmarshalServerType),
    totalCount: data.total_count,
  } as ListServersTypesResponse
}

export const unmarshalListSnapshotsResponse = (data: unknown): ListSnapshotsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSnapshotsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshots: unmarshalArrayOfObject(data.snapshots, unmarshalSnapshot),
    totalCount: data.total_count,
  } as ListSnapshotsResponse
}

export const unmarshalListVolumesResponse = (data: unknown): ListVolumesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVolumesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    volumes: unmarshalArrayOfObject(data.volumes, unmarshalVolume),
  } as ListVolumesResponse
}

const unmarshalVolumeTypeCapabilities = (data: unknown): VolumeTypeCapabilities => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeTypeCapabilities' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: data.snapshot,
  } as VolumeTypeCapabilities
}

const unmarshalVolumeTypeConstraints = (data: unknown): VolumeTypeConstraints => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeTypeConstraints' failed as data isn't a dictionary.`,
    )
  }

  return {
    max: data.max,
    min: data.min,
  } as VolumeTypeConstraints
}

const unmarshalVolumeType = (data: unknown): VolumeType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    capabilities: data.capabilities ? unmarshalVolumeTypeCapabilities(data.capabilities) : undefined,
    constraints: data.constraints ? unmarshalVolumeTypeConstraints(data.constraints) : undefined,
    displayName: data.display_name,
  } as VolumeType
}

export const unmarshalListVolumesTypesResponse = (data: unknown): ListVolumesTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVolumesTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    volumes: unmarshalMapOfObject(data.volumes, unmarshalVolumeType),
  } as ListVolumesTypesResponse
}

export const unmarshalMigrationPlan = (data: unknown): MigrationPlan => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MigrationPlan' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshots: unmarshalArrayOfObject(data.snapshots, unmarshalSnapshot),
    validationKey: data.validation_key,
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as MigrationPlan
}

export const unmarshalServerActionResponse = (data: unknown): ServerActionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerActionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    task: data.task ? unmarshalTask(data.task) : undefined,
  } as ServerActionResponse
}

export const unmarshalServerCompatibleTypes = (data: unknown): ServerCompatibleTypes => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerCompatibleTypes' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatibleTypes: data.compatible_types,
  } as ServerCompatibleTypes
}

export const unmarshalSetImageResponse = (data: unknown): SetImageResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: data.image ? unmarshalImage(data.image) : undefined,
  } as SetImageResponse
}

export const unmarshalSetPlacementGroupResponse = (data: unknown): SetPlacementGroupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetPlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: data.placement_group ? unmarshalPlacementGroup(data.placement_group) : undefined,
  } as SetPlacementGroupResponse
}

export const unmarshalSetPlacementGroupServersResponse = (data: unknown): SetPlacementGroupServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetPlacementGroupServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalPlacementGroupServer),
  } as SetPlacementGroupServersResponse
}

export const unmarshalSetSecurityGroupResponse = (data: unknown): SetSecurityGroupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: data.security_group ? unmarshalSecurityGroup(data.security_group) : undefined,
  } as SetSecurityGroupResponse
}

export const unmarshalSetSecurityGroupRuleResponse = (data: unknown): SetSecurityGroupRuleResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: data.rule ? unmarshalSecurityGroupRule(data.rule) : undefined,
  } as SetSecurityGroupRuleResponse
}

export const unmarshalSetSecurityGroupRulesResponse = (data: unknown): SetSecurityGroupRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSecurityGroupRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalSecurityGroupRule),
  } as SetSecurityGroupRulesResponse
}

export const unmarshalSetServerResponse = (data: unknown): SetServerResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as SetServerResponse
}

export const unmarshalSetSnapshotResponse = (data: unknown): SetSnapshotResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: data.snapshot ? unmarshalSnapshot(data.snapshot) : undefined,
  } as SetSnapshotResponse
}

export const unmarshalUpdateImageResponse = (data: unknown): UpdateImageResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: data.image ? unmarshalImage(data.image) : undefined,
  } as UpdateImageResponse
}

export const unmarshalUpdateIpResponse = (data: unknown): UpdateIpResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: data.ip ? unmarshalIp(data.ip) : undefined,
  } as UpdateIpResponse
}

export const unmarshalUpdatePlacementGroupResponse = (data: unknown): UpdatePlacementGroupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdatePlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: data.placement_group ? unmarshalPlacementGroup(data.placement_group) : undefined,
  } as UpdatePlacementGroupResponse
}

export const unmarshalUpdatePlacementGroupServersResponse = (data: unknown): UpdatePlacementGroupServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdatePlacementGroupServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalPlacementGroupServer),
  } as UpdatePlacementGroupServersResponse
}

export const unmarshalUpdateSecurityGroupResponse = (data: unknown): UpdateSecurityGroupResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: data.security_group ? unmarshalSecurityGroup(data.security_group) : undefined,
  } as UpdateSecurityGroupResponse
}

export const unmarshalUpdateSecurityGroupRuleResponse = (data: unknown): UpdateSecurityGroupRuleResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: data.rule ? unmarshalSecurityGroupRule(data.rule) : undefined,
  } as UpdateSecurityGroupRuleResponse
}

export const unmarshalUpdateServerResponse = (data: unknown): UpdateServerResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as UpdateServerResponse
}

export const unmarshalUpdateSnapshotResponse = (data: unknown): UpdateSnapshotResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: data.snapshot ? unmarshalSnapshot(data.snapshot) : undefined,
  } as UpdateSnapshotResponse
}

export const unmarshalUpdateVolumeResponse = (data: unknown): UpdateVolumeResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as UpdateVolumeResponse
}

export const marshalApplyBlockMigrationRequest = (
  request: ApplyBlockMigrationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  validation_key: request.validationKey,  
  ...resolveOneOf([
    {param: 'volume_id',
      value: request.volumeId,
    },
    {param: 'snapshot_id',
      value: request.snapshotId,
    },
  ]),
})

export const marshalAttachServerFileSystemRequest = (
  request: AttachServerFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  filesystem_id: request.filesystemId,
})

export const marshalAttachServerVolumeRequest = (
  request: AttachServerVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  boot: request.boot,
  volume_id: request.volumeId,
  volume_type: request.volumeType,
})

export const marshalCheckBlockMigrationOrganizationQuotasRequest = (
  request: CheckBlockMigrationOrganizationQuotasRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  organization: request.organization ?? defaults.defaultOrganizationId,
})

const marshalVolumeTemplate = (
  request: VolumeTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
  size: request.size,
  volume_type: request.volumeType,  
  ...resolveOneOf([
    {param: 'project',
      value: request.project,
    },
    {param: 'organization',
      value: request.organization,
    },
  ]),
})

export const marshalCreateImageRequest = (
  request: CreateImageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  extra_volumes: ((request.extraVolumes !== undefined) ?  Object.entries(request.extraVolumes).reduce((acc, [key, value]) => ({ ...acc, [key]: marshalVolumeTemplate(value, defaults) }), {}): undefined),
  name: request.name || randomName('img'),
  public: request.public,
  root_volume: request.rootVolume,
  tags: request.tags,  
  ...resolveOneOf([
    {default: defaults.defaultProjectId,param: 'project',
      value: request.project,
    },
    {default: defaults.defaultOrganizationId,param: 'organization',
      value: request.organization,
    },
  ]),
})

export const marshalCreateIpRequest = (
  request: CreateIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  server: request.server,
  tags: request.tags,
  type: request.type,  
  ...resolveOneOf([
    {default: defaults.defaultProjectId,param: 'project',
      value: request.project,
    },
    {default: defaults.defaultOrganizationId,param: 'organization',
      value: request.organization,
    },
  ]),
})

export const marshalCreatePlacementGroupRequest = (
  request: CreatePlacementGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('pg'),
  policy_mode: request.policyMode,
  policy_type: request.policyType,
  tags: request.tags,  
  ...resolveOneOf([
    {default: defaults.defaultProjectId,param: 'project',
      value: request.project,
    },
    {default: defaults.defaultOrganizationId,param: 'organization',
      value: request.organization,
    },
  ]),
})

export const marshalCreatePrivateNICRequest = (
  request: CreatePrivateNICRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_ids: request.ipIds,
  ipam_ip_ids: request.ipamIpIds,
  private_network_id: request.privateNetworkId,
  tags: request.tags,
})

export const marshalCreateSecurityGroupRequest = (
  request: CreateSecurityGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  enable_default_security: request.enableDefaultSecurity,
  inbound_default_policy: request.inboundDefaultPolicy,
  name: request.name || randomName('sg'),
  outbound_default_policy: request.outboundDefaultPolicy,
  stateful: request.stateful,
  tags: request.tags,  
  ...resolveOneOf([
    {default: defaults.defaultProjectId,param: 'project',
      value: request.project,
    },
    {default: defaults.defaultOrganizationId,param: 'organization',
      value: request.organization,
    },
  ]),  
  ...resolveOneOf([
    {param: 'organization_default',
      value: request.organizationDefault,
    },
    {param: 'project_default',
      value: request.projectDefault,
    },
  ]),
})

export const marshalCreateSecurityGroupRuleRequest = (
  request: CreateSecurityGroupRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  dest_port_from: request.destPortFrom,
  dest_port_to: request.destPortTo,
  direction: request.direction,
  editable: request.editable,
  ip_range: request.ipRange,
  position: request.position,
  protocol: request.protocol,
})

const marshalVolumeServerTemplate = (
  request: VolumeServerTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  base_snapshot: request.baseSnapshot,
  boot: request.boot,
  id: request.id,
  name: request.name,
  organization: request.organization,
  project: request.project,
  size: request.size,
  volume_type: request.volumeType,
})

export const marshalCreateServerRequest = (
  request: CreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admin_password_encryption_ssh_key_id: request.adminPasswordEncryptionSshKeyId,
  boot_type: request.bootType,
  commercial_type: request.commercialType,
  dynamic_ip_required: request.dynamicIpRequired,
  enable_ipv6: request.enableIpv6,
  image: request.image,
  name: request.name || randomName('srv'),
  placement_group: request.placementGroup,
  protected: request.protected,
  public_ip: request.publicIp,
  public_ips: request.publicIps,
  routed_ip_enabled: request.routedIpEnabled,
  security_group: request.securityGroup,
  tags: request.tags,
  volumes: ((request.volumes !== undefined) ?  Object.entries(request.volumes).reduce((acc, [key, value]) => ({ ...acc, [key]: marshalVolumeServerTemplate(value, defaults) }), {}): undefined),  
  ...resolveOneOf([
    {default: defaults.defaultProjectId,param: 'project',
      value: request.project,
    },
    {default: defaults.defaultOrganizationId,param: 'organization',
      value: request.organization,
    },
  ]),
})

export const marshalCreateSnapshotRequest = (
  request: CreateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket: request.bucket,
  key: request.key,
  name: request.name || randomName('snp'),
  size: request.size,
  tags: request.tags,
  volume_id: request.volumeId,
  volume_type: request.volumeType,  
  ...resolveOneOf([
    {default: defaults.defaultProjectId,param: 'project',
      value: request.project,
    },
    {default: defaults.defaultOrganizationId,param: 'organization',
      value: request.organization,
    },
  ]),
})

export const marshalCreateVolumeRequest = (
  request: CreateVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('vol'),
  tags: request.tags,
  volume_type: request.volumeType,  
  ...resolveOneOf([
    {default: defaults.defaultProjectId,param: 'project',
      value: request.project,
    },
    {default: defaults.defaultOrganizationId,param: 'organization',
      value: request.organization,
    },
  ]),  
  ...resolveOneOf<number | string>([
    {param: 'size',
      value: request.size,
    },
    {param: 'base_snapshot',
      value: request.baseSnapshot,
    },
  ]),
})

export const marshalDetachServerFileSystemRequest = (
  request: DetachServerFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  filesystem_id: request.filesystemId,
})

export const marshalDetachServerVolumeRequest = (
  request: DetachServerVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  volume_id: request.volumeId,
})

export const marshalExportSnapshotRequest = (
  request: ExportSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket: request.bucket,
  key: request.key,
})

export const marshalPlanBlockMigrationRequest = (
  request: PlanBlockMigrationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'volume_id',
      value: request.volumeId,
    },
    {param: 'snapshot_id',
      value: request.snapshotId,
    },
  ]),
})

const marshalServerActionRequestVolumeBackupTemplate = (
  request: ServerActionRequestVolumeBackupTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  volume_type: request.volumeType,
})

export const marshalServerActionRequest = (
  request: ServerActionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  disable_ipv6: request.disableIpv6,
  name: request.name,
  volumes: ((request.volumes !== undefined) ?  Object.entries(request.volumes).reduce((acc, [key, value]) => ({ ...acc, [key]: marshalServerActionRequestVolumeBackupTemplate(value, defaults) }), {}): undefined),
})

const marshalServerSummary = (
  request: ServerSummary,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
})

const marshalBootscript = (
  request: Bootscript,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  architecture: request.architecture,
  bootcmdargs: request.bootcmdargs,
  default: request.default,
  dtb: request.dtb,
  id: request.id,
  initrd: request.initrd,
  kernel: request.kernel,
  organization: request.organization,
  project: request.project,
  public: request.public,
  title: request.title,
  zone: request.zone,
})

const marshalVolume = (
  request: Volume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  creation_date: request.creationDate,
  id: request.id,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization,
  project: request.project,
  server: ((request.server !== undefined) ?  marshalServerSummary(request.server, defaults): undefined),
  size: request.size,
  state: request.state,
  tags: request.tags,
  volume_type: request.volumeType,
  zone: request.zone,
})

const marshalVolumeSummary = (
  request: VolumeSummary,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
  size: request.size,
  volume_type: request.volumeType,
})

export const marshalSetImageRequest = (
  request: SetImageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  creation_date: request.creationDate,
  default_bootscript: ((request.defaultBootscript !== undefined) ?  marshalBootscript(request.defaultBootscript, defaults): undefined),
  extra_volumes: ((request.extraVolumes !== undefined) ?  Object.entries(request.extraVolumes).reduce((acc, [key, value]) => ({ ...acc, [key]: marshalVolume(value, defaults) }), {}): undefined),
  from_server: request.fromServer,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization ?? defaults.defaultOrganizationId,
  project: request.project ?? defaults.defaultProjectId,
  public: request.public,
  root_volume: ((request.rootVolume !== undefined) ?  marshalVolumeSummary(request.rootVolume, defaults): undefined),
  state: request.state,
  tags: request.tags,
})

export const marshalSetPlacementGroupRequest = (
  request: SetPlacementGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  organization: request.organization ?? defaults.defaultOrganizationId,
  policy_mode: request.policyMode,
  policy_type: request.policyType,
  project: request.project ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalSetPlacementGroupServersRequest = (
  request: SetPlacementGroupServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  servers: request.servers,
})

export const marshalSetSecurityGroupRequest = (
  request: SetSecurityGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  creation_date: request.creationDate,
  description: request.description,
  enable_default_security: request.enableDefaultSecurity,
  inbound_default_policy: request.inboundDefaultPolicy,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization ?? defaults.defaultOrganizationId,
  organization_default: request.organizationDefault,
  outbound_default_policy: request.outboundDefaultPolicy,
  project: request.project ?? defaults.defaultProjectId,
  project_default: request.projectDefault,
  servers: ((request.servers !== undefined) ?  request.servers.map(elt => marshalServerSummary(elt, defaults)): undefined),
  stateful: request.stateful,
  tags: request.tags,
})

export const marshalSetSecurityGroupRuleRequest = (
  request: SetSecurityGroupRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  dest_port_from: request.destPortFrom,
  dest_port_to: request.destPortTo,
  direction: request.direction,
  editable: request.editable,
  id: request.id,
  ip_range: request.ipRange,
  position: request.position,
  protocol: request.protocol,
})

const marshalSetSecurityGroupRulesRequestRule = (
  request: SetSecurityGroupRulesRequestRule,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  dest_port_from: request.destPortFrom,
  dest_port_to: request.destPortTo,
  direction: request.direction,
  editable: request.editable,
  id: request.id,
  ip_range: request.ipRange,
  position: request.position,
  protocol: request.protocol,
  zone: request.zone,
})

export const marshalSetSecurityGroupRulesRequest = (
  request: SetSecurityGroupRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  rules: ((request.rules !== undefined) ?  request.rules.map(elt => marshalSetSecurityGroupRulesRequestRule(elt, defaults)): undefined),
})

const marshalImage = (
  request: Image,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  creation_date: request.creationDate,
  default_bootscript: ((request.defaultBootscript !== undefined) ?  marshalBootscript(request.defaultBootscript, defaults): undefined),
  extra_volumes:  Object.entries(request.extraVolumes).reduce((acc, [key, value]) => ({ ...acc, [key]: marshalVolume(value, defaults) }), {}),
  from_server: request.fromServer,
  id: request.id,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization,
  project: request.project,
  public: request.public,
  root_volume: ((request.rootVolume !== undefined) ?  marshalVolumeSummary(request.rootVolume, defaults): undefined),
  state: request.state,
  tags: request.tags,
  zone: request.zone,
})

const marshalPlacementGroup = (
  request: PlacementGroup,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
  organization: request.organization,
  policy_mode: request.policyMode,
  policy_respected: request.policyRespected,
  policy_type: request.policyType,
  project: request.project,
  tags: request.tags,
  zone: request.zone,
})

const marshalPrivateNIC = (
  request: PrivateNIC,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  creation_date: request.creationDate,
  id: request.id,
  mac_address: request.macAddress,
  private_network_id: request.privateNetworkId,
  server_id: request.serverId,
  state: request.state,
  tags: request.tags,
  zone: request.zone,
})

const marshalSecurityGroupSummary = (
  request: SecurityGroupSummary,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
})

const marshalServerIp = (
  request: ServerIp,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  dynamic: request.dynamic,
  family: request.family,
  gateway: request.gateway,
  id: request.id,
  ipam_id: request.ipamId,
  netmask: request.netmask,
  provisioning_mode: request.provisioningMode,
  state: request.state,
  tags: request.tags,
})

const marshalServerIpv6 = (
  request: ServerIpv6,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  gateway: request.gateway,
  netmask: request.netmask,
})

const marshalServerLocation = (
  request: ServerLocation,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  cluster_id: request.clusterId,
  hypervisor_id: request.hypervisorId,
  node_id: request.nodeId,
  platform_id: request.platformId,
  zone_id: request.zoneId,
})

const marshalServerMaintenance = (
  request: ServerMaintenance,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reason: request.reason,
  start_date: request.startDate,
})

export const marshalSetServerRequest = (
  request: SetServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admin_password_encryption_ssh_key_id: request.adminPasswordEncryptionSshKeyId,
  allowed_actions: ((request.allowedActions !== undefined) ?  request.allowedActions: undefined),
  arch: request.arch,
  boot_type: request.bootType,
  commercial_type: request.commercialType,
  creation_date: request.creationDate,
  dynamic_ip_required: request.dynamicIpRequired,
  enable_ipv6: request.enableIpv6,
  hostname: request.hostname,
  image: ((request.image !== undefined) ?  marshalImage(request.image, defaults): undefined),
  ipv6: ((request.ipv6 !== undefined) ?  marshalServerIpv6(request.ipv6, defaults): undefined),
  location: ((request.location !== undefined) ?  marshalServerLocation(request.location, defaults): undefined),
  maintenances: ((request.maintenances !== undefined) ?  request.maintenances.map(elt => marshalServerMaintenance(elt, defaults)): undefined),
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization ?? defaults.defaultOrganizationId,
  placement_group: ((request.placementGroup !== undefined) ?  marshalPlacementGroup(request.placementGroup, defaults): undefined),
  private_ip: request.privateIp,
  private_nics: ((request.privateNics !== undefined) ?  request.privateNics.map(elt => marshalPrivateNIC(elt, defaults)): undefined),
  project: request.project ?? defaults.defaultProjectId,
  protected: request.protected,
  public_ip: ((request.publicIp !== undefined) ?  marshalServerIp(request.publicIp, defaults): undefined),
  public_ips: ((request.publicIps !== undefined) ?  request.publicIps.map(elt => marshalServerIp(elt, defaults)): undefined),
  routed_ip_enabled: request.routedIpEnabled,
  security_group: ((request.securityGroup !== undefined) ?  marshalSecurityGroupSummary(request.securityGroup, defaults): undefined),
  state: request.state,
  state_detail: request.stateDetail,
  tags: request.tags,
  volumes: ((request.volumes !== undefined) ?  Object.entries(request.volumes).reduce((acc, [key, value]) => ({ ...acc, [key]: marshalVolume(value, defaults) }), {}): undefined),
})

const marshalSnapshotBaseVolume = (
  request: SnapshotBaseVolume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
})

export const marshalSetSnapshotRequest = (
  request: SetSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  base_volume: ((request.baseVolume !== undefined) ?  marshalSnapshotBaseVolume(request.baseVolume, defaults): undefined),
  creation_date: request.creationDate,
  id: request.id,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization ?? defaults.defaultOrganizationId,
  project: request.project ?? defaults.defaultProjectId,
  size: request.size,
  state: request.state,
  tags: request.tags,
  volume_type: request.volumeType,
})

const marshalVolumeImageUpdateTemplate = (
  request: VolumeImageUpdateTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
})

export const marshalUpdateImageRequest = (
  request: UpdateImageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  extra_volumes: ((request.extraVolumes !== undefined) ?  Object.entries(request.extraVolumes).reduce((acc, [key, value]) => ({ ...acc, [key]: marshalVolumeImageUpdateTemplate(value, defaults) }), {}): undefined),
  name: request.name,
  public: request.public,
  tags: request.tags,
})

export const marshalUpdateIpRequest = (
  request: UpdateIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverse: request.reverse,
  server: request.server,
  tags: request.tags,
  type: request.type,
})

export const marshalUpdatePlacementGroupRequest = (
  request: UpdatePlacementGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  policy_mode: request.policyMode,
  policy_type: request.policyType,
  tags: request.tags,
})

export const marshalUpdatePlacementGroupServersRequest = (
  request: UpdatePlacementGroupServersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  servers: request.servers,
})

export const marshalUpdatePrivateNICRequest = (
  request: UpdatePrivateNICRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  tags: request.tags,
})

export const marshalUpdateSecurityGroupRequest = (
  request: UpdateSecurityGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  enable_default_security: request.enableDefaultSecurity,
  inbound_default_policy: request.inboundDefaultPolicy,
  name: request.name,
  organization_default: request.organizationDefault,
  outbound_default_policy: request.outboundDefaultPolicy,
  project_default: request.projectDefault,
  stateful: request.stateful,
  tags: request.tags,
})

export const marshalUpdateSecurityGroupRuleRequest = (
  request: UpdateSecurityGroupRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  dest_port_from: request.destPortFrom,
  dest_port_to: request.destPortTo,
  direction: request.direction,
  ip_range: request.ipRange,
  position: request.position,
  protocol: request.protocol,
})

const marshalSecurityGroupTemplate = (
  request: SecurityGroupTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
})

export const marshalUpdateServerRequest = (
  request: UpdateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  admin_password_encryption_ssh_key_id: request.adminPasswordEncryptionSshKeyId,
  boot_type: request.bootType,
  commercial_type: request.commercialType,
  dynamic_ip_required: request.dynamicIpRequired,
  enable_ipv6: request.enableIpv6,
  name: request.name,
  placement_group: request.placementGroup,
  private_nics: request.privateNics,
  protected: request.protected,
  public_ips: request.publicIps,
  routed_ip_enabled: request.routedIpEnabled,
  security_group: ((request.securityGroup !== undefined) ?  marshalSecurityGroupTemplate(request.securityGroup, defaults): undefined),
  tags: request.tags,
  volumes: ((request.volumes !== undefined) ?  Object.entries(request.volumes).reduce((acc, [key, value]) => ({ ...acc, [key]: marshalVolumeServerTemplate(value, defaults) }), {}): undefined),
})

export const marshalUpdateSnapshotRequest = (
  request: UpdateSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateVolumeRequest = (
  request: UpdateVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  size: request.size,
  tags: request.tags,
})
