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
  unmarshalListInvoicesResponse,
} from './marshalling.gen'
import type {
  DownloadInvoiceRequest,
  GetConsumptionRequest,
  GetConsumptionResponse,
  ListInvoicesRequest,
  ListInvoicesResponse,
} from './types.gen'

/**
 * Billing API.
 *
 * This API allows you to query your consumption. Billing API.
 */
export class API extends ParentAPI {
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

  listInvoices = (request: Readonly<ListInvoicesRequest> = {}) =>
    enrichForPagination('invoices', this.pageOfListInvoices, request)

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
}
