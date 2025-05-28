// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  Money,
  Region as ScwRegion,
  Zone as ScwZone,
} from '@scaleway/sdk-client'

export type ListPublicCatalogProductsRequestProductType =
  | 'unknown_product_type'
  | 'instance'
  | 'apple_silicon'
  | 'elastic_metal'
  | 'dedibox'

export type PublicCatalogProductPropertiesHardwareCPUArch =
  | 'unknown_arch'
  | 'x64'
  | 'arm64'
  | 'riscv'
  | 'apple_silicon'

export type PublicCatalogProductStatus =
  | 'unknown_status'
  | 'public_beta'
  | 'preview'
  | 'general_availability'
  | 'end_of_deployment'
  | 'end_of_support'

export type PublicCatalogProductUnitOfMeasureCountableUnit =
  | 'unknown_countable_unit'
  | 'chunk'
  | 'core'
  | 'currency'
  | 'device'
  | 'domain'
  | 'email'
  | 'gb_s'
  | 'gigabyte'
  | 'hour'
  | 'iops_gigabyte'
  | 'ip'
  | 'month'
  | 'node'
  | 'plan'
  | 'query'
  | 'request'
  | 'session'
  | 'vcpu_s'
  | 'version'
  | 'year'
  | 'key'
  | 'token'
  | 'minute'
  | 'setup'
  | 'day'

export interface PublicCatalogProductPropertiesHardwareCPUPhysical {
  /**
   * The number of sockets of the CPU.
   */
  sockets: number
  /**
   * The number of cores per socket.
   */
  coresPerSocket: number
  /**
   * The number of threads per core.
   */
  threadsPerCore: number
  /**
   * The frequency of the CPU in Hertz.
   */
  frequency: number
  /**
   * The benchmark score of the CPU.
   */
  benchmark: number
}

export interface PublicCatalogProductPropertiesHardwareCPUVirtual {
  /**
   * The number of vCPUs.
   */
  count: number
}

export interface PublicCatalogProductPropertiesHardwareCPU {
  /**
   * A human readable description of the CPU.
   */
  description: string
  /**
   * The architecture of the CPU.
   */
  arch: PublicCatalogProductPropertiesHardwareCPUArch
  /**
   * The type of the CPU.
   */
  type: string
  /**
   * Properties if the CPU is virtual.
   *
   * One-of ('computeUnit'): at most one of 'virtual', 'physical' could be set.
   */
  virtual?: PublicCatalogProductPropertiesHardwareCPUVirtual
  /**
   * Properties if the CPU is physical.
   *
   * One-of ('computeUnit'): at most one of 'virtual', 'physical' could be set.
   */
  physical?: PublicCatalogProductPropertiesHardwareCPUPhysical
  /**
   * The total number of threads.
   */
  threads: number
}

export interface PublicCatalogProductPropertiesHardwareGPU {
  /**
   * A human-readable description of the GPU.
   */
  description: string
  /**
   * The number of GPUs.
   */
  count: number
  /**
   * The type of the GPU.
   */
  type: string
}

export interface PublicCatalogProductPropertiesHardwareNetwork {
  /**
   * A human-readable description of the network.
   */
  description: string
  /**
   * The internal bandwidth in bits per second.
   */
  internalBandwidth: number
  /**
   * The default public bandwidth in bits per second.
   */
  publicBandwidth: number
  /**
   * The maximum public bandwidth in bits per second (may require subscription to options).
   */
  maxPublicBandwidth: number
}

export interface PublicCatalogProductPropertiesHardwareRAM {
  /**
   * A human-readable description of the RAM.
   */
  description: string
  /**
   * The size of the RAM in bytes.
   */
  size: number
  /**
   * The type of the RAM.
   */
  type: string
}

export interface PublicCatalogProductPropertiesHardwareStorage {
  /**
   * A human-readable description of the storage.
   */
  description: string
  /**
   * The total size of the storage in bytes.
   */
  total: number
}

export interface PublicCatalogProductPropertiesAppleSilicon {
  /**
   * The range of the Apple Silicon server.
   */
  range: string
}

export interface PublicCatalogProductPropertiesDedibox {
  /**
   * The range of the Dedibox server.
   */
  range: string
}

