# Examples

## Project Templates

- [NodeJS](./nodejs-minimal)
- [Serverless Function](./serverless-function-minimal/)

## Snippets

Please find below some examples on how to perform basic operations.

### Instance: create a server and power it on

```ts
import { loadProfileFromConfigurationFile } from '@scaleway/configuration-loader'
import { Instance } from '@scaleway/sdk'
import { createClient } from '@scaleway/sdk-client'

const profile = loadProfileFromConfigurationFile()
const client = createClient(profile)
const api = new Instance.v1.API(client)

// Create a server.
console.log(`Creating server...`)
let server = await api
  .createServer({
    bootType: 'local',
    commercialType: 'DEV1-S',
    enableIpv6: true,
    image: '881d7a33-4cfa-4046-b5cf-c33cb9c62fb6', // ubuntu_focal
    zone: 'fr-par-1',
  })
  .then(res => res.server!)
console.log(`\tCreated, ID=${server.id} ; State=${server.state}`)

// Power on the server.
console.log(`Powering on server...`)
server = await api.serverActionAndWait({
  serverId: server.id,
  action: 'poweron',
})
console.log(`\tPowered ON (now ${server.state})`)
```

### Instance: reboot all the running servers

```ts
import { loadProfileFromConfigurationFile } from '@scaleway/configuration-loader'
import { Instance } from '@scaleway/sdk'
import { createClient } from '@scaleway/sdk-client'

const profile = loadProfileFromConfigurationFile()
const client = createClient(profile)
const api = new Instance.v1.API(client)

// List servers.
console.log(`Listing servers...`)
const servers = await api.listServers().then(res => res.servers!)

// Check how many servers need a reboot.
const serversToReboot = servers.filter(obj => obj.state === 'running')
console.log(`\t${serversToReboot.length}/${servers.length} will be rebooted`)

// Reboot all servers at once.
console.log(
  `Rebooting servers ${serversToReboot.map(obj => obj.id).join(', ')}...`,
)
const updatedServers = await Promise.allSettled(
  serversToReboot.map(obj =>
    api.serverActionAndWait({ serverId: obj.id, action: 'reboot' }),
  ),
)
for (const result of updatedServers) {
  switch (result.status) {
    case 'fulfilled':
      console.log(`\tServer ${result.value.id} rebooted!`)
      break
    case 'rejected':
      console.log(`\tServer failed rebooting`)
      break
  }
}
```
