// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'


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
  | 'load_balancer'
  | 'secret_manager'
  | 'key_manager'
  | 'managed_redis_database'
  | 'kubernetes'
  | 'managed_relational_database'
  | 'managed_mongodb'
  | 'serverless_functions'
  | 'serverless_containers'
  | 'serverless_jobs'
  | 'apache_kafka'
  | 'open_search'
  | 'instance_local_ssd_snapshot'
  | 'instance_local_ssd_storage'
  | 'file_storage'
  | 'serverless_sql_database'
  | 'cockpit'

export type ListPublicCatalogProductsRequestStatus =
  | 'unknown_status'
  | 'public_beta'
  | 'preview'
  | 'general_availability'
  | 'end_of_new_features'
  | 'end_of_growth'
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
  | 'no_kvm'

export type PublicCatalogProductPropertiesApacheKafkaAvailableVolumeType =
  | 'unknown_type'
  | 'sbs_5k'
  | 'sbs_15k'

export type PublicCatalogProductPropertiesGenerativeApisConsumptionMode =
  | 'unknown_consumption_mode'
  | 'realtime'
  | 'batch'

export type PublicCatalogProductPropertiesGenerativeApisTask =
  | 'unknown_task'
  | 'chat'
  | 'embeddings'
  | 'vision'
  | 'audio_transcription'
  | 'code'
  | 'ocr'

export type PublicCatalogProductPropertiesGenerativeApisTokenType =
  | 'unknown_token_type'
  | 'input_token'
  | 'output_token'
  | 'input_cached_token'
  | 'input_audio'

export type PublicCatalogProductPropertiesHardwareCPUArch =
  | 'unknown_arch'
  | 'x64'
  | 'arm64'
  | 'riscv'
  | 'apple_silicon'

export type PublicCatalogProductPropertiesHardwareRAMECCType =
  | 'unknown_ecc_type'
  | 'standard'
  | 'on_die'

export type PublicCatalogProductPropertiesManagedMongoDBStorageTypeStorageClass =
  | 'unknown_storage_class'
  | 'sbs_5k'
  | 'sbs_5k_snapshot'
  | 'sbs_15k'
  | 'sbs_15k_snapshot'

export type PublicCatalogProductPropertiesManagedRelationalDatabaseStorageTypeStorageClass =
  | 'unknown_storage_class'
  | 'block_ssd'
  | 'block_ssd_snapshot'
  | 'local_ssd'
  | 'sbs_5k'
  | 'sbs_5k_snapshot'
  | 'sbs_15k'
  | 'sbs_15k_snapshot'
  | 'backup'

export type PublicCatalogProductPropertiesObjectStorageClassTypeStorageClass =
  | 'unknown_storage_class'
  | 'standard'
  | 'glacier'
  | 'onezone_ia'

export type PublicCatalogProductPropertiesObjectStorageInternetTrafficTypeTrafficType =
  | 'unknown_traffic_type'
  | 'ingress'
  | 'egress'

export type PublicCatalogProductPropertiesObjectStorageRestoreTypeRestoreType =
  | 'unknown_restore_type'
  | 'standard'

export type PublicCatalogProductStatus =
  | 'unknown_status'
  | 'public_beta'
  | 'preview'
  | 'general_availability'
  | 'end_of_new_features'
  | 'end_of_growth'
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
  | 'gigabyte_hour'

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


export interface PublicCatalogProductPropertiesApacheKafkaNodeType {
  /**
   * The list of available versions for the Kafka node.
   */
  versions: string[]
  /**
   * Number of virtual CPUs.
   */
  vcpuCount: number
  /**
   * Whether or not this Kafka product is multi AZ.
   */
  isMultiAz: boolean
  /**
   * Memory size in bytes.
   */
  memorySize: number
}


export interface PublicCatalogProductPropertiesApacheKafkaStorageType {
  /**
   * The type of volume.
   */
  type: PublicCatalogProductPropertiesApacheKafkaAvailableVolumeType
  /**
   * The minimum size of the volume in bytes.
   */
  minSize: number
  /**
   * The maximum size of the volume in bytes.
   */
  maxSize: number
  /**
   * Whether or not this Kafka product is multi AZ.
   */
  isMultiAz: boolean
}


export interface PublicCatalogProductPropertiesBlockStorageSnapshotType {
}


