import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  marshalBlobToScwFile,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
  unmarshalTimeSeries,
} from '@scaleway/sdk-client'
import type {
  AddOptionServerRequest,
  BMCAccess,
  CertificationOption,
  CPU,
  CreateServerRequest,
  CreateServerRequestInstall,
  Disk,
  GetServerMetricsResponse,
  GPU,
  InstallServerRequest,
  IP,
  LicenseOption,
  ListOffersResponse,
  ListOptionsResponse,
  ListOSResponse,
  ListServerEventsResponse,
  ListServerPrivateNetworksResponse,
  ListServersResponse,
  ListSettingsResponse,
  Memory,
  Offer,
  OfferOptionOffer,
  Option,
  OS,
  OSOSField,
  PersistentMemory,
  PrivateNetworkApiAddServerPrivateNetworkRequest,
  PrivateNetworkApiSetServerPrivateNetworksRequest,
  PrivateNetworkOption,
  PublicBandwidthOption,
  RaidController,
  RebootServerRequest,
  RemoteAccessOption,
  Schema,
  SchemaDisk,
  SchemaFilesystem,
  SchemaPartition,
  SchemaPool,
  SchemaRAID,
  SchemaZFS,
  Server,
  ServerEvent,
  ServerInstall,
  ServerOption,
  ServerPrivateNetwork,
  ServerRescueServer,
  SetServerPrivateNetworksResponse,
  Setting,
  StartBMCAccessRequest,
  StartServerRequest,
  UpdateIPRequest,
  UpdateServerRequest,
  UpdateSettingRequest,
  ValidatePartitioningSchemaRequest,
} from './types.gen.js'

const unmarshalSchemaPartition = (data: unknown): SchemaPartition => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SchemaPartition' failed as data isn't a dictionary.`,
    )
  }

  return {
    label: data.label,
    number: data.number,
    size: data.size,
    useAllAvailableSpace: data.use_all_available_space,
  } as SchemaPartition
}

const unmarshalSchemaPool = (data: unknown): SchemaPool => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SchemaPool' failed as data isn't a dictionary.`,
    )
  }

  return {
    devices: data.devices,
    filesystemOptions: data.filesystem_options,
    name: data.name,
    options: data.options,
    type: data.type,
  } as SchemaPool
}

const unmarshalSchemaDisk = (data: unknown): SchemaDisk => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SchemaDisk' failed as data isn't a dictionary.`,
    )
  }

  return {
    device: data.device,
    partitions: unmarshalArrayOfObject(
      data.partitions,
      unmarshalSchemaPartition,
    ),
  } as SchemaDisk
}

const unmarshalSchemaFilesystem = (data: unknown): SchemaFilesystem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SchemaFilesystem' failed as data isn't a dictionary.`,
    )
  }

  return {
    device: data.device,
    format: data.format,
    mountpoint: data.mountpoint,
  } as SchemaFilesystem
}

const unmarshalSchemaRAID = (data: unknown): SchemaRAID => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SchemaRAID' failed as data isn't a dictionary.`,
    )
  }

  return {
    devices: data.devices,
    level: data.level,
    name: data.name,
  } as SchemaRAID
}

const unmarshalSchemaZFS = (data: unknown): SchemaZFS => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SchemaZFS' failed as data isn't a dictionary.`,
    )
  }

  return {
    pools: unmarshalArrayOfObject(data.pools, unmarshalSchemaPool),
  } as SchemaZFS
}

export const unmarshalSchema = (data: unknown): Schema => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Schema' failed as data isn't a dictionary.`,
    )
  }

  return {
    disks: unmarshalArrayOfObject(data.disks, unmarshalSchemaDisk),
    filesystems: unmarshalArrayOfObject(
      data.filesystems,
      unmarshalSchemaFilesystem,
    ),
    raids: unmarshalArrayOfObject(data.raids, unmarshalSchemaRAID),
    zfs: data.zfs ? unmarshalSchemaZFS(data.zfs) : undefined,
  } as Schema
}

export const unmarshalIP = (data: unknown): IP => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'IP' failed as data isn't a dictionary.`,
    )
  }

  return {
    address: data.address,
    id: data.id,
    reverse: data.reverse,
    reverseStatus: data.reverse_status,
    reverseStatusMessage: data.reverse_status_message,
    version: data.version,
  } as IP
}

