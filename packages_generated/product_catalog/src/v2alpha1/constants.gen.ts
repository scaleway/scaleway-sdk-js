// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ListPublicCatalogProductsRequestProductType,
  ListPublicCatalogProductsRequestStatus,
  PublicCatalogProductProductBadge,
  PublicCatalogProductPropertiesApacheKafkaAvailableVolumeType,
  PublicCatalogProductPropertiesGenerativeApisConsumptionMode,
  PublicCatalogProductPropertiesGenerativeApisTask,
  PublicCatalogProductPropertiesGenerativeApisTokenType,
  PublicCatalogProductPropertiesHardwareCPUArch,
  PublicCatalogProductPropertiesHardwareRAMECCType,
  PublicCatalogProductPropertiesManagedMongoDBStorageTypeStorageClass,
  PublicCatalogProductPropertiesManagedRelationalDatabaseStorageTypeStorageClass,
  PublicCatalogProductPropertiesObjectStorageClassTypeStorageClass,
  PublicCatalogProductPropertiesObjectStorageInternetTrafficTypeTrafficType,
  PublicCatalogProductPropertiesObjectStorageRestoreTypeRestoreType,
  PublicCatalogProductStatus,
  PublicCatalogProductUnitOfMeasureCountableUnit,
} from './types.gen.js'


/** Lists all values of the enum {@link ListPublicCatalogProductsRequestProductType}. */
export const LIST_PUBLIC_CATALOG_PRODUCTS_REQUEST_PRODUCT_TYPES: ListPublicCatalogProductsRequestProductType[] = [
  'unknown_product_type',
  'instance',
  'apple_silicon',
  'elastic_metal',
  'dedibox',
  'block_storage',
  'object_storage',
  'managed_inference',
  'generative_apis',
  'load_balancer',
  'secret_manager',
  'key_manager',
  'managed_redis_database',
  'kubernetes',
  'managed_relational_database',
  'managed_mongodb',
  'serverless_functions',
  'serverless_containers',
  'serverless_jobs',
  'apache_kafka',
  'open_search',
  'instance_local_ssd_snapshot',
  'instance_local_ssd_storage',
  'file_storage',
  'serverless_sql_database',
]

/** Lists all values of the enum {@link ListPublicCatalogProductsRequestStatus}. */
export const LIST_PUBLIC_CATALOG_PRODUCTS_REQUEST_STATUSES: ListPublicCatalogProductsRequestStatus[] = [
  'unknown_status',
  'public_beta',
  'preview',
  'general_availability',
  'end_of_new_features',
  'end_of_growth',
  'end_of_deployment',
  'end_of_support',
  'end_of_sale',
  'end_of_life',
  'retired',
]

