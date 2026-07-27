// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type ListNatsAccountsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListNatsCredentialsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListSnsCredentialsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListSqsCredentialsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'name_asc'
  | 'name_desc'

export type SnsInfoStatus =
  | 'unknown_status'
  | 'enabled'
  | 'disabled'

export type SqsInfoStatus =
  | 'unknown_status'
  | 'enabled'
  | 'disabled'

export interface File {
  /**
   * File name.
   */
  name: string
  /**
   * File content.
   */
  content: string
}


export interface SnsPermissions {
  /**
   * Defines whether the credentials bearer can publish messages to the service (publish to Topics and Events topics).
   */
  canPublish?: boolean
  /**
   * Defines whether the credentials bearer can receive messages from the service (configure subscriptions).
   */
  canReceive?: boolean
  /**
   * Defines whether the credentials bearer can manage the associated Topics and Events topics or subscriptions.
   */
  canManage?: boolean
}


export interface SqsPermissions {
  /**
   * Defines whether the credentials bearer can publish messages to the service (send messages to Queues queues).
   */
  canPublish?: boolean
  /**
   * Defines whether the credentials bearer can receive messages from Queues queues.
   */
  canReceive?: boolean
  /**
   * Defines whether the credentials bearer can manage the associated Queues queues.
   */
  canManage?: boolean
}


export interface NatsAccount {
  /**
   * NATS account ID.
   */
  id: string
  /**
   * NATS account name.
   */
  name: string
  /**
   * Endpoint of the NATS service for this account.
   */
  endpoint: string
  /**
   * Project ID of the Project containing the NATS account.
   */
  projectId: string
  /**
   * Region where the NATS account is deployed.
   */
  region: ScwRegion
  /**
   * NATS account creation date.
   */
  createdAt?: Date
  /**
   * NATS account last modification date.
   */
  updatedAt?: Date
}


export interface NatsCredentials {
  /**
   * ID of the credentials.
   */
  id: string
  /**
   * Name of the credentials.
   */
  name: string
  /**
   * NATS account containing the credentials.
   */
  natsAccountId: string
  /**
   * Region where the NATS account is deployed.
   */
  region: ScwRegion
  /**
   * NATS credentials creation date.
   */
  createdAt?: Date
  /**
   * NATS credentials last modification date.
   */
  updatedAt?: Date
  /**
   * Object containing the credentials file (Only returned by **Create Nats Credentials** call).
   */
  credentials?: File
  /**
   * Checksum of the credentials file.
   */
  checksum: string
}


export interface SnsCredentials {
  /**
   * ID of the credentials.
   */
  id: string
  /**
   * Name of the credentials.
   */
  name: string
  /**
   * Project ID of the Project containing the credentials.
   */
  projectId: string
  /**
   * Region where the credentials exists.
   */
  region: ScwRegion
  /**
   * Credentials creation date.
   */
  createdAt?: Date
  /**
   * Credentials last modification date.
   */
  updatedAt?: Date
  /**
   * Access key ID.
   */
  accessKey: string
  /**
   * Secret key ID (Only returned by **Create Topics and Events Credentials** call).
   */
  secretKey: string
  /**
   * Checksum of the Secret key.
   */
  secretChecksum: string
  /**
   * Permissions associated with these credentials.
   */
  permissions?: SnsPermissions
}


export interface SqsCredentials {
  /**
   * ID of the credentials.
   */
  id: string
  /**
   * Name of the credentials.
   */
  name: string
  /**
   * Project ID of the Project containing the credentials.
   */
  projectId: string
  /**
   * Region where the credentials exists.
   */
  region: ScwRegion
  /**
   * Credentials creation date.
   */
  createdAt?: Date
  /**
   * Credentials last modification date.
   */
  updatedAt?: Date
  /**
   * Access key ID.
   */
  accessKey: string
  /**
   * Secret key ID (Only returned by **Create Queues Credentials** call).
   */
  secretKey: string
  /**
   * Checksum of the Secret key.
   */
  secretChecksum: string
  /**
   * Permissions associated with these credentials.
   */
  permissions?: SqsPermissions
}


export interface ListNatsAccountsResponse {
  /**
   * Total count of existing NATS accounts (matching any filters specified).
   */
  totalCount: number
  /**
   * NATS accounts on this page.
   */
  natsAccounts: NatsAccount[]
}


export interface ListNatsCredentialsResponse {
  /**
   * Total count of existing credentials (matching any filters specified).
   */
  totalCount: number
  /**
   * Credentials on this page.
   */
  natsCredentials: NatsCredentials[]
}


export interface ListSnsCredentialsResponse {
  /**
   * Total count of existing credentials (matching any filters specified).
   */
  totalCount: number
  /**
   * Topics and Events credentials on this page.
   */
  snsCredentials: SnsCredentials[]
}


