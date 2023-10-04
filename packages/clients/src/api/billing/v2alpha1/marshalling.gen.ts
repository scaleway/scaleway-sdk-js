// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '../../../bridge'
import type {
  GetConsumptionResponse,
  GetConsumptionResponseConsumption,
  Invoice,
  ListInvoicesResponse,
} from './types.gen'

const unmarshalGetConsumptionResponseConsumption = (data: unknown) => {
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

export const unmarshalGetConsumptionResponse = (data: unknown) => {
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

const unmarshalInvoice = (data: unknown) => {
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

export const unmarshalListInvoicesResponse = (data: unknown) => {
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
