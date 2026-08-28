// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ImageStatus,
  ImageVisibility,
  ListImagesRequestOrderBy,
  ListNamespacesRequestOrderBy,
  ListTagsRequestOrderBy,
  NamespaceStatus,
  TagStatus,
} from './types.gen.js'


/** Lists all values of the enum {@link ImageStatus}. */
export const IMAGE_STATUSES: ImageStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'locked',
]

/** Lists all values of the enum {@link ImageVisibility}. */
export const IMAGE_VISIBILITIES: ImageVisibility[] = [
  'visibility_unknown',
  'inherit',
  'public',
  'private',
]

/** Lists all values of the enum {@link ListImagesRequestOrderBy}. */
export const LIST_IMAGES_REQUEST_ORDER_BIES: ListImagesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListNamespacesRequestOrderBy}. */
export const LIST_NAMESPACES_REQUEST_ORDER_BIES: ListNamespacesRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'description_asc',
  'description_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListTagsRequestOrderBy}. */
export const LIST_TAGS_REQUEST_ORDER_BIES: ListTagsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link NamespaceStatus}. */
export const NAMESPACE_STATUSES: NamespaceStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'locked',
]

/** Lists all values of the enum {@link TagStatus}. */
export const TAG_STATUSES: TagStatus[] = [
  'unknown',
  'ready',
  'deleting',
  'error',
  'locked',
]

