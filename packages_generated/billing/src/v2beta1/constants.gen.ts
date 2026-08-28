// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DiscountDiscountMode,
  DiscountFilterType,
  DownloadInvoiceRequestFileType,
  ExportInvoicesRequestFileType,
  ExportInvoicesRequestOrderBy,
  InvoiceType,
  ListChargesRequestOrderBy,
  ListConsumptionsRequestOrderBy,
  ListDiscountsRequestOrderBy,
  ListInvoicesRequestOrderBy,
  ListTaxesRequestOrderBy,
} from './types.gen.js'


/** Lists all values of the enum {@link DiscountDiscountMode}. */
export const DISCOUNT_DISCOUNT_MODES: DiscountDiscountMode[] = [
  'unknown_discount_mode',
  'discount_mode_rate',
  'discount_mode_value',
  'discount_mode_splittable',
]

/** Lists all values of the enum {@link DiscountFilterType}. */
export const DISCOUNT_FILTER_TYPES: DiscountFilterType[] = [
  'unknown_type',
  'category_name',
  'product_name',
  'product_range',
  'resource_name',
  'region',
  'zone',
]

/** Lists all values of the enum {@link DownloadInvoiceRequestFileType}. */
export const DOWNLOAD_INVOICE_REQUEST_FILE_TYPES: DownloadInvoiceRequestFileType[] = [
  'pdf',
]

/** Lists all values of the enum {@link ExportInvoicesRequestFileType}. */
export const EXPORT_INVOICES_REQUEST_FILE_TYPES: ExportInvoicesRequestFileType[] = [
  'csv',
]

/** Lists all values of the enum {@link ExportInvoicesRequestOrderBy}. */
export const EXPORT_INVOICES_REQUEST_ORDER_BIES: ExportInvoicesRequestOrderBy[] = [
  'invoice_number_desc',
  'invoice_number_asc',
  'start_date_desc',
  'start_date_asc',
  'issued_date_desc',
  'issued_date_asc',
  'due_date_desc',
  'due_date_asc',
  'total_untaxed_desc',
  'total_untaxed_asc',
  'total_taxed_desc',
  'total_taxed_asc',
  'invoice_type_desc',
  'invoice_type_asc',
]

/** Lists all values of the enum {@link InvoiceType}. */
export const INVOICE_TYPES: InvoiceType[] = [
  'unknown_type',
  'periodic',
  'purchase',
  'credit_note',
]

/** Lists all values of the enum {@link ListChargesRequestOrderBy}. */
export const LIST_CHARGES_REQUEST_ORDER_BIES: ListChargesRequestOrderBy[] = [
  'start_date_asc',
  'start_date_desc',
]

/** Lists all values of the enum {@link ListConsumptionsRequestOrderBy}. */
export const LIST_CONSUMPTIONS_REQUEST_ORDER_BIES: ListConsumptionsRequestOrderBy[] = [
  'updated_at_desc',
  'updated_at_asc',
  'category_name_desc',
  'category_name_asc',
]

/** Lists all values of the enum {@link ListDiscountsRequestOrderBy}. */
export const LIST_DISCOUNTS_REQUEST_ORDER_BIES: ListDiscountsRequestOrderBy[] = [
  'creation_date_desc',
  'creation_date_asc',
  'start_date_desc',
  'start_date_asc',
  'stop_date_desc',
  'stop_date_asc',
]

/** Lists all values of the enum {@link ListInvoicesRequestOrderBy}. */
export const LIST_INVOICES_REQUEST_ORDER_BIES: ListInvoicesRequestOrderBy[] = [
  'invoice_number_desc',
  'invoice_number_asc',
  'start_date_desc',
  'start_date_asc',
  'issued_date_desc',
  'issued_date_asc',
  'due_date_desc',
  'due_date_asc',
  'total_untaxed_desc',
  'total_untaxed_asc',
  'total_taxed_desc',
  'total_taxed_asc',
  'invoice_type_desc',
  'invoice_type_asc',
]

/** Lists all values of the enum {@link ListTaxesRequestOrderBy}. */
export const LIST_TAXES_REQUEST_ORDER_BIES: ListTaxesRequestOrderBy[] = [
  'updated_at_desc',
  'updated_at_asc',
  'category_name_desc',
  'category_name_asc',
]

