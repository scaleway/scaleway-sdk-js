// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type DiscountDiscountMode =
  | 'unknown_discount_mode'
  | 'discount_mode_rate'
  | 'discount_mode_value'
  | 'discount_mode_splittable'

export type DiscountFilterType =
  | 'unknown_type'
  | 'category_name'
  | 'product_name'
  | 'product_range'
  | 'resource_name'
  | 'region'
  | 'zone'

export type DownloadInvoiceRequestFileType =
  | 'pdf'

export type ExportInvoicesRequestFileType =
  | 'csv'

export type ExportInvoicesRequestOrderBy =
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

export type InvoiceType =
  | 'unknown_type'
  | 'periodic'
  | 'purchase'

export type ListConsumptionsRequestOrderBy =
  | 'updated_at_desc'
  | 'updated_at_asc'
  | 'category_name_desc'
  | 'category_name_asc'

export type ListDiscountsRequestOrderBy =
  | 'creation_date_desc'
  | 'creation_date_asc'
  | 'start_date_desc'
  | 'start_date_asc'
  | 'stop_date_desc'
  | 'stop_date_asc'

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

export type ListTaxesRequestOrderBy =
  | 'updated_at_desc'
  | 'updated_at_asc'
  | 'category_name_desc'
  | 'category_name_asc'

export interface DiscountCoupon {
  /**
   * The description of the coupon.
   */
  description?: string
}


export interface DiscountFilter {
  /**
   * Type of the filter (category name, product name, product range, resource name, region or zone).
   */
  type: DiscountFilterType
  /**
   * Value of filter.
   */
  value: string
  /**
   * Boolean to describe if filter is an excluding filter.
   */
  exclude: boolean
}


export interface ListConsumptionsResponseConsumption {
  /**
   * Monetary value of the consumption.
   */
  value?: Money
  /**
   * The product name. For example, "VPC Public Gateway S", "VPC Public Gateway M" for the VPC product.
   */
  productName: string
  /**
   * Identifies the reference based on the category.
   */
  resourceName: string
  /**
   * Unique identifier of the product.
   */
  sku: string
  /**
   * Project ID of the consumption.
   */
  projectId: string
  /**
   * Name of consumption category.
   */
  categoryName: string
  /**
   * Unit of consumed quantity.
   */
  unit: string
  /**
   * Consumed quantity.
   */
  billedQuantity: string
  /**
   * Organization ID of the consumer for this consumption.
   */
  consumerId: string
}


export interface Discount {
  /**
   * The ID of the discount.
   */
  id: string
  /**
   * The creation date of the discount.
   */
  creationDate?: Date
  /**
   * The Organization ID of the discount.
   */
  organizationId: string
  /**
   * The description of the discount.
   */
  description: string
  /**
   * The initial value of the discount.
   */
  value: number
  /**
   * The value indicating how much of the discount has been used.
   */
  valueUsed: number
  /**
   * The remaining value of the discount.
   */
  valueRemaining: number
  /**
   * The mode of the discount.
   */
  mode: DiscountDiscountMode
  /**
   * The start date of the discount.
   */
  startDate?: Date
  /**
   * The stop date of the discount.
   */
  stopDate?: Date
  /**
   * The description of the coupon.
   */
  coupon?: DiscountCoupon
  /**
   * List of the discount scopes.
   */
  filters: DiscountFilter[]
}


export interface Invoice {
  /**
   * Invoice ID.
   */
  id: string
  organizationId: string
  organizationName: string
  /**
   * Start date of the billing period.
   */
  startDate?: Date
  stopDate?: Date
  /**
   * The billing period of the invoice in the YYYY-MM format.
   */
  billingPeriod?: Date
  /**
   * Date when the invoice was sent to the customer.
   */
  issuedDate?: Date
  /**
   * Payment time limit, set according to the Organization's payment conditions.
   */
  dueDate?: Date
  /**
   * Total amount, untaxed.
   */
  totalUntaxed?: Money
  /**
   * Total amount, taxed.
   */
  totalTaxed?: Money
  /**
   * The total tax amount of the invoice.
   */
  totalTax?: Money
  /**
   * The total discount amount of the invoice.
   */
  totalDiscount?: Money
  /**
   * The total amount of the invoice before applying the discount.
   */
  totalUndiscount?: Money
  /**
   * Type of invoice, either periodic or purchase.
   */
  type: InvoiceType
  /**
   * The state of the Invoice.
   */
  state: string
  /**
   * Invoice number.
   */
  number: number
  /**
   * The name of the seller (Scaleway).
   */
  sellerName: string
}


