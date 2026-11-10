// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type ListOrganizationsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type OrganizationLockedBy =
  | 'unknown_locked_by'
  | 'partner'
  | 'scaleway'

export type OrganizationStatus =
  | 'unknown_status'
  | 'opened'
  | 'locked'
  | 'closed'

export interface Organization {
  /**
   * ID of the organization.
   */
  id: string
  /**
   * Name of the organization.
   */
  name: string
  /**
   * Organization owner's email.
   */
  email: string
  /**
   * The current status of the organization.
   */
  status: OrganizationStatus
  /**
   * Organization owner's first name.
   */
  ownerFirstname: string
  /**
   * Organization owner's last name.
   */
  ownerLastname: string
  /**
   * Date of organization creation.
   */
  createdAt?: Date | null
  /**
   * Organization owner's phone number.
   */
  phoneNumber?: string | null
  /**
   * Customer ID associated with this organization.
   */
  customerId: string
  /**
   * If the organization is locked, this field will contain a human-readable reason.
   */
  lockReasonMessage: string
  /**
   * Originator of the lock. Can be one of "partner" or "scaleway".
   */
  lockedBy: OrganizationLockedBy
  /**
   * Date of lock.
   */
  lockedAt?: Date | null
  /**
   * Link to the Organization's picture.
   */
  pictureLink?: string | null
  /**
   * A comment about the organization.
   */
  comment: string
  /**
   * The SRN of the organization.
   */
  srn: string
}


export type CreateOrganizationRequest = {
  /**
   * Your personal `partner_id`. This is the same as your Organization ID.
   */
  partnerId: string
  /**
   * The email of the new organization owner.
   */
  email: string
  /**
   * The name of the organization you want to create. Usually the company name.
   */
  organizationName: string
  /**
   * The first name of the new organization owner.
   */
  ownerFirstname: string
  /**
   * The last name of the new organization owner.
   */
  ownerLastname: string
  /**
   * The phone number of the new organization owner.
   */
  phoneNumber?: string | null
  /**
   * A custom ID for the customer in your own infrastructure.
   */
  customerId: string
  /**
   * A comment about the organization.
   */
  comment?: string | null
}


export type GetOrganizationRequest = {
  /**
   * The ID of the organization you want to GET.
   */
  organizationId?: string | null
}


export type ListOrganizationsRequest = {
  pageSize?: number | null
  page?: number | null
  orderBy?: ListOrganizationsRequestOrderBy | null
  /**
   * Only list organizations with this status.
   */
  status?: OrganizationStatus | null
  /**
   * Only list organizations created with this email.
   */
  email?: string | null
  /**
   * Only list organizations attached to this Customer ID.
If the customer ID was changed only the last one can be used.
   */
  customerId?: string | null
  /**
   * Only list organizations locked by a certain entity.
   */
  lockedBy?: OrganizationLockedBy | null
}


export interface ListOrganizationsResponse {
  /**
   * List of organizations.
   */
  organizations: Organization[]
  /**
   * Total number of organizations.
   */
  totalCount: number
}


export type LockOrganizationRequest = {
  /**
   * The ID of the organization you want to lock.
   */
  organizationId?: string | null
}


export type RequestAdminRoleRequest = {
  /**
   * The ID of the organization you want to be invited to.
   */
  organizationId?: string | null
  /**
   * The member username.
   */
  username: string
  /**
   * The member email.
   */
  email: string
  /**
   * The member password.
   */
  password: string
}


export type UnlockOrganizationRequest = {
  /**
   * The ID of the organization you want to unlock.
   */
  organizationId?: string | null
}


export type UpdateOrganizationRequest = {
  /**
   * The ID of the organization you want to update.
   */
  organizationId?: string | null
  /**
   * The new email.
   */
  email?: string | null
  /**
   * The new name.
   */
  name?: string | null
  /**
   * The first name of the new owner.
   */
  ownerFirstname?: string | null
  /**
   * The last name of the new owner.
   */
  ownerLastname?: string | null
  /**
   * The phone number of the new owner.
   */
  phoneNumber?: string | null
  /**
   * Customer ID associated with this organization.
Warning: Changing this value will only affect future invoices.
If you try to change this value after the 25th of the month, we cannot guarantee that this will take effect on the invoice issued for the current month.
   */
  customerId?: string | null
  /**
   * A comment about the organization.
   */
  comment?: string | null
}


