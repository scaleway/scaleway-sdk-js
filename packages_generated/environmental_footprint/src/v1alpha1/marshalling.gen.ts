// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  Impact,
  ImpactDataResponse,
  ImpactReportAvailability,
  ProjectImpact,
  RegionImpact,
  SkuImpact,
  UserApiDownloadImpactReportRequest,
  ZoneImpact,
} from './types.gen.js'

const unmarshalImpact = (data: unknown): Impact => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Impact' failed as data isn't a dictionary.`,
    )
  }

  return {
    kgCo2Equivalent: data.kg_co2_equivalent,
    m3WaterUsage: data.m3_water_usage,
  } as Impact
}

const unmarshalSkuImpact = (data: unknown): SkuImpact => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SkuImpact' failed as data isn't a dictionary.`,
    )
  }

  return {
    productCategory: data.product_category,
    serviceCategory: data.service_category,
    sku: data.sku,
    totalSkuImpact: data.total_sku_impact
      ? unmarshalImpact(data.total_sku_impact)
      : undefined,
  } as SkuImpact
}

const unmarshalZoneImpact = (data: unknown): ZoneImpact => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ZoneImpact' failed as data isn't a dictionary.`,
    )
  }

  return {
    skus: unmarshalArrayOfObject(data.skus, unmarshalSkuImpact),
    totalZoneImpact: data.total_zone_impact
      ? unmarshalImpact(data.total_zone_impact)
      : undefined,
    zone: data.zone,
  } as ZoneImpact
}

const unmarshalRegionImpact = (data: unknown): RegionImpact => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RegionImpact' failed as data isn't a dictionary.`,
    )
  }

  return {
    region: data.region,
    totalRegionImpact: data.total_region_impact
      ? unmarshalImpact(data.total_region_impact)
      : undefined,
    zones: unmarshalArrayOfObject(data.zones, unmarshalZoneImpact),
  } as RegionImpact
}

const unmarshalProjectImpact = (data: unknown): ProjectImpact => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ProjectImpact' failed as data isn't a dictionary.`,
    )
  }

  return {
    projectId: data.project_id,
    regions: unmarshalArrayOfObject(data.regions, unmarshalRegionImpact),
    totalProjectImpact: data.total_project_impact
      ? unmarshalImpact(data.total_project_impact)
      : undefined,
  } as ProjectImpact
}

export const unmarshalImpactDataResponse = (
  data: unknown,
): ImpactDataResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ImpactDataResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    endDate: unmarshalDate(data.end_date),
    projects: unmarshalArrayOfObject(data.projects, unmarshalProjectImpact),
    startDate: unmarshalDate(data.start_date),
    totalImpact: data.total_impact
      ? unmarshalImpact(data.total_impact)
      : undefined,
  } as ImpactDataResponse
}

export const unmarshalImpactReportAvailability = (
  data: unknown,
): ImpactReportAvailability => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ImpactReportAvailability' failed as data isn't a dictionary.`,
    )
  }

  return {
    monthSummaryReports: unmarshalArrayOfObject(
      data.month_summary_reports,
      unmarshalDate,
    ),
  } as ImpactReportAvailability
}

export const marshalUserApiDownloadImpactReportRequest = (
  request: UserApiDownloadImpactReportRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  date: request.date,
  organization_id: request.organizationId ?? defaults.defaultOrganizationId,
  type: request.type,
})
