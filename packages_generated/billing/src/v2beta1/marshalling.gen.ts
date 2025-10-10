// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '@scaleway/sdk-client'
import type {
  Discount,
  DiscountCoupon,
  DiscountFilter,
  Invoice,
  ListConsumptionsResponse,
  ListConsumptionsResponseConsumption,
  ListDiscountsResponse,
  ListInvoicesResponse,
  ListTaxesResponse,
  ListTaxesResponseTax,
} from './types.gen'

const unmarshalDiscountCoupon = (data: unknown): DiscountCoupon => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DiscountCoupon' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
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
    coupon: data.coupon ? unmarshalDiscountCoupon(data.coupon) : undefined,
    creationDate: unmarshalDate(data.creation_date),
    description: data.description,
    filters: unmarshalArrayOfObject(data.filters, unmarshalDiscountFilter),
    id: data.id,
    mode: data.mode,
    organizationId: data.organization_id,
    startDate: unmarshalDate(data.start_date),
    stopDate: unmarshalDate(data.stop_date),
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
    billingPeriod: unmarshalDate(data.billing_period),
    dueDate: unmarshalDate(data.due_date),
    id: data.id,
    issuedDate: unmarshalDate(data.issued_date),
    number: data.number,
    organizationId: data.organization_id,
    organizationName: data.organization_name,
    sellerName: data.seller_name,
    startDate: unmarshalDate(data.start_date),
    state: data.state,
    stopDate: unmarshalDate(data.stop_date),
    totalDiscount: data.total_discount
      ? unmarshalMoney(data.total_discount)
      : undefined,
    totalTax: data.total_tax ? unmarshalMoney(data.total_tax) : undefined,
    totalTaxed: data.total_taxed ? unmarshalMoney(data.total_taxed) : undefined,
    totalUndiscount: data.total_undiscount
      ? unmarshalMoney(data.total_undiscount)
      : undefined,
    totalUntaxed: data.total_untaxed
      ? unmarshalMoney(data.total_untaxed)
      : undefined,
    type: data.type,
  } as Invoice
}

const unmarshalListConsumptionsResponseConsumption = (
  data: unknown,
): ListConsumptionsResponseConsumption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListConsumptionsResponseConsumption' failed as data isn't a dictionary.`,
    )
  }

  return {
    billedQuantity: data.billed_quantity,
    categoryName: data.category_name,
    productName: data.product_name,
    projectId: data.project_id,
    resourceName: data.resource_name,
    sku: data.sku,
    unit: data.unit,
    value: data.value ? unmarshalMoney(data.value) : undefined,
  } as ListConsumptionsResponseConsumption
}

export const unmarshalListConsumptionsResponse = (
  data: unknown,
): ListConsumptionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListConsumptionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    consumptions: unmarshalArrayOfObject(
      data.consumptions,
      unmarshalListConsumptionsResponseConsumption,
    ),
    totalCount: data.total_count,
    totalDiscountUntaxedValue: data.total_discount_untaxed_value,
    updatedAt: unmarshalDate(data.updated_at),
  } as ListConsumptionsResponse
}

export const unmarshalListDiscountsResponse = (
  data: unknown,
): ListDiscountsResponse => {
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

export const unmarshalListInvoicesResponse = (
  data: unknown,
): ListInvoicesResponse => {
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
    rate: data.rate,
    totalTaxValue: data.total_tax_value,
  } as ListTaxesResponseTax
}

export const unmarshalListTaxesResponse = (
  data: unknown,
): ListTaxesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTaxesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    taxes: unmarshalArrayOfObject(data.taxes, unmarshalListTaxesResponseTax),
    totalCount: data.total_count,
    updatedAt: unmarshalDate(data.updated_at),
  } as ListTaxesResponse
}
