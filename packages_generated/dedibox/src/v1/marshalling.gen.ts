
import type { DefaultValues, } from '@scaleway/sdk-client'
import { isJSONObject, unmarshalArrayOfObject, unmarshalDate, unmarshalMoney, } from '@scaleway/sdk-client'
import type {
  AttachFailoverIPsRequest,
  AttachFailoverIPToMacAddressRequest,
  Backup,
  BMCAccess,
  CanOrderResponse,
  CPU,
  CreateFailoverIPsRequest,
  CreateFailoverIPsResponse,
  CreateServerRequest,
  DetachFailoverIPsRequest,
  Disk,
  FailoverBlock,
  FailoverIP,
  GetIPv6BlockQuotasResponse,
  GetIPv6BlockQuotasResponseQuota,
  GetRemainingQuotaResponse,
  GetRpnStatusResponse,
  InstallPartition,
  InstallServerRequest,
  Invoice,
  InvoiceSummary,
  IP,
  IPv6Block,
  IPv6BlockApiCreateIPv6BlockRequest,
  IPv6BlockApiCreateIPv6BlockSubnetRequest,
  IPv6BlockApiUpdateIPv6BlockRequest,
  ListFailoverIPsResponse,
  ListInvoicesResponse,
  ListIPv6BlockSubnetsAvailableResponse,
  ListIPv6BlockSubnetsAvailableResponseSubnet,
  ListIPv6BlocksResponse,
  ListIpsResponse,
  ListOffersResponse,
  ListOSResponse,
  ListRefundsResponse,
  ListRpnCapableSanServersResponse,
  ListRpnCapableServersResponse,
  ListRpnGroupMembersResponse,
  ListRpnGroupsResponse,
  ListRpnInvitesResponse,
  ListRpnSansResponse,
  ListRpnServerCapabilitiesResponse,
  ListRpnV2CapableResourcesResponse,
  ListRpnV2GroupLogsResponse,
  ListRpnV2GroupsResponse,
  ListRpnV2MembersResponse,
  ListServerDisksResponse,
  ListServerEventsResponse,
  ListServersResponse,
  ListServicesResponse,
  ListSubscribableServerOptionsResponse,
  Log,
  Memory,
  NetworkInterface,
  Offer,
  OfferAntiDosInfo,
  OfferBackupInfo,
  OfferBandwidthInfo,
  OfferFailoverBlockInfo,
  OfferFailoverIpInfo,
  OfferLicenseInfo,
  OfferRPNInfo,
  OfferSANInfo,
  OfferServerInfo,
  OfferServiceLevelInfo,
  OfferStorageInfo,
  OS,
  Partition,
  PersistentMemory,
  Raid,
  RaidArray,
  RaidController,
  Refund,
  RefundSummary,
  Rescue,
  RpnGroup,
  RpnGroupMember,
  RpnSan,
  RpnSanApiAddIpRequest,
  RpnSanApiCreateRpnSanRequest,
  RpnSanApiRemoveIpRequest,
  RpnSanIp,
  RpnSanIpRpnV2Group,
  RpnSanIpServer,
  RpnSanServer,
  RpnSanSummary,
  RpnServerCapability,
  RpnV1ApiAddRpnGroupMembersRequest,
  RpnV1ApiCreateRpnGroupRequest,
  RpnV1ApiDeleteRpnGroupMembersRequest,
  RpnV1ApiLeaveRpnGroupRequest,
  RpnV1ApiRpnGroupInviteRequest,
  RpnV1ApiUpdateRpnGroupNameRequest,
  RpnV2ApiAddRpnV2MembersRequest,
  RpnV2ApiCreateRpnV2GroupRequest,
  RpnV2ApiDeleteRpnV2MembersRequest,
  RpnV2ApiEnableRpnV2GroupCompatibilityRequest,
  RpnV2ApiUpdateRpnV2GroupNameRequest,
  RpnV2ApiUpdateRpnV2VlanForMembersRequest,
  RpnV2Group,
  RpnV2GroupSubnet,
  RpnV2Member,
  Server,
  ServerDefaultPartitioning,
  ServerDisk,
  ServerEvent,
  ServerInstall,
  ServerLocation,
  ServerOption,
  ServerSummary,
  Service,
  ServiceLevel,
  StartBMCAccessRequest,
  StartRescueRequest,
  SubscribeServerOptionRequest,
  SubscribeStorageOptionsRequest,
  SubscribeStorageOptionsResponse,
  UpdatableRaidArray,
  UpdateRaidRequest,
  UpdateReverseRequest,
  UpdateServerBackupRequest,
  UpdateServerRequest,
  UpdateServerTagsRequest,
} from './types.gen.js'

export const unmarshalIP = (data: unknown): IP => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'IP' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    cidr: data.cidr,
    gateway: data.gateway,
    ipId: data.ip_id,
    netmask: data.netmask,
    reverse: data.reverse,
    semantic: data.semantic,
    status: data.status,
    version: data.version,
  } as IP
}

const unmarshalCPU = (data: unknown): CPU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    coreCount: data.core_count,
    frequency: data.frequency,
    name: data.name,
    threadCount: data.thread_count,
  } as CPU
}

const unmarshalDisk = (data: unknown): Disk => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Disk' failed as data isn't a dictionary.`,
    )
  }

  return {
    capacity: data.capacity,
    type: data.type,
  } as Disk
}

const unmarshalMemory = (data: unknown): Memory => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Memory' failed as data isn't a dictionary.`,
    )
  }

  return {
    capacity: data.capacity,
    frequency: data.frequency,
    isEcc: data.is_ecc,
    type: data.type,
  } as Memory
}

