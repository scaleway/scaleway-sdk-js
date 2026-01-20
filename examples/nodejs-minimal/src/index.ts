// Correct imports for Scaleway SDK v2.27.0+

import { loadProfileFromConfigurationFile } from '@scaleway/configuration-loader'
import { createAdvancedClient, enableConsoleLogger, withProfile } from '@scaleway/sdk-client'
import { Registryv1 } from '@scaleway/sdk-registry'
import type {ServerResponse } from 'http'
import { createServer } from 'http'


const hostname = '127.0.0.1'
const port = 3000

const { debug: debugLog } = console

const loadedProfile = loadProfileFromConfigurationFile({
  profileName: 'front-console-prod'
})

const client = createAdvancedClient(withProfile({
  ...loadedProfile,
}))
const api = new Registryv1.API(client)


enableConsoleLogger('info')

type Response = ServerResponse

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

const server = createServer(async ({ url, }, response) => {
  // Avoid unwanted call: web browser often calls favicon.ico
  debugLog(url)
  if (!url?.startsWith('/')) return sendError(response, 404, 'Not found')

  const { searchParams } = new URL(`http://${process.env.HOST ?? 'localhost'}${url}`);

  const sequential = searchParams.get('sequential') ? true : false
  const stringConcurrency = searchParams.get('concurrency')
  const concurrency = stringConcurrency ? Number.parseInt(stringConcurrency, 10) : undefined
  const projectId = searchParams.get('projectId') ?? loadedProfile.defaultProjectId

  debugLog({
    sequential,
    concurrency,
    projectId,
  })

  try {
     console.debug('\n-----START NAMESPACES-----\n')
    const ns = await api.listNamespaces({
      pageSize:1,
      projectId,
    }).all({
      sequential: true
    })

    console.debug('\n-----END NAMESPACES-----\n')

    const namespace = ns.find(({ name }) => name === 'shire')

    if (namespace) {
      let consoleImage
      let images = []
        console.debug('\n-----START IMAGES-----\n')
      for await (const image of await api.listImages({
        pageSize:1,
        projectId,
        namespaceId: namespace.id
      }).all({
        concurrency: 4,
      })) {
        if (image.name === 'console') {
          consoleImage = image
          console.debug('image',image)
        }
        images.push(image)
      }

      console.debug('\n-----END IMAGES-----\n')

      if (consoleImage) {

        let tags = []
        for await ( const tagList of await api.listTags({
          page: 1,
          pageSize: 2,
          region: namespace.region,
          imageId: consoleImage.id,
          orderBy: 'created_at_asc',
        }).all({
          concurrency,
        })) {
          console.debug('tag', tagList.updatedAt)
          tags.push(tagList)
        }

          console.debug('tag', tags.length)

        sendJson(response, tags)
        return
      }

      sendJson(response, images)
      return
    }


    sendJson(response, ns)
    return

  } catch (error) {
    console.debug('error',error)
    sendError(response, 500, error)
  }
})

server.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`),
)
