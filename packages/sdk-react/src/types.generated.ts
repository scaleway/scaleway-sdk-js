//this file is generated

import type { Accountv3 } from '@scaleway/sdk-account'
import type { Applesiliconv1alpha1 } from '@scaleway/sdk-applesilicon'
import type { AuditTrailv1alpha1 } from '@scaleway/sdk-audit-trail'
import type { Autoscalingv1alpha1 } from '@scaleway/sdk-autoscaling'
import type { Baremetalv1, Baremetalv3 } from '@scaleway/sdk-baremetal'
import type { Billingv2beta1 } from '@scaleway/sdk-billing'
import type { Blockv1, Blockv1alpha1 } from '@scaleway/sdk-block'
import type { Cockpitv1 } from '@scaleway/sdk-cockpit'
import type { Containerv1, Containerv1beta1 } from '@scaleway/sdk-container'
import type { Datalabv1beta1 } from '@scaleway/sdk-datalab'
import type { Datawarehousev1beta1 } from '@scaleway/sdk-datawarehouse'
import type { Dediboxv1 } from '@scaleway/sdk-dedibox'
import type { Domainv2beta1 } from '@scaleway/sdk-domain'
import type { EdgeServicesv1beta1 } from '@scaleway/sdk-edge-services'
import type { EnvironmentalFootprintv1alpha1 } from '@scaleway/sdk-environmental-footprint'
import type { Filev1alpha1 } from '@scaleway/sdk-file'
import type { Flexibleipv1alpha1 } from '@scaleway/sdk-flexibleip'
import type { Functionv1beta1 } from '@scaleway/sdk-function'
import type { Iamv1alpha1 } from '@scaleway/sdk-iam'
import type { Inferencev1, Inferencev1beta1 } from '@scaleway/sdk-inference'
import type { Instancev1 } from '@scaleway/sdk-instance'
import type { Interlinkv1beta1 } from '@scaleway/sdk-interlink'
import type { Iotv1 } from '@scaleway/sdk-iot'
import type { Ipamv1 } from '@scaleway/sdk-ipam'
import type { Jobsv1alpha1, Jobsv1alpha2 } from '@scaleway/sdk-jobs'
import type { K8Sv1 } from '@scaleway/sdk-k8s'
import type { Kafkav1alpha1 } from '@scaleway/sdk-kafka'
import type { KeyManagerv1alpha1 } from '@scaleway/sdk-key-manager'
import type { Lbv1 } from '@scaleway/sdk-lb'
import type { Marketplacev2 } from '@scaleway/sdk-marketplace'
import type { Mnqv1beta1 } from '@scaleway/sdk-mnq'
import type { Mongodbv1, Mongodbv1alpha1 } from '@scaleway/sdk-mongodb'
import type { Partnerv1 } from '@scaleway/sdk-partner'
import type { ProductCatalogv2alpha1 } from '@scaleway/sdk-product-catalog'
import type { Qaasv1alpha1 } from '@scaleway/sdk-qaas'
import type { Rdbv1 } from '@scaleway/sdk-rdb'
import type { Redisv1 } from '@scaleway/sdk-redis'
import type { Registryv1 } from '@scaleway/sdk-registry'
import type { S2SVpnv1alpha1 } from '@scaleway/sdk-s2s-vpn'
import type { Searchdbv1alpha1 } from '@scaleway/sdk-searchdb'
import type { Secretv1beta1 } from '@scaleway/sdk-secret'
import type { ServerlessSqldbv1alpha1 } from '@scaleway/sdk-serverless-sqldb'
import type { Temv1alpha1 } from '@scaleway/sdk-tem'
import type { Vpcv2 } from '@scaleway/sdk-vpc'
import type { Vpcgwv1, Vpcgwv2 } from '@scaleway/sdk-vpcgw'
import type { Webhostingv1 } from '@scaleway/sdk-webhosting'

