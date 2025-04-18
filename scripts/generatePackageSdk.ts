import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

type PackageJSON = {
  name: string
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}

// Configuration
const targetPackageJsonPath = './package.json' // Path to the target package.json
const workspaceDirs = ['.'] // Directories to scan, add more if needed
const excludeDirs = ['node_modules', '.git'] // Directories to exclude from scanning

const findPackageJsonFiles = (dir: string, packageJsonFiles = ['']) => {
  try {
    const entries = readdirSync(dir)

    for (const entry of entries) {
      const fullPath = join(dir, entry)

      // Skip excluded directories
      if (excludeDirs.includes(entry)) {
        // continue
      }

      const stat = statSync(fullPath)

      if (stat.isDirectory()) {
        // Recursively search subdirectories
        findPackageJsonFiles(fullPath, packageJsonFiles)
      } else if (entry === 'package.json') {
        // Skip the target package.json itself to avoid circular references
        if (resolve(fullPath) !== resolve(targetPackageJsonPath)) {
          packageJsonFiles.push(fullPath)
        }
      }
    }

    return packageJsonFiles
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err)

    return packageJsonFiles
  }
}

const main = () => {
  try {
    // Read target package.json
    let targetPackageJson: PackageJSON | null
    try {
      const targetPackageJsonContent = readFileSync(
        targetPackageJsonPath,
        'utf8',
      )
      targetPackageJson = JSON.parse(targetPackageJsonContent) as PackageJSON

      // Ensure dependencies and devDependencies exist
      if (!targetPackageJson.dependencies) {
        targetPackageJson.dependencies = {}
      }
      if (!targetPackageJson.devDependencies) {
        targetPackageJson.devDependencies = {}
      }
    } catch (err) {
      console.log('Target package.json not found,')
    }

    // Find all package.json files in workspace
    let packageJsonFiles: string[] = []
    for (const dir of workspaceDirs) {
      packageJsonFiles = findPackageJsonFiles(dir, packageJsonFiles)
    }

    console.log(`Found ${packageJsonFiles.length} package.json files`)

    // Process each package.json file
    for (const packageJsonFile of packageJsonFiles) {
      const content = readFileSync(packageJsonFile, 'utf8')
      const packageJson = JSON.parse(content) as PackageJSON

      if (packageJson.name) {
        console.log(`Adding workspace package: ${packageJson.name}`)

        // Add to dependencies using workspace protocol
        targetPackageJson?.dependencies[packageJson.name] = `workspace:*`
      }
    }

    // Write updated package.json
    writeFileSync(
      targetPackageJsonPath,
      JSON.stringify(targetPackageJson, null, 2),
      'utf8',
    )

    console.log(
      `Successfully updated ${targetPackageJsonPath} with workspace packages`,
    )
  } catch (err) {
    console.error('Error:', err)
  }
}

main()
