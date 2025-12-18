
import { isJSONObject, resolveOneOf, unmarshalArrayOfObject, unmarshalDate, unmarshalMapOfObject, unmarshalMoney, } from '@scaleway/sdk-client'
import type { DefaultValues } from '@scaleway/sdk-client'
import type {
  ContactExtensionFRAssociationInfo,
  ContactExtensionFRCodeAuthAfnicInfo,
  ContactExtensionFRDunsInfo,
  ContactExtensionFRIndividualInfo,
  ContactExtensionFRTrademarkInfo,
  ContactExtensionEU,
  ContactExtensionFR,
  ContactExtensionIT,
  ContactExtensionNL,
  ContactQuestion,
  Contact,
  DNSZone,
  Host,
  SSLCertificate,
  CheckContactsCompatibilityResponseContactCheckResult,
  CheckContactsCompatibilityResponse,
  ClearDNSZoneRecordsResponse,
  DeleteDNSZoneResponse,
  DeleteExternalDomainResponse,
  DeleteSSLCertificateResponse,
  DSRecordPublicKey,
  DSRecordDigest,
  DSRecord,
  TldOffer,
  DomainDNSSEC,
  DomainRegistrationStatusExternalDomain,
  DomainRegistrationStatusTransfer,
  Tld,
  Domain,
  GetDNSZoneTsigKeyResponse,
  DomainRecordGeoIPConfigMatch,
  DomainRecordViewConfigView,
  DomainRecordWeightedConfigWeightedIP,
  DomainRecordGeoIPConfig,
  DomainRecordHTTPServiceConfig,
  DomainRecordViewConfig,
  DomainRecordWeightedConfig,
  DomainRecord,
  RecordIdentifier,
  RecordChangeAdd,
  RecordChangeClear,
  RecordChangeDelete,
  RecordChangeSet,
  RecordChange,
  GetDNSZoneVersionDiffResponse,
  GetDomainAuthCodeResponse,
  ImportProviderDNSZoneResponse,
  ImportRawDNSZoneResponse,
  ContactRolesRoles,
  ContactRoles,
  ListContactsResponse,
  Nameserver,
  ListDNSZoneNameserversResponse,
  ListDNSZoneRecordsResponse,
  ListDNSZoneVersionRecordsResponse,
  DNSZoneVersion,
  ListDNSZoneVersionsResponse,
  ListDNSZonesResponse,
  ListDomainHostsResponse,
  DomainSummary,
  ListDomainsResponse,
  InboundTransfer,
  ListInboundTransfersResponse,
  RenewableDomain,
  ListRenewableDomainsResponse,
  ListSSLCertificatesResponse,
  Task,
  ListTasksResponse,
  ListTldsResponse,
  OrderResponse,
  RefreshDNSZoneResponse,
  RegisterExternalDomainResponse,
  RestoreDNSZoneVersionResponse,
  RetryInboundTransferResponse,
  AvailableDomain,
  SearchAvailableDomainsConsoleResponse,
  SearchAvailableDomainsResponse,
  UpdateDNSZoneNameserversResponse,
  UpdateDNSZoneRecordsResponse,
  CloneDNSZoneRequest,
  CreateDNSZoneRequest,
  CreateSSLCertificateRequest,
  ImportProviderDNSZoneRequestOnlineV1,
  ImportProviderDNSZoneRequest,
  ImportRawDNSZoneRequestTsigKey,
  ImportRawDNSZoneRequestAXFRSource,
  ImportRawDNSZoneRequestBindSource,
  ImportRawDNSZoneRequest,
  RefreshDNSZoneRequest,
  NewContact,
  RegistrarApiBuyDomainsRequest,
  RegistrarApiCheckContactsCompatibilityRequest,
  RegistrarApiCreateDomainHostRequest,
  RegistrarApiEnableDomainDNSSECRequest,
  RegistrarApiRegisterExternalDomainRequest,
  RegistrarApiRenewDomainsRequest,
  RegistrarApiRetryInboundTransferRequest,
  RegistrarApiTradeDomainRequest,
  TransferInDomainRequestTransferRequest,
  RegistrarApiTransferInDomainRequest,
  UpdateContactRequestQuestion,
  RegistrarApiUpdateContactRequest,
  RegistrarApiUpdateDomainHostRequest,
  RegistrarApiUpdateDomainRequest,
  UpdateDNSZoneNameserversRequest,
  UpdateDNSZoneRecordsRequest,
  UpdateDNSZoneRequest,
} from './types.gen.js'

const unmarshalContactExtensionFRAssociationInfo = (data: unknown): ContactExtensionFRAssociationInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFRAssociationInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    publicationJo: unmarshalDate(data.publication_jo),
    publicationJoPage: data.publication_jo_page,
  } as ContactExtensionFRAssociationInfo
}

const unmarshalContactExtensionFRCodeAuthAfnicInfo = (data: unknown): ContactExtensionFRCodeAuthAfnicInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFRCodeAuthAfnicInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    codeAuthAfnic: data.code_auth_afnic,
  } as ContactExtensionFRCodeAuthAfnicInfo
}

const unmarshalContactExtensionFRDunsInfo = (data: unknown): ContactExtensionFRDunsInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFRDunsInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    dunsId: data.duns_id,
    localId: data.local_id,
  } as ContactExtensionFRDunsInfo
}

const unmarshalContactExtensionFRIndividualInfo = (data: unknown): ContactExtensionFRIndividualInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFRIndividualInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    whoisOptIn: data.whois_opt_in,
  } as ContactExtensionFRIndividualInfo
}

const unmarshalContactExtensionFRTrademarkInfo = (data: unknown): ContactExtensionFRTrademarkInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFRTrademarkInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    trademarkInpi: data.trademark_inpi,
  } as ContactExtensionFRTrademarkInfo
}

