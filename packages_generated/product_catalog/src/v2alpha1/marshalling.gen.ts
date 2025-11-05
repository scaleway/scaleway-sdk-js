import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '@scaleway/sdk-client'
import type {
  ListPublicCatalogProductsResponse,
  PublicCatalogProduct,
  PublicCatalogProductEnvironmentalImpactEstimation,
  PublicCatalogProductLocality,
  PublicCatalogProductPrice,
  PublicCatalogProductProperties,
  PublicCatalogProductPropertiesAppleSilicon,
  PublicCatalogProductPropertiesBlockStorage,
  PublicCatalogProductPropertiesDedibox,
  PublicCatalogProductPropertiesElasticMetal,
  PublicCatalogProductPropertiesHardware,
  PublicCatalogProductPropertiesHardwareCPU,
  PublicCatalogProductPropertiesHardwareCPUPhysical,
  PublicCatalogProductPropertiesHardwareCPUVirtual,
  PublicCatalogProductPropertiesHardwareGPU,
  PublicCatalogProductPropertiesHardwareNetwork,
  PublicCatalogProductPropertiesHardwareRAM,
  PublicCatalogProductPropertiesHardwareStorage,
  PublicCatalogProductPropertiesInstance,
  PublicCatalogProductPropertiesObjectStorage,
  PublicCatalogProductUnitOfMeasure,
} from './types.gen.js'

const unmarshalPublicCatalogProductPropertiesHardwareCPUPhysical = (
  data: unknown,
): PublicCatalogProductPropertiesHardwareCPUPhysical => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesHardwareCPUPhysical' failed as data isn't a dictionary.`,
    )
  }

  return {
    benchmark: data.benchmark,
    coresPerSocket: data.cores_per_socket,
    frequency: data.frequency,
    sockets: data.sockets,
    threadsPerCore: data.threads_per_core,
  } as PublicCatalogProductPropertiesHardwareCPUPhysical
}

const unmarshalPublicCatalogProductPropertiesHardwareCPUVirtual = (
  data: unknown,
): PublicCatalogProductPropertiesHardwareCPUVirtual => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesHardwareCPUVirtual' failed as data isn't a dictionary.`,
    )
  }

  return {
    count: data.count,
  } as PublicCatalogProductPropertiesHardwareCPUVirtual
}

const unmarshalPublicCatalogProductPropertiesHardwareCPU = (
  data: unknown,
): PublicCatalogProductPropertiesHardwareCPU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesHardwareCPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    arch: data.arch,
    description: data.description,
    physical: data.physical
      ? unmarshalPublicCatalogProductPropertiesHardwareCPUPhysical(
          data.physical,
        )
      : undefined,
    threads: data.threads,
    type: data.type,
    virtual: data.virtual
      ? unmarshalPublicCatalogProductPropertiesHardwareCPUVirtual(data.virtual)
      : undefined,
  } as PublicCatalogProductPropertiesHardwareCPU
}

const unmarshalPublicCatalogProductPropertiesHardwareGPU = (
  data: unknown,
): PublicCatalogProductPropertiesHardwareGPU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesHardwareGPU' failed as data isn't a dictionary.`,
    )
  }

  return {
    count: data.count,
    description: data.description,
    type: data.type,
  } as PublicCatalogProductPropertiesHardwareGPU
}

const unmarshalPublicCatalogProductPropertiesHardwareNetwork = (
  data: unknown,
): PublicCatalogProductPropertiesHardwareNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesHardwareNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    internalBandwidth: data.internal_bandwidth,
    maxPublicBandwidth: data.max_public_bandwidth,
    publicBandwidth: data.public_bandwidth,
  } as PublicCatalogProductPropertiesHardwareNetwork
}

const unmarshalPublicCatalogProductPropertiesHardwareRAM = (
  data: unknown,
): PublicCatalogProductPropertiesHardwareRAM => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesHardwareRAM' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    size: data.size,
    type: data.type,
  } as PublicCatalogProductPropertiesHardwareRAM
}

const unmarshalPublicCatalogProductPropertiesHardwareStorage = (
  data: unknown,
): PublicCatalogProductPropertiesHardwareStorage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesHardwareStorage' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    total: data.total,
  } as PublicCatalogProductPropertiesHardwareStorage
}

const unmarshalPublicCatalogProductPropertiesAppleSilicon = (
  data: unknown,
): PublicCatalogProductPropertiesAppleSilicon => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesAppleSilicon' failed as data isn't a dictionary.`,
    )
  }

  return {
    range: data.range,
    serverType: data.server_type,
  } as PublicCatalogProductPropertiesAppleSilicon
}

