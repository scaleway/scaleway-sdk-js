// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '@scaleway/sdk-client'

import type {
  Category,
  Image,
  ListCategoriesResponse,
  ListImagesResponse,
  ListLocalImagesResponse,
  ListVersionsResponse,
  LocalImage,
  Version,
} from './types.gen.js'

export const unmarshalCategory = (data: unknown): Category => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Category' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    id: data.id,
    name: data.name,
  } as Category
}

export const unmarshalImage = (data: unknown): Image => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Image' failed as data isn't a dictionary.`,
    )
  }

  return {
    categories: data.categories,
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    id: data.id,
    label: data.label,
    logo: data.logo,
    name: data.name,
    updatedAt: unmarshalDate(data.updated_at),
    validUntil: unmarshalDate(data.valid_until),
  } as Image
}

export const unmarshalLocalImage = (data: unknown): LocalImage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LocalImage' failed as data isn't a dictionary.`,
    )
  }

  return {
    arch: data.arch,
    compatibleCommercialTypes: data.compatible_commercial_types,
    id: data.id,
    label: data.label,
    type: data.type,
    zone: data.zone,
  } as LocalImage
}

export const unmarshalVersion = (data: unknown): Version => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Version' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    publishedAt: unmarshalDate(data.published_at),
    updatedAt: unmarshalDate(data.updated_at),
  } as Version
}

export const unmarshalListCategoriesResponse = (
  data: unknown,
): ListCategoriesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListCategoriesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    categories: unmarshalArrayOfObject(data.categories, unmarshalCategory),
    totalCount: data.total_count,
  } as ListCategoriesResponse
}

export const unmarshalListImagesResponse = (
  data: unknown,
): ListImagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListImagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    images: unmarshalArrayOfObject(data.images, unmarshalImage),
    totalCount: data.total_count,
  } as ListImagesResponse
}

export const unmarshalListLocalImagesResponse = (
  data: unknown,
): ListLocalImagesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListLocalImagesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    localImages: unmarshalArrayOfObject(data.local_images, unmarshalLocalImage),
    totalCount: data.total_count,
  } as ListLocalImagesResponse
}

export const unmarshalListVersionsResponse = (
  data: unknown,
): ListVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    versions: unmarshalArrayOfObject(data.versions, unmarshalVersion),
  } as ListVersionsResponse
}
