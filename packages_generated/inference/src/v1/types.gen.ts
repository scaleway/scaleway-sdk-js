// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type DeploymentStatus =
  | 'unknown_status'
  | 'creating'
  | 'deploying'
  | 'ready'
  | 'error'
  | 'deleting'
  | 'locked'
  | 'scaling'

export type ListDeploymentsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'name_asc'
  | 'name_desc'

export type ListModelsRequestOrderBy =
  | 'display_rank_asc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ModelStatus =
  | 'unknown_status'
  | 'preparing'
  | 'downloading'
  | 'ready'
  | 'error'

export type NodeTypeStock =
  | 'unknown_stock'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export interface ModelSupportedQuantization {
  /**
   * Number of bits for this supported quantization.
   */
  quantizationBits: number
  /**
   * Tells whether this quantization is allowed for this node type.
   */
  allowed: boolean
  /**
   * Maximum inference context size available for this node type and quantization.
   */
  maxContextSize: number
}


export interface EndpointPrivateNetworkDetails {
  privateNetworkId: string
}


export interface EndpointPublicNetworkDetails {
}


export interface ModelSupportedNode {
  /**
   * Supported node type.
   */
  nodeTypeName: string
  /**
   * Supported quantizations.
   */
  quantizations: ModelSupportedQuantization[]
}


export interface DeploymentQuantization {
  /**
   * The number of bits each model parameter should be quantized to. The quantization method is chosen based on this value.
   */
  bits: number
}


export interface Endpoint {
  /**
   * Unique identifier.
   */
  id: string
  /**
   * For private endpoints, the URL will be accessible only from the Private Network.
In addition, private endpoints will expose a CA certificate that can be used to verify the server's identity.
This CA certificate can be retrieved using the `GetDeploymentCertificate` API call.
   */
  url: string
  /**
   * Defines whether the endpoint is public.
   *
   * One-of ('details'): at most one of 'publicNetwork', 'privateNetwork' could be set.
   */
  publicNetwork?: EndpointPublicNetworkDetails
  /**
   * Details of the Private Network.
   *
   * One-of ('details'): at most one of 'publicNetwork', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails
  /**
   * Defines whether the authentication is disabled.
   */
  disableAuth: boolean
}


export interface ModelSupportInfo {
  /**
   * List of supported node types.
   */
  nodes: ModelSupportedNode[]
}


export interface EndpointSpec {
  /**
   * Set the endpoint as public.
   *
   * One-of ('details'): at most one of 'publicNetwork', 'privateNetwork' could be set.
   */
  publicNetwork?: EndpointPublicNetworkDetails
  /**
   * Private endpoints are only accessible from the Private Network.
   *
   * One-of ('details'): at most one of 'publicNetwork', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails
  /**
   * By default, deployments are protected by IAM authentication.
When setting this field to true, the authentication will be disabled.
   */
  disableAuth: boolean
}


export interface ModelSource {
  url: string
  /**
   *
   * One-of ('credentials'): at most one of 'secret' could be set.
   */
  secret?: string
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
   * Node type of the deployment.
   */
  nodeTypeName: string
  /**
   * List of endpoints.
   */
  endpoints: Endpoint[]
  /**
   * Current size of the pool.
   */
  size: number
  /**
   * Defines the minimum size of the pool.
   */
  minSize: number
  /**
   * Defines the maximum size of the pool.
   */
  maxSize: number
  /**
   * Displays information if your deployment is in error state.
   */
  errorMessage?: string
  /**
   * ID of the model used for the deployment.
   */
  modelId: string
  /**
   * Quantization parameters for this deployment.
   */
  quantization?: DeploymentQuantization
  /**
   * Name of the deployed model.
   */
  modelName: string
  /**
   * Creation date of the deployment.
   */
  createdAt?: Date
  /**
   * Last modification date of the deployment.
   */
  updatedAt?: Date
  /**
   * Region of the deployment.
   */
  region: ScwRegion
}


export interface Model {
  /**
   * Unique identifier.
   */
  id: string
  /**
   * Unique Name identifier.
   */
  name: string
  /**
   * Project ID.
   */
  projectId: string
  /**
   * List of tags applied to the model.
   */
  tags: string[]
  /**
   * Status of the model.
   */
  status: ModelStatus
  /**
   * Purpose of the model.
   */
  description: string
  /**
   * Displays information if your model is in error state.
   */
  errorMessage?: string
  /**
   * Defines whether the model has an end user license agreement.
   */
  hasEula: boolean
  /**
   * Creation date of the model.
   */
  createdAt?: Date
  /**
   * Last modification date of the model.
   */
  updatedAt?: Date
  /**
   * Region of the model.
   */
  region: ScwRegion
  /**
   * Supported nodes types with quantization options and context lengths.
   */
  nodesSupport: ModelSupportInfo[]
  /**
   * Size, in bits, of the model parameters.
   */
  parameterSizeBits: number
  /**
   * Total size, in bytes, of the model files.
   */
  sizeBytes: number
}


