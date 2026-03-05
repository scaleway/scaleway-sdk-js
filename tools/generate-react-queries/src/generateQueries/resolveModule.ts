import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path/posix'
import type { SourceFile } from 'ts-morph'

// Resolve the referenced file in import/export
export function resolveModule(
  sourceFile: SourceFile,
  moduleSpecifier: string,
): SourceFile | null {
  const currentDir = dirname(sourceFile.getFilePath())
  let resolvedPath = resolve(currentDir, moduleSpecifier.replace('.js', ''))

  // Ajouter les extensions .ts ou .d.ts si pas presente dans le path
  if (!(resolvedPath.endsWith('.ts') || resolvedPath.endsWith('.d.ts'))) {
    if (existsSync(`${resolvedPath}.ts`)) {
      resolvedPath = `${resolvedPath}.ts`
    } else if (existsSync(`${resolvedPath}.d.ts`)) {
      resolvedPath = `${resolvedPath}.d.ts`
    } else {
      return null
    }
  }

  try {
    return (
      sourceFile.getProject().addSourceFileAtPathIfExists(resolvedPath) ?? null
    )
  } catch {
    return null
  }
}