export type APISdk = {
  accountv3Contract: Accountv3.ContractAPI
  accountv3Project: Accountv3.ProjectAPI
  applesiliconv1alpha1: Applesiliconv1alpha1.API
  applesiliconv1alpha1PrivateNetwork: Applesiliconv1alpha1.PrivateNetworkAPI
  auditTrailv1alpha1: AuditTrailv1alpha1.API
  autoscalingv1alpha1: Autoscalingv1alpha1.API
  baremetalv1: Baremetalv1.API
  baremetalv1PrivateNetwork: Baremetalv1.PrivateNetworkAPI
  baremetalv3PrivateNetwork: Baremetalv3.PrivateNetworkAPI
  billingv2beta1: Billingv2beta1.API
  blockv1: Blockv1.API
  blockv1alpha1: Blockv1alpha1.API
  cockpitv1Global: Cockpitv1.GlobalAPI
  cockpitv1Regional: Cockpitv1.RegionalAPI
  containerv1: Containerv1.API
  containerv1beta1: Containerv1beta1.API
  datalabv1beta1: Datalabv1beta1.API
  datawarehousev1beta1: Datawarehousev1beta1.API
  dediboxv1: Dediboxv1.API
  dediboxv1Billing: Dediboxv1.BillingAPI
  dediboxv1IPv6Block: Dediboxv1.IPv6BlockAPI
  dediboxv1Rpn: Dediboxv1.RpnAPI
  dediboxv1RpnSan: Dediboxv1.RpnSanAPI
  dediboxv1RpnV1: Dediboxv1.RpnV1API
  dediboxv1RpnV2: Dediboxv1.RpnV2API
  domainv2beta1: Domainv2beta1.API
  domainv2beta1Registrar: Domainv2beta1.RegistrarAPI
  domainv2beta1UnauthenticatedRegistrar: Domainv2beta1.UnauthenticatedRegistrarAPI
  edgeServicesv1beta1: EdgeServicesv1beta1.API
  environmentalFootprintv1alpha1User: EnvironmentalFootprintv1alpha1.UserAPI
  filev1alpha1: Filev1alpha1.API
  flexibleipv1alpha1: Flexibleipv1alpha1.API
  functionv1beta1: Functionv1beta1.API
  iamv1alpha1: Iamv1alpha1.API
  inferencev1: Inferencev1.API
  inferencev1beta1: Inferencev1beta1.API
  instancev1: Instancev1.API
  interlinkv1beta1: Interlinkv1beta1.API
  iotv1: Iotv1.API
  ipamv1: Ipamv1.API
  jobsv1alpha1: Jobsv1alpha1.API
  jobsv1alpha2: Jobsv1alpha2.API
  k8Sv1: K8Sv1.API
  kafkav1alpha1: Kafkav1alpha1.API
  keyManagerv1alpha1: KeyManagerv1alpha1.API
  lbv1Zoned: Lbv1.ZonedAPI
  lbv1: Lbv1.API
  marketplacev2: Marketplacev2.API
  mnqv1beta1Nats: Mnqv1beta1.NatsAPI
  mnqv1beta1Sns: Mnqv1beta1.SnsAPI
  mnqv1beta1Sqs: Mnqv1beta1.SqsAPI
  mongodbv1: Mongodbv1.API
  mongodbv1alpha1: Mongodbv1alpha1.API
  partnerv1: Partnerv1.API
  productCatalogv2alpha1PublicCatalog: ProductCatalogv2alpha1.PublicCatalogAPI
  qaasv1alpha1: Qaasv1alpha1.API
  rdbv1: Rdbv1.API
  redisv1: Redisv1.API
  registryv1: Registryv1.API
  s2SVpnv1alpha1: S2SVpnv1alpha1.API
  searchdbv1alpha1: Searchdbv1alpha1.API
  secretv1beta1: Secretv1beta1.API
  serverlessSqldbv1alpha1: ServerlessSqldbv1alpha1.API
  temv1alpha1: Temv1alpha1.API
  vpcv2: Vpcv2.API
  vpcgwv1: Vpcgwv1.API
  vpcgwv2: Vpcgwv2.API
  webhostingv1Backup: Webhostingv1.BackupAPI
  webhostingv1ControlPanel: Webhostingv1.ControlPanelAPI
  webhostingv1Database: Webhostingv1.DatabaseAPI
  webhostingv1Dns: Webhostingv1.DnsAPI
  webhostingv1Offer: Webhostingv1.OfferAPI
  webhostingv1Hosting: Webhostingv1.HostingAPI
  webhostingv1FreeDomain: Webhostingv1.FreeDomainAPI
  webhostingv1FtpAccount: Webhostingv1.FtpAccountAPI
  webhostingv1MailAccount: Webhostingv1.MailAccountAPI
  webhostingv1Website: Webhostingv1.WebsiteAPI
}
