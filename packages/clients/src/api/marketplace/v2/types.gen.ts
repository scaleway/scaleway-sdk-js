// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export type ListImagesRequestOrderBy =
  | 'name_asc'
  | 'name_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListLocalImagesRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListVersionsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export interface Category {
  id: string
  name: string
  description: string
}

/** Image. */
export interface Image {
  /** UUID of this image. */
  id: string
  /** Name of the image. */
  name: string
  /** Text description of this image. */
  description: string
  /** URL of this image's logo. */
  logo: string
  /** List of categories this image belongs to. */
  categories: string[]
  /** Creation date of this image. */
  createdAt?: Date
  /** Date of the last modification of this image. */
  updatedAt?: Date
  /** Expiration date of this image. */
  validUntil?: Date
  /** Typically an identifier for a distribution (ex. "ubuntu_focal"). */
  label: string
}

export interface ListCategoriesResponse {
  categories: Category[]
  totalCount: number
}

export interface ListImagesResponse {
  images: Image[]
  totalCount: number
}

export interface ListLocalImagesResponse {
  localImages: LocalImage[]
  totalCount: number
}

export interface ListVersionsResponse {
  versions: Version[]
  totalCount: number
}

/** Local image. */
export interface LocalImage {
  /** Version you will typically use to define an image in an API call. */
  id: string
  /** List of all commercial types that are compatible with this local image. */
  compatibleCommercialTypes: string[]
  /** Supported architecture for this local image. */
  arch: string
  /** Availability Zone where this local image is available. */
  zone: Zone
  /** Image label this image belongs to. */
  label: string
}

/** Version. */
export interface Version {
  /** UUID of this version. */
  id: string
  /** Name of this version. */
  name: string
  /** Creation date of this image version. */
  createdAt?: Date
  /** Date of the last modification of this version. */
  updatedAt?: Date
  /** Date this version was officially published. */
  publishedAt?: Date
}

export type ListImagesRequest = {
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * display.
   */
  pageSize?: number
  /** A positive integer to choose the page to display. */
  page?: number
  /** Ordering to use. */
  orderBy?: ListImagesRequestOrderBy
  /** Choose for which machine architecture to return images. */
  arch?: string
  /** Choose the category of images to get. */
  category?: string
  /** Choose to include end-of-life images. */
  includeEol: boolean
}

export type GetImageRequest = {
  /** Display the image name. */
  imageId: string
}

export type ListVersionsRequest = {
  imageId: string
  pageSize?: number
  page?: number
  orderBy?: ListVersionsRequestOrderBy
}

export type GetVersionRequest = {
  versionId: string
}

export type ListLocalImagesRequest = {
  /**
   * One-of ('scope'): at most one of 'imageId', 'versionId', 'imageLabel' could
   * be set.
   */
  imageId?: string
  /**
   * One-of ('scope'): at most one of 'imageId', 'versionId', 'imageLabel' could
   * be set.
   */
  versionId?: string
  pageSize?: number
  page?: number
  orderBy?: ListLocalImagesRequestOrderBy
  /**
   * One-of ('scope'): at most one of 'imageId', 'versionId', 'imageLabel' could
   * be set.
   */
  imageLabel?: string
  zone?: Zone
}

export type GetLocalImageRequest = {
  localImageId: string
}

export type ListCategoriesRequest = {
  pageSize?: number
  page?: number
}

export type GetCategoryRequest = {
  categoryId: string
}
