import { ConsoleLogger } from './console-logger.js'
import type { LogLevel } from './level-resolver.js'
import type { Logger } from './logger.js'

let sdkLogger: Logger = new ConsoleLogger('silent')

/**
 * Sets a logger to be used within the SDK.
 *
 * @param logger - The Logger instance
 *
 * @public
 */
export const setLogger = (logger: Readonly<Logger>) => {
  sdkLogger = logger
}

/**
 * Sets the logger to console logger with given logLevel (log is disabled by default).
 *
 * @param logLevel - The Log level (default to 'warn')
 * @param prefix - A Log message prefix (default to 'scaleway-sdk-js:')
 *
 * @public
 */
export const enableConsoleLogger = (
  logLevel: LogLevel = 'warn',
  prefix = 'scaleway-sdk-js:',
) => setLogger(new ConsoleLogger(logLevel, prefix))

/**
 * Returns the active SDK logger.
 *
 * @internal
 */
export const getLogger = (): Readonly<Logger> => sdkLogger
