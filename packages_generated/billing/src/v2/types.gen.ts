// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type BudgetAlertNotificationType =
  | 'unknown_type'
  | 'sms'
  | 'email'
  | 'webhook'

export type ListElectronicAddressesRequestOrderBy =
  | 'starts_at_asc'
  | 'starts_at_desc'

export interface BudgetAlertNotification {
  /**
   * Alert notification's ID.
   */
  id: string
  /**
   * The creation date of the alert notification.
   */
  createdAt?: Date
  /**
   * The last modification date of the alert notification.
   */
  updatedAt?: Date
  /**
   * Kind of notification.
   */
  type: BudgetAlertNotificationType
  /**
   * List of recipients for this alert.
   */
  recipients: string[]
}


export interface BudgetAlert {
  /**
   * Alert's ID.
   */
  id: string
  /**
   * The creation date of the alert.
   */
  createdAt?: Date
  /**
   * The last modification date of the alert.
   */
  updatedAt?: Date
  /**
   * Percentage threshold of the budget's limit for which the alert is triggered.
   */
  threshold: number
  /**
   * Notifications to send when the alert is triggered.
   */
  notifications: BudgetAlertNotification[]
}


export interface Budget {
  /**
   * Budget's ID.
   */
  id: string
  /**
   * The creation date of the budget.
   */
  createdAt?: Date
  /**
   * The last modification date of the budget.
   */
  updatedAt?: Date
  /**
   * The organization ID of the budget.
   */
  organizationId: string
  /**
   * Whether the budget is enabled or not.
   */
  enabled: boolean
  /**
   * Cost limit for this budget.
   */
  consumptionLimit?: Money
  /**
   * Alerts defined for this budget.
   */
  alerts: BudgetAlert[]
}


export interface ElectronicAddress {
  /**
   * The id of the electronic address.
   */
  id: string
  /**
   * The start date of the electronic address.
   */
  startsAt?: Date
  /**
   * The stop date of the electronic address.
   */
  stopsAt?: Date
  /**
   * The creation date of the electronic address.
   */
  createdAt?: Date
  /**
   * The last modification date of the electronic address.
   */
  updatedAt?: Date
  /**
   * The organization ID of the electronic address.
   */
  organizationId: string
  /**
   * Current value of electronic address.
   */
  value: string
}


export type CreateBudgetAlertNotificationRequest = {
  /**
   * The ID of the budget alert to create notification for.
   */
  budgetAlertId: string
  /**
   * List of phone numbers to receive sms notifications.
   *
   * One-of ('recipientType'): at most one of 'smsPhoneNumbers', 'emailAddresses', 'webhookUrls' could be set.
   */
  smsPhoneNumbers?: string[]
  /**
   * List of email addresses to receive email notifications.
   *
   * One-of ('recipientType'): at most one of 'smsPhoneNumbers', 'emailAddresses', 'webhookUrls' could be set.
   */
  emailAddresses?: string[]
  /**
   * List of webhook url to receive webhook notifications.
   *
   * One-of ('recipientType'): at most one of 'smsPhoneNumbers', 'emailAddresses', 'webhookUrls' could be set.
   */
  webhookUrls?: string[]
}


export type CreateBudgetAlertRequest = {
  /**
   * The ID of the budget to create alert for.
   */
  budgetId: string
  /**
   * Threshold above which the alert is sent.
   */
  threshold: number
}


export type CreateBudgetRequest = {
  /**
   * The Organization ID of the budget.
   */
  organizationId?: string
  /**
   * Cost limit for the budget.
   */
  consumptionLimit: number
  /**
   * Whether the budget is enabled or not.
   */
  enabled: boolean
}


export type DeleteBudgetAlertNotificationRequest = {
  /**
   * The ID of the budget alert notification to delete.
   */
  budgetAlertNotificationId: string
}


export type DeleteBudgetAlertRequest = {
  /**
   * The ID of the budget alert to delete.
   */
  budgetAlertId: string
}


export type DeleteBudgetRequest = {
  /**
   * The ID of the budget to delete.
   */
  budgetId: string
}


export type ElectronicBillingApiCreateElectronicAddressRequest = {
  /**
   * The Organization ID to set electronic address.
   */
  organizationId?: string
  /**
   * Electronic address to set.
   */
  value: string
  /**
   * When electronic address should be active.
   */
  startsAt?: Date
  /**
   * When electronic address should stop being active.
   */
  stopsAt?: Date
}


export type ElectronicBillingApiDeleteElectronicAddressRequest = {
  /**
   * The ID of the electronic address to delete.
   */
  electronicAddressId: string
}


export type ElectronicBillingApiGetElectronicAddressRequest = {
  /**
   * The ID of the electronic address we want to retrieve.
   */
  electronicAddressId: string
}


export type ElectronicBillingApiListElectronicAddressesRequest = {
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Number of Electronic Address to return per page.
   */
  pageSize?: number
  /**
   * Sort order of Electronic address in the response.
   */
  orderBy?: ListElectronicAddressesRequestOrderBy
  /**
   * The Organization ID to set electronic address.
   */
  organizationId?: string
  /**
   * Filter services where electronic address start_date is greater or equal to starts_after.
   */
  startsAfter?: Date
  /**
   * Filter services where electronic address stop_date is before stops_before.
   */
  stopsBefore?: Date
}


export type ElectronicBillingApiUpdateElectronicAddressRequest = {
  /**
   * The ID of the electronic address we want to update.
   */
  electronicAddressId: string
  /**
   * Electronic address to set.
   */
  value?: string
  /**
   * When electronic address should stop being active.
   */
  stopsAt?: Date
}


export type GetBudgetRequest = {
  /**
   * The ID of the budget.
   */
  budgetId: string
}


export type ListBudgetsRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string
  /**
   * Page number.
   */
  page?: number
  /**
   * Positive integer to select the number of items to return.
   */
  pageSize?: number
}


export interface ListBudgetsResponse {
  /**
   * Detailed budget list.
   */
  budgets: Budget[]
  /**
   * Total number of items.
   */
  totalCount: number
}


export interface ListElectronicAddressesResponse {
  /**
   * List of electronic addresses.
   */
  electronicAddresses: ElectronicAddress[]
  /**
   * Total Number of returned electronic addresses.
   */
  totalCount: number
}


export type UpdateBudgetAlertNotificationRequest = {
  /**
   * The ID of the budget alert notification to update.
   */
  budgetAlertNotificationId: string
  /**
   * List of phone numbers to receive sms notifications.
   *
   * One-of ('recipientType'): at most one of 'smsPhoneNumbers', 'emailAddresses', 'webhookUrls' could be set.
   */
  smsPhoneNumbers?: string[]
  /**
   * List of email addresses to receive email notifications.
   *
   * One-of ('recipientType'): at most one of 'smsPhoneNumbers', 'emailAddresses', 'webhookUrls' could be set.
   */
  emailAddresses?: string[]
  /**
   * List of webhook url to receive webhook notifications.
   *
   * One-of ('recipientType'): at most one of 'smsPhoneNumbers', 'emailAddresses', 'webhookUrls' could be set.
   */
  webhookUrls?: string[]
}


export type UpdateBudgetAlertRequest = {
  /**
   * The ID of the budget alert to update.
   */
  budgetAlertId: string
  /**
   * Threshold above which the alert is sent.
   */
  threshold: number
}


export type UpdateBudgetRequest = {
  /**
   * The ID of the budget to update.
   */
  budgetId: string
  /**
   * Cost limit for the budget.
   */
  consumptionLimit?: number
  /**
   * Whether the budget will be enabled or not.
   */
  enabled?: boolean
}


