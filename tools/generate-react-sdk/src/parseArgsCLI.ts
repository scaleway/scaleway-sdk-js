/* eslint-disable no-console */
// Parse CLI arguments

type ParsedArg = { key: string; value: string | boolean; consumedNext: boolean }

function parseSingleArg(arg: string, nextArg: string | undefined): ParsedArg | null {
  if (!arg.startsWith('--')) {
    return null
  }

  const parts = arg.slice(2).split('=')
  const [key] = parts
  // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- parts[1] is guarded by parts.length > 1 but TS does not narrow indexed access
  let value: string | boolean = parts.length > 1 ? (parts[1] as string) : true
  let consumedNext = false

  if (value === true && nextArg !== undefined && !nextArg.startsWith('--')) {
    value = nextArg
    consumedNext = true
  }

  return key !== undefined ? { key, value, consumedNext } : null
}

function applyParsedArg(
  parsed: ParsedArg,
  requiresValueArgs: string[] | undefined,
  cliArgs: Record<string, string | boolean>,
): void {
  // oxlint-disable-next-line typescript/strict-boolean-expressions -- nullable boolean from optional chain
  if (requiresValueArgs?.includes(parsed.key) && parsed.value === true) {
    console.log(`⚠️  Warning: --${parsed.key} requires a value, using default`)
  } else {
    cliArgs[parsed.key] = parsed.value
  }
}

export const parseArgsCLI = ({ requiresValueArgs }: { requiresValueArgs?: string[] }) => {
  const args = process.argv.slice(2)
  const cliArgs: Record<string, string | boolean> = {}

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    const nextArg = i + 1 < args.length ? args[i + 1] : undefined
    const parsed = arg?.startsWith('--') === true ? parseSingleArg(arg, nextArg) : null
    if (!parsed) {
      continue
    }
    if (parsed.consumedNext) {
      i++
    }
    applyParsedArg(parsed, requiresValueArgs, cliArgs)
  }
  return { cliArgs }
}
