// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, } from '@scaleway/sdk-client'


export type DeploymentStatus =
  | 'unknown_status'
  | 'ready'
  | 'creating'
  | 'initializing'
  | 'upgrading'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'locking'
  | 'unlocking'

export type ListDeploymentsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListNodeTypesRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'vcpus_asc'
  | 'vcpus_desc'
  | 'memory_asc'
  | 'memory_desc'

export type ListUsersRequestOrderBy =
  | 'name_asc'
  | 'name_desc'

export type ListVersionsRequestOrderBy =
  | 'version_asc'
  | 'version_desc'

export type NodeTypeStockStatus =
  | 'unknown_stock'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type VolumeType =
  | 'unknown_type'
  | 'sbs_5k'
  | 'sbs_15k'

export interface EndpointPrivateNetworkDetails {
  privateNetworkId: string
}


export interface EndpointPublicDetails {
}


export interface EndpointService {
  name: string
  port: number
  url: string
}


export interface EndpointSpecPrivateNetworkDetails {
  privateNetworkId: string
}


export interface EndpointSpecPublicDetails {
}


export interface Endpoint {
  /**
   * Unique identifier of the endpoint.
   */
  id: string
  /**
   * @deprecated DNS record for service access. Now deprecated. Use the `url` field from `services` field instead.
   */
  dnsRecord?: string
  /**
   * List of available services, their ports and URLs.
   */
  services: EndpointService[]
  /**
   *
   * One-of ('details'): at most one of 'public', 'privateNetwork' could be set.
   */
  public?: EndpointPublicDetails
  /**
   *
   * One-of ('details'): at most one of 'public', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails
}


export interface Volume {
  /**
   * Type of the Volume.
   */
  type: VolumeType
  /**
   * Size of the Volume.
   */
  sizeBytes: number
}


export interface NodeTypeVolumeType {
  type: VolumeType
  description: string
  minSizeBytes: number
  maxSizeBytes: number
  chunkSizeBytes: number
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


export interface Deployment {
  /**
   * Unique identifier of the deployment.
   */
  id: string
  /**
   * Name of the deployment.
   */
  name: string
  /**
   * ID of the Organization containing the deployment.
   */
  organizationId: string
  /**
   * ID of the Project containing the deployment.
   */
  projectId: string
  /**
   * Status of the deployment.
   */
  status: DeploymentStatus
  /**
   * Tags of the deployment.
   */
  tags: string[]
  /**
   * Number of nodes.
   */
  nodeCount: number
  /**
   * Node type used.
   */
  nodeType: string
  /**
   * Volume type and size.
   */
  volume?: Volume
  /**
   * Exposed endpoints.
   */
  endpoints: Endpoint[]
  /**
   * Date the deployment was created.
   */
  createdAt?: Date
  /**
   * Date the deployment was last updated.
   */
  updatedAt?: Date
  /**
   * MessageQ version of the deployment.
   */
  version: string
  /**
   * Region of the deployment.
   */
  region: ScwRegion
}


export interface NodeType {
  /**
   * Stock status for the node type.
   */
  stockStatus: NodeTypeStockStatus
  /**
   * Name of the node type.
   */
  name: string
  /**
   * Description of the node type.
   */
  description: string
  /**
   * Number of vCPUs available.
   */
  vcpus: number
  /**
   * Amount of memory available.
   */
  memoryBytes: number
  /**
   * Defines whether the node type is disabled.
   */
  disabled: boolean
  /**
   * Defines whether the node type is in beta.
   */
  beta: boolean
  /**
   * Instance range associated with the node type offer.
   */
  instanceRange: string
  /**
   * Available storage options for the node type.
   */
  availableVolumeTypes: NodeTypeVolumeType[]
}


export interface User {
  username: string
}


export interface Version {
  /**
   * MessageQ version.
   */
  version: string
  /**
   * Date the version support ends.
   */
  endOfLife?: Date
  /**
   * Defines whether the version is disabled.
   */
  disabled: boolean
  /**
   * Defines whether the version is in beta.
   */
  beta: boolean
}


/**
 * Request to create a new deployment.
 */
export type CreateDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Project ID in which to create the deployment.
   */
  projectId?: string
  /**
   * Name of the deployment.
   */
  name: string
  /**
   * Tags.
   */
  tags?: string[]
  /**
   * Number of nodes.
   */
  nodeCount: number
  /**
   * Node type to use.
   */
  nodeType: string
  /**
   * Username for the deployment user.
   */
  userName?: string
  /**
   * Password for the deployment user.
   */
  password?: string
  /**
   * Volume for storing data.
   */
  volume?: Volume
  /**
   * Endpoints to access the deployment.
   */
  endpoints?: EndpointSpec[]
  /**
   * The MessageQ version to use.
   */
  version: string
}