const unmarshalPersistentMemory = (data: unknown): PersistentMemory => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PersistentMemory' failed as data isn't a dictionary.`,
    )
  }

  return {
    capacity: data.capacity,
    frequency: data.frequency,
    model: data.model,
  } as PersistentMemory
}

const unmarshalRaidController = (data: unknown): RaidController => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RaidController' failed as data isn't a dictionary.`,
    )
  }

  return {
    model: data.model,
    raidLevel: data.raid_level,
  } as RaidController
}

const unmarshalOfferAntiDosInfo = (data: unknown): OfferAntiDosInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferAntiDosInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    type: data.type,
  } as OfferAntiDosInfo
}

const unmarshalOfferBackupInfo = (data: unknown): OfferBackupInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferBackupInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    size: data.size,
  } as OfferBackupInfo
}

const unmarshalOfferBandwidthInfo = (data: unknown): OfferBandwidthInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferBandwidthInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    speed: data.speed,
  } as OfferBandwidthInfo
}

const unmarshalOfferFailoverBlockInfo = (data: unknown): OfferFailoverBlockInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferFailoverBlockInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    onetimeFees: data.onetime_fees ? unmarshalOffer(data.onetime_fees) : undefined,
  } as OfferFailoverBlockInfo
}

const unmarshalOfferFailoverIpInfo = (data: unknown): OfferFailoverIpInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferFailoverIpInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    onetimeFees: data.onetime_fees ? unmarshalOffer(data.onetime_fees) : undefined,
  } as OfferFailoverIpInfo
}

const unmarshalOfferLicenseInfo = (data: unknown): OfferLicenseInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferLicenseInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    boundToIp: data.bound_to_ip,
  } as OfferLicenseInfo
}

const unmarshalOfferRPNInfo = (data: unknown): OfferRPNInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferRPNInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    speed: data.speed,
  } as OfferRPNInfo
}

const unmarshalOfferSANInfo = (data: unknown): OfferSANInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferSANInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    deviceType: data.device_type,
    ha: data.ha,
    size: data.size,
  } as OfferSANInfo
}

const unmarshalOfferServerInfo = (data: unknown): OfferServerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferServerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableOptions: unmarshalArrayOfObject(data.available_options, unmarshalOffer),
    bandwidth: data.bandwidth,
    commercialRange: data.commercial_range,
    connectivity: data.connectivity,
    cpus: unmarshalArrayOfObject(data.cpus, unmarshalCPU),
    disks: unmarshalArrayOfObject(data.disks, unmarshalDisk),
    memories: unmarshalArrayOfObject(data.memories, unmarshalMemory),
    onetimeFees: data.onetime_fees ? unmarshalOffer(data.onetime_fees) : undefined,
    persistentMemories: unmarshalArrayOfObject(data.persistent_memories, unmarshalPersistentMemory),
    raidControllers: unmarshalArrayOfObject(data.raid_controllers, unmarshalRaidController),
    rpnVersion: data.rpn_version,
    stock: data.stock,
    stockByDatacenter: data.stock_by_datacenter,
  } as OfferServerInfo
}

const unmarshalOfferServiceLevelInfo = (data: unknown): OfferServiceLevelInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferServiceLevelInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    antidos: data.antidos,
    availableOptions: unmarshalArrayOfObject(data.available_options, unmarshalOffer),
    customization: data.customization,
    extraFailoverQuota: data.extra_failover_quota,
    git: data.git,
    highRpnBandwidth: data.high_rpn_bandwidth,
    prioritySupport: data.priority_support,
    salesSupport: data.sales_support,
    sla: data.sla,
    supportPhone: data.support_phone,
    supportTicket: data.support_ticket,
  } as OfferServiceLevelInfo
}

const unmarshalOfferStorageInfo = (data: unknown): OfferStorageInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferStorageInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    maxQuota: data.max_quota,
    size: data.size,
  } as OfferStorageInfo
}

