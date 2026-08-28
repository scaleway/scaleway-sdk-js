// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ListImagesRequestOrderBy,
  ListLocalImagesRequestOrderBy,
  ListVersionsRequestOrderBy,
  LocalImageType,
} from './types.gen.js'


/** Lists all values of the enum {@link ListImagesRequestOrderBy}. */
export const LIST_IMAGES_REQUEST_ORDER_BIES: ListImagesRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListLocalImagesRequestOrderBy}. */
export const LIST_LOCAL_IMAGES_REQUEST_ORDER_BIES: ListLocalImagesRequestOrderBy[] = [
  'type_asc',
  'type_desc',
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link ListVersionsRequestOrderBy}. */
export const LIST_VERSIONS_REQUEST_ORDER_BIES: ListVersionsRequestOrderBy[] = [
  'created_at_asc',
  'created_at_desc',
]

/** Lists all values of the enum {@link LocalImageType}. */
export const LOCAL_IMAGE_TYPES: LocalImageType[] = [
  'unknown_type',
  'instance_local',
  'instance_sbs',
]

