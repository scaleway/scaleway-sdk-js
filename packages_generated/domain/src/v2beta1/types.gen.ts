// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Decimal, Money, ServiceInfo, Region as ScwRegion, ScwFile, TimeSeries, Zone as ScwZone} from '@scaleway/sdk-client'
import type {LanguageCode as StdLanguageCode,} from '@scaleway/sdk-std'


export type ContactEmailStatus =
  | 'email_status_unknown'
  | 'validated'
  | 'not_validated'
  | 'invalid_email'

export type ContactExtensionFRMode =
  | 'mode_unknown'
  | 'individual'
  | 'company_identification_code'
  | 'duns'
  | 'local'
  | 'association'
  | 'trademark'
  | 'code_auth_afnic'

export type ContactExtensionNLLegalForm =
  | 'legal_form_unknown'
  | 'other'
  | 'non_dutch_eu_company'
  | 'non_dutch_legal_form_enterprise_subsidiary'
  | 'limited_company'
  | 'limited_company_in_formation'
  | 'cooperative'
  | 'limited_partnership'
  | 'sole_company'
  | 'european_economic_interest_group'
  | 'religious_entity'
  | 'partnership'
  | 'public_company'
  | 'mutual_benefit_company'
  | 'residential'
  | 'shipping_company'
  | 'foundation'
  | 'association'
  | 'trading_partnership'
  | 'natural_person'

export type ContactLegalForm =
  | 'legal_form_unknown'
  | 'individual'
  | 'corporate'
  | 'association'
  | 'other'

export type ContactStatus =
  | 'status_unknown'
  | 'active'
  | 'pending'

export type DNSZoneStatus =
  | 'unknown'
  | 'active'
  | 'pending'
  | 'error'
  | 'locked'

export type DSRecordAlgorithm =
  | 'rsamd5'
  | 'dh'
  | 'dsa'
  | 'rsasha1'
  | 'dsa_nsec3_sha1'
  | 'rsasha1_nsec3_sha1'
  | 'rsasha256'
  | 'rsasha512'
  | 'ecc_gost'
  | 'ecdsap256sha256'
  | 'ecdsap384sha384'
  | 'ed25519'
  | 'ed448'

export type DSRecordDigestType =
  | 'sha_1'
  | 'sha_256'
  | 'gost_r_34_11_94'
  | 'sha_384'

export type DomainFeatureStatus =
  | 'feature_status_unknown'
  | 'enabling'
  | 'enabled'
  | 'disabling'
  | 'disabled'

export type DomainRecordHTTPServiceConfigStrategy =
  | 'random'
  | 'hashed'
  | 'all'

export type DomainRecordType =
  | 'unknown'
  | 'A'
  | 'AAAA'
  | 'CNAME'
  | 'TXT'
  | 'SRV'
  | 'TLSA'
  | 'MX'
  | 'NS'
  | 'PTR'
  | 'CAA'
  | 'ALIAS'
  | 'LOC'
  | 'SSHFP'
  | 'HINFO'
  | 'RP'
  | 'URI'
  | 'DS'
  | 'NAPTR'
  | 'DNAME'
  | 'SVCB'
  | 'HTTPS'

export type DomainRegistrationStatusTransferStatus =
  | 'status_unknown'
  | 'pending'
  | 'waiting_vote'
  | 'rejected'
  | 'processing'
  | 'done'

export type DomainStatus =
  | 'status_unknown'
  | 'active'
  | 'creating'
  | 'create_error'
  | 'renewing'
  | 'renew_error'
  | 'xfering'
  | 'xfer_error'
  | 'expired'
  | 'expiring'
  | 'updating'
  | 'checking'
  | 'locked'
  | 'deleting'

export type HostStatus =
  | 'unknown_status'
  | 'active'
  | 'updating'
  | 'deleting'

export type InboundTransferStatus =
  | 'unknown'
  | 'in_progress'
  | 'done'
  | 'err_internal'
  | 'err_domain_pending'
  | 'err_already_transferring'
  | 'err_transfer_prohibited'
  | 'err_transfer_impossible'
  | 'err_invalid_authcode'
  | 'err_domain_too_young'
  | 'err_too_many_requests'

export type LinkedProduct =
  | 'unknown_product'
  | 'vpc'

export type ListContactsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'email_asc'
  | 'email_desc'

export type ListContactsRequestRole =
  | 'unknown_role'
  | 'owner'
  | 'administrative'
  | 'technical'

export type ListDNSZoneRecordsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'

export type ListDNSZonesRequestOrderBy =
  | 'domain_asc'
  | 'domain_desc'
  | 'subdomain_asc'
  | 'subdomain_desc'
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListDomainsRequestOrderBy =
  | 'domain_asc'
  | 'domain_desc'

export type ListRenewableDomainsRequestOrderBy =
  | 'domain_asc'
  | 'domain_desc'

export type ListTasksRequestOrderBy =
  | 'domain_desc'
  | 'domain_asc'
  | 'type_asc'
  | 'type_desc'
  | 'status_asc'
  | 'status_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type ListTldsRequestOrderBy =
  | 'name_asc'
  | 'name_desc'

export type RawFormat =
  | 'unknown_raw_format'
  | 'bind'

export type RenewableDomainStatus =
  | 'unknown'
  | 'renewable'
  | 'late_reneweable'
  | 'not_renewable'

export type SSLCertificateStatus =
  | 'unknown'
  | 'new'
  | 'pending'
  | 'success'
  | 'error'

export type TaskStatus =
  | 'unavailable'
  | 'new'
  | 'waiting_payment'
  | 'pending'
  | 'success'
  | 'error'

export type TaskType =
  | 'unknown'
  | 'create_domain'
  | 'create_external_domain'
  | 'renew_domain'
  | 'transfer_domain'
  | 'trade_domain'
  | 'lock_domain_transfer'
  | 'unlock_domain_transfer'
  | 'enable_dnssec'
  | 'disable_dnssec'
  | 'update_domain'
  | 'update_contact'
  | 'delete_domain'
  | 'cancel_task'
  | 'generate_ssl_certificate'
  | 'renew_ssl_certificate'
  | 'send_message'
  | 'delete_domain_expired'
  | 'delete_external_domain'
  | 'create_host'
  | 'update_host'
  | 'delete_host'
  | 'move_project'
  | 'transfer_online_domain'

export interface DomainRecordGeoIPConfigMatch {
  countries: string[]
  continents: string[]
  data: string
}


export interface DomainRecordViewConfigView {
  subnet: string
  data: string
}


export interface DomainRecordWeightedConfigWeightedIP {
  ip: string
  weight: number
}


export interface DSRecordPublicKey {
  /**
   * The public key string.
   */
  key: string
}


export interface DomainRecordGeoIPConfig {
  matches: DomainRecordGeoIPConfigMatch[]
  default: string
}


export interface DomainRecordHTTPServiceConfig {
  ips: string[]
  mustContain?: string
  url: string
  userAgent?: string
  strategy: DomainRecordHTTPServiceConfigStrategy
}


export interface DomainRecordViewConfig {
  views: DomainRecordViewConfigView[]
}


