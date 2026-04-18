// Parse CLI arguments

export const parseArgsCLI = <T extends string[]>({ requiresValueArgs }: { requiresValueArgs?: T }) => {
  const args = process.argv.slice(2)
  const cliArgs: Record<string, string | boolean> = {}

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg?.startsWith('--')) {
      const parts = arg.slice(2).split('=')
      const key = parts[0]
      let value = parts.length > 1 ? parts[1] : true

      // Check if the next argument is a value for this flag (handles --arg value format)
      if (value === true && i + 1 < args.length && args[i + 1] && !args[i + 1]?.startsWith('--')) {
        value = args[i + 1]
        i++ // Skip the next argument since we've consumed it
      }

      if (key) {
        // For arguments that require values, if no value is provided, skip them or use default
        if (requiresValueArgs?.includes(key) && (value === true || value === undefined)) {
          console.log(`⚠️  Warning: --${key} requires a value, using default`)
          continue
        }
        cliArgs[key] = value as string | boolean
      }
    }
  }
  return { cliArgs }
}
