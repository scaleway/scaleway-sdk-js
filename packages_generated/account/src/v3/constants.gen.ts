// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ContractType,
  ListContractSignaturesRequestOrderBy,
  ListProjectsRequestOrderBy,
  ProjectStatus,
  QualificationAiMachineSubUseCase,
  QualificationArchitectureType,
  QualificationArchiveDataSubUseCase,
  QualificationContainerSubUseCase,
  QualificationDeploySoftwareSubUseCase,
  QualificationHostApplicationSubUseCase,
  QualificationHostWebsiteSubUseCase,
  QualificationOtherUseCaseSubUseCase,
  QualificationSetScalewayEnvironmentSubUseCase,
  QualificationShareDataSubUseCase,
} from './types.gen.js'


/** Lists all values of the enum {@link ContractType}. */
export const CONTRACT_TYPES: ContractType[] = [
  'unknown_type',
  'global',
  'k8s',
  'instance',
  'container',
  'baremetal',
  'network',
  'core',
  'vps',
  'storage',
  'transactional_email',
]

/** Lists all values of the enum {@link ListContractSignaturesRequestOrderBy}. */
export const LIST_CONTRACT_SIGNATURES_REQUEST_ORDER_BIES: ListContractSignaturesRequestOrderBy[] = [
  'signed_at_asc',
  'signed_at_desc',
  'expires_at_asc',
  'expires_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListProjectsRequestOrderBy}. */
export const LIST_PROJECTS_REQUEST_ORDER_BIES: ListProjectsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ProjectStatus}. */
export const PROJECT_STATUSES: ProjectStatus[] = [
  'unknown_status',
  'active',
  'deleting',
]

/** Lists all values of the enum {@link QualificationAiMachineSubUseCase}. */
export const QUALIFICATION_AI_MACHINE_SUB_USE_CASES: QualificationAiMachineSubUseCase[] = [
  'unknown_sub_use_case',
]

/** Lists all values of the enum {@link QualificationArchitectureType}. */
export const QUALIFICATION_ARCHITECTURE_TYPES: QualificationArchitectureType[] = [
  'unknown_architecture_type',
  'object_storage',
  'web_hosting',
  'instance',
  'elastic',
  'kubernetes',
  'serverless',
  'dedicated_server',
  'other_architecture_type',
]

/** Lists all values of the enum {@link QualificationArchiveDataSubUseCase}. */
export const QUALIFICATION_ARCHIVE_DATA_SUB_USE_CASES: QualificationArchiveDataSubUseCase[] = [
  'unknown_sub_use_case',
]

/** Lists all values of the enum {@link QualificationContainerSubUseCase}. */
export const QUALIFICATION_CONTAINER_SUB_USE_CASES: QualificationContainerSubUseCase[] = [
  'unknown_sub_use_case',
]

/** Lists all values of the enum {@link QualificationDeploySoftwareSubUseCase}. */
export const QUALIFICATION_DEPLOY_SOFTWARE_SUB_USE_CASES: QualificationDeploySoftwareSubUseCase[] = [
  'unknown_sub_use_case',
]

/** Lists all values of the enum {@link QualificationHostApplicationSubUseCase}. */
export const QUALIFICATION_HOST_APPLICATION_SUB_USE_CASES: QualificationHostApplicationSubUseCase[] = [
  'unknown_sub_use_case',
  'saas_app',
  'government_app',
]

/** Lists all values of the enum {@link QualificationHostWebsiteSubUseCase}. */
export const QUALIFICATION_HOST_WEBSITE_SUB_USE_CASES: QualificationHostWebsiteSubUseCase[] = [
  'unknown_sub_use_case',
  'information_website',
  'ecommerce_website',
  'high_website',
  'other_sub_use_case',
]

/** Lists all values of the enum {@link QualificationOtherUseCaseSubUseCase}. */
export const QUALIFICATION_OTHER_USE_CASE_SUB_USE_CASES: QualificationOtherUseCaseSubUseCase[] = [
  'unknown_sub_use_case',
]

/** Lists all values of the enum {@link QualificationSetScalewayEnvironmentSubUseCase}. */
export const QUALIFICATION_SET_SCALEWAY_ENVIRONMENT_SUB_USE_CASES: QualificationSetScalewayEnvironmentSubUseCase[] = [
  'unknown_sub_use_case',
]

/** Lists all values of the enum {@link QualificationShareDataSubUseCase}. */
export const QUALIFICATION_SHARE_DATA_SUB_USE_CASES: QualificationShareDataSubUseCase[] = [
  'unknown_sub_use_case',
]

