// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

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

/** Image */
export interface Image {
  /** The unique ID of the Image */
  id: string
  /** The Image name, unique in a namespace */
  name: string
  /** The unique ID of the Namespace the image belongs to */
  namespaceId: string
  /** The status of the image */
  status: ImageStatus
  /** Details of the image status */
  statusMessage?: string
  /**
   * A `public` image is pullable from internet without authentication, opposed
   * to a `private` image. `inherit` will use the namespace `is_public`
   * parameter
   */
  visibility: ImageVisibility
  /**
   * Image size in bytes, calculated from the size of image layers. One layer
   * used in two tags of the same image is counted once but one layer used in
   * two images is counted twice.
   */
  size: number
  /** Creation date */
  createdAt?: Date
  /** Last modification date, from the user or the service */
  updatedAt?: Date
  /** List of docker tags of the image */
  tags: Array<string>
}

/** List images response */
export interface ListImagesResponse {
  /** Paginated list of images matching filters */
  images: Array<Image>
  /** Total number of images matching filters */
  totalCount: number
}

/** List namespaces response */
export interface ListNamespacesResponse {
  /** Paginated list of namespaces matching filters */
  namespaces: Array<Namespace>
  /** Total number of namespaces matching filters */
  totalCount: number
}

/** List tags response */
export interface ListTagsResponse {
  /** Paginated list of tags matching filters */
  tags: Array<Tag>
  /** Total number of tags matching filters */
  totalCount: number
}

/** Namespace */
export interface Namespace {
  /** The unique ID of the namespace */
  id: string
  /** The name of the namespace, unique in a region accross all organizations */
  name: string
  /** Description of the namespace */
  description: string
  /** Owner of the namespace */
  organizationId: string
  /** Project of the namespace */
  projectId: string
  /** Namespace status */
  status: NamespaceStatus
  /** Namespace status details */
  statusMessage: string
  /** Endpoint reachable by docker */
  endpoint: string
  /** Namespace visibility policy */
  isPublic: boolean
  /**
   * Total size of the namespace, calculated as the sum of the size of all
   * images in the namespace
   */
  size: number
  /** Creation date */
  createdAt?: Date
  /** Last modification date, from the user or the service */
  updatedAt?: Date
  /** Number of images in the namespace */
  imageCount: number
  /** Region the namespace belongs to */
  region: Region
}

/** Tag */
export interface Tag {
  /** The unique ID of the tag */
  id: string
  /** Tag name, unique for an image */
  name: string
  /** Image ID this tag belongs to */
  imageId: string
  /** Tag status */
  status: TagStatus
  /**
   * Hash of the tag actual content. Several tags of a same image may have the
   * same digest
   */
  digest: string
  /** Creation date */
  createdAt?: Date
  /** Last modification date, from the user or the service */
  updatedAt?: Date
}

export type ListNamespacesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** A positive integer to choose the page to display */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * display
   */
  pageSize?: number
  /** Field by which to order the display of Images */
  orderBy?: ListNamespacesRequestOrderBy
  /** Filter by Organization ID */
  organizationId?: string
  /** Filter by Project ID */
  projectId?: string
  /** Filter by the namespace name (exact match) */
  name?: string
}

export type GetNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The unique ID of the Namespace */
  namespaceId: string
}

export type CreateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Define a namespace name */
  name?: string
  /** Define a description */
  description: string
  /**
   * @deprecated Assign the namespace owner (deprecated).
   *
   *   One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   *   could be set.
   */
  organizationId?: string
  /**
   * Assign the namespace to a project ID.
   *
   * One-of ('projectIdentifier'): at most one of 'organizationId', 'projectId'
   * could be set.
   */
  projectId?: string
  /** Define the default visibility policy */
  isPublic: boolean
}

export type UpdateNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Namespace ID to update */
  namespaceId: string
  /** Define a description */
  description?: string
  /** Define the default visibility policy */
  isPublic?: boolean
}

export type DeleteNamespaceRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The unique ID of the Namespace */
  namespaceId: string
}

export type ListImagesRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** A positive integer to choose the page to display */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * display
   */
  pageSize?: number
  /** Field by which to order the display of Images */
  orderBy?: ListImagesRequestOrderBy
  /** Filter by the Namespace ID */
  namespaceId?: string
  /** Filter by the Image name (exact match) */
  name?: string
  /** Filter by Organization ID */
  organizationId?: string
  /** Filter by Project ID */
  projectId?: string
}

export type GetImageRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The unique ID of the Image */
  imageId: string
}

export type UpdateImageRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** Image ID to update */
  imageId: string
  /**
   * A `public` image is pullable from internet without authentication, opposed
   * to a `private` image. `inherit` will use the namespace `is_public`
   * parameter
   */
  visibility?: ImageVisibility
}

export type DeleteImageRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The unique ID of the Image */
  imageId: string
}

export type ListTagsRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The unique ID of the image */
  imageId: string
  /** A positive integer to choose the page to display */
  page?: number
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * display
   */
  pageSize?: number
  /** Field by which to order the display of Images */
  orderBy?: ListTagsRequestOrderBy
  /** Filter by the tag name (exact match) */
  name?: string
}

export type GetTagRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The unique ID of the Tag */
  tagId: string
}

export type DeleteTagRequest = {
  /** Region to target. If none is passed will use default region from the config */
  region?: Region
  /** The unique ID of the tag */
  tagId: string
  /**
   * If two tags share the same digest the deletion will fail unless this
   * parameter is set to true
   */
  force: boolean
}
