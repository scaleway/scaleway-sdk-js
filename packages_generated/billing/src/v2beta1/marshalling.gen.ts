// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import { isJSONObject, marshalBlobToScwFile, marshalDecimal, marshalMoney, marshalScwFile, marshalTimeSeries, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalDecimal, unmarshalMapOfObject, unmarshalMoney, unmarshalScwFile, unmarshalServiceInfo, unmarshalTimeSeries, unmarshalTimeSeriesPoint } from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, DefaultValues } from '@scaleway/sdk-client'
import type {
  DiscountCoupon,
  DiscountFilter,
  Discount,
  Invoice,
  Charge,
  ListChargesResponse,
  ListConsumptionsResponseConsumption,
  ListConsumptionsResponse,
  DiscountLine,
  ListDiscountLinesResponse,
  ListDiscountsResponse,
  InvoiceLine,
  ListInvoiceLinesResponse,
  ListInvoicesResponse,
  ListTaxesResponseTax,
  ListTaxesResponse,
} from './types.gen.js'

const unmarshalDiscountCoupon = (data: unknown): DiscountCoupon => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DiscountCoupon' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description ?? null,
  } as DiscountCoupon
}

const unmarshalDiscountFilter = (data: unknown): DiscountFilter => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DiscountFilter' failed as data isn't a dictionary.`,
    )
  }

  return {
    exclude: data.exclude,
    type: data.type,
    value: data.value,
  } as DiscountFilter
}

export const unmarshalDiscount = (data: unknown): Discount => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Discount' failed as data isn't a dictionary.`,
    )
  }

  return {
    coupon: data.coupon ? unmarshalDiscountCoupon(data.coupon) : null,
    creationDate: unmarshalDate(data.creation_date) ?? null,
    description: data.description,
    filters: unmarshalArrayOfObject(data.filters, unmarshalDiscountFilter),
    id: data.id,
    mode: data.mode,
    organizationId: data.organization_id,
    startDate: unmarshalDate(data.start_date) ?? null,
    stopDate: unmarshalDate(data.stop_date) ?? null,
    value: data.value,
    valueRemaining: data.value_remaining,
    valueUsed: data.value_used,
  } as Discount
}

export const unmarshalInvoice = (data: unknown): Invoice => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Invoice' failed as data isn't a dictionary.`,
    )
  }

  return {
    billingPeriod: unmarshalDate(data.billing_period) ?? null,
    dueDate: unmarshalDate(data.due_date) ?? null,
    id: data.id,
    issuedDate: unmarshalDate(data.issued_date) ?? null,
    number: data.number,
    organizationId: data.organization_id,
    organizationName: data.organization_name,
    sellerName: data.seller_name,
    startDate: unmarshalDate(data.start_date) ?? null,
    state: data.state,
    stopDate: unmarshalDate(data.stop_date) ?? null,
    totalDiscount: data.total_discount ? unmarshalMoney(data.total_discount) : null,
    totalTax: data.total_tax ? unmarshalMoney(data.total_tax) : null,
    totalTaxed: data.total_taxed ? unmarshalMoney(data.total_taxed) : null,
    totalUndiscount: data.total_undiscount ? unmarshalMoney(data.total_undiscount) : null,
    totalUntaxed: data.total_untaxed ? unmarshalMoney(data.total_untaxed) : null,
    type: data.type,
  } as Invoice
}

const unmarshalCharge = (data: unknown): Charge => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Charge' failed as data isn't a dictionary.`,
    )
  }

  return {
    endDate: unmarshalDate(data.end_date) ?? null,
    invoiceId: data.invoice_id,
    organizationId: data.organization_id,
    organizationName: data.organization_name,
    price: data.price ? unmarshalMoney(data.price) : null,
    projectId: data.project_id,
    projectName: data.project_name,
    resourceId: data.resource_id,
    resourceName: data.resource_name ?? null,
    sku: data.sku,
    startDate: unmarshalDate(data.start_date) ?? null,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
  } as Charge
}

export const unmarshalListChargesResponse = (data: unknown): ListChargesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListChargesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    charges: unmarshalArrayOfObject(data.charges, unmarshalCharge),
    nextPageToken: data.next_page_token ?? null,
  } as ListChargesResponse
}