export interface PublicCatalogProductPropertiesBlockStorageVolumeType {
  /**
   * The minimum size of storage volume for this product in bytes.
   */
  minSize: number
  /**
   * The maximum size of storage volume for this product in bytes.
   */
  maxSize: number
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
  virtual?: PublicCatalogProductPropertiesHardwareCPUVirtual | null
  /**
   * Properties if the CPU is physical.
   *
   * One-of ('computeUnit'): at most one of 'virtual', 'physical' could be set.
   */
  physical?: PublicCatalogProductPropertiesHardwareCPUPhysical | null
  /**
   * The total number of threads.
   */
  threads: number
  /**
   * Indicates whether the CPU is shared or not.
   */
  shared: boolean
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
  /**
   * ECC type.
   */
  eccType?: PublicCatalogProductPropertiesHardwareRAMECCType | null
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


export interface PublicCatalogProductPropertiesKubernetesKapsuleControlPlaneType {
}


export interface PublicCatalogProductPropertiesKubernetesKosmosControlPlaneType {
}


export interface PublicCatalogProductPropertiesKubernetesKosmosNodeType {
}


export interface PublicCatalogProductPropertiesLoadBalancerIPV4Type {
}


export interface PublicCatalogProductPropertiesLoadBalancerNodeType {
  /**
   * The offer ID of the Load Balancer product.
   */
  offerId: string
  /**
   * Whether the Load Balancer product is available for multi-cloud providers.
   */
  multiCloudProvider: boolean
  /**
   * The bandwidth of the Load Balancer product in bits per second.
   */
  bandwidth: number
}


export interface PublicCatalogProductPropertiesManagedInferenceManagedInferenceCustomModelStorage {
}


export interface PublicCatalogProductPropertiesManagedInferenceManagedInferenceDeployment {
  /**
   * The name of the associated instance GPU to this deployment.
   */
  instanceGpuName: string
}


export interface PublicCatalogProductPropertiesManagedMongoDBManagementType {
}


export interface PublicCatalogProductPropertiesManagedMongoDBNodeType {
}


export interface PublicCatalogProductPropertiesManagedMongoDBStorageType {
  /**
   * The type of Storage class.
   */
  storageClass: PublicCatalogProductPropertiesManagedMongoDBStorageTypeStorageClass
}


export interface PublicCatalogProductPropertiesManagedRelationalDatabaseManagementType {
}


export interface PublicCatalogProductPropertiesManagedRelationalDatabaseMultiAzType {
}


export interface PublicCatalogProductPropertiesManagedRelationalDatabaseNodeType {
}


export interface PublicCatalogProductPropertiesManagedRelationalDatabaseStorageType {
  /**
   * The type of Storage class.
   */
  storageClass: PublicCatalogProductPropertiesManagedRelationalDatabaseStorageTypeStorageClass
}


export interface PublicCatalogProductPropertiesObjectStorageClassType {
  /**
   * The storage class.
   */
  storageClass: PublicCatalogProductPropertiesObjectStorageClassTypeStorageClass
}


export interface PublicCatalogProductPropertiesObjectStorageInternetTrafficType {
  /**
   * The type of internet traffic.
   */
  trafficType: PublicCatalogProductPropertiesObjectStorageInternetTrafficTypeTrafficType
}


export interface PublicCatalogProductPropertiesObjectStorageRegionTrafficType {
  /**
   * The destination region for the region traffic.
   */
  regionDestination: string
}


export interface PublicCatalogProductPropertiesObjectStorageRestoreType {
  /**
   * The type of restore.
   */
  restoreType: PublicCatalogProductPropertiesObjectStorageRestoreTypeRestoreType
}


export interface PublicCatalogProductPropertiesServerlessContainersCPUType {
  /**
   * The list of available number of milli-vCPUs.
   */
  mvcpuCounts: number[]
}


export interface PublicCatalogProductPropertiesServerlessContainersMemoryType {
  /**
   * The list of available memory size in bytes.
   */
  sizes: number[]
}


export interface PublicCatalogProductPropertiesServerlessFunctionsConsumptionType {
}


export interface PublicCatalogProductPropertiesServerlessFunctionsFreeTierType {
}


export interface PublicCatalogProductPropertiesServerlessFunctionsProvisionType {
}


export interface PublicCatalogProductPropertiesServerlessFunctionsRequestType {
}


export interface PublicCatalogProductPropertiesServerlessFunctionsRuntimeResource {
  /**
   * The memory size in bytes.
   */
  memorySize: number
  /**
   * The number of milli-vCPUs.
   */
  mvcpuCount: number
}


export interface PublicCatalogProductPropertiesServerlessJobsCPUType {
  /**
   * The list of available number of milli-vCPUs.
   */
  mvcpuCounts: number[]
}


export interface PublicCatalogProductPropertiesServerlessJobsMemoryType {
  /**
   * The list of available memory size in bytes.
   */
  sizes: number[]
}


export interface PublicCatalogProductPropertiesApacheKafka {
  /**
   * The properties related to Kafka node products.
   *
   * One-of ('type'): at most one of 'node', 'storage' could be set.
   */
  node?: PublicCatalogProductPropertiesApacheKafkaNodeType | null
  /**
   * The properties related to Kafka storage products.
   *
   * One-of ('type'): at most one of 'node', 'storage' could be set.
   */
  storage?: PublicCatalogProductPropertiesApacheKafkaStorageType | null
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
  minVolumeSize?: number | null
  /**
   * @deprecated The maximum size of storage volume for this product in bytes. Deprecated.
   */
  maxVolumeSize?: number | null
  /**
   * The properties related to Block Storage snapshot.
   *
   * One-of ('type'): at most one of 'snapshot', 'volume' could be set.
   */
  snapshot?: PublicCatalogProductPropertiesBlockStorageSnapshotType | null
  /**
   * The properties related to Block Storage volume.
   *
   * One-of ('type'): at most one of 'snapshot', 'volume' could be set.
   */
  volume?: PublicCatalogProductPropertiesBlockStorageVolumeType | null
}


export interface PublicCatalogProductPropertiesCockpit {
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


export interface PublicCatalogProductPropertiesFileStorage {
  /**
   * The minimum size of storage volume for this product in bytes.
   */
  minSize: number
  /**
   * The maximum size of storage volume for this product in bytes.
   */
  maxSize: number
}


export interface PublicCatalogProductPropertiesGenerativeApis {
  reasoning: boolean
  supportedApis: string[]
  consumptionMode: PublicCatalogProductPropertiesGenerativeApisConsumptionMode
  providerName: string
  tasks: PublicCatalogProductPropertiesGenerativeApisTask[]
  tokenType: PublicCatalogProductPropertiesGenerativeApisTokenType
  supportedReasoningValues: string[]
  defaultReasoningValue?: string | null
}


export interface PublicCatalogProductPropertiesHardware {
  /**
   * The CPU hardware properties.
   */
  cpu?: PublicCatalogProductPropertiesHardwareCPU | null
  /**
   * The RAM hardware properties.
   */
  ram?: PublicCatalogProductPropertiesHardwareRAM | null
  /**
   * The storage hardware properties.
   */
  storage?: PublicCatalogProductPropertiesHardwareStorage | null
  /**
   * The network hardware properties.
   */
  network?: PublicCatalogProductPropertiesHardwareNetwork | null
  /**
   * The GPU hardware properties.
   */
  gpu?: PublicCatalogProductPropertiesHardwareGPU | null
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


export interface PublicCatalogProductPropertiesInstanceLocalSSDSnapshot {
}


export interface PublicCatalogProductPropertiesInstanceLocalSSDStorage {
}


export interface PublicCatalogProductPropertiesKeyManager {
}


export interface PublicCatalogProductPropertiesKubernetes {
  /**
   * The properties related to Kapsule Control Plane products.
   *
   * One-of ('type'): at most one of 'kapsuleControlPlane', 'kosmosControlPlane', 'kosmosNode' could be set.
   */
  kapsuleControlPlane?: PublicCatalogProductPropertiesKubernetesKapsuleControlPlaneType | null
  /**
   * The properties related to Kosmos Control Plane products.
   *
   * One-of ('type'): at most one of 'kapsuleControlPlane', 'kosmosControlPlane', 'kosmosNode' could be set.
   */
  kosmosControlPlane?: PublicCatalogProductPropertiesKubernetesKosmosControlPlaneType | null
  /**
   * The properties related to Kosmos nodes.
   *
   * One-of ('type'): at most one of 'kapsuleControlPlane', 'kosmosControlPlane', 'kosmosNode' could be set.
   */
  kosmosNode?: PublicCatalogProductPropertiesKubernetesKosmosNodeType | null
}


export interface PublicCatalogProductPropertiesLoadBalancer {
  /**
   * The properties related to Load Balancer nodes.
   *
   * One-of ('type'): at most one of 'node', 'ipv4' could be set.
   */
  node?: PublicCatalogProductPropertiesLoadBalancerNodeType | null
  /**
   * The properties related to Load Balancer IPv4.
   *
   * One-of ('type'): at most one of 'node', 'ipv4' could be set.
   */
  ipv4?: PublicCatalogProductPropertiesLoadBalancerIPV4Type | null
}


export interface PublicCatalogProductPropertiesManagedInference {
  /**
   * @deprecated The name of the associated instance GPU to this node type. Deprecated, use `deployment.instance_gpu_name` instead.
   */
  instanceGpuName: string
  /**
   * The properties related to Managed Inference Deployment.
   *
   * One-of ('type'): at most one of 'deployment', 'customModelStorage' could be set.
   */
  deployment?: PublicCatalogProductPropertiesManagedInferenceManagedInferenceDeployment | null
  /**
   * The properties related to Managed Inference Custom Model Storage.
   *
   * One-of ('type'): at most one of 'deployment', 'customModelStorage' could be set.
   */
  customModelStorage?: PublicCatalogProductPropertiesManagedInferenceManagedInferenceCustomModelStorage | null
}


export interface PublicCatalogProductPropertiesManagedMongoDB {
  /**
   * The properties related to MongoDB Management type.
   *
   * One-of ('type'): at most one of 'management', 'node', 'storage' could be set.
   */
  management?: PublicCatalogProductPropertiesManagedMongoDBManagementType | null
  /**
   * The properties related to MongoDB Node type.
   *
   * One-of ('type'): at most one of 'management', 'node', 'storage' could be set.
   */
  node?: PublicCatalogProductPropertiesManagedMongoDBNodeType | null
  /**
   * The properties related to MongoDB Storage type.
   *
   * One-of ('type'): at most one of 'management', 'node', 'storage' could be set.
   */
  storage?: PublicCatalogProductPropertiesManagedMongoDBStorageType | null
}


export interface PublicCatalogProductPropertiesManagedRedisDatabase {
}


export interface PublicCatalogProductPropertiesManagedRelationalDatabase {
  /**
   * The properties related to Relational Database Management type.
   *
   * One-of ('type'): at most one of 'management', 'node', 'storage', 'multiAz' could be set.
   */
  management?: PublicCatalogProductPropertiesManagedRelationalDatabaseManagementType | null
  /**
   * The properties related to Relational Database Nodes.
   *
   * One-of ('type'): at most one of 'management', 'node', 'storage', 'multiAz' could be set.
   */
  node?: PublicCatalogProductPropertiesManagedRelationalDatabaseNodeType | null
  /**
   * The properties related to Relational Database Storage type.
   *
   * One-of ('type'): at most one of 'management', 'node', 'storage', 'multiAz' could be set.
   */
  storage?: PublicCatalogProductPropertiesManagedRelationalDatabaseStorageType | null
  /**
   * The properties related to Relational Database Multi AZ type.
   *
   * One-of ('type'): at most one of 'management', 'node', 'storage', 'multiAz' could be set.
   */
  multiAz?: PublicCatalogProductPropertiesManagedRelationalDatabaseMultiAzType | null
}


export interface PublicCatalogProductPropertiesObjectStorage {
  /**
   * The properties related to Object Storage class.
   *
   * One-of ('type'): at most one of 'class', 'restore', 'internetTraffic', 'regionTraffic' could be set.
   */
  class?: PublicCatalogProductPropertiesObjectStorageClassType | null
  /**
   * The properties related to Object Storage restore operations.
   *
   * One-of ('type'): at most one of 'class', 'restore', 'internetTraffic', 'regionTraffic' could be set.
   */
  restore?: PublicCatalogProductPropertiesObjectStorageRestoreType | null
  /**
   * The properties related to Object Storage internet traffic.
   *
   * One-of ('type'): at most one of 'class', 'restore', 'internetTraffic', 'regionTraffic' could be set.
   */
  internetTraffic?: PublicCatalogProductPropertiesObjectStorageInternetTrafficType | null
  /**
   * The properties related to Object Storage region traffic.
   *
   * One-of ('type'): at most one of 'class', 'restore', 'internetTraffic', 'regionTraffic' could be set.
   */
  regionTraffic?: PublicCatalogProductPropertiesObjectStorageRegionTrafficType | null
}


export interface PublicCatalogProductPropertiesOpenSearch {
}


export interface PublicCatalogProductPropertiesSecretManager {
}


export interface PublicCatalogProductPropertiesServerlessContainers {
  /**
   * The properties related to Serverless containers memory products.
   *
   * One-of ('type'): at most one of 'memory', 'cpu' could be set.
   */
  memory?: PublicCatalogProductPropertiesServerlessContainersMemoryType | null
  /**
   * The properties related to Serverless containers CPU products.
   *
   * One-of ('type'): at most one of 'memory', 'cpu' could be set.
   */
  cpu?: PublicCatalogProductPropertiesServerlessContainersCPUType | null
}


export interface PublicCatalogProductPropertiesServerlessFunctions {
  /**
   * The serverless functions runtime resources sorted by memory size and then by milli-vCPU count.
   */
  resources: PublicCatalogProductPropertiesServerlessFunctionsRuntimeResource[]
  /**
   * The properties related to Serverless functions consumption products.
   *
   * One-of ('type'): at most one of 'consumption', 'request', 'provision', 'freeTier' could be set.
   */
  consumption?: PublicCatalogProductPropertiesServerlessFunctionsConsumptionType | null
  /**
   * The properties related to Serverless functions request products.
   *
   * One-of ('type'): at most one of 'consumption', 'request', 'provision', 'freeTier' could be set.
   */
  request?: PublicCatalogProductPropertiesServerlessFunctionsRequestType | null
  /**
   * The properties related to Serverless functions provision products.
   *
   * One-of ('type'): at most one of 'consumption', 'request', 'provision', 'freeTier' could be set.
   */
  provision?: PublicCatalogProductPropertiesServerlessFunctionsProvisionType | null
  /**
   * The properties related to Serverless functions free tier products.
   *
   * One-of ('type'): at most one of 'consumption', 'request', 'provision', 'freeTier' could be set.
   */
  freeTier?: PublicCatalogProductPropertiesServerlessFunctionsFreeTierType | null
}


export interface PublicCatalogProductPropertiesServerlessJobs {
  /**
   * The properties related to Serverless containers memory products.
   *
   * One-of ('type'): at most one of 'memory', 'cpu' could be set.
   */
  memory?: PublicCatalogProductPropertiesServerlessJobsMemoryType | null
  /**
   * The properties related to Serverless containers CPU products.
   *
   * One-of ('type'): at most one of 'memory', 'cpu' could be set.
   */
  cpu?: PublicCatalogProductPropertiesServerlessJobsCPUType | null
}


export interface PublicCatalogProductPropertiesServerlessSqlDatabase {
}


export interface PublicCatalogProductEnvironmentalImpactEstimation {
  kgCo2Equivalent?: number | null
  m3WaterUsage?: number | null
}


export interface PublicCatalogProductLocality {
  /**
   * Whether or not the product is global.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  global?: boolean | null
  /**
   * The region of the product.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  region?: ScwRegion | null
  /**
   * The zone of the product.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  zone?: ScwZone | null
  /**
   * The datacenter of the product.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  datacenter?: string | null
}


export interface PublicCatalogProductPrice {
  /**
   * The retail price of the product.
   */
  retailPrice?: Money | null
}


export interface PublicCatalogProductProperties {
  /**
   * The hardware properties of the product (if supported).
   */
  hardware?: PublicCatalogProductPropertiesHardware | null
  /**
   * The properties of Dedibox products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  dedibox?: PublicCatalogProductPropertiesDedibox | null
  /**
   * The properties of Elastic Metal products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  elasticMetal?: PublicCatalogProductPropertiesElasticMetal | null
  /**
   * The properties of Apple Silicon products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  appleSilicon?: PublicCatalogProductPropertiesAppleSilicon | null
  /**
   * The properties of Instance products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  instance?: PublicCatalogProductPropertiesInstance | null
  /**
   * The properties of Block Storage products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  blockStorage?: PublicCatalogProductPropertiesBlockStorage | null
  /**
   * The properties of Object Storage products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  objectStorage?: PublicCatalogProductPropertiesObjectStorage | null
  /**
   * The properties of Managed Inference products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  managedInference?: PublicCatalogProductPropertiesManagedInference | null
  /**
   * The properties of Generative APIs products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  generativeApis?: PublicCatalogProductPropertiesGenerativeApis | null
  /**
   * The properties of Load Balancer products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  loadBalancer?: PublicCatalogProductPropertiesLoadBalancer | null
  /**
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  secretManager?: PublicCatalogProductPropertiesSecretManager | null
  /**
   * The properties of Managed Redis Database products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  managedRedisDatabase?: PublicCatalogProductPropertiesManagedRedisDatabase | null
  /**
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  keyManager?: PublicCatalogProductPropertiesKeyManager | null
  /**
   * The properties of Kubernetes products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  kubernetes?: PublicCatalogProductPropertiesKubernetes | null
  /**
   * The properties of Managed Relational Database products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  managedRelationalDatabase?: PublicCatalogProductPropertiesManagedRelationalDatabase | null
  /**
   * The properties of Serverless Functions products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  serverlessFunctions?: PublicCatalogProductPropertiesServerlessFunctions | null
  /**
   * The properties of Serverless Containers products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  serverlessContainers?: PublicCatalogProductPropertiesServerlessContainers | null
  /**
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  managedMongodb?: PublicCatalogProductPropertiesManagedMongoDB | null
  /**
   * The properties of Serverless Jobs products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  serverlessJobs?: PublicCatalogProductPropertiesServerlessJobs | null
  /**
   * The properties of Serverless SQL Database products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  serverlessSqlDatabase?: PublicCatalogProductPropertiesServerlessSqlDatabase | null
  /**
   * The properties of Apache Kafka products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  apacheKafka?: PublicCatalogProductPropertiesApacheKafka | null
  /**
   * The properties of OpenSearch DB products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  openSearch?: PublicCatalogProductPropertiesOpenSearch | null
  /**
   * The properties of Instance Local SSD Snapshot products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  instanceLocalSsdSnapshot?: PublicCatalogProductPropertiesInstanceLocalSSDSnapshot | null
  /**
   * The properties of Instance Local SSD Storage products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  instanceLocalSsdStorage?: PublicCatalogProductPropertiesInstanceLocalSSDStorage | null
  /**
   * The properties of File Storage products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  fileStorage?: PublicCatalogProductPropertiesFileStorage | null
  /**
   * The properties of Cockpit products.
   *
   * One-of ('properties'): at most one of 'dedibox', 'elasticMetal', 'appleSilicon', 'instance', 'blockStorage', 'objectStorage', 'managedInference', 'generativeApis', 'loadBalancer', 'secretManager', 'managedRedisDatabase', 'keyManager', 'kubernetes', 'managedRelationalDatabase', 'serverlessFunctions', 'serverlessContainers', 'managedMongodb', 'serverlessJobs', 'serverlessSqlDatabase', 'apacheKafka', 'openSearch', 'instanceLocalSsdSnapshot', 'instanceLocalSsdStorage', 'fileStorage', 'cockpit' could be set.
   */
  cockpit?: PublicCatalogProductPropertiesCockpit | null
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
  locality?: PublicCatalogProductLocality | null
  /**
   * The price of the product.
   */
  price?: PublicCatalogProductPrice | null
  /**
   * The properties of the product.
   */
  properties?: PublicCatalogProductProperties | null
  /**
   * The environmental impact estimation of the product.
   */
  environmentalImpactEstimation?: PublicCatalogProductEnvironmentalImpactEstimation | null
  /**
   * The unit of measure of the product.
   */
  unitOfMeasure?: PublicCatalogProductUnitOfMeasure | null
  /**
   * The status of the product.
   */
  status: PublicCatalogProductStatus
  /**
   * The end of life date of the product.
   */
  endOfLifeAt?: Date | null
  /**
   * The end of growth date of the product.
   */
  endOfGrowthAt?: Date | null
  /**
   * The end of sale date of the product.
   */
  endOfSaleAt?: Date | null
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
  page?: number | null
  /**
   * The number of products per page. Value must be greater or equal to 1.
   */
  pageSize?: number | null
  /**
   * The list of filtered product categories.
   */
  productTypes?: ListPublicCatalogProductsRequestProductType[] | null
  /**
   * Filter global products.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  global?: boolean | null
  /**
   * Filter products by region.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  region?: ScwRegion | null
  /**
   * Filter products by zone.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  zone?: ScwZone | null
  /**
   * Filter products by datacenter.
   *
   * One-of ('locality'): at most one of 'global', 'region', 'zone', 'datacenter' could be set.
   */
  datacenter?: string | null
  /**
   * The lists of filtered product status, if empty only products with status public_beta, general_availability, preview, end_of_new_features, end_of_growth, end_of_deployment, end_of_support, end_of_sale, end_of_life or retired will be returned.
   */
  status?: ListPublicCatalogProductsRequestStatus[] | null
  /**
   * Filter products by API IDs. Each ID is matched against product-specific identifiers: `dedibox.offer_id` (converted to string), `elastic_metal.offer_id`, `apple_silicon.server_type`, `instance.offer_id`, and `load_balancer.node.offer_id`. Products that do not support API ID filtering are excluded from the results. If empty, no filtering is applied.
   */
  apiIds?: string[] | null
}


