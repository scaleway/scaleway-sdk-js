// Correct imports for Scaleway SDK v2.27.0+

import { loadProfileFromConfigurationFile } from '@scaleway/configuration-loader'
import { Registry } from '@scaleway/sdk'
import { createClient } from '@scaleway/sdk-client'
import * as http from 'node:http'

const hostname = '127.0.0.1'
const port = 3000

const loadedProfile = loadProfileFromConfigurationFile()
const client = createClient(loadedProfile)
const api = new Registry.v1.API(client)

type Response = http.ServerResponse

const sendJson = (response: Response, data: object) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(data))
}

const sendError = (response: Response, status: number, error?: unknown) => {
  const errorMessage = `${
    error instanceof Error ? error.message : String(error)
  }`
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({ error: errorMessage }))
}

const server = http.createServer(async ({ url }, response) => {
  // Avoid unwanted call: web browser often calls favicon.ico
  if (url !== '/') return sendError(response, 404, 'Not found')

  try {
    sendJson(response, await api.listNamespaces().all())
  } catch (error) {
    sendError(response, 500, error)
  }
})

server.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`),
)
