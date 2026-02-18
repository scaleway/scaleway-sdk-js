
import type {LanguageCode as StdLanguageCode,} from '@scaleway/sdk-std'


export type ContractType =
  | 'unknown_type'
  | 'global'
  | 'k8s'
  | 'instance'
  | 'container'
  | 'baremetal'
  | 'network'
  | 'core'

export type ListContractSignaturesRequestOrderBy =
  | 'signed_at_asc'
  | 'signed_at_desc'
  | 'expires_at_asc'
  | 'expires_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListProjectsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type QualificationAiMachineSubUseCase =
  | 'unknown_sub_use_case'

export type QualificationArchitectureType =
  | 'unknown_architecture_type'
  | 'object_storage'
  | 'web_hosting'
  | 'instance'
  | 'elastic'
  | 'kubernetes'
  | 'serverless'
  | 'dedicated_server'
  | 'other_architecture_type'

export type QualificationArchiveDataSubUseCase =
  | 'unknown_sub_use_case'

export type QualificationContainerSubUseCase =
  | 'unknown_sub_use_case'

export type QualificationDeploySoftwareSubUseCase =
  | 'unknown_sub_use_case'

export type QualificationHostApplicationSubUseCase =
  | 'unknown_sub_use_case'
  | 'saas_app'
  | 'government_app'

export type QualificationHostWebsiteSubUseCase =
  | 'unknown_sub_use_case'
  | 'information_website'
  | 'ecommerce_website'
  | 'high_website'
  | 'other_sub_use_case'

export type QualificationOtherUseCaseSubUseCase =
  | 'unknown_sub_use_case'

export type QualificationSetScalewayEnvironmentSubUseCase =
  | 'unknown_sub_use_case'

export type QualificationShareDataSubUseCase =
  | 'unknown_sub_use_case'

export interface QualificationAiMachine {
  subUseCase: QualificationAiMachineSubUseCase
}


export interface QualificationArchiveData {
  subUseCase: QualificationArchiveDataSubUseCase
}


export interface QualificationContainer {
  subUseCase: QualificationContainerSubUseCase
}


export interface QualificationDeploySoftware {
  subUseCase: QualificationDeploySoftwareSubUseCase
}


export interface QualificationHostApplication {
  subUseCase: QualificationHostApplicationSubUseCase
}


export interface QualificationHostWebsite {
  subUseCase: QualificationHostWebsiteSubUseCase
}


export interface QualificationOtherUseCase {
  subUseCase: QualificationOtherUseCaseSubUseCase
}


export interface QualificationSetScalewayEnvironment {
  subUseCase: QualificationSetScalewayEnvironmentSubUseCase
}


export interface QualificationShareData {
  subUseCase: QualificationShareDataSubUseCase
}


export interface Contract {
  /**
   * ID of the contract.
   */
  id: string
  /**
   * The type of the contract.
   */
  type: ContractType
  /**
   * The name of the contract.
   */
  name: string
  /**
   * The version of the contract.
   */
  version: number
  /**
   * The creation date of the contract.
   */
  createdAt?: Date
  /**
   * The last modification date of the contract.
   */
  updatedAt?: Date
}


export interface Qualification {
  /**
   * Architecture type of the qualification.
   */
  architectureType: QualificationArchitectureType
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  hostWebsite?: QualificationHostWebsite
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  hostApplication?: QualificationHostApplication
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  deploySoftware?: QualificationDeploySoftware
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  setScalewayEnvironment?: QualificationSetScalewayEnvironment
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  aiMachine?: QualificationAiMachine
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  container?: QualificationContainer
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  archiveData?: QualificationArchiveData
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  shareData?: QualificationShareData
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  otherUseCase?: QualificationOtherUseCase
}


export interface ContractSignature {
  /**
   * ID of the contract signature.
   */
  id: string
  /**
   * The Organization ID which signed the contract.
   */
  organizationId: string
  /**
   * The creation date of the contract signature.
   */
  createdAt?: Date
  /**
   * The signing date of the contract signature.
   */
  signedAt?: Date
  /**
   * The expiration date of the contract signature.
   */
  expiresAt?: Date
  /**
   * The contract signed.
   */
  contract?: Contract
}


