// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type DeploymentStatus =
  | 'unknown_status'
  | 'ready'
  | 'creating'
  | 'configuring'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'locking'
  | 'unlocking'
  | 'deploying'

export type EndpointServiceProtocol =
  | 'unknown_protocol'
  | 'tcp'
  | 'https'
  | 'mysql'

export type ListDatabasesRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'size_asc'
  | 'size_desc'

export type ListDeploymentsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'name_asc'
  | 'name_desc'

export type ListUsersRequestOrderBy = 'name_asc' | 'name_desc'

export interface EndpointPrivateNetworkDetails {
  privateNetworkId: string
}

export interface EndpointPublicDetails {}

export interface EndpointService {
  protocol: EndpointServiceProtocol
  port: number
}

export interface EndpointSpecPrivateNetworkDetails {
  /**
   * UUID of the Private Network.
   */
  privateNetworkId: string
}

export interface EndpointSpecPublicDetails {}

export interface Endpoint {
  /**
   * Unique identifier of the endpoint.
   */
  id: string
  /**
   * DNS record associated with the endpoint.
   */
  dnsRecord: string
  /**
   * List of services associated with the endpoint.
   */
  services: EndpointService[]
  /**
   * Private Network endpoint details.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'public' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails
  /**
   * Public endpoint details.
   *
   * One-of ('details'): at most one of 'privateNetwork', 'public' could be set.
   */
  public?: EndpointPublicDetails
}

export interface EndpointSpec {
  /**
   *
   * One-of ('details'): at most one of 'public', 'privateNetwork' could be set.
   */
  public?: EndpointSpecPublicDetails
  /**
   *
   * One-of ('details'): at most one of 'public', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetworkDetails
}

export interface Database {
  /**
   * Name of the database.
   */
  name: string
  /**
   * Size of the database.
   */
  size: number
}

export interface Deployment {
  /**
   * Unique identifier.
   */
  id: string
  /**
   * Name of the deployment.
   */
  name: string
  /**
   * Organization ID.
   */
  organizationId: string
  /**
   * Project ID.
   */
  projectId: string
  /**
   * Status of the deployment.
   */
  status: DeploymentStatus
  /**
   * List of tags applied to the deployment.
   */
  tags: string[]
  /**
   * Creation date of the deployment.
   */
  createdAt?: Date
  /**
   * Last modification date of the deployment.
   */
  updatedAt?: Date
  /**
   * ClickHouse® version.
   */
  version: string
  /**
   * Number of replicas for the deployment.
   */
  replicaCount: number
  /**
   * Minimum CPU count for the deployment.
   */
  cpuMin: number
  /**
   * Maximum CPU count for the deployment.
   */
  cpuMax: number
  /**
   * List of endpoints associated with the deployment.
   */
  endpoints: Endpoint[]
  /**
   * RAM per CPU count for the deployment (in GB).
   */
  ramPerCpu: number
  /**
   * Region of the deployment.
   */
  region: ScwRegion
}

export interface Preset {
  /**
   * Name of the preset.
   */
  name: string
  /**
   * Category of the preset.
   */
  category: string
  /**
   * Minimum CPU count for the preset.
   */
  cpuMin: number
  /**
   * Maximum CPU count for the preset.
   */
  cpuMax: number
  /**
   * RAM per CPU count for the preset (in GB).
   */
  ramPerCpu: number
  /**
   * Number of replicas for the preset.
   */
  replicaCount: number
}

export interface User {
  /**
   * Name of the user.
   */
  name: string
  /**
   * Indicates if the user is an administrator.
   */
  isAdmin: boolean
}

export interface Version {
  /**
   * Deployment version.
   */
  version: string
  /**
   * Date of End of Life.
   */
  endOfLifeAt?: Date
}

export type CreateDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
  /**
   * Name of the database.
   */
  name: string
}

