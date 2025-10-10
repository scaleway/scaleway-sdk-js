import { loadProfileFromEnvironmentValues } from '@scaleway/configuration-loader'
import { createClient, Errors, Registry } from '@scaleway/sdk'

// Profile will be loade from the variables in your `.env` file.
const loadedProfile = loadProfileFromEnvironmentValues()
const client = createClient(loadedProfile)
const api = new Registry.v1.API(client)

const buildJsonRes = (data: object) => ({
  body: JSON.stringify(data),
  statusCode: 200,
})

const buildErrorRes = (error?: unknown) => ({
  body: JSON.stringify({
    message: `${error instanceof Error ? error.message : String(error)}`,
  }),
  statusCode: error instanceof Errors.ScalewayError ? error.status : 500,
})

export const list = async (event: any, context: any, callback: any) => {
  try {
    return buildJsonRes(await api.listNamespaces().all())
  } catch (error) {
    return buildErrorRes(error)
  }
}
