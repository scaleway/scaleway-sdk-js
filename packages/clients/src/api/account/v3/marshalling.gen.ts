// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
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
  ProjectApiUpdateProjectRequest,
} from './types.gen'

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

export const marshalProjectApiUpdateProjectRequest = (
  request: ProjectApiUpdateProjectRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
})