const unmarshalContactExtensionEU = (data: unknown): ContactExtensionEU => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionEU' failed as data isn't a dictionary.`,
    )
  }

  return {
    europeanCitizenship: data.european_citizenship,
  } as ContactExtensionEU
}

const unmarshalContactExtensionFR = (data: unknown): ContactExtensionFR => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFR' failed as data isn't a dictionary.`,
    )
  }

  return {
    associationInfo: data.association_info ? unmarshalContactExtensionFRAssociationInfo(data.association_info) : undefined,
    codeAuthAfnicInfo: data.code_auth_afnic_info ? unmarshalContactExtensionFRCodeAuthAfnicInfo(data.code_auth_afnic_info) : undefined,
    dunsInfo: data.duns_info ? unmarshalContactExtensionFRDunsInfo(data.duns_info) : undefined,
    individualInfo: data.individual_info ? unmarshalContactExtensionFRIndividualInfo(data.individual_info) : undefined,
    mode: data.mode,
    trademarkInfo: data.trademark_info ? unmarshalContactExtensionFRTrademarkInfo(data.trademark_info) : undefined,
  } as ContactExtensionFR
}

const unmarshalContactExtensionIT = (data: unknown): ContactExtensionIT => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionIT' failed as data isn't a dictionary.`,
    )
  }

  return {
    europeanCitizenship: data.european_citizenship,
    pin: data.pin,
    taxCode: data.tax_code,
  } as ContactExtensionIT
}

const unmarshalContactExtensionNL = (data: unknown): ContactExtensionNL => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionNL' failed as data isn't a dictionary.`,
    )
  }

  return {
    legalForm: data.legal_form,
    legalFormRegistrationNumber: data.legal_form_registration_number,
  } as ContactExtensionNL
}

const unmarshalContactQuestion = (data: unknown): ContactQuestion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactQuestion' failed as data isn't a dictionary.`,
    )
  }

  return {
    answer: data.answer,
    question: data.question,
  } as ContactQuestion
}

export const unmarshalContact = (data: unknown): Contact => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Contact' failed as data isn't a dictionary.`,
    )
  }

  return {
    addressLine1: data.address_line_1,
    addressLine2: data.address_line_2,
    city: data.city,
    companyIdentificationCode: data.company_identification_code,
    companyName: data.company_name,
    country: data.country,
    email: data.email,
    emailAlt: data.email_alt,
    emailStatus: data.email_status,
    extensionEu: data.extension_eu ? unmarshalContactExtensionEU(data.extension_eu) : undefined,
    extensionFr: data.extension_fr ? unmarshalContactExtensionFR(data.extension_fr) : undefined,
    extensionIt: data.extension_it ? unmarshalContactExtensionIT(data.extension_it) : undefined,
    extensionNl: data.extension_nl ? unmarshalContactExtensionNL(data.extension_nl) : undefined,
    faxNumber: data.fax_number,
    firstname: data.firstname,
    id: data.id,
    lang: data.lang,
    lastname: data.lastname,
    legalForm: data.legal_form,
    phoneNumber: data.phone_number,
    questions: data.questions ? unmarshalArrayOfObject(data.questions, unmarshalContactQuestion) : undefined,
    resale: data.resale,
    state: data.state,
    status: data.status,
    vatIdentificationCode: data.vat_identification_code,
    whoisOptIn: data.whois_opt_in,
    zip: data.zip,
  } as Contact
}

export const unmarshalDNSZone = (data: unknown): DNSZone => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DNSZone' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    linkedProducts: data.linked_products,
    message: data.message,
    ns: data.ns,
    nsDefault: data.ns_default,
    nsMaster: data.ns_master,
    projectId: data.project_id,
    status: data.status,
    subdomain: data.subdomain,
    updatedAt: unmarshalDate(data.updated_at),
  } as DNSZone
}

export const unmarshalHost = (data: unknown): Host => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Host' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    ips: data.ips,
    name: data.name,
    status: data.status,
  } as Host
}

export const unmarshalSSLCertificate = (data: unknown): SSLCertificate => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SSLCertificate' failed as data isn't a dictionary.`,
    )
  }

  return {
    alternativeDnsZones: data.alternative_dns_zones,
    certificateChain: data.certificate_chain,
    createdAt: unmarshalDate(data.created_at),
    dnsZone: data.dns_zone,
    expiredAt: unmarshalDate(data.expired_at),
    privateKey: data.private_key,
    status: data.status,
  } as SSLCertificate
}

const unmarshalCheckContactsCompatibilityResponseContactCheckResult = (data: unknown): CheckContactsCompatibilityResponseContactCheckResult => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckContactsCompatibilityResponseContactCheckResult' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatible: data.compatible,
    errorMessage: data.error_message,
  } as CheckContactsCompatibilityResponseContactCheckResult
}

export const unmarshalCheckContactsCompatibilityResponse = (data: unknown): CheckContactsCompatibilityResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckContactsCompatibilityResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    administrativeCheckResult: data.administrative_check_result ? unmarshalCheckContactsCompatibilityResponseContactCheckResult(data.administrative_check_result) : undefined,
    compatible: data.compatible,
    ownerCheckResult: data.owner_check_result ? unmarshalCheckContactsCompatibilityResponseContactCheckResult(data.owner_check_result) : undefined,
    technicalCheckResult: data.technical_check_result ? unmarshalCheckContactsCompatibilityResponseContactCheckResult(data.technical_check_result) : undefined,
  } as CheckContactsCompatibilityResponse
}

export const unmarshalClearDNSZoneRecordsResponse = (data: unknown): ClearDNSZoneRecordsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClearDNSZoneRecordsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as ClearDNSZoneRecordsResponse
}

export const unmarshalDeleteDNSZoneResponse = (data: unknown): DeleteDNSZoneResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteDNSZoneResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as DeleteDNSZoneResponse
}

export const unmarshalDeleteExternalDomainResponse = (data: unknown): DeleteExternalDomainResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteExternalDomainResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as DeleteExternalDomainResponse
}

export const unmarshalDeleteSSLCertificateResponse = (data: unknown): DeleteSSLCertificateResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteSSLCertificateResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as DeleteSSLCertificateResponse
}

const unmarshalDSRecordPublicKey = (data: unknown): DSRecordPublicKey => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DSRecordPublicKey' failed as data isn't a dictionary.`,
    )
  }

  return {
    key: data.key,
  } as DSRecordPublicKey
}

