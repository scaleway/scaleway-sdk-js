
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, } from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  SecurityGroupRulePortRange,
  SecurityGroupRule,
  SecurityGroup,
  PlacementGroup,
  PrivateNetworkInterface,
  AddSecurityGroupRulesResponse,
  ListPlacementGroupsResponse,
  ListPrivateNetworkInterfacesResponse,
  SecurityGroupSummary,
  ListSecurityGroupsResponse,
  ServerTypeGpuInfo,
  ServerTypeLimits,
  ServerType,
  ListServerTypesResponse,
  ServerSummary,
  ListServersResponse,
  ListTemplateUserDataKeysResponse,
  TemplateSummary,
  ListTemplatesResponse,
  ListUserDataKeysResponse,
  ResourceCounts,
  ServerIP,
  ServerFilesystem,
  ServerPrivateNetworkInterface,
  ServerPublicNetworkInterface,
  ServerRDPPassword,
  ServerVolume,
  Server,
  CreateTemplateRequestPrivateNetworkTemplate,
  CreateTemplateRequestVolumeTemplate,
  Template,
  UserData,
  SecurityGroupRuleConfig,
  AddSecurityGroupRulesRequest,
  AttachServerFileSystemRequest,
  AttachServerIPRequest,
  AttachServerPrivateNetworkInterfaceRequest,
  AttachServerVolumeRequest,
  CreatePlacementGroupRequest,
  CreatePrivateNetworkInterfaceRequest,
  CreateSecurityGroupRequest,
  CreateServerFromTemplateRequest,
  CreateServerRequestBookIP,
  CreateServerRequestServerIP,
  CreateServerRequestCreateVolume,
  CreateServerRequestPublicNetworkInterface,
  CreateServerRequestServerVolume,
  CreateServerRequest,
  CreateTemplateRequest,
  DeleteSecurityGroupRulesRequest,
  DetachServerFileSystemRequest,
  DetachServerIPRequest,
  DetachServerPrivateNetworkInterfaceRequest,
  DetachServerVolumeRequest,
  SetSecurityGroupRulesRequest,
  SetServerCloudInitRequest,
  SetServerDefaultIPRequest,
  SetTemplateCloudInitRequest,
  SetTemplateUserDataRequest,
  SetUserDataRequest,
  StopAndDeleteServerRequest,
  UpdatePlacementGroupRequest,
  UpdatePrivateNetworkInterfaceRequest,
  UpdateSecurityGroupRequest,
  UpdateSecurityGroupRuleRequest,
  UpdateServerRequestPublicNetworkInterface,
  UpdateServerRequest,
  UpdateTemplateRequestUpdatePrivateNetworks,
  UpdateTemplateRequestUpdateVolumes,
  UpdateTemplateRequest,
} from './types.gen.js'