export interface PublicCatalogProductPropertiesElasticMetal {
  /**
   * The range of the Elastic Metal server.
   */
  range: string
}

export interface PublicCatalogProductPropertiesHardware {
  /**
   * The CPU hardware properties.
   */
  cpu?: PublicCatalogProductPropertiesHardwareCPU
  /**
   * The RAM hardware properties.
   */
  ram?: PublicCatalogProductPropertiesHardwareRAM
  /**
   * The storage hardware properties.
   */
  storage?: PublicCatalogProductPropertiesHardwareStorage
  /**
   * The network hardware properties.
   */
  network?: PublicCatalogProductPropertiesHardwareNetwork
  /**
   * The GPU hardware properties.
   */
  gpu?: PublicCatalogProductPropertiesHardwareGPU
}

export interface PublicCatalogProductPropertiesInstance {
  /**
   * The range of the Instance server.
   */
  range: string
  /**
   * The offer ID of the Instance server.
   */
  offerId: string
  /**
   * The recommended replacement offer IDs of the Instance server.
   */
  recommendedReplacementOfferIds: string[]
}

export interface PublicCatalogProductEnvironmentalImpactEstimation {
  kgCo2Equivalent?: number
  m3WaterUsage?: number
}

export interface PublicCatalogProductLocality {
  /**
   * Whether or not the product is global.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  global?: boolean
  /**
   * The region of the product.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  region?: ScwRegion
  /**
   * The zone of the product.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  zone?: ScwZone
  /**
   * The datacenter of the product.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  datacenter?: string
}

export interface PublicCatalogProductPrice {
  /**
   * The retail price of the product.
   */
  retailPrice?: Money
}

export interface PublicCatalogProductProperties {
  /**
   * The hardware properties of the product (if supported).
   */
  hardware?: PublicCatalogProductPropertiesHardware
  /**
   * The properties of Dedibox products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance' could be set.
   */
  dedibox?: PublicCatalogProductPropertiesDedibox
  /**
   * The properties of Elastic Metal products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance' could be set.
   */
  elasticMetal?: PublicCatalogProductPropertiesElasticMetal
  /**
   * The properties of Apple Silicon products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance' could be set.
   */
  appleSilicon?: PublicCatalogProductPropertiesAppleSilicon
  /**
   * The properties of Instance products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance' could be set.
   */
  instance?: PublicCatalogProductPropertiesInstance
}

export interface PublicCatalogProductUnitOfMeasure {
  unit: PublicCatalogProductUnitOfMeasureCountableUnit
  size: number
}

export interface PublicCatalogProduct {
  /**
   * The unique identifier of the product.
   */
  sku: string
  /**
   * The category of the product.
   */
  serviceCategory: string
  /**
   * The product name.
   */
  product: string
  /**
   * The product variant.
   */
  variant: string
  /**
   * The product description.
   */
  description: string
  /**
   * The locality of the product.
   */
  locality?: PublicCatalogProductLocality
  /**
   * The price of the product.
   */
  price?: PublicCatalogProductPrice
  /**
   * The properties of the product.
   */
  properties?: PublicCatalogProductProperties
  /**
   * The environmental impact estimation of the product.
   */
  environmentalImpactEstimation?: PublicCatalogProductEnvironmentalImpactEstimation
  /**
   * The unit of measure of the product.
   */
  unitOfMeasure?: PublicCatalogProductUnitOfMeasure
  /**
   * The status of the product.
   */
  status: PublicCatalogProductStatus
  /**
   * The end of life date of the product.
   */
  endOfLifeAt?: Date
}

export interface ListPublicCatalogProductsResponse {
  /**
   * The list of products.
   */
  products: PublicCatalogProduct[]
  /**
   * The total number of products in the catalog.
   */
  totalCount: number
}

export type PublicCatalogApiListPublicCatalogProductsRequest = {
  /**
   * Number of the page. Value must be greater or equal to 1.
   */
  page?: number
  /**
   * The number of products per page. Value must be greater or equal to 1.
   */
  pageSize?: number
  /**
   * The list of filtered product categories.
   */
  productTypes?: ListPublicCatalogProductsRequestProductType[]
}
