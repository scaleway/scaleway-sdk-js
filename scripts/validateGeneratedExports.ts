#!/usr/bin/env tsx

/**
 * Validates and fixes invalid type exports in generated index.gen.ts files.
 * Removes exports that don't exist in the corresponding types.gen.ts file.
 */

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

interface ValidationResult {
  file: string
  removedExports: string[]
  isValid: boolean
}

async function validateExports(indexPath: string): Promise<ValidationResult> {
  const typesPath = indexPath.replace('index.gen.ts', 'types.gen.ts')
  const removedExports: string[] = []

  try {
    // Read index.gen.ts
    const indexContent = readFileSync(indexPath, 'utf8')
    const typesContent = readFileSync(typesPath, 'utf8')

    // Extract exported types from index.gen.ts
    const exportTypeMatch = indexContent.match(/export type \{([^}]+)\} from/)
    if (!exportTypeMatch) {
      return { file: indexPath, removedExports: [], isValid: true }
    }

    const exportedTypes = exportTypeMatch[1]
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)

    // Extract all available types/interfaces from types.gen.ts
    const availableTypes = new Set<string>()
    const typePattern = /export (?:type|interface) (\w+)(?:<| =| extends| \{)/g
    let match: RegExpExecArray | null = typePattern.exec(typesContent)

    while (match !== null) {
      availableTypes.add(match[1])
      match = typePattern.exec(typesContent)
    }

    // Find invalid exports
    const invalidExports: string[] = []
    for (const exportedType of exportedTypes) {
      if (!availableTypes.has(exportedType)) {
        invalidExports.push(exportedType)
      }
    }

    if (invalidExports.length === 0) {
      return { file: indexPath, removedExports: [], isValid: true }
    }

    // Remove invalid exports from index.gen.ts
    let fixedContent = indexContent
    for (const invalidExport of invalidExports) {
      // Remove the invalid export from the list
      const regex = new RegExp(`\\s*${invalidExport},?\\n?`, 'g')
      fixedContent = fixedContent.replace(regex, '')
      removedExports.push(invalidExport)
    }

    // Clean up trailing commas
    fixedContent = fixedContent.replace(/,(\s*})/g, '$1')

    // Write fixed content
    writeFileSync(indexPath, fixedContent, 'utf8')

    return {
      file: indexPath,
      removedExports,
      isValid: false,
    }
  } catch (error) {
    console.error(`Error validating ${indexPath}:`, error)
    return { file: indexPath, removedExports: [], isValid: true }
  }
}

function findIndexFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir)

  for (const file of files) {
    const filePath = join(dir, file)
    const stat = statSync(filePath)

    if (stat.isDirectory()) {
      findIndexFiles(filePath, fileList)
    } else if (file === 'index.gen.ts' && dir.includes('/src/')) {
      fileList.push(filePath)
    }
  }

  return fileList
}

async function main(): Promise<void> {
  const rootDir = process.cwd()
  const packagesGeneratedDir = join(rootDir, 'packages_generated')
  const indexFiles = findIndexFiles(packagesGeneratedDir)

  if (indexFiles.length === 0) {
    console.log('No index.gen.ts files found')
    return
  }

  const results: ValidationResult[] = []
  for (const indexPath of indexFiles) {
    // Skip the root index.gen.ts files (they don't export types from types.gen.ts)
    if (
      indexPath.includes('/src/index.gen.ts') &&
      !indexPath.includes('/src/v')
    ) {
      continue
    }

    const result = await validateExports(indexPath)
    results.push(result)
  }

  const invalidFiles = results.filter(r => !r.isValid)
  const totalRemoved = results.reduce(
    (sum, r) => sum + r.removedExports.length,
    0,
  )

  if (invalidFiles.length > 0) {
    console.log(
      `\n⚠️  Found ${invalidFiles.length} file(s) with invalid exports:`,
    )
    for (const result of invalidFiles) {
      console.log(`  ${result.file}`)
      console.log(`    Removed: ${result.removedExports.join(', ')}`)
    }
    console.log(`\n✅ Fixed ${totalRemoved} invalid export(s)`)
  } else {
    console.log(`✅ All ${results.length} index.gen.ts files are valid`)
  }
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