export const unmarshalSecurityGroupRulePortRange = (data: unknown): SecurityGroupRulePortRange => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecurityGroupRulePortRange' failed as data isn't a dictionary.`,
    )
  }

  return {
    end: data.end,
    start: data.start,
  } as SecurityGroupRulePortRange
}

const unmarshalSecurityGroupRule = (data: unknown): SecurityGroupRule => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecurityGroupRule' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    destinationIpRange: data.destination_ip_range,
    destinationPorts: data.destination_ports ? unmarshalSecurityGroupRulePortRange(data.destination_ports) : undefined,
    direction: data.direction,
    id: data.id,
    position: data.position,
    protocol: data.protocol,
    sourceIpRange: data.source_ip_range,
    sourcePorts: data.source_ports ? unmarshalSecurityGroupRulePortRange(data.source_ports) : undefined,
  } as SecurityGroupRule
}

export const unmarshalSecurityGroup = (data: unknown): SecurityGroup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecurityGroup' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    defaultRules: unmarshalArrayOfObject(data.default_rules, unmarshalSecurityGroupRule),
    description: data.description,
    disableDefaultRules: data.disable_default_rules,
    id: data.id,
    inboundDefaultAction: data.inbound_default_action,
    name: data.name,
    outboundDefaultAction: data.outbound_default_action,
    projectDefault: data.project_default,
    projectId: data.project_id,
    rules: unmarshalArrayOfObject(data.rules, unmarshalSecurityGroupRule),
    stateless: data.stateless,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as SecurityGroup
}

export const unmarshalPlacementGroup = (data: unknown): PlacementGroup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PlacementGroup' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    policyType: data.policy_type,
    projectId: data.project_id,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as PlacementGroup
}

export const unmarshalPrivateNetworkInterface = (data: unknown): PrivateNetworkInterface => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetworkInterface' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    ipIds: data.ip_ids,
    macAddress: data.mac_address,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    securityGroupId: data.security_group_id,
    serverId: data.server_id,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as PrivateNetworkInterface
}

export const unmarshalAddSecurityGroupRulesResponse = (data: unknown): AddSecurityGroupRulesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AddSecurityGroupRulesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    addedRules: unmarshalArrayOfObject(data.added_rules, unmarshalSecurityGroupRule),
    securityGroup: data.security_group ? unmarshalSecurityGroup(data.security_group) : undefined,
  } as AddSecurityGroupRulesResponse
}

export const unmarshalListPlacementGroupsResponse = (data: unknown): ListPlacementGroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPlacementGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextPageToken: data.next_page_token,
    placementGroups: unmarshalArrayOfObject(data.placement_groups, unmarshalPlacementGroup),
    totalCount: data.total_count,
  } as ListPlacementGroupsResponse
}

export const unmarshalListPrivateNetworkInterfacesResponse = (data: unknown): ListPrivateNetworkInterfacesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPrivateNetworkInterfacesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextPageToken: data.next_page_token,
    privateNetworkInterfaces: unmarshalArrayOfObject(data.private_network_interfaces, unmarshalPrivateNetworkInterface),
    totalCount: data.total_count,
  } as ListPrivateNetworkInterfacesResponse
}

const unmarshalSecurityGroupSummary = (data: unknown): SecurityGroupSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecurityGroupSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    disableDefaultRules: data.disable_default_rules,
    id: data.id,
    inboundDefaultAction: data.inbound_default_action,
    name: data.name,
    outboundDefaultAction: data.outbound_default_action,
    projectDefault: data.project_default,
    projectId: data.project_id,
    stateless: data.stateless,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as SecurityGroupSummary
}

export const unmarshalListSecurityGroupsResponse = (data: unknown): ListSecurityGroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecurityGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextPageToken: data.next_page_token,
    securityGroups: unmarshalArrayOfObject(data.security_groups, unmarshalSecurityGroupSummary),
    totalCount: data.total_count,
  } as ListSecurityGroupsResponse
}

const unmarshalServerTypeGpuInfo = (data: unknown): ServerTypeGpuInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeGpuInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    manufacturer: data.manufacturer,
    memory: data.memory,
    name: data.name,
  } as ServerTypeGpuInfo
}

const unmarshalServerTypeLimits = (data: unknown): ServerTypeLimits => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerTypeLimits' failed as data isn't a dictionary.`,
    )
  }

  return {
    blockBandwidth: data.block_bandwidth,
    fileSystemCount: data.file_system_count,
    internetBandwidth: data.internet_bandwidth,
    ipCount: data.ip_count,
    lSsdSize: data.l_ssd_size,
    privateNetworkBandwidth: data.private_network_bandwidth,
    privateNetworkCount: data.private_network_count,
    scratchSize: data.scratch_size,
    scratchVolumesCount: data.scratch_volumes_count,
    volumeCount: data.volume_count,
  } as ServerTypeLimits
}

