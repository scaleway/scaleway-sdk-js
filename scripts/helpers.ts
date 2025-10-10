const upperFirst = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1, str.length)

export const snakeToPascal = (str: string) =>
  str
    .split('_')
    .map(s => upperFirst(s.split('/').map(upperFirst).join('/')))
    .join('')

export const unionTocamelCase = (str: string) =>
  str.split('-').map(upperFirst).join('')

export const snakeToSlug = (str: string) => str.split('_').join('-')

export const renderTemplatePackageJson = (
  template: string,
  params: Record<string, string>,
) => {
  console.debug('renderTemplatePackageJson', template, params)
  let packageJson: string
  let result = template
  for (const [key, value] of Object.entries(params)) {
    const placeholder = `{{${key}}}`
    const stringValue =
      typeof value === 'object' ? JSON.stringify(value) : value.toString()
    result = result.replace(new RegExp(placeholder, 'g'), stringValue)
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    packageJson = JSON.parse(result)
  } catch (error) {
    console.error('Error parsing package.json:', error)
    throw error
  }

  return packageJson
}
