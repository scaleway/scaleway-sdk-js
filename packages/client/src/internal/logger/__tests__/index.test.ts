import { describe, expect, it, vi } from 'vitest'
import { enableConsoleLogger, getLogger, setLogger } from '..'
import { ConsoleLogger } from '../console-logger.js'
import type { LogLevel } from '../level-resolver.js'

const makeCallbackConsole = (
  onMessage: (str: string) => void,
): typeof console => ({
  ...console,
  debug: onMessage,
  error: onMessage,
  info: onMessage,
  warn: onMessage,
})

const allLogLevels = ['debug', 'info', 'warn', 'error'] as const

const IS_LEVEL_ENOUGH_CASES = [
  {
    base: 'debug',
    tests: [
      {
        expected: true,
        target: 'debug',
      },
      {
        expected: true,
        target: 'info',
      },
      {
        expected: true,
        target: 'warn',
      },
      {
        expected: true,
        target: 'error',
      },
    ],
  },
  {
    base: 'info',
    tests: [
      {
        expected: false,
        target: 'debug',
      },
      {
        expected: true,
        target: 'info',
      },
      {
        expected: true,
        target: 'warn',
      },
      {
        expected: true,
        target: 'error',
      },
    ],
  },
  {
    base: 'warn',
    tests: [
      {
        expected: false,
        target: 'debug',
      },
      {
        expected: false,
        target: 'info',
      },
      {
        expected: true,
        target: 'warn',
      },
      {
        expected: true,
        target: 'error',
      },
    ],
  },
  {
    base: 'error',
    tests: [
      {
        expected: false,
        target: 'debug',
      },
      {
        expected: false,
        target: 'info',
      },
      {
        expected: false,
        target: 'warn',
      },
      {
        expected: true,
        target: 'error',
      },
    ],
  },
  {
    base: 'unknown' as LogLevel,
    tests: [
      {
        expected: false,
        target: 'debug',
      },
      {
        expected: false,
        target: 'info',
      },
      {
        expected: false,
        target: 'warn',
      },
      {
        expected: false,
        target: 'error',
      },
    ],
  },
] as const

describe('ConsoleLogger', () => {
  it('initializes with the asked level', () => {
    const consoleLogger = new ConsoleLogger('info')
    expect(consoleLogger.logLevel).toBe('info')
  })

  it('returns the proper level boolean', () => {
    const log = vi.fn().mockImplementation(() => {})
    const out = makeCallbackConsole(log)
    for (const test of IS_LEVEL_ENOUGH_CASES) {
      const logger = new ConsoleLogger(test.base, '', out)
      setLogger(logger)
      for (const elt of test.tests) {
        log.mockReset()
        logger[elt.target](elt.target) // call target log level
        if (elt.expected) expect(log).toHaveBeenCalledWith(elt.target)
        else expect(log).not.toHaveBeenCalledWith(elt.target)
      }
    }
  })

  it('prints the indicated output', () => {
    const prefix = 'test:'
    let latestMessage = ''
    const logger = new ConsoleLogger(
      'debug',
      prefix,
      makeCallbackConsole(message => {
        latestMessage = message
      }),
    )
    for (const method of allLogLevels) {
      const randomStr = (Math.random() + 1).toString(36).substring(7)
      logger[method](randomStr)
      expect(latestMessage).toBe(`${prefix} ${randomStr}`)
    }
  })

  it('prints no output (as loglevel is silent)', () => {
    let latestMessage = ''
    const logger = new ConsoleLogger(
      'silent',
      'test:',
      makeCallbackConsole(message => {
        latestMessage = message
      }),
    )
    for (const method of allLogLevels) {
      const randomStr = (Math.random() + 1).toString(36).substring(7)
      logger[method](randomStr)
      expect(latestMessage).toBe('')
    }
  })
})

describe('setLogger', () => {
  it(`changes the logger object when called'`, () => {
    const initialLogger = getLogger()
    setLogger(new ConsoleLogger('info'))
    expect(initialLogger).not.toBe(getLogger())
  })

  it(`changes the logLevel when updated`, () => {
    setLogger(new ConsoleLogger('warn'))
    const { logLevel } = getLogger()
    setLogger(new ConsoleLogger('debug'))
    expect(getLogger().logLevel).not.toBe(logLevel)
    expect(getLogger().logLevel).toBe('debug')
  })
})

describe('enableConsoleLogger', () => {
  it(`initializes console logger with warn level by default`, () => {
    setLogger(new ConsoleLogger('silent'))
    expect(getLogger().logLevel).toBe('silent')
    enableConsoleLogger()
    expect(getLogger().logLevel).toBe('warn')
  })

  it(`initializes console logger with given level`, () => {
    enableConsoleLogger('silent')
    expect(getLogger().logLevel).toBe('silent')
    enableConsoleLogger('debug')
    expect(getLogger().logLevel).toBe('debug')
    enableConsoleLogger('info')
    expect(getLogger().logLevel).toBe('info')
    enableConsoleLogger('warn')
    expect(getLogger().logLevel).toBe('warn')
    enableConsoleLogger('error')
    expect(getLogger().logLevel).toBe('error')
  })

  it(`replaces custom logger with new console logger`, () => {
    const customLogger = new ConsoleLogger('error')
    setLogger(customLogger)
    expect(getLogger().logLevel).toBe(customLogger.logLevel)
    enableConsoleLogger('warn')
    expect(getLogger().logLevel).toBe('warn')
    expect(getLogger()).not.toBe(customLogger)
  })
})