const unmarshalPublicCatalogProductPropertiesBlockStorage = (
  data: unknown,
): PublicCatalogProductPropertiesBlockStorage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesBlockStorage' failed as data isn't a dictionary.`,
    )
  }

  return {
    maxVolumeSize: data.max_volume_size,
    minVolumeSize: data.min_volume_size,
  } as PublicCatalogProductPropertiesBlockStorage
}

const unmarshalPublicCatalogProductPropertiesDedibox = (
  data: unknown,
): PublicCatalogProductPropertiesDedibox => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesDedibox' failed as data isn't a dictionary.`,
    )
  }

  return {
    offerId: data.offer_id,
    range: data.range,
  } as PublicCatalogProductPropertiesDedibox
}

const unmarshalPublicCatalogProductPropertiesElasticMetal = (
  data: unknown,
): PublicCatalogProductPropertiesElasticMetal => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesElasticMetal' failed as data isn't a dictionary.`,
    )
  }

  return {
    offerId: data.offer_id,
    range: data.range,
  } as PublicCatalogProductPropertiesElasticMetal
}

const unmarshalPublicCatalogProductPropertiesHardware = (
  data: unknown,
): PublicCatalogProductPropertiesHardware => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesHardware' failed as data isn't a dictionary.`,
    )
  }

  return {
    cpu: data.cpu
      ? unmarshalPublicCatalogProductPropertiesHardwareCPU(data.cpu)
      : undefined,
    gpu: data.gpu
      ? unmarshalPublicCatalogProductPropertiesHardwareGPU(data.gpu)
      : undefined,
    network: data.network
      ? unmarshalPublicCatalogProductPropertiesHardwareNetwork(data.network)
      : undefined,
    ram: data.ram
      ? unmarshalPublicCatalogProductPropertiesHardwareRAM(data.ram)
      : undefined,
    storage: data.storage
      ? unmarshalPublicCatalogProductPropertiesHardwareStorage(data.storage)
      : undefined,
  } as PublicCatalogProductPropertiesHardware
}

const unmarshalPublicCatalogProductPropertiesInstance = (
  data: unknown,
): PublicCatalogProductPropertiesInstance => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesInstance' failed as data isn't a dictionary.`,
    )
  }

  return {
    offerId: data.offer_id,
    range: data.range,
    recommendedReplacementOfferIds: data.recommended_replacement_offer_ids,
  } as PublicCatalogProductPropertiesInstance
}

const unmarshalPublicCatalogProductPropertiesObjectStorage = (
  data: unknown,
): PublicCatalogProductPropertiesObjectStorage => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPropertiesObjectStorage' failed as data isn't a dictionary.`,
    )
  }

  return {} as PublicCatalogProductPropertiesObjectStorage
}

