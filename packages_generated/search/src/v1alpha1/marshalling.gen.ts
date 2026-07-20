
import { isJSONObject, unmarshalArrayOfObject, } from '@scaleway/sdk-client'
import type {
  BrmServerInfo,
  ObsDatasourceInfo,
  ObsExporterInfo,
  ServerlessContainersContainerInfo,
  ServerlessFunctionsFunctionInfo,
  ServerlessSqldbBackupInfo,
  VpcPrivateNetworkInfo,
  Resource,
  SearchResourcesResponse,
} from './types.gen.js'

const unmarshalBrmServerInfo = (data: unknown): BrmServerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'BrmServerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    ip: data.ip,
  } as BrmServerInfo
}

const unmarshalObsDatasourceInfo = (data: unknown): ObsDatasourceInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ObsDatasourceInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    type: data.type,
  } as ObsDatasourceInfo
}

const unmarshalObsExporterInfo = (data: unknown): ObsExporterInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ObsExporterInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    destinationType: data.destination_type,
  } as ObsExporterInfo
}

const unmarshalServerlessContainersContainerInfo = (data: unknown): ServerlessContainersContainerInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerlessContainersContainerInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    namespaceId: data.namespace_id,
  } as ServerlessContainersContainerInfo
}

const unmarshalServerlessFunctionsFunctionInfo = (data: unknown): ServerlessFunctionsFunctionInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerlessFunctionsFunctionInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    namespaceId: data.namespace_id,
  } as ServerlessFunctionsFunctionInfo
}

const unmarshalServerlessSqldbBackupInfo = (data: unknown): ServerlessSqldbBackupInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerlessSqldbBackupInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    databaseId: data.database_id,
  } as ServerlessSqldbBackupInfo
}

const unmarshalVpcPrivateNetworkInfo = (data: unknown): VpcPrivateNetworkInfo => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'VpcPrivateNetworkInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    vpcId: data.vpc_id,
  } as VpcPrivateNetworkInfo
}

const unmarshalResource = (data: unknown): Resource => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Resource' failed as data isn't a dictionary.`,
    )
  }

  return {
    baremetalServerInfo: data.baremetal_server_info ? unmarshalBrmServerInfo(data.baremetal_server_info) : undefined,
    global: data.global,
    id: data.id,
    name: data.name,
    obsDatasourceInfo: data.obs_datasource_info ? unmarshalObsDatasourceInfo(data.obs_datasource_info) : undefined,
    obsExporterInfo: data.obs_exporter_info ? unmarshalObsExporterInfo(data.obs_exporter_info) : undefined,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    serverlessContainersContainerInfo: data.serverless_containers_container_info ? unmarshalServerlessContainersContainerInfo(data.serverless_containers_container_info) : undefined,
    serverlessFunctionsFunctionInfo: data.serverless_functions_function_info ? unmarshalServerlessFunctionsFunctionInfo(data.serverless_functions_function_info) : undefined,
    serverlessSqldbBackupInfo: data.serverless_sqldb_backup_info ? unmarshalServerlessSqldbBackupInfo(data.serverless_sqldb_backup_info) : undefined,
    type: data.type,
    vpcPrivateNetworkInfo: data.vpc_private_network_info ? unmarshalVpcPrivateNetworkInfo(data.vpc_private_network_info) : undefined,
    zone: data.zone,
  } as Resource
}

export const unmarshalSearchResourcesResponse = (data: unknown): SearchResourcesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SearchResourcesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    nextPageToken: data.next_page_token,
    resources: unmarshalArrayOfObject(data.resources, unmarshalResource),
  } as SearchResourcesResponse
}