export const unmarshalOffer = (data: unknown): Offer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Offer' failed as data isn't a dictionary.`,
    )
  }

  return {
    antidosInfo: data.antidos_info ? unmarshalOfferAntiDosInfo(data.antidos_info) : undefined,
    backupInfo: data.backup_info ? unmarshalOfferBackupInfo(data.backup_info) : undefined,
    bandwidthInfo: data.bandwidth_info ? unmarshalOfferBandwidthInfo(data.bandwidth_info) : undefined,
    catalog: data.catalog,
    failoverBlockInfo: data.failover_block_info ? unmarshalOfferFailoverBlockInfo(data.failover_block_info) : undefined,
    failoverIpInfo: data.failover_ip_info ? unmarshalOfferFailoverIpInfo(data.failover_ip_info) : undefined,
    id: data.id,
    licenseInfo: data.license_info ? unmarshalOfferLicenseInfo(data.license_info) : undefined,
    name: data.name,
    paymentFrequency: data.payment_frequency,
    pricing: data.pricing ? unmarshalMoney(data.pricing) : undefined,
    rpnInfo: data.rpn_info ? unmarshalOfferRPNInfo(data.rpn_info) : undefined,
    sanInfo: data.san_info ? unmarshalOfferSANInfo(data.san_info) : undefined,
    serverInfo: data.server_info ? unmarshalOfferServerInfo(data.server_info) : undefined,
    serviceLevelInfo: data.service_level_info ? unmarshalOfferServiceLevelInfo(data.service_level_info) : undefined,
    storageInfo: data.storage_info ? unmarshalOfferStorageInfo(data.storage_info) : undefined,
    usbStorageInfo: data.usb_storage_info ? unmarshalOfferStorageInfo(data.usb_storage_info) : undefined,
  } as Offer
}

export const unmarshalOS = (data: unknown): OS => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OS' failed as data isn't a dictionary.`,
    )
  }

  return {
    allowCustomPartitioning: data.allow_custom_partitioning,
    allowSshKeys: data.allow_ssh_keys,
    allowedFilesystems: data.allowed_filesystems,
    arch: data.arch,
    displayName: data.display_name,
    hostnameMaxLength: data.hostname_max_length,
    hostnameRegex: data.hostname_regex,
    id: data.id,
    licenseOffers: unmarshalArrayOfObject(data.license_offers, unmarshalOffer),
    maxPartitions: data.max_partitions,
    name: data.name,
    panelPasswordRegex: data.panel_password_regex,
    passwordRegex: data.password_regex,
    releasedAt: unmarshalDate(data.released_at),
    requiresAdminPassword: data.requires_admin_password,
    requiresLicense: data.requires_license,
    requiresPanelPassword: data.requires_panel_password,
    requiresUser: data.requires_user,
    requiresValidHostname: data.requires_valid_hostname,
    type: data.type,
    version: data.version,
  } as OS
}

export const unmarshalRpnSan = (data: unknown): RpnSan => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnSan' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    datacenterName: data.datacenter_name,
    deliveredAt: unmarshalDate(data.delivered_at),
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    iqn: data.iqn,
    iqnSuffix: data.iqn_suffix,
    offer: data.offer ? unmarshalOffer(data.offer) : undefined,
    offerId: data.offer_id,
    offerName: data.offer_name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    rpnv1Compatible: data.rpnv1_compatible,
    rpnv1Implicit: data.rpnv1_implicit,
    serverHostname: data.server_hostname,
    status: data.status,
    storageSize: data.storage_size,
    terminatedAt: unmarshalDate(data.terminated_at),
  } as RpnSan
}

export const unmarshalRpnGroup = (data: unknown): RpnGroup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnGroup' failed as data isn't a dictionary.`,
    )
  }

  return {
    active: data.active,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    membersCount: data.members_count,
    name: data.name,
    organizationId: data.organization_id,
    owner: data.owner,
    projectId: data.project_id,
    type: data.type,
  } as RpnGroup
}

const unmarshalNetworkInterface = (data: unknown): NetworkInterface => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NetworkInterface' failed as data isn't a dictionary.`,
    )
  }

  return {
    cardId: data.card_id,
    deviceId: data.device_id,
    ips: unmarshalArrayOfObject(data.ips, unmarshalIP),
    mac: data.mac,
    type: data.type,
  } as NetworkInterface
}

const unmarshalServerLocation = (data: unknown): ServerLocation => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerLocation' failed as data isn't a dictionary.`,
    )
  }

  return {
    datacenterName: data.datacenter_name,
    rack: data.rack,
    room: data.room,
  } as ServerLocation
}

const unmarshalServerOption = (data: unknown): ServerOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    expiredAt: unmarshalDate(data.expired_at),
    offer: data.offer ? unmarshalOffer(data.offer) : undefined,
    options: unmarshalArrayOfObject(data.options, unmarshalServerOption),
    updatedAt: unmarshalDate(data.updated_at),
  } as ServerOption
}

const unmarshalServiceLevel = (data: unknown): ServiceLevel => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServiceLevel' failed as data isn't a dictionary.`,
    )
  }

  return {
    level: data.level,
    offerId: data.offer_id,
  } as ServiceLevel
}

export const unmarshalServer = (data: unknown): Server => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    abuseContact: data.abuse_contact,
    createdAt: unmarshalDate(data.created_at),
    expiredAt: unmarshalDate(data.expired_at),
    hasBmc: data.has_bmc,
    hostname: data.hostname,
    id: data.id,
    interfaces: unmarshalArrayOfObject(data.interfaces, unmarshalNetworkInterface),
    ipv6Slaac: data.ipv6_slaac,
    isHds: data.is_hds,
    isOutsourced: data.is_outsourced,
    isRpnv2Member: data.is_rpnv2_member,
    level: data.level ? unmarshalServiceLevel(data.level) : undefined,
    location: data.location ? unmarshalServerLocation(data.location) : undefined,
    offer: data.offer ? unmarshalOffer(data.offer) : undefined,
    options: unmarshalArrayOfObject(data.options, unmarshalServerOption),
    organizationId: data.organization_id,
    os: data.os ? unmarshalOS(data.os) : undefined,
    projectId: data.project_id,
    qinq: data.qinq,
    rebootedAt: unmarshalDate(data.rebooted_at),
    rescueOs: data.rescue_os ? unmarshalOS(data.rescue_os) : undefined,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as Server
}

const unmarshalRpnV2GroupSubnet = (data: unknown): RpnV2GroupSubnet => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnV2GroupSubnet' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    cidr: data.cidr,
  } as RpnV2GroupSubnet
}

