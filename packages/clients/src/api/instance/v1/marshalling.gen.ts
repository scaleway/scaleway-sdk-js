// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMapOfObject,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  ApplyBlockMigrationRequest,
  Bootscript,
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
  Dashboard,
  ExportSnapshotRequest,
  ExportSnapshotResponse,
  GetBootscriptResponse,
  GetDashboardResponse,
  GetImageResponse,
  GetIpResponse,
  GetPlacementGroupResponse,
  GetPlacementGroupServersResponse,
  GetPrivateNICResponse,
  GetSecurityGroupResponse,
  GetSecurityGroupRuleResponse,
  GetServerResponse,
  GetServerTypesAvailabilityResponse,
  GetServerTypesAvailabilityResponseAvailability,
  GetSnapshotResponse,
  GetVolumeResponse,
  Image,
  Ip,
  ListBootscriptsResponse,
  ListImagesResponse,
  ListIpsResponse,
  ListPlacementGroupsResponse,
  ListPrivateNICsResponse,
  ListSecurityGroupRulesResponse,
  ListSecurityGroupsResponse,
  ListServerActionsResponse,
  ListServerUserDataResponse,
  ListServersResponse,
  ListServersTypesResponse,
  ListSnapshotsResponse,
  ListVolumesResponse,
  ListVolumesTypesResponse,
  MigrationPlan,
  PlacementGroup,
  PlacementGroupServer,
  PlanBlockMigrationRequest,
  PrivateNIC,
  SecurityGroup,
  SecurityGroupRule,
  SecurityGroupSummary,
  SecurityGroupTemplate,
  Server,
  ServerActionRequest,
  ServerActionRequestVolumeBackupTemplate,
  ServerActionResponse,
  ServerIp,
  ServerIpv6,
  ServerLocation,
  ServerMaintenance,
  ServerSummary,
  ServerType,
  ServerTypeCapabilities,
  ServerTypeNetwork,
  ServerTypeNetworkInterface,
  ServerTypeVolumeConstraintSizes,
  ServerTypeVolumeConstraintsByType,
  SetPlacementGroupRequest,
  SetPlacementGroupResponse,
  SetPlacementGroupServersRequest,
  SetPlacementGroupServersResponse,
  SetSecurityGroupRulesRequest,
  SetSecurityGroupRulesRequestRule,
  SetSecurityGroupRulesResponse,
  Snapshot,
  SnapshotBaseVolume,
  Task,
  UpdateIpRequest,
  UpdateIpResponse,
  UpdatePlacementGroupRequest,
  UpdatePlacementGroupResponse,
  UpdatePlacementGroupServersRequest,
  UpdatePlacementGroupServersResponse,
  UpdatePrivateNICRequest,
  UpdateServerResponse,
  UpdateVolumeRequest,
  UpdateVolumeResponse,
  Volume,
  VolumeServer,
  VolumeServerTemplate,
  VolumeSummary,
  VolumeTemplate,
  VolumeType,
  VolumeTypeCapabilities,
  VolumeTypeConstraints,
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

export const unmarshalPrivateNIC = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNIC' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    macAddress: data.mac_address,
    privateNetworkId: data.private_network_id,
    serverId: data.server_id,
    state: data.state,
    tags: data.tags,
  } as PrivateNIC
}

const unmarshalServerSummary = (data: unknown) => {
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

const unmarshalBootscript = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Bootscript' failed as data isn't a dictionary.`,
    )
  }

  return {
    arch: data.arch,
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

const unmarshalVolume = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Volume' failed as data isn't a dictionary.`,
    )
  }

  return {
    creationDate: unmarshalDate(data.creation_date),
    exportUri: data.export_uri,
    id: data.id,
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    project: data.project,
    server: unmarshalServerSummary(data.server),
    size: data.size,
    state: data.state,
    tags: data.tags,
    volumeType: data.volume_type,
    zone: data.zone,
  } as Volume
}