export interface DomainRecordWeightedConfig {
  weightedIps: DomainRecordWeightedConfigWeightedIP[]
}


export interface ContactExtensionFRAssociationInfo {
  publicationJo?: Date
  publicationJoPage: number
}


export interface ContactExtensionFRCodeAuthAfnicInfo {
  codeAuthAfnic: string
}


export interface ContactExtensionFRDunsInfo {
  dunsId: string
  localId: string
}


export interface ContactExtensionFRIndividualInfo {
  whoisOptIn: boolean
}


export interface ContactExtensionFRTrademarkInfo {
  trademarkInpi: string
}


export interface DSRecordDigest {
  /**
   * The digest type of the DS record.
   */
  type: DSRecordDigestType
  /**
   * The digest string of the DS record.
   */
  digest: string
  /**
   * The DNSKEY the digest is derived from. Optional.
   */
  publicKey?: DSRecordPublicKey
}


export interface DomainRecord {
  data: string
  name: string
  priority: number
  ttl: number
  type: DomainRecordType
  comment?: string
  /**
   *
   * One-of ('dynamicData'): at most one of 'geoIpConfig', 'httpServiceConfig', 'weightedConfig', 'viewConfig' could be set.
   */
  geoIpConfig?: DomainRecordGeoIPConfig
  /**
   *
   * One-of ('dynamicData'): at most one of 'geoIpConfig', 'httpServiceConfig', 'weightedConfig', 'viewConfig' could be set.
   */
  httpServiceConfig?: DomainRecordHTTPServiceConfig
  /**
   *
   * One-of ('dynamicData'): at most one of 'geoIpConfig', 'httpServiceConfig', 'weightedConfig', 'viewConfig' could be set.
   */
  weightedConfig?: DomainRecordWeightedConfig
  /**
   *
   * One-of ('dynamicData'): at most one of 'geoIpConfig', 'httpServiceConfig', 'weightedConfig', 'viewConfig' could be set.
   */
  viewConfig?: DomainRecordViewConfig
  id: string
  updatedAt?: Date
}


export interface RecordIdentifier {
  name: string
  type: DomainRecordType
  data?: string
  ttl?: number
}


export interface ContactExtensionEU {
  europeanCitizenship: string
}


export interface ContactExtensionFR {
  mode: ContactExtensionFRMode
  /**
   *
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo', 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  individualInfo?: ContactExtensionFRIndividualInfo
  /**
   *
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo', 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  dunsInfo?: ContactExtensionFRDunsInfo
  /**
   *
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo', 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  associationInfo?: ContactExtensionFRAssociationInfo
  /**
   *
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo', 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  trademarkInfo?: ContactExtensionFRTrademarkInfo
  /**
   *
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo', 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  codeAuthAfnicInfo?: ContactExtensionFRCodeAuthAfnicInfo
}


export interface ContactExtensionIT {
  /**
   * @deprecated This option is useless anymore.
   */
  europeanCitizenship?: string
  /**
   * @deprecated Tax_code is renamed to pin.
   */
  taxCode?: string
  /**
   * Domain name registrant's Taxcode (mandatory / only optional when the trustee is used)

If the requester:
* is an Italian natural person it contains his/her Codice Fiscale (16 characters format).
* For others than residents of IT it can contain a document number. (ID Card).
* In all other cases it must be equal to VAT number (in the 16 characters format if nationality is IT) or the numeric Codice Fiscale.
   */
  pin: string
}


export interface ContactExtensionNL {
  legalForm: ContactExtensionNLLegalForm
  legalFormRegistrationNumber: string
}


export interface ContactQuestion {
  question: string
  answer: string
}


export interface TldOffer {
  /**
   * The action of the offer (create, renew, transfer, etc.).
   */
  action: string
  /**
   * The billing SKU path of the offer (e.g. /network/domain/domains/fr/register).
   */
  operationPath: string
  /**
   * The price of the offer.
   */
  price?: Money
}


export interface DSRecord {
  /**
   * The key tag of the DS record.
   */
  keyId: number
  /**
   * The cryptographic algorithm of the DNSKEY used for the DS record.
   */
  algorithm: DSRecordAlgorithm
  /**
   * The digest of the DS record.
   *
   * One-of ('type'): at most one of 'digest', 'publicKey' could be set.
   */
  digest?: DSRecordDigest
  /**
   * The public key of the DS record.
   *
   * One-of ('type'): at most one of 'digest', 'publicKey' could be set.
   */
  publicKey?: DSRecordPublicKey
}


export interface RecordChangeAdd {
  records: DomainRecord[]
}


export interface RecordChangeClear {
}


export interface RecordChangeDelete {
  /**
   *
   * One-of ('identifier'): at most one of 'id', 'idFields' could be set.
   */
  id?: string
  /**
   *
   * One-of ('identifier'): at most one of 'id', 'idFields' could be set.
   */
  idFields?: RecordIdentifier
}


export interface RecordChangeSet {
  /**
   *
   * One-of ('identifier'): at most one of 'id', 'idFields' could be set.
   */
  id?: string
  /**
   *
   * One-of ('identifier'): at most one of 'id', 'idFields' could be set.
   */
  idFields?: RecordIdentifier
  records: DomainRecord[]
}


export interface ImportRawDNSZoneRequestTsigKey {
  name: string
  key: string
  algorithm: string
}


export interface Contact {
  /**
   * The unique identifier of the contact.
   */
  id: string
  /**
   * Legal form of the contact (individual, corporate, association, other).
   */
  legalForm: ContactLegalForm
  /**
   * First name of the contact.
   */
  firstname: string
  /**
   * Last name of the contact.
   */
  lastname: string
  /**
   * Company name of the contact (required for corporate legal forms).
   */
  companyName: string
  /**
   * Email address of the contact.
   */
  email: string
  /**
   * Alternative email address of the contact.
   */
  emailAlt: string
  /**
   * Phone number of the contact, normalized to +CC.NationalNumber format.
   */
  phoneNumber: string
  /**
   * Fax number of the contact, normalized to +CC.NationalNumber format.
   */
  faxNumber: string
  /**
   * First line of the contact's address.
   */
  addressLine1: string
  /**
   * Second line of the contact's address.
   */
  addressLine2: string
  /**
   * Postal code of the contact.
   */
  zip: string
  /**
   * City of the contact.
   */
  city: string
  /**
   * Country code of the contact (ISO 3166-1 alpha-2 format).
   */
  country: string
  /**
   * VAT identification code of the contact.
   */
  vatIdentificationCode: string
  /**
   * Company identification code of the contact (SIRET/SIREN for French contacts, any format for others).
   */
  companyIdentificationCode: string
  /**
   * Preferred language of the contact.
   */
  lang: StdLanguageCode
  /**
   * Indicates whether the contact's information can be resold.
   */
  resale: boolean
  /**
   * Additional information required for AFNIC-managed TLDs (.fr, .re, .pm, .yt, .wf, .tf).
   */
  extensionFr?: ContactExtensionFR
  /**
   * Additional information required for .eu domains. Conditionally required.
   */
  extensionEu?: ContactExtensionEU
  /**
   * Indicates whether the contact's information is published in the WHOIS database.
   */
  whoisOptIn: boolean
  /**
   * Email validation status of the contact.
   */
  emailStatus: ContactEmailStatus
  /**
   * State or region of the contact.
   */
  state: string
  /**
   * Additional information required for .nl domains. Auto-populated for individuals.
   */
  extensionNl?: ContactExtensionNL
  /**
   * Status of the contact.
   */
  status: ContactStatus
  /**
   * Additional information required for .it domains. Contains a PIN.
   */
  extensionIt?: ContactExtensionIT
  /**
   * @deprecated 
   */
  questions?: ContactQuestion[]
}


