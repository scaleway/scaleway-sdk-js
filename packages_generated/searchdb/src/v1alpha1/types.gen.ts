// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

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

export type ListUsersRequestOrderBy = 'name_asc' | 'name_desc'

export type ListVersionsRequestOrderBy = 'version_asc' | 'version_desc'

export type NodeTypeStockStatus =
  | 'unknown_stock'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export type VolumeType = 'unknown_type' | 'sbs_5k' | 'sbs_15k'

export interface EndpointPrivateNetworkDetails {
  privateNetworkId: string
}

export interface EndpointPublicDetails {}

export interface EndpointService {
  name: string
  port: number
  url: string
}

export interface EndpointSpecPrivateNetworkDetails {
  privateNetworkId: string
}

export interface EndpointSpecPublicDetails {}

/**
 * Refers to an Endpoint.
 */
export interface Endpoint {
  /**
   * Unique identifier of the Endpoint.
   */
  id: string
  /**
   * @deprecated DNS entry to access to the service. Now deprecated. Use the `url` field from `services` field instead.
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

/**
 * Volume.
 */
export interface Volume {
  /**
   * Define the type of the Volume.
   */
  type: VolumeType
  /**
   * Define the size of the Volume.
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

/**
 * Refers to a Deployment.
 */
export interface Deployment {
  /**
   * Unique identifier of the Deployment.
   */
  id: string
  /**
   * Name of the Deployment.
   */
  name: string
  /**
   * ID of the Organization containing the Deployment.
   */
  organizationId: string
  /**
   * ID of the Project containing the Deployment.
   */
  projectId: string
  /**
   * Status of the Deployment.
   */
  status: DeploymentStatus
  /**
   * Tags of the Deployment.
   */
  tags: string[]
  /**
   * Number of nodes allocated per deployment.
   */
  nodeAmount: number
  /**
   * Node type used in deployment.
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
   * Creation date of the Deployment.
   */
  createdAt?: Date
  /**
   * Date when last update was done to the Deployment.
   */
  updatedAt?: Date
  /**
   * Opensearch version of the Deployment.
   */
  version: string
  /**
   * Region the Deployment is located.
   */
  region: ScwRegion
}

/**
 * Node type.
 */
export interface NodeType {
  /**
   * Stock status of the node type.
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
   * Instance range associated with the NodeType offer.
   */
  instanceRange: string
  /**
   * Available storage options for the Node Type.
   */
  availableVolumeTypes: NodeTypeVolumeType[]
}

export interface User {
  username: string
}

/**
 * Opensearch Version.
 */
export interface Version {
  /**
   * Opensearch Version.
   */
  version: string
  /**
   * End of life date of the version.
   */
  endOfLife?: Date
  /**
   * Parameter that tell if the version is disabled.
   */
  disabled: boolean
  /**
   * Parameter that tell if the version is in beta.
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
  nodeAmount: number
  /**
   * Node type.
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
   * Volume.
   */
  volume?: Volume
  /**
   * Endpoints to access the deployment.
   */
  endpoints?: EndpointSpec[]
  /**
   * The Opensearch version to use.
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
   * ID of the deployment for which to create an endpoint.
   */
  deploymentId: string
  /**
   * Specification of the endpoint you want to create.
   */
  endpointSpec?: EndpointSpec
}

/**
 * Create a user in an deployment.
 */
export type CreateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment in which to create the user.
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
   * ID of the endpoint to delete.
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
   * ID of the deployment in which to create the user.
   */
  deploymentId: string
  /**
   * Username of the deployment user.
   */
  username: string
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
   * ID of the Organization containing the deployments.
   */
  organizationId?: string
  /**
   * ID of the Project containing the deployments.
   */
  projectId?: string
  /**
   * Define the order of the returned deployments.
   */
  orderBy?: ListDeploymentsRequestOrderBy
  /**
   * The page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of deployments to return.
   */
  pageSize?: number
  /**
   * Filter by tag, only deployments with one or more matching tags will be returned.
   */
  tags?: string[]
  /**
   * Deployment name to filter for.
   */
  name?: string
  /**
   * Engine version to filter for.
   */
  version?: string
}

/**
 * Retrieve a list of deployments.
 */
export interface ListDeploymentsResponse {
  /**
   * List of deployments available.
   */
  deployments: Deployment[]
  /**
   * Total number of objects.
   */
  totalCount: number
}

/**
 * Retrieve a list of available node types for a Cloud Essentials for OpenSearch cluster.
 */
export type ListNodeTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Sort order of nodes in the response (name, vcpus or memory).
   */
  orderBy?: ListNodeTypesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of node types to return.
   */
  pageSize?: number
}

/**
 * Returns a list of node types available for a Cloud Essentials for OpenSearch cluster.
 */
export interface ListNodeTypesResponse {
  /**
   * Node types compatible with the cluster.
   */
  nodeTypes: NodeType[]
  /**
   * Number of available node types to return.
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
   * Define the order of the returned version.
   */
  orderBy?: ListVersionsRequestOrderBy
  /**
   * The page number to return, form the paginated results.
   */
  page?: number
  /**
   * Number of version to return.
   */
  pageSize?: number
  /**
   * Filter by version.
   */
  version?: string
}

/**
 * Retrieve a list of version.
 */
export interface ListVersionsResponse {
  /**
   * List of versions.
   */
  versions: Version[]
  /**
   * Number of versions in the list.
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
}

/**
 * Update a user in an deployment.
 */
export type UpdateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment in which to create the user.
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
   * UUID of the Deployment to upgrade.
   */
  deploymentId: string
  /**
   * Amount of node upgrade target.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeAmount', 'volumeSizeBytes' could be set.
   */
  nodeAmount?: number
  /**
   * Volume size upgrade target.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeAmount', 'volumeSizeBytes' could be set.
   */
  volumeSizeBytes?: number
}