const unmarshalCertificationOption = (data: unknown): CertificationOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CertificationOption' failed as data isn't a dictionary.`,
    )
  }

  return {} as CertificationOption
}

const unmarshalLicenseOption = (data: unknown): LicenseOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LicenseOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    osId: data.os_id,
  } as LicenseOption
}

const unmarshalPrivateNetworkOption = (data: unknown): PrivateNetworkOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PrivateNetworkOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    bandwidthInBps: data.bandwidth_in_bps,
  } as PrivateNetworkOption
}

const unmarshalPublicBandwidthOption = (
  data: unknown,
): PublicBandwidthOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicBandwidthOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    bandwidthInBps: data.bandwidth_in_bps,
  } as PublicBandwidthOption
}

const unmarshalRemoteAccessOption = (data: unknown): RemoteAccessOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RemoteAccessOption' failed as data isn't a dictionary.`,
    )
  }

  return {} as RemoteAccessOption
}

const unmarshalServerInstall = (data: unknown): ServerInstall => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerInstall' failed as data isn't a dictionary.`,
    )
  }

  return {
    hostname: data.hostname,
    osId: data.os_id,
    partitioningSchema: data.partitioning_schema
      ? unmarshalSchema(data.partitioning_schema)
      : undefined,
    serviceUrl: data.service_url,
    serviceUser: data.service_user,
    sshKeyIds: data.ssh_key_ids,
    status: data.status,
    user: data.user,
  } as ServerInstall
}

const unmarshalServerOption = (data: unknown): ServerOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    certification: data.certification
      ? unmarshalCertificationOption(data.certification)
      : undefined,
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    license: data.license ? unmarshalLicenseOption(data.license) : undefined,
    manageable: data.manageable,
    name: data.name,
    privateNetwork: data.private_network
      ? unmarshalPrivateNetworkOption(data.private_network)
      : undefined,
    publicBandwidth: data.public_bandwidth
      ? unmarshalPublicBandwidthOption(data.public_bandwidth)
      : undefined,
    remoteAccess: data.remote_access
      ? unmarshalRemoteAccessOption(data.remote_access)
      : undefined,
    status: data.status,
  } as ServerOption
}

const unmarshalServerRescueServer = (data: unknown): ServerRescueServer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerRescueServer' failed as data isn't a dictionary.`,
    )
  }

  return {
    password: data.password,
    user: data.user,
  } as ServerRescueServer
}

export const unmarshalServer = (data: unknown): Server => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    bootType: data.boot_type,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    domain: data.domain,
    id: data.id,
    install: data.install ? unmarshalServerInstall(data.install) : undefined,
    ips: unmarshalArrayOfObject(data.ips, unmarshalIP),
    name: data.name,
    offerId: data.offer_id,
    offerName: data.offer_name,
    options: unmarshalArrayOfObject(data.options, unmarshalServerOption),
    organizationId: data.organization_id,
    pingStatus: data.ping_status,
    projectId: data.project_id,
    protected: data.protected,
    rescueServer: data.rescue_server
      ? unmarshalServerRescueServer(data.rescue_server)
      : undefined,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    userData: data.user_data,
    zone: data.zone,
  } as Server
}

