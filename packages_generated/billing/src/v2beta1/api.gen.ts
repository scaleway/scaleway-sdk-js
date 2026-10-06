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
  unmarshalDiscount,
  unmarshalInvoice,
  unmarshalListChargesResponse,
  unmarshalListConsumptionsResponse,
  unmarshalListDiscountsResponse,
  unmarshalListInvoicesResponse,
  unmarshalListTaxesResponse,
} from './marshalling.gen.js'
import type {
  Discount,
  DownloadInvoiceRequest,
  ExportInvoicesRequest,
  FinOpsApiListChargesRequest,
  GetInvoiceRequest,
  Invoice,
  ListChargesResponse,
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
  protected pageOfListConsumptions = (request: Readonly<ListConsumptionsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListConsumptionsResponse>(
      {
        method: 'GET',
        path: `/billing/v2beta1/consumptions`,
        urlParams: urlParams(
          ['billing_period', request.billingPeriod],
          ['category_name', request.categoryName],
          ['order_by', request.orderBy],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],  
          ...Object.entries(resolveOneOf([
            {default: this.client.settings.defaultOrganizationId,param: 'organization_id',
              value: request.organizationId,
            },
            {default: this.client.settings.defaultProjectId,param: 'project_id',
              value: request.projectId,
            },
          ])),
        ),
        signal: options?.signal,
      },
      unmarshalListConsumptionsResponse,
    )
  
  /**
   * Get monthly consumption. Consumption allows you to retrieve your past or current consumption cost, by project or category.
   *
   * @param request - The request {@link ListConsumptionsRequest}
   * @returns A Promise of ListConsumptionsResponse
   */
  listConsumptions = (request: Readonly<ListConsumptionsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('consumptions', this.pageOfListConsumptions, request, options)

  
  protected pageOfListTaxes = (request: Readonly<ListTaxesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListTaxesResponse>(
      {
        method: 'GET',
        path: `/billing/v2beta1/taxes`,
        urlParams: urlParams(
          ['billing_period', request.billingPeriod],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListTaxesResponse,
    )
  
  /**
   * Get monthly consumption taxes. Consumption Tax allows you to retrieve your past or current tax charges, by project or category.
   *
   * @param request - The request {@link ListTaxesRequest}
   * @returns A Promise of ListTaxesResponse
   */
  listTaxes = (request: Readonly<ListTaxesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('taxes', this.pageOfListTaxes, request, options)

  
  protected pageOfListInvoices = (request: Readonly<ListInvoicesRequest> = {}, options?: RequestOptions) =>
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
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
      },
      unmarshalListInvoicesResponse,
    )
  
  /**
   * List invoices. List all your invoices, filtering by `start_date` and `invoice_type`. Each invoice has its own ID.
   *
   * @param request - The request {@link ListInvoicesRequest}
   * @returns A Promise of ListInvoicesResponse
   */
  listInvoices = (request: Readonly<ListInvoicesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('invoices', this.pageOfListInvoices, request, options)

  
  /**
   * Export invoices. Export invoices in a CSV file.
   *
   * @param request - The request {@link ExportInvoicesRequest}
   * @returns A Promise of Blob
   */
  exportInvoices = (request: Readonly<ExportInvoicesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
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
        signal: options?.signal,
      },
    )

  
  /**
   * Get an invoice. Get a specific invoice, specified by its ID.
   *
   * @param request - The request {@link GetInvoiceRequest}
   * @returns A Promise of Invoice
   */
  getInvoice = (request: Readonly<GetInvoiceRequest>, options?: RequestOptions) =>
    this.client.fetch<Invoice>(
      {
        method: 'GET',
        path: `/billing/v2beta1/invoices/${validatePathParam('invoiceId', request.invoiceId)}`,
        signal: options?.signal,
      },
      unmarshalInvoice,
    )

  
  /**
   * Download an invoice. Download a specific invoice, specified by its ID.
   *
   * @param request - The request {@link DownloadInvoiceRequest}
   * @returns A Promise of Blob
   */
  downloadInvoice = (request: Readonly<DownloadInvoiceRequest>, options?: RequestOptions) =>
    this.client.fetch<Blob>(
      {
        method: 'GET',
        path: `/billing/v2beta1/invoices/${validatePathParam('invoiceId', request.invoiceId)}/download`,
        urlParams: urlParams(
          ['dl', 1],
          ['file_type', request.fileType],
        ),
        responseType: 'blob',
        signal: options?.signal,
      },
    )

  
  protected pageOfListDiscounts = (request: Readonly<ListDiscountsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListDiscountsResponse>(
      {
        method: 'GET',
        path: `/billing/v2beta1/discounts`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
        ),
        signal: options?.signal,
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
  listDiscounts = (request: Readonly<ListDiscountsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('discounts', this.pageOfListDiscounts, request, options)

  
  /**
   * Redeem coupon. Redeem a coupon given the related code.
   *
   * @param request - The request {@link RedeemCouponRequest}
   * @returns A Promise of Discount
   */
  redeemCoupon = (request: Readonly<RedeemCouponRequest>, options?: RequestOptions) =>
    this.client.fetch<Discount>(
      {
        method: 'POST',
        path: `/billing/v2beta1/redeem-coupon`,
        urlParams: urlParams(
          ['code', request.code],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
        ),
        signal: options?.signal,
      },
      unmarshalDiscount,
    )

  
}

/**
 * Billing FinOps API.
 */
export class FinOpsAPI extends ParentAPI {
  /**
   * List charges. List charges for organizations or projects. You must specify at least `organization_ids` or `project_ids`.
   *
   * @param request - The request {@link FinOpsApiListChargesRequest}
   * @returns A Promise of ListChargesResponse
   */
  listCharges = (request: Readonly<FinOpsApiListChargesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListChargesResponse>(
      {
        method: 'GET',
        path: `/billing/v2beta1/charges`,
        urlParams: urlParams(
          ['clamp_to_time_range', request.clampToTimeRange],
          ['end_date_before', request.endDateBefore],
          ['invoice_ids', request.invoiceIds],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['project_ids', request.projectIds],
          ['resource_ids', request.resourceIds],
          ['resource_names', request.resourceNames],
          ['skus', request.skus],
          ['start_date_after', request.startDateAfter],
        ),
        signal: options?.signal,
      },
      unmarshalListChargesResponse,
    )

  
}