const unmarshalVolumeSummary = (data: unknown) => {
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

const unmarshalImage = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Image' failed as data isn't a dictionary.`,
    )
  }

  return {
    arch: data.arch,
    creationDate: unmarshalDate(data.creation_date),
    defaultBootscript: data.default_bootscript
      ? unmarshalBootscript(data.default_bootscript)
      : undefined,
    extraVolumes: unmarshalMapOfObject(data.extra_volumes, unmarshalVolume),
    fromServer: data.from_server,
    id: data.id,
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    project: data.project,
    public: data.public,
    rootVolume: unmarshalVolumeSummary(data.root_volume),
    state: data.state,
    tags: data.tags,
    zone: data.zone,
  } as Image
}

export const unmarshalCreateImageResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: unmarshalImage(data.image),
  } as CreateImageResponse
}

const unmarshalIp = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Ip' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    id: data.id,
    organization: data.organization,
    prefix: data.prefix,
    project: data.project,
    reverse: data.reverse,
    server: unmarshalServerSummary(data.server),
    state: data.state,
    tags: data.tags,
    type: data.type,
    zone: data.zone,
  } as Ip
}

export const unmarshalCreateIpResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: unmarshalIp(data.ip),
  } as CreateIpResponse
}

const unmarshalPlacementGroup = (data: unknown) => {
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

export const unmarshalCreatePlacementGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreatePlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: unmarshalPlacementGroup(data.placement_group),
  } as CreatePlacementGroupResponse
}

export const unmarshalCreatePrivateNICResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreatePrivateNICResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNic: unmarshalPrivateNIC(data.private_nic),
  } as CreatePrivateNICResponse
}

const unmarshalSecurityGroup = (data: unknown) => {
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

export const unmarshalCreateSecurityGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: unmarshalSecurityGroup(data.security_group),
  } as CreateSecurityGroupResponse
}

const unmarshalSecurityGroupRule = (data: unknown) => {
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

export const unmarshalCreateSecurityGroupRuleResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: unmarshalSecurityGroupRule(data.rule),
  } as CreateSecurityGroupRuleResponse
}

const unmarshalSecurityGroupSummary = (data: unknown) => {
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

const unmarshalServerIp = (data: unknown) => {
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
    netmask: data.netmask,
    provisioningMode: data.provisioning_mode,
    tags: data.tags,
  } as ServerIp
}

const unmarshalServerIpv6 = (data: unknown) => {
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

const unmarshalServerLocation = (data: unknown) => {
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

const unmarshalServerMaintenance = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerMaintenance' failed as data isn't a dictionary.`,
    )
  }

  return {
    reason: data.reason,
  } as ServerMaintenance
}

const unmarshalVolumeServer = (data: unknown) => {
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
    server: unmarshalServerSummary(data.server),
    size: data.size,
    state: data.state,
    volumeType: data.volume_type,
    zone: data.zone,
  } as VolumeServer
}

const unmarshalServer = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    allowedActions: data.allowed_actions,
    arch: data.arch,
    bootType: data.boot_type,
    bootscript: data.bootscript
      ? unmarshalBootscript(data.bootscript)
      : undefined,
    commercialType: data.commercial_type,
    creationDate: unmarshalDate(data.creation_date),
    dynamicIpRequired: data.dynamic_ip_required,
    enableIpv6: data.enable_ipv6,
    hostname: data.hostname,
    id: data.id,
    image: unmarshalImage(data.image),
    ipv6: unmarshalServerIpv6(data.ipv6),
    location: unmarshalServerLocation(data.location),
    macAddress: data.mac_address,
    maintenances: unmarshalArrayOfObject(
      data.maintenances,
      unmarshalServerMaintenance,
    ),
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    placementGroup: unmarshalPlacementGroup(data.placement_group),
    privateIp: data.private_ip,
    privateNics: unmarshalArrayOfObject(data.private_nics, unmarshalPrivateNIC),
    project: data.project,
    protected: data.protected,
    publicIp: unmarshalServerIp(data.public_ip),
    publicIps: unmarshalArrayOfObject(data.public_ips, unmarshalServerIp),
    routedIpEnabled: data.routed_ip_enabled,
    securityGroup: unmarshalSecurityGroupSummary(data.security_group),
    state: data.state,
    stateDetail: data.state_detail,
    tags: data.tags,
    volumes: unmarshalMapOfObject(data.volumes, unmarshalVolumeServer),
    zone: data.zone,
  } as Server
}

export const unmarshalCreateServerResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: unmarshalServer(data.server),
  } as CreateServerResponse
}