const unmarshalOSOSField = (data: unknown): OSOSField => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OSOSField' failed as data isn't a dictionary.`,
    )
  }

  return {
    defaultValue: data.default_value,
    editable: data.editable,
    required: data.required,
  } as OSOSField
}

export const unmarshalOS = (data: unknown): OS => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OS' failed as data isn't a dictionary.`,
    )
  }

  return {
    allowed: data.allowed,
    cloudInitSupported: data.cloud_init_supported,
    cloudInitVersion: data.cloud_init_version,
    customPartitioningSupported: data.custom_partitioning_supported,
    enabled: data.enabled,
    id: data.id,
    licenseRequired: data.license_required,
    logoUrl: data.logo_url,
    name: data.name,
    password: data.password ? unmarshalOSOSField(data.password) : undefined,
    servicePassword: data.service_password
      ? unmarshalOSOSField(data.service_password)
      : undefined,
    serviceUser: data.service_user
      ? unmarshalOSOSField(data.service_user)
      : undefined,
    ssh: data.ssh ? unmarshalOSOSField(data.ssh) : undefined,
    user: data.user ? unmarshalOSOSField(data.user) : undefined,
    version: data.version,
    zone: data.zone,
  } as OS
}

const unmarshalCPU = (data: unknown): CPU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    benchmark: data.benchmark,
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

const unmarshalGPU = (data: unknown): GPU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    name: data.name,
    vram: data.vram,
  } as GPU
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

const unmarshalOfferOptionOffer = (data: unknown): OfferOptionOffer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferOptionOffer' failed as data isn't a dictionary.`,
    )
  }

  return {
    certification: data.certification
      ? unmarshalCertificationOption(data.certification)
      : undefined,
    enabled: data.enabled,
    id: data.id,
    license: data.license ? unmarshalLicenseOption(data.license) : undefined,
    manageable: data.manageable,
    name: data.name,
    osId: data.os_id,
    price: data.price ? unmarshalMoney(data.price) : undefined,
    privateNetwork: data.private_network
      ? unmarshalPrivateNetworkOption(data.private_network)
      : undefined,
    publicBandwidth: data.public_bandwidth
      ? unmarshalPublicBandwidthOption(data.public_bandwidth)
      : undefined,
    remoteAccess: data.remote_access
      ? unmarshalRemoteAccessOption(data.remote_access)
      : undefined,
    subscriptionPeriod: data.subscription_period,
  } as OfferOptionOffer
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
    type: data.type,
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

export const unmarshalOffer = (data: unknown): Offer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Offer' failed as data isn't a dictionary.`,
    )
  }

  return {
    bandwidth: data.bandwidth,
    commercialRange: data.commercial_range,
    cpus: unmarshalArrayOfObject(data.cpus, unmarshalCPU),
    disks: unmarshalArrayOfObject(data.disks, unmarshalDisk),
    enable: data.enable,
    fee: data.fee ? unmarshalMoney(data.fee) : undefined,
    gpus: unmarshalArrayOfObject(data.gpus, unmarshalGPU),
    id: data.id,
    incompatibleOsIds: data.incompatible_os_ids,
    maxBandwidth: data.max_bandwidth,
    memories: unmarshalArrayOfObject(data.memories, unmarshalMemory),
    monthlyOfferId: data.monthly_offer_id,
    name: data.name,
    operationPath: data.operation_path,
    options: unmarshalArrayOfObject(data.options, unmarshalOfferOptionOffer),
    persistentMemories: unmarshalArrayOfObject(
      data.persistent_memories,
      unmarshalPersistentMemory,
    ),
    pricePerHour: data.price_per_hour
      ? unmarshalMoney(data.price_per_hour)
      : undefined,
    pricePerMonth: data.price_per_month
      ? unmarshalMoney(data.price_per_month)
      : undefined,
    privateBandwidth: data.private_bandwidth,
    quotaName: data.quota_name,
    raidControllers: unmarshalArrayOfObject(
      data.raid_controllers,
      unmarshalRaidController,
    ),
    sharedBandwidth: data.shared_bandwidth,
    stock: data.stock,
    subscriptionPeriod: data.subscription_period,
    tags: data.tags,
    zone: data.zone,
  } as Offer
}

