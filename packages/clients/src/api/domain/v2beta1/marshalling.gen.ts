// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMapOfObject,
  unmarshalMoney,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  AvailableDomain,
  CheckContactsCompatibilityResponse,
  CheckContactsCompatibilityResponseContactCheckResult,
  ClearDNSZoneRecordsResponse,
  CloneDNSZoneRequest,
  Contact,
  ContactExtensionEU,
  ContactExtensionFR,
  ContactExtensionFRAssociationInfo,
  ContactExtensionFRCodeAuthAfnicInfo,
  ContactExtensionFRDunsInfo,
  ContactExtensionFRIndividualInfo,
  ContactExtensionFRTrademarkInfo,
  ContactExtensionNL,
  ContactQuestion,
  ContactRoles,
  ContactRolesRoles,
  CreateDNSZoneRequest,
  CreateSSLCertificateRequest,
  DNSZone,
  DNSZoneVersion,
  DSRecord,
  DSRecordDigest,
  DSRecordPublicKey,
  DeleteDNSZoneResponse,
  DeleteExternalDomainResponse,
  DeleteSSLCertificateResponse,
  Domain,
  DomainDNSSEC,
  DomainRecord,
  DomainRecordGeoIPConfig,
  DomainRecordGeoIPConfigMatch,
  DomainRecordHTTPServiceConfig,
  DomainRecordViewConfig,
  DomainRecordViewConfigView,
  DomainRecordWeightedConfig,
  DomainRecordWeightedConfigWeightedIP,
  DomainRegistrationStatusExternalDomain,
  DomainRegistrationStatusTransfer,
  DomainSummary,
  GetDNSZoneTsigKeyResponse,
  GetDNSZoneVersionDiffResponse,
  GetDomainAuthCodeResponse,
  Host,
  ImportProviderDNSZoneRequest,
  ImportProviderDNSZoneRequestOnlineV1,
  ImportProviderDNSZoneResponse,
  ImportRawDNSZoneRequest,
  ImportRawDNSZoneRequestAXFRSource,
  ImportRawDNSZoneRequestBindSource,
  ImportRawDNSZoneRequestTsigKey,
  ImportRawDNSZoneResponse,
  ListContactsResponse,
  ListDNSZoneNameserversResponse,
  ListDNSZoneRecordsResponse,
  ListDNSZoneVersionRecordsResponse,
  ListDNSZoneVersionsResponse,
  ListDNSZonesResponse,
  ListDomainHostsResponse,
  ListDomainsResponse,
  ListRenewableDomainsResponse,
  ListSSLCertificatesResponse,
  ListTasksResponse,
  ListTldsResponse,
  Nameserver,
  NewContact,
  OrderResponse,
  RecordChange,
  RecordChangeAdd,
  RecordChangeClear,
  RecordChangeDelete,
  RecordChangeSet,
  RecordIdentifier,
  RefreshDNSZoneRequest,
  RefreshDNSZoneResponse,
  RegisterExternalDomainResponse,
  RegistrarApiBuyDomainsRequest,
  RegistrarApiCheckContactsCompatibilityRequest,
  RegistrarApiCreateDomainHostRequest,
  RegistrarApiEnableDomainDNSSECRequest,
  RegistrarApiRegisterExternalDomainRequest,
  RegistrarApiRenewDomainsRequest,
  RegistrarApiTradeDomainRequest,
  RegistrarApiTransferInDomainRequest,
  RegistrarApiUpdateContactRequest,
  RegistrarApiUpdateDomainHostRequest,
  RegistrarApiUpdateDomainRequest,
  RenewableDomain,
  RestoreDNSZoneVersionResponse,
  SSLCertificate,
  SearchAvailableDomainsResponse,
  Task,
  Tld,
  TldOffer,
  TransferInDomainRequestTransferRequest,
  UpdateContactRequestQuestion,
  UpdateDNSZoneNameserversRequest,
  UpdateDNSZoneNameserversResponse,
  UpdateDNSZoneRecordsRequest,
  UpdateDNSZoneRecordsResponse,
  UpdateDNSZoneRequest,
} from './types.gen'