export type CreateDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * The Project ID on which the deployment will be created.
   */
  projectId?: string
  /**
   * Name of the deployment.
   */
  name: string
  /**
   * Tags to apply to the deployment.
   */
  tags?: string[]
  /**
   * ClickHouse® version to use for the deployment.
   */
  version: string
  /**
   * Number of replicas for the deployment.
   */
  replicaCount: number
  /**
   * Password for the initial user.
   */
  password: string
  /**
   * Minimum CPU count for the deployment.
   */
  cpuMin: number
  /**
   * Maximum CPU count for the deployment.
   */
  cpuMax: number
  /**
   * Endpoints to associate with the deployment.
   */
  endpoints?: EndpointSpec[]
  /**
   * RAM per CPU count for the deployment (in GB).
   */
  ramPerCpu: number
}

export type CreateEndpointRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
  /**
   * Endpoint specification.
   */
  endpoint?: EndpointSpec
}

export type CreateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
  /**
   * Name of the user.
   */
  name: string
  /**
   * Password for the user.
   */
  password: string
  /**
   * Indicates if the user is an administrator.
   */
  isAdmin: boolean
}

export type DeleteDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
  /**
   * Name of the database to delete.
   */
  name: string
}

export type DeleteDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment to delete.
   */
  deploymentId: string
}

export type DeleteEndpointRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the Endpoint to delete.
   */
  endpointId: string
}

export type DeleteUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
  /**
   * Name of the user to delete.
   */
  name: string
}

export type GetDeploymentCertificateRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  deploymentId: string
}

export type GetDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
}

export type ListDatabasesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
  /**
   * Name of the database to filter by.
   */
  name?: string
  /**
   * Criteria to use when ordering database listings.
   */
  orderBy?: ListDatabasesRequestOrderBy
  page?: number
  pageSize?: number
}

export interface ListDatabasesResponse {
  /**
   * List of databases associated with the deployment.
   */
  databases: Database[]
  /**
   * Total count of databases associated with the deployment.
   */
  totalCount: number
}

export type ListDeploymentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * List deployments with a given tag.
   */
  tags?: string[]
  /**
   * Lists deployments that match a name pattern.
   */
  name?: string
  /**
   * Criteria to use when ordering deployment listings.
   */
  orderBy?: ListDeploymentsRequestOrderBy
  /**
   * Organization ID the deployment belongs to.
   */
  organizationId?: string
  /**
   * Project ID the deployment belongs to.
   */
  projectId?: string
  page?: number
  pageSize?: number
}

export interface ListDeploymentsResponse {
  /**
   * List of all deployments available in an Organization or Project.
   */
  deployments: Deployment[]
  /**
   * Total count of deployments available in an Organization or Project.
   */
  totalCount: number
}

export type ListPresetsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  page?: number
  pageSize?: number
}

export interface ListPresetsResponse {
  /**
   * List of available presets.
   */
  presets: Preset[]
  /**
   * Total count of presets available.
   */
  totalCount: number
}

export type ListUsersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
  /**
   * Name of the user to filter by.
   */
  name?: string
  /**
   * Criteria to use when ordering user listings.
   */
  orderBy?: ListUsersRequestOrderBy
  page?: number
  pageSize?: number
}

export interface ListUsersResponse {
  /**
   * List of users associated with the deployment.
   */
  users: User[]
  /**
   * Total count of users associated with the deployment.
   */
  totalCount: number
}

export type ListVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  version?: string
  page?: number
  pageSize?: number
}

export interface ListVersionsResponse {
  /**
   * Available deployment version.
   */
  versions: Version[]
  /**
   * Total count of deployment version available.
   */
  totalCount: number
}

export type UpdateDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment to update.
   */
  deploymentId: string
  /**
   * Name of the deployment.
   */
  name?: string
  /**
   * Tags of a deployment.
   */
  tags?: string[]
  /**
   * Minimum CPU count for the deployment.
   */
  cpuMin?: number
  /**
   * Maximum CPU count for the deployment.
   */
  cpuMax?: number
  /**
   * Number of replicas for the deployment.
   */
  replicaCount?: number
}

export type UpdateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the deployment.
   */
  deploymentId: string
  /**
   * Name of the user.
   */
  name: string
  /**
   * New password for the user.
   */
  password?: string
  /**
   * Updates the user administrator permissions.
   */
  isAdmin?: boolean
}