const unmarshalPublicCatalogProductEnvironmentalImpactEstimation = (
  data: unknown,
): PublicCatalogProductEnvironmentalImpactEstimation => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductEnvironmentalImpactEstimation' failed as data isn't a dictionary.`,
    )
  }

  return {
    kgCo2Equivalent: data.kg_co2_equivalent,
    m3WaterUsage: data.m3_water_usage,
  } as PublicCatalogProductEnvironmentalImpactEstimation
}

const unmarshalPublicCatalogProductLocality = (
  data: unknown,
): PublicCatalogProductLocality => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductLocality' failed as data isn't a dictionary.`,
    )
  }

  return {
    datacenter: data.datacenter,
    global: data.global,
    region: data.region,
    zone: data.zone,
  } as PublicCatalogProductLocality
}

const unmarshalPublicCatalogProductPrice = (
  data: unknown,
): PublicCatalogProductPrice => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductPrice' failed as data isn't a dictionary.`,
    )
  }

  return {
    retailPrice: data.retail_price
      ? unmarshalMoney(data.retail_price)
      : undefined,
  } as PublicCatalogProductPrice
}

const unmarshalPublicCatalogProductProperties = (
  data: unknown,
): PublicCatalogProductProperties => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductProperties' failed as data isn't a dictionary.`,
    )
  }

  return {
    appleSilicon: data.apple_silicon
      ? unmarshalPublicCatalogProductPropertiesAppleSilicon(data.apple_silicon)
      : undefined,
    blockStorage: data.block_storage
      ? unmarshalPublicCatalogProductPropertiesBlockStorage(data.block_storage)
      : undefined,
    dedibox: data.dedibox
      ? unmarshalPublicCatalogProductPropertiesDedibox(data.dedibox)
      : undefined,
    elasticMetal: data.elastic_metal
      ? unmarshalPublicCatalogProductPropertiesElasticMetal(data.elastic_metal)
      : undefined,
    hardware: data.hardware
      ? unmarshalPublicCatalogProductPropertiesHardware(data.hardware)
      : undefined,
    instance: data.instance
      ? unmarshalPublicCatalogProductPropertiesInstance(data.instance)
      : undefined,
    objectStorage: data.object_storage
      ? unmarshalPublicCatalogProductPropertiesObjectStorage(
          data.object_storage,
        )
      : undefined,
  } as PublicCatalogProductProperties
}

const unmarshalPublicCatalogProductUnitOfMeasure = (
  data: unknown,
): PublicCatalogProductUnitOfMeasure => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProductUnitOfMeasure' failed as data isn't a dictionary.`,
    )
  }

  return {
    size: data.size,
    unit: data.unit,
  } as PublicCatalogProductUnitOfMeasure
}

const unmarshalPublicCatalogProduct = (data: unknown): PublicCatalogProduct => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'PublicCatalogProduct' failed as data isn't a dictionary.`,
    )
  }

  return {
    description: data.description,
    endOfLifeAt: unmarshalDate(data.end_of_life_at),
    environmentalImpactEstimation: data.environmental_impact_estimation
      ? unmarshalPublicCatalogProductEnvironmentalImpactEstimation(
          data.environmental_impact_estimation,
        )
      : undefined,
    locality: data.locality
      ? unmarshalPublicCatalogProductLocality(data.locality)
      : undefined,
    price: data.price
      ? unmarshalPublicCatalogProductPrice(data.price)
      : undefined,
    product: data.product,
    productCategory: data.product_category,
    properties: data.properties
      ? unmarshalPublicCatalogProductProperties(data.properties)
      : undefined,
    serviceCategory: data.service_category,
    sku: data.sku,
    status: data.status,
    unitOfMeasure: data.unit_of_measure
      ? unmarshalPublicCatalogProductUnitOfMeasure(data.unit_of_measure)
      : undefined,
    variant: data.variant,
  } as PublicCatalogProduct
}

export const unmarshalListPublicCatalogProductsResponse = (
  data: unknown,
): ListPublicCatalogProductsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListPublicCatalogProductsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    products: unmarshalArrayOfObject(
      data.products,
      unmarshalPublicCatalogProduct,
    ),
    totalCount: data.total_count,
  } as ListPublicCatalogProductsResponse
}
