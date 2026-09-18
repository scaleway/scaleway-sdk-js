import type { LogLevel } from './level-resolver.js'
import { LevelResolver, shouldLog } from './level-resolver.js'
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
  private readonly level: LevelResolver
  public readonly logLevel: LogLevel
  private readonly prefix: string
  private readonly output: typeof console

  public constructor(logLevel: LogLevel, prefix = '', output: typeof console = console) {
    this.logLevel = logLevel
    this.prefix = prefix
    this.output = output
    this.level = LevelResolver[this.logLevel]
  }

  private makeMethod(method: 'debug' | 'info' | 'warn' | 'error') {
    return (message: string) => {
      if (shouldLog(this.level, method)) {
        this.output[method](this.prefix ? `${this.prefix} ${message}` : message)
      }
    }
  }

  public debug = this.makeMethod('debug')

  public error = this.makeMethod('error')

  public info = this.makeMethod('info')

  public warn = this.makeMethod('warn')
}