export interface ListTaxesResponseTax {
  /**
   * Description of the tax applied.
   */
  description: string
  /**
   * The three-letter currency code.
   */
  currency: string
  /**
   * Applied tax rate (0.2 means a VAT of 20%).
   */
  rate?: number
  /**
   * The total tax value of the consumption.
   */
  totalTaxValue?: number
}


export type DownloadInvoiceRequest = {
  /**
   * Invoice ID.
   */
  invoiceId: string
  /**
   * File type. PDF by default.
   */
  fileType?: DownloadInvoiceRequestFileType
}


export type ExportInvoicesRequest = {
  /**
   * Organization ID. If specified, only invoices from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Return only invoice with start date greater than billing_period_start.
   */
  billingPeriodStartAfter?: Date
  /**
   * Return only invoice with start date less than billing_period_start.
   */
  billingPeriodStartBefore?: Date
  /**
   * Invoice type. It can either be `periodic` or `purchase`.
   */
  invoiceType?: InvoiceType
  /**
   * Page number.
   */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to return.
   */
  pageSize?: number
  /**
   * How invoices are ordered in the response.
   */
  orderBy?: ExportInvoicesRequestOrderBy
  /**
   * File format for exporting the invoice list.
   */
  fileType?: ExportInvoicesRequestFileType
}


export type GetInvoiceRequest = {
  /**
   * Invoice ID.
   */
  invoiceId: string
}


export type ListConsumptionsRequest = {
  /**
   * Order consumptions list in the response by their update date.
   */
  orderBy?: ListConsumptionsRequestOrderBy
  /**
   * Positive integer to choose the page to return.
   */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to return.
   */
  pageSize?: number
  /**
   * Filter by Organization ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId' could be set.
   */
  organizationId?: string
  /**
   * Filter by Project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId' could be set.
   */
  projectId?: string
  /**
   * Filter by name of a Category as they are shown in the invoice (Compute, Network, Observability).
   */
  categoryName?: string
  /**
   * Filter by the billing period in the YYYY-MM format. If it is empty the current billing period will be used as default.
   */
  billingPeriod?: string
}


export interface ListConsumptionsResponse {
  /**
   * Detailed consumption list.
   */
  consumptions: ListConsumptionsResponseConsumption[]
  /**
   * Total number of returned items.
   */
  totalCount: number
  /**
   * Sum of all discounts, displayed only when no category or project ID filter is applied.
   */
  totalDiscountUntaxedValue: number
  /**
   * Last consumption update date.
   */
  updatedAt?: Date
}


export type ListDiscountsRequest = {
  /**
   * Order discounts in the response by their description.
   */
  orderBy?: ListDiscountsRequestOrderBy
  /**
   * Positive integer to choose the page to return.
   */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to return.
   */
  pageSize?: number
  /**
   * ID of the organization.
   */
  organizationId?: string
}


export interface ListDiscountsResponse {
  /**
   * Total number of discounts.
   */
  totalCount: number
  /**
   * Paginated returned discounts.
   */
  discounts: Discount[]
}


export type ListInvoicesRequest = {
  /**
   * Organization ID. If specified, only invoices from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Return only invoice with start date greater than billing_period_start.
   */
  billingPeriodStartAfter?: Date
  /**
   * Return only invoice with start date less than billing_period_start.
   */
  billingPeriodStartBefore?: Date
  /**
   * Invoice type. It can either be `periodic` or `purchase`.
   */
  invoiceType?: InvoiceType
  /**
   * Page number.
   */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to return.
   */
  pageSize?: number
  /**
   * How invoices are ordered in the response.
   */
  orderBy?: ListInvoicesRequestOrderBy
}


export interface ListInvoicesResponse {
  /**
   * Total number of invoices.
   */
  totalCount: number
  /**
   * Paginated returned invoices.
   */
  invoices: Invoice[]
}


export type ListTaxesRequest = {
  /**
   * Order consumed taxes list in the response by their update date.
   */
  orderBy?: ListTaxesRequestOrderBy
  /**
   * Page number.
   */
  page?: number
  /**
   * Positive integer lower or equal to 100 to select the number of items to return.
   */
  pageSize?: number
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Filter by the billing period in the YYYY-MM format. If it is empty the current billing period will be used as default.
   */
  billingPeriod?: string
}


export interface ListTaxesResponse {
  /**
   * Detailed consumption tax.
   */
  taxes: ListTaxesResponseTax[]
  /**
   * Total number of returned items.
   */
  totalCount: number
  /**
   * Last consumption update date.
   */
  updatedAt?: Date
}


export type RedeemCouponRequest = {
  /**
   * The Organization ID of the discount.
   */
  organizationId?: string
  /**
   * The code of the coupon to redeem.
   */
  code: string
}