export interface ContactRolesRoles {
  /**
   * Indicates whether the contact is the owner of the domain.
   */
  isOwner: boolean
  /**
   * Indicates whether the contact is the administrative contact of the domain.
   */
  isAdministrative: boolean
  /**
   * Indicates whether the contact is the technical contact of the domain.
   */
  isTechnical: boolean
}


export interface DomainRegistrationStatusExternalDomain {
  /**
   * Validation token for the external domain registration.
   */
  validationToken: string
}


export interface DomainRegistrationStatusTransfer {
  /**
   * Status of the domain transfer.
   */
  status: DomainRegistrationStatusTransferStatus
  /**
   * Indicates whether the current owner has voted for the transfer.
   */
  voteCurrentOwner: boolean
  /**
   * Indicates whether the new owner has voted for the transfer.
   */
  voteNewOwner: boolean
}


export interface Tld {
  /**
   * The TLD name.
   */
  name: string
  /**
   * Indicates whether the TLD supports DNSSEC.
   */
  dnssecSupport: boolean
  /**
   * Minimum registration duration in years for the TLD.
   */
  durationInYearsMin: number
  /**
   * Maximum registration duration in years for the TLD.
   */
  durationInYearsMax: number
  /**
   * Indicates whether the TLD supports internationalized domain names (IDN).
   */
  idnSupport: boolean
  /**
   * Map of available offers for the TLD, keyed by action string (create, renew, transfer, etc.).
   */
  offers: Record<string, TldOffer>
  /**
   * Additional specifications of the TLD.
   */
  specifications: Record<string, string>
}


export interface NewContact {
  /**
   * Legal form of the contact (individual, corporate, association, other).
   */
  legalForm: ContactLegalForm
  /**
   * First name of the contact.
   */
  firstname: string
  /**
   * Last name of the contact.
   */
  lastname: string
  /**
   * Company name of the contact (required for corporate legal forms).
   */
  companyName?: string
  /**
   * Email address of the contact.
   */
  email: string
  /**
   * Alternative email address of the contact.
   */
  emailAlt?: string
  /**
   * Phone number of the contact, normalized to +CC.NationalNumber format.
   */
  phoneNumber: string
  /**
   * Fax number of the contact, normalized to +CC.NationalNumber format.
   */
  faxNumber?: string
  /**
   * First line of the contact's address.
   */
  addressLine1: string
  /**
   * Second line of the contact's address.
   */
  addressLine2?: string
  /**
   * Postal code of the contact.
   */
  zip: string
  /**
   * City of the contact.
   */
  city: string
  /**
   * Country code of the contact (ISO 3166-1 alpha-2 format).
   */
  country: string
  /**
   * VAT identification code of the contact.
   */
  vatIdentificationCode?: string
  /**
   * Company identification code of the contact (SIRET/SIREN for French contacts, any format for others).
   */
  companyIdentificationCode?: string
  /**
   * Preferred language of the contact.
   */
  lang: StdLanguageCode
  /**
   * Indicates whether the contact's information can be resold.
   */
  resale: boolean
  /**
   * Additional information required for AFNIC-managed TLDs (.fr, .re, .pm, .yt, .wf, .tf).
   */
  extensionFr?: ContactExtensionFR
  /**
   * Additional information required for .eu domains. Conditionally required.
   */
  extensionEu?: ContactExtensionEU
  /**
   * Indicates whether the contact's information is published in the WHOIS database.
   */
  whoisOptIn: boolean
  /**
   * State or region of the contact.
   */
  state?: string
  /**
   * Additional information required for .nl domains. Auto-populated for individuals.
   */
  extensionNl?: ContactExtensionNL
  /**
   * Additional information required for .it domains. Contains a PIN.
   */
  extensionIt?: ContactExtensionIT
  /**
   * @deprecated 
   */
  questions?: ContactQuestion[]
}


export interface CheckContactsCompatibilityResponseContactCheckResult {
  compatible: boolean
  errorMessage?: string
}


export interface DNSZone {
  domain: string
  subdomain: string
  ns: string[]
  nsDefault: string[]
  nsMaster: string[]
  status: DNSZoneStatus
  message?: string
  updatedAt?: Date
  projectId: string
  linkedProducts: LinkedProduct[]
}


export interface DomainDNSSEC {
  /**
   * Status of the DNSSEC configuration of the domain.
   */
  status: DomainFeatureStatus
  /**
   * List of the domain's DS records.
   */
  dsRecords: DSRecord[]
}


export interface RecordChange {
  /**
   *
   * One-of ('change'): at most one of 'add', 'set', 'delete', 'clear' could be set.
   */
  add?: RecordChangeAdd
  /**
   *
   * One-of ('change'): at most one of 'add', 'set', 'delete', 'clear' could be set.
   */
  set?: RecordChangeSet
  /**
   *
   * One-of ('change'): at most one of 'add', 'set', 'delete', 'clear' could be set.
   */
  delete?: RecordChangeDelete
  /**
   *
   * One-of ('change'): at most one of 'add', 'set', 'delete', 'clear' could be set.
   */
  clear?: RecordChangeClear
}


export interface ImportProviderDNSZoneRequestOnlineV1 {
  token: string
}


export interface ImportRawDNSZoneRequestAXFRSource {
  nameServer: string
  tsigKey?: ImportRawDNSZoneRequestTsigKey
}


export interface ImportRawDNSZoneRequestBindSource {
  content: string
}


export interface ContactRoles {
  /**
   * The contact information.
   */
  contact?: Contact
  /**
   * Map of domain names to the contact's roles on each domain.
   */
  roles: Record<string, ContactRolesRoles>
}


export interface Nameserver {
  name: string
  ip: string[]
}


export interface DNSZoneVersion {
  id: string
  createdAt?: Date
}


export interface Host {
  /**
   * The domain name associated with the hostname.
   */
  domain: string
  /**
   * The hostname (FQDN, e.g. ns1.example.com).
   */
  name: string
  /**
   * List of glue IP addresses associated with the hostname.
   */
  ips: string[]
  /**
   * Status of the hostname.
   */
  status: HostStatus
}