const unmarshalDSRecordDigest = (data: unknown): DSRecordDigest => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DSRecordDigest' failed as data isn't a dictionary.`,
    )
  }

  return {
    digest: data.digest,
    publicKey: data.public_key ? unmarshalDSRecordPublicKey(data.public_key) : undefined,
    type: data.type,
  } as DSRecordDigest
}

export const unmarshalDSRecord = (data: unknown): DSRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DSRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    algorithm: data.algorithm,
    digest: data.digest ? unmarshalDSRecordDigest(data.digest) : undefined,
    keyId: data.key_id,
    publicKey: data.public_key ? unmarshalDSRecordPublicKey(data.public_key) : undefined,
  } as DSRecord
}

const unmarshalTldOffer = (data: unknown): TldOffer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'TldOffer' failed as data isn't a dictionary.`,
    )
  }

  return {
    action: data.action,
    operationPath: data.operation_path,
    price: data.price ? unmarshalMoney(data.price) : undefined,
  } as TldOffer
}

const unmarshalDomainDNSSEC = (data: unknown): DomainDNSSEC => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainDNSSEC' failed as data isn't a dictionary.`,
    )
  }

  return {
    dsRecords: unmarshalArrayOfObject(data.ds_records, unmarshalDSRecord),
    status: data.status,
  } as DomainDNSSEC
}

const unmarshalDomainRegistrationStatusExternalDomain = (data: unknown): DomainRegistrationStatusExternalDomain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRegistrationStatusExternalDomain' failed as data isn't a dictionary.`,
    )
  }

  return {
    validationToken: data.validation_token,
  } as DomainRegistrationStatusExternalDomain
}

const unmarshalDomainRegistrationStatusTransfer = (data: unknown): DomainRegistrationStatusTransfer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRegistrationStatusTransfer' failed as data isn't a dictionary.`,
    )
  }

  return {
    status: data.status,
    voteCurrentOwner: data.vote_current_owner,
    voteNewOwner: data.vote_new_owner,
  } as DomainRegistrationStatusTransfer
}

const unmarshalTld = (data: unknown): Tld => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Tld' failed as data isn't a dictionary.`,
    )
  }

  return {
    dnssecSupport: data.dnssec_support,
    durationInYearsMax: data.duration_in_years_max,
    durationInYearsMin: data.duration_in_years_min,
    idnSupport: data.idn_support,
    name: data.name,
    offers: unmarshalMapOfObject(data.offers, unmarshalTldOffer),
    specifications: data.specifications,
  } as Tld
}

export const unmarshalDomain = (data: unknown): Domain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    administrativeContact: data.administrative_contact ? unmarshalContact(data.administrative_contact) : undefined,
    autoRenewStatus: data.auto_renew_status,
    dnsZones: unmarshalArrayOfObject(data.dns_zones, unmarshalDNSZone),
    dnssec: data.dnssec ? unmarshalDomainDNSSEC(data.dnssec) : undefined,
    domain: data.domain,
    eppCode: data.epp_code,
    expiredAt: unmarshalDate(data.expired_at),
    externalDomainRegistrationStatus: data.external_domain_registration_status ? unmarshalDomainRegistrationStatusExternalDomain(data.external_domain_registration_status) : undefined,
    isExternal: data.is_external,
    linkedProducts: data.linked_products,
    organizationId: data.organization_id,
    ownerContact: data.owner_contact ? unmarshalContact(data.owner_contact) : undefined,
    pendingTrade: data.pending_trade,
    projectId: data.project_id,
    registrar: data.registrar,
    status: data.status,
    technicalContact: data.technical_contact ? unmarshalContact(data.technical_contact) : undefined,
    tld: data.tld ? unmarshalTld(data.tld) : undefined,
    transferRegistrationStatus: data.transfer_registration_status ? unmarshalDomainRegistrationStatusTransfer(data.transfer_registration_status) : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as Domain
}

export const unmarshalGetDNSZoneTsigKeyResponse = (data: unknown): GetDNSZoneTsigKeyResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDNSZoneTsigKeyResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    algorithm: data.algorithm,
    key: data.key,
    name: data.name,
  } as GetDNSZoneTsigKeyResponse
}

const unmarshalDomainRecordGeoIPConfigMatch = (data: unknown): DomainRecordGeoIPConfigMatch => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordGeoIPConfigMatch' failed as data isn't a dictionary.`,
    )
  }

  return {
    continents: data.continents,
    countries: data.countries,
    data: data.data,
  } as DomainRecordGeoIPConfigMatch
}

const unmarshalDomainRecordViewConfigView = (data: unknown): DomainRecordViewConfigView => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordViewConfigView' failed as data isn't a dictionary.`,
    )
  }

  return {
    data: data.data,
    subnet: data.subnet,
  } as DomainRecordViewConfigView
}

const unmarshalDomainRecordWeightedConfigWeightedIP = (data: unknown): DomainRecordWeightedConfigWeightedIP => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordWeightedConfigWeightedIP' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: data.ip,
    weight: data.weight,
  } as DomainRecordWeightedConfigWeightedIP
}

const unmarshalDomainRecordGeoIPConfig = (data: unknown): DomainRecordGeoIPConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordGeoIPConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    default: data.default,
    matches: unmarshalArrayOfObject(data.matches, unmarshalDomainRecordGeoIPConfigMatch),
  } as DomainRecordGeoIPConfig
}

const unmarshalDomainRecordHTTPServiceConfig = (data: unknown): DomainRecordHTTPServiceConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordHTTPServiceConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    ips: data.ips,
    mustContain: data.must_contain,
    strategy: data.strategy,
    url: data.url,
    userAgent: data.user_agent,
  } as DomainRecordHTTPServiceConfig
}

const unmarshalDomainRecordViewConfig = (data: unknown): DomainRecordViewConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordViewConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    views: unmarshalArrayOfObject(data.views, unmarshalDomainRecordViewConfigView),
  } as DomainRecordViewConfig
}

const unmarshalDomainRecordWeightedConfig = (data: unknown): DomainRecordWeightedConfig => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordWeightedConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    weightedIps: unmarshalArrayOfObject(data.weighted_ips, unmarshalDomainRecordWeightedConfigWeightedIP),
  } as DomainRecordWeightedConfig
}

