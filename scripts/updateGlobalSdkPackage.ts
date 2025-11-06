import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path, { join } from 'node:path'
import { cwd, exit } from 'node:process'
import { SDKS } from './constants'
import type { PackageJSON } from './types'

// Define paths
const PATHS = {
  GENERATED_PACKAGES_DIR: path.join(cwd(), 'packages_generated'),
}

// Function to read all packages from packages_generated directory
const getGeneratedPackages = (): PackageJSON[] | null => {
  try {
    const packages: PackageJSON[] = []
    const dirs = readdirSync(PATHS.GENERATED_PACKAGES_DIR, {
      withFileTypes: true,
    })

    dirs
      .filter(dirent => dirent.isDirectory())
      .forEach(dirent => {
        const packageJsonPath = join(
          PATHS.GENERATED_PACKAGES_DIR,
          dirent.name,
          'package.json',
        )

        if (existsSync(packageJsonPath)) {
          const packageData = JSON.parse(
            readFileSync(packageJsonPath, 'utf8'),
          ) as PackageJSON

          packages.push({
            name: packageData.name,
            version: packageData.version,
            path: dirent.name,
          })
        }
      })

    return packages
  } catch (error) {
    console.error('Error reading generated packages:', error)

    return null
  }
}

// Function to update the SDK package.json
const updateSdkPackageJson = ({
  pathSdkPackageJson,
  generatedPackages,
}: {
  pathSdkPackageJson: string
  generatedPackages: PackageJSON[]
}) => {
  try {
    const sdkPackageJson = JSON.parse(
      readFileSync(pathSdkPackageJson, 'utf8'),
    ) as PackageJSON

    // If dependencies doesn't exist, create it
    if (!sdkPackageJson.dependencies) {
      sdkPackageJson.dependencies = {}
    }

    // Add all generated packages to dependencies
    generatedPackages.forEach(({ name }) => {
      if (sdkPackageJson.dependencies) {
        sdkPackageJson.dependencies[name] = 'workspace:*'
      }
    })

    // Write the updated package.json
    writeFileSync(
      pathSdkPackageJson,
      JSON.stringify(sdkPackageJson, null, 2) + '\n',
      'utf8',
    )

    console.log(
      `Updated ${pathSdkPackageJson} with ${generatedPackages.length} packages`,
    )

    return true
  } catch (error) {
    console.error('Error updating SDK package.json:', error)

    return false
  }
}

// Function to update the SDK index.js to export all packages
const updateSdkIndex = ({
  generatedPackages,
  sdkIndexPath,
}: {
  generatedPackages: PackageJSON[]
  sdkIndexPath: string
}) => {
  try {
    const header = [
      '// This file was automatically generated. DO NOT EDIT.',
      '// If you have any remark or suggestion do not hesitate to open an issue.',
      '',
    ].join('\n')

    let indexContent = header

    generatedPackages.forEach(pkg => {
      indexContent += `export * from '${pkg.name}'\n`
    })

    writeFileSync(sdkIndexPath, indexContent, 'utf8')
    console.log(
      `Updated ${sdkIndexPath} with exports for ${generatedPackages.length} packages`,
    )

    return true
  } catch (error) {
    console.error('Error updating SDK index.js:', error)

    return false
  }
}

// Main function
const main = () => {
  console.log('Starting SDK package update process...')

  for (const sdk of SDKS) {
    // Get all generated packages
    const generatedPackages = getGeneratedPackages()

    if (!generatedPackages) {
      console.error('No generated packages found. Nothing to update.')

      exit(1)
    }
    if (generatedPackages.length > 0) {
      // Update the SDK package.json
      const packageJsonUpdated = updateSdkPackageJson({
        pathSdkPackageJson: sdk.path,
        generatedPackages,
      })

      // Update the SDK index.js
      const indexUpdated = updateSdkIndex({
        generatedPackages,
        sdkIndexPath: sdk.index,
      })

      if (packageJsonUpdated && indexUpdated) {
        console.log('SDK package successfully updated!')
      } else {
        console.error('Failed to update SDK package')
      }
    } else {
      console.warn('No generated packages found. Nothing to update.')
    }
  }
}

// Run the script
main()
