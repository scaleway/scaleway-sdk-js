// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion, Zone as ScwZone } from '@scaleway/sdk-client'

export type ProductCategory =
  | 'unknown_product_category'
  | 'apple_silicon'
  | 'block_storage'
  | 'dedibox'
  | 'elastic_metal'
  | 'instances'
  | 'object_storage'
  | 'load_balancer'

export type ReportType = 'unknown_report_type' | 'monthly' | 'yearly'

export type ServiceCategory =
  | 'unknown_service_category'
  | 'baremetal'
  | 'compute'
  | 'storage'
  | 'network'

export interface Impact {
  /**
   * The estimated carbon emissions in kilograms of CO₂ equivalent (kgCO₂e).
   */
  kgCo2Equivalent: number
  /**
   * The estimated water consumption in cubic meters (m³).
   */
  m3WaterUsage: number
}

export interface SkuImpact {
  /**
   * Unique ID of the combination of product, region and zone.
   */
  sku: string
  /**
   * The total estimated impact for this SKU during the given period.
   */
  totalSkuImpact?: Impact
  /**
   * The service category associated with this SKU.
   */
  serviceCategory: ServiceCategory
  /**
   * The product category associated with this SKU.
   */
  productCategory: ProductCategory
}

export interface ZoneImpact {
  /**
   * ID of the zone.
   */
  zone: ScwZone
  /**
   * The total estimated impact for this zone across all given service categories, and product categories during the given period.
   */
  totalZoneImpact?: Impact
  /**
   * List of estimated impact values per SKU.
   */
  skus: SkuImpact[]
}

export interface RegionImpact {
  /**
   * ID of the region.
   */
  region: ScwRegion
  /**
   * The total estimated impact for this region across all given zones, service categories, and product categories during the given period.
   */
  totalRegionImpact?: Impact
  /**
   * List of estimated impact values per zone.
   */
  zones: ZoneImpact[]
}

export interface ProjectImpact {
  /**
   * ID of the project.
   */
  projectId: string
  /**
   * The total estimated impact for this Project across all given regions, zones, service categories, and product categories during the given period.
   */
  totalProjectImpact?: Impact
  /**
   * List of estimated impact values per region.
   */
  regions: RegionImpact[]
}

export interface ImpactDataResponse {
  /**
   * Start date of the impact data period (inclusive).
   */
  startDate?: Date
  /**
   * End date of the impact data period (exclusive).
   */
  endDate?: Date
  /**
   * The total estimated impact across all given Projects, regions, zones, service categories, and product categories during the given period.
   */
  totalImpact?: Impact
  /**
   * List of estimated impact values per Project.
   */
  projects: ProjectImpact[]
}

export interface ImpactReportAvailability {
  /**
   * The list of calendar months for which impact reports are available.
   */
  monthSummaryReports: Date[]
}

export type UserApiDownloadImpactReportRequest = {
  /**
   * The UUID of the Organization for which you want to download a report.
   */
  organizationId?: string
  /**
   * The start date of the period for which you want to download a report (ISO 8601 format, e.g. 2025-05-01T00:00:00Z).
   */
  date?: Date
  /**
   * Type of report to download (e.g. `monthly`).
   */
  type?: ReportType
}

export type UserApiGetImpactDataRequest = {
  /**
   * The UUID of the Organization for which you want to download a report.
   */
  organizationId?: string
  /**
   * Start date (inclusive) of the period for which you want to retrieve impact data (ISO 8601 format, e.g. 2025-05-01T00:00:00Z).
   */
  startDate?: Date
  /**
   * End date (exclusive) of the period for which you want to retrieve impact data (ISO 8601 format, with time in UTC, `YYYY-MM-DDTHH:MM:SSZ`). Defaults to today's date.
   */
  endDate?: Date
  /**
   * List of regions to filter by (e.g. `fr-par`). Defaults to all regions.
   */
  regions?: string[]
  /**
   * List of zones to filter by (e.g. `fr-par-1`). Defaults to all zones.
   */
  zones?: string[]
  /**
   * List of Project IDs to filter by. Defaults to all Projects in the Organization.
   */
  projectIds?: string[]
  /**
   * List of service categories to filter by. Defaults to all service categories.
   */
  serviceCategories?: ServiceCategory[]
  /**
   * List of product categories to filter by. Defaults to all product categories.
   */
  productCategories?: ProductCategory[]
}

export type UserApiGetImpactReportAvailabilityRequest = {
  /**
   * The UUID of the Organization for which you want to download a report.
   */
  organizationId?: string
  /**
   * Start date of the search period (ISO 8601 format, with time in UTC, `YYYY-MM-DDTHH:MM:SSZ`). The date is inclusive.
   */
  startDate?: Date
  /**
   * End date of the search period (ISO 8601 format, with time in UTC, `YYYY-MM-DDTHH:MM:SSZ`). The date is inclusive. Defaults to today's date.
   */
  endDate?: Date
}
