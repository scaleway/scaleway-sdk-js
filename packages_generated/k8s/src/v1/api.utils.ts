import { API } from './api.gen.js'
import type { GetClusterKubeConfigRequest } from './types.gen.js'

export class K8SUtilsAPI extends API {
  /**
   * Get configuration of a kube cluster.
   *
   * @param request - The request {@link GetClusterKubeConfigRequest}
   * @returns A Promise of Blob
   */
  getClusterKubeConfig = (request: Readonly<GetClusterKubeConfigRequest>) =>
    this._getClusterKubeConfig(request)
}
