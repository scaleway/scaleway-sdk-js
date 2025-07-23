import { LevelResolver, shouldLog } from './level-resolver.js'
import type { LogLevel } from './level-resolver.js'
import type { Logger } from './logger.js'

/**
 * A Logger using console output.
 *
 * @param logLevel - The logger level name
 * @param prefix - An optional logger message prefix
 * @param output - The output to print logs, using by default the global console object
 *
 * @internal
 */
export class ConsoleLogger implements Logger {
  private level: LevelResolver

  constructor(
    public readonly logLevel: LogLevel,
    private readonly prefix = '',
    private output: typeof console = console,
  ) {
    this.level = LevelResolver[this.logLevel]
  }

  private makeMethod(method: 'debug' | 'info' | 'warn' | 'error') {
    return (message: string) => {
      if (shouldLog(this.level, method)) {
        this.output[method](this.prefix ? `${this.prefix} ${message}` : message)
      }
    }
  }

  debug = this.makeMethod('debug')

  error = this.makeMethod('error')

  info = this.makeMethod('info')

  warn = this.makeMethod('warn')
}