export interface Project {
  /**
   * ID of the Project.
   */
  id: string
  /**
   * Name of the Project.
   */
  name: string
  /**
   * Organization ID of the Project.
   */
  organizationId: string
  /**
   * Creation date of the Project.
   */
  createdAt?: Date
  /**
   * Update date of the Project.
   */
  updatedAt?: Date
  /**
   * Description of the Project.
   */
  description: string
  /**
   * Qualification of the Project.
   */
  qualification?: Qualification
}


export interface CheckContractSignatureResponse {
  /**
   * Whether a signature has been requested for this contract.
   */
  created: boolean
  /**
   * Whether the signature for this contract has been validated.
   */
  validated: boolean
}


export type ContractApiCheckContractSignatureRequest = {
  /**
   * ID of the Organization to check the contract signature for.
   */
  organizationId?: string
  /**
   * Filter on contract type.
   */
  contractType?: ContractType
  /**
   * Filter on contract name.
   */
  contractName: string
}


export type ContractApiCreateContractSignatureRequest = {
  /**
   * The type of the contract.
   */
  contractType?: ContractType
  /**
   * The name of the contract.
   */
  contractName: string
  /**
   * Whether the contract is validated at creation.
   */
  validated: boolean
  /**
   * ID of the Organization.
   */
  organizationId?: string
}


export type ContractApiDownloadContractSignatureRequest = {
  /**
   * The contract signature ID.
   */
  contractSignatureId: string
  /**
   * The locale requested for the content of the contract.
   */
  locale?: StdLanguageCode
}


export type ContractApiListContractSignaturesRequest = {
  /**
   * The page number for the returned contracts.
   */
  page?: number
  /**
   * The maximum number of contracts per page.
   */
  pageSize?: number
  /**
   * How the contracts are ordered in the response.
   */
  orderBy?: ListContractSignaturesRequestOrderBy
  /**
   * Filter on Organization ID.
   */
  organizationId?: string
}


export type ContractApiValidateContractSignatureRequest = {
  /**
   * The contract linked to your Organization you want to sign.
   */
  contractSignatureId: string
}


export interface ListContractSignaturesResponse {
  /**
   * The total number of contract signatures.
   */
  totalCount: number
  /**
   * The paginated returned contract signatures.
   */
  contractSignatures: ContractSignature[]
}


export interface ListProjectsResponse {
  /**
   * Total number of Projects.
   */
  totalCount: number
  /**
   * Paginated returned Projects.
   */
  projects: Project[]
}


export type ProjectApiCreateProjectRequest = {
  /**
   * Name of the Project.
   */
  name?: string
  /**
   * Organization ID of the Project.
   */
  organizationId?: string
  /**
   * Description of the Project.
   */
  description: string
}


export type ProjectApiDeleteProjectRequest = {
  /**
   * Project ID of the Project.
   */
  projectId?: string
}


export type ProjectApiGetProjectRequest = {
  /**
   * Project ID of the Project.
   */
  projectId?: string
}


export type ProjectApiListProjectsRequest = {
  /**
   * Organization ID of the Project.
   */
  organizationId?: string
  /**
   * Name of the Project.
   */
  name?: string
  /**
   * Page number for the returned Projects.
   */
  page?: number
  /**
   * Maximum number of Project per page.
   */
  pageSize?: number
  /**
   * Sort order of the returned Projects.
   */
  orderBy?: ListProjectsRequestOrderBy
  /**
   * Project IDs to filter for. The results will be limited to any Projects with an ID in this array.
   */
  projectIds?: string[]
}


export type ProjectApiSetProjectQualificationRequest = {
  /**
   * Project ID.
   */
  projectId?: string
  /**
   * Use case chosen for the Project.
   */
  qualification?: Qualification
}


export type ProjectApiUpdateProjectRequest = {
  /**
   * Project ID of the Project.
   */
  projectId?: string
  /**
   * Name of the Project.
   */
  name?: string
  /**
   * Description of the Project.
   */
  description?: string
}


export interface ProjectQualification {
  /**
   * Project ID.
   */
  projectId: string
  /**
   * Qualification of the Project.
   */
  qualification?: Qualification
}


