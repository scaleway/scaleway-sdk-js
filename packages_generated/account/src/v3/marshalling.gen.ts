// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import type { DefaultValues } from '@scaleway/sdk-client'
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type {
  CheckContractSignatureResponse,
  Contract,
  ContractApiCheckContractSignatureRequest,
  ContractApiCreateContractSignatureRequest,
  ContractSignature,
  ListContractSignaturesResponse,
  ListProjectsResponse,
  Project,
  ProjectApiCreateProjectRequest,
  ProjectApiSetProjectQualificationRequest,
  ProjectApiUpdateProjectRequest,
  ProjectQualification,
  Qualification,
  QualificationAiMachine,
  QualificationArchiveData,
  QualificationContainer,
  QualificationDeploySoftware,
  QualificationHostApplication,
  QualificationHostWebsite,
  QualificationOtherUseCase,
  QualificationSetScalewayEnvironment,
  QualificationShareData,
} from './types.gen.js'

const unmarshalContract = (data: unknown): Contract => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Contract' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
    version: data.version,
  } as Contract
}

export const unmarshalContractSignature = (
  data: unknown,
): ContractSignature => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContractSignature' failed as data isn't a dictionary.`,
    )
  }

  return {
    contract: data.contract ? unmarshalContract(data.contract) : undefined,
    createdAt: unmarshalDate(data.created_at),
    expiresAt: unmarshalDate(data.expires_at),
    id: data.id,
    organizationId: data.organization_id,
    signedAt: unmarshalDate(data.signed_at),
  } as ContractSignature
}

const unmarshalQualificationAiMachine = (
  data: unknown,
): QualificationAiMachine => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationAiMachine' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationAiMachine
}

const unmarshalQualificationArchiveData = (
  data: unknown,
): QualificationArchiveData => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationArchiveData' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationArchiveData
}

const unmarshalQualificationContainer = (
  data: unknown,
): QualificationContainer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationContainer' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationContainer
}

const unmarshalQualificationDeploySoftware = (
  data: unknown,
): QualificationDeploySoftware => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationDeploySoftware' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationDeploySoftware
}

const unmarshalQualificationHostApplication = (
  data: unknown,
): QualificationHostApplication => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationHostApplication' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationHostApplication
}

const unmarshalQualificationHostWebsite = (
  data: unknown,
): QualificationHostWebsite => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationHostWebsite' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationHostWebsite
}

const unmarshalQualificationOtherUseCase = (
  data: unknown,
): QualificationOtherUseCase => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationOtherUseCase' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationOtherUseCase
}

const unmarshalQualificationSetScalewayEnvironment = (
  data: unknown,
): QualificationSetScalewayEnvironment => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationSetScalewayEnvironment' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationSetScalewayEnvironment
}

const unmarshalQualificationShareData = (
  data: unknown,
): QualificationShareData => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'QualificationShareData' failed as data isn't a dictionary.`,
    )
  }

  return {
    subUseCase: data.sub_use_case,
  } as QualificationShareData
}

const unmarshalQualification = (data: unknown): Qualification => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Qualification' failed as data isn't a dictionary.`,
    )
  }

  return {
    aiMachine: data.ai_machine
      ? unmarshalQualificationAiMachine(data.ai_machine)
      : undefined,
    architectureType: data.architecture_type,
    archiveData: data.archive_data
      ? unmarshalQualificationArchiveData(data.archive_data)
      : undefined,
    container: data.container
      ? unmarshalQualificationContainer(data.container)
      : undefined,
    deploySoftware: data.deploy_software
      ? unmarshalQualificationDeploySoftware(data.deploy_software)
      : undefined,
    hostApplication: data.host_application
      ? unmarshalQualificationHostApplication(data.host_application)
      : undefined,
    hostWebsite: data.host_website
      ? unmarshalQualificationHostWebsite(data.host_website)
      : undefined,
    otherUseCase: data.other_use_case
      ? unmarshalQualificationOtherUseCase(data.other_use_case)
      : undefined,
    setScalewayEnvironment: data.set_scaleway_environment
      ? unmarshalQualificationSetScalewayEnvironment(
          data.set_scaleway_environment,
        )
      : undefined,
    shareData: data.share_data
      ? unmarshalQualificationShareData(data.share_data)
      : undefined,
  } as Qualification
}

export const unmarshalProject = (data: unknown): Project => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Project' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    id: data.id,
    name: data.name,
    organizationId: data.organization_id,
    qualification: data.qualification
      ? unmarshalQualification(data.qualification)
      : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as Project
}

export const unmarshalCheckContractSignatureResponse = (
  data: unknown,
): CheckContractSignatureResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckContractSignatureResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    created: data.created,
    validated: data.validated,
  } as CheckContractSignatureResponse
}

export const unmarshalListContractSignaturesResponse = (
  data: unknown,
): ListContractSignaturesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListContractSignaturesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    contractSignatures: unmarshalArrayOfObject(
      data.contract_signatures,
      unmarshalContractSignature,
    ),
    totalCount: data.total_count,
  } as ListContractSignaturesResponse
}

export const unmarshalListProjectsResponse = (
  data: unknown,
): ListProjectsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListProjectsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    projects: unmarshalArrayOfObject(data.projects, unmarshalProject),
    totalCount: data.total_count,
  } as ListProjectsResponse
}

export const unmarshalProjectQualification = (
  data: unknown,
): ProjectQualification => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ProjectQualification' failed as data isn't a dictionary.`,
    )
  }

  return {
    projectId: data.project_id,
    qualification: data.qualification
      ? unmarshalQualification(data.qualification)
      : undefined,
  } as ProjectQualification
}

