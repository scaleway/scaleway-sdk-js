// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type {
  ContactEmailStatus,
  ContactExtensionFRMode,
  ContactExtensionNLLegalForm,
  ContactLegalForm,
  ContactStatus,
  DNSZoneStatus,
  DSRecordAlgorithm,
  DSRecordDigestType,
  DomainFeatureStatus,
  DomainRecordHTTPServiceConfigStrategy,
  DomainRecordType,
  DomainRegistrationStatusTransferStatus,
  DomainStatus,
  HostStatus,
  InboundTransferStatus,
  LinkedProduct,
  ListContactsRequestRole,
  ListDNSZoneRecordsRequestOrderBy,
  ListDNSZonesRequestOrderBy,
  ListDomainsRequestOrderBy,
  ListRenewableDomainsRequestOrderBy,
  ListTasksRequestOrderBy,
  ListTldsRequestOrderBy,
  RawFormat,
  RenewableDomainStatus,
  SSLCertificateStatus,
  TaskStatus,
  TaskType,
} from './types.gen.js'


/** Lists all values of the enum {@link ContactEmailStatus}. */
export const CONTACT_EMAIL_STATUSES: ContactEmailStatus[] = [
  'email_status_unknown',
  'validated',
  'not_validated',
  'invalid_email',
]

/** Lists all values of the enum {@link ContactExtensionFRMode}. */
export const CONTACT_EXTENSION_FR_MODES: ContactExtensionFRMode[] = [
  'mode_unknown',
  'individual',
  'company_identification_code',
  'duns',
  'local',
  'association',
  'trademark',
  'code_auth_afnic',
]

/** Lists all values of the enum {@link ContactExtensionNLLegalForm}. */
export const CONTACT_EXTENSION_NL_LEGAL_FORMS: ContactExtensionNLLegalForm[] = [
  'legal_form_unknown',
  'other',
  'non_dutch_eu_company',
  'non_dutch_legal_form_enterprise_subsidiary',
  'limited_company',
  'limited_company_in_formation',
  'cooperative',
  'limited_partnership',
  'sole_company',
  'european_economic_interest_group',
  'religious_entity',
  'partnership',
  'public_company',
  'mutual_benefit_company',
  'residential',
  'shipping_company',
  'foundation',
  'association',
  'trading_partnership',
  'natural_person',
]

/** Lists all values of the enum {@link ContactLegalForm}. */
export const CONTACT_LEGAL_FORMS: ContactLegalForm[] = [
  'legal_form_unknown',
  'individual',
  'corporate',
  'association',
  'other',
]

/** Lists all values of the enum {@link ContactStatus}. */
export const CONTACT_STATUSES: ContactStatus[] = [
  'status_unknown',
  'active',
  'pending',
]

/** Lists all values of the enum {@link DNSZoneStatus}. */
export const DNS_ZONE_STATUSES: DNSZoneStatus[] = [
  'unknown',
  'active',
  'pending',
  'error',
  'locked',
]

/** Lists all values of the enum {@link DSRecordAlgorithm}. */
export const DS_RECORD_ALGORITHMS: DSRecordAlgorithm[] = [
  'rsamd5',
  'dh',
  'dsa',
  'rsasha1',
  'dsa_nsec3_sha1',
  'rsasha1_nsec3_sha1',
  'rsasha256',
  'rsasha512',
  'ecc_gost',
  'ecdsap256sha256',
  'ecdsap384sha384',
  'ed25519',
  'ed448',
]

/** Lists all values of the enum {@link DSRecordDigestType}. */
export const DS_RECORD_DIGEST_TYPES: DSRecordDigestType[] = [
  'sha_1',
  'sha_256',
  'gost_r_34_11_94',
  'sha_384',
]

/** Lists all values of the enum {@link DomainFeatureStatus}. */
export const DOMAIN_FEATURE_STATUSES: DomainFeatureStatus[] = [
  'feature_status_unknown',
  'enabling',
  'enabled',
  'disabling',
  'disabled',
]

/** Lists all values of the enum {@link DomainRecordHTTPServiceConfigStrategy}. */
export const DOMAIN_RECORD_HTTP_SERVICE_CONFIG_STRATEGIES: DomainRecordHTTPServiceConfigStrategy[] = [
  'random',
  'hashed',
  'all',
]

/** Lists all values of the enum {@link DomainRecordType}. */
export const DOMAIN_RECORD_TYPES: DomainRecordType[] = [
  'unknown',
  'A',
  'AAAA',
  'CNAME',
  'TXT',
  'SRV',
  'TLSA',
  'MX',
  'NS',
  'PTR',
  'CAA',
  'ALIAS',
  'LOC',
  'SSHFP',
  'HINFO',
  'RP',
  'URI',
  'DS',
  'NAPTR',
  'DNAME',
  'SVCB',
  'HTTPS',
]

