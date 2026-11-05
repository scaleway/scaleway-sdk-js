// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type ManageServerPowerRequestAction =
  | 'unknown_action'
  | 'power_off'
  | 'power_on'
  | 'reboot'

export type ServerStatus =
  | 'unknown_status'
  | 'ordered'
  | 'installing'
  | 'active'
  | 'stopped'
  | 'locked'
  | 'suspended'
  | 'stopping'
  | 'starting'
  | 'deleting'

export interface HardwareSpecs {
  /**
   * Number of cores.
   */
  coreCount: number
  /**
   * Storage size.
   */
  storageBytes: number
  /**
   * RAM size.
   */
  ramBytes: number
}


export interface NetworkSpecs {
  /**
   * Network bandwidth (GB).
   */
  bandwidthMax: number
  /**
   * Bandwidth speed.
   */
  bandwidthSpeedGbps: number
}


export interface Location {
  /**
   * ID.
   */
  id: string
  /**
   * Geographic area.
   */
  geographicArea: string
  /**
   * Country code.
   */
  countryCode: string
  /**
   * City name.
   */
  cityName: string
  /**
   * Available offer IDs.
   */
  availableOfferIds: string[]
  /**
   * SRN of the location.
   */
  srn: string
}


export interface OS {
  /**
   * ID.
   */
  id: string
  /**
   * Name.
   */
  name: string
  /**
   * OS family.
   */
  mainOs: string
  /**
   * Description.
   */
  description?: string
  /**
   * SRN of the OS.
   */
  srn: string
}


export interface Offer {
  /**
   * ID of the offer.
   */
  id: string
  /**
   * Name of the offer.
   */
  name: string
  /**
   * Whether the offer is available.
   */
  available: boolean
  /**
   * Hardware specifications.
   */
  hardwareSpecs?: HardwareSpecs
  /**
   * Network specifications.
   */
  networkSpecs?: NetworkSpecs
  /**
   * SRN of the offer.
   */
  srn: string
}


export interface Server {
  /**
   * ID of the server.
   */
  id: string
  /**
   * Hostname of the server.
   */
  hostname: string
  /**
   * OS ID installed on server.
   */
  osId: string
  /**
   * Location ID of the server.
   */
  locationId: string
  /**
   * Status of the server.
   */
  status: ServerStatus
  /**
   * List of IPs of the server.
   */
  ips: string[]
  /**
   * Organization ID owning the server.
   */
  organizationId: string
  /**
   * Project ID of the server.
   */
  projectId: string
  /**
   * Offer ID of the server.
   */
  offerId: string
  /**
   * SRN of the server.
   */
  srn: string
}


export interface ListLocationsResponse {
  /**
   * Total count.
   */
  totalCount: number
  /**
   * List of locations available for the given offer.
   */
  locations: Location[]
}


export interface ListOSResponse {
  /**
   * Total count.
   */
  totalCount: number
  /**
   * List of OS.
   */
  os: OS[]
}


export interface ListOffersResponse {
  /**
   * Total count of matching offers.
   */
  totalCount: number
  /**
   * List of offers.
   */
  offers: Offer[]
}


export interface ListServersResponse {
  /**
   * Total count of matching servers.
   */
  totalCount: number
  /**
   * Servers that match filters.
   */
  servers: Server[]
}


export type VpsApiChangeServerHostnameRequest = {
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * New hostname of the server.
   */
  hostname: string
}


export type VpsApiChangeServerPasswordRequest = {
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * New root password of the server.
   */
  password: string
}


export type VpsApiCreateServerRequest = {
  /**
   * Project ID.
   */
  projectId?: string
  /**
   * Offer ID of the server.
   */
  offerId: string
  /**
   * OS ID to install on the server.
   */
  osId: string
  /**
   * Location ID of the server.
   */
  locationId: string
  /**
   * Hostname of the server.
   */
  hostname: string
  /**
   * SSH key to install on the server.
   */
  sshKeyId?: string
}


export type VpsApiDeleteServerRequest = {
  /**
   * ID of the server to delete.
   */
  serverId: string
}


export type VpsApiGetOfferRequest = {
  /**
   * ID of the offer.
   */
  offerId: string
}


export type VpsApiGetServerRequest = {
  /**
   * ID of the server.
   */
  serverId: string
}


export type VpsApiListLocationsRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of locations per page.
   */
  pageSize?: number
}


export type VpsApiListOSRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of OS per page.
   */
  pageSize?: number
}


export type VpsApiListOffersRequest = {
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of offers per page.
   */
  pageSize?: number
}


export type VpsApiListServersRequest = {
  /**
   * Organization ID.
   *
   * One-of ('scope'): at most one of 'organizationId', 'projectId' could be set.
   */
  organizationId?: string
  /**
   * Project ID.
   *
   * One-of ('scope'): at most one of 'organizationId', 'projectId' could be set.
   */
  projectId?: string
  /**
   * Page number.
   */
  page?: number
  /**
   * Number of servers per page.
   */
  pageSize?: number
}


export type VpsApiManageServerPowerRequest = {
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * Action to perform (power_off, power_on, reboot).
   */
  action: ManageServerPowerRequestAction
}


export type VpsApiReinstallServerRequest = {
  /**
   * ID of the server.
   */
  serverId: string
  /**
   * OS ID to reinstall on the server.
   */
  osId: string
  /**
   * SSH key to install on the server.
   */
  sshKeyId?: string
}


