// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import {
  unmarshalGetConsumptionResponse,
  unmarshalListDiscountsResponse,
  unmarshalListInvoicesResponse,
} from './marshalling.gen'
import type {
  DownloadInvoiceRequest,
  GetConsumptionRequest,
  GetConsumptionResponse,
  ListDiscountsRequest,
  ListDiscountsResponse,
  ListInvoicesRequest,
  ListInvoicesResponse,
} from './types.gen'

/**
 * Billing API.
 *
 * This API allows you to query your consumption. Billing API.
 */
export class API extends ParentAPI {
  /**
   * Get current month's consumption. The consumption reflects the amount of
   * money you have spent for the products you have used. The consumption value
   * is monetary and is not computed in real time.
   *
   * @param request - The request {@link GetConsumptionRequest}
   * @returns A Promise of GetConsumptionResponse
   */
  getConsumption = (request: Readonly<GetConsumptionRequest> = {}) =>
    this.client.fetch<GetConsumptionResponse>(
      {
        method: 'GET',
        path: `/billing/v2alpha1/consumption`,
        urlParams: urlParams([
          'organization_id',
          request.organizationId ?? this.client.settings.defaultOrganizationId,
        ]),
      },
      unmarshalGetConsumptionResponse,
    )

  protected pageOfListInvoices = (
    request: Readonly<ListInvoicesRequest> = {},
  ) =>
    this.client.fetch<ListInvoicesResponse>(
      {
        method: 'GET',
        path: `/billing/v2alpha1/invoices`,
        urlParams: urlParams(
          ['invoice_type', request.invoiceType ?? 'unknown_type'],
          ['order_by', request.orderBy ?? 'invoice_number_desc'],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['started_after', request.startedAfter],
          ['started_before', request.startedBefore],
        ),
      },
      unmarshalListInvoicesResponse,
    )

  /**
   * List invoices. List all your invoices, filtering by `start_date` and
   * `invoice_type`. Each invoice has its own ID.
   *
   * @param request - The request {@link ListInvoicesRequest}
   * @returns A Promise of ListInvoicesResponse
   */
  listInvoices = (request: Readonly<ListInvoicesRequest> = {}) =>
    enrichForPagination('invoices', this.pageOfListInvoices, request)

  /**
   * Download an invoice. Download a specific invoice, specified by its ID.
   *
   * @param request - The request {@link DownloadInvoiceRequest}
   * @returns A Promise of Blob
   */
  downloadInvoice = (request: Readonly<DownloadInvoiceRequest>) =>
    this.client.fetch<Blob>({
      method: 'GET',
      path: `/billing/v2alpha1/invoices/${validatePathParam(
        'invoiceId',
        request.invoiceId,
      )}/download`,
      urlParams: urlParams(['dl', 1], ['file_type', request.fileType ?? 'pdf']),
      responseType: 'blob',
    })

  protected pageOfListDiscounts = (
    request: Readonly<ListDiscountsRequest> = {},
  ) =>
    this.client.fetch<ListDiscountsResponse>(
      {
        method: 'GET',
        path: `/billing/v2alpha1/discounts`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'creation_date_desc'],
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
   * List all user's discounts. List all discounts for an organization and
   * usable categories/products/offers/references/regions/zones where the
   * discount can be applied.
   *
   * @param request - The request {@link ListDiscountsRequest}
   * @returns A Promise of ListDiscountsResponse
   */
  listDiscounts = (request: Readonly<ListDiscountsRequest> = {}) =>
    enrichForPagination('discounts', this.pageOfListDiscounts, request)
}