/** Lists all values of the enum {@link DomainRegistrationStatusTransferStatus}. */
export const DOMAIN_REGISTRATION_STATUS_TRANSFER_STATUSES: DomainRegistrationStatusTransferStatus[] = [
  'status_unknown',
  'pending',
  'waiting_vote',
  'rejected',
  'processing',
  'done',
]

/** Lists all values of the enum {@link DomainStatus}. */
export const DOMAIN_STATUSES: DomainStatus[] = [
  'status_unknown',
  'active',
  'creating',
  'create_error',
  'renewing',
  'renew_error',
  'xfering',
  'xfer_error',
  'expired',
  'expiring',
  'updating',
  'checking',
  'locked',
  'deleting',
]

/** Lists all values of the enum {@link HostStatus}. */
export const HOST_STATUSES: HostStatus[] = [
  'unknown_status',
  'active',
  'updating',
  'deleting',
]

/** Lists all values of the enum {@link InboundTransferStatus}. */
export const INBOUND_TRANSFER_STATUSES: InboundTransferStatus[] = [
  'unknown',
  'in_progress',
  'done',
  'err_internal',
  'err_domain_pending',
  'err_already_transferring',
  'err_transfer_prohibited',
  'err_transfer_impossible',
  'err_invalid_authcode',
  'err_domain_too_young',
  'err_too_many_requests',
]

/** Lists all values of the enum {@link LinkedProduct}. */
export const LINKED_PRODUCTS: LinkedProduct[] = [
  'unknown_product',
  'vpc',
]

/** Lists all values of the enum {@link ListContactsRequestRole}. */
export const LIST_CONTACTS_REQUEST_ROLES: ListContactsRequestRole[] = [
  'unknown_role',
  'owner',
  'administrative',
  'technical',
]

/** Lists all values of the enum {@link ListDNSZoneRecordsRequestOrderBy}. */
export const LIST_DNS_ZONE_RECORDS_REQUEST_ORDER_BIES: ListDNSZoneRecordsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link ListDNSZonesRequestOrderBy}. */
export const LIST_DNS_ZONES_REQUEST_ORDER_BIES: ListDNSZonesRequestOrderBy[] = [
  'domain_asc',
  'domain_desc',
  'subdomain_asc',
  'subdomain_desc',
  'created_at_asc',
  'created_at_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListDomainsRequestOrderBy}. */
export const LIST_DOMAINS_REQUEST_ORDER_BIES: ListDomainsRequestOrderBy[] = [
  'domain_asc',
  'domain_desc',
]

/** Lists all values of the enum {@link ListRenewableDomainsRequestOrderBy}. */
export const LIST_RENEWABLE_DOMAINS_REQUEST_ORDER_BIES: ListRenewableDomainsRequestOrderBy[] = [
  'domain_asc',
  'domain_desc',
]

/** Lists all values of the enum {@link ListTasksRequestOrderBy}. */
export const LIST_TASKS_REQUEST_ORDER_BIES: ListTasksRequestOrderBy[] = [
  'domain_desc',
  'domain_asc',
  'type_asc',
  'type_desc',
  'status_asc',
  'status_desc',
  'updated_at_asc',
  'updated_at_desc',
]

/** Lists all values of the enum {@link ListTldsRequestOrderBy}. */
export const LIST_TLDS_REQUEST_ORDER_BIES: ListTldsRequestOrderBy[] = [
  'name_asc',
  'name_desc',
]

/** Lists all values of the enum {@link RawFormat}. */
export const RAW_FORMATS: RawFormat[] = [
  'unknown_raw_format',
  'bind',
]

/** Lists all values of the enum {@link RenewableDomainStatus}. */
export const RENEWABLE_DOMAIN_STATUSES: RenewableDomainStatus[] = [
  'unknown',
  'renewable',
  'late_reneweable',
  'not_renewable',
]

/** Lists all values of the enum {@link SSLCertificateStatus}. */
export const SSL_CERTIFICATE_STATUSES: SSLCertificateStatus[] = [
  'unknown',
  'new',
  'pending',
  'success',
  'error',
]

/** Lists all values of the enum {@link TaskStatus}. */
export const TASK_STATUSES: TaskStatus[] = [
  'unavailable',
  'new',
  'waiting_payment',
  'pending',
  'success',
  'error',
]

/** Lists all values of the enum {@link TaskType}. */
export const TASK_TYPES: TaskType[] = [
  'unknown',
  'create_domain',
  'create_external_domain',
  'renew_domain',
  'transfer_domain',
  'trade_domain',
  'lock_domain_transfer',
  'unlock_domain_transfer',
  'enable_dnssec',
  'disable_dnssec',
  'update_domain',
  'update_contact',
  'delete_domain',
  'cancel_task',
  'generate_ssl_certificate',
  'renew_ssl_certificate',
  'send_message',
  'delete_domain_expired',
  'delete_external_domain',
  'create_host',
  'update_host',
  'delete_host',
  'move_project',
  'transfer_online_domain',
]