export const unmarshalRpnV2Group = (data: unknown): RpnV2Group => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnV2Group' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatibleRpnv1: data.compatible_rpnv1,
    gateway: data.gateway,
    id: data.id,
    membersCount: data.members_count,
    name: data.name,
    organizationId: data.organization_id,
    owner: data.owner,
    projectId: data.project_id,
    rpnv1Group: data.rpnv1_group ? unmarshalRpnGroup(data.rpnv1_group) : undefined,
    status: data.status,
    subnet: data.subnet ? unmarshalRpnV2GroupSubnet(data.subnet) : undefined,
    type: data.type,
  } as RpnV2Group
}

export const unmarshalService = (data: unknown): Service => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Service' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    deliveredAt: unmarshalDate(data.delivered_at),
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    offer: data.offer ? unmarshalOffer(data.offer) : undefined,
    provisioningStatus: data.provisioning_status,
    resourceId: data.resource_id,
    terminatedAt: unmarshalDate(data.terminated_at),
    type: data.type,
  } as Service
}

const unmarshalFailoverBlock = (data: unknown): FailoverBlock => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FailoverBlock' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    cidr: data.cidr,
    gatewayIp: data.gateway_ip,
    id: data.id,
    ipVersion: data.ip_version,
    nameservers: data.nameservers,
    netmask: data.netmask,
  } as FailoverBlock
}

export const unmarshalFailoverIP = (data: unknown): FailoverIP => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FailoverIP' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    block: data.block ? unmarshalFailoverBlock(data.block) : undefined,
    cidr: data.cidr,
    gatewayIp: data.gateway_ip,
    id: data.id,
    ipVersion: data.ip_version,
    mac: data.mac,
    netmask: data.netmask,
    reverse: data.reverse,
    serverId: data.server_id,
    serverZone: data.server_zone,
    status: data.status,
    type: data.type,
  } as FailoverIP
}

export const unmarshalIPv6Block = (data: unknown): IPv6Block => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'IPv6Block' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    cidr: data.cidr,
    delegationStatus: data.delegation_status,
    duid: data.duid,
    id: data.id,
    nameservers: data.nameservers,
    subnets: unmarshalArrayOfObject(data.subnets, unmarshalIPv6Block),
  } as IPv6Block
}

export const unmarshalBMCAccess = (data: unknown): BMCAccess => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BMCAccess' failed as data isn't a dictionary.`,
    )
  }

  return {
    expiresAt: unmarshalDate(data.expires_at),
    login: data.login,
    password: data.password,
    status: data.status,
    url: data.url,
  } as BMCAccess
}

export const unmarshalBackup = (data: unknown): Backup => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Backup' failed as data isn't a dictionary.`,
    )
  }

  return {
    aclEnabled: data.acl_enabled,
    autologin: data.autologin,
    id: data.id,
    login: data.login,
    quotaFiles: data.quota_files,
    quotaFilesUsed: data.quota_files_used,
    quotaSpace: data.quota_space,
    quotaSpaceUsed: data.quota_space_used,
    server: data.server,
    status: data.status,
  } as Backup
}

export const unmarshalCanOrderResponse = (data: unknown): CanOrderResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CanOrderResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    billingOk: data.billing_ok,
    canOrder: data.can_order,
    emailConfirmed: data.email_confirmed,
    message: data.message,
    paymentMode: data.payment_mode,
    phoneConfirmed: data.phone_confirmed,
    quotaOk: data.quota_ok,
    userConfirmed: data.user_confirmed,
  } as CanOrderResponse
}

export const unmarshalCreateFailoverIPsResponse = (data: unknown): CreateFailoverIPsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateFailoverIPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    services: unmarshalArrayOfObject(data.services, unmarshalService),
    totalCount: data.total_count,
  } as CreateFailoverIPsResponse
}

const unmarshalGetIPv6BlockQuotasResponseQuota = (data: unknown): GetIPv6BlockQuotasResponseQuota => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetIPv6BlockQuotasResponseQuota' failed as data isn't a dictionary.`,
    )
  }

  return {
    cidr: data.cidr,
    quota: data.quota,
  } as GetIPv6BlockQuotasResponseQuota
}

export const unmarshalGetIPv6BlockQuotasResponse = (data: unknown): GetIPv6BlockQuotasResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetIPv6BlockQuotasResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    quotas: unmarshalArrayOfObject(data.quotas, unmarshalGetIPv6BlockQuotasResponseQuota),
    totalCount: data.total_count,
  } as GetIPv6BlockQuotasResponse
}

export const unmarshalGetRemainingQuotaResponse = (data: unknown): GetRemainingQuotaResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetRemainingQuotaResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    failoverBlockQuota: data.failover_block_quota,
    failoverBlockRemainingQuota: data.failover_block_remaining_quota,
    failoverIpQuota: data.failover_ip_quota,
    failoverIpRemainingQuota: data.failover_ip_remaining_quota,
  } as GetRemainingQuotaResponse
}

export const unmarshalGetRpnStatusResponse = (data: unknown): GetRpnStatusResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetRpnStatusResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    operationsLeft: data.operations_left,
    status: data.status,
  } as GetRpnStatusResponse
}

export const unmarshalInvoice = (data: unknown): Invoice => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Invoice' failed as data isn't a dictionary.`,
    )
  }

  return {
    content: data.content,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    paidAt: unmarshalDate(data.paid_at),
    paymentMethod: data.payment_method,
    status: data.status,
    totalWithTaxes: data.total_with_taxes ? unmarshalMoney(data.total_with_taxes) : undefined,
    totalWithoutTaxes: data.total_without_taxes ? unmarshalMoney(data.total_without_taxes) : undefined,
    transactionId: data.transaction_id,
  } as Invoice
}