const unmarshalSnapshotBaseVolume = (data: unknown) => {
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

const unmarshalSnapshot = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Snapshot' failed as data isn't a dictionary.`,
    )
  }

  return {
    baseVolume: unmarshalSnapshotBaseVolume(data.base_volume),
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

const unmarshalTask = (data: unknown) => {
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

export const unmarshalCreateSnapshotResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: unmarshalSnapshot(data.snapshot),
    task: unmarshalTask(data.task),
  } as CreateSnapshotResponse
}

export const unmarshalCreateVolumeResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    volume: unmarshalVolume(data.volume),
  } as CreateVolumeResponse
}

export const unmarshalExportSnapshotResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExportSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    task: unmarshalTask(data.task),
  } as ExportSnapshotResponse
}

export const unmarshalGetBootscriptResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetBootscriptResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    bootscript: unmarshalBootscript(data.bootscript),
  } as GetBootscriptResponse
}

const unmarshalDashboard = (data: unknown) => {
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

export const unmarshalGetDashboardResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDashboardResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dashboard: unmarshalDashboard(data.dashboard),
  } as GetDashboardResponse
}

export const unmarshalGetImageResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: unmarshalImage(data.image),
  } as GetImageResponse
}

export const unmarshalGetIpResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: unmarshalIp(data.ip),
  } as GetIpResponse
}

export const unmarshalGetPlacementGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetPlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: unmarshalPlacementGroup(data.placement_group),
  } as GetPlacementGroupResponse
}

const unmarshalPlacementGroupServer = (data: unknown) => {
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

export const unmarshalGetPlacementGroupServersResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetPlacementGroupServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(
      data.servers,
      unmarshalPlacementGroupServer,
    ),
  } as GetPlacementGroupServersResponse
}

export const unmarshalGetPrivateNICResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetPrivateNICResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNic: unmarshalPrivateNIC(data.private_nic),
  } as GetPrivateNICResponse
}

export const unmarshalGetSecurityGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: unmarshalSecurityGroup(data.security_group),
  } as GetSecurityGroupResponse
}

export const unmarshalGetSecurityGroupRuleResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: unmarshalSecurityGroupRule(data.rule),
  } as GetSecurityGroupRuleResponse
}

export const unmarshalGetServerResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: unmarshalServer(data.server),
  } as GetServerResponse
}

const unmarshalGetServerTypesAvailabilityResponseAvailability = (
  data: unknown,
) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerTypesAvailabilityResponseAvailability' failed as data isn't a dictionary.`,
    )
  }

  return {
    availability: data.availability,
  } as GetServerTypesAvailabilityResponseAvailability
}

export const unmarshalGetServerTypesAvailabilityResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerTypesAvailabilityResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalMapOfObject(
      data.servers,
      unmarshalGetServerTypesAvailabilityResponseAvailability,
    ),
    totalCount: data.total_count,
  } as GetServerTypesAvailabilityResponse
}

export const unmarshalGetSnapshotResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: unmarshalSnapshot(data.snapshot),
  } as GetSnapshotResponse
}

export const unmarshalGetVolumeResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    volume: unmarshalVolume(data.volume),
  } as GetVolumeResponse
}

export const unmarshalListBootscriptsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBootscriptsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    bootscripts: unmarshalArrayOfObject(data.bootscripts, unmarshalBootscript),
    totalCount: data.total_count,
  } as ListBootscriptsResponse
}

export const unmarshalListImagesResponse = (data: unknown) => {
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

export const unmarshalListIpsResponse = (data: unknown) => {
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

export const unmarshalListPlacementGroupsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPlacementGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroups: unmarshalArrayOfObject(
      data.placement_groups,
      unmarshalPlacementGroup,
    ),
    totalCount: data.total_count,
  } as ListPlacementGroupsResponse
}

export const unmarshalListPrivateNICsResponse = (data: unknown) => {
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

export const unmarshalListSecurityGroupRulesResponse = (data: unknown) => {
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

export const unmarshalListSecurityGroupsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecurityGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroups: unmarshalArrayOfObject(
      data.security_groups,
      unmarshalSecurityGroup,
    ),
    totalCount: data.total_count,
  } as ListSecurityGroupsResponse
}

export const unmarshalListServerActionsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerActionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    actions: data.actions,
  } as ListServerActionsResponse
}

export const unmarshalListServerUserDataResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerUserDataResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    userData: data.user_data,
  } as ListServerUserDataResponse
}