const unmarshalDomainRecord = (data: unknown): DomainRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    comment: data.comment,
    data: data.data,
    geoIpConfig: data.geo_ip_config ? unmarshalDomainRecordGeoIPConfig(data.geo_ip_config) : undefined,
    httpServiceConfig: data.http_service_config ? unmarshalDomainRecordHTTPServiceConfig(data.http_service_config) : undefined,
    id: data.id,
    name: data.name,
    priority: data.priority,
    ttl: data.ttl,
    type: data.type,
    viewConfig: data.view_config ? unmarshalDomainRecordViewConfig(data.view_config) : undefined,
    weightedConfig: data.weighted_config ? unmarshalDomainRecordWeightedConfig(data.weighted_config) : undefined,
  } as DomainRecord
}

const unmarshalRecordIdentifier = (data: unknown): RecordIdentifier => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordIdentifier' failed as data isn't a dictionary.`,
    )
  }

  return {
    data: data.data,
    name: data.name,
    ttl: data.ttl,
    type: data.type,
  } as RecordIdentifier
}

const unmarshalRecordChangeAdd = (data: unknown): RecordChangeAdd => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChangeAdd' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as RecordChangeAdd
}

const unmarshalRecordChangeClear = (data: unknown): RecordChangeClear => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChangeClear' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as RecordChangeClear
}

const unmarshalRecordChangeDelete = (data: unknown): RecordChangeDelete => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChangeDelete' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    idFields: data.id_fields ? unmarshalRecordIdentifier(data.id_fields) : undefined,
  } as RecordChangeDelete
}

const unmarshalRecordChangeSet = (data: unknown): RecordChangeSet => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChangeSet' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    idFields: data.id_fields ? unmarshalRecordIdentifier(data.id_fields) : undefined,
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as RecordChangeSet
}

const unmarshalRecordChange = (data: unknown): RecordChange => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChange' failed as data isn't a dictionary.`,
    )
  }

  return {
    add: data.add ? unmarshalRecordChangeAdd(data.add) : undefined,
    clear: data.clear ? unmarshalRecordChangeClear(data.clear) : undefined,
    delete: data.delete ? unmarshalRecordChangeDelete(data.delete) : undefined,
    set: data.set ? unmarshalRecordChangeSet(data.set) : undefined,
  } as RecordChange
}

export const unmarshalGetDNSZoneVersionDiffResponse = (data: unknown): GetDNSZoneVersionDiffResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDNSZoneVersionDiffResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    changes: unmarshalArrayOfObject(data.changes, unmarshalRecordChange),
  } as GetDNSZoneVersionDiffResponse
}

export const unmarshalGetDomainAuthCodeResponse = (data: unknown): GetDomainAuthCodeResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDomainAuthCodeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    authCode: data.auth_code,
  } as GetDomainAuthCodeResponse
}

export const unmarshalImportProviderDNSZoneResponse = (data: unknown): ImportProviderDNSZoneResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ImportProviderDNSZoneResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as ImportProviderDNSZoneResponse
}

export const unmarshalImportRawDNSZoneResponse = (data: unknown): ImportRawDNSZoneResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ImportRawDNSZoneResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as ImportRawDNSZoneResponse
}

const unmarshalContactRolesRoles = (data: unknown): ContactRolesRoles => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactRolesRoles' failed as data isn't a dictionary.`,
    )
  }

  return {
    isAdministrative: data.is_administrative,
    isOwner: data.is_owner,
    isTechnical: data.is_technical,
  } as ContactRolesRoles
}

const unmarshalContactRoles = (data: unknown): ContactRoles => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactRoles' failed as data isn't a dictionary.`,
    )
  }

  return {
    contact: data.contact ? unmarshalContact(data.contact) : undefined,
    roles: unmarshalMapOfObject(data.roles, unmarshalContactRolesRoles),
  } as ContactRoles
}

export const unmarshalListContactsResponse = (data: unknown): ListContactsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListContactsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    contacts: unmarshalArrayOfObject(data.contacts, unmarshalContactRoles),
    totalCount: data.total_count,
  } as ListContactsResponse
}

const unmarshalNameserver = (data: unknown): Nameserver => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Nameserver' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: data.ip,
    name: data.name,
  } as Nameserver
}

export const unmarshalListDNSZoneNameserversResponse = (data: unknown): ListDNSZoneNameserversResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDNSZoneNameserversResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ns: unmarshalArrayOfObject(data.ns, unmarshalNameserver),
  } as ListDNSZoneNameserversResponse
}

export const unmarshalListDNSZoneRecordsResponse = (data: unknown): ListDNSZoneRecordsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDNSZoneRecordsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
    totalCount: data.total_count,
  } as ListDNSZoneRecordsResponse
}

export const unmarshalListDNSZoneVersionRecordsResponse = (data: unknown): ListDNSZoneVersionRecordsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDNSZoneVersionRecordsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
    totalCount: data.total_count,
  } as ListDNSZoneVersionRecordsResponse
}

const unmarshalDNSZoneVersion = (data: unknown): DNSZoneVersion => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DNSZoneVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
  } as DNSZoneVersion
}

export const unmarshalListDNSZoneVersionsResponse = (data: unknown): ListDNSZoneVersionsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDNSZoneVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    versions: unmarshalArrayOfObject(data.versions, unmarshalDNSZoneVersion),
  } as ListDNSZoneVersionsResponse
}

export const unmarshalListDNSZonesResponse = (data: unknown): ListDNSZonesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDNSZonesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dnsZones: unmarshalArrayOfObject(data.dns_zones, unmarshalDNSZone),
    totalCount: data.total_count,
  } as ListDNSZonesResponse
}

export const unmarshalListDomainHostsResponse = (data: unknown): ListDomainHostsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDomainHostsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    hosts: unmarshalArrayOfObject(data.hosts, unmarshalHost),
    totalCount: data.total_count,
  } as ListDomainHostsResponse
}

const unmarshalDomainSummary = (data: unknown): DomainSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoRenewStatus: data.auto_renew_status,
    createdAt: unmarshalDate(data.created_at),
    dnssecStatus: data.dnssec_status,
    domain: data.domain,
    eppCode: data.epp_code,
    expiredAt: unmarshalDate(data.expired_at),
    externalDomainRegistrationStatus: data.external_domain_registration_status ? unmarshalDomainRegistrationStatusExternalDomain(data.external_domain_registration_status) : undefined,
    isExternal: data.is_external,
    organizationId: data.organization_id,
    pendingTrade: data.pending_trade,
    projectId: data.project_id,
    registrar: data.registrar,
    status: data.status,
    transferRegistrationStatus: data.transfer_registration_status ? unmarshalDomainRegistrationStatusTransfer(data.transfer_registration_status) : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as DomainSummary
}

