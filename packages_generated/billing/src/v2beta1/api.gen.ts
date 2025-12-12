// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  urlParams,
  validatePathParam,
} from '@scaleway/sdk-client'
import {
  unmarshalDiscount,
  unmarshalInvoice,
  unmarshalListConsumptionsResponse,
  unmarshalListDiscountsResponse,
  unmarshalListInvoicesResponse,
  unmarshalListTaxesResponse,
} from './marshalling.gen.js'
import type {
  Discount,
  DownloadInvoiceRequest,
  ExportInvoicesRequest,
  GetInvoiceRequest,
  Invoice,
  ListConsumptionsRequest,
  ListConsumptionsResponse,
  ListDiscountsRequest,
  ListDiscountsResponse,
  ListInvoicesRequest,
  ListInvoicesResponse,
  ListTaxesRequest,
  ListTaxesResponse,
  RedeemCouponRequest,
} from './types.gen.js'

/**
 * Billing API.

This API allows you to manage and query your Scaleway billing and consumption.
 */
export class API extends ParentAPI {
  protected pageOfListConsumptions = (
    request: Readonly<ListConsumptionsRequest> = {},
  ) =>
    this.client.fetch<ListConsumptionsResponse>(
      {
        method: 'GET',
        path: `/billing/v2beta1/consumptions`,
        urlParams: urlParams(
          ['billing_period', request.billingPeriod],
          ['category_name', request.categoryName],
          ['order_by', request.orderBy],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ...Object.entries(
            resolveOneOf([
              {
                default: this.client.settings.defaultOrganizationId,
                param: 'organization_id',
                value: request.organizationId,
              },
              {
                default: this.client.settings.defaultProjectId,
                param: 'project_id',
                value: request.projectId,
              },
            ]),
          ),
        ),
      },
      unmarshalListConsumptionsResponse,
    )

  /**
   * Get monthly consumption. Consumption allows you to retrieve your past or current consumption cost, by project or category.
   *
   * @param request - The request {@link ListConsumptionsRequest}
   * @returns A Promise of ListConsumptionsResponse
   */
  listConsumptions = (request: Readonly<ListConsumptionsRequest> = {}) =>
    enrichForPagination('consumptions', this.pageOfListConsumptions, request)

  protected pageOfListTaxes = (request: Readonly<ListTaxesRequest> = {}) =>
    this.client.fetch<ListTaxesResponse>(
      {
        method: 'GET',
        path: `/billing/v2beta1/taxes`,
        urlParams: urlParams(
          ['billing_period', request.billingPeriod],
          ['order_by', request.orderBy],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListTaxesResponse,
    )

  /**
   * Get monthly consumption taxes. Consumption Tax allows you to retrieve your past or current tax charges, by project or category.
   *
   * @param request - The request {@link ListTaxesRequest}
   * @returns A Promise of ListTaxesResponse
   */
  listTaxes = (request: Readonly<ListTaxesRequest> = {}) =>
    enrichForPagination('taxes', this.pageOfListTaxes, request)

  protected pageOfListInvoices = (
    request: Readonly<ListInvoicesRequest> = {},
  ) =>
    this.client.fetch<ListInvoicesResponse>(
      {
        method: 'GET',
        path: `/billing/v2beta1/invoices`,
        urlParams: urlParams(
          ['billing_period_start_after', request.billingPeriodStartAfter],
          ['billing_period_start_before', request.billingPeriodStartBefore],
          ['invoice_type', request.invoiceType],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListInvoicesResponse,
    )

  /**
   * List invoices. List all your invoices, filtering by `start_date` and `invoice_type`. Each invoice has its own ID.
   *
   * @param request - The request {@link ListInvoicesRequest}
   * @returns A Promise of ListInvoicesResponse
   */
  listInvoices = (request: Readonly<ListInvoicesRequest> = {}) =>
    enrichForPagination('invoices', this.pageOfListInvoices, request)

  /**
   * Export invoices. Export invoices in a CSV file.
   *
   * @param request - The request {@link ExportInvoicesRequest}
   * @returns A Promise of Blob
   */
  exportInvoices = (request: Readonly<ExportInvoicesRequest> = {}) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/billing/v2beta1/export-invoices`,
      urlParams: urlParams(
        ['dl', 1],
        ['billing_period_start_after', request.billingPeriodStartAfter],
        ['billing_period_start_before', request.billingPeriodStartBefore],
        ['file_type', request.fileType],
        ['invoice_type', request.invoiceType],
        ['order_by', request.orderBy],
        ['organization_id', request.organizationId],
        ['page', request.page],
        ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
      ),
      responseType: 'blob',
    })

  /**
   * Get an invoice. Get a specific invoice, specified by its ID.
   *
   * @param request - The request {@link GetInvoiceRequest}
   * @returns A Promise of Invoice
   */
  getInvoice = (request: Readonly<GetInvoiceRequest>) =>
    this.client.fetch<Invoice>(
      {
        method: 'GET',
        path: `/billing/v2beta1/invoices/${validatePathParam('invoiceId', request.invoiceId)}`,
      },
      unmarshalInvoice,
    )

  /**
   * Download an invoice. Download a specific invoice, specified by its ID.
   *
   * @param request - The request {@link DownloadInvoiceRequest}
   * @returns A Promise of Blob
   */
  downloadInvoice = (request: Readonly<DownloadInvoiceRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/billing/v2beta1/invoices/${validatePathParam('invoiceId', request.invoiceId)}/download`,
      urlParams: urlParams(['dl', 1], ['file_type', request.fileType]),
      responseType: 'blob',
    })

  protected pageOfListDiscounts = (
    request: Readonly<ListDiscountsRequest> = {},
  ) =>
    this.client.fetch<ListDiscountsResponse>(
      {
        method: 'GET',
        path: `/billing/v2beta1/discounts`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
        ),
      },
      unmarshalListDiscountsResponse,
    )

  /**
   * List discounts. List all discounts for your Organization and usable categories, products, offers, references, regions and zones where the discount can be applied. As a reseller:
- If you do not specify an `organization_id` you will list the discounts applied to your own Organization and your customers
- If you indicate your `organization_id` you will list only the discounts applied to your Organization
- If you indicate `the organization_id` of one of your customers, you will list the discounts applied to their Organization.
   *
   * @param request - The request {@link ListDiscountsRequest}
   * @returns A Promise of ListDiscountsResponse
   */
  listDiscounts = (request: Readonly<ListDiscountsRequest> = {}) =>
    enrichForPagination('discounts', this.pageOfListDiscounts, request)

  /**
   * Redeem coupon. Redeem a coupon given the related code.
   *
   * @param request - The request {@link RedeemCouponRequest}
   * @returns A Promise of Discount
   */
  redeemCoupon = (request: Readonly<RedeemCouponRequest>) =>
    this.client.fetch<Discount>(
      {
        method: 'POST',
        path: `/billing/v2beta1/redeem-coupon`,
        urlParams: urlParams(
          ['code', request.code],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
        ),
      },
      unmarshalDiscount,
    )
}