/**
 * Create an endpoint for a specific deployment.
 */
export type CreateEndpointRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment.
   */
  deploymentId: string
  /**
   * Specification of the endpoint you want to create.
   */
  endpointSpec?: EndpointSpec
}


/**
 * Create a user for a deployment.
 */
export type CreateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment.
   */
  deploymentId: string
  /**
   * Username of the deployment user.
   */
  username: string
  /**
   * Password of the deployment user.
   */
  password: string
}


/**
 * Delete a deployment specified by the ID.
 */
export type DeleteDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment.
   */
  deploymentId: string
}


/**
 * Delete an endpoint from a specific deployment.
 */
export type DeleteEndpointRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the endpoint.
   */
  endpointId: string
}


/**
 * Delete a user from a deployment.
 */
export type DeleteUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment.
   */
  deploymentId: string
  /**
   * Username of the deployment user.
   */
  username: string
}


export type DownloadDeploymentCertificateAuthorityRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  deploymentId: string
}


/**
 * Retrieve a deployment specified by the ID.
 */
export type GetDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment.
   */
  deploymentId: string
}


/**
 * Retrieve a list of deployments.
 */
export type ListDeploymentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Organization ID to filter for, only deployments from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Project ID to filter for, only deployments from this Project will be returned.
   */
  projectId?: string
  /**
   * Sort order for deployments in the response.
   */
  orderBy?: ListDeploymentsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of deployments to return per page.
   */
  pageSize?: number
  /**
   * Tags to filter for, only deployments with one or more matching tags will be returned.
   */
  tags?: string[]
  /**
   * Deployment name to filter for, only deployments with this string within their name will be returned.
   */
  name?: string
}


export interface ListDeploymentsResponse {
  /**
   * List of deployments.
   */
  deployments: Deployment[]
  /**
   * Number of deployments in result set.
   */
  totalCount: number
}


/**
 * Retrieve a list of available node types for a MessageQ deployment.
 */
export type ListNodeTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order for versions in the response.
   */
  orderBy?: ListNodeTypesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of node types to return per page.
   */
  pageSize?: number
}


export interface ListNodeTypesResponse {
  /**
   * List of node types compatible.
   */
  nodeTypes: NodeType[]
  /**
   * Number of node types in result set.
   */
  totalCount: number
}


export type ListUsersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  deploymentId: string
  page?: number
  pageSize?: number
  orderBy?: ListUsersRequestOrderBy
  name?: string
}


export interface ListUsersResponse {
  users: User[]
  totalCount: number
}


/**
 * Retrieve a list of available versions.
 */
export type ListVersionsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order for versions in the response.
   */
  orderBy?: ListVersionsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of versions to return per page.
   */
  pageSize?: number
  /**
   * Engine version to filter for, only versions with this version will be returned.
   */
  version?: string
}


export interface ListVersionsResponse {
  /**
   * List of versions.
   */
  versions: Version[]
  /**
   * Number of versions in result set.
   */
  totalCount: number
}


export type UpdateDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment.
   */
  deploymentId: string
  /**
   * New name for the deployment.
   */
  name?: string
  /**
   * Tags to update.
   */
  tags?: string[]
}


/**
 * Update a deployment user.
 */
export type UpdateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment.
   */
  deploymentId: string
  /**
   * Username of the deployment user.
   */
  username: string
  /**
   * Password of the deployment user.
   */
  password?: string
}


export type UpgradeDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment.
   */
  deploymentId: string
  /**
   * Target number of nodes.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeCount', 'volumeSizeBytes' could be set.
   */
  nodeCount?: number
  /**
   * Target volume size.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeCount', 'volumeSizeBytes' could be set.
   */
  volumeSizeBytes?: number
}