export const unmarshalListFailoverIPsResponse = (data: unknown): ListFailoverIPsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFailoverIPsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    failoverIps: unmarshalArrayOfObject(data.failover_ips, unmarshalFailoverIP),
    totalCount: data.total_count,
  } as ListFailoverIPsResponse
}

const unmarshalListIPv6BlockSubnetsAvailableResponseSubnet = (data: unknown): ListIPv6BlockSubnetsAvailableResponseSubnet => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListIPv6BlockSubnetsAvailableResponseSubnet' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    cidr: data.cidr,
  } as ListIPv6BlockSubnetsAvailableResponseSubnet
}

export const unmarshalListIPv6BlockSubnetsAvailableResponse = (data: unknown): ListIPv6BlockSubnetsAvailableResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListIPv6BlockSubnetsAvailableResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    subnetAvailables: unmarshalArrayOfObject(data.subnet_availables, unmarshalListIPv6BlockSubnetsAvailableResponseSubnet),
    totalCount: data.total_count,
  } as ListIPv6BlockSubnetsAvailableResponse
}

export const unmarshalListIPv6BlocksResponse = (data: unknown): ListIPv6BlocksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListIPv6BlocksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ipv6Blocks: unmarshalArrayOfObject(data.ipv6_blocks, unmarshalIPv6Block),
    totalCount: data.total_count,
  } as ListIPv6BlocksResponse
}

const unmarshalInvoiceSummary = (data: unknown): InvoiceSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InvoiceSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    paidAt: unmarshalDate(data.paid_at),
    paymentMethod: data.payment_method,
    status: data.status,
    totalWithTaxes: data.total_with_taxes ? unmarshalMoney(data.total_with_taxes) : undefined,
    totalWithoutTaxes: data.total_without_taxes ? unmarshalMoney(data.total_without_taxes) : undefined,
    transactionId: data.transaction_id,
  } as InvoiceSummary
}

export const unmarshalListInvoicesResponse = (data: unknown): ListInvoicesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInvoicesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    invoices: unmarshalArrayOfObject(data.invoices, unmarshalInvoiceSummary),
    totalCount: data.total_count,
  } as ListInvoicesResponse
}

const unmarshalRpnSanIpRpnV2Group = (data: unknown): RpnSanIpRpnV2Group => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnSanIpRpnV2Group' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as RpnSanIpRpnV2Group
}

const unmarshalRpnSanIpServer = (data: unknown): RpnSanIpServer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnSanIpServer' failed as data isn't a dictionary.`,
    )
  }

  return {
    datacenterName: data.datacenter_name,
    hostname: data.hostname,
    id: data.id,
  } as RpnSanIpServer
}

const unmarshalRpnSanIp = (data: unknown): RpnSanIp => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnSanIp' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: data.ip ? unmarshalIP(data.ip) : undefined,
    rpnv2Group: data.rpnv2_group ? unmarshalRpnSanIpRpnV2Group(data.rpnv2_group) : undefined,
    server: data.server ? unmarshalRpnSanIpServer(data.server) : undefined,
    type: data.type,
  } as RpnSanIp
}

export const unmarshalListIpsResponse = (data: unknown): ListIpsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListIpsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ips: unmarshalArrayOfObject(data.ips, unmarshalRpnSanIp),
    totalCount: data.total_count,
  } as ListIpsResponse
}

export const unmarshalListOSResponse = (data: unknown): ListOSResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListOSResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    os: unmarshalArrayOfObject(data.os, unmarshalOS),
    totalCount: data.total_count,
  } as ListOSResponse
}

export const unmarshalListOffersResponse = (data: unknown): ListOffersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListOffersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    offers: unmarshalArrayOfObject(data.offers, unmarshalOffer),
    totalCount: data.total_count,
  } as ListOffersResponse
}

const unmarshalRefundSummary = (data: unknown): RefundSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RefundSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    method: data.method,
    refundedAt: unmarshalDate(data.refunded_at),
    status: data.status,
    totalWithTaxes: data.total_with_taxes ? unmarshalMoney(data.total_with_taxes) : undefined,
    totalWithoutTaxes: data.total_without_taxes ? unmarshalMoney(data.total_without_taxes) : undefined,
  } as RefundSummary
}

export const unmarshalListRefundsResponse = (data: unknown): ListRefundsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRefundsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    refunds: unmarshalArrayOfObject(data.refunds, unmarshalRefundSummary),
    totalCount: data.total_count,
  } as ListRefundsResponse
}

const unmarshalRpnSanServer = (data: unknown): RpnSanServer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnSanServer' failed as data isn't a dictionary.`,
    )
  }

  return {
    datacenterName: data.datacenter_name,
    hostname: data.hostname,
    id: data.id,
    sans: unmarshalArrayOfObject(data.sans, unmarshalRpnSan),
    zone: data.zone,
  } as RpnSanServer
}

export const unmarshalListRpnCapableSanServersResponse = (data: unknown): ListRpnCapableSanServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnCapableSanServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    sanServers: unmarshalArrayOfObject(data.san_servers, unmarshalRpnSanServer),
    totalCount: data.total_count,
  } as ListRpnCapableSanServersResponse
}

export const unmarshalListRpnCapableServersResponse = (data: unknown): ListRpnCapableServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnCapableServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalServer),
    totalCount: data.total_count,
  } as ListRpnCapableServersResponse
}