const unmarshalContactExtensionNL = (data: unknown) => {
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

const unmarshalContactExtensionEU = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionEU' failed as data isn't a dictionary.`,
    )
  }

  return {
    europeanCitizenship: data.european_citizenship,
  } as ContactExtensionEU
}

const unmarshalContactExtensionFRCodeAuthAfnicInfo = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFRCodeAuthAfnicInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    codeAuthAfnic: data.code_auth_afnic,
  } as ContactExtensionFRCodeAuthAfnicInfo
}

const unmarshalContactExtensionFRTrademarkInfo = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFRTrademarkInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    trademarkInpi: data.trademark_inpi,
  } as ContactExtensionFRTrademarkInfo
}

const unmarshalContactExtensionFRAssociationInfo = (data: unknown) => {
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

const unmarshalContactExtensionFRDunsInfo = (data: unknown) => {
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

const unmarshalContactExtensionFRIndividualInfo = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFRIndividualInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    whoisOptIn: data.whois_opt_in,
  } as ContactExtensionFRIndividualInfo
}

const unmarshalContactExtensionFR = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactExtensionFR' failed as data isn't a dictionary.`,
    )
  }

  return {
    associationInfo: data.association_info
      ? unmarshalContactExtensionFRAssociationInfo(data.association_info)
      : undefined,
    codeAuthAfnicInfo: data.code_auth_afnic_info
      ? unmarshalContactExtensionFRCodeAuthAfnicInfo(data.code_auth_afnic_info)
      : undefined,
    dunsInfo: data.duns_info
      ? unmarshalContactExtensionFRDunsInfo(data.duns_info)
      : undefined,
    individualInfo: data.individual_info
      ? unmarshalContactExtensionFRIndividualInfo(data.individual_info)
      : undefined,
    mode: data.mode,
    trademarkInfo: data.trademark_info
      ? unmarshalContactExtensionFRTrademarkInfo(data.trademark_info)
      : undefined,
  } as ContactExtensionFR
}

const unmarshalContactQuestion = (data: unknown) => {
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

export const unmarshalContact = (data: unknown) => {
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
    extensionEu: unmarshalContactExtensionEU(data.extension_eu),
    extensionFr: unmarshalContactExtensionFR(data.extension_fr),
    extensionNl: unmarshalContactExtensionNL(data.extension_nl),
    faxNumber: data.fax_number,
    firstname: data.firstname,
    id: data.id,
    lang: data.lang,
    lastname: data.lastname,
    legalForm: data.legal_form,
    phoneNumber: data.phone_number,
    questions: data.questions
      ? unmarshalArrayOfObject(data.questions, unmarshalContactQuestion)
      : undefined,
    resale: data.resale,
    state: data.state,
    vatIdentificationCode: data.vat_identification_code,
    whoisOptIn: data.whois_opt_in,
    zip: data.zip,
  } as Contact
}

export const unmarshalDNSZone = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DNSZone' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    message: data.message ? data.message : undefined,
    ns: data.ns,
    nsDefault: data.ns_default,
    nsMaster: data.ns_master,
    projectId: data.project_id,
    status: data.status,
    subdomain: data.subdomain,
    updatedAt: unmarshalDate(data.updated_at),
  } as DNSZone
}

export const unmarshalHost = (data: unknown) => {
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

export const unmarshalSSLCertificate = (data: unknown) => {
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

const unmarshalCheckContactsCompatibilityResponseContactCheckResult = (
  data: unknown,
) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckContactsCompatibilityResponseContactCheckResult' failed as data isn't a dictionary.`,
    )
  }

  return {
    compatible: data.compatible,
    errorMessage: data.error_message ? data.error_message : undefined,
  } as CheckContactsCompatibilityResponseContactCheckResult
}

export const unmarshalCheckContactsCompatibilityResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CheckContactsCompatibilityResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    administrativeCheckResult:
      unmarshalCheckContactsCompatibilityResponseContactCheckResult(
        data.administrative_check_result,
      ),
    compatible: data.compatible,
    ownerCheckResult:
      unmarshalCheckContactsCompatibilityResponseContactCheckResult(
        data.owner_check_result,
      ),
    technicalCheckResult:
      unmarshalCheckContactsCompatibilityResponseContactCheckResult(
        data.technical_check_result,
      ),
  } as CheckContactsCompatibilityResponse
}

export const unmarshalClearDNSZoneRecordsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ClearDNSZoneRecordsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {} as ClearDNSZoneRecordsResponse
}

export const unmarshalDeleteDNSZoneResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteDNSZoneResponse' failed as data isn't a dictionary.`,
    )
  }

  return {} as DeleteDNSZoneResponse
}

export const unmarshalDeleteExternalDomainResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteExternalDomainResponse' failed as data isn't a dictionary.`,
    )
  }

  return {} as DeleteExternalDomainResponse
}

export const unmarshalDeleteSSLCertificateResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DeleteSSLCertificateResponse' failed as data isn't a dictionary.`,
    )
  }

  return {} as DeleteSSLCertificateResponse
}

const unmarshalTldOffer = (data: unknown) => {
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

const unmarshalTld = (data: unknown) => {
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

const unmarshalDomainRegistrationStatusTransfer = (data: unknown) => {
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

const unmarshalDomainRegistrationStatusExternalDomain = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRegistrationStatusExternalDomain' failed as data isn't a dictionary.`,
    )
  }

  return {
    validationToken: data.validation_token,
  } as DomainRegistrationStatusExternalDomain
}

const unmarshalDSRecordPublicKey = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DSRecordPublicKey' failed as data isn't a dictionary.`,
    )
  }

  return {
    key: data.key,
  } as DSRecordPublicKey
}

const unmarshalDSRecordDigest = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DSRecordDigest' failed as data isn't a dictionary.`,
    )
  }

  return {
    digest: data.digest,
    publicKey: unmarshalDSRecordPublicKey(data.public_key),
    type: data.type,
  } as DSRecordDigest
}

const unmarshalDSRecord = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DSRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    algorithm: data.algorithm,
    digest: data.digest ? unmarshalDSRecordDigest(data.digest) : undefined,
    keyId: data.key_id,
    publicKey: data.public_key
      ? unmarshalDSRecordPublicKey(data.public_key)
      : undefined,
  } as DSRecord
}

const unmarshalDomainDNSSEC = (data: unknown) => {
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

export const unmarshalDomain = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    administrativeContact: unmarshalContact(data.administrative_contact),
    autoRenewStatus: data.auto_renew_status,
    dnsZones: unmarshalArrayOfObject(data.dns_zones, unmarshalDNSZone),
    dnssec: unmarshalDomainDNSSEC(data.dnssec),
    domain: data.domain,
    eppCode: data.epp_code,
    expiredAt: unmarshalDate(data.expired_at),
    externalDomainRegistrationStatus: data.external_domain_registration_status
      ? unmarshalDomainRegistrationStatusExternalDomain(
          data.external_domain_registration_status,
        )
      : undefined,
    isExternal: data.is_external,
    organizationId: data.organization_id,
    ownerContact: unmarshalContact(data.owner_contact),
    projectId: data.project_id,
    registrar: data.registrar,
    status: data.status,
    technicalContact: unmarshalContact(data.technical_contact),
    tld: unmarshalTld(data.tld),
    transferRegistrationStatus: data.transfer_registration_status
      ? unmarshalDomainRegistrationStatusTransfer(
          data.transfer_registration_status,
        )
      : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as Domain
}

export const unmarshalGetDNSZoneTsigKeyResponse = (data: unknown) => {
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

const unmarshalRecordChangeClear = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChangeClear' failed as data isn't a dictionary.`,
    )
  }

  return {} as RecordChangeClear
}

const unmarshalRecordChangeDelete = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChangeDelete' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id ? data.id : undefined,
    idFields: data.id_fields
      ? unmarshalRecordIdentifier(data.id_fields)
      : undefined,
  } as RecordChangeDelete
}