export const unmarshalOption = (data: unknown): Option => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Option' failed as data isn't a dictionary.`,
    )
  }

  return {
    certification: data.certification
      ? unmarshalCertificationOption(data.certification)
      : undefined,
    id: data.id,
    license: data.license ? unmarshalLicenseOption(data.license) : undefined,
    manageable: data.manageable,
    name: data.name,
    privateNetwork: data.private_network
      ? unmarshalPrivateNetworkOption(data.private_network)
      : undefined,
    publicBandwidth: data.public_bandwidth
      ? unmarshalPublicBandwidthOption(data.public_bandwidth)
      : undefined,
    remoteAccess: data.remote_access
      ? unmarshalRemoteAccessOption(data.remote_access)
      : undefined,
  } as Option
}

export const unmarshalServerPrivateNetwork = (
  data: unknown,
): ServerPrivateNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerPrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    serverId: data.server_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    vlan: data.vlan,
  } as ServerPrivateNetwork
}

export const unmarshalSetting = (data: unknown): Setting => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Setting' failed as data isn't a dictionary.`,
    )
  }

  return {
    enabled: data.enabled,
    id: data.id,
    projectId: data.project_id,
    type: data.type,
  } as Setting
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
    url: data.url,
  } as BMCAccess
}

export const unmarshalGetServerMetricsResponse = (
  data: unknown,
): GetServerMetricsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerMetricsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pings: data.pings ? unmarshalTimeSeries(data.pings) : undefined,
  } as GetServerMetricsResponse
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

export const unmarshalListOffersResponse = (
  data: unknown,
): ListOffersResponse => {
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

export const unmarshalListOptionsResponse = (
  data: unknown,
): ListOptionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListOptionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    options: unmarshalArrayOfObject(data.options, unmarshalOption),
    totalCount: data.total_count,
  } as ListOptionsResponse
}

const unmarshalServerEvent = (data: unknown): ServerEvent => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerEvent' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    updatedAt: unmarshalDate(data.updated_at),
  } as ServerEvent
}

export const unmarshalListServerEventsResponse = (
  data: unknown,
): ListServerEventsResponse => {
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

export const unmarshalListServerPrivateNetworksResponse = (
  data: unknown,
): ListServerPrivateNetworksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverPrivateNetworks: unmarshalArrayOfObject(
      data.server_private_networks,
      unmarshalServerPrivateNetwork,
    ),
    totalCount: data.total_count,
  } as ListServerPrivateNetworksResponse
}

export const unmarshalListServersResponse = (
  data: unknown,
): ListServersResponse => {
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

export const unmarshalListSettingsResponse = (
  data: unknown,
): ListSettingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSettingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    settings: unmarshalArrayOfObject(data.settings, unmarshalSetting),
    totalCount: data.total_count,
  } as ListSettingsResponse
}

export const unmarshalSetServerPrivateNetworksResponse = (
  data: unknown,
): SetServerPrivateNetworksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetServerPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverPrivateNetworks: unmarshalArrayOfObject(
      data.server_private_networks,
      unmarshalServerPrivateNetwork,
    ),
  } as SetServerPrivateNetworksResponse
}

const marshalSchemaPartition = (
  request: SchemaPartition,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  label: request.label,
  number: request.number,
  size: request.size,
  use_all_available_space: request.useAllAvailableSpace,
})

const marshalSchemaPool = (
  request: SchemaPool,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  devices: request.devices,
  filesystem_options: request.filesystemOptions,
  name: request.name,
  options: request.options,
  type: request.type,
})

const marshalSchemaDisk = (
  request: SchemaDisk,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  device: request.device,
  partitions: request.partitions.map(elt =>
    marshalSchemaPartition(elt, defaults),
  ),
})

const marshalSchemaFilesystem = (
  request: SchemaFilesystem,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  device: request.device,
  format: request.format,
  mountpoint: request.mountpoint,
})

const marshalSchemaRAID = (
  request: SchemaRAID,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  devices: request.devices,
  level: request.level,
  name: request.name,
})

