// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  unmarshalBudget,
  unmarshalBudgetAlert,
  unmarshalBudgetAlertNotification,
  marshalCreateBudgetAlertNotificationRequest,
  marshalCreateBudgetAlertRequest,
  marshalCreateBudgetRequest,
  unmarshalListBudgetsResponse,
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
  GetBudgetRequest,
  ListBudgetsRequest,
  ListBudgetsResponse,
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
  protected pageOfListBudgets = (request: Readonly<ListBudgetsRequest> = {}) =>
    this.client.fetch<ListBudgetsResponse>(
      {
        method: 'GET',
        path: `/billing/v2/budgets`,
        urlParams: urlParams(
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
      },
      unmarshalListBudgetsResponse,
    )
  
  /**
   * List your budgets, filtering by `organization_id`.. List your budgets, filtering by `organization_id`.
   *
   * @param request - The request {@link ListBudgetsRequest}
   * @returns A Promise of ListBudgetsResponse
   */
  listBudgets = (request: Readonly<ListBudgetsRequest> = {}) =>
    enrichForPagination('budgets', this.pageOfListBudgets, request)

  
  /**
   * Fetch a budget.. Fetch a budget.
   *
   * @param request - The request {@link GetBudgetRequest}
   * @returns A Promise of Budget
   */
  getBudget = (request: Readonly<GetBudgetRequest>) =>
    this.client.fetch<Budget>(
      {
        method: 'GET',
        path: `/billing/v2/budgets/${validatePathParam('budgetId', request.budgetId)}`,
      },
      unmarshalBudget,
    )

  
  /**
   * Create a new budget.. Create a new budget.
   *
   * @param request - The request {@link CreateBudgetRequest}
   * @returns A Promise of Budget
   */
  createBudget = (request: Readonly<CreateBudgetRequest>) =>
    this.client.fetch<Budget>(
      {
        body: JSON.stringify(
          marshalCreateBudgetRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/billing/v2/budgets`,
      },
      unmarshalBudget,
    )

  
  /**
   * Update a budget.. Update a budget.
   *
   * @param request - The request {@link UpdateBudgetRequest}
   * @returns A Promise of Budget
   */
  updateBudget = (request: Readonly<UpdateBudgetRequest>) =>
    this.client.fetch<Budget>(
      {
        body: JSON.stringify(
          marshalUpdateBudgetRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/billing/v2/budgets/${validatePathParam('budgetId', request.budgetId)}`,
      },
      unmarshalBudget,
    )

  
  /**
   * Delete a budget.. Delete a budget.
   *
   * @param request - The request {@link DeleteBudgetRequest}
   */
  deleteBudget = (request: Readonly<DeleteBudgetRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/billing/v2/budgets/${validatePathParam('budgetId', request.budgetId)}`,
      },
    )

  
  /**
   * Create a new budget alert.. Create a new budget alert.
   *
   * @param request - The request {@link CreateBudgetAlertRequest}
   * @returns A Promise of BudgetAlert
   */
  createBudgetAlert = (request: Readonly<CreateBudgetAlertRequest>) =>
    this.client.fetch<BudgetAlert>(
      {
        body: JSON.stringify(
          marshalCreateBudgetAlertRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/billing/v2/budget-alerts`,
      },
      unmarshalBudgetAlert,
    )

  
  /**
   * Update a budget alert.. Update a budget alert.
   *
   * @param request - The request {@link UpdateBudgetAlertRequest}
   * @returns A Promise of BudgetAlert
   */
  updateBudgetAlert = (request: Readonly<UpdateBudgetAlertRequest>) =>
    this.client.fetch<BudgetAlert>(
      {
        body: JSON.stringify(
          marshalUpdateBudgetAlertRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/billing/v2/budget-alerts/${validatePathParam('budgetAlertId', request.budgetAlertId)}`,
      },
      unmarshalBudgetAlert,
    )

  
  /**
   * Delete a budget alert.. Delete a budget alert.
   *
   * @param request - The request {@link DeleteBudgetAlertRequest}
   */
  deleteBudgetAlert = (request: Readonly<DeleteBudgetAlertRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/billing/v2/budget-alerts/${validatePathParam('budgetAlertId', request.budgetAlertId)}`,
      },
    )

  
  /**
   * Create a new budget alert notification.. Create a new budget alert notification.
   *
   * @param request - The request {@link CreateBudgetAlertNotificationRequest}
   * @returns A Promise of BudgetAlertNotification
   */
  createBudgetAlertNotification = (request: Readonly<CreateBudgetAlertNotificationRequest>) =>
    this.client.fetch<BudgetAlertNotification>(
      {
        body: JSON.stringify(
          marshalCreateBudgetAlertNotificationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/billing/v2/budget-alert-notifications`,
      },
      unmarshalBudgetAlertNotification,
    )

  
  /**
   * Update a budget alert notification.. Update a budget alert notification.
   *
   * @param request - The request {@link UpdateBudgetAlertNotificationRequest}
   * @returns A Promise of BudgetAlertNotification
   */
  updateBudgetAlertNotification = (request: Readonly<UpdateBudgetAlertNotificationRequest>) =>
    this.client.fetch<BudgetAlertNotification>(
      {
        body: JSON.stringify(
          marshalUpdateBudgetAlertNotificationRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/billing/v2/budget-alert-notifications/${validatePathParam('budgetAlertNotificationId', request.budgetAlertNotificationId)}`,
      },
      unmarshalBudgetAlertNotification,
    )

  
  /**
   * Delete a budget alert notification.. Delete a budget alert notification.
   *
   * @param request - The request {@link DeleteBudgetAlertNotificationRequest}
   */
  deleteBudgetAlertNotification = (request: Readonly<DeleteBudgetAlertNotificationRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/billing/v2/budget-alert-notifications/${validatePathParam('budgetAlertNotificationId', request.budgetAlertNotificationId)}`,
      },
    )

  
}