export interface DomainSummary {
  /**
   * The domain name.
   */
  domain: string
  /**
   * The project ID associated with the domain.
   */
  projectId: string
  /**
   * The organization ID associated with the domain.
   */
  organizationId: string
  /**
   * Status of the automatic renewal of the domain (enabling, enabled, disabling, disabled).
   */
  autoRenewStatus: DomainFeatureStatus
  /**
   * Status of the DNSSEC configuration of the domain (enabling, enabled, disabling, disabled).
   */
  dnssecStatus: DomainFeatureStatus
  /**
   * List of the domain's EPP status codes (e.g. clientTransferProhibited, serverHold).
   */
  eppCode: string[]
  /**
   * Date of expiration of the domain.
   */
  expiredAt?: Date
  /**
   * Domain's last modification date.
   */
  updatedAt?: Date
  /**
   * Domain's creation date.
   */
  createdAt?: Date
  /**
   * The registrar managing the domain.
   */
  registrar: string
  /**
   * Indicates whether the domain is external (not managed by Scaleway as registrar).
   */
  isExternal: boolean
  /**
   * Status of the domain.
   */
  status: DomainStatus
  /**
   * Registration status of an external domain, if available.
   *
   * One-of ('registrationStatus'): at most one of 'externalDomainRegistrationStatus', 'transferRegistrationStatus' could be set.
   */
  externalDomainRegistrationStatus?: DomainRegistrationStatusExternalDomain
  /**
   * Status of an in-progress domain transfer.
   *
   * One-of ('registrationStatus'): at most one of 'externalDomainRegistrationStatus', 'transferRegistrationStatus' could be set.
   */
  transferRegistrationStatus?: DomainRegistrationStatusTransfer
  /**
   * Indicates if a trade is ongoing.
   */
  pendingTrade: boolean
}


export interface InboundTransfer {
  /**
   * The unique identifier of the inbound transfer.
   */
  id: string
  /**
   * The creation date of the inbound transfer.
   */
  createdAt?: Date
  /**
   * The last modification date of the inbound transfer.
   */
  lastUpdatedAt?: Date
  /**
   * The project ID associated with the inbound transfer.
   */
  projectId: string
  /**
   * The domain associated with the inbound transfer.
   */
  domain: string
  /**
   * Inbound transfer status.
   */
  status: InboundTransferStatus
  /**
   * Human-friendly message to describe the current inbound transfer status.
   */
  message: string
  /**
   * The unique identifier of the associated task.
   */
  taskId: string
}


export interface RenewableDomain {
  /**
   * The domain name.
   */
  domain: string
  /**
   * The project ID associated with the domain.
   */
  projectId: string
  /**
   * The organization ID associated with the domain.
   */
  organizationId: string
  /**
   * The renewal status of the domain.
   */
  status: RenewableDomainStatus
  /**
   * Duration in years for which the domain can be renewed.
   */
  renewableDurationInYears?: number
  /**
   * Date of expiration of the domain.
   */
  expiredAt?: Date
  /**
   * Deadline to renew the domain before it enters the late renewal period.
   */
  limitRenewAt?: Date
  /**
   * Deadline to renew the domain before it enters the redemption period.
   */
  limitRedemptionAt?: Date
  /**
   * Estimated date at which the domain will be deleted.
   */
  estimatedDeleteAt?: Date
  /**
   * TLD information of the domain.
   */
  tld?: Tld
}


export interface SSLCertificate {
  dnsZone: string
  alternativeDnsZones: string[]
  status: SSLCertificateStatus
  privateKey: string
  certificateChain: string
  createdAt?: Date
  expiredAt?: Date
}


export interface Task {
  /**
   * The unique identifier of the task.
   */
  id: string
  /**
   * The project ID associated to the task.
   */
  projectId: string
  /**
   * The organization ID associated to the task.
   */
  organizationId: string
  /**
   * The domain name associated to the task.
   */
  domain?: string
  /**
   * The type of the task.
   */
  type: TaskType
  /**
   * The status of the task.
   */
  status: TaskStatus
  /**
   * Start date of the task.
   */
  startedAt?: Date
  /**
   * Last update of the task.
   */
  updatedAt?: Date
  /**
   * Error message associated to the task.
   */
  message?: string
  /**
   * Human-friendly contact identifier used when the task concerns a contact.
   */
  contactIdentifier?: string
}


export interface TransferInDomainRequestTransferRequest {
  domain: string
  authCode: string
}


export interface UpdateContactRequestQuestion {
  question?: string
  answer?: string
}


export interface AvailableDomain {
  /**
   * The domain name.
   */
  domain: string
  /**
   * Indicates whether the domain is available for registration.
   */
  available: boolean
  /**
   * TLD information of the domain.
   */
  tld?: Tld
}


export interface CheckContactsCompatibilityResponse {
  /**
   * Indicates whether all contacts are compatible with the domains or TLDs.
   */
  compatible: boolean
  /**
   * Compatibility check result for the owner contact.
   */
  ownerCheckResult?: CheckContactsCompatibilityResponseContactCheckResult
  /**
   * Compatibility check result for the administrative contact.
   */
  administrativeCheckResult?: CheckContactsCompatibilityResponseContactCheckResult
  /**
   * Compatibility check result for the technical contact.
   */
  technicalCheckResult?: CheckContactsCompatibilityResponseContactCheckResult
}


export type ClearDNSZoneRecordsRequest = {
  /**
   * DNS zone to clear.
   */
  dnsZone: string
}


export interface ClearDNSZoneRecordsResponse {
}


export type CloneDNSZoneRequest = {
  /**
   * DNS zone to clone.
   */
  dnsZone: string
  /**
   * Destination DNS zone in which to clone the chosen DNS zone.
   */
  destDnsZone: string
  /**
   * Specifies whether or not the destination DNS zone will be overwritten.
   */
  overwrite: boolean
  /**
   * Project ID of the destination DNS zone.
   */
  projectId?: string
}


export type CreateDNSZoneRequest = {
  /**
   * Domain in which to create the DNS zone.
   */
  domain: string
  /**
   * Subdomain of the DNS zone to create.
   */
  subdomain: string
  /**
   * Project ID in which to create the DNS zone.
   */
  projectId?: string
}


export type CreateSSLCertificateRequest = {
  dnsZone: string
  alternativeDnsZones?: string[]
}


export type DeleteDNSZoneRequest = {
  /**
   * DNS zone to delete.
   */
  dnsZone: string
  /**
   * Project ID of the DNS zone to delete.
   */
  projectId?: string
}


export interface DeleteDNSZoneResponse {
}


export type DeleteDNSZoneTsigKeyRequest = {
  dnsZone: string
}


export interface DeleteExternalDomainResponse {
}


export type DeleteSSLCertificateRequest = {
  dnsZone: string
}


export interface DeleteSSLCertificateResponse {
}


