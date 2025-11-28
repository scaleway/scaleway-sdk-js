// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Region as ScwRegion, Zone as ScwZone} from '@scaleway/sdk-client'


export type ListPublicCatalogProductsRequestProductType =
  | 'unknown_product_type'
  | 'instance'
  | 'apple_silicon'
  | 'elastic_metal'
  | 'dedibox'
  | 'block_storage'
  | 'object_storage'
  | 'managed_inference'
  | 'generative_apis'

export type ListPublicCatalogProductsRequestStatus =
  | 'unknown_status'
  | 'public_beta'
  | 'preview'
  | 'general_availability'
  | 'end_of_deployment'
  | 'end_of_support'
  | 'end_of_sale'
  | 'end_of_life'
  | 'retired'

export type PublicCatalogProductProductBadge =
  | 'unknown_product_badge'
  | 'new_product'
  | 'best_seller'
  | 'best_value'
  | 'popular'

export type PublicCatalogProductPropertiesGenerativeApisConsumptionMode =
  | 'unknown_consumption_mode'
  | 'realtime'
  | 'batch'

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
  | 'end_of_sale'
  | 'end_of_life'
  | 'retired'

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
  | 'second'
  | 'sample_day'
  | 'gigabyte_day'
  | 'mvcpu'

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
  /**
   * The server type of the Apple Silicon server.
   */
  serverType: string
}


export interface PublicCatalogProductPropertiesBlockStorage {
  /**
   * @deprecated The minimum size of storage volume for this product in bytes. Deprecated.
   */
  minVolumeSize?: number
  /**
   * @deprecated The maximum size of storage volume for this product in bytes. Deprecated.
   */
  maxVolumeSize?: number
}


export interface PublicCatalogProductPropertiesDedibox {
  /**
   * The range of the Dedibox server.
   */
  range: string
  /**
   * The offer ID of the Dedibox server.
   */
  offerId: number
}


export interface PublicCatalogProductPropertiesElasticMetal {
  /**
   * The range of the Elastic Metal server.
   */
  range: string
  /**
   * The offer ID of the Elastic Metal server.
   */
  offerId: string
}


export interface PublicCatalogProductPropertiesGenerativeApis {
  reasoning: boolean
  supportedApis: string[]
  consumptionMode: PublicCatalogProductPropertiesGenerativeApisConsumptionMode
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


export interface PublicCatalogProductPropertiesManagedInference {
  /**
   * The name of the associated instance GPU to this node type.
   */
  instanceGpuName: string
}


export interface PublicCatalogProductPropertiesObjectStorage {
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
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis' could be set.
   */
  dedibox?: PublicCatalogProductPropertiesDedibox
  /**
   * The properties of Elastic Metal products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis' could be set.
   */
  elasticMetal?: PublicCatalogProductPropertiesElasticMetal
  /**
   * The properties of Apple Silicon products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis' could be set.
   */
  appleSilicon?: PublicCatalogProductPropertiesAppleSilicon
  /**
   * The properties of Instance products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis' could be set.
   */
  instance?: PublicCatalogProductPropertiesInstance
  /**
   * The properties of Block Storage products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis' could be set.
   */
  blockStorage?: PublicCatalogProductPropertiesBlockStorage
  /**
   * The properties of Object Storage products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis' could be set.
   */
  objectStorage?: PublicCatalogProductPropertiesObjectStorage
  /**
   * The properties of Managed Inference products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis' could be set.
   */
  managedInference?: PublicCatalogProductPropertiesManagedInference
  /**
   * The properties of Generative APIs products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis' could be set.
   */
  generativeApis?: PublicCatalogProductPropertiesGenerativeApis
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
   * The product category of the product.
   */
  productCategory: string
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
  /**
   * Different badges that can be associated with the product.
   */
  badges: PublicCatalogProductProductBadge[]
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
  /**
   * Filter global products.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  global?: boolean
  /**
   * Filter products by region.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  region?: ScwRegion
  /**
   * Filter products by zone.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  zone?: ScwZone
  /**
   * Filter products by datacenter.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  datacenter?: string
  /**
   * The lists of filtered product status, if empty only products with status public_beta, general_availability, preview, end_of_deployment, end_of_support, end_of_sale, end_of_life or retired will be returned.
   */
  status?: ListPublicCatalogProductsRequestStatus[]
}


