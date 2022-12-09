// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
  unmarshalTimeSeries,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  AddOptionServerRequest,
  BMCAccess,
  CPU,
  CreateServerRequest,
  CreateServerRequestInstall,
  Disk,
  GetServerMetricsResponse,
  IP,
  InstallServerRequest,
  ListOSResponse,
  ListOffersResponse,
  ListOptionsResponse,
  ListServerEventsResponse,
  ListServerPrivateNetworksResponse,
  ListServersResponse,
  ListSettingsResponse,
  Memory,
  OS,
  OSOSField,
  Offer,
  OfferOptionOffer,
  Option,
  PersistentMemory,
  PrivateNetworkApiAddServerPrivateNetworkRequest,
  PrivateNetworkApiSetServerPrivateNetworksRequest,
  RaidController,
  RebootServerRequest,
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
} from './types.gen'

const unmarshalCPU = (data: unknown) => {
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

const unmarshalDisk = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Disk' failed as data isn't a dictionary.`,
    )
  }

  return { capacity: data.capacity, type: data.type } as Disk
}

export const unmarshalIP = (data: unknown) => {
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

const unmarshalMemory = (data: unknown) => {
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

const unmarshalOSOSField = (data: unknown) => {
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

const unmarshalOfferOptionOffer = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferOptionOffer' failed as data isn't a dictionary.`,
    )
  }

  return {
    enabled: data.enabled,
    id: data.id,
    manageable: data.manageable,
    name: data.name,
    osId: data.os_id,
    price: data.price ? unmarshalMoney(data.price) : undefined,
    subscriptionPeriod: data.subscription_period,
  } as OfferOptionOffer
}

const unmarshalPersistentMemory = (data: unknown) => {
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

const unmarshalRaidController = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RaidController' failed as data isn't a dictionary.`,
    )
  }

  return { model: data.model, raidLevel: data.raid_level } as RaidController
}

const unmarshalServerInstall = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerInstall' failed as data isn't a dictionary.`,
    )
  }

  return {
    hostname: data.hostname,
    osId: data.os_id,
    serviceUrl: data.service_url,
    serviceUser: data.service_user,
    sshKeyIds: data.ssh_key_ids,
    status: data.status,
    user: data.user,
  } as ServerInstall
}

const unmarshalServerOption = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    manageable: data.manageable,
    name: data.name,
    status: data.status,
  } as ServerOption
}

const unmarshalServerRescueServer = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerRescueServer' failed as data isn't a dictionary.`,
    )
  }

  return { password: data.password, user: data.user } as ServerRescueServer
}

export const unmarshalOS = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OS' failed as data isn't a dictionary.`,
    )
  }

  return {
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
  } as OS
}

export const unmarshalOffer = (data: unknown) => {
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
    id: data.id,
    incompatibleOsIds: data.incompatible_os_ids,
    memories: unmarshalArrayOfObject(data.memories, unmarshalMemory),
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
    quotaName: data.quota_name,
    raidControllers: unmarshalArrayOfObject(
      data.raid_controllers,
      unmarshalRaidController,
    ),
    stock: data.stock,
    subscriptionPeriod: data.subscription_period,
  } as Offer
}

export const unmarshalOption = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Option' failed as data isn't a dictionary.`,
    )
  }

  return { id: data.id, manageable: data.manageable, name: data.name } as Option
}

export const unmarshalServer = (data: unknown) => {
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
    rescueServer: data.rescue_server
      ? unmarshalServerRescueServer(data.rescue_server)
      : undefined,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    zone: data.zone,
  } as Server
}

const unmarshalServerEvent = (data: unknown) => {
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

export const unmarshalServerPrivateNetwork = (data: unknown) => {
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

export const unmarshalSetting = (data: unknown) => {
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

export const unmarshalBMCAccess = (data: unknown) => {
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

export const unmarshalGetServerMetricsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetServerMetricsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    pings: data.pings ? unmarshalTimeSeries(data.pings) : undefined,
  } as GetServerMetricsResponse
}

export const unmarshalListOSResponse = (data: unknown) => {
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

export const unmarshalListOffersResponse = (data: unknown) => {
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

export const unmarshalListOptionsResponse = (data: unknown) => {
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

export const unmarshalListServerEventsResponse = (data: unknown) => {
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

export const unmarshalListServerPrivateNetworksResponse = (data: unknown) => {
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

export const unmarshalListSettingsResponse = (data: unknown) => {
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

export const unmarshalSetServerPrivateNetworksResponse = (data: unknown) => {
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

const marshalCreateServerRequestInstall = (
  request: CreateServerRequestInstall,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  hostname: request.hostname,
  os_id: request.osId,
  password: request.password,
  service_password: request.servicePassword,
  service_user: request.serviceUser,
  ssh_key_ids: request.sshKeyIds,
  user: request.user,
})

export const marshalAddOptionServerRequest = (
  request: AddOptionServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  expires_at: request.expiresAt,
})

export const marshalCreateServerRequest = (
  request: CreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  install: request.install
    ? marshalCreateServerRequestInstall(request.install, defaults)
    : undefined,
  name: request.name,
  offer_id: request.offerId,
  option_ids: request.optionIds,
  tags: request.tags,
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

export const marshalInstallServerRequest = (
  request: InstallServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  hostname: request.hostname,
  os_id: request.osId,
  password: request.password,
  service_password: request.servicePassword,
  service_user: request.serviceUser,
  ssh_key_ids: request.sshKeyIds,
  user: request.user,
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
  tags: request.tags,
})

export const marshalUpdateSettingRequest = (
  request: UpdateSettingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  enabled: request.enabled,
})
