// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


export type ListImagesRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListLocalImagesRequestOrderBy =
  | 'type_asc'
  | 'type_desc'
  | 'created_at_asc'
  | 'created_at_desc'

export type ListVersionsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'

export type LocalImageType =
  | 'unknown_type'
  | 'instance_local'
  | 'instance_sbs'

export interface Category {
  id: string
  name: string
  description: string
}


export interface Image {
  /**
   * UUID of this image.
   */
  id: string
  /**
   * Name of the image.
   */
  name: string
  /**
   * Text description of this image.
   */
  description: string
  /**
   * URL of this image's logo.
   */
  logo: string
  /**
   * List of categories this image belongs to.
   */
  categories: string[]
  /**
   * Creation date of this image.
   */
  createdAt?: Date
  /**
   * Date of the last modification of this image.
   */
  updatedAt?: Date
  /**
   * Expiration date of this image.
   */
  validUntil?: Date
  /**
   * Typically an identifier for a distribution (ex. "ubuntu_focal").
This label can be used in the image field of the server creation request.
   */
  label: string
}


export interface LocalImage {
  /**
   * Version you will typically use to define an image in an API call.
   */
  id: string
  /**
   * List of all commercial types that are compatible with this local image.
   */
  compatibleCommercialTypes: string[]
  /**
   * Supported architecture for this local image.
   */
  arch: string
  /**
   * Availability Zone where this local image is available.
   */
  zone: ScwZone
  /**
   * This label can be used in the image field of the server creation request.
   */
  label: string
  /**
   * Type of this local image.
   */
  type: LocalImageType
}


export interface Version {
  /**
   * UUID of this version.
   */
  id: string
  /**
   * Name of this version.
   */
  name: string
  /**
   * Creation date of this image version.
   */
  createdAt?: Date
  /**
   * Date of the last modification of this version.
   */
  updatedAt?: Date
  /**
   * Date this version was officially published.
   */
  publishedAt?: Date
}


export type GetCategoryRequest = {
  categoryId: string
}


export type GetImageRequest = {
  /**
   * Display the image name.
   */
  imageId: string
}


export type GetLocalImageRequest = {
  localImageId: string
}


export type GetVersionRequest = {
  versionId: string
}


export type ListCategoriesRequest = {
  pageSize?: number
  page?: number
}


export interface ListCategoriesResponse {
  categories: Category[]
  totalCount: number
}


export type ListImagesRequest = {
  /**
   * A positive integer lower or equal to 100 to select the number of items to display.
   */
  pageSize?: number
  /**
   * A positive integer to choose the page to display.
   */
  page?: number
  /**
   * Ordering to use.
   */
  orderBy?: ListImagesRequestOrderBy
  /**
   * Choose for which machine architecture to return images.
   */
  arch?: string
  /**
   * Choose the category of images to get.
   */
  category?: string
  /**
   * Choose to include end-of-life images.
   */
  includeEol: boolean
}


export interface ListImagesResponse {
  images: Image[]
  totalCount: number
}


export type ListLocalImagesRequest = {
  /**
   * A positive integer lower or equal to 100 to select the number of items to display.
   */
  pageSize?: number
  /**
   * A positive integer to choose the page to display.
   */
  page?: number
  /**
   * Ordering to use.
   */
  orderBy?: ListLocalImagesRequestOrderBy
  /**
   * Filter local images available on this Availability Zone.
   */
  zone?: ScwZone
  /**
   * Filter local images available for this machine architecture.
   */
  arch?: string
  /**
   * Filter by image id.
   *
   * One-of ('scope'): at most one of 'imageId', 'versionId', 'imageLabel' could be set.
   */
  imageId?: string
  /**
   * Filter by version id.
   *
   * One-of ('scope'): at most one of 'imageId', 'versionId', 'imageLabel' could be set.
   */
  versionId?: string
  /**
   * Filter by image label.
   *
   * One-of ('scope'): at most one of 'imageId', 'versionId', 'imageLabel' could be set.
   */
  imageLabel?: string
  /**
   * Filter by type.
   */
  type?: LocalImageType
}


export interface ListLocalImagesResponse {
  localImages: LocalImage[]
  totalCount: number
}


export type ListVersionsRequest = {
  imageId: string
  pageSize?: number
  page?: number
  orderBy?: ListVersionsRequestOrderBy
}


export interface ListVersionsResponse {
  versions: Version[]
  totalCount: number
}