export interface Domain {
  /**
   * The domain name.
   */
  domain: string
  /**
   * The organization ID associated with the domain.
   */
  organizationId: string
  /**
   * The project ID associated with the domain.
   */
  projectId: string
  /**
   * Status of the automatic renewal of the domain (enabling, enabled, disabling, disabled).
   */
  autoRenewStatus: DomainFeatureStatus
  /**
   * Status of the DNSSEC configuration of the domain.
   */
  dnssec?: DomainDNSSEC
  /**
   * List of the domain's EPP status codes (e.g. clientTransferProhibited, serverHold).
   */
  eppCode: string[]
  /**
   * Date of expiration of the domain.
   */
  expiredAt?: Date
  /**
   * Domain's last modification date.
   */
  updatedAt?: Date
  /**
   * The registrar managing the domain.
   */
  registrar: string
  /**
   * Indicates whether the domain is external (not managed by Scaleway as registrar).
   */
  isExternal: boolean
  /**
   * Status of the domain.
   */
  status: DomainStatus
  /**
   * List of the domain's DNS zones.
   */
  dnsZones: DNSZone[]
  /**
   * Contact information of the domain's owner.
   */
  ownerContact?: Contact
  /**
   * Contact information of the domain's technical contact.
   */
  technicalContact?: Contact
  /**
   * Contact information of the domain's administrative contact.
   */
  administrativeContact?: Contact
  /**
   * Registration status of an external domain, if available.
   *
   * One-of ('registrationStatus'): at most one of 'externalDomainRegistrationStatus', 'transferRegistrationStatus' could be set.
   */
  externalDomainRegistrationStatus?: DomainRegistrationStatusExternalDomain
  /**
   * Status of an in-progress domain transfer.
   *
   * One-of ('registrationStatus'): at most one of 'externalDomainRegistrationStatus', 'transferRegistrationStatus' could be set.
   */
  transferRegistrationStatus?: DomainRegistrationStatusTransfer
  /**
   * Domain's TLD information.
   */
  tld?: Tld
  /**
   * List of Scaleway product types linked to the domain (e.g. vpc).
   */
  linkedProducts: LinkedProduct[]
  /**
   * Indicates if a trade is ongoing.
   */
  pendingTrade: boolean
}


export type ExportRawDNSZoneRequest = {
  /**
   * DNS zone to export.
   */
  dnsZone: string
  /**
   * DNS zone format.
   */
  format?: RawFormat
}


export type GetDNSZoneTsigKeyRequest = {
  dnsZone: string
}


export interface GetDNSZoneTsigKeyResponse {
  name: string
  key: string
  algorithm: string
}


export type GetDNSZoneVersionDiffRequest = {
  dnsZoneVersionId: string
}


export interface GetDNSZoneVersionDiffResponse {
  changes: RecordChange[]
}


export interface GetDomainAuthCodeResponse {
  /**
   * The authorization code to transfer the domain.
   */
  authCode: string
}


export type GetSSLCertificateRequest = {
  dnsZone: string
}


export type ImportProviderDNSZoneRequest = {
  dnsZone: string
  /**
   *
   * One-of ('provider'): at most one of 'onlineV1' could be set.
   */
  onlineV1?: ImportProviderDNSZoneRequestOnlineV1
}


export interface ImportProviderDNSZoneResponse {
  records: DomainRecord[]
}


export type ImportRawDNSZoneRequest = {
  /**
   * DNS zone to import.
   */
  dnsZone: string
  /**
   * @deprecated 
   */
  content?: string
  projectId?: string
  /**
   * @deprecated 
   */
  format?: RawFormat
  /**
   * Import a bind file format.
   *
   * One-of ('source'): at most one of 'bindSource', 'axfrSource' could be set.
   */
  bindSource?: ImportRawDNSZoneRequestBindSource
  /**
   * Import from the name server given with TSIG, to use or not.
   *
   * One-of ('source'): at most one of 'bindSource', 'axfrSource' could be set.
   */
  axfrSource?: ImportRawDNSZoneRequestAXFRSource
}


export interface ImportRawDNSZoneResponse {
  records: DomainRecord[]
}


export interface ListContactsResponse {
  /**
   * Total count of contacts matching the request.
   */
  totalCount: number
  /**
   * List of contacts with their associated roles.
   */
  contacts: ContactRoles[]
}


export type ListDNSZoneNameserversRequest = {
  /**
   * DNS zone on which to filter the returned DNS zone name servers.
   */
  dnsZone: string
  /**
   * Project ID on which to filter the returned DNS zone name servers.
   */
  projectId?: string
}


export interface ListDNSZoneNameserversResponse {
  /**
   * DNS zone name servers returned.
   */
  ns: Nameserver[]
}


export type ListDNSZoneRecordsRequest = {
  /**
   * DNS zone on which to filter the returned DNS zone records.
   */
  dnsZone: string
  /**
   * Project ID on which to filter the returned DNS zone records.
   */
  projectId?: string
  /**
   * Sort order of the returned DNS zone records.
   */
  orderBy?: ListDNSZoneRecordsRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Maximum number of DNS zone records per page.
   */
  pageSize?: number
  /**
   * Name on which to filter the returned DNS zone records.
   */
  name: string
  /**
   * Record type on which to filter the returned DNS zone records.
   */
  type?: DomainRecordType
  /**
   * Record ID on which to filter the returned DNS zone records.
   */
  id?: string
}


export interface ListDNSZoneRecordsResponse {
  /**
   * Total number of DNS zone records.
   */
  totalCount: number
  /**
   * Paginated returned DNS zone records.
   */
  records: DomainRecord[]
}


export type ListDNSZoneVersionRecordsRequest = {
  dnsZoneVersionId: string
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Maximum number of DNS zones versions records per page.
   */
  pageSize?: number
}


export interface ListDNSZoneVersionRecordsResponse {
  /**
   * Total number of DNS zones versions records.
   */
  totalCount: number
  records: DomainRecord[]
}


export type ListDNSZoneVersionsRequest = {
  dnsZone: string
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Maximum number of DNS zones versions per page.
   */
  pageSize?: number
}


export interface ListDNSZoneVersionsResponse {
  /**
   * Total number of DNS zones versions.
   */
  totalCount: number
  versions: DNSZoneVersion[]
}


export type ListDNSZonesRequest = {
  /**
   * Organization ID on which to filter the returned DNS zones.
   */
  organizationId?: string
  /**
   * Project ID on which to filter the returned DNS zones.
   */
  projectId?: string
  /**
   * Sort order of the returned DNS zones.
   */
  orderBy?: ListDNSZonesRequestOrderBy
  /**
   * Page number to return, from the paginated results.
   */
  page?: number
  /**
   * Maximum number of DNS zones to return per page.
   */
  pageSize?: number
  /**
   * Domain on which to filter the returned DNS zones.
   */
  domain: string
  /**
   * @deprecated DNS zone on which to filter the returned DNS zones.
   */
  dnsZone?: string
  /**
   * DNS zones on which to filter the returned DNS zones.
   */
  dnsZones?: string[]
  /**
   * Only list DNS zones created after this date.
   */
  createdAfter?: Date
  /**
   * Only list DNS zones created before this date.
   */
  createdBefore?: Date
  /**
   * Only list DNS zones updated after this date.
   */
  updatedAfter?: Date
  /**
   * Only list DNS zones updated before this date.
   */
  updatedBefore?: Date
}


export interface ListDNSZonesResponse {
  /**
   * Total number of DNS zones matching the requested criteria.
   */
  totalCount: number
  /**
   * Paginated returned DNS zones.
   */
  dnsZones: DNSZone[]
}


export interface ListDomainHostsResponse {
  /**
   * Total count of hostnames matching the request.
   */
  totalCount: number
  /**
   * List of host objects matching the request.
   */
  hosts: Host[]
}