const unmarshalServerType = (data: unknown): ServerType => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerType' failed as data isn't a dictionary.`,
    )
  }

  return {
    architecture: data.architecture,
    availability: data.availability,
    endOfService: data.end_of_service,
    gpuCount: data.gpu_count,
    gpuInfo: data.gpu_info ? unmarshalServerTypeGpuInfo(data.gpu_info) : undefined,
    limits: data.limits ? unmarshalServerTypeLimits(data.limits) : undefined,
    memory: data.memory,
    name: data.name,
    vcpuCount: data.vcpu_count,
  } as ServerType
}

export const unmarshalListServerTypesResponse = (data: unknown): ListServerTypesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerTypesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextPageToken: data.next_page_token,
    serverTypes: unmarshalArrayOfObject(data.server_types, unmarshalServerType),
    totalCount: data.total_count,
  } as ListServerTypesResponse
}

const unmarshalServerSummary = (data: unknown): ServerSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    architecture: data.architecture,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    placementGroupId: data.placement_group_id,
    projectId: data.project_id,
    rescueMode: data.rescue_mode,
    serverType: data.server_type,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as ServerSummary
}

export const unmarshalListServersResponse = (data: unknown): ListServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextPageToken: data.next_page_token,
    servers: unmarshalArrayOfObject(data.servers, unmarshalServerSummary),
    totalCount: data.total_count,
  } as ListServersResponse
}

export const unmarshalListTemplateUserDataKeysResponse = (data: unknown): ListTemplateUserDataKeysResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTemplateUserDataKeysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    keys: data.keys,
    nextPageToken: data.next_page_token,
    totalCount: data.total_count,
  } as ListTemplateUserDataKeysResponse
}

const unmarshalTemplateSummary = (data: unknown): TemplateSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TemplateSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    filesystemIds: data.filesystem_ids,
    id: data.id,
    name: data.name,
    placementGroupId: data.placement_group_id,
    projectId: data.project_id,
    publicIpV4Count: data.public_ip_v4_count,
    publicIpV6Count: data.public_ip_v6_count,
    securityGroupId: data.security_group_id,
    serverTags: data.server_tags,
    serverType: data.server_type,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as TemplateSummary
}

export const unmarshalListTemplatesResponse = (data: unknown): ListTemplatesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTemplatesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextPageToken: data.next_page_token,
    templates: unmarshalArrayOfObject(data.templates, unmarshalTemplateSummary),
    totalCount: data.total_count,
  } as ListTemplatesResponse
}

export const unmarshalListUserDataKeysResponse = (data: unknown): ListUserDataKeysResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListUserDataKeysResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    keys: data.keys,
    nextPageToken: data.next_page_token,
    totalCount: data.total_count,
  } as ListUserDataKeysResponse
}

export const unmarshalResourceCounts = (data: unknown): ResourceCounts => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ResourceCounts' failed as data isn't a dictionary.`,
    )
  }

  return {
    gpuServers: data.gpu_servers,
    placementGroups: data.placement_groups,
    privateNetworkInterfaces: data.private_network_interfaces,
    securityGroups: data.security_groups,
    servers: data.servers,
    serversByType: data.servers_by_type,
    snapshots: data.snapshots,
    volumes: data.volumes,
    volumesLSsd: data.volumes_l_ssd,
    volumesLSsdTotalSize: data.volumes_l_ssd_total_size,
    volumesScratch: data.volumes_scratch,
  } as ResourceCounts
}

const unmarshalServerIP = (data: unknown): ServerIP => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerIP' failed as data isn't a dictionary.`,
    )
  }

  return {
    default: data.default,
    dynamic: data.dynamic,
    id: data.id,
    status: data.status,
  } as ServerIP
}

const unmarshalServerFilesystem = (data: unknown): ServerFilesystem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerFilesystem' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    status: data.status,
  } as ServerFilesystem
}

const unmarshalServerPrivateNetworkInterface = (data: unknown): ServerPrivateNetworkInterface => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerPrivateNetworkInterface' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    ipIds: data.ip_ids,
    macAddress: data.mac_address,
    privateNetworkId: data.private_network_id,
    securityGroupId: data.security_group_id,
    status: data.status,
  } as ServerPrivateNetworkInterface
}

const unmarshalServerPublicNetworkInterface = (data: unknown): ServerPublicNetworkInterface => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerPublicNetworkInterface' failed as data isn't a dictionary.`,
    )
  }

  return {
    dns: data.dns,
    ips: unmarshalArrayOfObject(data.ips, unmarshalServerIP),
    macAddress: data.mac_address,
    securityGroupId: data.security_group_id,
    status: data.status,
  } as ServerPublicNetworkInterface
}

