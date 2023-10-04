// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type {
  GetImageResponse,
  GetVersionResponse,
  Image,
  ListImagesResponse,
  ListVersionsResponse,
  LocalImage,
  Organization,
  Version,
} from './types.gen'

const unmarshalLocalImage = (data: unknown): LocalImage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'LocalImage' failed as data isn't a dictionary.`,
    )
  }

  return {
    arch: data.arch,
    compatibleCommercialTypes: data.compatible_commercial_types,
    id: data.id,
    zone: data.zone,
  } as LocalImage
}

const unmarshalOrganization = (data: unknown): Organization => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Organization' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
  } as Organization
}

const unmarshalVersion = (data: unknown): Version => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Version' failed as data isn't a dictionary.`,
    )
  }

  return {
    creationDate: unmarshalDate(data.creation_date),
    id: data.id,
    localImages: unmarshalArrayOfObject(data.local_images, unmarshalLocalImage),
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
  } as Version
}

const unmarshalImage = (data: unknown): Image => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Image' failed as data isn't a dictionary.`,
    )
  }

  return {
    categories: data.categories,
    creationDate: unmarshalDate(data.creation_date),
    currentPublicVersion: data.current_public_version,
    description: data.description,
    id: data.id,
    label: data.label,
    logo: data.logo,
    modificationDate: unmarshalDate(data.modification_date),
    name: data.name,
    organization: data.organization
      ? unmarshalOrganization(data.organization)
      : undefined,
    validUntil: unmarshalDate(data.valid_until),
    versions: unmarshalArrayOfObject(data.versions, unmarshalVersion),
  } as Image
}

export const unmarshalGetImageResponse = (data: unknown): GetImageResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetImageResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    image: data.image ? unmarshalImage(data.image) : undefined,
  } as GetImageResponse
}

export const unmarshalGetVersionResponse = (
  data: unknown,
): GetVersionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetVersionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    version: data.version ? unmarshalVersion(data.version) : undefined,
  } as GetVersionResponse
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