export interface ListDomainsResponse {
  /**
   * Total count of domains matching the request.
   */
  totalCount: number
  /**
   * List of domain summaries matching the request.
   */
  domains: DomainSummary[]
}


export interface ListInboundTransfersResponse {
  /**
   * Total count of inbound transfers matching the request.
   */
  totalCount: number
  /**
   * List of inbound transfers matching the request.
   */
  inboundTransfers: InboundTransfer[]
}


export interface ListRenewableDomainsResponse {
  /**
   * Total count of renewable domains matching the request.
   */
  totalCount: number
  /**
   * List of renewable domains matching the request.
   */
  domains: RenewableDomain[]
}


export type ListSSLCertificatesRequest = {
  dnsZone: string
  page?: number
  pageSize?: number
  projectId?: string
}


export interface ListSSLCertificatesResponse {
  totalCount: number
  certificates: SSLCertificate[]
}


export interface ListTasksResponse {
  /**
   * Total count of tasks matching the request.
   */
  totalCount: number
  /**
   * List of tasks matching the request.
   */
  tasks: Task[]
}


export interface ListTldsResponse {
  /**
   * Array of TLDs.
   */
  tlds: Tld[]
  /**
   * Total count of TLDs returned.
   */
  totalCount: number
}


export interface OrderResponse {
  /**
   * List of domains in the order.
   */
  domains: string[]
  /**
   * The organization ID associated with the order.
   */
  organizationId: string
  /**
   * The project ID associated with the order.
   */
  projectId: string
  /**
   * The unique identifier of the task associated with the order.
   */
  taskId: string
  /**
   * The creation date of the order.
   */
  createdAt?: Date
}


export type RefreshDNSZoneRequest = {
  /**
   * DNS zone to refresh.
   */
  dnsZone: string
  /**
   * Specifies whether or not to recreate the DNS zone.
   */
  recreateDnsZone: boolean
  /**
   * Specifies whether or not to recreate the sub DNS zone.
   */
  recreateSubDnsZone: boolean
}


export interface RefreshDNSZoneResponse {
  /**
   * DNS zones returned.
   */
  dnsZones: DNSZone[]
}


export interface RegisterExternalDomainResponse {
  /**
   * The external domain name registered.
   */
  domain: string
  /**
   * The organization ID associated with the external domain.
   */
  organizationId: string
  /**
   * The project ID associated with the external domain.
   */
  projectId: string
  /**
   * The validation token to set as a DNS TXT record at _scaleway-challenge.<domain> to validate the external domain.
   */
  validationToken: string
  /**
   * The creation date of the external domain registration.
   */
  createdAt?: Date
}


export type RegistrarApiBuyDomainsRequest = {
  /**
   * List of domains to purchase.
   */
  domains: string[]
  /**
   * Duration in years for the domain registration. Subject to TLD-specific minimum and maximum constraints.
   */
  durationInYears: number
  /**
   * Project ID to create the domains in.
   */
  projectId?: string
  /**
   * ID of the existing contact to use as the domain's owner.
   *
   * One-of ('ownerContactType'): at most one of 'ownerContactId', 'ownerContact' could be set.
   */
  ownerContactId?: string
  /**
   * New contact to create and use as the domain's owner.
   *
   * One-of ('ownerContactType'): at most one of 'ownerContactId', 'ownerContact' could be set.
   */
  ownerContact?: NewContact
  /**
   * ID of the existing contact to use as the domain's administrative contact. Optional; falls back to the owner contact if omitted.
   *
   * One-of ('administrativeContactType'): at most one of 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContactId?: string
  /**
   * New contact to create and use as the domain's administrative contact. Optional; falls back to the owner contact if omitted.
   *
   * One-of ('administrativeContactType'): at most one of 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContact?: NewContact
  /**
   * ID of the existing contact to use as the domain's technical contact. Optional; falls back to the owner contact if omitted.
   *
   * One-of ('technicalContactType'): at most one of 'technicalContactId', 'technicalContact' could be set.
   */
  technicalContactId?: string
  /**
   * New contact to create and use as the domain's technical contact. Optional; falls back to the owner contact if omitted.
   *
   * One-of ('technicalContactType'): at most one of 'technicalContactId', 'technicalContact' could be set.
   */
  technicalContact?: NewContact
  /**
   * Enable the `auto renew` feature for all the requested domains. This means the domain will be automatically renewed before its expiry date.
   */
  autoRenew: boolean
}


export type RegistrarApiCheckContactsCompatibilityRequest = {
  /**
   * List of domains to check contacts compatibility against.
   */
  domains?: string[]
  /**
   * List of TLDs to check contacts compatibility against.
   */
  tlds?: string[]
  /**
   * ID of the existing contact to check as the domain's owner.
   *
   * One-of ('ownerContactType'): at most one of 'ownerContactId', 'ownerContact' could be set.
   */
  ownerContactId?: string
  /**
   * New contact to check as the domain's owner.
   *
   * One-of ('ownerContactType'): at most one of 'ownerContactId', 'ownerContact' could be set.
   */
  ownerContact?: NewContact
  /**
   * ID of the existing contact to check as the domain's administrative contact.
   *
   * One-of ('administrativeContactType'): at most one of 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContactId?: string
  /**
   * New contact to check as the domain's administrative contact.
   *
   * One-of ('administrativeContactType'): at most one of 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContact?: NewContact
  /**
   * ID of the existing contact to check as the domain's technical contact.
   *
   * One-of ('technicalContactType'): at most one of 'technicalContactId', 'technicalContact' could be set.
   */
  technicalContactId?: string
  /**
   * New contact to check as the domain's technical contact.
   *
   * One-of ('technicalContactType'): at most one of 'technicalContactId', 'technicalContact' could be set.
   */
  technicalContact?: NewContact
}


export type RegistrarApiCreateDomainHostRequest = {
  /**
   * The domain name to create the hostname for.
   */
  domain: string
  /**
   * The hostname to create.
   */
  name: string
  /**
   * List of glue IP addresses associated with the hostname.
   */
  ips?: string[]
}


export type RegistrarApiDeleteDomainHostRequest = {
  /**
   * The domain name of the hostname to delete.
   */
  domain: string
  /**
   * The hostname to delete.
   */
  name: string
}


export type RegistrarApiDeleteExternalDomainRequest = {
  /**
   * The external domain name to delete.
   */
  domain: string
}


export type RegistrarApiDisableDomainAutoRenewRequest = {
  /**
   * The domain name to disable auto renew for.
   */
  domain: string
}


export type RegistrarApiDisableDomainDNSSECRequest = {
  /**
   * The domain name to disable DNSSEC for.
   */
  domain: string
}


export type RegistrarApiEnableDomainAutoRenewRequest = {
  /**
   * The domain name to enable auto renew for.
   */
  domain: string
}


export type RegistrarApiEnableDomainDNSSECRequest = {
  /**
   * The domain name to enable DNSSEC for.
   */
  domain: string
  /**
   * The DS record to configure for DNSSEC. Required for domains using non-Scaleway nameservers. For Scaleway nameservers, auto-generated and must be omitted.
   */
  dsRecord?: DSRecord
}