const unmarshalRpnGroupMember = (data: unknown): RpnGroupMember => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnGroupMember' failed as data isn't a dictionary.`,
    )
  }

  return {
    groupId: data.group_id,
    groupName: data.group_name,
    groupOwner: data.group_owner,
    id: data.id,
    owner: data.owner,
    sanServer: data.san_server ? unmarshalRpnSanServer(data.san_server) : undefined,
    server: data.server ? unmarshalServer(data.server) : undefined,
    speed: data.speed,
    status: data.status,
  } as RpnGroupMember
}

export const unmarshalListRpnGroupMembersResponse = (data: unknown): ListRpnGroupMembersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnGroupMembersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    members: unmarshalArrayOfObject(data.members, unmarshalRpnGroupMember),
    totalCount: data.total_count,
  } as ListRpnGroupMembersResponse
}

export const unmarshalListRpnGroupsResponse = (data: unknown): ListRpnGroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnGroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rpnGroups: unmarshalArrayOfObject(data.rpn_groups, unmarshalRpnGroup),
    totalCount: data.total_count,
  } as ListRpnGroupsResponse
}

export const unmarshalListRpnInvitesResponse = (data: unknown): ListRpnInvitesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnInvitesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    members: unmarshalArrayOfObject(data.members, unmarshalRpnGroupMember),
    totalCount: data.total_count,
  } as ListRpnInvitesResponse
}

const unmarshalRpnSanSummary = (data: unknown): RpnSanSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnSanSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    datacenterName: data.datacenter_name,
    deliveredAt: unmarshalDate(data.delivered_at),
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    iqnSuffix: data.iqn_suffix,
    offerId: data.offer_id,
    offerName: data.offer_name,
    organizationId: data.organization_id,
    projectId: data.project_id,
    rpnv1Compatible: data.rpnv1_compatible,
    rpnv1Implicit: data.rpnv1_implicit,
    serverHostname: data.server_hostname,
    status: data.status,
    storageSize: data.storage_size,
    terminatedAt: unmarshalDate(data.terminated_at),
  } as RpnSanSummary
}

export const unmarshalListRpnSansResponse = (data: unknown): ListRpnSansResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnSansResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rpnSans: unmarshalArrayOfObject(data.rpn_sans, unmarshalRpnSanSummary),
    totalCount: data.total_count,
  } as ListRpnSansResponse
}

const unmarshalRpnServerCapability = (data: unknown): RpnServerCapability => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnServerCapability' failed as data isn't a dictionary.`,
    )
  }

  return {
    canJoinQinqGroup: data.can_join_qinq_group,
    canJoinRpnv2Group: data.can_join_rpnv2_group,
    compatibleQinq: data.compatible_qinq,
    datacenterName: data.datacenter_name,
    hostname: data.hostname,
    id: data.id,
    ipAddress: data.ip_address,
    rpnVersion: data.rpn_version,
    rpnv1GroupCount: data.rpnv1_group_count,
    rpnv2GroupCount: data.rpnv2_group_count,
    zone: data.zone,
  } as RpnServerCapability
}

export const unmarshalListRpnServerCapabilitiesResponse = (data: unknown): ListRpnServerCapabilitiesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnServerCapabilitiesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalRpnServerCapability),
    totalCount: data.total_count,
  } as ListRpnServerCapabilitiesResponse
}

export const unmarshalListRpnV2CapableResourcesResponse = (data: unknown): ListRpnV2CapableResourcesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnV2CapableResourcesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalServer),
    totalCount: data.total_count,
  } as ListRpnV2CapableResourcesResponse
}

const unmarshalRpnV2Member = (data: unknown): RpnV2Member => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RpnV2Member' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    rpnv1Group: data.rpnv1_group ? unmarshalRpnGroup(data.rpnv1_group) : undefined,
    server: data.server ? unmarshalServer(data.server) : undefined,
    speed: data.speed,
    status: data.status,
    vlan: data.vlan,
  } as RpnV2Member
}

const unmarshalLog = (data: unknown): Log => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Log' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    createdAt: unmarshalDate(data.created_at),
    finishedAt: unmarshalDate(data.finished_at),
    group: data.group ? unmarshalRpnV2Group(data.group) : undefined,
    id: data.id,
    member: data.member ? unmarshalRpnV2Member(data.member) : undefined,
    status: data.status,
  } as Log
}

export const unmarshalListRpnV2GroupLogsResponse = (data: unknown): ListRpnV2GroupLogsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnV2GroupLogsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    logs: unmarshalArrayOfObject(data.logs, unmarshalLog),
    totalCount: data.total_count,
  } as ListRpnV2GroupLogsResponse
}

export const unmarshalListRpnV2GroupsResponse = (data: unknown): ListRpnV2GroupsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnV2GroupsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    rpnGroups: unmarshalArrayOfObject(data.rpn_groups, unmarshalRpnV2Group),
    totalCount: data.total_count,
  } as ListRpnV2GroupsResponse
}

export const unmarshalListRpnV2MembersResponse = (data: unknown): ListRpnV2MembersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRpnV2MembersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    members: unmarshalArrayOfObject(data.members, unmarshalRpnV2Member),
    totalCount: data.total_count,
  } as ListRpnV2MembersResponse
}

