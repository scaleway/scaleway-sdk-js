#!/usr/bin/env tsx

/**
 * Organize imports (remove unused, sort/group) for generated TS files only,
 * without applying any formatter or linter rules.
 *
 * Scope: packages_generated/**
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { globby } from 'globby'
import ts from 'typescript'

async function main(): Promise<void> {
  const rootDir = resolve(process.cwd(), 'packages_generated')
  const files = await globby(['**/*.ts'], { cwd: rootDir, absolute: true })
  if (files.length === 0) return

  // Create a LanguageService over the generated files to enable organizeImports
  const fileTextCache = new Map<string, string>()

  for (const file of files) {
    fileTextCache.set(file, readFileSync(file, 'utf8'))
  }

  const compilerOptions: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    skipLibCheck: true,
    allowJs: false,
    resolveJsonModule: true,
    isolatedModules: false,
    declaration: false,
    noEmit: true,
    jsx: ts.JsxEmit.Preserve,
    types: [],
    baseUrl: process.cwd(),
  }

  const servicesHost: ts.LanguageServiceHost = {
    getScriptFileNames: () => Array.from(fileTextCache.keys()),
    getScriptVersion: () => '1',
    getScriptSnapshot: fileName => {
      const text = fileTextCache.get(fileName)
      if (text === undefined) return undefined
      return ts.ScriptSnapshot.fromString(text)
    },
    getCurrentDirectory: () => process.cwd(),
    getCompilationSettings: () => compilerOptions,
    getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
    readFile: fileName => {
      try {
        return readFileSync(fileName, 'utf8')
      } catch {
        return undefined
      }
    },
    fileExists: ts.sys.fileExists,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  }

  const languageService = ts.createLanguageService(
    servicesHost,
    ts.createDocumentRegistry(),
  )

  for (const fileName of fileTextCache.keys()) {
    // Apply organizeImports for the single-file scope
    const changes =
      languageService.organizeImports(
        { type: 'file', fileName },
        { newLineCharacter: '\n' },
      ) ?? []

    if (changes.length === 0) continue

    // Apply text changes in memory
    let text = fileTextCache.get(fileName) as string
    for (const change of changes
      .flatMap(c => c.textChanges)
      .sort((a, b) => b.span.start - a.span.start)) {
      const start = change.span.start
      const end = start + change.span.length
      text = text.slice(0, start) + change.newText + text.slice(end)
    }

    fileTextCache.set(fileName, text)
  }

  // Persist only files that changed
  let updated = 0
  for (const [file, text] of fileTextCache) {
    const original = readFileSync(file, 'utf8')
    if (original !== text) {
      // Ensure output directory exists (should already exist for generated files)
      dirname(file)
      writeFileSync(file, text, 'utf8')
      updated += 1
    }
  }

  // eslint-disable-next-line no-console
  console.log(
    `Organized imports for ${updated} file(s) under packages_generated`,
  )
}

main().catch(error => {
  // eslint-disable-next-line no-console
  console.error(error)
  process.exit(1)
})
