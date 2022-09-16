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
  NullableStringValue,
  PlacementGroup,
  PlacementGroupServer,
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

const unmarshalServerSummary = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerSummary' failed as data isn't a dictionary.`,
    )
  }

  return { id: data.id, name: data.name } as ServerSummary
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
    server: data.server ? unmarshalServerSummary(data.server) : undefined,
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
    rootVolume: data.root_volume
      ? unmarshalVolumeSummary(data.root_volume)
      : undefined,
    state: data.state,
    tags: data.tags,
    zone: data.zone,
  } as Image
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

const unmarshalPrivateNIC = (data: unknown) => {
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
  } as PrivateNIC
}

const unmarshalSecurityGroupSummary = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecurityGroupSummary' failed as data isn't a dictionary.`,
    )
  }

  return { id: data.id, name: data.name } as SecurityGroupSummary
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
    id: data.id,
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

  return {} as ServerMaintenance
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
    lSsd: data.l_ssd
      ? unmarshalServerTypeVolumeConstraintSizes(data.l_ssd)
      : undefined,
  } as ServerTypeVolumeConstraintsByType
}

const unmarshalSnapshotBaseVolume = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnapshotBaseVolume' failed as data isn't a dictionary.`,
    )
  }

  return { id: data.id, name: data.name } as SnapshotBaseVolume
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
    server: data.server ? unmarshalServerSummary(data.server) : undefined,
    size: data.size,
    state: data.state,
    volumeType: data.volume_type,
    zone: data.zone,
  } as VolumeServer
}

const unmarshalVolumeTypeCapabilities = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeTypeCapabilities' failed as data isn't a dictionary.`,
    )
  }

  return { snapshot: data.snapshot } as VolumeTypeCapabilities
}