const unmarshalServerDisk = (data: unknown): ServerDisk => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerDisk' failed as data isn't a dictionary.`,
    )
  }

  return {
    capacity: data.capacity,
    connector: data.connector,
    id: data.id,
    isAddon: data.is_addon,
    type: data.type,
  } as ServerDisk
}

export const unmarshalListServerDisksResponse = (data: unknown): ListServerDisksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerDisksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    disks: unmarshalArrayOfObject(data.disks, unmarshalServerDisk),
    totalCount: data.total_count,
  } as ListServerDisksResponse
}

const unmarshalServerEvent = (data: unknown): ServerEvent => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerEvent' failed as data isn't a dictionary.`,
    )
  }

  return {
    date: unmarshalDate(data.date),
    description: data.description,
    eventId: data.event_id,
  } as ServerEvent
}

export const unmarshalListServerEventsResponse = (data: unknown): ListServerEventsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerEventsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    events: unmarshalArrayOfObject(data.events, unmarshalServerEvent),
    totalCount: data.total_count,
  } as ListServerEventsResponse
}

const unmarshalServerSummary = (data: unknown): ServerSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    datacenterName: data.datacenter_name,
    expiredAt: unmarshalDate(data.expired_at),
    hostname: data.hostname,
    id: data.id,
    interfaces: unmarshalArrayOfObject(data.interfaces, unmarshalNetworkInterface),
    isHds: data.is_hds,
    isOutsourced: data.is_outsourced,
    level: data.level ? unmarshalServiceLevel(data.level) : undefined,
    offerId: data.offer_id,
    offerName: data.offer_name,
    organizationId: data.organization_id,
    osId: data.os_id,
    projectId: data.project_id,
    qinq: data.qinq,
    rpnVersion: data.rpn_version,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as ServerSummary
}

export const unmarshalListServersResponse = (data: unknown): ListServersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    servers: unmarshalArrayOfObject(data.servers, unmarshalServerSummary),
    totalCount: data.total_count,
  } as ListServersResponse
}

export const unmarshalListServicesResponse = (data: unknown): ListServicesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServicesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    services: unmarshalArrayOfObject(data.services, unmarshalService),
    totalCount: data.total_count,
  } as ListServicesResponse
}

export const unmarshalListSubscribableServerOptionsResponse = (data: unknown): ListSubscribableServerOptionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSubscribableServerOptionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverOptions: unmarshalArrayOfObject(data.server_options, unmarshalOffer),
    totalCount: data.total_count,
  } as ListSubscribableServerOptionsResponse
}

const unmarshalRaidArray = (data: unknown): RaidArray => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RaidArray' failed as data isn't a dictionary.`,
    )
  }

  return {
    disks: unmarshalArrayOfObject(data.disks, unmarshalServerDisk),
    raidLevel: data.raid_level,
  } as RaidArray
}

export const unmarshalRaid = (data: unknown): Raid => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Raid' failed as data isn't a dictionary.`,
    )
  }

  return {
    raidArrays: unmarshalArrayOfObject(data.raid_arrays, unmarshalRaidArray),
  } as Raid
}

export const unmarshalRefund = (data: unknown): Refund => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Refund' failed as data isn't a dictionary.`,
    )
  }

  return {
    content: data.content,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    method: data.method,
    refundedAt: unmarshalDate(data.refunded_at),
    status: data.status,
    totalWithTaxes: data.total_with_taxes ? unmarshalMoney(data.total_with_taxes) : undefined,
    totalWithoutTaxes: data.total_without_taxes ? unmarshalMoney(data.total_without_taxes) : undefined,
  } as Refund
}

export const unmarshalRescue = (data: unknown): Rescue => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Rescue' failed as data isn't a dictionary.`,
    )
  }

  return {
    login: data.login,
    osId: data.os_id,
    password: data.password,
    protocol: data.protocol,
  } as Rescue
}

const unmarshalPartition = (data: unknown): Partition => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Partition' failed as data isn't a dictionary.`,
    )
  }

  return {
    capacity: data.capacity,
    connectors: data.connectors,
    fileSystem: data.file_system,
    mountPoint: data.mount_point,
    raidLevel: data.raid_level,
    type: data.type,
  } as Partition
}

export const unmarshalServerDefaultPartitioning = (data: unknown): ServerDefaultPartitioning => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerDefaultPartitioning' failed as data isn't a dictionary.`,
    )
  }

  return {
    partitions: unmarshalArrayOfObject(data.partitions, unmarshalPartition),
  } as ServerDefaultPartitioning
}

