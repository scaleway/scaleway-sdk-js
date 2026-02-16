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

export type NodeTypeStock =
  | 'unknown_stock'
  | 'low_stock'
  | 'out_of_stock'
  | 'available'

export interface EndpointPrivateNetworkDetails {
  /**
   * ID of the Private Network.
   */
  privateNetworkId: string
}


export interface EndpointPublicAccessDetails {
}


export interface EndpointSpecPrivateNetwork {
  /**
   * ID of the Private Network.
   */
  privateNetworkId: string
}


export interface EndpointSpecPublic {
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
   * One-of ('details'): at most one of 'publicAccess', 'privateNetwork' could be set.
   */
  publicAccess?: EndpointPublicAccessDetails
  /**
   * Details of the Private Network.
   *
   * One-of ('details'): at most one of 'publicAccess', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointPrivateNetworkDetails
  /**
   * Defines whether the authentication is disabled.
   */
  disableAuth: boolean
}


export interface ModelS3Model {
  s3Url: string
  pythonDependencies: Record<string, string>
  nodeType?: string
  tritonServerVersion?: string
}


export interface ACLRuleRequest {
  /**
   * It can be specified as a single IP address or a range of IP addresses in CIDR notation.
   */
  ip: string
  /**
   * Description of the ACL rule.
   */
  description: string
}


export interface ACLRule {
  /**
   * Unique identifier.
   */
  id: string
  /**
   * Allowed IP address or CIDR range.
   */
  ip: string
  /**
   * Description of the ACL rule.
   */
  description: string
}


export interface EndpointSpec {
  /**
   * Set the endpoint as public.
   *
   * One-of ('spec'): at most one of 'public', 'privateNetwork' could be set.
   */
  public?: EndpointSpecPublic
  /**
   * Private endpoints are only accessible from the Private Network.
   *
   * One-of ('spec'): at most one of 'public', 'privateNetwork' could be set.
   */
  privateNetwork?: EndpointSpecPrivateNetwork
  /**
   * By default, deployments are protected by IAM authentication.
When setting this field to true, the authentication will be disabled.
   */
  disableAuth: boolean
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
  nodeType: string
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
   * The inference model used for the deployment.
   */
  modelName: string
  /**
   * ID of the model used for the deployment.
   */
  modelId: string
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
   * Name of the model provider.
   */
  provider: string
  /**
   * List of tags applied to the model.
   */
  tags: string[]
  /**
   * Purpose of the model.
   */
  description: string
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
   * Object Storage URL pointing to the model source weight.
   *
   * One-of ('source'): at most one of 's3Model' could be set.
   */
  s3Model?: ModelS3Model
  /**
   * Defines whether the model is public or not.
   */
  isPublic: boolean
  /**
   * Names of the node types compatible with the model.
   */
  compatibleNodeTypes: string[]
  /**
   * Quantization level of the model.
   */
  quantizationLevel: string
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


export type AddDeploymentACLRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment to add ACL rules to.
   */
  deploymentId: string
  /**
   * List of ACL rules to add.
   */
  acls?: ACLRuleRequest[]
}


export interface AddDeploymentACLRulesResponse {
  /**
   * List of ACL rules added.
   */
  rules: ACLRule[]
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
   * Name of the model to use.
   */
  modelName: string
  /**
   * If the model has an EULA, you must accept it before proceeding.
The terms of the EULA can be retrieved using the `GetModelEula` API call.
   */
  acceptEula?: boolean
  /**
   * Name of the node type to use.
   */
  nodeType: string
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


export type DeleteDeploymentACLRuleRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the ACL rule to delete.
   */
  aclId: string
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


export interface Eula {
  /**
   * Content of the end user license agreement.
   */
  content: string
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


export type GetModelEulaRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  modelId: string
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


export type ListDeploymentACLRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment to list ACL rules for.
   */
  deploymentId: string
  /**
   * Page number to return.
   */
  page?: number
  /**
   * Maximum number of ACL rules to return per page.
   */
  pageSize?: number
}


export interface ListDeploymentACLRulesResponse {
  /**
   * List of ACL rules on the current page.
   */
  rules: ACLRule[]
  /**
   * Total number of ACL rules.
   */
  totalCount: number
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


export type SetDeploymentACLRulesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the deployment to set ACL rules for.
   */
  deploymentId: string
  /**
   * All existing ACL rules will be replaced by the new ones.
   */
  acls?: ACLRuleRequest[]
}


export interface SetDeploymentACLRulesResponse {
  /**
   * List of ACL rules that were set.
   */
  rules: ACLRule[]
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