const unmarshalServerRDPPassword = (data: unknown): ServerRDPPassword => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerRDPPassword' failed as data isn't a dictionary.`,
    )
  }

  return {
    encryptedPassword: data.encrypted_password,
    rdpSshKeyId: data.rdp_ssh_key_id,
  } as ServerRDPPassword
}

const unmarshalServerVolume = (data: unknown): ServerVolume => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerVolume' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    volumeType: data.volume_type,
  } as ServerVolume
}

export const unmarshalServer = (data: unknown): Server => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    architecture: data.architecture,
    bootVolumeId: data.boot_volume_id,
    createdAt: unmarshalDate(data.created_at),
    filesystems: unmarshalArrayOfObject(data.filesystems, unmarshalServerFilesystem),
    id: data.id,
    name: data.name,
    placementGroupId: data.placement_group_id,
    privateNetworkInterfaces: unmarshalArrayOfObject(data.private_network_interfaces, unmarshalServerPrivateNetworkInterface),
    projectId: data.project_id,
    publicNetworkInterface: data.public_network_interface ? unmarshalServerPublicNetworkInterface(data.public_network_interface) : undefined,
    rescueMode: data.rescue_mode,
    serverType: data.server_type,
    status: data.status,
    statusDetail: data.status_detail,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    volumes: unmarshalArrayOfObject(data.volumes, unmarshalServerVolume),
    windowsRdpPassword: data.windows_rdp_password ? unmarshalServerRDPPassword(data.windows_rdp_password) : undefined,
    zone: data.zone,
  } as Server
}

const unmarshalCreateTemplateRequestPrivateNetworkTemplate = (data: unknown): CreateTemplateRequestPrivateNetworkTemplate => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateTemplateRequestPrivateNetworkTemplate' failed as data isn't a dictionary.`,
    )
  }

  return {
    privateNetworkId: data.private_network_id,
  } as CreateTemplateRequestPrivateNetworkTemplate
}

const unmarshalCreateTemplateRequestVolumeTemplate = (data: unknown): CreateTemplateRequestVolumeTemplate => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateTemplateRequestVolumeTemplate' failed as data isn't a dictionary.`,
    )
  }

  return {
    baseSnapshotId: data.base_snapshot_id,
    imageLabel: data.image_label,
    name: data.name,
    perfIops: data.perf_iops,
    size: data.size,
    tags: data.tags,
    volumeType: data.volume_type,
  } as CreateTemplateRequestVolumeTemplate
}

export const unmarshalTemplate = (data: unknown): Template => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Template' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    filesystemIds: data.filesystem_ids,
    id: data.id,
    name: data.name,
    placementGroupId: data.placement_group_id,
    privateNetworks: unmarshalArrayOfObject(data.private_networks, unmarshalCreateTemplateRequestPrivateNetworkTemplate),
    projectId: data.project_id,
    publicIpV4Count: data.public_ip_v4_count,
    publicIpV6Count: data.public_ip_v6_count,
    securityGroupId: data.security_group_id,
    serverTags: data.server_tags,
    serverType: data.server_type,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    volumes: unmarshalArrayOfObject(data.volumes, unmarshalCreateTemplateRequestVolumeTemplate),
    windowsRdpSshKeyId: data.windows_rdp_ssh_key_id,
    zone: data.zone,
  } as Template
}

export const unmarshalUserData = (data: unknown): UserData => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UserData' failed as data isn't a dictionary.`,
    )
  }

  return {
    content: data.content,
    key: data.key,
  } as UserData
}

export const marshalSecurityGroupRulePortRange = (
  request: SecurityGroupRulePortRange,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  end: request.end,
  start: request.start,
})