export const unmarshalListServersResponse = (data: unknown) => {
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

const unmarshalServerTypeNetworkInterface = (data: unknown) => {
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

const unmarshalServerTypeVolumeConstraintSizes = (data: unknown) => {
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

const unmarshalServerTypeCapabilities = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeCapabilities' failed as data isn't a dictionary.`,
    )
  }

  return {
    blockStorage: data.block_storage,
    bootTypes: data.boot_types,
  } as ServerTypeCapabilities
}

const unmarshalServerTypeNetwork = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    interfaces: unmarshalArrayOfObject(
      data.interfaces,
      unmarshalServerTypeNetworkInterface,
    ),
    ipv6Support: data.ipv6_support,
    sumInternalBandwidth: data.sum_internal_bandwidth,
    sumInternetBandwidth: data.sum_internet_bandwidth,
  } as ServerTypeNetwork
}

const unmarshalServerTypeVolumeConstraintsByType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeVolumeConstraintsByType' failed as data isn't a dictionary.`,
    )
  }

  return {
    lSsd: unmarshalServerTypeVolumeConstraintSizes(data.l_ssd),
  } as ServerTypeVolumeConstraintsByType
}

const unmarshalServerType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerType' failed as data isn't a dictionary.`,
    )
  }

  return {
    altNames: data.alt_names,
    arch: data.arch,
    baremetal: data.baremetal,
    capabilities: unmarshalServerTypeCapabilities(data.capabilities),
    gpu: data.gpu,
    hourlyPrice: data.hourly_price,
    monthlyPrice: data.monthly_price,
    ncpus: data.ncpus,
    network: unmarshalServerTypeNetwork(data.network),
    perVolumeConstraint: unmarshalServerTypeVolumeConstraintsByType(
      data.per_volume_constraint,
    ),
    ram: data.ram,
    scratchStorageMaxSize: data.scratch_storage_max_size,
    volumesConstraint: unmarshalServerTypeVolumeConstraintSizes(
      data.volumes_constraint,
    ),
  } as ServerType
}

export const unmarshalListServersTypesResponse = (data: unknown) => {
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

export const unmarshalListSnapshotsResponse = (data: unknown) => {
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

export const unmarshalListVolumesResponse = (data: unknown) => {
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

const unmarshalVolumeTypeCapabilities = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeTypeCapabilities' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: data.snapshot,
  } as VolumeTypeCapabilities
}

const unmarshalVolumeTypeConstraints = (data: unknown) => {
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

const unmarshalVolumeType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    capabilities: unmarshalVolumeTypeCapabilities(data.capabilities),
    constraints: unmarshalVolumeTypeConstraints(data.constraints),
    displayName: data.display_name,
  } as VolumeType
}

export const unmarshalListVolumesTypesResponse = (data: unknown) => {
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

export const unmarshalMigrationPlan = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MigrationPlan' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshots: unmarshalArrayOfObject(data.snapshots, unmarshalSnapshot),
    validationKey: data.validation_key,
    volume: unmarshalVolume(data.volume),
  } as MigrationPlan
}

export const unmarshalServerActionResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerActionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    task: unmarshalTask(data.task),
  } as ServerActionResponse
}

export const unmarshalSetImageResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: unmarshalImage(data.image),
  } as SetImageResponse
}

export const unmarshalSetPlacementGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetPlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: unmarshalPlacementGroup(data.placement_group),
  } as SetPlacementGroupResponse
}

export const unmarshalSetPlacementGroupServersResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetPlacementGroupServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(
      data.servers,
      unmarshalPlacementGroupServer,
    ),
  } as SetPlacementGroupServersResponse
}

export const unmarshalSetSecurityGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: unmarshalSecurityGroup(data.security_group),
  } as SetSecurityGroupResponse
}

export const unmarshalSetSecurityGroupRuleResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: unmarshalSecurityGroupRule(data.rule),
  } as SetSecurityGroupRuleResponse
}

export const unmarshalSetSecurityGroupRulesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSecurityGroupRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rules: unmarshalArrayOfObject(data.rules, unmarshalSecurityGroupRule),
  } as SetSecurityGroupRulesResponse
}

export const unmarshalSetServerResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: unmarshalServer(data.server),
  } as SetServerResponse
}

export const unmarshalSetSnapshotResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: unmarshalSnapshot(data.snapshot),
  } as SetSnapshotResponse
}

export const unmarshalUpdateIpResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: unmarshalIp(data.ip),
  } as UpdateIpResponse
}

export const unmarshalUpdatePlacementGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdatePlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: unmarshalPlacementGroup(data.placement_group),
  } as UpdatePlacementGroupResponse
}

export const unmarshalUpdatePlacementGroupServersResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdatePlacementGroupServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(
      data.servers,
      unmarshalPlacementGroupServer,
    ),
  } as UpdatePlacementGroupServersResponse
}

export const unmarshalUpdateServerResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: unmarshalServer(data.server),
  } as UpdateServerResponse
}

export const unmarshalUpdateVolumeResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    volume: unmarshalVolume(data.volume),
  } as UpdateVolumeResponse
}

export const marshalApplyBlockMigrationRequest = (
  request: ApplyBlockMigrationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  validation_key: request.validationKey,
  ...resolveOneOf<unknown>([
    { param: 'volume_id', value: request.volumeId },
    { param: 'snapshot_id', value: request.snapshotId },
  ]),
})

const marshalVolumeTemplate = (
  request: VolumeTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
  size: request.size,
  volume_type: request.volumeType,
  ...resolveOneOf<unknown>([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
  ]),
})

export const marshalCreateImageRequest = (
  request: CreateImageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  default_bootscript: request.defaultBootscript,
  extra_volumes:
    request.extraVolumes !== undefined
      ? Object.entries(request.extraVolumes).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: marshalVolumeTemplate(value, defaults),
          }),
          {},
        )
      : undefined,
  name: request.name || randomName('img'),
  public: request.public,
  root_volume: request.rootVolume,
  tags: request.tags,
  ...resolveOneOf<unknown>([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
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
  ...resolveOneOf<unknown>([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
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
  ...resolveOneOf<unknown>([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
  ]),
})

export const marshalCreatePrivateNICRequest = (
  request: CreatePrivateNICRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_ids: request.ipIds,
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
  ...resolveOneOf<unknown>([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
  ]),
  ...resolveOneOf<unknown>([
    { param: 'organization_default', value: request.organizationDefault },
    { param: 'project_default', value: request.projectDefault },
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
  organization: request.organization ?? defaults.defaultOrganizationId,
  project: request.project ?? defaults.defaultProjectId,
  size: request.size,
  volume_type: request.volumeType,
})

export const marshalCreateServerRequest = (
  request: CreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  boot_type: request.bootType,
  bootscript: request.bootscript,
  commercial_type: request.commercialType,
  dynamic_ip_required: request.dynamicIpRequired,
  enable_ipv6: request.enableIpv6,
  image: request.image,
  name: request.name || randomName('srv'),
  placement_group: request.placementGroup,
  public_ip: request.publicIp,
  public_ips: request.publicIps,
  routed_ip_enabled: request.routedIpEnabled,
  security_group: request.securityGroup,
  tags: request.tags,
  volumes:
    request.volumes !== undefined
      ? Object.entries(request.volumes).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: marshalVolumeServerTemplate(value, defaults),
          }),
          {},
        )
      : undefined,
  ...resolveOneOf<unknown>([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
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
  ...resolveOneOf<unknown>([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
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
  ...resolveOneOf<unknown>([
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
  ]),
  ...resolveOneOf<unknown>([
    { param: 'size', value: request.size },
    { param: 'base_volume', value: request.baseVolume },
    { param: 'base_snapshot', value: request.baseSnapshot },
  ]),
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
  ...resolveOneOf<unknown>([
    { param: 'volume_id', value: request.volumeId },
    { param: 'snapshot_id', value: request.snapshotId },
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
  name: request.name,
  volumes:
    request.volumes !== undefined
      ? Object.entries(request.volumes).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: marshalServerActionRequestVolumeBackupTemplate(
              value,
              defaults,
            ),
          }),
          {},
        )
      : undefined,
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
  arch: request.arch,
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
  export_uri: request.exportUri,
  id: request.id,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization,
  project: request.project,
  server: marshalServerSummary(request.server, defaults),
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
  default_bootscript:
    request.defaultBootscript !== undefined
      ? marshalBootscript(request.defaultBootscript, defaults)
      : undefined,
  extra_volumes:
    request.extraVolumes !== undefined
      ? Object.entries(request.extraVolumes).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: marshalVolume(value, defaults),
          }),
          {},
        )
      : undefined,
  from_server: request.fromServer,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization ?? defaults.defaultOrganizationId,
  project: request.project ?? defaults.defaultProjectId,
  public: request.public,
  root_volume:
    request.rootVolume !== undefined
      ? marshalVolumeSummary(request.rootVolume, defaults)
      : undefined,
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
  servers:
    request.servers !== undefined
      ? request.servers.map(elt => marshalServerSummary(elt, defaults))
      : undefined,
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
  zone: request.zone ?? defaults.defaultZone,
})

export const marshalSetSecurityGroupRulesRequest = (
  request: SetSecurityGroupRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  rules:
    request.rules !== undefined
      ? request.rules.map(elt =>
          marshalSetSecurityGroupRulesRequestRule(elt, defaults),
        )
      : undefined,
})

const marshalImage = (
  request: Image,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  creation_date: request.creationDate,
  default_bootscript:
    request.defaultBootscript !== undefined
      ? marshalBootscript(request.defaultBootscript, defaults)
      : undefined,
  extra_volumes: Object.entries(request.extraVolumes).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: marshalVolume(value, defaults) }),
    {},
  ),
  from_server: request.fromServer,
  id: request.id,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization,
  project: request.project,
  public: request.public,
  root_volume: marshalVolumeSummary(request.rootVolume, defaults),
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
  id: request.id,
  mac_address: request.macAddress,
  private_network_id: request.privateNetworkId,
  server_id: request.serverId,
  state: request.state,
  tags: request.tags,
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
  netmask: request.netmask,
  provisioning_mode: request.provisioningMode,
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
})

export const marshalSetServerRequest = (
  request: SetServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  allowed_actions:
    request.allowedActions !== undefined ? request.allowedActions : undefined,
  arch: request.arch,
  boot_type: request.bootType,
  bootscript:
    request.bootscript !== undefined
      ? marshalBootscript(request.bootscript, defaults)
      : undefined,
  commercial_type: request.commercialType,
  creation_date: request.creationDate,
  dynamic_ip_required: request.dynamicIpRequired,
  enable_ipv6: request.enableIpv6,
  hostname: request.hostname,
  image:
    request.image !== undefined
      ? marshalImage(request.image, defaults)
      : undefined,
  ipv6:
    request.ipv6 !== undefined
      ? marshalServerIpv6(request.ipv6, defaults)
      : undefined,
  location:
    request.location !== undefined
      ? marshalServerLocation(request.location, defaults)
      : undefined,
  maintenances:
    request.maintenances !== undefined
      ? request.maintenances.map(elt => marshalServerMaintenance(elt, defaults))
      : undefined,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization ?? defaults.defaultOrganizationId,
  placement_group:
    request.placementGroup !== undefined
      ? marshalPlacementGroup(request.placementGroup, defaults)
      : undefined,
  private_ip: request.privateIp,
  private_nics:
    request.privateNics !== undefined
      ? request.privateNics.map(elt => marshalPrivateNIC(elt, defaults))
      : undefined,
  project: request.project ?? defaults.defaultProjectId,
  protected: request.protected,
  public_ip:
    request.publicIp !== undefined
      ? marshalServerIp(request.publicIp, defaults)
      : undefined,
  public_ips:
    request.publicIps !== undefined
      ? request.publicIps.map(elt => marshalServerIp(elt, defaults))
      : undefined,
  routed_ip_enabled: request.routedIpEnabled,
  security_group:
    request.securityGroup !== undefined
      ? marshalSecurityGroupSummary(request.securityGroup, defaults)
      : undefined,
  state: request.state,
  state_detail: request.stateDetail,
  tags: request.tags,
  volumes:
    request.volumes !== undefined
      ? Object.entries(request.volumes).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: marshalVolume(value, defaults),
          }),
          {},
        )
      : undefined,
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
  base_volume:
    request.baseVolume !== undefined
      ? marshalSnapshotBaseVolume(request.baseVolume, defaults)
      : undefined,
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
  boot_type: request.bootType,
  bootscript: request.bootscript,
  commercial_type: request.commercialType,
  dynamic_ip_required: request.dynamicIpRequired,
  enable_ipv6: request.enableIpv6,
  name: request.name,
  placement_group: request.placementGroup,
  private_nics: request.privateNics,
  protected: request.protected,
  public_ips: request.publicIps,
  routed_ip_enabled: request.routedIpEnabled,
  security_group:
    request.securityGroup !== undefined
      ? marshalSecurityGroupTemplate(request.securityGroup, defaults)
      : undefined,
  tags: request.tags,
  volumes:
    request.volumes !== undefined
      ? Object.entries(request.volumes).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: marshalVolumeServerTemplate(value, defaults),
          }),
          {},
        )
      : undefined,
})

export const marshalUpdateVolumeRequest = (
  request: UpdateVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  size: request.size,
  tags: request.tags,
})
