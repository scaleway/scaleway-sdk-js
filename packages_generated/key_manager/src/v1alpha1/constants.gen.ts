// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  DataKeyAlgorithmSymmetricEncryption,
  KeyAlgorithmAsymmetricEncryption,
  KeyAlgorithmAsymmetricSigning,
  KeyAlgorithmSymmetricEncryption,
  KeyOrigin,
  KeyState,
  ListAlgorithmsRequestUsage,
  ListKeysRequestOrderBy,
  ListKeysRequestUsage,
} from './types.gen.js'


/** Lists all values of the enum {@link DataKeyAlgorithmSymmetricEncryption}. */
export const DATA_KEY_ALGORITHM_SYMMETRIC_ENCRYPTIONS: DataKeyAlgorithmSymmetricEncryption[] = [
  'unknown_symmetric_encryption',
  'aes_256_gcm',
]

/** Lists all values of the enum {@link KeyAlgorithmAsymmetricEncryption}. */
export const KEY_ALGORITHM_ASYMMETRIC_ENCRYPTIONS: KeyAlgorithmAsymmetricEncryption[] = [
  'unknown_asymmetric_encryption',
  'rsa_oaep_2048_sha256',
  'rsa_oaep_3072_sha256',
  'rsa_oaep_4096_sha256',
  'ml_kem_768',
  'ml_kem_1024',
]

/** Lists all values of the enum {@link KeyAlgorithmAsymmetricSigning}. */
export const KEY_ALGORITHM_ASYMMETRIC_SIGNINGS: KeyAlgorithmAsymmetricSigning[] = [
  'unknown_asymmetric_signing',
  'ec_p256_sha256',
  'ec_p384_sha384',
  'rsa_pss_2048_sha256',
  'rsa_pss_3072_sha256',
  'rsa_pss_4096_sha256',
  'rsa_pkcs1_2048_sha256',
  'rsa_pkcs1_3072_sha256',
  'rsa_pkcs1_4096_sha256',
  'ml_dsa_44',
  'ml_dsa_65',
  'ml_dsa_87',
  'ec_secp256k1_sha256',
]

/** Lists all values of the enum {@link KeyAlgorithmSymmetricEncryption}. */
export const KEY_ALGORITHM_SYMMETRIC_ENCRYPTIONS: KeyAlgorithmSymmetricEncryption[] = [
  'unknown_symmetric_encryption',
  'aes_256_gcm',
]

/** Lists all values of the enum {@link KeyOrigin}. */
export const KEY_ORIGINS: KeyOrigin[] = [
  'unknown_origin',
  'scaleway_kms',
  'external',
]

/** Lists all values of the enum {@link KeyState}. */
export const KEY_STATES: KeyState[] = [
  'unknown_state',
  'enabled',
  'disabled',
  'pending_key_material',
  'scheduled_for_deletion',
]

/** Lists all values of the enum {@link ListAlgorithmsRequestUsage}. */
export const LIST_ALGORITHMS_REQUEST_USAGES: ListAlgorithmsRequestUsage[] = [
  'unknown_usage',
  'symmetric_encryption',
  'asymmetric_encryption',
  'asymmetric_signing',
]

/** Lists all values of the enum {@link ListKeysRequestOrderBy}. */
export const LIST_KEYS_REQUEST_ORDER_BIES: ListKeysRequestOrderBy[] = [
  'name_asc',
  'name_desc',
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListKeysRequestUsage}. */
export const LIST_KEYS_REQUEST_USAGES: ListKeysRequestUsage[] = [
  'unknown_usage',
  'symmetric_encryption',
  'asymmetric_encryption',
  'asymmetric_signing',
]