const marshalSecurityGroupRuleConfig = (
  request: SecurityGroupRuleConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  destination_ip_range: request.destinationIpRange,
  destination_ports: ((request.destinationPorts !== undefined) ?  marshalSecurityGroupRulePortRange(request.destinationPorts, defaults): undefined),
  direction: request.direction,
  position: request.position,
  protocol: request.protocol,
  source_ip_range: request.sourceIpRange,
  source_ports: ((request.sourcePorts !== undefined) ?  marshalSecurityGroupRulePortRange(request.sourcePorts, defaults): undefined),
})

export const marshalAddSecurityGroupRulesRequest = (
  request: AddSecurityGroupRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  security_group_id: request.securityGroupId,
  security_group_rules: ((request.securityGroupRules !== undefined) ?  request.securityGroupRules.map(elt => marshalSecurityGroupRuleConfig(elt, defaults)): undefined),
})

export const marshalAttachServerFileSystemRequest = (
  request: AttachServerFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  filesystem_id: request.filesystemId,
})

export const marshalAttachServerIPRequest = (
  request: AttachServerIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default: request.default,
  ip_id: request.ipId,
  move_allowed: request.moveAllowed,
})

export const marshalAttachServerPrivateNetworkInterfaceRequest = (
  request: AttachServerPrivateNetworkInterfaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_interface_id: request.privateNetworkInterfaceId,
})

export const marshalAttachServerVolumeRequest = (
  request: AttachServerVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  boot_volume: request.bootVolume,
  volume_id: request.volumeId,
  volume_type: request.volumeType,
})

export const marshalCreatePlacementGroupRequest = (
  request: CreatePlacementGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  policy_type: request.policyType,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalCreatePrivateNetworkInterfaceRequest = (
  request: CreatePrivateNetworkInterfaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_ids: request.ipIds,
  private_network_id: request.privateNetworkId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  security_group_id: request.securityGroupId,
  server_id: request.serverId,
  tags: request.tags,
})

export const marshalCreateSecurityGroupRequest = (
  request: CreateSecurityGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  disable_default_rules: request.disableDefaultRules,
  inbound_default_action: request.inboundDefaultAction,
  name: request.name,
  outbound_default_action: request.outboundDefaultAction,
  project_default: request.projectDefault,
  project_id: request.projectId ?? defaults.defaultProjectId,
  stateless: request.stateless,
  tags: request.tags,
})

export const marshalCreateServerFromTemplateRequest = (
  request: CreateServerFromTemplateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

const marshalCreateServerRequestBookIP = (
  request: CreateServerRequestBookIP,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  tags: request.tags,
  type: request.type,
})

const marshalCreateServerRequestServerIP = (
  request: CreateServerRequestServerIP,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'ipam_ip_id',
      value: request.ipamIpId,
    },
    {param: 'new_ip',
      value: (request.newIp !== undefined) ? marshalCreateServerRequestBookIP(request.newIp, defaults)
      : undefined,
    },
  ]),
})

const marshalCreateServerRequestCreateVolume = (
  request: CreateServerRequestCreateVolume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  perf_iops: request.perfIops,
  size: request.size,
  tags: request.tags,  
  ...resolveOneOf([
    {param: 'base_snapshot_id',
      value: request.baseSnapshotId,
    },
    {param: 'image_label',
      value: request.imageLabel,
    },
  ]),
})

const marshalCreateServerRequestPublicNetworkInterface = (
  request: CreateServerRequestPublicNetworkInterface,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ips:  request.ips.map(elt => marshalCreateServerRequestServerIP(elt, defaults)),
  security_group_id: request.securityGroupId,
})

const marshalCreateServerRequestServerVolume = (
  request: CreateServerRequestServerVolume,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  volume_type: request.volumeType,  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'volume_id',
      value: request.volumeId,
    },
    {param: 'new_volume',
      value: (request.newVolume !== undefined) ? marshalCreateServerRequestCreateVolume(request.newVolume, defaults)
      : undefined,
    },
  ]),
})