export const unmarshalListDomainsResponse = (data: unknown): ListDomainsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    domains: unmarshalArrayOfObject(data.domains, unmarshalDomainSummary),
    totalCount: data.total_count,
  } as ListDomainsResponse
}

const unmarshalInboundTransfer = (data: unknown): InboundTransfer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'InboundTransfer' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    domain: data.domain,
    id: data.id,
    lastUpdatedAt: unmarshalDate(data.last_updated_at),
    message: data.message,
    projectId: data.project_id,
    status: data.status,
    taskId: data.task_id,
  } as InboundTransfer
}

export const unmarshalListInboundTransfersResponse = (data: unknown): ListInboundTransfersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListInboundTransfersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    inboundTransfers: unmarshalArrayOfObject(data.inbound_transfers, unmarshalInboundTransfer),
    totalCount: data.total_count,
  } as ListInboundTransfersResponse
}

const unmarshalRenewableDomain = (data: unknown): RenewableDomain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RenewableDomain' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    estimatedDeleteAt: unmarshalDate(data.estimated_delete_at),
    expiredAt: unmarshalDate(data.expired_at),
    limitRedemptionAt: unmarshalDate(data.limit_redemption_at),
    limitRenewAt: unmarshalDate(data.limit_renew_at),
    organizationId: data.organization_id,
    projectId: data.project_id,
    renewableDurationInYears: data.renewable_duration_in_years,
    status: data.status,
    tld: data.tld ? unmarshalTld(data.tld) : undefined,
  } as RenewableDomain
}

export const unmarshalListRenewableDomainsResponse = (data: unknown): ListRenewableDomainsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListRenewableDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    domains: unmarshalArrayOfObject(data.domains, unmarshalRenewableDomain),
    totalCount: data.total_count,
  } as ListRenewableDomainsResponse
}

export const unmarshalListSSLCertificatesResponse = (data: unknown): ListSSLCertificatesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSSLCertificatesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    certificates: unmarshalArrayOfObject(data.certificates, unmarshalSSLCertificate),
    totalCount: data.total_count,
  } as ListSSLCertificatesResponse
}

export const unmarshalTask = (data: unknown): Task => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Task' failed as data isn't a dictionary.`,
    )
  }

  return {
    contactIdentifier: data.contact_identifier,
    domain: data.domain,
    id: data.id,
    message: data.message,
    organizationId: data.organization_id,
    projectId: data.project_id,
    startedAt: unmarshalDate(data.started_at),
    status: data.status,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as Task
}

export const unmarshalListTasksResponse = (data: unknown): ListTasksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTasksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    tasks: unmarshalArrayOfObject(data.tasks, unmarshalTask),
    totalCount: data.total_count,
  } as ListTasksResponse
}

export const unmarshalListTldsResponse = (data: unknown): ListTldsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListTldsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    tlds: unmarshalArrayOfObject(data.tlds, unmarshalTld),
    totalCount: data.total_count,
  } as ListTldsResponse
}

export const unmarshalOrderResponse = (data: unknown): OrderResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OrderResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    domains: data.domains,
    organizationId: data.organization_id,
    projectId: data.project_id,
    taskId: data.task_id,
  } as OrderResponse
}

export const unmarshalRefreshDNSZoneResponse = (data: unknown): RefreshDNSZoneResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RefreshDNSZoneResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dnsZones: unmarshalArrayOfObject(data.dns_zones, unmarshalDNSZone),
  } as RefreshDNSZoneResponse
}

export const unmarshalRegisterExternalDomainResponse = (data: unknown): RegisterExternalDomainResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RegisterExternalDomainResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    domain: data.domain,
    organizationId: data.organization_id,
    projectId: data.project_id,
    validationToken: data.validation_token,
  } as RegisterExternalDomainResponse
}

export const unmarshalRestoreDNSZoneVersionResponse = (data: unknown): RestoreDNSZoneVersionResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RestoreDNSZoneVersionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as RestoreDNSZoneVersionResponse
}

export const unmarshalRetryInboundTransferResponse = (data: unknown): RetryInboundTransferResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RetryInboundTransferResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
  } as RetryInboundTransferResponse
}

const unmarshalAvailableDomain = (data: unknown): AvailableDomain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AvailableDomain' failed as data isn't a dictionary.`,
    )
  }

  return {
    available: data.available,
    domain: data.domain,
    tld: data.tld ? unmarshalTld(data.tld) : undefined,
  } as AvailableDomain
}

export const unmarshalSearchAvailableDomainsConsoleResponse = (data: unknown): SearchAvailableDomainsConsoleResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SearchAvailableDomainsConsoleResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableDomains: unmarshalArrayOfObject(data.available_domains, unmarshalAvailableDomain),
    exactMatchDomain: data.exact_match_domain ? unmarshalAvailableDomain(data.exact_match_domain) : undefined,
  } as SearchAvailableDomainsConsoleResponse
}

export const unmarshalSearchAvailableDomainsResponse = (data: unknown): SearchAvailableDomainsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SearchAvailableDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableDomains: unmarshalArrayOfObject(data.available_domains, unmarshalAvailableDomain),
  } as SearchAvailableDomainsResponse
}

export const unmarshalUpdateDNSZoneNameserversResponse = (data: unknown): UpdateDNSZoneNameserversResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateDNSZoneNameserversResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ns: unmarshalArrayOfObject(data.ns, unmarshalNameserver),
  } as UpdateDNSZoneNameserversResponse
}

export const unmarshalUpdateDNSZoneRecordsResponse = (data: unknown): UpdateDNSZoneRecordsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateDNSZoneRecordsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as UpdateDNSZoneRecordsResponse
}

export const marshalCloneDNSZoneRequest = (
  request: CloneDNSZoneRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  dest_dns_zone: request.destDnsZone,
  overwrite: request.overwrite,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalCreateDNSZoneRequest = (
  request: CreateDNSZoneRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  project_id: request.projectId ?? defaults.defaultProjectId,
  subdomain: request.subdomain,
})

