


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
  createdAt?: Date
  /**
   * Organization owner's phone number.
   */
  phoneNumber?: string
  /**
   * Siren number of the organization.
   */
  sirenNumber?: string
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
  lockedAt?: Date
  /**
   * Link to the Organization's picture.
   */
  pictureLink?: string
  /**
   * A comment about the organization.
   */
  comment: string
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
  phoneNumber?: string
  /**
   * A custom ID for the customer in your own infrastructure.
   */
  customerId: string
  /**
   * A SIREN number for the customer.
   */
  sirenNumber?: string
}


export type GetOrganizationRequest = {
  /**
   * The ID of the organization you want to GET.
   */
  organizationId?: string
}


export type ListOrganizationsRequest = {
  pageSize?: number
  page?: number
  orderBy?: ListOrganizationsRequestOrderBy
  /**
   * Only list organizations with this status.
   */
  status?: OrganizationStatus
  /**
   * Only list organizations created with this email.
   */
  email?: string
  /**
   * Only list organizations attached to this Customer ID.
If the customer ID was changed only the last one can be used.
   */
  customerId?: string
  /**
   * Only list organizations locked by a certain entity.
   */
  lockedBy?: OrganizationLockedBy
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
  organizationId?: string
}


export type RequestAdminRoleRequest = {
  /**
   * The ID of the organization you want to be invited to.
   */
  organizationId?: string
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
  organizationId?: string
}


export type UpdateOrganizationRequest = {
  /**
   * The ID of the organization you want to update.
   */
  organizationId?: string
  /**
   * The new email.
   */
  email?: string
  /**
   * The new name.
   */
  name?: string
  /**
   * The first name of the new owner.
   */
  ownerFirstname?: string
  /**
   * The last name of the new owner.
   */
  ownerLastname?: string
  /**
   * The phone number of the new owner.
   */
  phoneNumber?: string
  /**
   * Customer ID associated with this organization.
Warning: Changing this value will only affect future invoices.
If you try to change this value after the 25th of the month, we cannot guarantee that this will take effect on the invoice issued for the current month.
   */
  customerId?: string
  /**
   * A comment about the organization.
   */
  comment?: string
}


