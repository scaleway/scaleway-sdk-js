import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'

const PACKAGES_GENERATED_DIR = join(cwd(), 'packages_generated')

const updatePackageJson = (packagePath: string) => {
  const packageJsonPath = join(packagePath, 'package.json')

  try {
    const content = readFileSync(packageJsonPath, 'utf8')
    const pkg = JSON.parse(content)

    // Mettre à jour les exports pour retirer les références CJS
    if (pkg.exports) {
      if (pkg.exports['.']) {
        delete pkg.exports['.'].require
        delete pkg.exports['.'].import // import est redondant avec default
      }
      if (pkg.exports['./*']) {
        delete pkg.exports['./*'].require
        delete pkg.exports['./*'].import
      }
    }

    writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n')
    console.log(`Updated ${packagePath}`)
  } catch (error) {
    console.error(`Error updating ${packagePath}:`, error)
  }
}

const main = () => {
  const packages = readdirSync(PACKAGES_GENERATED_DIR)

  for (const pkg of packages) {
    const packagePath = join(PACKAGES_GENERATED_DIR, pkg)
    if (statSync(packagePath).isDirectory()) {
      updatePackageJson(packagePath)
    }
  }
}

main()
