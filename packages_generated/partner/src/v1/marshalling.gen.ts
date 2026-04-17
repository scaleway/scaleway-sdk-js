import type { DefaultValues } from '@scaleway/sdk-client'
import { isJSONObject, unmarshalArrayOfObject, unmarshalDate } from '@scaleway/sdk-client'
import type {
  CreateOrganizationRequest,
  ListOrganizationsResponse,
  Organization,
  RequestAdminRoleRequest,
  UpdateOrganizationRequest,
} from './types.gen.js'

export const unmarshalOrganization = (data: unknown): Organization => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Unmarshalling the type 'Organization' failed as data isn't a dictionary.`)
  }

  return {
    comment: data.comment,
    createdAt: unmarshalDate(data.created_at),
    customerId: data.customer_id,
    email: data.email,
    id: data.id,
    lockReasonMessage: data.lock_reason_message,
    lockedAt: unmarshalDate(data.locked_at),
    lockedBy: data.locked_by,
    name: data.name,
    ownerFirstname: data.owner_firstname,
    ownerLastname: data.owner_lastname,
    phoneNumber: data.phone_number,
    pictureLink: data.picture_link,
    sirenNumber: data.siren_number,
    status: data.status,
  } as Organization
}

export const unmarshalListOrganizationsResponse = (data: unknown): ListOrganizationsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(`Unmarshalling the type 'ListOrganizationsResponse' failed as data isn't a dictionary.`)
  }

  return {
    organizations: unmarshalArrayOfObject(data.organizations, unmarshalOrganization),
    totalCount: data.total_count,
  } as ListOrganizationsResponse
}

export const marshalCreateOrganizationRequest = (
  request: CreateOrganizationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  customer_id: request.customerId,
  email: request.email,
  organization_name: request.organizationName,
  owner_firstname: request.ownerFirstname,
  owner_lastname: request.ownerLastname,
  partner_id: request.partnerId,
  phone_number: request.phoneNumber,
  siren_number: request.sirenNumber,
})

export const marshalRequestAdminRoleRequest = (
  request: RequestAdminRoleRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  password: request.password,
  username: request.username,
})

export const marshalUpdateOrganizationRequest = (
  request: UpdateOrganizationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  comment: request.comment,
  customer_id: request.customerId,
  email: request.email,
  name: request.name,
  owner_firstname: request.ownerFirstname,
  owner_lastname: request.ownerLastname,
  phone_number: request.phoneNumber,
})