const unmarshalVolumeTypeConstraints = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeTypeConstraints' failed as data isn't a dictionary.`,
    )
  }

  return { max: data.max, min: data.min } as VolumeTypeConstraints
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
    project: data.project,
    reverse: data.reverse,
    server: data.server ? unmarshalServerSummary(data.server) : undefined,
    tags: data.tags,
    zone: data.zone,
  } as Ip
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

const unmarshalServer = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    allowedActions: data.allowed_actions,
    arch: data.arch,
    bootscript: data.bootscript
      ? unmarshalBootscript(data.bootscript)
      : undefined,
    bootType: data.boot_type,
    commercialType: data.commercial_type,
    creationDate: unmarshalDate(data.creation_date),
    dynamicIpRequired: data.dynamic_ip_required,
    enableIpv6: data.enable_ipv6,
    hostname: data.hostname,
    id: data.id,
    image: data.image ? unmarshalImage(data.image) : undefined,
    ipv6: data.ipv6 ? unmarshalServerIpv6(data.ipv6) : undefined,
    location: data.location
      ? unmarshalServerLocation(data.location)
      : undefined,
    maintenances: unmarshalArrayOfObject(
      data.maintenances,
      unmarshalServerMaintenance,
    ),
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization,
    placementGroup: data.placement_group
      ? unmarshalPlacementGroup(data.placement_group)
      : undefined,
    privateIp: data.private_ip,
    privateNics: unmarshalArrayOfObject(data.private_nics, unmarshalPrivateNIC),
    project: data.project,
    protected: data.protected,
    publicIp: data.public_ip ? unmarshalServerIp(data.public_ip) : undefined,
    securityGroup: data.security_group
      ? unmarshalSecurityGroupSummary(data.security_group)
      : undefined,
    state: data.state,
    stateDetail: data.state_detail,
    tags: data.tags,
    volumes: unmarshalMapOfObject(data.volumes, unmarshalVolumeServer),
    zone: data.zone,
  } as Server
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
    capabilities: data.capabilities
      ? unmarshalServerTypeCapabilities(data.capabilities)
      : undefined,
    gpu: data.gpu,
    hourlyPrice: data.hourly_price,
    monthlyPrice: data.monthly_price,
    ncpus: data.ncpus,
    network: data.network
      ? unmarshalServerTypeNetwork(data.network)
      : undefined,
    perVolumeConstraint: data.per_volume_constraint
      ? unmarshalServerTypeVolumeConstraintsByType(data.per_volume_constraint)
      : undefined,
    ram: data.ram,
    volumesConstraint: data.volumes_constraint
      ? unmarshalServerTypeVolumeConstraintSizes(data.volumes_constraint)
      : undefined,
  } as ServerType
}

const unmarshalSnapshot = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Snapshot' failed as data isn't a dictionary.`,
    )
  }

  return {
    baseVolume: data.base_volume
      ? unmarshalSnapshotBaseVolume(data.base_volume)
      : undefined,
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

const unmarshalVolumeType = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VolumeType' failed as data isn't a dictionary.`,
    )
  }

  return {
    capabilities: data.capabilities
      ? unmarshalVolumeTypeCapabilities(data.capabilities)
      : undefined,
    constraints: data.constraints
      ? unmarshalVolumeTypeConstraints(data.constraints)
      : undefined,
    displayName: data.display_name,
  } as VolumeType
}

export const unmarshalCreateImageResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: data.image ? unmarshalImage(data.image) : undefined,
    location: data.Location,
  } as CreateImageResponse
}

export const unmarshalCreateIpResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: data.ip ? unmarshalIp(data.ip) : undefined,
    location: data.Location,
  } as CreateIpResponse
}

export const unmarshalCreatePlacementGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreatePlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: data.placement_group
      ? unmarshalPlacementGroup(data.placement_group)
      : undefined,
  } as CreatePlacementGroupResponse
}

export const unmarshalCreatePrivateNICResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreatePrivateNICResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNic: data.private_nic
      ? unmarshalPrivateNIC(data.private_nic)
      : undefined,
  } as CreatePrivateNICResponse
}

export const unmarshalCreateSecurityGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: data.security_group
      ? unmarshalSecurityGroup(data.security_group)
      : undefined,
  } as CreateSecurityGroupResponse
}

export const unmarshalCreateSecurityGroupRuleResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: data.rule ? unmarshalSecurityGroupRule(data.rule) : undefined,
  } as CreateSecurityGroupRuleResponse
}

export const unmarshalCreateServerResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as CreateServerResponse
}

export const unmarshalCreateSnapshotResponse = (data: unknown) => {
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

export const unmarshalCreateVolumeResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    location: data.Location,
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as CreateVolumeResponse
}

export const unmarshalExportSnapshotResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ExportSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    task: data.task ? unmarshalTask(data.task) : undefined,
  } as ExportSnapshotResponse
}

export const unmarshalGetBootscriptResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetBootscriptResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    bootscript: data.bootscript
      ? unmarshalBootscript(data.bootscript)
      : undefined,
  } as GetBootscriptResponse
}

export const unmarshalGetDashboardResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDashboardResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dashboard: data.dashboard ? unmarshalDashboard(data.dashboard) : undefined,
  } as GetDashboardResponse
}

export const unmarshalGetImageResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: data.image ? unmarshalImage(data.image) : undefined,
  } as GetImageResponse
}

export const unmarshalGetIpResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return { ip: data.ip ? unmarshalIp(data.ip) : undefined } as GetIpResponse
}

export const unmarshalGetPlacementGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetPlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: data.placement_group
      ? unmarshalPlacementGroup(data.placement_group)
      : undefined,
  } as GetPlacementGroupResponse
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
    privateNic: data.private_nic
      ? unmarshalPrivateNIC(data.private_nic)
      : undefined,
  } as GetPrivateNICResponse
}

export const unmarshalGetSecurityGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSecurityGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    securityGroup: data.security_group
      ? unmarshalSecurityGroup(data.security_group)
      : undefined,
  } as GetSecurityGroupResponse
}

export const unmarshalGetSecurityGroupRuleResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: data.rule ? unmarshalSecurityGroupRule(data.rule) : undefined,
  } as GetSecurityGroupRuleResponse
}

export const unmarshalGetServerResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as GetServerResponse
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
  } as GetServerTypesAvailabilityResponse
}

export const unmarshalGetSnapshotResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: data.snapshot ? unmarshalSnapshot(data.snapshot) : undefined,
  } as GetSnapshotResponse
}

export const unmarshalGetVolumeResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
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

  return { actions: data.actions } as ListServerActionsResponse
}

export const unmarshalListServerUserDataResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerUserDataResponse' failed as data isn't a dictionary.`,
    )
  }

  return { userData: data.user_data } as ListServerUserDataResponse
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

export const unmarshalServerActionResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerActionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    task: data.task ? unmarshalTask(data.task) : undefined,
  } as ServerActionResponse
}