/** Lists all values of the enum {@link PublicCatalogProductProductBadge}. */
export const PUBLIC_CATALOG_PRODUCT_PRODUCT_BADGES: PublicCatalogProductProductBadge[] = [
  'unknown_product_badge',
  'new_product',
  'best_seller',
  'best_value',
  'popular',
  'no_kvm',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesApacheKafkaAvailableVolumeType}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_APACHE_KAFKA_AVAILABLE_VOLUME_TYPES: PublicCatalogProductPropertiesApacheKafkaAvailableVolumeType[] = [
  'unknown_type',
  'sbs_5k',
  'sbs_15k',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesGenerativeApisConsumptionMode}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_GENERATIVE_APIS_CONSUMPTION_MODES: PublicCatalogProductPropertiesGenerativeApisConsumptionMode[] = [
  'unknown_consumption_mode',
  'realtime',
  'batch',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesGenerativeApisTask}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_GENERATIVE_APIS_TASKS: PublicCatalogProductPropertiesGenerativeApisTask[] = [
  'unknown_task',
  'chat',
  'embeddings',
  'vision',
  'audio_transcription',
  'code',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesGenerativeApisTokenType}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_GENERATIVE_APIS_TOKEN_TYPES: PublicCatalogProductPropertiesGenerativeApisTokenType[] = [
  'unknown_token_type',
  'input_token',
  'output_token',
  'input_duration',
  'input_cached_token',
  'input_audio',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesHardwareCPUArch}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_HARDWARE_CPU_ARCHES: PublicCatalogProductPropertiesHardwareCPUArch[] = [
  'unknown_arch',
  'x64',
  'arm64',
  'riscv',
  'apple_silicon',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesHardwareRAMECCType}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_HARDWARE_RAMECC_TYPES: PublicCatalogProductPropertiesHardwareRAMECCType[] = [
  'unknown_ecc_type',
  'standard',
  'on_die',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesManagedMongoDBStorageTypeStorageClass}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_MANAGED_MONGO_DB_STORAGE_TYPE_STORAGE_CLASSES: PublicCatalogProductPropertiesManagedMongoDBStorageTypeStorageClass[] = [
  'unknown_storage_class',
  'sbs_5k',
  'sbs_5k_snapshot',
  'sbs_15k',
  'sbs_15k_snapshot',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesManagedRelationalDatabaseStorageTypeStorageClass}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_MANAGED_RELATIONAL_DATABASE_STORAGE_TYPE_STORAGE_CLASSES: PublicCatalogProductPropertiesManagedRelationalDatabaseStorageTypeStorageClass[] = [
  'unknown_storage_class',
  'block_ssd',
  'block_ssd_snapshot',
  'local_ssd',
  'sbs_5k',
  'sbs_5k_snapshot',
  'sbs_15k',
  'sbs_15k_snapshot',
  'backup',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesObjectStorageClassTypeStorageClass}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_OBJECT_STORAGE_CLASS_TYPE_STORAGE_CLASSES: PublicCatalogProductPropertiesObjectStorageClassTypeStorageClass[] = [
  'unknown_storage_class',
  'standard',
  'glacier',
  'onezone_ia',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesObjectStorageInternetTrafficTypeTrafficType}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_OBJECT_STORAGE_INTERNET_TRAFFIC_TYPE_TRAFFIC_TYPES: PublicCatalogProductPropertiesObjectStorageInternetTrafficTypeTrafficType[] = [
  'unknown_traffic_type',
  'ingress',
  'egress',
]

/** Lists all values of the enum {@link PublicCatalogProductPropertiesObjectStorageRestoreTypeRestoreType}. */
export const PUBLIC_CATALOG_PRODUCT_PROPERTIES_OBJECT_STORAGE_RESTORE_TYPE_RESTORE_TYPES: PublicCatalogProductPropertiesObjectStorageRestoreTypeRestoreType[] = [
  'unknown_restore_type',
  'standard',
]

/** Lists all values of the enum {@link PublicCatalogProductStatus}. */
export const PUBLIC_CATALOG_PRODUCT_STATUSES: PublicCatalogProductStatus[] = [
  'unknown_status',
  'public_beta',
  'preview',
  'general_availability',
  'end_of_new_features',
  'end_of_growth',
  'end_of_deployment',
  'end_of_support',
  'end_of_sale',
  'end_of_life',
  'retired',
]

/** Lists all values of the enum {@link PublicCatalogProductUnitOfMeasureCountableUnit}. */
export const PUBLIC_CATALOG_PRODUCT_UNIT_OF_MEASURE_COUNTABLE_UNITS: PublicCatalogProductUnitOfMeasureCountableUnit[] = [
  'unknown_countable_unit',
  'chunk',
  'core',
  'currency',
  'device',
  'domain',
  'email',
  'gb_s',
  'gigabyte',
  'hour',
  'iops_gigabyte',
  'ip',
  'month',
  'node',
  'plan',
  'query',
  'request',
  'session',
  'vcpu_s',
  'version',
  'year',
  'key',
  'token',
  'minute',
  'setup',
  'day',
  'second',
  'sample_day',
  'gigabyte_day',
  'mvcpu',
]

