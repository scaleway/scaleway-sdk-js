// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


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
  dnsRecord?: string | null
  /**
   * List of available services, their ports and URLs.
   */
  services: EndpointService[]
  /**
   * Region of the Endpoint.
   */
  region: ScwRegion
  /**
   * The SRN of the Endpoint.
   */
  srn: string
  /**
   *
   * One-of ('details'): at most one of 'public', 'privateNetwork' could be set.
   */
  public?: EndpointPublicDetails | null
  /**
   *
   * One-of ('details'): at most one of 'public', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails | null
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
  public?: EndpointSpecPublicDetails | null
  /**
   *
   * One-of ('details'): at most one of 'public', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetworkDetails | null
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
   * @deprecated DEPRECATED: Use node_count instead. Number of nodes allocated per deployment.
   */
  nodeAmount: number
  /**
   * Number of nodes allocated per deployment.
   */
  nodeCount: number
  /**
   * Node type used in deployment.
   */
  nodeType: string
  /**
   * Volume type and size.
   */
  volume?: Volume | null
  /**
   * Exposed endpoints.
   */
  endpoints: Endpoint[]
  /**
   * Creation date of the Deployment.
   */
  createdAt?: Date | null
  /**
   * Date when last update was done to the Deployment.
   */
  updatedAt?: Date | null
  /**
   * Opensearch version of the Deployment.
   */
  version: string
  /**
   * Region the Deployment is located.
   */
  region: ScwRegion
  /**
   * The SRN of the Deployment.
   */
  srn: string
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
  /**
   * Region of the node type.
   */
  region: ScwRegion
  /**
   * The SRN of the node type.
   */
  srn: string
}


/**
 * User.
 */
export interface User {
  /**
   * Username of the Deployment user.
   */
  username: string
  /**
   * ID of the Deployment.
   */
  deploymentId: string
  /**
   * Region of the user.
   */
  region: ScwRegion
  /**
   * The SRN of the user.
   */
  srn: string
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
  endOfLife?: Date | null
  /**
   * Parameter that tell if the version is disabled.
   */
  disabled: boolean
  /**
   * Parameter that tell if the version is in beta.
   */
  beta: boolean
  /**
   * Region of the version.
   */
  region: ScwRegion
  /**
   * The SRN of the version.
   */
  srn: string
}


/**
 * Request to create a new deployment.
 */
export type CreateDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * Project ID in which to create the deployment.
   */
  projectId?: string | null
  /**
   * Name of the deployment.
   */
  name: string
  /**
   * Tags.
   */
  tags?: string[] | null
  /**
   * @deprecated DEPRECATED: Use node_count instead. Number of nodes.
   */
  nodeAmount?: number | null
  /**
   * Number of nodes.
   */
  nodeCount?: number | null
  /**
   * Node type.
   */
  nodeType: string
  /**
   * Username for the deployment user.
   */
  userName?: string | null
  /**
   * Password for the deployment user.
   */
  password?: string | null
  /**
   * Volume.
   */
  volume?: Volume | null
  /**
   * Endpoints to access the deployment.
   */
  endpoints?: EndpointSpec[] | null
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
  region?: ScwRegion | null
  /**
   * ID of the deployment for which to create an endpoint.
   */
  deploymentId: string
  /**
   * Specification of the endpoint you want to create.
   */
  endpointSpec?: EndpointSpec | null
}


/**
 * Create a user in an deployment.
 */
export type CreateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
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
  region?: ScwRegion | null
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
  region?: ScwRegion | null
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
  region?: ScwRegion | null
  /**
   * ID of the deployment in which to create the user.
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
  region?: ScwRegion | null
  deploymentId: string
}


/**
 * Retrieve a deployment specified by the ID.
 */
export type GetDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
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
  region?: ScwRegion | null
  /**
   * ID of the Organization containing the deployments.
   */
  organizationId?: string | null
  /**
   * ID of the Project containing the deployments.
   */
  projectId?: string | null
  /**
   * Define the order of the returned deployments.
   */
  orderBy?: ListDeploymentsRequestOrderBy | null
  /**
   * The page number to return, from the paginated results.
   */
  page?: number | null
  /**
   * Number of deployments to return.
   */
  pageSize?: number | null
  /**
   * Filter by tag, only deployments with one or more matching tags will be returned.
   */
  tags?: string[] | null
  /**
   * Deployment name to filter for.
   */
  name?: string | null
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
  region?: ScwRegion | null
  /**
   * Sort order of nodes in the response (name, vcpus or memory).
   */
  orderBy?: ListNodeTypesRequestOrderBy | null
  /**
   * Page number to return, from the paginated results.
   */
  page?: number | null
  /**
   * Number of node types to return.
   */
  pageSize?: number | null
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
  region?: ScwRegion | null
  deploymentId: string
  page?: number | null
  pageSize?: number | null
  orderBy?: ListUsersRequestOrderBy | null
  name?: string | null
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
  region?: ScwRegion | null
  /**
   * Define the order of the returned version.
   */
  orderBy?: ListVersionsRequestOrderBy | null
  /**
   * The page number to return, form the paginated results.
   */
  page?: number | null
  /**
   * Number of version to return.
   */
  pageSize?: number | null
  /**
   * Filter by version.
   */
  version?: string | null
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
  region?: ScwRegion | null
  /**
   * UUID of the deployment to update.
   */
  deploymentId: string
  /**
   * Name of the deployment.
   */
  name?: string | null
  /**
   * Tags of a deployment.
   */
  tags?: string[] | null
}


/**
 * Update a user in an deployment.
 */
export type UpdateUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
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
  password?: string | null
}


export type UpgradeDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion | null
  /**
   * UUID of the Deployment to upgrade.
   */
  deploymentId: string
  /**
   * @deprecated DEPRECATED: Use node_count instead. Amount of node upgrade target.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeAmount', 'nodeCount', 'volumeSizeBytes' could be set.
   */
  nodeAmount?: number | null
  /**
   * The target number of nodes for the upgrade.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeAmount', 'nodeCount', 'volumeSizeBytes' could be set.
   */
  nodeCount?: number | null
  /**
   * Volume size upgrade target.
   *
   * One-of ('upgradeTarget'): at most one of 'nodeAmount', 'nodeCount', 'volumeSizeBytes' could be set.
   */
  volumeSizeBytes?: number | null
}


