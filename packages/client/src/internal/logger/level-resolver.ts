export enum LevelResolver {
  silent = 0,
  error = 1,
  warn = 2,
  info = 3,
  debug = 4,
}

export type LogLevel = keyof typeof LevelResolver

export const shouldLog = (currentLevel: LevelResolver, level: LogLevel) =>
  LevelResolver[level] <= currentLevel