export const unmarshalSetImageResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: data.image ? unmarshalImage(data.image) : undefined,
  } as SetImageResponse
}

export const unmarshalSetPlacementGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetPlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: data.placement_group
      ? unmarshalPlacementGroup(data.placement_group)
      : undefined,
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
    securityGroup: data.security_group
      ? unmarshalSecurityGroup(data.security_group)
      : undefined,
  } as SetSecurityGroupResponse
}

export const unmarshalSetSecurityGroupRuleResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSecurityGroupRuleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rule: data.rule ? unmarshalSecurityGroupRule(data.rule) : undefined,
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
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as SetServerResponse
}

export const unmarshalSetSnapshotResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetSnapshotResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snapshot: data.snapshot ? unmarshalSnapshot(data.snapshot) : undefined,
  } as SetSnapshotResponse
}

export const unmarshalUpdateIpResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateIpResponse' failed as data isn't a dictionary.`,
    )
  }

  return { ip: data.ip ? unmarshalIp(data.ip) : undefined } as UpdateIpResponse
}

export const unmarshalUpdatePlacementGroupResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdatePlacementGroupResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    placementGroup: data.placement_group
      ? unmarshalPlacementGroup(data.placement_group)
      : undefined,
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
    server: data.server ? unmarshalServer(data.server) : undefined,
  } as UpdateServerResponse
}

export const unmarshalUpdateVolumeResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateVolumeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    volume: data.volume ? unmarshalVolume(data.volume) : undefined,
  } as UpdateVolumeResponse
}

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
  server: request.server
    ? marshalServerSummary(request.server, defaults)
    : undefined,
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

const marshalImage = (
  request: Image,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  creation_date: request.creationDate,
  default_bootscript: request.defaultBootscript
    ? marshalBootscript(request.defaultBootscript, defaults)
    : undefined,
  extra_volumes: Object.entries(request.extraVolumes).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: marshalVolume(value, defaults),
    }),
    {},
  ),
  from_server: request.fromServer,
  id: request.id,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization,
  project: request.project,
  public: request.public,
  root_volume: request.rootVolume
    ? marshalVolumeSummary(request.rootVolume, defaults)
    : undefined,
  state: request.state,
  tags: request.tags,
  zone: request.zone,
})

const marshalNullableStringValue = (
  request: NullableStringValue,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  null: request.null,
  value: request.value,
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
})

const marshalSecurityGroupSummary = (
  request: SecurityGroupSummary,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
})

const marshalSecurityGroupTemplate = (
  request: SecurityGroupTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
})

const marshalServerActionRequestVolumeBackupTemplate = (
  request: ServerActionRequestVolumeBackupTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  volume_type: request.volumeType,
})

const marshalServerIp = (
  request: ServerIp,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  dynamic: request.dynamic,
  id: request.id,
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
): Record<string, unknown> => ({})

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

const marshalSnapshotBaseVolume = (
  request: SnapshotBaseVolume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
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

const marshalVolumeTemplate = (
  request: VolumeTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  name: request.name,
  size: request.size,
  volume_type: request.volumeType,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
  ]),
})

export const marshalCreateImageRequest = (
  request: CreateImageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  default_bootscript: request.defaultBootscript,
  extra_volumes: request.extraVolumes
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
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
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
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
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
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
  ]),
})

export const marshalCreatePrivateNICRequest = (
  request: CreatePrivateNICRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
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
    {
      param: 'organization_default',
      value: request.organizationDefault,
    },
    {
      param: 'project_default',
      value: request.projectDefault,
    },
  ]),
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
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
  security_group: request.securityGroup,
  tags: request.tags,
  volumes: request.volumes
    ? Object.entries(request.volumes).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: marshalVolumeServerTemplate(value, defaults),
        }),
        {},
      )
    : undefined,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
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
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
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
    {
      default: defaults.defaultProjectId,
      param: 'project',
      value: request.project,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization',
      value: request.organization,
    },
  ]),
  ...resolveOneOf<unknown>([
    {
      param: 'size',
      value: request.size,
    },
    {
      param: 'base_volume',
      value: request.baseVolume,
    },
    {
      param: 'base_snapshot',
      value: request.baseSnapshot,
    },
  ]),
})

export const marshalExportSnapshotRequest = (
  request: ExportSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  bucket: request.bucket,
  key: request.key,
})

export const marshalServerActionRequest = (
  request: ServerActionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  name: request.name,
  volumes: request.volumes
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

export const marshalSetImageRequest = (
  request: SetImageRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  arch: request.arch,
  creation_date: request.creationDate,
  default_bootscript: request.defaultBootscript
    ? marshalBootscript(request.defaultBootscript, defaults)
    : undefined,
  extra_volumes: request.extraVolumes
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
  organization: request.organization,
  project: request.project,
  public: request.public,
  root_volume: request.rootVolume
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
  organization: request.organization,
  policy_mode: request.policyMode,
  policy_type: request.policyType,
  project: request.project,
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
  organization: request.organization,
  organization_default: request.organizationDefault,
  outbound_default_policy: request.outboundDefaultPolicy,
  project: request.project,
  project_default: request.projectDefault,
  servers: request.servers
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

export const marshalSetSecurityGroupRulesRequest = (
  request: SetSecurityGroupRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  rules: request.rules
    ? request.rules.map(elt =>
        marshalSetSecurityGroupRulesRequestRule(elt, defaults),
      )
    : undefined,
})

export const marshalSetServerRequest = (
  request: SetServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  allowed_actions: request.allowedActions,
  arch: request.arch,
  boot_type: request.bootType,
  bootscript: request.bootscript
    ? marshalBootscript(request.bootscript, defaults)
    : undefined,
  commercial_type: request.commercialType,
  creation_date: request.creationDate,
  dynamic_ip_required: request.dynamicIpRequired,
  enable_ipv6: request.enableIpv6,
  hostname: request.hostname,
  image: request.image ? marshalImage(request.image, defaults) : undefined,
  ipv6: request.ipv6 ? marshalServerIpv6(request.ipv6, defaults) : undefined,
  location: request.location
    ? marshalServerLocation(request.location, defaults)
    : undefined,
  maintenances: request.maintenances
    ? request.maintenances.map(elt => marshalServerMaintenance(elt, defaults))
    : undefined,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization,
  placement_group: request.placementGroup
    ? marshalPlacementGroup(request.placementGroup, defaults)
    : undefined,
  private_ip: request.privateIp,
  private_nics: request.privateNics
    ? request.privateNics.map(elt => marshalPrivateNIC(elt, defaults))
    : undefined,
  project: request.project,
  protected: request.protected,
  public_ip: request.publicIp
    ? marshalServerIp(request.publicIp, defaults)
    : undefined,
  security_group: request.securityGroup
    ? marshalSecurityGroupSummary(request.securityGroup, defaults)
    : undefined,
  state: request.state,
  state_detail: request.stateDetail,
  tags: request.tags,
  volumes: request.volumes
    ? Object.entries(request.volumes).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: marshalVolume(value, defaults),
        }),
        {},
      )
    : undefined,
})

export const marshalSetSnapshotRequest = (
  request: SetSnapshotRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  base_volume: request.baseVolume
    ? marshalSnapshotBaseVolume(request.baseVolume, defaults)
    : undefined,
  creation_date: request.creationDate,
  id: request.id,
  modification_date: request.modificationDate,
  name: request.name,
  organization: request.organization,
  project: request.project,
  size: request.size,
  state: request.state,
  tags: request.tags,
  volume_type: request.volumeType,
})

export const marshalUpdateIpRequest = (
  request: UpdateIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverse: request.reverse
    ? marshalNullableStringValue(request.reverse, defaults)
    : undefined,
  server: request.server
    ? marshalNullableStringValue(request.server, defaults)
    : undefined,
  tags: request.tags,
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

export const marshalUpdateServerRequest = (
  request: UpdateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  boot_type: request.bootType,
  bootscript: request.bootscript,
  dynamic_ip_required: request.dynamicIpRequired,
  enable_ipv6: request.enableIpv6,
  name: request.name,
  placement_group: request.placementGroup
    ? marshalNullableStringValue(request.placementGroup, defaults)
    : undefined,
  private_nics: request.privateNics
    ? request.privateNics.map(elt => marshalPrivateNIC(elt, defaults))
    : undefined,
  protected: request.protected,
  security_group: request.securityGroup
    ? marshalSecurityGroupTemplate(request.securityGroup, defaults)
    : undefined,
  tags: request.tags,
  volumes: request.volumes
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
