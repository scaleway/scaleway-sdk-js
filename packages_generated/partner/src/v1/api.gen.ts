
import {
  enrichForPagination,
  API as ParentAPI,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  marshalCreateOrganizationRequest,
  marshalRequestAdminRoleRequest,
  marshalUpdateOrganizationRequest,
  unmarshalListOrganizationsResponse,
  unmarshalOrganization,
} from './marshalling.gen.js'
import type {
  CreateOrganizationRequest,
  GetOrganizationRequest,
  ListOrganizationsRequest,
  ListOrganizationsResponse,
  LockOrganizationRequest,
  Organization,
  RequestAdminRoleRequest,
  UnlockOrganizationRequest,
  UpdateOrganizationRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Partner API.

Scaleway Partner API ( for partner only ).
 */
export class API extends ParentAPI {
  /**
   * Invite a partner user in the customer organization.
   *
   * @param request - The request {@link RequestAdminRoleRequest}
   */
  requestAdminRole = (request: Readonly<RequestAdminRoleRequest>) =>
    this.client.fetch<void>(
      {
        body: JSON.stringify(
          marshalRequestAdminRoleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/partner/v1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/request-admin-role`,
      },
    )

  
  /**
   * Create a new organization.
   *
   * @param request - The request {@link CreateOrganizationRequest}
   * @returns A Promise of Organization
   */
  createOrganization = (request: Readonly<CreateOrganizationRequest>) =>
    this.client.fetch<Organization>(
      {
        body: JSON.stringify(
          marshalCreateOrganizationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/partner/v1/organizations`,
      },
      unmarshalOrganization,
    )

  
  /**
   * Get an organization.
   *
   * @param request - The request {@link GetOrganizationRequest}
   * @returns A Promise of Organization
   */
  getOrganization = (request: Readonly<GetOrganizationRequest> = {}) =>
    this.client.fetch<Organization>(
      {
        method: 'GET',
        path: `/partner/v1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}`,
      },
      unmarshalOrganization,
    )

  
  protected pageOfListOrganizations = (request: Readonly<ListOrganizationsRequest> = {}) =>
    this.client.fetch<ListOrganizationsResponse>(
      {
        method: 'GET',
        path: `/partner/v1/organizations`,
        urlParams: urlParams(
          ['customer_id', request.customerId],
          ['email', request.email],
          ['locked_by', request.lockedBy],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['status', request.status],
        ),
      },
      unmarshalListOrganizationsResponse,
    )
  
  /**
   * List Organizations.
   *
   * @param request - The request {@link ListOrganizationsRequest}
   * @returns A Promise of ListOrganizationsResponse
   */
  listOrganizations = (request: Readonly<ListOrganizationsRequest> = {}) =>
    enrichForPagination('organizations', this.pageOfListOrganizations, request)

  
  /**
   * Lock an organization.
   *
   * @param request - The request {@link LockOrganizationRequest}
   * @returns A Promise of Organization
   */
  lockOrganization = (request: Readonly<LockOrganizationRequest> = {}) =>
    this.client.fetch<Organization>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/partner/v1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/lock`,
      },
      unmarshalOrganization,
    )

  
  /**
   * Unlock an organization.
   *
   * @param request - The request {@link UnlockOrganizationRequest}
   * @returns A Promise of Organization
   */
  unlockOrganization = (request: Readonly<UnlockOrganizationRequest> = {}) =>
    this.client.fetch<Organization>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/partner/v1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}/unlock`,
      },
      unmarshalOrganization,
    )

  
  /**
   * Update an organization.
   *
   * @param request - The request {@link UpdateOrganizationRequest}
   * @returns A Promise of Organization
   */
  updateOrganization = (request: Readonly<UpdateOrganizationRequest> = {}) =>
    this.client.fetch<Organization>(
      {
        body: JSON.stringify(
          marshalUpdateOrganizationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/partner/v1/organizations/${validatePathParam('organizationId', request.organizationId ?? this.client.settings.defaultOrganizationId)}`,
      },
      unmarshalOrganization,
    )

  
}