export const marshalCreateServerRequest = (
  request: CreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  placement_group_id: request.placementGroupId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  public_network_interface: ((request.publicNetworkInterface !== undefined) ?  marshalCreateServerRequestPublicNetworkInterface(request.publicNetworkInterface, defaults): undefined),
  server_type: request.serverType,
  tags: request.tags,
  volumes: ((request.volumes !== undefined) ?  request.volumes.map(elt => marshalCreateServerRequestServerVolume(elt, defaults)): undefined),
  windows_rdp_ssh_key_id: request.windowsRdpSshKeyId,
})

const marshalCreateTemplateRequestPrivateNetworkTemplate = (
  request: CreateTemplateRequestPrivateNetworkTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

const marshalCreateTemplateRequestVolumeTemplate = (
  request: CreateTemplateRequestVolumeTemplate,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  perf_iops: request.perfIops,
  size: request.size,
  tags: request.tags,
  volume_type: request.volumeType,  
  ...resolveOneOf([
    {param: 'base_snapshot_id',
      value: request.baseSnapshotId,
    },
    {param: 'image_label',
      value: request.imageLabel,
    },
  ]),
})

export const marshalCreateTemplateRequest = (
  request: CreateTemplateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  filesystem_ids: request.filesystemIds,
  name: request.name,
  placement_group_id: request.placementGroupId,
  private_networks: ((request.privateNetworks !== undefined) ?  request.privateNetworks.map(elt => marshalCreateTemplateRequestPrivateNetworkTemplate(elt, defaults)): undefined),
  project_id: request.projectId ?? defaults.defaultProjectId,
  public_ip_v4_count: request.publicIpV4Count,
  public_ip_v6_count: request.publicIpV6Count,
  security_group_id: request.securityGroupId,
  server_tags: request.serverTags,
  server_type: request.serverType,
  tags: request.tags,
  volumes: ((request.volumes !== undefined) ?  request.volumes.map(elt => marshalCreateTemplateRequestVolumeTemplate(elt, defaults)): undefined),
  windows_rdp_ssh_key_id: request.windowsRdpSshKeyId,
})

export const marshalDeleteSecurityGroupRulesRequest = (
  request: DeleteSecurityGroupRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  security_group_rule_ids: request.securityGroupRuleIds,
})

export const marshalDetachServerFileSystemRequest = (
  request: DetachServerFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  filesystem_id: request.filesystemId,
})

export const marshalDetachServerIPRequest = (
  request: DetachServerIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_id: request.ipId,
})

export const marshalDetachServerPrivateNetworkInterfaceRequest = (
  request: DetachServerPrivateNetworkInterfaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_interface_id: request.privateNetworkInterfaceId,
})

export const marshalDetachServerVolumeRequest = (
  request: DetachServerVolumeRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  volume_id: request.volumeId,
})

export const marshalSetSecurityGroupRulesRequest = (
  request: SetSecurityGroupRulesRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  security_group_id: request.securityGroupId,
  security_group_rules: ((request.securityGroupRules !== undefined) ?  request.securityGroupRules.map(elt => marshalSecurityGroupRuleConfig(elt, defaults)): undefined),
})

export const marshalSetServerCloudInitRequest = (
  request: SetServerCloudInitRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
})

export const marshalSetServerDefaultIPRequest = (
  request: SetServerDefaultIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_id: request.ipId,
})

export const marshalSetTemplateCloudInitRequest = (
  request: SetTemplateCloudInitRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
})

export const marshalSetTemplateUserDataRequest = (
  request: SetTemplateUserDataRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
})

export const marshalSetUserDataRequest = (
  request: SetUserDataRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
})

