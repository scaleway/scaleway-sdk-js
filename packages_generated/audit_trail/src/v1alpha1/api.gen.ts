// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  resolveOneOf,
  unmarshalServiceInfo,
  urlParams,
  validatePathParam,
  waitForResource,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { Zone as ScwZone, Region as ScwRegion, ServiceInfo, WaitForOptions, ApiLocality, RequestOptions,} from '@scaleway/sdk-client'
import {ALERT_RULE_TRANSIENT_STATUSES as ALERT_RULE_TRANSIENT_STATUSES_AUDIT_TRAIL,CUSTOM_ALERT_RULE_TRANSIENT_STATUSES as CUSTOM_ALERT_RULE_TRANSIENT_STATUSES_AUDIT_TRAIL,RUN_TRANSIENT_STATUSES as RUN_TRANSIENT_STATUSES_AUDIT_TRAIL,} from './content.gen.js'
import {
  marshalCreateCustomAlertRuleRequest,
  marshalCreateExportJobRequest,
  unmarshalCustomAlertRule,
  marshalDisableAlertRulesRequest,
  unmarshalDisableAlertRulesResponse,
  marshalDisableCustomAlertRulesRequest,
  unmarshalDisableCustomAlertRulesResponse,
  marshalEnableAlertRulesRequest,
  unmarshalEnableAlertRulesResponse,
  marshalEnableCustomAlertRulesRequest,
  unmarshalEnableCustomAlertRulesResponse,
  unmarshalEventsOverview,
  unmarshalExportJob,
  unmarshalListAlertRulesResponse,
  unmarshalListAuthenticationEventsResponse,
  unmarshalListCombinedEventsResponse,
  unmarshalListCustomAlertRulesResponse,
  unmarshalListEventsResponse,
  unmarshalListExportJobsResponse,
  unmarshalListProductsResponse,
  unmarshalListSystemEventsResponse,
  unmarshalRetrieveAvailableFieldsForCustomAlertRulesResponse,
  marshalSetEnabledAlertRulesRequest,
  unmarshalSetEnabledAlertRulesResponse,
  marshalSetEnabledCustomAlertRulesRequest,
  unmarshalSetEnabledCustomAlertRulesResponse,
  marshalTestCustomAlertRuleRequest,
  unmarshalTestCustomAlertRuleResponse,
  marshalUpdateCustomAlertRuleRequest,
} from './marshalling.gen.js'
import type {
  CreateCustomAlertRuleRequest,
  CreateExportJobRequest,
  CustomAlertRule,
  DeleteCustomAlertRuleRequest,
  DeleteExportJobRequest,
  DisableAlertRulesRequest,
  DisableAlertRulesResponse,
  DisableCustomAlertRulesRequest,
  DisableCustomAlertRulesResponse,
  EnableAlertRulesRequest,
  EnableAlertRulesResponse,
  EnableCustomAlertRulesRequest,
  EnableCustomAlertRulesResponse,
  EventsOverview,
  ExportJob,
  GetLastEventsOverviewRequest,
  ListAlertRulesRequest,
  ListAlertRulesResponse,
  ListAuthenticationEventsRequest,
  ListAuthenticationEventsResponse,
  ListCombinedEventsRequest,
  ListCombinedEventsResponse,
  ListCustomAlertRulesRequest,
  ListCustomAlertRulesResponse,
  ListEventsRequest,
  ListEventsResponse,
  ListExportJobsRequest,
  ListExportJobsResponse,
  ListProductsRequest,
  ListProductsResponse,
  ListSystemEventsRequest,
  ListSystemEventsResponse,
  RetrieveAvailableFieldsForCustomAlertRulesRequest,
  RetrieveAvailableFieldsForCustomAlertRulesResponse,
  SetEnabledAlertRulesRequest,
  SetEnabledAlertRulesResponse,
  SetEnabledCustomAlertRulesRequest,
  SetEnabledCustomAlertRulesResponse,
  TestCustomAlertRuleRequest,
  TestCustomAlertRuleResponse,
  UpdateCustomAlertRuleRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Audit Trail API.

This API allows you to ensure accountability and security by recording events and changes performed within your Scaleway Organization.
 */
export class API extends ParentAPI {
  /**
   * Locality of this API.
   * type ∈ {'zone','region','global','unspecified'}
   */
  public static readonly LOCALITY: ApiLocality =
    toApiLocality({
      regions: [
        'fr-par',
        'nl-ams',
      ],
    })
  
  /**
   * List events. Retrieve the list of Audit Trail events for a Scaleway Organization and/or Project. You must specify the `organization_id` and optionally, the `project_id`.
   *
   * @param request - The request {@link ListEventsRequest}
   * @returns A Promise of ListEventsResponse
   */
  listEvents = (request: Readonly<ListEventsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListEventsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/events`,
        urlParams: urlParams(
          ['method_name', request.methodName],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['principal_id', request.principalId],
          ['product_name', request.productName],
          ['project_id', request.projectId],
          ['recorded_after', request.recordedAfter],
          ['recorded_before', request.recordedBefore],
          ['resource_id', request.resourceId],
          ['resource_type', request.resourceType],
          ['service_name', request.serviceName],
          ['source_ip', request.sourceIp],
          ['status', request.status],
        ),
        signal: options?.signal,
      },
      unmarshalListEventsResponse,
    )

  
  /**
   * List authentication events. Retrieve the list of Audit Trail authentication events for a Scaleway Organization. You must specify the `organization_id`.
   *
   * @param request - The request {@link ListAuthenticationEventsRequest}
   * @returns A Promise of ListAuthenticationEventsResponse
   */
  listAuthenticationEvents = (request: Readonly<ListAuthenticationEventsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListAuthenticationEventsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/authentication-events`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['recorded_after', request.recordedAfter],
          ['recorded_before', request.recordedBefore],
        ),
        signal: options?.signal,
      },
      unmarshalListAuthenticationEventsResponse,
    )

  
  /**
   * List system events. Retrieve the list of Audit Trail system events for a Scaleway Organization. You must specify the `organization_id`.
   *
   * @param request - The request {@link ListSystemEventsRequest}
   * @returns A Promise of ListSystemEventsResponse
   */
  listSystemEvents = (request: Readonly<ListSystemEventsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListSystemEventsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/system-events`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['recorded_after', request.recordedAfter],
          ['recorded_before', request.recordedBefore],
        ),
        signal: options?.signal,
      },
      unmarshalListSystemEventsResponse,
    )

  
  listCombinedEvents = (request: Readonly<ListCombinedEventsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListCombinedEventsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/combined-events`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['page_token', request.pageToken],
          ['project_id', request.projectId],
          ['recorded_after', request.recordedAfter],
          ['recorded_before', request.recordedBefore],
          ['resource_type', request.resourceType],
        ),
        signal: options?.signal,
      },
      unmarshalListCombinedEventsResponse,
    )

  
  /**
   * Retrieve the list of Scaleway resources for which you have Audit Trail events.
   *
   * @param request - The request {@link ListProductsRequest}
   * @returns A Promise of ListProductsResponse
   */
  listProducts = (request: Readonly<ListProductsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListProductsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/products`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
        ),
        signal: options?.signal,
      },
      unmarshalListProductsResponse,
    )

  
  getLastEventsOverview = (request: Readonly<GetLastEventsOverviewRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<EventsOverview>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/last-events-overview`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['project_id', request.projectId],
        ),
        signal: options?.signal,
      },
      unmarshalEventsOverview,
    )

  
  /**
   * Create an export job. Create an export job for a specified organization. This allows you to export audit trail events to a destination, such as an S3 bucket. The request requires the organization ID, a name for the export, and a destination configuration.
   *
   * @param request - The request {@link CreateExportJobRequest}
   * @returns A Promise of ExportJob
   */
  createExportJob = (request: Readonly<CreateExportJobRequest>, options?: RequestOptions) =>
    this.client.fetch<ExportJob>(
      {
        body: JSON.stringify(
          marshalCreateExportJobRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/export-jobs`,
        signal: options?.signal,
      },
      unmarshalExportJob,
    )

  
  /**
   * Delete an export job. Deletes an export job for a specified id.
   *
   * @param request - The request {@link DeleteExportJobRequest}
   */
  deleteExportJob = (request: Readonly<DeleteExportJobRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/export-jobs/${validatePathParam('exportJobId', request.exportJobId)}`,
        signal: options?.signal,
      },
    )

  
  protected pageOfListExportJobs = (request: Readonly<ListExportJobsRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListExportJobsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/export-jobs`,
        urlParams: urlParams(
          ['name', request.name],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['tags', request.tags],
        ),
        signal: options?.signal,
      },
      unmarshalListExportJobsResponse,
    )
  
  listExportJobs = (request: Readonly<ListExportJobsRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('exportJobs', this.pageOfListExportJobs, request, options)

  
  protected pageOfListAlertRules = (request: Readonly<ListAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListAlertRulesResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-rules`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['status', request.status],
        ),
        signal: options?.signal,
      },
      unmarshalListAlertRulesResponse,
    )
  
  /**
   * List alert rules for a specified organization and their current status (enabled or disabled).
   *
   * @param request - The request {@link ListAlertRulesRequest}
   * @returns A Promise of ListAlertRulesResponse
   */
  listAlertRules = (request: Readonly<ListAlertRulesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('alertRules', this.pageOfListAlertRules, request, options)

  
  protected pageOfListCustomAlertRules = (request: Readonly<ListCustomAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<ListCustomAlertRulesResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['page', request.page],
          ['page_size', request.pageSize ?? this.client.settings.defaultPageSize],
          ['status', request.status],
        ),
        signal: options?.signal,
      },
      unmarshalListCustomAlertRulesResponse,
    )
  
  /**
   * List custom alert rules for a specified organization and their current status (enabled or disabled).
   *
   * @param request - The request {@link ListCustomAlertRulesRequest}
   * @returns A Promise of ListCustomAlertRulesResponse
   */
  listCustomAlertRules = (request: Readonly<ListCustomAlertRulesRequest> = {}, options?: RequestOptions) =>
    enrichForPagination('customAlertRules', this.pageOfListCustomAlertRules, request, options)

  
  /**
   * Enable alert rules. Enable alert rules for a specified organization. Enabled rules will trigger alerts when matching events occur.
   *
   * @param request - The request {@link EnableAlertRulesRequest}
   * @returns A Promise of EnableAlertRulesResponse
   */
  enableAlertRules = (request: Readonly<EnableAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<EnableAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalEnableAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/enable-alert-rules`,
        signal: options?.signal,
      },
      unmarshalEnableAlertRulesResponse,
    )

  
  /**
   * Enable custom alert rules. Enable custom alert rules for a specified organization. Enabled custom rules will trigger alerts when matching events occur.
   *
   * @param request - The request {@link EnableCustomAlertRulesRequest}
   * @returns A Promise of EnableCustomAlertRulesResponse
   */
  enableCustomAlertRules = (request: Readonly<EnableCustomAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<EnableCustomAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalEnableCustomAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/enable-custom-alert-rules`,
        signal: options?.signal,
      },
      unmarshalEnableCustomAlertRulesResponse,
    )

  
  /**
   * Disable alert rules. Disable alert rules for a specified organization. Disabled rules will no longer trigger alerts when matching events occur.
   *
   * @param request - The request {@link DisableAlertRulesRequest}
   * @returns A Promise of DisableAlertRulesResponse
   */
  disableAlertRules = (request: Readonly<DisableAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<DisableAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalDisableAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/disable-alert-rules`,
        signal: options?.signal,
      },
      unmarshalDisableAlertRulesResponse,
    )

  
  /**
   * Disable custom alert rules. Disable custom alert rules for a specified organization. Disabled rules will no longer trigger alerts when matching events occur.
   *
   * @param request - The request {@link DisableCustomAlertRulesRequest}
   * @returns A Promise of DisableCustomAlertRulesResponse
   */
  disableCustomAlertRules = (request: Readonly<DisableCustomAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<DisableCustomAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalDisableCustomAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/disable-custom-alert-rules`,
        signal: options?.signal,
      },
      unmarshalDisableCustomAlertRulesResponse,
    )

  
  /**
   * Set the alert rules to enabled. Set the alert rules to enabled by replacing the set of enabled alert rules for a specified organization. The provided list defines the complete set of rules that should be enabled. Any previously enabled rule not included in the request will be disabled.
   *
   * @param request - The request {@link SetEnabledAlertRulesRequest}
   * @returns A Promise of SetEnabledAlertRulesResponse
   */
  setEnabledAlertRules = (request: Readonly<SetEnabledAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<SetEnabledAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetEnabledAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-rules`,
        signal: options?.signal,
      },
      unmarshalSetEnabledAlertRulesResponse,
    )

  
  /**
   * Set the custom alert rules to enabled. Set the custom alert rules to enabled by replacing the set of enabled custom alert rules for a specified organization. The provided list defines the complete set of custom rules that should be enabled. Any previously enabled custom rule not included in the request will be disabled.
   *
   * @param request - The request {@link SetEnabledCustomAlertRulesRequest}
   * @returns A Promise of SetEnabledCustomAlertRulesResponse
   */
  setEnabledCustomAlertRules = (request: Readonly<SetEnabledCustomAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<SetEnabledCustomAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetEnabledCustomAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules`,
        signal: options?.signal,
      },
      unmarshalSetEnabledCustomAlertRulesResponse,
    )

  
  /**
   * Create a custom alert rule. Create a custom alert rule in a given region specified by the `region` parameter.
   *
   * @param request - The request {@link CreateCustomAlertRuleRequest}
   * @returns A Promise of CustomAlertRule
   */
  createCustomAlertRule = (request: Readonly<CreateCustomAlertRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<CustomAlertRule>(
      {
        body: JSON.stringify(
          marshalCreateCustomAlertRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules`,
        signal: options?.signal,
      },
      unmarshalCustomAlertRule,
    )

  
  /**
   * Update a custom alert rule. Modify a custom alert rule's metadata including name and description, specified by the `alert_rule_id` and `region` parameters.
   *
   * @param request - The request {@link UpdateCustomAlertRuleRequest}
   * @returns A Promise of CustomAlertRule
   */
  updateCustomAlertRule = (request: Readonly<UpdateCustomAlertRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<CustomAlertRule>(
      {
        body: JSON.stringify(
          marshalUpdateCustomAlertRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules/${validatePathParam('customAlertRuleId', request.customAlertRuleId)}`,
        signal: options?.signal,
      },
      unmarshalCustomAlertRule,
    )

  
  /**
   * Delete a custom alert rule. Permanently delete a custom alert rule specified by the `region` and `alert_rule_id` parameters. This action is irreversible.
   *
   * @param request - The request {@link DeleteCustomAlertRuleRequest}
   */
  deleteCustomAlertRule = (request: Readonly<DeleteCustomAlertRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules/${validatePathParam('customAlertRuleId', request.customAlertRuleId)}`,
        signal: options?.signal,
      },
    )

  
  /**
   * Test a custom alert rule. Test whether a custom alert rule's condition is currently satisfied, without needing to create or enable it.
   *
   * @param request - The request {@link TestCustomAlertRuleRequest}
   * @returns A Promise of TestCustomAlertRuleResponse
   */
  testCustomAlertRule = (request: Readonly<TestCustomAlertRuleRequest>, options?: RequestOptions) =>
    this.client.fetch<TestCustomAlertRuleResponse>(
      {
        body: JSON.stringify(
          marshalTestCustomAlertRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/test-custom-alert-rule`,
        signal: options?.signal,
      },
      unmarshalTestCustomAlertRuleResponse,
    )

  
  /**
   * Retrieve available fields for custom alert rules. Retrieve all available fields that can be used to construct Common Expression Language (CEL) queries for custom alert rules.
   *
   * @param request - The request {@link RetrieveAvailableFieldsForCustomAlertRulesRequest}
   * @returns A Promise of RetrieveAvailableFieldsForCustomAlertRulesResponse
   */
  retrieveAvailableFieldsForCustomAlertRules = (request: Readonly<RetrieveAvailableFieldsForCustomAlertRulesRequest> = {}, options?: RequestOptions) =>
    this.client.fetch<RetrieveAvailableFieldsForCustomAlertRulesResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rule-fields`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
        ),
        signal: options?.signal,
      },
      unmarshalRetrieveAvailableFieldsForCustomAlertRulesResponse,
    )

  
}