export type RegistrarApiGetContactRequest = {
  /**
   * ID of the contact to retrieve.
   */
  contactId: string
}


export type RegistrarApiGetDomainAuthCodeRequest = {
  /**
   * The domain name to retrieve the authorization code for.
   */
  domain: string
}


export type RegistrarApiGetDomainRequest = {
  /**
   * The domain name to retrieve.
   */
  domain: string
}


export type RegistrarApiListContactsRequest = {
  /**
   * Page number for the returned contacts.
   */
  page?: number
  /**
   * Maximum number of contacts per page.
   */
  pageSize?: number
  /**
   * Filter contacts by domain name.
   */
  domain?: string
  /**
   * Filter contacts by project ID.
   */
  projectId?: string
  /**
   * Filter contacts by organization ID.
   */
  organizationId?: string
  /**
   * Filter contacts by role (owner, administrative, technical).
   */
  role?: ListContactsRequestRole
  /**
   * Filter contacts by email validation status.
   */
  emailStatus?: ContactEmailStatus
  /**
   * Sort order of the returned contacts.
   */
  orderBy?: ListContactsRequestOrderBy
  /**
   * Filter by contact status.
   */
  status?: ContactStatus
  /**
   * Filter by legal form.
   */
  legalForm?: ContactLegalForm
  /**
   * Filter by email address.
   */
  email?: string
  /**
   * Fuzzy search in firstname, lastname, email, and company_name.
   */
  search?: string
}


export type RegistrarApiListDomainHostsRequest = {
  /**
   * The domain name to list hostnames for.
   */
  domain: string
  /**
   * Page number for the returned hostnames.
   */
  page?: number
  /**
   * Maximum number of hostnames per page.
   */
  pageSize?: number
}


export type RegistrarApiListDomainsRequest = {
  /**
   * Page number for the returned domains.
   */
  page?: number
  /**
   * Maximum number of domains per page.
   */
  pageSize?: number
  /**
   * Sort order of the returned domains.
   */
  orderBy?: ListDomainsRequestOrderBy
  /**
   * Filter domains by registrar.
   */
  registrar?: string
  /**
   * Filter domains by status.
   */
  status?: DomainStatus
  /**
   * Filter domains by project ID.
   */
  projectId?: string
  /**
   * Filter domains by organization ID.
   */
  organizationId?: string
  /**
   * Filter domains by whether they are external (not managed by Scaleway as registrar).
   */
  isExternal?: boolean
  /**
   * Filter domains by domain name.
   */
  domain?: string
}


export type RegistrarApiListInboundTransfersRequest = {
  /**
   * Page number for the returned inbound transfers.
   */
  page: number
  /**
   * Maximum number of inbound transfers per page.
   */
  pageSize?: number
  /**
   * Filter inbound transfers by project ID.
   */
  projectId?: string
  /**
   * Filter inbound transfers by organization ID.
   */
  organizationId?: string
  /**
   * Filter inbound transfers by domain name.
   */
  domain: string
}


export type RegistrarApiListRenewableDomainsRequest = {
  /**
   * Page number for the returned renewable domains.
   */
  page?: number
  /**
   * Maximum number of renewable domains per page.
   */
  pageSize?: number
  /**
   * Sort order of the returned renewable domains.
   */
  orderBy?: ListRenewableDomainsRequestOrderBy
  /**
   * Filter renewable domains by project ID.
   */
  projectId?: string
  /**
   * Filter renewable domains by organization ID.
   */
  organizationId?: string
}


export type RegistrarApiListTasksRequest = {
  /**
   * Page number for the returned tasks.
   */
  page?: number
  /**
   * Maximum number of tasks per page.
   */
  pageSize?: number
  /**
   * Filter tasks by project ID.
   */
  projectId?: string
  /**
   * Filter tasks by organization ID.
   */
  organizationId?: string
  /**
   * Filter tasks by domain name.
   */
  domain?: string
  /**
   * Filter tasks by type.
   */
  types?: TaskType[]
  /**
   * Filter tasks by status.
   */
  statuses?: TaskStatus[]
  /**
   * Sort order of the returned tasks.
   */
  orderBy?: ListTasksRequestOrderBy
}


export type RegistrarApiListTldsRequest = {
  /**
   * Array of TLDs to return.
   */
  tlds?: string[]
  /**
   * Page number for the returned Projects.
   */
  page?: number
  /**
   * Maximum number of Project per page.
   */
  pageSize?: number
  /**
   * Sort order of the returned TLDs.
   */
  orderBy?: ListTldsRequestOrderBy
}


export type RegistrarApiLockDomainTransferRequest = {
  /**
   * The domain name to lock for transfer.
   */
  domain: string
}


export type RegistrarApiRegisterExternalDomainRequest = {
  /**
   * The external domain name to register.
   */
  domain: string
  /**
   * Project ID to register the external domain in.
   */
  projectId?: string
}


export type RegistrarApiRenewDomainsRequest = {
  /**
   * List of domains to renew.
   */
  domains: string[]
  /**
   * Duration in years for the domain renewal. Subject to TLD-specific minimum and maximum constraints.
   */
  durationInYears: number
  /**
   * Confirm the late renewal (incurs extra fees).
   */
  forceLateRenewal?: boolean
}


export type RegistrarApiRetryInboundTransferRequest = {
  /**
   * The domain being transferred.
   */
  domain: string
  /**
   * The project ID to associated with the inbound transfer.
   */
  projectId?: string
  /**
   * An optional new auth code to replace the previous one for the retry.
   */
  authCode?: string
}


export type RegistrarApiSearchAvailableDomainsRequest = {
  /**
   * A list of domain to search, TLD is optional.
   */
  domains: string[]
  /**
   * Array of tlds to search on.
   */
  tlds?: string[]
  /**
   * Search exact match.
   */
  strictSearch: boolean
  /**
   * If an exact match is found, include it in response as a separate element.
   */
  includeExactMatch: boolean
}


export type RegistrarApiTradeDomainRequest = {
  /**
   * The domain name to trade (change of owner/registrant).
   */
  domain: string
  /**
   * Project ID to associate with the domain after the trade. Also used to filter the new owner's contacts.
   */
  projectId?: string
  /**
   * ID of the existing contact to use as the domain's new owner.
   *
   * One-of ('newOwnerContactType'): at most one of 'newOwnerContactId', 'newOwnerContact' could be set.
   */
  newOwnerContactId?: string
  /**
   * New contact to create and use as the domain's new owner.
   *
   * One-of ('newOwnerContactType'): at most one of 'newOwnerContactId', 'newOwnerContact' could be set.
   */
  newOwnerContact?: NewContact
}


