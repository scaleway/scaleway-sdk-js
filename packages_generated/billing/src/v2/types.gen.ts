// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, } from '@scaleway/sdk-client'


export type BudgetAlertNotificationType =
  | 'unknown_type'
  | 'sms'
  | 'email'
  | 'webhook'

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


