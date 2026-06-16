
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalMoney, } from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  BudgetAlertNotification,
  BudgetAlert,
  Budget,
  ListBudgetsResponse,
  CreateBudgetAlertNotificationRequest,
  CreateBudgetAlertRequest,
  CreateBudgetRequest,
  UpdateBudgetAlertNotificationRequest,
  UpdateBudgetAlertRequest,
  UpdateBudgetRequest,
} from './types.gen.js'

export const unmarshalBudgetAlertNotification = (data: unknown): BudgetAlertNotification => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BudgetAlertNotification' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    recipients: data.recipients,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as BudgetAlertNotification
}

export const unmarshalBudgetAlert = (data: unknown): BudgetAlert => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BudgetAlert' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    notifications: unmarshalArrayOfObject(data.notifications, unmarshalBudgetAlertNotification),
    threshold: data.threshold,
    updatedAt: unmarshalDate(data.updated_at),
  } as BudgetAlert
}

export const unmarshalBudget = (data: unknown): Budget => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Budget' failed as data isn't a dictionary.`,
    )
  }

  return {
    alerts: unmarshalArrayOfObject(data.alerts, unmarshalBudgetAlert),
    consumptionLimit: data.consumption_limit ? unmarshalMoney(data.consumption_limit) : undefined,
    createdAt: unmarshalDate(data.created_at),
    enabled: data.enabled,
    id: data.id,
    organizationId: data.organization_id,
    updatedAt: unmarshalDate(data.updated_at),
  } as Budget
}

export const unmarshalListBudgetsResponse = (data: unknown): ListBudgetsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListBudgetsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    budgets: unmarshalArrayOfObject(data.budgets, unmarshalBudget),
    totalCount: data.total_count,
  } as ListBudgetsResponse
}

export const marshalCreateBudgetAlertNotificationRequest = (
  request: CreateBudgetAlertNotificationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  budget_alert_id: request.budgetAlertId,  
  ...resolveOneOf([
    {param: 'sms_phone_numbers',
      value: request.smsPhoneNumbers,
    },
    {param: 'email_addresses',
      value: request.emailAddresses,
    },
    {param: 'webhook_urls',
      value: request.webhookUrls,
    },
  ]),
})

export const marshalCreateBudgetAlertRequest = (
  request: CreateBudgetAlertRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  budget_id: request.budgetId,
  threshold: request.threshold,
})

export const marshalCreateBudgetRequest = (
  request: CreateBudgetRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  consumption_limit: request.consumptionLimit,
  enabled: request.enabled,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
})

export const marshalUpdateBudgetAlertNotificationRequest = (
  request: UpdateBudgetAlertNotificationRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'sms_phone_numbers',
      value: request.smsPhoneNumbers,
    },
    {param: 'email_addresses',
      value: request.emailAddresses,
    },
    {param: 'webhook_urls',
      value: request.webhookUrls,
    },
  ]),
})

export const marshalUpdateBudgetAlertRequest = (
  request: UpdateBudgetAlertRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  threshold: request.threshold,
})

export const marshalUpdateBudgetRequest = (
  request: UpdateBudgetRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  consumption_limit: request.consumptionLimit,
  enabled: request.enabled,
})
