// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import { API as ParentAPI, urlParams } from '@scaleway/sdk-client'
import {
  unmarshalImpactDataResponse,
  unmarshalImpactReportAvailability,
  marshalUserApiDownloadImpactReportRequest,
} from './marshalling.gen.js'
import type {
  ImpactDataResponse,
  ImpactReportAvailability,
  UserApiDownloadImpactReportRequest,
  UserApiGetImpactDataRequest,
  UserApiGetImpactReportAvailabilityRequest,
} from './types.gen.js'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Environmental Footprint API.

Access and download impact reports and impact data for your Scaleway projects. Our API provides key metrics such as estimated carbon emissions and water usage to help monitor your environmental footprint.
 */
export class UserAPI extends ParentAPI {
  /**
   * Get available impact reports. Returns a list of dates of available impact reports.
   *
   * @param request - The request {@link UserApiGetImpactReportAvailabilityRequest}
   * @returns A Promise of ImpactReportAvailability
   */
  getImpactReportAvailability = (
    request: Readonly<UserApiGetImpactReportAvailabilityRequest> = {},
  ) =>
    this.client.fetch<ImpactReportAvailability>(
      {
        method: 'GET',
        path: `/environmental-footprint/v1alpha1/reports/availability`,
        urlParams: urlParams(
          ['end_date', request.endDate],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['start_date', request.startDate],
        ),
      },
      unmarshalImpactReportAvailability,
    )

  /**
   * Download PDF impact report. Download a Scaleway impact PDF report with detailed impact data for your Scaleway projects.
   *
   * @param request - The request {@link UserApiDownloadImpactReportRequest}
   * @returns A Promise of Blob
   */
  downloadImpactReport = (
    request: Readonly<UserApiDownloadImpactReportRequest> = {},
  ) =>
    this.client.fetch<Blob>({
      body: JSON.stringify(
        marshalUserApiDownloadImpactReportRequest(
          request,
          this.client.settings,
        ),
      ),
      headers: jsonContentHeaders,
      method: 'POST',
      path: `/environmental-footprint/v1alpha1/reports/download`,
      urlParams: urlParams(
        ['dl', 1],
        ['date', request.date],
        [
          'organization_id',
          request.organizationId ?? this.client.settings.defaultOrganizationId,
        ],
        ['type', request.type],
      ),
      responseType: 'blob',
    })

  /**
   * Retrieve detailed impact data. Retrieve detailed impact data for your Scaleway projects within a specified date range. Filter by project ID, region, zone, service category, and/or product category.
   *
   * @param request - The request {@link UserApiGetImpactDataRequest}
   * @returns A Promise of ImpactDataResponse
   */
  getImpactData = (request: Readonly<UserApiGetImpactDataRequest> = {}) =>
    this.client.fetch<ImpactDataResponse>(
      {
        method: 'GET',
        path: `/environmental-footprint/v1alpha1/data/query`,
        urlParams: urlParams(
          ['end_date', request.endDate],
          [
            'organization_id',
            request.organizationId ??
              this.client.settings.defaultOrganizationId,
          ],
          ['product_categories', request.productCategories],
          ['project_ids', request.projectIds],
          ['regions', request.regions],
          ['service_categories', request.serviceCategories],
          ['start_date', request.startDate],
          ['zones', request.zones],
        ),
      },
      unmarshalImpactDataResponse,
    )
}
