import type { LogLevel } from './level-resolver'

/**
 * Logger.
 *
 * @public
 */
export interface Logger {
  readonly logLevel: LogLevel
  debug: (message: string) => void
  info: (message: string) => void
  warn: (message: string) => void
  error: (message: string) => void
}
