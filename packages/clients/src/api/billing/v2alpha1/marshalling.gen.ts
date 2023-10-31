// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '../../../bridge'
import type {
  Discount,
  DiscountCoupon,
  DiscountFilter,
  GetConsumptionResponse,
  GetConsumptionResponseConsumption,
  Invoice,
  ListDiscountsResponse,
  ListInvoicesResponse,
} from './types.gen'

const unmarshalGetConsumptionResponseConsumption = (
  data: unknown,
): GetConsumptionResponseConsumption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetConsumptionResponseConsumption' failed as data isn't a dictionary.`,
    )
  }

  return {
    category: data.category,
    description: data.description,
    operationPath: data.operation_path,
    projectId: data.project_id,
    value: data.value ? unmarshalMoney(data.value) : undefined,
  } as GetConsumptionResponseConsumption
}

export const unmarshalGetConsumptionResponse = (
  data: unknown,
): GetConsumptionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetConsumptionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    consumptions: unmarshalArrayOfObject(
      data.consumptions,
      unmarshalGetConsumptionResponseConsumption,
    ),
    updatedAt: unmarshalDate(data.updated_at),
  } as GetConsumptionResponse
}

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
    type: data.type,
    value: data.value,
  } as DiscountFilter
}

const unmarshalDiscount = (data: unknown): Discount => {
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

const unmarshalInvoice = (data: unknown): Invoice => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Invoice' failed as data isn't a dictionary.`,
    )
  }

  return {
    dueDate: unmarshalDate(data.due_date),
    id: data.id,
    invoiceType: data.invoice_type,
    issuedDate: unmarshalDate(data.issued_date),
    number: data.number,
    startDate: unmarshalDate(data.start_date),
    totalTaxed: data.total_taxed ? unmarshalMoney(data.total_taxed) : undefined,
    totalUntaxed: data.total_untaxed
      ? unmarshalMoney(data.total_untaxed)
      : undefined,
  } as Invoice
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