const unmarshalRecordIdentifier = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordIdentifier' failed as data isn't a dictionary.`,
    )
  }

  return {
    data: data.data ? data.data : undefined,
    name: data.name,
    ttl: data.ttl ? data.ttl : undefined,
    type: data.type,
  } as RecordIdentifier
}

const unmarshalRecordChangeSet = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChangeSet' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id ? data.id : undefined,
    idFields: data.id_fields
      ? unmarshalRecordIdentifier(data.id_fields)
      : undefined,
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as RecordChangeSet
}

const unmarshalDomainRecordViewConfigView = (data: unknown) => {
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

const unmarshalDomainRecordViewConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordViewConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    views: unmarshalArrayOfObject(
      data.views,
      unmarshalDomainRecordViewConfigView,
    ),
  } as DomainRecordViewConfig
}

const unmarshalDomainRecordWeightedConfigWeightedIP = (data: unknown) => {
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

const unmarshalDomainRecordWeightedConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordWeightedConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    weightedIps: unmarshalArrayOfObject(
      data.weighted_ips,
      unmarshalDomainRecordWeightedConfigWeightedIP,
    ),
  } as DomainRecordWeightedConfig
}

const unmarshalDomainRecordHTTPServiceConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordHTTPServiceConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    ips: data.ips,
    mustContain: data.must_contain ? data.must_contain : undefined,
    strategy: data.strategy,
    url: data.url,
    userAgent: data.user_agent ? data.user_agent : undefined,
  } as DomainRecordHTTPServiceConfig
}

const unmarshalDomainRecordGeoIPConfigMatch = (data: unknown) => {
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

const unmarshalDomainRecordGeoIPConfig = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecordGeoIPConfig' failed as data isn't a dictionary.`,
    )
  }

  return {
    default: data.default,
    matches: unmarshalArrayOfObject(
      data.matches,
      unmarshalDomainRecordGeoIPConfigMatch,
    ),
  } as DomainRecordGeoIPConfig
}

const unmarshalDomainRecord = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    comment: data.comment ? data.comment : undefined,
    data: data.data,
    geoIpConfig: data.geo_ip_config
      ? unmarshalDomainRecordGeoIPConfig(data.geo_ip_config)
      : undefined,
    httpServiceConfig: data.http_service_config
      ? unmarshalDomainRecordHTTPServiceConfig(data.http_service_config)
      : undefined,
    id: data.id,
    name: data.name,
    priority: data.priority,
    ttl: data.ttl,
    type: data.type,
    viewConfig: data.view_config
      ? unmarshalDomainRecordViewConfig(data.view_config)
      : undefined,
    weightedConfig: data.weighted_config
      ? unmarshalDomainRecordWeightedConfig(data.weighted_config)
      : undefined,
  } as DomainRecord
}

const unmarshalRecordChangeAdd = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RecordChangeAdd' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as RecordChangeAdd
}

const unmarshalRecordChange = (data: unknown) => {
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

export const unmarshalGetDNSZoneVersionDiffResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDNSZoneVersionDiffResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    changes: unmarshalArrayOfObject(data.changes, unmarshalRecordChange),
  } as GetDNSZoneVersionDiffResponse
}

export const unmarshalGetDomainAuthCodeResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'GetDomainAuthCodeResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    authCode: data.auth_code,
  } as GetDomainAuthCodeResponse
}

export const unmarshalImportProviderDNSZoneResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ImportProviderDNSZoneResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as ImportProviderDNSZoneResponse
}

export const unmarshalImportRawDNSZoneResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ImportRawDNSZoneResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    records: unmarshalArrayOfObject(data.records, unmarshalDomainRecord),
  } as ImportRawDNSZoneResponse
}

