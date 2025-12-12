// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region as ScwRegion } from '@scaleway/sdk-client'

export type ImageStatus = 'unknown' | 'ready' | 'deleting' | 'error' | 'locked'

export type ImageVisibility =
  | 'visibility_unknown'
  | 'inherit'
  | 'public'
  | 'private'

export type ListImagesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListNamespacesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'description_asc'
  | 'description_desc'
  | 'name_asc'
  | 'name_desc'

export type ListTagsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type NamespaceStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'

export type TagStatus = 'unknown' | 'ready' | 'deleting' | 'error' | 'locked'

export interface Image {
  /**
   * UUID of the image.
   */
  id: string
  /**
   * Name of the image, it must be unique within the namespace.
   */
  name: string
  /**
   * UUID of the namespace the image belongs to.
   */
  namespaceId: string
  /**
   * Status of the image.
   */
  status: ImageStatus
  /**
   * Details of the image status.
   */
  statusMessage?: string
  /**
   * Set to `public` to allow the image to be pulled without authentication. Else, set to  `private`. Set to `inherit` to keep the same visibility configuration as the namespace.
   */
  visibility: ImageVisibility
  /**
   * Image size in bytes, calculated from the size of image layers. One layer used in two tags of the same image is counted once but one layer used in two images is counted twice.
   */
  size: number
  /**
   * Date and time of image creation.
   */
  createdAt?: Date
  /**
   * Date and time of last update.
   */
  updatedAt?: Date
  /**
   * List of docker tags of the image.
   */
  tags: string[]
}

export interface Namespace {
  /**
   * UUID of the namespace.
   */
  id: string
  /**
   * Name of the namespace, unique in a region across all organizations.
   */
  name: string
  /**
   * Description of the namespace.
   */
  description: string
  /**
   * Owner of the namespace.
   */
  organizationId: string
  /**
   * Project of the namespace.
   */
  projectId: string
  /**
   * Namespace status.
   */
  status: NamespaceStatus
  /**
   * Namespace status details.
   */
  statusMessage: string
  /**
   * Endpoint reachable by docker.
   */
  endpoint: string
  /**
   * Defines whether or not namespace is public.
   */
  isPublic: boolean
  /**
   * Total size of the namespace, calculated as the sum of the size of all images in the namespace.
   */
  size: number
  /**
   * Date and time of creation.
   */
  createdAt?: Date
  /**
   * Date and time of last update.
   */
  updatedAt?: Date
  /**
   * Number of images in the namespace.
   */
  imageCount: number
  /**
   * Region the namespace belongs to.
   */
  region: ScwRegion
}

export interface Tag {
  /**
   * UUID of the tag.
   */
  id: string
  /**
   * Tag name, unique to an image.
   */
  name: string
  /**
   * Image ID the of the image the tag belongs to.
   */
  imageId: string
  /**
   * Tag status.
   */
  status: TagStatus
  /**
   * Hash of the tag content. Several tags of a same image may have the same digest.
   */
  digest: string
  /**
   * Date and time of creation.
   */
  createdAt?: Date
  /**
   * Date and time of last update.
   */
  updatedAt?: Date
}

export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Name of the namespace.
   */
  name?: string
  /**
   * Description of the namespace.
   */
  description: string
  /**
   * @deprecated Namespace owner (deprecated).
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  organizationId?: string
  /**
   * Project ID on which the namespace will be created.
   *
   * One-of ('projectIdentifier'): at most one of 'projectId', 'organizationId' could be set.
   */
  projectId?: string
  /**
   * Defines whether or not namespace is public.
   */
  isPublic: boolean
}

export type DeleteImageRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the image.
   */
  imageId: string
}

export type DeleteNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespace.
   */
  namespaceId: string
}

export type DeleteTagRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the tag.
   */
  tagId: string
  /**
   * @deprecated If two tags share the same digest the deletion will fail unless this parameter is set to true (deprecated).
   */
  force?: boolean
}

export type GetImageRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the image.
   */
  imageId: string
}

export type GetNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the namespace.
   */
  namespaceId: string
}

export type GetTagRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the tag.
   */
  tagId: string
}

export type ListImagesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * A positive integer to choose the page to display.
   */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to display.
   */
  pageSize?: number
  /**
   * Criteria to use when ordering image listings. Possible values are `created_at_asc`, `created_at_desc`, `name_asc`, `name_desc`, `region`, `status_asc` and `status_desc`. The default value is `created_at_asc`.
   */
  orderBy?: ListImagesRequestOrderBy
  /**
   * Filter by the namespace ID.
   */
  namespaceId?: string
  /**
   * Filter by the image name (exact match).
   */
  name?: string
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Filter by Project ID.
   */
  projectId?: string
}

export interface ListImagesResponse {
  /**
   * Paginated list of images that match the selected filters.
   */
  images: Image[]
  /**
   * Total number of images that match the selected filters.
   */
  totalCount: number
}

export type ListNamespacesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * A positive integer to choose the page to display.
   */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to display.
   */
  pageSize?: number
  /**
   * Criteria to use when ordering namespace listings. Possible values are `created_at_asc`, `created_at_desc`, `name_asc`, `name_desc`, `region`, `status_asc` and `status_desc`. The default value is `created_at_asc`.
   */
  orderBy?: ListNamespacesRequestOrderBy
  /**
   * Filter by Organization ID.
   */
  organizationId?: string
  /**
   * Filter by Project ID.
   */
  projectId?: string
  /**
   * Filter by the namespace name (exact match).
   */
  name?: string
}

export interface ListNamespacesResponse {
  /**
   * Paginated list of namespaces that match the selected filters.
   */
  namespaces: Namespace[]
  /**
   * Total number of namespaces that match the selected filters.
   */
  totalCount: number
}

export type ListTagsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the image.
   */
  imageId: string
  /**
   * A positive integer to choose the page to display.
   */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to display.
   */
  pageSize?: number
  /**
   * Criteria to use when ordering tag listings. Possible values are `created_at_asc`, `created_at_desc`, `name_asc`, `name_desc`, `region`, `status_asc` and `status_desc`. The default value is `created_at_asc`.
   */
  orderBy?: ListTagsRequestOrderBy
  /**
   * Filter by the tag name (exact match).
   */
  name?: string
}

export interface ListTagsResponse {
  /**
   * Paginated list of tags that match the selected filters.
   */
  tags: Tag[]
  /**
   * Total number of tags that match the selected filters.
   */
  totalCount: number
}

export type UpdateImageRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the image to update.
   */
  imageId: string
  /**
   * Set to `public` to allow the image to be pulled without authentication. Else, set to  `private`. Set to `inherit` to keep the same visibility configuration as the namespace.
   */
  visibility?: ImageVisibility
}

export type UpdateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the namespace to update.
   */
  namespaceId: string
  /**
   * Namespace description.
   */
  description?: string
  /**
   * Defines whether or not the namespace is public.
   */
  isPublic?: boolean
}
