/**
 * Profile contains information to help instanciating the Scaleway client.
 *
 * @public
 */
export type Profile = {
  /**
   * You need an access key and a secret key to connect to Scaleway API.
   * Generate your token at the following address: {@link https://console.scaleway.com/project/credentials}
   */
  accessKey?: string
  /**
   * APIURL overrides the API URL of the Scaleway API to the given URL.
   * Change that if you want to direct requests to a different endpoint.
   *
   * @defaultValue `https://api.scaleway.com`
   */
  apiURL?: string
  /**
   * Your organization ID is the identifier of your account inside Scaleway infrastructure.
   */
  defaultOrganizationId?: string
  /**
   * Your project ID is the identifier of the project your resources are attached to.
   */
  defaultProjectId?: string
  /**
   * A region is represented as a geographical area such as France (Paris) or the Netherlands (Amsterdam).
   * It can contain multiple availability zones.
   *
   * Examples: fr-par, nl-ams.
   */
  defaultRegion?: string
  /**
   * A region can be split into many availability zones (AZ).
   * Latency between multiple AZ of the same region are low as they have a common network layer.
   *
   * Examples: fr-par-1, nl-ams-1
   */
  defaultZone?: string
  /**
   * The secret key is the value that can be used to authenticate against the API (the value used in X-Auth-Token HTTP-header).
   * The secret key MUST remain secret and not given to anyone or published online.
   */
  secretKey?: string
}

/** Configuration type. */
export type ConfigurationType = Record<string, Record<string, string>>
/** Parameters to load the all the profiles from the configuration file */
export type AllProfilesFromFileParams = {
  /**
   * The path at which to locate the configuration file.
   *
   * Defaults to the value of the `SCW_CONFIG_PATH` environment variable
   * or `~/.scw/config` otherwise.
   */
  filepath?: string
}

/** Parameters to load the profile from the configuration file */
export type ProfileFromFileParams = AllProfilesFromFileParams & {
  /**
   * Name of the profile to load.
   *
   * @defaultValue `default`
   * */
  profileName?: string
}
