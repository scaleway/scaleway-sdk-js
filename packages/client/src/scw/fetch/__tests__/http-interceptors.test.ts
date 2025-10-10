import { afterAll, beforeEach, describe, expect, it } from 'vitest'
import { setLogger } from '../../../internal/logger'
import { ConsoleLogger } from '../../../internal/logger/console-logger.js'
import type { LogLevel } from '../../../internal/logger/level-resolver.js'
import {
  logRequest,
  logResponse,
  obfuscateInterceptor,
} from '../http-interceptors.js'

let latestMessage = ''

const makeCallbackConsole = (
  onMessage: (str: string) => void,
): typeof console => ({
  ...console,
  debug: onMessage,
  error: onMessage,
  info: onMessage,
  warn: onMessage,
})

const enableDummyLogger = (logLevel: LogLevel) => {
  setLogger(
    new ConsoleLogger(
      logLevel,
      '',
      makeCallbackConsole(obj => {
        latestMessage = obj
      }),
    ),
  )
}

beforeEach(() => {
  latestMessage = ''
})

afterAll(() => setLogger(new ConsoleLogger('silent')))

describe(`logRequest`, () => {
  const request = new Request('https://api.scaleway.com')

  it(`logs nothing if the level isn't high enough`, async () => {
    enableDummyLogger('warn')
    await logRequest('1')({ request })
    expect(latestMessage).toBe('')
  })

  it(`logs something if the level is high enough`, async () => {
    enableDummyLogger('debug')
    await logRequest('1')({ request })
    expect(
      latestMessage.startsWith('--------------- Scaleway SDK REQUEST 1'),
    ).toBe(true)
  })
})

describe(`logResponse`, () => {
  const response = new Response('output')

  it(`logs nothing if the level isn't high enough`, async () => {
    enableDummyLogger('warn')
    await logResponse('1')({ response })
    expect(latestMessage).toBe('')
  })

  it(`logs something if the level is high enough`, async () => {
    enableDummyLogger('debug')
    await logResponse('1')({ response })
    expect(
      latestMessage.startsWith('--------------- Scaleway SDK RESPONSE 1'),
    ).toBe(true)
  })
})

describe('obfuscateInterceptor', () => {
  const prependInterceptor =
    (preprendValue: string) =>
    ([name, value]: [string, string]): [string, string] => [
      name,
      `${preprendValue}${value}`,
    ]

  it('changes the request headers', async () => {
    const obfRequest = await obfuscateInterceptor(prependInterceptor('obj-'))({
      request: new Request('https://api.scaleway.com', {
        headers: { 'X-Random-Key': 'value' },
      }),
    })

    expect(obfRequest).toBeInstanceOf(Request)
    expect(obfRequest.headers.get('X-Random-Key')).toBe('obj-value')
  })

  it('clones the request without altering the headers', async () => {
    const obfRequest = await obfuscateInterceptor(prependInterceptor('obj-'))({
      request: new Request('https://api.scaleway.com', {
        headers: { 'X-Random-Key': 'value' },
      }),
    })

    expect(obfRequest.clone().headers.get('X-Random-Key')).toBe('obj-value')
  })
})
