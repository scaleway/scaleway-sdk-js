// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, marshalBlobToScwFile, marshalDecimal, marshalMoney, marshalScwFile, marshalTimeSeries, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalDecimal, unmarshalMapOfObject, unmarshalMoney, unmarshalScwFile, unmarshalServiceInfo, unmarshalTimeSeries, unmarshalTimeSeriesPoint } from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, DefaultValues } from '@scaleway/sdk-client'
import type {
  HardwareSpecs,
  NetworkSpecs,
  Offer,
  Server,
  Location,
  ListLocationsResponse,
  OS,
  ListOSResponse,
  ListOffersResponse,
  ListServersResponse,
  VpsApiChangeServerHostnameRequest,
  VpsApiChangeServerPasswordRequest,
  VpsApiCreateServerRequest,
  VpsApiManageServerPowerRequest,
  VpsApiReinstallServerRequest,
} from './types.gen.js'

const unmarshalHardwareSpecs = (data: unknown): HardwareSpecs => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HardwareSpecs' failed as data isn't a dictionary.`,
    )
  }

  return {
    coreCount: data.core_count,
    ramBytes: data.ram_bytes,
    storageBytes: data.storage_bytes,
  } as HardwareSpecs
}

const unmarshalNetworkSpecs = (data: unknown): NetworkSpecs => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NetworkSpecs' failed as data isn't a dictionary.`,
    )
  }

  return {
    bandwidthMax: data.bandwidth_max,
    bandwidthSpeedGbps: data.bandwidth_speed_gbps,
  } as NetworkSpecs
}

export const unmarshalOffer = (data: unknown): Offer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Offer' failed as data isn't a dictionary.`,
    )
  }

  return {
    available: data.available,
    hardwareSpecs: data.hardware_specs ? unmarshalHardwareSpecs(data.hardware_specs) : undefined,
    id: data.id,
    name: data.name,
    networkSpecs: data.network_specs ? unmarshalNetworkSpecs(data.network_specs) : undefined,
    srn: data.srn,
  } as Offer
}

export const unmarshalServer = (data: unknown): Server => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Server' failed as data isn't a dictionary.`,
    )
  }

  return {
    hostname: data.hostname,
    id: data.id,
    ips: data.ips,
    locationId: data.location_id,
    offerId: data.offer_id,
    organizationId: data.organization_id,
    osId: data.os_id,
    projectId: data.project_id,
    srn: data.srn,
    status: data.status,
  } as Server
}

const unmarshalLocation = (data: unknown): Location => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Location' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableOfferIds: data.available_offer_ids,
    cityName: data.city_name,
    countryCode: data.country_code,
    geographicArea: data.geographic_area,
    id: data.id,
    srn: data.srn,
  } as Location
}

export const unmarshalListLocationsResponse = (data: unknown): ListLocationsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLocationsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    locations: unmarshalArrayOfObject(data.locations, unmarshalLocation),
    totalCount: data.total_count,
  } as ListLocationsResponse
}

const unmarshalOS = (data: unknown): OS => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OS' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    mainOs: data.main_os,
    name: data.name,
    srn: data.srn,
  } as OS
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

export const marshalVpsApiChangeServerHostnameRequest = (
  request: VpsApiChangeServerHostnameRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  hostname: request.hostname,
})

export const marshalVpsApiChangeServerPasswordRequest = (
  request: VpsApiChangeServerPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
})

export const marshalVpsApiCreateServerRequest = (
  request: VpsApiCreateServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  hostname: request.hostname,
  location_id: request.locationId,
  offer_id: request.offerId,
  os_id: request.osId,
  project_id: request.projectId ?? defaults.defaultProjectId,
  ssh_key_id: request.sshKeyId,
})

export const marshalVpsApiManageServerPowerRequest = (
  request: VpsApiManageServerPowerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  action: request.action,
})

export const marshalVpsApiReinstallServerRequest = (
  request: VpsApiReinstallServerRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  os_id: request.osId,
  ssh_key_id: request.sshKeyId,
})