export const marshalContractApiCheckContractSignatureRequest = (
  request: ContractApiCheckContractSignatureRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  contract_name: request.contractName,
  contract_type: request.contractType,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
})

export const marshalContractApiCreateContractSignatureRequest = (
  request: ContractApiCreateContractSignatureRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  contract_name: request.contractName,
  contract_type: request.contractType,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
  validated: request.validated,
})

export const marshalProjectApiCreateProjectRequest = (
  request: ProjectApiCreateProjectRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name || randomName('proj'),
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
})

const marshalQualificationAiMachine = (
  request: QualificationAiMachine,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualificationArchiveData = (
  request: QualificationArchiveData,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualificationContainer = (
  request: QualificationContainer,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualificationDeploySoftware = (
  request: QualificationDeploySoftware,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualificationHostApplication = (
  request: QualificationHostApplication,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualificationHostWebsite = (
  request: QualificationHostWebsite,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualificationOtherUseCase = (
  request: QualificationOtherUseCase,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualificationSetScalewayEnvironment = (
  request: QualificationSetScalewayEnvironment,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualificationShareData = (
  request: QualificationShareData,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  sub_use_case: request.subUseCase,
})

const marshalQualification = (
  request: Qualification,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  architecture_type: request.architectureType,
  ...resolveOneOf([
    {
      param: 'host_website',
      value:
        request.hostWebsite !== undefined
          ? marshalQualificationHostWebsite(request.hostWebsite, defaults)
          : undefined,
    },
    {
      param: 'host_application',
      value:
        request.hostApplication !== undefined
          ? marshalQualificationHostApplication(
              request.hostApplication,
              defaults,
            )
          : undefined,
    },
    {
      param: 'deploy_software',
      value:
        request.deploySoftware !== undefined
          ? marshalQualificationDeploySoftware(request.deploySoftware, defaults)
          : undefined,
    },
    {
      param: 'set_scaleway_environment',
      value:
        request.setScalewayEnvironment !== undefined
          ? marshalQualificationSetScalewayEnvironment(
              request.setScalewayEnvironment,
              defaults,
            )
          : undefined,
    },
    {
      param: 'ai_machine',
      value:
        request.aiMachine !== undefined
          ? marshalQualificationAiMachine(request.aiMachine, defaults)
          : undefined,
    },
    {
      param: 'container',
      value:
        request.container !== undefined
          ? marshalQualificationContainer(request.container, defaults)
          : undefined,
    },
    {
      param: 'archive_data',
      value:
        request.archiveData !== undefined
          ? marshalQualificationArchiveData(request.archiveData, defaults)
          : undefined,
    },
    {
      param: 'share_data',
      value:
        request.shareData !== undefined
          ? marshalQualificationShareData(request.shareData, defaults)
          : undefined,
    },
    {
      param: 'other_use_case',
      value:
        request.otherUseCase !== undefined
          ? marshalQualificationOtherUseCase(request.otherUseCase, defaults)
          : undefined,
    },
  ]),
})

export const marshalProjectApiSetProjectQualificationRequest = (
  request: ProjectApiSetProjectQualificationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  qualification:
    request.qualification !== undefined
      ? marshalQualification(request.qualification, defaults)
      : undefined,
})

export const marshalProjectApiUpdateProjectRequest = (
  request: ProjectApiUpdateProjectRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
})