const unmarshalContactRolesRoles = (data: unknown) => {
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

const unmarshalContactRoles = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ContactRoles' failed as data isn't a dictionary.`,
    )
  }

  return {
    contact: unmarshalContact(data.contact),
    roles: unmarshalMapOfObject(data.roles, unmarshalContactRolesRoles),
  } as ContactRoles
}

export const unmarshalListContactsResponse = (data: unknown) => {
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

const unmarshalNameserver = (data: unknown) => {
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

export const unmarshalListDNSZoneNameserversResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDNSZoneNameserversResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ns: unmarshalArrayOfObject(data.ns, unmarshalNameserver),
  } as ListDNSZoneNameserversResponse
}

export const unmarshalListDNSZoneRecordsResponse = (data: unknown) => {
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

export const unmarshalListDNSZoneVersionRecordsResponse = (data: unknown) => {
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

const unmarshalDNSZoneVersion = (data: unknown) => {
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

export const unmarshalListDNSZoneVersionsResponse = (data: unknown) => {
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

export const unmarshalListDNSZonesResponse = (data: unknown) => {
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

export const unmarshalListDomainHostsResponse = (data: unknown) => {
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

const unmarshalDomainSummary = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    autoRenewStatus: data.auto_renew_status,
    dnssecStatus: data.dnssec_status,
    domain: data.domain,
    eppCode: data.epp_code,
    expiredAt: unmarshalDate(data.expired_at),
    externalDomainRegistrationStatus: data.external_domain_registration_status
      ? unmarshalDomainRegistrationStatusExternalDomain(
          data.external_domain_registration_status,
        )
      : undefined,
    isExternal: data.is_external,
    organizationId: data.organization_id,
    projectId: data.project_id,
    registrar: data.registrar,
    status: data.status,
    transferRegistrationStatus: data.transfer_registration_status
      ? unmarshalDomainRegistrationStatusTransfer(
          data.transfer_registration_status,
        )
      : undefined,
    updatedAt: unmarshalDate(data.updated_at),
  } as DomainSummary
}

export const unmarshalListDomainsResponse = (data: unknown) => {
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

const unmarshalRenewableDomain = (data: unknown) => {
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
    renewableDurationInYears: data.renewable_duration_in_years
      ? data.renewable_duration_in_years
      : undefined,
    status: data.status,
    tld: unmarshalTld(data.tld),
  } as RenewableDomain
}

export const unmarshalListRenewableDomainsResponse = (data: unknown) => {
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

export const unmarshalListSSLCertificatesResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSSLCertificatesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    certificates: unmarshalArrayOfObject(
      data.certificates,
      unmarshalSSLCertificate,
    ),
    totalCount: data.total_count,
  } as ListSSLCertificatesResponse
}

const unmarshalTask = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Task' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain ? data.domain : undefined,
    id: data.id,
    message: data.message ? data.message : undefined,
    organizationId: data.organization_id,
    projectId: data.project_id,
    startedAt: unmarshalDate(data.started_at),
    status: data.status,
    type: data.type,
    updatedAt: unmarshalDate(data.updated_at),
  } as Task
}

export const unmarshalListTasksResponse = (data: unknown) => {
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

export const unmarshalListTldsResponse = (data: unknown) => {
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

export const unmarshalOrderResponse = (data: unknown) => {
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

export const unmarshalRefreshDNSZoneResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RefreshDNSZoneResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    dnsZones: unmarshalArrayOfObject(data.dns_zones, unmarshalDNSZone),
  } as RefreshDNSZoneResponse
}

export const unmarshalRegisterExternalDomainResponse = (data: unknown) => {
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

export const unmarshalRestoreDNSZoneVersionResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'RestoreDNSZoneVersionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {} as RestoreDNSZoneVersionResponse
}

const unmarshalAvailableDomain = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AvailableDomain' failed as data isn't a dictionary.`,
    )
  }

  return {
    available: data.available,
    domain: data.domain,
    tld: unmarshalTld(data.tld),
  } as AvailableDomain
}

export const unmarshalSearchAvailableDomainsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SearchAvailableDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    availableDomains: unmarshalArrayOfObject(
      data.available_domains,
      unmarshalAvailableDomain,
    ),
  } as SearchAvailableDomainsResponse
}