export type RegistrarApiTransferInDomainRequest = {
  /**
   * List of domains to transfer in, each with its optional auth code.
   */
  domains: TransferInDomainRequestTransferRequest[]
  /**
   * Project ID to transfer the domains into.
   */
  projectId?: string
  /**
   * ID of the existing contact to use as the domain's owner.
   *
   * One-of ('ownerContactType'): at most one of 'ownerContactId', 'ownerContact' could be set.
   */
  ownerContactId?: string
  /**
   * New contact to create and use as the domain's owner.
   *
   * One-of ('ownerContactType'): at most one of 'ownerContactId', 'ownerContact' could be set.
   */
  ownerContact?: NewContact
  /**
   * ID of the existing contact to use as the domain's administrative contact.
   *
   * One-of ('administrativeContactType'): at most one of 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContactId?: string
  /**
   * New contact to create and use as the domain's administrative contact.
   *
   * One-of ('administrativeContactType'): at most one of 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContact?: NewContact
  /**
   * ID of the existing contact to use as the domain's technical contact.
   *
   * One-of ('technicalContactType'): at most one of 'technicalContactId', 'technicalContact' could be set.
   */
  technicalContactId?: string
  /**
   * New contact to create and use as the domain's technical contact.
   *
   * One-of ('technicalContactType'): at most one of 'technicalContactId', 'technicalContact' could be set.
   */
  technicalContact?: NewContact
}


export type RegistrarApiUnlockDomainTransferRequest = {
  /**
   * The domain name to unlock for transfer.
   */
  domain: string
}


export type RegistrarApiUpdateContactRequest = {
  /**
   * ID of the contact to update.
   */
  contactId: string
  /**
   * Email address of the contact.
   */
  email?: string
  /**
   * Alternative email address of the contact.
   */
  emailAlt?: string
  /**
   * Phone number of the contact, normalized to +CC.NationalNumber format.
   */
  phoneNumber?: string
  /**
   * Fax number of the contact, normalized to +CC.NationalNumber format.
   */
  faxNumber?: string
  /**
   * First line of the contact's address.
   */
  addressLine1?: string
  /**
   * Second line of the contact's address.
   */
  addressLine2?: string
  /**
   * Postal code of the contact.
   */
  zip?: string
  /**
   * City of the contact.
   */
  city?: string
  /**
   * Country code of the contact (ISO 3166-1 alpha-2 format). Not updatable; returns an error if changed.
   */
  country?: string
  /**
   * VAT identification code of the contact.
   */
  vatIdentificationCode?: string
  /**
   * Company identification code of the contact (SIRET/SIREN for French contacts, any format for others).
   */
  companyIdentificationCode?: string
  /**
   * Preferred language of the contact.
   */
  lang?: StdLanguageCode
  /**
   * Indicates whether the contact's information can be resold.
   */
  resale?: boolean
  /**
   * Additional information required for AFNIC-managed TLDs (.fr, .re, .pm, .yt, .wf, .tf).
   */
  extensionFr?: ContactExtensionFR
  /**
   * Additional information required for .eu domains. Conditionally required.
   */
  extensionEu?: ContactExtensionEU
  /**
   * Additional information required for .nl domains. Auto-populated for individuals.
   */
  extensionNl?: ContactExtensionNL
  /**
   * Additional information required for .it domains. Contains a PIN.
   */
  extensionIt?: ContactExtensionIT
  /**
   * Indicates whether the contact's information is published in the WHOIS database.
   */
  whoisOptIn?: boolean
  /**
   * State or region of the contact.
   */
  state?: string
  /**
   * @deprecated 
   */
  questions?: UpdateContactRequestQuestion[]
}


export type RegistrarApiUpdateDomainHostRequest = {
  /**
   * The domain name of the hostname to update.
   */
  domain: string
  /**
   * The hostname to update.
   */
  name: string
  /**
   * New list of glue IP addresses associated with the hostname. Optional.
   */
  ips?: string[]
}


export type RegistrarApiUpdateDomainRequest = {
  /**
   * The domain name to update.
   */
  domain: string
  /**
   * ID of the existing contact to use as the domain's technical contact.
   *
   * One-of ('technicalContactInfo'): at most one of 'technicalContactId', 'technicalContact' could be set.
   */
  technicalContactId?: string
  /**
   * New contact to create and use as the domain's technical contact.
   *
   * One-of ('technicalContactInfo'): at most one of 'technicalContactId', 'technicalContact' could be set.
   */
  technicalContact?: NewContact
  /**
   * @deprecated Deprecated. ID of the existing contact to use as the domain's owner.
   *
   * One-of ('ownerContactInfo'): at most one of 'ownerContactId', 'ownerContact' could be set.
   */
  ownerContactId?: string
  /**
   * @deprecated Deprecated. New contact to create and use as the domain's owner.
   *
   * One-of ('ownerContactInfo'): at most one of 'ownerContactId', 'ownerContact' could be set.
   */
  ownerContact?: NewContact
  /**
   * ID of the existing contact to use as the domain's administrative contact.
   *
   * One-of ('administrativeContactInfo'): at most one of 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContactId?: string
  /**
   * New contact to create and use as the domain's administrative contact.
   *
   * One-of ('administrativeContactInfo'): at most one of 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContact?: NewContact
}


export type RestoreDNSZoneVersionRequest = {
  dnsZoneVersionId: string
}


export interface RestoreDNSZoneVersionResponse {
}


export interface RetryInboundTransferResponse {
}


export interface SearchAvailableDomainsConsoleResponse {
  exactMatchDomain?: AvailableDomain
  availableDomains: AvailableDomain[]
}


export interface SearchAvailableDomainsResponse {
  /**
   * Array of available domains.
   */
  availableDomains: AvailableDomain[]
  /**
   * If an exact match was asked and found, the result is in this field.
   */
  exactMatchDomain?: AvailableDomain
}


export type UnauthenticatedRegistrarApiSearchAvailableDomainsConsoleRequest = {
  domain: string
  tlds?: string[]
  strictSearch: boolean
}


export type UpdateDNSZoneNameserversRequest = {
  /**
   * DNS zone in which to update the DNS zone name servers.
   */
  dnsZone: string
  /**
   * New DNS zone name servers.
   */
  ns: Nameserver[]
}


export interface UpdateDNSZoneNameserversResponse {
  /**
   * DNS zone name servers returned.
   */
  ns: Nameserver[]
}


export type UpdateDNSZoneRecordsRequest = {
  /**
   * DNS zone in which to update the DNS zone records.
   */
  dnsZone: string
  /**
   * Changes made to the records.
   */
  changes: RecordChange[]
  /**
   * Specifies whether or not to return all the records.
   */
  returnAllRecords?: boolean
  /**
   * Disable the creation of the target zone if it does not exist. Target zone creation is disabled by default.
   */
  disallowNewZoneCreation: boolean
  /**
   * Use the provided serial (0) instead of the auto-increment serial.
   */
  serial?: number
}


export interface UpdateDNSZoneRecordsResponse {
  /**
   * DNS zone records returned.
   */
  records: DomainRecord[]
}


export type UpdateDNSZoneRequest = {
  /**
   * The full name of the DNS zone to modify. For a root zone (e.g., example.com), enter `example.com`. For a specific sub-zone (e.g., prod.example.com), enter `prod.example.com`.
   */
  dnsZone: string
  /**
   * Name of the new DNS zone to create.
   */
  newDnsZone?: string
  /**
   * Project ID in which to create the new DNS zone.
   */
  projectId?: string
}