export const marshalCreateSSLCertificateRequest = (
  request: CreateSSLCertificateRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  alternative_dns_zones: request.alternativeDnsZones,
  dns_zone: request.dnsZone,
})

const marshalImportProviderDNSZoneRequestOnlineV1 = (
  request: ImportProviderDNSZoneRequestOnlineV1,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  token: request.token,
})

export const marshalImportProviderDNSZoneRequest = (
  request: ImportProviderDNSZoneRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'online_v1',
      value: (request.onlineV1 !== undefined) ? marshalImportProviderDNSZoneRequestOnlineV1(request.onlineV1, defaults)
      : undefined,
    },
  ]),
})

const marshalImportRawDNSZoneRequestTsigKey = (
  request: ImportRawDNSZoneRequestTsigKey,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  algorithm: request.algorithm,
  key: request.key,
  name: request.name,
})

const marshalImportRawDNSZoneRequestAXFRSource = (
  request: ImportRawDNSZoneRequestAXFRSource,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name_server: request.nameServer,
  tsig_key: ((request.tsigKey !== undefined) ?  marshalImportRawDNSZoneRequestTsigKey(request.tsigKey, defaults): undefined),
})

const marshalImportRawDNSZoneRequestBindSource = (
  request: ImportRawDNSZoneRequestBindSource,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
})

export const marshalImportRawDNSZoneRequest = (
  request: ImportRawDNSZoneRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
  format: request.format,
  project_id: request.projectId ?? defaults.defaultProjectId,  
  ...resolveOneOf([
    {param: 'bind_source',
      value: (request.bindSource !== undefined) ? marshalImportRawDNSZoneRequestBindSource(request.bindSource, defaults)
      : undefined,
    },
    {param: 'axfr_source',
      value: (request.axfrSource !== undefined) ? marshalImportRawDNSZoneRequestAXFRSource(request.axfrSource, defaults)
      : undefined,
    },
  ]),
})

export const marshalRefreshDNSZoneRequest = (
  request: RefreshDNSZoneRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  recreate_dns_zone: request.recreateDnsZone,
  recreate_sub_dns_zone: request.recreateSubDnsZone,
})

const marshalContactExtensionFRAssociationInfo = (
  request: ContactExtensionFRAssociationInfo,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  publication_jo: request.publicationJo,
  publication_jo_page: request.publicationJoPage,
})

const marshalContactExtensionFRCodeAuthAfnicInfo = (
  request: ContactExtensionFRCodeAuthAfnicInfo,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  code_auth_afnic: request.codeAuthAfnic,
})

const marshalContactExtensionFRDunsInfo = (
  request: ContactExtensionFRDunsInfo,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  duns_id: request.dunsId,
  local_id: request.localId,
})

const marshalContactExtensionFRIndividualInfo = (
  request: ContactExtensionFRIndividualInfo,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  whois_opt_in: request.whoisOptIn,
})

const marshalContactExtensionFRTrademarkInfo = (
  request: ContactExtensionFRTrademarkInfo,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  trademark_inpi: request.trademarkInpi,
})

const marshalContactExtensionEU = (
  request: ContactExtensionEU,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  european_citizenship: request.europeanCitizenship,
})

const marshalContactExtensionFR = (
  request: ContactExtensionFR,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mode: request.mode,  
  ...resolveOneOf([
    {param: 'individual_info',
      value: (request.individualInfo !== undefined) ? marshalContactExtensionFRIndividualInfo(request.individualInfo, defaults)
      : undefined,
    },
    {param: 'duns_info',
      value: (request.dunsInfo !== undefined) ? marshalContactExtensionFRDunsInfo(request.dunsInfo, defaults)
      : undefined,
    },
    {param: 'association_info',
      value: (request.associationInfo !== undefined) ? marshalContactExtensionFRAssociationInfo(request.associationInfo, defaults)
      : undefined,
    },
    {param: 'trademark_info',
      value: (request.trademarkInfo !== undefined) ? marshalContactExtensionFRTrademarkInfo(request.trademarkInfo, defaults)
      : undefined,
    },
    {param: 'code_auth_afnic_info',
      value: (request.codeAuthAfnicInfo !== undefined) ? marshalContactExtensionFRCodeAuthAfnicInfo(request.codeAuthAfnicInfo, defaults)
      : undefined,
    },
  ]),
})

const marshalContactExtensionIT = (
  request: ContactExtensionIT,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  european_citizenship: request.europeanCitizenship,
  pin: request.pin,
  tax_code: request.taxCode,
})

const marshalContactExtensionNL = (
  request: ContactExtensionNL,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  legal_form: request.legalForm,
  legal_form_registration_number: request.legalFormRegistrationNumber,
})

const marshalContactQuestion = (
  request: ContactQuestion,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  answer: request.answer,
  question: request.question,
})

const marshalNewContact = (
  request: NewContact,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address_line_1: request.addressLine1,
  address_line_2: request.addressLine2,
  city: request.city,
  company_identification_code: request.companyIdentificationCode,
  company_name: request.companyName,
  country: request.country,
  email: request.email,
  email_alt: request.emailAlt,
  extension_eu: ((request.extensionEu !== undefined) ?  marshalContactExtensionEU(request.extensionEu, defaults): undefined),
  extension_fr: ((request.extensionFr !== undefined) ?  marshalContactExtensionFR(request.extensionFr, defaults): undefined),
  extension_it: ((request.extensionIt !== undefined) ?  marshalContactExtensionIT(request.extensionIt, defaults): undefined),
  extension_nl: ((request.extensionNl !== undefined) ?  marshalContactExtensionNL(request.extensionNl, defaults): undefined),
  fax_number: request.faxNumber,
  firstname: request.firstname,
  lang: request.lang,
  lastname: request.lastname,
  legal_form: request.legalForm,
  phone_number: request.phoneNumber,
  questions: ((request.questions !== undefined) ?  request.questions.map(elt => marshalContactQuestion(elt, defaults)): undefined),
  resale: request.resale,
  state: request.state,
  vat_identification_code: request.vatIdentificationCode,
  whois_opt_in: request.whoisOptIn,
  zip: request.zip,
})