export const unmarshalServerInstall = (data: unknown): ServerInstall => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerInstall' failed as data isn't a dictionary.`,
    )
  }

  return {
    hostname: data.hostname,
    osId: data.os_id,
    panelUrl: data.panel_url,
    partitions: unmarshalArrayOfObject(data.partitions, unmarshalPartition),
    sshKeyIds: data.ssh_key_ids,
    status: data.status,
    userLogin: data.user_login,
  } as ServerInstall
}

export const unmarshalSubscribeStorageOptionsResponse = (data: unknown): SubscribeStorageOptionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SubscribeStorageOptionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    services: unmarshalArrayOfObject(data.services, unmarshalService),
  } as SubscribeStorageOptionsResponse
}

export const marshalAttachFailoverIPToMacAddressRequest = (
  request: AttachFailoverIPToMacAddressRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mac: request.mac,
  type: request.type,
})

export const marshalAttachFailoverIPsRequest = (
  request: AttachFailoverIPsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  fips_ids: request.fipsIds,
  server_id: request.serverId,
})

export const marshalCreateFailoverIPsRequest = (
  request: CreateFailoverIPsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  offer_id: request.offerId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  quantity: request.quantity,
})

export const marshalCreateServerRequest = (
  request: CreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  datacenter_name: request.datacenterName,
  offer_id: request.offerId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  server_option_ids: request.serverOptionIds,
})

export const marshalDetachFailoverIPsRequest = (
  request: DetachFailoverIPsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  fips_ids: request.fipsIds,
})

export const marshalIPv6BlockApiCreateIPv6BlockRequest = (
  request: IPv6BlockApiCreateIPv6BlockRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalIPv6BlockApiCreateIPv6BlockSubnetRequest = (
  request: IPv6BlockApiCreateIPv6BlockSubnetRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address: request.address,
  cidr: request.cidr,
})

export const marshalIPv6BlockApiUpdateIPv6BlockRequest = (
  request: IPv6BlockApiUpdateIPv6BlockRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  nameservers: request.nameservers,
})

const marshalInstallPartition = (
  request: InstallPartition,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  capacity: request.capacity,
  connectors: request.connectors,
  file_system: request.fileSystem,
  mount_point: request.mountPoint,
  raid_level: request.raidLevel,
})

export const marshalInstallServerRequest = (
  request: InstallServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  hostname: request.hostname,
  ip_id: request.ipId,
  license_offer_id: request.licenseOfferId,
  os_id: request.osId,
  panel_password: request.panelPassword,
  partitions: ((request.partitions !== undefined) ?  request.partitions.map(elt => marshalInstallPartition(elt, defaults)): undefined),
  root_password: request.rootPassword,
  ssh_key_ids: request.sshKeyIds,
  user_login: request.userLogin,
  user_password: request.userPassword,
})

export const marshalRpnSanApiAddIpRequest = (
  request: RpnSanApiAddIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_ids: request.ipIds,
})

export const marshalRpnSanApiCreateRpnSanRequest = (
  request: RpnSanApiCreateRpnSanRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  offer_id: request.offerId,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRpnSanApiRemoveIpRequest = (
  request: RpnSanApiRemoveIpRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip_ids: request.ipIds,
})

export const marshalRpnV1ApiAddRpnGroupMembersRequest = (
  request: RpnV1ApiAddRpnGroupMembersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  san_server_ids: request.sanServerIds,
  server_ids: request.serverIds,
})

export const marshalRpnV1ApiCreateRpnGroupRequest = (
  request: RpnV1ApiCreateRpnGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  san_server_ids: request.sanServerIds,
  server_ids: request.serverIds,
})

export const marshalRpnV1ApiDeleteRpnGroupMembersRequest = (
  request: RpnV1ApiDeleteRpnGroupMembersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  member_ids: request.memberIds,
})

export const marshalRpnV1ApiLeaveRpnGroupRequest = (
  request: RpnV1ApiLeaveRpnGroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  member_ids: request.memberIds,
})

export const marshalRpnV1ApiRpnGroupInviteRequest = (
  request: RpnV1ApiRpnGroupInviteRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
  server_ids: request.serverIds,
})

export const marshalRpnV1ApiUpdateRpnGroupNameRequest = (
  request: RpnV1ApiUpdateRpnGroupNameRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

export const marshalRpnV2ApiAddRpnV2MembersRequest = (
  request: RpnV2ApiAddRpnV2MembersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  servers: request.servers,
})

export const marshalRpnV2ApiCreateRpnV2GroupRequest = (
  request: RpnV2ApiCreateRpnV2GroupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  servers: request.servers,
  type: request.type,
})

export const marshalRpnV2ApiDeleteRpnV2MembersRequest = (
  request: RpnV2ApiDeleteRpnV2MembersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  member_ids: request.memberIds,
})

export const marshalRpnV2ApiEnableRpnV2GroupCompatibilityRequest = (
  request: RpnV2ApiEnableRpnV2GroupCompatibilityRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  rpnv1_group_id: request.rpnv1GroupId,
})

export const marshalRpnV2ApiUpdateRpnV2GroupNameRequest = (
  request: RpnV2ApiUpdateRpnV2GroupNameRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

export const marshalRpnV2ApiUpdateRpnV2VlanForMembersRequest = (
  request: RpnV2ApiUpdateRpnV2VlanForMembersRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  member_ids: request.memberIds,
  vlan: request.vlan,
})

export const marshalStartBMCAccessRequest = (
  request: StartBMCAccessRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip: request.ip,
})

export const marshalStartRescueRequest = (
  request: StartRescueRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  os_id: request.osId,
})

export const marshalSubscribeServerOptionRequest = (
  request: SubscribeServerOptionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  option_id: request.optionId,
})

export const marshalSubscribeStorageOptionsRequest = (
  request: SubscribeStorageOptionsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  options_ids: request.optionsIds,
})

const marshalUpdatableRaidArray = (
  request: UpdatableRaidArray,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disk_ids: request.diskIds,
  raid_level: request.raidLevel,
})

export const marshalUpdateRaidRequest = (
  request: UpdateRaidRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  raid_arrays:  request.raidArrays.map(elt => marshalUpdatableRaidArray(elt, defaults)),
})

export const marshalUpdateReverseRequest = (
  request: UpdateReverseRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverse: request.reverse,
})

export const marshalUpdateServerBackupRequest = (
  request: UpdateServerBackupRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  acl_enabled: request.aclEnabled,
  autologin: request.autologin,
  password: request.password,
})

export const marshalUpdateServerRequest = (
  request: UpdateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enable_ipv6: request.enableIpv6,
  hostname: request.hostname,
})

export const marshalUpdateServerTagsRequest = (
  request: UpdateServerTagsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  tags: request.tags,
})