export interface ListSqsCredentialsResponse {
  /**
   * Total count of existing credentials (matching any filters specified).
   */
  totalCount: number
  /**
   * Queues credentials on this page.
   */
  sqsCredentials: SqsCredentials[]
}


export type NatsApiCreateNatsAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * NATS account name.
   */
  name?: string
  /**
   * Project containing the NATS account.
   */
  projectId?: string
}


export type NatsApiCreateNatsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * NATS account containing the credentials.
   */
  natsAccountId: string
  /**
   * Name of the credentials.
   */
  name?: string
}


export type NatsApiDeleteNatsAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the NATS account to delete.
   */
  natsAccountId: string
}


export type NatsApiDeleteNatsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the credentials to delete.
   */
  natsCredentialsId: string
}


export type NatsApiGetNatsAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the NATS account to get.
   */
  natsAccountId: string
}


export type NatsApiGetNatsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the credentials to get.
   */
  natsCredentialsId: string
}


export type NatsApiListNatsAccountsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Include only NATS accounts in this Project.
   */
  projectId?: string
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of NATS accounts to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListNatsAccountsRequestOrderBy
}


export type NatsApiListNatsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Include only NATS accounts in this Project.
   */
  projectId?: string
  /**
   * Include only credentials for this NATS account.
   */
  natsAccountId?: string
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of credentials to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListNatsCredentialsRequestOrderBy
}


export type NatsApiUpdateNatsAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the NATS account to update.
   */
  natsAccountId: string
  /**
   * NATS account name.
   */
  name?: string
}


export type SnsApiActivateSnsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project on which to activate the Topics and Events service.
   */
  projectId?: string
}


export type SnsApiCreateSnsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project containing the Topics and Events credentials.
   */
  projectId?: string
  /**
   * Name of the credentials.
   */
  name?: string
  /**
   * Permissions associated with these credentials.
   */
  permissions?: SnsPermissions
}


export type SnsApiDeactivateSnsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project on which to deactivate the Topics and Events service.
   */
  projectId?: string
}


export type SnsApiDeleteSnsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the credentials to delete.
   */
  snsCredentialsId: string
}


export type SnsApiGetSnsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Topics and Events credentials to get.
   */
  snsCredentialsId: string
}


export type SnsApiGetSnsInfoRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project to retrieve Topics and Events info from.
   */
  projectId?: string
}


export type SnsApiListSnsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Include only Topics and Events credentials in this Project.
   */
  projectId?: string
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of credentials to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListSnsCredentialsRequestOrderBy
}


export type SnsApiUpdateSnsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Topics and Events credentials to update.
   */
  snsCredentialsId: string
  /**
   * Name of the credentials.
   */
  name?: string
  /**
   * Permissions associated with these credentials.
   */
  permissions?: SnsPermissions
}


export interface SnsInfo {
  /**
   * Project ID of the Project containing the service.
   */
  projectId: string
  /**
   * Region of the service.
   */
  region: ScwRegion
  /**
   * Topics and Events creation date.
   */
  createdAt?: Date
  /**
   * Topics and Events last modification date.
   */
  updatedAt?: Date
  /**
   * Topics and Events activation status.
   */
  status: SnsInfoStatus
  /**
   * Endpoint of the Topics and Events service for this region and project.
   */
  snsEndpointUrl: string
}


export type SqsApiActivateSqsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project on which to activate the Queues service.
   */
  projectId?: string
}


export type SqsApiCreateSqsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project containing the Queues credentials.
   */
  projectId?: string
  /**
   * Name of the credentials.
   */
  name?: string
  /**
   * Permissions associated with these credentials.
   */
  permissions?: SqsPermissions
}


export type SqsApiDeactivateSqsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project on which to deactivate the Queues service.
   */
  projectId?: string
}


export type SqsApiDeleteSqsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the credentials to delete.
   */
  sqsCredentialsId: string
}


export type SqsApiGetSqsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Queues credentials to get.
   */
  sqsCredentialsId: string
}


export type SqsApiGetSqsInfoRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project to retrieve Queues info from.
   */
  projectId?: string
}


export type SqsApiListSqsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Include only Queues credentials in this Project.
   */
  projectId?: string
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of credentials to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListSqsCredentialsRequestOrderBy
}


export type SqsApiUpdateSqsCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the Queues credentials to update.
   */
  sqsCredentialsId: string
  /**
   * Name of the credentials.
   */
  name?: string
  /**
   * Permissions associated with these credentials.
   */
  permissions?: SqsPermissions
}


export interface SqsInfo {
  /**
   * Project ID of the Project containing the service.
   */
  projectId: string
  /**
   * Region of the service.
   */
  region: ScwRegion
  /**
   * Queues creation date.
   */
  createdAt?: Date
  /**
   * Queues last modification date.
   */
  updatedAt?: Date
  /**
   * Queues activation status.
   */
  status: SqsInfoStatus
  /**
   * Endpoint of the Queues service for this region and project.
   */
  sqsEndpointUrl: string
}