const marshalSchemaZFS = (
  request: SchemaZFS,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  pools: request.pools.map(elt => marshalSchemaPool(elt, defaults)),
})

export const marshalSchema = (
  request: Schema,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  disks: request.disks.map(elt => marshalSchemaDisk(elt, defaults)),
  filesystems: request.filesystems.map(elt =>
    marshalSchemaFilesystem(elt, defaults),
  ),
  raids: request.raids.map(elt => marshalSchemaRAID(elt, defaults)),
  zfs:
    request.zfs !== undefined
      ? marshalSchemaZFS(request.zfs, defaults)
      : undefined,
})

const marshalCreateServerRequestInstall = (
  request: CreateServerRequestInstall,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  hostname: request.hostname,
  os_id: request.osId,
  partitioning_schema:
    request.partitioningSchema !== undefined
      ? marshalSchema(request.partitioningSchema, defaults)
      : undefined,
  password: request.password,
  service_password: request.servicePassword,
  service_user: request.serviceUser,
  ssh_key_ids: request.sshKeyIds,
  user: request.user,
})

export const marshalCreateServerRequest = (
  request: CreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  install:
    request.install !== undefined
      ? marshalCreateServerRequestInstall(request.install, defaults)
      : undefined,
  name: request.name,
  offer_id: request.offerId,
  option_ids: request.optionIds,
  protected: request.protected,
  tags: request.tags,
  user_data: request.userData,
  ...resolveOneOf([
    {
      default: defaults.defaultProjectId,
      param: 'project_id',
      value: request.projectId,
    },
    {
      default: defaults.defaultOrganizationId,
      param: 'organization_id',
      value: request.organizationId,
    },
  ]),
})

export const marshalAddOptionServerRequest = (
  request: AddOptionServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  expires_at: request.expiresAt,
})

export const marshalInstallServerRequest = async (
  request: InstallServerRequest,
  defaults: DefaultValues,
): Promise<Record<string, unknown>> => ({
  hostname: request.hostname,
  os_id: request.osId,
  partitioning_schema:
    request.partitioningSchema !== undefined
      ? marshalSchema(request.partitioningSchema, defaults)
      : undefined,
  password: request.password,
  service_password: request.servicePassword,
  service_user: request.serviceUser,
  ssh_key_ids: request.sshKeyIds,
  user: request.user,
  user_data:
    request.userData !== undefined
      ? await marshalBlobToScwFile(request.userData)
      : undefined,
})

export const marshalPrivateNetworkApiAddServerPrivateNetworkRequest = (
  request: PrivateNetworkApiAddServerPrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_id: request.privateNetworkId,
})

export const marshalPrivateNetworkApiSetServerPrivateNetworksRequest = (
  request: PrivateNetworkApiSetServerPrivateNetworksRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  private_network_ids: request.privateNetworkIds,
})

export const marshalRebootServerRequest = (
  request: RebootServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  boot_type: request.bootType,
  ssh_key_ids: request.sshKeyIds,
})

export const marshalStartBMCAccessRequest = (
  request: StartBMCAccessRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip: request.ip,
})

export const marshalStartServerRequest = (
  request: StartServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  boot_type: request.bootType,
  ssh_key_ids: request.sshKeyIds,
})

export const marshalUpdateIPRequest = (
  request: UpdateIPRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  reverse: request.reverse,
})

export const marshalUpdateServerRequest = (
  request: UpdateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  protected: request.protected,
  tags: request.tags,
  user_data: request.userData,
})

export const marshalUpdateSettingRequest = (
  request: UpdateSettingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enabled: request.enabled,
})

export const marshalValidatePartitioningSchemaRequest = (
  request: ValidatePartitioningSchemaRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  offer_id: request.offerId,
  os_id: request.osId,
  partitioning_schema:
    request.partitioningSchema !== undefined
      ? marshalSchema(request.partitioningSchema, defaults)
      : undefined,
})