export const marshalRegistrarApiBuyDomainsRequest = (
  request: RegistrarApiBuyDomainsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domains: request.domains,
  duration_in_years: request.durationInYears,
  project_id: request.projectId ?? defaults.defaultProjectId,  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'owner_contact_id',
      value: request.ownerContactId,
    },
    {param: 'owner_contact',
      value: (request.ownerContact !== undefined) ? marshalNewContact(request.ownerContact, defaults)
      : undefined,
    },
  ]),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'administrative_contact_id',
      value: request.administrativeContactId,
    },
    {param: 'administrative_contact',
      value: (request.administrativeContact !== undefined) ? marshalNewContact(request.administrativeContact, defaults)
      : undefined,
    },
  ]),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'technical_contact_id',
      value: request.technicalContactId,
    },
    {param: 'technical_contact',
      value: (request.technicalContact !== undefined) ? marshalNewContact(request.technicalContact, defaults)
      : undefined,
    },
  ]),
})

export const marshalRegistrarApiCheckContactsCompatibilityRequest = (
  request: RegistrarApiCheckContactsCompatibilityRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domains: request.domains,
  tlds: request.tlds,  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'owner_contact_id',
      value: request.ownerContactId,
    },
    {param: 'owner_contact',
      value: (request.ownerContact !== undefined) ? marshalNewContact(request.ownerContact, defaults)
      : undefined,
    },
  ]),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'administrative_contact_id',
      value: request.administrativeContactId,
    },
    {param: 'administrative_contact',
      value: (request.administrativeContact !== undefined) ? marshalNewContact(request.administrativeContact, defaults)
      : undefined,
    },
  ]),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'technical_contact_id',
      value: request.technicalContactId,
    },
    {param: 'technical_contact',
      value: (request.technicalContact !== undefined) ? marshalNewContact(request.technicalContact, defaults)
      : undefined,
    },
  ]),
})

export const marshalRegistrarApiCreateDomainHostRequest = (
  request: RegistrarApiCreateDomainHostRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ips: request.ips,
  name: request.name,
})

const marshalDSRecordPublicKey = (
  request: DSRecordPublicKey,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  key: request.key,
})

const marshalDSRecordDigest = (
  request: DSRecordDigest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  digest: request.digest,
  public_key: ((request.publicKey !== undefined) ?  marshalDSRecordPublicKey(request.publicKey, defaults): undefined),
  type: request.type,
})

export const marshalDSRecord = (
  request: DSRecord,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  algorithm: request.algorithm,
  key_id: request.keyId,  
  ...resolveOneOf([
    {param: 'digest',
      value: (request.digest !== undefined) ? marshalDSRecordDigest(request.digest, defaults)
      : undefined,
    },
    {param: 'public_key',
      value: (request.publicKey !== undefined) ? marshalDSRecordPublicKey(request.publicKey, defaults)
      : undefined,
    },
  ]),
})

export const marshalRegistrarApiEnableDomainDNSSECRequest = (
  request: RegistrarApiEnableDomainDNSSECRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ds_record: ((request.dsRecord !== undefined) ?  marshalDSRecord(request.dsRecord, defaults): undefined),
})

export const marshalRegistrarApiRegisterExternalDomainRequest = (
  request: RegistrarApiRegisterExternalDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRegistrarApiRenewDomainsRequest = (
  request: RegistrarApiRenewDomainsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domains: request.domains,
  duration_in_years: request.durationInYears,
  force_late_renewal: request.forceLateRenewal,
})

export const marshalRegistrarApiRetryInboundTransferRequest = (
  request: RegistrarApiRetryInboundTransferRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  auth_code: request.authCode,
  domain: request.domain,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalRegistrarApiTradeDomainRequest = (
  request: RegistrarApiTradeDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'new_owner_contact_id',
      value: request.newOwnerContactId,
    },
    {param: 'new_owner_contact',
      value: (request.newOwnerContact !== undefined) ? marshalNewContact(request.newOwnerContact, defaults)
      : undefined,
    },
  ]),
})

const marshalTransferInDomainRequestTransferRequest = (
  request: TransferInDomainRequestTransferRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  auth_code: request.authCode,
  domain: request.domain,
})

export const marshalRegistrarApiTransferInDomainRequest = (
  request: RegistrarApiTransferInDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domains:  request.domains.map(elt => marshalTransferInDomainRequestTransferRequest(elt, defaults)),
  project_id: request.projectId ?? defaults.defaultProjectId,  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'owner_contact_id',
      value: request.ownerContactId,
    },
    {param: 'owner_contact',
      value: (request.ownerContact !== undefined) ? marshalNewContact(request.ownerContact, defaults)
      : undefined,
    },
  ]),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'administrative_contact_id',
      value: request.administrativeContactId,
    },
    {param: 'administrative_contact',
      value: (request.administrativeContact !== undefined) ? marshalNewContact(request.administrativeContact, defaults)
      : undefined,
    },
  ]),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'technical_contact_id',
      value: request.technicalContactId,
    },
    {param: 'technical_contact',
      value: (request.technicalContact !== undefined) ? marshalNewContact(request.technicalContact, defaults)
      : undefined,
    },
  ]),
})

const marshalUpdateContactRequestQuestion = (
  request: UpdateContactRequestQuestion,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  answer: request.answer,
  question: request.question,
})

export const marshalRegistrarApiUpdateContactRequest = (
  request: RegistrarApiUpdateContactRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  address_line_1: request.addressLine1,
  address_line_2: request.addressLine2,
  city: request.city,
  company_identification_code: request.companyIdentificationCode,
  country: request.country,
  email: request.email,
  email_alt: request.emailAlt,
  extension_eu: ((request.extensionEu !== undefined) ?  marshalContactExtensionEU(request.extensionEu, defaults): undefined),
  extension_fr: ((request.extensionFr !== undefined) ?  marshalContactExtensionFR(request.extensionFr, defaults): undefined),
  extension_it: ((request.extensionIt !== undefined) ?  marshalContactExtensionIT(request.extensionIt, defaults): undefined),
  extension_nl: ((request.extensionNl !== undefined) ?  marshalContactExtensionNL(request.extensionNl, defaults): undefined),
  fax_number: request.faxNumber,
  lang: request.lang,
  phone_number: request.phoneNumber,
  questions: ((request.questions !== undefined) ?  request.questions.map(elt => marshalUpdateContactRequestQuestion(elt, defaults)): undefined),
  resale: request.resale,
  state: request.state,
  vat_identification_code: request.vatIdentificationCode,
  whois_opt_in: request.whoisOptIn,
  zip: request.zip,
})