export const marshalStopAndDeleteServerRequest = (
  request: StopAndDeleteServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf<boolean | string[]>([
    {param: 'delete_all_ips',
      value: request.deleteAllIps,
    },
    {param: 'delete_ip_ids',
      value: request.deleteIpIds,
    },
  ]),  
  ...resolveOneOf<boolean | string[]>([
    {param: 'delete_all_volumes',
      value: request.deleteAllVolumes,
    },
    {param: 'delete_volume_ids',
      value: request.deleteVolumeIds,
    },
  ]),  
  ...resolveOneOf<boolean | string[]>([
    {param: 'keep_all_private_nics',
      value: request.keepAllPrivateNics,
    },
    {param: 'delete_private_nic_ids',
      value: request.deletePrivateNicIds,
    },
  ]),
})

export const marshalUpdatePlacementGroupRequest = (
  request: UpdatePlacementGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  policy_type: request.policyType,
  tags: request.tags,
})

export const marshalUpdatePrivateNetworkInterfaceRequest = (
  request: UpdatePrivateNetworkInterfaceRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  security_group_id: request.securityGroupId,
  tags: request.tags,
})

export const marshalUpdateSecurityGroupRequest = (
  request: UpdateSecurityGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  disable_default_rules: request.disableDefaultRules,
  inbound_default_action: request.inboundDefaultAction,
  name: request.name,
  outbound_default_action: request.outboundDefaultAction,
  project_default: request.projectDefault,
  stateless: request.stateless,
  tags: request.tags,
})

export const marshalUpdateSecurityGroupRuleRequest = (
  request: UpdateSecurityGroupRuleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
  destination_ip_range: request.destinationIpRange,
  destination_ports: ((request.destinationPorts !== undefined) ?  marshalSecurityGroupRulePortRange(request.destinationPorts, defaults): undefined),
  direction: request.direction,
  position: request.position,
  protocol: request.protocol,
  source_ip_range: request.sourceIpRange,
  source_ports: ((request.sourcePorts !== undefined) ?  marshalSecurityGroupRulePortRange(request.sourcePorts, defaults): undefined),
})

const marshalUpdateServerRequestPublicNetworkInterface = (
  request: UpdateServerRequestPublicNetworkInterface,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  security_group_id: request.securityGroupId,
})

export const marshalUpdateServerRequest = (
  request: UpdateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  boot_volume_id: request.bootVolumeId,
  name: request.name,
  placement_group_id: request.placementGroupId,
  protected: request.protected,
  public_network_interface: ((request.publicNetworkInterface !== undefined) ?  marshalUpdateServerRequestPublicNetworkInterface(request.publicNetworkInterface, defaults): undefined),
  rescue_mode: request.rescueMode,
  server_type: request.serverType,
  tags: request.tags,
  windows_rdp_ssh_key_id: request.windowsRdpSshKeyId,
})

const marshalUpdateTemplateRequestUpdatePrivateNetworks = (
  request: UpdateTemplateRequestUpdatePrivateNetworks,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_networks:  request.privateNetworks.map(elt => marshalCreateTemplateRequestPrivateNetworkTemplate(elt, defaults)),
})

const marshalUpdateTemplateRequestUpdateVolumes = (
  request: UpdateTemplateRequestUpdateVolumes,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  volumes:  request.volumes.map(elt => marshalCreateTemplateRequestVolumeTemplate(elt, defaults)),
})

export const marshalUpdateTemplateRequest = (
  request: UpdateTemplateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  filesystem_ids: request.filesystemIds,
  name: request.name,
  placement_group_id: request.placementGroupId,
  public_ip_v4_count: request.publicIpV4Count,
  public_ip_v6_count: request.publicIpV6Count,
  security_group_id: request.securityGroupId,
  server_tags: request.serverTags,
  server_type: request.serverType,
  tags: request.tags,
  update_private_networks: ((request.updatePrivateNetworks !== undefined) ?  marshalUpdateTemplateRequestUpdatePrivateNetworks(request.updatePrivateNetworks, defaults): undefined),
  update_volumes: ((request.updateVolumes !== undefined) ?  marshalUpdateTemplateRequestUpdateVolumes(request.updateVolumes, defaults): undefined),
  windows_rdp_ssh_key_id: request.windowsRdpSshKeyId,
})
