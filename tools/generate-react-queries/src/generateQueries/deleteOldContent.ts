import { existsSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path/posix'
import { stdout } from 'node:process'

// Delete the files in the `src` folder to avoid keeping non-existent queries.
export const deleteOldContent = ({
  allNamespaces,
  directoryOfSrcFolder,
  generatedPath,
}: {
  allNamespaces: string[]
  directoryOfSrcFolder: string
  generatedPath: string
}) => {
  // Check if directory exists first
  if (!existsSync(directoryOfSrcFolder)) {
    return
  }

  for (const file of readdirSync(join(directoryOfSrcFolder), {
    withFileTypes: true,
  })) {
    // Delete the files in the main directory because we will recreate the index.ts, other files should not be there
    if (file.isFile()) {
      stdout.write(`🗑 Delete ${file.name} for cleaning\n`)
      rmSync(join(directoryOfSrcFolder, file.name), {
        force: true,
      })

      // oxlint-disable-next-line eslint/no-continue
      continue
    }

    // Delete the whole directory if it is not needed anymore
    if (
      !allNamespaces
        .map(namespace => namespace.toLowerCase())
        .includes(file.name)
    ) {
      stdout.write(
        `🗑 Delete ${file.name} folder because not included in namespaces\n`,
      )
      rmSync(join(directoryOfSrcFolder, file.name), {
        force: true,
        recursive: true,
      })
    } else {
      // Delete the gen folder and index.ts in the namespace
      const generatedFolder = join(
        directoryOfSrcFolder,
        file.name,
        generatedPath,
      )
      const indexFile = join(directoryOfSrcFolder, file.name, 'index.ts')
      if (existsSync(generatedFolder)) {
        rmSync(generatedFolder, { force: true, recursive: true })
      }
      if (existsSync(indexFile)) {
        rmSync(indexFile, { force: true })
      }
    }
  }
}
