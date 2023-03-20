// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money } from '../../../bridge'

export type DownloadInvoiceRequestFileType = 'pdf'

export type InvoiceType = 'unknown_type' | 'periodic' | 'purchase'

export type ListInvoicesRequestOrderBy =
  | 'invoice_number_desc'
  | 'invoice_number_asc'
  | 'start_date_desc'
  | 'start_date_asc'
  | 'issued_date_desc'
  | 'issued_date_asc'
  | 'due_date_desc'
  | 'due_date_asc'
  | 'total_untaxed_desc'
  | 'total_untaxed_asc'
  | 'total_taxed_desc'
  | 'total_taxed_asc'
  | 'invoice_type_desc'
  | 'invoice_type_asc'

/** Get consumption response. */
export interface GetConsumptionResponse {
  /** Detailed consumption list. */
  consumptions: GetConsumptionResponseConsumption[]
  /** Last consumption update date. */
  updatedAt?: Date
}

/** Get consumption response. consumption. */
export interface GetConsumptionResponseConsumption {
  /** Monetary value of the consumption. */
  value?: Money
  /** Description of the consumption. */
  description: string
  /** Project ID of the consumption. */
  projectId: string
  /** Category of the consumption. */
  category: string
  /** Unique identifier of the product. */
  operationPath: string
}

/** Invoice. */
export interface Invoice {
  /** Invoice ID. */
  id: string
  /** Start date of the billing period. */
  startDate?: Date
  /** Date when the invoice was sent to the customer. */
  issuedDate?: Date
  /** Payment time limit, set according to the Organization's payment conditions. */
  dueDate?: Date
  /** Total amount, untaxed. */
  totalUntaxed?: Money
  /** Total amount, taxed. */
  totalTaxed?: Money
  /** Type of invoice. */
  invoiceType: InvoiceType
  /** Invoice number. */
  number: number
}

/** List invoices response. */
export interface ListInvoicesResponse {
  /** Total number of invoices. */
  totalCount: number
  /** Paginated returned invoices. */
  invoices: Invoice[]
}

export type GetConsumptionRequest = {
  /** Filter by organization ID. */
  organizationId?: string
}

export type ListInvoicesRequest = {
  /**
   * Organization ID to filter for, only invoices from this Organization will be
   * returned.
   */
  organizationId?: string
  /** Invoice's `start_date` is greater or equal to `started_after`. */
  startedAfter?: Date
  /** Invoice's `start_date` precedes `started_before`. */
  startedBefore?: Date
  /** Invoice type. It can either be `periodic` or `purchase`. */
  invoiceType?: InvoiceType
  /** Positive integer to choose the page to return. */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to
   * return.
   */
  pageSize?: number
  /** How invoices are ordered in the response. */
  orderBy?: ListInvoicesRequestOrderBy
}

export type DownloadInvoiceRequest = {
  /** Invoice ID. */
  invoiceId: string
  /** Wanted file type. */
  fileType?: DownloadInvoiceRequestFileType
}
