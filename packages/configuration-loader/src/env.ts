/**
 * Environment Key.
 */
export enum EnvironmentKey {
  /** Path to the Scaleway configuration file */
  ScwConfigPath = 'SCW_CONFIG_PATH',
  /** Scaleway access key */
  ScwAccessKey = 'SCW_ACCESS_KEY',
  /**
   * Scaleway secret key
   * @remarks #nosec G101
   */
  ScwSecretKey = 'SCW_SECRET_KEY',
  /** Scaleway API URL */
  ScwAPIURL = 'SCW_API_URL',
  /** Scaleway default organization ID */
  ScwDefaultOrganizationId = 'SCW_DEFAULT_ORGANIZATION_ID',
  /** Scaleway default project ID */
  ScwDefaultProjectId = 'SCW_DEFAULT_PROJECT_ID',
  /** Scaleway default region */
  ScwDefaultRegion = 'SCW_DEFAULT_REGION',
  /** Scaleway default zone */
  ScwDefaultZone = 'SCW_DEFAULT_ZONE',
}
