// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money } from '../../../bridge'

export type DiscountDiscountMode =
  | 'unknown_discount_mode'
  | 'discount_mode_rate'
  | 'discount_mode_value'
  | 'discount_mode_splittable'

export type DiscountFilterType =
  | 'unknown_type'
  | 'product_category'
  | 'product'
  | 'product_offer'
  | 'product_reference'
  | 'region'
  | 'zone'

export type DownloadInvoiceRequestFileType = 'pdf'

export type InvoiceType = 'unknown_type' | 'periodic' | 'purchase'

export type ListDiscountsRequestOrderBy =
  | 'creation_date_desc'
  | 'creation_date_asc'

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

export interface DiscountCoupon {
  /** The description of the coupon. */
  description?: string
}

export interface DiscountFilter {
  /** Type of the filter. */
  type: DiscountFilterType
  /** Value of filter, it can be a product/range/region/zone value. */
  value: string
}

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

export interface Discount {
  /** The ID of the discount. */
  id: string
  /** The creation date of the discount. */
  creationDate?: Date
  /** The organization ID of the discount. */
  organizationId: string
  /** The description of the discount. */
  description: string
  /** The initial value of the discount. */
  value: number
  /** The value indicating how much of the discount has been used. */
  valueUsed: number
  /** The remaining value of the discount. */
  valueRemaining: number
  /** The mode of the discount. */
  mode: DiscountDiscountMode
  /** The start date of the discount. */
  startDate?: Date
  /** The stop date of the discount. */
  stopDate?: Date
  /** The description of the coupon. */
  coupon?: DiscountCoupon
  /** List of products/ranges/regions/zones to limit the usability of discounts. */
  filters: DiscountFilter[]
}

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

export type DownloadInvoiceRequest = {
  /** Invoice ID. */
  invoiceId: string
  /** Wanted file type. */
  fileType?: DownloadInvoiceRequestFileType
}

export type GetConsumptionRequest = {
  /** Filter by organization ID. */
  organizationId?: string
}

export interface GetConsumptionResponse {
  /** Detailed consumption list. */
  consumptions: GetConsumptionResponseConsumption[]
  /** Last consumption update date. */
  updatedAt?: Date
}

export type ListDiscountsRequest = {
  /** Order discounts in the response by their description. */
  orderBy?: ListDiscountsRequestOrderBy
  /** Positive integer to choose the page to return. */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to
   * return.
   */
  pageSize?: number
  /** ID of the organization. */
  organizationId?: string
}

export interface ListDiscountsResponse {
  /** Total number of discounts. */
  totalCount: number
  /** Paginated returned discounts. */
  discounts: Discount[]
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

export interface ListInvoicesResponse {
  /** Total number of invoices. */
  totalCount: number
  /** Paginated returned invoices. */
  invoices: Invoice[]
}
