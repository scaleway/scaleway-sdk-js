// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type GetClusterKubeConfigRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Cluster ID for which to download the kubeconfig. */
  clusterId: string
}