export const unmarshalUpdateDNSZoneNameserversResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'UpdateDNSZoneNameserversResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ns: unmarshalArrayOfObject(data.ns, unmarshalNameserver),
  } as UpdateDNSZoneNameserversResponse
}

export const unmarshalUpdateDNSZoneRecordsResponse = (data: unknown) => {
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
  project_id: request.projectId,
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
  ...resolveOneOf([{ param: 'online_v1', value: request.onlineV1 }]),
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
  tsig_key: request.tsigKey,
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
    { param: 'axfr_source', value: request.axfrSource },
    { param: 'bind_source', value: request.bindSource },
  ]),
})

export const marshalRefreshDNSZoneRequest = (
  request: RefreshDNSZoneRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  recreate_dns_zone: request.recreateDnsZone,
  recreate_sub_dns_zone: request.recreateSubDnsZone,
})

const marshalContactExtensionNL = (
  request: ContactExtensionNL,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  legal_form: request.legalForm,
  legal_form_registration_number: request.legalFormRegistrationNumber,
})

const marshalContactExtensionEU = (
  request: ContactExtensionEU,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  european_citizenship: request.europeanCitizenship,
})

const marshalContactExtensionFRCodeAuthAfnicInfo = (
  request: ContactExtensionFRCodeAuthAfnicInfo,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  code_auth_afnic: request.codeAuthAfnic,
})

const marshalContactExtensionFRTrademarkInfo = (
  request: ContactExtensionFRTrademarkInfo,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  trademark_inpi: request.trademarkInpi,
})

const marshalContactExtensionFRAssociationInfo = (
  request: ContactExtensionFRAssociationInfo,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  publication_jo: request.publicationJo,
  publication_jo_page: request.publicationJoPage,
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

const marshalContactExtensionFR = (
  request: ContactExtensionFR,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  mode: request.mode,
  ...resolveOneOf([
    { param: 'association_info', value: request.associationInfo },
    { param: 'code_auth_afnic_info', value: request.codeAuthAfnicInfo },
    { param: 'duns_info', value: request.dunsInfo },
    { param: 'individual_info', value: request.individualInfo },
    { param: 'trademark_info', value: request.trademarkInfo },
  ]),
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
  extension_eu: request.extensionEu,
  extension_fr: request.extensionFr,
  extension_nl: request.extensionNl,
  fax_number: request.faxNumber,
  firstname: request.firstname,
  lang: request.lang,
  lastname: request.lastname,
  legal_form: request.legalForm,
  phone_number: request.phoneNumber,
  questions: request.questions,
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
  ...resolveOneOf([
    { param: 'owner_contact', value: request.ownerContact },
    { param: 'owner_contact_id', value: request.ownerContactId },
  ]),
  ...resolveOneOf([
    { param: 'administrative_contact', value: request.administrativeContact },
    {
      param: 'administrative_contact_id',
      value: request.administrativeContactId,
    },
  ]),
  ...resolveOneOf([
    { param: 'technical_contact', value: request.technicalContact },
    { param: 'technical_contact_id', value: request.technicalContactId },
  ]),
})

export const marshalRegistrarApiCheckContactsCompatibilityRequest = (
  request: RegistrarApiCheckContactsCompatibilityRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domains: request.domains,
  tlds: request.tlds,
  ...resolveOneOf([
    { param: 'owner_contact', value: request.ownerContact },
    { param: 'owner_contact_id', value: request.ownerContactId },
  ]),
  ...resolveOneOf([
    { param: 'administrative_contact', value: request.administrativeContact },
    {
      param: 'administrative_contact_id',
      value: request.administrativeContactId,
    },
  ]),
  ...resolveOneOf([
    { param: 'technical_contact', value: request.technicalContact },
    { param: 'technical_contact_id', value: request.technicalContactId },
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
  public_key: request.publicKey,
  type: request.type,
})

const marshalDSRecord = (
  request: DSRecord,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  algorithm: request.algorithm,
  key_id: request.keyId,
  ...resolveOneOf([
    { param: 'digest', value: request.digest },
    { param: 'public_key', value: request.publicKey },
  ]),
})

