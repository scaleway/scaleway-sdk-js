// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'
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
  | 'vps'
  | 'storage'
  | 'transactional_email'

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

export type ProjectStatus =
  | 'unknown_status'
  | 'active'
  | 'deleting'

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
  createdAt?: Date | null
  /**
   * The last modification date of the contract.
   */
  updatedAt?: Date | null
  /**
   * The SRN of the contract.
   */
  srn: string
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
  hostWebsite?: QualificationHostWebsite | null
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  hostApplication?: QualificationHostApplication | null
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  deploySoftware?: QualificationDeploySoftware | null
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  setScalewayEnvironment?: QualificationSetScalewayEnvironment | null
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  aiMachine?: QualificationAiMachine | null
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  container?: QualificationContainer | null
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  archiveData?: QualificationArchiveData | null
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  shareData?: QualificationShareData | null
  /**
   *
   * One-of ('useCase'): at most one of 'hostWebsite', 'hostApplication', 'deploySoftware', 'setScalewayEnvironment', 'aiMachine', 'container', 'archiveData', 'shareData', 'otherUseCase' could be set.
   */
  otherUseCase?: QualificationOtherUseCase | null
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
  createdAt?: Date | null
  /**
   * The signing date of the contract signature.
   */
  signedAt?: Date | null
  /**
   * The expiration date of the contract signature.
   */
  expiresAt?: Date | null
  /**
   * The contract signed.
   */
  contract?: Contract | null
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
  createdAt?: Date | null
  /**
   * Update date of the Project.
   */
  updatedAt?: Date | null
  /**
   * Description of the Project.
   */
  description: string
  /**
   * Qualification of the Project.
   */
  qualification?: Qualification | null
  /**
   * Status of the Project.
   */
  status: ProjectStatus
  /**
   * The SRN of the Project.
   */
  srn: string
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
  organizationId?: string | null
  /**
   * Filter on contract type.
   */
  contractType?: ContractType | null
  /**
   * Filter on contract name.
   */
  contractName: string
}


export type ContractApiCreateContractSignatureRequest = {
  /**
   * The type of the contract.
   */
  contractType?: ContractType | null
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
  organizationId?: string | null
}


export type ContractApiDownloadContractSignatureRequest = {
  /**
   * The contract signature ID.
   */
  contractSignatureId: string
  /**
   * The locale requested for the content of the contract.
   */
  locale?: StdLanguageCode | null
}


export type ContractApiListContractSignaturesRequest = {
  /**
   * The page number for the returned contracts.
   */
  page?: number | null
  /**
   * The maximum number of contracts per page.
   */
  pageSize?: number | null
  /**
   * How the contracts are ordered in the response.
   */
  orderBy?: ListContractSignaturesRequestOrderBy | null
  /**
   * Filter on Organization ID.
   */
  organizationId?: string | null
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
  name?: string | null
  /**
   * Organization ID of the Project.
   */
  organizationId?: string | null
  /**
   * Description of the Project.
   */
  description: string
}


export type ProjectApiDeleteProjectRequest = {
  /**
   * Project ID of the Project.
   */
  projectId?: string | null
}


export type ProjectApiDeleteProjectWithResourcesRequest = {
  /**
   * Project ID of the Project.
   */
  projectId?: string | null
  /**
   * Name of the Project to delete. This is used as a safeguard confirmation.
   */
  projectName: string
}


export type ProjectApiGetProjectRequest = {
  /**
   * Project ID of the Project.
   */
  projectId?: string | null
}


export type ProjectApiListProjectsRequest = {
  /**
   * Organization ID of the Project.
   */
  organizationId?: string | null
  /**
   * Name of the Project.
   */
  name?: string | null
  /**
   * Page number for the returned Projects.
   */
  page?: number | null
  /**
   * Maximum number of Project per page.
   */
  pageSize?: number | null
  /**
   * Sort order of the returned Projects.
   */
  orderBy?: ListProjectsRequestOrderBy | null
  /**
   * Project IDs to filter for. The results will be limited to any Projects with an ID in this array.
   */
  projectIds?: string[] | null
}


export type ProjectApiSetProjectQualificationRequest = {
  /**
   * Project ID.
   */
  projectId?: string | null
  /**
   * Use case chosen for the Project.
   */
  qualification?: Qualification | null
}


export type ProjectApiUpdateProjectRequest = {
  /**
   * Project ID of the Project.
   */
  projectId?: string | null
  /**
   * Name of the Project.
   */
  name?: string | null
  /**
   * Description of the Project.
   */
  description?: string | null
}


export interface ProjectQualification {
  /**
   * Project ID.
   */
  projectId: string
  /**
   * Qualification of the Project.
   */
  qualification?: Qualification | null
}


