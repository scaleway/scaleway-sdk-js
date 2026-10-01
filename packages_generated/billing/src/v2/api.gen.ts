// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality, RequestOptions,} from '@scaleway/sdk-client'
import {
  unmarshalBudget,
  unmarshalBudgetAlert,
  unmarshalBudgetAlertNotification,
  marshalCreateBudgetAlertNotificationRequest,
  marshalCreateBudgetAlertRequest,
  marshalCreateBudgetRequest,
  unmarshalElectronicAddress,
  marshalElectronicBillingApiCreateElectronicAddressRequest,
  marshalElectronicBillingApiUpdateElectronicAddressRequest,
  unmarshalListBudgetsResponse,
  unmarshalListElectronicAddressesResponse,
  marshalUpdateBudgetAlertNotificationRequest,
  marshalUpdateBudgetAlertRequest,
  marshalUpdateBudgetRequest,
} from './marshalling.gen.js'
import type {
  Budget,
  BudgetAlert,
  BudgetAlertNotification,
  CreateBudgetAlertNotificationRequest,
  CreateBudgetAlertRequest,
  CreateBudgetRequest,
  DeleteBudgetAlertNotificationRequest,
  DeleteBudgetAlertRequest,
  DeleteBudgetRequest,
  ElectronicAddress,
  ElectronicBillingApiCreateElectronicAddressRequest,
  ElectronicBillingApiDeleteElectronicAddressRequest,
  ElectronicBillingApiGetElectronicAddressRequest,
  ElectronicBillingApiListElectronicAddressesRequest,
  ElectronicBillingApiUpdateElectronicAddressRequest,
  GetBudgetRequest,
  ListBudgetsRequest,
  ListBudgetsResponse,
  ListElectronicAddressesResponse,
  UpdateBudgetAlertNotificationRequest,
  UpdateBudgetAlertRequest,
  UpdateBudgetRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Billing API.

This API allows you to query billing related objects.
 */
export class API extends ParentAPI {
  protected pageOfListBudgets = (request: Readonly<ListBudgetsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListBudgetsResponse>(
      {
        method: 'GET',
        path: `/billing/v2/budgets`,
        urlParams: urlParams(
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListBudgetsResponse,
    )
  
  /**
   * List your budgets, filtering by `organization_id`.. List your budgets, filtering by `organization_id`.
   *
   * @param request - The request {@link ListBudgetsRequest}
   * @returns A Promise of ListBudgetsResponse
   */
  listBudgets = (request: Readonly<ListBudgetsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('budgets', this.pageOfListBudgets, request, options)

  
  /**
   * Fetch a budget.. Fetch a budget.
   *
   * @param request - The request {@link GetBudgetRequest}
   * @returns A Promise of Budget
   */
  getBudget = (request: Readonly<GetBudgetRequest>, options?: RequestOptions) =>
    this.client.fetch<Budget>(
      {
        method: 'GET',
        path: `/billing/v2/budgets/${validatePathParam('budgetId', request.budgetId)}`,
        signal: options?.signal,
      },
      unmarshalBudget,
    )

  
  /**
   * Create a new budget.. Create a new budget.
   *
   * @param request - The request {@link CreateBudgetRequest}
   * @returns A Promise of Budget
   */
  createBudget = (request: Readonly<CreateBudgetRequest>, options?: RequestOptions) =>
    this.client.fetch<Budget>(
      {
        body: JSON.stringify(
          marshalCreateBudgetRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/billing/v2/budgets`,
        signal: options?.signal,
      },
      unmarshalBudget,
    )

  
  /**
   * Update a budget.. Update a budget.
   *
   * @param request - The request {@link UpdateBudgetRequest}
   * @returns A Promise of Budget
   */
  updateBudget = (request: Readonly<UpdateBudgetRequest>, options?: RequestOptions) =>
    this.client.fetch<Budget>(
      {
        body: JSON.stringify(
          marshalUpdateBudgetRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/billing/v2/budgets/${validatePathParam('budgetId', request.budgetId)}`,
        signal: options?.signal,
      },
      unmarshalBudget,
    )

  
  /**
   * Delete a budget.. Delete a budget.
   *
   * @param request - The request {@link DeleteBudgetRequest}
   */
  deleteBudget = (request: Readonly<DeleteBudgetRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/billing/v2/budgets/${validatePathParam('budgetId', request.budgetId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Create a new budget alert.. Create a new budget alert.
   *
   * @param request - The request {@link CreateBudgetAlertRequest}
   * @returns A Promise of BudgetAlert
   */
  createBudgetAlert = (request: Readonly<CreateBudgetAlertRequest>, options?: RequestOptions) =>
    this.client.fetch<BudgetAlert>(
      {
        body: JSON.stringify(
          marshalCreateBudgetAlertRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/billing/v2/budget-alerts`,
        signal: options?.signal,
      },
      unmarshalBudgetAlert,
    )

  
  /**
   * Update a budget alert.. Update a budget alert.
   *
   * @param request - The request {@link UpdateBudgetAlertRequest}
   * @returns A Promise of BudgetAlert
   */
  updateBudgetAlert = (request: Readonly<UpdateBudgetAlertRequest>, options?: RequestOptions) =>
    this.client.fetch<BudgetAlert>(
      {
        body: JSON.stringify(
          marshalUpdateBudgetAlertRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/billing/v2/budget-alerts/${validatePathParam('budgetAlertId', request.budgetAlertId)}`,
        signal: options?.signal,
      },
      unmarshalBudgetAlert,
    )

  
  /**
   * Delete a budget alert.. Delete a budget alert.
   *
   * @param request - The request {@link DeleteBudgetAlertRequest}
   */
  deleteBudgetAlert = (request: Readonly<DeleteBudgetAlertRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/billing/v2/budget-alerts/${validatePathParam('budgetAlertId', request.budgetAlertId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Create a new budget alert notification.. Create a new budget alert notification.
   *
   * @param request - The request {@link CreateBudgetAlertNotificationRequest}
   * @returns A Promise of BudgetAlertNotification
   */
  createBudgetAlertNotification = (request: Readonly<CreateBudgetAlertNotificationRequest>, options?: RequestOptions) =>
    this.client.fetch<BudgetAlertNotification>(
      {
        body: JSON.stringify(
          marshalCreateBudgetAlertNotificationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/billing/v2/budget-alert-notifications`,
        signal: options?.signal,
      },
      unmarshalBudgetAlertNotification,
    )

  
  /**
   * Update a budget alert notification.. Update a budget alert notification.
   *
   * @param request - The request {@link UpdateBudgetAlertNotificationRequest}
   * @returns A Promise of BudgetAlertNotification
   */
  updateBudgetAlertNotification = (request: Readonly<UpdateBudgetAlertNotificationRequest>, options?: RequestOptions) =>
    this.client.fetch<BudgetAlertNotification>(
      {
        body: JSON.stringify(
          marshalUpdateBudgetAlertNotificationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/billing/v2/budget-alert-notifications/${validatePathParam('budgetAlertNotificationId', request.budgetAlertNotificationId)}`,
        signal: options?.signal,
      },
      unmarshalBudgetAlertNotification,
    )

  
  /**
   * Delete a budget alert notification.. Delete a budget alert notification.
   *
   * @param request - The request {@link DeleteBudgetAlertNotificationRequest}
   */
  deleteBudgetAlertNotification = (request: Readonly<DeleteBudgetAlertNotificationRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/billing/v2/budget-alert-notifications/${validatePathParam('budgetAlertNotificationId', request.budgetAlertNotificationId)}`,
        signal: options?.signal,
      },
    )

  
}

/**
 * Electronic Billing API.

This API allows you to query electronic billing related objects.
 */
export class ElectronicBillingAPI extends ParentAPI {
  protected pageOfListElectronicAddresses = (request: Readonly<ElectronicBillingApiListElectronicAddressesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListElectronicAddressesResponse>(
      {
        method: 'GET',
        path: `/billing/v2/electronic-address`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['starts_after', request.startsAfter],
          ['stops_before', request.stopsBefore],
        ),
        signal: options?.signal,
      },
      unmarshalListElectronicAddressesResponse,
    )
  
  /**
   * List electronic addresses.. List electronic addresses.
   *
   * @param request - The request {@link ElectronicBillingApiListElectronicAddressesRequest}
   * @returns A Promise of ListElectronicAddressesResponse
   */
  listElectronicAddresses = (request: Readonly<ElectronicBillingApiListElectronicAddressesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('electronicAddresses', this.pageOfListElectronicAddresses, request, options)

  
  /**
   * Fetch an electronic address.. Fetch an electronic address.
   *
   * @param request - The request {@link ElectronicBillingApiGetElectronicAddressRequest}
   * @returns A Promise of ElectronicAddress
   */
  getElectronicAddress = (request: Readonly<ElectronicBillingApiGetElectronicAddressRequest>, options?: RequestOptions) =>
    this.client.fetch<ElectronicAddress>(
      {
        method: 'GET',
        path: `/billing/v2/electronic-address/${validatePathParam('electronicAddressId', request.electronicAddressId)}`,
        signal: options?.signal,
      },
      unmarshalElectronicAddress,
    )

  
  /**
   * Create a new electronic address.. Create a new electronic address.
   *
   * @param request - The request {@link ElectronicBillingApiCreateElectronicAddressRequest}
   * @returns A Promise of ElectronicAddress
   */
  createElectronicAddress = (request: Readonly<ElectronicBillingApiCreateElectronicAddressRequest>, options?: RequestOptions) =>
    this.client.fetch<ElectronicAddress>(
      {
        body: JSON.stringify(
          marshalElectronicBillingApiCreateElectronicAddressRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/billing/v2/electronic-address`,
        signal: options?.signal,
      },
      unmarshalElectronicAddress,
    )

  
  /**
   * Update an electronic address.. Update an electronic address.
   *
   * @param request - The request {@link ElectronicBillingApiUpdateElectronicAddressRequest}
   * @returns A Promise of ElectronicAddress
   */
  updateElectronicAddress = (request: Readonly<ElectronicBillingApiUpdateElectronicAddressRequest>, options?: RequestOptions) =>
    this.client.fetch<ElectronicAddress>(
      {
        body: JSON.stringify(
          marshalElectronicBillingApiUpdateElectronicAddressRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/billing/v2/electronic-address/${validatePathParam('electronicAddressId', request.electronicAddressId)}`,
        signal: options?.signal,
      },
      unmarshalElectronicAddress,
    )

  
  /**
   * Delete an electronic address.. Delete an electronic address.
   *
   * @param request - The request {@link ElectronicBillingApiDeleteElectronicAddressRequest}
   */
  deleteElectronicAddress = (request: Readonly<ElectronicBillingApiDeleteElectronicAddressRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/billing/v2/electronic-address/${validatePathParam('electronicAddressId', request.electronicAddressId)}`,
        signal: options?.signal,
      },
    )

  
}