export interface NodeType {
  /**
   * Name of the node type.
   */
  name: string
  /**
   * Current stock status for the node type.
   */
  stockStatus: NodeTypeStock
  /**
   * Current specs of the offer.
   */
  description: string
  /**
   * Number of virtual CPUs.
   */
  vcpus: number
  /**
   * Quantity of RAM.
   */
  memory: number
  /**
   * Quantity of GPU RAM.
   */
  vram: number
  /**
   * The node type is currently disabled.
   */
  disabled: boolean
  /**
   * The node type is currently in beta.
   */
  beta: boolean
  /**
   * Creation date of the node type.
   */
  createdAt?: Date
  /**
   * Last modification date of the node type.
   */
  updatedAt?: Date
  /**
   * Number of GPUs.
   */
  gpus: number
  /**
   * Region of the node type.
   */
  region: ScwRegion
}


export type CreateDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the deployment.
   */
  name?: string
  /**
   * ID of the Project to create the deployment in.
   */
  projectId?: string
  /**
   * ID of the model to use.
   */
  modelId: string
  /**
   * If the model has an EULA, you must accept it before proceeding.
The terms of the EULA can be retrieved using the `GetModelEula` API call.
   */
  acceptEula?: boolean
  /**
   * Name of the node type to use.
   */
  nodeTypeName: string
  /**
   * List of tags to apply to the deployment.
   */
  tags?: string[]
  /**
   * Defines the minimum size of the pool.
   */
  minSize?: number
  /**
   * Defines the maximum size of the pool.
   */
  maxSize?: number
  /**
   * List of endpoints to create.
   */
  endpoints: EndpointSpec[]
  /**
   * Quantization settings to apply to this deployment.
   */
  quantization?: DeploymentQuantization
}


export type CreateEndpointRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment to create the endpoint for.
   */
  deploymentId: string
  /**
   * Specification of the endpoint.
   */
  endpoint: EndpointSpec
}


export type CreateModelRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the model.
   */
  name?: string
  /**
   * ID of the Project to import the model in.
   */
  projectId?: string
  /**
   * Where to import the model from.
   */
  source: ModelSource
}


export type DeleteDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment to delete.
   */
  deploymentId: string
}


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


export type DeleteModelRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the model to delete.
   */
  modelId: string
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
   * ID of the deployment to get.
   */
  deploymentId: string
}


export type GetModelRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the model to get.
   */
  modelId: string
}


export type ListDeploymentsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of deployments to return per page.
   */
  pageSize?: number
  /**
   * Order in which to return results.
   */
  orderBy?: ListDeploymentsRequestOrderBy
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Filter by deployment name.
   */
  name?: string
  /**
   * Filter by tags.
   */
  tags?: string[]
}


export interface ListDeploymentsResponse {
  /**
   * List of deployments on the current page.
   */
  deployments: Deployment[]
  /**
   * Total number of deployments.
   */
  totalCount: number
}


export type ListModelsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Order in which to return results.
   */
  orderBy?: ListModelsRequestOrderBy
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of models to return per page.
   */
  pageSize?: number
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by model name.
   */
  name?: string
  /**
   * Filter by tags.
   */
  tags?: string[]
}


export interface ListModelsResponse {
  /**
   * List of models on the current page.
   */
  models: Model[]
  /**
   * Total number of models.
   */
  totalCount: number
}


export type ListNodeTypesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of node types to return per page.
   */
  pageSize?: number
  /**
   * Include disabled node types in the response.
   */
  includeDisabledTypes: boolean
}


export interface ListNodeTypesResponse {
  /**
   * List of node types.
   */
  nodeTypes: NodeType[]
  /**
   * Total number of node types.
   */
  totalCount: number
}


export type UpdateDeploymentRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment to update.
   */
  deploymentId: string
  /**
   * Name of the deployment.
   */
  name?: string
  /**
   * List of tags to apply to the deployment.
   */
  tags?: string[]
  /**
   * Defines the new minimum size of the pool.
   */
  minSize?: number
  /**
   * Defines the new maximum size of the pool.
   */
  maxSize?: number
  /**
   * Id of the model to set to the deployment.
   */
  modelId?: string
  /**
   * Quantization to use to the deployment.
   */
  quantization?: DeploymentQuantization
}


export type UpdateEndpointRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the endpoint to update.
   */
  endpointId: string
  /**
   * By default, deployments are protected by IAM authentication.
When setting this field to true, the authentication will be disabled.
   */
  disableAuth?: boolean
}