export const marshalRegistrarApiEnableDomainDNSSECRequest = (
  request: RegistrarApiEnableDomainDNSSECRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ds_record: request.dsRecord,
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

export const marshalRegistrarApiTradeDomainRequest = (
  request: RegistrarApiTradeDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId,
  ...resolveOneOf([
    { param: 'new_owner_contact', value: request.newOwnerContact },
    { param: 'new_owner_contact_id', value: request.newOwnerContactId },
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
  domains: request.domains,
  project_id: request.projectId ?? defaults.defaultProjectId,
  ...resolveOneOf([
    { param: 'owner_contact', value: request.ownerContact },
    { param: 'owner_contact_id', value: request.ownerContactId },
  ]),
  ...resolveOneOf([
    { param: 'administrative_contact', value: request.administrativeContact },
    {
      param: 'administrative_contact_id',
      value: request.administrativeContactId,
    },
  ]),
  ...resolveOneOf([
    { param: 'technical_contact', value: request.technicalContact },
    { param: 'technical_contact_id', value: request.technicalContactId },
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
  extension_eu: request.extensionEu,
  extension_fr: request.extensionFr,
  extension_nl: request.extensionNl,
  fax_number: request.faxNumber,
  lang: request.lang,
  phone_number: request.phoneNumber,
  questions: request.questions,
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
  ...resolveOneOf([
    { param: 'technical_contact', value: request.technicalContact },
    { param: 'technical_contact_id', value: request.technicalContactId },
  ]),
  ...resolveOneOf([
    { param: 'owner_contact', value: request.ownerContact },
    { param: 'owner_contact_id', value: request.ownerContactId },
  ]),
  ...resolveOneOf([
    { param: 'administrative_contact', value: request.administrativeContact },
    {
      param: 'administrative_contact_id',
      value: request.administrativeContactId,
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
  ns: request.ns,
})

const marshalRecordChangeClear = (
  request: RecordChangeClear,
  defaults: DefaultValues,
): Record<string, unknown> => ({})

const marshalRecordChangeDelete = (
  request: RecordChangeDelete,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'id', value: request.id },
    { param: 'id_fields', value: request.idFields },
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

const marshalRecordChangeSet = (
  request: RecordChangeSet,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  records: request.records,
  ...resolveOneOf([
    { param: 'id', value: request.id },
    { param: 'id_fields', value: request.idFields },
  ]),
})

const marshalDomainRecordViewConfigView = (
  request: DomainRecordViewConfigView,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  subnet: request.subnet,
})

const marshalDomainRecordViewConfig = (
  request: DomainRecordViewConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  views: request.views,
})

const marshalDomainRecordWeightedConfigWeightedIP = (
  request: DomainRecordWeightedConfigWeightedIP,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ip: request.ip,
  weight: request.weight,
})

const marshalDomainRecordWeightedConfig = (
  request: DomainRecordWeightedConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  weighted_ips: request.weightedIps,
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

const marshalDomainRecordGeoIPConfigMatch = (
  request: DomainRecordGeoIPConfigMatch,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  continents: request.continents,
  countries: request.countries,
  data: request.data,
})

const marshalDomainRecordGeoIPConfig = (
  request: DomainRecordGeoIPConfig,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  default: request.default,
  matches: request.matches,
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
    { param: 'geo_ip_config', value: request.geoIpConfig },
    { param: 'http_service_config', value: request.httpServiceConfig },
    { param: 'view_config', value: request.viewConfig },
    { param: 'weighted_config', value: request.weightedConfig },
  ]),
})

const marshalRecordChangeAdd = (
  request: RecordChangeAdd,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  records: request.records,
})

const marshalRecordChange = (
  request: RecordChange,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ...resolveOneOf([
    { param: 'add', value: request.add },
    { param: 'clear', value: request.clear },
    { param: 'delete', value: request.delete },
    { param: 'set', value: request.set },
  ]),
})

export const marshalUpdateDNSZoneRecordsRequest = (
  request: UpdateDNSZoneRecordsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  changes: request.changes,
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
