import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'

const PACKAGES_GENERATED_DIR = join(cwd(), 'packages_generated')

const getNextMajorVersion = (currentVersion: string): string => {
  const parts = currentVersion.split('.')
  const major = parseInt(parts[0], 10)
  return `${major + 1}.0.0`
}

const updatePackageVersion = (packagePath: string) => {
  const packageJsonPath = join(packagePath, 'package.json')
  const changelogPath = join(packagePath, 'CHANGELOG.md')

  try {
    // Mettre à jour package.json
    const pkgContent = readFileSync(packageJsonPath, 'utf8')
    const pkg = JSON.parse(pkgContent)

    const currentVersion = pkg.version
    const newVersion = getNextMajorVersion(currentVersion)
    pkg.version = newVersion

    writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n')

    // Mettre à jour CHANGELOG.md
    let changelogContent = readFileSync(changelogPath, 'utf8')

    const changelogEntry = `# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## ${newVersion} (2025-01-XX)

### ⚠ BREAKING CHANGES

- packages are ESM only

### :gear: Features

- publish packages as ESM only

`

    // Insérer après la première ligne "# Change Log" et les lignes suivantes jusqu'à la première version
    const lines = changelogContent.split('\n')
    let insertIndex = 0

    // Trouver où insérer (après les lignes d'en-tête)
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('## ') || lines[i].startsWith('# [')) {
        insertIndex = i
        break
      }
    }

    // Si on trouve une version, insérer avant
    if (insertIndex > 0) {
      const before = lines.slice(0, insertIndex).join('\n')
      const after = lines.slice(insertIndex).join('\n')
      changelogContent = `${before}\n${changelogEntry}${after}`
    } else {
      // Sinon, ajouter à la fin
      changelogContent = changelogContent + '\n' + changelogEntry
    }

    writeFileSync(changelogPath, changelogContent)
    console.log(`Updated ${packagePath}: ${currentVersion} -> ${newVersion}`)
  } catch (error) {
    console.error(`Error updating ${packagePath}:`, error)
  }
}

const main = () => {
  const packages = readdirSync(PACKAGES_GENERATED_DIR)

  for (const pkg of packages) {
    const packagePath = join(PACKAGES_GENERATED_DIR, pkg)
    if (statSync(packagePath).isDirectory()) {
      updatePackageVersion(packagePath)
    }
  }
}

main()