export const marshalRegistrarApiUpdateDomainHostRequest = (
  request: RegistrarApiUpdateDomainHostRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ips: request.ips,
})

export const marshalRegistrarApiUpdateDomainRequest = (
  request: RegistrarApiUpdateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'technical_contact_id',
      value: request.technicalContactId,
    },
    {param: 'technical_contact',
      value: (request.technicalContact !== undefined) ? marshalNewContact(request.technicalContact, defaults)
      : undefined,
    },
  ]),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'owner_contact_id',
      value: request.ownerContactId,
    },
    {param: 'owner_contact',
      value: (request.ownerContact !== undefined) ? marshalNewContact(request.ownerContact, defaults)
      : undefined,
    },
  ]),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'administrative_contact_id',
      value: request.administrativeContactId,
    },
    {param: 'administrative_contact',
      value: (request.administrativeContact !== undefined) ? marshalNewContact(request.administrativeContact, defaults)
      : undefined,
    },
  ]),
})

const marshalNameserver = (
  request: Nameserver,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip: request.ip,
  name: request.name,
})

export const marshalUpdateDNSZoneNameserversRequest = (
  request: UpdateDNSZoneNameserversRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ns:  request.ns.map(elt => marshalNameserver(elt, defaults)),
})

const marshalDomainRecordGeoIPConfigMatch = (
  request: DomainRecordGeoIPConfigMatch,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  continents: request.continents,
  countries: request.countries,
  data: request.data,
})

const marshalDomainRecordViewConfigView = (
  request: DomainRecordViewConfigView,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  subnet: request.subnet,
})

const marshalDomainRecordWeightedConfigWeightedIP = (
  request: DomainRecordWeightedConfigWeightedIP,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip: request.ip,
  weight: request.weight,
})

const marshalDomainRecordGeoIPConfig = (
  request: DomainRecordGeoIPConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default: request.default,
  matches:  request.matches.map(elt => marshalDomainRecordGeoIPConfigMatch(elt, defaults)),
})

const marshalDomainRecordHTTPServiceConfig = (
  request: DomainRecordHTTPServiceConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ips: request.ips,
  must_contain: request.mustContain,
  strategy: request.strategy,
  url: request.url,
  user_agent: request.userAgent,
})

const marshalDomainRecordViewConfig = (
  request: DomainRecordViewConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  views:  request.views.map(elt => marshalDomainRecordViewConfigView(elt, defaults)),
})

const marshalDomainRecordWeightedConfig = (
  request: DomainRecordWeightedConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  weighted_ips:  request.weightedIps.map(elt => marshalDomainRecordWeightedConfigWeightedIP(elt, defaults)),
})

const marshalDomainRecord = (
  request: DomainRecord,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  comment: request.comment,
  data: request.data,
  id: request.id,
  name: request.name,
  priority: request.priority,
  ttl: request.ttl,
  type: request.type,  
  ...resolveOneOf([
    {param: 'geo_ip_config',
      value: (request.geoIpConfig !== undefined) ? marshalDomainRecordGeoIPConfig(request.geoIpConfig, defaults)
      : undefined,
    },
    {param: 'http_service_config',
      value: (request.httpServiceConfig !== undefined) ? marshalDomainRecordHTTPServiceConfig(request.httpServiceConfig, defaults)
      : undefined,
    },
    {param: 'weighted_config',
      value: (request.weightedConfig !== undefined) ? marshalDomainRecordWeightedConfig(request.weightedConfig, defaults)
      : undefined,
    },
    {param: 'view_config',
      value: (request.viewConfig !== undefined) ? marshalDomainRecordViewConfig(request.viewConfig, defaults)
      : undefined,
    },
  ]),
})

const marshalRecordIdentifier = (
  request: RecordIdentifier,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  name: request.name,
  ttl: request.ttl,
  type: request.type,
})

const marshalRecordChangeAdd = (
  request: RecordChangeAdd,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  records:  request.records.map(elt => marshalDomainRecord(elt, defaults)),
})

const marshalRecordChangeClear = (
  request: RecordChangeClear,
  defaults: DefaultValues,
): Record<string, unknown> => ({
})

const marshalRecordChangeDelete = (
  request: RecordChangeDelete,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'id',
      value: request.id,
    },
    {param: 'id_fields',
      value: (request.idFields !== undefined) ? marshalRecordIdentifier(request.idFields, defaults)
      : undefined,
    },
  ]),
})

const marshalRecordChangeSet = (
  request: RecordChangeSet,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  records:  request.records.map(elt => marshalDomainRecord(elt, defaults)),  
  ...resolveOneOf<string | Record<string, unknown>>([
    {param: 'id',
      value: request.id,
    },
    {param: 'id_fields',
      value: (request.idFields !== undefined) ? marshalRecordIdentifier(request.idFields, defaults)
      : undefined,
    },
  ]),
})

const marshalRecordChange = (
  request: RecordChange,
  defaults: DefaultValues,
): Record<string, unknown> => ({  
  ...resolveOneOf([
    {param: 'add',
      value: (request.add !== undefined) ? marshalRecordChangeAdd(request.add, defaults)
      : undefined,
    },
    {param: 'set',
      value: (request.set !== undefined) ? marshalRecordChangeSet(request.set, defaults)
      : undefined,
    },
    {param: 'delete',
      value: (request.delete !== undefined) ? marshalRecordChangeDelete(request.delete, defaults)
      : undefined,
    },
    {param: 'clear',
      value: (request.clear !== undefined) ? marshalRecordChangeClear(request.clear, defaults)
      : undefined,
    },
  ]),
})

export const marshalUpdateDNSZoneRecordsRequest = (
  request: UpdateDNSZoneRecordsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  changes:  request.changes.map(elt => marshalRecordChange(elt, defaults)),
  disallow_new_zone_creation: request.disallowNewZoneCreation,
  return_all_records: request.returnAllRecords,
  serial: request.serial,
})

export const marshalUpdateDNSZoneRequest = (
  request: UpdateDNSZoneRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  new_dns_zone: request.newDnsZone,
  project_id: request.projectId ?? defaults.defaultProjectId,
})