const unmarshalListConsumptionsResponseConsumption = (data: unknown): ListConsumptionsResponseConsumption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListConsumptionsResponseConsumption' failed as data isn't a dictionary.`,
    )
  }

  return {
    billedQuantity: data.billed_quantity,
    categoryName: data.category_name,
    consumerId: data.consumer_id,
    organizationName: data.organization_name,
    productName: data.product_name,
    projectId: data.project_id,
    projectName: data.project_name,
    resourceName: data.resource_name,
    sku: data.sku,
    unit: data.unit,
    value: data.value ? unmarshalMoney(data.value) : null,
  } as ListConsumptionsResponseConsumption
}

export const unmarshalListConsumptionsResponse = (data: unknown): ListConsumptionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListConsumptionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    consumptions: unmarshalArrayOfObject(data.consumptions, unmarshalListConsumptionsResponseConsumption),
    totalCount: data.total_count,
    totalDiscountUntaxedValue: data.total_discount_untaxed_value,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
  } as ListConsumptionsResponse
}

const unmarshalDiscountLine = (data: unknown): DiscountLine => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DiscountLine' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    invoiceLineId: data.invoice_line_id,
    origin: data.origin,
    value: data.value ? unmarshalMoney(data.value) : null,
  } as DiscountLine
}

export const unmarshalListDiscountLinesResponse = (data: unknown): ListDiscountLinesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDiscountLinesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    discountLines: unmarshalArrayOfObject(data.discount_lines, unmarshalDiscountLine),
    totalCount: data.total_count,
  } as ListDiscountLinesResponse
}

export const unmarshalListDiscountsResponse = (data: unknown): ListDiscountsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDiscountsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    discounts: unmarshalArrayOfObject(data.discounts, unmarshalDiscount),
    totalCount: data.total_count,
  } as ListDiscountsResponse
}

const unmarshalInvoiceLine = (data: unknown): InvoiceLine => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InvoiceLine' failed as data isn't a dictionary.`,
    )
  }

  return {
    billedQuantity: data.billed_quantity,
    categoryName: data.category_name,
    id: data.id,
    invoiceId: data.invoice_id,
    organizationId: data.organization_id,
    organizationName: data.organization_name,
    productName: data.product_name,
    projectId: data.project_id,
    projectName: data.project_name,
    resourceCount: data.resource_count,
    resourceName: data.resource_name,
    sku: data.sku,
    startDate: unmarshalDate(data.start_date) ?? null,
    stopDate: unmarshalDate(data.stop_date) ?? null,
    unit: data.unit,
    unitPrice: data.unit_price ? unmarshalMoney(data.unit_price) : null,
    unitQuantity: data.unit_quantity,
    untaxedValue: data.untaxed_value ? unmarshalMoney(data.untaxed_value) : null,
  } as InvoiceLine
}

export const unmarshalListInvoiceLinesResponse = (data: unknown): ListInvoiceLinesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInvoiceLinesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    invoiceLines: unmarshalArrayOfObject(data.invoice_lines, unmarshalInvoiceLine),
    totalCount: data.total_count,
  } as ListInvoiceLinesResponse
}

export const unmarshalListInvoicesResponse = (data: unknown): ListInvoicesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInvoicesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    invoices: unmarshalArrayOfObject(data.invoices, unmarshalInvoice),
    totalCount: data.total_count,
  } as ListInvoicesResponse
}

const unmarshalListTaxesResponseTax = (data: unknown): ListTaxesResponseTax => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTaxesResponseTax' failed as data isn't a dictionary.`,
    )
  }

  return {
    currency: data.currency,
    description: data.description,
    rate: data.rate ?? null,
    totalTaxValue: data.total_tax_value ?? null,
  } as ListTaxesResponseTax
}

export const unmarshalListTaxesResponse = (data: unknown): ListTaxesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTaxesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    taxes: unmarshalArrayOfObject(data.taxes, unmarshalListTaxesResponseTax),
    totalCount: data.total_count,
    updatedAt: unmarshalDate(data.updated_at) ?? null,
  } as ListTaxesResponse
}
