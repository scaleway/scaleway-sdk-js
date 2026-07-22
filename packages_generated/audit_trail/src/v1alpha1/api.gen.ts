// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  toApiLocality,
} from '@scaleway/sdk-client'
import type { ApiLocality,} from '@scaleway/sdk-client'
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
  marshalSetEnabledAlertRulesRequest,
  unmarshalSetEnabledAlertRulesResponse,
  marshalSetEnabledCustomAlertRulesRequest,
  unmarshalSetEnabledCustomAlertRulesResponse,
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
  SetEnabledAlertRulesRequest,
  SetEnabledAlertRulesResponse,
  SetEnabledCustomAlertRulesRequest,
  SetEnabledCustomAlertRulesResponse,
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
  listEvents = (request: Readonly<ListEventsRequest> = {}) =>
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
      },
      unmarshalListEventsResponse,
    )

  
  /**
   * List authentication events. Retrieve the list of Audit Trail authentication events for a Scaleway Organization. You must specify the `organization_id`.
   *
   * @param request - The request {@link ListAuthenticationEventsRequest}
   * @returns A Promise of ListAuthenticationEventsResponse
   */
  listAuthenticationEvents = (request: Readonly<ListAuthenticationEventsRequest> = {}) =>
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
      },
      unmarshalListAuthenticationEventsResponse,
    )

  
  /**
   * List system events. Retrieve the list of Audit Trail system events for a Scaleway Organization. You must specify the `organization_id`.
   *
   * @param request - The request {@link ListSystemEventsRequest}
   * @returns A Promise of ListSystemEventsResponse
   */
  listSystemEvents = (request: Readonly<ListSystemEventsRequest> = {}) =>
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
      },
      unmarshalListSystemEventsResponse,
    )

  
  listCombinedEvents = (request: Readonly<ListCombinedEventsRequest> = {}) =>
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
      },
      unmarshalListCombinedEventsResponse,
    )

  
  /**
   * Retrieve the list of Scaleway resources for which you have Audit Trail events.
   *
   * @param request - The request {@link ListProductsRequest}
   * @returns A Promise of ListProductsResponse
   */
  listProducts = (request: Readonly<ListProductsRequest> = {}) =>
    this.client.fetch<ListProductsResponse>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/products`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
        ),
      },
      unmarshalListProductsResponse,
    )

  
  getLastEventsOverview = (request: Readonly<GetLastEventsOverviewRequest> = {}) =>
    this.client.fetch<EventsOverview>(
      {
        method: 'GET',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/last-events-overview`,
        urlParams: urlParams(
          ['organization_id', request.organizationId ?? this.client.settings.defaultOrganizationId],
          ['project_id', request.projectId],
        ),
      },
      unmarshalEventsOverview,
    )

  
  /**
   * Create an export job. Create an export job for a specified organization. This allows you to export audit trail events to a destination, such as an S3 bucket. The request requires the organization ID, a name for the export, and a destination configuration.
   *
   * @param request - The request {@link CreateExportJobRequest}
   * @returns A Promise of ExportJob
   */
  createExportJob = (request: Readonly<CreateExportJobRequest>) =>
    this.client.fetch<ExportJob>(
      {
        body: JSON.stringify(
          marshalCreateExportJobRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/export-jobs`,
      },
      unmarshalExportJob,
    )

  
  /**
   * Delete an export job. Deletes an export job for a specified id.
   *
   * @param request - The request {@link DeleteExportJobRequest}
   */
  deleteExportJob = (request: Readonly<DeleteExportJobRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/export-jobs/${validatePathParam('exportJobId', request.exportJobId)}`,
      },
    )

  
  protected pageOfListExportJobs = (request: Readonly<ListExportJobsRequest> = {}) =>
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
      },
      unmarshalListExportJobsResponse,
    )
  
  listExportJobs = (request: Readonly<ListExportJobsRequest> = {}) =>
    enrichForPagination('exportJobs', this.pageOfListExportJobs, request)

  
  protected pageOfListAlertRules = (request: Readonly<ListAlertRulesRequest> = {}) =>
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
      },
      unmarshalListAlertRulesResponse,
    )
  
  /**
   * List alert rules for a specified organization and their current status (enabled or disabled).
   *
   * @param request - The request {@link ListAlertRulesRequest}
   * @returns A Promise of ListAlertRulesResponse
   */
  listAlertRules = (request: Readonly<ListAlertRulesRequest> = {}) =>
    enrichForPagination('alertRules', this.pageOfListAlertRules, request)

  
  protected pageOfListCustomAlertRules = (request: Readonly<ListCustomAlertRulesRequest> = {}) =>
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
      },
      unmarshalListCustomAlertRulesResponse,
    )
  
  /**
   * List custom alert rules for a specified organization and their current status (enabled or disabled).
   *
   * @param request - The request {@link ListCustomAlertRulesRequest}
   * @returns A Promise of ListCustomAlertRulesResponse
   */
  listCustomAlertRules = (request: Readonly<ListCustomAlertRulesRequest> = {}) =>
    enrichForPagination('customAlertRules', this.pageOfListCustomAlertRules, request)

  
  /**
   * Enable alert rules. Enable alert rules for a specified organization. Enabled rules will trigger alerts when matching events occur.
   *
   * @param request - The request {@link EnableAlertRulesRequest}
   * @returns A Promise of EnableAlertRulesResponse
   */
  enableAlertRules = (request: Readonly<EnableAlertRulesRequest> = {}) =>
    this.client.fetch<EnableAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalEnableAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/enable-alert-rules`,
      },
      unmarshalEnableAlertRulesResponse,
    )

  
  /**
   * Enable custom alert rules. Enable custom alert rules for a specified organization. Enabled custom rules will trigger alerts when matching events occur.
   *
   * @param request - The request {@link EnableCustomAlertRulesRequest}
   * @returns A Promise of EnableCustomAlertRulesResponse
   */
  enableCustomAlertRules = (request: Readonly<EnableCustomAlertRulesRequest> = {}) =>
    this.client.fetch<EnableCustomAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalEnableCustomAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/enable-custom-alert-rules`,
      },
      unmarshalEnableCustomAlertRulesResponse,
    )

  
  /**
   * Disable alert rules. Disable alert rules for a specified organization. Disabled rules will no longer trigger alerts when matching events occur.
   *
   * @param request - The request {@link DisableAlertRulesRequest}
   * @returns A Promise of DisableAlertRulesResponse
   */
  disableAlertRules = (request: Readonly<DisableAlertRulesRequest> = {}) =>
    this.client.fetch<DisableAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalDisableAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/disable-alert-rules`,
      },
      unmarshalDisableAlertRulesResponse,
    )

  
  /**
   * Disable custom alert rules. Disable custom alert rules for a specified organization. Disabled rules will no longer trigger alerts when matching events occur.
   *
   * @param request - The request {@link DisableCustomAlertRulesRequest}
   * @returns A Promise of DisableCustomAlertRulesResponse
   */
  disableCustomAlertRules = (request: Readonly<DisableCustomAlertRulesRequest> = {}) =>
    this.client.fetch<DisableCustomAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalDisableCustomAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/disable-custom-alert-rules`,
      },
      unmarshalDisableCustomAlertRulesResponse,
    )

  
  /**
   * Set the alert rules to enabled. Set the alert rules to enabled by replacing the set of enabled alert rules for a specified organization. The provided list defines the complete set of rules that should be enabled. Any previously enabled rule not included in the request will be disabled.
   *
   * @param request - The request {@link SetEnabledAlertRulesRequest}
   * @returns A Promise of SetEnabledAlertRulesResponse
   */
  setEnabledAlertRules = (request: Readonly<SetEnabledAlertRulesRequest> = {}) =>
    this.client.fetch<SetEnabledAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetEnabledAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/alert-rules`,
      },
      unmarshalSetEnabledAlertRulesResponse,
    )

  
  /**
   * Set the custom alert rules to enabled. Set the custom alert rules to enabled by replacing the set of enabled custom alert rules for a specified organization. The provided list defines the complete set of custom rules that should be enabled. Any previously enabled custom rule not included in the request will be disabled.
   *
   * @param request - The request {@link SetEnabledCustomAlertRulesRequest}
   * @returns A Promise of SetEnabledCustomAlertRulesResponse
   */
  setEnabledCustomAlertRules = (request: Readonly<SetEnabledCustomAlertRulesRequest> = {}) =>
    this.client.fetch<SetEnabledCustomAlertRulesResponse>(
      {
        body: JSON.stringify(
          marshalSetEnabledCustomAlertRulesRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PUT',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules`,
      },
      unmarshalSetEnabledCustomAlertRulesResponse,
    )

  
  /**
   * Create a custom alert rule. Create a custom alert rule in a given region specified by the `region` parameter.
   *
   * @param request - The request {@link CreateCustomAlertRuleRequest}
   * @returns A Promise of CustomAlertRule
   */
  createCustomAlertRule = (request: Readonly<CreateCustomAlertRuleRequest>) =>
    this.client.fetch<CustomAlertRule>(
      {
        body: JSON.stringify(
          marshalCreateCustomAlertRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules`,
      },
      unmarshalCustomAlertRule,
    )

  
  /**
   * Update a custom alert rule. Modify a custom alert rule's metadata including name and description, specified by the `alert_rule_id` and `region` parameters.
   *
   * @param request - The request {@link UpdateCustomAlertRuleRequest}
   * @returns A Promise of CustomAlertRule
   */
  updateCustomAlertRule = (request: Readonly<UpdateCustomAlertRuleRequest>) =>
    this.client.fetch<CustomAlertRule>(
      {
        body: JSON.stringify(
          marshalUpdateCustomAlertRuleRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules/${validatePathParam('customAlertRuleId', request.customAlertRuleId)}`,
      },
      unmarshalCustomAlertRule,
    )

  
  /**
   * Delete a custom alert rule. Permanently delete a custom alert rule specified by the `region` and `alert_rule_id` parameters. This action is irreversible.
   *
   * @param request - The request {@link DeleteCustomAlertRuleRequest}
   */
  deleteCustomAlertRule = (request: Readonly<DeleteCustomAlertRuleRequest>) =>
    this.client.fetch<void>(
      {
        method: 'DELETE',
        path: `/audit-trail/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/custom-alert-rules/${validatePathParam('customAlertRuleId', request.customAlertRuleId)}`,
      },
    )

  
}

